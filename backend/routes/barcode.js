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
        if (product && product.per100g && product.per100g.calories > 0) {
            console.log(`[Barcode] Local hit for ${code}`);
            return res.json({ source: 'local', food: product });
        }

        // 2. Query OpenFoodFacts
        let offProduct = null;
        try {
            const offRes = await fetch(`https://world.openfoodfacts.org/api/v2/product/${code}.json`, {
                headers: { 'User-Agent': 'MyMacros/1.0' }
            });
            const offData = await offRes.json();
            console.log(`[Barcode] OFF Status for ${code}: ${offData.status} (${typeof offData.status})`);
            if (offData.status == 1) {
                offProduct = mapOFFProduct(offData.product, code);
                console.log(`[Barcode] Mapped OFF product: ${offProduct.name}`);
            } else {
                console.warn(`[Barcode] Product ${code} not found in OFF (status ${offData.status})`);
            }
        } catch (e) {
            console.warn('OFF query failed:', e.message);
        }

        // 3. Decide if we need AI Research
        // If OFF found it but macros are missing (calories < 1 usually means missing), or if OFF didn't find it
        const needsAI = !offProduct || (offProduct.per100g.calories === 0 && offProduct.per100g.protein === 0);

        if (needsAI) {
            console.log(`[Barcode] Triggering AI Research for ${code} (${offProduct?.name || 'Unknown'})...`);
            const aiData = await researchWithAI(code, offProduct?.name);
            
            if (aiData) {
                // Merge OFF info (like image) with AI macros
                const finalProduct = {
                    barcode: code,
                    name: aiData.name || offProduct?.name || 'Unknown Product',
                    brand: aiData.brand || offProduct?.brand || '',
                    imageUrl: offProduct?.imageUrl || '',
                    per100g: {
                        calories: aiData.calories || 0,
                        protein: aiData.protein || 0,
                        carbs: aiData.carbs || 0,
                        fat: aiData.fat || 0,
                        fiber: aiData.fiber || 0
                    },
                    servingSize: parseFloat(aiData.servingSize) || 100,
                    servingLabel: aiData.servingSize || '100g',
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
        res.status(500).json({ error: 'Server error', message: err.message, stack: err.stack });
    }
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

function mapOFFProduct(p, code) {
    const n = p.nutriments || {};
    const cal = n['energy-kcal_100g'] || (n.energy_100g ? n.energy_100g / 4.184 : 0);
    
    return {
        barcode: code,
        name: p.product_name_en || p.product_name || 'Unknown Product',
        brand: p.brands || '',
        imageUrl: p.image_url || p.image_front_url || '',
        per100g: {
            calories: Math.round(cal),
            protein:  Math.round((n.proteins_100g || 0) * 10) / 10,
            carbs:    Math.round((n.carbohydrates_100g || 0) * 10) / 10,
            fat:      Math.round((n.fat_100g || 0) * 10) / 10,
            fiber:    Math.round((n.fiber_100g || 0) * 10) / 10
        },
        servingSize: parseFloat(p.serving_size) || 100,
        servingLabel: p.serving_size || '100g',
        source: 'off'
    };
}

async function researchWithAI(barcode, hintName) {
    const systemPrompt = `You are a nutrition database researcher. Your job is to find accurate nutritional information for packaged food products. 
Return ONLY a valid JSON object with the following fields: 
{ "name": string, "brand": string, "calories": number, "protein": number, "carbs": number, "fat": number, "fiber": number, "servingSize": string }
All macros must be PER 100g. If unsure, estimate based on product type.`;

    const userPrompt = `Research the product with barcode: ${barcode}. ${hintName ? `The product name might be: ${hintName}` : ''}
Provide nutritional values per 100g.`;

    try {
        console.log(`[AI Research] Querying for ${barcode}...`);
        const reply = await queryAI({ systemPrompt, userPrompt });
        console.log(`[AI Research] Raw Reply: ${reply}`);
        const jsonMatch = reply.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            const data = JSON.parse(jsonMatch[0]);
            console.log(`[AI Research] Parsed Data:`, data);
            return data;
        } else {
            console.warn(`[AI Research] No JSON found in reply`);
        }
    } catch (e) {
        console.error('AI Research failed:', e.message);
    }
    return null;
}

module.exports = router;
