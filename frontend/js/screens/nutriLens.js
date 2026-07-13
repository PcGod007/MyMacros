/**
 * MyMacros — Lens Screen Controller
 */
const NutriLensScreen = {
    currentMealType: 'breakfast',
    stream: null,
    facingMode: 'environment',
    state: 'idle', // idle | scanning | analyzing | result

    // Simulated Food Data
    ingredients: [
        { id: 'salmon_grilled', name: 'Atlantic Salmon (Grilled)', sub: 'High Protein', grams: 180, icon: 'set_meal', colorClass: 'text-protein', bgClass: 'bg-protein', macros: { calories: 370, protein: 36, carbs: 0, fat: 22, fiber: 0 } },
        { id: 'avocado_fresh', name: 'Avocado (Fresh Slices)', sub: 'Healthy Fats', grams: 60, icon: 'spa', colorClass: 'text-fats', bgClass: 'bg-fats', macros: { calories: 96, protein: 1, carbs: 5, fat: 9, fiber: 4.2 } },
        { id: 'quinoa_cooked', name: 'White Quinoa (Cooked)', sub: 'Clean Carbs', grams: 100, icon: 'grain', colorClass: 'text-carbs', bgClass: 'bg-carbs', macros: { calories: 120, protein: 4.1, carbs: 21.3, fat: 1.9, fiber: 2.8 } }
    ],

    init() {
        // Back Button
        document.getElementById('nutrilens-back').addEventListener('click', () => {
            if (typeof SoundFX !== 'undefined') SoundFX.playClick();
            this.hide();
            App.navigateTo('dashboard');
        });

        // Toggle Camera
        document.getElementById('nutrilens-toggle-camera').addEventListener('click', () => {
            if (typeof SoundFX !== 'undefined') SoundFX.playClick();
            this.facingMode = this.facingMode === 'user' ? 'environment' : 'user';
            this._startCamera();
        });

        // Shutter Button
        document.getElementById('nutrilens-shutter').addEventListener('click', () => {
            if (this.state === 'scanning') {
                this._captureAndAnalyze();
            }
        });

        // Confirm Log Button
        document.getElementById('nutrilens-confirm-btn').addEventListener('click', () => {
            this._confirmLog();
        });

        // Meal Pills
        document.querySelectorAll('.nutrilens-meal-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                if (typeof SoundFX !== 'undefined') SoundFX.playClick();
                document.querySelectorAll('.nutrilens-meal-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                this.currentMealType = pill.dataset.meal;
            });
        });
    },

    setMealType(mealType) {
        this.currentMealType = mealType || 'breakfast';
        this.isExplicitMealType = true;
        this._updatePillUI();
    },

    _updatePillUI() {
        document.querySelectorAll('.nutrilens-meal-pill').forEach(pill => {
            if (pill.dataset.meal === this.currentMealType) {
                pill.classList.add('active');
            } else {
                pill.classList.remove('active');
            }
        });
    },

    _getDefaultMealType() {
        const hour = new Date().getHours();
        if (hour >= 6 && hour < 11) return 'breakfast';
        if (hour >= 11 && hour < 15) return 'lunch';
        if (hour >= 15 && hour < 18) return 'snacks';
        return 'dinner';
    },

    show() {
        this.state = 'scanning';
        
        // Hide panel & overlays
        document.getElementById('nutrilens-result-panel').classList.add('hidden');
        document.getElementById('nutrilens-result-panel').classList.remove('active');
        document.getElementById('nutrilens-analyzing').classList.add('hidden');
        
        // Reset Bounding Boxes
        document.querySelectorAll('.nutrilens-box').forEach(box => box.classList.add('hidden'));

        // Handle meal type setting
        if (!this.isExplicitMealType) {
            this.currentMealType = this._getDefaultMealType();
        }
        this._updatePillUI();
        this.isExplicitMealType = false; // Reset flag for next viewings

        // Start camera
        this._startCamera();

        // Stagger Bounding Box Reveal
        setTimeout(() => { if (this.state === 'scanning') document.querySelector('.box-salmon').classList.remove('hidden'); }, 600);
        setTimeout(() => { if (this.state === 'scanning') document.querySelector('.box-avocado').classList.remove('hidden'); }, 1200);
        setTimeout(() => { if (this.state === 'scanning') document.querySelector('.box-quinoa').classList.remove('hidden'); }, 1800);
    },

    hide() {
        this.state = 'idle';
        this._stopCamera();
    },

    _startCamera() {
        this._stopCamera();
        const video = document.getElementById('nutrilens-video');
        const fallback = document.getElementById('nutrilens-camera-fallback');

        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            console.warn('[Lens] Camera API (getUserMedia) not supported, using fallback image.');
            if (video) video.classList.add('hidden');
            if (fallback) fallback.classList.remove('hidden');
            return;
        }

        navigator.mediaDevices.getUserMedia({
            video: { facingMode: this.facingMode }
        }).then(stream => {
            this.stream = stream;
            video.srcObject = stream;
            video.classList.remove('hidden');
            fallback.classList.add('hidden');
        }).catch(err => {
            console.warn('[Lens] Camera initialization failed/denied, showing fallback editorial mock:', err);
            video.classList.add('hidden');
            fallback.classList.remove('hidden');
        });
    },

    _stopCamera() {
        if (this.stream) {
            this.stream.getTracks().forEach(track => track.stop());
            this.stream = null;
        }
        const video = document.getElementById('nutrilens-video');
        if (video) video.srcObject = null;
    },

    _captureAndAnalyze() {
        this.state = 'analyzing';
        if (typeof SoundFX !== 'undefined') SoundFX.playBubble(); // Capture cue sound
        this._stopCamera();

        // Show Analyzing Overlay
        document.getElementById('nutrilens-analyzing').classList.remove('hidden');

        // Simulate AI Processing
        setTimeout(() => {
            this._showResults();
        }, 2200);
    },

    _showResults() {
        this.state = 'result';
        document.getElementById('nutrilens-analyzing').classList.add('hidden');
        
        // Show result panel
        const panel = document.getElementById('nutrilens-result-panel');
        panel.classList.remove('hidden');
        // trigger animation reflow
        panel.offsetHeight;
        panel.classList.add('active');

        // Total calculated macros (summed from ingredients list)
        const totals = { calories: 586, protein: 41, carbs: 26, fat: 33, fiber: 7 };

        // Render ingredients list
        const listContainer = document.getElementById('nutrilens-ingredients-list');
        listContainer.innerHTML = '';

        this.ingredients.forEach((ing, index) => {
            const row = document.createElement('div');
            row.className = 'ingredient-row';
            row.innerHTML = `
                <div class="ing-left">
                    <div class="ing-icon-wrap ${ing.bgClass}-faint ${ing.colorClass}">
                        <span class="material-icons-round" style="font-size: 20px;">${ing.icon}</span>
                    </div>
                    <div>
                        <div class="ing-name">${ing.name}</div>
                        <div class="ing-sub">${ing.sub} • ${ing.grams}g</div>
                    </div>
                </div>
                <div class="ing-right">
                    <span class="ing-cal">${Math.round(ing.macros.calories)} kcal</span>
                    <button class="ing-edit-btn" data-index="${index}"><span class="material-icons-round">edit</span></button>
                </div>
            `;
            listContainer.appendChild(row);
        });

        // Edit Ingredient Weight Hook
        listContainer.querySelectorAll('.ing-edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const idx = btn.dataset.index;
                const ing = this.ingredients[idx];
                const newGrams = prompt(`Edit weight for ${ing.name} (g):`, ing.grams);
                if (newGrams && !isNaN(newGrams) && parseInt(newGrams) > 0) {
                    const ratio = parseInt(newGrams) / ing.grams;
                    ing.grams = parseInt(newGrams);
                    ing.macros.calories = Math.round(ing.macros.calories * ratio);
                    ing.macros.protein = Math.round(ing.macros.protein * ratio * 10) / 10;
                    ing.macros.carbs = Math.round(ing.macros.carbs * ratio * 10) / 10;
                    ing.macros.fat = Math.round(ing.macros.fat * ratio * 10) / 10;
                    ing.macros.fiber = Math.round(ing.macros.fiber * ratio * 10) / 10;
                    this._recalculateTotals();
                }
            });
        });

        this._recalculateTotals();
    },

    _recalculateTotals() {
        let totalCal = 0, totalP = 0, totalC = 0, totalF = 0, totalFib = 0;
        this.ingredients.forEach(ing => {
            totalCal += ing.macros.calories;
            totalP += ing.macros.protein;
            totalC += ing.macros.carbs;
            totalF += ing.macros.fat;
            totalFib += ing.macros.fiber;
        });

        // Animate numbers
        this._animateNumber('nutrilens-total-cals', totalCal, ' kcal');
        this._animateNumber('nutrilens-protein', Math.round(totalP), 'g');
        this._animateNumber('nutrilens-carbs', Math.round(totalC), 'g');
        this._animateNumber('nutrilens-fats', Math.round(totalF), 'g');
        this._animateNumber('nutrilens-fiber', Math.round(totalFib), 'g');

        // Update progress fills (simulated maximum targets)
        document.getElementById('fill-protein').style.width = Math.min((totalP / 60) * 100, 100) + '%';
        document.getElementById('fill-carbs').style.width = Math.min((totalC / 120) * 100, 100) + '%';
        document.getElementById('fill-fats').style.width = Math.min((totalF / 50) * 100, 100) + '%';
        document.getElementById('fill-fiber').style.width = Math.min((totalFib / 25) * 100, 100) + '%';
    },

    _animateNumber(id, target, suffix = '') {
        const el = document.getElementById(id);
        if (!el) return;
        let current = 0;
        const duration = 800; // ms
        const steps = 30;
        const stepTime = duration / steps;
        const increment = target / steps;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            if (id === 'nutrilens-total-cals') {
                el.innerHTML = `${Math.round(current)} <span class="kcal-suffix">${suffix.trim()}</span>`;
            } else {
                el.textContent = Math.round(current) + suffix;
            }
        }, stepTime);
    },

    _confirmLog() {
        if (typeof SoundFX !== 'undefined') SoundFX.playToastChime();
        const dateStr = window.getLocalISODate ? window.getLocalISODate() : new Date().toISOString().split('T')[0];

        // Log each ingredient individually to the user's daily log
        this.ingredients.forEach(ing => {
            Storage.addFoodEntry(dateStr, {
                foodId: ing.id,
                foodName: ing.name,
                serving: ing.grams + 'g',
                grams: ing.grams,
                meal: this.currentMealType,
                macros: { ...ing.macros }
            });
        });

        showToast('Scanned meal logged successfully!', 'check_circle');
        this.hide();
        App.navigateTo('dashboard');
    }
};
