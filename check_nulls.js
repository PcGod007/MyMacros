const fs = require('fs');
const content = fs.readFileSync('frontend/js/data/foods.js', 'utf-8');
const items = content.split('},').map(part => part.trim());

const nullItems = items.filter(i => i.includes('image: null'));

nullItems.forEach(item => {
    const idMatch = item.match(/id:\s*"([^"]+)"/);
    const nameMatch = item.match(/name:\s*"([^"]+)"/);
    if (idMatch && nameMatch) {
        console.log(`${idMatch[1]} | ${nameMatch[1]}`);
    }
});
