# MyMacros — Project Brief

**MyMacros** is a premium, mobile-first Indian nutrition tracking application designed with a "Performance Editorial" aesthetic. It prioritizes a high-end user experience, ultra-fast performance, and deep localization for the Indian food palette.

---

### 1. The Vision
The project aims to replace generic, cluttered nutrition apps with a sleek, focused tool that feels like a premium utility. It combines a robust database of Indian foods with a modern, high-contrast design system that works seamlessly in both light and dark modes.

---

### 2. Core Functionality
*   **Intelligent Onboarding**: Calculates BMR and sets personalized macro targets (Protein, Carbs, Fats, Fiber) based on user goals (Lose, Maintain, Gain).
*   **Comprehensive Food Database**: A curated 550+ item database of Indian dishes, snacks, and ingredients.
*   **Visual Logging**: Every food item is mapped to high-quality AI-generated images, making the log visually immersive rather than just a list of text.
*   **Daily Tracking**: Real-time progress visualization using macro rings and detailed breakdowns.
*   **Weight Management**: Simple, elegant weight logging to track long-term progress.

---

### 3. Technology Stack
*   **Frontend**: 
    *   **Core**: Vanilla JavaScript (Modern SPA-like architecture).
    *   **Styling**: Advanced CSS3 using a custom design system with CSS Variables, transitions, and premium micro-animations.
    *   **Typography**: Inter (UI) and Manrope (Headings).
*   **Backend**: 
    *   **Runtime**: Node.js with Express.
    *   **Database**: MongoDB (Mongoose) for user profiles, logs, and weight history.
    *   **Security**: JWT-based authentication for secure data per user.
*   **Deployment**: Netlify (Frontend) and Render (Backend).

---

### 4. Project Structure
```text
MyMacros/
├── frontend/           ← The UI (HTML, CSS, JS screens & components)
│   ├── js/data/        ← Local food database (foods.js)
│   └── css/styles.css  ← 3,000+ lines of custom "Editorial" styling
├── backend/            ← The REST API (Node/Express/MongoDB)
│   ├── models/         ← User, DayLog, and WeightLog schemas
│   └── routes/         ← Authentication and Data fetching logic
└── root/               ← Dozens of Python/JS scripts for data auditing,
                          AI image mapping, and database maintenance.
```

---

### 5. Why It’s Unique
*   **"Performance Editorial" Design**: The UI avoids browser defaults completely, using custom-built steppers, sliders, and modals that feel like a high-end magazine or a performance-tracking device.
*   **Indian Food Focus**: Unlike western apps, MyMacros understands the macros of "Ghee Masala Kaju," "Moong Dal Halwa," and "Roti," providing accurate tracking for locally relevant diets.
*   **Data Integrity Focus**: The repository contains an extensive suite of audit tools (`audit2.log`, `strict_validator.py`, `surgical_map_ai.js`) used to ensure that every food entry and image mapping is 100% accurate.

---

### 6. Recent Progress
1.  **Visual Overhaul**: Refining the Light Mode for better contrast and a "clean paper" aesthetic.
2.  **Database Expansion**: Adding specialized snack entries and refining serving sizes (e.g., piece counts for nuts).
3.  **UI Polish**: Replacing standard browser dialogs with custom, theme-aware confirmation modals and improving the onboarding/profile editing flow.
4.  **Deployment Reliability**: Centralizing configuration for seamless production deployment on Netlify and Render.
