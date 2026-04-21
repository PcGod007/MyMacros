"""
Script to generate a clean IMAGE_PROMPTS.md file listing all 
food items that need AI images, with specific prompts for each.
"""
import re, json

foods_content = open("frontend/js/data/foods.js", encoding="utf-8").read()

# Pull all food objects
id_pattern = re.compile(r'"id":\s*"([^"]+)"')
name_pattern = re.compile(r'"name":\s*"([^"]+)"')
image_pattern = re.compile(r'"image":\s*(null|"([^"]*)")')

# Quick specific prompts for known items
SPECIFIC_PROMPTS = {
    "idli_plain": ("idli_plain.png", "Professional food photography of 3 soft white steamed Idli served on a banana leaf or white plate with coconut chutney and sambar, authentic South Indian breakfast, natural morning light."),
    "upma": ("upma.png", "A bowl of South Indian Rava Upma, semolina porridge with mustard seeds, curry leaves, roasted cashews and vegetables, steaming hot, professional food photography, vibrant and appetizing."),
    "poha": ("poha.png", "Indori style Poha, turmeric-yellow flattened rice with pomegranate seeds, sev and fresh coriander, served in a traditional bowl, professional food photography, bright morning light."),
    "aloo_paratha": ("aloo_paratha.png", "Authentic golden-brown Aloo Paratha stuffed with spiced potato, served with white butter dollop, green chutney and sliced onions, rustic wooden plate, professional food photography."),
    "puri": ("puri.png", "Golden puffed Indian Puri deep-fried bread, stacked beside a bowl of spicy potato sabzi, professional food photography, dramatic warm lighting."),
    "chole_bhature": ("chole_bhature.png", "North Indian Chole Bhature, large fluffy puffed bhatura beside dark spiced chickpea curry with onions and lemon, professional food photography."),
    "pesarattu": ("pesarattu.png", "Andhra Pesarattu, thin crispy green moong dal crepe served with upma stuffing and ginger chutney, banana leaf plating, professional food photography."),
    "uttapam": ("uttapam.png", "Thick South Indian Uttapam rice pancake topped with colorful diced onions, tomatoes and green chilies, served with sambar and chutney, professional food photography."),
    "dosa_ghee_roast": ("dosa_ghee_roast.png", "Paper-thin Ghee Roast Dosa glistening golden-brown from generous ghee, elegantly rolled on white plate with coconut chutney, professional food photography."),
    "dosa_onion_rava": ("dosa_onion_rava.png", "Crispy lacy Onion Rava Dosa, thin semolina crepe dotted with caramelized onions and green chilies, golden and crispy, professional food photography."),
    "dosa_egg": ("dosa_egg.png", "South Indian Egg Dosa, crispy rice crepe with whole fried egg cooked on top, sprinkled with pepper and cilantro, professional food photography."),
    "dosa_set": ("dosa_set.png", "Karnataka Set Dosa, three thick spongy round dosas with vegetable kurma and coconut chutney, professional food photography."),
    "dosa_wheat": ("dosa_wheat.png", "Healthy thin golden Wheat Dosa, whole wheat crepe served with green chutney and sambar, professional food photography."),
    "dosa_oats": ("dosa_oats.png", "Healthy Oats Dosa, thin crispy oats-rice crepe, golden texture, served with coconut chutney, professional food photography."),
    "sabudana_khichdi": ("sabudana_khichdi.png", "Maharashtrian Sabudana Khichdi, translucent sago pearls with roasted peanuts, green chili and lemon, fluffy and non-sticky, professional food photography."),
    "daliya": ("daliya.png", "Nutritious Indian Daliya broken wheat porridge with vegetables and spices, garnished with cilantro, healthy aesthetic, professional food photography."),
    "semiya_upma": ("semiya_upma.png", "South Indian Semiya Upma, roasted vermicelli noodles with onions, mustard seeds, cashews and vegetables, served warm, professional food photography."),
    "white_rice_cooked": ("white_rice_cooked.png", "Bowl of perfectly steamed fluffy white rice, individually separated long grains in a white ceramic bowl, soft overhead lighting, minimalist professional food photography."),
    "white_rice_raw": ("white_rice_raw.png", "Raw uncooked white rice grains spilling from a cloth sack onto wood, macro photography showing grain texture, professional food photography."),
    "sona_masoori_rice_cooked": ("sona_masoori_rice_cooked.png", "Steamed Sona Masoori rice, slightly sticky short-grain South Indian rice in a traditional bowl, professional food photography."),
    "sona_masoori_rice_raw": ("sona_masoori_rice_raw.png", "Dry uncooked Sona Masoori rice grains, opaque white short-grain variety in a small bowl, macro texture, professional food photography."),
    "red_rice_cooked": ("red_rice_cooked.png", "Nutritious cooked Red Rice, deep reddish-brown whole grain rice in a ceramic bowl, rustic healthy aesthetic, professional food photography."),
    "red_rice_raw": ("red_rice_raw.png", "Raw red rice grains, deep reddish whole grain variety on dark wooden surface, macro photography, professional food photography."),
    "basmati_rice_cooked": ("basmati_rice_cooked.png", "Perfectly cooked Basmati rice, long aromatic grains perfectly separated in a silver bowl garnished with saffron strands, professional food photography."),
    "basmati_rice_raw": ("basmati_rice_raw.png", "Dry aged Basmati rice, long slender white grains on dark background, macro shot showing fine texture, professional food photography."),
    "jeera_rice": ("jeera_rice.png", "Aromatic Jeera Rice, fluffy Basmati rice with whole cumin seeds and ghee, garnished with fried cashews, copper bowl, professional food photography."),
    "lemon_rice": ("lemon_rice.png", "Bright South Indian Lemon Rice, tangy yellow turmeric rice with mustard seeds, curry leaves, peanuts and fresh lemon, traditional ceramic bowl, professional food photography."),
    "curd_rice": ("curd_rice.png", "Comforting South Indian Curd Rice, creamy yogurt rice with mustard seeds, curry leaves and pomegranate garnish, clay bowl, professional food photography."),
    "tomato_rice": ("tomato_rice.png", "South Indian Tomato Rice, tangy rice cooked with fresh tomatoes, mustard seeds and curry leaves giving vibrant red color, professional food photography."),
    "tamarind_rice": ("tamarind_rice.png", "South Indian Puliyodarai Tamarind Rice, tangy dark brown rice with tamarind, mustard seeds, peanuts and curry leaves, traditional bowl, professional food photography."),
    "egg_fried_rice": ("egg_fried_rice.png", "Indo-Chinese Egg Fried Rice, wok-tossed rice with scrambled eggs, spring onions and soy sauce, served in a bowl with chopsticks, professional food photography."),
    "veg_fried_rice": ("veg_fried_rice.png", "Colorful Vegetable Fried Rice, wok-tossed rice with diced carrots, beans, corn and capsicum in Indo-Chinese style, professional food photography."),
    "paneer_fried_rice": ("paneer_fried_rice.png", "Indo-Chinese Paneer Fried Rice, wok-tossed rice with soft paneer cubes, spring onions and soy sauce, professional food photography."),
    "chicken_fried_rice": ("chicken_fried_rice.png", "Sizzling Chicken Fried Rice, wok-fried rice with tender chicken, eggs, spring onions and soy sauce in a dark bowl, professional food photography."),
    "mushroom_biryani": ("mushroom_biryani.png", "Aromatic Mushroom Biryani, long-grain basmati rice layered with spiced mushrooms, caramelized onions, saffron and fresh mint, served in copper handi, professional food photography."),
    "veg_biryani": ("veg_biryani.png", "Fragrant Vegetable Biryani, layered basmati rice with mixed vegetables, whole spices, saffron and fried onions, served in a handi, professional food photography."),
    "pulao": ("pulao.png", "Fragrant Vegetable Pulao, Basmati rice with whole spices, peas, carrots and caramelized onions topped with fried onions, silver bowl, professional food photography."),
    "plain_naan": ("plain_naan.png", "Soft classic Indian Naan bread with characteristic bubbles and char marks from tandoor, folded on dark slate board, rustic restaurant style, professional food photography."),
    "butter_naan": ("butter_naan.png", "Pillowy Butter Naan fresh from tandoor, golden blistered surface brushed with melted butter and fresh cilantro, black slate board, professional food photography."),
    "rumali_roti": ("rumali_roti.png", "Traditional Indian Rumali Roti, paper-thin handkerchief bread draped over inverted wok, soft and pliable, served fresh, professional food photography."),
    "plain_paratha": ("plain_paratha.png", "Multi-layered Plain Paratha, golden-brown unleavened flatbread with flaky visible layers, served with white butter and spicy pickle, professional food photography."),
    "gobi_paratha": ("gobi_paratha.png", "Authentic Indian Gobi Paratha, golden stuffed cauliflower flatbread served with white butter, pickle and yogurt, professional food photography."),
    "methi_paratha": ("methi_paratha.png", "Healthy Indian Methi Paratha, golden flatbread flecked with green fenugreek leaves, served with yogurt and pickle, professional food photography."),
    "sambar": ("sambar.png", "Rich South Indian Sambar, lentil and vegetable tamarind stew with drumstick and pearl onions, reddish-brown, steaming hot in brass bowl, professional food photography."),
    "dal_makhani": ("dal_makhani.png", "Creamy black Dal Makhani, slow-cooked black lentils in buttery tomato gravy, garnished with cream and cilantro, dark black bowl, professional food photography."),
    "rajma": ("rajma.png", "Punjabi Rajma, red kidney beans in thick aromatic tomato-onion gravy, garnished with cream and cilantro, served with rice, professional food photography."),
    "palak_paneer": ("palak_paneer.png", "Vibrant Palak Paneer, white cottage cheese cubes in smooth bright green spinach gravy, garnished with cream swirl, copper bowl, professional food photography."),
    "chana_masala": ("chana_masala.png", "Spiced Chana Masala, chickpeas in dark tangy tomato-onion gravy with dried amchur, garnished with sliced onions and lemon, professional food photography."),
    "kadai_paneer": ("kadai_paneer.png", "Restaurant-style Kadai Paneer, paneer and bell peppers in spicy onion-tomato gravy with coriander, served in cast iron kadai, professional food photography."),
    "paneer_tikka_masala": ("paneer_tikka_masala.png", "Restaurant-style Paneer Tikka Masala, grilled paneer in rich creamy orange sauce, garnished with cream and cilantro, copper karahi, professional food photography."),
    "shahi_paneer": ("shahi_paneer.png", "Regal Shahi Paneer, paneer in royal cashew-cream golden gravy with saffron, garnished with rose petals, silver bowl, professional food photography."),
    "paneer_bhurji": ("paneer_bhurji.png", "Spiced Paneer Bhurji, scrambled cottage cheese with onions, tomatoes and green chilies, served hot in a pan, professional food photography."),
    "dum_aloo": ("dum_aloo.png", "Kashmiri Dum Aloo, whole baby potatoes in rich deep red yogurt-based gravy with aromatic spices, garnished with cilantro, copper bowl, professional food photography."),
    "aloo_methi": ("aloo_methi.png", "Home-style Aloo Methi, potato cubes and fresh fenugreek leaves dry-cooked with garlic and spices, served in a bowl, professional food photography."),
    "sarson_saag": ("sarson_saag.png", "Punjabi Sarson Da Saag, rich thick bright green mustard greens gravy with white butter dollop, makki ki roti on the side, professional food photography."),
    "achari_paneer": ("achari_paneer.png", "Tangy Achari Paneer, paneer in pickling-spiced yogurt gravy, garnished with cilantro, professional food photography."),
    "chicken_tikka_masala": ("chicken_tikka_masala.png", "Restaurant Chicken Tikka Masala, charred chicken in rich orange creamy tomato sauce, garnished with cream and cilantro, copper karahi, professional food photography."),
    "chicken_curry": ("chicken_curry.png", "Authentic Indian Chicken Curry, bone-in chicken in golden-red spiced onion-tomato gravy, garnished with fresh cilantro, clay pot, professional food photography."),
    "mutton_curry": ("mutton_curry.png", "Rich Indian Mutton Curry, tender bone-in mutton in thick dark aromatic gravy, garnished with fried onions and cilantro, copper vessel, professional food photography."),
    "keema": ("keema.png", "Aromatic Mutton Keema, minced meat with peas, onions and spices, semi-dry preparation, garnished with cilantro and lemon, professional food photography."),
    "rajma_chawal": ("rajma_chawal.png", "Comforting Rajma Chawal, plate of steamed basmati rice topped with red kidney bean curry, garnished with onions and cilantro, professional food photography."),
    "dal_fry": ("dal_fry.png", "Indian Dal Fry, yellow toor dal with onions, tomatoes, garlic and cumin, topped with a tadka of ghee, red chilies and cilantro, professional food photography."),
    "keerai_kootu": ("keerai_kootu.png", "Tamil Nadu Keerai Kootu, spinach with lentils and ground coconut gravy, tempered with mustard seeds and curry leaves, served in a small bowl, professional food photography."),
    "avial": ("avial.png", "Kerala Avial, mixed vegetables in fresh coconut and yogurt gravy, curl leaf garnish and coconut oil drizzle, authentic sadya dish, professional food photography."),
    "cabbage_thoran": ("cabbage_thoran.png", "Kerala Cabbage Thoran, shredded cabbage stir-fried with freshly grated coconut, mustard seeds and curry leaves, professional food photography."),
    "beans_poriyal": ("beans_poriyal.png", "South Indian Green Beans Poriyal, stir-fried with grated coconut, mustard seeds, urad dal and curry leaves, classic Tamil Nadu dry vegetable, professional food photography."),
    "carrot_poriyal": ("carrot_poriyal.png", "Colorful South Indian Carrot Poriyal, grated carrots stir-fried with coconut, mustard seeds and curry leaves, vibrant orange, professional food photography."),
    "beetroot_poriyal": ("beetroot_poriyal.png", "Vibrant South Indian Beetroot Poriyal, diced beetroot stir-fried with coconut and curry leaves, deep reddish-purple color, professional food photography."),
    "gobi_manchurian": ("gobi_manchurian.png", "Crispy Gobi Manchurian, golden fried cauliflower in dark sticky Indo-Chinese sauce with spring onions, plate with chopsticks, professional food photography, dark moody background."),
    "paneer_manchurian": ("paneer_manchurian.png", "Crispy Paneer Manchurian, golden battered paneer in dark glazy Indo-Chinese sauce with capsicum and spring onions, professional food photography."),
    "chilli_paneer": ("chilli_paneer.png", "Dry Chilli Paneer, crispy fried paneer tossed with colorful capsicum, onions and red chilies in spicy Indo-Chinese sauce, professional food photography."),
    "chilli_chicken": ("chilli_chicken.png", "Indo-Chinese Dry Chilli Chicken, crispy fried chicken with green chilies, capsicum and soy sauce, served in a black bowl, professional food photography."),
    "hakka_noodles": ("hakka_noodles.png", "Indo-Chinese Veg Hakka Noodles, stir-fried thin noodles with colorful vegetables and soy sauce, served with chopsticks, professional food photography."),
    "egg_hakka_noodles": ("egg_hakka_noodles.png", "Indo-Chinese Egg Hakka Noodles, stir-fried noodles with scrambled eggs and spring onions in dark soy sauce, bowl with chopsticks, professional food photography."),
    "schezwan_noodles": ("schezwan_noodles.png", "Spicy Indo-Chinese Schezwan Noodles, noodles tossed in fiery Schezwan sauce with vegetables, served in a bowl, professional food photography."),
    "veg_spring_rolls": ("veg_spring_rolls.png", "Crispy golden Veg Spring Rolls, deep-fried rolls sliced diagonally showing colorful vegetable filling, served with sweet chili sauce, professional food photography."),
    "samosa": ("samosa.png", "Classic Indian Samosa, crispy golden triangular pastry with spiced potato filling, served on newspaper with mint chutney and tamarind chutney, professional food photography."),
    "vada_pav": ("vada_pav.png", "Mumbai street food Vada Pav, spiced potato fritter inside soft pav bun with green chutney, garlic chutney and fried green chili, professional food photography."),
    "pani_puri": ("pani_puri.png", "Indian street food Pani Puri, crispy hollow puris filled with spiced potato dipped in tangy mint water, served on leaf plate, professional food photography."),
    "bhel_puri": ("bhel_puri.png", "Mumbai street food Bhel Puri, tangy mixture of puffed rice, sev, vegetables and tamarind chutney, served in clay bowl with spoon, professional food photography."),
    "aloo_tikki": ("aloo_tikki.png", "Crispy golden Aloo Tikki potato patties perfectly pan-fried, served with green chutney and tamarind sauce, professional street food photography."),
    "pakora": ("pakora.png", "Crispy Indian Pakoras, golden-fried mixed vegetable fritters in spiced chickpea batter, served in basket lined with newspaper, professional food photography."),
    "bread_pakora": ("bread_pakora.png", "Indian Bread Pakoda, sandwich bread stuffed with spiced potato, coated in chickpea batter and fried crispy, served with green chutney, professional food photography."),
    "mirchi_bajji": ("mirchi_bajji.png", "Andhra Mirchi Bajji, large green banana chili stuffed with potato, coated in chickpea batter and deep-fried golden, professional food photography."),
    "onion_bajji": ("onion_bajji.png", "Crispy South Indian Onion Bajji, thin onion slices in spiced chickpea batter fried till crispy and golden, served with green chutney, professional food photography."),
    "french_fries": ("french_fries.png", "Perfectly crispy golden French Fries in a bucket, sea salt crystals visible, tiny steam rising, served with ketchup, high contrast professional food photography."),
    "cheesy_fries": ("cheesy_fries.png", "Indulgent Cheesy Fries, crispy fries drenched in thick melted cheese sauce with paprika and chives, black tray, professional food photography."),
    "peri_peri_fries": ("peri_peri_fries.png", "Spicy Peri Peri Fries, crispy golden fries dusted with vibrant red peri peri seasoning, served in red striped wrapper, professional food photography."),
    "chicken_nuggets": ("chicken_nuggets.png", "Golden Crispy Chicken Nuggets, perfectly breaded nuggets in a basket with ketchup and honey mustard, professional food photography."),
    "chicken_wings": ("chicken_wings.png", "Sizzling BBQ Chicken Wings, charred honey-glazed wings served on a board with blue cheese dipping sauce and celery sticks, professional food photography."),
    "mozzarella_sticks": ("mozzarella_sticks.png", "Golden Mozzarella Sticks, crispy breaded cheese fingers with stretchy melted mozzarella oozing out, served with marinara sauce, professional food photography."),
    "onion_rings": ("onion_rings.png", "Crispy golden Onion Rings, thick battered fried onion rings stacked in a row, served with BBQ dipping sauce, professional food photography."),
    "masala_chai": ("masala_chai.png", "Authentic Indian Masala Chai, steaming hot golden-brown tea with spices in a small glass, warm cozy kitchen background, professional food photography."),
    "black_tea": ("black_tea.png", "Plain Black Tea, deep amber-golden color in a clear glass with a lemon slice on the rim, elegant minimal design, professional beverage photography."),
    "green_tea": ("green_tea.png", "Calming cup of Green Tea, pale yellow-green in a white ceramic cup, bamboo mat background, minimalist zen aesthetic, professional photography."),
    "black_coffee": ("black_coffee.png", "Bold Black Coffee Americano, deep dark rich espresso with thin crema in a ceramic cup, dark moody background, professional beverage photography."),
    "cappuccino": ("cappuccino.png", "Beautiful Cappuccino in white ceramic cup, thick microfoam milk with latte art leaf pattern, served on a saucer with a small cookie, professional coffee photography."),
    "latte": ("latte.png", "Cafe Latte in a clear glass, layered espresso and steamed milk with simple latte art, showing beautiful layers, professional coffee photography."),
    "cold_coffee": ("cold_coffee.png", "Tall glass of Cold Coffee, rich chilled espresso with cold milk and ice, topped with whipped cream and chocolate drizzle, professional beverage photography."),
    "chocolate_milkshake": ("chocolate_milkshake.png", "Indulgent Chocolate Milkshake in a tall glass, rich dark chocolate blended with milk and ice cream, topped with whipped cream and chocolate shavings, professional beverage photography."),
    "mango_lassi": ("mango_lassi.png", "Refreshing Mango Lassi in a tall clay cup, thick golden-yellow mango yogurt drink topped with cream and saffron strands, authentic Indian beverage, professional food photography."),
    "rose_falooda": ("rose_falooda.png", "Vibrant Indian Rose Falooda, tall glass with layers of pink rose milk, basil seeds, vermicelli noodles, ice cream and jelly, a stunning Mumbai drink, professional food photography."),
    "sugarcane_juice": ("sugarcane_juice.png", "Freshly pressed Sugarcane Juice in a clay glass, bright pale green refreshing juice served with straw, lemon and ginger, Indian street food aesthetic, professional food photography."),
    "coconut_water": ("coconut_water.png", "Fresh Tender Coconut Water served directly in green coconut with a straw, tropical and refreshing, professional food photography, beach vibes."),
    "gulab_jamun": ("gulab_jamun.png", "Soft dark golden-brown Gulab Jamun spheres soaked in rose and cardamom sugar syrup, garnished with saffron and rose petals, classic Indian dessert, professional food photography."),
    "rasmalai": ("rasmalai.png", "Elegant Indian Rasmalai, soft white cottage cheese patties in chilled saffron-infused cream, garnished with pistachios and rose petals, silver bowl, professional food photography."),
    "kheer": ("kheer.png", "Creamy Indian Rice Kheer, rich pudding with rice cooked in sweetened milk, garnished with saffron, cardamom, almonds and rose water, silver bowl, professional food photography."),
    "carrot_halwa": ("carrot_halwa.png", "Rich Gajar Ka Halwa, slow-cooked grated carrots in milk and ghee with cardamom, garnished with khoya and pistachios, served warm in copper bowl, professional food photography."),
    "besan_laddu": ("besan_laddu.png", "Round golden Indian Besan Laddu, roasted chickpea flour sweet balls infused with ghee, sugar and cardamom, arranged on a plate, professional food photography."),
    "motichoor_laddu": ("motichoor_laddu.png", "Vibrant orange Motichoor Laddu, tiny pearl-like fried boondi balls pressed into perfect round sweets, garnished with pistachios, decorative plate, professional food photography."),
    "mysore_pak": ("mysore_pak.png", "Karnataka Mysore Pak, dense golden ghee and besan sweet with crumbly porous texture, cut into squares on a plate, professional food photography."),
    "jalebi": ("jalebi.png", "Crispy golden orange Jalebi, spiral-shaped deep-fried sweet soaked in sugar syrup, glistening with saffron, piled on a plate, classic Indian dessert, professional food photography."),
    "ice_cream_vanilla": ("ice_cream_vanilla.png", "Two scoops of premium Vanilla Ice Cream in a white bowl, smooth creamy texture, garnished with a vanilla pod and wafer, professional food photography."),
    "ice_cream_chocolate": ("ice_cream_chocolate.png", "Rich Chocolate Ice Cream scoops in a dark bowl, glossy dark brown color with chocolate shavings on top, wafer roll, professional food photography."),
    "ice_cream_strawberry": ("ice_cream_strawberry.png", "Vibrant Strawberry Ice Cream scoops in a white bowl, bright pink color with real strawberry pieces and fresh strawberry on top, professional food photography."),
    "kulfi": ("kulfi.png", "Indian Kulfi, traditional dense creamy frozen dessert on a stick flavored with saffron and cardamom, served on crushed ice with rose water, professional food photography."),
    "boiled_egg": ("boiled_egg.png", "Perfectly Hard Boiled Egg sliced in half showing fully cooked golden-yellow yolk, sprinkled with sea salt and cracked black pepper, white background, professional food photography."),
    "omelette": ("omelette.png", "Fluffy French-style Omelette, perfectly golden folded egg omelette with herbs, served on a white plate with garnish, professional food photography."),
    "egg_bhurji": ("egg_bhurji.png", "Spicy Indian Egg Bhurji, scrambled eggs with onions, tomatoes, green chilies and spices, served in a pan with toasted bread, professional food photography."),
    "chicken_65": ("chicken_65.png", "Iconic South Indian Chicken 65, deep-fried spicy chicken pieces tossed with curry leaves and dried red chilies, bright red-orange color, professional food photography."),
    "chicken_tandoori": ("chicken_tandoori.png", "Classic Restaurant Chicken Tandoori, marinated chicken pieces with charred edges from tandoor, vibrant red-orange, on a sizzling platter with onion rings and lemon, professional food photography."),
    "banana": ("banana.png", "Bunch of ripe yellow Bananas on a white surface, perfect curved shape with slight brown speckles indicating ripeness, professional food photography."),
    "apple": ("apple.png", "Glossy fresh Red Apple on a white surface, vibrant ruby red with natural green stem, a single water drop on the skin, ultra realistic food photography."),
    "mango": ("mango.png", "Ripe golden Alphonso Mango cut open in hedgehog style showing bright orange flesh, wooden board, professional food photography."),
    "orange": ("orange.png", "Fresh peeled Orange with segments fanned out, bright vibrant citrus color, juicy glistening segments, green leaf beside it, professional food photography."),
    "pomegranate": ("pomegranate.png", "Cut-open Pomegranate showing vibrant ruby red arils, jewel-like seeds glistening on marble surface, professional food photography."),
    "almonds": ("almonds.png", "Handful of whole raw Almonds scattered on white marble surface, close-up showing brown skin and natural texture, clean minimalist food photography."),
    "cashews": ("cashews.png", "A bowl of whole raw Cashew Nuts, creamy white kidney-shaped nuts on wooden surface, professional food photography."),
    "walnuts": ("walnuts.png", "Walnuts, some whole and some cracked open showing brain-like kernel, on a wooden board, professional food photography."),
    "chia_seeds": ("chia_seeds.png", "Tiny black and white Chia Seeds on white marble surface with wooden spoon, some soaking in water showing gel formation, healthy superfood photography."),
    "oats_rolled": ("oats.png", "Rolled Oats in a white bowl, whole oat flakes with rustic texture, served with spoon and fresh blueberries on top, healthy breakfast, professional food photography."),
}

