const express = require('express');
const protect = require('../middleware/auth');

const router = express.Router();
router.use(protect);

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const PRIMARY_MODEL = 'llama-3.3-70b-versatile';
const FALLBACK_MODEL = 'llama-3.1-8b-instant';

// Helper to determine if a question requires the larger model
function isComplexQuestion(msg) {
    if (msg.length > 60) return true;
    const lowerMsg = msg.toLowerCase();
    const complexKeywords = ['plan', 'detailed', 'compare', 'why', 'science', 'explain', 'benefits', 'differences'];
    return complexKeywords.some(kw => lowerMsg.includes(kw));
}

// ─── System prompt ────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are a highly-trained, empathetic nutrition dietitian AI built into MyMacros. Your goal is to provide world-class nutritional guidance specifically tailored to Indian cuisine, lifestyles, and bodies.

Core Expertise:
- Deep knowledge of Indian ingredients, spices, and regional dishes (North, South, East, West).
- Understanding of traditional Ayurvedic principles mixed with modern sports nutrition.
- Knowledge of Indian meal patterns and common dietary restrictions (vegetarianism, Jain, vegan).

Interaction Guidelines:
1. Direct & Actionable: Provide specific food recommendations (e.g., "Add 1 katori of moong dal" instead of "Eat more protein").
2. Formatting: Use Markdown heavily. Use bullet points for lists and **bold** text for important metrics or food names to make it easy to read on a mobile device.
3. Concise: Keep your overall response under 150 words unless the user explicitly asks for a detailed plan.
4. Culturally Aware: Use standard Indian measurements (katori, chapati/roti, glass) instead of ounces or cups.
5. Contextual: If the user's current daily macros/calories are provided in the system context, refer to them directly to give personalized advice.
6. Safety First: Never diagnose or treat medical conditions. End your advice with: "This is general nutrition guidance, not medical advice."`;

// ─── POST /api/ai/chat ────────────────────────────────────────────────────────
router.post('/chat', async (req, res) => {
    try {
        const apiKey = process.env.GROQ_API_KEY;
        if (!apiKey) {
            return res.status(503).json({
                error: 'AI service not configured',
                message: 'GROQ_API_KEY is not set on the server.'
            });
        }

        const { message, context } = req.body;
        if (!message || typeof message !== 'string' || message.trim().length === 0) {
            return res.status(400).json({ error: 'message is required' });
        }

        if (message.length > 500) {
            return res.status(400).json({ error: 'Message too long (max 500 chars)' });
        }

        // Build context string for the AI (anonymous — no PII)
        let contextStr = '';
        if (context) {
            const parts = [];
            if (context.goal) parts.push(`User goal: ${context.goal}`);
            if (context.calories) parts.push(`Today's calories logged: ${Math.round(context.calories)} kcal (target: ${context.target || '?'} kcal)`);
            if (context.protein) parts.push(`Protein today: ${Math.round(context.protein)}g`);
            if (context.carbs) parts.push(`Carbs today: ${Math.round(context.carbs)}g`);
            if (context.fat) parts.push(`Fat today: ${Math.round(context.fat)}g`);
            if (context.fiber) parts.push(`Fiber today: ${Math.round(context.fiber)}g`);
            if (context.weight) parts.push(`Current weight: ${context.weight} kg`);
            if (parts.length) contextStr = '\n\n[User context]\n' + parts.join('\n');
        }

        const messages = [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: message + contextStr }
        ];

        const targetModel = isComplexQuestion(message) ? PRIMARY_MODEL : FALLBACK_MODEL;
        let usedModel = targetModel;

        const makeRequest = async (modelName) => {
            return fetch(GROQ_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: modelName,
                    messages,
                    max_tokens: 350,
                    temperature: 0.65,
                    stream: false
                })
            });
        };

        let groqRes = await makeRequest(targetModel);

        // Fallback logic for rate limits on the primary model
        if (!groqRes.ok && groqRes.status === 429 && targetModel === PRIMARY_MODEL) {
            console.warn('Groq rate limit hit for primary model. Falling back to llama-3.1-8b-instant...');
            usedModel = FALLBACK_MODEL;
            groqRes = await makeRequest(FALLBACK_MODEL);
        }

        if (!groqRes.ok) {
            const errText = await groqRes.text();
            console.error('Groq API error:', groqRes.status, errText);
            return res.status(502).json({ error: 'AI service error', details: groqRes.status });
        }

        const data = await groqRes.json();
        const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';

        res.json({
            reply,
            model: usedModel,
            disclaimer: 'This is general nutrition guidance, not medical advice. Consult a doctor for medical conditions.'
        });

    } catch (err) {
        console.error('AI chat error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Helper for other routes to query AI directly
const queryAI = async ({ systemPrompt, userPrompt, model = FALLBACK_MODEL }) => {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) throw new Error('AI_NOT_CONFIGURED');

    const res = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: model,
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt }
            ],
            max_tokens: 350,
            temperature: 0.5, // Lower temperature for more factual responses
            stream: false
        })
    });

    if (!res.ok) {
        const errText = await res.text();
        throw new Error(`AI_API_ERROR: ${res.status} ${errText}`);
    }

    const data = await res.json();
    return data.choices?.[0]?.message?.content;
};

module.exports = { router, queryAI };

