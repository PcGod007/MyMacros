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
const FOOD_DATABASE = [
    {
        "id": "idli_plain",
        "name": "Idli (Plain)",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Idli",
                "grams": 40
            },
            {
                "label": "2 Idlis",
                "grams": 80
            },
            {
                "label": "3 Idlis",
                "grams": 120
            },
            {
                "label": "4 Idlis",
                "grams": 160
            }
        ],
        "per100g": {
            "calories": 130,
            "protein": 3.5,
            "carbs": 24,
            "fat": 1.2,
            "fiber": 1.5
        },
        "image": "idli_plate.png"
    },
    {
        "id": "masala_dosa",
        "name": "Masala Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Dosa",
                "grams": 120
            },
            {
                "label": "2 Dosas",
                "grams": 240
            }
        ],
        "per100g": {
            "calories": 165,
            "protein": 3.8,
            "carbs": 25,
            "fat": 5.5,
            "fiber": 1.8
        },
        "image": "masala_dosa.jpg"
    },
    {
        "id": "plain_dosa",
        "name": "Plain Dosa",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Dosa",
                "grams": 80
            },
            {
                "label": "2 Dosas",
                "grams": 160
            }
        ],
        "per100g": {
            "calories": 150,
            "protein": 3.2,
            "carbs": 27,
            "fat": 3.5,
            "fiber": 1.2
        },
        "image": "Dosa_with_chutney_202604211133.jpeg"
    },
    {
        "id": "upma",
        "name": "Upma (Sooji)",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 120
            },
            {
                "label": "Regular Bowl",
                "grams": 200
            },
            {
                "label": "Large Bowl",
                "grams": 300
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 155,
            "protein": 4.2,
            "carbs": 22,
            "fat": 5.8,
            "fiber": 1.5
        },
        "image": "upma.png"
    },
    {
        "id": "poha",
        "name": "Poha (Flattened Rice)",
        "category": "breakfast",
        "subcategory": "North Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 120
            },
            {
                "label": "Regular Bowl",
                "grams": 200
            },
            {
                "label": "Large Bowl",
                "grams": 300
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 160,
            "protein": 3.5,
            "carbs": 28,
            "fat": 4.2,
            "fiber": 1.8
        },
        "image": "Indian_Poha_in_202604210139.jpeg"
    },
    {
        "id": "aloo_paratha",
        "name": "Aloo Paratha",
        "category": "breakfast",
        "subcategory": "North Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Paratha (80g)",
                "grams": 80
            },
            {
                "label": "Regular Paratha (120g)",
                "grams": 120
            },
            {
                "label": "Big Paratha (160g)",
                "grams": 160
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 230,
            "protein": 5,
            "carbs": 30,
            "fat": 10,
            "fiber": 2.5
        },
        "image": "gobi_paratha.jpeg"
    },
    {
        "id": "puri",
        "name": "Puri (Deep Fried)",
        "category": "breakfast",
        "subcategory": "North Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Puri",
                "grams": 30
            },
            {
                "label": "2 Puris",
                "grams": 60
            },
            {
                "label": "3 Puris",
                "grams": 90
            },
            {
                "label": "4 Puris",
                "grams": 120
            }
        ],
        "per100g": {
            "calories": 320,
            "protein": 7,
            "carbs": 42,
            "fat": 14,
            "fiber": 2
        },
        "image": "Puri_with_aloo_202604210139.jpeg"
    },
    {
        "id": "medu_vada",
        "name": "Medu Vada",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Vada",
                "grams": 50
            },
            {
                "label": "2 Vadas",
                "grams": 100
            },
            {
                "label": "3 Vadas",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 280,
            "protein": 10,
            "carbs": 28,
            "fat": 14,
            "fiber": 3
        },
        "image": "medu_vada.png"
    },
    {
        "id": "uttapam",
        "name": "Uttapam",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Uttapam",
                "grams": 150
            },
            {
                "label": "2 Uttapams",
                "grams": 300
            }
        ],
        "per100g": {
            "calories": 170,
            "protein": 5,
            "carbs": 26,
            "fat": 5,
            "fiber": 2
        },
        "image": "Uttapam_with_onions_202604210139.jpeg"
    },
    {
        "id": "chole_bhature",
        "name": "Chole Bhature",
        "category": "breakfast",
        "subcategory": "North Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Plate (2 Bhature + Chole)",
                "grams": 350
            },
            {
                "label": "Half Plate",
                "grams": 175
            }
        ],
        "per100g": {
            "calories": 290,
            "protein": 8,
            "carbs": 35,
            "fat": 13,
            "fiber": 4
        },
        "image": "Chole_Bhature_with_202604210139.jpeg"
    },
    {
        "id": "pongal",
        "name": "Ven Pongal",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 150
            },
            {
                "label": "Regular Bowl",
                "grams": 250
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 150,
            "protein": 4,
            "carbs": 22,
            "fat": 5,
            "fiber": 1
        },
        "image": "ven_pongal.png"
    },
    {
        "id": "pesarattu",
        "name": "Pesarattu (Moong Dosa)",
        "category": "breakfast",
        "subcategory": "South Indian",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Pesarattu",
                "grams": 100
            },
            {
                "label": "2 Pesarattus",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 140,
            "protein": 7,
            "carbs": 20,
            "fat": 3,
            "fiber": 3
        },
        "image": "Pesarattu_served_on_202604210052.jpeg"
    },
    {
        "id": "white_rice_cooked",
        "name": "White Rice (Cooked)",
        "category": "rice",
        "subcategory": "Staple",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 100
            },
            {
                "label": "Regular Bowl",
                "grams": 180
            },
            {
                "label": "Large Bowl",
                "grams": 280
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 130,
            "protein": 2.7,
            "carbs": 28,
            "fat": 0.3,
            "fiber": 0.4
        },
        "image": "Cooked_white_rice_202604210139.jpeg"
    },
    {
        "id": "white_rice_raw",
        "name": "White Rice (Raw / Uncooked)",
        "category": "rice",
        "subcategory": "Staple",
        "servingType": "weight",
        "defaultServing": {
            "unit": "grams",
            "amount": 60
        },
        "servingOptions": [
            {
                "label": "1 Small Handful (~30g)",
                "grams": 30
            },
            {
                "label": "¼ Cup Dry (~45g)",
                "grams": 45
            },
            {
                "label": "⅓ Cup Dry (~60g)",
                "grams": 60
            },
            {
                "label": "½ Cup Dry (~90g)",
                "grams": 90
            },
            {
                "label": "1 Cup Dry (~185g)",
                "grams": 185
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 360,
            "protein": 6.8,
            "carbs": 79,
            "fat": 0.5,
            "fiber": 1.3
        },
        "image": "Cooked_white_rice_202604210139.jpeg"
    },
    {
        "id": "brown_rice_cooked",
        "name": "Brown Rice (Cooked)",
        "category": "rice",
        "subcategory": "Staple",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 100
            },
            {
                "label": "Regular Bowl",
                "grams": 180
            },
            {
                "label": "Large Bowl",
                "grams": 280
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 123,
            "protein": 2.7,
            "carbs": 25.6,
            "fat": 1,
            "fiber": 1.8
        },
        "image": "brown_rice.png"
    },
    {
        "id": "brown_rice_raw",
        "name": "Brown Rice (Raw / Uncooked)",
        "category": "rice",
        "subcategory": "Staple",
        "servingType": "weight",
        "defaultServing": {
            "unit": "grams",
            "amount": 60
        },
        "servingOptions": [
            {
                "label": "1 Small Handful (~30g)",
                "grams": 30
            },
            {
                "label": "¼ Cup Dry (~45g)",
                "grams": 45
            },
            {
                "label": "⅓ Cup Dry (~60g)",
                "grams": 60
            },
            {
                "label": "½ Cup Dry (~90g)",
                "grams": 90
            },
            {
                "label": "1 Cup Dry (~185g)",
                "grams": 185
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 352,
            "protein": 7.5,
            "carbs": 73,
            "fat": 2.7,
            "fiber": 3.5
        },
        "image": "brown_rice.png"
    },
    {
        "id": "basmati_rice_cooked",
        "name": "Basmati Rice (Cooked)",
        "category": "rice",
        "subcategory": "Staple",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 100
            },
            {
                "label": "Regular Bowl",
                "grams": 180
            },
            {
                "label": "Large Bowl",
                "grams": 280
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 121,
            "protein": 2.5,
            "carbs": 26.2,
            "fat": 0.2,
            "fiber": 0.3
        },
        "image": "brown_rice.png"
    },
    {
        "id": "basmati_rice_raw",
        "name": "Basmati Rice (Raw / Uncooked)",
        "category": "rice",
        "subcategory": "Staple",
        "servingType": "weight",
        "defaultServing": {
            "unit": "grams",
            "amount": 60
        },
        "servingOptions": [
            {
                "label": "1 Small Handful (~30g)",
                "grams": 30
            },
            {
                "label": "¼ Cup Dry (~45g)",
                "grams": 45
            },
            {
                "label": "⅓ Cup Dry (~60g)",
                "grams": 60
            },
            {
                "label": "½ Cup Dry (~90g)",
                "grams": 90
            },
            {
                "label": "1 Cup Dry (~185g)",
                "grams": 185
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 349,
            "protein": 7.9,
            "carbs": 77.8,
            "fat": 0.4,
            "fiber": 0.8
        },
        "image": "Cooked_Basmati_rice_202604210139.jpeg"
    },
    {
        "id": "sona_masoori_rice_cooked",
        "name": "Sona Masoori Rice (Cooked)",
        "category": "rice",
        "subcategory": "Staple",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 100
            },
            {
                "label": "Regular Bowl",
                "grams": 180
            },
            {
                "label": "Large Bowl",
                "grams": 280
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 125,
            "protein": 2.6,
            "carbs": 27.5,
            "fat": 0.3,
            "fiber": 0.4
        },
        "image": "Cooked_Sona_Masoori_202604210139.jpeg"
    },
    {
        "id": "sona_masoori_rice_raw",
        "name": "Sona Masoori Rice (Raw / Uncooked)",
        "category": "rice",
        "subcategory": "Staple",
        "servingType": "weight",
        "defaultServing": {
            "unit": "grams",
            "amount": 60
        },
        "servingOptions": [
            {
                "label": "1 Small Handful (~30g)",
                "grams": 30
            },
            {
                "label": "¼ Cup Dry (~45g)",
                "grams": 45
            },
            {
                "label": "⅓ Cup Dry (~60g)",
                "grams": 60
            },
            {
                "label": "½ Cup Dry (~90g)",
                "grams": 90
            },
            {
                "label": "1 Cup Dry (~185g)",
                "grams": 185
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 356,
            "protein": 7.1,
            "carbs": 79.5,
            "fat": 0.5,
            "fiber": 1
        },
        "image": "Cooked_Sona_Masoori_202604210139.jpeg"
    },
    {
        "id": "red_rice_cooked",
        "name": "Red Rice (Cooked)",
        "category": "rice",
        "subcategory": "Staple",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 100
            },
            {
                "label": "Regular Bowl",
                "grams": 180
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 111,
            "protein": 2.4,
            "carbs": 23.5,
            "fat": 0.9,
            "fiber": 2
        },
        "image": "Cooked_Red_Rice_202604210139.jpeg"
    },
    {
        "id": "red_rice_raw",
        "name": "Red Rice (Raw / Uncooked)",
        "category": "rice",
        "subcategory": "Staple",
        "servingType": "weight",
        "defaultServing": {
            "unit": "grams",
            "amount": 60
        },
        "servingOptions": [
            {
                "label": "¼ Cup Dry (~45g)",
                "grams": 45
            },
            {
                "label": "⅓ Cup Dry (~60g)",
                "grams": 60
            },
            {
                "label": "½ Cup Dry (~90g)",
                "grams": 90
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 328,
            "protein": 7,
            "carbs": 68,
            "fat": 2.7,
            "fiber": 5.5
        },
        "image": "Cooked_Red_Rice_202604210139.jpeg"
    },
    {
        "id": "jeera_rice",
        "name": "Jeera Rice",
        "category": "rice",
        "subcategory": "Flavored Rice",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 120
            },
            {
                "label": "Regular Bowl",
                "grams": 200
            },
            {
                "label": "Large Bowl",
                "grams": 300
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 155,
            "protein": 3,
            "carbs": 28,
            "fat": 3.5,
            "fiber": 0.5
        },
        "image": "Jeera_rice_in_202604210139.jpeg"
    },
    {
        "id": "chicken_biryani",
        "name": "Chicken Biryani",
        "category": "rice",
        "subcategory": "Biryani",
        "servingType": "volume",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Plate",
                "grams": 200
            },
            {
                "label": "Regular Plate",
                "grams": 350
            },
            {
                "label": "Large Plate",
                "grams": 500
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 190,
            "protein": 9,
            "carbs": 24,
            "fat": 7,
            "fiber": 0.8
        },
        "image": "chicken_biryani.jpg"
    },
    {
        "id": "veg_biryani",
        "name": "Veg Biryani",
        "category": "rice",
        "subcategory": "Biryani",
        "servingType": "volume",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Plate",
                "grams": 200
            },
            {
                "label": "Regular Plate",
                "grams": 350
            },
            {
                "label": "Large Plate",
                "grams": 500
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 165,
            "protein": 4,
            "carbs": 26,
            "fat": 5,
            "fiber": 2
        },
        "image": "Veg_Biryani_served_202604210139.jpeg"
    },
    {
        "id": "veg_pulao",
        "name": "Veg Pulao",
        "category": "rice",
        "subcategory": "Flavored Rice",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 150
            },
            {
                "label": "Regular Bowl",
                "grams": 250
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 150,
            "protein": 3,
            "carbs": 25,
            "fat": 4.5,
            "fiber": 1.2
        },
        "image": "Veg_Pulao_with_202604210139.jpeg"
    },
    {
        "id": "lemon_rice",
        "name": "Lemon Rice",
        "category": "rice",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 150
            },
            {
                "label": "Regular Bowl",
                "grams": 250
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 160,
            "protein": 2.8,
            "carbs": 29,
            "fat": 3.8,
            "fiber": 0.5
        },
        "image": "South_Indian_Lemon_202604210139.jpeg"
    },
    {
        "id": "curd_rice",
        "name": "Curd Rice",
        "category": "rice",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 150
            },
            {
                "label": "Regular Bowl",
                "grams": 250
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 120,
            "protein": 4,
            "carbs": 20,
            "fat": 2.5,
            "fiber": 0.3
        },
        "image": "Curd_Rice_served_202604210210.jpeg"
    },
    {
        "id": "roti_wheat",
        "name": "Roti / Chapati (Wheat)",
        "category": "breads",
        "subcategory": "Indian Bread",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Roti",
                "grams": 35
            },
            {
                "label": "2 Rotis",
                "grams": 70
            },
            {
                "label": "3 Rotis",
                "grams": 105
            },
            {
                "label": "4 Rotis",
                "grams": 140
            }
        ],
        "per100g": {
            "calories": 297,
            "protein": 9.8,
            "carbs": 56,
            "fat": 3.7,
            "fiber": 4.5
        },
        "image": "roti.png"
    },
    {
        "id": "naan",
        "name": "Naan (Tandoor)",
        "category": "breads",
        "subcategory": "Indian Bread",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Naan",
                "grams": 90
            },
            {
                "label": "2 Naans",
                "grams": 180
            }
        ],
        "per100g": {
            "calories": 310,
            "protein": 9,
            "carbs": 54,
            "fat": 7,
            "fiber": 2
        },
        "image": "Butter_Naan_on_202604210139.jpeg"
    },
    {
        "id": "butter_naan",
        "name": "Butter Naan",
        "category": "breads",
        "subcategory": "Indian Bread",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Naan",
                "grams": 100
            },
            {
                "label": "2 Naans",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 340,
            "protein": 8.5,
            "carbs": 50,
            "fat": 12,
            "fiber": 1.8
        },
        "image": "Butter_Naan_on_202604210139.jpeg"
    },
    {
        "id": "garlic_naan",
        "name": "Garlic Naan",
        "category": "breads",
        "subcategory": "Indian Bread",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Naan",
                "grams": 100
            },
            {
                "label": "2 Naans",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 330,
            "protein": 8.5,
            "carbs": 52,
            "fat": 10,
            "fiber": 2
        },
        "image": "garlic_naan.png"
    },
    {
        "id": "paratha_plain",
        "name": "Plain Paratha",
        "category": "breads",
        "subcategory": "Indian Bread",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Paratha (60g)",
                "grams": 60
            },
            {
                "label": "Regular Paratha (80g)",
                "grams": 80
            },
            {
                "label": "Big Paratha (110g)",
                "grams": 110
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 260,
            "protein": 6,
            "carbs": 36,
            "fat": 10,
            "fiber": 2.5
        },
        "image": "paneer_paratha.png"
    },
    {
        "id": "rumali_roti",
        "name": "Rumali Roti",
        "category": "breads",
        "subcategory": "Indian Bread",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Roti",
                "grams": 40
            },
            {
                "label": "2 Rotis",
                "grams": 80
            }
        ],
        "per100g": {
            "calories": 240,
            "protein": 8,
            "carbs": 48,
            "fat": 2,
            "fiber": 2
        },
        "image": "Rumali_Roti_on_202604210139.jpeg"
    },
    {
        "id": "bhakri",
        "name": "Bhakri (Jowar/Bajra)",
        "category": "breads",
        "subcategory": "Regional",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Bhakri",
                "grams": 60
            },
            {
                "label": "2 Bhakris",
                "grams": 120
            }
        ],
        "per100g": {
            "calories": 340,
            "protein": 10,
            "carbs": 66,
            "fat": 3.5,
            "fiber": 6
        },
        "image": "Bhakri_with_white_202604210139.jpeg"
    },
    {
        "id": "dal_tadka",
        "name": "Dal Tadka (Toor)",
        "category": "curries",
        "subcategory": "Dal",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 120
            },
            {
                "label": "Regular Katori",
                "grams": 150
            },
            {
                "label": "Large Bowl",
                "grams": 250
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 110,
            "protein": 7,
            "carbs": 18,
            "fat": 1.5,
            "fiber": 4
        },
        "image": "dal_tadka.jpg"
    },
    {
        "id": "rajma",
        "name": "Rajma (Kidney Beans Curry)",
        "category": "curries",
        "subcategory": "North Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 130
            },
            {
                "label": "Regular Katori",
                "grams": 180
            },
            {
                "label": "Large Bowl",
                "grams": 280
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 130,
            "protein": 8.5,
            "carbs": 20,
            "fat": 2,
            "fiber": 6
        },
        "image": "Rajma_Curry_gourmet_202604210108.jpeg"
    },
    {
        "id": "chole",
        "name": "Chole / Chana Masala",
        "category": "curries",
        "subcategory": "North Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 130
            },
            {
                "label": "Regular Katori",
                "grams": 180
            },
            {
                "label": "Large Bowl",
                "grams": 280
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 140,
            "protein": 7,
            "carbs": 22,
            "fat": 3,
            "fiber": 5
        },
        "image": "Chole_Bhature_with_202604210139.jpeg"
    },
    {
        "id": "paneer_butter_masala",
        "name": "Paneer Butter Masala",
        "category": "curries",
        "subcategory": "North Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 150
            },
            {
                "label": "Regular Katori",
                "grams": 200
            },
            {
                "label": "Large Bowl",
                "grams": 300
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 220,
            "protein": 10,
            "carbs": 8,
            "fat": 17,
            "fiber": 0.8
        },
        "image": "paneer_butter_masala.jpg"
    },
    {
        "id": "palak_paneer",
        "name": "Palak Paneer",
        "category": "curries",
        "subcategory": "North Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 150
            },
            {
                "label": "Regular Katori",
                "grams": 200
            },
            {
                "label": "Large Bowl",
                "grams": 300
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 180,
            "protein": 9,
            "carbs": 6,
            "fat": 14,
            "fiber": 2
        },
        "image": "Palak_Paneer_in_202604210139.jpeg"
    },
    {
        "id": "dal_makhani",
        "name": "Dal Makhani",
        "category": "curries",
        "subcategory": "North Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 150
            },
            {
                "label": "Regular Katori",
                "grams": 200
            },
            {
                "label": "Large Bowl",
                "grams": 300
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 150,
            "protein": 6.5,
            "carbs": 15,
            "fat": 7,
            "fiber": 3.5
        },
        "image": "Dal_Makhani_in_202604210139.jpeg"
    },
    {
        "id": "chicken_curry",
        "name": "Chicken Curry",
        "category": "curries",
        "subcategory": "Non-Veg",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 150
            },
            {
                "label": "Regular Katori",
                "grams": 200
            },
            {
                "label": "Large Bowl",
                "grams": 300
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 175,
            "protein": 15,
            "carbs": 5,
            "fat": 10,
            "fiber": 1
        },
        "image": "Chettinad_Chicken_Curry_202604210052.jpeg"
    },
    {
        "id": "butter_chicken",
        "name": "Butter Chicken",
        "category": "curries",
        "subcategory": "Non-Veg",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 150
            },
            {
                "label": "Regular Katori",
                "grams": 200
            },
            {
                "label": "Large Bowl",
                "grams": 300
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 215,
            "protein": 14,
            "carbs": 6,
            "fat": 15,
            "fiber": 0.5
        },
        "image": "butter_chicken.jpg"
    },
    {
        "id": "egg_curry",
        "name": "Egg Curry",
        "category": "curries",
        "subcategory": "Non-Veg",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Egg Curry (1 Katori)",
                "grams": 200
            },
            {
                "label": "2 Egg Curry",
                "grams": 350
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 145,
            "protein": 9,
            "carbs": 5,
            "fat": 10,
            "fiber": 1
        },
        "image": "Indian_Egg_Curry_202604210140.jpeg"
    },
    {
        "id": "fish_curry",
        "name": "Fish Curry",
        "category": "curries",
        "subcategory": "Non-Veg",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 150
            },
            {
                "label": "Regular Katori",
                "grams": 200
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 140,
            "protein": 14,
            "carbs": 4,
            "fat": 7,
            "fiber": 0.5
        },
        "image": "Indian_Fish_Curry_202604210139.jpeg"
    },
    {
        "id": "sambar",
        "name": "Sambar",
        "category": "curries",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 120
            },
            {
                "label": "Regular Katori",
                "grams": 180
            },
            {
                "label": "Large Bowl",
                "grams": 280
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 65,
            "protein": 3,
            "carbs": 10,
            "fat": 1.5,
            "fiber": 2.5
        },
        "image": "Sambar_in_traditional_202604210139.jpeg"
    },
    {
        "id": "rasam",
        "name": "Rasam",
        "category": "curries",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 120
            },
            {
                "label": "Regular Bowl",
                "grams": 200
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 30,
            "protein": 1.5,
            "carbs": 5,
            "fat": 0.5,
            "fiber": 0.5
        },
        "image": "Rasam_soup_in_202604210139.jpeg"
    },
    {
        "id": "kadhi",
        "name": "Kadhi (Pakora)",
        "category": "curries",
        "subcategory": "North Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 150
            },
            {
                "label": "Regular Katori",
                "grams": 200
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 110,
            "protein": 4,
            "carbs": 10,
            "fat": 6,
            "fiber": 1
        },
        "image": "Kadhi_Pakora_served_202604210140.jpeg"
    },
    {
        "id": "mutton_curry",
        "name": "Mutton Curry",
        "category": "curries",
        "subcategory": "Non-Veg",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 150
            },
            {
                "label": "Regular Katori",
                "grams": 200
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 195,
            "protein": 16,
            "carbs": 4,
            "fat": 13,
            "fiber": 0.5
        },
        "image": "Indian_Mutton_Curry_202604210139.jpeg"
    },
    {
        "id": "shahi_paneer",
        "name": "Shahi Paneer",
        "category": "curries",
        "subcategory": "North Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 150
            },
            {
                "label": "Regular Katori",
                "grams": 200
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 240,
            "protein": 10,
            "carbs": 7,
            "fat": 19,
            "fiber": 1
        },
        "image": "Achari_Paneer_in_202604210052.jpeg"
    },
    {
        "id": "aloo_gobi",
        "name": "Aloo Gobi",
        "category": "vegetables",
        "subcategory": "Dry Sabzi",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 120
            },
            {
                "label": "Regular Katori",
                "grams": 180
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 120,
            "protein": 3,
            "carbs": 14,
            "fat": 6,
            "fiber": 3
        },
        "image": "Aloo_Gobi_curry_202604210140.jpeg"
    },
    {
        "id": "bhindi_fry",
        "name": "Bhindi Fry (Okra)",
        "category": "vegetables",
        "subcategory": "Dry Sabzi",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 100
            },
            {
                "label": "Regular Katori",
                "grams": 150
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 95,
            "protein": 2.5,
            "carbs": 8,
            "fat": 6,
            "fiber": 4
        },
        "image": "Bhindi_Fry_on_202604210140.jpeg"
    },
    {
        "id": "palak_sabzi",
        "name": "Palak / Spinach Sabzi",
        "category": "vegetables",
        "subcategory": "Green Sabzi",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 120
            },
            {
                "label": "Regular Katori",
                "grams": 180
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 70,
            "protein": 3.5,
            "carbs": 5,
            "fat": 4,
            "fiber": 3
        },
        "image": "Spinach_sabzi_in_202604210139.jpeg"
    },
    {
        "id": "baingan_bharta",
        "name": "Baingan Bharta",
        "category": "vegetables",
        "subcategory": "Sabzi",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 120
            },
            {
                "label": "Regular Katori",
                "grams": 180
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 85,
            "protein": 2,
            "carbs": 8,
            "fat": 5,
            "fiber": 3.5
        },
        "image": "Baingan_Bharta_curry_202604210139.jpeg"
    },
    {
        "id": "mixed_veg_curry",
        "name": "Mixed Veg Curry",
        "category": "vegetables",
        "subcategory": "Gravy Sabzi",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 150
            },
            {
                "label": "Regular Katori",
                "grams": 200
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 100,
            "protein": 3,
            "carbs": 10,
            "fat": 5.5,
            "fiber": 3
        },
        "image": "Mixed_Veg_Curry_202604210139.jpeg"
    },
    {
        "id": "matar_paneer",
        "name": "Matar Paneer",
        "category": "vegetables",
        "subcategory": "Gravy Sabzi",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 150
            },
            {
                "label": "Regular Katori",
                "grams": 200
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 180,
            "protein": 9,
            "carbs": 8,
            "fat": 13,
            "fiber": 2
        },
        "image": "Matar_Paneer_curry_202604210139.jpeg"
    },
    {
        "id": "lauki_sabzi",
        "name": "Lauki / Bottle Gourd Sabzi",
        "category": "vegetables",
        "subcategory": "Light Sabzi",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 120
            },
            {
                "label": "Regular Katori",
                "grams": 180
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 45,
            "protein": 1.5,
            "carbs": 7,
            "fat": 1.5,
            "fiber": 1.5
        },
        "image": "Lauki_Sabzi_in_202604210139.jpeg"
    },
    {
        "id": "tinda_sabzi",
        "name": "Tinda Sabzi",
        "category": "vegetables",
        "subcategory": "Light Sabzi",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 120
            },
            {
                "label": "Regular Katori",
                "grams": 180
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 50,
            "protein": 1.5,
            "carbs": 8,
            "fat": 1.5,
            "fiber": 2
        },
        "image": "Tinda_Sabzi_on_202604210139.jpeg"
    },
    {
        "id": "whole_egg_boiled",
        "name": "Whole Egg (Boiled)",
        "category": "nonveg",
        "subcategory": "Eggs",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Egg",
                "grams": 50
            },
            {
                "label": "2 Eggs",
                "grams": 100
            },
            {
                "label": "3 Eggs",
                "grams": 150
            },
            {
                "label": "4 Eggs",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 155,
            "protein": 13,
            "carbs": 1.1,
            "fat": 11,
            "fiber": 0
        },
        "image": "Boiled_eggs_on_202604210139.jpeg"
    },
    {
        "id": "egg_white_boiled",
        "name": "Egg White (Boiled)",
        "category": "nonveg",
        "subcategory": "Eggs",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 White",
                "grams": 33
            },
            {
                "label": "2 Whites",
                "grams": 66
            },
            {
                "label": "3 Whites",
                "grams": 99
            },
            {
                "label": "4 Whites",
                "grams": 132
            }
        ],
        "per100g": {
            "calories": 52,
            "protein": 11,
            "carbs": 0.7,
            "fat": 0.2,
            "fiber": 0
        },
        "image": "Boiled_egg_whites_202604210210.jpeg"
    },
    {
        "id": "egg_bhurji",
        "name": "Egg Bhurji (Scrambled)",
        "category": "nonveg",
        "subcategory": "Eggs",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "plate",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "2 Egg Bhurji",
                "grams": 120
            },
            {
                "label": "3 Egg Bhurji",
                "grams": 180
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 180,
            "protein": 12,
            "carbs": 3,
            "fat": 13,
            "fiber": 0.5
        },
        "image": "Indian_Egg_Bhurji_202604210210.jpeg"
    },
    {
        "id": "omelette",
        "name": "Omelette (2 Eggs)",
        "category": "nonveg",
        "subcategory": "Eggs",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Omelette (2 Egg)",
                "grams": 120
            },
            {
                "label": "1 Omelette (3 Egg)",
                "grams": 175
            }
        ],
        "per100g": {
            "calories": 175,
            "protein": 12,
            "carbs": 1.5,
            "fat": 13,
            "fiber": 0.3
        },
        "image": "Indian_Omelette_on_202604210139.jpeg"
    },
    {
        "id": "grilled_chicken_breast",
        "name": "Grilled Chicken Breast",
        "category": "nonveg",
        "subcategory": "Chicken",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 150
        },
        "servingOptions": [
            {
                "label": "Small Piece (100g)",
                "grams": 100
            },
            {
                "label": "Regular Piece (150g)",
                "grams": 150
            },
            {
                "label": "Large Piece (200g)",
                "grams": 200
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 165,
            "protein": 31,
            "carbs": 0,
            "fat": 3.6,
            "fiber": 0
        },
        "image": "Grilled_chicken_breasts_202604210210.jpeg"
    },
    {
        "id": "tandoori_chicken",
        "name": "Tandoori Chicken",
        "category": "nonveg",
        "subcategory": "Chicken",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Piece (Leg)",
                "grams": 120
            },
            {
                "label": "2 Pieces",
                "grams": 240
            },
            {
                "label": "Quarter Plate",
                "grams": 300
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 190,
            "protein": 25,
            "carbs": 3,
            "fat": 8,
            "fiber": 0.5
        },
        "image": "Tandoori_chicken_served_202604210210.jpeg"
    },
    {
        "id": "chicken_tikka",
        "name": "Chicken Tikka",
        "category": "nonveg",
        "subcategory": "Chicken",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 150
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
            {
                "label": "Large Plate (200g)",
                "grams": 200
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 185,
            "protein": 24,
            "carbs": 4,
            "fat": 8,
            "fiber": 0.5
        },
        "image": "Chicken_Tikka_served_202604210210.jpeg"
    },
    {
        "id": "fish_fry",
        "name": "Fish Fry",
        "category": "nonveg",
        "subcategory": "Seafood",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece",
                "grams": 100
            },
            {
                "label": "2 Pieces",
                "grams": 200
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 220,
            "protein": 18,
            "carbs": 10,
            "fat": 12,
            "fiber": 0.5
        },
        "image": "Indian_Fish_Curry_202604210139.jpeg"
    },
    {
        "id": "keema_mutton",
        "name": "Keema (Mutton Mince)",
        "category": "nonveg",
        "subcategory": "Mutton",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 120
            },
            {
                "label": "Regular Katori",
                "grams": 180
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 210,
            "protein": 18,
            "carbs": 4,
            "fat": 14,
            "fiber": 0.5
        },
        "image": "Keema_Matar_curry_202604210210.jpeg"
    },
    {
        "id": "paneer_raw",
        "name": "Paneer (Raw/Fresh)",
        "category": "dairy",
        "subcategory": "Cheese",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 100
        },
        "servingOptions": [
            {
                "label": "Small Piece (50g)",
                "grams": 50
            },
            {
                "label": "Regular (100g)",
                "grams": 100
            },
            {
                "label": "Large (150g)",
                "grams": 150
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 265,
            "protein": 18.3,
            "carbs": 3.6,
            "fat": 20.8,
            "fiber": 0
        },
        "image": "Raw_paneer_on_202604210210.jpeg"
    },
    {
        "id": "paneer_tikka",
        "name": "Paneer Tikka",
        "category": "dairy",
        "subcategory": "Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 150
        },
        "servingOptions": [
            {
                "label": "Small Plate (100g)",
                "grams": 100
            },
            {
                "label": "Standard Plate (150g)",
                "grams": 150
            },
            {
                "label": "Large Plate (200g)",
                "grams": 200
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 265,
            "protein": 18.5,
            "carbs": 7.2,
            "fat": 18.8,
            "fiber": 1.2
        },
        "image": "Paneer_Tikka_Masala_202604210052.jpeg"
    },
    {
        "id": "milk_whole",
        "name": "Milk (Full Cream)",
        "category": "dairy",
        "subcategory": "Milk",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Glass (150ml)",
                "grams": 155
            },
            {
                "label": "Regular Glass (250ml)",
                "grams": 258
            },
            {
                "label": "Large Glass (400ml)",
                "grams": 412
            },
            {
                "label": "Custom (ml)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 62,
            "protein": 3.2,
            "carbs": 4.8,
            "fat": 3.3,
            "fiber": 0
        },
        "image": "Badam_Milk_served_202604210052.jpeg"
    },
    {
        "id": "milk_toned",
        "name": "Milk (Toned)",
        "category": "dairy",
        "subcategory": "Milk",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Glass (150ml)",
                "grams": 155
            },
            {
                "label": "Regular Glass (250ml)",
                "grams": 258
            },
            {
                "label": "Custom (ml)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 50,
            "protein": 3.2,
            "carbs": 4.8,
            "fat": 1.5,
            "fiber": 0
        },
        "image": "Toned_Milk_in_202604210210.jpeg"
    },
    {
        "id": "curd",
        "name": "Curd / Dahi (Full Fat)",
        "category": "dairy",
        "subcategory": "Dairy",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 100
            },
            {
                "label": "Regular Katori",
                "grams": 150
            },
            {
                "label": "Large Bowl",
                "grams": 250
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 60,
            "protein": 3.1,
            "carbs": 4.9,
            "fat": 3,
            "fiber": 0
        },
        "image": "Curd_in_clay_202604210139.jpeg"
    },
    {
        "id": "lassi_sweet",
        "name": "Lassi (Sweet)",
        "category": "dairy",
        "subcategory": "Beverages",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Glass (200ml)",
                "grams": 210
            },
            {
                "label": "Regular Glass (350ml)",
                "grams": 368
            },
            {
                "label": "Custom (ml)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 85,
            "protein": 2.5,
            "carbs": 14,
            "fat": 2,
            "fiber": 0
        },
        "image": "Sweet_Lassi_in_202604210210.jpeg"
    },
    {
        "id": "buttermilk",
        "name": "Chaas / Buttermilk",
        "category": "dairy",
        "subcategory": "Beverages",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Glass (250ml)",
                "grams": 255
            },
            {
                "label": "Large Glass (400ml)",
                "grams": 408
            },
            {
                "label": "Custom (ml)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 22,
            "protein": 1.5,
            "carbs": 3,
            "fat": 0.5,
            "fiber": 0
        },
        "image": "Chaas_buttermilk_in_202604210139.jpeg"
    },
    {
        "id": "ghee",
        "name": "Ghee (Clarified Butter)",
        "category": "dairy",
        "subcategory": "Fats",
        "servingType": "weight",
        "defaultServing": {
            "unit": "tsp",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 tsp (5g)",
                "grams": 5
            },
            {
                "label": "1 tbsp (15g)",
                "grams": 15
            },
            {
                "label": "2 tbsp (30g)",
                "grams": 30
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 900,
            "protein": 0,
            "carbs": 0,
            "fat": 99.8,
            "fiber": 0
        },
        "image": "Cow_Ghee_in_202604210210.jpeg"
    },
    {
        "id": "banana",
        "name": "Banana",
        "category": "fruits",
        "subcategory": "Fruit",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Small",
                "grams": 80
            },
            {
                "label": "1 Medium",
                "grams": 118
            },
            {
                "label": "1 Large",
                "grams": 150
            },
            {
                "label": "2 Medium",
                "grams": 236
            }
        ],
        "per100g": {
            "calories": 89,
            "protein": 1.1,
            "carbs": 23,
            "fat": 0.3,
            "fiber": 2.6
        },
        "image": "Ripe_yellow_bananas_202604210210.jpeg"
    },
    {
        "id": "apple",
        "name": "Apple",
        "category": "fruits",
        "subcategory": "Fruit",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Small",
                "grams": 150
            },
            {
                "label": "1 Medium",
                "grams": 182
            },
            {
                "label": "1 Large",
                "grams": 220
            }
        ],
        "per100g": {
            "calories": 52,
            "protein": 0.3,
            "carbs": 14,
            "fat": 0.2,
            "fiber": 2.4
        },
        "image": "Red_apple_on_202604210210.jpeg"
    },
    {
        "id": "mango",
        "name": "Mango",
        "category": "fruits",
        "subcategory": "Fruit",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Small",
                "grams": 150
            },
            {
                "label": "1 Medium",
                "grams": 200
            },
            {
                "label": "1 Cup (Chopped)",
                "grams": 165
            }
        ],
        "per100g": {
            "calories": 60,
            "protein": 0.8,
            "carbs": 15,
            "fat": 0.4,
            "fiber": 1.6
        },
        "image": "Ripe_Indian_Alphonso_202604210139.jpeg"
    },
    {
        "id": "papaya",
        "name": "Papaya",
        "category": "fruits",
        "subcategory": "Fruit",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Bowl",
                "grams": 120
            },
            {
                "label": "Regular Bowl",
                "grams": 200
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 43,
            "protein": 0.5,
            "carbs": 11,
            "fat": 0.3,
            "fiber": 1.7
        },
        "image": "Ripe_papaya_on_202604210139.jpeg"
    },
    {
        "id": "watermelon",
        "name": "Watermelon",
        "category": "fruits",
        "subcategory": "Fruit",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Bowl",
                "grams": 150
            },
            {
                "label": "Regular Bowl",
                "grams": 280
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 30,
            "protein": 0.6,
            "carbs": 7.6,
            "fat": 0.2,
            "fiber": 0.4
        },
        "image": "Watermelon_slices_with_202604210210.jpeg"
    },
    {
        "id": "guava",
        "name": "Guava",
        "category": "fruits",
        "subcategory": "Fruit",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Medium",
                "grams": 100
            },
            {
                "label": "2 Medium",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 68,
            "protein": 2.6,
            "carbs": 14,
            "fat": 1,
            "fiber": 5.4
        },
        "image": "Guava_with_chaat_202604210139.jpeg"
    },
    {
        "id": "samosa",
        "name": "Samosa (Aloo)",
        "category": "fruits",
        "subcategory": "Snack",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Small",
                "grams": 60
            },
            {
                "label": "1 Regular",
                "grams": 100
            },
            {
                "label": "2 Samosas",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 260,
            "protein": 4,
            "carbs": 30,
            "fat": 14,
            "fiber": 2
        },
        "image": "onion_samosa.jpeg"
    },
    {
        "id": "vada_pav",
        "name": "Vada Pav",
        "category": "fruits",
        "subcategory": "Snack",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Vada Pav",
                "grams": 150
            },
            {
                "label": "2 Vada Pavs",
                "grams": 300
            }
        ],
        "per100g": {
            "calories": 240,
            "protein": 4,
            "carbs": 32,
            "fat": 10,
            "fiber": 2
        },
        "image": "Mumbai_Vada_Pav_202604210139.jpeg"
    },
    {
        "id": "pakora",
        "name": "Pakora / Bhajji",
        "category": "fruits",
        "subcategory": "Snack",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 4
        },
        "servingOptions": [
            {
                "label": "2 Pieces",
                "grams": 50
            },
            {
                "label": "4 Pieces",
                "grams": 100
            },
            {
                "label": "6 Pieces",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 250,
            "protein": 5,
            "carbs": 25,
            "fat": 14,
            "fiber": 2
        },
        "image": "Mix_Veg_Pakora_202604210210.jpeg"
    },
    {
        "id": "dry_fruits_mix",
        "name": "Mixed Dry Fruits",
        "category": "fruits",
        "subcategory": "Dry Fruits",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Handful (15g)",
                "grams": 15
            },
            {
                "label": "Regular Handful (30g)",
                "grams": 30
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 520,
            "protein": 15,
            "carbs": 30,
            "fat": 40,
            "fiber": 6
        },
        "image": "Mixed_dry_fruits_202604210139.jpeg"
    },
    {
        "id": "chai",
        "name": "Chai (Milk Tea)",
        "category": "beverages",
        "subcategory": "Tea",
        "servingType": "volume",
        "defaultServing": {
            "unit": "cup",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Cup (100ml)",
                "grams": 105
            },
            {
                "label": "Regular Cup (150ml)",
                "grams": 158
            },
            {
                "label": "Cutting (75ml)",
                "grams": 79
            },
            {
                "label": "Large Cup (250ml)",
                "grams": 263
            }
        ],
        "per100g": {
            "calories": 45,
            "protein": 1.5,
            "carbs": 6,
            "fat": 1.5,
            "fiber": 0
        },
        "image": "Masala_Chai_in_202604210052.jpeg"
    },
    {
        "id": "black_tea",
        "name": "Black Tea (No Sugar)",
        "category": "beverages",
        "subcategory": "Tea",
        "servingType": "volume",
        "defaultServing": {
            "unit": "cup",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Cup (200ml)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 1,
            "protein": 0.1,
            "carbs": 0.2,
            "fat": 0,
            "fiber": 0
        },
        "image": "Black_tea_in_202604210210.jpeg"
    },
    {
        "id": "filter_coffee",
        "name": "Filter Coffee",
        "category": "beverages",
        "subcategory": "Coffee",
        "servingType": "volume",
        "defaultServing": {
            "unit": "cup",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Cup (120ml)",
                "grams": 125
            },
            {
                "label": "Regular Cup (180ml)",
                "grams": 188
            },
            {
                "label": "Large Cup (250ml)",
                "grams": 260
            }
        ],
        "per100g": {
            "calories": 40,
            "protein": 1.5,
            "carbs": 5,
            "fat": 1.5,
            "fiber": 0
        },
        "image": "South_Indian_Filter_202604210210.jpeg"
    },
    {
        "id": "black_coffee",
        "name": "Black Coffee",
        "category": "beverages",
        "subcategory": "Coffee",
        "servingType": "volume",
        "defaultServing": {
            "unit": "cup",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Cup (200ml)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 2,
            "protein": 0.3,
            "carbs": 0,
            "fat": 0,
            "fiber": 0
        },
        "image": "Black_coffee_in_202604210210.jpeg"
    },
    {
        "id": "nimbu_pani",
        "name": "Nimbu Pani / Lemonade",
        "category": "beverages",
        "subcategory": "Cold Drink",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Glass (250ml)",
                "grams": 260
            },
            {
                "label": "Large (400ml)",
                "grams": 416
            }
        ],
        "per100g": {
            "calories": 35,
            "protein": 0.2,
            "carbs": 8.5,
            "fat": 0.1,
            "fiber": 0.1
        },
        "image": "Fresh_lemon_juice_202604210108.jpeg"
    },
    {
        "id": "coconut_water",
        "name": "Coconut Water",
        "category": "beverages",
        "subcategory": "Natural",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small (200ml)",
                "grams": 200
            },
            {
                "label": "Regular (300ml)",
                "grams": 300
            },
            {
                "label": "Full Coconut",
                "grams": 350
            }
        ],
        "per100g": {
            "calories": 19,
            "protein": 0.7,
            "carbs": 3.7,
            "fat": 0.2,
            "fiber": 1.1
        },
        "image": "Coconut_water_with_202604210210.jpeg"
    },
    {
        "id": "oats_cooked",
        "name": "Oatmeal (Cooked)",
        "category": "generic",
        "subcategory": "Breakfast",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Bowl",
                "grams": 150
            },
            {
                "label": "Regular Bowl",
                "grams": 250
            },
            {
                "label": "Large Bowl",
                "grams": 350
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 71,
            "protein": 2.5,
            "carbs": 12,
            "fat": 1.5,
            "fiber": 2
        },
        "image": "Oatmeal_in_bowl_202604210139.jpeg"
    },
    {
        "id": "peanut_butter",
        "name": "Peanut Butter",
        "category": "generic",
        "subcategory": "Spread",
        "servingType": "weight",
        "defaultServing": {
            "unit": "tbsp",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 tbsp (15g)",
                "grams": 15
            },
            {
                "label": "2 tbsp (30g)",
                "grams": 30
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 630,
            "protein": 25,
            "carbs": 20,
            "fat": 50,
            "fiber": 6
        },
        "image": "Peanut_butter_in_202604210210.jpeg"
    },
    {
        "id": "almonds",
        "name": "Almonds (Raw)",
        "category": "generic",
        "subcategory": "Nuts",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 20
        },
        "servingOptions": [
            {
                "label": "5 Almonds (7g)",
                "grams": 7
            },
            {
                "label": "10 Almonds (14g)",
                "grams": 14
            },
            {
                "label": "20 Almonds (28g)",
                "grams": 28
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 579,
            "protein": 21,
            "carbs": 22,
            "fat": 50,
            "fiber": 12.5
        },
        "image": "Almonds_served_on_202604210052.jpeg"
    },
    {
        "id": "whey_protein",
        "name": "Whey Protein Shake",
        "category": "generic",
        "subcategory": "Supplement",
        "servingType": "quantity",
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
                "label": "2 Scoops (60g)",
                "grams": 60
            }
        ],
        "per100g": {
            "calories": 390,
            "protein": 75,
            "carbs": 10,
            "fat": 5,
            "fiber": 1
        },
        "image": "whey_isolate.png.png"
    },
    {
        "id": "greek_yogurt",
        "name": "Greek Yogurt",
        "category": "generic",
        "subcategory": "Dairy",
        "servingType": "volume",
        "defaultServing": {
            "unit": "cup",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Cup (100g)",
                "grams": 100
            },
            {
                "label": "Regular Cup (170g)",
                "grams": 170
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 59,
            "protein": 10,
            "carbs": 3.6,
            "fat": 0.7,
            "fiber": 0
        },
        "image": "Greek_yogurt_with_202604210139.jpeg"
    },
    {
        "id": "brown_bread",
        "name": "Brown Bread",
        "category": "generic",
        "subcategory": "Bread",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Slice",
                "grams": 30
            },
            {
                "label": "2 Slices",
                "grams": 60
            },
            {
                "label": "3 Slices",
                "grams": 90
            }
        ],
        "per100g": {
            "calories": 250,
            "protein": 10,
            "carbs": 44,
            "fat": 4,
            "fiber": 6
        },
        "image": "Brown_bread_slices_202604210210.jpeg"
    },
    {
        "id": "white_bread",
        "name": "White Bread",
        "category": "generic",
        "subcategory": "Bread",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Slice",
                "grams": 28
            },
            {
                "label": "2 Slices",
                "grams": 56
            },
            {
                "label": "3 Slices",
                "grams": 84
            }
        ],
        "per100g": {
            "calories": 265,
            "protein": 9,
            "carbs": 49,
            "fat": 3.2,
            "fiber": 2.7
        },
        "image": "White_bread_stacked_202604210212.jpeg"
    },
    {
        "id": "chicken_salad",
        "name": "Chicken Salad",
        "category": "generic",
        "subcategory": "Salad",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Bowl",
                "grams": 150
            },
            {
                "label": "Regular Bowl",
                "grams": 250
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 110,
            "protein": 12,
            "carbs": 5,
            "fat": 5,
            "fiber": 2
        },
        "image": "Chicken_salad_in_202604210210.jpeg"
    },
    {
        "id": "potato_boiled",
        "name": "Boiled Potato",
        "category": "generic",
        "subcategory": "Vegetable",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Small (100g)",
                "grams": 100
            },
            {
                "label": "1 Medium (150g)",
                "grams": 150
            },
            {
                "label": "1 Large (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 87,
            "protein": 1.9,
            "carbs": 20,
            "fat": 0.1,
            "fiber": 1.8
        },
        "image": "Boiled_potatoes_on_202604210139.jpeg"
    },
    {
        "id": "sweet_potato",
        "name": "Sweet Potato (Boiled)",
        "category": "generic",
        "subcategory": "Vegetable",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Small (100g)",
                "grams": 100
            },
            {
                "label": "1 Medium (150g)",
                "grams": 150
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 90,
            "protein": 2,
            "carbs": 21,
            "fat": 0.1,
            "fiber": 3
        },
        "image": "Boiled_sweet_potato_202604210139.jpeg"
    },
    {
        "id": "avocado",
        "name": "Avocado",
        "category": "generic",
        "subcategory": "Fruit",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Half Avocado",
                "grams": 68
            },
            {
                "label": "1 Avocado",
                "grams": 136
            }
        ],
        "per100g": {
            "calories": 160,
            "protein": 2,
            "carbs": 8.5,
            "fat": 14.7,
            "fiber": 6.7
        },
        "image": "Avocado_on_wooden_202604210139.jpeg"
    },
    {
        "id": "quinoa",
        "name": "Quinoa (Cooked)",
        "category": "generic",
        "subcategory": "Grain",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (100g)",
                "grams": 100
            },
            {
                "label": "Regular Bowl (185g)",
                "grams": 185
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 120,
            "protein": 4.4,
            "carbs": 21,
            "fat": 1.9,
            "fiber": 2.8
        },
        "image": "Cooked_quinoa_in_202604210139.jpeg"
    },
    {
        "id": "muesli",
        "name": "Muesli / Granola",
        "category": "generic",
        "subcategory": "Breakfast",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 50
        },
        "servingOptions": [
            {
                "label": "Small Bowl (30g)",
                "grams": 30
            },
            {
                "label": "Regular Bowl (50g)",
                "grams": 50
            },
            {
                "label": "Large Bowl (75g)",
                "grams": 75
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 400,
            "protein": 10,
            "carbs": 65,
            "fat": 10,
            "fiber": 7
        },
        "image": "Muesli_granola_in_202604210139.jpeg"
    },
    {
        "id": "honey",
        "name": "Honey",
        "category": "generic",
        "subcategory": "Sweetener",
        "servingType": "weight",
        "defaultServing": {
            "unit": "tsp",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 tsp (7g)",
                "grams": 7
            },
            {
                "label": "1 tbsp (21g)",
                "grams": 21
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 330,
            "protein": 0.3,
            "carbs": 82,
            "fat": 0,
            "fiber": 0.2
        },
        "image": "Golden_honey_drizzling_202604210139.jpeg"
    },
    {
        "id": "rice_cakes",
        "name": "Rice Cakes",
        "category": "generic",
        "subcategory": "Snack",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Cake",
                "grams": 9
            },
            {
                "label": "2 Cakes",
                "grams": 18
            },
            {
                "label": "3 Cakes",
                "grams": 27
            }
        ],
        "per100g": {
            "calories": 387,
            "protein": 8,
            "carbs": 81,
            "fat": 2.8,
            "fiber": 4.2
        },
        "image": "Rice_cakes_stacked_202604210139.jpeg"
    },
    {
        "id": "soyabean_chunks",
        "name": "Soya Chunks (Cooked)",
        "category": "generic",
        "subcategory": "Protein",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 80
            },
            {
                "label": "Regular Katori",
                "grams": 120
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 145,
            "protein": 20,
            "carbs": 12,
            "fat": 2,
            "fiber": 4
        },
        "image": "Cooked_soya_chunks_202604210139.jpeg"
    },
    {
        "id": "tofu",
        "name": "Tofu (Firm)",
        "category": "generic",
        "subcategory": "Protein",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 100
        },
        "servingOptions": [
            {
                "label": "Small (50g)",
                "grams": 50
            },
            {
                "label": "Regular (100g)",
                "grams": 100
            },
            {
                "label": "Large (150g)",
                "grams": 150
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 76,
            "protein": 8,
            "carbs": 1.9,
            "fat": 4.8,
            "fiber": 0.3
        },
        "image": "Tofu_blocks_on_202604210139.jpeg"
    },
    {
        "id": "sprouts_moong",
        "name": "Sprouts (Moong)",
        "category": "generic",
        "subcategory": "Healthy",
        "servingType": "volume",
        "defaultServing": {
            "unit": "katori",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 80
            },
            {
                "label": "Regular Katori",
                "grams": 120
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 30,
            "protein": 3,
            "carbs": 4.1,
            "fat": 0.2,
            "fiber": 1.8
        },
        "image": "Moong_Dal_Sprouts_202604210108.jpeg"
    },
    {
        "id": "chana_roasted",
        "name": "Roasted Chana",
        "category": "generic",
        "subcategory": "Snack",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Handful (20g)",
                "grams": 20
            },
            {
                "label": "Regular (30g)",
                "grams": 30
            },
            {
                "label": "Large (50g)",
                "grams": 50
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 369,
            "protein": 22,
            "carbs": 58,
            "fat": 5,
            "fiber": 15
        },
        "image": "Roasted_Chana_in_202604210210.jpeg"
    },
    {
        "id": "peanuts_roasted",
        "name": "Peanuts (Roasted)",
        "category": "generic",
        "subcategory": "Nuts",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Handful (15g)",
                "grams": 15
            },
            {
                "label": "Regular (30g)",
                "grams": 30
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 615,
            "protein": 24,
            "carbs": 22,
            "fat": 49,
            "fiber": 8
        },
        "image": "Roasted_peanuts_in_202604210139.jpeg"
    },
    {
        "id": "khichdi",
        "name": "Khichdi (Dal Rice)",
        "category": "generic",
        "subcategory": "Comfort Food",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori",
                "grams": 150
            },
            {
                "label": "Regular Bowl",
                "grams": 250
            },
            {
                "label": "Large Bowl",
                "grams": 350
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 105,
            "protein": 3.5,
            "carbs": 18,
            "fat": 2,
            "fiber": 1.5
        },
        "image": "Indian_Khichdi_in_202604210139.jpeg"
    },
    {
        "id": "oats_high_protein_mb",
        "name": "MuscleBlaze High Protein Oats (Dark Choco)",
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
                "label": "Large Serve (100g)",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 408,
            "protein": 44,
            "carbs": 40,
            "fat": 8,
            "fiber": 11
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
            }
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
            }
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
            }
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
            }
        ],
        "per100g": {
            "calories": 331.5,
            "protein": 11.5,
            "carbs": 37.7,
            "fat": 15.4,
            "fiber": 1.2
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
            }
        ],
        "per100g": {
            "calories": 241.4,
            "protein": 5.7,
            "carbs": 36.4,
            "fat": 7.9,
            "fiber": 2.1
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
            }
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
            }
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
                "label": "2 Parathas",
                "grams": 240
            }
        ],
        "per100g": {
            "calories": 250,
            "protein": 9,
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
                "label": "2 Parathas",
                "grams": 240
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
        ],
        "per100g": {
            "calories": 232.8,
            "protein": 6.9,
            "carbs": 27.6,
            "fat": 11.7,
            "fiber": 1.4
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
            }
        ],
        "per100g": {
            "calories": 184.1,
            "protein": 8.8,
            "carbs": 20.6,
            "fat": 9.1,
            "fiber": 0.7
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
            }
        ],
        "per100g": {
            "calories": 325.1,
            "protein": 10.2,
            "carbs": 26.3,
            "fat": 19.8,
            "fiber": 1
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
            }
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
            }
        ],
        "per100g": {
            "calories": 275,
            "protein": 11.4,
            "carbs": 28.6,
            "fat": 12.1,
            "fiber": 1.1
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
            }
        ],
        "per100g": {
            "calories": 253,
            "protein": 3.7,
            "carbs": 34,
            "fat": 10.6,
            "fiber": 1.7
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
            }
        ],
        "per100g": {
            "calories": 230.7,
            "protein": 11.6,
            "carbs": 21,
            "fat": 13.3,
            "fiber": 0.7
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
                "label": "Whole Regular (~220g)",
                "grams": 220
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
                "label": "Whole Regular (~240g)",
                "grams": 240
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
                "label": "Whole Regular (~260g)",
                "grams": 260
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
                "label": "Whole Regular (~260g)",
                "grams": 260
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
                "label": "Whole Regular (~260g)",
                "grams": 260
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
                "label": "Whole Regular (~260g)",
                "grams": 260
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
                "label": "Whole Regular (~260g)",
                "grams": 260
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
                "label": "Whole Regular (~260g)",
                "grams": 260
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
                "label": "Whole Regular (~260g)",
                "grams": 260
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
                "label": "Whole Regular (~260g)",
                "grams": 260
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
                "label": "Whole Regular (~280g)",
                "grams": 280
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
                "label": "Whole Regular (~280g)",
                "grams": 280
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
                "label": "Whole Regular (~280g)",
                "grams": 280
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
                "label": "Whole Regular (~280g)",
                "grams": 280
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
                "label": "Whole Regular (~280g)",
                "grams": 280
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
                "label": "Whole Regular (~280g)",
                "grams": 280
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
                "label": "Whole Regular (~260g)",
                "grams": 260
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
                "label": "Whole Regular (~360g)",
                "grams": 360
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
                "label": "Whole Regular (~360g)",
                "grams": 360
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
                "label": "Whole Regular (~260g)",
                "grams": 260
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
                "label": "Whole Regular (~280g)",
                "grams": 280
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
                "label": "Whole Regular (~320g)",
                "grams": 320
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
            }
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
            }
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
            }
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
            }
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
    {
        "id": "kalaan_masala",
        "name": "Kalaan Masala (Mushroom Curry)",
        "category": "curries",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (100g)",
                "grams": 100
            },
            {
                "label": "Regular Bowl (150g)",
                "grams": 150
            },
            {
                "label": "Large Bowl (250g)",
                "grams": 250
            }
        ],
        "per100g": {
            "calories": 70,
            "protein": 2.5,
            "carbs": 5,
            "fat": 4,
            "fiber": 1.5
        },
        "image": "Kalaan_Masala_served_202604210052.jpeg"
    },
    {
        "id": "vendakkai_poriyal",
        "name": "Vendakkai Poriyal (Okra Stir-fry)",
        "category": "vegetables",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (80g)",
                "grams": 80
            },
            {
                "label": "Regular Bowl (150g)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 118,
            "protein": 2.8,
            "carbs": 10,
            "fat": 6.5,
            "fiber": 3.2
        },
        "image": "Vendakkai_Poriyal_served_202604210052.jpeg"
    },
    {
        "id": "keerai_kootu",
        "name": "Keerai Kootu (Greens & Lentils)",
        "category": "curries",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (100g)",
                "grams": 100
            },
            {
                "label": "Regular Bowl (175g)",
                "grams": 175
            }
        ],
        "per100g": {
            "calories": 70,
            "protein": 3.5,
            "carbs": 8,
            "fat": 2.5,
            "fiber": 2.5
        },
        "image": "Tamil_Nadu_Keerai_202604210052.jpeg"
    },
    {
        "id": "vazhakkai_fry",
        "name": "Vazhakkai Fry (Raw Banana Fry)",
        "category": "vegetables",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (80g)",
                "grams": 80
            },
            {
                "label": "Regular Bowl (150g)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 140,
            "protein": 1.2,
            "carbs": 22,
            "fat": 5,
            "fiber": 2.5
        },
        "image": "Vazhakkai_Fry_on_202604210052.jpeg"
    },
    {
        "id": "potato_fry_si",
        "name": "Urulaikizhangu Varuval (Potato Fry)",
        "category": "vegetables",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (80g)",
                "grams": 80
            },
            {
                "label": "Regular Bowl (150g)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 150,
            "protein": 2,
            "carbs": 20,
            "fat": 6.5,
            "fiber": 2
        },
        "image": "Urulaikizhangu_Varuval_served_202604210052.jpeg"
    },
    {
        "id": "taro_root_fry",
        "name": "Seppankizhangu Fry (Taro Root Fry)",
        "category": "vegetables",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (80g)",
                "grams": 80
            },
            {
                "label": "Regular Bowl (150g)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 145,
            "protein": 1.5,
            "carbs": 22,
            "fat": 5.5,
            "fiber": 2
        },
        "image": "Seppankizhangu_Fry_on_202604210052.jpeg"
    },
    {
        "id": "avial",
        "name": "Avial (Mixed Veg Coconut Curry)",
        "category": "curries",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (100g)",
                "grams": 100
            },
            {
                "label": "Regular Bowl (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 90,
            "protein": 2,
            "carbs": 8,
            "fat": 5,
            "fiber": 3
        },
        "image": "Kerala_Avial_mixed_202604210052.jpeg"
    },
    {
        "id": "olan",
        "name": "Olan (Ash Gourd & Coconut Curry)",
        "category": "curries",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (100g)",
                "grams": 100
            },
            {
                "label": "Regular Bowl (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 65,
            "protein": 1.5,
            "carbs": 6,
            "fat": 4,
            "fiber": 1.5
        },
        "image": "Olan_curry_served_202604210052.jpeg"
    },
    {
        "id": "erissery",
        "name": "Erissery (Pumpkin & Lentil Curry)",
        "category": "curries",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (100g)",
                "grams": 100
            },
            {
                "label": "Regular Bowl (175g)",
                "grams": 175
            }
        ],
        "per100g": {
            "calories": 100,
            "protein": 4,
            "carbs": 12,
            "fat": 4,
            "fiber": 3
        },
        "image": "Erissery_served_on_202604210053.jpeg"
    },
    {
        "id": "thoran_cabbage",
        "name": "Cabbage Thoran (Kerala Stir-fry)",
        "category": "vegetables",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (80g)",
                "grams": 80
            },
            {
                "label": "Regular Bowl (150g)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 85,
            "protein": 2,
            "carbs": 7,
            "fat": 4.5,
            "fiber": 2.5
        },
        "image": "Cabbage_Thoran_served_202604210052.jpeg"
    },
    {
        "id": "beans_poriyal",
        "name": "Beans Poriyal (Green Beans Stir-fry)",
        "category": "vegetables",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (80g)",
                "grams": 80
            },
            {
                "label": "Regular Bowl (150g)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 80,
            "protein": 2,
            "carbs": 8,
            "fat": 3.5,
            "fiber": 3
        },
        "image": "Beans_Poriyal_South_202604210210.jpeg"
    },
    {
        "id": "carrot_poriyal",
        "name": "Carrot Poriyal",
        "category": "vegetables",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (80g)",
                "grams": 80
            },
            {
                "label": "Regular Bowl (150g)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 75,
            "protein": 1.5,
            "carbs": 9,
            "fat": 3,
            "fiber": 2.5
        },
        "image": "Carrot_Poriyal_stir-fried_202604210052.jpeg"
    },
    {
        "id": "beetroot_poriyal",
        "name": "Beetroot Poriyal",
        "category": "vegetables",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (80g)",
                "grams": 80
            },
            {
                "label": "Regular Bowl (150g)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 70,
            "protein": 1.5,
            "carbs": 10,
            "fat": 2.5,
            "fiber": 2.5
        },
        "image": "Beetroot_poriyal_with_202604210052.jpeg"
    },
    {
        "id": "mor_kuzhambu",
        "name": "Mor Kuzhambu (Buttermilk Curry)",
        "category": "curries",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (150g)",
                "grams": 150
            },
            {
                "label": "Regular Bowl (250g)",
                "grams": 250
            }
        ],
        "per100g": {
            "calories": 40,
            "protein": 1.5,
            "carbs": 3,
            "fat": 2,
            "fiber": 0.5
        },
        "image": "Mor_Kuzhambu_served_202604210052.jpeg"
    },
    {
        "id": "vatha_kuzhambu",
        "name": "Vatha Kuzhambu (Tangy Tamarind Curry)",
        "category": "curries",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (100g)",
                "grams": 100
            },
            {
                "label": "Regular Bowl (150g)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 55,
            "protein": 1,
            "carbs": 7,
            "fat": 2.5,
            "fiber": 1
        },
        "image": "Vatha_Kuzhambu_served_202604210052.jpeg"
    },
    {
        "id": "chettinad_chicken_curry",
        "name": "Chettinad Chicken Curry",
        "category": "curries",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Bowl (150g)",
                "grams": 150
            },
            {
                "label": "Regular Bowl (250g)",
                "grams": 250
            }
        ],
        "per100g": {
            "calories": 155,
            "protein": 14,
            "carbs": 5,
            "fat": 9,
            "fiber": 1.5
        },
        "image": "Chettinad_Chicken_Curry_202604210052.jpeg"
    },
    {
        "id": "prawn_masala_si",
        "name": "Prawn Masala (South Indian)",
        "category": "curries",
        "subcategory": "South Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Bowl (150g)",
                "grams": 150
            },
            {
                "label": "Regular Bowl (250g)",
                "grams": 250
            }
        ],
        "per100g": {
            "calories": 120,
            "protein": 16,
            "carbs": 4,
            "fat": 5,
            "fiber": 1
        },
        "image": "Prawn_Masala_served_202604210052.jpeg"
    },
    {
        "id": "dum_aloo_ni",
        "name": "Dum Aloo",
        "category": "curries",
        "subcategory": "North Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (150g)",
                "grams": 150
            },
            {
                "label": "Regular Bowl (250g)",
                "grams": 250
            }
        ],
        "per100g": {
            "calories": 120,
            "protein": 2.5,
            "carbs": 15,
            "fat": 5.5,
            "fiber": 2
        },
        "image": "Dum_Aloo_served_202604210052.jpeg"
    },
    {
        "id": "achari_paneer",
        "name": "Achari Paneer",
        "category": "curries",
        "subcategory": "North Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (150g)",
                "grams": 150
            },
            {
                "label": "Regular Bowl (250g)",
                "grams": 250
            }
        ],
        "per100g": {
            "calories": 190,
            "protein": 9,
            "carbs": 6,
            "fat": 14,
            "fiber": 1.5
        },
        "image": "Achari_Paneer_in_202604210052.jpeg"
    },
    {
        "id": "kadai_paneer",
        "name": "Kadai Paneer",
        "category": "curries",
        "subcategory": "North Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (150g)",
                "grams": 150
            },
            {
                "label": "Regular Bowl (250g)",
                "grams": 250
            }
        ],
        "per100g": {
            "calories": 200,
            "protein": 9.5,
            "carbs": 7,
            "fat": 15,
            "fiber": 1.8
        },
        "image": "Kadai_Paneer_in_202604210052.jpeg"
    },
    {
        "id": "paneer_tikka_masala",
        "name": "Paneer Tikka Masala",
        "category": "curries",
        "subcategory": "North Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (150g)",
                "grams": 150
            },
            {
                "label": "Regular Bowl (250g)",
                "grams": 250
            }
        ],
        "per100g": {
            "calories": 195,
            "protein": 10,
            "carbs": 8,
            "fat": 14,
            "fiber": 2
        },
        "image": "Paneer_Tikka_Masala_202604210052.jpeg"
    },
    {
        "id": "aloo_methi",
        "name": "Aloo Methi",
        "category": "vegetables",
        "subcategory": "North Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (100g)",
                "grams": 100
            },
            {
                "label": "Regular Bowl (175g)",
                "grams": 175
            }
        ],
        "per100g": {
            "calories": 100,
            "protein": 2.5,
            "carbs": 14,
            "fat": 4,
            "fiber": 2.5
        },
        "image": "Aloo_Methi_dry-cooked_202604210052.jpeg"
    },
    {
        "id": "sarson_da_saag",
        "name": "Sarson da Saag (Mustard Greens)",
        "category": "curries",
        "subcategory": "North Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (150g)",
                "grams": 150
            },
            {
                "label": "Regular Bowl (250g)",
                "grams": 250
            }
        ],
        "per100g": {
            "calories": 70,
            "protein": 3.5,
            "carbs": 6,
            "fat": 3,
            "fiber": 3
        },
        "image": "Sarson_da_Saag_202604210052.jpeg"
    },
    {
        "id": "chana_dal",
        "name": "Chana Dal (Split Chickpea)",
        "category": "curries",
        "subcategory": "North Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (150g)",
                "grams": 150
            },
            {
                "label": "Regular Bowl (250g)",
                "grams": 250
            }
        ],
        "per100g": {
            "calories": 95,
            "protein": 6,
            "carbs": 12,
            "fat": 2.5,
            "fiber": 4
        },
        "image": "Chana_Dal_served_202604210052.jpeg"
    },
    {
        "id": "moong_dal",
        "name": "Moong Dal (Yellow Lentil)",
        "category": "curries",
        "subcategory": "North Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (150g)",
                "grams": 150
            },
            {
                "label": "Regular Bowl (250g)",
                "grams": 250
            }
        ],
        "per100g": {
            "calories": 85,
            "protein": 5.5,
            "carbs": 11,
            "fat": 2,
            "fiber": 3.5
        },
        "image": "Moong_Dal_served_202604210052.jpeg"
    },
    {
        "id": "masoor_dal",
        "name": "Masoor Dal (Red Lentil)",
        "category": "curries",
        "subcategory": "North Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (150g)",
                "grams": 150
            },
            {
                "label": "Regular Bowl (250g)",
                "grams": 250
            }
        ],
        "per100g": {
            "calories": 85,
            "protein": 6,
            "carbs": 11,
            "fat": 1.5,
            "fiber": 4
        },
        "image": "Masoor_Dal_served_202604210052.jpeg"
    },
    {
        "id": "paneer_bhurji",
        "name": "Paneer Bhurji",
        "category": "curries",
        "subcategory": "North Indian",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (100g)",
                "grams": 100
            },
            {
                "label": "Regular Bowl (175g)",
                "grams": 175
            }
        ],
        "per100g": {
            "calories": 210,
            "protein": 12,
            "carbs": 5,
            "fat": 16,
            "fiber": 1
        },
        "image": "Spiced_Paneer_Bhurji_202604210052.jpeg"
    },
    {
        "id": "gobi_manchurian_dry",
        "name": "Gobi Manchurian (Dry)",
        "category": "snacks",
        "subcategory": "Indo-Chinese",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
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
            }
        ],
        "per100g": {
            "calories": 195,
            "protein": 4,
            "carbs": 22,
            "fat": 10,
            "fiber": 2
        },
        "image": "Gobi_Manchurian_served_202604210052.jpeg"
    },
    {
        "id": "gobi_manchurian_gravy",
        "name": "Gobi Manchurian (Gravy)",
        "category": "curries",
        "subcategory": "Indo-Chinese",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Bowl (200g)",
                "grams": 200
            },
            {
                "label": "Regular Bowl (300g)",
                "grams": 300
            }
        ],
        "per100g": {
            "calories": 120,
            "protein": 3.5,
            "carbs": 14,
            "fat": 5.5,
            "fiber": 1.5
        },
        "image": "Gobi_Manchurian_served_202604210052.jpeg"
    },
    {
        "id": "paneer_manchurian_dry",
        "name": "Paneer Manchurian (Dry)",
        "category": "snacks",
        "subcategory": "Indo-Chinese",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
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
            }
        ],
        "per100g": {
            "calories": 240,
            "protein": 11,
            "carbs": 14,
            "fat": 15,
            "fiber": 1
        },
        "image": "Paneer_Manchurian_served_202604210052.jpeg"
    },
    {
        "id": "paneer_manchurian_gravy",
        "name": "Paneer Manchurian (Gravy)",
        "category": "curries",
        "subcategory": "Indo-Chinese",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Bowl (200g)",
                "grams": 200
            },
            {
                "label": "Regular Bowl (300g)",
                "grams": 300
            }
        ],
        "per100g": {
            "calories": 155,
            "protein": 8,
            "carbs": 10,
            "fat": 9,
            "fiber": 1
        },
        "image": "Paneer_Manchurian_served_202604210052.jpeg"
    },
    {
        "id": "hakka_noodles_egg",
        "name": "Egg Hakka Noodles",
        "category": "snacks",
        "subcategory": "Indo-Chinese",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Plate (200g)",
                "grams": 200
            },
            {
                "label": "Regular Plate (300g)",
                "grams": 300
            }
        ],
        "per100g": {
            "calories": 190,
            "protein": 7.5,
            "carbs": 24,
            "fat": 7,
            "fiber": 1.5
        },
        "image": "Egg_Hakka_Noodles_202604210052.jpeg"
    },
    {
        "id": "veg_fried_rice_chinese",
        "name": "Veg Fried Rice (Chinese Style)",
        "category": "rice",
        "subcategory": "Indo-Chinese",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Plate (200g)",
                "grams": 200
            },
            {
                "label": "Regular Plate (300g)",
                "grams": 300
            }
        ],
        "per100g": {
            "calories": 150,
            "protein": 4,
            "carbs": 24,
            "fat": 4.5,
            "fiber": 1.5
        },
        "image": "veg_fried_rice.jpeg"
    },
    {
        "id": "egg_fried_rice",
        "name": "Egg Fried Rice",
        "category": "rice",
        "subcategory": "Indo-Chinese",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Plate (200g)",
                "grams": 200
            },
            {
                "label": "Regular Plate (300g)",
                "grams": 300
            }
        ],
        "per100g": {
            "calories": 165,
            "protein": 6,
            "carbs": 23,
            "fat": 5.5,
            "fiber": 1.5
        },
        "image": "Egg_fried_rice_202604210052.jpeg"
    },
    {
        "id": "spring_rolls_veg",
        "name": "Veg Spring Rolls",
        "category": "snacks",
        "subcategory": "Indo-Chinese",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Roll (80g)",
                "grams": 80
            },
            {
                "label": "2 Rolls (160g)",
                "grams": 160
            },
            {
                "label": "3 Rolls (240g)",
                "grams": 240
            }
        ],
        "per100g": {
            "calories": 185,
            "protein": 4,
            "carbs": 20,
            "fat": 9,
            "fiber": 2
        },
        "image": "Veg_Spring_Rolls_202604210052.jpeg"
    },
    {
        "id": "chilli_paneer_dry",
        "name": "Chilli Paneer (Dry)",
        "category": "snacks",
        "subcategory": "Indo-Chinese",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
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
            }
        ],
        "per100g": {
            "calories": 235,
            "protein": 12,
            "carbs": 10,
            "fat": 17,
            "fiber": 1
        },
        "image": "Chilli_Paneer_served_202604210052.jpeg"
    },
    {
        "id": "chilli_chicken_dry",
        "name": "Chilli Chicken (Dry)",
        "category": "snacks",
        "subcategory": "Indo-Chinese",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
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
            }
        ],
        "per100g": {
            "calories": 205,
            "protein": 16,
            "carbs": 8,
            "fat": 11,
            "fiber": 0.5
        },
        "image": "Chilli_Chicken_Dry_202604210052.jpeg"
    },
    {
        "id": "schezwan_noodles",
        "name": "Schezwan Noodles",
        "category": "snacks",
        "subcategory": "Indo-Chinese",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Plate (200g)",
                "grams": 200
            },
            {
                "label": "Regular Plate (300g)",
                "grams": 300
            }
        ],
        "per100g": {
            "calories": 185,
            "protein": 5,
            "carbs": 26,
            "fat": 7,
            "fiber": 2
        },
        "image": "Spicy_Schezwan_Noodles_202604210052.jpeg"
    },
    {
        "id": "paneer_fried_rice",
        "name": "Paneer Fried Rice",
        "category": "rice",
        "subcategory": "Indo-Chinese",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Plate (200g)",
                "grams": 200
            },
            {
                "label": "Regular Plate (300g)",
                "grams": 300
            }
        ],
        "per100g": {
            "calories": 195,
            "protein": 8,
            "carbs": 22,
            "fat": 8,
            "fiber": 1.5
        },
        "image": "Paneer_Fried_Rice_202604210052.jpeg"
    },
    {
        "id": "mushroom_masala",
        "name": "Mushroom Masala",
        "category": "curries",
        "subcategory": "Mushroom",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (150g)",
                "grams": 150
            },
            {
                "label": "Regular Bowl (250g)",
                "grams": 250
            }
        ],
        "per100g": {
            "calories": 90,
            "protein": 3.5,
            "carbs": 7,
            "fat": 5.5,
            "fiber": 2
        },
        "image": "Mushroom_Masala_on_202604210052.jpeg"
    },
    {
        "id": "mushroom_pepper_fry",
        "name": "Mushroom Pepper Fry",
        "category": "vegetables",
        "subcategory": "Mushroom",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
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
            }
        ],
        "per100g": {
            "calories": 80,
            "protein": 3,
            "carbs": 5,
            "fat": 4.5,
            "fiber": 2
        },
        "image": "Mushroom_Pepper_Fry_202604210052.jpeg"
    },
    {
        "id": "mushroom_biryani",
        "name": "Mushroom Biryani",
        "category": "rice",
        "subcategory": "Mushroom",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Plate (200g)",
                "grams": 200
            },
            {
                "label": "Regular Plate (350g)",
                "grams": 350
            }
        ],
        "per100g": {
            "calories": 155,
            "protein": 4,
            "carbs": 25,
            "fat": 4,
            "fiber": 2
        },
        "image": "Mushroom_Masala_on_202604210052.jpeg"
    },
    {
        "id": "stuffed_mushroom",
        "name": "Stuffed Mushroom (Baked)",
        "category": "snacks",
        "subcategory": "Mushroom",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 3
        },
        "servingOptions": [
            {
                "label": "1 Piece (50g)",
                "grams": 50
            },
            {
                "label": "3 Pieces (150g)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 120,
            "protein": 6,
            "carbs": 8,
            "fat": 7,
            "fiber": 1.5
        },
        "image": "Stuffed_Mushroom_served_202604210052.jpeg"
    },
    {
        "id": "mushroom_raw",
        "name": "Button Mushrooms (Raw)",
        "category": "vegetables",
        "subcategory": "Vegetables",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 100
        },
        "servingOptions": [
            {
                "label": "Small Bowl (100g)",
                "grams": 100
            },
            {
                "label": "Large Bowl (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 22,
            "protein": 3.1,
            "carbs": 3.3,
            "fat": 0.3,
            "fiber": 1
        },
        "image": "Button_mushrooms_on_202604210052.jpeg"
    },
    {
        "id": "chia_seeds",
        "name": "Chia Seeds",
        "category": "generic",
        "subcategory": "Seeds",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 20
        },
        "servingOptions": [
            {
                "label": "1 Tbsp (12g)",
                "grams": 12
            },
            {
                "label": "2 Tbsp (24g)",
                "grams": 24
            },
            {
                "label": "50g",
                "grams": 50
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 486,
            "protein": 17,
            "carbs": 42,
            "fat": 31,
            "fiber": 34
        },
        "image": "Chia_seeds_on_202604210052.jpeg"
    },
    {
        "id": "flax_seeds",
        "name": "Flax Seeds (Alsi)",
        "category": "generic",
        "subcategory": "Seeds",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 15
        },
        "servingOptions": [
            {
                "label": "1 Tbsp (10g)",
                "grams": 10
            },
            {
                "label": "2 Tbsp (20g)",
                "grams": 20
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 534,
            "protein": 18,
            "carbs": 29,
            "fat": 42,
            "fiber": 27
        },
        "image": "Flax_seeds_served_202604210052.jpeg"
    },
    {
        "id": "sunflower_seeds",
        "name": "Sunflower Seeds",
        "category": "generic",
        "subcategory": "Seeds",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Handful (20g)",
                "grams": 20
            },
            {
                "label": "Regular Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 584,
            "protein": 21,
            "carbs": 20,
            "fat": 51,
            "fiber": 8.6
        },
        "image": "Sunflower_seeds_on_202604210052.jpeg"
    },
    {
        "id": "pumpkin_seeds",
        "name": "Pumpkin Seeds (Pepitas)",
        "category": "generic",
        "subcategory": "Seeds",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Handful (20g)",
                "grams": 20
            },
            {
                "label": "Regular Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 559,
            "protein": 30,
            "carbs": 11,
            "fat": 49,
            "fiber": 6
        },
        "image": "Pumpkin_seeds_served_202604210052.jpeg"
    },
    {
        "id": "sesame_seeds",
        "name": "Sesame Seeds (Til)",
        "category": "generic",
        "subcategory": "Seeds",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 15
        },
        "servingOptions": [
            {
                "label": "1 Tbsp (9g)",
                "grams": 9
            },
            {
                "label": "2 Tbsp (18g)",
                "grams": 18
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 573,
            "protein": 17,
            "carbs": 23,
            "fat": 50,
            "fiber": 11.8
        },
        "image": "Sesame_seeds_on_202604210052.jpeg"
    },
    {
        "id": "fennel_seeds",
        "name": "Fennel Seeds (Saunf)",
        "category": "generic",
        "subcategory": "Seeds",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 10
        },
        "servingOptions": [
            {
                "label": "1 Tsp (3g)",
                "grams": 3
            },
            {
                "label": "1 Tbsp (7g)",
                "grams": 7
            },
            {
                "label": "25g",
                "grams": 25
            }
        ],
        "per100g": {
            "calories": 345,
            "protein": 15.8,
            "carbs": 52,
            "fat": 14.9,
            "fiber": 39.8
        },
        "image": "Fennel_seeds_served_202604210052.jpeg"
    },
    {
        "id": "hemp_seeds",
        "name": "Hemp Seeds",
        "category": "generic",
        "subcategory": "Seeds",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "2 Tbsp (20g)",
                "grams": 20
            },
            {
                "label": "3 Tbsp (30g)",
                "grams": 30
            }
        ],
        "per100g": {
            "calories": 553,
            "protein": 31.6,
            "carbs": 8.7,
            "fat": 48.8,
            "fiber": 4
        },
        "image": "Hemp_seeds_on_202604210052.jpeg"
    },
    {
        "id": "watermelon_seeds_roasted",
        "name": "Watermelon Seeds (Roasted)",
        "category": "generic",
        "subcategory": "Seeds",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Handful (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 557,
            "protein": 28,
            "carbs": 15.3,
            "fat": 47.4,
            "fiber": 0.5
        },
        "image": "Roasted_watermelon_seeds_202604210052.jpeg"
    },
    {
        "id": "poppy_seeds",
        "name": "Poppy Seeds (Khus Khus)",
        "category": "generic",
        "subcategory": "Seeds",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 10
        },
        "servingOptions": [
            {
                "label": "1 Tsp (3g)",
                "grams": 3
            },
            {
                "label": "1 Tbsp (9g)",
                "grams": 9
            }
        ],
        "per100g": {
            "calories": 525,
            "protein": 17.9,
            "carbs": 28.1,
            "fat": 41.6,
            "fiber": 19.5
        },
        "image": "Poppy_seeds_served_202604210052.jpeg"
    },
    {
        "id": "cashews_raw",
        "name": "Cashews (Raw)",
        "category": "generic",
        "subcategory": "Nuts",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "10 Pieces (~30g)",
                "grams": 30
            },
            {
                "label": "Small Handful (50g)",
                "grams": 50
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 553,
            "protein": 18.2,
            "carbs": 30.2,
            "fat": 43.8,
            "fiber": 3.3
        },
        "image": "Cashews_served_on_202604210052.jpeg"
    },
    {
        "id": "cashews_roasted",
        "name": "Cashews (Roasted & Salted)",
        "category": "generic",
        "subcategory": "Nuts",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "10 Pieces (~30g)",
                "grams": 30
            },
            {
                "label": "Small Handful (50g)",
                "grams": 50
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 574,
            "protein": 15.9,
            "carbs": 32.7,
            "fat": 46.4,
            "fiber": 3
        },
        "image": "Cashews_served_on_202604210052.jpeg"
    },
    {
        "id": "pistachios_raw",
        "name": "Pistachios (Raw / Pista)",
        "category": "generic",
        "subcategory": "Nuts",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "25 Nuts (~30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 562,
            "protein": 20.3,
            "carbs": 27.5,
            "fat": 45.4,
            "fiber": 10.3
        },
        "image": "Pistachios_on_elegant_202604210052.jpeg"
    },
    {
        "id": "pistachios_roasted",
        "name": "Pistachios (Roasted & Salted)",
        "category": "generic",
        "subcategory": "Nuts",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "25 Nuts (~30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 572,
            "protein": 19.6,
            "carbs": 28,
            "fat": 46.3,
            "fiber": 9
        },
        "image": "Pistachios_on_elegant_202604210052.jpeg"
    },
    {
        "id": "walnuts_raw",
        "name": "Walnuts (Raw / Akhrot)",
        "category": "generic",
        "subcategory": "Nuts",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "7 Halves (~28g)",
                "grams": 28
            },
            {
                "label": "50g",
                "grams": 50
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 654,
            "protein": 15.2,
            "carbs": 13.7,
            "fat": 65.2,
            "fiber": 6.7
        },
        "image": "Walnuts_served_on_202604210052.jpeg"
    },
    {
        "id": "almonds_roasted",
        "name": "Almonds (Roasted)",
        "category": "generic",
        "subcategory": "Nuts",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "20 Almonds (~28g)",
                "grams": 28
            },
            {
                "label": "50g",
                "grams": 50
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 598,
            "protein": 21.2,
            "carbs": 19.5,
            "fat": 52.5,
            "fiber": 12.5
        },
        "image": "Almonds_served_on_202604210052.jpeg"
    },
    {
        "id": "brazil_nuts",
        "name": "Brazil Nuts",
        "category": "generic",
        "subcategory": "Nuts",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "3 Nuts (~30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 656,
            "protein": 14.3,
            "carbs": 12.3,
            "fat": 66.4,
            "fiber": 7.5
        },
        "image": "Brazil_nuts_on_202604210052.jpeg"
    },
    {
        "id": "hazelnuts",
        "name": "Hazelnuts",
        "category": "generic",
        "subcategory": "Nuts",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "20 Hazelnuts (~30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 628,
            "protein": 15,
            "carbs": 16.7,
            "fat": 60.8,
            "fiber": 9.7
        },
        "image": "Hazelnuts_on_elegant_202604210052.jpeg"
    },
    {
        "id": "pecans",
        "name": "Pecans",
        "category": "generic",
        "subcategory": "Nuts",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Handful (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 691,
            "protein": 9.2,
            "carbs": 13.9,
            "fat": 72,
            "fiber": 9.6
        },
        "image": "Pecans_on_elegant_202604210052.jpeg"
    },
    {
        "id": "macadamia_nuts",
        "name": "Macadamia Nuts",
        "category": "generic",
        "subcategory": "Nuts",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Handful (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 718,
            "protein": 7.9,
            "carbs": 13.8,
            "fat": 75.8,
            "fiber": 8.6
        },
        "image": "Macadamia_nuts_on_202604210052.jpeg"
    },
    {
        "id": "dates_medjool",
        "name": "Medjool Dates",
        "category": "fruits",
        "subcategory": "Dry Fruits",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Date (~24g)",
                "grams": 24
            },
            {
                "label": "2 Dates (~48g)",
                "grams": 48
            },
            {
                "label": "4 Dates (~96g)",
                "grams": 96
            }
        ],
        "per100g": {
            "calories": 277,
            "protein": 1.8,
            "carbs": 75,
            "fat": 0.2,
            "fiber": 6.7
        },
        "image": "Medjool_Dates_served_202604210052.jpeg"
    },
    {
        "id": "dates_safawi",
        "name": "Safawi Dates",
        "category": "fruits",
        "subcategory": "Dry Fruits",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 3
        },
        "servingOptions": [
            {
                "label": "1 Date (~10g)",
                "grams": 10
            },
            {
                "label": "3 Dates (~30g)",
                "grams": 30
            },
            {
                "label": "5 Dates (~50g)",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 300,
            "protein": 2.5,
            "carbs": 70,
            "fat": 0.3,
            "fiber": 5
        },
        "image": "Safawi_Dates_served_202604210052.jpeg"
    },
    {
        "id": "dates_ajwa",
        "name": "Ajwa Dates",
        "category": "fruits",
        "subcategory": "Dry Fruits",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 3
        },
        "servingOptions": [
            {
                "label": "1 Date (~7g)",
                "grams": 7
            },
            {
                "label": "3 Dates (~21g)",
                "grams": 21
            },
            {
                "label": "5 Dates (~35g)",
                "grams": 35
            }
        ],
        "per100g": {
            "calories": 278,
            "protein": 1.8,
            "carbs": 68,
            "fat": 0.4,
            "fiber": 7
        },
        "image": "Ajwa_Dates_served_202604210052.jpeg"
    },
    {
        "id": "dates_kimia",
        "name": "Kimia / Mazafati Dates",
        "category": "fruits",
        "subcategory": "Dry Fruits",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 3
        },
        "servingOptions": [
            {
                "label": "3 Dates (~30g)",
                "grams": 30
            },
            {
                "label": "5 Dates (~50g)",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 250,
            "protein": 2.2,
            "carbs": 65,
            "fat": 0.1,
            "fiber": 8
        },
        "image": "Kimia_Mazafati_Dates_202604210052.jpeg"
    },
    {
        "id": "dates_deglet",
        "name": "Deglet Noor Dates (Common)",
        "category": "fruits",
        "subcategory": "Dry Fruits",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 3
        },
        "servingOptions": [
            {
                "label": "1 Date (~8g)",
                "grams": 8
            },
            {
                "label": "3 Dates (~24g)",
                "grams": 24
            },
            {
                "label": "5 Dates (~40g)",
                "grams": 40
            }
        ],
        "per100g": {
            "calories": 282,
            "protein": 2.5,
            "carbs": 75,
            "fat": 0.4,
            "fiber": 8
        },
        "image": "Deglet_Noor_Dates_202604210052.jpeg"
    },
    {
        "id": "dates_lion_qyno",
        "name": "Lion Qyno Deseeded Dates",
        "category": "fruits",
        "subcategory": "Dry Fruits",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 3
        },
        "servingOptions": [
            {
                "label": "1 Date (~8g)",
                "grams": 8
            },
            {
                "label": "3 Dates (~24g)",
                "grams": 24
            },
            {
                "label": "5 Dates (~40g)",
                "grams": 40
            }
        ],
        "per100g": {
            "calories": 345,
            "protein": 1.5,
            "carbs": 83,
            "fat": 0.5,
            "fiber": 4.8
        },
        "image": "dates_lion_qyno.jpeg"
    },
    {
        "id": "raisins_golden",
        "name": "Golden Raisins (Sultanas)",
        "category": "fruits",
        "subcategory": "Dry Fruits",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 40
        },
        "servingOptions": [
            {
                "label": "Small Bowl (40g)",
                "grams": 40
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 314,
            "protein": 3.1,
            "carbs": 82,
            "fat": 0.5,
            "fiber": 3.7
        },
        "image": "Golden_Raisins_on_202604210052.jpeg"
    },
    {
        "id": "raisins_black",
        "name": "Black Raisins (Kali Kishmish)",
        "category": "fruits",
        "subcategory": "Dry Fruits",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 40
        },
        "servingOptions": [
            {
                "label": "Small Bowl (40g)",
                "grams": 40
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 299,
            "protein": 3,
            "carbs": 79,
            "fat": 0.5,
            "fiber": 4
        },
        "image": "Black_Raisins_on_202604210052.jpeg"
    },
    {
        "id": "raisins_green",
        "name": "Green Raisins (Munakka)",
        "category": "fruits",
        "subcategory": "Dry Fruits",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 40
        },
        "servingOptions": [
            {
                "label": "Small Bowl (40g)",
                "grams": 40
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 290,
            "protein": 2.8,
            "carbs": 77,
            "fat": 0.4,
            "fiber": 4.5
        },
        "image": "Green_Raisins_on_202604210052.jpeg"
    },
    {
        "id": "masala_chai",
        "name": "Masala Chai",
        "category": "beverages",
        "subcategory": "Tea",
        "servingType": "volume",
        "defaultServing": {
            "unit": "cup",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Cup (100ml)",
                "grams": 100
            },
            {
                "label": "Regular Cup (150ml)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 45,
            "protein": 1.5,
            "carbs": 6,
            "fat": 1.5,
            "fiber": 0
        },
        "image": "Masala_Chai_in_202604210052.jpeg"
    },
    {
        "id": "green_tea",
        "name": "Green Tea (Plain)",
        "category": "beverages",
        "subcategory": "Tea",
        "servingType": "volume",
        "defaultServing": {
            "unit": "cup",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Cup (200ml)",
                "grams": 200
            },
            {
                "label": "Large Cup (300ml)",
                "grams": 300
            }
        ],
        "per100g": {
            "calories": 1,
            "protein": 0,
            "carbs": 0.2,
            "fat": 0,
            "fiber": 0
        },
        "image": "Green_tea_in_202604210052.jpeg"
    },
    {
        "id": "ginger_lemon_tea",
        "name": "Ginger Lemon Tea",
        "category": "beverages",
        "subcategory": "Tea",
        "servingType": "volume",
        "defaultServing": {
            "unit": "cup",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Cup (200ml)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 3,
            "protein": 0,
            "carbs": 0.5,
            "fat": 0,
            "fiber": 0
        },
        "image": "Ginger_Lemon_Tea_202604210053.jpeg"
    },
    {
        "id": "ice_tea_lemon",
        "name": "Lemon Ice Tea (Sweetened)",
        "category": "beverages",
        "subcategory": "Tea",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Glass (300ml)",
                "grams": 300
            },
            {
                "label": "Large (450ml)",
                "grams": 450
            }
        ],
        "per100g": {
            "calories": 28,
            "protein": 0,
            "carbs": 7,
            "fat": 0,
            "fiber": 0
        },
        "image": "Lemon_Ice_Tea_202604210052.jpeg"
    },
    {
        "id": "cappuccino",
        "name": "Cappuccino",
        "category": "beverages",
        "subcategory": "Coffee",
        "servingType": "volume",
        "defaultServing": {
            "unit": "cup",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small (150ml)",
                "grams": 150
            },
            {
                "label": "Regular (250ml)",
                "grams": 250
            }
        ],
        "per100g": {
            "calories": 38,
            "protein": 2,
            "carbs": 4,
            "fat": 1.5,
            "fiber": 0
        },
        "image": "Cappuccino_in_white_202604210052.jpeg"
    },
    {
        "id": "latte",
        "name": "Latte (Cafe Latte)",
        "category": "beverages",
        "subcategory": "Coffee",
        "servingType": "volume",
        "defaultServing": {
            "unit": "cup",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular (250ml)",
                "grams": 250
            },
            {
                "label": "Large (350ml)",
                "grams": 350
            }
        ],
        "per100g": {
            "calories": 42,
            "protein": 2.5,
            "carbs": 4.5,
            "fat": 1.5,
            "fiber": 0
        },
        "image": "Cafe_latte_clear_202604210052.jpeg"
    },
    {
        "id": "cold_coffee",
        "name": "Cold Coffee (with Milk)",
        "category": "beverages",
        "subcategory": "Coffee",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Glass (300ml)",
                "grams": 300
            },
            {
                "label": "Large Glass (450ml)",
                "grams": 450
            }
        ],
        "per100g": {
            "calories": 58,
            "protein": 2.5,
            "carbs": 7,
            "fat": 2,
            "fiber": 0
        },
        "image": "Cold_coffee_with_202604211125.jpeg"
    },
    {
        "id": "cold_coffee_icecream",
        "name": "Cold Coffee with Ice Cream",
        "category": "beverages",
        "subcategory": "Coffee",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Glass (350ml)",
                "grams": 350
            }
        ],
        "per100g": {
            "calories": 100,
            "protein": 3,
            "carbs": 13,
            "fat": 4,
            "fiber": 0
        },
        "image": "Cold_coffee_with_202604210210.jpeg"
    },
    {
        "id": "espresso",
        "name": "Espresso Shot",
        "category": "beverages",
        "subcategory": "Coffee",
        "servingType": "volume",
        "defaultServing": {
            "unit": "shot",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Single Shot (30ml)",
                "grams": 30
            },
            {
                "label": "Double Shot (60ml)",
                "grams": 60
            }
        ],
        "per100g": {
            "calories": 10,
            "protein": 0.5,
            "carbs": 1.5,
            "fat": 0.2,
            "fiber": 0
        },
        "image": "Espresso_shot_on_202604210052.jpeg"
    },
    {
        "id": "mocha_coffee",
        "name": "Mocha Coffee",
        "category": "beverages",
        "subcategory": "Coffee",
        "servingType": "volume",
        "defaultServing": {
            "unit": "cup",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular (300ml)",
                "grams": 300
            }
        ],
        "per100g": {
            "calories": 70,
            "protein": 2.5,
            "carbs": 9,
            "fat": 2.5,
            "fiber": 0.5
        },
        "image": "Mocha_coffee_on_202604210052.jpeg"
    },
    {
        "id": "turmeric_milk",
        "name": "Turmeric Milk (Haldi Doodh)",
        "category": "beverages",
        "subcategory": "Beverages",
        "servingType": "volume",
        "defaultServing": {
            "unit": "cup",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Cup (200ml)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 65,
            "protein": 2.5,
            "carbs": 6,
            "fat": 3.5,
            "fiber": 0
        },
        "image": "Turmeric_Milk_served_202604210052.jpeg"
    },
    {
        "id": "milkshake_vanilla",
        "name": "Vanilla Milkshake",
        "category": "beverages",
        "subcategory": "Milkshakes",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Glass (350ml)",
                "grams": 350
            },
            {
                "label": "Large Glass (500ml)",
                "grams": 500
            }
        ],
        "per100g": {
            "calories": 95,
            "protein": 3,
            "carbs": 14,
            "fat": 3.5,
            "fiber": 0
        },
        "image": "Vanilla_Milkshake_served_202604210052.jpeg"
    },
    {
        "id": "milkshake_chocolate",
        "name": "Chocolate Milkshake",
        "category": "beverages",
        "subcategory": "Milkshakes",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Glass (350ml)",
                "grams": 350
            },
            {
                "label": "Large Glass (500ml)",
                "grams": 500
            }
        ],
        "per100g": {
            "calories": 108,
            "protein": 3.5,
            "carbs": 16,
            "fat": 4,
            "fiber": 0.5
        },
        "image": "Chocolate_Milkshake_served_202604210052.jpeg"
    },
    {
        "id": "milkshake_strawberry",
        "name": "Strawberry Milkshake",
        "category": "beverages",
        "subcategory": "Milkshakes",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Glass (350ml)",
                "grams": 350
            },
            {
                "label": "Large Glass (500ml)",
                "grams": 500
            }
        ],
        "per100g": {
            "calories": 90,
            "protein": 2.8,
            "carbs": 14,
            "fat": 3,
            "fiber": 0
        },
        "image": "Strawberry_Milkshake_elegant_202604210052.jpeg"
    },
    {
        "id": "milkshake_mango",
        "name": "Mango Milkshake (Aamras)",
        "category": "beverages",
        "subcategory": "Milkshakes",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Glass (300ml)",
                "grams": 300
            },
            {
                "label": "Large Glass (500ml)",
                "grams": 500
            }
        ],
        "per100g": {
            "calories": 100,
            "protein": 2,
            "carbs": 18,
            "fat": 2.5,
            "fiber": 0.5
        },
        "image": "Mango_Milkshake_served_202604210052.jpeg"
    },
    {
        "id": "milkshake_banana",
        "name": "Banana Milkshake",
        "category": "beverages",
        "subcategory": "Milkshakes",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Glass (350ml)",
                "grams": 350
            },
            {
                "label": "Large Glass (500ml)",
                "grams": 500
            }
        ],
        "per100g": {
            "calories": 105,
            "protein": 2.5,
            "carbs": 18,
            "fat": 3,
            "fiber": 0.5
        },
        "image": "Banana_Milkshake_served_202604210052.jpeg"
    },
    {
        "id": "oreo_milkshake",
        "name": "Oreo Cookie Milkshake",
        "category": "beverages",
        "subcategory": "Milkshakes",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Glass (400ml)",
                "grams": 400
            }
        ],
        "per100g": {
            "calories": 140,
            "protein": 4,
            "carbs": 20,
            "fat": 5.5,
            "fiber": 0.5
        },
        "image": "Oreo_Cookie_Milkshake_202604210052.jpeg"
    },
    {
        "id": "mango_lassi",
        "name": "Mango Lassi",
        "category": "beverages",
        "subcategory": "Milkshakes",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Glass (300ml)",
                "grams": 300
            },
            {
                "label": "Large Glass (500ml)",
                "grams": 500
            }
        ],
        "per100g": {
            "calories": 85,
            "protein": 3,
            "carbs": 13,
            "fat": 2.5,
            "fiber": 0.3
        },
        "image": "Mango_Lassi_in_202604210052.jpeg"
    },
    {
        "id": "falooda",
        "name": "Rose Falooda",
        "category": "beverages",
        "subcategory": "Milkshakes",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Glass (350ml)",
                "grams": 350
            }
        ],
        "per100g": {
            "calories": 120,
            "protein": 3,
            "carbs": 20,
            "fat": 3,
            "fiber": 0.5
        },
        "image": "Rose_Falooda_served_202604210052.jpeg"
    },
    {
        "id": "sugarcane_juice",
        "name": "Sugarcane Juice (Ganna Ras)",
        "category": "beverages",
        "subcategory": "Beverages",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Glass (250ml)",
                "grams": 250
            },
            {
                "label": "Large Glass (400ml)",
                "grams": 400
            }
        ],
        "per100g": {
            "calories": 42,
            "protein": 0.2,
            "carbs": 10.5,
            "fat": 0.1,
            "fiber": 0
        },
        "image": "Sugarcane_juice_in_202604210052.jpeg"
    },
    {
        "id": "badam_milk",
        "name": "Badam Milk (Almond Milk Drink)",
        "category": "beverages",
        "subcategory": "Beverages",
        "servingType": "volume",
        "defaultServing": {
            "unit": "glass",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Glass (250ml)",
                "grams": 250
            }
        ],
        "per100g": {
            "calories": 90,
            "protein": 3,
            "carbs": 12,
            "fat": 3.5,
            "fiber": 0
        },
        "image": "Badam_Milk_served_202604210052.jpeg"
    },
    {
        "id": "ice_cream_strawberry",
        "name": "Strawberry Ice Cream",
        "category": "snacks",
        "subcategory": "Ice Cream",
        "servingType": "volume",
        "defaultServing": {
            "unit": "scoop",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Scoop (~60g)",
                "grams": 60
            },
            {
                "label": "2 Scoops (~120g)",
                "grams": 120
            }
        ],
        "per100g": {
            "calories": 197,
            "protein": 3.2,
            "carbs": 24,
            "fat": 10,
            "fiber": 0
        },
        "image": "Strawberry_ice_cream_202604210052.jpeg"
    },
    {
        "id": "ice_cream_mango",
        "name": "Mango Ice Cream",
        "category": "snacks",
        "subcategory": "Ice Cream",
        "servingType": "volume",
        "defaultServing": {
            "unit": "scoop",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Scoop (~60g)",
                "grams": 60
            },
            {
                "label": "2 Scoops (~120g)",
                "grams": 120
            }
        ],
        "per100g": {
            "calories": 195,
            "protein": 2.8,
            "carbs": 26,
            "fat": 9.5,
            "fiber": 0.2
        },
        "image": "Mango_ice_cream_202604210052.jpeg"
    },
    {
        "id": "ice_cream_butterscotch",
        "name": "Butterscotch Ice Cream",
        "category": "snacks",
        "subcategory": "Ice Cream",
        "servingType": "volume",
        "defaultServing": {
            "unit": "scoop",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Scoop (~60g)",
                "grams": 60
            },
            {
                "label": "2 Scoops (~120g)",
                "grams": 120
            }
        ],
        "per100g": {
            "calories": 220,
            "protein": 3,
            "carbs": 27,
            "fat": 12,
            "fiber": 0
        },
        "image": "Butterscotch_Ice_Cream_202604210052.jpeg"
    },
    {
        "id": "ice_cream_kulfi",
        "name": "Kulfi (Traditional Indian Ice Cream)",
        "category": "snacks",
        "subcategory": "Ice Cream",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Stick (~80g)",
                "grams": 80
            },
            {
                "label": "Cup (120g)",
                "grams": 120
            }
        ],
        "per100g": {
            "calories": 225,
            "protein": 5.5,
            "carbs": 27,
            "fat": 11,
            "fiber": 0
        },
        "image": "Kulfi_served_on_202604210052.jpeg"
    },
    {
        "id": "ice_cream_pista",
        "name": "Pistachio / Pista Ice Cream",
        "category": "snacks",
        "subcategory": "Ice Cream",
        "servingType": "volume",
        "defaultServing": {
            "unit": "scoop",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Scoop (~60g)",
                "grams": 60
            },
            {
                "label": "2 Scoops (~120g)",
                "grams": 120
            }
        ],
        "per100g": {
            "calories": 218,
            "protein": 4.5,
            "carbs": 25,
            "fat": 11,
            "fiber": 0.5
        },
        "image": "Pistachio_ice_cream_202604210052.jpeg"
    },
    {
        "id": "sundae_chocolate",
        "name": "Chocolate Sundae",
        "category": "snacks",
        "subcategory": "Ice Cream",
        "servingType": "volume",
        "defaultServing": {
            "unit": "cup",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Cup (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 245,
            "protein": 4,
            "carbs": 35,
            "fat": 11,
            "fiber": 0.5
        },
        "image": "Chocolate_Sundae_on_202604210052.jpeg"
    },
    {
        "id": "mcdonalds_mcpaneer",
        "name": "McPaneer Royale Burger (McDonalds)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burger",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Burger (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 275,
            "protein": 10,
            "carbs": 25,
            "fat": 14.5,
            "fiber": 2
        },
        "image": "McPaneer_Royale_Burger_202604210052.jpeg"
    },
    {
        "id": "mcdonalds_fries_medium",
        "name": "Medium Fries (McDonalds)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "serving",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small (95g)",
                "grams": 95
            },
            {
                "label": "Medium (117g)",
                "grams": 117
            },
            {
                "label": "Large (154g)",
                "grams": 154
            }
        ],
        "per100g": {
            "calories": 323,
            "protein": 3.4,
            "carbs": 42,
            "fat": 15.5,
            "fiber": 3.8
        },
        "image": "Medium_Fries_on_202604210052.jpeg"
    },
    {
        "id": "mcdonalds_mcflurry",
        "name": "McFlurry Oreo (McDonalds)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "cup",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Regular Cup (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 185,
            "protein": 4.5,
            "carbs": 26,
            "fat": 7,
            "fiber": 0.3
        },
        "image": "McFlurry_Oreo_served_202604210052.jpeg"
    },
    {
        "id": "mcdonalds_softserve_vanilla",
        "name": "Soft Serve Vanilla Cone (McDonalds)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "cone",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Cone (90g)",
                "grams": 90
            }
        ],
        "per100g": {
            "calories": 178,
            "protein": 4,
            "carbs": 25,
            "fat": 7,
            "fiber": 0
        },
        "image": "Soft_Serve_Vanilla_202604210052.jpeg"
    },
    {
        "id": "mcdonalds_nuggets_6pc",
        "name": "Chicken McNuggets 6pc (McDonalds)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 6
        },
        "servingOptions": [
            {
                "label": "6 Pieces (~105g)",
                "grams": 105
            },
            {
                "label": "9 Pieces (~158g)",
                "grams": 158
            }
        ],
        "per100g": {
            "calories": 285,
            "protein": 15.5,
            "carbs": 18,
            "fat": 16,
            "fiber": 1
        },
        "image": "Chicken_McNuggets_6pc_202604210052.jpeg"
    },
    {
        "id": "mcdonalds_hash_brown",
        "name": "Hash Browns (McDonalds)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece (57g)",
                "grams": 57
            }
        ],
        "per100g": {
            "calories": 303,
            "protein": 2.5,
            "carbs": 31,
            "fat": 19,
            "fiber": 2
        },
        "image": "Hash_Browns_served_202604210052.jpeg"
    },
    {
        "id": "bk_paneer_king",
        "name": "Paneer King Burger (Burger King)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burger",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Burger (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 280,
            "protein": 10,
            "carbs": 24,
            "fat": 15,
            "fiber": 2
        },
        "image": "Paneer_King_Burger_202604210052.jpeg"
    },
    {
        "id": "bk_crispy_chicken",
        "name": "Crispy Chicken Burger (Burger King)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "burger",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Single (170g)",
                "grams": 170
            },
            {
                "label": "Double (280g)",
                "grams": 280
            }
        ],
        "per100g": {
            "calories": 211,
            "protein": 6.8,
            "carbs": 26,
            "fat": 8.9,
            "fiber": 1.5
        },
        "image": "Crispy_Chicken_Burger_202604210052.jpeg"
    },
    {
        "id": "bk_onion_rings",
        "name": "Onion Rings (Burger King)",
        "category": "snacks",
        "subcategory": "Fast Food",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "serving",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small (80g)",
                "grams": 80
            },
            {
                "label": "Regular (120g)",
                "grams": 120
            }
        ],
        "per100g": {
            "calories": 316,
            "protein": 4,
            "carbs": 40,
            "fat": 16,
            "fiber": 2.5
        },
        "image": "Onion_rings_served_202604210052.jpeg"
    },
    {
        "id": "pizzahut_margherita",
        "name": "Margherita Pizza (Pizza Hut)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Personal Slice (~95g)",
                "grams": 95
            },
            {
                "label": "1 Medium Slice (~70g)",
                "grams": 70
            },
            {
                "label": "Whole Personal (~375g)",
                "grams": 375
            },
            {
                "label": "Whole Medium (~420g)",
                "grams": 420
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 240,
            "protein": 9.5,
            "carbs": 33,
            "fat": 8,
            "fiber": 2
        },
        "ultimateCheese": {
            "calories": 448,
            "protein": 12.1,
            "carbs": 22.4,
            "fat": 37.8,
            "fiber": 0
        },
        "image": "margherita_pizza.png"
    },
    {
        "id": "pizzahut_veggie_supreme",
        "name": "Veggie Supreme Pizza (Pizza Hut)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Personal Slice (~100g)",
                "grams": 100
            },
            {
                "label": "1 Medium Slice (~75g)",
                "grams": 75
            },
            {
                "label": "Whole Personal (~400g)",
                "grams": 400
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 252,
            "protein": 10,
            "carbs": 34,
            "fat": 9,
            "fiber": 2.5
        },
        "ultimateCheese": {
            "calories": 448,
            "protein": 12.1,
            "carbs": 22.4,
            "fat": 37.8,
            "fiber": 0
        },
        "image": "Veggie_Supreme_Pizza_202604210052.jpeg"
    },
    {
        "id": "pizzahut_paneer_makhani",
        "name": "Paneer Makhani Pizza (Pizza Hut)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Personal Slice (~105g)",
                "grams": 105
            },
            {
                "label": "1 Medium Slice (~80g)",
                "grams": 80
            },
            {
                "label": "Whole Personal (~420g)",
                "grams": 420
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 268,
            "protein": 11,
            "carbs": 32,
            "fat": 11,
            "fiber": 2
        },
        "ultimateCheese": {
            "calories": 448,
            "protein": 12.1,
            "carbs": 22.4,
            "fat": 37.8,
            "fiber": 0
        },
        "image": "paneer_makhani_pizza.png"
    },
    {
        "id": "pizzahut_chicken_tikka",
        "name": "Chicken Tikka Pizza (Pizza Hut)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Personal Slice (~110g)",
                "grams": 110
            },
            {
                "label": "1 Medium Slice (~85g)",
                "grams": 85
            },
            {
                "label": "Whole Personal (~440g)",
                "grams": 440
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 275,
            "protein": 14,
            "carbs": 31,
            "fat": 11,
            "fiber": 2
        },
        "ultimateCheese": {
            "calories": 448,
            "protein": 12.1,
            "carbs": 22.4,
            "fat": 37.8,
            "fiber": 0
        },
        "image": "Chicken_Tikka_Pizza_202604210052.jpeg"
    },
    {
        "id": "pizzahut_pepperoni",
        "name": "Pepperoni Pizza (Pizza Hut)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Personal Slice (~110g)",
                "grams": 110
            },
            {
                "label": "1 Medium Slice (~85g)",
                "grams": 85
            },
            {
                "label": "Whole Personal (~440g)",
                "grams": 440
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 298,
            "protein": 13,
            "carbs": 30,
            "fat": 14,
            "fiber": 1.5
        },
        "ultimateCheese": {
            "calories": 448,
            "protein": 12.1,
            "carbs": 22.4,
            "fat": 37.8,
            "fiber": 0
        },
        "image": "Pepperoni_pizza_served_202604210052.jpeg"
    },
    {
        "id": "pizzahut_bbq_chicken",
        "name": "BBQ Chicken Pizza (Pizza Hut)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Personal Slice (~115g)",
                "grams": 115
            },
            {
                "label": "1 Medium Slice (~90g)",
                "grams": 90
            },
            {
                "label": "Whole Personal (~460g)",
                "grams": 460
            },
            {
                "label": "Custom (g)",
                "grams": null
            }
        ],
        "per100g": {
            "calories": 265,
            "protein": 13,
            "carbs": 32,
            "fat": 10,
            "fiber": 2
        },
        "ultimateCheese": {
            "calories": 448,
            "protein": 12.1,
            "carbs": 22.4,
            "fat": 37.8,
            "fiber": 0
        },
        "image": "BBQ_Chicken_Pizza_202604210052.jpeg"
    },
    {
        "id": "pizzahut_garlic_bread",
        "name": "Garlic Bread Sticks (Pizza Hut)",
        "category": "snacks",
        "subcategory": "Pizza",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 4
        },
        "servingOptions": [
            {
                "label": "1 Stick (~30g)",
                "grams": 30
            },
            {
                "label": "4 Sticks (~120g)",
                "grams": 120
            }
        ],
        "per100g": {
            "calories": 290,
            "protein": 8,
            "carbs": 38,
            "fat": 12,
            "fiber": 2
        },
        "image": "Garlic_Bread_Sticks_202604210052.jpeg"
    },
    {
        "id": "dominos_chicken_tikka_pizza",
        "name": "Chicken Tikka Pizza (Domino's)",
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
                "label": "Whole Regular (~260g)",
                "grams": 260
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
            "calories": 272,
            "protein": 13,
            "carbs": 31,
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
        "image": "Chicken_Tikka_Pizza_202604210052.jpeg"
    },
    {
        "id": "murukku_plain",
        "name": "Murukku (Plain / Rice Flour)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "Medium Serving (50g)",
                "grams": 50
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 520,
            "protein": 7,
            "carbs": 62,
            "fat": 26,
            "fiber": 2.5
        },
        "image": "murukku.jpeg"
    },
    {
        "id": "murukku_ribbon",
        "name": "Ribbon Pakoda (Ribbon Murukku)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 510,
            "protein": 6.5,
            "carbs": 60,
            "fat": 27,
            "fiber": 2
        },
        "image": "Ribbon_Pakoda_on_202604210052.jpeg"
    },
    {
        "id": "seedai",
        "name": "Seedai (Steamed Rice Balls)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 480,
            "protein": 7,
            "carbs": 58,
            "fat": 24,
            "fiber": 2
        },
        "image": "Seedai_served_on_202604210052.jpeg"
    },
    {
        "id": "thattai",
        "name": "Thattai (Crispy Rice Crackers)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 490,
            "protein": 8,
            "carbs": 63,
            "fat": 22,
            "fiber": 2.5
        },
        "image": "Thattai_South_Indian_202604210139.jpeg"
    },
    {
        "id": "mixture_madras",
        "name": "Madras Mixture",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 530,
            "protein": 8,
            "carbs": 55,
            "fat": 30,
            "fiber": 3
        },
        "image": "Madras_Mixture_served_202604210052.jpeg"
    },
    {
        "id": "omapodi",
        "name": "Omapodi (Sev)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 515,
            "protein": 8.5,
            "carbs": 58,
            "fat": 28,
            "fiber": 2.5
        },
        "image": "Omapodi_served_on_202604210052.jpeg"
    },
    {
        "id": "adhirasam",
        "name": "Adhirasam (Jaggery Rice Sweet)",
        "category": "snacks",
        "subcategory": "South Indian Sweets",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece (~60g)",
                "grams": 60
            },
            {
                "label": "2 Pieces (~120g)",
                "grams": 120
            }
        ],
        "per100g": {
            "calories": 395,
            "protein": 3,
            "carbs": 67,
            "fat": 12,
            "fiber": 1
        },
        "image": "Adhirasam_served_on_202604210052.jpeg"
    },
    {
        "id": "mysore_pak",
        "name": "Mysore Pak",
        "category": "snacks",
        "subcategory": "South Indian Sweets",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece (~50g)",
                "grams": 50
            },
            {
                "label": "2 Pieces (~100g)",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 520,
            "protein": 7,
            "carbs": 52,
            "fat": 32,
            "fiber": 1
        },
        "image": "Mysore_Pak_sweet_202604210052.jpeg"
    },
    {
        "id": "badusha",
        "name": "Badusha (Indian Donut Sweet)",
        "category": "snacks",
        "subcategory": "South Indian Sweets",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Piece (~40g)",
                "grams": 40
            },
            {
                "label": "2 Pieces (~80g)",
                "grams": 80
            }
        ],
        "per100g": {
            "calories": 435,
            "protein": 4,
            "carbs": 57,
            "fat": 21,
            "fiber": 0.5
        },
        "image": "Badusha_served_on_202604210052.jpeg"
    },
    {
        "id": "kozhukattai",
        "name": "Kozhukattai / Modak (Steamed Dumpling)",
        "category": "snacks",
        "subcategory": "South Indian Sweets",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Piece (~50g)",
                "grams": 50
            },
            {
                "label": "2 Pieces (~100g)",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 200,
            "protein": 3,
            "carbs": 38,
            "fat": 4,
            "fiber": 1.5
        },
        "image": "Doodh_Peda_gourmet_202604210108.jpeg"
    },
    {
        "id": "halwa_carrot",
        "name": "Carrot Halwa (Gajar Halwa)",
        "category": "snacks",
        "subcategory": "Sweets",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (80g)",
                "grams": 80
            },
            {
                "label": "Regular Bowl (150g)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 210,
            "protein": 4,
            "carbs": 30,
            "fat": 9,
            "fiber": 2
        },
        "image": "Carrot_Halwa_served_202604210052.jpeg"
    },
    {
        "id": "halwa_rava",
        "name": "Rava Halwa (Sooji Halwa)",
        "category": "snacks",
        "subcategory": "Sweets",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (80g)",
                "grams": 80
            },
            {
                "label": "Regular Bowl (150g)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 330,
            "protein": 4,
            "carbs": 48,
            "fat": 13,
            "fiber": 0.5
        },
        "image": "Rava_Halwa_served_202604210052.jpeg"
    },
    {
        "id": "laddu_besan",
        "name": "Besan Laddu",
        "category": "snacks",
        "subcategory": "Sweets",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece (~40g)",
                "grams": 40
            },
            {
                "label": "2 Pieces (~80g)",
                "grams": 80
            }
        ],
        "per100g": {
            "calories": 445,
            "protein": 9,
            "carbs": 52,
            "fat": 22,
            "fiber": 2
        },
        "image": "Besan_Laddu_on_202604210052.jpeg"
    },
    {
        "id": "laddu_motichoor",
        "name": "Motichoor Laddu",
        "category": "snacks",
        "subcategory": "Sweets",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece (~35g)",
                "grams": 35
            },
            {
                "label": "2 Pieces (~70g)",
                "grams": 70
            }
        ],
        "per100g": {
            "calories": 420,
            "protein": 6,
            "carbs": 60,
            "fat": 17,
            "fiber": 1
        },
        "image": "Motichoor_Laddu_on_202604210052.jpeg"
    },
    {
        "id": "orange",
        "name": "Orange",
        "category": "fruits",
        "subcategory": "Fresh Fruits",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Small (100g)",
                "grams": 100
            },
            {
                "label": "1 Medium (150g)",
                "grams": 150
            },
            {
                "label": "1 Large (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 47,
            "protein": 0.9,
            "carbs": 12,
            "fat": 0.1,
            "fiber": 2.4
        },
        "image": "Fresh_Orange_Juice_202604210108.jpeg"
    },
    {
        "id": "grapes_green",
        "name": "Green Grapes",
        "category": "fruits",
        "subcategory": "Fresh Fruits",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 100
        },
        "servingOptions": [
            {
                "label": "Small Bunch (100g)",
                "grams": 100
            },
            {
                "label": "Large Bunch (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 69,
            "protein": 0.7,
            "carbs": 18,
            "fat": 0.2,
            "fiber": 0.9
        },
        "image": "Green_grapes_on_202604210052.jpeg"
    },
    {
        "id": "pineapple",
        "name": "Pineapple",
        "category": "fruits",
        "subcategory": "Fresh Fruits",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 150
        },
        "servingOptions": [
            {
                "label": "1 Slice (80g)",
                "grams": 80
            },
            {
                "label": "Small Bowl (150g)",
                "grams": 150
            },
            {
                "label": "Large Bowl (300g)",
                "grams": 300
            }
        ],
        "per100g": {
            "calories": 50,
            "protein": 0.5,
            "carbs": 13,
            "fat": 0.1,
            "fiber": 1.4
        },
        "image": "Pineapple_served_on_202604210052.jpeg"
    },
    {
        "id": "pomegranate",
        "name": "Pomegranate (Anaar)",
        "category": "fruits",
        "subcategory": "Fresh Fruits",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 150
        },
        "servingOptions": [
            {
                "label": "Small Bowl (100g)",
                "grams": 100
            },
            {
                "label": "Regular Bowl (150g)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 83,
            "protein": 1.7,
            "carbs": 18.7,
            "fat": 1.2,
            "fiber": 4
        },
        "image": "Cut-open_pomegranate_on_202604210052.jpeg"
    },
    {
        "id": "kiwi",
        "name": "Kiwi Fruit",
        "category": "fruits",
        "subcategory": "Fresh Fruits",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Kiwi (75g)",
                "grams": 75
            },
            {
                "label": "2 Kiwis (150g)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 61,
            "protein": 1.1,
            "carbs": 15,
            "fat": 0.5,
            "fiber": 3
        },
        "image": "Kiwi_fruit_on_202604210052.jpeg"
    },
    {
        "id": "pear",
        "name": "Pear (Nashpati)",
        "category": "fruits",
        "subcategory": "Fresh Fruits",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Small (120g)",
                "grams": 120
            },
            {
                "label": "1 Medium (180g)",
                "grams": 180
            }
        ],
        "per100g": {
            "calories": 57,
            "protein": 0.4,
            "carbs": 15,
            "fat": 0.1,
            "fiber": 3.1
        },
        "image": "Pear_served_on_202604210053.jpeg"
    },
    {
        "id": "chikoo",
        "name": "Chikoo / Sapodilla",
        "category": "fruits",
        "subcategory": "Fresh Fruits",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Piece (~80g)",
                "grams": 80
            },
            {
                "label": "2 Pieces (~160g)",
                "grams": 160
            }
        ],
        "per100g": {
            "calories": 83,
            "protein": 0.4,
            "carbs": 20,
            "fat": 1.1,
            "fiber": 5.3
        },
        "image": "Chikoo_served_on_202604210052.jpeg"
    },
    {
        "id": "lychee",
        "name": "Lychee (Litchi)",
        "category": "fruits",
        "subcategory": "Fresh Fruits",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 100
        },
        "servingOptions": [
            {
                "label": "5-6 Pieces (100g)",
                "grams": 100
            },
            {
                "label": "10-12 Pieces (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 66,
            "protein": 0.8,
            "carbs": 16.5,
            "fat": 0.4,
            "fiber": 1.3
        },
        "image": "Lychee_served_on_202604210052.jpeg"
    },
    {
        "id": "strawberry",
        "name": "Strawberries",
        "category": "fruits",
        "subcategory": "Fresh Fruits",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 100
        },
        "servingOptions": [
            {
                "label": "Small Bowl (100g)",
                "grams": 100
            },
            {
                "label": "Large Bowl (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 33,
            "protein": 0.7,
            "carbs": 8,
            "fat": 0.3,
            "fiber": 2
        },
        "image": "Strawberries_on_elegant_202604210052.jpeg"
    },
    {
        "id": "jackfruit",
        "name": "Jackfruit (Kathal)",
        "category": "fruits",
        "subcategory": "Fresh Fruits",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 150
        },
        "servingOptions": [
            {
                "label": "Small Bowl (100g)",
                "grams": 100
            },
            {
                "label": "Regular Bowl (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 95,
            "protein": 1.7,
            "carbs": 23.2,
            "fat": 0.6,
            "fiber": 1.5
        },
        "image": "Ripe_jackfruit_pieces_202604210210.jpeg"
    },
    {
        "id": "broccoli",
        "name": "Broccoli (Raw)",
        "category": "vegetables",
        "subcategory": "Vegetables",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 100
        },
        "servingOptions": [
            {
                "label": "1 Cup (90g)",
                "grams": 90
            },
            {
                "label": "200g",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 34,
            "protein": 2.8,
            "carbs": 6.6,
            "fat": 0.4,
            "fiber": 2.6
        },
        "image": "Broccoli_served_on_202604210052.jpeg"
    },
    {
        "id": "cucumber",
        "name": "Cucumber (Kheera)",
        "category": "vegetables",
        "subcategory": "Vegetables",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 150
        },
        "servingOptions": [
            {
                "label": "Half (100g)",
                "grams": 100
            },
            {
                "label": "Whole (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 16,
            "protein": 0.7,
            "carbs": 3.6,
            "fat": 0.1,
            "fiber": 0.5
        },
        "image": "Cucumber_served_on_202604210052.jpeg"
    },
    {
        "id": "capsicum_red",
        "name": "Red Capsicum (Bell Pepper)",
        "category": "vegetables",
        "subcategory": "Vegetables",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 100
        },
        "servingOptions": [
            {
                "label": "Half (80g)",
                "grams": 80
            },
            {
                "label": "Whole (150g)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 31,
            "protein": 1,
            "carbs": 6,
            "fat": 0.3,
            "fiber": 2.1
        },
        "image": "Red_Capsicum_served_202604210052.jpeg"
    },
    {
        "id": "green_peas",
        "name": "Green Peas (Fresh / Matar)",
        "category": "vegetables",
        "subcategory": "Vegetables",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 100
        },
        "servingOptions": [
            {
                "label": "Small Bowl (100g)",
                "grams": 100
            },
            {
                "label": "Large Bowl (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 81,
            "protein": 5.4,
            "carbs": 14.5,
            "fat": 0.4,
            "fiber": 5.1
        },
        "image": "Green_peas_served_202604210052.jpeg"
    },
    {
        "id": "corn_kernels",
        "name": "Sweet Corn Kernels",
        "category": "vegetables",
        "subcategory": "Vegetables",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 100
        },
        "servingOptions": [
            {
                "label": "Small Bowl (100g)",
                "grams": 100
            },
            {
                "label": "Large Bowl (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 96,
            "protein": 3.4,
            "carbs": 21,
            "fat": 1.3,
            "fiber": 2.4
        },
        "image": "Sweet_Corn_Kernels_202604210052.jpeg"
    },
    {
        "id": "bitter_gourd",
        "name": "Bitter Gourd (Karela)",
        "category": "vegetables",
        "subcategory": "Vegetables",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 100
        },
        "servingOptions": [
            {
                "label": "1 Medium (80g)",
                "grams": 80
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 17,
            "protein": 1,
            "carbs": 3.7,
            "fat": 0.2,
            "fiber": 2.8
        },
        "image": "Bitter_Gourd_served_202604210052.jpeg"
    },
    {
        "id": "raw_banana_veg",
        "name": "Raw Banana / Green Banana",
        "category": "vegetables",
        "subcategory": "Vegetables",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 100
        },
        "servingOptions": [
            {
                "label": "1 Small (100g)",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 89,
            "protein": 1.1,
            "carbs": 23,
            "fat": 0.3,
            "fiber": 2.6
        },
        "image": "Raw_banana_served_202604210052.jpeg"
    },
    {
        "id": "pazham_pori",
        "name": "Pazham Pori (Banana Fritters)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Piece (60g)",
                "grams": 60
            },
            {
                "label": "2 Pieces (120g)",
                "grams": 120
            },
            {
                "label": "3 Pieces (180g)",
                "grams": 180
            }
        ],
        "per100g": {
            "calories": 290,
            "protein": 3,
            "carbs": 42,
            "fat": 12,
            "fiber": 2
        },
        "image": "Golden_Pazham_Pori_202604211933.jpeg"
    },
    {
        "id": "banana_chips_kerala",
        "name": "Banana Chips (Nendran / Kerala)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "Medium (50g)",
                "grams": 50
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 519,
            "protein": 2,
            "carbs": 58,
            "fat": 31,
            "fiber": 4
        },
        "image": "Crispy_banana_chips_202604211933.jpeg"
    },
    {
        "id": "unniyappam",
        "name": "Unniyappam (Sweet Rice Fritters)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 4
        },
        "servingOptions": [
            {
                "label": "2 Pieces (40g)",
                "grams": 40
            },
            {
                "label": "4 Pieces (80g)",
                "grams": 80
            },
            {
                "label": "6 Pieces (120g)",
                "grams": 120
            }
        ],
        "per100g": {
            "calories": 350,
            "protein": 4,
            "carbs": 55,
            "fat": 12,
            "fiber": 1.5
        },
        "image": "Unniyappam_arranged_on_202604211933.jpeg"
    },
    {
        "id": "achappam",
        "name": "Achappam (Rose Cookies)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 3
        },
        "servingOptions": [
            {
                "label": "2 Pieces (20g)",
                "grams": 20
            },
            {
                "label": "4 Pieces (40g)",
                "grams": 40
            },
            {
                "label": "6 Pieces (60g)",
                "grams": 60
            }
        ],
        "per100g": {
            "calories": 480,
            "protein": 5,
            "carbs": 62,
            "fat": 23,
            "fiber": 1
        },
        "image": "Crispy_Achappam_stacked_202604211933.jpeg"
    },
    {
        "id": "sukhiyan",
        "name": "Sukhiyan (Sweet Dal Fritters)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Piece (50g)",
                "grams": 50
            },
            {
                "label": "2 Pieces (100g)",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 310,
            "protein": 6,
            "carbs": 45,
            "fat": 12,
            "fiber": 3
        },
        "image": "Sukhiyan_on_dark_202604211933.jpeg"
    },
    {
        "id": "kuzhalappam",
        "name": "Kuzhalappam (Crispy Rice Tubes)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 495,
            "protein": 6,
            "carbs": 60,
            "fat": 25,
            "fiber": 2
        },
        "image": "Kuzhalappam_arranged_in_202604211933.jpeg"
    },
    {
        "id": "vettu_cake",
        "name": "Vettu Cake (Kerala Tea Cake)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece (60g)",
                "grams": 60
            },
            {
                "label": "2 Pieces (120g)",
                "grams": 120
            }
        ],
        "per100g": {
            "calories": 395,
            "protein": 5,
            "carbs": 52,
            "fat": 18,
            "fiber": 1
        },
        "image": "Vettu_Cake_on_202604211933.jpeg"
    },
    {
        "id": "nei_appam",
        "name": "Nei Appam / Neyyappam (Ghee Fritters)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 3
        },
        "servingOptions": [
            {
                "label": "2 Pieces (40g)",
                "grams": 40
            },
            {
                "label": "4 Pieces (80g)",
                "grams": 80
            }
        ],
        "per100g": {
            "calories": 370,
            "protein": 3.5,
            "carbs": 50,
            "fat": 16,
            "fiber": 1
        },
        "image": "Neyyappam_in_brass_202604211933.jpeg"
    },
    {
        "id": "ela_ada",
        "name": "Ela Ada (Banana Leaf Sweet)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Piece (80g)",
                "grams": 80
            },
            {
                "label": "2 Pieces (160g)",
                "grams": 160
            }
        ],
        "per100g": {
            "calories": 195,
            "protein": 3,
            "carbs": 35,
            "fat": 4.5,
            "fiber": 2
        },
        "image": "Ela_Ada_sweet_202604211933.jpeg"
    },
    {
        "id": "parippu_vada_kerala",
        "name": "Parippu Vada (Kerala Dal Fritter)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
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
                "label": "3 Pieces (150g)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 320,
            "protein": 14,
            "carbs": 42,
            "fat": 11,
            "fiber": 6
        },
        "image": "Crispy_Parippu_Vada_202604211933.jpeg"
    },
    {
        "id": "uzhunnu_vada",
        "name": "Uzhunnu Vada (Kerala Medu Vada)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Piece (50g)",
                "grams": 50
            },
            {
                "label": "2 Pieces (100g)",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 290,
            "protein": 12,
            "carbs": 30,
            "fat": 13,
            "fiber": 3
        },
        "image": "Crispy_Uzhunnu_Vada_202604211933.jpeg"
    },
    {
        "id": "kodubale",
        "name": "Kodubale (Karnataka Ring Snack)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 510,
            "protein": 8,
            "carbs": 60,
            "fat": 26,
            "fiber": 3
        },
        "image": "Kodubale_in_brass_202604211933.jpeg"
    },
    {
        "id": "nippattu",
        "name": "Nippattu (Rice Flour Crackers)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 485,
            "protein": 7,
            "carbs": 58,
            "fat": 24,
            "fiber": 2.5
        },
        "image": "Crispy_Nippattu_on_202604211933.jpeg"
    },
    {
        "id": "khara_boondi",
        "name": "Khara Boondi (Spiced Gram Drops)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 475,
            "protein": 10,
            "carbs": 52,
            "fat": 25,
            "fiber": 3
        },
        "image": "Crispy_Khara_Boondi_202604211933.jpeg"
    },
    {
        "id": "masala_peanuts",
        "name": "Masala Peanuts (Coated & Fried)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Handful (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 505,
            "protein": 18,
            "carbs": 35,
            "fat": 32,
            "fiber": 5
        },
        "image": "Crispy_Masala_Peanuts_202604211933.jpeg"
    },
    {
        "id": "mysore_mixture",
        "name": "Mysore Mixture",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 540,
            "protein": 9,
            "carbs": 52,
            "fat": 32,
            "fiber": 3
        },
        "image": "Mysore_Mixture_in_202604211936.jpeg"
    },
    {
        "id": "chiroti",
        "name": "Chiroti (Crispy Layered Sweet)",
        "category": "snacks",
        "subcategory": "South Indian Sweets",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece (40g)",
                "grams": 40
            },
            {
                "label": "2 Pieces (80g)",
                "grams": 80
            }
        ],
        "per100g": {
            "calories": 450,
            "protein": 5,
            "carbs": 55,
            "fat": 23,
            "fiber": 1
        },
        "image": "Flaky_Chiroti_sweet_202604211933.jpeg"
    },
    {
        "id": "dharwad_peda",
        "name": "Dharwad Peda",
        "category": "snacks",
        "subcategory": "South Indian Sweets",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Piece (20g)",
                "grams": 20
            },
            {
                "label": "2 Pieces (40g)",
                "grams": 40
            }
        ],
        "per100g": {
            "calories": 395,
            "protein": 8,
            "carbs": 58,
            "fat": 14,
            "fiber": 0
        },
        "image": "Peda_on_brass_202604211933.jpeg"
    },
    {
        "id": "kaima_idli",
        "name": "Kaima Idli (Fried Spiced Idli)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "quantity",
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
            }
        ],
        "per100g": {
            "calories": 185,
            "protein": 4,
            "carbs": 28,
            "fat": 6,
            "fiber": 1.5
        },
        "image": "Kaima_Idli_on_202604211933.jpeg"
    },
    {
        "id": "bonda_south",
        "name": "Bonda (Urulaikizhangu Bonda)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 2
        },
        "servingOptions": [
            {
                "label": "1 Piece (60g)",
                "grams": 60
            },
            {
                "label": "2 Pieces (120g)",
                "grams": 120
            }
        ],
        "per100g": {
            "calories": 260,
            "protein": 5,
            "carbs": 30,
            "fat": 13,
            "fiber": 2
        },
        "image": "Bonda_with_potato_202604211933.jpeg"
    },
    {
        "id": "kara_sev",
        "name": "Kara Sev (Spicy Thin Sev)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 520,
            "protein": 9,
            "carbs": 55,
            "fat": 29,
            "fiber": 3
        },
        "image": "Kara_Sev_in_202604211933.jpeg"
    },
    {
        "id": "kai_murukku",
        "name": "Kai Murukku (Hand-pressed Murukku)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 530,
            "protein": 7.5,
            "carbs": 60,
            "fat": 28,
            "fiber": 2.5
        },
        "image": "Kai_Murukku_on_202604211933.jpeg"
    },
    {
        "id": "butter_murukku",
        "name": "Butter Murukku (Benne Murukku)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 545,
            "protein": 6.5,
            "carbs": 58,
            "fat": 31,
            "fiber": 2
        },
        "image": "Butter_Murukku_in_202604211933.jpeg"
    },
    {
        "id": "chekkalu",
        "name": "Chekkalu / Chekka (Rice Crackers)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 490,
            "protein": 7,
            "carbs": 62,
            "fat": 23,
            "fiber": 2.5
        },
        "image": "Chekkalu_stacked_on_202604211933.jpeg"
    },
    {
        "id": "pakkavada",
        "name": "Pakkavada (Thick Besan Pakoda)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 465,
            "protein": 12,
            "carbs": 48,
            "fat": 25,
            "fiber": 4
        },
        "image": "Pakkavada_on_dark_202604211933.jpeg"
    },
    {
        "id": "diamond_biscuit",
        "name": "Diamond Biscuit / Maida Biscuit (South Indian)",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            }
        ],
        "per100g": {
            "calories": 470,
            "protein": 6,
            "carbs": 65,
            "fat": 20,
            "fiber": 1
        },
        "image": "Diamond_maida_biscuits_202604211933.jpeg"
    },
    {
        "id": "chegodi",
        "name": "Chegodi / Ring Murukku",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 485,
            "protein": 9,
            "carbs": 58,
            "fat": 24,
            "fiber": 3
        },
        "image": "Golden_Chegodi_on_202604211933.jpeg"
    },
    {
        "id": "seepu_seedai",
        "name": "Seepu Seedai",
        "category": "snacks",
        "subcategory": "South Indian Snacks",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 30
        },
        "servingOptions": [
            {
                "label": "Small Serving (30g)",
                "grams": 30
            },
            {
                "label": "50g",
                "grams": 50
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 500,
            "protein": 7,
            "carbs": 55,
            "fat": 28,
            "fiber": 2.5
        },
        "image": "Seepu_Seedai_in_202604211933.jpeg"
    },
    {
        "id": "aval_vilayichathu",
        "name": "Aval Vilayichathu (Beaten Rice Sweet)",
        "category": "snacks",
        "subcategory": "South Indian Sweets",
        "servingType": "weight",
        "defaultServing": {
            "unit": "g",
            "amount": 50
        },
        "servingOptions": [
            {
                "label": "Small Serving (50g)",
                "grams": 50
            },
            {
                "label": "100g",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 360,
            "protein": 3.5,
            "carbs": 62,
            "fat": 10,
            "fiber": 2
        },
        "image": "Aval_Vilayichathu_in_202604211933.jpeg"
    },
    {
        "id": "sakkarai_pongal",
        "name": "Sakkarai Pongal (Sweet Pongal)",
        "category": "snacks",
        "subcategory": "South Indian Sweets",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (100g)",
                "grams": 100
            },
            {
                "label": "Regular Bowl (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 195,
            "protein": 3.5,
            "carbs": 34,
            "fat": 5,
            "fiber": 1
        },
        "image": "Sakkarai_Pongal_in_202604211933.jpeg"
    },
    {
        "id": "payasam_vermicelli",
        "name": "Semiya Payasam (Vermicelli Kheer)",
        "category": "snacks",
        "subcategory": "South Indian Sweets",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (100g)",
                "grams": 100
            },
            {
                "label": "Regular Bowl (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 155,
            "protein": 3,
            "carbs": 22,
            "fat": 6,
            "fiber": 0.5
        },
        "image": "Semiya_Payasam_in_202604211933.jpeg"
    },
    {
        "id": "payasam_parippu",
        "name": "Parippu Payasam (Dal Kheer - Kerala)",
        "category": "snacks",
        "subcategory": "South Indian Sweets",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (100g)",
                "grams": 100
            },
            {
                "label": "Regular Bowl (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 170,
            "protein": 4,
            "carbs": 24,
            "fat": 6.5,
            "fiber": 1.5
        },
        "image": "Parippu_Payasam_in_202604211933.jpeg"
    },
    {
        "id": "paal_payasam",
        "name": "Paal Payasam (Rice Kheer)",
        "category": "snacks",
        "subcategory": "South Indian Sweets",
        "servingType": "volume",
        "defaultServing": {
            "unit": "bowl",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "Small Katori (100g)",
                "grams": 100
            },
            {
                "label": "Regular Bowl (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 145,
            "protein": 3.5,
            "carbs": 20,
            "fat": 5.5,
            "fiber": 0
        },
        "image": "Paal_Payasam_in_202604211933.jpeg"
    },
    {
        "id": "unni_appam_jaggery",
        "name": "Unni Appam (Jaggery & Banana)",
        "category": "snacks",
        "subcategory": "South Indian Sweets",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 4
        },
        "servingOptions": [
            {
                "label": "3 Pieces (45g)",
                "grams": 45
            },
            {
                "label": "5 Pieces (75g)",
                "grams": 75
            }
        ],
        "per100g": {
            "calories": 340,
            "protein": 4,
            "carbs": 52,
            "fat": 12,
            "fiber": 1.5
        },
        "image": "Unni_Appam_in_202604211933.jpeg"
    },
    {
        "id": "cake_pineapple",
        "name": "Pineapple Cake",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (80g)",
                "grams": 80
            },
            {
                "label": "2 Slices (160g)",
                "grams": 160
            },
            {
                "label": "Half Kg Cake",
                "grams": 500
            }
        ],
        "per100g": {
            "calories": 340,
            "protein": 3.5,
            "carbs": 50,
            "fat": 14,
            "fiber": 0.5
        },
        "image": "Pineapple_cake_on_202604211933.jpeg"
    },
    {
        "id": "cake_butterscotch",
        "name": "Butterscotch Cake",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (80g)",
                "grams": 80
            },
            {
                "label": "2 Slices (160g)",
                "grams": 160
            },
            {
                "label": "Half Kg Cake",
                "grams": 500
            }
        ],
        "per100g": {
            "calories": 370,
            "protein": 4,
            "carbs": 52,
            "fat": 16,
            "fiber": 0.3
        },
        "image": "Butterscotch_cake_on_202604211933.jpeg"
    },
    {
        "id": "cake_vanilla_sponge",
        "name": "Vanilla Sponge Cake",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (80g)",
                "grams": 80
            },
            {
                "label": "2 Slices (160g)",
                "grams": 160
            },
            {
                "label": "Half Kg Cake",
                "grams": 500
            }
        ],
        "per100g": {
            "calories": 350,
            "protein": 5,
            "carbs": 52,
            "fat": 13,
            "fiber": 0.3
        },
        "image": "Vanilla_Sponge_Cake_202604211933.jpeg"
    },
    {
        "id": "cake_chocolate_truffle",
        "name": "Chocolate Truffle Cake",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (80g)",
                "grams": 80
            },
            {
                "label": "2 Slices (160g)",
                "grams": 160
            },
            {
                "label": "Half Kg Cake",
                "grams": 500
            }
        ],
        "per100g": {
            "calories": 420,
            "protein": 5,
            "carbs": 50,
            "fat": 23,
            "fiber": 2.5
        },
        "image": "Chocolate_truffle_cake_202604211933.jpeg"
    },
    {
        "id": "cake_white_forest",
        "name": "White Forest Cake",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (80g)",
                "grams": 80
            },
            {
                "label": "2 Slices (160g)",
                "grams": 160
            },
            {
                "label": "Half Kg Cake",
                "grams": 500
            }
        ],
        "per100g": {
            "calories": 345,
            "protein": 4,
            "carbs": 48,
            "fat": 15,
            "fiber": 0.5
        },
        "image": "White_Forest_Cake_202604211933.jpeg"
    },
    {
        "id": "cake_strawberry",
        "name": "Strawberry Cake",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (80g)",
                "grams": 80
            },
            {
                "label": "2 Slices (160g)",
                "grams": 160
            },
            {
                "label": "Half Kg Cake",
                "grams": 500
            }
        ],
        "per100g": {
            "calories": 335,
            "protein": 3.5,
            "carbs": 50,
            "fat": 13,
            "fiber": 0.5
        },
        "image": "Strawberry_cake_on_202604211933.jpeg"
    },
    {
        "id": "cake_mango",
        "name": "Mango Cake",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (80g)",
                "grams": 80
            },
            {
                "label": "2 Slices (160g)",
                "grams": 160
            },
            {
                "label": "Half Kg Cake",
                "grams": 500
            }
        ],
        "per100g": {
            "calories": 340,
            "protein": 3.5,
            "carbs": 52,
            "fat": 13,
            "fiber": 0.5
        },
        "image": "Mango_cake_on_202604211933.jpeg"
    },
    {
        "id": "cake_coffee_walnut",
        "name": "Coffee Walnut Cake",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (80g)",
                "grams": 80
            },
            {
                "label": "2 Slices (160g)",
                "grams": 160
            }
        ],
        "per100g": {
            "calories": 380,
            "protein": 5.5,
            "carbs": 46,
            "fat": 20,
            "fiber": 1.5
        },
        "image": "A_professional_food_202604211933.jpeg"
    },
    {
        "id": "cake_carrot",
        "name": "Carrot Cake (with Cream Cheese)",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (100g)",
                "grams": 100
            },
            {
                "label": "2 Slices (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 356,
            "protein": 4.5,
            "carbs": 44,
            "fat": 18,
            "fiber": 1.5
        },
        "image": "Carrot_cake_with_202604211933.jpeg"
    },
    {
        "id": "cake_fruit_cake",
        "name": "Fruit Cake (Mixed Dry Fruits)",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (80g)",
                "grams": 80
            },
            {
                "label": "2 Slices (160g)",
                "grams": 160
            }
        ],
        "per100g": {
            "calories": 324,
            "protein": 4.5,
            "carbs": 50,
            "fat": 12,
            "fiber": 2
        },
        "image": "Fruit_cake_on_202604211933.jpeg"
    },
    {
        "id": "cake_blueberry",
        "name": "Blueberry Cake",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (80g)",
                "grams": 80
            },
            {
                "label": "2 Slices (160g)",
                "grams": 160
            }
        ],
        "per100g": {
            "calories": 330,
            "protein": 3.5,
            "carbs": 49,
            "fat": 13,
            "fiber": 1
        },
        "image": "Blueberry_cake_on_202604211933.jpeg"
    },
    {
        "id": "cake_lemon",
        "name": "Lemon Cake",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (80g)",
                "grams": 80
            },
            {
                "label": "2 Slices (160g)",
                "grams": 160
            }
        ],
        "per100g": {
            "calories": 345,
            "protein": 4,
            "carbs": 52,
            "fat": 13,
            "fiber": 0.5
        },
        "image": "Lemon_cake_on_202604211933.jpeg"
    },
    {
        "id": "cake_tiramisu",
        "name": "Tiramisu",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (120g)",
                "grams": 120
            }
        ],
        "per100g": {
            "calories": 283,
            "protein": 5.5,
            "carbs": 28,
            "fat": 16,
            "fiber": 0.5
        },
        "image": "Tiramisu_slice_on_202604211933.jpeg"
    },
    {
        "id": "cake_oreo",
        "name": "Oreo Cookie Cake",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (80g)",
                "grams": 80
            },
            {
                "label": "2 Slices (160g)",
                "grams": 160
            }
        ],
        "per100g": {
            "calories": 400,
            "protein": 5,
            "carbs": 52,
            "fat": 20,
            "fiber": 2
        },
        "image": "Oreo_Cookie_Cake_202604211933.jpeg"
    },
    {
        "id": "cake_ferrero_rocher",
        "name": "Ferrero Rocher Cake",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (80g)",
                "grams": 80
            }
        ],
        "per100g": {
            "calories": 430,
            "protein": 6,
            "carbs": 48,
            "fat": 24,
            "fiber": 2
        },
        "image": "Ferrero_Rocher_cake_202604211933.jpeg"
    },
    {
        "id": "cake_honey",
        "name": "Honey Cake",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (80g)",
                "grams": 80
            }
        ],
        "per100g": {
            "calories": 320,
            "protein": 4.5,
            "carbs": 55,
            "fat": 9,
            "fiber": 0.5
        },
        "image": "Honey_cake_slice_202604211933.jpeg"
    },
    {
        "id": "cake_plum",
        "name": "Plum Cake (Christmas Cake)",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (80g)",
                "grams": 80
            },
            {
                "label": "2 Slices (160g)",
                "grams": 160
            }
        ],
        "per100g": {
            "calories": 355,
            "protein": 4,
            "carbs": 55,
            "fat": 13,
            "fiber": 2
        },
        "image": "Plum_cake_on_202604211933.jpeg"
    },
    {
        "id": "cake_marble",
        "name": "Marble Cake",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (70g)",
                "grams": 70
            },
            {
                "label": "2 Slices (140g)",
                "grams": 140
            }
        ],
        "per100g": {
            "calories": 365,
            "protein": 5,
            "carbs": 50,
            "fat": 16,
            "fiber": 1
        },
        "image": "Marble_cake_slice_202604211933.jpeg"
    },
    {
        "id": "cake_pound_cake",
        "name": "Pound Cake (Plain / Butter)",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (70g)",
                "grams": 70
            },
            {
                "label": "2 Slices (140g)",
                "grams": 140
            }
        ],
        "per100g": {
            "calories": 375,
            "protein": 5.5,
            "carbs": 48,
            "fat": 18,
            "fiber": 0.5
        },
        "image": "Pound_cake_slice_202604211933.jpeg"
    },
    {
        "id": "cake_banana_bread",
        "name": "Banana Bread / Banana Cake",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "weight",
        "defaultServing": {
            "unit": "slice",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Slice (80g)",
                "grams": 80
            },
            {
                "label": "2 Slices (160g)",
                "grams": 160
            }
        ],
        "per100g": {
            "calories": 326,
            "protein": 4.5,
            "carbs": 51,
            "fat": 12,
            "fiber": 1.5
        },
        "image": "Slice_of_Banana_202604211933.jpeg"
    },
    {
        "id": "cupcake_vanilla",
        "name": "Vanilla Cupcake (with Frosting)",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Cupcake (75g)",
                "grams": 75
            },
            {
                "label": "2 Cupcakes (150g)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 380,
            "protein": 4,
            "carbs": 56,
            "fat": 16,
            "fiber": 0.3
        },
        "image": "Vanilla_cupcake_with_202604211933.jpeg"
    },
    {
        "id": "cupcake_chocolate",
        "name": "Chocolate Cupcake (with Frosting)",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Cupcake (75g)",
                "grams": 75
            },
            {
                "label": "2 Cupcakes (150g)",
                "grams": 150
            }
        ],
        "per100g": {
            "calories": 395,
            "protein": 4.5,
            "carbs": 52,
            "fat": 19,
            "fiber": 2
        },
        "image": "Chocolate_cupcake_with_202604211933.jpeg"
    },
    {
        "id": "cupcake_red_velvet",
        "name": "Red Velvet Cupcake (with Cream Cheese)",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Cupcake (80g)",
                "grams": 80
            }
        ],
        "per100g": {
            "calories": 390,
            "protein": 4.5,
            "carbs": 54,
            "fat": 17,
            "fiber": 0.5
        },
        "image": "Red_Velvet_Cupcake_202604211933.jpeg"
    },
    {
        "id": "pastry_puff_veg",
        "name": "Veg Puff Pastry",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece (80g)",
                "grams": 80
            },
            {
                "label": "2 Pieces (160g)",
                "grams": 160
            }
        ],
        "per100g": {
            "calories": 310,
            "protein": 5,
            "carbs": 35,
            "fat": 16,
            "fiber": 2
        },
        "image": "Golden_flaky_Veg_202604211933.jpeg"
    },
    {
        "id": "pastry_puff_egg",
        "name": "Egg Puff Pastry",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece (90g)",
                "grams": 90
            },
            {
                "label": "2 Pieces (180g)",
                "grams": 180
            }
        ],
        "per100g": {
            "calories": 295,
            "protein": 8,
            "carbs": 30,
            "fat": 15,
            "fiber": 1
        },
        "image": "Golden_Egg_Puff_202604211933.jpeg"
    },
    {
        "id": "pastry_puff_chicken",
        "name": "Chicken Puff Pastry",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece (90g)",
                "grams": 90
            },
            {
                "label": "2 Pieces (180g)",
                "grams": 180
            }
        ],
        "per100g": {
            "calories": 305,
            "protein": 10,
            "carbs": 28,
            "fat": 17,
            "fiber": 1
        },
        "image": "Chicken_Puff_Pastry_202604211933.jpeg"
    },
    {
        "id": "croissant_plain",
        "name": "Croissant (Plain Butter)",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece (60g)",
                "grams": 60
            },
            {
                "label": "2 Pieces (120g)",
                "grams": 120
            }
        ],
        "per100g": {
            "calories": 406,
            "protein": 8.2,
            "carbs": 45.8,
            "fat": 21,
            "fiber": 2.3
        },
        "image": "Golden-brown_butter_croissant_202604211933.jpeg"
    },
    {
        "id": "croissant_chocolate",
        "name": "Chocolate Croissant",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece (75g)",
                "grams": 75
            }
        ],
        "per100g": {
            "calories": 420,
            "protein": 7,
            "carbs": 48,
            "fat": 22,
            "fiber": 2.5
        },
        "image": "Chocolate_croissant_on_202604211933.jpeg"
    },
    {
        "id": "danish_pastry",
        "name": "Danish Pastry (Fruit/Cream)",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Piece (90g)",
                "grams": 90
            }
        ],
        "per100g": {
            "calories": 374,
            "protein": 5.5,
            "carbs": 42,
            "fat": 20,
            "fiber": 1.5
        },
        "image": "Fruit_Danish_pastry_202604211933.jpeg"
    },
    {
        "id": "eclair_chocolate",
        "name": "Chocolate Eclair",
        "category": "snacks",
        "subcategory": "Cakes",
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
                "label": "2 Pieces (200g)",
                "grams": 200
            }
        ],
        "per100g": {
            "calories": 262,
            "protein": 5,
            "carbs": 24,
            "fat": 16,
            "fiber": 1
        },
        "image": "Chocolate_Eclair_on_202604211933.jpeg"
    },
    {
        "id": "donut_glazed",
        "name": "Glazed Donut",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Donut (65g)",
                "grams": 65
            },
            {
                "label": "2 Donuts (130g)",
                "grams": 130
            }
        ],
        "per100g": {
            "calories": 400,
            "protein": 5,
            "carbs": 51,
            "fat": 20,
            "fiber": 1.5
        },
        "image": "Glazed_donut_on_202604211933.jpeg"
    },
    {
        "id": "donut_chocolate",
        "name": "Chocolate Donut",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Donut (70g)",
                "grams": 70
            }
        ],
        "per100g": {
            "calories": 415,
            "protein": 5.5,
            "carbs": 50,
            "fat": 22,
            "fiber": 2
        },
        "image": "Chocolate_donut_with_202604211933.jpeg"
    },
    {
        "id": "muffin_blueberry",
        "name": "Blueberry Muffin",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Muffin (100g)",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 340,
            "protein": 5,
            "carbs": 48,
            "fat": 14,
            "fiber": 1.5
        },
        "image": "Blueberry_muffin_on_202604211933.jpeg"
    },
    {
        "id": "muffin_chocolate_chip",
        "name": "Chocolate Chip Muffin",
        "category": "snacks",
        "subcategory": "Cakes",
        "servingType": "quantity",
        "defaultServing": {
            "unit": "piece",
            "amount": 1
        },
        "servingOptions": [
            {
                "label": "1 Muffin (100g)",
                "grams": 100
            }
        ],
        "per100g": {
            "calories": 380,
            "protein": 5.5,
            "carbs": 50,
            "fat": 18,
            "fiber": 2
        },
        "image": "Chocolate_Chip_Muffin_202604211933.jpeg"
    },

    { "id": "snack_peanut_chikki", "name": "Peanut Chikki", "category": "snacks", "subcategory": "Indian Sweets & Snacks", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (Small) (~15g)", "grams": 15 }, { "label": "1 Piece (Medium) (~25g)", "grams": 25 }, { "label": "1 Piece (Large) (~40g)", "grams": 40 }, { "label": "100g", "grams": 100 }], "per100g": { "calories": 465, "protein": 13, "carbs": 55, "fat": 23, "fiber": 3.5 }, "image": "Peanut_Chikki_pieces_on_slate_202606280001.jpeg" },
    { "id": "snack_peanut_bites", "name": "Peanut Bites", "category": "snacks", "subcategory": "Indian Sweets & Snacks", "servingType": "count", "defaultServing": { "unit": "piece", "amount": 1 }, "servingOptions": [{ "label": "1 Piece (Small) (~8g)", "grams": 8 }, { "label": "1 Piece (Medium) (~12g)", "grams": 12 }, { "label": "1 Piece (Large) (~20g)", "grams": 20 }, { "label": "100g", "grams": 100 }], "per100g": { "calories": 480, "protein": 14, "carbs": 52, "fat": 25, "fiber": 3.5 }, "image": "Peanut_Chikki_pieces_on_slate_202606280001.jpeg" }

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
