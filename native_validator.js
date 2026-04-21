const fs = require('fs');

let content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');

// Strip out export const FOOD_DATABASE = [
content = content.replace(/export\s+const\s+FOOD_DATABASE\s*=\s*/, '');
// Strip trailing semicolon if it exists
content = content.replace(/;\s*$/, '');

try {
    // Safely evaluate the JS array since it has unquoted keys 
    // and is not strict JSON.
    const foods = eval('(' + content + ')');
    
    let suspicious = [];
    let nulls = [];
    let skip = new Set(['all','breakfast','rice','breads','curries','vegetables','nonveg','dairy','fruits','beverages','generic','snacks']);
    
    let totalItems = 0;
    
    foods.forEach(food => {
        if (!food || !food.id || skip.has(food.id)) return;
        totalItems++;
        
        let img = food.image;
        if (!img || img === 'null' || img === null) {
            nulls.push(`${food.name} (id: ${food.id})`);
            return;
        }
        
        // Strip out non-alphanumeric and make lower
        let imgLower = img.toLowerCase().replace(/[^a-z0-9]/g, '');
        let nameWords = food.name.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/).filter(w => w.length > 2 && !['the','and','with','from','fried','cooked','boiled'].includes(w));
        let idWords = food.id.toLowerCase().replace(/_/g, ' ').split(/\s+/).filter(w => w.length > 2 && !['fried','cooked','boiled'].includes(w));
        
        let hasMatch = false;
        let allWords = new Set([...nameWords, ...idWords]);
        
        for (let w of allWords) {
            if (imgLower.includes(w)) {
                hasMatch = true;
                break;
            }
        }
        
        let hardcoded = {
            "Nimbu Pani / Lemonade": "lemon",
            "Kozhukattai / Modak (Steamed Dumpling)": "peda",
            "Peanut Butter": "peanuts",
            "Water": "water",
            "Black Coffee (No Sugar)": "coffee",
            "Diet Coke": "coke",
            "Coke Zero / Diet Coke": "coke",
            "White Sauce Pasta (Alfredo)": "pasta",
            "Red Sauce Pasta (Arrabbiata)": "pasta"
        };
        
        if (hardcoded[food.name] && imgLower.includes(hardcoded[food.name])) {
            hasMatch = true;
        }
        
        if (!hasMatch) {
            suspicious.push(`${food.name.padEnd(40)} -> ${img}`);
        }
    });
    
    console.log(`Total Food Items Validated: ${totalItems}`);
    console.log(`Null images: ${nulls.length}`);
    console.log(`Suspicious Mappings: ${suspicious.length}`);
    
    if (nulls.length > 0) {
        console.log("\nNULLS:");
        nulls.forEach(n => console.log("  " + n));
    }
    
    if (suspicious.length > 0) {
        console.log("\nSUSPICIOUS:");
        suspicious.forEach(s => console.log("  " + s));
    }

    
} catch (e) {
    console.error("Parse Error:", e);
}
