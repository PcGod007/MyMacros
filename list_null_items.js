const fs = require('fs');

function getNullItems() {
    const content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');
    const idRegex = /(id|"id"):\s*["']([^"']+)["']/g;
    let match;
    const nullItems = [];
    
    while ((match = idRegex.exec(content)) !== null) {
        const id = match[2];
        const start = Math.max(0, match.index - 50);
        const end = Math.min(content.length, match.index + 500);
        const block = content.slice(start, end);
        const nameMatch = block.match(/(name|"name"):\s*["']([^"']+)["']/);
        const catMatch = block.match(/(category|"category"):\s*["']([^"']+)["']/);
        const imageMatch = block.match(/(image|"image"):\s*(null|["']([^"']+)["'])/);
        
        if (nameMatch && (!imageMatch || imageMatch[2] === 'null')) {
            nullItems.push({
                id,
                name: nameMatch[2],
                category: catMatch ? catMatch[2] : 'generic'
            });
        }
    }
    
    console.log(JSON.stringify(nullItems, null, 2));
    console.log('\n\nTotal null:', nullItems.length);
}

getNullItems();
