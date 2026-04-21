"""
full_audit.py - Comprehensive audit of food-to-image mapping correctness
Checks every food item and flags mismatches based on keyword analysis
"""
import re, os

FOODS_FILE = os.path.join("frontend", "js", "data", "foods.js")
ASSETS_DIR = os.path.join("frontend", "assets", "food", "items")

with open(FOODS_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

available_images = set(os.listdir(ASSETS_DIR))

# Extract all food items
pattern = re.compile(r'(?:"id"|id)\s*:\s*"([^"]+)".*?(?:"name"|name)\s*:\s*"([^"]+)".*?(?:"image"|image)\s*:\s*(?:"([^"]+)"|null)', re.DOTALL)
skip = {'all','breakfast','rice','breads','curries','vegetables','nonveg','dairy','fruits','beverages','generic','snacks'}

def image_matches_food(food_id, food_name, img_name):
    """Check if image name contains keywords from food name/id"""
    if not img_name or img_name == 'NULL':
        return False, "NULL image"
    
    # Strip extension and timestamp from image name
    img_base = re.sub(r'(?i)(\.(png|jpe?g|webp|gif))+$', '', img_name)
    img_base = re.sub(r'_\d{6,}$', '', img_base)
    img_base = re.sub(r'_\d+$', '', img_base)  # trailing _2, _3
    img_lower = img_base.lower().replace('_', ' ').replace('-', ' ')
    
    food_name_lower = re.sub(r'\s*\([^)]*\)', '', food_name).lower().strip()
    food_id_lower = food_id.replace('_', ' ').lower()
    
    # Key tokens from food name
    food_tokens = set(food_name_lower.split()) - {'the', 'a', 'an', 'of', 'with', 'and', 'or', 'in', 'on', 'for'}
    img_tokens = set(img_lower.split()) - {'served', 'on', 'elegant', 'restaurant', 'with', 'in', 'gourmet', 'food', 'photography', 'professional', 'of'}
    
    # At least 1 meaningful food keyword match
    overlap = food_tokens & img_tokens
    if len(overlap) >= 1:
        return True, "OK (token match: " + str(overlap) + ")"
    
    # Check if food id keywords match
    id_tokens = set(food_id_lower.split()) - {'plain', 'raw', 'cooked', 'boiled', 'standard'}
    id_overlap = id_tokens & img_tokens
    if len(id_overlap) >= 1:
        return True, "OK (id match: " + str(id_overlap) + ")"
    
    return False, "MISMATCH"

mismatches = []
nulls = []
correct = []

for m in pattern.finditer(content):
    fid, name, img = m.group(1), m.group(2), m.group(3)
    if fid in skip:
        continue
    
    if not img:
        nulls.append((fid, name))
        continue
        
    ok, reason = image_matches_food(fid, name, img)
    if ok:
        correct.append((fid, name, img))
    else:
        mismatches.append((fid, name, img))

print("=" * 80)
print(f"AUDIT RESULTS: {len(correct)} correct, {len(mismatches)} mismatched, {len(nulls)} null")
print("=" * 80)

if mismatches:
    print(f"\nMISMATCHED ({len(mismatches)}):")
    print("-" * 80)
    for fid, name, img in mismatches:
        print(f"  {name:<40} -> {img}")

if nulls:
    print(f"\nNULL IMAGES ({len(nulls)}):")
    print("-" * 80)
    for fid, name in nulls:
        print(f"  {fid:<30} {name}")

print(f"\nTotal food items: {len(correct) + len(mismatches) + len(nulls)}")
print(f"  Correct: {len(correct)}")
print(f"  Mismatched: {len(mismatches)}")  
print(f"  Null: {len(nulls)}")
