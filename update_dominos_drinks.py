import os

def update_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")
    else:
        print(f"No changes made to {filepath}")

# Updates for foods.js
foods_replacements = {
    '"id": "dominos_pepsi_can"': '"id": "pepsi_can"',
    '"name": "Pepsi (Domino\'s)"': '"name": "Pepsi"',
    '"id": "dominos_7up"': '"id": "7up"',
    '"name": "7UP (Domino\'s)"': '"name": "7UP"',
    '"id": "dominos_mirinda"': '"id": "mirinda"',
    '"name": "Mirinda Orange (Domino\'s)"': '"name": "Mirinda Orange"',
    '"id": "dominos_lipton_ice_tea"': '"id": "lipton_ice_tea"',
    '"name": "Lipton Ice Tea (Domino\'s)"': '"name": "Lipton Ice Tea"',
    '"id": "dominos_water_bottle"': '"id": "water_bottle"',
    '"name": "Mineral Water (Domino\'s)"': '"name": "Mineral Water"',
    
    # Also handle the unquoted keys if they exist that way
    'id: "dominos_pepsi_can"': 'id: "pepsi_can"',
    'name: "Pepsi (Domino\'s)"': 'name: "Pepsi"',
    'id: "dominos_7up"': 'id: "7up"',
    'name: "7UP (Domino\'s)"': 'name: "7UP"',
    'id: "dominos_mirinda"': 'id: "mirinda"',
    'name: "Mirinda Orange (Domino\'s)"': 'name: "Mirinda Orange"',
    'id: "dominos_lipton_ice_tea"': 'id: "lipton_ice_tea"',
    'name: "Lipton Ice Tea (Domino\'s)"': 'name: "Lipton Ice Tea"',
    'id: "dominos_water_bottle"': 'id: "water_bottle"',
    'name: "Mineral Water (Domino\'s)"': 'name: "Mineral Water"',

    # image names if they were set
    '"image": "dominos_pepsi_can.png"': '"image": "pepsi_can.png"',
    '"image": "dominos_7up.png"': '"image": "7up.png"',
    '"image": "dominos_mirinda.png"': '"image": "mirinda.png"',
    '"image": "dominos_lipton_ice_tea.png"': '"image": "lipton_ice_tea.png"',
    '"image": "dominos_water_bottle.png"': '"image": "water_bottle.png"',
}

update_file('frontend/js/data/foods.js', foods_replacements)

# Updates for IMAGE_PROMPTS.md
prompts_replacements = {
    '## Pepsi (Domino\'s)': '## Pepsi',
    '`dominos_pepsi_can.png`': '`pepsi_can.png`',
    'photography of Pepsi (Domino\'s)': 'photography of Pepsi',
    
    '## 7UP (Domino\'s)': '## 7UP',
    '`dominos_7up.png`': '`7up.png`',
    'photography of 7UP (Domino\'s)': 'photography of 7UP',
    
    '## Mirinda Orange (Domino\'s)': '## Mirinda Orange',
    '`dominos_mirinda.png`': '`mirinda.png`',
    'photography of Mirinda Orange (Domino\'s)': 'photography of Mirinda Orange',
    
    '## Lipton Ice Tea (Domino\'s)': '## Lipton Ice Tea',
    '`dominos_lipton_ice_tea.png`': '`lipton_ice_tea.png`',
    'photography of Lipton Ice Tea (Domino\'s)': 'photography of Lipton Ice Tea',
    
    '## Mineral Water (Domino\'s)': '## Mineral Water',
    '`dominos_water_bottle.png`': '`water_bottle.png`',
    'photography of Mineral Water (Domino\'s)': 'photography of Mineral Water',
}

update_file('IMAGE_PROMPTS.md', prompts_replacements)
