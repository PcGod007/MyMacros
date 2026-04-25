const express = require('express');
const router = express.Router();
const PackagedFood = require('../models/PackagedFood');
const { queryAI } = require('./ai');

// ─── GET /api/barcode/lookup/:code ───────────────────────────────────────────
router.get('/lookup/:code', async (req, res) => {
    const { code } = req.params;

    try {
        // 1. Check Local DB first
        let product = await PackagedFood.findOne({ barcode: code });
        if (product && product.calories > 0) {
            return res.json({ source: 'local', food: product });
        }

        // 2. Query OpenFoodFacts
        let offProduct = null;
        try {
            const offRes = await fetch(`https://world.openfoodfacts.org/api/v2/product/${code}.json`, {
                headers: { 'User-Agent': 'MyMacros/1.0' },
                signal: AbortSignal.timeout(4000)
            });
            const offData = await offRes.json();
            if (offData.status === 1) {
                offProduct = mapOFFProduct(offData.product, code);
            }
        } catch (e) {
            console.warn('OFF query failed:', e.message);
        }

        // 3. Decide if we need AI Research
        // If OFF found it but macros are missing (all zeros), or if OFF didn't find it at all
        const needsAI = !offProduct || (offProduct.calories === 0 && offProduct.protein === 0);

        if (needsAI) {
            console.log(`[Barcode] Triggering AI Research for ${code}...`);
            const aiProduct = await researchWithAI(code, offProduct?.name);
            
            if (aiProduct) {
                // Merge OFF info (like image) with AI macros if possible
                const finalProduct = {
                    ...offProduct,
                    ...aiProduct,
                    barcode: code,
                    source: 'ai'
                };

                // Save/Update in Local DB
                product = await PackagedFood.findOneAndUpdate(
                    { barcode: code },
                    finalProduct,
                    { upsert: true, new: true }
                );
                
                return res.json({ source: 'ai', food: product });
            }
        }

        // If OFF was okay or AI failed, return OFF or error
        if (offProduct) {
            // Save OFF product if not already there
            product = await PackagedFood.findOneAndUpdate(
                { barcode: code },
                offProduct,
                { upsert: true, new: true }
            );
            return res.json({ source: 'off', food: product });
        }

        res.status(404).json({ error: 'Product not found' });

    } catch (err) {
        console.error('Barcode lookup error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

function mapOFFProduct(p, code) {
    const nut = p.nutriments || {};
    return {
        barcode: code,
        name: p.product_name || 'Unknown Product',
        brand: p.brands || 'Unknown Brand',
        calories: nut['energy-kcal_100g'] || nut['energy-kcal_value'] || 0,
        protein: nut.protein_100g || nut.protein_value || 0,
        carbs: nut.carbohydrates_100g || nut.carbohydrates_value || 0,
        fat: nut.fat_100g || nut.fat_value || 0,
        fiber: nut.fiber_100g || nut.fiber_value || 0,
        imageUrl: p.image_url || p.image_front_url,
        servingSize: p.serving_size || '100g',
        source: 'off'
    };
}

async function researchWithAI(barcode, hintName) {
    const systemPrompt = `You are a nutrition database researcher. Your job is to find accurate nutritional information for packaged food products based on their barcode or name. 
Return ONLY a valid JSON object with the following fields: 
{ "name": string, "brand": string, "calories": number, "protein": number, "carbs": number, "fat": number, "fiber": number, "servingSize": string }
Always provide values PER 100g. If you are unsure, provide your best professional estimate for that category of food.`;

    const userPrompt = `Research the product with barcode: ${barcode}. ${hintName ? `The product name might be: ${hintName}` : ''}
Provide the nutritional values per 100g.`;

    try {
        const reply = await queryAI({ systemPrompt, userPrompt });
        // Extract JSON from reply (in case LLM adds conversational filler)
        const jsonMatch = reply.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
    } catch (e) {
        console.error('AI Research failed:', e.message);
    }
    return null;
}

module.exports = router;
