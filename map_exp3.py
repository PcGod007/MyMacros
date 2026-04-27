import codecs
import re

mappings = {
    "aavin_milk_chocolate": "exp3/Aavin_Chocolate_Milk_202604272228.jpeg",
    "aavin_milk_strawberry": "exp3/Aavin_Strawberry_Milk_202604272228.jpeg",
    "aavin_milk_pista": "exp3/Aavin_Pista_Milk_202604272228.jpeg",
    "aavin_milk_cardamom": "exp3/Aavin_Cardamom_Milk_202604272228.jpeg",
    "aavin_milk_vanilla": "exp3/Aavin_Vanilla_Milk_202604272228.jpeg",
    "heritage_milk_pista": "exp3/Pista_Milk_gourmet_202604272228.jpeg",
    "haldirams_bhujia_sev": "exp3/Haldiram's_Bhujia_Sev_202604272228.jpeg",
    "haldirams_bhakharwadi": "exp3/Haldiram's_Mini_Bhakharwadi_202604272228.jpeg",
    "haldirams_masala_groundnuts": "exp3/Haldiram's_Masala_Groundnuts_202604272228.jpeg",
    "haldirams_moong_dal": "exp3/Haldiram's_Moong_Dal_202604272228.jpeg",
    "haldirams_navratan_mix": "exp3/Haldiram's_Navratan_Mix_202604272228.jpeg"
}

foods_file = 'frontend/js/data/foods.js'
with codecs.open(foods_file, 'r', 'utf-8') as f:
    content = f.read()

for food_id, image_path in mappings.items():
    # Use regex to find the object with the specific id and update its image property
    # Looking for: { "id": "food_id", ..., "image": null }
    pattern = r'({ "id": "' + food_id + r'", .*? "image": )null'
    replacement = r'\1"' + image_path + r'"'
    content = re.sub(pattern, replacement, content)

with codecs.open(foods_file, 'w', 'utf-8') as f:
    f.write(content)

print("Mapping completed successfully.")
