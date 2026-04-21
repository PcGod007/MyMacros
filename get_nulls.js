const fs = require('fs');

function getRemaining() {
    const content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');
    const idRegex = /(id|"id"):\s*["']([^"']+)["']/g;
    let match;
    const nulls = [];
    
    while ((match = idRegex.exec(content)) !== null) {
        const start = Math.max(0, match.index - 50);
        const end = Math.min(content.length, match.index + 500);
        const block = content.slice(start, end);
        const nameMatch = block.match(/(name|"name"):\s*["']([^"']+)["']/);
        const imageMatch = block.match(/(image|"image"):\s*(null|["']([^"']+)["'])/);
        
        if (nameMatch) {
            if (!imageMatch) {
                nulls.push({ name: nameMatch[2], id: match[2], status: 'missing_key' });
            } else if (imageMatch[2] === 'null') {
                nulls.push({ name: nameMatch[2], id: match[2], status: 'is_null' });
            }
        }
    }
    return nulls;
}

const remaining = getRemaining();
console.log(JSON.stringify(remaining, null, 2));
