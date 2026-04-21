"""
audit_images.py - Find all image assignments in foods.js and show duplicates
"""
import re

with open('frontend/js/data/foods.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all id + image pairs
blocks = re.findall(r'\{[^{}]*?"id"\s*:\s*"([^"]+)"[^{}]*?"image"\s*:\s*(?:"([^"]+)"|null)[^{}]*?\}', content, re.DOTALL)

# Also catch multi-line blocks using a different approach
pattern = re.compile(
    r'"id"\s*:\s*"([^"]+)"(?:(?!"id").)*?"image"\s*:\s*("([^"]+)"|null)',
    re.DOTALL
)

image_to_ids = {}
id_to_image = {}

for m in pattern.finditer(content):
    fid = m.group(1)
    raw = m.group(2)
    img = m.group(3) if m.group(3) else None
    if img:
        id_to_image[fid] = img
        if img not in image_to_ids:
            image_to_ids[img] = []
        image_to_ids[img].append(fid)

print(f"Total items with images: {len(id_to_image)}")
print()
print("=== DUPLICATE IMAGES (same image used by multiple items) ===")
dups = {img: ids for img, ids in image_to_ids.items() if len(ids) > 1}
for img, ids in sorted(dups.items()):
    print(f"\n  {img} ({len(ids)} items):")
    for fid in ids:
        print(f"    - {fid}")

print(f"\n=== UNIQUE IMAGES (correctly 1:1) ===")
for img, ids in sorted(image_to_ids.items()):
    if len(ids) == 1:
        print(f"  {img} -> {ids[0]}")
