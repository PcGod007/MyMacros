import re
with open('frontend/js/data/foods.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Match food objects: must have per100g (meaning it's a real food, not a category)
# Pattern: look for id: "xxx" ... per100g ... image: null within a bounded region
blocks = re.findall(r'\{[^{}]*(?:"id"|id)\s*:\s*"([^"]+)"[^{}]*(?:"per100g"|per100g)[^{}]*(?:"image"|image)\s*:\s*null[^{}]*\}', content)
print(f'Actual food items with null images: {len(blocks)}')
for b in blocks:
    print(f'  - {b}')
