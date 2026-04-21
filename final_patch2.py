import re

FOODS_FILE = "frontend/js/data/foods.js"

with open(FOODS_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

FIXES = {
    "idli_plain": "idli_plate.png",
    "mcdonalds_mcpaneer": "McPaneer_Royale_Burger_202604210052.jpeg",
    "bk_paneer_king": "Paneer_King_Burger_202604210052.jpeg",
    "dominos_chicken_tikka_pizza": "Chicken_Tikka_Pizza_202604210052.jpeg",
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

print("\nPatched " + str(patched) + " items.")

# Final null audit
null_count = 0
skip = {'all','breakfast','rice','breads','curries','vegetables','nonveg','dairy','fruits','beverages','generic','snacks'}
for m in re.finditer(r'(?:"id"|id)\s*:\s*"([^"]+)".*?(?:"image"|image)\s*:\s*null', content, re.DOTALL):
    fid = m.group(1)
    if fid not in skip:
        null_count += 1
        print("  STILL NULL: " + fid)

if null_count == 0:
    print("\nZERO food items with null images!")
