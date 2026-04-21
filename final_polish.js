const fs = require('fs');

const finalMapping = {
    'dominos_paneer_makhani': 'paneer_makhani_pizza.png',
    'bk_mutton_whopper': 'mutton_whopper.png',
    'paneer_paratha': 'paneer_paratha.png',
    'oats_high_protein_mb': 'muscleblaze_oats.png',
    
    // Any remaining Pizza Hut / Domino's items getting better Unsplash matches
    'ph_country_feast': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop',
    'ph_cheese_n_corn': 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=800&auto=format&fit=crop',
    'ph_veggie_wonder': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop',
    'ph_farm_villa': 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&auto=format&fit=crop',
    'ph_mushroom_pizza': 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&auto=format&fit=crop',
    'ph_spicy_paneer': 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&auto=format&fit=crop',
    'ph_peri_peri_veg': 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop',
    'ph_chicken_supreme': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop',
    
    'bk_veg_classic': 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop',
    'bk_spicy_veg': 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop',
    'bk_veggie_bean': 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop',
    'bk_spicy_chicken_burger': 'https://images.unsplash.com/photo-1610444583731-9a1c1d09e530?w=800&auto=format&fit=crop',
};

const categoryFallbacks = {
    'pizza': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop',
    'burgers': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop',
    'snacks': 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop',
    'beverages': 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=800&auto=format&fit=crop',
    'generic': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop'
};

let content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');

// Final pass to fill remaining nulls and apply HERO mappings
const idRegex = /(id|"id"):\s*["']([^"']+)["']/g;
let match;
const updates = [];

while ((match = idRegex.exec(content)) !== null) {
    const id = match[2];
    const start = Math.max(0, match.index - 50);
    const end = Math.min(content.length, match.index + 500);
    const block = content.slice(start, end);
    
    const imageMatch = block.match(/(image|"image"):\s*(null|["']([^"']+)["'])/);
    const catMatch = block.match(/(category|"category"):\s*["']([^"']+)["']/);
    
    if (imageMatch) {
        let newImg = null;
        if (finalMapping[id]) {
            newImg = finalMapping[id];
        } else if (imageMatch[2] === 'null') {
            const category = catMatch ? catMatch[2] : 'generic';
            newImg = categoryFallbacks[category] || categoryFallbacks['generic'];
        }
        
        if (newImg) {
            updates.push({ id, newImg, start: match.index });
        }
    }
}

// Work backwards to apply updates
updates.sort((a,b) => b.start - a.start);
for (const update of updates) {
    const startIdx = update.start;
    const endIdx = startIdx + 500;
    const block = content.slice(startIdx, endIdx);
    const imageRegex = /(image|"image"):\s*(null|["']([^"']+)["'])/;
    const newBlock = block.replace(imageRegex, `$1: "${update.newImg}"`);
    content = content.slice(0, startIdx) + newBlock + content.slice(endIdx);
}

fs.writeFileSync('frontend/js/data/foods.js', content);
console.log(`✅ Applied final mappings and filled remaining nulls.`);
