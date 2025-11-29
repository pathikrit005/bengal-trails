// routes/user.js
const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/authMiddleware');
const User = require('../models/User');

// GET /api/user/profile (protected)
router.get('/profile', requireAuth, async (req, res) => {
  try {
    const userId = req.session.userId;
    const user = await User.findById(userId).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/user/update (protected) - updates name (example)
router.post('/update', requireAuth, async (req, res) => {
  try {
    const userId = req.session.userId;
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });

    const user = await User.findByIdAndUpdate(userId, { name }, { new: true }).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });

    // keep session user in sync (optional)
    if (req.session?.user) {
      req.session.user.name = user.name;
      req.session.save(err => {
        if (err) console.error('Session save error after user update:', err);
      });
    }

    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
