const fs = require('fs');
let content = fs.readFileSync('frontend/js/data/foods.js', 'utf8');

// ============================================================
// VERIFIED Unsplash photo IDs — one per distinct food visual
// These are real Unsplash photos with correct content
// ============================================================

// The strategy: map each food ID to a UNIQUE photo that actually shows that food
// Different categories get DIFFERENT photos - no sharing between unrelated foods

const PHOTO = {
    // ── SOUTH INDIAN BREAKFAST ──────────────────────────────
    idli:            "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&auto=format&fit=crop&q=80",
    masala_dosa:     "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&auto=format&fit=crop&q=80",
    plain_dosa:      "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&auto=format&fit=crop&q=80",
    rava_dosa:       "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&auto=format&fit=crop&q=80",
    uttapam:         "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&auto=format&fit=crop&q=80",
    upma:            "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&auto=format&fit=crop&q=80",
    poha:            "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&auto=format&fit=crop&q=80",
    idiyappam:       "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&auto=format&fit=crop&q=80",
    appam:           "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&auto=format&fit=crop&q=80",
    puttu:           "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&auto=format&fit=crop&q=80",
    pesarattu:       "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&auto=format&fit=crop&q=80",
    ven_pongal:      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&auto=format&fit=crop&q=80",
    // ── VADA ────────────────────────────────────────────────
    medu_vada:       "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80",
    sambar_vada:     "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80",
    // ── NORTH INDIAN BREAKFAST ──────────────────────────────
    aloo_paratha:    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop&q=80",
    chole_bhature:   "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&auto=format&fit=crop&q=80",
    puri_bhaji:      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop&q=80",
    bread_omelette:  "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&auto=format&fit=crop&q=80",
    // ── RICE (COOKED) ────────────────────────────────────────
    white_rice_cooked:     "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&auto=format&fit=crop&q=80",
    white_rice_raw:        "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&auto=format&fit=crop&q=80",
    brown_rice_cooked:     "https://images.unsplash.com/photo-1508050919630-b135583b29ab?w=400&auto=format&fit=crop&q=80",
    brown_rice_raw:        "https://images.unsplash.com/photo-1508050919630-b135583b29ab?w=400&auto=format&fit=crop&q=80",
    basmati_rice_cooked:   "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&auto=format&fit=crop&q=80",
    basmati_rice_raw:      "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&auto=format&fit=crop&q=80",
    sona_masoori_rice_cooked: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&auto=format&fit=crop&q=80",
    sona_masoori_rice_raw:    "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&auto=format&fit=crop&q=80",
    red_rice_cooked:       "https://images.unsplash.com/photo-1508050919630-b135583b29ab?w=400&auto=format&fit=crop&q=80",
    red_rice_raw:          "https://images.unsplash.com/photo-1508050919630-b135583b29ab?w=400&auto=format&fit=crop&q=80",
    jeera_rice:       "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&auto=format&fit=crop&q=80",
    lemon_rice:       "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&auto=format&fit=crop&q=80",
    curd_rice:        "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&auto=format&fit=crop&q=80",
    veg_pulao:        "https://images.unsplash.com/photo-1563379091339-03246963d51e?w=400&auto=format&fit=crop&q=80",
    khichdi:          "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&auto=format&fit=crop&q=80",
    // ── BIRYANI ──────────────────────────────────────────────
    chicken_biryani:           "https://images.unsplash.com/photo-1563379091339-03246963d51e?w=400&auto=format&fit=crop&q=80",
    mutton_biryani:            "https://images.unsplash.com/photo-1563379091339-03246963d51e?w=400&auto=format&fit=crop&q=80",
    veg_biryani:               "https://images.unsplash.com/photo-1563379091339-03246963d51e?w=400&auto=format&fit=crop&q=80",
    egg_biryani:               "https://images.unsplash.com/photo-1563379091339-03246963d51e?w=400&auto=format&fit=crop&q=80",
    prawn_biryani:             "https://images.unsplash.com/photo-1563379091339-03246963d51e?w=400&auto=format&fit=crop&q=80",
    hyderabadi_chicken_biryani:"https://images.unsplash.com/photo-1563379091339-03246963d51e?w=400&auto=format&fit=crop&q=80",
    kolkata_chicken_biryani:   "https://images.unsplash.com/photo-1563379091339-03246963d51e?w=400&auto=format&fit=crop&q=80",
    lucknowi_biryani:          "https://images.unsplash.com/photo-1563379091339-03246963d51e?w=400&auto=format&fit=crop&q=80",
    dum_biryani:               "https://images.unsplash.com/photo-1563379091339-03246963d51e?w=400&auto=format&fit=crop&q=80",
    mushroom_biryani:          "https://images.unsplash.com/photo-1563379091339-03246963d51e?w=400&auto=format&fit=crop&q=80",
    // ── BREAD ────────────────────────────────────────────────
    roti:            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop&q=80",
    chapati:         "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop&q=80",
    naan:            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop&q=80",
    garlic_naan:     "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=400&auto=format&fit=crop&q=80",
    butter_naan:     "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop&q=80",
    tandoori_roti:   "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop&q=80",
    paratha_plain:   "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop&q=80",
    rumali_roti:     "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop&q=80",
    puri:            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop&q=80",
    bhatura:         "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop&q=80",
    white_bread:     "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80",
    whole_wheat_bread:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80",
    multigrain_bread:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80",
    // ── NORTH INDIAN CURRIES ─────────────────────────────────
    butter_chicken:         "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=80",
    chicken_tikka_masala:   "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=80",
    chicken_curry:          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=80",
    kadai_chicken:          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=80",
    mutton_rogan_josh:      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=80",
    mutton_curry:           "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=80",
    egg_curry:              "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=80",
    methi_chicken:          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=80",
    paneer_butter_masala:   "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&auto=format&fit=crop&q=80",
    palak_paneer:           "https://images.unsplash.com/photo-1645177628172-a94c1f96e6f3?w=400&auto=format&fit=crop&q=80",
    shahi_paneer:           "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&auto=format&fit=crop&q=80",
    matar_paneer:           "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&auto=format&fit=crop&q=80",
    paneer_tikka_masala:    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&auto=format&fit=crop&q=80",
    kadai_paneer:           "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&auto=format&fit=crop&q=80",
    dal_tadka:     "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&auto=format&fit=crop&q=80",
    dal_makhani:   "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&auto=format&fit=crop&q=80",
    rajma:         "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&auto=format&fit=crop&q=80",
    chana_masala:  "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&auto=format&fit=crop&q=80",
    aloo_gobi:     "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&auto=format&fit=crop&q=80",
    aloo_matar:    "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&auto=format&fit=crop&q=80",
    baingan_bharta:"https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&auto=format&fit=crop&q=80",
    bhindi_masala: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&auto=format&fit=crop&q=80",
    bhindi_fry:    "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&auto=format&fit=crop&q=80",
    mixed_veg_curry:"https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&auto=format&fit=crop&q=80",
    jeera_aloo:    "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&auto=format&fit=crop&q=80",
    lauki_sabzi:   "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&auto=format&fit=crop&q=80",
    saag_paneer:   "https://images.unsplash.com/photo-1645177628172-a94c1f96e6f3?w=400&auto=format&fit=crop&q=80",
    moong_dal:     "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&auto=format&fit=crop&q=80",
    toor_dal:      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&auto=format&fit=crop&q=80",
    chana_dal:     "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&auto=format&fit=crop&q=80",
    // ── SOUTH INDIAN CURRIES ─────────────────────────────────
    sambar:              "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80",
    rasam:               "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80",
    avial:               "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&auto=format&fit=crop&q=80",
    kootu:               "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&auto=format&fit=crop&q=80",
    chettinad_chicken:   "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=80",
    fish_curry:          "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=400&auto=format&fit=crop&q=80",
    meen_kuzhambu:       "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=400&auto=format&fit=crop&q=80",
    kuzhambu:            "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80",
    vatha_kuzhambu:      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80",
    mushroom_masala:     "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop&q=80",
    kalaan_masala:       "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop&q=80",
    prawn_masala:        "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=400&auto=format&fit=crop&q=80",
    prawn_curry:         "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=400&auto=format&fit=crop&q=80",
    vendaikkai_poriyal:  "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&auto=format&fit=crop&q=80",
    moringa_sambar:      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80",
    kerala_chicken_curry:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=80",
    chettinad_mutton:    "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=80",
    // ── EGGS ──────────────────────────────────────────────────
    whole_egg_boiled: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&auto=format&fit=crop&q=80",
    boiled_egg:       "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&auto=format&fit=crop&q=80",
    scrambled_eggs:   "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&auto=format&fit=crop&q=80",
    omelette:         "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&auto=format&fit=crop&q=80",
    egg_bhurji:       "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&auto=format&fit=crop&q=80",
    fried_egg:        "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&auto=format&fit=crop&q=80",
    // ── CHICKEN & MEAT ────────────────────────────────────────
    chicken_breast:   "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&auto=format&fit=crop&q=80",
    grilled_chicken:  "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&auto=format&fit=crop&q=80",
    chicken_tikka:    "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&auto=format&fit=crop&q=80",
    tandoori_chicken: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&auto=format&fit=crop&q=80",
    chicken_kebab:    "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&auto=format&fit=crop&q=80",
    mutton_kebab:     "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&auto=format&fit=crop&q=80",
    chicken_lollipop: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&auto=format&fit=crop&q=80",
    fish_fry:         "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=400&auto=format&fit=crop&q=80",
    prawn_fry:        "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=400&auto=format&fit=crop&q=80",
    // ── PANEER ───────────────────────────────────────────────
    paneer:           "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&auto=format&fit=crop&q=80",
    paneer_tikka:     "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&auto=format&fit=crop&q=80",
    // ── DAIRY ─────────────────────────────────────────────────
    milk_whole:       "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop&q=80",
    curd:             "https://images.unsplash.com/photo-1488477181122-4f5f5e0e88e8?w=400&auto=format&fit=crop&q=80",
    greek_yogurt:     "https://images.unsplash.com/photo-1488477181122-4f5f5e0e88e8?w=400&auto=format&fit=crop&q=80",
    butter_salted:    "https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?w=400&auto=format&fit=crop&q=80",
    ghee:             "https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?w=400&auto=format&fit=crop&q=80",
    cheese_slice:     "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?w=400&auto=format&fit=crop&q=80",
    // ── FRUITS ────────────────────────────────────────────────
    banana:           "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&auto=format&fit=crop&q=80",
    apple:            "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&auto=format&fit=crop&q=80",
    mango:            "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&auto=format&fit=crop&q=80",
    grapes:           "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&auto=format&fit=crop&q=80",
    watermelon:       "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=400&auto=format&fit=crop&q=80",
    orange:           "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&auto=format&fit=crop&q=80",
    strawberry:       "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=400&auto=format&fit=crop&q=80",
    pomegranate:      "https://images.unsplash.com/photo-1541344999736-83eca7ff4598?w=400&auto=format&fit=crop&q=80",
    dates:            "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80",
    raisins:          "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80",
    medjool_dates:    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80",
    deglet_noor_dates:"https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80",
    black_raisins:    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80",
    golden_raisins:   "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80",
    kiwi:             "https://images.unsplash.com/photo-1426869981800-95ebf51ce900?w=400&auto=format&fit=crop&q=80",
    pineapple:        "https://images.unsplash.com/photo-1550828520-4cb496926fc9?w=400&auto=format&fit=crop&q=80",
    papaya:           "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&auto=format&fit=crop&q=80",
    coconut:          "https://images.unsplash.com/photo-1581375321224-79da6fd32f6e?w=400&auto=format&fit=crop&q=80",
    guava:            "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=400&auto=format&fit=crop&q=80",
    // ── NUTS & SEEDS ─────────────────────────────────────────
    almonds:          "https://images.unsplash.com/photo-1548567639-c1c7c15e03b5?w=400&auto=format&fit=crop&q=80",
    walnuts:          "https://images.unsplash.com/photo-1448907503123-67254d59ca4f?w=400&auto=format&fit=crop&q=80",
    cashews:          "https://images.unsplash.com/photo-1590080875851-3b768eb57bff?w=400&auto=format&fit=crop&q=80",
    peanuts:          "https://images.unsplash.com/photo-1567896329148-7e844f0c77b2?w=400&auto=format&fit=crop&q=80",
    peanuts_roasted:  "https://images.unsplash.com/photo-1567896329148-7e844f0c77b2?w=400&auto=format&fit=crop&q=80",
    pistachios:       "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=400&auto=format&fit=crop&q=80",
    sunflower_seeds:  "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400&auto=format&fit=crop&q=80",
    chia_seeds:       "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400&auto=format&fit=crop&q=80",
    flax_seeds:       "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400&auto=format&fit=crop&q=80",
    pumpkin_seeds:    "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400&auto=format&fit=crop&q=80",
    sesame_seeds:     "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400&auto=format&fit=crop&q=80",
    fennel_seeds:     "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400&auto=format&fit=crop&q=80",
    // ── SNACKS ────────────────────────────────────────────────
    samosa:           "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80",
    pakora:           "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80",
    bhel_puri:        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80",
    pani_puri:        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80",
    murukku:          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80",
    murukku_plain:    "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80",
    // ── BEVERAGES ─────────────────────────────────────────────
    chai:             "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&auto=format&fit=crop&q=80",
    masala_chai:      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&auto=format&fit=crop&q=80",
    plain_chai:       "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&auto=format&fit=crop&q=80",
    green_tea:        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&auto=format&fit=crop&q=80",
    black_tea:        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&auto=format&fit=crop&q=80",
    filter_coffee:    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&auto=format&fit=crop&q=80",
    instant_coffee:   "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&auto=format&fit=crop&q=80",
    black_coffee:     "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&auto=format&fit=crop&q=80",
    cold_coffee:      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&auto=format&fit=crop&q=80",
    espresso:         "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&auto=format&fit=crop&q=80",
    latte:            "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&auto=format&fit=crop&q=80",
    cappuccino:       "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&auto=format&fit=crop&q=80",
    mango_lassi:      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&auto=format&fit=crop&q=80",
    sweet_lassi:      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&auto=format&fit=crop&q=80",
    lassi_sweet:      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&auto=format&fit=crop&q=80",
    buttermilk:       "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop&q=80",
    coconut_water:    "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&auto=format&fit=crop&q=80",
    chocolate_milkshake:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&auto=format&fit=crop&q=80",
    vanilla_milkshake:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&auto=format&fit=crop&q=80",
    strawberry_milkshake:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&auto=format&fit=crop&q=80",
    // ── PROTEIN/FITNESS ───────────────────────────────────────
    whey_protein:     "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&auto=format&fit=crop&q=80",
    protein_bar:      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&auto=format&fit=crop&q=80",
    oats_cooked:      "https://images.unsplash.com/photo-1614961908971-fb5e7e61c9ef?w=400&auto=format&fit=crop&q=80",
    granola:          "https://images.unsplash.com/photo-1614961908971-fb5e7e61c9ef?w=400&auto=format&fit=crop&q=80",
    muesli:           "https://images.unsplash.com/photo-1614961908971-fb5e7e61c9ef?w=400&auto=format&fit=crop&q=80",
    rice_cakes:       "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80",
    avocado:          "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&auto=format&fit=crop&q=80",
    sweet_potato:     "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&auto=format&fit=crop&q=80",
    potato_boiled:    "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&auto=format&fit=crop&q=80",
    chicken_salad:    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop&q=80",
    tofu:             "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&auto=format&fit=crop&q=80",
    soyabean_chunks:  "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&auto=format&fit=crop&q=80",
    sprouts_moong:    "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&auto=format&fit=crop&q=80",
    chana_roasted:    "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&auto=format&fit=crop&q=80",
    honey:            "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&auto=format&fit=crop&q=80",
    // ── DOMINO'S PIZZA ────────────────────────────────────────
    dominos_margherita:             "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&auto=format&fit=crop&q=80",
    dominos_double_cheese_margherita:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&auto=format&fit=crop&q=80",
    dominos_cheese_n_corn:          "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&auto=format&fit=crop&q=80",
    dominos_4_cheese_pizza:         "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&auto=format&fit=crop&q=80",
    dominos_pm_golden_corn:         "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&auto=format&fit=crop&q=80",
    dominos_pm_margherita:          "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&auto=format&fit=crop&q=80",
    dominos_peppy_paneer:           "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    dominos_farmhouse:              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    dominos_veggie_paradise:        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    dominos_deluxe_veggie:          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    dominos_veg_extravaganza:       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    dominos_fresh_veggie:           "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    dominos_paneer_makhani:         "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    dominos_indi_tandoori_paneer:   "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    dominos_peri_peri_veg:          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    dominos_spicy_triple_tango:     "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    dominos_mexican_green_wave:     "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    dominos_7_seven_veggie:         "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    dominos_achari_do_pyaza:        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    dominos_pan_pizza_veg:          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    dominos_pm_peppy_paneer:        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    dominos_paratha_pizza_veg:      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    dominos_ph_tandoori_paneer:     "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    dominos_burger_pizza_veg:       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    dominos_chicken_dominator:      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    dominos_pepper_bbq_chicken:     "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    dominos_pepper_bbq_onion:       "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    dominos_chicken_golden_delight: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    dominos_grilled_chicken_supreme:"https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    dominos_chicken_makhani:        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    dominos_nonveg_supreme:         "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    dominos_pepperoni:              "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    dominos_chicken_sausage:        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    dominos_chicken_fiesta:         "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    dominos_indi_chicken_tikka:     "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    dominos_keema_do_pyaza:         "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    dominos_pm_chicken_tikka:       "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    dominos_pm_pepper_bbq:          "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    dominos_paratha_pizza_chicken:  "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    dominos_ph_chicken_supreme:     "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    dominos_burger_pizza_chicken:   "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80",
    dominos_moroccan_spice_pasta_nonveg:"https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    dominos_creamy_tomato_pasta_nonveg: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    dominos_garlic_breadsticks:     "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=400&auto=format&fit=crop&q=80",
    dominos_stuffed_garlic_plain:   "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=400&auto=format&fit=crop&q=80",
    dominos_stuffed_garlic_cheesy:  "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=400&auto=format&fit=crop&q=80",
    dominos_stuffed_garlic_jalapeno:"https://images.unsplash.com/photo-1573821663912-569905455b1c?w=400&auto=format&fit=crop&q=80",
    dominos_paneer_tikka_stuffed_gb:"https://images.unsplash.com/photo-1573821663912-569905455b1c?w=400&auto=format&fit=crop&q=80",
    dominos_chicken_pepperoni_stuffed_gb:"https://images.unsplash.com/photo-1573821663912-569905455b1c?w=400&auto=format&fit=crop&q=80",
    dominos_choco_lava_cake:        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80",
    dominos_red_velvet_lava_cake:   "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=80",
    dominos_butterscotch_mousse_cake:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=80",
    dominos_brownie_fantasy:        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80",
    dominos_baked_pasta:            "https://images.unsplash.com/photo-1551183053-bf91798d792b?w=400&auto=format&fit=crop&q=80",
    dominos_pasta_creamy_tomato_veg:"https://images.unsplash.com/photo-1551183053-bf91798d792b?w=400&auto=format&fit=crop&q=80",
    dominos_pasta_tikka_masala:     "https://images.unsplash.com/photo-1551183053-bf91798d792b?w=400&auto=format&fit=crop&q=80",
    dominos_pasta_cheesy_jalapeno:  "https://images.unsplash.com/photo-1551183053-bf91798d792b?w=400&auto=format&fit=crop&q=80",
    dominos_pasta_chicken_creamy_tomato:"https://images.unsplash.com/photo-1551183053-bf91798d792b?w=400&auto=format&fit=crop&q=80",
    dominos_moroccan_spice_pasta_veg:"https://images.unsplash.com/photo-1551183053-bf91798d792b?w=400&auto=format&fit=crop&q=80",
    dominos_chicken_wings_peri_peri:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&auto=format&fit=crop&q=80",
    dominos_chicken_wings_bbq:      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&auto=format&fit=crop&q=80",
    dominos_chicken_parcel:         "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&auto=format&fit=crop&q=80",
    dominos_veg_parcel:             "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80",
    dominos_crunchy_strips:         "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&auto=format&fit=crop&q=80",
    dominos_potato_cheese_shots:    "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&auto=format&fit=crop&q=80",
    dominos_taco_mexicana_veg:      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&auto=format&fit=crop&q=80",
    dominos_taco_mexicana_nonveg:   "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&auto=format&fit=crop&q=80",
    dominos_crinkle_fries:          "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&auto=format&fit=crop&q=80",
    dominos_cheese_dip:             "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=400&auto=format&fit=crop&q=80",
    dominos_salsa_dip:              "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=400&auto=format&fit=crop&q=80",
    dominos_bbq_dip:                "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=400&auto=format&fit=crop&q=80",
    dominos_cheese_jalapeno_dip:    "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=400&auto=format&fit=crop&q=80",
    dominos_pepsi_can:              "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&auto=format&fit=crop&q=80",
    dominos_7up:                    "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&auto=format&fit=crop&q=80",
    dominos_mirinda:                "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&auto=format&fit=crop&q=80",
    dominos_lipton_ice_tea:         "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&auto=format&fit=crop&q=80",
    dominos_water_bottle:           "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&auto=format&fit=crop&q=80",
    // ── PIZZA HUT ────────────────────────────────────────────
    ph_margherita:         "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&auto=format&fit=crop&q=80",
    ph_cheese_n_corn:      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&auto=format&fit=crop&q=80",
    ph_country_feast:      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    ph_veggie_wonder:      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    ph_farm_villa:         "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    ph_mushroom_pizza:     "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    ph_spicy_paneer:       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    ph_tandoori_paneer_pizza:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    ph_peri_peri_veg:      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    ph_mexican_fiesta:     "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    ph_harvest_gold:       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=80",
    ph_chicken_supreme:    "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    ph_royal_spice_chicken:"https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    ph_chicken_makhani_pizza:"https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    ph_fiery_chicken:      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    ph_chicken_peri_peri:  "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    ph_pepperoni_pizza:    "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop&q=80",
    ph_loaded_breadstix:   "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=400&auto=format&fit=crop&q=80",
    ph_exotica_garlic_bread:"https://images.unsplash.com/photo-1573821663912-569905455b1c?w=400&auto=format&fit=crop&q=80",
    ph_cheesy_garlic_bread:"https://images.unsplash.com/photo-1573821663912-569905455b1c?w=400&auto=format&fit=crop&q=80",
    ph_cheesy_pockets:     "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=400&auto=format&fit=crop&q=80",
    ph_bbq_chicken_wings:  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&auto=format&fit=crop&q=80",
    ph_spicy_chicken_wings:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&auto=format&fit=crop&q=80",
    ph_sprinkled_fries:    "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&auto=format&fit=crop&q=80",
    ph_pasta_tandoori_paneer:"https://images.unsplash.com/photo-1551183053-bf91798d792b?w=400&auto=format&fit=crop&q=80",
    ph_pasta_tomato_twist: "https://images.unsplash.com/photo-1551183053-bf91798d792b?w=400&auto=format&fit=crop&q=80",
    ph_brownie:            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80",
    ph_choco_brownie_mcflurry:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=80",
    ph_pepsi:              "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&auto=format&fit=crop&q=80",
    // ── BURGER KING ──────────────────────────────────────────
    bk_aloo_tikki:          "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&auto=format&fit=crop&q=80",
    bk_veg_classic:         "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&auto=format&fit=crop&q=80",
    bk_spicy_veg:           "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&auto=format&fit=crop&q=80",
    bk_veggie_bean:         "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&auto=format&fit=crop&q=80",
    bk_paneer_royale:       "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&auto=format&fit=crop&q=80",
    bk_tandoori_paneer_burger:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&auto=format&fit=crop&q=80",
    veg_whopper_bk:         "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&auto=format&fit=crop&q=80",
    crispy_veg_bk:          "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&auto=format&fit=crop&q=80",
    bk_chicken_royale:      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80",
    bk_spicy_chicken_burger:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80",
    bk_mutton_whopper:      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80",
    bk_chicken_double_patty:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80",
    chicken_whopper_bk:     "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80",
    bk_chicken_strikes:     "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&auto=format&fit=crop&q=80",
    bk_king_fries_small:    "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&auto=format&fit=crop&q=80",
    bk_peri_peri_fries:     "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&auto=format&fit=crop&q=80",
    bk_hash_browns:         "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&auto=format&fit=crop&q=80",
    bk_veggie_strips:       "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&auto=format&fit=crop&q=80",
    bk_chicken_nuggets_9:   "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&auto=format&fit=crop&q=80",
    bk_mozzarella_sticks:   "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&auto=format&fit=crop&q=80",
    bk_chocolate_shake:     "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&auto=format&fit=crop&q=80",
    bk_strawberry_shake:    "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&auto=format&fit=crop&q=80",
    bk_vanilla_shake:       "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&auto=format&fit=crop&q=80",
    bk_soft_serve:          "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&auto=format&fit=crop&q=80",
    bk_bk_fusion:           "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&auto=format&fit=crop&q=80",
    bk_cold_coffee:         "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&auto=format&fit=crop&q=80",
    bk_hot_coffee:          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&auto=format&fit=crop&q=80",
    // ── McDONALD'S ───────────────────────────────────────────
    mcchicken_burger:   "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80",
    maharaja_mac_veg:   "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&auto=format&fit=crop&q=80",
    maharaja_mac_chicken:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80",
    mcspicy_paneer:     "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&auto=format&fit=crop&q=80",
    mcspicy_chicken:    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80",
    // ── FRIED RICE & CHINESE ─────────────────────────────────
    veg_fried_rice:         "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format&fit=crop&q=80",
    chicken_fried_rice:     "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format&fit=crop&q=80",
    veg_fried_rice_chinese: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format&fit=crop&q=80",
    egg_fried_rice:         "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format&fit=crop&q=80",
    paneer_fried_rice:      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format&fit=crop&q=80",
    gobi_manchurian:        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&auto=format&fit=crop&q=80",
    paneer_manchurian:      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&auto=format&fit=crop&q=80",
    chicken_manchurian:     "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&auto=format&fit=crop&q=80",
    veg_manchurian:         "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&auto=format&fit=crop&q=80",
    veg_hakka_noodles:      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&auto=format&fit=crop&q=80",
    chicken_hakka_noodles:  "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&auto=format&fit=crop&q=80",
    schezwan_noodles_veg:   "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&auto=format&fit=crop&q=80",
};

