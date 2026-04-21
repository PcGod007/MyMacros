const fs = require('fs');

function auditRepetition() {
    const content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');
    const idRegex = /(id|"id"):\s*["']([^"']+)["']/g;
    let match;
    const urlCounts = {};
    const urlToNames = {};

    while ((match = idRegex.exec(content)) !== null) {
        const start = Math.max(0, match.index - 50);
        const end = Math.min(content.length, match.index + 500);
        const block = content.slice(start, end);
        const nameMatch = block.match(/(name|"name"):\s*["']([^"']+)["']/);
        const imageMatch = block.match(/(image|"image"):\s*["']([^"']+)["']/);
        
        if (imageMatch && nameMatch) {
            const url = imageMatch[2];
            const name = nameMatch[2];
            urlCounts[url] = (urlCounts[url] || 0) + 1;
            if (!urlToNames[url]) urlToNames[url] = [];
            urlToNames[url].push(name);
        }
    }

    const sorted = Object.entries(urlCounts)
        .filter(e => e[1] > 1)
        .sort((a,b) => b[1] - a[1]);
        
    console.log('Repeated image URLs (Potential non-specific fallbacks):');
    sorted.forEach(([url, count]) => {
        console.log(`\nURL: ${url}`);
        console.log(`Count: ${count}`);
        console.log(`Sample Items: ${urlToNames[url].slice(0, 10).join(', ')}...`);
    });
}

auditRepetition();
