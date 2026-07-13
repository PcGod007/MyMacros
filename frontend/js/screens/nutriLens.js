/**
 * MyMacros — Lens Screen Controller
 * Real AI food identification via Groq Vision → matched against FOOD_DATABASE
 */
const NutriLensScreen = {
    currentMealType: 'breakfast',
    isExplicitMealType: false,
    stream: null,
    facingMode: 'environment',
    state: 'idle', // idle | scanning | analyzing | result | error

    // Holds the current scan's matched food items
    ingredients: [],

    // ─── Category → Material Icon mapping ───────────────────────────────────
    _categoryIcon: {
        breakfast:   'free_breakfast',
        rice:        'rice_bowl',
        breads:      'bakery_dining',
        curries:     'soup_kitchen',
        vegetables:  'eco',
        nonveg:      'set_meal',
        dairy:       'local_drink',
        fruits:      'apple',
        beverages:   'local_cafe',
        snacks:      'cookie',
        meals:       'lunch_dining',
        supplements: 'science',
        chutneys:    'spa',
        chaat:       'storefront',
        generic:     'restaurant',
    },

    // ─── Category → color class ──────────────────────────────────────────────
    _categoryColor: {
        nonveg:      'text-protein',
        dairy:       'text-protein',
        supplements: 'text-protein',
        rice:        'text-carbs',
        breads:      'text-carbs',
        chaat:       'text-carbs',
        meals:       'text-carbs',
        fruits:      'text-fats',
        snacks:      'text-fats',
        vegetables:  'text-calories',
        curries:     'text-calories',
        breakfast:   'text-calories',
        beverages:   'text-calories',
        chutneys:    'text-calories',
        generic:     'text-calories',
    },

    // ─── Box border colors for HUD tags ─────────────────────────────────────
    _boxColors: [
        { border: '#6c63ff', tag: 'rgba(108,99,255,0.85)' },
        { border: '#00d4a0', tag: 'rgba(0,212,160,0.85)'  },
        { border: '#ff9f43', tag: 'rgba(255,159,67,0.85)' },
        { border: '#ee5a24', tag: 'rgba(238,90,36,0.85)'  },
        { border: '#0abde3', tag: 'rgba(10,189,227,0.85)' },
    ],

    // ─── init ────────────────────────────────────────────────────────────────
    init() {
        // Back button
        document.getElementById('nutrilens-back').addEventListener('click', () => {
            if (typeof SoundFX !== 'undefined') SoundFX.playClick();
            this.hide();
            App.navigateTo('dashboard');
        });

        // Flip camera
        document.getElementById('nutrilens-toggle-camera').addEventListener('click', () => {
            if (typeof SoundFX !== 'undefined') SoundFX.playClick();
            this.facingMode = this.facingMode === 'user' ? 'environment' : 'user';
            this._startCamera();
        });

        // Shutter → capture & analyse
        document.getElementById('nutrilens-shutter').addEventListener('click', () => {
            if (this.state === 'scanning') this._captureAndAnalyze();
        });

        // Gallery → pick image from device
        document.getElementById('nutrilens-gallery').addEventListener('click', () => {
            document.getElementById('nutrilens-file-input').click();
        });
        document.getElementById('nutrilens-file-input').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) this._analyzeFile(file);
            e.target.value = ''; // reset so same file can be picked again
        });

        // Confirm log
        document.getElementById('nutrilens-confirm-btn').addEventListener('click', () => {
            this._confirmLog();
        });

        // Meal pills
        document.querySelectorAll('.nutrilens-meal-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                if (typeof SoundFX !== 'undefined') SoundFX.playClick();
                document.querySelectorAll('.nutrilens-meal-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                this.currentMealType = pill.dataset.meal;
            });
        });
    },

    // ─── Public: set meal type before opening ────────────────────────────────
    setMealType(mealType) {
        this.currentMealType = mealType || 'breakfast';
        this.isExplicitMealType = true;
        this._updatePillUI();
    },

    // ─── Public: show screen ─────────────────────────────────────────────────
    show() {
        this.state = 'scanning';
        this.ingredients = [];

        // Reset UI
        document.getElementById('nutrilens-result-panel').classList.add('hidden');
        document.getElementById('nutrilens-result-panel').classList.remove('active');
        document.getElementById('nutrilens-analyzing').classList.add('hidden');
        this._clearHUDBoxes();

        // Meal type
        if (!this.isExplicitMealType) {
            this.currentMealType = this._getDefaultMealType();
        }
        this._updatePillUI();
        this.isExplicitMealType = false;

        this._startCamera();
    },

    // ─── Public: hide / cleanup ──────────────────────────────────────────────
    hide() {
        this.state = 'idle';
        this._stopCamera();
        this._clearHUDBoxes();
    },

    // ─── Camera ──────────────────────────────────────────────────────────────
    _startCamera() {
        this._stopCamera();
        const video    = document.getElementById('nutrilens-video');
        const fallback = document.getElementById('nutrilens-camera-fallback');

        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            console.warn('[Lens] getUserMedia not available');
            video.classList.add('hidden');
            fallback.classList.remove('hidden');
            return;
        }

        navigator.mediaDevices.getUserMedia({ video: { facingMode: this.facingMode, width: { ideal: 1280 }, height: { ideal: 720 } } })
            .then(stream => {
                this.stream = stream;
                video.srcObject = stream;
                video.classList.remove('hidden');
                fallback.classList.add('hidden');
            })
            .catch(err => {
                console.warn('[Lens] Camera denied / failed:', err);
                video.classList.add('hidden');
                fallback.classList.remove('hidden');
            });
    },

    _stopCamera() {
        if (this.stream) {
            this.stream.getTracks().forEach(t => t.stop());
            this.stream = null;
        }
        const video = document.getElementById('nutrilens-video');
        if (video) video.srcObject = null;
    },

    // ─── Capture frame from live video → base64 JPEG ─────────────────────────
    _captureFrame() {
        const video  = document.getElementById('nutrilens-video');
        const canvas = document.getElementById('nutrilens-canvas');

        // Use video natural size or fall back to viewport
        const w = video.videoWidth  || 640;
        const h = video.videoHeight || 480;
        canvas.width  = w;
        canvas.height = h;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, w, h);

        // JPEG quality 0.82 → good balance between accuracy and API size
        return canvas.toDataURL('image/jpeg', 0.82);
    },

    // ─── Capture from video then analyse ─────────────────────────────────────
    _captureAndAnalyze() {
        if (typeof SoundFX !== 'undefined') SoundFX.playBubble();
        this.state = 'analyzing';

        let imageDataUrl;
        try {
            imageDataUrl = this._captureFrame();
        } catch (err) {
            console.error('[Lens] Frame capture failed:', err);
            this._showError('Could not capture frame. Please try again.');
            return;
        }

        this._stopCamera();
        this._showAnalyzingOverlay(true);
        this._sendToAI(imageDataUrl);
    },

    // ─── Analyse an image File (from gallery picker) ─────────────────────────
    _analyzeFile(file) {
        if (this.state === 'analyzing') return;
        this.state = 'analyzing';

        const reader = new FileReader();
        reader.onload = (e) => {
            const imageDataUrl = e.target.result;
            this._stopCamera();
            this._showAnalyzingOverlay(true);
            this._sendToAI(imageDataUrl);
        };
        reader.readAsDataURL(file);
    },

    // ─── Hit backend /api/lens/identify ──────────────────────────────────────
    async _sendToAI(imageDataUrl) {
        try {
            const token = Storage.getAuthToken ? Storage.getAuthToken() : localStorage.getItem('authToken');
            const backendUrl = typeof CONFIG !== 'undefined' ? CONFIG.BACKEND_URL : '';

            const response = await fetch(`${backendUrl}/api/lens/identify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ image: imageDataUrl })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || `Server error ${response.status}`);
            }

            const identified = data.identified || [];

            if (identified.length === 0) {
                this._showError('No food detected. Try pointing at your meal clearly.');
                return;
            }

            // Match against FOOD_DATABASE
            this.ingredients = this._matchFoodsFromDB(identified);

            if (this.ingredients.length === 0) {
                // AI found something but none matched DB — build generic entries
                this.ingredients = this._buildGenericEntries(identified);
            }

            this._showAnalyzingOverlay(false);
            this._showHUDBoxes();
            this._showResults();

        } catch (err) {
            console.error('[Lens] AI identification error:', err);
            this._showError('Could not reach AI. Check your connection and try again.');
        }
    },

    // ─── Fuzzy-match AI names against FOOD_DATABASE ──────────────────────────
    _matchFoodsFromDB(identified) {
        if (typeof FOOD_DATABASE === 'undefined') return [];
        const results = [];

        identified.forEach((item, idx) => {
            const dbFood = this._findBestDBMatch(item.name);
            if (!dbFood) return;

            const grams  = Math.max(10, item.estimatedGrams || 100);
            const factor = grams / 100;
            const cat    = dbFood.category || 'generic';

            results.push({
                id:         dbFood.id,
                name:       dbFood.name,
                sub:        dbFood.subcategory || (FOOD_CATEGORIES ? (FOOD_CATEGORIES.find(c => c.id === cat)?.label || cat) : cat),
                grams:      grams,
                icon:       this._categoryIcon[cat] || 'restaurant',
                colorClass: this._categoryColor[cat] || 'text-calories',
                confidence: item.confidence || 80,
                colorSet:   this._boxColors[idx % this._boxColors.length],
                macros: {
                    calories: Math.round((dbFood.per100g.calories || 0) * factor),
                    protein:  Math.round((dbFood.per100g.protein  || 0) * factor * 10) / 10,
                    carbs:    Math.round((dbFood.per100g.carbs    || 0) * factor * 10) / 10,
                    fat:      Math.round((dbFood.per100g.fat      || 0) * factor * 10) / 10,
                    fiber:    Math.round((dbFood.per100g.fiber    || 0) * factor * 10) / 10,
                }
            });
        });

        return results;
    },

    // ─── Best-match a food name string to FOOD_DATABASE entry ────────────────
    _findBestDBMatch(foodName) {
        if (!foodName || typeof FOOD_DATABASE === 'undefined') return null;

        const queryRaw   = foodName.toLowerCase().trim();
        const queryWords = queryRaw.split(/[\s,()/-]+/).filter(w => w.length > 2);

        let bestMatch = null;
        let bestScore = 0;

        FOOD_DATABASE.forEach(food => {
            const dbRaw   = food.name.toLowerCase();
            const dbWords = dbRaw.split(/[\s,()/-]+/).filter(w => w.length > 2);
            let score = 0;

            // Full substring match → very high priority
            if (dbRaw.includes(queryRaw) || queryRaw.includes(dbRaw)) {
                score += 20;
            }

            // Word-level overlap
            queryWords.forEach(qw => {
                dbWords.forEach(dw => {
                    if (dw === qw)              score += 5;   // exact word match
                    else if (dw.includes(qw) || qw.includes(dw)) score += 2; // partial
                });
            });

            if (score > bestScore) {
                bestScore = score;
                bestMatch = food;
            }
        });

        // Only return a match if it has at least a weak signal
        return bestScore >= 2 ? bestMatch : null;
    },

    // ─── Build generic entries for foods not in DB (AI name + estimated data) ─
    _buildGenericEntries(identified) {
        return identified.map((item, idx) => {
            const grams = Math.max(10, item.estimatedGrams || 100);
            // Rough generic macros: 150 kcal / 100g, 10g protein, 15g carbs, 5g fat
            const f = grams / 100;
            return {
                id:         'generic_' + idx,
                name:       item.name,
                sub:        'AI Identified',
                grams:      grams,
                icon:       'restaurant',
                colorClass: 'text-calories',
                confidence: item.confidence || 70,
                colorSet:   this._boxColors[idx % this._boxColors.length],
                macros: {
                    calories: Math.round(150 * f),
                    protein:  Math.round(10 * f * 10) / 10,
                    carbs:    Math.round(15 * f * 10) / 10,
                    fat:      Math.round(5  * f * 10) / 10,
                    fiber:    Math.round(2  * f * 10) / 10,
                }
            };
        });
    },

    // ─── HUD: inject dynamic bounding box tags ────────────────────────────────
    _showHUDBoxes() {
        const hud = document.getElementById('nutrilens-hud-boxes');
        if (!hud) return;

        // Remove old dynamic boxes (keep corners)
        hud.querySelectorAll('.nutrilens-box-dynamic').forEach(el => el.remove());

        // Positions for up to 5 items (% of viewfinder)
        const positions = [
            { top: '12%', left: '8%',  width: '45%', height: '38%' },
            { top: '30%', left: '48%', width: '42%', height: '36%' },
            { top: '55%', left: '15%', width: '38%', height: '32%' },
            { top: '18%', left: '52%', width: '36%', height: '30%' },
            { top: '60%', left: '50%', width: '35%', height: '28%' },
        ];

        this.ingredients.forEach((ing, idx) => {
            const pos   = positions[idx] || positions[0];
            const color = ing.colorSet;

            const box = document.createElement('div');
            box.className = 'nutrilens-box-dynamic hidden';
            box.style.cssText = `
                position: absolute;
                top: ${pos.top}; left: ${pos.left};
                width: ${pos.width}; height: ${pos.height};
                border: 2px solid ${color.border};
                border-radius: 10px;
                box-shadow: 0 0 12px ${color.border}55;
                pointer-events: none;
            `;

            box.innerHTML = `
                <div style="
                    position:absolute; top:-14px; left:8px;
                    background:${color.tag};
                    backdrop-filter:blur(8px);
                    border-radius:20px; padding:3px 10px;
                    display:flex; align-items:center; gap:5px;
                    font-size:12px; font-weight:600; color:#fff;
                    white-space:nowrap;
                ">
                    <span class="material-icons-round" style="font-size:13px;">${ing.icon}</span>
                    <span>${ing.name.length > 18 ? ing.name.substring(0,16)+'…' : ing.name}</span>
                    <span style="opacity:0.8;">~${ing.grams}g</span>
                </div>
                <div style="
                    position:absolute; inset:0; border-radius:8px;
                    background: linear-gradient(135deg, ${color.border}15, transparent);
                    animation: boxShimmer 2s ease-in-out infinite;
                "></div>
            `;

            hud.appendChild(box);

            // Stagger reveal
            setTimeout(() => box.classList.remove('hidden'), idx * 350 + 200);
        });
    },

    _clearHUDBoxes() {
        const hud = document.getElementById('nutrilens-hud-boxes');
        if (hud) hud.querySelectorAll('.nutrilens-box-dynamic').forEach(el => el.remove());
    },

    // ─── Show / hide analyzing overlay ───────────────────────────────────────
    _showAnalyzingOverlay(show) {
        const el = document.getElementById('nutrilens-analyzing');
        if (show) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    },

    // ─── Show error state (allows rescan) ────────────────────────────────────
    _showError(message) {
        this._showAnalyzingOverlay(false);
        this.state = 'scanning';
        this._startCamera();
        showToast(message, 'error_outline');
    },

    // ─── Build & show results panel ───────────────────────────────────────────
    _showResults() {
        this.state = 'result';

        const panel = document.getElementById('nutrilens-result-panel');
        panel.classList.remove('hidden');
        panel.offsetHeight; // trigger reflow for animation
        panel.classList.add('active');

        // Render ingredient rows
        const listEl = document.getElementById('nutrilens-ingredients-list');
        listEl.innerHTML = '';

        this.ingredients.forEach((ing, index) => {
            const row = document.createElement('div');
            row.className = 'ingredient-row';
            row.innerHTML = `
                <div class="ing-left">
                    <div class="ing-icon-wrap" style="background:${ing.colorSet?.border || '#6c63ff'}22; color:${ing.colorSet?.border || '#6c63ff'};">
                        <span class="material-icons-round" style="font-size:20px;">${ing.icon}</span>
                    </div>
                    <div>
                        <div class="ing-name">${ing.name}</div>
                        <div class="ing-sub">${ing.sub} • ${ing.grams}g
                            <span style="font-size:10px;opacity:0.6;margin-left:4px;">
                                ${ing.confidence >= 85 ? '✓ High confidence' : ing.confidence >= 65 ? '~ Medium confidence' : '? Low confidence'}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="ing-right">
                    <span class="ing-cal">${Math.round(ing.macros.calories)} kcal</span>
                    <button class="ing-edit-btn" data-index="${index}">
                        <span class="material-icons-round">edit</span>
                    </button>
                </div>
            `;
            listEl.appendChild(row);
        });

        // Edit weight handler
        listEl.querySelectorAll('.ing-edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const idx = parseInt(btn.dataset.index);
                const ing = this.ingredients[idx];
                const newGrams = prompt(`Edit weight for "${ing.name}" (g):`, ing.grams);
                if (newGrams && !isNaN(newGrams) && parseInt(newGrams) > 0) {
                    const ratio    = parseInt(newGrams) / ing.grams;
                    ing.grams      = parseInt(newGrams);
                    Object.keys(ing.macros).forEach(k => {
                        ing.macros[k] = Math.round(ing.macros[k] * ratio * 10) / 10;
                    });
                    this._recalculateTotals();
                    // Refresh calorie display on this row
                    btn.closest('.ingredient-row').querySelector('.ing-cal').textContent = Math.round(ing.macros.calories) + ' kcal';
                    btn.closest('.ingredient-row').querySelector('.ing-sub').innerHTML = `${ing.sub} • ${ing.grams}g`;
                }
            });
        });

        this._updatePillUI();
        this._recalculateTotals();
    },

    // ─── Recalculate and animate totals ──────────────────────────────────────
    _recalculateTotals() {
        let cal = 0, p = 0, c = 0, f = 0, fib = 0;
        this.ingredients.forEach(ing => {
            cal += ing.macros.calories || 0;
            p   += ing.macros.protein  || 0;
            c   += ing.macros.carbs    || 0;
            f   += ing.macros.fat      || 0;
            fib += ing.macros.fiber    || 0;
        });

        this._animateNumber('nutrilens-total-cals', Math.round(cal), ' kcal');
        this._animateNumber('nutrilens-protein',    Math.round(p),   'g');
        this._animateNumber('nutrilens-carbs',      Math.round(c),   'g');
        this._animateNumber('nutrilens-fats',       Math.round(f),   'g');
        this._animateNumber('nutrilens-fiber',      Math.round(fib), 'g');

        // Progress bars (use typical daily targets)
        const setFill = (id, val, target) => {
            const el = document.getElementById(id);
            if (el) el.style.width = Math.min((val / target) * 100, 100) + '%';
        };
        setFill('fill-protein', p,   60);
        setFill('fill-carbs',   c,   130);
        setFill('fill-fats',    f,   55);
        setFill('fill-fiber',   fib, 30);
    },

    // ─── Animate a number counter ─────────────────────────────────────────────
    _animateNumber(id, target, suffix = '') {
        const el = document.getElementById(id);
        if (!el) return;
        let current  = 0;
        const steps  = 28;
        const step   = target / steps;
        const delay  = 700 / steps;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            if (id === 'nutrilens-total-cals') {
                el.innerHTML = `${Math.round(current)} <span class="kcal-suffix">${suffix.trim()}</span>`;
            } else {
                el.textContent = Math.round(current) + suffix;
            }
        }, delay);
    },

    // ─── Log to diary ─────────────────────────────────────────────────────────
    _confirmLog() {
        if (this.ingredients.length === 0) return;
        if (typeof SoundFX !== 'undefined') SoundFX.playToastChime();

        const dateStr = window.getLocalISODate ? window.getLocalISODate() : new Date().toISOString().split('T')[0];

        this.ingredients.forEach(ing => {
            Storage.addFoodEntry(dateStr, {
                foodId:   ing.id,
                foodName: ing.name,
                serving:  ing.grams + 'g',
                grams:    ing.grams,
                meal:     this.currentMealType,
                macros:   { ...ing.macros }
            });
        });

        showToast(`${this.ingredients.length} item${this.ingredients.length > 1 ? 's' : ''} logged to ${this.currentMealType}!`, 'check_circle');
        this.hide();
        App.navigateTo('dashboard');
    },

    // ─── Helpers ──────────────────────────────────────────────────────────────
    _updatePillUI() {
        document.querySelectorAll('.nutrilens-meal-pill').forEach(pill => {
            pill.classList.toggle('active', pill.dataset.meal === this.currentMealType);
        });
    },

    _getDefaultMealType() {
        const h = new Date().getHours();
        if (h >= 6  && h < 11) return 'breakfast';
        if (h >= 11 && h < 15) return 'lunch';
        if (h >= 15 && h < 18) return 'snacks';
        return 'dinner';
    },
};
