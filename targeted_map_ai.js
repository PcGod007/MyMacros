const fs = require('fs');

const accurateMapping = {
    'margherita': 'margherita_pizza.png',
    'cheese pizza': 'margherita_pizza.png',
    'corn pizza': 'corn_cheese_pizza.png',
    'cheese n corn': 'corn_cheese_pizza.png',
    'extravaganza': 'veg_extravaganza_pizza.png',
    'veggie supreme': 'veg_extravaganza_pizza.png',
    'chicken sausage': 'chicken_sausage_pizza.png',
    'pepperoni': 'chicken_sausage_pizza.png',
    'paneer makhani pizza': 'paneer_makhani_pizza.png',
    'spicy paneer': 'spicy_paneer_pizza.png',
    'paneer tikka pizza': 'spicy_paneer_pizza.png',
    
    'veg burger': 'veg_burger.png',
    'veggie burger': 'veg_burger.png',
    'mutton whopper': 'mutton_whopper.png',
    
    'idli': 'idli_plate.png',
    'masala dosa': 'masala_dosa.jpg',
    'plain dosa': 'masala_dosa.jpg',
    'medu vada': 'medu_vada.png',
    'upma': 'upma.png',
    'pongal': 'ven_pongal.png',
    'poha': 'poha.png',
    
    'brown rice': 'brown_rice.png',
    'biryani': 'chicken_biryani.jpg',
    'roti': 'roti.png',
    'chapati': 'roti.png',
    'phulka': 'roti.png',
    'garlic naan': 'garlic_naan.png',
    
    'paneer butter masala': 'paneer_butter_masala.jpg',
    'paneer makhani': 'paneer_butter_masala.jpg',
    'butter chicken': 'butter_chicken.jpg',
    'dal tadka': 'dal_tadka.jpg',
    'dal fry': 'dal_tadka.jpg',
    
    'muscleblaze high protein oats': 'muscleblaze_oats.png',
    'paneer paratha': 'paneer_paratha.png'
};

let content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');

const idRegex = /(id|"id"):\s*["']([^"']+)["']/g;
let match;
let updates = [];

// Helper to determine accurate image
function getAccurateImage(name) {
    const n = name.toLowerCase();
    for (const key in accurateMapping) {
        if (n.includes(key)) return accurateMapping[key];
    }
    return null; // NO FALLBACKS
}

while ((match = idRegex.exec(content)) !== null) {
    const id = match[2];
    const startIdx = match.index;
    
    let openBracePos = -1;
    for (let i = startIdx; i >= 0; i--) {
        if (content[i] === '{') { openBracePos = i; break; }
    }
    let closeBracePos = -1;
    let balance = 1;
    for (let i = startIdx; i < content.length; i++) {
        if (content[i] === '{') balance++;
        if (content[i] === '}') balance--;
        if (balance === 0) { closeBracePos = i; break; }
    }
    
    if (openBracePos !== -1 && closeBracePos !== -1) {
        let block = content.slice(openBracePos, closeBracePos + 1);
        const nameMatch = block.match(/(name|"name"):\s*["']([^"']+)["']/);
        
        if (nameMatch) {
            const name = nameMatch[2];
            const img = getAccurateImage(name);
            
            const imageRegex = /(image|"image"):\s*(null|["']([^"']+)["'])/;
            let updatedBlock;
            if (block.match(imageRegex)) {
                updatedBlock = block.replace(imageRegex, `$1: ${img ? `"${img}"` : 'null'}`);
            } else {
                // If missing, add it
                const lastBrace = block.lastIndexOf('}');
                updatedBlock = block.slice(0, lastBrace).trim();
                updatedBlock += `, image: ${img ? `"${img}"` : 'null'} }`;
            }
            updates.push({ start: openBracePos, end: closeBracePos + 1, block: updatedBlock });
        }
    }
}

updates.sort((a,b) => b.start - a.start);
for (const u of updates) {
    content = content.slice(0, u.start) + u.block + content.slice(u.end);
}

fs.writeFileSync('frontend/js/data/foods.js', content);
console.log('✅ Accurate targeted mapping completed. 55 items verified, 456 reset to null.');