# Parse foods.js to find null items
content = foods_content
null_items = []
pos = 0
while True:
    id_m = re.search(r'"id":\s*"([^"]+)"', content[pos:])
    if not id_m: break
    abs_pos = pos + id_m.start()
    chunk = content[abs_pos:abs_pos+600]
    name_m = re.search(r'"name":\s*"([^"]+)"', chunk)
    img_m = re.search(r'"image":\s*(null|"([^"]*)")', chunk)
    if name_m:
        img_val = img_m.group(1) if img_m else 'missing'
        if img_val == 'null' or img_val == 'missing':
            item_id = id_m.group(1)
            null_items.append((item_id, name_m.group(1)))
    pos = abs_pos + 1

# Write clean markdown output
lines = [
    "# AI Image Generation Prompts",
    f"\nTotal images needed: {len(null_items)}",
    "\nFor each item below:",
    "1. Use the **prompt** to generate an image in any AI tool (Midjourney, DALL-E, Gemini, etc.)",
    "2. Save the image with EXACTLY the **filename** shown",
    "3. Drop it into: `frontend/assets/food/items/`",
    "4. Run `node auto_map_images.js` to update the database automatically",
    "\n---\n"
]

for item_id, name in null_items:
    if item_id in SPECIFIC_PROMPTS:
        filename, prompt = SPECIFIC_PROMPTS[item_id]
    else:
        filename = f"{item_id}.png"
        prompt = f"Professional food photography of {name}, authentic and accurate, served on elegant crockery, gourmet restaurant presentation, vivid colors, dark moody background with dramatic lighting."
    
    lines.append(f"## {name}")
    lines.append(f"- **Filename:** `{filename}`")
    lines.append(f"- **Prompt:** {prompt}")
    lines.append("")

with open("IMAGE_PROMPTS.md", "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

print(f"Done. Written {len(null_items)} prompts to IMAGE_PROMPTS.md")
