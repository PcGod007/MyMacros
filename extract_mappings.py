import re

with open('frontend/js/data/foods.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all food items with their id, name, and image
pattern = re.compile(r'(?:"id"|id)\s*:\s*"([^"]+)".*?(?:"name"|name)\s*:\s*"([^"]+)".*?(?:"image"|image)\s*:\s*(?:"([^"]+)"|null)', re.DOTALL)

skip = {'all','breakfast','rice','breads','curries','vegetables','nonveg','dairy','fruits','beverages','generic','snacks'}

items = []
for m in pattern.finditer(content):
    fid, name, img = m.group(1), m.group(2), m.group(3)
    if fid in skip:
        continue
    items.append((fid, name, img or 'NULL'))

with open('full_audit.txt', 'w', encoding='utf-8') as f:
    for fid, name, img in items:
        f.write(fid + '|' + name + '|' + img + '\n')
print('Wrote ' + str(len(items)) + ' entries to full_audit.txt')
