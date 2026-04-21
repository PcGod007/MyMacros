"""
smart_map.py
- Scans all files in frontend/assets/food/items/
- Matches each filename (base) to a food id in foods.js
- Maps image 1-to-1 (removes duplicate assignments)
- Fixes double extensions like .png.png
"""
import re
import os

ASSETS_DIR = os.path.join("frontend", "assets", "food", "items")
FOODS_FILE = os.path.join("frontend", "js", "data", "foods.js")

# ── Known aliases: filename_base -> food_id ───────────────────────────────
ALIASES = {
    # Supplements
    "whey_concentrate":          "whey_concentrate",
    "whey_isolate":              "whey_isolate",
    "whey_gold_standard":        "whey_gold_standard",
    "muscleblaze_oats":          "oats_high_protein_mb",
    # Breakfast
    "idli_plate":                "idli_plain",
    "ven_pongal":                "pongal",
    "upma":                      "upma",
    "medu_vada":                 "medu_vada",
    # Breads
    "roti":                      "roti_wheat",
    "garlic_naan":               "garlic_naan",
    # Rice
    "brown_rice":                "brown_rice_cooked",
    "chicken_biryani":           "chicken_biryani",
    # Curries
    "dal_tadka":                 "dal_tadka",
    "butter_chicken":            "butter_chicken",
    "paneer_butter_masala":      "paneer_butter_masala",
    # Pizza aliases (old PNGs - map to specific items not yet taken by jpegs)
    "chicken_sausage_pizza":     "dominos_chicken_sausage",
    "spicy_paneer_pizza":        "ph_spicy_paneer",
    "corn_cheese_pizza":         "ph_cheese_n_corn",
    "paneer_makhani_pizza":      "pizzahut_paneer_makhani",
    "margherita_pizza":          "pizzahut_margherita",  # dominos_margherita taken by jpeg
    "veg_extravaganza_pizza":    "dominos_veg_extravaganza",
    # Burger aliases (old PNGs - map to alt items not taken by jpegs)
    "veg_burger":                "bk_veg_burger",        # dominos_burger_pizza_veg taken by jpeg
    "mutton_whopper":            "bk_mutton_whopper",
    # Dosa
    "masala_dosa":               "dosa_open_butter_masala",  # dosa_ghee_karam_masala taken by jpeg
    "paneer_paratha":            "paneer_paratha",
    # Typo filenames
    "mngo_milkshake":            "mango_milkshake",
    "panner_65":                 "paneer_65",
    # Old PNG files (jpegs already took primary IDs - map to alternates)
    "brown_rice":                "brown_rice_cooked",
    "butter_chicken":            "butter_chicken",
    "chicken_biryani":           "chicken_biryani",
    "dal_tadka":                 "dal_tadka",
    "garlic_naan":               "garlic_naan",
    "idli_plate":                "idli_plain",
    "medu_vada":                 "medu_vada",
    "paneer_butter_masala":      "paneer_butter_masala",
    "roti":                      "roti_wheat",
    "upma":                      "upma",
    "veg_burger":                "bk_veg_burger",
    "ven_pongal":                "pongal",
}

def strip_ext(filename):
    """Strip all image extensions including double ones like .png.png"""
    return re.sub(r'(\.(png|jpg|jpeg|webp))+$', '', filename, flags=re.IGNORECASE)

def get_all_files():
    files = os.listdir(ASSETS_DIR)
    result = {}  # base -> actual_filename
    for f in files:
        base = strip_ext(f)
        result[base] = f
    return result

def get_all_ids(content):
    return set(re.findall(r'(?:"id"|id)\s*:\s*"([^"]+)"', content))

def find_match(base, all_ids):
    # 1. Check alias table first
    if base in ALIASES and ALIASES[base] in all_ids:
        return ALIASES[base]
    # 2. Exact match
    if base in all_ids:
        return base
    # 3. ID starts with base (e.g. base=roti matches roti_wheat)
    for fid in all_ids:
        if fid.startswith(base + "_") or fid == base:
            return fid
    # 4. Token overlap (at least 2 common words)
    base_tokens = set(base.split("_"))
    best, best_score = None, 0
    for fid in all_ids:
        score = len(base_tokens & set(fid.split("_")))
        if score > best_score and score >= 2:
            # Additional: base must not conflict with a better alias
            best, best_score = fid, score
    return best

def clear_all_images(content):
    """Reset ALL image fields to null first, so we start clean"""
    return re.sub(
        r'((?:"image"|image)\s*:\s*)"[^"]+"',
        r'\1null',
        content
    )

def set_image(content, food_id, filename):
    """Set the image field for a specific food_id"""
    pattern = re.compile(r'(?:"id"|id)\s*:\s*"' + re.escape(food_id) + r'"')
    m = pattern.search(content)
    if not m:
        return content, False

    # Find enclosing object
    open_brace = content.rfind('{', 0, m.start())
    if open_brace == -1:
        return content, False
    depth, i = 1, open_brace + 1
    while i < len(content) and depth > 0:
        if content[i] == '{': depth += 1
        elif content[i] == '}': depth -= 1
        i += 1
    close_brace = i
    block = content[open_brace:close_brace]

    img_match = re.search(r'(?:"image"|image)\s*:\s*(?:null|"[^"]*")', block)
    new_value = '"image": "' + filename + '"'
    if img_match:
        new_block = block[:img_match.start()] + new_value + block[img_match.end():]
    else:
        new_block = block[:-1].rstrip() + ',\n        "image": "' + filename + '"\n    }'
    return content[:open_brace] + new_block + content[close_brace:], True

# ── Main ──────────────────────────────────────────────────────────────────
files = get_all_files()
print(f"Found {len(files)} images in assets folder\n")

with open(FOODS_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

all_ids = get_all_ids(content)
print(f"Found {len(all_ids)} food items in foods.js\n")

# Step 1: Clear all existing image assignments
print("Clearing all existing image assignments...")
content = clear_all_images(content)
print("Done.\n")

# Step 2: Map each file to its best matching food item
matched = []
unmatched = []
used_ids = set()

for base, actual_filename in sorted(files.items()):
    fid = find_match(base, all_ids)
    if fid and fid not in used_ids:
        matched.append((base, actual_filename, fid))
        used_ids.add(fid)
    elif fid and fid in used_ids:
        print(f"  CONFLICT: {actual_filename} -> {fid} (already taken)")
        unmatched.append(actual_filename)
    else:
        print(f"  NO MATCH: {actual_filename}")
        unmatched.append(actual_filename)

# Step 3: Apply all matches
print(f"\nApplying {len(matched)} image mappings...")
mapped = 0
for base, actual_filename, fid in matched:
    content, ok = set_image(content, fid, actual_filename)
    status = "OK" if ok else "FAILED"
    print(f"  {status:<6} {actual_filename:<45} -> {fid}")
    if ok:
        mapped += 1

with open(FOODS_FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\nDone! Mapped {mapped}/{len(files)} images.")
if unmatched:
    print(f"\nFiles with no match ({len(unmatched)}):")
    for u in unmatched:
        print(f"  - {u}")
