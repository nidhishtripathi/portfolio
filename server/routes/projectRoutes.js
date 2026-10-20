const express = require('express');
const router = express.Router();
const projects = require('../data/projectsData');

// @route   GET /api/projects
// @desc    Get all projects with optional category filter
// @access  Public
router.get('/', (req, res) => {
  const { category, search } = req.query;
  let filtered = [...projects];

  if (category && category !== 'All') {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase() || p.tags.some((t) => t.toLowerCase() === category.toLowerCase())
    );
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  res.json({
    success: true,
    count: filtered.length,
    data: filtered
  });
});

// @route   GET /api/projects/:id
// @desc    Get single project
// @access  Public
router.get('/:id', (req, res) => {
  const project = projects.find((p) => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ success: false, message: 'Project not found' });
  }
  res.json({ success: true, data: project });
});

module.exports = router;
