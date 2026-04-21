const https = require('https');

function searchWikiImage(query) {
    return new Promise((resolve, reject) => {
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
        }).on('error', reject);
    });
}

async function test() {
    const items = ['Ven Pongal', 'Chole bhature', 'Pesarattu', 'Pizza Hut Margherita'];
    for (const item of items) {
        const img = await searchWikiImage(item);
        console.log(`${item}: ${img}`);
    }
}

test();
