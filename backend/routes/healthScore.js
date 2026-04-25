const express = require('express');
const protect = require('../middleware/auth');
const User = require('../models/User');
const { computeHealthScore, computeHealthScoreHistory } = require('../services/healthScoreService');

const router = express.Router();
router.use(protect);

// ─── GET /api/health-score/today ──────────────────────────────────────────────
router.get('/today', async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('targets').lean();
        if (!user) return res.status(404).json({ error: 'User not found' });

        // Use today's date in user's local timezone (passed via query or default to UTC date)
        const dateStr = req.query.date || new Date().toISOString().split('T')[0];

        const score = await computeHealthScore(req.userId, dateStr, user.targets);
        res.json(score);
    } catch (err) {
        console.error('Health score today error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── GET /api/health-score/history?days=7 ─────────────────────────────────────
router.get('/history', async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('targets').lean();
        if (!user) return res.status(404).json({ error: 'User not found' });

        const days = Math.min(parseInt(req.query.days) || 7, 30);
        const history = await computeHealthScoreHistory(req.userId, user.targets, days);
        res.json({ history });
    } catch (err) {
        console.error('Health score history error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
