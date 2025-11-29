// routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) return res.status(400).json({ error: 'fullName, email and password are required' });

    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ error: 'User already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name: fullName, email, password: hashed });
    await user.save();

    // create session - store minimal info
    req.session.userId = user._id;
    req.session.user = { id: user._id, name: user.name, email: user.email };

    // ensure session is saved before responding (helps some setups)
    req.session.save((err) => {
      if (err) {
        console.error('Session save error after signup:', err);
        // still respond success but you may choose to send error
      }
      const userObj = { id: user._id, name: user.name, email: user.email, createdAt: user.createdAt };
      res.status(201).json({ user: userObj });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'email and password are required' });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid credentials' });

    // set session
    req.session.userId = user._id;
    req.session.user = { id: user._id, name: user.name, email: user.email };

    // save session then respond
    req.session.save((err) => {
      if (err) {
        console.error('Session save error after login:', err);
      }
      const userObj = { id: user._id, name: user.name, email: user.email, createdAt: user.createdAt };
      res.json({ user: userObj });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  // destroy session on server
  req.session.destroy(err => {
    if (err) {
      console.error('Session destroy error:', err);
      return res.status(500).json({ error: 'Logout failed' });
    }

    // Clear cookie using same name and safe options used in index.js
    const cookieOptions = {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production'
    };
    res.clearCookie('bengalTrails.sid', cookieOptions);
    res.json({ ok: true });
  });
});

module.exports = router;
