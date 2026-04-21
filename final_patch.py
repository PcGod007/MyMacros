"""
final_patch.py - Fix the remaining 4 mismatches + 2 nulls
"""
import re

FOODS_FILE = "frontend/js/data/foods.js"

with open(FOODS_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# Manual fixes: food_id -> correct image
FIXES = {
    # MISMATCHED:
    # 1. Whole Egg (Boiled) -> Boiled_eggs image IS correct, audit flagged it because "egg" token 
    #    matched but "whole" didn't. Actually "boiled eggs" matches. KEEP AS IS.
    
    # 2. Peanut Butter -> was wrongly mapped to chaas_buttermilk. No peanut_butter image exists.
    #    Best fallback: Roasted_peanuts (at least it's peanuts)
    "peanut_butter": "Roasted_peanuts_in_202604210139.jpeg",
    
    # 3. Paneer 65 -> panner_65.jpeg IS correct (just a typo in filename). KEEP AS IS.
    
    # 4. Kozhukattai/Modak -> was wrongly mapped to Kothu Parotta. No kozhukattai image exists.
    #    Best fallback: Doodh_Peda (both are Indian sweets)
    "kozhukattai": "Doodh_Peda_gourmet_202604210108.jpeg",
    
    # NULLS:
    # 5. Nimbu Pani -> use lemon juice image (closest match)
    "nimbu_pani": "Fresh_lemon_juice_202604210108.jpeg",
    
    # 6. Keerai Kootu -> use Tamil_Nadu_Keerai image (keerai = greens, perfect match)
    "keerai_kootu": "Tamil_Nadu_Keerai_202604210052.jpeg",
}

patched = 0
for fid, img in FIXES.items():
    # Match both quoted and unquoted id keys, and both null and existing wrong image
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
        print("  SKIPPED  " + fid + " (ID not found)")

with open(FOODS_FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print("\nPatched " + str(patched) + " items.")

# Final null audit
null_count = 0
for m in re.finditer(r'(?:"id"|id)\s*:\s*"([^"]+)".*?(?:"image"|image)\s*:\s*null', content, re.DOTALL):
    fid = m.group(1)
    if fid not in ('all','breakfast','rice','breads','curries','vegetables','nonveg','dairy','fruits','beverages','generic','snacks'):
        null_count += 1
        print("  STILL NULL: " + fid)

if null_count == 0:
    print("\nZERO food items with null images!")
else:
    print("\n" + str(null_count) + " food items still have null images.")
