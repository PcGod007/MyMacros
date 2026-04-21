const fs = require('fs');
let content = fs.readFileSync('frontend/js/screens/search.js', 'utf8');

// Find the card.innerHTML block and replace the img section
const OLD = `            card.innerHTML = \``;

const NEW = `            const catEmoji = {breakfast:'🍳',rice:'🍚',biryani:'🍛',breads:'🫓',curries:'🍲',vegetables:'🥗',nonveg:'🍗',dairy:'🥛',fruits:'🍎',snacks:'🥨',beverages:'🥤',supplements:'💪',generic:'🥘',meals:'🍽️',sweets:'🍮',fastfood:'🍟'}[food.category]||'🍽️';
            card.innerHTML = \``;

content = content.replace(OLD, NEW);

// Now fix the img + onerror in the template
// The SVG dataurl onerror - replace with simpler fallback
const OLD_IMG = /(<img class="food-result-img" src="\$\{imgPath\}" alt="\$\{food\.name\}")\s*onerror="[^"]*this\.src='[^']*'[^"]*">/s;
const NEW_IMG = `$1\n                         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                    <div class="food-img-fallback" style="display:none">\${catEmoji}</div>`;

if (OLD_IMG.test(content)) {
    content = content.replace(OLD_IMG, NEW_IMG);
    console.log('✅ Fixed img onerror fallback');
} else {
    console.log('⚠️  Could not find img onerror pattern - showing current img line:');
    const lines = content.split('\n');
    lines.forEach((l, i) => { if (l.includes('onerror') && l.includes('food-result-img')) console.log(i, l); });
}

if (content.includes('catEmoji')) {
    console.log('✅ catEmoji line added');
} else {
    console.log('❌ catEmoji NOT in file');
}

fs.writeFileSync('frontend/js/screens/search.js', content);
console.log('File saved');
