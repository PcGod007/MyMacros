import json
import re
import os
import difflib

ASSETS_DIR = os.path.join("frontend", "assets", "food", "items")
FOODS_FILE = os.path.join("frontend", "js", "data", "foods.js")

def clean_filename(fname):
    base = re.sub(r'(?i)(\.(png|jpe?g|webp|gif))+$', '', fname)
    base = re.sub(r'_\d{6,}$', '', base)
    
    aliases = {
        # === Existing aliases ===
        "mngo_milkshake": "mango_milkshake",
        "panner_65": "paneer_65",
        "muscleblaze_oats": "oats_high_protein_mb",
        "idli_plate": "idli_plain",
        "ven_pongal": "pongal",
        "roti": "roti_wheat",
        "brown_rice": "brown_rice_cooked",
        "chicken_sausage_pizza": "dominos_chicken_sausage",
        "spicy_paneer_pizza": "ph_spicy_paneer",
        "corn_cheese_pizza": "ph_cheese_n_corn",
        "paneer_makhani_pizza": "pizzahut_paneer_makhani",
        "margherita_pizza": "pizzahut_margherita",
        "veg_extravaganza_pizza": "dominos_veg_extravaganza",
        "veg_burger": "bk_veg_burger",
        "mutton_whopper": "bk_mutton_whopper",
        "masala_dosa": "masala_dosa",
        "chicken_biryani": "chicken_biryani",
        "butter_chicken": "butter_chicken",
        "dal_tadka": "dal_tadka",
        "medu_vada": "medu_vada",
        "paneer_butter_masala": "paneer_butter_masala",
        "upma": "upma",
        # === New staple food aliases ===
        "poha_flattened_rice": "poha",
        "puri_deep_fried": "puri",
        "uttapam": "uttapam",
        "chole_bhature": "chole_bhature",
        "white_rice_cooked": "white_rice_cooked",
        "basmati_rice": "basmati_rice_cooked",
        "sona_masoori_rice": "sona_masoori_rice_cooked",
        "red_rice": "red_rice_cooked",
        "jeera_rice": "jeera_rice",
        "veg_biryani": "veg_biryani",
        "veg_pulao": "veg_pulao",
        "lemon_rice": "lemon_rice",
        "curd_rice": "curd_rice",
        "butter_naan": "butter_naan",
        "rumali_roti": "rumali_roti",
        "bhakri_jowar": "bhakri",
        "chole_masala": "chole",
        "palak_paneer": "palak_paneer",
        "dal_makhani": "dal_makhani",
        "egg_curry": "egg_curry",
        "fish_curry": "fish_curry",
        "sambar": "sambar",
        "rasam": "rasam",
        "kadhi_pakora": "kadhi",
        "mutton_curry": "mutton_curry",
        "aloo_gobi": "aloo_gobi",
        "bhindi_fry": "bhindi_fry",
        "palak_sabzi": "palak_sabzi",
        "baingan_bharta": "baingan_bharta",
        "mixed_veg_curry": "mixed_veg_curry",
        "matar_paneer": "matar_paneer",
        "lauki_sabzi": "lauki_sabzi",
        "tinda_sabzi": "tinda_sabzi",
        "boiled_egg": "whole_egg_boiled",
        "omelette": "omelette",
        "curd_dahi": "curd",
        "chaas_buttermilk": "buttermilk",
        "banana": "banana",
        "apple": "apple",
        "mango": "mango",
        "papaya": "papaya",
        "guava": "guava",
        "vada_pav": "vada_pav",
        "pakora_bhajji": "pakora",
        "dry_fruits_mix": "dry_fruits_mix",
        "greek_yogurt": "greek_yogurt",
        "boiled_potato": "potato_boiled",
        "avocado": "avocado",
        "oatmeal_cooked": "oats_cooked",
        "muesli_granola": "muesli",
        "honey": "honey",
        "rice_cakes": "rice_cakes",
        "soya_chunks": "soyabean_chunks",
        "peanuts_roasted": "peanuts_roasted",
        "khichdi": "khichdi",
        "sweet_potato": "sweet_potato",
        "quinoa_cooked": "quinoa",
        "tofu_firm": "tofu",
        "punugulu": "punugulu",
        "thattai": "thattai",
        "kozhukattai_modak": "kozhukattai",
        "paneer_65": "paneer_65",
        # === 30 Final Exact Mappings ===
        "curd_rice_exact": "curd_rice",
        "butter_naan_exact": "butter_naan",
        "egg_white_boiled": "egg_white_boiled",
        "egg_bhurji": "egg_bhurji",
        "grilled_chicken_breast": "grilled_chicken_breast",
        "tandoori_chicken": "tandoori_chicken",
        "chicken_tikka_exact": "chicken_tikka",
        "keema_mutton": "keema_mutton",
        "paneer_raw": "paneer_raw",
        "milk_full_cream": "milk_full_cream",
        "milk_toned": "milk_toned",
        "ghee_exact": "ghee",
        "banana_exact": "banana",
        "apple_exact": "apple",
        "mango_exact": "mango",
        "watermelon_exact": "watermelon",
        "pakora_exact": "pakora",
        "black_tea": "black_tea",
        "filter_coffee": "filter_coffee",
        "black_coffee": "black_coffee",
        "coconut_water": "coconut_water",
        "peanut_butter": "peanut_butter",
        "brown_bread": "brown_bread",
        "chicken_salad": "chicken_salad",
        "sweet_potato_exact": "sweet_potato",
        "roasted_chana": "roasted_chana",
        "sweet_lassi": "sweet_lassi",
        "beans_poriyal": "beans_poriyal",
        "cold_coffee_ice_cream": "cold_coffee",
        "jackfruit_exact": "jackfruit",
        "white_bread": "white_bread"
    }
    base_lower = base.lower()
    if base_lower in aliases:
        return aliases[base_lower], aliases[base_lower], True

    base_stripped = re.sub(r'[-_]', ' ', base).lower().strip()
    for word in ['served', 'on', 'elegant', 'restaurant', 'with', 'in', 'dry', 'cooked', 'fried']:
        base_stripped = re.sub(r'\b' + word + r'\b', '', base_stripped)
    base_stripped = re.sub(r'\s+', ' ', base_stripped).strip()
    
    return base.lower(), base_stripped, False

