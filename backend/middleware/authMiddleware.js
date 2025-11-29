// middleware/authMiddleware.js
const User = require('../models/User');

module.exports = async function requireAuth(req, res, next) {
  try {
    if (!req.session || !req.session.userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // fetch user once and attach to req
    const user = await User.findById(req.session.userId).select('-password').lean();
    if (!user) {
      // session had invalid userId — clear session and force re-login
      try { req.session.destroy(() => {}); } catch (e) {}
      return res.status(401).json({ error: 'Unauthorized' });
    }

    req.user = user; // now routes can read req.user
    return next();
  } catch (err) {
    console.error('Auth middleware error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};
