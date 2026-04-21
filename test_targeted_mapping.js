const fs = require('fs');

const accurateMapping = {
    'margherita': 'margherita_pizza.png',
    'cheese pizza': 'margherita_pizza.png',
    'corn': 'corn_cheese_pizza.png',
    'veg extravaganza': 'veg_extravaganza_pizza.png',
    'veggie supreme': 'veg_extravaganza_pizza.png',
    'chicken sausage': 'chicken_sausage_pizza.png',
    'pepperoni': 'chicken_sausage_pizza.png',
    'paneer makhani pizza': 'paneer_makhani_pizza.png',
    'spicy paneer': 'spicy_paneer_pizza.png',
    'paneer tikka pizza': 'spicy_paneer_pizza.png',
    
    'veg burger': 'veg_burger.png',
    'veggie burger': 'veg_burger.png',
    'whopper': 'mutton_whopper.png',
    
    'idli': 'idli_plate.png',
    'masala dosa': 'masala_dosa.jpg',
    'plain dosa': 'masala_dosa.jpg',
    'medu vada': 'medu_vada.png',
    'upma': 'upma.png',
    'pongal': 'ven_pongal.png',
    'poha': 'poha.png',
    
    'brown rice': 'brown_rice.png',
    'biryani': 'chicken_biryani.jpg',
    'roti': 'roti.png',
    'chapati': 'roti.png',
    'garlic naan': 'garlic_naan.png',
    
    'paneer butter masala': 'paneer_butter_masala.jpg',
    'paneer makhani': 'paneer_butter_masala.jpg',
    'butter chicken': 'butter_chicken.jpg',
    'dal tadka': 'dal_tadka.jpg',
    'dal fry': 'dal_tadka.jpg',
    
    'muscleblaze high protein oats': 'muscleblaze_oats.png',
    'paneer paratha': 'paneer_paratha.png'
};

function testMapping() {
    const content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');
    const idRegex = /(id|"id"):\s*["']([^"']+)["']/g;
    let match;
    let total = 0;
    let matched = 0;
    
    console.log('--- Targeted Mapping Dry Run ---');
    while ((match = idRegex.exec(content)) !== null) {
        total++;
        const block = content.slice(match.index, match.index + 500);
        const nameMatch = block.match(/(name|"name"):\s*["']([^"']+)["']/);
        if (nameMatch) {
            const name = nameMatch[2].toLowerCase();
            let found = false;
            for (const key in accurateMapping) {
                if (name.includes(key)) {
                    found = true;
                    matched++;
                    break;
                }
            }
        }
    }
    console.log(`Matched: ${matched} / ${total}`);
    console.log(`Remaining (will be null): ${total - matched}`);
}

testMapping();
