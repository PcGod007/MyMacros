const fs = require('fs');
const https = require('https');
const path = require('path');
const url = require('url');

const ASSETS_PATH = path.join(__dirname, 'frontend', 'assets', 'food', 'items');
if (!fs.existsSync(ASSETS_PATH)) {
    fs.mkdirSync(ASSETS_PATH, { recursive: true });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function searchWikiImage(query) {
    return new Promise((resolve) => {
        // Wikimedia API requires a descriptive User-Agent
        const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=1&pithumbsize=800&format=json`;
        const headers = { 
            'User-Agent': 'MyMacrosBot/1.0 (contact: support@mymacros.com)' 
        };

        https.get(wikiUrl, { headers }, (res) => {
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

function downloadImage(imgUrl, filename) {
    return new Promise((resolve, reject) => {
        const filePath = path.join(ASSETS_PATH, filename);
        const file = fs.createWriteStream(filePath);
        const parsedUrl = url.parse(imgUrl);
        
        const options = {
            hostname: parsedUrl.hostname,
            path: parsedUrl.path,
            headers: {
                'User-Agent': 'MyMacrosBot/1.0 (contact: support@mymacros.com)'
            }
        };

        https.get(options, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve(true);
                });
            } else if (response.statusCode === 301 || response.statusCode === 302) {
                // Handle redirects (common in Wikimedia)
                file.close();
                fs.unlink(filePath, () => {});
                downloadImage(response.headers.location, filename).then(resolve).catch(reject);
            } else {
                file.close();
                fs.unlink(filePath, () => {});
                reject(`Status ${response.statusCode} for ${imgUrl}`);
            }
        }).on('error', (err) => {
            file.close();
            fs.unlink(filePath, () => {});
            reject(err.message);
        });
    });
}

async function run() {
    const content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');
    const idRegex = /(id|"id"):\s*["']([^"']+)["']/g;
    let match;
    const items = [];
    
    while ((match = idRegex.exec(content)) !== null) {
        const id = match[2];
        const nameMatch = content.slice(match.index, match.index + 500).match(/(name|"name"):\s*["']([^"']+)["']/);
        if (nameMatch) {
            items.push({ id, name: nameMatch[2] });
        }
    }

    const templates = {};
    items.forEach(item => {
        let base = item.name.split('(')[0].trim().toLowerCase();
        base = base.replace(/(domino's|pizza hut|burger king|mcdonald's)\s*/gi, '');
        base = base.replace(/\s*(raw \/ uncooked|cooked|small|medium|large|double|regular|indi|paneer|chicken|veg|non-veg|stuffed|paneer tikka|golden corn)\s*/gi, ' ').trim();
        if (!templates[base]) templates[base] = [];
        templates[base].push(item);
    });

    const templateList = Object.entries(templates);
    console.log(`Auditing ${templateList.length} unique visual templates...`);

    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < templateList.length; i += 3) {
        const batch = templateList.slice(i, i + 3);
        await Promise.all(batch.map(async ([base, itemList]) => {
            const sanitizedName = base.replace(/[^a-z0-9]/gi, '_') + '.jpg';
            const targetPath = path.join(ASSETS_PATH, sanitizedName);
            
            if (fs.existsSync(targetPath) && fs.statSync(targetPath).size > 1000) {
                successCount++;
                return;
            }

            try {
                const imgUrl = await searchWikiImage(base);
                if (imgUrl) {
                    await downloadImage(imgUrl, sanitizedName);
                    successCount++;
                } else {
                    failCount++;
                }
            } catch (err) {
                failCount++;
            }
        }));
        
        if (i % 15 === 0) console.log(`Progress: ${i + batch.length}/${templateList.length} (Success: ${successCount}, Fail: ${failCount})`);
        await delay(200); // polite delay
    }

    console.log(`\nFinal Stats: Success: ${successCount}, Fail: ${failCount}`);
}

run();
