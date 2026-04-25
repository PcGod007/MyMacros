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
*   **AI-Enhanced Visuals**: Every food item is mapped to a high-quality, professional-grade AI image to provide instant visual recognition and a premium feel.

#### 📈 Intelligent Tracking & Insights
*   **Personalized Onboarding**: A multi-step flow that calculates BMR and TDEE using the Mifflin-St Jeor equation, setting macro targets (Protein, Carbs, Fats, Fiber) based on user goals (Lose, Maintain, Gain).
*   **Dynamic Dashboard**: Real-time visualization of daily intake using interactive macro rings and glowing progress indicators.
*   **Water Reminders**: Integrated hydration tracking with customizable goals and a dedicated notification system.
*   **Weight Evolution**: A clean, focused interface for logging weight and tracking long-term trends.

#### 🎨 "Performance Editorial" Design System
*   **Custom UI Components**: Zero reliance on browser defaults. Includes custom-built steppers, sliders, range inputs, and modals designed for a high-end feel.
*   **Aesthetic Excellence**: Uses a vibrant, high-contrast palette (Editorial Light/Dark) with glassmorphism effects, smooth transitions, and subtle micro-animations.
*   **Mobile-First Architecture**: Built from the ground up for a seamless mobile experience, while remaining fully responsive.

---

### 3. Technology Stack

*   **Frontend**: 
    *   **Core**: Modern Vanilla JavaScript (ES6+) using a component-based SPA architecture.
    *   **Styling**: 3,000+ lines of advanced Vanilla CSS3. No Tailwind or Bootstrap—just pure, optimized CSS using custom variables and GPU-accelerated animations.
    *   **State Management**: Lightweight, custom reactive state handling for real-time UI updates.
*   **Backend**: 
    *   **Runtime**: Node.js with Express.
    *   **Database**: MongoDB (Mongoose) for secure storage of user profiles, daily logs, and historical data.
    *   **Security**: JWT (JSON Web Tokens) for stateless, secure authentication.
*   **Deployment**: 
    *   **Frontend**: Netlify (Continuous Deployment).
    *   **Backend**: Render (Managed Web Service).

---

### 4. Project Structure
```text
MyMacros/
├── frontend/               ← The UI layer
│   ├── js/                 ← Vanilla JS Logic
│   │   ├── screens/        ← SPA View controllers (dashboard, search, etc.)
│   │   ├── components/     ← Reusable UI elements (modals, rings, steppers)
│   │   └── data/           ← Local food database (foods.js)
│   ├── css/                ← 3,000+ lines of custom "Editorial" styling
│   └── index.html          ← Entry point (PWA-ready)
├── backend/                ← The REST API (Node/Express/MongoDB)
│   ├── models/             ← Mongoose schemas (User, DayLog, WeightLog)
│   ├── routes/             ← Controller logic for Auth and Data
│   └── middleware/         ← JWT protection and error handling
└── root/                   ← Data Engineering & Audit tools
    ├── audit_scripts/      ← Python/JS tools for data validation
    ├── mapping_tools/      ← Scripts for AI image & prompt management
    └── checkMongo.js       ← DB health check utilities
```

---

### 5. Data Integrity & Rigor
What sets MyMacros apart is the technical rigor behind its data. The repository includes a massive suite of internal tools:
*   **Audit Scripts**: Python and JS tools (`strict_validator.py`, `audit_images.js`) that ensure 100% accuracy in nutritional data and image mappings.
*   **AI Mapping Engine**: Custom logic (`surgical_map_ai.js`) used to link food items to precise AI-generated visual assets.
*   **Database Maintenance**: Automated scripts to handle duplication, null values, and nutritional consistency across 550+ entries.

---

### 6. Recent Progress
1.  **Editorial Light Mode**: A complete visual overhaul of the light theme, moving from "muddy" tones to a vibrant, "clean paper" aesthetic.
2.  **Custom Modals**: Replaced all native browser `confirm()` and `alert()` calls with theme-aware, animated confirmation modals.
3.  **Food Serving Logic**: Refined serving options for nuts and snacks, allowing users to track by "piece count" for maximum accuracy.
4.  **Hydration Engine**: Finalized the water tracking UI and integrated it into the main dashboard header for high visibility.

---

### 7. Planned Features — Batch 1

> These are fully designed features with data models, API specs, and implementation plans ready. Feedback on priority and approach is welcome.

---

#### 🍽️ Feature 1: Smart Meal Composer ("Thali Builder")

**User Story**: *"I eat the same lunch combo 4 times a week. I want to save my standard thali (2 rotis + dal + sabzi + curd) as a single 'Combo' and log it in one tap instead of searching 5 separate items."*

