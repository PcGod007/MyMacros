import re

FOODS_FILE = "frontend/js/data/foods.js"

with open(FOODS_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

FIXES = {
    "dosa_egg": '"Egg_Dosa_on_202604211133.jpeg"',
    "plain_dosa": '"Dosa_with_chutney_202604211133.jpeg"'
}

patched = 0
for fid, img in FIXES.items():
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
