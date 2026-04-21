const fs = require('fs');

function groupForAI() {
    const content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');
    const idRegex = /(id|"id"):\s*["']([^"']+)["']/g;
    let match;
    const items = [];
    
    while ((match = idRegex.exec(content)) !== null) {
        const id = match[2];
        const block = content.slice(match.index - 50, match.index + 500);
        const nameMatch = block.match(/(name|"name"):\s*["']([^"']+)["']/);
        const catMatch = block.match(/(category|"category"):\s*["']([^"']+)["']/);
        if (nameMatch) {
            items.push({ 
                id, 
                name: nameMatch[2], 
                category: catMatch ? catMatch[2] : 'generic' 
            });
        }
    }

    const aiGroups = {}; 
    
    items.forEach(item => {
        let base = item.name.split('(')[0].trim().toLowerCase();
        base = base.replace(/(domino's|pizza hut|burger king|mcdonald's)\s*/gi, '');
        
        // Grouping logic:
        // All "Dosa" varieties -> "South Indian Dosa Platter"
        // All "Rice" varieties -> "Premium Basmati Rice Bowl"
        // All "Burger" varieties -> "Classic Gourmet Burger" (unless very unique like Mutton Whopper)
        // All "Pizza" varieties -> "Artisan Veggie Pizza" vs "Artisan Meat Pizza"
        
        let aiKey = base;
        if (base.includes('rice')) aiKey = 'premium_rice_bowl';
        else if (base.includes('dosa')) aiKey = 'south_indian_dosa_platter';
        else if (base.includes('paratha')) aiKey = 'indian_paratha_spread';
        else if (base.includes('pizza')) {
            if (base.includes('chicken') || base.includes('sausage') || base.includes('pepperoni')) aiKey = 'gourmet_meat_pizza';
            else aiKey = 'gourmet_veggie_pizza';
        }
        else if (base.includes('burger')) {
            if (base.includes('chicken') || base.includes('mutton') || base.includes('whopper')) aiKey = 'gourmet_meat_burger';
            else aiKey = 'gourmet_veg_burger';
        }
        else if (base.includes('manchurian') || base.includes('noodles') || base.includes('fried rice')) aiKey = 'indo_chinese_dish';
        else if (base.includes('dal') || base.includes('curry') || base.includes('masala')) aiKey = 'indian_curry_bowl';
        else if (base.includes('ice cream')) aiKey = 'gourmet_ice_cream_scoop';
        else if (base.includes('tea') || base.includes('chai') || base.includes('coffee')) aiKey = 'hot_beverage_cup';
        
        if (!aiGroups[aiKey]) aiGroups[aiKey] = [];
        aiGroups[aiKey].push(item.name);
    });

    console.log(`Total items: ${items.length}`);
    console.log(`Suggested AI Prompt Groups: ${Object.keys(aiGroups).length}`);
    
    // Output groups sorted by size
    const sorted = Object.entries(aiGroups).sort((a,b) => b[1].length - a[1].length);
    sorted.forEach(([key, list]) => {
        console.log(`${key} (${list.length} items): ${list.slice(0,5).join(', ')}...`);
    });
}

groupForAI();
