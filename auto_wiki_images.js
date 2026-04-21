const fs = require('fs');
const https = require('https');

let content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');

// Match all IDs and Names
const regex = /id:\s*"([^"]+)"|id:\s*'([^']+)'|"id":\s*"([^"]+)"/g;
let ids = [];
let match;
while ((match = regex.exec(content)) !== null) {
    const id = match[1] || match[2] || match[3];
    // Now extract name nearby
    const block = content.slice(match.index, match.index + 200);
    const nameMatch = block.match(/name:\s*"([^"]+)"|name:\s*'([^']+)'|"name":\s*"([^"]+)"/);
    if (nameMatch) {
        let name = nameMatch[1] || nameMatch[2] || nameMatch[3];
        // Clean up name (remove parens like "Medu Vada (Uddina Vada)" -> "Medu Vada")
        name = name.split('(')[0].trim();
        // Remove brands
        name = name.replace(/Domino's\s*/i, '').replace(/Pizza Hut\s*/i, '').replace(/Burger King\s*/i, '').replace(/McDonald's\s*/i, '').trim();
        ids.push({ id, name, index: match.index });
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function searchWikiImage(query) {
    return new Promise((resolve) => {
        const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=1&pithumbsize=400&format=json`;
        https.get(url, { headers: { 'User-Agent': 'MyMacrosBot/1.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    if (parsed.query && parsed.query.pages) {
                        const pages = parsed.query.pages;
                        const firstPage = pages[Object.keys(pages)[0]];
                        if (firstPage.thumbnail) {
                            resolve(firstPage.thumbnail.source);
                        } else {
                            resolve(null);
                        }
                    } else {
                        resolve(null);
                    }
                } catch (e) {
                    resolve(null);
                }
            });
        }).on('error', () => resolve(null));
    });
}

async function run() {
    console.log(`Found ${ids.length} items to update...`);
    const results = {};
    let count = 0;

    // We do concurrent batches of 10 to speed things up
    const batchSize = 10;
    for (let i = 0; i < ids.length; i += batchSize) {
        const batch = ids.slice(i, i + batchSize);
        await Promise.all(batch.map(async (item) => {
            const finalQuery = item.name + (item.category === 'rice' && !item.name.toLowerCase().includes('rice') ? ' rice' : '');
            let img = await searchWikiImage(finalQuery);
            if (!img && finalQuery.includes(' ')) {
                // If it fails, try just the first part of the food name
                img = await searchWikiImage(finalQuery.split(' ')[0]);
            }
            results[item.id] = img;
            count++;
            if (count % 50 === 0) console.log(`Fetched ${count}/${ids.length}`);
        }));
        await delay(50); // slight delay to be polite
    }

    let missing = 0;
    let foundCount = 0;
    let updatedContent = content;

    // The current file has a bunch of incorrect Unsplash URLs assigned in the last step.
    // They look like `image: "https://images.unsplash..."` or `"image": "https://images.unsplash..."`.
    // And some are null.
    // Let's replace the image value for each block.
    for (const item of ids) {
        const img = results[item.id];
        
        let idPatternRegex = new RegExp(`(id:\\s*"${item.id}"|id:\\s*'${item.id}'|"id":\\s*"${item.id}")`);
        const itemMatch = idPatternRegex.exec(updatedContent);
        if(!itemMatch) continue;
        
        const startIdx = itemMatch.index;
        // Search for the next 'image: "..."' or 'image: null' within a reasonable window
        const windowText = updatedContent.slice(startIdx, startIdx + 500);
        
        const imageRegex = /(image|"image"):\s*("[^"]+"|null)/;
        const imgMatch = windowText.match(imageRegex);
        
        if (imgMatch) {
            let newValue;
            if (img) {
                newValue = `"${img}"`;
                foundCount++;
            } else {
                // Set to null to use our emoji fallback!
                newValue = "null"; 
                missing++;
            }
            
            const replacementText = windowText.replace(imageRegex, `$1: ${newValue}`);
            updatedContent = updatedContent.slice(0, startIdx) + replacementText + updatedContent.slice(startIdx + 500);
        }
    }

    fs.writeFileSync('frontend/js/data/foods.js', updatedContent);
    console.log(`\n✅ Completed! Found Wikipedia images for ${foundCount} items.`);
    console.log(`⚠️ Set ${missing} items to 'null' (they will use the emoji fallback UI).`);
}

run();
