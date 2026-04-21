const fs = require('fs');
const content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');

// More robust parsing to find ALL food objects
// We look for { ... id: "..." ... image: "..." ... }
const foodBlocks = [];
let currentBlock = null;
let braceCount = 0;
let inString = false;

// We'll use a regex to find all food objects more reliably
// Most objects start with { and have an id property
const idRegex = /(id|"id"):\s*["']([^"']+)["']/g;
let match;
while ((match = idRegex.exec(content)) !== null) {
    const id = match[2];
    const startIdx = match.index;
    // Look backwards for the opening brace
    let openBracePos = -1;
    for (let i = startIdx; i >= 0; i--) {
        if (content[i] === '{') {
            openBracePos = i;
            break;
        }
    }
    
    // Look forwards for the closing brace or next entry
    // A food entry usually ends with }, or },{
    let closeBracePos = -1;
    let balance = 1;
    for (let i = startIdx; i < content.length; i++) {
        if (content[i] === '{') balance++;
        if (content[i] === '}') balance--;
        if (balance === 0) {
            closeBracePos = i;
            break;
        }
    }
    
    if (openBracePos !== -1 && closeBracePos !== -1) {
        const block = content.slice(openBracePos, closeBracePos + 1);
        const nameMatch = block.match(/(name|"name"):\s*["']([^"']+)["']/);
        const imageMatch = block.match(/(image|"image"):\s*(null|["']([^"']+)["'])/);
        
        foodBlocks.push({
            id,
            name: nameMatch ? nameMatch[2] : 'UNKNOWN',
            image: imageMatch ? (imageMatch[2] === 'null' ? 'null' : imageMatch[3]) : 'MISSING',
            line: content.slice(0, openBracePos).split('\n').length
        });
    }
}

console.log(`Total food entries found: ${foodBlocks.length}`);
const stats = {
    null: 0,
    missing: 0,
    local: 0,
    url: 0,
    commonWrongUrl: 0 // The biryani URL: photo-1516714435131-44d6b64dc6a2
};

const commonWrongUrl = 'photo-1516714435131-44d6b64dc6a2';

foodBlocks.forEach(f => {
    if (f.image === 'null') stats.null++;
    else if (f.image === 'MISSING') stats.missing++;
    else if (f.image.includes('http')) {
        stats.url++;
        if (f.image.includes(commonWrongUrl)) stats.commonWrongUrl++;
    } else stats.local++;
});

console.log('Statistics:', stats);

const venPongal = foodBlocks.find(f => f.id === 'ven_pongal' || f.name.toLowerCase().includes('ven pongal'));
console.log('\nVen Pongal check:', venPongal);

const choleBhature = foodBlocks.find(f => f.id === 'chole_bhature' || f.name.toLowerCase().includes('chole bhature'));
console.log('Chole Bhature check:', choleBhature);

// Show top 20 items with images to see if they are correct
console.log('\nSample items with images:');
console.log(foodBlocks.filter(f => f.image !== 'null').slice(0, 20));

// Find any other suspicious ones - items with "rice" in name but using the "biryani" URL (if not biryani)
const suspicious = foodBlocks.filter(f => 
    f.image.includes(commonWrongUrl) && 
    !f.name.toLowerCase().includes('biryani')
);
console.log(`\nSuspicious "wrong rice" items: ${suspicious.length}`);
if (suspicious.length > 0) {
    console.log('Sample suspicious:', suspicious.slice(0, 5));
}
