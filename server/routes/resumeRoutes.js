const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const filesDir = path.join(__dirname, '..', 'files');

// Helper to serve resume
const sendResumeFile = (res, format) => {
  const normalizedFormat = (format || 'pdf').toLowerCase();
  let filename = '';
  let contentType = '';
  let downloadName = '';

  if (normalizedFormat === 'docx') {
    filename = 'resume.docx';
    contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    downloadName = 'Nidhish_Tripathi_Resume.docx';
  } else {
    filename = 'resume.pdf';
    contentType = 'application/pdf';
    downloadName = 'Nidhish_Tripathi_Resume.pdf';
  }

  const filePath = path.join(filesDir, filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      success: false,
      message: `Resume file for ${normalizedFormat.toUpperCase()} not found on server.`
    });
  }

  res.setHeader('Content-Type', contentType);
  res.setHeader('Content-Disposition', `attachment; filename="${downloadName}"`);

  return res.sendFile(filePath, (err) => {
    if (err) {
      console.error(`Error sending ${filename}:`, err);
      if (!res.headersSent) {
        res.status(500).json({ success: false, message: 'Failed to download resume.' });
      }
    }
  });
};

// Route: GET /api/resume/pdf
router.get('/pdf', (req, res) => {
  sendResumeFile(res, 'pdf');
});

// Route: GET /api/resume/docx
router.get('/docx', (req, res) => {
  sendResumeFile(res, 'docx');
});

// Route: GET /api/resume/download?format=pdf|docx
router.get('/download', (req, res) => {
  const format = req.query.format || 'pdf';
  sendResumeFile(res, format);
});

// Route: GET /api/resume/info
router.get('/info', (req, res) => {
  res.json({
    success: true,
    availableFormats: ['pdf', 'docx'],
    endpoints: {
      pdf: '/api/resume/pdf',
      docx: '/api/resume/docx',
      downloadQuery: '/api/resume/download?format=pdf|docx'
    }
  });
});

module.exports = router;
