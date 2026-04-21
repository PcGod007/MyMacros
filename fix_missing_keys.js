const fs = require('fs');

// 1. Ensure ALL food objects have an 'image' property.
// If it's missing, add 'image: null' for later processing.
let content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');

// We'll look for blocks that have an 'id' but no 'image'
// This is a bit tricky with regex, so we'll do it object by object
const idRegex = /(id|"id"):\s*["']([^"']+)["']/g;
let match;
let offset = 0;

while ((match = idRegex.exec(content)) !== null) {
    const startIdx = match.index;
    let openBracePos = -1;
    for (let i = startIdx; i >= 0; i--) {
        if (content[i] === '{') {
            openBracePos = i;
            break;
        }
    }
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
        let block = content.slice(openBracePos, closeBracePos + 1);
        if (!block.match(/(image|"image"):\s*/)) {
            // Add image property before servings
            const insertPos = block.indexOf('servingOptions') || block.indexOf('per100g');
            if (insertPos !== -1) {
                const newBlock = block.slice(0, insertPos) + 'image: null, ' + block.slice(insertPos);
                content = content.slice(0, openBracePos) + newBlock + content.slice(closeBracePos + 1);
                // Adjust regex index for the added text
                idRegex.lastIndex += (newBlock.length - block.length);
            }
        }
    }
}

fs.writeFileSync('frontend/js/data/foods.js', content);
console.log('✅ Added missing image: null properties to food objects.');
