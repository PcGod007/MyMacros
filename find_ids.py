import re

with open('frontend/js/data/foods.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all id+name pairs more robustly - look for each id field then nearest name
id_pattern = re.compile(r'"id"\s*:\s*"([^"]+)"')
name_pattern = re.compile(r'"name"\s*:\s*"([^"]+)"')

id_positions = [(m.group(1), m.start()) for m in id_pattern.finditer(content)]
name_positions = [(m.group(1), m.start()) for m in name_pattern.finditer(content)]

# For each id, find the nearest name
pairs = []
for fid, fpos in id_positions:
    # Find closest name after this id position (within 500 chars)
    nearby = [(n, abs(npos - fpos)) for n, npos in name_positions if abs(npos - fpos) < 500]
    if nearby:
        nearby.sort(key=lambda x: x[1])
        pairs.append((fid, nearby[0][0]))

print(f"Total food items: {len(pairs)}")
print()

# Now print ALL of them grouped
for fid, name in pairs:
    print(f"{fid}  |  {name}")
