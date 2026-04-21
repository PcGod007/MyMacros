import re

FOODS_FILE = "frontend/js/data/foods.js"

with open(FOODS_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

FIXES = {
    "plain_dosa": "null",
    "brown_rice_raw": '"brown_rice.png"',
    "lemon_rice": '"South_Indian_Lemon_202604210139.jpeg"',
    "potato_boiled": '"Boiled_potatoes_on_202604210139.jpeg"',
    "dosa_egg": "null",
    "cold_coffee": '"Cold_coffee_with_202604211125.jpeg"',
    "cold_coffee_icecream": '"Cold_coffee_with_202604210210.jpeg"'
}

patched = 0
for fid, img in FIXES.items():
    # We look for id: "fid" and then its image: null or "..."
    # Warning: \s* for spaces, and since some values might have been "null", img shouldn't have quotes if it's "null" string.
    pattern = re.compile(
        r'((?:"id"|id)\s*:\s*"' + re.escape(fid) + r'".*?(?:"image"|image)\s*:\s*)(?:null|"[^"]*")',
        re.DOTALL
    )
    new_content, n = pattern.subn(r'\g<1>' + img, content, count=1)
    if n:
        content = new_content
        patched += 1
        print("  PATCHED  " + fid + " -> " + img)
    else:
        print("  FAILED TO PATCH  " + fid)

with open(FOODS_FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\nPatched {patched} items.")
