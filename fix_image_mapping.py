"""
fix_image_mapping.py

Scans the actual files in frontend/assets/food/items/ and maps them
directly to food items in foods.js by matching the filename (without extension)
to the food 'id' field — supporting partial matches and common aliases.

Also fixes double extensions like .png.png
"""

import os, re, json

ASSETS_DIR = os.path.join("frontend", "assets", "food", "items")
FOODS_FILE = os.path.join("frontend", "js", "data", "foods.js")

# ── Step 1: Read actual files on disk ──────────────────────────────────
def get_files():
    files = os.listdir(ASSETS_DIR)
    result = {}
    for f in files:
        # Strip double extensions like .png.png, .jpg.jpg
        base = re.sub(r'(\.(png|jpg|jpeg|webp))+$', '', f, flags=re.IGNORECASE)
        result[base] = f  # base_name -> actual_filename
    return result

# ── Step 2: Extract all food IDs from foods.js ─────────────────────────
def get_food_ids(content):
    return re.findall(r'"id"\s*:\s*"([^"]+)"', content)

# ── Step 3: Match file base to food ID ────────────────────────────────
ALIASES = {
    # filename_base -> food id
    "brown_rice":           "brown_rice_cooked",
    "idli_plate":           "idli_plain",
    "mutton_whopper":       "whopper_mutton",
    "veg_burger":           "bk_veg_burger",
    "muscleblaze_oats":     "mb_oats",
    "whey_concentrate":     "mb_whey_concentrate",
    "whey_gold_standard":   "on_whey_gold",
    "whey_isolate":         "mb_whey_isolate",
}

def find_match(base, food_ids):
    # 1. Check alias table
    if base in ALIASES:
        alias = ALIASES[base]
        if alias in food_ids:
            return alias
    # 2. Exact match
    if base in food_ids:
        return base
    # 3. Food ID starts with base or base starts with food ID
    for fid in food_ids:
        if fid.startswith(base) or base.startswith(fid):
            return fid
    # 4. Fuzzy: both share enough tokens
    base_tokens = set(base.split("_"))
    best, best_score = None, 0
    for fid in food_ids:
        fid_tokens = set(fid.split("_"))
        score = len(base_tokens & fid_tokens)
        if score > best_score and score >= 2:
            best, best_score = fid, score
    return best

# ── Step 4: Patch foods.js ────────────────────────────────────────────
def patch_foods_js(content, food_id, actual_filename):
    """Find the object with matching id and set its image field to actual_filename."""
    
    # Find position of the id
    pattern = re.compile(r'"id"\s*:\s*"' + re.escape(food_id) + r'"')
    match = pattern.search(content)
    if not match:
        return content, False

    start = match.start()
    # Walk back to the opening brace of this object
    open_brace = content.rfind('{', 0, start)
    if open_brace == -1:
        return content, False

    # Walk forward to the closing brace (balance braces)
    depth = 1
    i = open_brace + 1
    while i < len(content) and depth > 0:
        if content[i] == '{': depth += 1
        elif content[i] == '}': depth -= 1
        i += 1
    close_brace = i  # exclusive

    block = content[open_brace:close_brace]
    
    # Check if already has a non-null image
    img_match = re.search(r'"image"\s*:\s*(?:null|"([^"]*)")', block)
    if img_match and img_match.group(1):  # already has a real image
        print(f"  SKIP  {food_id} (already has image: {img_match.group(1)})")
        return content, False

    # Replace image: null with image: "filename", or add image field
    new_value = f'"image": "{actual_filename}"'
    if img_match:
        new_block = block[:img_match.start()] + new_value + block[img_match.end():]
    else:
        # Insert before closing brace
        new_block = block[:-1].rstrip() + f',\n        "image": "{actual_filename}"\n    }}'
    
    new_content = content[:open_brace] + new_block + content[close_brace:]
    return new_content, True


# ── Main ──────────────────────────────────────────────────────────────
files = get_files()
print(f"\n📁 Found {len(files)} images in assets folder:")
for base, fname in files.items():
    print(f"   {fname}")

with open(FOODS_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

food_ids = get_food_ids(content)
print(f"\n🍽️  Found {len(food_ids)} food items in foods.js\n")

mapped = 0
unmatched = []

for base, actual_filename in files.items():
    matched_id = find_match(base, food_ids)
    if matched_id:
        content, changed = patch_foods_js(content, matched_id, actual_filename)
        if changed:
            print(f"  ✅ {actual_filename} -> id: {matched_id}")
            mapped += 1
        else:
            print(f"  ⚠️  {actual_filename} -> id: {matched_id} (skipped - already mapped)")
    else:
        print(f"  ❌ {actual_filename} -> NO MATCH FOUND")
        unmatched.append(actual_filename)

with open(FOODS_FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\n✅ Done! Mapped {mapped} images to foods.js")
if unmatched:
    print(f"\n❌ Unmatched files (need manual mapping):")
    for u in unmatched:
        print(f"   {u}")
