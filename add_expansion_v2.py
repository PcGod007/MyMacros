import codecs
import json
import os

FOODS = [
    # Aavin Flavoured Milk (200ml)
    {"id": "aavin_milk_chocolate", "name": "Aavin Chocolate Milk", "category": "beverages", "subcategory": "Flavoured Milk", "servingType": "volume", "defaultServing": {"unit": "bottle", "amount": 1}, "servingOptions": [{"label": "200ml Bottle", "grams": 200}], "per100g": {"calories": 98, "protein": 3.3, "carbs": 13.7, "fat": 3.0, "fiber": 0}, "image": None},
    {"id": "aavin_milk_strawberry", "name": "Aavin Strawberry Milk", "category": "beverages", "subcategory": "Flavoured Milk", "servingType": "volume", "defaultServing": {"unit": "bottle", "amount": 1}, "servingOptions": [{"label": "200ml Bottle", "grams": 200}], "per100g": {"calories": 98, "protein": 3.3, "carbs": 13.7, "fat": 3.0, "fiber": 0}, "image": None},
    {"id": "aavin_milk_pista", "name": "Aavin Pista Milk", "category": "beverages", "subcategory": "Flavoured Milk", "servingType": "volume", "defaultServing": {"unit": "bottle", "amount": 1}, "servingOptions": [{"label": "200ml Bottle", "grams": 200}], "per100g": {"calories": 98, "protein": 3.3, "carbs": 13.7, "fat": 3.0, "fiber": 0}, "image": None},
    {"id": "aavin_milk_cardamom", "name": "Aavin Cardamom Milk", "category": "beverages", "subcategory": "Flavoured Milk", "servingType": "volume", "defaultServing": {"unit": "bottle", "amount": 1}, "servingOptions": [{"label": "200ml Bottle", "grams": 200}], "per100g": {"calories": 98, "protein": 3.3, "carbs": 13.7, "fat": 3.0, "fiber": 0}, "image": None},
    {"id": "aavin_milk_vanilla", "name": "Aavin Vanilla Milk", "category": "beverages", "subcategory": "Flavoured Milk", "servingType": "volume", "defaultServing": {"unit": "bottle", "amount": 1}, "servingOptions": [{"label": "200ml Bottle", "grams": 200}], "per100g": {"calories": 91.2, "protein": 3.0, "carbs": 13.7, "fat": 3.0, "fiber": 0}, "image": None},
    
    # Heritage Pista Milk
    {"id": "heritage_milk_pista", "name": "Heritage Nutrivita Pista Milk", "category": "beverages", "subcategory": "Flavoured Milk", "servingType": "volume", "defaultServing": {"unit": "bottle", "amount": 1}, "servingOptions": [{"label": "200ml Bottle", "grams": 200}], "per100g": {"calories": 90, "protein": 3.0, "carbs": 12.0, "fat": 3.0, "fiber": 0}, "image": None},
    
    # Haldiram's Snacks
    {"id": "haldirams_bhujia_sev", "name": "Haldiram's Bhujia Sev", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Bowl (30g)", "grams": 30}, {"label": "100g Pack", "grams": 100}], "per100g": {"calories": 592, "protein": 12.93, "carbs": 37.14, "fat": 43.50, "fiber": 4.85}, "image": None},
    {"id": "haldirams_bhakharwadi", "name": "Haldiram's Mini Bhakharwadi", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "pieces", "amount": 5}, "servingOptions": [{"label": "5 Pieces (40g)", "grams": 40}, {"label": "100g Pack", "grams": 100}], "per100g": {"calories": 539, "protein": 7.77, "carbs": 49.89, "fat": 34.22, "fiber": 3.1}, "image": None},
    {"id": "haldirams_masala_groundnuts", "name": "Haldiram's Masala Groundnuts", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Bowl (30g)", "grams": 30}, {"label": "100g Pack", "grams": 100}], "per100g": {"calories": 637, "protein": 20.62, "carbs": 21.85, "fat": 51.91, "fiber": 3.33}, "image": None},
    {"id": "haldirams_moong_dal", "name": "Haldiram's Moong Dal", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Bowl (30g)", "grams": 30}, {"label": "100g Pack", "grams": 100}], "per100g": {"calories": 460, "protein": 20, "carbs": 55, "fat": 20, "fiber": 8}, "image": None},
    {"id": "haldirams_navratan_mix", "name": "Haldiram's Navratan Mix", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Bowl (30g)", "grams": 30}, {"label": "100g Pack", "grams": 100}], "per100g": {"calories": 560, "protein": 12, "carbs": 40, "fat": 40, "fiber": 5}, "image": None},
    {"id": "haldirams_aloo_bhujia", "name": "Haldiram's Aloo Bhujia", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Bowl (30g)", "grams": 30}, {"label": "100g Pack", "grams": 100}], "per100g": {"calories": 580, "protein": 8, "carbs": 45, "fat": 42, "fiber": 3}, "image": None},
]

# Generate Foods JS string
foods_str = ""
for item in FOODS:
    foods_str += "    { \"id\": \"" + item["id"] + "\", \"name\": \"" + item["name"] + "\", \"category\": \"" + item["category"] + "\", \"subcategory\": \"" + item["subcategory"] + "\", \"servingType\": \"" + item["servingType"] + "\", \"defaultServing\": { \"unit\": \"" + item["defaultServing"]["unit"] + "\", \"amount\": " + str(item["defaultServing"]["amount"]) + " }, \"servingOptions\": " + json.dumps(item["servingOptions"]) + ", \"per100g\": " + json.dumps(item["per100g"]) + ", \"image\": null },\n"

# Insert foods into foods.js
foods_file = 'frontend/js/data/foods.js'
with codecs.open(foods_file, 'r', 'utf-8') as f:
    content = f.read()

# find the last ];
last_brace = content.rindex("];")
if last_brace != -1:
    new_content = content[:last_brace] + foods_str + content[last_brace:]
    with codecs.open(foods_file, 'w', 'utf-8') as f:
        f.write(new_content)

# Generate Prompts
prompts_str = "\n"
for item in FOODS:
    filename = item['id'] + ".png"
    name = item['name'].split('(')[0].strip() # Clean name for prompt
    prompts_str += f"## {item['name']}\n"
    prompts_str += f"- **Filename:** `{filename}`\n"
    prompts_str += f"- **Prompt:** Professional food photography of {name}, authentic and accurate, gourmet plating on elegant crockery or appropriate packaging, top-quality restaurant presentation, vivid colors, dark moody background with dramatic lighting.\n\n"

with codecs.open('IMAGE_PROMPTS.md', 'a', 'utf-8') as f:
    f.write(prompts_str)

print("Expansion completed successfully.")
