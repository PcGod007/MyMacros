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

// ─── POST /api/insights/inbody-scan ──────────────────────────────────────────
// Accepts base64 image of an InBody report, uses Groq vision to extract metrics
router.post('/inbody-scan', async (req, res) => {
    try {
        const apiKey = process.env.GROQ_API_KEY;
        const { image } = req.body;
        if (!image) {
            return res.status(400).json({ error: 'image base64 is required' });
        }

        if (!apiKey) {
            return res.status(503).json({ error: 'AI service not configured on server' });
        }

        const prompt = `You are a medical OCR specialist analyzing an InBody scan report (e.g. InBody 270/370/570).
Extract ALL biometric metrics visible in the scan sheet.
Return ONLY valid JSON matching this structure:
{
  "model": "InBody 270",
  "testDate": "YYYY-MM-DD",
  "weight": 81.7,
  "smm": 35.0,
  "bfm": 20.0,
  "bmi": 25.8,
  "pbf": 24.5,
  "score": 73,
  "bmr": 1703,
  "visceralFat": 9,
  "water": 45.1,
  "protein": 12.3,
  "minerals": 4.34,
  "fatFreeMass": 61.7,
  "waistHipRatio": 1.04
}`;

        const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.2-11b-vision-preview',
                messages: [{
                    role: 'user',
                    content: [
                        { type: 'image_url', image_url: { url: image, detail: 'auto' } },
                        { type: 'text', text: prompt }
                    ]
                }],
                max_tokens: 500,
                temperature: 0.1
            })
        });

        if (!groqRes.ok) {
            return res.status(502).json({ error: 'Vision processing failed' });
        }

        const data = await groqRes.json();
        const content = data.choices?.[0]?.message?.content || '{}';
        const match = content.match(/\{[\s\S]*\}/);
        const parsed = match ? JSON.parse(match[0]) : {};
        res.json(parsed);
    } catch (err) {
        console.error('InBody vision scan error:', err);
        res.status(500).json({ error: 'Failed to parse scan image' });
    }
});

module.exports = router;
