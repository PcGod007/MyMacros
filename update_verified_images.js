const fs = require('fs');
const https = require('https');

// 1. CURATED MAPPING FOR GUARANTEED ACCURACY (Wikimedia/High-Quality Unsplash)
const curatedImages = {
    // Breakfast
    'ven_pongal': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Ven_pongal_with_sambar_and_chutney.jpg/1200px-Ven_pongal_with_sambar_and_chutney.jpg',
    'pongal': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Ven_pongal_with_sambar_and_chutney.jpg/1200px-Ven_pongal_with_sambar_and_chutney.jpg',
    'chole_bhature': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chole_Bhature_from_Nagpur.JPG/1200px-Chole_Bhature_from_Nagpur.JPG',
    'masala_dosa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Rameshwaram_Cafe_Dosa.jpg/1200px-Rameshwaram_Cafe_Dosa.jpg',
    'plain_dosa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Dosa_at_Sri_Ganesha_Restauran%2C_Bangkok_%2844570742744%29.jpg/1200px-Dosa_at_Sri_Ganesha_Restauran%2C_Bangkok_%2844570742744%29.jpg',
    'idli_plain': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Idli_Sambar.JPG/1200px-Idli_Sambar.JPG',
    'medu_vada': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Medu_vada-1_f.jpg/1200px-Medu_vada-1_f.jpg',
    'upma': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Upma_or_Uppittu.jpg/1200px-Upma_or_Uppittu.jpg',
    'poha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Poha_with_pomegranate.jpg/1200px-Poha_with_pomegranate.jpg',
    'aloo_paratha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Aloo_Paratha_also_known_as_Potato_Stuffed_Flatbread.JPG/1200px-Aloo_Paratha_also_known_as_Potato_Stuffed_Flatbread.JPG',
    'puri': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Poori_and_potato_sabzi.JPG/1200px-Poori_and_potato_sabzi.JPG',
    'set_dosa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Set_dosa_with_chutney_and_sambar.jpg/1200px-Set_dosa_with_chutney_and_sambar.jpg',
    'rava_dosa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Rava_dosa_shree_shiv_shakti.JPG/1200px-Rava_dosa_shree_shiv_shakti.JPG',
    'onion_dosa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Onion_dosa.jpg/1200px-Onion_dosa.jpg',
    'paper_roast': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Ghee_Roast_Dosa.jpg/1200px-Ghee_Roast_Dosa.jpg',
    
    // Staples
    'white_rice': 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=800&auto=format&fit=crop',
    'brown_rice': 'https://images.unsplash.com/photo-1542834369-f109f19938c6?w=800&auto=format&fit=crop',
    'basmati_rice': 'https://images.unsplash.com/photo-1586201327693-d6f4afefec3d?w=800&auto=format&fit=crop',
    'chapati': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Phulka_rotis.JPG/1200px-Phulka_rotis.JPG',
    'roti': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Phulka_rotis.JPG/1200px-Phulka_rotis.JPG',
    'naan_plain': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Naan_bread.jpg/1200px-Naan_bread.jpg',
    'butter_naan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Butter_Naan.jpg/1200px-Butter_Naan.jpg',
    'garlic_naan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Garlic_Naan.jpg/1200px-Garlic_Naan.jpg',
    
    // Curries
    'paneer_butter_masala': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Paneer_Butter_Masala_1.JPG/1200px-Paneer_Butter_Masala_1.JPG',
    'dal_tadka': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Dal_Tadka.jpg/1200px-Dal_Tadka.jpg',
    'dal_makhani': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Dal_Makhani.jpg/1200px-Dal_Makhani.jpg',
    'palak_paneer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Palak_Paneer.jpg/1200px-Palak_Paneer.jpg',
    'mutter_paneer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Matar_Paneer.JPG/1200px-Matar_Paneer.JPG',
    'kadai_paneer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Kadai_Paneer_1.JPG/1200px-Kadai_Paneer_1.JPG',
    'butter_chicken': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chicken_makhani.jpg/1200px-Chicken_makhani.jpg',
    'chicken_tikka_masala': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Chicken_Tikka_Masala_1.JPG/1200px-Chicken_Tikka_Masala_1.JPG',
    'fish_curry': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Fish_Curry_South_Indian_Style.JPG/1200px-Fish_Curry_South_Indian_Style.JPG',
    
    // Snacks / Chinese
    'samosa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Samosachutney.jpg/1200px-Samosachutney.jpg',
    'pav_bhaji': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Pav_Bhaji_on_street.jpg/1200px-Pav_Bhaji_on_street.jpg',
    'vada_pav': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Vada_Pav-Street_Food-Mumbai.jpg/1200px-Vada_Pav-Street_Food-Mumbai.jpg',
    'veg_momos': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg',
    'chicken_biryani': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Chicken_Biryani_with_Raita_and_Salad.jpg/1200px-Chicken_Biryani_with_Raita_and_Salad.jpg',
    'veg_biryani': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Vegetable_Biryani_1.jpg/1200px-Vegetable_Biryani_1.jpg',
    
    // Brands (Core items)
    'pizza_margherita': 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad50?w=800&auto=format&fit=crop',
    'pepperoni_pizza': 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop',
    'veggie_pizza': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop',
    'classic_burger': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop',
    'cheese_burger': 'https://images.unsplash.com/photo-1571091755654-1d3d0e3a6fa1?w=800&auto=format&fit=crop',
    'fries': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop',
    'coke': 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop',
    'pepsi': 'https://images.unsplash.com/photo-1629203851020-fdd49bb6599e?w=800&auto=format&fit=crop'
};

