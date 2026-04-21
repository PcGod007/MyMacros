const fs = require('fs');

// The only items we currently have validated AI "Hero" images for.
// We will only map items that clearly match these.
const validatedHeroes = {
    'margherita pizza': 'margherita_pizza.png',
    'cheese pizza': 'margherita_pizza.png',
    'corn pizza': 'corn_cheese_pizza.png',
    'corn and cheese': 'corn_cheese_pizza.png',
    'paneer makhani pizza': 'paneer_makhani_pizza.png',
    
    'veg burger': 'veg_burger.png',
    'veggie burger': 'veg_burger.png',
    'mutton whopper': 'mutton_whopper.png',
    
    'idli': 'idli_plate.png',
    'masala dosa': 'masala_dosa.jpg',
    'plain dosa': 'masala_dosa.jpg',
    'medu vada': 'medu_vada.png',
    'upma': 'upma.png',
    'ven pongal': 'ven_pongal.png',
    'poha': 'poha.png',
    
    'brown rice': 'brown_rice.png',
    'basmati rice': 'brown_rice.png', // Reasonable, both are bowls of rice
    'biryani': 'chicken_biryani.jpg',
    'roti': 'roti.png',
    'chapati': 'roti.png',
    'phulka': 'roti.png',
    'garlic naan': 'garlic_naan.png',
    
    'paneer butter masala': 'paneer_butter_masala.jpg',
    'butter chicken': 'butter_chicken.jpg',
    'dal tadka': 'dal_tadka.jpg',
    
    'muscleblaze high protein oats': 'muscleblaze_oats.png',
    'paneer paratha': 'paneer_paratha.png'
};

let content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');

const idRegex = /(id|"id"):\s*["']([^"']+)["']/g;
let match;
let updates = [];

while ((match = idRegex.exec(content)) !== null) {
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
            const name = nameMatch[2].toLowerCase();
            let matchedImg = null;
            
            // Check for strict match
            for (const key in validatedHeroes) {
                if (name.includes(key)) {
                    matchedImg = validatedHeroes[key];
                    break;
                }
            }

            // Always update/add the image field
            const imageRegex = /(image|"image"):\s*(null|["']([^"']+)["'])/;
            let updatedBlock;
            if (block.match(imageRegex)) {
                updatedBlock = block.replace(imageRegex, `$1: ${matchedImg ? `"${matchedImg}"` : 'null'}`);
            } else {
                const lastBrace = block.lastIndexOf('}');
                updatedBlock = block.slice(0, lastBrace).trim();
                updatedBlock += `, image: ${matchedImg ? `"${matchedImg}"` : 'null'} }`;
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
console.log('✅ CLEAN UP COMPLETE: All items reset. Only accurate AI Hero images remain.');
