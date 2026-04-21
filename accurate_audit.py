"""
Accurate null check: looks for image: null within individual food object blocks
"""
import re

with open('frontend/js/data/foods.js', 'r', encoding='utf-8') as f:
    content = f.read()

skip = {'all','breakfast','rice','breads','curries','vegetables','nonveg','dairy','fruits','beverages','generic','snacks'}

# Find individual food blocks by looking for each { ... } block containing per100g
# Use non-greedy matching within brace-delimited blocks
null_foods = []
mismatch_foods = []

# Split by lines and find food entries
lines = content.split('\n')
i = 0
total_foods = 0
while i < len(lines):
    line = lines[i]
    # Check if this line contains a food id
    id_match = re.search(r'(?:"id"|id)\s*:\s*"([^"]+)"', line)
    if id_match:
        fid = id_match.group(1)
        if fid in skip:
            i += 1
            continue
        
        # Check if this is a food item (has per100g)
        # Look ahead up to 20 lines for per100g and image
        block = ""
        for j in range(i, min(i+25, len(lines))):
            block += lines[j] + "\n"
        
        if 'per100g' in block or 'per100g' in block:
            total_foods += 1
            name_match = re.search(r'(?:"name"|name)\s*:\s*"([^"]+)"', block)
            name = name_match.group(1) if name_match else "?"
            
            img_match = re.search(r'(?:"image"|image)\s*:\s*"([^"]+)"', block)
            null_match = re.search(r'(?:"image"|image)\s*:\s*null', block)
            
            if null_match and not img_match:
                null_foods.append((fid, name))
            elif img_match:
                img = img_match.group(1)
                # Quick sanity: image filename should share a keyword with food name
                img_lower = img.lower()
                name_words = set(re.sub(r'[^a-z\s]', '', name.lower()).split()) - {'the','a','an','of','with','and','or'}
                id_words = set(fid.replace('_', ' ').lower().split())
                
                has_match = False
                for w in (name_words | id_words):
                    if len(w) > 2 and w in img_lower:
                        has_match = True
                        break
                
                if not has_match:
                    mismatch_foods.append((fid, name, img))
    i += 1

print("Total foods found: " + str(total_foods))
print("Null images: " + str(len(null_foods)))
print("Potential mismatches: " + str(len(mismatch_foods)))

if null_foods:
    print("\nNULLS:")
    for fid, name in null_foods:
        print("  " + fid + " | " + name)

if mismatch_foods:
    print("\nMISMATCHES:")
    for fid, name, img in mismatch_foods:
        print("  " + name + " -> " + img)
