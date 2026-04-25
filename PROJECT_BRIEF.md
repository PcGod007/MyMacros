# MyMacros — Project Brief

**MyMacros** is a premium, mobile-first Indian nutrition tracking application designed with a "Performance Editorial" aesthetic. It prioritizes a high-end user experience, ultra-fast performance, and deep localization for the Indian food palette.

---

### 1. The Vision
The project aims to replace generic, cluttered nutrition apps with a sleek, focused tool that feels like a premium utility. It combines a robust database of Indian foods with a modern, high-contrast design system that works seamlessly in both light and dark modes. The goal is to make nutrition tracking a visual delight rather than a chore.

---

### 2. Key Features

#### 🥗 Deeply Localized Indian Food Database
*   **550+ Curated Items**: Includes everything from staple grains (Basmati, Sona Masoori) to complex regional dishes (Chole Bhature, Medu Vada, Pesarattu).
*   **Intelligent Serving Types**: Supports measurement by weight (grams), quantity (pieces/rotis), and volume (katoris/bowls), reflecting how Indian households actually portion food.
*   **Premium Visuals**: Every food item is mapped to a high-quality, professional-grade image to provide instant visual recognition.

#### 📷 High-Performance Barcode Scanner
*   **Multi-Engine Camera Architecture**: Uses a highly optimized scanner that attempts to use the device's native `BarcodeDetector` API first for zero-latency scanning, seamlessly falling back to `ZXing` or `html5-qrcode` if needed.
*   **3-Tier Data Lookup System**: 
    1. **Local Database**: Instantly checks MongoDB for previously scanned items.
    2. **OpenFoodFacts**: Queries the massive open-source database if not found locally.
    3. **AI Deep Research**: If a product exists but lacks nutritional data, the app triggers an AI agent (Llama-3) to research the web and extract the correct per-100g macros instantly.
*   **Manual Entry Fallback**: Beautifully designed manual entry screen if the camera is unavailable or the barcode is damaged.

#### 🤖 AI Dietitian & Deep Research
*   **Llama-3 Integration**: Powered by Groq's ultra-fast inference API, the app uses AI to fill in data gaps that traditional databases miss.
*   **Smart Parsing**: Capable of reading complex ingredient lists and extracting structured JSON data (Protein, Carbs, Fats, Fiber) accurately for packaged foods.

#### 📈 Intelligent Tracking & Insights
*   **Personalized Onboarding**: A multi-step flow that calculates BMR and TDEE using the Mifflin-St Jeor equation, setting macro targets based on user goals.
*   **Dynamic Dashboard**: Real-time visualization of daily intake using interactive macro rings and glowing progress indicators.
*   **Water & Weight Tracking**: Integrated hydration tracking with a dedicated notification system, and a clean interface for logging long-term weight trends.

#### 🎨 "Performance Editorial" Design System
*   **Custom UI Components**: Zero reliance on browser defaults. Includes custom-built steppers, sliders, range inputs, glassmorphic modals, and animated notification menus.
*   **Aesthetic Excellence**: Uses a vibrant, high-contrast palette with smooth transitions, dynamic laser animations for scanning, and subtle micro-animations.
*   **Mobile-First**: Built from the ground up for a seamless mobile experience, while remaining fully responsive on desktop.

---

### 3. Technology Stack

*   **Frontend**: 
    *   **Core**: Modern Vanilla JavaScript (ES6+) using a component-based SPA architecture.
    *   **Styling**: 3,000+ lines of advanced Vanilla CSS3. Pure, optimized CSS using custom variables and GPU-accelerated animations.
    *   **State Management**: Lightweight, custom reactive state handling for real-time UI updates.
    *   **Deployment**: Hosted on **Netlify** for global CDN edge delivery.
*   **Backend**: 
    *   **Runtime**: Node.js with Express.
    *   **Database**: MongoDB (Mongoose) for secure storage of user profiles, day logs, and the global packaged food cache.
    *   **AI Integration**: Groq API (Llama-3-70b/8b) for lightning-fast dietary research.
    *   **Security**: JWT (JSON Web Tokens) and dynamic CORS configuration.
    *   **Deployment**: Hosted on **Render** as a managed web service.

---

### 4. Project Structure
```text
MyMacros/
├── frontend/               ← The UI layer (Deployed on Netlify)
│   ├── js/                 ← Vanilla JS Logic
│   │   ├── screens/        ← SPA View controllers (dashboard, barcodeScanner, etc.)
│   │   ├── components/     ← Reusable UI elements (modals, rings, steppers)
│   │   └── data/           ← Local food database (foods.js)
│   ├── css/                ← 3,000+ lines of custom "Editorial" styling
│   └── index.html          ← Entry point (PWA-ready)
├── backend/                ← The REST API (Deployed on Render)
│   ├── models/             ← Mongoose schemas (User, PackagedFood)
│   ├── routes/             ← Controller logic (Auth, Barcode, AI)
│   └── server.js           ← Express setup and CORS management
└── root/                   ← Data Engineering & Audit tools
```

---

### 5. Recent Progress (v1.0 Launch Ready)
1. **Production Deployment**: Successfully decoupled and deployed the frontend to Netlify (`pc-mymacros.netlify.app`) and backend to Render, ensuring proper CORS and environment variable bridging.
2. **Barcode Scanner Rewrite**: Replaced the basic scanner with a robust `ScannerEngine` that supports clean resource management, continuous auto-focus, and instant "Rescan" capabilities.
3. **AI Fallback for Packaged Foods**: Implemented a sophisticated backend route that identifies "empty" OpenFoodFacts results and triggers Llama-3 to scrape and format the missing nutritional data in real-time.
4. **UI Polish**: Refined the "Log Food" flow, centered manual entry inputs, fixed icon alignments, and ensured camera permissions are only requested strictly when the user opens the scanner.

---

### 6. Planned Features — Upcoming Updates

> These features are in the design/scoping phase to further enhance the core logging experience.

#### 🍽️ Feature 1: Smart Meal Composer ("Thali Builder")
*   **Goal**: Allow users to save standard combinations (e.g., "My Lunch Thali": 2 rotis + dal + sabzi) as a single 'Combo' and log it in one tap.
*   **Mechanics**: Combos will be tagged by meal type and feature a serving multiplier (e.g., log "0.5x of my Thali").

#### ⚡ Feature 2: Recent + Frequent Quick Log
*   **Goal**: Cut daily logging time by 60%+ by surfacing the user's most common foods instantly.
*   **Mechanics**: A smart tabbed surface replacing the "Add Food" button, showing Recent, Frequent (time-decayed score), and Favorites for 1-tap logging.

#### 📊 Feature 3: Streaks, Stats & Insights
*   **Goal**: Provide long-term motivation through deep data visualization.
*   **Mechanics**: A dedicated Insights screen tracking streaks (with flame animations), average macros over 7/30/90 days, and highlights (e.g., "Highest Protein Day").

---

### 7. How to Contribute / Give Feedback
We are seeking input on:
1.  **UX Friction**: Are there parts of the current logging flow or barcode scanning process that feel slow or cumbersome?
2.  **AI Accuracy**: When scanning obscure packaged foods, is the AI fallback returning accurate nutritional data?
3.  **Food Gaps**: Which common Indian foods or regional cuisines are we missing in the base database?
