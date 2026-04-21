const fs = require('fs');

function analyzeTemplates() {
    const content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');
    const idRegex = /(id|"id"):\s*["']([^"']+)["']/g;
    let match;
    const items = [];
    
    while ((match = idRegex.exec(content)) !== null) {
        const id = match[2];
        const start = Math.max(0, match.index - 50);
        const end = Math.min(content.length, match.index + 500);
        const block = content.slice(start, end);
        const nameMatch = block.match(/(name|"name"):\s*["']([^"']+)["']/);
        if (nameMatch) {
            items.push({ id, name: nameMatch[2] });
        }
    }

    const templatesMap = {}; // name -> items[]
    
    items.forEach(item => {
        let base = item.name.split('(')[0].trim();
        base = base.replace(/(Domino's|Pizza Hut|Burger King|McDonald's)\s*/gi, '');
        base = base.replace(/\s*(Raw \/ Uncooked|Cooked|Small|Medium|Large|Double|Regular|Indi|Paneer|Chicken|Veg|Non-Veg|Stuffed|Paneer Tikka|Golden Corn)\s*/gi, ' ').trim();
        
        // Very aggressive normalization
        const normalized = base.toLowerCase()
            .replace(/pizza/g, '')
            .replace(/burger/g, '')
            .replace(/dosa/g, '')
            .replace(/paratha/g, '')
            .replace(/\s+/g, ' ')
            .trim();
            
        // We'll group by a slightly more specific key than just 'pizza'
        // Let's use the core item name + category if possible
        const key = base.toLowerCase();
        if (!templatesMap[key]) templatesMap[key] = [];
        templatesMap[key].push(item);
    });

    console.log(`Total Food Items: ${items.length}`);
    console.log(`Unique Visual Templates: ${Object.keys(templatesMap).length}`);
    const sorted = Object.entries(templatesMap).sort((a,b) => b[1].length - a[1].length);
    console.log('\nTop 20 Templates by count:');
    sorted.slice(0, 20).forEach(([name, list]) => {
        console.log(`${name}: ${list.length} items`);
    });
    
    return templatesMap;
}

analyzeTemplates();
