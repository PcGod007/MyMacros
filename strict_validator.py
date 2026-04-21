import json
import re

with open('frontend/js/data/foods.js', 'r', encoding='utf-8') as f:
    content = f.read()

skip = {'all','breakfast','rice','breads','curries','vegetables','nonveg','dairy','fruits','beverages','generic','snacks'}

foods = []
lines = content.split('\n')
i = 0
while i < len(lines):
    line = lines[i]
    id_match = re.search(r'(?:"id"|id)\s*:\s*"([^"]+)"', line)
    if id_match:
        fid = id_match.group(1)
        if fid in skip:
            i += 1
            continue
            
        block = ""
        for j in range(i, min(i+25, len(lines))):
            block += lines[j] + "\n"
            
        if 'per100g' in block:
            name_match = re.search(r'(?:"name"|name)\s*:\s*"([^"]+)"', block)
            img_match = re.search(r'(?:"image"|image)\s*:\s*"([^"]+)"', block)
            null_match = re.search(r'(?:"image"|image)\s*:\s*null', block)
            
            name = name_match.group(1) if name_match else "?"
            
            if null_match and not img_match:
                img = "NULL"
            elif img_match:
                img = img_match.group(1)
            else:
                img = "NOT FOUND"
                
            foods.append((fid, name, img))
    i += 1

# Let's do a strict validation: flag any mapping where the image name looks suspiciously unrelated
suspicious = []
for fid, name, img in foods:
    if img == "NULL" or img == "NOT FOUND":
        suspicious.append(f"{name} -> {img} (MISSING)")
        continue
        
    img_lower = img.lower()
    
    # Strip common words from name and fid
    name_words = set(re.sub(r'[^a-z\s]', '', name.lower()).split()) - {'the','a','an','of','with','and','or','fried','cooked','boiled'}
    id_words = set(fid.replace('_', ' ').lower().split()) - {'fried','cooked','boiled'}
    
    # Check if ANY meaningful word from the food name or ID is in the image filename
    has_match = False
    for w in (name_words | id_words):
        if len(w) > 2 and w in img_lower:
            has_match = True
            break
            
    # Also check our manual hardcoded fixes
    hardcoded = {
        "Nimbu Pani / Lemonade": "Fresh_lemon_juice",
        "Kozhukattai / Modak (Steamed Dumpling)": "Doodh_Peda",
        "Peanut Butter": "Roasted_peanuts",
        "Water": "water",
        "Black Coffee (No Sugar)": "coffee",
        "Diet Coke": "coke",
        "White Sauce Pasta (Alfredo)": "pasta",
        "Red Sauce Pasta (Arrabbiata)": "pasta"
    }
    
    for hc_name, hc_img in hardcoded.items():
        if hc_name == name and hc_img.lower() in img_lower:
            has_match = True
            break
            
    if not has_match:
        suspicious.append(f"{name:<40} -> {img}")

print(f"Total items validated: {len(foods)}")
print(f"Suspicious / Unrelated mappings found: {len(suspicious)}")
if suspicious:
    print("-" * 80)
    for s in suspicious:
        print(s)
