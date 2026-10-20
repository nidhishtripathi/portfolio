import React, { useState, useEffect } from 'react';
import {
  Send,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
  Server
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { email, location, github, linkedin } = portfolioData.personal;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null); // { type: 'success' | 'error', message: '' }
  const [backendHealth, setBackendHealth] = useState({ checked: false, connected: false });

  // Check backend health on mount
  useEffect(() => {
    const checkApi = async () => {
      try {
        const res = await fetch('/api/health');
        if (res.ok) {
          const data = await res.json();
          setBackendHealth({
            checked: true,
            connected: true,
            database: data.database
          });
        }
      } catch {
        setBackendHealth({ checked: true, connected: false });
      }
    };
    checkApi();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseStatus(null);

    // Frontend validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setResponseStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email, Message).'
      });
      return;
    }

    if (formData.message.trim().length < 10) {
      setResponseStatus({
        type: 'error',
        message: 'Message must be at least 10 characters long.'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Connect to Express backend API route connected to MongoDB Mongoose
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Trigger celebratory confetti effect
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {
          // Canvas confetti fallback
        }

        setResponseStatus({
          type: 'success',
          message: result.message || 'Message sent and stored in MongoDB successfully!'
        });

        // Clear form fields
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setResponseStatus({
          type: 'error',
          message: result.error || 'Server rejected message. Please check input values.'
        });
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setResponseStatus({
        type: 'error',
        message: 'Unable to reach backend server. Please verify Express server is running on port 5000.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <MessageSquare size={14} />
            Get In Touch
          </span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a job opportunity, a project proposal, or simply want to chat about MERN architectures — my inbox is always open.
          </p>
        </div>

        {/* Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'flex-start'
          }}
        >
          {/* Left Column: Direct Contact Info & Live Backend Status */}
          <div>
            <div
              className="glass-card"
              style={{
                padding: '2.25rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                marginBottom: '1.5rem'
              }}
            >
              <h3 style={{ fontSize: '1.45rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Contact Information
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
                Fill out the form or reach out directly through any of the channels below. I normally respond within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(99, 102, 241, 0.15)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email</div>
                    <a
                      href={`mailto:${email}`}
                      style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(6, 182, 212, 0.15)',
                      color: 'var(--accent-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  Connect on Social Platforms:
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <Linkedin size={16} color="#0077b5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Live Backend Connection Indicator */}
            <div
              className="glass-card"
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                border: '1px solid var(--border-color)'
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: backendHealth.connected ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: backendHealth.connected ? '#10b981' : '#ef4444'
                }}
              >
                <Server size={18} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {backendHealth.connected ? 'Backend API & MongoDB Live' : 'Backend Status: Initializing...'}
                </div>
                <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                  Route: <code>POST /api/contact</code> &bull; Mongoose Schema Active
                </div>
              </div>
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: backendHealth.connected ? '#10b981' : '#f59e0b',
                  boxShadow: backendHealth.connected ? '0 0 8px #10b981' : 'none'
                }}
              />
            </div>
          </div>

          {/* Right Column: Functional Form */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)'
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      marginBottom: '0.45rem',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Your Name <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      transition: 'border-color var(--transition-fast)'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      marginBottom: '0.45rem',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Email Address <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      transition: 'border-color var(--transition-fast)'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    marginBottom: '0.45rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  Subject / Project Scope
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="e.g. Job Opportunity / MERN Development"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    transition: 'border-color var(--transition-fast)'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    marginBottom: '0.45rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  Message <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about your project, timeline, or team requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color var(--transition-fast)'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                />
              </div>

              {/* Status Alert Banner */}
              {responseStatus && (
                <div
                  style={{
                    padding: '0.85rem 1.15rem',
                    borderRadius: 'var(--radius-sm)',
                    background: responseStatus.type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                    border: `1px solid ${responseStatus.type === 'success' ? '#10b981' : '#ef4444'}`,
                    color: responseStatus.type === 'success' ? '#10b981' : '#ef4444',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem'
                  }}
                >
                  {responseStatus.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                  <span>{responseStatus.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  marginTop: '0.5rem',
                  opacity: isSubmitting ? 0.75 : 1
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Saving to MongoDB Database...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message (Connects to Express Backend)</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
