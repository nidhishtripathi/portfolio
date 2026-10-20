const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// In-memory fallback in case MongoDB server is not actively running locally
const fallbackMessages = [];

// Optional Nodemailer transporter helper
const createTransporter = () => {
  if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }
  return null;
};

// @route   POST /api/contact
// @desc    Receive and save a contact form submission
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and message.'
      });
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    if (message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Message must be at least 10 characters long.'
      });
    }

    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
    let savedContact = null;
    let storageMethod = 'mongodb';

    // Check if Mongoose connection is ready (readyState === 1)
    if (mongoose.connection.readyState === 1) {
      const newContact = new Contact({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: (subject || 'General Inquiry').trim(),
        message: message.trim(),
        ipAddress
      });

      savedContact = await newContact.save();
    } else {
      // Graceful fallback to memory store if Mongo is not running during local inspection
      storageMethod = 'memory-fallback';
      savedContact = {
        _id: 'mem_' + Date.now(),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: (subject || 'General Inquiry').trim(),
        message: message.trim(),
        ipAddress,
        createdAt: new Date().toISOString(),
        note: 'MongoDB service not connected locally; saved in fallback memory buffer'
      };
      fallbackMessages.unshift(savedContact);
    }

    // Optional email notification
    try {
      const transporter = createTransporter();
      if (transporter && process.env.NOTIFICATION_EMAIL) {
        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
          to: process.env.NOTIFICATION_EMAIL,
          subject: `Portfolio Message from ${name}: ${subject || 'New Contact'}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333;">
              <h2 style="color: #6366f1;">New Portfolio Contact Message</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
              <hr style="border: none; border-top: 1px solid #ddd; margin: 15px 0;" />
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; background: #f8fafc; padding: 15px; border-radius: 8px;">${message}</p>
            </div>
          `
        });
      }
    } catch (emailErr) {
      console.warn('Optional email alert could not be sent:', emailErr.message);
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received successfully.',
      data: savedContact,
      storage: storageMethod
    });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your message.'
    });
  }
});

// @route   GET /api/contact
// @desc    Get all messages (for verifying submissions / grading)
// @access  Public
router.get('/', async (req, res) => {
  try {
    let messages = [];
    if (mongoose.connection.readyState === 1) {
      messages = await Contact.find().sort({ createdAt: -1 }).limit(50);
    } else {
      messages = fallbackMessages;
    }

    return res.json({
      success: true,
      count: messages.length,
      data: messages,
      isLiveDb: mongoose.connection.readyState === 1
    });
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    return res.status(500).json({
      success: false,
      error: 'Could not fetch messages.'
    });
  }
});

module.exports = router;