**What it does**:
*   Users create named combos ("My Lunch Thali", "Post-workout Meal") with 1–15 food items, each with its own serving size.
*   Combos are tagged by meal type (breakfast/lunch/dinner/snack) and assigned a user-chosen emoji for quick identification.
*   A **Quick Combos strip** on the dashboard shows the top pinned + most-recently-used combos for one-tap logging.
*   Logging a combo creates **individual food entries** in the day log — not a single opaque blob — preserving full per-food macro granularity.
*   Usage stats (`usageCount`, `lastUsedAt`) are tracked atomically to power intelligent sorting: Recent / Most Used / Pinned.
*   A **serving multiplier** (v1.1) will allow logging "half a thali" or "1.5x" for flexible portions.

**New Backend**:
*   `MealCombo` Mongoose schema — stores combo metadata, denormalized item list with cached macros, and usage counters.
*   7 API endpoints: Create, List, Get, Update, Delete, Log, and Pin/Unpin.
*   Log endpoint uses `$inc` for race-condition-safe usage counter updates.

**New Frontend Screens**:
*   `combos.js` — list view (Recent / Most Used / Pinned tabs)
*   `comboBuilder.js` — create/edit flow reusing the existing food search + serving stepper components
*   `ComboCard.js` — shared component used in list + dashboard quick-log strip

**Edge Cases Covered**:
*   Stale macros detection (if food data changes post-save, user is prompted to refresh)
*   Gracefully handles deleted foods in a combo (shows ⚠️ with replace option)
*   Concurrency-safe counter updates with Mongo's `$inc`

**Acceptance Criteria**:
- [ ] Create a combo with 1–15 items, each with a custom serving size
- [ ] Combo list sortable by Recent / Most Used / Pinned
- [ ] One-tap logging creates individual food entries in the day log
- [ ] Dashboard shows quick-log strip for top combos

---

#### ⚡ Feature 2: Recent + Frequent + Favorites Quick Log

**User Story**: *"The same 20–30 foods make up 80% of my logs. I want them surfaced instantly without typing or searching."*

> This is the single highest-ROI feature in the roadmap. Implemented well, it cuts average daily logging time by 60%+.

**What it does**:
*   Replaces the current "Add Food" button on the dashboard with a **tabbed smart surface**:
    *   **Recent** — last 20 unique foods logged, sorted by timestamp
    *   **Frequent** — top 20 foods by a time-decayed frequency score
    *   **⭐ Favorites** — user-starred foods, always available
*   Each row shows the food's preferred serving (pre-filled from last log) and a one-tap **↻ Log** button.
*   A **"Log to: [Lunch ▾]"** override dropdown handles edge cases like logging dinner at 3 AM.
*   Meal type is **auto-inferred from time of day** (before 11AM → Breakfast, etc.) as the smart default.

**New Backend**:
*   `UserFoodStats` Mongoose schema — tracks `logCount`, `lastLoggedAt`, `isFavorite`, `preferredServing`, and a `freqScore` per user per food.
*   Stats are updated **atomically on every log event** via a `updateUserFoodStats()` service hook.
*   A **nightly cron job** (node-cron, 3 AM) applies time-decay to `freqScore` using a MongoDB server-side aggregation pipeline, so old foods naturally drop off the "Frequent" list without heavy Node processing.
*   5 API endpoints: Recent, Frequent, Favorites, Toggle Favorite, One-tap Log.

**New Frontend**:
*   `QuickLogPanel.js` component with client-side caching (5-minute TTL) for <100ms tab switches.
*   Optimistic UI on log — diary updates instantly, API call runs in background.
*   ⭐ Favorite toggle on every food row across search, history, and combos screens.

**Edge Cases Covered**:
*   New users (empty tabs) are shown curated "Popular in your region" suggestions.
*   Favorites capped at 50 to keep UI manageable.
*   Cron failure fallback: `/admin/recompute-freq-scores` endpoint.

**Acceptance Criteria**:
- [ ] Three tabs render in <100ms (cached), <500ms (cold)
- [ ] One-tap log creates a diary entry with preferred serving in <1 second
- [ ] Favorite toggle is instant (optimistic UI)
- [ ] Decay cron runs nightly without errors

---

#### 📊 Feature 3: Streaks, Stats & Insights

**User Story**: *"I'm 3 weeks in. Am I consistent? What's my average protein? Am I improving?"*

**What it does**:
*   A dedicated **Insights screen** with 4 time range tabs: 7D / 30D / 90D / All.
*   **🔥 Streak tracker**: Current streak + longest-ever streak with an animated flame indicator. Pulse animation activates at ≥7 days.
*   **Adherence bar**: Visual fill showing days logged vs. total days in range (e.g., "21 of 30 days logged — 72%").
*   **Average Macros**: Smaller macro rings showing averages over the selected range.
*   **Trend Charts**: Interactive line charts for Calories, Protein, and Weight over time. Tap any point to see exact values.
*   **✨ Highlights**: Superlative cards — "Highest Protein Day: 142g", "Most Fiber: 38g", "Top Food: Paneer Bhurji".

**New Backend**:
*   `InsightsCache` Mongoose schema using a **MongoDB TTL index** as the cache mechanism — documents auto-expire after 1 hour, zero Redis dependency.
*   All aggregations use **MongoDB aggregation pipelines** (not Node-side loops), so computation runs server-side and scales to users with 1+ year of history.
*   Cache invalidation is called automatically whenever a food log is created or updated.
*   Streak computation handles timezone changes and the "grace day" edge case correctly.