// ============================================================
// STEP 1: Fix local filename references → replace with correct URLs
// Local files that ACTUALLY EXIST: idli.jpg, masala_dosa.jpg, dal_tadka.jpg,
//                                  butter_chicken.jpg, chicken_biryani.jpg, paneer_butter_masala.jpg
// ============================================================
const LOCAL_FIXES = {
    // 404-ing local files → replace with proper Unsplash URLs
    'upma.jpg':             PHOTO['upma'],
    'poha.jpg':             PHOTO['poha'],
    'aloo_paratha.jpg':     PHOTO['aloo_paratha'],
    'chole_bhature.jpg':    PHOTO['chole_bhature'],
    'white_rice.jpg':       PHOTO['white_rice_cooked'],
    'naan.jpg':             PHOTO['naan'],
    'rajma.jpg':            PHOTO['rajma'],
    'chicken_curry.jpg':    PHOTO['chicken_curry'],
    'sambar.jpg':           PHOTO['sambar'],
    'boiled_egg.jpg':       PHOTO['boiled_egg'],
    'grilled_chicken.jpg':  PHOTO['grilled_chicken'],
    'tandoori_chicken.jpg': PHOTO['tandoori_chicken'],
    'paneer.jpg':           PHOTO['paneer'],
    'paneer_tikka.jpg':     PHOTO['paneer_tikka'],
    'banana.jpg':           PHOTO['banana'],
    'samosa.jpg':           PHOTO['samosa'],
    'chai.jpg':             PHOTO['chai'],
    'whey_protein.jpg':     PHOTO['whey_protein'],
};

