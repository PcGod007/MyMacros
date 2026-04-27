import codecs
import re
import json

foods_file = 'frontend/js/data/foods.js'
with codecs.open(foods_file, 'r', 'utf-8') as f:
    content = f.read()

# List of drink IDs to update
drink_ids = [
    "energy_gatorade_blue", "drink_gatorade_orange", "drink_gatorade_lemon",
    "energy_monster_original", "energy_monster_ultra", 
    "drink_monster_ultra_white", "drink_monster_ultra_red", "drink_monster_ultra_blue",
    "energy_redbull", "softdrink_coke_zero", "softdrink_pepsi_black", 
    "pepsi_can", "drink_pepsi_black_can",
    "softdrink_thumsup", "softdrink_limca", "softdrink_sprite_diet",
    "drink_maaza_mango", "drink_slice_mango", "drink_frooti",
    "fanta", "mirinda", "paperboat_aampanna", "paperboat_jaljeera", "softdrink_mountain_dew",
    "aavin_milk_chocolate", "aavin_milk_strawberry", "aavin_milk_pista", 
    "aavin_milk_cardamom", "aavin_milk_vanilla", "heritage_milk_pista"
]

def update_serving_options(match):
    prefix = match.group(1)
    options_json = match.group(2)
    suffix = match.group(3)
    
    try:
        # The groups might contain JavaScript style objects (no quotes around keys), 
        # so json.loads might fail. But looking at the file, they are mostly valid JSON 
        # or can be easily converted.
        # However, it's safer to just manipulate the string if it's not perfect JSON.
        
        # New options to add
        new_options = [
            {"label": "Small Glass (200ml)", "grams": 200},
            {"label": "Regular Glass (250ml)", "grams": 250},
            {"label": "300ml", "grams": 300},
            {"label": "Custom (ml)", "grams": None}
        ]
        
        # Check for existing grams in the string to avoid duplicates
        updated_options_json = options_json.strip()
        if updated_options_json.endswith(']'):
            updated_options_json = updated_options_json[:-1]
        
        for new_opt in new_options:
            gram_val = "null" if new_opt['grams'] is None else str(new_opt['grams'])
            search_str = f'"grams": {gram_val}'
            if search_str not in options_json:
                updated_options_json += f', {{"label": "{new_opt["label"]}", "grams": {gram_val}}}'
        
        updated_options_json += ']'
        
        # Clean up any leading comma if the original was empty (unlikely here)
        updated_options_json = updated_options_json.replace('[, ', '[')
        
        return f'{prefix}{updated_options_json}{suffix}'
    except Exception as e:
        print(f"Error processing options: {e}")
        return match.group(0)

for drink_id in drink_ids:
    # Pattern to match servingOptions array for a specific id
    # Supports both quoted and unquoted keys for 'id' and 'servingOptions'
    pattern = r'({ "?id"?: "' + drink_id + r'", .*? "?servingOptions"?: )(\[.*?\])(, .*? })'
    content = re.sub(pattern, update_serving_options, content, flags=re.DOTALL)

with codecs.open(foods_file, 'w', 'utf-8') as f:
    f.write(content)

print("Drink serving sizes updated successfully.")