// 2. CATEGORY FALLBACKS (High-quality generic images)
const categoryFallbacks = {
    'rice': 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=800&auto=format&fit=crop',
    'curries': 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&auto=format&fit=crop',
    'vegetables': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    'breakfast': 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=800&auto=format&fit=crop', // Generic Indian Breakfast
    'snacks': 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop',
    'fruits': 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&auto=format&fit=crop',
    'dairy': 'https://images.unsplash.com/photo-1563636619-e910fa4a873d?w=800&auto=format&fit=crop',
    'beverages': 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=800&auto=format&fit=crop',
    'pizza': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop',
    'burgers': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop'
};

function searchWikiImage(query) {
    return new Promise((resolve) => {
        const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=1&pithumbsize=600&format=json`;
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

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    let content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');
    
    // Improved regex to capture food blocks
    const idRegex = /(id|"id"):\s*["']([^"']+)["']/g;
    let match;
    const foodItems = [];
    
    while ((match = idRegex.exec(content)) !== null) {
        const id = match[2];
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
            const block = content.slice(openBracePos, closeBracePos + 1);
            const nameMatch = block.match(/(name|"name"):\s*["']([^"']+)["']/);
            const catMatch = block.match(/(category|"category"):\s*["']([^"']+)["']/);
            const imgMatch = block.match(/(image|"image"):\s*(null|["']([^"']+)["'])/);
            
            if (nameMatch) {
                foodItems.push({
                    id,
                    name: nameMatch[2],
                    category: catMatch ? catMatch[2] : 'generic',
                    currentImage: imgMatch ? (imgMatch[2] === 'null' ? 'null' : imgMatch[3]) : 'null',
                    fullBlock: block,
                    startIdx: openBracePos,
                    endIdx: closeBracePos + 1
                });
            }
        }
    }

    console.log(`Auditing ${foodItems.length} items...`);
    let updatedCount = 0;
    
    // Sort foodItems by index in reverse to avoid index shifting
    foodItems.sort((a,b) => b.startIdx - a.startIdx);
    
    for (const item of foodItems) {
        let newImage = null;
        
        // 1. Check curated mapping first
        // Match by ID or precise name
        const curatedKey = Object.keys(curatedImages).find(k => 
            item.id.toLowerCase().includes(k) || 
            item.name.toLowerCase() === k.replace(/_/g, ' ')
        );
        
        if (curatedKey) {
            newImage = curatedImages[curatedKey];
        }
        
        // 2. If not in curated, try Wikipedia search (but skip if we already set it in previous step and it's not null)
        if (!newImage && (item.currentImage === 'null' || item.currentImage.includes('unsplash.com/photo-1516714435131-44d6b64dc6a2'))) {
            // Clean name for search
            let query = item.name.split('(')[0].trim();
            query = query.replace(/(Domino's|Pizza Hut|Burger King|McDonald's)\s*/gi, '');
            
            // Try specific search
            newImage = await searchWikiImage(query);
            if (!newImage && query.includes(' ')) {
                // Try simpler search
                newImage = await searchWikiImage(query.split(' ')[0]);
            }
            await delay(50);
        }
        
        // 3. Last fallback: Category image
        if (!newImage) {
            newImage = categoryFallbacks[item.category] || categoryFallbacks['generic'] || null;
        }

        if (newImage) {
            const oldImgRegex = /(image|"image"):\s*(null|["']([^"']+)["'])/;
            const updatedBlock = item.fullBlock.replace(oldImgRegex, `$1: "${newImage}"`);
            content = content.slice(0, item.startIdx) + updatedBlock + content.slice(item.endIdx);
            updatedCount++;
        }
    }

    fs.writeFileSync('frontend/js/data/foods.js', content);
    console.log(`✅ Done! Updated ${updatedCount} image references.`);
}

run();