def get_foods(content):
    items = []
    for block in re.finditer(r'{\s*(?:"id"|id)\s*:\s*"([^"]+)"\s*,\s*(?:"name"|name)\s*:\s*"([^"]+)"', content):
        items.append({"id": block.group(1), "name": block.group(2)})
    return items

def get_best_match_for_food(food, files_data):
    best_file = None
    best_score = 0
    
    name_clean = re.sub(r'\s*\([^)]*\)', '', food["name"]).lower().strip()
    id_clean = food["id"].replace('_', ' ').lower().strip()
    
    # 1. First, check if exact ID match is defined in aliases
    for base_orig, fname_clean, is_alias, fname in files_data:
        if is_alias and fname_clean == food["id"]:
            return fname_clean, fname, 1.0

    for base_orig, fname_clean, is_alias, fname in files_data:
        score = 0
        if fname_clean == id_clean or base_orig.replace('_', ' ') == id_clean:
            score = 1.0
        elif fname_clean == name_clean:
            score = 1.0
        else:
            nt = set(name_clean.split())
            it = set(id_clean.split())
            ft = set(fname_clean.split())
            
            if ft and ft == nt:
                score = 0.95
            elif ft and ft == it:
                score = 0.95
            elif nt and nt.issubset(ft):
                score = 0.90
            elif it and it.issubset(ft):
                score = 0.88
            elif ft and ft.issubset(nt):
                score = 0.80
            elif ft and ft.issubset(it):
                score = 0.80
            else:
                s1 = difflib.SequenceMatcher(None, fname_clean, name_clean).ratio()
                s2 = difflib.SequenceMatcher(None, fname_clean, id_clean).ratio()
                score = max(s1, s2) * 0.75 
                
        if score > best_score:
            best_score = score
            best_file = fname
            best_fname_clean = fname_clean
            
    return best_fname_clean if best_file else None, best_file, best_score

def main():
    with open(FOODS_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    foods = get_foods(content)
    files = os.listdir(ASSETS_DIR)
    
    files_data = []
    for fname in files:
        base_orig, fname_clean, is_alias = clean_filename(fname)
        files_data.append((base_orig, fname_clean, is_alias, fname))
    
    # Reset all images
    content = re.sub(r'((?:"image"|image)\s*:\s*)"[^"]+"', r'\1null', content)
    
    mapped_count = 0
    unmapped_foods = []
    
    for food in foods:
        fname_clean, best_file, best_score = get_best_match_for_food(food, files_data)
        
        if best_file and best_score >= 0.40: # Lower threshold to allow fallback matches from the 465 pool
            pattern = re.compile(r'((?:"id"|id)\s*:\s*"' + re.escape(food["id"]) + r'".*?(?:"image"|image)\s*:\s*)null', re.DOTALL)
            content = pattern.sub(r'\1"' + best_file + '"', content, count=1)
            mapped_count += 1
            print(f"+ {food['name'][:30]:<30} ({food['id'][:20]:<20}) -> {fname_clean[:30]:<30} [score: {best_score:.2f}]")
        else:
            unmapped_foods.append((food, best_file, best_score))

    with open(FOODS_FILE, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"\nSuccessfully Mapped {mapped_count} / {len(foods)} foods.")
    
    if unmapped_foods:
        print(f"\nUnmapped Foods ({len(unmapped_foods)}):")
        for food, best_file, score in unmapped_foods:
            print(f"   {food['name']:<35} | Best: {best_file} (score: {score:.2f})")

if __name__ == "__main__":
    main()