**New Frontend**:
*   `insights.js` screen (already exists, to be expanded significantly)
*   Custom **SVG line charts** built with design tokens (no external chart library) for zero-dependency, perfect editorial styling.
*   Encouraging empty states for new users: "Keep logging — your insights unlock at 3 days."

**Edge Cases Covered**:
*   Dates always normalized to user timezone (stored in user profile) to prevent streak breaks for travelers.
*   Aggregation pipeline indexed on `{ userId: 1, date: -1 }` — verified with `.explain('executionStats')`.
*   TTL index precision: Mongo deletes expired cache within 60s of expiry — acceptable for UX.

**Acceptance Criteria**:
- [ ] All 4 range tabs load in <500ms (uncached), <100ms (cached)
- [ ] Streak counter handles timezone changes and missed days correctly
- [ ] Charts are interactive (tap for exact value)
- [ ] Cache invalidates correctly when a new log is created

---

#### 📷 Feature 4: Barcode Scanner for Packaged Foods

**User Story**: *"I'm buying a Britannia Marie Gold pack. I want to scan the barcode and log it instantly — not search 'biscuit' and hope it matches."*

**What it does**:
*   A **camera scanner screen** opens on tap of a scan button. It uses `@zxing/browser` (ZXing-js) to decode EAN-13/EAN-8 barcodes in real-time.
*   On successful scan, a **product card slides up** showing brand, name, image, per-100g macros, and a serving picker.
*   User confirms serving size and meal type → logged to diary.
*   **Three-tier lookup fallback chain**:
    1. Our Mongo `PackagedFood` collection (fastest — cached from prior scans)
    2. **OpenFoodFacts API** (free, open database — results are cached into Mongo permanently on first lookup)
    3. **User Submission Form** — when not found anywhere, user can contribute the food data
*   Indian product quirks are handled: prefers `product_name_en`, gracefully handles missing fields, and flags low-confidence data with a ⚠️ verification tag.
*   A **manual barcode entry** fallback ensures the feature works even when the camera is unavailable.

**New Backend**:
*   `PackagedFood` Mongoose schema — stores barcode, brand, name, per-100g macros (including sodium, saturated fat, sugar for packaged food specifics), serving options, source, and `isVerified` flag.
*   Text index on `{ name, brand }` for browse/search.
*   `scanCount` for popularity ranking in a future "browse packaged foods" view.
*   Lookup endpoint uses `findOneAndUpdate` with `$setOnInsert` to handle race condition of two users scanning the same new product simultaneously.
*   User submissions are queued as `isVerified: false` for future admin review.

**New Frontend**:
*   `barcodeScanner.js` screen with ZXing-js integration, viewfinder overlay with corner brackets, and scanning animation.
*   Haptic feedback (`navigator.vibrate(50)`) on successful scan.
*   Graceful camera permission denied state with clear instructions.

**Edge Cases Covered**:
*   HTTPS required for Camera API — dev environment configured accordingly.
*   iOS Safari `playsinline` attribute required for autoplay — tested on Safari.
*   OpenFoodFacts rate limit (<100 req/min) is avoided by permanent Mongo caching — OFF is only hit once per unique barcode, ever.
*   Indian products often only have Hindi names in OFF — English name is preferred with fallback logic.

**Acceptance Criteria**:
- [ ] Camera opens within 2 seconds
- [ ] Scan → product card in <3 seconds (including OFF fallback)
- [ ] Manual barcode entry works as fallback
- [ ] Scanned products cached in Mongo for instant re-scan
- [ ] Graceful "not found" UX with contribution CTA

---

### 8. Upcoming Features — Batch 2 (Planned)
The following features are in design/scoping phase:
*   **🥗 Nutrient Density & Health Score**: A composite score per food and per day based on micronutrients and fiber — the long-term "moat" feature.
*   **🎯 Adaptive Goals Engine**: Targets that automatically adjust week-over-week based on actual adherence and weight trend.
*   **👨‍⚕️ Coach/Dietitian Mode**: Ability for a professional to monitor and comment on a client's diary (privacy-first).
*   **🤖 AI Dietitian**: Natural language Q&A about your diary and trends.
*   **📘 TypeScript Migration**: Progressive migration strategy for type safety across the codebase.

---

### 9. How to Contribute / Give Feedback
We are seeking input on:
1.  **Feature Priority**: Among the 4 Batch 1 features, which should ship first?
2.  **UX Friction**: Are there parts of the current logging flow that feel slow or cumbersome?
3.  **Barcode Database**: Is OpenFoodFacts coverage good enough for Indian packaged foods, or do we need a different source?
4.  **Streak Design**: Should a missed day break your streak, or should there be a grace day (like Duolingo)?
5.  **Visual Design**: Does the "Performance Editorial" style work for you, or is it too high-contrast?
6.  **Food Gaps**: Which common Indian foods or regional cuisines are we missing?
