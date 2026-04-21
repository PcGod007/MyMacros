const fs = require('fs');

function finalAudit() {
    const content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');
    const idRegex = /(id|"id"):\s*["']([^"']+)["']/g;
    let match;
    const mapped = [];
    let nullCount = 0;
    
    while ((match = idRegex.exec(content)) !== null) {
        const block = content.slice(match.index, match.index + 500);
        const imgMatch = block.match(/(image|"image"):\s*(null|["']([^"']+)["'])/);
        const nameMatch = block.match(/(name|"name"):\s*["']([^"']+)["']/);
        
        if (imgMatch && nameMatch) {
            if (imgMatch[2] === 'null') {
                nullCount++;
            } else {
                mapped.push({ name: nameMatch[2], image: imgMatch[2] });
            }
        }
    }
    
    console.log('--- Targeted Mapping Final Report ---');
    console.log(`Matched (High Accuracy): ${mapped.length}`);
    console.log(`Reset to null: ${nullCount}`);
    console.log('\nSample Mapped Items:');
    mapped.slice(0, 15).forEach(m => console.log(`${m.name} -> ${m.image}`));
}

finalAudit();
