import re
import sys

def main():
    try:
        with open('frontend/js/data/foods.js', 'r', encoding='utf-8') as f:
            content = f.read()

        targets = [
            'plain_dosa', 
            'brown_rice_raw', 
            'brown_rice_cooked', 
            'lemon_rice', 
            'potato_boiled', 
            'sweet_potato', 
            'egg_dosa', 
            'cold_coffee_ice_cream', 
            'cold_coffee_with_ice_cream', # depending on actual ID
            'cold_coffee_with_milk',
            'cold_coffee_milk',
            'egg_dosa'
        ]

        # Let's just find all ids and their images
        # We will iterate over all matches of id: "...", ... image: "..."
        for match in re.finditer(r'(?:"id"|id)\s*:\s*"([^"]+)".*?(?:"image"|image)\s*:\s*(null|"[^"]*")', content, re.DOTALL):
            fid = match.group(1)
            img = match.group(2)
            if any(t in fid for t in ['dosa', 'rice', 'potato', 'coffee', 'egg', 'lemon']):
                print(f"{fid} -> {img}")

    except Exception as e:
        print("Error", e)

if __name__ == '__main__':
    main()