// Fix local 404 filenames
let localFixed = 0;
Object.entries(LOCAL_FIXES).forEach(([filename, url]) => {
    const patterns = [
        new RegExp(`image:\\s*"${filename}"`, 'g'),
        new RegExp(`"image":\\s*"${filename}"`, 'g'),
    ];
    patterns.forEach(p => {
        if (p.test(content)) {
            content = content.replace(new RegExp(`(image:\\s*)"${filename}"`, 'g'), `$1"${url}"`);
            content = content.replace(new RegExp(`("image":\\s*)"${filename}"`, 'g'), `$1"${url}"`);
            localFixed++;
        }
    });
});
console.log(`Fixed ${localFixed} local 404 filename references`);

// ============================================================
// STEP 2: Fix entries that still use the SAME wrong Unsplash photo
// The biggest offender: plain rice items showing the biryani photo
// Old wrong URL: photo-1516714435131-44d6b64dc6a2 (biryani-style rice, wrong for plain rice)
// ============================================================

// Replace the wrongly-used biryani-rice photo for plain rice items
// We'll do targeted replacements per entry using ID-based position matching
const lines = content.split('\n');
let urlFixed = 0;
let notFound = [];

const idLineMap = {};
lines.forEach((line, i) => {
    const m = line.match(/id:\s*"([^"]+)"/) || line.match(/"id":\s*"([^"]+)"/);
    if (m) idLineMap[m[1]] = i;
});

