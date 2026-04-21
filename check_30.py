import json
import re

with open('frontend/js/data/foods.js', 'r', encoding='utf-8') as f:
    content = f.read()

foods_to_check = [
    "curd_rice", "butter_naan", "egg_white_boiled", "egg_bhurji", 
    "grilled_chicken_breast", "tandoori_chicken", "chicken_tikka", 
    "keema_mutton", "paneer_raw", "milk_full_cream", "milk_toned", 
    "ghee", "banana", "apple", "mango", "watermelon", "pakora", 
    "black_tea", "filter_coffee", "black_coffee", "coconut_water", 
    "peanut_butter", "brown_bread", "chicken_salad", "sweet_potato", 
    "roasted_chana", "sweet_lassi", "beans_poriyal", "cold_coffee", "jackfruit", "white_bread"
]

lines = content.split('\n')
for fid in foods_to_check:
    for i, line in enumerate(lines):
        if re.search(r'(?:"id"|id)\s*:\s*"' + fid + '"', line):
            block = "\n".join(lines[i:min(i+25, len(lines))])
            img_match = re.search(r'(?:"image"|image)\s*:\s*"([^"]+)"', block)
            if img_match:
                print(f"{fid:<25} -> {img_match.group(1)}")
            break
