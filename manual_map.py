"""
manual_map.py
Directly patches foods.js with the correct image for each of the 12 unmatched files.
Edit the MANUAL_MAP dict below if any food name assignment looks wrong.
"""
import re

FOODS_FILE = 'frontend/js/data/foods.js'

# Maps: actual_filename_on_disk -> food id in foods.js
# These were determined by looking at the food name in foods.js
MANUAL_MAP = {
    'brown_rice.png':           'brown_rice_cooked',
    'butter_chicken.jpg':       'butter_chicken',
    'chicken_biryani.jpg':      'chicken_biryani',
    'dal_tadka.jpg':            'dal_tadka',
    'garlic_naan.png':          'garlic_naan',
    'idli_plate.png':           'idli_plain',
    'medu_vada.png':            'medu_vada',
    'muscleblaze_oats.png':     'oats_high_protein_mb',
    'roti.png':                 'roti',
    'upma.png':                 'upma',
    'ven_pongal.png':           'ven_pongal',
    'margherita_pizza.png':     'dominos_margherita',
}

def patch(content, food_id, actual_filename):
    pattern = re.compile(r'"id"\s*:\s*"' + re.escape(food_id) + r'"')
    m = pattern.search(content)
    if not m:
        return content, 'NOT_FOUND'
    open_brace = content.rfind('{', 0, m.start())
    if open_brace == -1:
        return content, 'NO_BRACE'
    depth, i = 1, open_brace + 1
    while i < len(content) and depth > 0:
        if content[i] == '{': depth += 1
        elif content[i] == '}': depth -= 1
        i += 1
    close_brace = i
    block = content[open_brace:close_brace]
    img_match = re.search(r'"image"\s*:\s*(?:null|"([^"]*)")', block)
    if img_match and img_match.group(1):
        return content, 'ALREADY_HAS:' + img_match.group(1)
    new_value = '"image": "' + actual_filename + '"'
    if img_match:
        new_block = block[:img_match.start()] + new_value + block[img_match.end():]
    else:
        # Add image field before closing brace
        new_block = block[:-1].rstrip() + ',\n        "image": "' + actual_filename + '"\n    }'
    return content[:open_brace] + new_block + content[close_brace:], 'OK'

with open(FOODS_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# Check which IDs actually exist first
all_ids = set(re.findall(r'"id"\s*:\s*"([^"]+)"', content))
print("Checking IDs exist in foods.js:")
for fname, fid in MANUAL_MAP.items():
    exists = fid in all_ids
    print(f"  {'OK' if exists else 'MISSING'}: {fid} (for {fname})")

print()
print("Applying patches...")
mapped = 0
for fname, fid in MANUAL_MAP.items():
    content, status = patch(content, fid, fname)
    print(f"  {status:<30} {fname} -> {fid}")
    if status == 'OK':
        mapped += 1

with open(FOODS_FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\nDone. Mapped {mapped} new images.")