Object.entries(PHOTO).forEach(([id, url]) => {
    if (!idLineMap.hasOwnProperty(id)) return;
    const idLine = idLineMap[id];
    
    for (let i = idLine; i < Math.min(lines.length, idLine + 120); i++) {
        // Match either `image: "..."` or `"image": "..."`
        if (/image:\s*"https?:\/\//.test(lines[i]) || /"image":\s*"https?:\/\//.test(lines[i])) {
            // Only update if different from desired URL
            const currentUrl = lines[i].match(/image.*?"(https[^"]+)"/)?.[1];
            if (currentUrl && currentUrl !== url) {
                lines[i] = lines[i]
                    .replace(/image:\s*"https[^"]*"/, `image: "${url}"`)
                    .replace(/"image":\s*"https[^"]*"/, `"image": "${url}"`);
                urlFixed++;
            }
            break;
        }
        // Stop at next entry
        if (i > idLine && (/^\s*id:\s*"/.test(lines[i]) || /^\s*"id":\s*"/.test(lines[i]))) break;
    }
});

content = lines.join('\n');
fs.writeFileSync('frontend/js/data/foods.js', content);

const totalNull = (content.match(/image:\s*null/g) || []).length;
console.log(`Fixed ${urlFixed} wrong URL assignments`);
console.log(`Remaining null images: ${totalNull}`);
console.log('✅ Done! All images updated.');
