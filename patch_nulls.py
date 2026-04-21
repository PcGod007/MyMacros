"""
patch_nulls.py
Manually maps the 15 foods that the fuzzy algo couldn't match,
then reports any remaining nulls.
"""
import re, os

FOODS_FILE = os.path.join("frontend", "js", "data", "foods.js")

MANUAL = {
    # food_id -> best available image
    "sambar":               "South_Indian_Green_202604210052.jpeg",   # closest: south indian green (sambar-like)
    "bhindi_fry":           "Vazhakkai_Fry_on_202604210052.jpeg",     # raw banana fry ~ bhindi fry look
    "tinda_sabzi":          "Green_peas_served_202604210052.jpeg",     # generic vegetable
    "omelette_2_egg":       "South_Indian_Egg_202604210053.jpeg",      # egg dish
    "fish_fry":             "filet_o_fish.jpeg",                       # fish dish
    "papaya":               "Jackfruit_served_on_202604210052.jpeg",   # tropical fruit look
    "guava":                "Pear_served_on_202604210053.jpeg",        # green fruit look
    "nimbu_pani":           "Fresh_lemon_juice_202604210108.jpeg",     # lemon juice
    "oatmeal_cooked":       "muscleblaze_oats.png",                    # oats image
    "sweet_potato_boiled":  "Raw_banana_served_202604210052.jpeg",     # starchy veg look
    "quinoa_cooked":        "Moong_Dal_served_202604210052.jpeg",      # grain/dal look
    "honey":                "Rava_Halwa_served_202604210052.jpeg",     # golden sweet
    "tofu_firm":            "Paneer_Fried_Rice_202604210052.jpeg",     # white firm food
    "khichdi":              "Moong_Dal_served_202604210052.jpeg",      # dal rice look
    "keerai_kootu":         "Tamil_Nadu_Keerai_202604210052.jpeg",     # keerai = greens
}

with open(FOODS_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

patched = 0
for fid, img in MANUAL.items():
    # Only patch if currently null
    pattern = re.compile(
        r'((?:"id"|id)\s*:\s*"' + re.escape(fid) + r'".*?(?:"image"|image)\s*:\s*)null',
        re.DOTALL
    )
    new_content, n = pattern.subn(r'\1"' + img + '"', content, count=1)
    if n:
        content = new_content
        patched += 1
        print(f"  PATCHED  {fid:<30} -> {img}")
    else:
        print(f"  SKIPPED  {fid:<30} (already set or ID not found)")

with open(FOODS_FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\nPatched {patched} items.\n")

# ── Null audit ──────────────────────────────────────────────────────────────
null_ids = re.findall(r'(?:"id"|id)\s*:\s*"([^"]+)"[^}]*?(?:"image"|image)\s*:\s*null', content, re.DOTALL)
print(f"Remaining nulls: {len(null_ids)}")
for nid in null_ids:
    print(f"  null -> {nid}")
