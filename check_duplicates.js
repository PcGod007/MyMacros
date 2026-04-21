const fs = require('fs');
const content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');

const regex = /id:\s*"([^"]+)"|id:\s*'([^']+)'|"id":\s*"([^"]+)"/g;
const imgData = [];
let match;

while ((match = regex.exec(content)) !== null) {
    const id = match[1] || match[2] || match[3];
    const block = content.slice(match.index, match.index + 500);
    const nameMatch = block.match(/name:\s*"([^"]+)"|name:\s*'([^']+)'|"name":\s*"([^"]+)"/);
    const imageMatch = block.match(/(image|"image"):\s*(null|"[^"]+")/);
    
    if (nameMatch && imageMatch) {
        const name = nameMatch[1] || nameMatch[2] || nameMatch[3];
        const image = imageMatch[2].replace(/"/g, '');
        imgData.push({ id, name, image });
    }
}

const urlMap = {};
imgData.forEach(item => {
    if (item.image !== 'null') {
        if (!urlMap[item.image]) urlMap[item.image] = [];
        urlMap[item.image].push(item.name);
    }
});

const duplicates = Object.entries(urlMap)
    .filter(([url, names]) => names.length > 1)
    .sort((a, b) => b[1].length - a[1].length);

console.log('Duplicates (URL used for multiple items):');
duplicates.slice(0, 10).forEach(([url, names]) => {
    console.log(`URL: ${url}`);
    console.log(`Used by (${names.length} items): ${names.join(', ')}`);
    console.log('---');
});

const nullItems = imgData.filter(i => i.image === 'null');
console.log(`\nnull count: ${nullItems.length}`);
console.log(`Total items with images: ${imgData.length - nullItems.length}`);
