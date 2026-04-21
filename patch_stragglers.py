import re

FOODS_FILE = "frontend/js/data/foods.js"

with open(FOODS_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

FIXES = {
    "egg_white_boiled": "Boiled_egg_whites_202604210210.jpeg",
    "keema_mutton": "Keema_Matar_curry_202604210210.jpeg",
    "banana": "Ripe_yellow_bananas_202604210210.jpeg",
    "apple": "Red_apple_on_202604210210.jpeg",
    "mango": "Ripe_Indian_Alphonso_202604210139.jpeg",
    "watermelon": "Watermelon_slices_with_202604210210.jpeg",
    "pakora": "Mix_Veg_Pakora_202604210210.jpeg",
    "filter_coffee": "South_Indian_Filter_202604210210.jpeg",
    "cold_coffee": "Cold_coffee_with_202604210210.jpeg",
    "jackfruit": "Ripe_jackfruit_pieces_202604210210.jpeg"
}

patched = 0
for fid, img in FIXES.items():
    pattern = re.compile(
        r'((?:"id"|id)\s*:\s*"' + re.escape(fid) + r'".*?(?:"image"|image)\s*:\s*)(?:null|"[^"]*")',
        re.DOTALL
    )
    new_content, n = pattern.subn(r'\1"' + img + '"', content, count=1)
    if n:
        content = new_content
        patched += 1
        print("  PATCHED  " + fid + " -> " + img)
    else:
        print("  SKIPPED  " + fid)

with open(FOODS_FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\nPatched {patched} items.")
