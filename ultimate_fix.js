const fs = require('fs');

const finalMapping = {
    'dominos_paneer_makhani': 'paneer_makhani_pizza.png',
    'bk_mutton_whopper': 'mutton_whopper.png',
    'paneer_paratha': 'paneer_paratha.png',
    'oats_high_protein_mb': 'muscleblaze_oats.png',
    'ph_country_feast': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop',
    'ph_cheese_n_corn': 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=800&auto=format&fit=crop'
};

const categoryFallbacks = {
    'pizza': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop',
    'burgers': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop',
    'snacks': 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop',
    'beverages': 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=800&auto=format&fit=crop',
    'curries': 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&auto=format&fit=crop',
    'generic': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop'
};

let content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');

// Use a more aggressive approach: find every food object { ... id: "X" ... }
// and make sure it has an image property.
const idRegex = /(id|"id"):\s*["']([^"']+)["']/g;
let match;
let updates = [];

while ((match = idRegex.exec(content)) !== null) {
    const id = match[2];
    const startIdx = match.index;
    
    // Find start/end of object
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
        const imageMatch = block.match(/(image|"image"):\s*(null|["']([^"']+)["'])/);
        const catMatch = block.match(/(category|"category"):\s*["']([^"']+)["']/);
        const category = catMatch ? catMatch[2] : 'generic';
        
        let newImg = finalMapping[id] || (imageMatch ? (imageMatch[2] === 'null' ? null : imageMatch[3]) : null);
        
        // If still no specific image, use category fallback
        if (!newImg || newImg.includes('photo-1516714435131-44d6b64dc6a2')) {
            newImg = finalMapping[id] || categoryFallbacks[category] || categoryFallbacks['generic'];
        }
        
        // Construct updated block
        let updatedBlock;
        if (imageMatch) {
            updatedBlock = block.replace(/(image|"image"):\s*(null|["']([^"']+)["'])/, `$1: "${newImg}"`);
        } else {
            // Insert before the LAST closing brace
            const lastBrace = block.lastIndexOf('}');
            updatedBlock = block.slice(0, lastBrace).trim();
            if (updatedBlock.endsWith(',')) updatedBlock += ` image: "${newImg}" }`;
            else updatedBlock += `, image: "${newImg}" }`;
        }
        
        updates.push({ start: openBracePos, end: closeBracePos + 1, block: updatedBlock });
    }
}

// Apply updates backwards
updates.sort((a,b) => b.start - a.start);
for (const u of updates) {
    content = content.slice(0, u.start) + u.block + content.slice(u.end);
}

fs.writeFileSync('frontend/js/data/foods.js', content);
console.log('✅ Final image injection completed for all food items.');
