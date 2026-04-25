const express = require('express');
const protect = require('../middleware/auth');
const { computeSummary, computeStreak, computeTrends } = require('../services/insightsService');

const router = express.Router();
router.use(protect);

// ─── GET /api/insights/summary?range=7 ───────────────────────────────────────
router.get('/summary', async (req, res) => {
    try {
        const range = Math.min(parseInt(req.query.range) || 7, 365);
        const data = await computeSummary(req.userId, range);
        res.json(data);
    } catch (err) {
        console.error('Insights summary error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── GET /api/insights/streak ────────────────────────────────────────────────
router.get('/streak', async (req, res) => {
    try {
        const data = await computeStreak(req.userId);
        res.json(data);
    } catch (err) {
        console.error('Insights streak error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── GET /api/insights/trends?metric=calories&range=30 ───────────────────────
router.get('/trends', async (req, res) => {
    try {
        const metric = ['calories', 'protein', 'carbs', 'fat', 'fiber'].includes(req.query.metric)
            ? req.query.metric : 'calories';
        const range = Math.min(parseInt(req.query.range) || 30, 365);
        const data = await computeTrends(req.userId, metric, range);
        res.json(data);
    } catch (err) {
        console.error('Insights trends error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
