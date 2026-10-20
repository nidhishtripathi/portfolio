const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio_db';

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from files directory (for resume downloads)
app.use('/files', express.static(path.join(__dirname, 'files')));

// Database Connection with graceful handling
let isDbConnected = false;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 4000
    });
    isDbConnected = true;
    console.log(`✅ MongoDB Connected Successfully: ${mongoose.connection.host}`);
  } catch (err) {
    isDbConnected = false;
    console.warn(`⚠️ MongoDB connection warning: ${err.message}`);
    console.warn('ℹ️ Running with in-memory fallback for local preview without a running mongod service.');
  }
};

connectDB();

mongoose.connection.on('disconnected', () => {
  isDbConnected = false;
  console.log('MongoDB disconnected');
});

// Routes
const contactRoutes = require('./routes/contactRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const projectRoutes = require('./routes/projectRoutes');

app.use('/api/contact', contactRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/projects', projectRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    database: isDbConnected ? 'connected' : 'disconnected (fallback memory active)',
    server: 'Node.js + Express REST API',
    version: '1.0.0'
  });
});

// Root API Welcome route
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the MERN Portfolio API',
    endpoints: {
      health: '/api/health',
      contact: '/api/contact (POST/GET)',
      resumeDownloadPdf: '/api/resume/pdf',
      resumeDownloadDocx: '/api/resume/docx',
      resumeQuery: '/api/resume/download?format=pdf|docx',
      projects: '/api/projects'
    }
  });
});

// In production, serve the client build if available
if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, '..', 'client', 'dist');
  app.use(express.static(clientBuildPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

// Global 404 handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ success: false, error: 'API endpoint not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    error: err.message || 'Internal Server Error'
  });
});

const server = app.listen(PORT, () => {
  console.log(`\n🚀 Portfolio backend server running on http://localhost:${PORT}`);
  console.log(`📄 Resume PDF endpoint:   http://localhost:${PORT}/api/resume/pdf`);
  console.log(`📝 Resume DOCX endpoint:  http://localhost:${PORT}/api/resume/docx`);
  console.log(`📬 Contact endpoint:      http://localhost:${PORT}/api/contact`);
  console.log(`🏥 Health check:          http://localhost:${PORT}/api/health\n`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n❌ Port ${PORT} is already in use.`);
    console.error(`   Another instance of this server (or another app) is listening on that port.`);
    console.error(`\n   To fix this, run one of the following:\n`);
    console.error(`   Windows PowerShell:`);
    console.error(`     Stop-Process -Id (Get-NetTCPConnection -LocalPort ${PORT}).OwningProcess -Force\n`);
    console.error(`   Or change the PORT in your server/.env file to a free port (e.g. PORT=5001)\n`);
    process.exit(1);
  } else {
    console.error('Unexpected server error:', err);
    process.exit(1);
  }
});
