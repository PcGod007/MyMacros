/**
 * MyMacros — Indian Food Database
 * ~150+ food items with accurate nutritional data (per 100g)
 * Sources: Indian Food Composition Tables (IFCT), USDA, NIN-ICMR
 * 
 * servingType: "weight" | "quantity" | "volume"
 * - weight: measured in grams (paneer, chicken, etc.)
 * - quantity: measured in pieces (eggs, roti, idli, etc.)
 * - volume: measured in bowls/katori (dal, rice, curries, etc.)
 */
/**
 * Category metadata for UI display
 */
const FOOD_CATEGORIES = [
    { id: "all", label: "All", emoji: "🍽️", image: null },
    { id: "breakfast", label: "Breakfast Staples", emoji: "🍳", image: null },
    { id: "rice", label: "Rice & Grains", emoji: "🍛", image: null },
    { id: "breads", label: "Breads", emoji: "🫓", image: null },
    { id: "curries", label: "Curries & Dals", emoji: "🥘", image: null },
    { id: "vegetables", label: "Vegetables", emoji: "🥗", image: null },
    { id: "nonveg", label: "Non-Veg", emoji: "🍗", image: null },
    { id: "dairy", label: "Dairy", emoji: "🥛", image: null },
    { id: "fruits", label: "Fruits & Snacks", emoji: "🍌", image: null },
    { id: "beverages", label: "Beverages", emoji: "🥤", image: null },
    { id: "snacks", label: "Snacks & Sweets", emoji: "🥨", image: null },
    { id: "meals", label: "Meals & Fast Food", emoji: "🍔", image: null },
    { id: "supplements", label: "Supplements", emoji: "🥤", image: null },
    { id: "generic", label: "Generic", emoji: "🌐", image: null }
];

const FOOD_DATABASE = [

    // ==========================================
    // 🍳 BREAKFAST STAPLES
    // ==========================================
    {
        id: "idli_plain", name: "Idli (Plain)", category: "breakfast",
        subcategory: "South Indian", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 2 },
        servingOptions: [
            { label: "1 Idli", grams: 40 },
            { label: "2 Idlis", grams: 80 },
            { label: "3 Idlis", grams: 120 },
            { label: "4 Idlis", grams: 160 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 130, protein: 3.5, carbs: 24, fat: 1.2, fiber: 1.5 },
        "image": "idli_plate.png"
    },
    {
        id: "masala_dosa", name: "Masala Dosa", category: "breakfast",
        subcategory: "South Indian", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Dosa", grams: 120 },
            { label: "2 Dosas", grams: 240 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 165, protein: 3.8, carbs: 25, fat: 5.5, fiber: 1.8 },
        image: "masala_dosa.jpg"
    },
    {
        id: "plain_dosa", name: "Plain Dosa", category: "breakfast",
        subcategory: "South Indian", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Dosa", grams: 80 },
            { label: "2 Dosas", grams: 160 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 150, protein: 3.2, carbs: 27, fat: 3.5, fiber: 1.2 },
        image: "Dosa_with_chutney_202604211133.jpeg"
    },
    {
        id: "upma", name: "Upma (Sooji)", category: "breakfast",
        subcategory: "South Indian", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 120 },
            { label: "Regular Bowl", grams: 200 },
            { label: "Large Bowl", grams: 300 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 155, protein: 4.2, carbs: 22, fat: 5.8, fiber: 1.5 },
        "image": "upma.png"
    },
    {
        id: "poha", name: "Poha (Flattened Rice)", category: "breakfast",
        subcategory: "North Indian", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 120 },
            { label: "Regular Bowl", grams: 200 },
            { label: "Large Bowl", grams: 300 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 160, protein: 3.5, carbs: 28, fat: 4.2, fiber: 1.8 },
        image: "Indian_Poha_in_202604210139.jpeg"
    },
    {
        id: "aloo_paratha", name: "Aloo Paratha", category: "breakfast",
        subcategory: "North Indian", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "Small Paratha (80g)", grams: 80 },
            { label: "Regular Paratha (120g)", grams: 120 },
            { label: "1 Big Paratha (1.5x)", grams: 180 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 230, protein: 5, carbs: 30, fat: 10, fiber: 2.5 },
        image: "gobi_paratha.jpeg"
    },
    {
        id: "puri", name: "Puri (Deep Fried)", category: "breakfast",
        subcategory: "North Indian", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 2 },
        servingOptions: [
            { label: "1 Puri", grams: 30 },
            { label: "2 Puris", grams: 60 },
            { label: "3 Puris", grams: 90 },
            { label: "4 Puris", grams: 120 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 320, protein: 7, carbs: 42, fat: 14, fiber: 2 },
        image: "Puri_with_aloo_202604210139.jpeg"
    },
    {
        id: "medu_vada", name: "Medu Vada", category: "breakfast",
        subcategory: "South Indian", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 2 },
        servingOptions: [
            { label: "1 Vada", grams: 50 },
            { label: "2 Vadas", grams: 100 },
            { label: "3 Vadas", grams: 150 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 280, protein: 10, carbs: 28, fat: 14, fiber: 3 },
        "image": "medu_vada.png"
    },
    {
        id: "uttapam", name: "Uttapam", category: "breakfast",
        subcategory: "South Indian", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Uttapam", grams: 150 },
            { label: "2 Uttapams", grams: 300 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 170, protein: 5, carbs: 26, fat: 5, fiber: 2 },
        image: "Uttapam_with_onions_202604210139.jpeg"
    },
    {
        id: "chole_bhature", name: "Chole Bhature", category: "breakfast",
        subcategory: "North Indian", servingType: "quantity",
        defaultServing: { unit: "plate", amount: 1 },
        servingOptions: [
            { label: "1 Plate (2 Bhature + Chole)", grams: 350 },
            { label: "Half Plate", grams: 175 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 290, protein: 8, carbs: 35, fat: 13, fiber: 4 },
        image: "Chole_Bhature_with_202604210139.jpeg"
    },
    {
        id: "pongal", name: "Ven Pongal", category: "breakfast",
        subcategory: "South Indian", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 150 },
            { label: "Regular Bowl", grams: 250 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 150, protein: 4, carbs: 22, fat: 5, fiber: 1 },
        "image": "ven_pongal.png"
    },
    {
        id: "pesarattu", name: "Pesarattu (Moong Dosa)", category: "breakfast",
        subcategory: "South Indian", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Pesarattu", grams: 100 },
            { label: "2 Pesarattus", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 140, protein: 7, carbs: 20, fat: 3, fiber: 3 },
        image: "Pesarattu_served_on_202604210052.jpeg"
    },

    // ==========================================
    // 🍛 RICE & GRAINS
    // ==========================================
    {
        id: "white_rice_cooked", name: "White Rice (Cooked)", category: "rice",
        subcategory: "Staple", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 100 },
            { label: "Regular Bowl", grams: 180 },
            { label: "Large Bowl", grams: 280 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 130, protein: 2.7, carbs: 28, fat: 0.3, fiber: 0.4 },
        image: "Cooked_white_rice_202604210139.jpeg"
    },
    {
        id: "white_rice_raw", name: "White Rice (Raw / Uncooked)", category: "rice",
        subcategory: "Staple", servingType: "weight",
        defaultServing: { unit: "grams", amount: 60 },
        servingOptions: [
            { label: "1 Small Handful (~30g)", grams: 30 },
            { label: "¼ Cup Dry (~45g)", grams: 45 },
            { label: "⅓ Cup Dry (~60g)", grams: 60 },
            { label: "½ Cup Dry (~90g)", grams: 90 },
            { label: "1 Cup Dry (~185g)", grams: 185 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 360, protein: 6.8, carbs: 79, fat: 0.5, fiber: 1.3 },
        image: "Cooked_white_rice_202604210139.jpeg"
    },
    {
        id: "brown_rice_cooked", name: "Brown Rice (Cooked)", category: "rice",
        subcategory: "Staple", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 100 },
            { label: "Regular Bowl", grams: 180 },
            { label: "Large Bowl", grams: 280 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 123, protein: 2.7, carbs: 25.6, fat: 1, fiber: 1.8 },
        "image": "brown_rice.png"
    },
    {
        id: "brown_rice_raw", name: "Brown Rice (Raw / Uncooked)", category: "rice",
        subcategory: "Staple", servingType: "weight",
        defaultServing: { unit: "grams", amount: 60 },
        servingOptions: [
            { label: "1 Small Handful (~30g)", grams: 30 },
            { label: "¼ Cup Dry (~45g)", grams: 45 },
            { label: "⅓ Cup Dry (~60g)", grams: 60 },
            { label: "½ Cup Dry (~90g)", grams: 90 },
            { label: "1 Cup Dry (~185g)", grams: 185 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 352, protein: 7.5, carbs: 73, fat: 2.7, fiber: 3.5 },
        image: "brown_rice.png"
    },
    {
        id: "basmati_rice_cooked", name: "Basmati Rice (Cooked)", category: "rice",
        subcategory: "Staple", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 100 },
            { label: "Regular Bowl", grams: 180 },
            { label: "Large Bowl", grams: 280 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 121, protein: 2.5, carbs: 26.2, fat: 0.2, fiber: 0.3 },
        image: "brown_rice.png"
    },
    {
        id: "basmati_rice_raw", name: "Basmati Rice (Raw / Uncooked)", category: "rice",
        subcategory: "Staple", servingType: "weight",
        defaultServing: { unit: "grams", amount: 60 },
        servingOptions: [
            { label: "1 Small Handful (~30g)", grams: 30 },
            { label: "¼ Cup Dry (~45g)", grams: 45 },
            { label: "⅓ Cup Dry (~60g)", grams: 60 },
            { label: "½ Cup Dry (~90g)", grams: 90 },
            { label: "1 Cup Dry (~185g)", grams: 185 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 349, protein: 7.9, carbs: 77.8, fat: 0.4, fiber: 0.8 },
        image: "Cooked_Basmati_rice_202604210139.jpeg"
    },
    {
        id: "sona_masoori_rice_cooked", name: "Sona Masoori Rice (Cooked)", category: "rice",
        subcategory: "Staple", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 100 },
            { label: "Regular Bowl", grams: 180 },
            { label: "Large Bowl", grams: 280 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 125, protein: 2.6, carbs: 27.5, fat: 0.3, fiber: 0.4 },
        image: "Cooked_Sona_Masoori_202604210139.jpeg"
    },
    {
        id: "sona_masoori_rice_raw", name: "Sona Masoori Rice (Raw / Uncooked)", category: "rice",
        subcategory: "Staple", servingType: "weight",
        defaultServing: { unit: "grams", amount: 60 },
        servingOptions: [
            { label: "1 Small Handful (~30g)", grams: 30 },
            { label: "¼ Cup Dry (~45g)", grams: 45 },
            { label: "⅓ Cup Dry (~60g)", grams: 60 },
            { label: "½ Cup Dry (~90g)", grams: 90 },
            { label: "1 Cup Dry (~185g)", grams: 185 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 356, protein: 7.1, carbs: 79.5, fat: 0.5, fiber: 1.0 },
        image: "Cooked_Sona_Masoori_202604210139.jpeg"
    },
    {
        id: "red_rice_cooked", name: "Red Rice (Cooked)", category: "rice",
        subcategory: "Staple", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 100 },
            { label: "Regular Bowl", grams: 180 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 111, protein: 2.4, carbs: 23.5, fat: 0.9, fiber: 2.0 },
        image: "Cooked_Red_Rice_202604210139.jpeg"
    },
    {
        id: "red_rice_raw", name: "Red Rice (Raw / Uncooked)", category: "rice",
        subcategory: "Staple", servingType: "weight",
        defaultServing: { unit: "grams", amount: 60 },
        servingOptions: [
            { label: "¼ Cup Dry (~45g)", grams: 45 },
            { label: "⅓ Cup Dry (~60g)", grams: 60 },
            { label: "½ Cup Dry (~90g)", grams: 90 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 328, protein: 7.0, carbs: 68, fat: 2.7, fiber: 5.5 },
        image: "Cooked_Red_Rice_202604210139.jpeg"
    },
    {
        id: "jeera_rice", name: "Jeera Rice", category: "rice",
        subcategory: "Flavored Rice", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 120 },
            { label: "Regular Bowl", grams: 200 },
            { label: "Large Bowl", grams: 300 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 155, protein: 3, carbs: 28, fat: 3.5, fiber: 0.5 },
        image: "Jeera_rice_in_202604210139.jpeg"
    },
    {
        id: "chicken_biryani", name: "Chicken Biryani", category: "rice",
        subcategory: "Biryani", servingType: "volume",
        defaultServing: { unit: "plate", amount: 1 },
        servingOptions: [
            { label: "Small Plate", grams: 200 },
            { label: "Regular Plate", grams: 350 },
            { label: "Large Plate", grams: 500 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 190, protein: 9, carbs: 24, fat: 7, fiber: 0.8 },
        "image": "chicken_biryani.jpg"
    },
    {
        id: "veg_biryani", name: "Veg Biryani", category: "rice",
        subcategory: "Biryani", servingType: "volume",
        defaultServing: { unit: "plate", amount: 1 },
        servingOptions: [
            { label: "Small Plate", grams: 200 },
            { label: "Regular Plate", grams: 350 },
            { label: "Large Plate", grams: 500 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 165, protein: 4, carbs: 26, fat: 5, fiber: 2 },
        image: "Veg_Biryani_served_202604210139.jpeg"
    },
    {
        id: "veg_pulao", name: "Veg Pulao", category: "rice",
        subcategory: "Flavored Rice", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 150 },
            { label: "Regular Bowl", grams: 250 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 150, protein: 3, carbs: 25, fat: 4.5, fiber: 1.2 },
        image: "Veg_Pulao_with_202604210139.jpeg"
    },
    {
        id: "lemon_rice", name: "Lemon Rice", category: "rice",
        subcategory: "South Indian", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 150 },
            { label: "Regular Bowl", grams: 250 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 160, protein: 2.8, carbs: 29, fat: 3.8, fiber: 0.5 },
        image: "South_Indian_Lemon_202604210139.jpeg"
    },
    {
        id: "curd_rice", name: "Curd Rice", category: "rice",
        subcategory: "South Indian", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 150 },
            { label: "Regular Bowl", grams: 250 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 120, protein: 4, carbs: 20, fat: 2.5, fiber: 0.3 },
        image: "Curd_Rice_served_202604210210.jpeg"
    },

    // ==========================================
    // 🫓 BREADS
    // ==========================================
    {
        id: "roti_wheat", name: "Roti / Chapati (Wheat)", category: "breads",
        subcategory: "Indian Bread", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 2 },
        servingOptions: [
            { label: "1 Roti", grams: 35 },
            { label: "2 Rotis", grams: 70 },
            { label: "3 Rotis", grams: 105 },
            { label: "4 Rotis", grams: 140 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 297, protein: 9.8, carbs: 56, fat: 3.7, fiber: 4.5 },
        "image": "roti.png"
    },
    {
        id: "naan", name: "Naan (Tandoor)", category: "breads",
        subcategory: "Indian Bread", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Naan", grams: 90 },
            { label: "2 Naans", grams: 180 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 310, protein: 9, carbs: 54, fat: 7, fiber: 2 },
        image: "Butter_Naan_on_202604210139.jpeg"
    },
    {
        id: "butter_naan", name: "Butter Naan", category: "breads",
        subcategory: "Indian Bread", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Naan", grams: 100 },
            { label: "2 Naans", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 340, protein: 8.5, carbs: 50, fat: 12, fiber: 1.8 },
        image: "Butter_Naan_on_202604210139.jpeg"
    },
    {
        id: "garlic_naan", name: "Garlic Naan", category: "breads",
        subcategory: "Indian Bread", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Naan", grams: 100 },
            { label: "2 Naans", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 330, protein: 8.5, carbs: 52, fat: 10, fiber: 2 },
        "image": "garlic_naan.png"
    },
    {
        id: "paratha_plain", name: "Plain Paratha", category: "breads",
        subcategory: "Indian Bread", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "Small Paratha (60g)", grams: 60 },
            { label: "Regular Paratha (80g)", grams: 80 },
            { label: "1 Big Paratha (1.5x)", grams: 120 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 260, protein: 6, carbs: 36, fat: 10, fiber: 2.5 },
        image: "paneer_paratha.png"
    },
    {
        id: "rumali_roti", name: "Rumali Roti", category: "breads",
        subcategory: "Indian Bread", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Roti", grams: 40 },
            { label: "2 Rotis", grams: 80 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 240, protein: 8, carbs: 48, fat: 2, fiber: 2 },
        image: "Rumali_Roti_on_202604210139.jpeg"
    },
    {
        id: "bhakri", name: "Bhakri (Jowar/Bajra)", category: "breads",
        subcategory: "Regional", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Bhakri", grams: 60 },
            { label: "2 Bhakris", grams: 120 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 340, protein: 10, carbs: 66, fat: 3.5, fiber: 6 },
        image: "Bhakri_with_white_202604210139.jpeg"
    },

    // ==========================================
    // 🥘 CURRIES & DALS
    // ==========================================
    {
        id: "dal_tadka", name: "Dal Tadka (Toor)", category: "curries",
        subcategory: "Dal", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 120 },
            { label: "Regular Katori", grams: 150 },
            { label: "Large Bowl", grams: 250 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 110, protein: 7, carbs: 18, fat: 1.5, fiber: 4 },
        "image": "dal_tadka.jpg"
    },
    {
        id: "rajma", name: "Rajma (Kidney Beans Curry)", category: "curries",
        subcategory: "North Indian", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 130 },
            { label: "Regular Katori", grams: 180 },
            { label: "Large Bowl", grams: 280 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 130, protein: 8.5, carbs: 20, fat: 2, fiber: 6 },
        image: "Rajma_Curry_gourmet_202604210108.jpeg"
    },
    {
        id: "chole", name: "Chole / Chana Masala", category: "curries",
        subcategory: "North Indian", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 130 },
            { label: "Regular Katori", grams: 180 },
            { label: "Large Bowl", grams: 280 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 140, protein: 7, carbs: 22, fat: 3, fiber: 5 },
        image: "Chole_Bhature_with_202604210139.jpeg"
    },
    {
        id: "paneer_butter_masala", name: "Paneer Butter Masala", category: "curries",
        subcategory: "North Indian", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 150 },
            { label: "Regular Katori", grams: 200 },
            { label: "Large Bowl", grams: 300 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 220, protein: 10, carbs: 8, fat: 17, fiber: 0.8 },
        "image": "paneer_butter_masala.jpg"
    },
    {
        id: "palak_paneer", name: "Palak Paneer", category: "curries",
        subcategory: "North Indian", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 150 },
            { label: "Regular Katori", grams: 200 },
            { label: "Large Bowl", grams: 300 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 180, protein: 9, carbs: 6, fat: 14, fiber: 2 },
        image: "Palak_Paneer_in_202604210139.jpeg"
    },
    {
        id: "dal_makhani", name: "Dal Makhani", category: "curries",
        subcategory: "North Indian", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 150 },
            { label: "Regular Katori", grams: 200 },
            { label: "Large Bowl", grams: 300 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 150, protein: 6.5, carbs: 15, fat: 7, fiber: 3.5 },
        image: "Dal_Makhani_in_202604210139.jpeg"
    },
    {
        id: "chicken_curry", name: "Chicken Curry", category: "curries",
        subcategory: "Non-Veg", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 150 },
            { label: "Regular Katori", grams: 200 },
            { label: "Large Bowl", grams: 300 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 175, protein: 15, carbs: 5, fat: 10, fiber: 1 },
        image: "Chettinad_Chicken_Curry_202604210052.jpeg"
    },
    {
        id: "butter_chicken", name: "Butter Chicken", category: "curries",
        subcategory: "Non-Veg", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 150 },
            { label: "Regular Katori", grams: 200 },
            { label: "Large Bowl", grams: 300 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 215, protein: 14, carbs: 6, fat: 15, fiber: 0.5 },
        "image": "butter_chicken.jpg"
    },
    {
        id: "egg_curry", name: "Egg Curry", category: "curries",
        subcategory: "Non-Veg", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "1 Egg Curry (1 Katori)", grams: 200 },
            { label: "2 Egg Curry", grams: 350 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 145, protein: 9, carbs: 5, fat: 10, fiber: 1 },
        image: "Indian_Egg_Curry_202604210140.jpeg"
    },
    {
        id: "fish_curry", name: "Fish Curry", category: "curries",
        subcategory: "Non-Veg", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 150 },
            { label: "Regular Katori", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 140, protein: 14, carbs: 4, fat: 7, fiber: 0.5 },
        image: "Indian_Fish_Curry_202604210139.jpeg"
    },
    {
        id: "sambar", name: "Sambar", category: "curries",
        subcategory: "South Indian", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 120 },
            { label: "Regular Katori", grams: 180 },
            { label: "Large Bowl", grams: 280 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 65, protein: 3, carbs: 10, fat: 1.5, fiber: 2.5 },
        image: "Sambar_in_traditional_202604210139.jpeg"
    },
    {
        id: "rasam", name: "Rasam", category: "curries",
        subcategory: "South Indian", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 120 },
            { label: "Regular Bowl", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 30, protein: 1.5, carbs: 5, fat: 0.5, fiber: 0.5 },
        image: "Rasam_soup_in_202604210139.jpeg"
    },
    {
        id: "kadhi", name: "Kadhi (Pakora)", category: "curries",
        subcategory: "North Indian", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 150 },
            { label: "Regular Katori", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 110, protein: 4, carbs: 10, fat: 6, fiber: 1 },
        image: "Kadhi_Pakora_served_202604210140.jpeg"
    },
    {
        id: "mutton_curry", name: "Mutton Curry", category: "curries",
        subcategory: "Non-Veg", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 150 },
            { label: "Regular Katori", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 195, protein: 16, carbs: 4, fat: 13, fiber: 0.5 },
        image: "Indian_Mutton_Curry_202604210139.jpeg"
    },
    {
        id: "shahi_paneer", name: "Shahi Paneer", category: "curries",
        subcategory: "North Indian", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 150 },
            { label: "Regular Katori", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 240, protein: 10, carbs: 7, fat: 19, fiber: 1 },
        image: "Achari_Paneer_in_202604210052.jpeg"
    },

    // ==========================================
    // 🥗 VEGETABLES (Sabzi)
    // ==========================================
    {
        id: "aloo_gobi", name: "Aloo Gobi", category: "vegetables",
        subcategory: "Dry Sabzi", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 120 },
            { label: "Regular Katori", grams: 180 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 120, protein: 3, carbs: 14, fat: 6, fiber: 3 },
        image: "Aloo_Gobi_curry_202604210140.jpeg"
    },
    {
        id: "bhindi_fry", name: "Bhindi Fry (Okra)", category: "vegetables",
        subcategory: "Dry Sabzi", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 100 },
            { label: "Regular Katori", grams: 150 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 95, protein: 2.5, carbs: 8, fat: 6, fiber: 4 },
        image: "Bhindi_Fry_on_202604210140.jpeg"
    },
    {
        id: "palak_sabzi", name: "Palak / Spinach Sabzi", category: "vegetables",
        subcategory: "Green Sabzi", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 120 },
            { label: "Regular Katori", grams: 180 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 70, protein: 3.5, carbs: 5, fat: 4, fiber: 3 },
        image: "Spinach_sabzi_in_202604210139.jpeg"
    },
    {
        id: "baingan_bharta", name: "Baingan Bharta", category: "vegetables",
        subcategory: "Sabzi", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 120 },
            { label: "Regular Katori", grams: 180 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 85, protein: 2, carbs: 8, fat: 5, fiber: 3.5 },
        image: "Baingan_Bharta_curry_202604210139.jpeg"
    },
    {
        id: "mixed_veg_curry", name: "Mixed Veg Curry", category: "vegetables",
        subcategory: "Gravy Sabzi", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 150 },
            { label: "Regular Katori", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 100, protein: 3, carbs: 10, fat: 5.5, fiber: 3 },
        image: "Mixed_Veg_Curry_202604210139.jpeg"
    },
    {
        id: "matar_paneer", name: "Matar Paneer", category: "vegetables",
        subcategory: "Gravy Sabzi", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 150 },
            { label: "Regular Katori", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 180, protein: 9, carbs: 8, fat: 13, fiber: 2 },
        image: "Matar_Paneer_curry_202604210139.jpeg"
    },
    {
        id: "lauki_sabzi", name: "Lauki / Bottle Gourd Sabzi", category: "vegetables",
        subcategory: "Light Sabzi", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 120 },
            { label: "Regular Katori", grams: 180 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 45, protein: 1.5, carbs: 7, fat: 1.5, fiber: 1.5 },
        image: "Lauki_Sabzi_in_202604210139.jpeg"
    },
    {
        id: "tinda_sabzi", name: "Tinda Sabzi", category: "vegetables",
        subcategory: "Light Sabzi", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 120 },
            { label: "Regular Katori", grams: 180 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 50, protein: 1.5, carbs: 8, fat: 1.5, fiber: 2 },
        image: "Tinda_Sabzi_on_202604210139.jpeg"
    },

    // ==========================================
    // 🍗 NON-VEG
    // ==========================================
    {
        id: "whole_egg_boiled", name: "Whole Egg (Boiled)", category: "nonveg",
        subcategory: "Eggs", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Egg", grams: 50 },
            { label: "2 Eggs", grams: 100 },
            { label: "3 Eggs", grams: 150 },
            { label: "4 Eggs", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 155, protein: 13, carbs: 1.1, fat: 11, fiber: 0 },
        image: "Boiled_eggs_on_202604210139.jpeg"
    },
    {
        id: "egg_white_boiled", name: "Egg White (Boiled)", category: "nonveg",
        subcategory: "Eggs", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 2 },
        servingOptions: [
            { label: "1 White", grams: 33 },
            { label: "2 Whites", grams: 66 },
            { label: "3 Whites", grams: 99 },
            { label: "4 Whites", grams: 132 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 52, protein: 11, carbs: 0.7, fat: 0.2, fiber: 0 },
        image: "Boiled_egg_whites_202604210210.jpeg"
    },
    {
        id: "egg_bhurji", name: "Egg Bhurji (Scrambled)", category: "nonveg",
        subcategory: "Eggs", servingType: "quantity",
        defaultServing: { unit: "plate", amount: 1 },
        servingOptions: [
            { label: "2 Egg Bhurji", grams: 120 },
            { label: "3 Egg Bhurji", grams: 180 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 180, protein: 12, carbs: 3, fat: 13, fiber: 0.5 },
        image: "Indian_Egg_Bhurji_202604210210.jpeg"
    },
    {
        id: "omelette", name: "Omelette (2 Eggs)", category: "nonveg",
        subcategory: "Eggs", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Omelette (2 Egg)", grams: 120 },
            { label: "1 Omelette (3 Egg)", grams: 175 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 175, protein: 12, carbs: 1.5, fat: 13, fiber: 0.3 },
        image: "Indian_Omelette_on_202604210139.jpeg"
    },
    {
        id: "grilled_chicken_breast", name: "Grilled Chicken Breast", category: "nonveg",
        subcategory: "Chicken", servingType: "weight",
        defaultServing: { unit: "g", amount: 150 },
        servingOptions: [
            { label: "Small Piece (100g)", grams: 100 },
            { label: "Regular Piece (150g)", grams: 150 },
            { label: "Large Piece (200g)", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0 },
        image: "Grilled_chicken_breasts_202604210210.jpeg"
    },
    {
        id: "tandoori_chicken", name: "Tandoori Chicken", category: "nonveg",
        subcategory: "Chicken", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 2 },
        servingOptions: [
            { label: "1 Piece (Leg)", grams: 120 },
            { label: "2 Pieces", grams: 240 },
            { label: "Quarter Plate", grams: 300 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 190, protein: 25, carbs: 3, fat: 8, fiber: 0.5 },
        image: "Tandoori_chicken_served_202604210210.jpeg"
    },
    {
        id: "chicken_tikka", name: "Chicken Tikka", category: "nonveg",
        subcategory: "Chicken", servingType: "weight",
        defaultServing: { unit: "g", amount: 150 },
        servingOptions: [
            { label: "Small Plate (100g)", grams: 100 },
            { label: "Regular Plate (150g)", grams: 150 },
            { label: "Large Plate (200g)", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 185, protein: 24, carbs: 4, fat: 8, fiber: 0.5 },
        image: "Chicken_Tikka_served_202604210210.jpeg"
    },
    {
        id: "fish_fry", name: "Fish Fry", category: "nonveg",
        subcategory: "Seafood", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Piece", grams: 100 },
            { label: "2 Pieces", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 220, protein: 18, carbs: 10, fat: 12, fiber: 0.5 },
        image: "Indian_Fish_Curry_202604210139.jpeg"
    },
    {
        id: "keema_mutton", name: "Keema (Mutton Mince)", category: "nonveg",
        subcategory: "Mutton", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 120 },
            { label: "Regular Katori", grams: 180 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 210, protein: 18, carbs: 4, fat: 14, fiber: 0.5 },
        image: "Keema_Matar_curry_202604210210.jpeg"
    },

    // ==========================================
    // 🥛 DAIRY
    // ==========================================
    {
        id: "paneer_raw", name: "Paneer (Raw/Fresh)", category: "dairy",
        subcategory: "Cheese", servingType: "weight",
        defaultServing: { unit: "g", amount: 100 },
        servingOptions: [
            { label: "Small Piece (50g)", grams: 50 },
            { label: "Regular (100g)", grams: 100 },
            { label: "Large (150g)", grams: 150 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 265, protein: 18.3, carbs: 3.6, fat: 20.8, fiber: 0 },
        image: "Raw_paneer_on_202604210210.jpeg"
    },
    {
        id: "paneer_tikka", name: "Paneer Tikka", category: "dairy",
        subcategory: "Snacks", servingType: "weight",
        defaultServing: { unit: "g", amount: 150 },
        servingOptions: [
            { label: "Small Plate (100g)", grams: 100 },
            { label: "Standard Plate (150g)", grams: 150 },
            { label: "Large Plate (200g)", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 265, protein: 18.5, carbs: 7.2, fat: 18.8, fiber: 1.2 },
        image: "Paneer_Tikka_Masala_202604210052.jpeg"
    },
    {
        id: "milk_whole", name: "Milk (Full Cream)", category: "dairy",
        subcategory: "Milk", servingType: "volume",
        defaultServing: { unit: "glass", amount: 1 },
        servingOptions: [
            { label: "Small Glass (150ml)", grams: 155 },
            { label: "Regular Glass (250ml)", grams: 258 },
            { label: "Large Glass (400ml)", grams: 412 },
            { label: "Custom (ml)", grams: null }
        ],
        per100g: { calories: 62, protein: 3.2, carbs: 4.8, fat: 3.3, fiber: 0 },
        image: "Badam_Milk_served_202604210052.jpeg"
    },
    {
        id: "milk_toned", name: "Milk (Toned)", category: "dairy",
        subcategory: "Milk", servingType: "volume",
        defaultServing: { unit: "glass", amount: 1 },
        servingOptions: [
            { label: "Small Glass (150ml)", grams: 155 },
            { label: "Regular Glass (250ml)", grams: 258 },
            { label: "Custom (ml)", grams: null }
        ],
        per100g: { calories: 50, protein: 3.2, carbs: 4.8, fat: 1.5, fiber: 0 },
        image: "Toned_Milk_in_202604210210.jpeg"
    },
    {
        id: "curd", name: "Curd / Dahi (Full Fat)", category: "dairy",
        subcategory: "Dairy", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 100 },
            { label: "Regular Katori", grams: 150 },
            { label: "Large Bowl", grams: 250 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 60, protein: 3.1, carbs: 4.9, fat: 3.0, fiber: 0 },
        image: "Curd_in_clay_202604210139.jpeg"
    },
    {
        id: "lassi_sweet", name: "Lassi (Sweet)", category: "dairy",
        subcategory: "Beverages", servingType: "volume",
        defaultServing: { unit: "glass", amount: 1 },
        servingOptions: [
            { label: "Small Glass (200ml)", grams: 210 },
            { label: "Regular Glass (350ml)", grams: 368 },
            { label: "Custom (ml)", grams: null }
        ],
        per100g: { calories: 85, protein: 2.5, carbs: 14, fat: 2, fiber: 0 },
        image: "Sweet_Lassi_in_202604210210.jpeg"
    },
    {
        id: "buttermilk", name: "Chaas / Buttermilk", category: "dairy",
        subcategory: "Beverages", servingType: "volume",
        defaultServing: { unit: "glass", amount: 1 },
        servingOptions: [
            { label: "Regular Glass (250ml)", grams: 255 },
            { label: "Large Glass (400ml)", grams: 408 },
            { label: "Custom (ml)", grams: null }
        ],
        per100g: { calories: 22, protein: 1.5, carbs: 3, fat: 0.5, fiber: 0 },
        image: "Chaas_buttermilk_in_202604210139.jpeg"
    },
    {
        id: "ghee", name: "Ghee (Clarified Butter)", category: "dairy",
        subcategory: "Fats", servingType: "weight",
        defaultServing: { unit: "tsp", amount: 1 },
        servingOptions: [
            { label: "1 tsp (5g)", grams: 5 },
            { label: "1 tbsp (15g)", grams: 15 },
            { label: "2 tbsp (30g)", grams: 30 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 900, protein: 0, carbs: 0, fat: 99.8, fiber: 0 },
        image: "Cow_Ghee_in_202604210210.jpeg"
    },
    {
        id: "amul_butter_salted", name: "Amul Salted Butter", category: "dairy",
        subcategory: "Butter", servingType: "weight",
        defaultServing: { unit: "tsp", amount: 1 },
        servingOptions: [
            { label: "1 tsp (5g)", grams: 5 },
            { label: "1 tbsp (15g)", grams: 15 },
            { label: "Small Cube (10g)", grams: 10 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 722, protein: 0.6, carbs: 0, fat: 80, fiber: 0 },
        image: "exp2/amul_salted.png"
    },
    {
        id: "amul_butter_unsalted", name: "Amul Unsalted Butter", category: "dairy",
        subcategory: "Butter", servingType: "weight",
        defaultServing: { unit: "tsp", amount: 1 },
        servingOptions: [
            { label: "1 tsp (5g)", grams: 5 },
            { label: "1 tbsp (15g)", grams: 15 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 740, protein: 0, carbs: 0, fat: 82, fiber: 0 },
        image: "exp2/amul_unsalted.jpeg"
    },
    {
        id: "amul_garlic_butter", name: "Amul Garlic & Herbs Butter", category: "dairy",
        subcategory: "Butter", servingType: "weight",
        defaultServing: { unit: "tsp", amount: 1 },
        servingOptions: [
            { label: "1 tsp (5g)", grams: 5 },
            { label: "1 tbsp (15g)", grams: 15 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 710, protein: 1, carbs: 1, fat: 78, fiber: 0 },
        image: "exp2/amul_garlic.jpeg"
    },
    {
        id: "milky_mist_butter_unsalted", name: "Milky Mist Unsalted Butter", category: "dairy",
        subcategory: "Butter", servingType: "weight",
        defaultServing: { unit: "tsp", amount: 1 },
        servingOptions: [
            { label: "1 tsp (5g)", grams: 5 },
            { label: "1 tbsp (15g)", grams: 15 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 740, protein: 0, carbs: 0, fat: 82, fiber: 0 },
        image: "exp2/milky_mist_unsalted.jpeg"
    },
    {
        id: "aavin_butter_unsalted", name: "Aavin Unsalted Butter", category: "dairy",
        subcategory: "Butter", servingType: "weight",
        defaultServing: { unit: "tsp", amount: 1 },
        servingOptions: [
            { label: "1 tsp (5g)", grams: 5 },
            { label: "1 tbsp (15g)", grams: 15 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 740, protein: 0, carbs: 0, fat: 82, fiber: 0 },
        image: "exp2/aavin_unsalted.jpeg"
    },
    {
        id: "amul_milk_moti", name: "Amul Moti Milk (Full Cream)", category: "dairy",
        subcategory: "Milk", servingType: "volume",
        defaultServing: { unit: "glass", amount: 1 },
        servingOptions: [
            { label: "Small Glass (150ml)", grams: 155 },
            { label: "Regular Glass (250ml)", grams: 258 },
            { label: "Custom (ml)", grams: null }
        ],
        per100g: { calories: 87, protein: 3.2, carbs: 4.8, fat: 6.0, fiber: 0 },
        image: "exp2/amul_moti.jpeg"
    },
    {
        id: "amul_milk_taaza", name: "Amul Taaza Milk (Toned)", category: "dairy",
        subcategory: "Milk", servingType: "volume",
        defaultServing: { unit: "glass", amount: 1 },
        servingOptions: [
            { label: "Small Glass (150ml)", grams: 155 },
            { label: "Regular Glass (250ml)", grams: 258 },
            { label: "Custom (ml)", grams: null }
        ],
        per100g: { calories: 58, protein: 3.0, carbs: 4.7, fat: 3.0, fiber: 0 },
        image: "exp2/amul_taaza.jpeg"
    },
    {
        id: "aavin_milk_blue", name: "Aavin Milk (Blue/Toned)", category: "dairy",
        subcategory: "Milk", servingType: "volume",
        defaultServing: { unit: "glass", amount: 1 },
        servingOptions: [
            { label: "Small Glass (150ml)", grams: 155 },
            { label: "Regular Glass (250ml)", grams: 258 },
            { label: "Custom (ml)", grams: null }
        ],
        per100g: { calories: 58, protein: 3.2, carbs: 4.8, fat: 3.0, fiber: 0 },
        image: "exp2/aavin_toned.jpeg"
    },
    {
        id: "aavin_milk_orange", name: "Aavin Milk (Orange/Full Cream)", category: "dairy",
        subcategory: "Milk", servingType: "volume",
        defaultServing: { unit: "glass", amount: 1 },
        servingOptions: [
            { label: "Small Glass (150ml)", grams: 155 },
            { label: "Regular Glass (250ml)", grams: 258 },
            { label: "Custom (ml)", grams: null }
        ],
        per100g: { calories: 87, protein: 3.2, carbs: 4.8, fat: 6.0, fiber: 0 },
        image: "exp2/aavin_full_cream.jpeg"
    },
    {
        id: "aavin_milk_green", name: "Aavin Milk (Green/Standardized)", category: "dairy",
        subcategory: "Milk", servingType: "volume",
        defaultServing: { unit: "glass", amount: 1 },
        servingOptions: [
            { label: "Small Glass (150ml)", grams: 155 },
            { label: "Regular Glass (250ml)", grams: 258 },
            { label: "Custom (ml)", grams: null }
        ],
        per100g: { calories: 72, protein: 3.2, carbs: 4.8, fat: 4.5, fiber: 0 },
        image: "exp2/aavin_standardized.jpeg"
    },
    {
        id: "aavin_milk_purple", name: "Aavin Milk (Purple/Double Toned)", category: "dairy",
        subcategory: "Milk", servingType: "volume",
        defaultServing: { unit: "glass", amount: 1 },
        servingOptions: [
            { label: "Small Glass (150ml)", grams: 155 },
            { label: "Regular Glass (250ml)", grams: 258 },
            { label: "Custom (ml)", grams: null }
        ],
        per100g: { calories: 47, protein: 3.3, carbs: 5.0, fat: 1.5, fiber: 0 },
        image: "exp2/aavin_double_toned.jpeg"
    },

    // ==========================================
    // 🍌 FRUITS & SNACKS
    // ==========================================
    {
        id: "banana", name: "Banana", category: "fruits",
        subcategory: "Fruit", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Small", grams: 80 },
            { label: "1 Medium", grams: 118 },
            { label: "1 Large", grams: 150 },
            { label: "2 Medium", grams: 236 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 89, protein: 1.1, carbs: 23, fat: 0.3, fiber: 2.6 },
        image: "Ripe_yellow_bananas_202604210210.jpeg"
    },
    {
        id: "apple", name: "Apple", category: "fruits",
        subcategory: "Fruit", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Small", grams: 150 },
            { label: "1 Medium", grams: 182 },
            { label: "1 Large", grams: 220 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 52, protein: 0.3, carbs: 14, fat: 0.2, fiber: 2.4 },
        image: "Red_apple_on_202604210210.jpeg"
    },
    {
        id: "mango", name: "Mango", category: "fruits",
        subcategory: "Fruit", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Small", grams: 150 },
            { label: "1 Medium", grams: 200 },
            { label: "1 Cup (Chopped)", grams: 165 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 60, protein: 0.8, carbs: 15, fat: 0.4, fiber: 1.6 },
        image: "Ripe_Indian_Alphonso_202604210139.jpeg"
    },
    {
        id: "papaya", name: "Papaya", category: "fruits",
        subcategory: "Fruit", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Bowl", grams: 120 },
            { label: "Regular Bowl", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 43, protein: 0.5, carbs: 11, fat: 0.3, fiber: 1.7 },
        image: "Ripe_papaya_on_202604210139.jpeg"
    },
    {
        id: "watermelon", name: "Watermelon", category: "fruits",
        subcategory: "Fruit", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Bowl", grams: 150 },
            { label: "Regular Bowl", grams: 280 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 30, protein: 0.6, carbs: 7.6, fat: 0.2, fiber: 0.4 },
        image: "Watermelon_slices_with_202604210210.jpeg"
    },
    {
        id: "guava", name: "Guava", category: "fruits",
        subcategory: "Fruit", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Medium", grams: 100 },
            { label: "2 Medium", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 68, protein: 2.6, carbs: 14, fat: 1, fiber: 5.4 },
        image: "Guava_with_chaat_202604210139.jpeg"
    },
    {
        id: "samosa", name: "Samosa (Aloo)", category: "fruits",
        subcategory: "Snack", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Small", grams: 60 },
            { label: "1 Regular", grams: 100 },
            { label: "2 Samosas", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 260, protein: 4, carbs: 30, fat: 14, fiber: 2 },
        image: "onion_samosa.jpeg"
    },
    {
        id: "vada_pav", name: "Vada Pav", category: "fruits",
        subcategory: "Snack", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Vada Pav", grams: 150 },
            { label: "2 Vada Pavs", grams: 300 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 240, protein: 4, carbs: 32, fat: 10, fiber: 2 },
        image: "Mumbai_Vada_Pav_202604210139.jpeg"
    },
    {
        id: "pakora", name: "Pakora / Bhajji", category: "fruits",
        subcategory: "Snack", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 4 },
        servingOptions: [
            { label: "2 Pieces", grams: 50 },
            { label: "4 Pieces", grams: 100 },
            { label: "6 Pieces", grams: 150 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 250, protein: 5, carbs: 25, fat: 14, fiber: 2 },
        image: "Mix_Veg_Pakora_202604210210.jpeg"
    },
    {
        id: "dry_fruits_mix", name: "Mixed Dry Fruits", category: "fruits",
        subcategory: "Dry Fruits", servingType: "weight",
        defaultServing: { unit: "g", amount: 30 },
        servingOptions: [
            { label: "Small Handful (15g)", grams: 15 },
            { label: "Regular Handful (30g)", grams: 30 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 520, protein: 15, carbs: 30, fat: 40, fiber: 6 },
        image: "Mixed_dry_fruits_202604210139.jpeg"
    },

    // ==========================================
    // 🥤 BEVERAGES
    // ==========================================
    {
        id: "chai", name: "Chai (Milk Tea)", category: "beverages",
        subcategory: "Tea", servingType: "volume",
        defaultServing: { unit: "cup", amount: 1 },
        servingOptions: [
            { label: "Small Cup (100ml)", grams: 105 },
            { label: "Regular Cup (150ml)", grams: 158 },
            { label: "Cutting (75ml)", grams: 79 },
            { label: "Large Cup (250ml)", grams: 263 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 45, protein: 1.5, carbs: 6, fat: 1.5, fiber: 0 },
        image: "Masala_Chai_in_202604210052.jpeg"
    },
    {
        id: "black_tea", name: "Black Tea (No Sugar)", category: "beverages",
        subcategory: "Tea", servingType: "volume",
        defaultServing: { unit: "cup", amount: 1 },
        servingOptions: [
            { label: "1 Cup (200ml)", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 1, protein: 0.1, carbs: 0.2, fat: 0, fiber: 0 },
        image: "Black_tea_in_202604210210.jpeg"
    },
    {
        id: "filter_coffee", name: "Filter Coffee", category: "beverages",
        subcategory: "Coffee", servingType: "volume",
        defaultServing: { unit: "cup", amount: 1 },
        servingOptions: [
            { label: "Small Cup (120ml)", grams: 125 },
            { label: "Regular Cup (180ml)", grams: 188 },
            { label: "Large Cup (250ml)", grams: 260 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 40, protein: 1.5, carbs: 5, fat: 1.5, fiber: 0 },
        image: "South_Indian_Filter_202604210210.jpeg"
    },
    {
        id: "black_coffee", name: "Black Coffee", category: "beverages",
        subcategory: "Coffee", servingType: "volume",
        defaultServing: { unit: "cup", amount: 1 },
        servingOptions: [
            { label: "1 Cup (200ml)", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 2, protein: 0.3, carbs: 0, fat: 0, fiber: 0 },
        image: "Black_coffee_in_202604210210.jpeg"
    },
    {
        id: "nimbu_pani", name: "Nimbu Pani / Lemonade", category: "beverages",
        subcategory: "Cold Drink", servingType: "volume",
        defaultServing: { unit: "glass", amount: 1 },
        servingOptions: [
            { label: "1 Glass (250ml)", grams: 260 },
            { label: "Large (400ml)", grams: 416 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 35, protein: 0.2, carbs: 8.5, fat: 0.1, fiber: 0.1 },
        image: "Fresh_lemon_juice_202604210108.jpeg"
    },
    {
        id: "coconut_water", name: "Coconut Water", category: "beverages",
        subcategory: "Natural", servingType: "volume",
        defaultServing: { unit: "glass", amount: 1 },
        servingOptions: [
            { label: "Small (200ml)", grams: 200 },
            { label: "Regular (300ml)", grams: 300 },
            { label: "Full Coconut", grams: 350 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 19, protein: 0.7, carbs: 3.7, fat: 0.2, fiber: 1.1 },
        image: "Coconut_water_with_202604210210.jpeg"
    },

    // ==========================================
    // 🌐 GENERIC / GYM FOODS
    // ==========================================
    {
        id: "oats_cooked", name: "Oatmeal (Cooked)", category: "generic",
        subcategory: "Breakfast", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Bowl", grams: 150 },
            { label: "Regular Bowl", grams: 250 },
            { label: "Large Bowl", grams: 350 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 71, protein: 2.5, carbs: 12, fat: 1.5, fiber: 2 },
        image: "Oatmeal_in_bowl_202604210139.jpeg"
    },
    {
        id: "peanut_butter", name: "Peanut Butter", category: "generic",
        subcategory: "Spread", servingType: "weight",
        defaultServing: { unit: "tbsp", amount: 1 },
        servingOptions: [
            { label: "1 tbsp (15g)", grams: 15 },
            { label: "2 tbsp (30g)", grams: 30 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 630, protein: 25, carbs: 20, fat: 50, fiber: 6 },
        image: "Peanut_butter_in_202604210210.jpeg"
    },
    {
        id: "almonds", name: "Almonds (Raw)", category: "generic",
        subcategory: "Nuts", servingType: "weight",
        defaultServing: { unit: "g", amount: 20 },
        servingOptions: [
            { label: "5 Almonds (7g)", grams: 7 },
            { label: "10 Almonds (14g)", grams: 14 },
            { label: "20 Almonds (28g)", grams: 28 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 579, protein: 21, carbs: 22, fat: 50, fiber: 12.5 },
        image: "Almonds_served_on_202604210052.jpeg"
    },
    {
        id: "whey_protein", name: "Whey Protein Shake", category: "generic",
        subcategory: "Supplement", servingType: "quantity",
        defaultServing: { unit: "scoop", amount: 1 },
        servingOptions: [
            { label: "1 Scoop (30g)", grams: 30 },
            { label: "2 Scoops (60g)", grams: 60 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 390, protein: 75, carbs: 10, fat: 5, fiber: 1 },
        image: "whey_isolate.png.png"
    },
    {
        id: "greek_yogurt", name: "Greek Yogurt", category: "generic",
        subcategory: "Dairy", servingType: "volume",
        defaultServing: { unit: "cup", amount: 1 },
        servingOptions: [
            { label: "Small Cup (100g)", grams: 100 },
            { label: "Regular Cup (170g)", grams: 170 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 59, protein: 10, carbs: 3.6, fat: 0.7, fiber: 0 },
        image: "Greek_yogurt_with_202604210139.jpeg"
    },
    {
        id: "brown_bread", name: "Brown Bread", category: "generic",
        subcategory: "Bread", servingType: "quantity",
        defaultServing: { unit: "slice", amount: 2 },
        servingOptions: [
            { label: "1 Slice", grams: 30 },
            { label: "2 Slices", grams: 60 },
            { label: "3 Slices", grams: 90 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 250, protein: 10, carbs: 44, fat: 4, fiber: 6 },
        image: "Brown_bread_slices_202604210210.jpeg"
    },
    {
        id: "white_bread", name: "White Bread", category: "generic",
        subcategory: "Bread", servingType: "quantity",
        defaultServing: { unit: "slice", amount: 2 },
        servingOptions: [
            { label: "1 Slice", grams: 28 },
            { label: "2 Slices", grams: 56 },
            { label: "3 Slices", grams: 84 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 265, protein: 9, carbs: 49, fat: 3.2, fiber: 2.7 },
        image: "White_bread_stacked_202604210212.jpeg"
    },
    {
        id: "chicken_salad", name: "Chicken Salad", category: "generic",
        subcategory: "Salad", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Bowl", grams: 150 },
            { label: "Regular Bowl", grams: 250 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 110, protein: 12, carbs: 5, fat: 5, fiber: 2 },
        image: "Chicken_salad_in_202604210210.jpeg"
    },
    {
        id: "potato_boiled", name: "Boiled Potato", category: "generic",
        subcategory: "Vegetable", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Small (100g)", grams: 100 },
            { label: "1 Medium (150g)", grams: 150 },
            { label: "1 Large (200g)", grams: 200 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 87, protein: 1.9, carbs: 20, fat: 0.1, fiber: 1.8 },
        image: "Boiled_potatoes_on_202604210139.jpeg"
    },
    {
        id: "sweet_potato", name: "Sweet Potato (Boiled)", category: "generic",
        subcategory: "Vegetable", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "1 Small (100g)", grams: 100 },
            { label: "1 Medium (150g)", grams: 150 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 90, protein: 2, carbs: 21, fat: 0.1, fiber: 3 },
        image: "Boiled_sweet_potato_202604210139.jpeg"
    },
    {
        id: "avocado", name: "Avocado", category: "generic",
        subcategory: "Fruit", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 1 },
        servingOptions: [
            { label: "Half Avocado", grams: 68 },
            { label: "1 Avocado", grams: 136 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 160, protein: 2, carbs: 8.5, fat: 14.7, fiber: 6.7 },
        image: "Avocado_on_wooden_202604210139.jpeg"
    },
    {
        id: "quinoa", name: "Quinoa (Cooked)", category: "generic",
        subcategory: "Grain", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Katori (100g)", grams: 100 },
            { label: "Regular Bowl (185g)", grams: 185 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 120, protein: 4.4, carbs: 21, fat: 1.9, fiber: 2.8 },
        image: "Cooked_quinoa_in_202604210139.jpeg"
    },
    {
        id: "muesli", name: "Muesli / Granola", category: "generic",
        subcategory: "Breakfast", servingType: "weight",
        defaultServing: { unit: "g", amount: 50 },
        servingOptions: [
            { label: "Small Bowl (30g)", grams: 30 },
            { label: "Regular Bowl (50g)", grams: 50 },
            { label: "Large Bowl (75g)", grams: 75 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 400, protein: 10, carbs: 65, fat: 10, fiber: 7 },
        image: "Muesli_granola_in_202604210139.jpeg"
    },
    {
        id: "honey", name: "Honey", category: "generic",
        subcategory: "Sweetener", servingType: "weight",
        defaultServing: { unit: "tsp", amount: 1 },
        servingOptions: [
            { label: "1 tsp (7g)", grams: 7 },
            { label: "1 tbsp (21g)", grams: 21 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 330, protein: 0.3, carbs: 82, fat: 0, fiber: 0.2 },
        image: "Golden_honey_drizzling_202604210139.jpeg"
    },
    {
        id: "rice_cakes", name: "Rice Cakes", category: "generic",
        subcategory: "Snack", servingType: "quantity",
        defaultServing: { unit: "piece", amount: 2 },
        servingOptions: [
            { label: "1 Cake", grams: 9 },
            { label: "2 Cakes", grams: 18 },
            { label: "3 Cakes", grams: 27 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 387, protein: 8, carbs: 81, fat: 2.8, fiber: 4.2 },
        image: "Rice_cakes_stacked_202604210139.jpeg"
    },
    {
        id: "soyabean_chunks", name: "Soya Chunks (Cooked)", category: "generic",
        subcategory: "Protein", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 80 },
            { label: "Regular Katori", grams: 120 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 145, protein: 20, carbs: 12, fat: 2, fiber: 4 },
        image: "Cooked_soya_chunks_202604210139.jpeg"
    },
    {
        id: "tofu", name: "Tofu (Firm)", category: "generic",
        subcategory: "Protein", servingType: "weight",
        defaultServing: { unit: "g", amount: 100 },
        servingOptions: [
            { label: "Small (50g)", grams: 50 },
            { label: "Regular (100g)", grams: 100 },
            { label: "Large (150g)", grams: 150 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 76, protein: 8, carbs: 1.9, fat: 4.8, fiber: 0.3 },
        image: "Tofu_blocks_on_202604210139.jpeg"
    },
    {
        id: "sprouts_moong", name: "Sprouts (Moong)", category: "generic",
        subcategory: "Healthy", servingType: "volume",
        defaultServing: { unit: "katori", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 80 },
            { label: "Regular Katori", grams: 120 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 30, protein: 3, carbs: 4.1, fat: 0.2, fiber: 1.8 },
        image: "Moong_Dal_Sprouts_202604210108.jpeg"
    },
    {
        id: "chana_roasted", name: "Roasted Chana", category: "generic",
        subcategory: "Snack", servingType: "weight",
        defaultServing: { unit: "g", amount: 30 },
        servingOptions: [
            { label: "Small Handful (20g)", grams: 20 },
            { label: "Regular (30g)", grams: 30 },
            { label: "Large (50g)", grams: 50 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 369, protein: 22, carbs: 58, fat: 5, fiber: 15 },
        image: "Roasted_Chana_in_202604210210.jpeg"
    },
    {
        id: "peanuts_roasted", name: "Peanuts (Roasted)", category: "generic",
        subcategory: "Nuts", servingType: "weight",
        defaultServing: { unit: "g", amount: 30 },
        servingOptions: [
            { label: "Small Handful (15g)", grams: 15 },
            { label: "Regular (30g)", grams: 30 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 615, protein: 24, carbs: 22, fat: 49, fiber: 8 },
        image: "Roasted_peanuts_in_202604210139.jpeg"
    },
    {
        id: "khichdi", name: "Khichdi (Dal Rice)", category: "generic",
        subcategory: "Comfort Food", servingType: "volume",
        defaultServing: { unit: "bowl", amount: 1 },
        servingOptions: [
            { label: "Small Katori", grams: 150 },
            { label: "Regular Bowl", grams: 250 },
            { label: "Large Bowl", grams: 350 },
            { label: "Custom (g)", grams: null }
        ],
        per100g: { calories: 105, protein: 3.5, carbs: 18, fat: 2, fiber: 1.5 },
        image: "Indian_Khichdi_in_202604210139.jpeg"
    },

    // === COMMUNITY REQUESTED ITEMS ===
    {
        "id": "oats_high_protein_mb",
        "name": "MuscleBlaze High Protein Oats (Dry)",
        "category": "breakfast",
        "subcategory": "Cereals & Oats",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 50
        },
        "servingOptions": [
            {
                "label": "Standard Serve (50g)",
                "grams": 50
            },
            {
                "label": "100g",
                "grams": 100
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 377.6,
            "protein": 22,
            "carbs": 60,
            "fat": 8.3,
            "fiber": 12.5
        },
        "image": "muscleblaze_oats.png"
    },
    {
        "id": "oats_high_protein_mb_milk",
        "name": "MuscleBlaze Protein Oats (with 250ml Milk)",
        "category": "breakfast",
        "subcategory": "Cereals & Oats",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Bowl (65g Oats + 250ml Milk)",
                "grams": 315
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 131.1,
            "protein": 7.08,
            "carbs": 15.87,
            "fat": 4.97,
            "fiber": 2.58
        },
        "image": "muscleblaze_oats.png"
    },
    {
        "id": "whey_concentrate",
        "name": "Whey Protein Concentrate (80%)",
        "category": "supplements",
        "subcategory": "Protein Powder",
        "servingType": "weight",
        "defaultServing": {
            "unit": "scoop",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Scoop (30g)",
                "grams": 30
            },
            {
                "label": "1.5 Scoops",
                "grams": 45
            },
            {
                "label": "2 Scoops",
                "grams": 60
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 395,
            "protein": 80,
            "carbs": 6,
            "fat": 6,
            "fiber": 0
        },
        "image": "whey_concentrate.png.png"
    },
    {
        "id": "whey_isolate",
        "name": "Whey Protein Isolate (90%)",
        "category": "supplements",
        "subcategory": "Protein Powder",
        "servingType": "weight",
        "defaultServing": {
            "unit": "scoop",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Scoop (30g)",
                "grams": 30
            },
            {
                "label": "1.5 Scoops",
                "grams": 45
            },
            {
                "label": "2 Scoops",
                "grams": 60
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 370,
            "protein": 90,
            "carbs": 2,
            "fat": 1,
            "fiber": 0
        },
        "image": "whey_isolate.png.png"
    },
    {
        "id": "whey_gold_standard",
        "name": "ON Gold Standard Whey Protein",
        "category": "supplements",
        "subcategory": "Protein Powder",
        "servingType": "weight",
        "defaultServing": {
            "unit": "scoop",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Scoop (30.4g = 24g pro)",
                "grams": 30.4
            },
            {
                "label": "1.5 Scoops",
                "grams": 45.6
            },
            {
                "label": "2 Scoops",
                "grams": 60.8
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 395,
            "protein": 79,
            "carbs": 10,
            "fat": 3.3,
            "fiber": 0
        },
        "image": "whey_gold_standard.png.png"
    },
    {
        "id": "mcchicken_burger",
        "name": "McChicken Burger (McDonalds)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burger",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Burger (145g)",
                "grams": 145
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 331.5, "protein": 11.5, "carbs": 37.7, "fat": 15.4, "fiber": 1.2
        },
        "image": "mcchicken_burger.jpeg"
    },
    {
        "id": "mcaloo_tikki",
        "name": "McAloo Tikki Burger (McDonalds)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burger",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Burger (140g)",
                "grams": 140
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 241.4, "protein": 5.7, "carbs": 36.4, "fat": 7.9, "fiber": 2.1
        },
        "image": "mcaloo_tikki.jpeg"
    },
    {
        "id": "veggie_burger",
        "name": "Veggie Burger (Standard)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burger",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Burger (150g)",
                "grams": 150
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 250,
            "protein": 8,
            "carbs": 35,
            "fat": 8,
            "fiber": 4
        },
        "image": "Veggie_Bean_Burger_202604210052.jpeg"
    },
    {
        "id": "french_fries",
        "name": "French Fries (Standard / McD)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 100
        },
        "servingOptions": [
            {
                "label": "Small Fries (75g)",
                "grams": 75
            },
            {
                "label": "Medium Fries (110g)",
                "grams": 110
            },
            {
                "label": "Large Fries (150g)",
                "grams": 150
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 312,
            "protein": 3.4,
            "carbs": 41,
            "fat": 15,
            "fiber": 3.8
        },
        "image": "french_fries.jpeg"
    },
    {
        "id": "paneer_paratha",
        "name": "Paneer Paratha",
        "category": "breakfast",
        "subcategory": "North Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Paratha",
                "grams": 120
            },
            {
                "label": "1 Big Paratha (1.5x)",
                "grams": 180
            },
            {
                "label": "2 Parathas",
                "grams": 240
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 250,
            "protein": 11,
            "carbs": 30,
            "fat": 11,
            "fiber": 2.5
        },
        "image": "paneer_paratha.png"
    },
    {
        "id": "gobi_paratha",
        "name": "Gobi (Cauliflower) Paratha",
        "category": "breakfast",
        "subcategory": "North Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Paratha",
                "grams": 120
            },
            {
                "label": "1 Big Paratha (1.5x)",
                "grams": 180
            },
            {
                "label": "2 Parathas",
                "grams": 240
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 220,
            "protein": 5,
            "carbs": 32,
            "fat": 8,
            "fiber": 3.5
        },
        "image": "gobi_paratha.jpeg"
    },
    {
        "id": "pasta_white_sauce",
        "name": "White Sauce Pasta (Alfredo)",
        "category": "snacks",
        "subcategory": "Continental",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Bowl (250g)",
                "grams": 250
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 180,
            "protein": 5,
            "carbs": 21,
            "fat": 8,
            "fiber": 1.5
        },
        "image": "pasta_white_sauce.jpeg"
    },
    {
        "id": "pasta_red_sauce",
        "name": "Red Sauce Pasta (Arrabbiata)",
        "category": "snacks",
        "subcategory": "Continental",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Bowl (250g)",
                "grams": 250
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 110,
            "protein": 3,
            "carbs": 20,
            "fat": 2,
            "fiber": 2.5
        },
        "image": "pasta_red_sauce.jpeg"
    },
    {
        "id": "onion_samosa",
        "name": "Onion Samosa (Irani Samosa)",
        "category": "snacks",
        "subcategory": "Fried Snacks",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Samosa (30g)",
                "grams": 30
            },
            {
                "label": "2 Samosas (60g)",
                "grams": 60
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 300,
            "protein": 6,
            "carbs": 35,
            "fat": 15,
            "fiber": 2
        },
        "image": "onion_samosa.jpeg"
    },
    {
        "id": "veg_puff",
        "name": "Veg Curry Puff",
        "category": "snacks",
        "subcategory": "Bakery",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Puff (80g)",
                "grams": 80
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 380,
            "protein": 6,
            "carbs": 30,
            "fat": 26,
            "fiber": 2
        },
        "image": "veg_puff.jpeg"
    },
    {
        "id": "egg_puff",
        "name": "Egg Puff",
        "category": "snacks",
        "subcategory": "Bakery",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Puff (90g)",
                "grams": 90
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 320,
            "protein": 10,
            "carbs": 25,
            "fat": 21,
            "fiber": 1.5
        },
        "image": "egg_puff.jpeg"
    },
    {
        "id": "chicken_puff",
        "name": "Chicken Puff",
        "category": "snacks",
        "subcategory": "Bakery",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Puff (90g)",
                "grams": 90
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 350,
            "protein": 12,
            "carbs": 28,
            "fat": 22,
            "fiber": 1.5
        },
        "image": "chicken_puff.jpeg"
    },
    {
        "id": "murukku",
        "name": "Murukku / Chakli",
        "category": "snacks",
        "subcategory": "South Indian",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 50
        },
        "servingOptions": [
            {
                "label": "Small Portion",
                "grams": 30
            },
            {
                "label": "Regular Portion",
                "grams": 50
            },
            {
                "label": "Large Portion",
                "grams": 100
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 480,
            "protein": 9,
            "carbs": 55,
            "fat": 25,
            "fiber": 4
        },
        "image": "murukku.jpeg"
    },
    {
        "id": "biscuit_parleg",
        "name": "Parle-G Glucose Biscuits",
        "category": "snacks",
        "subcategory": "Biscuits",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 5
        },
        "servingOptions": [
            {
                "label": "2 Biscuits (10g)",
                "grams": 10
            },
            {
                "label": "5 Biscuits (25g)",
                "grams": 25
            },
            {
                "label": "1 Small Pack (65g)",
                "grams": 65
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 460,
            "protein": 6.5,
            "carbs": 75,
            "fat": 14,
            "fiber": 1.5
        },
        "image": "biscuit_parleg.jpeg"
    },
    {
        "id": "biscuit_goodday",
        "name": "Butter Cookies (e.g. Good Day)",
        "category": "snacks",
        "subcategory": "Biscuits",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 3
        },
        "servingOptions": [
            {
                "label": "1 Cookie (8g)",
                "grams": 8
            },
            {
                "label": "3 Cookies (24g)",
                "grams": 24
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 500,
            "protein": 6,
            "carbs": 65,
            "fat": 24,
            "fiber": 1
        },
        "image": "biscuit_goodday.jpeg"
    },
    {
        "id": "biscuit_marie",
        "name": "Marie Gold Biscuits",
        "category": "snacks",
        "subcategory": "Biscuits",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 4
        },
        "servingOptions": [
            {
                "label": "2 Biscuits (10g)",
                "grams": 10
            },
            {
                "label": "4 Biscuits (20g)",
                "grams": 20
            },
            {
                "label": "8 Biscuits (40g)",
                "grams": 40
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 440,
            "protein": 8,
            "carbs": 75,
            "fat": 11,
            "fiber": 2
        },
        "image": "biscuit_marie.jpeg"
    },
    {
        "id": "coca_cola",
        "name": "Coca Cola / Pepsi (Regular)",
        "category": "beverages",
        "subcategory": "Soft Drinks",
        "servingType": "volume",
        "defaultServing": {
            "unit": "can",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Can (330ml)",
                "grams": 330
            },
            {
                "label": "Pet Bottle (500ml)",
                "grams": 500
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 43,
            "protein": 0,
            "carbs": 10.6,
            "fat": 0,
            "fiber": 0
        },
        "image": "coca_cola.jpeg"
    },
    {
        "id": "coke_zero",
        "name": "Coke Zero / Diet Coke",
        "category": "beverages",
        "subcategory": "Soft Drinks",
        "servingType": "volume",
        "defaultServing": {
            "unit": "can",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Can (330ml)",
                "grams": 330
            },
            {
                "label": "Pet Bottle (500ml)",
                "grams": 500
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 0,
            "protein": 0,
            "carbs": 0,
            "fat": 0,
            "fiber": 0
        },
        "image": "coke_zero.jpeg"
    },
    {
        "id": "sprite",
        "name": "Sprite (Regular)",
        "category": "beverages",
        "subcategory": "Soft Drinks",
        "servingType": "volume",
        "defaultServing": {
            "unit": "can",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Can (330ml)",
                "grams": 330
            },
            {
                "label": "Pet Bottle (500ml)",
                "grams": 500
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 39,
            "protein": 0,
            "carbs": 9.7,
            "fat": 0,
            "fiber": 0
        },
        "image": "sprite.jpeg"
    },
    {
        "id": "fanta",
        "name": "Fanta / Mirinda (Regular)",
        "category": "beverages",
        "subcategory": "Soft Drinks",
        "servingType": "volume",
        "defaultServing": {
            "unit": "can",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Can (330ml)",
                "grams": 330
            },
            {
                "label": "Pet Bottle (500ml)",
                "grams": 500
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 46,
            "protein": 0,
            "carbs": 12,
            "fat": 0,
            "fiber": 0
        },
        "image": "fanta.jpeg"
    },
    {
        "id": "mango_milkshake",
        "name": "Mango Milkshake",
        "category": "beverages",
        "subcategory": "Shakes",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Glass (250g)",
                "grams": 250
            },
            {
                "label": "Large Glass (400g)",
                "grams": 400
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 120,
            "protein": 3,
            "carbs": 22,
            "fat": 2.5,
            "fiber": 1
        },
        "image": "mngo_milkshake.jpeg"
    },

    {
        "id": "lassi_salt",
        "name": "Salted Lassi",
        "category": "generic",
        "subcategory": "Traditional",
        "servingType": "volume",
        "defaultServing": {
            "unit": "ml",
            "amount": 250
        },
        "servingOptions": [
            {
                "label": "1 Glass (250ml)",
                "grams": 250
            },
            {
                "label": "Custom (ml)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 45,
            "protein": 2,
            "carbs": 3,
            "fat": 2.5,
            "fiber": 0
        },
        "image": "lassi_salt.jpeg"
    },
    {
        "id": "ice_cream_vanilla",
        "name": "Vanilla Ice Cream",
        "category": "snacks",
        "subcategory": "Desserts",
        "servingType": "weight",
        "defaultServing": {
            "unit": "scoop",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Scoop (65g)",
                "grams": 65
            },
            {
                "label": "2 Scoops (130g)",
                "grams": 130
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 207,
            "protein": 3.5,
            "carbs": 24,
            "fat": 11,
            "fiber": 0
        },
        "image": "ice_cream_vanilla.jpeg"
    },
    {
        "id": "ice_cream_chocolate",
        "name": "Chocolate Ice Cream",
        "category": "snacks",
        "subcategory": "Desserts",
        "servingType": "weight",
        "defaultServing": {
            "unit": "scoop",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Scoop (65g)",
                "grams": 65
            },
            {
                "label": "2 Scoops (130g)",
                "grams": 130
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 216,
            "protein": 3.8,
            "carbs": 28,
            "fat": 10,
            "fiber": 1.2
        },
        "image": "ice_cream_chocolate.jpeg"
    },
    {
        "id": "sugar_white",
        "name": "White Sugar (Table Sugar)",
        "category": "generic",
        "subcategory": "Sweeteners",
        "servingType": "weight",
        "defaultServing": {
            "unit": "tsp",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Teaspoon (4g)",
                "grams": 4
            },
            {
                "label": "1 Tablespoon (12g)",
                "grams": 12
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 387,
            "protein": 0,
            "carbs": 100,
            "fat": 0,
            "fiber": 0
        },
        "image": "sugar_white.jpeg"
    },
    {
        "id": "salt_table",
        "name": "Table Salt",
        "category": "generic",
        "subcategory": "Spices",
        "servingType": "weight",
        "defaultServing": {
            "unit": "tsp",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Teaspoon (6g)",
                "grams": 6
            },
            {
                "label": "1 Pinch (1g)",
                "grams": 1
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 0,
            "protein": 0,
            "carbs": 0,
            "fat": 0,
            "fiber": 0
        },
        "image": "salt_table.jpeg"
    },
    {
        "id": "paneer_65",
        "name": "Paneer 65 (Fried)",
        "category": "snacks",
        "subcategory": "Appetizers",
        "servingType": "weight",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Plate (100g)",
                "grams": 100
            },
            {
                "label": "Regular Plate (150g)",
                "grams": 150
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 330,
            "protein": 16,
            "carbs": 15,
            "fat": 22,
            "fiber": 1.5
        },
        "image": "panner_65.jpeg"
    },
    {
        "id": "paneer_stir_fry",
        "name": "Paneer Stir Fry (Low Oil)",
        "category": "curries",
        "subcategory": "Dry Sabzi",
        "servingType": "weight",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Plate (100g)",
                "grams": 100
            },
            {
                "label": "Regular Plate (150g)",
                "grams": 150
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 270,
            "protein": 18,
            "carbs": 8,
            "fat": 18,
            "fiber": 2
        },
        "image": "paneer_stir_fry.jpeg"
    },
    {
        "id": "paneer_pepper_fry",
        "name": "Paneer Pepper Fry",
        "category": "curries",
        "subcategory": "Dry Sabzi",
        "servingType": "weight",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Plate (100g)",
                "grams": 100
            },
            {
                "label": "Regular Plate (150g)",
                "grams": 150
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 290,
            "protein": 17,
            "carbs": 10,
            "fat": 20,
            "fiber": 1.5
        },
        "image": "paneer_pepper_fry.jpeg"
    },

    // === MEGA FAST FOOD EXPANSION ===
    {
        "id": "maharaja_mac_veg",
        "name": "Veg Maharaja Mac (McDonalds)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burger",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Burger (290g)",
                "grams": 290
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 232.8, "protein": 6.9, "carbs": 27.6, "fat": 11.7, "fiber": 1.4
        },
        "image": "maharaja_mac_veg.jpeg"
    },
    {
        "id": "maharaja_mac_chicken",
        "name": "Chicken Maharaja Mac (McDonalds)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burger",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Burger (296g)",
                "grams": 296
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 184.1, "protein": 8.8, "carbs": 20.6, "fat": 9.1, "fiber": 0.7
        },
        "image": "maharaja_mac_chicken.jpeg"
    },
    {
        "id": "mcspicy_paneer",
        "name": "McSpicy Paneer Burger (McDonalds)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burger",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Burger (185g)",
                "grams": 185
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 325.1, "protein": 10.2, "carbs": 26.3, "fat": 19.8, "fiber": 1
        },
        "image": "mcspicy_paneer.jpeg"
    },
    {
        "id": "mcspicy_chicken",
        "name": "McSpicy Chicken Burger (McDonalds)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burger",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Burger (170g)",
                "grams": 170
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 260,
            "protein": 13,
            "carbs": 28,
            "fat": 11,
            "fiber": 1.5
        },
        "image": "mcspicy_chicken.jpeg"
    },
    {
        "id": "filet_o_fish",
        "name": "Filet-O-Fish (McDonalds)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burger",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Burger (140g)",
                "grams": 140
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 275, "protein": 11.4, "carbs": 28.6, "fat": 12.1, "fiber": 1.1
        },
        "image": "filet_o_fish.jpeg"
    },
    {
        "id": "veg_whopper_bk",
        "name": "Veg Whopper (Burger King)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burger",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Burger (296g)",
                "grams": 296
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 253, "protein": 3.7, "carbs": 34, "fat": 10.6, "fiber": 1.7
        },
        "image": "veg_whopper_bk.jpeg"
    },
    {
        "id": "chicken_whopper_bk",
        "name": "Chicken Whopper (Burger King)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burger",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Burger (280g)",
                "grams": 280
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 230.7, "protein": 11.6, "carbs": 21, "fat": 13.3, "fiber": 0.7
        },
        "image": "chicken_whopper_bk.jpeg"
    },
    {
        "id": "crispy_veg_bk",
        "name": "Crispy Veg Burger (Burger King)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burger",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Burger (110g)",
                "grams": 110
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 290,
            "protein": 6,
            "carbs": 35,
            "fat": 14,
            "fiber": 2
        },
        "image": "Crispy_Chicken_Burger_202604210052.jpeg"
    },

    // === INDIAN & CONTINENTAL VARIANTS ===
    {
        "id": "chicken_65",
        "name": "Chicken 65",
        "category": "snacks",
        "subcategory": "Appetizers",
        "servingType": "weight",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Plate (150g)",
                "grams": 150
            },
            {
                "label": "Regular Plate (250g)",
                "grams": 250
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 280,
            "protein": 24,
            "carbs": 10,
            "fat": 16,
            "fiber": 0
        },
        "image": "chicken_65.jpeg"
    },
    {
        "id": "gobi_65",
        "name": "Gobi 65 (Cauliflower)",
        "category": "snacks",
        "subcategory": "Appetizers",
        "servingType": "weight",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Plate (150g)",
                "grams": 150
            },
            {
                "label": "Regular Plate (250g)",
                "grams": 250
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 240,
            "protein": 5,
            "carbs": 28,
            "fat": 12,
            "fiber": 3
        },
        "image": "gobi_65.jpeg"
    },
    {
        "id": "veg_manchurian",
        "name": "Veg Manchurian",
        "category": "snacks",
        "subcategory": "Appetizers",
        "servingType": "weight",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Plate (200g)",
                "grams": 200
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 210,
            "protein": 4,
            "carbs": 26,
            "fat": 10,
            "fiber": 2
        },
        "image": "veg_manchurian.jpeg"
    },
    {
        "id": "chicken_manchurian",
        "name": "Chicken Manchurian",
        "category": "snacks",
        "subcategory": "Appetizers",
        "servingType": "weight",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Plate (200g)",
                "grams": 200
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 260,
            "protein": 18,
            "carbs": 22,
            "fat": 12,
            "fiber": 1
        },
        "image": "chicken_manchurian.jpeg"
    },
    {
        "id": "veg_fried_rice",
        "name": "Veg Fried Rice",
        "category": "rice",
        "subcategory": "Indo-Chinese",
        "servingType": "volume",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Plate (300g)",
                "grams": 300
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 190,
            "protein": 4,
            "carbs": 30,
            "fat": 6,
            "fiber": 1.5
        },
        "image": "veg_fried_rice.jpeg"
    },
    {
        "id": "chicken_fried_rice",
        "name": "Chicken Fried Rice",
        "category": "rice",
        "subcategory": "Indo-Chinese",
        "servingType": "volume",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Plate (300g)",
                "grams": 300
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 220,
            "protein": 12,
            "carbs": 28,
            "fat": 7,
            "fiber": 1
        },
        "image": "chicken_fried_rice.jpeg"
    },
    {
        "id": "hakka_noodles_veg",
        "name": "Veg Hakka Noodles",
        "category": "snacks",
        "subcategory": "Indo-Chinese",
        "servingType": "volume",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Plate (300g)",
                "grams": 300
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 210,
            "protein": 5,
            "carbs": 36,
            "fat": 5,
            "fiber": 2
        },
        "image": "hakka_noodles_veg.jpeg"
    },
    {
        "id": "hakka_noodles_chicken",
        "name": "Chicken Hakka Noodles",
        "category": "snacks",
        "subcategory": "Indo-Chinese",
        "servingType": "volume",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Plate (300g)",
                "grams": 300
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 240,
            "protein": 14,
            "carbs": 34,
            "fat": 6,
            "fiber": 1.5
        },
        "image": "hakka_noodles_chicken.jpeg"
    },
    {
        "id": "paneer_biryani",
        "name": "Paneer Biryani",
        "category": "rice",
        "subcategory": "Biryani",
        "servingType": "volume",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Plate (350g)",
                "grams": 350
            },
            {
                "label": "Large Plate (500g)",
                "grams": 500
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 240,
            "protein": 8,
            "carbs": 32,
            "fat": 9,
            "fiber": 2
        },
        "image": "Paneer_Fried_Rice_202604210052.jpeg"
    },
    {
        "id": "veg_dum_biryani",
        "name": "Veg Dum Biryani",
        "category": "rice",
        "subcategory": "Biryani",
        "servingType": "volume",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Plate (350g)",
                "grams": 350
            },
            {
                "label": "Large Plate (500g)",
                "grams": 500
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 180,
            "protein": 4,
            "carbs": 30,
            "fat": 5,
            "fiber": 3
        },
        "image": "Veg_Biryani_served_202604210139.jpeg"
    },
    {
        "id": "mutton_biryani",
        "name": "Mutton Biryani",
        "category": "rice",
        "subcategory": "Biryani",
        "servingType": "volume",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Plate (350g)",
                "grams": 350
            },
            {
                "label": "Large Plate (500g)",
                "grams": 500
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 290,
            "protein": 15,
            "carbs": 30,
            "fat": 12,
            "fiber": 1
        },
        "image": "Mutton_Seekh_Frankie_202604210108.jpeg"
    },
    {
        "id": "dosa_ghee_roast",
        "name": "Ghee Roast Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "dosa",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Dosa (120g)",
                "grams": 120
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 240,
            "protein": 5,
            "carbs": 30,
            "fat": 12,
            "fiber": 2
        },
        "image": "dosa_ghee_roast.jpeg"
    },
    {
        "id": "dosa_onion_rava",
        "name": "Onion Rava Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "dosa",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Dosa (150g)",
                "grams": 150
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 190,
            "protein": 4,
            "carbs": 26,
            "fat": 8,
            "fiber": 1.5
        },
        "image": "dosa_onion_rava.jpeg"
    },
    {
        "id": "dosa_ghee_karam",
        "name": "Ghee Karam Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "dosa",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Dosa (130g)",
                "grams": 130
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 260,
            "protein": 6,
            "carbs": 30,
            "fat": 14,
            "fiber": 2
        },
        "image": "dosa_ghee_karam.jpeg"
    },
    {
        "id": "dosa_ghee_karam_onion",
        "name": "Ghee Karam Onion Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "dosa",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Dosa (140g)",
                "grams": 140
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 250,
            "protein": 6,
            "carbs": 28,
            "fat": 13,
            "fiber": 2.2
        },
        "image": "dosa_ghee_karam_onion.jpeg"
    },
    {
        "id": "dosa_ghee_karam_masala",
        "name": "Ghee Karam Masala Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "dosa",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Dosa (200g)",
                "grams": 200
            },
            {
                "label": "Large Dosa (300g)",
                "grams": 300
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 270,
            "protein": 6,
            "carbs": 32,
            "fat": 14,
            "fiber": 3
        },
        "image": "dosa_ghee_karam_masala.jpeg"
    },
    {
        "id": "dosa_ghee_podi_masala",
        "name": "Ghee Podi Masala Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "dosa",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Dosa (200g)",
                "grams": 200
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 280,
            "protein": 7,
            "carbs": 34,
            "fat": 13,
            "fiber": 3.5
        },
        "image": "dosa_ghee_podi.jpeg"
    },
    {
        "id": "dosa_open_butter_masala",
        "name": "Open Butter Masala Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "dosa",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Dosa (220g)",
                "grams": 220
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 290,
            "protein": 6,
            "carbs": 32,
            "fat": 16,
            "fiber": 2.5
        },
        "image": "Mysore_Masala_Dosa_202604210052.jpeg"
    },
    {
        "id": "dosa_ghee_podi",
        "name": "Ghee Podi Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "dosa",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Dosa (130g)",
                "grams": 130
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 270,
            "protein": 8,
            "carbs": 32,
            "fat": 12,
            "fiber": 3
        },
        "image": "dosa_ghee_podi.jpeg"
    },
    {
        "id": "burger_generic_restaurant",
        "name": "Generic Restaurant Burger",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burger",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Burger (180g)",
                "grams": 180
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 260,
            "protein": 12,
            "carbs": 26,
            "fat": 12,
            "fiber": 2.5
        },
        "image": "burger_generic_restaurant.jpeg"
    },
    {
        "id": "pasta_generic_restaurant",
        "name": "Generic Restaurant Pasta",
        "category": "snacks",
        "subcategory": "Continental",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Bowl (250g)",
                "grams": 250
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 210,
            "protein": 6,
            "carbs": 28,
            "fat": 8,
            "fiber": 2
        },
        "image": "pasta_generic_restaurant.jpeg"
    },
    {
        "id": "pasta_pesto",
        "name": "Pesto Pasta",
        "category": "snacks",
        "subcategory": "Continental",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Bowl (250g)",
                "grams": 250
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 260,
            "protein": 6,
            "carbs": 26,
            "fat": 15,
            "fiber": 2.5
        },
        "image": "pasta_pesto.jpeg"
    },
    {
        "id": "pasta_pink_sauce",
        "name": "Pink Sauce Pasta (Mixed)",
        "category": "snacks",
        "subcategory": "Continental",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Bowl (250g)",
                "grams": 250
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 160,
            "protein": 5,
            "carbs": 22,
            "fat": 6,
            "fiber": 2
        },
        "image": "pasta_pink_sauce.jpeg"
    },
    {
        "id": "mac_and_cheese",
        "name": "Mac & Cheese",
        "category": "snacks",
        "subcategory": "Continental",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Bowl (250g)",
                "grams": 250
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 280,
            "protein": 12,
            "carbs": 26,
            "fat": 14,
            "fiber": 1.5
        },
        "image": "mac_and_cheese.jpeg"
    },
    {
        "id": "dominos_margherita",
        "name": "Margherita Pizza (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~55g)",
                "grams": 55
            },
            {
                "label": "1 Medium Slice (~80g)",
                "grams": 80
            },
            {
                "label": "2 Regular Slices",
                "grams": 110
            },
            {
                "label": "2 Medium Slices",
                "grams": 160
            },
            {
                "label": "Whole Regular (~330g)",
                "grams": 330
            },
            {
                "label": "Whole Medium (~480g)",
                "grams": 480
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 245,
            "protein": 10,
            "carbs": 34,
            "fat": 8,
            "fiber": 2
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_margherita.jpeg"
    },
    {
        "id": "dominos_double_cheese_margherita",
        "name": "Double Cheese Margherita (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~60g)",
                "grams": 60
            },
            {
                "label": "1 Medium Slice (~85g)",
                "grams": 85
            },
            {
                "label": "2 Regular Slices",
                "grams": 120
            },
            {
                "label": "2 Medium Slices",
                "grams": 170
            },
            {
                "label": "Whole Regular (~360g)",
                "grams": 360
            },
            {
                "label": "Whole Medium (~510g)",
                "grams": 510
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 290,
            "protein": 13,
            "carbs": 33,
            "fat": 12,
            "fiber": 2
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_double_cheese_margherita.jpeg"
    },
    {
        "id": "dominos_peppy_paneer",
        "name": "Peppy Paneer Pizza (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~65g)",
                "grams": 65
            },
            {
                "label": "1 Medium Slice (~90g)",
                "grams": 90
            },
            {
                "label": "2 Regular Slices",
                "grams": 130
            },
            {
                "label": "2 Medium Slices",
                "grams": 180
            },
            {
                "label": "Whole Regular (~390g)",
                "grams": 390
            },
            {
                "label": "Whole Medium (~540g)",
                "grams": 540
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 280,
            "protein": 12,
            "carbs": 32,
            "fat": 12,
            "fiber": 2
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_peppy_paneer.jpeg"
    },
    {
        "id": "dominos_farmhouse",
        "name": "Farmhouse Pizza (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~65g)",
                "grams": 65
            },
            {
                "label": "1 Medium Slice (~90g)",
                "grams": 90
            },
            {
                "label": "2 Regular Slices",
                "grams": 130
            },
            {
                "label": "2 Medium Slices",
                "grams": 180
            },
            {
                "label": "Whole Regular (~390g)",
                "grams": 390
            },
            {
                "label": "Whole Medium (~540g)",
                "grams": 540
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 255,
            "protein": 9,
            "carbs": 35,
            "fat": 9,
            "fiber": 3
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_farmhouse.jpeg"
    },
    {
        "id": "dominos_veggie_paradise",
        "name": "Veggie Paradise Pizza (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~65g)",
                "grams": 65
            },
            {
                "label": "1 Medium Slice (~90g)",
                "grams": 90
            },
            {
                "label": "2 Regular Slices",
                "grams": 130
            },
            {
                "label": "2 Medium Slices",
                "grams": 180
            },
            {
                "label": "Whole Regular (~390g)",
                "grams": 390
            },
            {
                "label": "Whole Medium (~540g)",
                "grams": 540
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 240,
            "protein": 9,
            "carbs": 34,
            "fat": 8,
            "fiber": 3
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_veggie_paradise.jpeg"
    },
    {
        "id": "dominos_deluxe_veggie",
        "name": "Deluxe Veggie Pizza (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~65g)",
                "grams": 65
            },
            {
                "label": "1 Medium Slice (~90g)",
                "grams": 90
            },
            {
                "label": "2 Regular Slices",
                "grams": 130
            },
            {
                "label": "2 Medium Slices",
                "grams": 180
            },
            {
                "label": "Whole Regular (~390g)",
                "grams": 390
            },
            {
                "label": "Whole Medium (~540g)",
                "grams": 540
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 260,
            "protein": 10,
            "carbs": 33,
            "fat": 10,
            "fiber": 3
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_deluxe_veggie.jpeg"
    },
    {
        "id": "dominos_peri_peri_veg",
        "name": "Peri Peri Veg Pizza (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~65g)",
                "grams": 65
            },
            {
                "label": "1 Medium Slice (~90g)",
                "grams": 90
            },
            {
                "label": "2 Regular Slices",
                "grams": 130
            },
            {
                "label": "2 Medium Slices",
                "grams": 180
            },
            {
                "label": "Whole Regular (~390g)",
                "grams": 390
            },
            {
                "label": "Whole Medium (~540g)",
                "grams": 540
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 248,
            "protein": 9,
            "carbs": 33,
            "fat": 9,
            "fiber": 3
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_peri_peri_veg.jpeg"
    },
    {
        "id": "dominos_spicy_triple_tango",
        "name": "Spicy Triple Tango Pizza (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~65g)",
                "grams": 65
            },
            {
                "label": "1 Medium Slice (~90g)",
                "grams": 90
            },
            {
                "label": "2 Regular Slices",
                "grams": 130
            },
            {
                "label": "2 Medium Slices",
                "grams": 180
            },
            {
                "label": "Whole Regular (~390g)",
                "grams": 390
            },
            {
                "label": "Whole Medium (~540g)",
                "grams": 540
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 268,
            "protein": 10,
            "carbs": 33,
            "fat": 11,
            "fiber": 2.5
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_spicy_triple_tango.jpeg"
    },
    {
        "id": "dominos_mexican_green_wave",
        "name": "Mexican Green Wave Pizza (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~65g)",
                "grams": 65
            },
            {
                "label": "1 Medium Slice (~90g)",
                "grams": 90
            },
            {
                "label": "2 Regular Slices",
                "grams": 130
            },
            {
                "label": "2 Medium Slices",
                "grams": 180
            },
            {
                "label": "Whole Regular (~390g)",
                "grams": 390
            },
            {
                "label": "Whole Medium (~540g)",
                "grams": 540
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 250,
            "protein": 9,
            "carbs": 34,
            "fat": 9,
            "fiber": 3
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_mexican_green_wave.jpeg"
    },
    {
        "id": "dominos_7_seven_veggie",
        "name": "Seven Nation Army Veggie (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~65g)",
                "grams": 65
            },
            {
                "label": "1 Medium Slice (~90g)",
                "grams": 90
            },
            {
                "label": "2 Regular Slices",
                "grams": 130
            },
            {
                "label": "2 Medium Slices",
                "grams": 180
            },
            {
                "label": "Whole Regular (~390g)",
                "grams": 390
            },
            {
                "label": "Whole Medium (~540g)",
                "grams": 540
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 255,
            "protein": 9,
            "carbs": 35,
            "fat": 9,
            "fiber": 2.5
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_7_seven_veggie.jpeg"
    },
    {
        "id": "dominos_chicken_dominator",
        "name": "Chicken Dominator Pizza (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~70g)",
                "grams": 70
            },
            {
                "label": "1 Medium Slice (~95g)",
                "grams": 95
            },
            {
                "label": "2 Regular Slices",
                "grams": 140
            },
            {
                "label": "2 Medium Slices",
                "grams": 190
            },
            {
                "label": "Whole Regular (~420g)",
                "grams": 420
            },
            {
                "label": "Whole Medium (~570g)",
                "grams": 570
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 295,
            "protein": 15,
            "carbs": 31,
            "fat": 13,
            "fiber": 2
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_chicken_dominator.jpeg"
    },
    {
        "id": "dominos_pepper_bbq_chicken",
        "name": "Pepper BBQ Chicken Pizza (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~70g)",
                "grams": 70
            },
            {
                "label": "1 Medium Slice (~95g)",
                "grams": 95
            },
            {
                "label": "2 Regular Slices",
                "grams": 140
            },
            {
                "label": "2 Medium Slices",
                "grams": 190
            },
            {
                "label": "Whole Regular (~420g)",
                "grams": 420
            },
            {
                "label": "Whole Medium (~570g)",
                "grams": 570
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 280,
            "protein": 14,
            "carbs": 31,
            "fat": 12,
            "fiber": 2
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_pepper_bbq_chicken.jpeg"
    },
    {
        "id": "dominos_chicken_golden_delight",
        "name": "Chicken Golden Delight Pizza (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~70g)",
                "grams": 70
            },
            {
                "label": "1 Medium Slice (~95g)",
                "grams": 95
            },
            {
                "label": "2 Regular Slices",
                "grams": 140
            },
            {
                "label": "2 Medium Slices",
                "grams": 190
            },
            {
                "label": "Whole Regular (~420g)",
                "grams": 420
            },
            {
                "label": "Whole Medium (~570g)",
                "grams": 570
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 285,
            "protein": 14,
            "carbs": 32,
            "fat": 12,
            "fiber": 2
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_chicken_golden_delight.jpeg"
    },
    {
        "id": "dominos_grilled_chicken_supreme",
        "name": "Grilled Chicken Supreme Pizza (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~70g)",
                "grams": 70
            },
            {
                "label": "1 Medium Slice (~95g)",
                "grams": 95
            },
            {
                "label": "2 Regular Slices",
                "grams": 140
            },
            {
                "label": "2 Medium Slices",
                "grams": 190
            },
            {
                "label": "Whole Regular (~420g)",
                "grams": 420
            },
            {
                "label": "Whole Medium (~570g)",
                "grams": 570
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 270,
            "protein": 14,
            "carbs": 30,
            "fat": 11,
            "fiber": 2
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_grilled_chicken_supreme.jpeg"
    },
    {
        "id": "dominos_chicken_makhani",
        "name": "Chicken Makhani Pizza (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~70g)",
                "grams": 70
            },
            {
                "label": "1 Medium Slice (~95g)",
                "grams": 95
            },
            {
                "label": "2 Regular Slices",
                "grams": 140
            },
            {
                "label": "2 Medium Slices",
                "grams": 190
            },
            {
                "label": "Whole Regular (~420g)",
                "grams": 420
            },
            {
                "label": "Whole Medium (~570g)",
                "grams": 570
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 275,
            "protein": 13,
            "carbs": 32,
            "fat": 11,
            "fiber": 2
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "Chicken_Makhani_Pizza_202604210052.jpeg"
    },
    {
        "id": "dominos_nonveg_supreme",
        "name": "Non-Veg Supreme Pizza (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~70g)",
                "grams": 70
            },
            {
                "label": "1 Medium Slice (~95g)",
                "grams": 95
            },
            {
                "label": "2 Regular Slices",
                "grams": 140
            },
            {
                "label": "2 Medium Slices",
                "grams": 190
            },
            {
                "label": "Whole Regular (~420g)",
                "grams": 420
            },
            {
                "label": "Whole Medium (~570g)",
                "grams": 570
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 285,
            "protein": 14,
            "carbs": 30,
            "fat": 13,
            "fiber": 2
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_nonveg_supreme.jpeg"
    },
    {
        "id": "dominos_pepperoni",
        "name": "Pepperoni Pizza (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~65g)",
                "grams": 65
            },
            {
                "label": "1 Medium Slice (~90g)",
                "grams": 90
            },
            {
                "label": "2 Regular Slices",
                "grams": 130
            },
            {
                "label": "2 Medium Slices",
                "grams": 180
            },
            {
                "label": "Whole Regular (~390g)",
                "grams": 390
            },
            {
                "label": "Whole Medium (~540g)",
                "grams": 540
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 290,
            "protein": 14,
            "carbs": 28,
            "fat": 14,
            "fiber": 1.5
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_pepperoni.jpeg"
    },
    {
        "id": "dominos_burger_pizza_veg",
        "name": "Burger Pizza Veg (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~90g)",
                "grams": 90
            },
            {
                "label": "1 Medium Slice (~130g)",
                "grams": 130
            },
            {
                "label": "2 Regular Slices",
                "grams": 180
            },
            {
                "label": "2 Medium Slices",
                "grams": 260
            },
            {
                "label": "Whole Regular (~540g)",
                "grams": 540
            },
            {
                "label": "Whole Medium (~780g)",
                "grams": 780
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 310,
            "protein": 11,
            "carbs": 38,
            "fat": 13,
            "fiber": 2
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_burger_pizza_veg.jpeg"
    },
    {
        "id": "dominos_burger_pizza_chicken",
        "name": "Burger Pizza Chicken (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~90g)",
                "grams": 90
            },
            {
                "label": "1 Medium Slice (~130g)",
                "grams": 130
            },
            {
                "label": "2 Regular Slices",
                "grams": 180
            },
            {
                "label": "2 Medium Slices",
                "grams": 260
            },
            {
                "label": "Whole Regular (~540g)",
                "grams": 540
            },
            {
                "label": "Whole Medium (~780g)",
                "grams": 780
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 330,
            "protein": 16,
            "carbs": 36,
            "fat": 14,
            "fiber": 2
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_burger_pizza_chicken.jpeg"
    },
    {
        "id": "dominos_ph_tandoori_paneer",
        "name": "Tandoori Paneer Pizza",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~65g)",
                "grams": 65
            },
            {
                "label": "1 Medium Slice (~90g)",
                "grams": 90
            },
            {
                "label": "2 Regular Slices",
                "grams": 130
            },
            {
                "label": "2 Medium Slices",
                "grams": 180
            },
            {
                "label": "Whole Regular (~390g)",
                "grams": 390
            },
            {
                "label": "Whole Medium (~540g)",
                "grams": 540
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 250,
            "protein": 10,
            "carbs": 32,
            "fat": 10,
            "fiber": 2
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "dominos_ph_tandoori_paneer.jpeg"
    },
    {
        "id": "dominos_ph_chicken_supreme",
        "name": "Chicken Supreme Pizza",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~70g)",
                "grams": 70
            },
            {
                "label": "1 Medium Slice (~95g)",
                "grams": 95
            },
            {
                "label": "2 Regular Slices",
                "grams": 140
            },
            {
                "label": "2 Medium Slices",
                "grams": 190
            },
            {
                "label": "Whole Regular (~420g)",
                "grams": 420
            },
            {
                "label": "Whole Medium (~570g)",
                "grams": 570
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 260,
            "protein": 13,
            "carbs": 30,
            "fat": 11,
            "fiber": 2
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "Chicken_Supreme_Pizza_202604210052.jpeg"
    },
    {
        "id": "dominos_generic_pizza",
        "name": "Generic Restaurant Pizza",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Regular Slice (~80g)",
                "grams": 80
            },
            {
                "label": "1 Medium Slice (~110g)",
                "grams": 110
            },
            {
                "label": "2 Regular Slices",
                "grams": 160
            },
            {
                "label": "2 Medium Slices",
                "grams": 220
            },
            {
                "label": "Whole Regular (~480g)",
                "grams": 480
            },
            {
                "label": "Whole Medium (~660g)",
                "grams": 660
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 270,
            "protein": 11,
            "carbs": 33,
            "fat": 11,
            "fiber": 2
        },
        "cheeseBurst": {
            "calories": 120,
            "protein": 5,
            "carbs": 4,
            "fat": 9,
            "fiber": 0
        },
        "image": "Restaurant_pizza_on_202604210052.jpeg"
    },
    {
        "id": "dominos_garlic_breadsticks",
        "name": "Garlic Breadsticks (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "2 pieces (72g)",
                "grams": 72
            },
            {
                "label": "4 pieces (144g)",
                "grams": 144
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 270,
            "protein": 8,
            "carbs": 42,
            "fat": 8,
            "fiber": 2
        },
        "image": "Garlic_Breadsticks_on_202604210052.jpeg"
    },
    {
        "id": "dominos_stuffed_garlic_plain",
        "name": "Stuffed Garlic Bread Plain",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "2 pieces (110g)",
                "grams": 110
            },
            {
                "label": "4 pieces (220g)",
                "grams": 220
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 298,
            "protein": 9,
            "carbs": 38,
            "fat": 12,
            "fiber": 2
        },
        "image": "Stuffed_Garlic_Bread_202604210052.jpeg"
    },
    {
        "id": "dominos_stuffed_garlic_cheesy",
        "name": "Stuffed Garlic Bread Cheesy",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "2 pieces (115g)",
                "grams": 115
            },
            {
                "label": "4 pieces (230g)",
                "grams": 230
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 320,
            "protein": 11,
            "carbs": 37,
            "fat": 14,
            "fiber": 2
        },
        "image": "Cheesy_Garlic_Bread_202604210052.jpeg"
    },
    {
        "id": "dominos_stuffed_garlic_jalapeno",
        "name": "Stuffed Garlic Bread Jalapeño",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "2 pieces (115g)",
                "grams": 115
            },
            {
                "label": "4 pieces (230g)",
                "grams": 230
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 315,
            "protein": 11,
            "carbs": 37,
            "fat": 13,
            "fiber": 2.5
        },
        "image": "Stuffed_Garlic_Bread_202604210052.jpeg"
    },
    {
        "id": "dominos_cheese_dip",
        "name": "Cheese Dip (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "weight",
        "defaultServing": {
            "unit": "cup",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Cup (50g) — ~55 kcal",
                "grams": 50
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 110,
            "protein": 3,
            "carbs": 5,
            "fat": 9,
            "fiber": 0
        },
        "image": "Cheese_Dip_served_202604210052.jpeg"
    },
    {
        "id": "dominos_salsa_dip",
        "name": "Salsa Dip (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "weight",
        "defaultServing": {
            "unit": "cup",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Cup (50g)",
                "grams": 50
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 58,
            "protein": 1,
            "carbs": 8,
            "fat": 2,
            "fiber": 1
        },
        "image": "Salsa_Dip_served_202604210052.jpeg"
    },
    {
        "id": "dominos_bbq_dip",
        "name": "BBQ Dipping Sauce (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "weight",
        "defaultServing": {
            "unit": "cup",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Cup (50g)",
                "grams": 50
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 100,
            "protein": 1,
            "carbs": 22,
            "fat": 1,
            "fiber": 0
        },
        "image": "BBQ_Dipping_Sauce_202604210052.jpeg"
    },
    {
        "id": "dominos_baked_pasta",
        "name": "Baked Pasta (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "weight",
        "defaultServing": {
            "unit": "serving",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Box (250g)",
                "grams": 250
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 210,
            "protein": 9,
            "carbs": 28,
            "fat": 8,
            "fiber": 2
        },
        "image": "Baked_pasta_served_202604210052.jpeg"
    },
    {
        "id": "dominos_choco_lava_cake",
        "name": "Choco Lava Cake (Domino's)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece (75g)",
                "grams": 75
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 367,
            "protein": 6,
            "carbs": 44,
            "fat": 19,
            "fiber": 2
        },
        "image": "Choco_Lava_Cake_202604210052.jpeg"
    },
    {
        "id": "california_bbq_chicken_bowl",
        "name": "BBQ Chicken Bowl (California Burrito)",
        "category": "snacks",
        "subcategory": "Mexican",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Mini Bowl (300g) — 570 kcal",
                "grams": 300
            },
            {
                "label": "Regular Bowl (450g) — 719 kcal",
                "grams": 450
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 160,
            "protein": 9.1,
            "carbs": 21.7,
            "fat": 4.4,
            "fiber": 3
        },
        "image": "BBQ_Chicken_Bowl_202604210052.jpeg"
    },
    {
        "id": "california_bbq_paneer_bowl",
        "name": "BBQ Paneer Bowl (California Burrito)",
        "category": "snacks",
        "subcategory": "Mexican",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Mini Bowl (300g) — 644 kcal",
                "grams": 300
            },
            {
                "label": "Regular Bowl (450g) — 792 kcal",
                "grams": 450
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 176,
            "protein": 7.9,
            "carbs": 21.5,
            "fat": 6.8,
            "fiber": 3
        },
        "image": "BBQ_Paneer_Bowl_202604210052.jpeg"
    },
    {
        "id": "california_fajita_veg_bowl",
        "name": "Fajita Veg Bowl (California Burrito)",
        "category": "snacks",
        "subcategory": "Mexican",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Mini Bowl (300g) — 433 kcal",
                "grams": 300
            },
            {
                "label": "Regular Bowl (450g) — 582 kcal",
                "grams": 450
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 130,
            "protein": 4.3,
            "carbs": 20.3,
            "fat": 3.5,
            "fiber": 2.5
        },
        "image": "Fajita_Veg_Bowl_202604210052.jpeg"
    },
    {
        "id": "california_perip_chicken_bowl",
        "name": "Crispy Peri Peri Chicken Bowl (California Burrito)",
        "category": "snacks",
        "subcategory": "Mexican",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Mini Bowl (300g) — 600 kcal",
                "grams": 300
            },
            {
                "label": "Regular Bowl (450g) — 749 kcal",
                "grams": 450
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 166,
            "protein": 8.9,
            "carbs": 23.1,
            "fat": 6.2,
            "fiber": 3
        },
        "image": "Crispy_Peri_Peri_202604210052.jpeg"
    },
    {
        "id": "california_bbq_chicken_pro_bowl",
        "name": "BBQ Chicken PRO Bowl (California Burrito)",
        "category": "snacks",
        "subcategory": "Mexican",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "PRO Bowl (350g) — 488 kcal",
                "grams": 350
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 139,
            "protein": 8.3,
            "carbs": 14.3,
            "fat": 5.7,
            "fiber": 3
        },
        "image": "BBQ_Chicken_Bowl_202604210052.jpeg"
    },
    {
        "id": "california_paneer_pro_bowl",
        "name": "Mexican Paneer PRO Bowl (California Burrito)",
        "category": "snacks",
        "subcategory": "Mexican",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "PRO Bowl (350g) — 555 kcal",
                "grams": 350
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 159,
            "protein": 6.6,
            "carbs": 14.6,
            "fat": 8.9,
            "fiber": 2.5
        },
        "image": "Mexican_Paneer_PRO_202604210052.jpeg"
    },
    {
        "id": "california_bbq_chicken_burrito",
        "name": "BBQ Chicken Burrito (California Burrito)",
        "category": "snacks",
        "subcategory": "Mexican",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burrito",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Mini Burrito (350g) — 677 kcal",
                "grams": 350
            },
            {
                "label": "Regular Burrito (500g) — 793 kcal",
                "grams": 500
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 159,
            "protein": 8.6,
            "carbs": 21,
            "fat": 4.8,
            "fiber": 2
        },
        "image": "BBQ_Chicken_Burrito_202604210052.jpeg"
    },
    {
        "id": "california_bbq_paneer_burrito",
        "name": "BBQ Paneer Burrito (California Burrito)",
        "category": "snacks",
        "subcategory": "Mexican",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burrito",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Mini Burrito (350g) — 656 kcal",
                "grams": 350
            },
            {
                "label": "Regular Burrito (500g) — 750 kcal",
                "grams": 500
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 150,
            "protein": 8.2,
            "carbs": 23,
            "fat": 7,
            "fiber": 2
        },
        "image": "BBQ_Paneer_Burrito_202604210052.jpeg"
    },
    {
        "id": "california_chipotle_chicken_burrito",
        "name": "Chili Chipotle Chicken Burrito (California Burrito)",
        "category": "snacks",
        "subcategory": "Mexican",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burrito",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Mini Burrito (350g) — 683 kcal",
                "grams": 350
            },
            {
                "label": "Regular Burrito (500g) — 800 kcal",
                "grams": 500
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 160,
            "protein": 8.8,
            "carbs": 20.8,
            "fat": 5,
            "fiber": 2
        },
        "image": "Chili_Chipotle_Chicken_202604210052.jpeg"
    },
    {
        "id": "california_mushroom_burrito",
        "name": "Crispy Mushroom Burrito (California Burrito)",
        "category": "snacks",
        "subcategory": "Mexican",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burrito",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Mini Burrito (350g) — 700 kcal",
                "grams": 350
            },
            {
                "label": "Regular Burrito (500g) — 816 kcal",
                "grams": 500
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 163,
            "protein": 5.2,
            "carbs": 23,
            "fat": 6.2,
            "fiber": 3
        },
        "image": "Crispy_Mushroom_Burrito_202604210052.jpeg"
    },
    {
        "id": "california_fajita_veg_burrito",
        "name": "Fajita Veg Burrito (California Burrito)",
        "category": "snacks",
        "subcategory": "Mexican",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burrito",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Mini Burrito (350g) — 540 kcal",
                "grams": 350
            },
            {
                "label": "Regular Burrito (500g) — 656 kcal",
                "grams": 500
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 131,
            "protein": 4,
            "carbs": 21,
            "fat": 4.4,
            "fiber": 3
        },
        "image": "Fajita_Veg_Burrito_202604210052.jpeg"
    },
    {
        "id": "california_7layer_chicken_taco",
        "name": "7 Layer Chicken Taco (California Burrito)",
        "category": "snacks",
        "subcategory": "Mexican",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "taco",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Taco (120g) — 223 kcal",
                "grams": 120
            },
            {
                "label": "2 Tacos (240g)",
                "grams": 240
            },
            {
                "label": "3 Tacos (360g)",
                "grams": 360
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 186,
            "protein": 10,
            "carbs": 23.3,
            "fat": 5.8,
            "fiber": 2
        },
        "image": "7_Layer_Chicken_202604210052.jpeg"
    },
    {
        "id": "california_7layer_veg_taco",
        "name": "7 Layer Veg Taco (California Burrito)",
        "category": "snacks",
        "subcategory": "Mexican",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "taco",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Taco (120g) — 180 kcal",
                "grams": 120
            },
            {
                "label": "2 Tacos (240g)",
                "grams": 240
            },
            {
                "label": "3 Tacos (360g)",
                "grams": 360
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 150,
            "protein": 5.8,
            "carbs": 25,
            "fat": 26.7,
            "fiber": 3
        },
        "image": "7_Layer_Veg_202604210052.jpeg"
    },
    {
        "id": "california_bbq_chicken_taco",
        "name": "BBQ Chicken Taco - Crunchy (California Burrito)",
        "category": "snacks",
        "subcategory": "Mexican",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "taco",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Taco (130g) — 284 kcal",
                "grams": 130
            },
            {
                "label": "2 Tacos (260g)",
                "grams": 260
            },
            {
                "label": "3 Tacos (390g)",
                "grams": 390
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 218,
            "protein": 10.8,
            "carbs": 26.2,
            "fat": 7.7,
            "fiber": 2
        },
        "image": "BBQ_Chicken_Taco_202604210052.jpeg"
    },
    {
        "id": "california_bbq_paneer_taco",
        "name": "BBQ Paneer Taco (California Burrito)",
        "category": "snacks",
        "subcategory": "Mexican",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "taco",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Taco (130g) — 271 kcal",
                "grams": 130
            },
            {
                "label": "2 Tacos (260g)",
                "grams": 260
            },
            {
                "label": "3 Tacos (390g)",
                "grams": 390
            },
            { "label": "Custom (g)", "grams": null }
        ],
        "per100g": {
            "calories": 208,
            "protein": 9.2,
            "carbs": 24.6,
            "fat": 8.5,
            "fiber": 2
        },
        "image": "BBQ_Paneer_Taco_202604210052.jpeg"
    },
    {
        "id": "california_chicken_quesadilla",
        "name": "Chicken Quesadilla (California Burrito)",
        "category": "snacks",
        "subcategory": "Mexican",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "quesadilla",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Quesadilla (250g) — ~550 kcal",
                "grams": 250
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 220,
            "protein": 13,
            "carbs": 22,
            "fat": 9,
            "fiber": 2
        },
        "image": "Chicken_Quesadilla_on_202604210052.jpeg"
    },
    {
        "id": "california_paneer_quesadilla",
        "name": "Paneer Quesadilla (California Burrito)",
        "category": "snacks",
        "subcategory": "Mexican",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "quesadilla",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Quesadilla (250g) — ~530 kcal",
                "grams": 250
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 212,
            "protein": 9.5,
            "carbs": 21,
            "fat": 10,
            "fiber": 2
        },
        "image": "Paneer_Quesadilla_served_202604210052.jpeg"
    },
    {
        "id": "california_veg_quesadilla",
        "name": "Veg Quesadilla (California Burrito)",
        "category": "snacks",
        "subcategory": "Mexican",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "quesadilla",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Quesadilla (230g) — ~450 kcal",
                "grams": 230
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 196,
            "protein": 6.5,
            "carbs": 23,
            "fat": 8.5,
            "fiber": 3
        },
        "image": "Veg_Quesadilla_served_202604210052.jpeg"
    },
    {
        "id": "pesarattu_plain",
        "name": "Pesarattu (Moong Dal Dosa)",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Pesarattu (100g)",
                "grams": 100
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 145,
            "protein": 7.5,
            "carbs": 22,
            "fat": 3,
            "fiber": 2.5
        },
        "image": "Pesarattu_served_on_202604210052.jpeg"
    },
    {
        "id": "pesarattu_masala",
        "name": "Masala Pesarattu (Upma Pesarattu)",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Masala Pesarattu (200g)",
                "grams": 200
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 155,
            "protein": 6,
            "carbs": 23,
            "fat": 4.5,
            "fiber": 2
        },
        "image": "Masala_Pesarattu_served_202604210052.jpeg"
    },
    {
        "id": "pesarattu_paneer",
        "name": "Paneer Pesarattu",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Paneer Pesarattu (200g)",
                "grams": 200
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 185,
            "protein": 9.5,
            "carbs": 19,
            "fat": 8,
            "fiber": 2
        },
        "image": "Paneer_Pesarattu_on_202604210052.jpeg"
    },
    {
        "id": "pesarattu_onion",
        "name": "Onion Pesarattu",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Onion Pesarattu (150g)",
                "grams": 150
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 140,
            "protein": 6.5,
            "carbs": 20,
            "fat": 3.5,
            "fiber": 2.5
        },
        "image": "Onion_Pesarattu_on_202604210052.jpeg"
    },
    {
        "id": "dosa_paneer",
        "name": "Paneer Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Paneer Dosa (200g)",
                "grams": 200
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 190,
            "protein": 8.5,
            "carbs": 21,
            "fat": 8.5,
            "fiber": 1.5
        },
        "image": "Paneer_Dosa_elegant_202604210052.jpeg"
    },
    {
        "id": "dosa_set",
        "name": "Set Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Plate (3 Pieces, 250g)",
                "grams": 250
            },
            {
                "label": "1 Piece (83g)",
                "grams": 83
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 165,
            "protein": 4,
            "carbs": 28,
            "fat": 4.5,
            "fiber": 1
        },
        "image": "Karnataka_Set_Dosa_202604210052.jpeg"
    },
    {
        "id": "dosa_rava",
        "name": "Rava Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Rava Dosa (150g)",
                "grams": 150
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 150,
            "protein": 3.5,
            "carbs": 23,
            "fat": 5,
            "fiber": 1.5
        },
        "image": "Rava_Dosa_served_202604210052.jpeg"
    },
    {
        "id": "dosa_rava_masala",
        "name": "Rava Masala Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Rava Masala Dosa (250g)",
                "grams": 250
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 145,
            "protein": 3,
            "carbs": 21,
            "fat": 5.5,
            "fiber": 2
        },
        "image": "Rava_Dosa_served_202604210052.jpeg"
    },
    {
        "id": "dosa_neer",
        "name": "Neer Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 3
        },
        "servingOptions": [
            {
                "label": "3 Pieces (150g)",
                "grams": 150
            },
            {
                "label": "1 Piece (50g)",
                "grams": 50
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 180,
            "protein": 2.5,
            "carbs": 32,
            "fat": 4.5,
            "fiber": 1.5
        },
        "image": "Neer_Dosa_served_202604210052.jpeg"
    },
    {
        "id": "dosa_mysore_masala",
        "name": "Mysore Masala Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Mysore Masala Dosa (220g)",
                "grams": 220
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 185,
            "protein": 4.5,
            "carbs": 23,
            "fat": 8.5,
            "fiber": 2
        },
        "image": "Mysore_Masala_Dosa_202604210052.jpeg"
    },
    {
        "id": "dosa_egg",
        "name": "Egg Dosa (Muttai Dosa)",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Egg Dosa (180g)",
                "grams": 180
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 195,
            "protein": 9.5,
            "carbs": 18,
            "fat": 9,
            "fiber": 1
        },
        "image": "Egg_Dosa_on_202604211133.jpeg"
    },
    {
        "id": "dosa_onion",
        "name": "Onion Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Onion Dosa (150g)",
                "grams": 150
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 155,
            "protein": 4,
            "carbs": 24,
            "fat": 4.5,
            "fiber": 1
        },
        "image": "Onion_Dosa_served_202604210052.jpeg"
    },
    {
        "id": "dosa_paper_roast",
        "name": "Paper Roast Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Paper Roast (120g)",
                "grams": 120
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 230,
            "protein": 5,
            "carbs": 32,
            "fat": 9,
            "fiber": 1
        },
        "image": "Paper_Roast_Dosa_202604210053.jpeg"
    },
    {
        "id": "dosa_cheese",
        "name": "Cheese Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Cheese Dosa (180g)",
                "grams": 180
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 240,
            "protein": 7.5,
            "carbs": 22,
            "fat": 12.5,
            "fiber": 1.5
        },
        "image": "Cheese_Dosa_served_202604210052.jpeg"
    },
    {
        "id": "parotta_plain",
        "name": "Malabar Parotta (Kerala Parotta)",
        "category": "snacks",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Parotta (100g)",
                "grams": 100
            },
            {
                "label": "2 Parottas (200g)",
                "grams": 200
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 345,
            "protein": 6.5,
            "carbs": 46,
            "fat": 15,
            "fiber": 2
        },
        "image": "Malabar_Parotta_served_202604210052.jpeg"
    },
    {
        "id": "parotta_kurma",
        "name": "Parotta with Veg Kurma",
        "category": "meals",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Plate (2 Parottas + Kurma, 350g)",
                "grams": 350
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 215,
            "protein": 4.5,
            "carbs": 29,
            "fat": 9.5,
            "fiber": 2.5
        },
        "image": "Parotta_with_Veg_202604210053.jpeg"
    },
    {
        "id": "kothu_parotta_veg",
        "name": "Kothu Parotta (Veg)",
        "category": "meals",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Plate (300g)",
                "grams": 300
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 250,
            "protein": 5.5,
            "carbs": 32,
            "fat": 11,
            "fiber": 3
        },
        "image": "Kothu_Parotta_served_202604210052.jpeg"
    },
    {
        "id": "kothu_parotta_egg",
        "name": "Egg Kothu Parotta",
        "category": "meals",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Plate (350g)",
                "grams": 350
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 265,
            "protein": 9.5,
            "carbs": 27,
            "fat": 13.5,
            "fiber": 2.5
        },
        "image": "Egg_Kothu_Parotta_202604210052.jpeg"
    },
    {
        "id": "kothu_parotta_chicken",
        "name": "Chicken Kothu Parotta",
        "category": "meals",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Plate (400g)",
                "grams": 400
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 275,
            "protein": 12.5,
            "carbs": 25,
            "fat": 14,
            "fiber": 2
        },
        "image": "Chicken_Kothu_Parotta_202604210052.jpeg"
    },
    {
        "id": "chilli_parotta",
        "name": "Chilli Parotta",
        "category": "meals",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Plate (300g)",
                "grams": 300
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 280,
            "protein": 6.5,
            "carbs": 35,
            "fat": 13,
            "fiber": 3
        },
        "image": "Chilli_Parotta_served_202604210052.jpeg"
    },
    {
        "id": "mysore_bonda",
        "name": "Mysore Bonda (Goli Baje)",
        "category": "snacks",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "2 Pieces (100g)",
                "grams": 100
            },
            {
                "label": "1 Piece (50g)",
                "grams": 50
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 310,
            "protein": 5.5,
            "carbs": 42,
            "fat": 12.5,
            "fiber": 2
        },
        "image": "Mysore_Bonda_served_202604210052.jpeg"
    },
    {
        "id": "mangalore_bajji",
        "name": "Mangalore Bajji",
        "category": "snacks",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "2 Pieces (100g)",
                "grams": 100
            },
            {
                "label": "1 Piece (50g)",
                "grams": 50
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 290,
            "protein": 6,
            "carbs": 40,
            "fat": 11,
            "fiber": 2
        },
        "image": "Mangalore_Bajji_on_202604210052.jpeg"
    },
    {
        "id": "aloo_bonda",
        "name": "Aloo Bonda (Batata Vada)",
        "category": "snacks",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece (70g)",
                "grams": 70
            },
            {
                "label": "2 Pieces (140g)",
                "grams": 140
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 245,
            "protein": 4.5,
            "carbs": 28,
            "fat": 13,
            "fiber": 2.5
        },
        "image": "Aloo_Bonda_served_202604210052.jpeg"
    },
    {
        "id": "mirchi_bajji",
        "name": "Mirchi Bajji (Chilli Bajji)",
        "category": "snacks",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Bajji (80g)",
                "grams": 80
            },
            {
                "label": "2 Bajjis (160g)",
                "grams": 160
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 215,
            "protein": 5,
            "carbs": 22,
            "fat": 12,
            "fiber": 3
        },
        "image": "Andhra_Mirchi_Bajji_202604210052.jpeg"
    },
    {
        "id": "onion_bajji",
        "name": "Onion Bajji (Pakoda)",
        "category": "snacks",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "2 Pieces (80g)",
                "grams": 80
            },
            {
                "label": "1 Plate (~150g)",
                "grams": 150
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 280,
            "protein": 6.5,
            "carbs": 29,
            "fat": 15.5,
            "fiber": 3.5
        },
        "image": "Onion_Bajji_fried_202604210052.jpeg"
    },
    {
        "id": "punugulu",
        "name": "Punugulu",
        "category": "snacks",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Plate (~150g)",
                "grams": 150
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 260,
            "protein": 5,
            "carbs": 36,
            "fat": 10.5,
            "fiber": 2
        },
        "image": "Punugulu_served_with_202604210139.jpeg"
    },
    {
        "id": "vazhakkai_bajji",
        "name": "Raw Banana Bajji (Vazhakkai)",
        "category": "snacks",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "2 Pieces (120g)",
                "grams": 120
            },
            {
                "label": "1 Piece (60g)",
                "grams": 60
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 235,
            "protein": 4.5,
            "carbs": 32,
            "fat": 10.5,
            "fiber": 3.5
        },
        "image": "Raw_Banana_Bajji_202604210052.jpeg"
    },
    {
        "id": "bread_bajji",
        "name": "Bread Bajji (Bread Pakoda)",
        "category": "snacks",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece (100g)",
                "grams": 100
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 290,
            "protein": 6.5,
            "carbs": 34,
            "fat": 14,
            "fiber": 2
        },
        "image": "Bread_Bajji_served_202604210052.jpeg"
    },

    {
        "id": "masala_vada",
        "name": "Masala Vada (Dal Vada/Parippu Vada)",
        "category": "snacks",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece (50g)",
                "grams": 50
            },
            {
                "label": "2 Pieces (100g)",
                "grams": 100
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 320,
            "protein": 14,
            "carbs": 42,
            "fat": 11,
            "fiber": 6
        },
        "image": "Masala_Vada_served_202604210052.jpeg"
    },
    {
        "id": "maddur_vada",
        "name": "Maddur Vada",
        "category": "snacks",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece (70g)",
                "grams": 70
            },
            {
                "label": "2 Pieces (140g)",
                "grams": 140
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 350,
            "protein": 7.5,
            "carbs": 48,
            "fat": 15,
            "fiber": 3
        },
        "image": "medu_vada.png"
    },
    {
        "id": "sabudana_vada",
        "name": "Sabudana Vada",
        "category": "snacks",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "2 Pieces (100g)",
                "grams": 100
            },
            {
                "label": "1 Piece (50g)",
                "grams": 50
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 325,
            "protein": 4,
            "carbs": 46,
            "fat": 14,
            "fiber": 1.5
        },
        "image": "Masala_Vada_served_202604210052.jpeg"
    },

    // ==========================================
    // 🍛 SOUTH INDIAN CURRIES & SABJIS
    // ==========================================
    { "id": "kalaan_masala", "name": "Kalaan Masala (Mushroom Curry)", "category": "curries", "subcategory": "South Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (100g)", "grams": 100 }, { "label": "Regular Bowl (150g)", "grams": 150 }, { "label": "Large Bowl (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 70, "protein": 2.5, "carbs": 5, "fat": 4, "fiber": 1.5 }, "image": "Kalaan_Masala_served_202604210052.jpeg" },
    { "id": "vendakkai_poriyal", "name": "Vendakkai Poriyal (Okra Stir-fry)", "category": "vegetables", "subcategory": "South Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (80g)", "grams": 80 }, { "label": "Regular Bowl (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 118, "protein": 2.8, "carbs": 10, "fat": 6.5, "fiber": 3.2 }, "image": "Vendakkai_Poriyal_served_202604210052.jpeg" },
    { "id": "keerai_kootu", "name": "Keerai Kootu (Greens & Lentils)", "category": "curries", "subcategory": "South Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (100g)", "grams": 100 }, { "label": "Regular Bowl (175g)", "grams": 175 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 70, "protein": 3.5, "carbs": 8, "fat": 2.5, "fiber": 2.5 }, "image": "Tamil_Nadu_Keerai_202604210052.jpeg" },
    { "id": "vazhakkai_fry", "name": "Vazhakkai Fry (Raw Banana Fry)", "category": "vegetables", "subcategory": "South Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (80g)", "grams": 80 }, { "label": "Regular Bowl (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 140, "protein": 1.2, "carbs": 22, "fat": 5, "fiber": 2.5 }, "image": "Vazhakkai_Fry_on_202604210052.jpeg" },
    { "id": "potato_fry_si", "name": "Urulaikizhangu Varuval (Potato Fry)", "category": "vegetables", "subcategory": "South Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (80g)", "grams": 80 }, { "label": "Regular Bowl (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 150, "protein": 2, "carbs": 20, "fat": 6.5, "fiber": 2 }, "image": "Urulaikizhangu_Varuval_served_202604210052.jpeg" },

    { "id": "taro_root_fry", "name": "Seppankizhangu Fry (Taro Root Fry)", "category": "vegetables", "subcategory": "South Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (80g)", "grams": 80 }, { "label": "Regular Bowl (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 145, "protein": 1.5, "carbs": 22, "fat": 5.5, "fiber": 2 }, "image": "Seppankizhangu_Fry_on_202604210052.jpeg" },
    { "id": "avial", "name": "Avial (Mixed Veg Coconut Curry)", "category": "curries", "subcategory": "South Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (100g)", "grams": 100 }, { "label": "Regular Bowl (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 90, "protein": 2, "carbs": 8, "fat": 5, "fiber": 3 }, "image": "Kerala_Avial_mixed_202604210052.jpeg" },
    { "id": "olan", "name": "Olan (Ash Gourd & Coconut Curry)", "category": "curries", "subcategory": "South Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (100g)", "grams": 100 }, { "label": "Regular Bowl (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 65, "protein": 1.5, "carbs": 6, "fat": 4, "fiber": 1.5 }, "image": "Olan_curry_served_202604210052.jpeg" },
    { "id": "erissery", "name": "Erissery (Pumpkin & Lentil Curry)", "category": "curries", "subcategory": "South Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (100g)", "grams": 100 }, { "label": "Regular Bowl (175g)", "grams": 175 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 100, "protein": 4, "carbs": 12, "fat": 4, "fiber": 3 }, "image": "Erissery_served_on_202604210053.jpeg" },
    { "id": "thoran_cabbage", "name": "Cabbage Thoran (Kerala Stir-fry)", "category": "vegetables", "subcategory": "South Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (80g)", "grams": 80 }, { "label": "Regular Bowl (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 85, "protein": 2, "carbs": 7, "fat": 4.5, "fiber": 2.5 }, "image": "Cabbage_Thoran_served_202604210052.jpeg" },
    { "id": "beans_poriyal", "name": "Beans Poriyal (Green Beans Stir-fry)", "category": "vegetables", "subcategory": "South Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (80g)", "grams": 80 }, { "label": "Regular Bowl (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 80, "protein": 2, "carbs": 8, "fat": 3.5, "fiber": 3 }, "image": "Beans_Poriyal_South_202604210210.jpeg" },
    { "id": "carrot_poriyal", "name": "Carrot Poriyal", "category": "vegetables", "subcategory": "South Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (80g)", "grams": 80 }, { "label": "Regular Bowl (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 75, "protein": 1.5, "carbs": 9, "fat": 3, "fiber": 2.5 }, "image": "Carrot_Poriyal_stir-fried_202604210052.jpeg" },
    { "id": "beetroot_poriyal", "name": "Beetroot Poriyal", "category": "vegetables", "subcategory": "South Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (80g)", "grams": 80 }, { "label": "Regular Bowl (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 70, "protein": 1.5, "carbs": 10, "fat": 2.5, "fiber": 2.5 }, "image": "Beetroot_poriyal_with_202604210052.jpeg" },
    { "id": "mor_kuzhambu", "name": "Mor Kuzhambu (Buttermilk Curry)", "category": "curries", "subcategory": "South Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (150g)", "grams": 150 }, { "label": "Regular Bowl (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 40, "protein": 1.5, "carbs": 3, "fat": 2, "fiber": 0.5 }, "image": "Mor_Kuzhambu_served_202604210052.jpeg" },
    { "id": "vatha_kuzhambu", "name": "Vatha Kuzhambu (Tangy Tamarind Curry)", "category": "curries", "subcategory": "South Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (100g)", "grams": 100 }, { "label": "Regular Bowl (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 55, "protein": 1, "carbs": 7, "fat": 2.5, "fiber": 1 }, "image": "Vatha_Kuzhambu_served_202604210052.jpeg" },
    { "id": "chettinad_chicken_curry", "name": "Chettinad Chicken Curry", "category": "curries", "subcategory": "South Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Bowl (150g)", "grams": 150 }, { "label": "Regular Bowl (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 155, "protein": 14, "carbs": 5, "fat": 9, "fiber": 1.5 }, "image": "Chettinad_Chicken_Curry_202604210052.jpeg" },
    { "id": "prawn_masala_si", "name": "Prawn Masala (South Indian)", "category": "curries", "subcategory": "South Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Bowl (150g)", "grams": 150 }, { "label": "Regular Bowl (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 120, "protein": 16, "carbs": 4, "fat": 5, "fiber": 1 }, "image": "Prawn_Masala_served_202604210052.jpeg" },

    // ==========================================
    // 🍲 NORTH INDIAN SABJIS & GRAVIES
    // ==========================================
    { "id": "dum_aloo_ni", "name": "Dum Aloo", "category": "curries", "subcategory": "North Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (150g)", "grams": 150 }, { "label": "Regular Bowl (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 120, "protein": 2.5, "carbs": 15, "fat": 5.5, "fiber": 2 }, "image": "Dum_Aloo_served_202604210052.jpeg" },
    { "id": "achari_paneer", "name": "Achari Paneer", "category": "curries", "subcategory": "North Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (150g)", "grams": 150 }, { "label": "Regular Bowl (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 190, "protein": 9, "carbs": 6, "fat": 14, "fiber": 1.5 }, "image": "Achari_Paneer_in_202604210052.jpeg" },
    { "id": "kadai_paneer", "name": "Kadai Paneer", "category": "curries", "subcategory": "North Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (150g)", "grams": 150 }, { "label": "Regular Bowl (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 200, "protein": 9.5, "carbs": 7, "fat": 15, "fiber": 1.8 }, "image": "Kadai_Paneer_in_202604210052.jpeg" },
    { "id": "paneer_tikka_masala", "name": "Paneer Tikka Masala", "category": "curries", "subcategory": "North Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (150g)", "grams": 150 }, { "label": "Regular Bowl (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 195, "protein": 10, "carbs": 8, "fat": 14, "fiber": 2 }, "image": "Paneer_Tikka_Masala_202604210052.jpeg" },
    { "id": "aloo_methi", "name": "Aloo Methi", "category": "vegetables", "subcategory": "North Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (100g)", "grams": 100 }, { "label": "Regular Bowl (175g)", "grams": 175 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 100, "protein": 2.5, "carbs": 14, "fat": 4, "fiber": 2.5 }, "image": "Aloo_Methi_dry-cooked_202604210052.jpeg" },
    { "id": "sarson_da_saag", "name": "Sarson da Saag (Mustard Greens)", "category": "curries", "subcategory": "North Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (150g)", "grams": 150 }, { "label": "Regular Bowl (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 70, "protein": 3.5, "carbs": 6, "fat": 3, "fiber": 3 }, "image": "Sarson_da_Saag_202604210052.jpeg" },
    { "id": "chana_dal", "name": "Chana Dal (Split Chickpea)", "category": "curries", "subcategory": "North Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (150g)", "grams": 150 }, { "label": "Regular Bowl (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 95, "protein": 6, "carbs": 12, "fat": 2.5, "fiber": 4 }, "image": "Chana_Dal_served_202604210052.jpeg" },
    { "id": "moong_dal", "name": "Moong Dal (Yellow Lentil)", "category": "curries", "subcategory": "North Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (150g)", "grams": 150 }, { "label": "Regular Bowl (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 85, "protein": 5.5, "carbs": 11, "fat": 2, "fiber": 3.5 }, "image": "Moong_Dal_served_202604210052.jpeg" },
    { "id": "masoor_dal", "name": "Masoor Dal (Red Lentil)", "category": "curries", "subcategory": "North Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (150g)", "grams": 150 }, { "label": "Regular Bowl (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 85, "protein": 6, "carbs": 11, "fat": 1.5, "fiber": 4 }, "image": "Masoor_Dal_served_202604210052.jpeg" },
    { "id": "paneer_bhurji", "name": "Paneer Bhurji", "category": "curries", "subcategory": "North Indian", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (100g)", "grams": 100 }, { "label": "Regular Bowl (175g)", "grams": 175 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 210, "protein": 12, "carbs": 5, "fat": 16, "fiber": 1 }, "image": "Spiced_Paneer_Bhurji_202604210052.jpeg" },

    // ==========================================
    // 🍜 INDO-CHINESE DISHES
    // ==========================================
    { "id": "gobi_manchurian_dry", "name": "Gobi Manchurian (Dry)", "category": "snacks", "subcategory": "Indo-Chinese", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Plate (150g)", "grams": 150 }, { "label": "Regular Plate (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 195, "protein": 4, "carbs": 22, "fat": 10, "fiber": 2 }, "image": "Gobi_Manchurian_served_202604210052.jpeg" },
    { "id": "gobi_manchurian_gravy", "name": "Gobi Manchurian (Gravy)", "category": "curries", "subcategory": "Indo-Chinese", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Bowl (200g)", "grams": 200 }, { "label": "Regular Bowl (300g)", "grams": 300 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 120, "protein": 3.5, "carbs": 14, "fat": 5.5, "fiber": 1.5 }, "image": "Gobi_Manchurian_served_202604210052.jpeg" },
    { "id": "paneer_manchurian_dry", "name": "Paneer Manchurian (Dry)", "category": "snacks", "subcategory": "Indo-Chinese", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Plate (150g)", "grams": 150 }, { "label": "Regular Plate (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 240, "protein": 11, "carbs": 14, "fat": 15, "fiber": 1 }, "image": "Paneer_Manchurian_served_202604210052.jpeg" },
    { "id": "paneer_manchurian_gravy", "name": "Paneer Manchurian (Gravy)", "category": "curries", "subcategory": "Indo-Chinese", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Bowl (200g)", "grams": 200 }, { "label": "Regular Bowl (300g)", "grams": 300 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 155, "protein": 8, "carbs": 10, "fat": 9, "fiber": 1 }, "image": "Paneer_Manchurian_served_202604210052.jpeg" },
    { "id": "hakka_noodles_egg", "name": "Egg Hakka Noodles", "category": "snacks", "subcategory": "Indo-Chinese", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Plate (200g)", "grams": 200 }, { "label": "Regular Plate (300g)", "grams": 300 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 190, "protein": 7.5, "carbs": 24, "fat": 7, "fiber": 1.5 }, "image": "Egg_Hakka_Noodles_202604210052.jpeg" },
    { "id": "veg_fried_rice_chinese", "name": "Veg Fried Rice (Chinese Style)", "category": "rice", "subcategory": "Indo-Chinese", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Plate (200g)", "grams": 200 }, { "label": "Regular Plate (300g)", "grams": 300 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 150, "protein": 4, "carbs": 24, "fat": 4.5, "fiber": 1.5 }, "image": "veg_fried_rice.jpeg" },
    { "id": "egg_fried_rice", "name": "Egg Fried Rice", "category": "rice", "subcategory": "Indo-Chinese", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Plate (200g)", "grams": 200 }, { "label": "Regular Plate (300g)", "grams": 300 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 165, "protein": 6, "carbs": 23, "fat": 5.5, "fiber": 1.5 }, "image": "Egg_fried_rice_202604210052.jpeg" },
    { "id": "spring_rolls_veg", "name": "Veg Spring Rolls", "category": "snacks", "subcategory": "Indo-Chinese", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 2 }, "servingOptions": [{ "label": "1 Roll (80g)", "grams": 80 }, { "label": "2 Rolls (160g)", "grams": 160 }, { "label": "3 Rolls (240g)", "grams": 240 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 185, "protein": 4, "carbs": 20, "fat": 9, "fiber": 2 }, "image": "Veg_Spring_Rolls_202604210052.jpeg" },
    { "id": "chilli_paneer_dry", "name": "Chilli Paneer (Dry)", "category": "snacks", "subcategory": "Indo-Chinese", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Plate (150g)", "grams": 150 }, { "label": "Regular Plate (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 235, "protein": 12, "carbs": 10, "fat": 17, "fiber": 1 }, "image": "Chilli_Paneer_served_202604210052.jpeg" },
    { "id": "chilli_chicken_dry", "name": "Chilli Chicken (Dry)", "category": "snacks", "subcategory": "Indo-Chinese", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Plate (150g)", "grams": 150 }, { "label": "Regular Plate (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 205, "protein": 16, "carbs": 8, "fat": 11, "fiber": 0.5 }, "image": "Chilli_Chicken_Dry_202604210052.jpeg" },
    { "id": "schezwan_noodles", "name": "Schezwan Noodles", "category": "snacks", "subcategory": "Indo-Chinese", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Plate (200g)", "grams": 200 }, { "label": "Regular Plate (300g)", "grams": 300 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 185, "protein": 5, "carbs": 26, "fat": 7, "fiber": 2 }, "image": "Spicy_Schezwan_Noodles_202604210052.jpeg" },
    { "id": "paneer_fried_rice", "name": "Paneer Fried Rice", "category": "rice", "subcategory": "Indo-Chinese", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Plate (200g)", "grams": 200 }, { "label": "Regular Plate (300g)", "grams": 300 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 195, "protein": 8, "carbs": 22, "fat": 8, "fiber": 1.5 }, "image": "Paneer_Fried_Rice_202604210052.jpeg" },

    // ==========================================
    // 🍄 MUSHROOM DISHES
    // ==========================================
    { "id": "mushroom_masala", "name": "Mushroom Masala", "category": "curries", "subcategory": "Mushroom", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (150g)", "grams": 150 }, { "label": "Regular Bowl (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 90, "protein": 3.5, "carbs": 7, "fat": 5.5, "fiber": 2 }, "image": "Mushroom_Masala_on_202604210052.jpeg" },
    { "id": "mushroom_pepper_fry", "name": "Mushroom Pepper Fry", "category": "vegetables", "subcategory": "Mushroom", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Plate (150g)", "grams": 150 }, { "label": "Regular Plate (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 80, "protein": 3, "carbs": 5, "fat": 4.5, "fiber": 2 }, "image": "Mushroom_Pepper_Fry_202604210052.jpeg" },
    { "id": "mushroom_biryani", "name": "Mushroom Biryani", "category": "rice", "subcategory": "Mushroom", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Plate (200g)", "grams": 200 }, { "label": "Regular Plate (350g)", "grams": 350 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 155, "protein": 4, "carbs": 25, "fat": 4, "fiber": 2 }, "image": "Mushroom_Masala_on_202604210052.jpeg" },
    { "id": "stuffed_mushroom", "name": "Stuffed Mushroom (Baked)", "category": "snacks", "subcategory": "Mushroom", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 3 }, "servingOptions": [{ "label": "1 Piece (50g)", "grams": 50 }, { "label": "3 Pieces (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 120, "protein": 6, "carbs": 8, "fat": 7, "fiber": 1.5 }, "image": "Stuffed_Mushroom_served_202604210052.jpeg" },
    { "id": "mushroom_raw", "name": "Button Mushrooms (Raw)", "category": "vegetables", "subcategory": "Vegetables", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 100 }, "servingOptions": [{ "label": "Small Bowl (100g)", "grams": 100 }, { "label": "Large Bowl (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 22, "protein": 3.1, "carbs": 3.3, "fat": 0.3, "fiber": 1 }, "image": "Button_mushrooms_on_202604210052.jpeg" },

    // ==========================================
    // 🌱 SEEDS
    // ==========================================
    { "id": "chia_seeds", "name": "Chia Seeds", "category": "generic", "subcategory": "Seeds", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 20 }, "servingOptions": [{ "label": "1 Tbsp (12g)", "grams": 12 }, { "label": "2 Tbsp (24g)", "grams": 24 }, { "label": "50g", "grams": 50 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 486, "protein": 17, "carbs": 42, "fat": 31, "fiber": 34 }, "image": "Chia_seeds_on_202604210052.jpeg" },
    { "id": "flax_seeds", "name": "Flax Seeds (Alsi)", "category": "generic", "subcategory": "Seeds", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 15 }, "servingOptions": [{ "label": "1 Tbsp (10g)", "grams": 10 }, { "label": "2 Tbsp (20g)", "grams": 20 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 534, "protein": 18, "carbs": 29, "fat": 42, "fiber": 27 }, "image": "Flax_seeds_served_202604210052.jpeg" },
    { "id": "sunflower_seeds", "name": "Sunflower Seeds", "category": "generic", "subcategory": "Seeds", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Handful (20g)", "grams": 20 }, { "label": "Regular Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 584, "protein": 21, "carbs": 20, "fat": 51, "fiber": 8.6 }, "image": "Sunflower_seeds_on_202604210052.jpeg" },
    { "id": "pumpkin_seeds", "name": "Pumpkin Seeds (Pepitas)", "category": "generic", "subcategory": "Seeds", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Handful (20g)", "grams": 20 }, { "label": "Regular Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 559, "protein": 30, "carbs": 11, "fat": 49, "fiber": 6 }, "image": "Pumpkin_seeds_served_202604210052.jpeg" },
    { "id": "sesame_seeds", "name": "Sesame Seeds (Til)", "category": "generic", "subcategory": "Seeds", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 15 }, "servingOptions": [{ "label": "1 Tbsp (9g)", "grams": 9 }, { "label": "2 Tbsp (18g)", "grams": 18 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 573, "protein": 17, "carbs": 23, "fat": 50, "fiber": 11.8 }, "image": "Sesame_seeds_on_202604210052.jpeg" },
    { "id": "fennel_seeds", "name": "Fennel Seeds (Saunf)", "category": "generic", "subcategory": "Seeds", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 10 }, "servingOptions": [{ "label": "1 Tsp (3g)", "grams": 3 }, { "label": "1 Tbsp (7g)", "grams": 7 }, { "label": "25g", "grams": 25 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 345, "protein": 15.8, "carbs": 52, "fat": 14.9, "fiber": 39.8 }, "image": "Fennel_seeds_served_202604210052.jpeg" },
    { "id": "hemp_seeds", "name": "Hemp Seeds", "category": "generic", "subcategory": "Seeds", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "2 Tbsp (20g)", "grams": 20 }, { "label": "3 Tbsp (30g)", "grams": 30 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 553, "protein": 31.6, "carbs": 8.7, "fat": 48.8, "fiber": 4 }, "image": "Hemp_seeds_on_202604210052.jpeg" },
    { "id": "watermelon_seeds_roasted", "name": "Watermelon Seeds (Roasted)", "category": "generic", "subcategory": "Seeds", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Handful (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 557, "protein": 28, "carbs": 15.3, "fat": 47.4, "fiber": 0.5 }, "image": "Roasted_watermelon_seeds_202604210052.jpeg" },
    { "id": "poppy_seeds", "name": "Poppy Seeds (Khus Khus)", "category": "generic", "subcategory": "Seeds", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 10 }, "servingOptions": [{ "label": "1 Tsp (3g)", "grams": 3 }, { "label": "1 Tbsp (9g)", "grams": 9 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 525, "protein": 17.9, "carbs": 28.1, "fat": 41.6, "fiber": 19.5 }, "image": "Poppy_seeds_served_202604210052.jpeg" },

    // ==========================================
    // 🌰 NUTS (Expanded)
    // ==========================================
    { "id": "cashews_raw", "name": "Cashews (Raw)", "category": "generic", "subcategory": "Nuts", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "10 Pieces (~15g)", "grams": 15 }, { "label": "20 Pieces (~30g)", "grams": 30 }, { "label": "Custom (Pieces)", "grams": null, "unitWeight": 1.5 }, { "label": "Small Handful (50g)", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 553, "protein": 18.2, "carbs": 30.2, "fat": 43.8, "fiber": 3.3 }, "image": "Cashews_served_on_202604210052.jpeg" },
    { "id": "cashews_roasted", "name": "Cashews (Roasted & Salted)", "category": "generic", "subcategory": "Nuts", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "10 Pieces (~15g)", "grams": 15 }, { "label": "20 Pieces (~30g)", "grams": 30 }, { "label": "Custom (Pieces)", "grams": null, "unitWeight": 1.5 }, { "label": "Small Handful (50g)", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 574, "protein": 15.9, "carbs": 32.7, "fat": 46.4, "fiber": 3 }, "image": "Cashews_served_on_202604210052.jpeg" },
    { "id": "ghee_masala_kaju", "name": "Ghee Masala Cashew", "category": "snacks", "subcategory": "Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "10 Pieces (~15g)", "grams": 15 }, { "label": "20 Pieces (~30g)", "grams": 30 }, { "label": "Custom (Pieces)", "grams": null, "unitWeight": 1.5 }, { "label": "Small Handful (50g)", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 647, "protein": 17.5, "carbs": 26, "fat": 53, "fiber": 3 }, "image": "exp2/ghee_masala_kaju.jpeg" },
    { "id": "pepper_masala_kaju", "name": "Pepper Masala Cashew", "category": "snacks", "subcategory": "Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "10 Pieces (~15g)", "grams": 15 }, { "label": "20 Pieces (~30g)", "grams": 30 }, { "label": "Custom (Pieces)", "grams": null, "unitWeight": 1.5 }, { "label": "Small Handful (50g)", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 635, "protein": 17, "carbs": 25, "fat": 51, "fiber": 3.5 }, "image": "exp2/pepper_masala_kaju.jpeg" },
    { "id": "pistachios_raw", "name": "Pistachios (Raw / Pista)", "category": "generic", "subcategory": "Nuts", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "25 Nuts (~30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 562, "protein": 20.3, "carbs": 27.5, "fat": 45.4, "fiber": 10.3 }, "image": "Pistachios_on_elegant_202604210052.jpeg" },
    { "id": "pistachios_roasted", "name": "Pistachios (Roasted & Salted)", "category": "generic", "subcategory": "Nuts", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "25 Nuts (~30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 572, "protein": 19.6, "carbs": 28, "fat": 46.3, "fiber": 9 }, "image": "Pistachios_on_elegant_202604210052.jpeg" },
    { "id": "walnuts_raw", "name": "Walnuts (Raw / Akhrot)", "category": "generic", "subcategory": "Nuts", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "7 Halves (~28g)", "grams": 28 }, { "label": "50g", "grams": 50 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 654, "protein": 15.2, "carbs": 13.7, "fat": 65.2, "fiber": 6.7 }, "image": "Walnuts_served_on_202604210052.jpeg" },
    { "id": "almonds_roasted", "name": "Almonds (Roasted)", "category": "generic", "subcategory": "Nuts", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "20 Almonds (~28g)", "grams": 28 }, { "label": "50g", "grams": 50 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 598, "protein": 21.2, "carbs": 19.5, "fat": 52.5, "fiber": 12.5 }, "image": "Almonds_served_on_202604210052.jpeg" },
    { "id": "brazil_nuts", "name": "Brazil Nuts", "category": "generic", "subcategory": "Nuts", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "3 Nuts (~30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 656, "protein": 14.3, "carbs": 12.3, "fat": 66.4, "fiber": 7.5 }, "image": "Brazil_nuts_on_202604210052.jpeg" },
    { "id": "hazelnuts", "name": "Hazelnuts", "category": "generic", "subcategory": "Nuts", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "20 Hazelnuts (~30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 628, "protein": 15, "carbs": 16.7, "fat": 60.8, "fiber": 9.7 }, "image": "Hazelnuts_on_elegant_202604210052.jpeg" },
    { "id": "pecans", "name": "Pecans", "category": "generic", "subcategory": "Nuts", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Handful (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 691, "protein": 9.2, "carbs": 13.9, "fat": 72, "fiber": 9.6 }, "image": "Pecans_on_elegant_202604210052.jpeg" },
    { "id": "macadamia_nuts", "name": "Macadamia Nuts", "category": "generic", "subcategory": "Nuts", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Handful (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 718, "protein": 7.9, "carbs": 13.8, "fat": 75.8, "fiber": 8.6 }, "image": "Macadamia_nuts_on_202604210052.jpeg" },

    // ==========================================
    // 🫐 DATES & RAISINS
    // ==========================================
    { "id": "dates_medjool", "name": "Medjool Dates", "category": "fruits", "subcategory": "Dry Fruits", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 2 }, "servingOptions": [{ "label": "1 Date (~24g)", "grams": 24 }, { "label": "2 Dates (~48g)", "grams": 48 }, { "label": "4 Dates (~96g)", "grams": 96 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 277, "protein": 1.8, "carbs": 75, "fat": 0.2, "fiber": 6.7 }, "image": "Medjool_Dates_served_202604210052.jpeg" },
    { "id": "dates_safawi", "name": "Safawi Dates", "category": "fruits", "subcategory": "Dry Fruits", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 3 }, "servingOptions": [{ "label": "1 Date (~10g)", "grams": 10 }, { "label": "3 Dates (~30g)", "grams": 30 }, { "label": "5 Dates (~50g)", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 300, "protein": 2.5, "carbs": 70, "fat": 0.3, "fiber": 5 }, "image": "Safawi_Dates_served_202604210052.jpeg" },
    { "id": "dates_ajwa", "name": "Ajwa Dates", "category": "fruits", "subcategory": "Dry Fruits", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 3 }, "servingOptions": [{ "label": "1 Date (~7g)", "grams": 7 }, { "label": "3 Dates (~21g)", "grams": 21 }, { "label": "5 Dates (~35g)", "grams": 35 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 278, "protein": 1.8, "carbs": 68, "fat": 0.4, "fiber": 7 }, "image": "Ajwa_Dates_served_202604210052.jpeg" },
    { "id": "dates_kimia", "name": "Kimia / Mazafati Dates", "category": "fruits", "subcategory": "Dry Fruits", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 3 }, "servingOptions": [{ "label": "3 Dates (~30g)", "grams": 30 }, { "label": "5 Dates (~50g)", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 250, "protein": 2.2, "carbs": 65, "fat": 0.1, "fiber": 8 }, "image": "Kimia_Mazafati_Dates_202604210052.jpeg" },
    { "id": "dates_deglet", "name": "Deglet Noor Dates (Common)", "category": "fruits", "subcategory": "Dry Fruits", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 3 }, "servingOptions": [{ "label": "1 Date (~8g)", "grams": 8 }, { "label": "3 Dates (~24g)", "grams": 24 }, { "label": "5 Dates (~40g)", "grams": 40 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 282, "protein": 2.5, "carbs": 75, "fat": 0.4, "fiber": 8 }, "image": "Deglet_Noor_Dates_202604210052.jpeg" },
    { "id": "dates_lion_qyno", "name": "Lion Qyno Deseeded Dates", "category": "fruits", "subcategory": "Dry Fruits", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 3 }, "servingOptions": [{ "label": "1 Date (~8g)", "grams": 8 }, { "label": "3 Dates (~24g)", "grams": 24 }, { "label": "5 Dates (~40g)", "grams": 40 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 345, "protein": 1.5, "carbs": 83, "fat": 0.5, "fiber": 4.8 }, "image": "dates_lion_qyno.jpeg" },
    { "id": "raisins_golden", "name": "Golden Raisins (Sultanas)", "category": "fruits", "subcategory": "Dry Fruits", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 40 }, "servingOptions": [{ "label": "Small Bowl (40g)", "grams": 40 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 314, "protein": 3.1, "carbs": 82, "fat": 0.5, "fiber": 3.7 }, "image": "Golden_Raisins_on_202604210052.jpeg" },
    { "id": "raisins_black", "name": "Black Raisins (Kali Kishmish)", "category": "fruits", "subcategory": "Dry Fruits", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 40 }, "servingOptions": [{ "label": "Small Bowl (40g)", "grams": 40 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 299, "protein": 3, "carbs": 79, "fat": 0.5, "fiber": 4 }, "image": "Black_Raisins_on_202604210052.jpeg" },
    { "id": "raisins_green", "name": "Green Raisins (Munakka)", "category": "fruits", "subcategory": "Dry Fruits", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 40 }, "servingOptions": [{ "label": "Small Bowl (40g)", "grams": 40 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 290, "protein": 2.8, "carbs": 77, "fat": 0.4, "fiber": 4.5 }, "image": "Green_Raisins_on_202604210052.jpeg" },

    // ==========================================
    // 🍵 TEA & COFFEE VARIETIES
    // ==========================================
    { "id": "masala_chai", "name": "Masala Chai", "category": "beverages", "subcategory": "Tea", "servingType": "volume", "defaultServing": { "unit": "cup", "amount": 1 }, "servingOptions": [{ "label": "Small Cup (100ml)", "grams": 100 }, { "label": "Regular Cup (150ml)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 45, "protein": 1.5, "carbs": 6, "fat": 1.5, "fiber": 0 }, "image": "Masala_Chai_in_202604210052.jpeg" },
    { "id": "green_tea", "name": "Green Tea (Plain)", "category": "beverages", "subcategory": "Tea", "servingType": "volume", "defaultServing": { "unit": "cup", "amount": 1 }, "servingOptions": [{ "label": "Regular Cup (200ml)", "grams": 200 }, { "label": "Large Cup (300ml)", "grams": 300 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 1, "protein": 0, "carbs": 0.2, "fat": 0, "fiber": 0 }, "image": "Green_tea_in_202604210052.jpeg" },
    { "id": "ginger_lemon_tea", "name": "Ginger Lemon Tea", "category": "beverages", "subcategory": "Tea", "servingType": "volume", "defaultServing": { "unit": "cup", "amount": 1 }, "servingOptions": [{ "label": "Regular Cup (200ml)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 3, "protein": 0, "carbs": 0.5, "fat": 0, "fiber": 0 }, "image": "Ginger_Lemon_Tea_202604210053.jpeg" },
    { "id": "ice_tea_lemon", "name": "Lemon Ice Tea (Sweetened)", "category": "beverages", "subcategory": "Tea", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Glass (300ml)", "grams": 300 }, { "label": "Large (450ml)", "grams": 450 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 28, "protein": 0, "carbs": 7, "fat": 0, "fiber": 0 }, "image": "Lemon_Ice_Tea_202604210052.jpeg" },
    { "id": "cappuccino", "name": "Cappuccino", "category": "beverages", "subcategory": "Coffee", "servingType": "volume", "defaultServing": { "unit": "cup", "amount": 1 }, "servingOptions": [{ "label": "Small (150ml)", "grams": 150 }, { "label": "Regular (250ml)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 38, "protein": 2, "carbs": 4, "fat": 1.5, "fiber": 0 }, "image": "Cappuccino_in_white_202604210052.jpeg" },
    { "id": "latte", "name": "Latte (Cafe Latte)", "category": "beverages", "subcategory": "Coffee", "servingType": "volume", "defaultServing": { "unit": "cup", "amount": 1 }, "servingOptions": [{ "label": "Regular (250ml)", "grams": 250 }, { "label": "Large (350ml)", "grams": 350 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 42, "protein": 2.5, "carbs": 4.5, "fat": 1.5, "fiber": 0 }, "image": "Cafe_latte_clear_202604210052.jpeg" },
    { "id": "cold_coffee", "name": "Cold Coffee (with Milk)", "category": "beverages", "subcategory": "Coffee", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (300ml)", "grams": 300 }, { "label": "Large Glass (450ml)", "grams": 450 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 58, "protein": 2.5, "carbs": 7, "fat": 2, "fiber": 0 }, "image": "Cold_coffee_with_202604211125.jpeg" },
    { "id": "cold_coffee_icecream", "name": "Cold Coffee with Ice Cream", "category": "beverages", "subcategory": "Coffee", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (350ml)", "grams": 350 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 100, "protein": 3, "carbs": 13, "fat": 4, "fiber": 0 }, "image": "Cold_coffee_with_202604210210.jpeg" },
    { "id": "espresso", "name": "Espresso Shot", "category": "beverages", "subcategory": "Coffee", "servingType": "volume", "defaultServing": { "unit": "shot", "amount": 1 }, "servingOptions": [{ "label": "Single Shot (30ml)", "grams": 30 }, { "label": "Double Shot (60ml)", "grams": 60 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 10, "protein": 0.5, "carbs": 1.5, "fat": 0.2, "fiber": 0 }, "image": "Espresso_shot_on_202604210052.jpeg" },
    { "id": "mocha_coffee", "name": "Mocha Coffee", "category": "beverages", "subcategory": "Coffee", "servingType": "volume", "defaultServing": { "unit": "cup", "amount": 1 }, "servingOptions": [{ "label": "Regular (300ml)", "grams": 300 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 70, "protein": 2.5, "carbs": 9, "fat": 2.5, "fiber": 0.5 }, "image": "Mocha_coffee_on_202604210052.jpeg" },
    { "id": "turmeric_milk", "name": "Turmeric Milk (Haldi Doodh)", "category": "beverages", "subcategory": "Beverages", "servingType": "volume", "defaultServing": { "unit": "cup", "amount": 1 }, "servingOptions": [{ "label": "Regular Cup (200ml)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 65, "protein": 2.5, "carbs": 6, "fat": 3.5, "fiber": 0 }, "image": "Turmeric_Milk_served_202604210052.jpeg" },

    // ==========================================
    // 🥤 MILKSHAKES & SWEET DRINKS
    // ==========================================
    { "id": "milkshake_vanilla", "name": "Vanilla Milkshake", "category": "beverages", "subcategory": "Milkshakes", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (350ml)", "grams": 350 }, { "label": "Large Glass (500ml)", "grams": 500 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 95, "protein": 3, "carbs": 14, "fat": 3.5, "fiber": 0 }, "image": "Vanilla_Milkshake_served_202604210052.jpeg" },
    { "id": "milkshake_chocolate", "name": "Chocolate Milkshake", "category": "beverages", "subcategory": "Milkshakes", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (350ml)", "grams": 350 }, { "label": "Large Glass (500ml)", "grams": 500 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 108, "protein": 3.5, "carbs": 16, "fat": 4, "fiber": 0.5 }, "image": "Chocolate_Milkshake_served_202604210052.jpeg" },
    { "id": "milkshake_strawberry", "name": "Strawberry Milkshake", "category": "beverages", "subcategory": "Milkshakes", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (350ml)", "grams": 350 }, { "label": "Large Glass (500ml)", "grams": 500 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 90, "protein": 2.8, "carbs": 14, "fat": 3, "fiber": 0 }, "image": "Strawberry_Milkshake_elegant_202604210052.jpeg" },
    { "id": "milkshake_mango", "name": "Mango Milkshake (Aamras)", "category": "beverages", "subcategory": "Milkshakes", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (300ml)", "grams": 300 }, { "label": "Large Glass (500ml)", "grams": 500 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 100, "protein": 2, "carbs": 18, "fat": 2.5, "fiber": 0.5 }, "image": "Mango_Milkshake_served_202604210052.jpeg" },
    { "id": "milkshake_banana", "name": "Banana Milkshake", "category": "beverages", "subcategory": "Milkshakes", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (350ml)", "grams": 350 }, { "label": "Large Glass (500ml)", "grams": 500 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 105, "protein": 2.5, "carbs": 18, "fat": 3, "fiber": 0.5 }, "image": "Banana_Milkshake_served_202604210052.jpeg" },
    { "id": "oreo_milkshake", "name": "Oreo Cookie Milkshake", "category": "beverages", "subcategory": "Milkshakes", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (400ml)", "grams": 400 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 140, "protein": 4, "carbs": 20, "fat": 5.5, "fiber": 0.5 }, "image": "Oreo_Cookie_Milkshake_202604210052.jpeg" },
    { "id": "mango_lassi", "name": "Mango Lassi", "category": "beverages", "subcategory": "Milkshakes", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (300ml)", "grams": 300 }, { "label": "Large Glass (500ml)", "grams": 500 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 85, "protein": 3, "carbs": 13, "fat": 2.5, "fiber": 0.3 }, "image": "Mango_Lassi_in_202604210052.jpeg" },
    { "id": "falooda", "name": "Rose Falooda", "category": "beverages", "subcategory": "Milkshakes", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (350ml)", "grams": 350 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 120, "protein": 3, "carbs": 20, "fat": 3, "fiber": 0.5 }, "image": "Rose_Falooda_served_202604210052.jpeg" },
    { "id": "sugarcane_juice", "name": "Sugarcane Juice (Ganna Ras)", "category": "beverages", "subcategory": "Beverages", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (250ml)", "grams": 250 }, { "label": "Large Glass (400ml)", "grams": 400 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 42, "protein": 0.2, "carbs": 10.5, "fat": 0.1, "fiber": 0 }, "image": "Sugarcane_juice_in_202604210052.jpeg" },
    { "id": "badam_milk", "name": "Badam Milk (Almond Milk Drink)", "category": "beverages", "subcategory": "Beverages", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (250ml)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 90, "protein": 3, "carbs": 12, "fat": 3.5, "fiber": 0 }, "image": "Badam_Milk_served_202604210052.jpeg" },

    // ==========================================
    // 🍦 ICE CREAM
    // ==========================================
    { "id": "ice_cream_strawberry", "name": "Strawberry Ice Cream", "category": "snacks", "subcategory": "Ice Cream", "servingType": "volume", "defaultServing": { "unit": "scoop", "amount": 2 }, "servingOptions": [{ "label": "1 Scoop (~60g)", "grams": 60 }, { "label": "2 Scoops (~120g)", "grams": 120 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 197, "protein": 3.2, "carbs": 24, "fat": 10, "fiber": 0 }, "image": "Strawberry_ice_cream_202604210052.jpeg" },
    { "id": "ice_cream_mango", "name": "Mango Ice Cream", "category": "snacks", "subcategory": "Ice Cream", "servingType": "volume", "defaultServing": { "unit": "scoop", "amount": 2 }, "servingOptions": [{ "label": "1 Scoop (~60g)", "grams": 60 }, { "label": "2 Scoops (~120g)", "grams": 120 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 195, "protein": 2.8, "carbs": 26, "fat": 9.5, "fiber": 0.2 }, "image": "Mango_ice_cream_202604210052.jpeg" },
    { "id": "ice_cream_butterscotch", "name": "Butterscotch Ice Cream", "category": "snacks", "subcategory": "Ice Cream", "servingType": "volume", "defaultServing": { "unit": "scoop", "amount": 2 }, "servingOptions": [{ "label": "1 Scoop (~60g)", "grams": 60 }, { "label": "2 Scoops (~120g)", "grams": 120 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 220, "protein": 3, "carbs": 27, "fat": 12, "fiber": 0 }, "image": "Butterscotch_Ice_Cream_202604210052.jpeg" },
    { "id": "ice_cream_kulfi", "name": "Kulfi (Traditional Indian Ice Cream)", "category": "snacks", "subcategory": "Ice Cream", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Stick (~80g)", "grams": 80 }, { "label": "Cup (120g)", "grams": 120 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 225, "protein": 5.5, "carbs": 27, "fat": 11, "fiber": 0 }, "image": "Kulfi_served_on_202604210052.jpeg" },
    { "id": "ice_cream_pista", "name": "Pistachio / Pista Ice Cream", "category": "snacks", "subcategory": "Ice Cream", "servingType": "volume", "defaultServing": { "unit": "scoop", "amount": 2 }, "servingOptions": [{ "label": "1 Scoop (~60g)", "grams": 60 }, { "label": "2 Scoops (~120g)", "grams": 120 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 218, "protein": 4.5, "carbs": 25, "fat": 11, "fiber": 0.5 }, "image": "Pistachio_ice_cream_202604210052.jpeg" },
    { "id": "sundae_chocolate", "name": "Chocolate Sundae", "category": "snacks", "subcategory": "Ice Cream", "servingType": "volume", "defaultServing": { "unit": "cup", "amount": 1 }, "servingOptions": [{ "label": "Regular Cup (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 245, "protein": 4, "carbs": 35, "fat": 11, "fiber": 0.5 }, "image": "Chocolate_Sundae_on_202604210052.jpeg" },

    // ==========================================
    // 🍟 McDONALD'S INDIA (Expanded)
    // ========================================== "servingOptions": [{ "label": "1 Burger (193g)", "grams": 193 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 201, "protein": 5.3, "carbs": 26.5, "fat": 8, "fiber": 2 }, "image": null }, "servingOptions": [{ "label": "1 Burger (215g)", "grams": 215 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 295, "protein": 9.3, "carbs": 25, "fat": 17.2, "fiber": 2 }, "image": null },
    { "id": "mcdonalds_mcpaneer", "name": "McPaneer Royale Burger (McDonalds)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "burger", "amount": 1 }, "servingOptions": [{ "label": "1 Burger (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 275, "protein": 10, "carbs": 25, "fat": 14.5, "fiber": 2 }, "image": "McPaneer_Royale_Burger_202604210052.jpeg" },
    { "id": "mcdonalds_fries_medium", "name": "Medium Fries (McDonalds)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "serving", "amount": 1 }, "servingOptions": [{ "label": "Small (95g)", "grams": 95 }, { "label": "Medium (117g)", "grams": 117 }, { "label": "Large (154g)", "grams": 154 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 323, "protein": 3.4, "carbs": 42, "fat": 15.5, "fiber": 3.8 }, "image": "Medium_Fries_on_202604210052.jpeg" },
    { "id": "mcdonalds_mcflurry", "name": "McFlurry Oreo (McDonalds)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "cup", "amount": 1 }, "servingOptions": [{ "label": "Regular Cup (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 185, "protein": 4.5, "carbs": 26, "fat": 7, "fiber": 0.3 }, "image": "McFlurry_Oreo_served_202604210052.jpeg" },
    { "id": "mcdonalds_softserve_vanilla", "name": "Soft Serve Vanilla Cone (McDonalds)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "cone", "amount": 1 }, "servingOptions": [{ "label": "1 Cone (90g)", "grams": 90 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 178, "protein": 4, "carbs": 25, "fat": 7, "fiber": 0 }, "image": "Soft_Serve_Vanilla_202604210052.jpeg" },
    { "id": "mcdonalds_nuggets_6pc", "name": "Chicken McNuggets 6pc (McDonalds)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 6 }, "servingOptions": [{ "label": "6 Pieces (~105g)", "grams": 105 }, { "label": "9 Pieces (~158g)", "grams": 158 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 285, "protein": 15.5, "carbs": 18, "fat": 16, "fiber": 1 }, "image": "Chicken_McNuggets_6pc_202604210052.jpeg" },
    { "id": "mcdonalds_hash_brown", "name": "Hash Browns (McDonalds)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (57g)", "grams": 57 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 303, "protein": 2.5, "carbs": 31, "fat": 19, "fiber": 2 }, "image": "Hash_Browns_served_202604210052.jpeg" },

    // ==========================================
    // 🍔 BURGER KING INDIA
    // ========================================== "servingOptions": [{ "label": "1 Burger (266g)", "grams": 266 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 251, "protein": 9.8, "carbs": 22.2, "fat": 13.6, "fiber": 1.5 }, "image": null },
    { "id": "bk_paneer_king", "name": "Paneer King Burger (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "burger", "amount": 1 }, "servingOptions": [{ "label": "1 Burger (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 280, "protein": 10, "carbs": 24, "fat": 15, "fiber": 2 }, "image": "Paneer_King_Burger_202604210052.jpeg" },
    { "id": "bk_crispy_chicken", "name": "Crispy Chicken Burger (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "burger", "amount": 1 }, "servingOptions": [{ "label": "Single (170g)", "grams": 170 }, { "label": "Double (280g)", "grams": 280 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 211, "protein": 6.8, "carbs": 26, "fat": 8.9, "fiber": 1.5 }, "image": "Crispy_Chicken_Burger_202604210052.jpeg" },
    { "id": "bk_onion_rings", "name": "Onion Rings (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "serving", "amount": 1 }, "servingOptions": [{ "label": "Small (80g)", "grams": 80 }, { "label": "Regular (120g)", "grams": 120 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 316, "protein": 4, "carbs": 40, "fat": 16, "fiber": 2.5 }, "image": "Onion_rings_served_202604210052.jpeg" },

    // ==========================================
    // 🍕 PIZZA HUT INDIA
    // ==========================================
    { "id": "pizzahut_margherita", "name": "Margherita Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~95g)", "grams": 95 }, { "label": "1 Medium Slice (~70g)", "grams": 70 }, { "label": "Whole Personal (~375g)", "grams": 375 }, { "label": "Whole Medium (~560g)", "grams": 560 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 240, "protein": 9.5, "carbs": 33, "fat": 8, "fiber": 2 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "margherita_pizza.png" },
    { "id": "pizzahut_veggie_supreme", "name": "Veggie Supreme Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~100g)", "grams": 100 }, { "label": "1 Medium Slice (~75g)", "grams": 75 }, { "label": "Whole Personal (~400g)", "grams": 400 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 252, "protein": 10, "carbs": 34, "fat": 9, "fiber": 2.5 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "Veggie_Supreme_Pizza_202604210052.jpeg" },
    { "id": "pizzahut_paneer_makhani", "name": "Paneer Makhani Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~105g)", "grams": 105 }, { "label": "1 Medium Slice (~80g)", "grams": 80 }, { "label": "Whole Personal (~420g)", "grams": 420 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 268, "protein": 11, "carbs": 32, "fat": 11, "fiber": 2 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "paneer_makhani_pizza.png" },
    { "id": "pizzahut_chicken_tikka", "name": "Chicken Tikka Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~110g)", "grams": 110 }, { "label": "1 Medium Slice (~85g)", "grams": 85 }, { "label": "Whole Personal (~440g)", "grams": 440 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 275, "protein": 14, "carbs": 31, "fat": 11, "fiber": 2 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "Chicken_Tikka_Pizza_202604210052.jpeg" },
    { "id": "pizzahut_pepperoni", "name": "Pepperoni Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~110g)", "grams": 110 }, { "label": "1 Medium Slice (~85g)", "grams": 85 }, { "label": "Whole Personal (~440g)", "grams": 440 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 298, "protein": 13, "carbs": 30, "fat": 14, "fiber": 1.5 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "Pepperoni_pizza_served_202604210052.jpeg" },
    { "id": "pizzahut_bbq_chicken", "name": "BBQ Chicken Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~115g)", "grams": 115 }, { "label": "1 Medium Slice (~90g)", "grams": 90 }, { "label": "Whole Personal (~460g)", "grams": 460 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 265, "protein": 13, "carbs": 32, "fat": 10, "fiber": 2 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "BBQ_Chicken_Pizza_202604210052.jpeg" },
    { "id": "pizzahut_garlic_bread", "name": "Garlic Bread Sticks (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 4 }, "servingOptions": [{ "label": "1 Stick (~30g)", "grams": 30 }, { "label": "4 Sticks (~120g)", "grams": 120 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 290, "protein": 8, "carbs": 38, "fat": 12, "fiber": 2 }, "image": "Garlic_Bread_Sticks_202604210052.jpeg" },

    // ==========================================
    // 🍕 DOMINO'S NON-VEG PIZZAS
    // ========================================== "servingOptions": [{ "label": "1 Regular Slice (~65g)", "grams": 65 }, { "label": "1 Medium Slice (~90g)", "grams": 90 }, { "label": "Whole Regular (~390g)", "grams": 390 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 265, "protein": 13, "carbs": 31, "fat": 11, "fiber": 2 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": null },
    { "id": "dominos_chicken_tikka_pizza", "name": "Chicken Tikka Pizza (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Regular Slice (~65g)", "grams": 65 }, { "label": "1 Medium Slice (~90g)", "grams": 90 }, { "label": "Whole Regular (~390g)", "grams": 390 }, { "label": "Whole Medium (~540g)", "grams": 540 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 272, "protein": 13, "carbs": 31, "fat": 11, "fiber": 2 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "Chicken_Tikka_Pizza_202604210052.jpeg" },

    // ==========================================
    // 🥨 MURUKKU & SOUTH INDIAN SNACK VARIETIES
    // ==========================================
    { "id": "murukku_plain", "name": "Murukku (Plain / Rice Flour)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "Medium Serving (50g)", "grams": 50 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 520, "protein": 7, "carbs": 62, "fat": 26, "fiber": 2.5 }, "image": "murukku.jpeg" },
    { "id": "murukku_ribbon", "name": "Ribbon Pakoda (Ribbon Murukku)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 510, "protein": 6.5, "carbs": 60, "fat": 27, "fiber": 2 }, "image": "Ribbon_Pakoda_on_202604210052.jpeg" },
    { "id": "seedai", "name": "Seedai (Steamed Rice Balls)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 480, "protein": 7, "carbs": 58, "fat": 24, "fiber": 2 }, "image": "Seedai_served_on_202604210052.jpeg" },
    { "id": "thattai", "name": "Thattai (Crispy Rice Crackers)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 490, "protein": 8, "carbs": 63, "fat": 22, "fiber": 2.5 }, "image": "Thattai_South_Indian_202604210139.jpeg" },
    { "id": "mixture_madras", "name": "Madras Mixture", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 530, "protein": 8, "carbs": 55, "fat": 30, "fiber": 3 }, "image": "Madras_Mixture_served_202604210052.jpeg" },
    { "id": "omapodi", "name": "Omapodi (Sev)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 515, "protein": 8.5, "carbs": 58, "fat": 28, "fiber": 2.5 }, "image": "Omapodi_served_on_202604210052.jpeg" },
    { "id": "adhirasam", "name": "Adhirasam (Jaggery Rice Sweet)", "category": "snacks", "subcategory": "South Indian Sweets", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (~60g)", "grams": 60 }, { "label": "2 Pieces (~120g)", "grams": 120 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 395, "protein": 3, "carbs": 67, "fat": 12, "fiber": 1 }, "image": "Adhirasam_served_on_202604210052.jpeg" },
    { "id": "mysore_pak", "name": "Mysore Pak", "category": "snacks", "subcategory": "South Indian Sweets", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (~50g)", "grams": 50 }, { "label": "2 Pieces (~100g)", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 520, "protein": 7, "carbs": 52, "fat": 32, "fiber": 1 }, "image": "Mysore_Pak_sweet_202604210052.jpeg" },
    { "id": "badusha", "name": "Badusha (Indian Donut Sweet)", "category": "snacks", "subcategory": "South Indian Sweets", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 2 }, "servingOptions": [{ "label": "1 Piece (~40g)", "grams": 40 }, { "label": "2 Pieces (~80g)", "grams": 80 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 435, "protein": 4, "carbs": 57, "fat": 21, "fiber": 0.5 }, "image": "Badusha_served_on_202604210052.jpeg" },
    { "id": "kozhukattai", "name": "Kozhukattai / Modak (Steamed Dumpling)", "category": "snacks", "subcategory": "South Indian Sweets", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 2 }, "servingOptions": [{ "label": "1 Piece (~50g)", "grams": 50 }, { "label": "2 Pieces (~100g)", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 200, "protein": 3, "carbs": 38, "fat": 4, "fiber": 1.5 }, "image": "Doodh_Peda_gourmet_202604210108.jpeg" },
    { "id": "halwa_carrot", "name": "Carrot Halwa (Gajar Halwa)", "category": "snacks", "subcategory": "Sweets", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (80g)", "grams": 80 }, { "label": "Regular Bowl (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 210, "protein": 4, "carbs": 30, "fat": 9, "fiber": 2 }, "image": "Carrot_Halwa_served_202604210052.jpeg" },
    { "id": "halwa_rava", "name": "Rava Halwa (Sooji Halwa)", "category": "snacks", "subcategory": "Sweets", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (80g)", "grams": 80 }, { "label": "Regular Bowl (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 330, "protein": 4, "carbs": 48, "fat": 13, "fiber": 0.5 }, "image": "Rava_Halwa_served_202604210052.jpeg" },
    { "id": "laddu_besan", "name": "Besan Laddu", "category": "snacks", "subcategory": "Sweets", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (~40g)", "grams": 40 }, { "label": "2 Pieces (~80g)", "grams": 80 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 445, "protein": 9, "carbs": 52, "fat": 22, "fiber": 2 }, "image": "Besan_Laddu_on_202604210052.jpeg" },
    { "id": "laddu_motichoor", "name": "Motichoor Laddu", "category": "snacks", "subcategory": "Sweets", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (~35g)", "grams": 35 }, { "label": "2 Pieces (~70g)", "grams": 70 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 420, "protein": 6, "carbs": 60, "fat": 17, "fiber": 1 }, "image": "Motichoor_Laddu_on_202604210052.jpeg" },

    // ==========================================
    // 🌿 MORE FRUITS & VEGETABLES
    // ==========================================
    { "id": "orange", "name": "Orange", "category": "fruits", "subcategory": "Fresh Fruits", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Small (100g)", "grams": 100 }, { "label": "1 Medium (150g)", "grams": 150 }, { "label": "1 Large (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 47, "protein": 0.9, "carbs": 12, "fat": 0.1, "fiber": 2.4 }, "image": "Fresh_Orange_Juice_202604210108.jpeg" },
    { "id": "grapes_green", "name": "Green Grapes", "category": "fruits", "subcategory": "Fresh Fruits", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 100 }, "servingOptions": [{ "label": "Small Bunch (100g)", "grams": 100 }, { "label": "Large Bunch (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 69, "protein": 0.7, "carbs": 18, "fat": 0.2, "fiber": 0.9 }, "image": "Green_grapes_on_202604210052.jpeg" },
    { "id": "pineapple", "name": "Pineapple", "category": "fruits", "subcategory": "Fresh Fruits", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 150 }, "servingOptions": [{ "label": "1 Slice (80g)", "grams": 80 }, { "label": "Small Bowl (150g)", "grams": 150 }, { "label": "Large Bowl (300g)", "grams": 300 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 50, "protein": 0.5, "carbs": 13, "fat": 0.1, "fiber": 1.4 }, "image": "Pineapple_served_on_202604210052.jpeg" },
    { "id": "pomegranate", "name": "Pomegranate (Anaar)", "category": "fruits", "subcategory": "Fresh Fruits", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 150 }, "servingOptions": [{ "label": "Small Bowl (100g)", "grams": 100 }, { "label": "Regular Bowl (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 83, "protein": 1.7, "carbs": 18.7, "fat": 1.2, "fiber": 4 }, "image": "Cut-open_pomegranate_on_202604210052.jpeg" },
    { "id": "kiwi", "name": "Kiwi Fruit", "category": "fruits", "subcategory": "Fresh Fruits", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 2 }, "servingOptions": [{ "label": "1 Kiwi (75g)", "grams": 75 }, { "label": "2 Kiwis (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 61, "protein": 1.1, "carbs": 15, "fat": 0.5, "fiber": 3 }, "image": "Kiwi_fruit_on_202604210052.jpeg" },
    { "id": "pear", "name": "Pear (Nashpati)", "category": "fruits", "subcategory": "Fresh Fruits", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Small (120g)", "grams": 120 }, { "label": "1 Medium (180g)", "grams": 180 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 57, "protein": 0.4, "carbs": 15, "fat": 0.1, "fiber": 3.1 }, "image": "Pear_served_on_202604210053.jpeg" },
    { "id": "chikoo", "name": "Chikoo / Sapodilla", "category": "fruits", "subcategory": "Fresh Fruits", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 2 }, "servingOptions": [{ "label": "1 Piece (~80g)", "grams": 80 }, { "label": "2 Pieces (~160g)", "grams": 160 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 83, "protein": 0.4, "carbs": 20, "fat": 1.1, "fiber": 5.3 }, "image": "Chikoo_served_on_202604210052.jpeg" },
    { "id": "lychee", "name": "Lychee (Litchi)", "category": "fruits", "subcategory": "Fresh Fruits", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 100 }, "servingOptions": [{ "label": "5-6 Pieces (100g)", "grams": 100 }, { "label": "10-12 Pieces (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 66, "protein": 0.8, "carbs": 16.5, "fat": 0.4, "fiber": 1.3 }, "image": "Lychee_served_on_202604210052.jpeg" },
    { "id": "strawberry", "name": "Strawberries", "category": "fruits", "subcategory": "Fresh Fruits", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 100 }, "servingOptions": [{ "label": "Small Bowl (100g)", "grams": 100 }, { "label": "Large Bowl (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 33, "protein": 0.7, "carbs": 8, "fat": 0.3, "fiber": 2 }, "image": "Strawberries_on_elegant_202604210052.jpeg" },
    { "id": "jackfruit", "name": "Jackfruit (Kathal)", "category": "fruits", "subcategory": "Fresh Fruits", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 150 }, "servingOptions": [{ "label": "Small Bowl (100g)", "grams": 100 }, { "label": "Regular Bowl (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 95, "protein": 1.7, "carbs": 23.2, "fat": 0.6, "fiber": 1.5 }, "image": "Ripe_jackfruit_pieces_202604210210.jpeg" },
    { "id": "broccoli", "name": "Broccoli (Raw)", "category": "vegetables", "subcategory": "Vegetables", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 100 }, "servingOptions": [{ "label": "1 Cup (90g)", "grams": 90 }, { "label": "200g", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 34, "protein": 2.8, "carbs": 6.6, "fat": 0.4, "fiber": 2.6 }, "image": "Broccoli_served_on_202604210052.jpeg" },
    { "id": "cucumber", "name": "Cucumber (Kheera)", "category": "vegetables", "subcategory": "Vegetables", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 150 }, "servingOptions": [{ "label": "Half (100g)", "grams": 100 }, { "label": "Whole (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 16, "protein": 0.7, "carbs": 3.6, "fat": 0.1, "fiber": 0.5 }, "image": "Cucumber_served_on_202604210052.jpeg" },
    { "id": "capsicum_red", "name": "Red Capsicum (Bell Pepper)", "category": "vegetables", "subcategory": "Vegetables", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 100 }, "servingOptions": [{ "label": "Half (80g)", "grams": 80 }, { "label": "Whole (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 31, "protein": 1, "carbs": 6, "fat": 0.3, "fiber": 2.1 }, "image": "Red_Capsicum_served_202604210052.jpeg" },
    { "id": "green_peas", "name": "Green Peas (Fresh / Matar)", "category": "vegetables", "subcategory": "Vegetables", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 100 }, "servingOptions": [{ "label": "Small Bowl (100g)", "grams": 100 }, { "label": "Large Bowl (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 81, "protein": 5.4, "carbs": 14.5, "fat": 0.4, "fiber": 5.1 }, "image": "Green_peas_served_202604210052.jpeg" },
    { "id": "corn_kernels", "name": "Sweet Corn Kernels", "category": "vegetables", "subcategory": "Vegetables", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 100 }, "servingOptions": [{ "label": "Small Bowl (100g)", "grams": 100 }, { "label": "Large Bowl (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 96, "protein": 3.4, "carbs": 21, "fat": 1.3, "fiber": 2.4 }, "image": "Sweet_Corn_Kernels_202604210052.jpeg" },
    { "id": "bitter_gourd", "name": "Bitter Gourd (Karela)", "category": "vegetables", "subcategory": "Vegetables", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 100 }, "servingOptions": [{ "label": "1 Medium (80g)", "grams": 80 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 17, "protein": 1, "carbs": 3.7, "fat": 0.2, "fiber": 2.8 }, "image": "Bitter_Gourd_served_202604210052.jpeg" },
    { "id": "raw_banana_veg", "name": "Raw Banana / Green Banana", "category": "vegetables", "subcategory": "Vegetables", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 100 }, "servingOptions": [{ "label": "1 Small (100g)", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 89, "protein": 1.1, "carbs": 23, "fat": 0.3, "fiber": 2.6 }, "image": "Raw_banana_served_202604210052.jpeg" },

    // ==========================================
    // 🍘 SOUTH INDIAN SNACKS — KERALA
    // ==========================================
    { "id": "pazham_pori", "name": "Pazham Pori (Banana Fritters)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 2 }, "servingOptions": [{ "label": "1 Piece (60g)", "grams": 60 }, { "label": "2 Pieces (120g)", "grams": 120 }, { "label": "3 Pieces (180g)", "grams": 180 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 290, "protein": 3, "carbs": 42, "fat": 12, "fiber": 2 }, "image": "Golden_Pazham_Pori_202604211933.jpeg" },
    { "id": "banana_chips_kerala", "name": "Banana Chips (Nendran / Kerala)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "Medium (50g)", "grams": 50 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 519, "protein": 2, "carbs": 58, "fat": 31, "fiber": 4 }, "image": "Crispy_banana_chips_202604211933.jpeg" },
    { "id": "unniyappam", "name": "Unniyappam (Sweet Rice Fritters)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 4 }, "servingOptions": [{ "label": "2 Pieces (40g)", "grams": 40 }, { "label": "4 Pieces (80g)", "grams": 80 }, { "label": "6 Pieces (120g)", "grams": 120 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 350, "protein": 4, "carbs": 55, "fat": 12, "fiber": 1.5 }, "image": "Unniyappam_arranged_on_202604211933.jpeg" },
    { "id": "achappam", "name": "Achappam (Rose Cookies)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 3 }, "servingOptions": [{ "label": "2 Pieces (20g)", "grams": 20 }, { "label": "4 Pieces (40g)", "grams": 40 }, { "label": "6 Pieces (60g)", "grams": 60 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 480, "protein": 5, "carbs": 62, "fat": 23, "fiber": 1 }, "image": "Crispy_Achappam_stacked_202604211933.jpeg" },
    { "id": "sukhiyan", "name": "Sukhiyan (Sweet Dal Fritters)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 2 }, "servingOptions": [{ "label": "1 Piece (50g)", "grams": 50 }, { "label": "2 Pieces (100g)", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 310, "protein": 6, "carbs": 45, "fat": 12, "fiber": 3 }, "image": "Sukhiyan_on_dark_202604211933.jpeg" },
    { "id": "kuzhalappam", "name": "Kuzhalappam (Crispy Rice Tubes)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 495, "protein": 6, "carbs": 60, "fat": 25, "fiber": 2 }, "image": "Kuzhalappam_arranged_in_202604211933.jpeg" },
    { "id": "vettu_cake", "name": "Vettu Cake (Kerala Tea Cake)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (60g)", "grams": 60 }, { "label": "2 Pieces (120g)", "grams": 120 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 395, "protein": 5, "carbs": 52, "fat": 18, "fiber": 1 }, "image": "Vettu_Cake_on_202604211933.jpeg" },
    { "id": "nei_appam", "name": "Nei Appam / Neyyappam (Ghee Fritters)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 3 }, "servingOptions": [{ "label": "2 Pieces (40g)", "grams": 40 }, { "label": "4 Pieces (80g)", "grams": 80 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 370, "protein": 3.5, "carbs": 50, "fat": 16, "fiber": 1 }, "image": "Neyyappam_in_brass_202604211933.jpeg" },
    { "id": "ela_ada", "name": "Ela Ada (Banana Leaf Sweet)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 2 }, "servingOptions": [{ "label": "1 Piece (80g)", "grams": 80 }, { "label": "2 Pieces (160g)", "grams": 160 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 195, "protein": 3, "carbs": 35, "fat": 4.5, "fiber": 2 }, "image": "Ela_Ada_sweet_202604211933.jpeg" },
    { "id": "parippu_vada_kerala", "name": "Parippu Vada (Kerala Dal Fritter)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 2 }, "servingOptions": [{ "label": "1 Piece (50g)", "grams": 50 }, { "label": "2 Pieces (100g)", "grams": 100 }, { "label": "3 Pieces (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 320, "protein": 14, "carbs": 42, "fat": 11, "fiber": 6 }, "image": "Crispy_Parippu_Vada_202604211933.jpeg" },
    { "id": "uzhunnu_vada", "name": "Uzhunnu Vada (Kerala Medu Vada)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 2 }, "servingOptions": [{ "label": "1 Piece (50g)", "grams": 50 }, { "label": "2 Pieces (100g)", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 290, "protein": 12, "carbs": 30, "fat": 13, "fiber": 3 }, "image": "Crispy_Uzhunnu_Vada_202604211933.jpeg" },

    // ==========================================
    // 🍘 SOUTH INDIAN SNACKS — KARNATAKA
    // ==========================================
    { "id": "kodubale", "name": "Kodubale (Karnataka Ring Snack)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 510, "protein": 8, "carbs": 60, "fat": 26, "fiber": 3 }, "image": "Kodubale_in_brass_202604211933.jpeg" },
    { "id": "nippattu", "name": "Nippattu (Rice Flour Crackers)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 485, "protein": 7, "carbs": 58, "fat": 24, "fiber": 2.5 }, "image": "Crispy_Nippattu_on_202604211933.jpeg" },
    { "id": "khara_boondi", "name": "Khara Boondi (Spiced Gram Drops)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 475, "protein": 10, "carbs": 52, "fat": 25, "fiber": 3 }, "image": "Crispy_Khara_Boondi_202604211933.jpeg" },
    { "id": "masala_peanuts", "name": "Masala Peanuts (Coated & Fried)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Handful (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 505, "protein": 18, "carbs": 35, "fat": 32, "fiber": 5 }, "image": "Crispy_Masala_Peanuts_202604211933.jpeg" },
    { "id": "mysore_mixture", "name": "Mysore Mixture", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 540, "protein": 9, "carbs": 52, "fat": 32, "fiber": 3 }, "image": "Mysore_Mixture_in_202604211936.jpeg" },
    { "id": "chiroti", "name": "Chiroti (Crispy Layered Sweet)", "category": "snacks", "subcategory": "South Indian Sweets", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (40g)", "grams": 40 }, { "label": "2 Pieces (80g)", "grams": 80 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 450, "protein": 5, "carbs": 55, "fat": 23, "fiber": 1 }, "image": "Flaky_Chiroti_sweet_202604211933.jpeg" },
    { "id": "dharwad_peda", "name": "Dharwad Peda", "category": "snacks", "subcategory": "South Indian Sweets", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 2 }, "servingOptions": [{ "label": "1 Piece (20g)", "grams": 20 }, { "label": "2 Pieces (40g)", "grams": 40 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 395, "protein": 8, "carbs": 58, "fat": 14, "fiber": 0 }, "image": "Peda_on_brass_202604211933.jpeg" },

    // ==========================================
    // 🍘 SOUTH INDIAN SNACKS — TAMIL NADU
    // ==========================================
    { "id": "kaima_idli", "name": "Kaima Idli (Fried Spiced Idli)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "quantity", "defaultServing": { "unit": "plate", "amount": 1 }, "servingOptions": [{ "label": "Small Plate (150g)", "grams": 150 }, { "label": "Regular Plate (250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 185, "protein": 4, "carbs": 28, "fat": 6, "fiber": 1.5 }, "image": "Kaima_Idli_on_202604211933.jpeg" },
    { "id": "bonda_south", "name": "Bonda (Urulaikizhangu Bonda)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 2 }, "servingOptions": [{ "label": "1 Piece (60g)", "grams": 60 }, { "label": "2 Pieces (120g)", "grams": 120 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 260, "protein": 5, "carbs": 30, "fat": 13, "fiber": 2 }, "image": "Bonda_with_potato_202604211933.jpeg" },
    { "id": "kara_sev", "name": "Kara Sev (Spicy Thin Sev)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 520, "protein": 9, "carbs": 55, "fat": 29, "fiber": 3 }, "image": "Kara_Sev_in_202604211933.jpeg" },
    { "id": "kai_murukku", "name": "Kai Murukku (Hand-pressed Murukku)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 530, "protein": 7.5, "carbs": 60, "fat": 28, "fiber": 2.5 }, "image": "Kai_Murukku_on_202604211933.jpeg" },
    { "id": "butter_murukku", "name": "Butter Murukku (Benne Murukku)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 545, "protein": 6.5, "carbs": 58, "fat": 31, "fiber": 2 }, "image": "Butter_Murukku_in_202604211933.jpeg" },
    { "id": "chekkalu", "name": "Chekkalu / Chekka (Rice Crackers)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 490, "protein": 7, "carbs": 62, "fat": 23, "fiber": 2.5 }, "image": "Chekkalu_stacked_on_202604211933.jpeg" },
    { "id": "pakkavada", "name": "Pakkavada (Thick Besan Pakoda)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 465, "protein": 12, "carbs": 48, "fat": 25, "fiber": 4 }, "image": "Pakkavada_on_dark_202604211933.jpeg" },
    { "id": "diamond_biscuit", "name": "Diamond Biscuit / Maida Biscuit (South Indian)", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 470, "protein": 6, "carbs": 65, "fat": 20, "fiber": 1 }, "image": "Diamond_maida_biscuits_202604211933.jpeg" },
    { "id": "chegodi", "name": "Chegodi / Ring Murukku", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 485, "protein": 9, "carbs": 58, "fat": 24, "fiber": 3 }, "image": "Golden_Chegodi_on_202604211933.jpeg" },
    { "id": "seepu_seedai", "name": "Seepu Seedai", "category": "snacks", "subcategory": "South Indian Snacks", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 30 }, "servingOptions": [{ "label": "Small Serving (30g)", "grams": 30 }, { "label": "50g", "grams": 50 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 500, "protein": 7, "carbs": 55, "fat": 28, "fiber": 2.5 }, "image": "Seepu_Seedai_in_202604211933.jpeg" },

    // ==========================================
    // 🍘 SOUTH INDIAN SWEETS
    // ==========================================
    { "id": "aval_vilayichathu", "name": "Aval Vilayichathu (Beaten Rice Sweet)", "category": "snacks", "subcategory": "South Indian Sweets", "servingType": "weight", "defaultServing": { "unit": "g", "amount": 50 }, "servingOptions": [{ "label": "Small Serving (50g)", "grams": 50 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 360, "protein": 3.5, "carbs": 62, "fat": 10, "fiber": 2 }, "image": "Aval_Vilayichathu_in_202604211933.jpeg" },
    { "id": "sakkarai_pongal", "name": "Sakkarai Pongal (Sweet Pongal)", "category": "snacks", "subcategory": "South Indian Sweets", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (100g)", "grams": 100 }, { "label": "Regular Bowl (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 195, "protein": 3.5, "carbs": 34, "fat": 5, "fiber": 1 }, "image": "Sakkarai_Pongal_in_202604211933.jpeg" },
    { "id": "payasam_vermicelli", "name": "Semiya Payasam (Vermicelli Kheer)", "category": "snacks", "subcategory": "South Indian Sweets", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (100g)", "grams": 100 }, { "label": "Regular Bowl (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 155, "protein": 3, "carbs": 22, "fat": 6, "fiber": 0.5 }, "image": "Semiya_Payasam_in_202604211933.jpeg" },
    { "id": "payasam_parippu", "name": "Parippu Payasam (Dal Kheer - Kerala)", "category": "snacks", "subcategory": "South Indian Sweets", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (100g)", "grams": 100 }, { "label": "Regular Bowl (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 170, "protein": 4, "carbs": 24, "fat": 6.5, "fiber": 1.5 }, "image": "Parippu_Payasam_in_202604211933.jpeg" },
    { "id": "paal_payasam", "name": "Paal Payasam (Rice Kheer)", "category": "snacks", "subcategory": "South Indian Sweets", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (100g)", "grams": 100 }, { "label": "Regular Bowl (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 145, "protein": 3.5, "carbs": 20, "fat": 5.5, "fiber": 0 }, "image": "Paal_Payasam_in_202604211933.jpeg" },
    { "id": "unni_appam_jaggery", "name": "Unni Appam (Jaggery & Banana)", "category": "snacks", "subcategory": "South Indian Sweets", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 4 }, "servingOptions": [{ "label": "3 Pieces (45g)", "grams": 45 }, { "label": "5 Pieces (75g)", "grams": 75 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 340, "protein": 4, "carbs": 52, "fat": 12, "fiber": 1.5 }, "image": "Unni_Appam_in_202604211933.jpeg" },

    // ==========================================
    // 🎂 CAKES — INDIAN BAKERY VARIETIES
    // ==========================================
    { "id": "cake_pineapple", "name": "Pineapple Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (80g)", "grams": 80 }, { "label": "2 Slices (160g)", "grams": 160 }, { "label": "Half Kg Cake", "grams": 500 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 340, "protein": 3.5, "carbs": 50, "fat": 14, "fiber": 0.5 }, "image": "Pineapple_cake_on_202604211933.jpeg" },
    { "id": "cake_butterscotch", "name": "Butterscotch Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (80g)", "grams": 80 }, { "label": "2 Slices (160g)", "grams": 160 }, { "label": "Half Kg Cake", "grams": 500 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 370, "protein": 4, "carbs": 52, "fat": 16, "fiber": 0.3 }, "image": "Butterscotch_cake_on_202604211933.jpeg" },
    { "id": "cake_vanilla_sponge", "name": "Vanilla Sponge Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (80g)", "grams": 80 }, { "label": "2 Slices (160g)", "grams": 160 }, { "label": "Half Kg Cake", "grams": 500 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 350, "protein": 5, "carbs": 52, "fat": 13, "fiber": 0.3 }, "image": "Vanilla_Sponge_Cake_202604211933.jpeg" },
    { "id": "cake_chocolate_truffle", "name": "Chocolate Truffle Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (80g)", "grams": 80 }, { "label": "2 Slices (160g)", "grams": 160 }, { "label": "Half Kg Cake", "grams": 500 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 420, "protein": 5, "carbs": 50, "fat": 23, "fiber": 2.5 }, "image": "Chocolate_truffle_cake_202604211933.jpeg" },
    { "id": "cake_white_forest", "name": "White Forest Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (80g)", "grams": 80 }, { "label": "2 Slices (160g)", "grams": 160 }, { "label": "Half Kg Cake", "grams": 500 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 345, "protein": 4, "carbs": 48, "fat": 15, "fiber": 0.5 }, "image": "White_Forest_Cake_202604211933.jpeg" },
    { "id": "cake_strawberry", "name": "Strawberry Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (80g)", "grams": 80 }, { "label": "2 Slices (160g)", "grams": 160 }, { "label": "Half Kg Cake", "grams": 500 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 335, "protein": 3.5, "carbs": 50, "fat": 13, "fiber": 0.5 }, "image": "Strawberry_cake_on_202604211933.jpeg" },
    { "id": "cake_mango", "name": "Mango Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (80g)", "grams": 80 }, { "label": "2 Slices (160g)", "grams": 160 }, { "label": "Half Kg Cake", "grams": 500 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 340, "protein": 3.5, "carbs": 52, "fat": 13, "fiber": 0.5 }, "image": "Mango_cake_on_202604211933.jpeg" },
    { "id": "cake_coffee_walnut", "name": "Coffee Walnut Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (80g)", "grams": 80 }, { "label": "2 Slices (160g)", "grams": 160 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 380, "protein": 5.5, "carbs": 46, "fat": 20, "fiber": 1.5 }, "image": "A_professional_food_202604211933.jpeg" },
    { "id": "cake_carrot", "name": "Carrot Cake (with Cream Cheese)", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (100g)", "grams": 100 }, { "label": "2 Slices (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 356, "protein": 4.5, "carbs": 44, "fat": 18, "fiber": 1.5 }, "image": "Carrot_cake_with_202604211933.jpeg" },
    { "id": "cake_fruit_cake", "name": "Fruit Cake (Mixed Dry Fruits)", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (80g)", "grams": 80 }, { "label": "2 Slices (160g)", "grams": 160 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 324, "protein": 4.5, "carbs": 50, "fat": 12, "fiber": 2 }, "image": "Fruit_cake_on_202604211933.jpeg" },
    { "id": "cake_blueberry", "name": "Blueberry Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (80g)", "grams": 80 }, { "label": "2 Slices (160g)", "grams": 160 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 330, "protein": 3.5, "carbs": 49, "fat": 13, "fiber": 1 }, "image": "Blueberry_cake_on_202604211933.jpeg" },
    { "id": "cake_lemon", "name": "Lemon Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (80g)", "grams": 80 }, { "label": "2 Slices (160g)", "grams": 160 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 345, "protein": 4, "carbs": 52, "fat": 13, "fiber": 0.5 }, "image": "Lemon_cake_on_202604211933.jpeg" },
    { "id": "cake_tiramisu", "name": "Tiramisu", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (120g)", "grams": 120 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 283, "protein": 5.5, "carbs": 28, "fat": 16, "fiber": 0.5 }, "image": "Tiramisu_slice_on_202604211933.jpeg" },
    { "id": "cake_oreo", "name": "Oreo Cookie Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (80g)", "grams": 80 }, { "label": "2 Slices (160g)", "grams": 160 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 400, "protein": 5, "carbs": 52, "fat": 20, "fiber": 2 }, "image": "Oreo_Cookie_Cake_202604211933.jpeg" },
    { "id": "cake_ferrero_rocher", "name": "Ferrero Rocher Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (80g)", "grams": 80 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 430, "protein": 6, "carbs": 48, "fat": 24, "fiber": 2 }, "image": "Ferrero_Rocher_cake_202604211933.jpeg" },
    { "id": "cake_honey", "name": "Honey Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (80g)", "grams": 80 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 320, "protein": 4.5, "carbs": 55, "fat": 9, "fiber": 0.5 }, "image": "Honey_cake_slice_202604211933.jpeg" },
    { "id": "cake_plum", "name": "Plum Cake (Christmas Cake)", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (80g)", "grams": 80 }, { "label": "2 Slices (160g)", "grams": 160 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 355, "protein": 4, "carbs": 55, "fat": 13, "fiber": 2 }, "image": "Plum_cake_on_202604211933.jpeg" },
    { "id": "cake_marble", "name": "Marble Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (70g)", "grams": 70 }, { "label": "2 Slices (140g)", "grams": 140 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 365, "protein": 5, "carbs": 50, "fat": 16, "fiber": 1 }, "image": "Marble_cake_slice_202604211933.jpeg" },
    { "id": "cake_pound_cake", "name": "Pound Cake (Plain / Butter)", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (70g)", "grams": 70 }, { "label": "2 Slices (140g)", "grams": 140 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 375, "protein": 5.5, "carbs": 48, "fat": 18, "fiber": 0.5 }, "image": "Pound_cake_slice_202604211933.jpeg" },
    { "id": "cake_banana_bread", "name": "Banana Bread / Banana Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "weight", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (80g)", "grams": 80 }, { "label": "2 Slices (160g)", "grams": 160 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 326, "protein": 4.5, "carbs": 51, "fat": 12, "fiber": 1.5 }, "image": "Slice_of_Banana_202604211933.jpeg" },

    // ==========================================
    // 🧁 CUPCAKES & PASTRIES
    // ==========================================
    { "id": "cupcake_vanilla", "name": "Vanilla Cupcake (with Frosting)", "category": "snacks", "subcategory": "Cakes", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Cupcake (75g)", "grams": 75 }, { "label": "2 Cupcakes (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 380, "protein": 4, "carbs": 56, "fat": 16, "fiber": 0.3 }, "image": "Vanilla_cupcake_with_202604211933.jpeg" },
    { "id": "cupcake_chocolate", "name": "Chocolate Cupcake (with Frosting)", "category": "snacks", "subcategory": "Cakes", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Cupcake (75g)", "grams": 75 }, { "label": "2 Cupcakes (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 395, "protein": 4.5, "carbs": 52, "fat": 19, "fiber": 2 }, "image": "Chocolate_cupcake_with_202604211933.jpeg" },
    { "id": "cupcake_red_velvet", "name": "Red Velvet Cupcake (with Cream Cheese)", "category": "snacks", "subcategory": "Cakes", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Cupcake (80g)", "grams": 80 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 390, "protein": 4.5, "carbs": 54, "fat": 17, "fiber": 0.5 }, "image": "Red_Velvet_Cupcake_202604211933.jpeg" },
    { "id": "pastry_puff_veg", "name": "Veg Puff Pastry", "category": "snacks", "subcategory": "Cakes", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (80g)", "grams": 80 }, { "label": "2 Pieces (160g)", "grams": 160 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 310, "protein": 5, "carbs": 35, "fat": 16, "fiber": 2 }, "image": "Golden_flaky_Veg_202604211933.jpeg" },
    { "id": "pastry_puff_egg", "name": "Egg Puff Pastry", "category": "snacks", "subcategory": "Cakes", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (90g)", "grams": 90 }, { "label": "2 Pieces (180g)", "grams": 180 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 295, "protein": 8, "carbs": 30, "fat": 15, "fiber": 1 }, "image": "Golden_Egg_Puff_202604211933.jpeg" },
    { "id": "pastry_puff_chicken", "name": "Chicken Puff Pastry", "category": "snacks", "subcategory": "Cakes", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (90g)", "grams": 90 }, { "label": "2 Pieces (180g)", "grams": 180 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 305, "protein": 10, "carbs": 28, "fat": 17, "fiber": 1 }, "image": "Chicken_Puff_Pastry_202604211933.jpeg" },
    { "id": "croissant_plain", "name": "Croissant (Plain Butter)", "category": "snacks", "subcategory": "Cakes", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (60g)", "grams": 60 }, { "label": "2 Pieces (120g)", "grams": 120 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 406, "protein": 8.2, "carbs": 45.8, "fat": 21, "fiber": 2.3 }, "image": "Golden-brown_butter_croissant_202604211933.jpeg" },
    { "id": "croissant_chocolate", "name": "Chocolate Croissant", "category": "snacks", "subcategory": "Cakes", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (75g)", "grams": 75 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 420, "protein": 7, "carbs": 48, "fat": 22, "fiber": 2.5 }, "image": "Chocolate_croissant_on_202604211933.jpeg" },
    { "id": "danish_pastry", "name": "Danish Pastry (Fruit/Cream)", "category": "snacks", "subcategory": "Cakes", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (90g)", "grams": 90 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 374, "protein": 5.5, "carbs": 42, "fat": 20, "fiber": 1.5 }, "image": "Fruit_Danish_pastry_202604211933.jpeg" },
    { "id": "eclair_chocolate", "name": "Chocolate Eclair", "category": "snacks", "subcategory": "Cakes", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (100g)", "grams": 100 }, { "label": "2 Pieces (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 262, "protein": 5, "carbs": 24, "fat": 16, "fiber": 1 }, "image": "Chocolate_Eclair_on_202604211933.jpeg" },
    { "id": "donut_glazed", "name": "Glazed Donut", "category": "snacks", "subcategory": "Cakes", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Donut (65g)", "grams": 65 }, { "label": "2 Donuts (130g)", "grams": 130 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 400, "protein": 5, "carbs": 51, "fat": 20, "fiber": 1.5 }, "image": "Glazed_donut_on_202604211933.jpeg" },
    { "id": "donut_chocolate", "name": "Chocolate Donut", "category": "snacks", "subcategory": "Cakes", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Donut (70g)", "grams": 70 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 415, "protein": 5.5, "carbs": 50, "fat": 22, "fiber": 2 }, "image": "Chocolate_donut_with_202604211933.jpeg" },
    { "id": "muffin_blueberry", "name": "Blueberry Muffin", "category": "snacks", "subcategory": "Cakes", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Muffin (100g)", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 340, "protein": 5, "carbs": 48, "fat": 14, "fiber": 1.5 }, "image": "Blueberry_muffin_on_202604211933.jpeg" },
    { "id": "muffin_chocolate_chip", "name": "Chocolate Chip Muffin", "category": "snacks", "subcategory": "Cakes", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Muffin (100g)", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 380, "protein": 5.5, "carbs": 50, "fat": 18, "fiber": 2 }, "image": "Chocolate_Chip_Muffin_202604211933.jpeg" }

    ,
    { "id": "ph_country_feast", "name": "Country Feast Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~100g)", "grams": 100 }, { "label": "1 Medium Slice (~75g)", "grams": 75 }, { "label": "Whole Personal (~400g)", "grams": 400 }, { "label": "Whole Medium (~560g)", "grams": 560 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 248, "protein": 9, "carbs": 34, "fat": 8.5, "fiber": 2 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "Country_Feast_Pizza_202604210053.jpeg" },
    { "id": "ph_cheese_n_corn", "name": "Cheese N Corn Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~100g)", "grams": 100 }, { "label": "1 Medium Slice (~75g)", "grams": 75 }, { "label": "Whole Personal (~400g)", "grams": 400 }, { "label": "Whole Medium (~560g)", "grams": 560 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 258, "protein": 10, "carbs": 33, "fat": 9.5, "fiber": 1.8 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "corn_cheese_pizza.png" },
    { "id": "ph_veggie_wonder", "name": "Veggie Wonder Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~100g)", "grams": 100 }, { "label": "1 Medium Slice (~75g)", "grams": 75 }, { "label": "Whole Personal (~400g)", "grams": 400 }, { "label": "Whole Medium (~560g)", "grams": 560 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 245, "protein": 9.5, "carbs": 33, "fat": 8, "fiber": 2.5 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "Veggie_Wonder_Pizza_202604210052.jpeg" },
    { "id": "ph_farm_villa", "name": "Farm Villa Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~100g)", "grams": 100 }, { "label": "1 Medium Slice (~75g)", "grams": 75 }, { "label": "Whole Personal (~400g)", "grams": 400 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 240, "protein": 9, "carbs": 32, "fat": 8, "fiber": 2.5 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "Farm_Villa_Pizza_202604210052.jpeg" },
    { "id": "ph_mushroom_pizza", "name": "Mushroom & Olive Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~100g)", "grams": 100 }, { "label": "1 Medium Slice (~75g)", "grams": 75 }, { "label": "Whole Personal (~400g)", "grams": 400 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 235, "protein": 9, "carbs": 31, "fat": 8, "fiber": 2 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "Mushroom_Olive_Pizza_202604210052.jpeg" },
    { "id": "ph_spicy_paneer", "name": "Spicy Paneer Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~105g)", "grams": 105 }, { "label": "1 Medium Slice (~80g)", "grams": 80 }, { "label": "Whole Personal (~420g)", "grams": 420 }, { "label": "Whole Medium (~580g)", "grams": 580 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 270, "protein": 11, "carbs": 31, "fat": 11.5, "fiber": 2 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "spicy_paneer_pizza.png" },
    { "id": "ph_tandoori_paneer_pizza", "name": "Tandoori Paneer Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~105g)", "grams": 105 }, { "label": "1 Medium Slice (~80g)", "grams": 80 }, { "label": "Whole Personal (~420g)", "grams": 420 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 265, "protein": 11, "carbs": 31, "fat": 11, "fiber": 2 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "Tandoori_Paneer_Pizza_202604210052.jpeg" },
    { "id": "ph_peri_peri_veg", "name": "Peri Peri Veg Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~100g)", "grams": 100 }, { "label": "1 Medium Slice (~75g)", "grams": 75 }, { "label": "Whole Personal (~400g)", "grams": 400 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 252, "protein": 9.5, "carbs": 33, "fat": 9, "fiber": 2 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "Peri_Peri_Veg_202604210052.jpeg" },
    { "id": "ph_mexican_fiesta", "name": "Mexican Fiesta Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~105g)", "grams": 105 }, { "label": "1 Medium Slice (~80g)", "grams": 80 }, { "label": "Whole Personal (~420g)", "grams": 420 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 255, "protein": 10, "carbs": 32, "fat": 9.5, "fiber": 2.5 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "Mexican_Fiesta_Pizza_202604210052.jpeg" },
    { "id": "ph_harvest_gold", "name": "Harvest Gold Pizza (Pizza Hut) - Veg", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~100g)", "grams": 100 }, { "label": "1 Medium Slice (~75g)", "grams": 75 }, { "label": "Whole Personal (~400g)", "grams": 400 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 242, "protein": 9, "carbs": 33, "fat": 8, "fiber": 2 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "Harvest_Gold_Pizza_202604210052.jpeg" },

    // ==========================================
    // 🍕 PIZZA HUT INDIA - NON-VEG PIZZAS
    // ==========================================
    { "id": "ph_chicken_supreme", "name": "Chicken Supreme Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~110g)", "grams": 110 }, { "label": "1 Medium Slice (~85g)", "grams": 85 }, { "label": "Whole Personal (~440g)", "grams": 440 }, { "label": "Whole Medium (~600g)", "grams": 600 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 278, "protein": 14, "carbs": 30, "fat": 11.5, "fiber": 2 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "Chicken_Supreme_Pizza_202604210052.jpeg" },
    { "id": "ph_royal_spice_chicken", "name": "Royal Spice Chicken Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~110g)", "grams": 110 }, { "label": "1 Medium Slice (~85g)", "grams": 85 }, { "label": "Whole Personal (~440g)", "grams": 440 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 282, "protein": 14, "carbs": 30, "fat": 12, "fiber": 2 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "Chicken_Pizza_Pizza_202604210052.jpeg" },
    { "id": "ph_chicken_makhani_pizza", "name": "Chicken Makhani Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~110g)", "grams": 110 }, { "label": "1 Medium Slice (~85g)", "grams": 85 }, { "label": "Whole Personal (~440g)", "grams": 440 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 275, "protein": 13.5, "carbs": 30, "fat": 11.5, "fiber": 2 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "Chicken_Makhani_Pizza_202604210052.jpeg" },
    { "id": "ph_fiery_chicken", "name": "Southern Fiery Chicken Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~110g)", "grams": 110 }, { "label": "1 Medium Slice (~85g)", "grams": 85 }, { "label": "Whole Personal (~440g)", "grams": 440 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 288, "protein": 14, "carbs": 30, "fat": 13, "fiber": 2 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "Chicken_Pizza_Pizza_202604210052.jpeg" },
    { "id": "ph_chicken_peri_peri", "name": "Peri Peri Chicken Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~110g)", "grams": 110 }, { "label": "1 Medium Slice (~85g)", "grams": 85 }, { "label": "Whole Personal (~440g)", "grams": 440 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 280, "protein": 13.5, "carbs": 30, "fat": 12, "fiber": 2 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "Chicken_Pizza_Pizza_202604210052.jpeg" },
    { "id": "ph_chicken_cheese_burst", "name": "Chicken & Cheese Pizza (Pizza Hut)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Personal Slice (~115g)", "grams": 115 }, { "label": "1 Medium Slice (~90g)", "grams": 90 }, { "label": "Whole Personal (~460g)", "grams": 460 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 295, "protein": 14, "carbs": 29, "fat": 14, "fiber": 1.8 }, "ultimateCheese": { "calories": 448, "protein": 12.1, "carbs": 22.4, "fat": 37.8, "fiber": 0 }, "image": "Chicken_Cheese_Pizza_202604210052.jpeg" },

    // ==========================================
    // 🍞 PIZZA HUT INDIA - SIDES & STARTERS
    // ==========================================
    { "id": "ph_loaded_breadstix", "name": "Loaded Breadstix (Pizza Hut)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 4 }, "servingOptions": [{ "label": "1 Piece (~35g)", "grams": 35 }, { "label": "4 Pieces (~140g)", "grams": 140 }, { "label": "8 Pieces (~280g)", "grams": 280 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 318, "protein": 9, "carbs": 40, "fat": 13, "fiber": 2 }, "image": "Loaded_Breadstix_restaurant_202604210052.jpeg" },
    { "id": "ph_exotica_garlic_bread", "name": "Exotica Veggie Garlic Bread (Pizza Hut)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 4 }, "servingOptions": [{ "label": "1 Piece (~35g)", "grams": 35 }, { "label": "4 Pieces (~140g)", "grams": 140 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 295, "protein": 8.5, "carbs": 39, "fat": 11, "fiber": 2 }, "image": "Exotica_Veggie_Garlic_202604210052.jpeg" },
    { "id": "ph_cheesy_garlic_bread", "name": "Cheesy Garlic Bread (Pizza Hut)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 4 }, "servingOptions": [{ "label": "1 Piece (~40g)", "grams": 40 }, { "label": "4 Pieces (~160g)", "grams": 160 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 330, "protein": 10, "carbs": 37, "fat": 15, "fiber": 1.5 }, "image": "Cheesy_Garlic_Bread_202604210052.jpeg" },
    { "id": "ph_cheesy_pockets", "name": "Cheesy Pockets (Pizza Hut)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 2 }, "servingOptions": [{ "label": "1 Piece (~60g)", "grams": 60 }, { "label": "2 Pieces (~120g)", "grams": 120 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 298, "protein": 9.5, "carbs": 36, "fat": 13, "fiber": 1.5 }, "image": "Cheesy_Pockets_served_202604210052.jpeg" },
    { "id": "ph_bbq_chicken_wings", "name": "BBQ Baked Chicken Wings (Pizza Hut)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 4 }, "servingOptions": [{ "label": "4 Wings (~200g)", "grams": 200 }, { "label": "6 Wings (~300g)", "grams": 300 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 218, "protein": 18, "carbs": 6, "fat": 13, "fiber": 0.3 }, "image": "BBQ_Baked_Chicken_202604210052.jpeg" },
    { "id": "ph_spicy_chicken_wings", "name": "Spicy Baked Chicken Wings (Pizza Hut)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 4 }, "servingOptions": [{ "label": "4 Wings (~200g)", "grams": 200 }, { "label": "6 Wings (~300g)", "grams": 300 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 222, "protein": 18, "carbs": 6.5, "fat": 13.5, "fiber": 0.5 }, "image": "Spicy_Baked_Chicken_202604210052.jpeg" },
    { "id": "ph_sprinkled_fries", "name": "Cheesy Sprinkled Fries (Pizza Hut)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "serving", "amount": 1 }, "servingOptions": [{ "label": "Regular (~130g)", "grams": 130 }, { "label": "Large (~200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 310, "protein": 5, "carbs": 38, "fat": 15, "fiber": 3 }, "image": "Cheesy_Sprinkled_Fries_202604210052.jpeg" },
    { "id": "ph_pasta_tandoori_paneer", "name": "Tandoori Paneer Pasta (Pizza Hut)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "serving", "amount": 1 }, "servingOptions": [{ "label": "1 Box (~280g)", "grams": 280 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 185, "protein": 8, "carbs": 25, "fat": 6, "fiber": 2 }, "image": "Tandoori_Paneer_Pasta_202604210052.jpeg" },
    { "id": "ph_pasta_tomato_twist", "name": "Tomato Twist Pasta (Pizza Hut)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "serving", "amount": 1 }, "servingOptions": [{ "label": "1 Box (~280g)", "grams": 280 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 170, "protein": 6, "carbs": 26, "fat": 5, "fiber": 2 }, "image": "Tomato_Twist_Pasta_202604210052.jpeg" },
    { "id": "ph_brownie", "name": "Brow-wow-nie Chocolate Brownie (Pizza Hut)", "category": "snacks", "subcategory": "Dessert", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (~90g)", "grams": 90 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 380, "protein": 5, "carbs": 52, "fat": 17, "fiber": 2 }, "image": "Brow-wow-nie_Chocolate_Brownie_202604210052.jpeg" },
    { "id": "ph_choco_brownie_mcflurry", "name": "Choco Mousse Cake (Pizza Hut)", "category": "snacks", "subcategory": "Dessert", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (~80g)", "grams": 80 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 365, "protein": 5, "carbs": 48, "fat": 17, "fiber": 1.5 }, "image": "Choco_Mousse_Cake_202604210052.jpeg" },

    // ==========================================
    // 🍔 BURGER KING INDIA - COMPLETE MENU
    // ==========================================
    // VEG BURGERS
    { "id": "bk_aloo_tikki", "name": "Aloo Tikki Burger (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "burger", "amount": 1 }, "servingOptions": [{ "label": "1 Burger (~130g)", "grams": 130 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 218, "protein": 5.5, "carbs": 30, "fat": 8.5, "fiber": 2 }, "image": "Aloo_Tikki_Burger_202604210052.jpeg" },
    { "id": "bk_veg_classic", "name": "BK Veg Classic Burger (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "burger", "amount": 1 }, "servingOptions": [{ "label": "1 Burger (~145g)", "grams": 145 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 245, "protein": 6, "carbs": 30, "fat": 11, "fiber": 2 }, "image": "BK_Veg_Classic_202604210052.jpeg" },
    { "id": "bk_spicy_veg", "name": "BK Spicy Veg Burger (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "burger", "amount": 1 }, "servingOptions": [{ "label": "1 Burger (~155g)", "grams": 155 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 250, "protein": 6.5, "carbs": 30, "fat": 11, "fiber": 2 }, "image": "Spicy_Chicken_Burger_202604210052.jpeg" },
    { "id": "bk_veggie_bean", "name": "Veggie & Bean Burger (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "burger", "amount": 1 }, "servingOptions": [{ "label": "1 Burger (~155g)", "grams": 155 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 235, "protein": 7, "carbs": 30, "fat": 9, "fiber": 3 }, "image": "Veggie_Bean_Burger_202604210052.jpeg" },
    { "id": "bk_paneer_royale", "name": "Paneer Royale Burger (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "burger", "amount": 1 }, "servingOptions": [{ "label": "1 Burger (~190g)", "grams": 190 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 277, "protein": 10, "carbs": 25, "fat": 15, "fiber": 2 }, "image": "Paneer_Royale_Burger_202604210052.jpeg" },
    { "id": "bk_tandoori_paneer_burger", "name": "Tandoori Paneer Burger (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "burger", "amount": 1 }, "servingOptions": [{ "label": "1 Burger (~190g)", "grams": 190 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 272, "protein": 10.5, "carbs": 25, "fat": 14, "fiber": 2 }, "image": "Tandoori_Paneer_Burger_202604210052.jpeg" },

    // NON-VEG BURGERS
    { "id": "bk_chicken_royale", "name": "Chicken Royale Burger (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "burger", "amount": 1 }, "servingOptions": [{ "label": "1 Burger (~185g)", "grams": 185 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 253, "protein": 10.5, "carbs": 24, "fat": 13, "fiber": 1.5 }, "image": "Chicken_Royale_Burger_202604210052.jpeg" },
    { "id": "bk_spicy_chicken_burger", "name": "Spicy Chicken Burger (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "burger", "amount": 1 }, "servingOptions": [{ "label": "1 Burger (~175g)", "grams": 175 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 246, "protein": 10, "carbs": 25, "fat": 12, "fiber": 1.5 }, "image": "Spicy_Chicken_Burger_202604210052.jpeg" },
    { "id": "bk_mutton_whopper", "name": "Mutton Whopper (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "burger", "amount": 1 }, "servingOptions": [{ "label": "1 Burger (~270g)", "grams": 270 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 268, "protein": 11, "carbs": 22, "fat": 15, "fiber": 1.5 }, "image": "mutton_whopper.png" },
    { "id": "bk_chicken_double_patty", "name": "Chicken Double Patty Burger (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "burger", "amount": 1 }, "servingOptions": [{ "label": "1 Burger (~220g)", "grams": 220 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 285, "protein": 13, "carbs": 23, "fat": 16, "fiber": 1.5 }, "image": "Chicken_Double_Patty_202604210052.jpeg" },
    { "id": "bk_chicken_strikes", "name": "Chicken Strikes (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 5 }, "servingOptions": [{ "label": "5 Pieces (~120g)", "grams": 120 }, { "label": "9 Pieces (~216g)", "grams": 216 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 260, "protein": 12, "carbs": 22, "fat": 13, "fiber": 1 }, "image": "Chicken_Strikes_served_202604210052.jpeg" },

    // SIDES
    { "id": "bk_king_fries_small", "name": "King Fries Small (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "serving", "amount": 1 }, "servingOptions": [{ "label": "Small (~80g)", "grams": 80 }, { "label": "Regular (~115g)", "grams": 115 }, { "label": "Large (~155g)", "grams": 155 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 330, "protein": 3.5, "carbs": 43, "fat": 16, "fiber": 3.5 }, "image": "King_Fries_Small_202604210052.jpeg" },
    { "id": "bk_peri_peri_fries", "name": "Peri Peri Fries (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "serving", "amount": 1 }, "servingOptions": [{ "label": "Regular (~115g)", "grams": 115 }, { "label": "Large (~155g)", "grams": 155 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 340, "protein": 3.5, "carbs": 43, "fat": 17, "fiber": 3.5 }, "image": "Peri_Peri_Fries_202604210052.jpeg" },
    { "id": "bk_hash_browns", "name": "Hash Browns (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 2 }, "servingOptions": [{ "label": "1 Piece (~50g)", "grams": 50 }, { "label": "2 Pieces (~100g)", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 308, "protein": 2.5, "carbs": 30, "fat": 19, "fiber": 2 }, "image": "Hash_Browns_served_202604210052.jpeg" },
    { "id": "bk_veggie_strips", "name": "Veggie Strips (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "serving", "amount": 1 }, "servingOptions": [{ "label": "Small (~100g)", "grams": 100 }, { "label": "Regular (~150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 240, "protein": 6, "carbs": 28, "fat": 12, "fiber": 2.5 }, "image": "Veggie_Strips_served_202604210052.jpeg" },
    { "id": "bk_chicken_nuggets_9", "name": "Chicken Nuggets 9pc (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 9 }, "servingOptions": [{ "label": "6 Pieces (~120g)", "grams": 120 }, { "label": "9 Pieces (~180g)", "grams": 180 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 255, "protein": 13, "carbs": 20, "fat": 13, "fiber": 1 }, "image": "Chicken_Nuggets_9pc_202604210052.jpeg" },
    { "id": "bk_mozzarella_sticks", "name": "Mozzarella Sticks (Burger King)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 3 }, "servingOptions": [{ "label": "3 Pieces (~90g)", "grams": 90 }, { "label": "6 Pieces (~180g)", "grams": 180 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 288, "protein": 11, "carbs": 27, "fat": 15, "fiber": 1 }, "image": "Mozzarella_Sticks_served_202604210052.jpeg" },

    // SHAKES & DESSERTS
    { "id": "bk_chocolate_shake", "name": "Chocolate Thick Shake (Burger King)", "category": "beverages", "subcategory": "Shakes", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 300 }, "servingOptions": [{ "label": "Regular (300ml)", "grams": 315 }, { "label": "Large (450ml)", "grams": 472 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 122, "protein": 3.5, "carbs": 20, "fat": 3.5, "fiber": 0.3 }, "image": "Chocolate_Thick_Shake_202604210052.jpeg" },
    { "id": "bk_strawberry_shake", "name": "Strawberry Thick Shake (Burger King)", "category": "beverages", "subcategory": "Shakes", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 300 }, "servingOptions": [{ "label": "Regular (300ml)", "grams": 315 }, { "label": "Large (450ml)", "grams": 472 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 118, "protein": 3.2, "carbs": 19.5, "fat": 3.2, "fiber": 0.2 }, "image": "Strawberry_Thick_Shake_202604210052.jpeg" },
    { "id": "bk_vanilla_shake", "name": "Vanilla Thick Shake (Burger King)", "category": "beverages", "subcategory": "Shakes", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 300 }, "servingOptions": [{ "label": "Regular (300ml)", "grams": 315 }, { "label": "Large (450ml)", "grams": 472 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 116, "protein": 3.2, "carbs": 19, "fat": 3.2, "fiber": 0 }, "image": "Vanilla_Thick_Shake_202604210052.jpeg" },
    { "id": "bk_soft_serve", "name": "Soft Serve Ice Cream (Burger King)", "category": "snacks", "subcategory": "Dessert", "servingType": "quantity", "defaultServing": { "unit": "cone", "amount": 1 }, "servingOptions": [{ "label": "Small Cone (~100g)", "grams": 100 }, { "label": "Cup (~130g)", "grams": 130 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 170, "protein": 4, "carbs": 24, "fat": 6.5, "fiber": 0 }, "image": "Soft_Serve_Ice_202604210052.jpeg" },
    { "id": "bk_bk_fusion", "name": "BK Fusion Sundae (Burger King)", "category": "snacks", "subcategory": "Dessert", "servingType": "quantity", "defaultServing": { "unit": "cup", "amount": 1 }, "servingOptions": [{ "label": "Regular (~180g)", "grams": 180 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 195, "protein": 4.5, "carbs": 28, "fat": 7.5, "fiber": 0.5 }, "image": "BK_Fusion_Sundae_202604210052.jpeg" },
    { "id": "bk_cold_coffee", "name": "Cold Coffee (Burger King)", "category": "beverages", "subcategory": "Coffee", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 300 }, "servingOptions": [{ "label": "Regular (300ml)", "grams": 315 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 95, "protein": 2.5, "carbs": 15, "fat": 3, "fiber": 0 }, "image": "Cold_Coffee_served_202604210052.jpeg" },
    { "id": "bk_hot_coffee", "name": "Hot Coffee / BK Cafe (Burger King)", "category": "beverages", "subcategory": "Coffee", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 240 }, "servingOptions": [{ "label": "Regular Cup (240ml)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 40, "protein": 1.5, "carbs": 6, "fat": 1, "fiber": 0 }, "image": "Hot_Coffee_BK_202604210052.jpeg" },


    // ==========================================
    // 🍕 DOMINO'S INDIA - MISSING VEG PIZZAS
    // ==========================================
    { "id": "dominos_4_cheese_pizza", "name": "The 4 Cheese Pizza (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Regular Slice (~60g)", "grams": 60 }, { "label": "1 Medium Slice (~85g)", "grams": 85 }, { "label": "2 Regular Slices", "grams": 120 }, { "label": "2 Medium Slices", "grams": 170 }, { "label": "Whole Regular (~360g)", "grams": 360 }, { "label": "Whole Medium (~510g)", "grams": 510 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 310, "protein": 13, "carbs": 32, "fat": 14, "fiber": 1.5 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "4_Cheese_Pizza_202604210052.jpeg" },
    { "id": "dominos_veg_extravaganza", "name": "Veg Extravaganza Pizza (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Regular Slice (~65g)", "grams": 65 }, { "label": "1 Medium Slice (~90g)", "grams": 90 }, { "label": "2 Regular Slices", "grams": 130 }, { "label": "2 Medium Slices", "grams": 180 }, { "label": "Whole Regular (~390g)", "grams": 390 }, { "label": "Whole Medium (~550g)", "grams": 550 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 258, "protein": 10, "carbs": 34, "fat": 9, "fiber": 2.5 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "veg_extravaganza_pizza.png" },
    { "id": "dominos_cheese_n_corn", "name": "Cheese N Corn Pizza (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Regular Slice (~60g)", "grams": 60 }, { "label": "1 Medium Slice (~85g)", "grams": 85 }, { "label": "2 Regular Slices", "grams": 120 }, { "label": "2 Medium Slices", "grams": 170 }, { "label": "Whole Regular (~360g)", "grams": 360 }, { "label": "Whole Medium (~510g)", "grams": 510 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 265, "protein": 10, "carbs": 34, "fat": 10, "fiber": 1.8 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "Cheese_N_Corn_202604210052.jpeg" },
    { "id": "dominos_fresh_veggie", "name": "Fresh Veggie Pizza (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Regular Slice (~55g)", "grams": 55 }, { "label": "1 Medium Slice (~80g)", "grams": 80 }, { "label": "Whole Regular (~330g)", "grams": 330 }, { "label": "Whole Medium (~480g)", "grams": 480 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 230, "protein": 8.5, "carbs": 33, "fat": 7, "fiber": 2.5 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "Fresh_Veggie_Pizza_202604210052.jpeg" },
    { "id": "dominos_paneer_makhani", "name": "Paneer Makhani Pizza (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Regular Slice (~60g)", "grams": 60 }, { "label": "1 Medium Slice (~85g)", "grams": 85 }, { "label": "2 Regular Slices", "grams": 120 }, { "label": "Whole Regular (~360g)", "grams": 360 }, { "label": "Whole Medium (~510g)", "grams": 510 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 272, "protein": 11.5, "carbs": 31, "fat": 11.5, "fiber": 2 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "Paneer_Makhani_Pizza_202604210052_2.jpeg" },
    { "id": "dominos_indi_tandoori_paneer", "name": "Indi Tandoori Paneer Pizza (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Regular Slice (~62g)", "grams": 62 }, { "label": "1 Medium Slice (~88g)", "grams": 88 }, { "label": "2 Regular Slices", "grams": 124 }, { "label": "Whole Regular (~372g)", "grams": 372 }, { "label": "Whole Medium (~528g)", "grams": 528 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 268, "protein": 11, "carbs": 31, "fat": 11, "fiber": 2 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "Restaurant_pizza_on_202604210052.jpeg" },
    { "id": "dominos_moroccan_spice_pasta_veg", "name": "Moroccan Spice Pasta Pizza Veg (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Regular Slice (~75g)", "grams": 75 }, { "label": "1 Medium Slice (~100g)", "grams": 100 }, { "label": "Whole Regular (~450g)", "grams": 450 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 255, "protein": 9, "carbs": 35, "fat": 9, "fiber": 2.5 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "Moroccan_Spice_Pasta_202604210052.jpeg" },
    { "id": "dominos_achari_do_pyaza", "name": "Achari Do Pyaza Pizza (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Regular Slice (~62g)", "grams": 62 }, { "label": "1 Medium Slice (~88g)", "grams": 88 }, { "label": "Whole Regular (~372g)", "grams": 372 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 252, "protein": 9.5, "carbs": 32, "fat": 9.5, "fiber": 2.5 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "Achari_Do_Pyaza_202604210052.jpeg" },

    // ==========================================
    // 🍕 DOMINO'S INDIA - MISSING NON-VEG PIZZAS
    // ==========================================
    { "id": "dominos_pepper_bbq_onion", "name": "Pepper Barbecue & Onion Pizza (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Regular Slice (~62g)", "grams": 62 }, { "label": "1 Medium Slice (~88g)", "grams": 88 }, { "label": "2 Regular Slices", "grams": 124 }, { "label": "Whole Regular (~372g)", "grams": 372 }, { "label": "Whole Medium (~528g)", "grams": 528 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 262, "protein": 11, "carbs": 31, "fat": 10.5, "fiber": 2 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "Pepper_Barbecue_Onion_202604210052.jpeg" },
    { "id": "dominos_chicken_sausage", "name": "Chicken Sausage Pizza (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Regular Slice (~62g)", "grams": 62 }, { "label": "1 Medium Slice (~88g)", "grams": 88 }, { "label": "2 Regular Slices", "grams": 124 }, { "label": "Whole Regular (~372g)", "grams": 372 }, { "label": "Whole Medium (~528g)", "grams": 528 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 268, "protein": 11.5, "carbs": 31, "fat": 11, "fiber": 1.8 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "chicken_sausage_pizza.png" },
    { "id": "dominos_chicken_fiesta", "name": "Chicken Fiesta Pizza (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Regular Slice (~65g)", "grams": 65 }, { "label": "1 Medium Slice (~90g)", "grams": 90 }, { "label": "2 Regular Slices", "grams": 130 }, { "label": "Whole Regular (~390g)", "grams": 390 }, { "label": "Whole Medium (~550g)", "grams": 550 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 278, "protein": 12.5, "carbs": 30, "fat": 11.5, "fiber": 2 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "Chicken_Fiesta_Pizza_202604210052.jpeg" },
    { "id": "dominos_indi_chicken_tikka", "name": "Indi Chicken Tikka Pizza (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Regular Slice (~65g)", "grams": 65 }, { "label": "1 Medium Slice (~90g)", "grams": 90 }, { "label": "2 Regular Slices", "grams": 130 }, { "label": "Whole Regular (~390g)", "grams": 390 }, { "label": "Whole Medium (~550g)", "grams": 550 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 275, "protein": 12.5, "carbs": 30, "fat": 11, "fiber": 2 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "Chicken_Pizza_Pizza_202604210052.jpeg" },
    { "id": "dominos_keema_do_pyaza", "name": "Keema Do Pyaza Pizza (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Regular Slice (~65g)", "grams": 65 }, { "label": "1 Medium Slice (~92g)", "grams": 92 }, { "label": "2 Regular Slices", "grams": 130 }, { "label": "Whole Regular (~390g)", "grams": 390 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 270, "protein": 13, "carbs": 29, "fat": 11.5, "fiber": 2 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "Keema_Do_Pyaza_202604210052.jpeg" },
    { "id": "dominos_moroccan_spice_pasta_nonveg", "name": "Moroccan Spice Pasta Pizza Non-Veg (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Regular Slice (~75g)", "grams": 75 }, { "label": "1 Medium Slice (~100g)", "grams": 100 }, { "label": "Whole Regular (~450g)", "grams": 450 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 262, "protein": 11, "carbs": 33, "fat": 10, "fiber": 2.5 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "Moroccan_Spice_Pasta_202604210052.jpeg" },
    { "id": "dominos_creamy_tomato_pasta_nonveg", "name": "Creamy Tomato Pasta Pizza Non-Veg (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Regular Slice (~75g)", "grams": 75 }, { "label": "1 Medium Slice (~100g)", "grams": 100 }, { "label": "Whole Regular (~450g)", "grams": 450 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 258, "protein": 11, "carbs": 33, "fat": 9.5, "fiber": 2 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "Creamy_Tomato_Pasta_202604210052.jpeg" },

    // ==========================================
    // 🐔 DOMINO'S INDIA - CHICKEN WINGS
    // ==========================================
    { "id": "dominos_chicken_wings_peri_peri", "name": "Roasted Chicken Wings Peri Peri (Domino's)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 4 }, "servingOptions": [{ "label": "2 Wings (~100g)", "grams": 100 }, { "label": "4 Wings (~200g)", "grams": 200 }, { "label": "8 Wings (~400g)", "grams": 400 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 210, "protein": 19, "carbs": 5, "fat": 13, "fiber": 0.5 }, "image": "Peri_Peri_Chicken_202604210052.jpeg" },
    { "id": "dominos_chicken_wings_bbq", "name": "BBQ Roasted Chicken Wings (Domino's)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 4 }, "servingOptions": [{ "label": "2 Wings (~100g)", "grams": 100 }, { "label": "4 Wings (~200g)", "grams": 200 }, { "label": "8 Wings (~400g)", "grams": 400 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 215, "protein": 18.5, "carbs": 6, "fat": 13.5, "fiber": 0.5 }, "image": "BBQ_Roasted_Chicken_202604210052.jpeg" },

    // ==========================================
    // 🌮 DOMINO'S INDIA - MISSING SIDES
    // ==========================================
    { "id": "dominos_paneer_tikka_stuffed_gb", "name": "Paneer Tikka Stuffed Garlic Bread (Domino's)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 2 }, "servingOptions": [{ "label": "1 Piece (~65g)", "grams": 65 }, { "label": "2 Pieces (~130g)", "grams": 130 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 298, "protein": 10, "carbs": 36, "fat": 13, "fiber": 1.5 }, "image": "Paneer_Tikka_Stuffed_202604210052.jpeg" },
    { "id": "dominos_chicken_pepperoni_stuffed_gb", "name": "Chicken Pepperoni Stuffed Garlic Bread (Domino's)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 2 }, "servingOptions": [{ "label": "1 Piece (~70g)", "grams": 70 }, { "label": "2 Pieces (~140g)", "grams": 140 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 318, "protein": 12, "carbs": 34, "fat": 15, "fiber": 1.5 }, "image": "Chicken_Pepperoni_Stuffed_202604210052.jpeg" },
    { "id": "dominos_cheese_jalapeno_dip", "name": "Cheese Jalapeno Dip (Domino's)", "category": "snacks", "subcategory": "Fast Food", "servingType": "weight", "defaultServing": { "unit": "cup", "amount": 1 }, "servingOptions": [{ "label": "1 Cup (~30g)", "grams": 30 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 290, "protein": 5, "carbs": 8, "fat": 26, "fiber": 0.5 }, "image": "Cheese_Jalapeno_Dip_202604210052.jpeg" },
    { "id": "dominos_red_velvet_lava_cake", "name": "Red Velvet Lava Cake (Domino's)", "category": "snacks", "subcategory": "Dessert", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (~80g)", "grams": 80 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 355, "protein": 5, "carbs": 48, "fat": 16, "fiber": 1.5 }, "image": "Red_Velvet_Cake_202604210108.jpeg" },
    { "id": "dominos_butterscotch_mousse_cake", "name": "Butterscotch Mousse Cake (Domino's)", "category": "snacks", "subcategory": "Dessert", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (~85g)", "grams": 85 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 345, "protein": 5, "carbs": 44, "fat": 16, "fiber": 1 }, "image": "Butterscotch_Mousse_Cake_202604210052.jpeg" },
    { "id": "dominos_brownie_fantasy", "name": "Brownie Fantasy (Domino's)", "category": "snacks", "subcategory": "Dessert", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Brownie (~80g)", "grams": 80 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 390, "protein": 5.5, "carbs": 52, "fat": 18, "fiber": 2 }, "image": "Brownie_Fantasy_served_202604210052.jpeg" },
    { "id": "dominos_chicken_parcel", "name": "Chicken Parcel (Domino's)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (~100g)", "grams": 100 }, { "label": "2 Pieces (~200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 268, "protein": 13, "carbs": 27, "fat": 12, "fiber": 1.5 }, "image": "Chicken_Parcel_served_202604210052.jpeg" },
    { "id": "dominos_veg_parcel", "name": "Paneer Zingy Veg Parcel (Domino's)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (~100g)", "grams": 100 }, { "label": "2 Pieces (~200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 248, "protein": 9, "carbs": 28, "fat": 11.5, "fiber": 2 }, "image": "Paneer_Zingy_Veg_202604210052.jpeg" },
    { "id": "dominos_crunchy_strips", "name": "Crunchy Strips (Domino's)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "serving", "amount": 1 }, "servingOptions": [{ "label": "1 Pack (~60g)", "grams": 60 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 445, "protein": 9, "carbs": 58, "fat": 20, "fiber": 3 }, "image": "Crunchy_Strips_served_202604210052.jpeg" },
    { "id": "dominos_potato_cheese_shots", "name": "Potato Cheese Shots (Domino's)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 6 }, "servingOptions": [{ "label": "6 Pieces (~120g)", "grams": 120 }, { "label": "12 Pieces (~240g)", "grams": 240 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 248, "protein": 5.5, "carbs": 28, "fat": 13, "fiber": 2 }, "image": "Potato_Cheese_Shots_202604210052.jpeg" },
    { "id": "dominos_taco_mexicana_veg", "name": "Taco Mexicana Veg (Domino's)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Taco (~120g)", "grams": 120 }, { "label": "2 Tacos (~240g)", "grams": 240 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 225, "protein": 7, "carbs": 28, "fat": 10, "fiber": 2.5 }, "image": "Taco_Mexicana_Veg_202604210052.jpeg" },
    { "id": "dominos_taco_mexicana_nonveg", "name": "Taco Mexicana Non-Veg (Domino's)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Taco (~125g)", "grams": 125 }, { "label": "2 Tacos (~250g)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 232, "protein": 9.5, "carbs": 27, "fat": 11, "fiber": 2 }, "image": "Taco_Mexicana_Non-Veg_202604210052.jpeg" },
    { "id": "dominos_crinkle_fries", "name": "Crinkle Fries (Domino's)", "category": "snacks", "subcategory": "Fast Food", "servingType": "quantity", "defaultServing": { "unit": "serving", "amount": 1 }, "servingOptions": [{ "label": "Regular (~130g)", "grams": 130 }, { "label": "Large (~200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 322, "protein": 3.5, "carbs": 42, "fat": 15, "fiber": 3.5 }, "image": "Crinkle_Fries_on_202604210052.jpeg" },

    // ==========================================
    // 🍝 DOMINO'S INDIA - PASTA
    // ==========================================
    { "id": "dominos_pasta_creamy_tomato_veg", "name": "Creamy Tomato Pasta Veg (Domino's)", "category": "snacks", "subcategory": "Fast Food", "servingType": "weight", "defaultServing": { "unit": "serving", "amount": 1 }, "servingOptions": [{ "label": "1 Box (~260g)", "grams": 260 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 178, "protein": 6, "carbs": 26, "fat": 5.5, "fiber": 2.5 }, "image": "Creamy_Tomato_Pasta_202604210052.jpeg" },
    { "id": "dominos_pasta_tikka_masala", "name": "Tikka Masala Pasta (Domino's)", "category": "snacks", "subcategory": "Fast Food", "servingType": "weight", "defaultServing": { "unit": "serving", "amount": 1 }, "servingOptions": [{ "label": "1 Box (~260g)", "grams": 260 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 185, "protein": 7, "carbs": 26, "fat": 6, "fiber": 2.5 }, "image": "Tikka_Masala_Pasta_202604210052.jpeg" },
    { "id": "dominos_pasta_cheesy_jalapeno", "name": "Cheesy Jalapeno Pasta (Domino's)", "category": "snacks", "subcategory": "Fast Food", "servingType": "weight", "defaultServing": { "unit": "serving", "amount": 1 }, "servingOptions": [{ "label": "1 Box (~260g)", "grams": 260 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 192, "protein": 7, "carbs": 25, "fat": 7.5, "fiber": 2 }, "image": "Cheesy_Jalapeno_Pasta_202604210052.jpeg" },
    { "id": "dominos_pasta_chicken_creamy_tomato", "name": "Creamy Tomato Pasta Chicken (Domino's)", "category": "snacks", "subcategory": "Fast Food", "servingType": "weight", "defaultServing": { "unit": "serving", "amount": 1 }, "servingOptions": [{ "label": "1 Box (~270g)", "grams": 270 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 188, "protein": 9, "carbs": 24, "fat": 6, "fiber": 2 }, "image": "Creamy_Tomato_Pasta_202604210052.jpeg" },

    // ==========================================
    // 🍕 DOMINO'S INDIA - PIZZA MANIA RANGE (Budget Personal)
    // ==========================================
    { "id": "dominos_pm_golden_corn", "name": "Pizza Mania Golden Corn (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "pizza", "amount": 1 }, "servingOptions": [{ "label": "Whole Personal (~200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 238, "protein": 8.5, "carbs": 33, "fat": 8, "fiber": 2 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "Pizza_Mania_Golden_202604210052.jpeg" },
    { "id": "dominos_pm_margherita", "name": "Pizza Mania Margherita (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "pizza", "amount": 1 }, "servingOptions": [{ "label": "Whole Personal (~180g)", "grams": 180 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 235, "protein": 8, "carbs": 34, "fat": 7.5, "fiber": 2 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "Pizza_Mania_Margherita_202604210052.jpeg" },
    { "id": "dominos_pm_peppy_paneer", "name": "Pizza Mania Peppy Paneer (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "pizza", "amount": 1 }, "servingOptions": [{ "label": "Whole Personal (~200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 252, "protein": 10, "carbs": 31, "fat": 10, "fiber": 2 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "dominos_peppy_paneer.jpeg" },
    { "id": "dominos_pm_chicken_tikka", "name": "Pizza Mania Chicken Tikka (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "pizza", "amount": 1 }, "servingOptions": [{ "label": "Whole Personal (~205g)", "grams": 205 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 258, "protein": 11, "carbs": 31, "fat": 10, "fiber": 2 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "Chicken_Pizza_Pizza_202604210052.jpeg" },
    { "id": "dominos_pm_pepper_bbq", "name": "Pizza Mania Pepper BBQ Chicken (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "pizza", "amount": 1 }, "servingOptions": [{ "label": "Whole Personal (~205g)", "grams": 205 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 255, "protein": 11, "carbs": 31, "fat": 9.5, "fiber": 2 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "BBQ_Chicken_Pizza_202604210052.jpeg" },

    // ==========================================
    // 🫓 DOMINO'S INDIA - PARATHA PIZZA (India Exclusive)
    // ==========================================
    { "id": "dominos_paratha_pizza_veg", "name": "Paratha Pizza Veg (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "pizza", "amount": 1 }, "servingOptions": [{ "label": "Whole Personal (~220g)", "grams": 220 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 262, "protein": 8.5, "carbs": 36, "fat": 10, "fiber": 2.5 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "Paratha_Pizza_Veg_202604210052.jpeg" },
    { "id": "dominos_paratha_pizza_chicken", "name": "Paratha Pizza Chicken (Domino's)", "category": "snacks", "subcategory": "Pizza", "servingType": "quantity", "defaultServing": { "unit": "pizza", "amount": 1 }, "servingOptions": [{ "label": "Whole Personal (~225g)", "grams": 225 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 268, "protein": 11, "carbs": 34, "fat": 11, "fiber": 2.5 }, "cheeseBurst": { "calories": 120, "protein": 5, "carbs": 4, "fat": 9, "fiber": 0 }, "image": "Paratha_Pizza_Chicken_202604210052.jpeg" },

    // ==========================================
    // 🥤 DOMINO'S INDIA - BEVERAGES
    // ==========================================
    { "id": "pepsi_can", "name": "Pepsi", "category": "beverages", "subcategory": "Soft Drinks", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 250 }, "servingOptions": [{"label": "Can 250ml", "grams": 250}, {"label": "Bottle 500ml", "grams": 500}, {"label": "Bottle 600ml", "grams": 600}, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 42, "protein": 0, "carbs": 11, "fat": 0, "fiber": 0 }, "image": "Pepsi_served_on_202604210052.jpeg" },
    { "id": "7up", "name": "7UP", "category": "beverages", "subcategory": "Soft Drinks", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 250 }, "servingOptions": [{ "label": "Can 250ml", "grams": 250 }, { "label": "Bottle 500ml", "grams": 500 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 40, "protein": 0, "carbs": 10, "fat": 0, "fiber": 0 }, "image": "7UP_served_on_202604210052.jpeg" },
    { "id": "mirinda", "name": "Mirinda Orange", "category": "beverages", "subcategory": "Soft Drinks", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 250 }, "servingOptions": [{ "label": "Can 250ml", "grams": 250 }, { "label": "Bottle 500ml", "grams": 500 }, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 44, "protein": 0, "carbs": 11, "fat": 0, "fiber": 0 }, "image": "Mirinda_Orange_served_202604210052.jpeg" },
    { "id": "lipton_ice_tea", "name": "Lipton Ice Tea", "category": "beverages", "subcategory": "Soft Drinks", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 330 }, "servingOptions": [{ "label": "Can 330ml", "grams": 330 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 30, "protein": 0, "carbs": 7.5, "fat": 0, "fiber": 0 }, "image": "Lipton_Ice_Tea_202604210052.jpeg" },
    { "id": "water_bottle", "name": "Mineral Water", "category": "beverages", "subcategory": "Soft Drinks", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 500 }, "servingOptions": [{ "label": "500ml", "grams": 500 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 0, "protein": 0, "carbs": 0, "fat": 0, "fiber": 0 }, "image": "Mineral_water_served_202604210052.jpeg" },


    { "id": "fresh_lime_soda_sweet", "name": "Fresh Lime Soda (Sweet)", "category": "beverages", "subcategory": "Fresh Juices", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (250ml)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 44, "protein": 0.1, "carbs": 11.2, "fat": 0, "fiber": 0 }, "image": "Fresh_Lime_Soda_202604210108.jpeg" },
    { "id": "fresh_lime_soda_salt", "name": "Fresh Lime Soda (Salt)", "category": "beverages", "subcategory": "Fresh Juices", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (250ml)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 10, "protein": 0.1, "carbs": 2.5, "fat": 0, "fiber": 0 }, "image": "Fresh_Lime_Soda_202604210108.jpeg" },
    { "id": "lemon_masala_soda", "name": "Lemon Masala Soda", "category": "beverages", "subcategory": "Fresh Juices", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (250ml)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 25, "protein": 0.2, "carbs": 6, "fat": 0, "fiber": 0 }, "image": "Lemon_Masala_Soda_202604210108.jpeg" },
    { "id": "nannari_sarbath", "name": "Nannari Sarbath", "category": "beverages", "subcategory": "Fresh Juices", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (250ml)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 52, "protein": 0.1, "carbs": 13, "fat": 0, "fiber": 0 }, "image": "Nannari_Sarbath_professional_202604210108.jpeg" },
    { "id": "fresh_lemon_juice", "name": "Fresh Lemon Juice (Sweetened)", "category": "beverages", "subcategory": "Fresh Juices", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (250ml)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 40, "protein": 0.2, "carbs": 10, "fat": 0, "fiber": 0 }, "image": "Fresh_lemon_juice_202604210108.jpeg" },
    { "id": "fresh_watermelon_juice", "name": "Fresh Watermelon Juice", "category": "beverages", "subcategory": "Fresh Juices", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (250ml)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 30, "protein": 0.6, "carbs": 7.6, "fat": 0.2, "fiber": 0.4 }, "image": "Fresh_Watermelon_Juice_202604210108.jpeg" },
    { "id": "fresh_orange_juice", "name": "Fresh Orange Juice", "category": "beverages", "subcategory": "Fresh Juices", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (250ml)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 45, "protein": 0.7, "carbs": 10.4, "fat": 0.2, "fiber": 0.2 }, "image": "Fresh_Orange_Juice_202604210108.jpeg" },
    { "id": "pomegranate_juice", "name": "Fresh Pomegranate Juice", "category": "beverages", "subcategory": "Fresh Juices", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (250ml)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 54, "protein": 0.2, "carbs": 13.1, "fat": 0.3, "fiber": 0.1 }, "image": "Fresh_Pomegranate_Juice_202604210108.jpeg" },
    { "id": "apple_juice_fresh", "name": "Fresh Apple Juice", "category": "beverages", "subcategory": "Fresh Juices", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (250ml)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 46, "protein": 0.1, "carbs": 11.3, "fat": 0.1, "fiber": 0.2 }, "image": "Fresh_Apple_Juice_202604210108.jpeg" },
    { "id": "grape_juice_fresh", "name": "Fresh Grape Juice", "category": "beverages", "subcategory": "Fresh Juices", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{ "label": "Regular Glass (250ml)", "grams": 250 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 60, "protein": 0.4, "carbs": 14.8, "fat": 0.1, "fiber": 0.2 }, "image": "Fresh_grape_juice_202604210108.jpeg" },
    { "id": "cake_dutch_truffle", "name": "Dutch Truffle Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "grams", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (100g)", "grams": 100 }, { "label": "Half Kg Cake", "grams": 500 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 410, "protein": 5, "carbs": 52, "fat": 22, "fiber": 2.5 }, "image": "Dutch_Truffle_Cake_202604210108.jpeg" },
    { "id": "cake_chocolate_mousse", "name": "Chocolate Mousse Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "grams", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (100g)", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 380, "protein": 4.5, "carbs": 44, "fat": 21, "fiber": 2 }, "image": "Chocolate_Mousse_Cake_202604210108.jpeg" },
    { "id": "cake_red_velvet", "name": "Red Velvet Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "grams", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (100g)", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 390, "protein": 4.8, "carbs": 55, "fat": 18, "fiber": 0.8 }, "image": "Red_Velvet_Cake_202604210108.jpeg" },
    { "id": "cake_black_forest", "name": "Black Forest Cake", "category": "snacks", "subcategory": "Cakes", "servingType": "grams", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (100g)", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 330, "protein": 4, "carbs": 48, "fat": 14, "fiber": 1 }, "image": "Black_Forest_Cake_202604210108.jpeg" },
    { "id": "cake_ny_cheesecake", "name": "New York Baked Cheesecake", "category": "snacks", "subcategory": "Cakes", "servingType": "grams", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (120g)", "grams": 120 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 321, "protein": 6.1, "carbs": 25.5, "fat": 22.5, "fiber": 0.4 }, "image": "New_York_Baked_202604210108.jpeg" },
    { "id": "chocolate_brownie", "name": "Chocolate Brownie", "category": "snacks", "subcategory": "Cakes", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (80g)", "grams": 80 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 466, "protein": 5.4, "carbs": 54, "fat": 27, "fiber": 3 }, "image": "Brow-wow-nie_Chocolate_Brownie_202604210052.jpeg" },
    { "id": "choc_dairy_milk", "name": "Cadbury Dairy Milk", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "bar", "amount": 1 }, "servingOptions": [{ "label": "1 Small Bar (13g)", "grams": 13 }, { "label": "1 Regular Bar (50g)", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 530, "protein": 7.3, "carbs": 60.5, "fat": 29.5, "fiber": 0.6 }, "image": "Cadbury_Dairy_Milk_202604210108.jpeg" },
    { "id": "choc_bournville", "name": "Cadbury Bournville (Dark)", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "bar", "amount": 1 }, "servingOptions": [{ "label": "1 Bar (80g)", "grams": 80 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 526, "protein": 5.2, "carbs": 61, "fat": 30, "fiber": 7.2 }, "image": "Cadbury_Bournville_food_202604210108.jpeg" },
    { "id": "choc_5_star", "name": "Cadbury 5 Star", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "bar", "amount": 1 }, "servingOptions": [{ "label": "1 Bar (20g)", "grams": 20 }, { "label": "1 Large Bar (40g)", "grams": 40 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 451, "protein": 3.2, "carbs": 70, "fat": 17.5, "fiber": 0 }, "image": "Cadbury_5_Star_202604210108.jpeg" },
    { "id": "choc_kitkat", "name": "Nestle KitKat", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "2 Fingers (18g)", "grams": 18 }, { "label": "4 Fingers (36g)", "grams": 36 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 502, "protein": 6.8, "carbs": 64.6, "fat": 24, "fiber": 1.6 }, "image": "Nestle_KitKat_food_202604210108.jpeg" },
    { "id": "choc_snickers", "name": "Snickers", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "bar", "amount": 1 }, "servingOptions": [{ "label": "1 Bar (45g)", "grams": 45 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 488, "protein": 8.6, "carbs": 60.5, "fat": 23.5, "fiber": 1.5 }, "image": "Snickers_food_photography_202604210108.jpeg" },
    { "id": "choc_ferrero_rocher", "name": "Ferrero Rocher", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (12.5g)", "grams": 12.5 }, { "label": "3 Pieces (37.5g)", "grams": 37.5 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 603, "protein": 8.2, "carbs": 44.4, "fat": 42.7, "fiber": 4.1 }, "image": "Ferrero_Rocher_gourmet_202604210108.jpeg" },
    { "id": "choc_amul_dark", "name": "Amul Dark Chocolate (99% / 75%)", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "bar", "amount": 1 }, "servingOptions": [{ "label": "2 Squares (15g)", "grams": 15 }, { "label": "1 Bar (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 587, "protein": 10, "carbs": 33, "fat": 50, "fiber": 14 }, "image": "Amul_Dark_Chocolate_202604210108.jpeg" },
    { "id": "moong_dal_sprouts", "name": "Moong Dal Sprouts (Raw)", "category": "curries", "subcategory": "Dals & Pulses", "servingType": "grams", "defaultServing": { "unit": "cup", "amount": 1 }, "servingOptions": [{ "label": "1 Cup (100g)", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 30, "protein": 3.0, "carbs": 5.9, "fat": 0.2, "fiber": 1.8 }, "image": "Moong_Dal_Sprouts_202604210108.jpeg" },
    { "id": "rajma_curry", "name": "Rajma Curry (Kidney Beans)", "category": "curries", "subcategory": "Dals & Pulses", "servingType": "grams", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "1 Bowl (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 110, "protein": 5.5, "carbs": 15, "fat": 3.5, "fiber": 4.5 }, "image": "Rajma_Curry_gourmet_202604210108.jpeg" },
    { "id": "chana_masala", "name": "Chana Masala (Chole)", "category": "curries", "subcategory": "Dals & Pulses", "servingType": "grams", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "1 Bowl (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 145, "protein": 6, "carbs": 18, "fat": 6, "fiber": 5 }, "image": "Chana_Masala_gourmet_202604210108.jpeg" },
    { "id": "toor_dal_yellow", "name": "Yellow Toor Dal (Cooked)", "category": "curries", "subcategory": "Dals & Pulses", "servingType": "grams", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "1 Bowl (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 105, "protein": 5, "carbs": 16, "fat": 2, "fiber": 4 }, "image": "Yellow_Toor_Dal_202604210108.jpeg" },
    { "id": "masoor_dal_red", "name": "Red Masoor Dal (Cooked)", "category": "curries", "subcategory": "Dals & Pulses", "servingType": "grams", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "1 Bowl (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 116, "protein": 9, "carbs": 20, "fat": 0.4, "fiber": 8 }, "image": "Red_Masoor_Dal_202604210108.jpeg" },
    { "id": "urad_dal_black", "name": "Black Urad Dal / Dal Makhani (Cooked)", "category": "curries", "subcategory": "Dals & Pulses", "servingType": "grams", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "1 Bowl (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 130, "protein": 4.5, "carbs": 12, "fat": 7.5, "fiber": 3.5 }, "image": "Black_Urad_Dal_202604210108.jpeg" },
    { "id": "lobia_curry", "name": "Lobia Curry (Black Eyed Peas)", "category": "curries", "subcategory": "Dals & Pulses", "servingType": "grams", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "1 Bowl (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 105, "protein": 4, "carbs": 15, "fat": 3, "fiber": 3.8 }, "image": "Lobia_Curry_gourmet_202604210108.jpeg" },
    { "id": "sweet_mysore_pak", "name": "Mysore Pak (Ghee)", "category": "snacks", "subcategory": "Sweets", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (40g)", "grams": 40 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 526, "protein": 4.2, "carbs": 58, "fat": 31, "fiber": 0.8 }, "image": "Mysore_Pak_sweet_202604210052.jpeg" },
    { "id": "sweet_boondi_laddu", "name": "Boondhi Laddu", "category": "snacks", "subcategory": "Sweets", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (45g)", "grams": 45 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 480, "protein": 8, "carbs": 62, "fat": 23, "fiber": 1 }, "image": "Boondhi_Laddu_gourmet_202604210108.jpeg" },
    { "id": "sweet_badam_halwa", "name": "Badam Halwa", "category": "snacks", "subcategory": "Sweets", "servingType": "grams", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Portion (50g)", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 510, "protein": 8.5, "carbs": 44, "fat": 34, "fiber": 4 }, "image": "Badam_Halwa_gourmet_202604210108.jpeg" },
    { "id": "sweet_wheat_halwa", "name": "Wheat Halwa (Tirunelveli Halwa)", "category": "snacks", "subcategory": "Sweets", "servingType": "grams", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Portion (50g)", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 420, "protein": 3.5, "carbs": 55, "fat": 20, "fiber": 1.2 }, "image": "Wheat_Halwa_gourmet_202604210108.jpeg" },
    { "id": "sweet_badusha", "name": "Badusha / Balushahi", "category": "snacks", "subcategory": "Sweets", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (50g)", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 456, "protein": 4.1, "carbs": 51, "fat": 26, "fiber": 0.5 }, "image": "Badusha_served_on_202604210052.jpeg" },
    { "id": "sweet_chandrakala", "name": "Chandrakala", "category": "snacks", "subcategory": "Sweets", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (60g)", "grams": 60 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 410, "protein": 5, "carbs": 54, "fat": 19, "fiber": 1 }, "image": "Food_photography_Chandrakala_202604210108.jpeg" },
    { "id": "sweet_basundi", "name": "Basundi", "category": "snacks", "subcategory": "Sweets", "servingType": "volume", "defaultServing": { "unit": "bowl", "amount": 1 }, "servingOptions": [{ "label": "1 Bowl (150ml)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 210, "protein": 6, "carbs": 24, "fat": 10, "fiber": 0 }, "image": "Food_photography_Basundi_202604210108.jpeg" },
    { "id": "sweet_angoor_jamun", "name": "Angoor Jamun", "category": "snacks", "subcategory": "Sweets", "servingType": "count", "defaultServing": { "unit": "pieces", "amount": 3 }, "servingOptions": [{ "label": "3 Pieces (45g)", "grams": 45 }, { "label": "5 Pieces (75g)", "grams": 75 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 300, "protein": 6, "carbs": 48, "fat": 9, "fiber": 0 }, "image": "Angoor_Jamun_gourmet_202604210108.jpeg" },
    { "id": "sweet_gulab_jamun", "name": "Gulab Jamun", "category": "snacks", "subcategory": "Sweets", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "2 Pieces (80g)", "grams": 80 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 320, "protein": 5, "carbs": 54, "fat": 10, "fiber": 0 }, "image": "Gulab_Jamun_gourmet_202604210108.jpeg" },
    { "id": "sweet_kaju_katli", "name": "Kaju Katli", "category": "snacks", "subcategory": "Sweets", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (15g)", "grams": 15 }, { "label": "2 Pieces (30g)", "grams": 30 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 480, "protein": 9, "carbs": 56, "fat": 25, "fiber": 2 }, "image": "Kaju_Katli_gourmet_202604210108.jpeg" },
    { "id": "sweet_jalebi", "name": "Jalebi", "category": "snacks", "subcategory": "Sweets", "servingType": "grams", "defaultServing": { "unit": "pieces", "amount": 2 }, "servingOptions": [{ "label": "2 Pieces (50g)", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 385, "protein": 2.5, "carbs": 76, "fat": 8, "fiber": 0.5 }, "image": "Jalebi_plating_on_202604210108.jpeg" },
    { "id": "sweet_doodh_peda", "name": "Doodh Peda", "category": "snacks", "subcategory": "Sweets", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (20g)", "grams": 20 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 380, "protein": 9.5, "carbs": 62, "fat": 10, "fiber": 0 }, "image": "Doodh_Peda_gourmet_202604210108.jpeg" },
    { "id": "sweet_kesar_peda", "name": "Kesar Peda", "category": "snacks", "subcategory": "Sweets", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (25g)", "grams": 25 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 385, "protein": 9.2, "carbs": 61, "fat": 11, "fiber": 0 }, "image": "Kesar_Peda_gourmet_202604210108.jpeg" },
    { "id": "biscuit_hide_n_seek", "name": "Parle Hide & Seek", "category": "snacks", "subcategory": "Biscuits", "servingType": "count", "defaultServing": { "unit": "biscuits", "amount": 2 }, "servingOptions": [{ "label": "2 Biscuits (16g)", "grams": 16 }, { "label": "5 Biscuits (40g)", "grams": 40 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 483, "protein": 5.4, "carbs": 73, "fat": 18.8, "fiber": 3 }, "image": "Parle_Hide_&_202604210108.jpeg" },
    { "id": "biscuit_bourbon", "name": "Britannia Bourbon", "category": "snacks", "subcategory": "Biscuits", "servingType": "count", "defaultServing": { "unit": "biscuits", "amount": 2 }, "servingOptions": [{ "label": "2 Biscuits (25g)", "grams": 25 }, { "label": "4 Biscuits (50g)", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 486, "protein": 5, "carbs": 69.5, "fat": 21, "fiber": 1 }, "image": "Britannia_Bourbon_food_202604210108.jpeg" },
    { "id": "biscuit_dark_fantasy", "name": "Dark Fantasy Choco Fills", "category": "snacks", "subcategory": "Biscuits", "servingType": "count", "defaultServing": { "unit": "cookie", "amount": 1 }, "servingOptions": [{ "label": "1 Cookie (12.5g)", "grams": 12.5 }, { "label": "2 Cookies (25g)", "grams": 25 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 512, "protein": 5.1, "carbs": 64.9, "fat": 25.8, "fiber": 2.5 }, "image": "biscuit_goodday.jpeg" },
    { "id": "biscuit_milk_bikis", "name": "Britannia Milk Bikis", "category": "snacks", "subcategory": "Biscuits", "servingType": "count", "defaultServing": { "unit": "biscuits", "amount": 2 }, "servingOptions": [{ "label": "4 Biscuits (25g)", "grams": 25 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 454, "protein": 7.5, "carbs": 74, "fat": 14.5, "fiber": 1.2 }, "image": "Britannia_Milk_Bikis_202604210108.jpeg" },
    { "id": "biscuit_oreo", "name": "Oreo Cookies", "category": "snacks", "subcategory": "Biscuits", "servingType": "count", "defaultServing": { "unit": "cookies", "amount": 3 }, "servingOptions": [{ "label": "3 Cookies (34g)", "grams": 34 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 480, "protein": 5, "carbs": 70, "fat": 20, "fiber": 3 }, "image": "Oreo_Cookies_gourmet_202604210108.jpeg" },
    { "id": "biscuit_monaco", "name": "Parle Monaco", "category": "snacks", "subcategory": "Biscuits", "servingType": "count", "defaultServing": { "unit": "biscuits", "amount": 5 }, "servingOptions": [{ "label": "5 Biscuits (17.5g)", "grams": 17.5 }, { "label": "10 Biscuits (35g)", "grams": 35 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 501, "protein": 7, "carbs": 68, "fat": 22.5, "fiber": 2 }, "image": "Parle_Monaco_food_202604210108.jpeg" },
    { "id": "biscuit_50_50", "name": "Britannia 50/50 Sweet & Salty", "category": "snacks", "subcategory": "Biscuits", "servingType": "count", "defaultServing": { "unit": "biscuits", "amount": 5 }, "servingOptions": [{ "label": "5 Biscuits (18g)", "grams": 18 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 488, "protein": 7.4, "carbs": 68.3, "fat": 20.6, "fiber": 2.2 }, "image": "biscuit_marie.jpeg" },
    { "id": "wafer_vanilla", "name": "Vanilla Cream Wafers", "category": "snacks", "subcategory": "Biscuits", "servingType": "grams", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "Small Pack (45g)", "grams": 45 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 500, "protein": 3.5, "carbs": 68, "fat": 24, "fiber": 0.5 }, "image": "Vanilla_Cream_Wafers_202604210108.jpeg" },
    { "id": "wafer_chocolate", "name": "Chocolate Cream Wafers", "category": "snacks", "subcategory": "Biscuits", "servingType": "grams", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "Small Pack (45g)", "grams": 45 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 510, "protein": 4.5, "carbs": 67, "fat": 25, "fiber": 2 }, "image": "Chocolate_Cream_Wafers_202604210108.jpeg" },
    { "id": "wafer_strawberry", "name": "Strawberry Cream Wafers", "category": "snacks", "subcategory": "Biscuits", "servingType": "grams", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "Small Pack (45g)", "grams": 45 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 495, "protein": 3.2, "carbs": 69, "fat": 23.5, "fiber": 0.4 }, "image": "Strawberry_Cream_Wafers_202604210108.jpeg" },
    { "id": "wafer_orange", "name": "Orange Cream Wafers", "category": "snacks", "subcategory": "Biscuits", "servingType": "grams", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "Small Pack (45g)", "grams": 45 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 490, "protein": 3.3, "carbs": 69, "fat": 23, "fiber": 0.5 }, "image": "Orange_Cream_Wafers_202604210108.jpeg" },
    { "id": "wafer_pineapple", "name": "Pineapple Cream Wafers", "category": "snacks", "subcategory": "Biscuits", "servingType": "grams", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "Small Pack (45g)", "grams": 45 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 490, "protein": 3.2, "carbs": 69.5, "fat": 22.5, "fiber": 0.5 }, "image": "Pineapple_Cream_Wafers_202604210108.jpeg" },
    { "id": "cheese_amul_processed", "name": "Amul Processed Cheese (Slice/Cube)", "category": "dairy", "subcategory": "Cheese", "servingType": "count", "defaultServing": { "unit": "slice/cube", "amount": 1 }, "servingOptions": [{ "label": "1 Slice/Cube (20g)", "grams": 20 }, { "label": "2 Slices/Cubes (40g)", "grams": 40 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 314, "protein": 20, "carbs": 1.5, "fat": 26, "fiber": 0 }, "image": "Amul_Processed_Cheese_202604210108.jpeg" },
    { "id": "cheese_cheddar", "name": "Cheddar Cheese", "category": "dairy", "subcategory": "Cheese", "servingType": "grams", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (28g)", "grams": 28 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 403, "protein": 24.9, "carbs": 1.3, "fat": 33.1, "fiber": 0 }, "image": "Cheddar_cheese_gourmet_202604210108.jpeg" },
    { "id": "cheese_mozzarella", "name": "Mozzarella Cheese (Pizza Cheese)", "category": "dairy", "subcategory": "Cheese", "servingType": "grams", "defaultServing": { "unit": "cup", "amount": 1 }, "servingOptions": [{ "label": "1/4 Cup Grated (28g)", "grams": 28 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 280, "protein": 28, "carbs": 3.1, "fat": 17.1, "fiber": 0 }, "image": "Mozzarella_cheese_gourmet_202604210108.jpeg" },
    { "id": "cheese_parmesan", "name": "Parmesan Cheese (Grated)", "category": "dairy", "subcategory": "Cheese", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (5g)", "grams": 5 }, { "label": "1/4 Cup (25g)", "grams": 25 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 431, "protein": 38.5, "carbs": 4.1, "fat": 29.2, "fiber": 0 }, "image": "Parmesan_cheese_gourmet_202604210108.jpeg" },
    { "id": "cheese_feta", "name": "Feta Cheese", "category": "dairy", "subcategory": "Cheese", "servingType": "grams", "defaultServing": { "unit": "crumble", "amount": 1 }, "servingOptions": [{ "label": "1/4 Cup Crumbled (38g)", "grams": 38 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 264, "protein": 14.2, "carbs": 4.1, "fat": 21.3, "fiber": 0 }, "image": "Feta_cheese_gourmet_202604210108.jpeg" },
    { "id": "roll_classic_veg", "name": "Classic Veg Frankie / Roll", "category": "meals", "subcategory": "Wraps & Rolls", "servingType": "count", "defaultServing": { "unit": "roll", "amount": 1 }, "servingOptions": [{ "label": "1 Roll (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 175, "protein": 4.5, "carbs": 26, "fat": 6, "fiber": 3.5 }, "image": "Classic_Veg_Frankie_202604210108.jpeg" },
    { "id": "roll_tawa_paneer", "name": "Tawa Paneer Frankie / Roll", "category": "meals", "subcategory": "Wraps & Rolls", "servingType": "count", "defaultServing": { "unit": "roll", "amount": 1 }, "servingOptions": [{ "label": "1 Roll (220g)", "grams": 220 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 220, "protein": 9.5, "carbs": 24, "fat": 10, "fiber": 2.5 }, "image": "Tawa_Paneer_Frankie_202604210108.jpeg" },
    { "id": "roll_schezwan_paneer", "name": "Schezwan Paneer Frankie / Roll", "category": "meals", "subcategory": "Wraps & Rolls", "servingType": "count", "defaultServing": { "unit": "roll", "amount": 1 }, "servingOptions": [{ "label": "1 Roll (220g)", "grams": 220 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 230, "protein": 9, "carbs": 25, "fat": 11, "fiber": 2.2 }, "image": "Schezwan_Paneer_Frankie_202604210108.jpeg" },
    { "id": "roll_chicken_tikka", "name": "Chicken Tikka Frankie / Roll", "category": "meals", "subcategory": "Wraps & Rolls", "servingType": "count", "defaultServing": { "unit": "roll", "amount": 1 }, "servingOptions": [{ "label": "1 Roll (230g)", "grams": 230 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 210, "protein": 14, "carbs": 22, "fat": 7.5, "fiber": 2 }, "image": "Chicken_Frankie_roll_202604210108.jpeg" },
    { "id": "roll_classic_chicken", "name": "Classic Chicken Frankie / Roll", "category": "meals", "subcategory": "Wraps & Rolls", "servingType": "count", "defaultServing": { "unit": "roll", "amount": 1 }, "servingOptions": [{ "label": "1 Roll (220g)", "grams": 220 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 215, "protein": 13.5, "carbs": 23, "fat": 8, "fiber": 1.8 }, "image": "Chicken_Frankie_roll_202604210108.jpeg" },
    { "id": "roll_mutton_seekh", "name": "Mutton Seekh Frankie / Roll", "category": "meals", "subcategory": "Wraps & Rolls", "servingType": "count", "defaultServing": { "unit": "roll", "amount": 1 }, "servingOptions": [{ "label": "1 Roll (220g)", "grams": 220 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 240, "protein": 14, "carbs": 21, "fat": 11, "fiber": 1.5 }, "image": "Mutton_Seekh_Frankie_202604210108.jpeg" },
    { "id": "roll_egg", "name": "Classic Egg Roll", "category": "meals", "subcategory": "Wraps & Rolls", "servingType": "count", "defaultServing": { "unit": "roll", "amount": 1 }, "servingOptions": [{ "label": "1 Roll (200g)", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 195, "protein": 8, "carbs": 24, "fat": 8, "fiber": 2 }, "image": "Classic_Egg_Roll_202604210108.jpeg" },

    // ==========================================
    // BATCH 1: JUICES & BEVERAGES
    // ==========================================
    { "id": "tropicana_orange", "name": "Tropicana Orange Juice", "category": "drinks", "subcategory": "Juices", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 200 }, "servingOptions": [{ "label": "Small Glass (200ml)", "grams": 200 }, { "label": "100ml", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 45, "protein": 0.7, "carbs": 10, "fat": 0.1, "fiber": 0.2 }, "image": "exp1/Orange_juice_glass_202604230042.jpeg" },
    { "id": "tropicana_apple", "name": "Tropicana Apple Juice", "category": "drinks", "subcategory": "Juices", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 200 }, "servingOptions": [{ "label": "Small Glass (200ml)", "grams": 200 }, { "label": "100ml", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 48, "protein": 0.1, "carbs": 12, "fat": 0.1, "fiber": 0.1 }, "image": "exp1/Golden_apple_juice_202604230042.jpeg" },
    { "id": "tropicana_mixed", "name": "Tropicana Mixed Fruit Juice", "category": "drinks", "subcategory": "Juices", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 200 }, "servingOptions": [{ "label": "Small Glass (200ml)", "grams": 200 }, { "label": "100ml", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 52, "protein": 0.4, "carbs": 13, "fat": 0.1, "fiber": 0.3 }, "image": "exp1/Mixed_Fruit_Juice_202604230042.jpeg" },
    { "id": "tropicana_litchi", "name": "Tropicana Litchi Delight", "category": "drinks", "subcategory": "Juices", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 200 }, "servingOptions": [{ "label": "Small Glass (200ml)", "grams": 200 }, { "label": "100ml", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 54, "protein": 0.1, "carbs": 13.5, "fat": 0.1, "fiber": 0.1 }, "image": "exp1/Food_photography_fruit_202604230042.jpeg" },
    { "id": "tropicana_guava", "name": "Tropicana Guava Delight", "category": "drinks", "subcategory": "Juices", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 200 }, "servingOptions": [{ "label": "Small Glass (200ml)", "grams": 200 }, { "label": "100ml", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 56, "protein": 0.3, "carbs": 14, "fat": 0.1, "fiber": 0.5 }, "image": "exp1/Pink_Guava_Juice_202604230042.jpeg" },
    { "id": "real_mango", "name": "Real Mango Juice", "category": "drinks", "subcategory": "Juices", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 200 }, "servingOptions": [{ "label": "Small Glass (200ml)", "grams": 200 }, { "label": "100ml", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 60, "protein": 0.4, "carbs": 15, "fat": 0.1, "fiber": 0.3 }, "image": "exp1/Mango_drink_in_202604230042.jpeg" },
    { "id": "real_mixed", "name": "Real Mixed Fruit Juice", "category": "drinks", "subcategory": "Juices", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 200 }, "servingOptions": [{ "label": "Small Glass (200ml)", "grams": 200 }, { "label": "100ml", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 55, "protein": 0.3, "carbs": 14, "fat": 0.1, "fiber": 0.4 }, "image": "exp1/Mixed_Fruit_Juice_202604230042.jpeg" },
    { "id": "real_pomegranate", "name": "Real Pomegranate Juice", "category": "drinks", "subcategory": "Juices", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 200 }, "servingOptions": [{ "label": "Small Glass (200ml)", "grams": 200 }, { "label": "100ml", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 65, "protein": 0.2, "carbs": 16, "fat": 0.1, "fiber": 0.2 }, "image": "exp1/Pink_Guava_Juice_202604230042.jpeg" },
    { "id": "real_activ_orange", "name": "Real Activ 100% Orange Juice", "category": "drinks", "subcategory": "Juices", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 200 }, "servingOptions": [{ "label": "Small Glass (200ml)", "grams": 200 }, { "label": "100ml", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 40, "protein": 0.7, "carbs": 9.5, "fat": 0.1, "fiber": 0.2 }, "image": "exp1/Orange_juice_glass_202604230042.jpeg" },
    { "id": "paperboat_aampanna", "name": "Paper Boat Aam Panna", "category": "drinks", "subcategory": "Juices", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 200 }, "servingOptions": [{ "label": "Pack (200ml)", "grams": 200 }, { "label": "100ml", "grams": 100 }, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 54, "protein": 0.1, "carbs": 13.5, "fat": 0.1, "fiber": 0.2 }, "image": "exp1/Aam_Panna_Indian_202604230042.jpeg" },
    { "id": "paperboat_jaljeera", "name": "Paper Boat Jaljeera", "category": "drinks", "subcategory": "Juices", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 200 }, "servingOptions": [{ "label": "Pack (200ml)", "grams": 200 }, { "label": "100ml", "grams": 100 }, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 44, "protein": 0.1, "carbs": 11, "fat": 0.1, "fiber": 0.1 }, "image": "exp1/Jaljeera_Indian_lemonade_202604230042.jpeg" },
    { "id": "softdrink_thumsup", "name": "Thums Up", "category": "drinks", "subcategory": "Soft Drinks", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 250 }, "servingOptions": [{"label": "250ml Bottle", "grams": 250}, {"label": "100ml", "grams": 100}, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 44, "protein": 0, "carbs": 11, "fat": 0, "fiber": 0 }, "image": "exp1/Thums_Up_cola_202604230042.jpeg" },
    { "id": "softdrink_limca", "name": "Limca", "category": "drinks", "subcategory": "Soft Drinks", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 250 }, "servingOptions": [{"label": "250ml Bottle", "grams": 250}, {"label": "100ml", "grams": 100}, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 41, "protein": 0, "carbs": 10.2, "fat": 0, "fiber": 0 }, "image": "exp1/Limca_soda_in_202604230042.jpeg" },
    { "id": "softdrink_coke_zero", "name": "Coca-Cola Zero Sugar", "category": "drinks", "subcategory": "Soft Drinks", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 250 }, "servingOptions": [{"label": "Can (330ml)", "grams": 330}, {"label": "250ml", "grams": 250}, {"label": "100ml", "grams": 100}, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 0.3, "protein": 0, "carbs": 0, "fat": 0, "fiber": 0 }, "image": "exp1/Coke_Zero_in_202604230042.jpeg" },
    { "id": "softdrink_pepsi_black", "name": "Pepsi Black", "category": "drinks", "subcategory": "Soft Drinks", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 250 }, "servingOptions": [{"label": "Can (250ml)", "grams": 250}, {"label": "100ml", "grams": 100}, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 0, "protein": 0, "carbs": 0, "fat": 0, "fiber": 0 }, "image": "exp1/Coke_Zero_in_202604230042.jpeg" },
    { "id": "softdrink_mountain_dew", "name": "Mountain Dew", "category": "drinks", "subcategory": "Soft Drinks", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 250 }, "servingOptions": [{ "label": "250ml Bottle", "grams": 250 }, { "label": "100ml", "grams": 100 }, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 48, "protein": 0, "carbs": 12, "fat": 0, "fiber": 0 }, "image": "exp1/Mountain_Dew_in_202604230042.jpeg" },
    { "id": "softdrink_sprite_diet", "name": "Sprite Diet / Zero Sugar", "category": "drinks", "subcategory": "Soft Drinks", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 250 }, "servingOptions": [{"label": "250ml Bottle", "grams": 250}, {"label": "100ml", "grams": 100}, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 0.5, "protein": 0, "carbs": 0.1, "fat": 0, "fiber": 0 }, "image": "exp1/Sprite_in_chilled_202604230042.jpeg" },
    { "id": "energy_monster_original", "name": "Monster Energy (Original)", "category": "drinks", "subcategory": "Energy Drinks", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 350 }, "servingOptions": [{"label": "Can (350ml)", "grams": 350}, {"label": "100ml", "grams": 100}, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 47, "protein": 0, "carbs": 12, "fat": 0, "fiber": 0 }, "image": "exp1/Monster_Energy_drink_202604230042.jpeg" },
    { "id": "energy_monster_ultra", "name": "Monster Energy Ultra (Zero Sugar)", "category": "drinks", "subcategory": "Energy Drinks", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 350 }, "servingOptions": [{"label": "Can (350ml)", "grams": 350}, {"label": "100ml", "grams": 100}, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 3, "protein": 0, "carbs": 0.9, "fat": 0, "fiber": 0 }, "image": "exp1/Monster_Ultra_energy_202604230042.jpeg" },
    { "id": "energy_redbull", "name": "Red Bull Energy Drink", "category": "drinks", "subcategory": "Energy Drinks", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 250 }, "servingOptions": [{"label": "Can (250ml)", "grams": 250}, {"label": "100ml", "grams": 100}, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 45, "protein": 0, "carbs": 11, "fat": 0, "fiber": 0 }, "image": "exp1/Red_Bull_poured_202604230042.jpeg" },
    { "id": "energy_prime", "name": "Prime Energy (Hydration)", "category": "drinks", "subcategory": "Energy Drinks", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 500 }, "servingOptions": [{ "label": "Bottle (500ml)", "grams": 500 }, { "label": "100ml", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 2, "protein": 0, "carbs": 1, "fat": 0, "fiber": 0 }, "image": "exp1/Prime_Energy_drink_202604230042.jpeg" },
    { "id": "energy_gatorade_blue", "name": "Gatorade Blue Bolt", "category": "drinks", "subcategory": "Energy Drinks", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 500 }, "servingOptions": [{"label": "Bottle (500ml)", "grams": 500}, {"label": "100ml", "grams": 100}, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 24, "protein": 0, "carbs": 6, "fat": 0, "fiber": 0 }, "image": "exp1/Blue_Gatorade_in_202604230042.jpeg" },
    { "id": "drink_milo", "name": "Milo (Ready to Drink)", "category": "drinks", "subcategory": "Milkshakes", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 180 }, "servingOptions": [{ "label": "Carton (180ml)", "grams": 180 }, { "label": "100ml", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 85, "protein": 2.5, "carbs": 14, "fat": 2.2, "fiber": 0.5 }, "image": "exp1/Glass_of_Milo_202604230042.jpeg" },
    { "id": "shake_cavins_choco", "name": "Cavin's Chocolate Milkshake", "category": "drinks", "subcategory": "Milkshakes", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 200 }, "servingOptions": [{ "label": "Small Tetra Pack (200ml)", "grams": 200 }, { "label": "100ml", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 108, "protein": 3.2, "carbs": 16.5, "fat": 3, "fiber": 0.5 }, "image": "exp1/Milkshakes_with_flavorings_202604230042.jpeg" },
    { "id": "shake_cavins_vanilla", "name": "Cavin's Vanilla Milkshake", "category": "drinks", "subcategory": "Milkshakes", "servingType": "volume", "defaultServing": { "unit": "ml", "amount": 200 }, "servingOptions": [{ "label": "Small Tetra Pack (200ml)", "grams": 200 }, { "label": "100ml", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 102, "protein": 3, "carbs": 15, "fat": 3.2, "fiber": 0 }, "image": "exp1/Milkshakes_with_flavorings_202604230042.jpeg" },

    // ==========================================
    // BATCH 2: CONDIMENTS & SAUCES
    // ==========================================
    { "id": "veeba_chipotle", "name": "Veeba Chipotle Southwest Dressing", "category": "sauces", "subcategory": "Dressings", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 445, "protein": 1.2, "carbs": 10.5, "fat": 43.5, "fiber": 0.5 }, "image": "exp1/Chipotle_sauce_in_202604230042.jpeg" },
    { "id": "veeba_caesar", "name": "Veeba Caesar Dressing", "category": "sauces", "subcategory": "Dressings", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 365, "protein": 1.5, "carbs": 8.5, "fat": 35, "fiber": 0.2 }, "image": "exp1/Mayonnaise_in_ceramic_202604230042.jpeg" },
    { "id": "veeba_thousand_island", "name": "Veeba Thousand Island Dressing", "category": "sauces", "subcategory": "Dressings", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 285, "protein": 1, "carbs": 14.5, "fat": 24, "fiber": 0.5 }, "image": "exp1/Mayonnaise_in_ceramic_202604230042.jpeg" },
    { "id": "veeba_honey_mustard", "name": "Veeba Honey Mustard Dressing", "category": "sauces", "subcategory": "Dressings", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 310, "protein": 1.8, "carbs": 22, "fat": 23.5, "fiber": 0.8 }, "image": "exp1/Yellow_mustard_in_202604230042.jpeg" },
    { "id": "veeba_sweet_onion", "name": "Veeba Sweet Onion Sauce (Fat Free)", "category": "sauces", "subcategory": "Sauces", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 145, "protein": 0.5, "carbs": 35, "fat": 0.1, "fiber": 0.5 }, "image": "exp1/Onion_dressing_with_202604230042.jpeg" },
    { "id": "veeba_garlic_mayo", "name": "Veeba Garlic Mayonnaise (Eggless)", "category": "sauces", "subcategory": "Mayonnaise", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 380, "protein": 0.8, "carbs": 12, "fat": 35.5, "fiber": 0.2 }, "image": "exp1/Garlic_Mayonnaise_dip_202604230042.jpeg" },
    { "id": "veeba_mint_mayo", "name": "Veeba Mint Mayonnaise", "category": "sauces", "subcategory": "Mayonnaise", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 320, "protein": 1, "carbs": 14, "fat": 28, "fiber": 0.5 }, "image": "exp1/Mayonnaise_in_ceramic_202604230042.jpeg" },
    { "id": "chings_schezwan_chutney", "name": "Ching's Secret Schezwan Chutney", "category": "sauces", "subcategory": "Sauces", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 165, "protein": 1.2, "carbs": 24, "fat": 6, "fiber": 0.8 }, "image": "exp1/Schezwan_Chutney_in_202604230042.jpeg" },
    { "id": "chings_soy_sauce", "name": "Ching's Secret Dark Soy Sauce", "category": "sauces", "subcategory": "Sauces", "servingType": "volume", "defaultServing": { "unit": "tsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tsp (5ml)", "grams": 5 }, { "label": "1 Tbsp (15ml)", "grams": 15 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 45, "protein": 3.5, "carbs": 7.5, "fat": 0, "fiber": 0 }, "image": "exp1/Hakka_noodles_soy_202604230042.jpeg" },
    { "id": "wingreens_hummus_classic", "name": "Wingreens Classic Hummus", "category": "sauces", "subcategory": "Dips", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 242, "protein": 6.5, "carbs": 14, "fat": 17.5, "fiber": 5.5 }, "image": "exp1/Hummus_in_bowl_202604230042.jpeg" },
    { "id": "wingreens_garlic_dip", "name": "Wingreens Garlic Dip / Aioli", "category": "sauces", "subcategory": "Dips", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 395, "protein": 1, "carbs": 8, "fat": 38, "fiber": 0.2 }, "image": "exp1/Chunky_gourmet_dip_202604230042.jpeg" },
    { "id": "wingreens_peri_peri", "name": "Wingreens Peri Peri Garlic Dip", "category": "sauces", "subcategory": "Dips", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 410, "protein": 1.2, "carbs": 9, "fat": 39, "fiber": 0.5 }, "image": "exp1/Chunky_gourmet_dip_202604230042.jpeg" },
    { "id": "sauce_sriracha_huyfong", "name": "Huy Fong Sriracha Sauce", "category": "sauces", "subcategory": "Sauces", "servingType": "grams", "defaultServing": { "unit": "tsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tsp (5g)", "grams": 5 }, { "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 80, "protein": 2, "carbs": 18, "fat": 0, "fiber": 2 }, "image": "exp1/Red_Sriracha_sauce_202604230042.jpeg" },
    { "id": "sauce_tabasco_original", "name": "Tabasco Original Red Sauce", "category": "sauces", "subcategory": "Sauces", "servingType": "volume", "defaultServing": { "unit": "tsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tsp (5ml)", "grams": 5 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 12, "protein": 0.6, "carbs": 0, "fat": 0, "fiber": 0 }, "image": "exp1/Condiments_sharp_focus_202604230042.jpeg" },
    { "id": "sauce_maggi_ketchup", "name": "Maggi Rich Tomato Ketchup", "category": "sauces", "subcategory": "Sauces", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 115, "protein": 0.8, "carbs": 26, "fat": 0.1, "fiber": 0.5 }, "image": "exp1/Tomato_ketchup_pouring_202604230042.jpeg" },
    { "id": "sauce_hellmanns_mayo", "name": "Hellmann's Real Mayonnaise", "category": "sauces", "subcategory": "Mayonnaise", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 680, "protein": 0.9, "carbs": 0.6, "fat": 75, "fiber": 0 }, "image": "exp1/Mayonnaise_in_ceramic_202604230042.jpeg" },
    { "id": "sauce_mustard_yellow", "name": "Yellow Mustard Sauce", "category": "sauces", "subcategory": "Sauces", "servingType": "grams", "defaultServing": { "unit": "tsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tsp (5g)", "grams": 5 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 66, "protein": 4, "carbs": 8, "fat": 3, "fiber": 3 }, "image": "exp1/Yellow_mustard_in_202604230042.jpeg" },
    { "id": "sauce_bbq_classic", "name": "Classic BBQ Sauce", "category": "sauces", "subcategory": "Sauces", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (17g)", "grams": 17 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 172, "protein": 1, "carbs": 40, "fat": 0.5, "fiber": 1 }, "image": "exp1/BBQ_sauce_or_202604230042.jpeg" },
    { "id": "sauce_ranch_classic", "name": "Classic Ranch Dressing", "category": "sauces", "subcategory": "Dressings", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 435, "protein": 1.5, "carbs": 6, "fat": 46, "fiber": 0.2 }, "image": "exp1/Mayonnaise_in_ceramic_202604230042.jpeg" },

    // ==========================================
    // BATCH 3: INSTANT FOODS & SNACKING
    // ==========================================
    { "id": "maggi_masala", "name": "Maggi 2-Minute Masala Noodles", "category": "snacks", "subcategory": "Instant Noodles", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "Single Pack (70g)", "grams": 70 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 395, "protein": 8, "carbs": 58.5, "fat": 14.5, "fiber": 1.5 }, "image": "exp1/Bowl_of_Maggi_202604230042.jpeg" },
    { "id": "maggi_atta_noodles", "name": "Maggi Vegetable Atta Noodles", "category": "snacks", "subcategory": "Instant Noodles", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "Single Pack (72.5g)", "grams": 72.5 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 372, "protein": 10.5, "carbs": 55, "fat": 12, "fiber": 6.5 }, "image": "exp1/Bowl_of_Maggi_202604230042.jpeg" },
    { "id": "top_ramen_masala", "name": "Top Ramen Masala Noodles", "category": "snacks", "subcategory": "Instant Noodles", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "Single Pack (70g)", "grams": 70 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 412, "protein": 8.5, "carbs": 61, "fat": 16, "fiber": 2 }, "image": "exp1/Noodles_in_bowl_202604230042.jpeg" },
    { "id": "nissin_geki_veg", "name": "Nissin Geki Hot & Spicy Korean Veg", "category": "snacks", "subcategory": "Instant Noodles", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "Single Pack (80g)", "grams": 80 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 455, "protein": 8.2, "carbs": 62, "fat": 19.5, "fiber": 2 }, "image": "exp1/Spicy_Korean_noodles_202604230042.jpeg" },
    { "id": "nissin_geki_chicken", "name": "Nissin Geki Hot & Spicy Korean Chicken", "category": "snacks", "subcategory": "Instant Noodles", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "Single Pack (80g)", "grams": 80 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 468, "protein": 9.5, "carbs": 60, "fat": 21, "fiber": 1.5 }, "image": "exp1/Spicy_Korean_noodles_202604230042.jpeg" },
    { "id": "maggi_pazzta_cheese", "name": "Maggi Pazzta Cheese Macaroni", "category": "snacks", "subcategory": "Pasta", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "Single Pack (64g)", "grams": 64 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 382, "protein": 10, "carbs": 70, "fat": 6.8, "fiber": 1.5 }, "image": "exp1/Cheese_Macaroni_Pasta_202604230042.jpeg" },
    { "id": "sunfeast_pasta_cheese", "name": "Sunfeast YiPPee! Pasta Treat Cheese", "category": "snacks", "subcategory": "Pasta", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "Single Pack (70g)", "grams": 70 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 390, "protein": 9.5, "carbs": 72, "fat": 7, "fiber": 1.8 }, "image": "exp1/Pasta_with_creamy_202604230042.jpeg" },
    { "id": "weikfield_penne", "name": "Weikfield Penne Pasta (Raw)", "category": "snacks", "subcategory": "Pasta", "servingType": "grams", "defaultServing": { "unit": "cup", "amount": 1 }, "servingOptions": [{ "label": "1 Cup (100g)", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 355, "protein": 12, "carbs": 72, "fat": 1.5, "fiber": 3 }, "image": "exp1/Cheese_Macaroni_Pasta_202604230042.jpeg" },
    { "id": "mtr_poha_instant", "name": "MTR 3-Minute Breakfast Poha", "category": "snacks", "subcategory": "Ready to Eat", "servingType": "count", "defaultServing": { "unit": "cup", "amount": 1 }, "servingOptions": [{ "label": "Cup (80g)", "grams": 80 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 415, "protein": 7.5, "carbs": 75, "fat": 9, "fiber": 3.5 }, "image": "exp1/Indian_breakfast_dishes_202604230042.jpeg" },
    { "id": "mtr_upma_instant", "name": "MTR 3-Minute Breakfast Upma", "category": "snacks", "subcategory": "Ready to Eat", "servingType": "count", "defaultServing": { "unit": "cup", "amount": 1 }, "servingOptions": [{ "label": "Cup (80g)", "grams": 80 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 398, "protein": 8.5, "carbs": 68, "fat": 10, "fiber": 4 }, "image": "exp1/Indian_breakfast_dishes_202604230042.jpeg" },
    { "id": "snack_haldirams_aloo_bhujia", "name": "Haldiram's Aloo Bhujia", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": { "unit": "portion", "amount": 1 }, "servingOptions": [{ "label": "Small Portion (30g)", "grams": 30 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 580, "protein": 8, "carbs": 42, "fat": 42, "fiber": 3 }, "image": "exp1/Crispy_snacks_in_202604230047.jpeg" },
    { "id": "snack_kurkure_masala", "name": "Kurkure Masala Munch", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "Small Pack (40g)", "grams": 40 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 558, "protein": 5.8, "carbs": 56, "fat": 34.5, "fiber": 1.5 }, "image": "exp1/Crispy_snacks_in_202604230047.jpeg" },

    // ==========================================
    // BATCH 4: DAIRY & GOURMET CHEESE
    // ==========================================
    { "id": "cheese_amul_spread_plain", "name": "Amul Cheese Spread (Plain)", "category": "dairy", "subcategory": "Cheese", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 242, "protein": 10, "carbs": 5, "fat": 20, "fiber": 0 }, "image": "exp1/Cheese_spread_on_202604230042.jpeg" },
    { "id": "cheese_amul_slice", "name": "Amul Cheese Slices", "category": "dairy", "subcategory": "Cheese", "servingType": "count", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (20g)", "grams": 20 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 315, "protein": 20, "carbs": 1.5, "fat": 25, "fiber": 0 }, "image": "exp1/Processed_cheese_slices_202604230042.jpeg" },
    { "id": "cheese_britannia_slice", "name": "Britannia Cheese Slices", "category": "dairy", "subcategory": "Cheese", "servingType": "count", "defaultServing": { "unit": "slice", "amount": 1 }, "servingOptions": [{ "label": "1 Slice (20g)", "grams": 20 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 305, "protein": 19, "carbs": 2.5, "fat": 24.5, "fiber": 0 }, "image": "exp1/Processed_cheese_slices_202604230042.jpeg" },
    { "id": "cheese_mozzarella_shredded", "name": "Shredded Mozzarella Cheese", "category": "dairy", "subcategory": "Cheese", "servingType": "grams", "defaultServing": { "unit": "cup", "amount": 0.25 }, "servingOptions": [{ "label": "1/4 Cup (28g)", "grams": 28 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 280, "protein": 24, "carbs": 3, "fat": 19, "fiber": 0 }, "image": "exp1/Cheese_blocks_with_202604230042.jpeg" },
    { "id": "cheese_halloumi", "name": "Gourmet Halloumi Cheese", "category": "dairy", "subcategory": "Cheese", "servingType": "grams", "defaultServing": { "unit": "portion", "amount": 1 }, "servingOptions": [{ "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 320, "protein": 22, "carbs": 2, "fat": 25, "fiber": 0 }, "image": "exp1/Grilled_Halloumi_cheese_202604230042.jpeg" },
    { "id": "cheese_blue", "name": "Blue Cheese / Roquefort", "category": "dairy", "subcategory": "Cheese", "servingType": "grams", "defaultServing": { "unit": "portion", "amount": 1 }, "servingOptions": [{ "label": "1oz (28g)", "grams": 28 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 353, "protein": 21, "carbs": 2.3, "fat": 29, "fiber": 0 }, "image": "exp1/Cheese_blocks_with_202604230042.jpeg" },
    { "id": "paneer_milky_mist", "name": "Milky Mist Paneer (Fresh)", "category": "dairy", "subcategory": "Cheese", "servingType": "grams", "defaultServing": { "unit": "portion", "amount": 1 }, "servingOptions": [{ "label": "100g", "grams": 100 }, { "label": "200g Pack", "grams": 200 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 285, "protein": 18, "carbs": 2.5, "fat": 22.5, "fiber": 0 }, "image": "exp1/Paneer_cubes_on_202604230042.jpeg" },
    { "id": "yogurt_milky_mist_greek", "name": "Milky Mist Greek Yogurt (Plain)", "category": "dairy", "subcategory": "Curd & Yogurt", "servingType": "grams", "defaultServing": { "unit": "cup", "amount": 1 }, "servingOptions": [{ "label": "1 Cup (100g)", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 98, "protein": 8.5, "carbs": 4.5, "fat": 5, "fiber": 0 }, "image": "exp1/Yogurt_in_bowl_202604230042.jpeg" },

    // ==========================================
    // BATCH 5: CONFECTIONERY & SWEETS
    // ==========================================
    { "id": "choc_galaxy_milk", "name": "Galaxy Smooth Milk", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "bar", "amount": 1 }, "servingOptions": [{ "label": "Bar (30g)", "grams": 30 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 546, "protein": 7, "carbs": 54, "fat": 33, "fiber": 1.5 }, "image": "exp1/Silk_chocolate_internal_202604230042.jpeg" },
    { "id": "choc_mars_bar", "name": "Mars Bar", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "bar", "amount": 1 }, "servingOptions": [{ "label": "Single Bar (51g)", "grams": 51 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 448, "protein": 4.1, "carbs": 69, "fat": 17.5, "fiber": 1.2 }, "image": "exp1/Chocolate_bar_showing_202604230042.jpeg" },
    { "id": "choc_twix", "name": "Twix Bar", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "finger", "amount": 2 }, "servingOptions": [{ "label": "2 Fingers (50g)", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 495, "protein": 4.5, "carbs": 64, "fat": 24, "fiber": 1.5 }, "image": "exp1/Chocolate_bar_showing_202604230042.jpeg" },
    { "id": "choc_gems_pack", "name": "Cadbury Gems (Pack)", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "Small Pack (8g)", "grams": 8 }, { "label": "Large Pack (22g)", "grams": 22 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 482, "protein": 4.2, "carbs": 76, "fat": 18, "fiber": 0.5 }, "image": "exp1/Candies_in_bowl_202604230042.jpeg" },
    { "id": "candy_pulse_mango", "name": "Pulse Candy (Kacha Mango)", "category": "snacks", "subcategory": "Candies", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (4g)", "grams": 4 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 385, "protein": 0, "carbs": 96, "fat": 0.1, "fiber": 0 }, "image": "exp1/Candies_in_bowl_202604230042.jpeg" },
    { "id": "gum_center_fresh_unit", "name": "Center Fresh Unit", "category": "snacks", "subcategory": "Mints & Gums", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (2.2g)", "grams": 2.2 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 285, "protein": 0, "carbs": 71, "fat": 0, "fiber": 0 }, "image": "exp1/Candies_in_bowl_202604230042.jpeg" },

    // ==========================================
    // BATCH 6: REGIONAL FRUITS & SPECIALTY
    // ==========================================
    { "id": "fruit_banana_red_unit", "name": "Red Banana", "category": "fruits", "subcategory": "Bananas", "servingType": "count", "defaultServing": { "unit": "fruit", "amount": 1 }, "servingOptions": [{ "label": "1 Medium (100g)", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 89, "protein": 1.1, "carbs": 23, "fat": 0.3, "fiber": 2.6 }, "image": "exp1/Red_banana_with_202604230042.jpeg" },
    { "id": "fruit_banana_yelakki_unit", "name": "Yelakki Banana (Mini)", "category": "fruits", "subcategory": "Bananas", "servingType": "count", "defaultServing": { "unit": "fruit", "amount": 1 }, "servingOptions": [{ "label": "1 Fruit (60g)", "grams": 60 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 88, "protein": 1.1, "carbs": 22, "fat": 0.3, "fiber": 2.5 }, "image": "exp1/Small_Yelakki_bananas_202604230042.jpeg" },
    { "id": "fruit_banana_indian_varieties", "name": "Indian Banana Varieties (Avg)", "category": "fruits", "subcategory": "Bananas", "servingType": "count", "defaultServing": { "unit": "fruit", "amount": 1 }, "servingOptions": [{ "label": "1 Medium (100g)", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 95, "protein": 1.1, "carbs": 25, "fat": 0.3, "fiber": 2.8 }, "image": "exp1/Banana_varieties_unique_202604230047.jpeg" },
    { "id": "oats_goat_life_almond_kulfi", "name": "Goat Life Protein Oats (Almond Kulfi)", "category": "meals", "subcategory": "Breakfast", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "1 Pack (75g)", "grams": 75 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 380, "protein": 28, "carbs": 45, "fat": 10, "fiber": 8 }, "image": "exp1/Oats_with_almond_202604230042.jpeg" },
    { "id": "oats_goat_life_choco_nut", "name": "Goat Life Protein Oats (Choco-Nut)", "category": "meals", "subcategory": "Breakfast", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "1 Pack (75g)", "grams": 75 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 387, "protein": 27, "carbs": 46, "fat": 11, "fiber": 7.5 }, "image": "exp1/Oatmeal_with_flavor_202604230046.jpeg" },

    // ==========================================
    // BATCH 7: SPICES & MASALAS
    // ==========================================
    { "id": "spice_turmeric_powder", "name": "Turmeric Powder", "category": "snacks", "subcategory": "Spices", "servingType": "grams", "defaultServing": { "unit": "tsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tsp (3g)", "grams": 3 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 312, "protein": 7.8, "carbs": 64, "fat": 3, "fiber": 21 }, "image": "exp1/Turmeric_powder_in_202604230042.jpeg" },
    { "id": "spice_chilli_powder", "name": "Red Chilli Powder", "category": "snacks", "subcategory": "Spices", "servingType": "grams", "defaultServing": { "unit": "tsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tsp (3g)", "grams": 3 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 318, "protein": 12, "carbs": 50, "fat": 7, "fiber": 35 }, "image": "exp1/Red_chilli_powder_202604230042.jpeg" },
    { "id": "spice_indian_masala_avg", "name": "Indian Masala Powders (Jeera/Garam)", "category": "snacks", "subcategory": "Spices", "servingType": "grams", "defaultServing": { "unit": "tsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tsp (3g)", "grams": 3 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 350, "protein": 14, "carbs": 45, "fat": 18, "fiber": 25 }, "image": "exp1/Spices_in_earthen_202604230046.jpeg" },
    { "id": "spice_maggi_magic_sachet", "name": "Maggi Masala-e-Magic (Sachet)", "category": "snacks", "subcategory": "Spices", "servingType": "count", "defaultServing": { "unit": "sachet", "amount": 1 }, "servingOptions": [{ "label": "1 Sachet (6g)", "grams": 6 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 310, "protein": 8.5, "carbs": 42, "fat": 12.5, "fiber": 5 }, "image": "exp1/Spices_in_earthen_202604230046.jpeg" },

    // ==========================================
    // BATCH 8: VEEBA SPECIFIC SAUCES
    // ==========================================
    { "id": "veeba_mint_mayo_branded", "name": "Veeba Mint Mayo", "category": "sauces", "subcategory": "Mayonnaise", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 262, "protein": 3.2, "carbs": 14.9, "fat": 21.1, "fiber": 0 }, "image": "exp1/Mayonnaise_in_ceramic_202604230042.jpeg" },
    { "id": "veeba_tandoori_mayo_branded", "name": "Veeba Tandoori Mayo", "category": "sauces", "subcategory": "Mayonnaise", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 256, "protein": 3.1, "carbs": 12.6, "fat": 21.5, "fiber": 0 }, "image": "exp1/Mayonnaise_in_ceramic_202604230042.jpeg" },
    { "id": "veeba_mustard_honey_branded", "name": "Veeba Honey Mustard", "category": "sauces", "subcategory": "Dressings", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 210, "protein": 1.2, "carbs": 35, "fat": 8, "fiber": 0.5 }, "image": "exp1/Yellow_mustard_in_202604230042.jpeg" },
    { "id": "veeba_bbq_branded", "name": "Veeba BBQ Sauce", "category": "sauces", "subcategory": "Sauces", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 111, "protein": 0.4, "carbs": 27.1, "fat": 0.1, "fiber": 0.5 }, "image": "exp1/BBQ_sauce_or_202604230042.jpeg" },

    // ==========================================
    // BATCH 9: FINAL MANGO & SOFT DRINKS
    // ==========================================
    { "id": "drink_maaza_mango", "name": "Maaza Mango Drink", "category": "drinks", "subcategory": "Soft Drinks", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{"label": "1 Glass (200ml)", "grams": 200}, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 62, "protein": 0.2, "carbs": 15, "fat": 0.1, "fiber": 0.3 }, "image": "exp1/Mango_drink_in_202604230042.jpeg" },
    { "id": "drink_slice_mango", "name": "Slice Mango Drink", "category": "drinks", "subcategory": "Soft Drinks", "servingType": "volume", "defaultServing": { "unit": "glass", "amount": 1 }, "servingOptions": [{"label": "1 Glass (200ml)", "grams": 200}, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 65, "protein": 0.1, "carbs": 16, "fat": 0, "fiber": 0.3 }, "image": "exp1/Mango_drink_in_202604230042.jpeg" },
    { "id": "drink_pepsi_black_can", "name": "Pepsi Black (Sugar Free)", "category": "drinks", "subcategory": "Soft Drinks", "servingType": "volume", "defaultServing": { "unit": "can", "amount": 1 }, "servingOptions": [{"label": "1 Can (250ml)", "grams": 250}, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 0, "protein": 0, "carbs": 0, "fat": 0, "fiber": 0 }, "image": "exp1/Coke_Zero_in_202604230042.jpeg" },
    // ==========================================
    // BATCH 10: MISSING ITEMS (CHEESES, SNACKS, DRINKS)
    // ==========================================
    { "id": "choc_milkybar", "name": "Nestle Milkybar", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "bar", "amount": 1 }, "servingOptions": [{ "label": "Small Bar (10g)", "grams": 10 }, { "label": "Bar (25g)", "grams": 25 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 535, "protein": 8.5, "carbs": 54, "fat": 31.5, "fiber": 0 }, "image": "exp1/Unwrapped_snack_bar_202604230042.jpeg" },
    { "id": "candy_melody", "name": "Parle Melody", "category": "snacks", "subcategory": "Candies", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (4.5g)", "grams": 4.5 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 415, "protein": 1.2, "carbs": 88, "fat": 6, "fiber": 0 }, "image": "exp1/Candies_in_bowl_202604230042.jpeg" },
    { "id": "candy_mangobite", "name": "Parle Mango Bite", "category": "snacks", "subcategory": "Candies", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (4g)", "grams": 4 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 392, "protein": 0, "carbs": 98, "fat": 0.1, "fiber": 0 }, "image": "exp1/Candies_in_bowl_202604230042.jpeg" },
    { "id": "candy_polo", "name": "Nestle Polo", "category": "snacks", "subcategory": "Candies", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Ring (1.5g)", "grams": 1.5 }, { "label": "Roll (15g)", "grams": 15 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 398, "protein": 0, "carbs": 99.5, "fat": 0, "fiber": 0 }, "image": "exp1/Candies_in_bowl_202604230042.jpeg" },
    { "id": "candy_mentos", "name": "Mentos (Mint/Fruit)", "category": "snacks", "subcategory": "Candies", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (2.7g)", "grams": 2.7 }, { "label": "Roll (37.5g)", "grams": 37.5 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 390, "protein": 0, "carbs": 93, "fat": 2, "fiber": 0 }, "image": "exp1/Candies_in_bowl_202604230042.jpeg" },
    { "id": "gum_happydent", "name": "Happydent White (Sugarfree)", "category": "snacks", "subcategory": "Mints & Gums", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (1.4g)", "grams": 1.4 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 165, "protein": 0, "carbs": 68, "fat": 0, "fiber": 0 }, "image": "exp1/Candies_in_bowl_202604230042.jpeg" },
    { "id": "candy_skittles", "name": "Skittles Original", "category": "snacks", "subcategory": "Candies", "servingType": "grams", "defaultServing": { "unit": "portion", "amount": 1 }, "servingOptions": [{ "label": "Pack (45g)", "grams": 45 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 405, "protein": 0, "carbs": 91, "fat": 4.5, "fiber": 0 }, "image": "exp1/Candies_in_bowl_202604230042.jpeg" },
    { "id": "candy_m_and_m", "name": "M&M's Milk Chocolate", "category": "snacks", "subcategory": "Candies", "servingType": "grams", "defaultServing": { "unit": "portion", "amount": 1 }, "servingOptions": [{ "label": "Small Pack (45g)", "grams": 45 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 490, "protein": 4.5, "carbs": 70, "fat": 21, "fiber": 2.5 }, "image": "exp1/Candies_in_bowl_202604230042.jpeg" },
    { "id": "fruit_banana_poovan", "name": "Poovan Banana (Indian Small)", "category": "fruits", "subcategory": "Bananas", "servingType": "count", "defaultServing": { "unit": "fruit", "amount": 1 }, "servingOptions": [{ "label": "1 Fruit (80g)", "grams": 80 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 92, "protein": 1, "carbs": 24, "fat": 0.3, "fiber": 2.6 }, "image": "exp1/Small_Yelakki_bananas_202604230042.jpeg" },
    { "id": "fruit_banana_robusta", "name": "Robusta Banana (Indian Large)", "category": "fruits", "subcategory": "Bananas", "servingType": "count", "defaultServing": { "unit": "fruit", "amount": 1 }, "servingOptions": [{ "label": "1 Large (120g)", "grams": 120 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 95, "protein": 1.1, "carbs": 25, "fat": 0.3, "fiber": 2.8 }, "image": "exp1/Banana_varieties_unique_202604230047.jpeg" },
    { "id": "fruit_banana_karpooravalli", "name": "Karpooravalli Banana", "category": "fruits", "subcategory": "Bananas", "servingType": "count", "defaultServing": { "unit": "fruit", "amount": 1 }, "servingOptions": [{ "label": "1 Medium (90g)", "grams": 90 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 105, "protein": 1.2, "carbs": 26, "fat": 0.4, "fiber": 3 }, "image": "exp1/Small_Yelakki_bananas_202604230042.jpeg" },
    { "id": "fruit_banana_nendran", "name": "Nendran Banana (Kerala)", "category": "fruits", "subcategory": "Bananas", "servingType": "count", "defaultServing": { "unit": "fruit", "amount": 1 }, "servingOptions": [{ "label": "1 Large (150g)", "grams": 150 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 116, "protein": 1.3, "carbs": 30, "fat": 0.4, "fiber": 3.2 }, "image": "exp1/Banana_varieties_unique_202604230047.jpeg" },
    { "id": "oats_goat_life_mango", "name": "Goat Life Protein Oats (Mango Madness)", "category": "meals", "subcategory": "Breakfast", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "1 Pack (75g)", "grams": 75 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 380, "protein": 28, "carbs": 45, "fat": 10, "fiber": 8 }, "image": "exp1/Oatmeal_with_flavor_202604230046.jpeg" },
    { "id": "oats_goat_life_mocha", "name": "Goat Life Protein Oats (Mocha)", "category": "meals", "subcategory": "Breakfast", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "1 Pack (75g)", "grams": 75 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 382, "protein": 28, "carbs": 45, "fat": 10, "fiber": 8 }, "image": "exp1/Oatmeal_with_flavor_202604230046.jpeg" },
    { "id": "oats_goat_life_hazelnut", "name": "Goat Life Protein Oats (Hazelnut)", "category": "meals", "subcategory": "Breakfast", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "1 Pack (75g)", "grams": 75 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 390, "protein": 27.5, "carbs": 44, "fat": 11.5, "fiber": 8 }, "image": "exp1/Oatmeal_with_flavor_202604230046.jpeg" },
    { "id": "oats_goat_life_cookies", "name": "Goat Life Protein Oats (Cookies & Cream)", "category": "meals", "subcategory": "Breakfast", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "1 Pack (75g)", "grams": 75 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 395, "protein": 27, "carbs": 46, "fat": 12, "fiber": 7 }, "image": "exp1/Oatmeal_with_flavor_202604230046.jpeg" },
    { "id": "sauce_mayo_plain", "name": "Veeba Plain Mayonnaise", "category": "dairy", "subcategory": "Sauces & Dips", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 480, "protein": 1.5, "carbs": 8, "fat": 50, "fiber": 0 }, "image": "exp1/Mayonnaise_in_ceramic_202604230042.jpeg" },
    { "id": "sauce_mustard_american", "name": "Veeba American Mustard", "category": "dairy", "subcategory": "Sauces & Dips", "servingType": "grams", "defaultServing": { "unit": "tsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tsp (5g)", "grams": 5 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 80, "protein": 2.8, "carbs": 10.6, "fat": 3, "fiber": 1.5 }, "image": "exp1/Yellow_mustard_in_202604230042.jpeg" },
    { "id": "sauce_ketchup", "name": "Tomato Ketchup (Standard)", "category": "dairy", "subcategory": "Sauces & Dips", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 112, "protein": 1, "carbs": 26, "fat": 0.1, "fiber": 0.5 }, "image": "exp1/Tomato_ketchup_pouring_202604230042.jpeg" },
    { "id": "sauce_sweet_onion_v2", "name": "Veeba Sweet Onion Dressing", "category": "dairy", "subcategory": "Sauces & Dips", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 187, "protein": 0.6, "carbs": 45.3, "fat": 0.4, "fiber": 0 }, "image": "exp1/Onion_dressing_with_202604230042.jpeg" },
    { "id": "cheese_amul_cube", "name": "Amul Cheese Cube", "category": "dairy", "subcategory": "Cheese", "servingType": "count", "defaultServing": { "unit": "cube", "amount": 1 }, "servingOptions": [{ "label": "1 Cube (20g)", "grams": 20 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 315, "protein": 20, "carbs": 1.4, "fat": 25, "fiber": 0 }, "image": "exp1/Cheese_blocks_with_202604230042.jpeg" },
    { "id": "cheese_britannia_cube", "name": "Britannia Cheese Cube", "category": "dairy", "subcategory": "Cheese", "servingType": "count", "defaultServing": { "unit": "cube", "amount": 1 }, "servingOptions": [{ "label": "1 Cube (20g)", "grams": 20 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 309, "protein": 17, "carbs": 4, "fat": 25, "fiber": 0 }, "image": "exp1/Cheese_blocks_with_202604230042.jpeg" },
    { "id": "spice_jeera", "name": "Jeera (Cumin) Powder", "category": "snacks", "subcategory": "Spices", "servingType": "grams", "defaultServing": { "unit": "tsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tsp (3g)", "grams": 3 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 375, "protein": 18, "carbs": 44, "fat": 22, "fiber": 10 }, "image": "exp1/Spices_in_earthen_202604230046.jpeg" },
    { "id": "spice_coriander", "name": "Coriander Powder", "category": "snacks", "subcategory": "Spices", "servingType": "grams", "defaultServing": { "unit": "tsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tsp (3g)", "grams": 3 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 345, "protein": 12, "carbs": 55, "fat": 17, "fiber": 30 }, "image": "exp1/Spices_in_earthen_202604230046.jpeg" },
    { "id": "spice_garam_masala", "name": "Garam Masala", "category": "snacks", "subcategory": "Spices", "servingType": "grams", "defaultServing": { "unit": "tsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tsp (3g)", "grams": 3 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 330, "protein": 14, "carbs": 45, "fat": 13, "fiber": 25 }, "image": "exp1/Spices_in_earthen_202604230046.jpeg" },
    { "id": "noodles_yippee", "name": "Sunfeast Yippee Noodles (Magic Masala)", "category": "meals", "subcategory": "Instant Foods", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "1 Pack (65g)", "grams": 65 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 468, "protein": 9, "carbs": 62, "fat": 20, "fiber": 2.5 }, "image": "exp1/Noodles_in_bowl_202604230042.jpeg" },
    { "id": "pasta_sunfeast_tomato", "name": "Sunfeast Pasta (Tomato Veg)", "category": "meals", "subcategory": "Instant Foods", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "1 Pack (65g)", "grams": 65 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 365, "protein": 11, "carbs": 74, "fat": 3, "fiber": 2 }, "image": "exp1/Pasta_with_creamy_202604230042.jpeg" },
    { "id": "pasta_sunfeast_cheesy", "name": "Sunfeast Pasta (Cheesy Corn)", "category": "meals", "subcategory": "Instant Foods", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "1 Pack (65g)", "grams": 65 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 372, "protein": 12, "carbs": 72, "fat": 3.5, "fiber": 1.5 }, "image": "exp1/Pasta_with_creamy_202604230042.jpeg" },
    { "id": "pasta_sunfeast_creamy", "name": "Sunfeast Pasta (Creamy Corn)", "category": "meals", "subcategory": "Instant Foods", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "1 Pack (65g)", "grams": 65 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 370, "protein": 11.5, "carbs": 73, "fat": 3.2, "fiber": 1.5 }, "image": "exp1/Pasta_with_creamy_202604230042.jpeg" },
    { "id": "pasta_weikfield_white", "name": "Weikfield Pasta (White Sauce)", "category": "meals", "subcategory": "Instant Foods", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "1 Pack (64g)", "grams": 64 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 360, "protein": 12, "carbs": 72, "fat": 2, "fiber": 2 }, "image": "exp1/Cheese_Macaroni_Pasta_202604230042.jpeg" },
    { "id": "pasta_weikfield_red", "name": "Weikfield Pasta (Red Sauce)", "category": "meals", "subcategory": "Instant Foods", "servingType": "count", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "1 Pack (64g)", "grams": 64 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 355, "protein": 11.5, "carbs": 73, "fat": 1.8, "fiber": 2 }, "image": "exp1/Cheese_Macaroni_Pasta_202604230042.jpeg" },
    { "id": "shake_cavins_strawberry", "name": "Cavin's Strawberry Milkshake", "category": "beverages", "subcategory": "Milkshakes", "servingType": "volume", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "1 Pack (180ml)", "grams": 180 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 90, "protein": 3, "carbs": 13, "fat": 2.8, "fiber": 0 }, "image": "exp1/Milkshakes_with_flavorings_202604230042.jpeg" },
    { "id": "shake_cavins_butterscotch", "name": "Cavin's Butterscotch Milkshake", "category": "beverages", "subcategory": "Milkshakes", "servingType": "volume", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{ "label": "1 Pack (180ml)", "grams": 180 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 92, "protein": 3, "carbs": 13.5, "fat": 2.8, "fiber": 0 }, "image": "exp1/Milkshakes_with_flavorings_202604230042.jpeg" },
    { "id": "drink_frooti", "name": "Frooti Mango Drink", "category": "beverages", "subcategory": "Soft Drinks", "servingType": "volume", "defaultServing": { "unit": "pack", "amount": 1 }, "servingOptions": [{"label": "1 Small Pack (160ml)", "grams": 160}, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 58, "protein": 0, "carbs": 14.5, "fat": 0, "fiber": 0.2 }, "image": "exp1/Mango_drink_in_202604230042.jpeg" },
    { "id": "drink_monster_ultra_white", "name": "Monster Energy Ultra (White)", "category": "beverages", "subcategory": "Energy Drinks", "servingType": "volume", "defaultServing": { "unit": "can", "amount": 1 }, "servingOptions": [{"label": "1 Can (500ml)", "grams": 500}, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 2, "protein": 0, "carbs": 0.9, "fat": 0, "fiber": 0 }, "image": "exp1/Monster_Ultra_energy_202604230042.jpeg" },
    { "id": "drink_monster_ultra_red", "name": "Monster Energy Ultra (Red)", "category": "beverages", "subcategory": "Energy Drinks", "servingType": "volume", "defaultServing": { "unit": "can", "amount": 1 }, "servingOptions": [{"label": "1 Can (500ml)", "grams": 500}, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 2, "protein": 0, "carbs": 0.9, "fat": 0, "fiber": 0 }, "image": "exp1/Monster_Ultra_energy_202604230042.jpeg" },
    { "id": "drink_monster_ultra_blue", "name": "Monster Energy Ultra (Blue)", "category": "beverages", "subcategory": "Energy Drinks", "servingType": "volume", "defaultServing": { "unit": "can", "amount": 1 }, "servingOptions": [{"label": "1 Can (500ml)", "grams": 500}, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 2, "protein": 0, "carbs": 0.9, "fat": 0, "fiber": 0 }, "image": "exp1/Monster_Ultra_energy_202604230042.jpeg" },
    { "id": "drink_gatorade_orange", "name": "Gatorade (Orange)", "category": "beverages", "subcategory": "Energy Drinks", "servingType": "volume", "defaultServing": { "unit": "bottle", "amount": 1 }, "servingOptions": [{"label": "1 Bottle (500ml)", "grams": 500}, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 24, "protein": 0, "carbs": 6, "fat": 0, "fiber": 0 }, "image": "exp1/Gatorade_bottle_dark_202604230042.jpeg" },
    { "id": "drink_gatorade_lemon", "name": "Gatorade (Lemon)", "category": "beverages", "subcategory": "Energy Drinks", "servingType": "volume", "defaultServing": { "unit": "bottle", "amount": 1 }, "servingOptions": [{"label": "1 Bottle (500ml)", "grams": 500}, {"label": "Small Glass (200ml)", "grams": 200}, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": { "calories": 25, "protein": 0, "carbs": 6, "fat": 0, "fiber": 0 }, "image": "exp1/Gatorade_bottle_dark_202604230042.jpeg" },
    { "id": "gum_doublemint", "name": "Doublemint Chewing Gum", "category": "snacks", "subcategory": "Mints & Gums", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (2.8g)", "grams": 2.8 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 290, "protein": 0, "carbs": 72, "fat": 0, "fiber": 0 }, "image": "exp1/Candies_in_bowl_202604230042.jpeg" },
    { "id": "mint_doublemint_lemon", "name": "Doublemint Mints (Lemon)", "category": "snacks", "subcategory": "Mints & Gums", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (0.6g)", "grams": 0.6 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 240, "protein": 0, "carbs": 95, "fat": 0, "fiber": 0 }, "image": "exp1/Candies_in_bowl_202604230042.jpeg" },
    { "id": "mint_doublemint_peppermint", "name": "Doublemint Mints (Peppermint)", "category": "snacks", "subcategory": "Mints & Gums", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (0.6g)", "grams": 0.6 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 240, "protein": 0, "carbs": 95, "fat": 0, "fiber": 0 }, "image": "exp1/Candies_in_bowl_202604230042.jpeg" },
    { "id": "candy_orange_bite", "name": "Orange Bite Candy", "category": "snacks", "subcategory": "Candies", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (4g)", "grams": 4 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 395, "protein": 0, "carbs": 98, "fat": 0.1, "fiber": 0 }, "image": "exp1/Candies_in_bowl_202604230042.jpeg" },
    { "id": "choc_perk", "name": "Cadbury Perk", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "bar", "amount": 1 }, "servingOptions": [{ "label": "1 Small Bar (13g)", "grams": 13 }, { "label": "1 Large Bar (28g)", "grams": 28 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 515, "protein": 4, "carbs": 68, "fat": 25, "fiber": 2 }, "image": "exp1/Unwrapped_snack_bar_202604230042.jpeg" },
    { "id": "choc_munch", "name": "Nestle Munch", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "bar", "amount": 1 }, "servingOptions": [{ "label": "1 Small Bar (10g)", "grams": 10 }, { "label": "1 Large Bar (18g)", "grams": 18 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 485, "protein": 6, "carbs": 65, "fat": 22, "fiber": 1 }, "image": "exp1/Unwrapped_snack_bar_202604230042.jpeg" },

    // ==========================================
    // BATCH 11: USER NEW CHOCOLATES
    // ==========================================
    { "id": "choc_dairy_milk", "name": "Cadbury Dairy Milk", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "bar", "amount": 1 }, "servingOptions": [{ "label": "Medium Bar (36g)", "grams": 36 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 528, "protein": 7.6, "carbs": 60, "fat": 28.5, "fiber": 1.5 }, "image": "exp1/Cadbury_Dairy_Milk_202604230042.jpeg" },
    { "id": "choc_dairy_milk_silk", "name": "Cadbury Dairy Milk Silk", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "bar", "amount": 1 }, "servingOptions": [{ "label": "Bar (60g)", "grams": 60 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 532, "protein": 8, "carbs": 58, "fat": 30, "fiber": 1.5 }, "image": "exp1/Silk_chocolate_internal_202604230042.jpeg" },
    { "id": "choc_5star", "name": "Cadbury 5 Star", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "bar", "amount": 1 }, "servingOptions": [{ "label": "Bar (22g)", "grams": 22 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 444, "protein": 3.8, "carbs": 69.5, "fat": 16.5, "fiber": 0.5 }, "image": "exp1/Chocolate_bar_gooey_202604230042.jpeg" },
    { "id": "choc_fuse", "name": "Cadbury Fuse", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "bar", "amount": 1 }, "servingOptions": [{ "label": "Bar (24g)", "grams": 24 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 494, "protein": 8.5, "carbs": 56, "fat": 26, "fiber": 2.5 }, "image": "exp1/Chocolate_bar_gooey_202604230042.jpeg" },
    { "id": "choc_snickers", "name": "Snickers", "category": "snacks", "subcategory": "Chocolates", "servingType": "count", "defaultServing": { "unit": "bar", "amount": 1 }, "servingOptions": [{ "label": "Bar (50g)", "grams": 50 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 484, "protein": 8.6, "carbs": 60, "fat": 23, "fiber": 1.5 }, "image": "exp1/Chocolate_bar_showing_202604230042.jpeg" },
    { "id": "choc_dairy_milk_shots", "name": "Cadbury Dairy Milk Shots", "category": "snacks", "subcategory": "Chocolates", "servingType": "grams", "defaultServing": { "unit": "portion", "amount": 1 }, "servingOptions": [{ "label": "Pack (18g)", "grams": 18 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 490, "protein": 4.5, "carbs": 70, "fat": 21, "fiber": 2.5 }, "image": "exp1/Candies_in_bowl_202604230042.jpeg" },
    { "id": "cheese_parmesan", "name": "Parmesan Cheese", "category": "dairy", "subcategory": "Cheese", "servingType": "grams", "defaultServing": { "unit": "tbsp", "amount": 1 }, "servingOptions": [{ "label": "1 Tbsp (15g)", "grams": 15 }, { "label": "100g", "grams": 100 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 431, "protein": 38, "carbs": 4.1, "fat": 29, "fiber": 0 }, "image": "exp1/Cheese_blocks_with_202604230042.jpeg" },

    { "id": "aavin_milk_chocolate", "name": "Aavin Chocolate Milk", "category": "beverages", "subcategory": "Flavoured Milk", "servingType": "volume", "defaultServing": { "unit": "bottle", "amount": 1 }, "servingOptions": [{"label": "200ml Bottle", "grams": 200}, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 98, "protein": 3.3, "carbs": 13.7, "fat": 3.0, "fiber": 0}, "image": "exp3/Aavin_Chocolate_Milk_202604272228.jpeg" },
    { "id": "aavin_milk_strawberry", "name": "Aavin Strawberry Milk", "category": "beverages", "subcategory": "Flavoured Milk", "servingType": "volume", "defaultServing": { "unit": "bottle", "amount": 1 }, "servingOptions": [{"label": "200ml Bottle", "grams": 200}, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 98, "protein": 3.3, "carbs": 13.7, "fat": 3.0, "fiber": 0}, "image": "exp3/Aavin_Strawberry_Milk_202604272228.jpeg" },
    { "id": "aavin_milk_pista", "name": "Aavin Pista Milk", "category": "beverages", "subcategory": "Flavoured Milk", "servingType": "volume", "defaultServing": { "unit": "bottle", "amount": 1 }, "servingOptions": [{"label": "200ml Bottle", "grams": 200}, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 98, "protein": 3.3, "carbs": 13.7, "fat": 3.0, "fiber": 0}, "image": "exp3/Aavin_Pista_Milk_202604272228.jpeg" },
    { "id": "aavin_milk_cardamom", "name": "Aavin Cardamom Milk", "category": "beverages", "subcategory": "Flavoured Milk", "servingType": "volume", "defaultServing": { "unit": "bottle", "amount": 1 }, "servingOptions": [{"label": "200ml Bottle", "grams": 200}, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 98, "protein": 3.3, "carbs": 13.7, "fat": 3.0, "fiber": 0}, "image": "exp3/Aavin_Cardamom_Milk_202604272228.jpeg" },
    { "id": "aavin_milk_vanilla", "name": "Aavin Vanilla Milk", "category": "beverages", "subcategory": "Flavoured Milk", "servingType": "volume", "defaultServing": { "unit": "bottle", "amount": 1 }, "servingOptions": [{"label": "200ml Bottle", "grams": 200}, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 91.2, "protein": 3.0, "carbs": 13.7, "fat": 3.0, "fiber": 0}, "image": "exp3/Aavin_Vanilla_Milk_202604272228.jpeg" },
    { "id": "heritage_milk_pista", "name": "Heritage Nutrivita Pista Milk", "category": "beverages", "subcategory": "Flavoured Milk", "servingType": "volume", "defaultServing": { "unit": "bottle", "amount": 1 }, "servingOptions": [{"label": "200ml Bottle", "grams": 200}, {"label": "Regular Glass (250ml)", "grams": 250}, {"label": "300ml", "grams": 300}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 90, "protein": 3.0, "carbs": 12.0, "fat": 3.0, "fiber": 0}, "image": "exp3/Pista_Milk_gourmet_202604272228.jpeg" },
    { "id": "haldirams_bhujia_sev", "name": "Haldiram's Bhujia Sev", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": { "unit": "grams", "amount": 30 }, "servingOptions": [{"label": "Small Bowl (30g)", "grams": 30}, {"label": "100g Pack", "grams": 100}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 592, "protein": 12.93, "carbs": 37.14, "fat": 43.5, "fiber": 4.85}, "image": "exp3/Haldiram's_Bhujia_Sev_202604272228.jpeg" },
    { "id": "haldirams_bhakharwadi", "name": "Haldiram's Mini Bhakharwadi", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": { "unit": "pieces", "amount": 5 }, "servingOptions": [{"label": "5 Pieces (40g)", "grams": 40}, {"label": "100g Pack", "grams": 100}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 539, "protein": 7.77, "carbs": 49.89, "fat": 34.22, "fiber": 3.1}, "image": "exp3/Haldiram's_Mini_Bhakharwadi_202604272228.jpeg" },
    { "id": "haldirams_masala_groundnuts", "name": "Haldiram's Masala Groundnuts", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": { "unit": "grams", "amount": 30 }, "servingOptions": [{"label": "Small Bowl (30g)", "grams": 30}, {"label": "100g Pack", "grams": 100}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 637, "protein": 20.62, "carbs": 21.85, "fat": 51.91, "fiber": 3.33}, "image": "exp3/Haldiram's_Masala_Groundnuts_202604272228.jpeg" },
    { "id": "haldirams_moong_dal", "name": "Haldiram's Moong Dal", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": { "unit": "grams", "amount": 30 }, "servingOptions": [{"label": "Small Bowl (30g)", "grams": 30}, {"label": "100g Pack", "grams": 100}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 460, "protein": 20, "carbs": 55, "fat": 20, "fiber": 8}, "image": "exp3/Haldiram's_Moong_Dal_202604272228.jpeg" },
    { "id": "haldirams_navratan_mix", "name": "Haldiram's Navratan Mix", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": { "unit": "grams", "amount": 30 }, "servingOptions": [{"label": "Small Bowl (30g)", "grams": 30}, {"label": "100g Pack", "grams": 100}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 560, "protein": 12, "carbs": 40, "fat": 40, "fiber": 5}, "image": "exp3/Haldiram's_Navratan_Mix_202604272228.jpeg" },

    // ==========================================
    // BATCH 12: CHIPS & SNACKS EXPANSION
    // ==========================================
    {"id": "lays_classic_salted", "name": "Lay's Classic Salted", "category": "snacks", "subcategory": "Chips", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (20g)", "grams": 20}, {"label": "Medium Pack (50g)", "grams": 50}, {"label": "Large Pack (100g)", "grams": 100}, {"label": "Custom (g)", "grams": null}], "per100g": {"calories": 553, "protein": 7.0, "carbs": 52, "fat": 35, "fiber": 1.0}, "image": "exp4/Pile_of_potato_202604272256.jpeg"},
    {"id": "lays_magic_masala", "name": "Lay's India's Magic Masala", "category": "snacks", "subcategory": "Chips", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (20g)", "grams": 20}, {"label": "Medium Pack (50g)", "grams": 50}, {"label": "Large Pack (100g)", "grams": 100}, {"label": "Custom (g)", "grams": null}], "per100g": {"calories": 539, "protein": 7.2, "carbs": 51, "fat": 33, "fiber": 1.2}, "image": "exp4/Rippled_chips_coated_202604272256.jpeg"},
    {"id": "lays_tomato_tango", "name": "Lay's Spanish Tomato Tango", "category": "snacks", "subcategory": "Chips", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (20g)", "grams": 20}, {"label": "Medium Pack (50g)", "grams": 50}, {"label": "Large Pack (100g)", "grams": 100}, {"label": "Custom (g)", "grams": null}], "per100g": {"calories": 525, "protein": 7.1, "carbs": 53, "fat": 32, "fiber": 1.1}, "image": "exp4/Red_potato_chips_202604272256.jpeg"},
    {"id": "lays_cream_onion", "name": "Lay's American Style Cream & Onion", "category": "snacks", "subcategory": "Chips", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (20g)", "grams": 20}, {"label": "Medium Pack (50g)", "grams": 50}, {"label": "Large Pack (100g)", "grams": 100}, {"label": "Custom (g)", "grams": null}], "per100g": {"calories": 544, "protein": 7.8, "carbs": 51, "fat": 34, "fiber": 1.0}, "image": "exp4/Potato_chips_with_202604272256.jpeg"},
    {"id": "lays_hot_sweet_chilli", "name": "Lay's West Indies Hot 'n' Sweet Chilli", "category": "snacks", "subcategory": "Chips", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (20g)", "grams": 20}, {"label": "Medium Pack (50g)", "grams": 50}, {"label": "Large Pack (100g)", "grams": 100}, {"label": "Custom (g)", "grams": null}], "per100g": {"calories": 540, "protein": 7.0, "carbs": 53, "fat": 33, "fiber": 1.0}, "image": "exp4/Red_potato_chips_202604272256_2.jpeg"},
    {"id": "bingo_mad_angles_achaari", "name": "Bingo! Mad Angles Achaari Masti", "category": "snacks", "subcategory": "Chips", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (20g)", "grams": 20}, {"label": "Medium Pack (50g)", "grams": 50}, {"label": "Large Pack (100g)", "grams": 100}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 526, "protein": 5.9, "carbs": 61, "fat": 30, "fiber": 1.5}, "image": "exp4/Triangular_corn_chips_202604272256.jpeg"},
    {"id": "bingo_mad_angles_masala", "name": "Bingo! Mad Angles Mmm Masala", "category": "snacks", "subcategory": "Chips", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (20g)", "grams": 20}, {"label": "Medium Pack (50g)", "grams": 50}, {"label": "Large Pack (100g)", "grams": 100}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 546, "protein": 5.6, "carbs": 58, "fat": 32, "fiber": 1.5}, "image": "exp4/Triangular_chips_with_202604272256.jpeg"},
    {"id": "bingo_tedhe_medhe_masala", "name": "Bingo! Tedhe Medhe Masala Tadka", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (20g)", "grams": 20}, {"label": "Medium Pack (50g)", "grams": 50}, {"label": "Large Pack (100g)", "grams": 100}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 540, "protein": 6.5, "carbs": 55, "fat": 32, "fiber": 2.0}, "image": "exp4/Spindle-shaped_crunchy_snacks_202604272256.jpeg"},
    {"id": "tooyumm_karare_masala", "name": "Too Yumm! Karare Munchy Masala", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (20g)", "grams": 20}, {"label": "Medium Pack (50g)", "grams": 50}, {"label": "Large Pack (100g)", "grams": 100}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 470, "protein": 8.0, "carbs": 65, "fat": 20, "fiber": 3.0}, "image": "exp4/Corn_twists_with_202604272256.jpeg"},
    {"id": "tooyumm_karare_chilli", "name": "Too Yumm! Karare Chilli Achari", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (20g)", "grams": 20}, {"label": "Medium Pack (50g)", "grams": 50}, {"label": "Large Pack (100g)", "grams": 100}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 470, "protein": 8.0, "carbs": 65, "fat": 20, "fiber": 3.0}, "image": "exp4/Crunchy_corn_twists_202604272256.jpeg"},
    {"id": "tooyumm_veggie_stix_cheese", "name": "Too Yumm! Veggie Stix Cheese & Herbs", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (20g)", "grams": 20}, {"label": "Medium Pack (50g)", "grams": 50}, {"label": "Large Pack (100g)", "grams": 100}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 485, "protein": 7.0, "carbs": 70, "fat": 22, "fiber": 2.2}, "image": "exp4/Vegetable_sticks_with_202604272256.jpeg"},
    {"id": "tooyumm_multigrain_chips", "name": "Too Yumm! Multigrain Chips Magic Masala", "category": "snacks", "subcategory": "Chips", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (20g)", "grams": 20}, {"label": "Medium Pack (50g)", "grams": 50}, {"label": "Large Pack (100g)", "grams": 100}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 480, "protein": 7.5, "carbs": 68, "fat": 20, "fiber": 4.0}, "image": "exp4/Multigrain_chips_with_202604272256.jpeg"},
    {"id": "kurkure_chilli_chatka", "name": "Kurkure Chilli Chatka", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (20g)", "grams": 20}, {"label": "Medium Pack (50g)", "grams": 50}, {"label": "Large Pack (100g)", "grams": 100}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 558, "protein": 6.0, "carbs": 55, "fat": 35, "fiber": 1.5}, "image": "exp4/Orange-red_corn_puffs_202604272256.jpeg"},
    {"id": "kurkure_green_chutney", "name": "Kurkure Green Chutney Rajasthani Style", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (20g)", "grams": 20}, {"label": "Medium Pack (50g)", "grams": 50}, {"label": "Large Pack (100g)", "grams": 100}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 560, "protein": 5.8, "carbs": 56, "fat": 35, "fiber": 1.5}, "image": "exp4/Corn_puffs_mint_202604272256.jpeg"},
    {"id": "cheetos_cheese_puffs", "name": "Cheetos Cheese Puffs", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (20g)", "grams": 20}, {"label": "Medium Pack (50g)", "grams": 50}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 542, "protein": 6.5, "carbs": 55, "fat": 33, "fiber": 1.0}, "image": "exp4/Orange_corn_puffs_202604272256.jpeg"},
    {"id": "peppy_cheese_balls", "name": "Peppy Cheese Balls", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (20g)", "grams": 20}, {"label": "Medium Pack (50g)", "grams": 50}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 540, "protein": 6.0, "carbs": 58, "fat": 32, "fiber": 1.0}, "image": "exp4/Orange_corn_balls_202604272256.jpeg"},
    {"id": "piknik_tomato_stick", "name": "Piknik Tomato Stick", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (20g)", "grams": 20}, {"label": "Medium Pack (50g)", "grams": 50}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 520, "protein": 6.0, "carbs": 62, "fat": 28, "fiber": 1.2}, "image": "exp4/Red_seasoned_potato_202604272256.jpeg"},
    {"id": "taali_protein_puffs_cheese", "name": "Taali Protein Puffs Cheese & Herbs", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (25g)", "grams": 25}, {"label": "Medium Pack (50g)", "grams": 50}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 415, "protein": 18, "carbs": 52, "fat": 15, "fiber": 5.0}, "image": "exp4/Roasted_puffs_with_202604272256.jpeg"},
    {"id": "taali_protein_puffs_masala", "name": "Taali Protein Puffs Masala Munch", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (25g)", "grams": 25}, {"label": "Medium Pack (50g)", "grams": 50}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 415, "protein": 18, "carbs": 52, "fat": 15, "fiber": 5.0}, "image": "exp4/Roasted_puffs_spicy_202604272256.jpeg"},
    {"id": "a1_chips_banana_salted", "name": "A1 Chips Banana Chips Salted", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (50g)", "grams": 50}, {"label": "100g Pack", "grams": 100}, {"label": "Custom (g)", "grams": null}], "per100g": {"calories": 513, "protein": 8.7, "carbs": 57, "fat": 27, "fiber": 2.5}, "image": "exp4/Fried_banana_chips_202604272256.jpeg"},
    {"id": "a1_chips_banana_pepper", "name": "A1 Chips Banana Chips Pepper", "category": "snacks", "subcategory": "Namkeen", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 30}, "servingOptions": [{"label": "Small Pack (50g)", "grams": 50}, {"label": "100g Pack", "grams": 100}, {"label": "Custom (g)", "grams": null}], "per100g": {"calories": 515, "protein": 8.5, "carbs": 58, "fat": 28, "fiber": 2.5}, "image": "exp4/Banana_chips_with_202604272256.jpeg"},
    {"id": "4700bc_popcorn_salt", "name": "4700BC Gourmet Popcorn Himalayan Salt", "category": "snacks", "subcategory": "Popcorn", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 25}, "servingOptions": [{"label": "Small Tin (50g)", "grams": 50}, {"label": "Regular Pack (100g)", "grams": 100}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 430, "protein": 10, "carbs": 55, "fat": 20, "fiber": 12}, "image": "exp4/Popcorn_kernels_with_202604272256.jpeg"},
    {"id": "4700bc_popcorn_cheese", "name": "4700BC Gourmet Popcorn Cheese", "category": "snacks", "subcategory": "Popcorn", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 25}, "servingOptions": [{"label": "Small Tin (50g)", "grams": 50}, {"label": "Regular Pack (100g)", "grams": 100}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 510, "protein": 9, "carbs": 52, "fat": 32, "fiber": 10}, "image": "exp4/Popcorn_coated_cheddar_202604272256.jpeg"},
    {"id": "4700bc_popcorn_caramel", "name": "4700BC Gourmet Popcorn Caramel", "category": "snacks", "subcategory": "Popcorn", "servingType": "grams", "defaultServing": {"unit": "grams", "amount": 25}, "servingOptions": [{"label": "Small Tin (50g)", "grams": 50}, {"label": "Regular Pack (100g)", "grams": 100}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 575, "protein": 4, "carbs": 75, "fat": 28, "fiber": 5}, "image": "exp4/Mushroom_popcorn_coated_202604272256.jpeg"},

    // ==========================================
    // BATCH 13: IRANI CAFÉ SNACKS
    // ==========================================
    {"id": "irani_tea", "name": "Irani Tea (Irani Chai)", "category": "beverages", "subcategory": "Tea & Coffee", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Small Glass (120ml)", "grams": 120}, {"label": "1 Regular Glass (180ml)", "grams": 180}, {"label": "1 Large Glass (250ml)", "grams": 250}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 62, "protein": 1.8, "carbs": 8.5, "fat": 2.5, "fiber": 0}, "image": "exp5/Irani_Chai_in_glass_cup_202605021931.jpeg"},
    {"id": "bun_maska", "name": "Bun Maska", "category": "snacks", "subcategory": "Irani Café", "servingType": "count", "defaultServing": {"unit": "piece", "amount": 1}, "servingOptions": [{"label": "1 Bun Maska", "grams": 80}, {"label": "2 Bun Maska", "grams": 160}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 330, "protein": 7, "carbs": 45, "fat": 14, "fiber": 1.5}, "image": "exp5/Bun_Maska_with_butter_202605021931.jpeg"},
    {"id": "bun_butter_jam", "name": "Bun Butter Jam", "category": "snacks", "subcategory": "Irani Café", "servingType": "count", "defaultServing": {"unit": "piece", "amount": 1}, "servingOptions": [{"label": "1 Bun Butter Jam", "grams": 90}, {"label": "2 Bun Butter Jam", "grams": 180}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 345, "protein": 6, "carbs": 52, "fat": 13, "fiber": 1.2}, "image": "exp5/Bun_Butter_Jam_on_plate_202605021931.jpeg"},
    {"id": "osmania_biscuit", "name": "Osmania Biscuits", "category": "snacks", "subcategory": "Irani Café", "servingType": "count", "defaultServing": {"unit": "biscuits", "amount": 2}, "servingOptions": [{"label": "1 Biscuit (12g)", "grams": 12}, {"label": "2 Biscuits (24g)", "grams": 24}, {"label": "4 Biscuits (48g)", "grams": 48}, {"label": "6 Biscuits (72g)", "grams": 72}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 458, "protein": 6.5, "carbs": 68, "fat": 18, "fiber": 1.0}, "image": "exp5/Osmania_Biscuits_on_vintage_plate_202605021931.jpeg"},

    // ==========================================
    // BATCH 14: MOCKTAILS
    // ==========================================
    {"id": "mocktail_blue_sea", "name": "Blue Sea Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 48, "protein": 0.1, "carbs": 12, "fat": 0, "fiber": 0}, "image": "exp5/Blue_Sea_Mocktail_in_glass_202605021931.jpeg"},
    {"id": "mocktail_mango_sunset", "name": "Mango Sunset Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 58, "protein": 0.3, "carbs": 14.5, "fat": 0.1, "fiber": 0.2}, "image": "exp5/Mango_Sunset_Mocktail_layered_drink_202605021931.jpeg"},
    {"id": "mocktail_strawberry_litchi", "name": "Strawberry Litchi Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 52, "protein": 0.2, "carbs": 13, "fat": 0, "fiber": 0.3}, "image": "exp5/Strawberry_Litchi_Mocktail_in_glass_202605021931.jpeg"},
    {"id": "mocktail_green_apple_mojito", "name": "Green Apple Mojito", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 45, "protein": 0.1, "carbs": 11, "fat": 0, "fiber": 0.1}, "image": "exp5/Green_Apple_Mojito_mocktail_glass_202605021931.jpeg"},
    {"id": "mocktail_pina_colada", "name": "Piña Colada (Virgin)", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 72, "protein": 0.4, "carbs": 14, "fat": 2, "fiber": 0.2}, "image": "exp5/Virgin_Piña_Colada_in_glass_202605021931.jpeg"},
    {"id": "mocktail_virgin_mojito", "name": "Virgin Mojito", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 40, "protein": 0.1, "carbs": 10, "fat": 0, "fiber": 0.1}, "image": "exp5/Virgin_Mojito_in_highball_glass_202605021931.jpeg"},
    {"id": "mocktail_blue_lagoon", "name": "Blue Lagoon Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 50, "protein": 0.1, "carbs": 12.5, "fat": 0, "fiber": 0}, "image": "exp5/Blue_Lagoon_Mocktail_in_glass_202605021931.jpeg"},
    {"id": "mocktail_shirley_temple", "name": "Shirley Temple Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 44, "protein": 0, "carbs": 11, "fat": 0, "fiber": 0}, "image": "exp5/Shirley_Temple_Mocktail_in_glass_202605021931.jpeg"},
    {"id": "mocktail_watermelon_cooler", "name": "Watermelon Cooler Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 35, "protein": 0.3, "carbs": 8.5, "fat": 0.1, "fiber": 0.2}, "image": "exp5/Watermelon_Cooler_Mocktail_in_jar_202605021931.jpeg"},
    {"id": "mocktail_peach_iced_tea", "name": "Peach Iced Tea Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 38, "protein": 0.1, "carbs": 9.5, "fat": 0, "fiber": 0.1}, "image": "exp5/Peach_Iced_Tea_Mocktail_condensa._202605021931.jpeg"},
    {"id": "mocktail_lemon_iced_tea", "name": "Lemon Iced Tea Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 36, "protein": 0.1, "carbs": 9, "fat": 0, "fiber": 0.1}, "image": "exp5/Lemon_Iced_Tea_Mocktail_condensa._202605021931.jpeg"},
    {"id": "mocktail_passion_fruit_cooler", "name": "Passion Fruit Cooler Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 55, "protein": 0.3, "carbs": 13.5, "fat": 0.1, "fiber": 0.5}, "image": "exp5/Passion_Fruit_Cooler_Mocktail_glass_202605021931.jpeg"},
    {"id": "mocktail_kiwi_crush", "name": "Kiwi Crush Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 46, "protein": 0.4, "carbs": 11, "fat": 0.2, "fiber": 0.5}, "image": "exp5/Kiwi_Crush_Mocktail_in_glass_202605021931.jpeg"},
    {"id": "mocktail_cranberry_spritz", "name": "Cranberry Spritz Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 42, "protein": 0.1, "carbs": 10.5, "fat": 0, "fiber": 0.1}, "image": "exp5/Cranberry_Spritz_Mocktail_in_glass_202605021931.jpeg"},
    {"id": "mocktail_tropical_paradise", "name": "Tropical Paradise Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 60, "protein": 0.3, "carbs": 15, "fat": 0.2, "fiber": 0.3}, "image": "exp5/Tropical_Paradise_Mocktail_photo._202605021931.jpeg"},
    {"id": "mocktail_rose_lemonade", "name": "Rose Lemonade Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 38, "protein": 0, "carbs": 9.5, "fat": 0, "fiber": 0}, "image": "exp5/Rose_Lemonade_Mocktail_in_glass_202605021931.jpeg"},
    {"id": "mocktail_mango_mojito", "name": "Mango Mojito Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 55, "protein": 0.2, "carbs": 14, "fat": 0.1, "fiber": 0.2}, "image": "exp5/Mango_Mojito_Mocktail_in_glass_202605021931.jpeg"},
    {"id": "mocktail_strawberry_daiquiri", "name": "Virgin Strawberry Daiquiri", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 48, "protein": 0.3, "carbs": 12, "fat": 0.1, "fiber": 0.4}, "image": "exp5/Virgin_Strawberry_Daiquiri_froze._202605021931.jpeg"},
    {"id": "mocktail_cucumber_mint_cooler", "name": "Cucumber Mint Cooler Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 25, "protein": 0.2, "carbs": 6, "fat": 0, "fiber": 0.2}, "image": "exp5/Cucumber_Mint_Cooler_Mocktail_202605021931.jpeg"},
    {"id": "mocktail_orange_fizz", "name": "Orange Fizz Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 42, "protein": 0.3, "carbs": 10.5, "fat": 0.1, "fiber": 0.2}, "image": "exp5/Orange_Fizz_Mocktail_in_glass_202605021931.jpeg"},
    {"id": "mocktail_lychee_martini", "name": "Virgin Lychee Martini", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 50, "protein": 0.2, "carbs": 12.5, "fat": 0, "fiber": 0.1}, "image": "exp5/Professional_beverage_photography_of_Virgin_202605021931.jpeg"},
    {"id": "mocktail_pomegranate_sparkle", "name": "Pomegranate Sparkle Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 54, "protein": 0.2, "carbs": 13.5, "fat": 0.1, "fiber": 0.2}, "image": "exp5/Pomegranate_Sparkle_Mocktail_pho._202605021931.jpeg"},
    {"id": "mocktail_berry_blast", "name": "Berry Blast Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 46, "protein": 0.3, "carbs": 11.5, "fat": 0.1, "fiber": 0.5}, "image": "exp5/Berry_Blast_Mocktail_with_berries_202605021931.jpeg"},
    {"id": "mocktail_mint_lime_sparkler", "name": "Mint Lime Sparkler Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 32, "protein": 0.1, "carbs": 8, "fat": 0, "fiber": 0.1}, "image": "exp5/Mint_Lime_Sparkler_Mocktail_202605021931.jpeg"},
    {"id": "mocktail_guava_chilli", "name": "Guava Chilli Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 44, "protein": 0.3, "carbs": 11, "fat": 0.1, "fiber": 0.4}, "image": "exp5/Guava_Chilli_Mocktail_drink_202605021931.jpeg"},
    {"id": "mocktail_sangria_virgin", "name": "Virgin Sangria", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 50, "protein": 0.2, "carbs": 12.5, "fat": 0.1, "fiber": 0.3}, "image": "exp5/Virgin_Sangria_in_wine_glass_202605021931.jpeg"},
    {"id": "mocktail_bubblegum_blast", "name": "Bubblegum Blast Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 56, "protein": 0, "carbs": 14, "fat": 0, "fiber": 0}, "image": "exp5/Bubblegum_Blast_Mocktail_with_co._202605021931.jpeg"},
    {"id": "mocktail_oreo_shake_mocktail", "name": "Oreo Shake Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (300ml)", "grams": 300}, {"label": "1 Tall Glass (400ml)", "grams": 400}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 95, "protein": 2.5, "carbs": 14, "fat": 3.5, "fiber": 0.3}, "image": "exp5/Oreo_Shake_Mocktail_in_glass_202605021931.jpeg"},
    {"id": "mocktail_cotton_candy", "name": "Cotton Candy Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 52, "protein": 0, "carbs": 13, "fat": 0, "fiber": 0}, "image": "exp5/Cotton_Candy_Mocktail_in_glass_202605021931.jpeg"},
    {"id": "mocktail_electric_lemonade", "name": "Electric Lemonade Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 46, "protein": 0.1, "carbs": 11.5, "fat": 0, "fiber": 0}, "image": "exp5/Professional_beverage_photography_of_Electric_202605021931.jpeg"},
    {"id": "mocktail_thandai", "name": "Thandai Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 85, "protein": 2.5, "carbs": 12, "fat": 3, "fiber": 0.5}, "image": "exp5/Thandai_Mocktail_in_brass_glass_202605021931.jpeg"},
    {"id": "mocktail_kokum_cooler", "name": "Kokum Cooler Mocktail", "category": "beverages", "subcategory": "Mocktails", "servingType": "volume", "defaultServing": {"unit": "glass", "amount": 1}, "servingOptions": [{"label": "1 Glass (250ml)", "grams": 250}, {"label": "1 Tall Glass (350ml)", "grams": 350}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 35, "protein": 0.2, "carbs": 8.5, "fat": 0, "fiber": 0.3}, "image": "exp5/Kokum_Cooler_Mocktail_in_glass_202605021931.jpeg"},
    // ==========================================
    // BATCH 15: AMUL CHOCOLATES & MILKSHAKE
    // ==========================================
    {"id": "amul_velvet_chocolate_milkshake", "name": "Amul Velvet Fine Chocolate Milkshake", "category": "beverages", "subcategory": "Milkshakes", "servingType": "volume", "defaultServing": {"unit": "can", "amount": 1}, "servingOptions": [{"label": "1 Can (250ml)", "grams": 250}, {"label": "Custom (ml)", "grams": null}], "per100g": {"calories": 105, "protein": 3.5, "carbs": 14.5, "fat": 3.8, "fiber": 0.5}, "image": "exp5/Chocolate_milkshake_in_glass_202605021946.jpeg"},
    {"id": "amul_dark_chocolate", "name": "Amul Dark Chocolate (55%)", "category": "snacks", "subcategory": "Chocolates", "servingType": "grams", "defaultServing": {"unit": "bar", "amount": 1}, "servingOptions": [{"label": "1 Bar (40g)", "grams": 40}, {"label": "Large Bar (150g)", "grams": 150}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 551, "protein": 5.9, "carbs": 52.1, "fat": 35.4, "fiber": 6.0}, "image": "exp5/Amul_Dark_Chocolate_bar_pieces_202605021946.jpeg"},
    {"id": "amul_milk_chocolate", "name": "Amul Milk Chocolate", "category": "snacks", "subcategory": "Chocolates", "servingType": "grams", "defaultServing": {"unit": "bar", "amount": 1}, "servingOptions": [{"label": "1 Bar (40g)", "grams": 40}, {"label": "Large Bar (150g)", "grams": 150}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 535, "protein": 7.5, "carbs": 57.5, "fat": 30.5, "fiber": 2.0}, "image": "exp5/Amul_Milk_Chocolate_bar_pieces_202605021946.jpeg"},
    {"id": "amul_fruit_n_nut", "name": "Amul Fruit 'N' Nut Chocolate", "category": "snacks", "subcategory": "Chocolates", "servingType": "grams", "defaultServing": {"unit": "bar", "amount": 1}, "servingOptions": [{"label": "1 Bar (40g)", "grams": 40}, {"label": "Large Bar (150g)", "grams": 150}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 515, "protein": 7.8, "carbs": 56.5, "fat": 28.5, "fiber": 3.5}, "image": "exp5/Amul_Chocolate_bar_broken_pieces_202605021946.jpeg"},
    {"id": "amul_mystic_mocha", "name": "Amul Mystic Mocha Chocolate", "category": "snacks", "subcategory": "Chocolates", "servingType": "grams", "defaultServing": {"unit": "bar", "amount": 1}, "servingOptions": [{"label": "1 Bar (150g)", "grams": 150}, { "label": "Custom (g)", "grams": null }], "per100g": {"calories": 545, "protein": 6.5, "carbs": 53.0, "fat": 34.0, "fiber": 5.0}, "image": "exp5/Chocolate_bar_with_coffee_beans_202605021946.jpeg"},
    { "id": "tomato_onion_stir_fry", "name": "Tomato Onion Stir Fry", "category": "vegetables", "subcategory": "Dry Sabzi", "servingType": "volume", "defaultServing": { "unit": "katori", "amount": 1 }, "servingOptions": [{ "label": "Small Katori (100g)", "grams": 100 }, { "label": "Regular Bowl (180g)", "grams": 180 }, { "label": "Custom (g)", "grams": null }], "per100g": { "calories": 65, "protein": 1.2, "carbs": 7.5, "fat": 3.5, "fiber": 1.8 }, "image": null },
];// Image path helper — supports: full URLs, local filenames, or category fallback
function getFoodImagePath(food) {
    if (food.image) {
        // If it's already a full URL, use it directly
        if (food.image.startsWith('http://') || food.image.startsWith('https://')) {
            return food.image;
        }
        return `assets/food/items/${food.image}`;
    }
    return `assets/food/categories/${food.category}.jpg`;
}
