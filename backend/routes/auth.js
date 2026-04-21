const express = require('express');
const passport = require('../config/passport');
const jwt = require('jsonwebtoken');
const protect = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

const signToken = (id) =>
    jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

// ─── GET /api/auth/google ─────────────────────────────────────────────────────
// Kick off Google OAuth flow
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false
}));

// ─── GET /api/auth/google/callback ───────────────────────────────────────────
// Google redirects here after user approves
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: process.env.FRONTEND_URL + '?error=auth_failed', session: false }),
    (req, res) => {
        const token = signToken(req.user._id);
        const onboarded = !!(req.user.age && req.user.weight && req.user.height);

        // Redirect back to frontend with token in URL hash (not query — keeps it out of server logs)
        const redirectUrl = `${process.env.FRONTEND_URL}?token=${token}&onboarded=${onboarded}`;
        res.redirect(redirectUrl);
    }
);

// ─── GET /api/auth/me ─────────────────────────────────────────────────────────
router.get('/me', protect, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-googleId');
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json({ user });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
