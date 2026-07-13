/**
 * MyMacros — Lens Food Identification Route
 * POST /api/lens/identify
 * Accepts a base64 image, runs it through Groq vision, returns identified foods.
 */
const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');

router.use(protect);

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
// Groq supported vision model identifier
const VISION_MODEL = 'llama-3.2-11b-vision-preview';

// ─── POST /api/lens/identify ──────────────────────────────────────────────────
router.post('/identify', async (req, res) => {
    try {
        const apiKey = process.env.GROQ_API_KEY;
        if (!apiKey) {
            return res.status(503).json({ error: 'AI service not configured' });
        }

        const { image } = req.body;
        if (!image || typeof image !== 'string') {
            return res.status(400).json({ error: 'image (base64 data URL) is required' });
        }

        // Safety: cap image size to ~4MB base64
        if (image.length > 5_500_000) {
            return res.status(413).json({ error: 'Image too large. Please try a lower resolution.' });
        }

        const prompt = `You are a professional food recognition AI specializing in Indian and global cuisine.

Analyze the food image carefully and identify ALL distinct food items visible.

Return ONLY a valid JSON array — no explanation, no markdown, no extra text.
Each element must have exactly these fields:
- "name": the food name in plain English or common Indian name (e.g. "Chicken Biryani", "Masala Dosa", "Grilled Chicken Breast", "Plain Rice")
- "estimatedGrams": your best estimate of the portion weight as an integer in grams
- "confidence": your confidence as an integer from 0 to 100

Rules:
- Identify up to 5 food items maximum
- Focus on the main dish and significant side components
- Do NOT list condiments, garnishes, or negligible items
- Use the most specific name you can identify
- If you cannot identify any food clearly, return an empty array []

Example: [{"name":"Chicken Biryani","estimatedGrams":300,"confidence":91},{"name":"Cucumber Raita","estimatedGrams":80,"confidence":85}]`;

        const groqResponse = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: VISION_MODEL,
                messages: [
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'image_url',
                                image_url: {
                                    url: image,
                                    detail: 'auto'
                                }
                            },
                            {
                                type: 'text',
                                text: prompt
                            }
                        ]
                    }
                ],
                max_tokens: 400,
                temperature: 0.1
            })
        });

        if (!groqResponse.ok) {
            const errBody = await groqResponse.text();
            console.error('[Lens] Groq API error:', groqResponse.status, errBody);
            return res.status(502).json({
                error: 'Vision API request failed',
                status: groqResponse.status
            });
        }

        const groqData = await groqResponse.json();
        const rawContent = groqData.choices?.[0]?.message?.content?.trim() || '[]';

        // Parse JSON safely — extract array even if model wraps in backticks/text
        let identified = [];
        try {
            const jsonMatch = rawContent.match(/\[[\s\S]*\]/);
            if (jsonMatch) {
                identified = JSON.parse(jsonMatch[0]);
            }
        } catch (parseErr) {
            console.warn('[Lens] Could not parse AI response as JSON:', rawContent);
            identified = [];
        }

        // Sanitize output
        identified = identified
            .filter(item => item && typeof item.name === 'string' && item.name.trim().length > 0)
            .slice(0, 5)
            .map(item => ({
                name: String(item.name).trim(),
                estimatedGrams: Math.max(10, Math.min(2000, parseInt(item.estimatedGrams) || 100)),
                confidence: Math.max(0, Math.min(100, parseInt(item.confidence) || 70))
            }));

        console.log(`[Lens] Identified ${identified.length} food item(s):`, identified.map(i => i.name).join(', ') || 'none');

        return res.json({ identified });

    } catch (err) {
        console.error('[Lens] Unexpected error in /identify:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
