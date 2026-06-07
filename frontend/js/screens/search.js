/**
 * MyMacros — Food Search & Log Screen
 */
const SearchScreen = {
    selectedMeal: 'breakfast',
    selectedFood: null,
    selectedServingIdx: 0,
    quantity: 1,
    filteredFoods: [],
    editingEntry: null,  // Set when editing an existing log entry
    _comboMode: false,   // When true, addFood() calls _onComboFoodSelected instead of logging
    _onComboFoodSelected: null,

    init() {
        // Search input
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', () => this.handleSearch());

        // Clear button
        document.getElementById('search-clear').addEventListener('click', () => {
            if (typeof SoundFX !== 'undefined') SoundFX.playClick();
            searchInput.value = '';
            document.getElementById('search-clear').classList.add('hidden');
            this.showAllFoods();
        });

        // Back button
        document.getElementById('search-back').addEventListener('click', () => {
            App.navigateTo('dashboard');
        });

        // Category pills
        document.querySelectorAll('.category-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                if (typeof SoundFX !== 'undefined') SoundFX.playClick();
                document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                this.filterByCategory(pill.dataset.category);
            });
        });

        // Modal close on overlay click
        document.getElementById('food-modal-overlay').addEventListener('click', (e) => {
            if (e.target.id === 'food-modal-overlay') {
                if (typeof SoundFX !== 'undefined') SoundFX.playClick();
                this.closeModal();
            }
        });

        // Quantity stepper
        document.getElementById('qty-inc').addEventListener('click', () => {
            if (typeof SoundFX !== 'undefined') SoundFX.playSliderTick();
            this.quantity = Math.min(this.quantity + 1, 20);
            document.getElementById('qty-value').value = this.quantity;
            this.updateModalMacros();
        });
        document.getElementById('qty-dec').addEventListener('click', () => {
            if (typeof SoundFX !== 'undefined') SoundFX.playSliderTick();
            this.quantity = Math.max(this.quantity - 1, 1);
            document.getElementById('qty-value').value = this.quantity;
            this.updateModalMacros();
        });
        document.getElementById('qty-value').addEventListener('change', (e) => {
            this.quantity = Math.max(1, Math.min(parseInt(e.target.value) || 1, 20));
            e.target.value = this.quantity;
            this.updateModalMacros();
        });

        // Custom serving input
        document.getElementById('custom-serving-input').addEventListener('input', () => {
            this.updateModalMacros();
        });

        // Meal pills in modal
        document.querySelectorAll('.meal-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                if (typeof SoundFX !== 'undefined') SoundFX.playClick();
                document.querySelectorAll('.meal-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                this.selectedMeal = pill.dataset.meal;
            });
        });

        // Add button
        document.getElementById('btn-add-food').addEventListener('click', () => {
            // SoundFX.playSuccessLog is handled directly inside addFood()
            this.addFood();
        });

        // Favorite toggle in modal
        document.getElementById('food-modal-fav-btn').addEventListener('click', () => {
            if (!this.selectedFood) return;
            if (typeof SoundFX !== 'undefined') SoundFX.playClick();
            const btn = document.getElementById('food-modal-fav-btn');
            if (typeof QuickLogPanel !== 'undefined') {
                QuickLogPanel._toggleFavorite(this.selectedFood.id, this.selectedFood.name, btn);
            }
        });

        // Close button in modal
        document.getElementById('food-modal-close-btn')?.addEventListener('click', () => {
            if (typeof SoundFX !== 'undefined') SoundFX.playClick();
            this.closeModal();
        });
    },

    setMealType(meal) {
        this.selectedMeal = meal;
    },

    show() {
        // Reset edit mode when opening fresh
        this.editingEntry = null;
        this._resetAddBtn();

        // Mount & Show QuickLogPanel
        if (typeof QuickLogPanel !== 'undefined') {
            QuickLogPanel.mount('quick-log-panel');
            document.getElementById('quick-log-panel')?.classList.remove('hidden');
        }

        // Set active meal pill
        document.querySelectorAll('.meal-pill').forEach(p => {
            p.classList.toggle('active', p.dataset.meal === this.selectedMeal);
        });

        // Reset category
        document.querySelectorAll('.category-pill').forEach(p => {
            p.classList.toggle('active', p.dataset.category === 'all');
        });

        // Show all foods
        document.getElementById('search-input').value = '';
        document.getElementById('search-clear').classList.add('hidden');
        this.showAllFoods();

        // Focus search
        setTimeout(() => document.getElementById('search-input').focus(), 300);
    },

    levenshteinDistance(a, b) {
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;
        const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));
        for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
        for (let j = 0; j <= b.length; j++) matrix[j][0] = j;
        for (let j = 1; j <= b.length; j++) {
            for (let i = 1; i <= a.length; i++) {
                const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
                matrix[j][i] = Math.min(
                    matrix[j][i - 1] + 1, // insertion
                    matrix[j - 1][i] + 1, // deletion
                    matrix[j - 1][i - 1] + indicator // substitution
                );
            }
        }
        return matrix[b.length][a.length];
    },

    fuzzyMatch(text, query) {
        if (text.includes(query)) return true;
        const queryWords = query.split(/\s+/).filter(w => w.length > 0);
        const textWords = text.split(/[\s\(\)\-\.,]+/).filter(w => w.length > 0);
        if (queryWords.length === 0) return true;

        return queryWords.every(qw => {
            if (textWords.some(tw => tw.includes(qw))) return true;
            const maxEdits = qw.length <= 5 ? 1 : 2; // Stricter edits to prevent false positives
            return textWords.some(tw => {
                // Focus the distance check on a similarly sized prefix of the word
                const compareStr = tw.substring(0, qw.length + 1);
                return this.levenshteinDistance(qw, compareStr) <= maxEdits || this.levenshteinDistance(qw, tw) <= maxEdits;
            });
        });
    },

    handleSearch() {
        const query = document.getElementById('search-input').value.trim().toLowerCase();
        document.getElementById('search-clear').classList.toggle('hidden', !query);
        
        this._updateQLPVisibility();

        if (!query) {
            this.showAllFoods();
            return;
        }
        
        const exactMatchFoods = [];
        const nameMatchFoods = [];
        const otherMatchFoods = [];

        FOOD_DATABASE.forEach(food => {
            const nameStr = food.name.toLowerCase();
            const subCatStr = food.subcategory.toLowerCase();
            const catStr = food.category.toLowerCase();
            const idStr = food.id.toLowerCase().replace(/_/g, ' ');

            // 1. Exact or partial exact name match gets top priority
            if (nameStr.includes(query) || idStr.includes(query)) {
                // If it starts with the query word or is a standalone word
                if (nameStr === query || nameStr.startsWith(query + ' ') || nameStr.includes(' ' + query)) {
                     exactMatchFoods.push(food);
                } else {
                     nameMatchFoods.push(food);
                }
                return;
            }

            // 2. Exact match in category or subcategory
            if (catStr.includes(query) || subCatStr.includes(query)) {
                otherMatchFoods.push(food);
                return;
            }

            // 3. Fuzzy match on name
            if (this.fuzzyMatch(nameStr, query)) {
                otherMatchFoods.push(food);
            }
        });

        // Combine arrays to prioritize names over fuzzy/categories
        this.filteredFoods = [
            ...exactMatchFoods,
            ...nameMatchFoods,
            ...otherMatchFoods
        ];

        this.renderResults();
    },

    filterByCategory(category) {
        this._updateQLPVisibility(category);

        if (category === 'all') {
            this.showAllFoods();
        } else {
            this.filteredFoods = FOOD_DATABASE.filter(f => f.category === category);
            this.renderResults();
        }
    },

    showAllFoods() {
        this.filteredFoods = [...FOOD_DATABASE];
        this.renderResults();
        this._updateQLPVisibility();
    },

    _updateQLPVisibility(category) {
        const query = document.getElementById('search-input')?.value.trim();
        const activeCat = category || document.querySelector('.category-pill.active')?.dataset.category || 'all';
        const shouldShow = (activeCat === 'all' && !query);
        document.getElementById('quick-log-panel')?.classList.toggle('hidden', !shouldShow);
    },

    renderResults() {
        const container = document.getElementById('search-results');
        container.innerHTML = '';

        if (this.filteredFoods.length === 0) {
            container.innerHTML = `
                <div class="search-empty">
                    <span class="material-icons-round">search_off</span>
                    <p>No foods found. Try a different search.</p>
                </div>
            `;
            return;
        }

        // ── Paginated rendering ──────────────────────────────────────
        this._renderPage = 0;
        this._pageSize = 30;
        this._renderNextBatch(container);
        this._attachScrollObserver(container);
    },

    /** Render the next batch of food cards into the container */
    _renderNextBatch(container) {
        const start = this._renderPage * this._pageSize;
        const end = Math.min(start + this._pageSize, this.filteredFoods.length);
        if (start >= this.filteredFoods.length) return;

        for (let i = start; i < end; i++) {
            const food = this.filteredFoods[i];
            const card = document.createElement('div');
            card.className = 'food-result-card';

            const imgPath = getFoodImagePath(food);
            const serving = food.servingOptions[0];
            const totalGrams = serving.grams || 100;
            const cals = Math.round((food.per100g.calories / 100) * totalGrams);
            const servingLabel = food.servingType === 'quantity' ?
                serving.label : `${totalGrams}g`;

            const catEmoji = {breakfast:'🍳',rice:'🍚',biryani:'🍛',breads:'🫓',curries:'🍲',vegetables:'🥗',nonveg:'🍗',dairy:'🥛',fruits:'🍎',snacks:'🥨',beverages:'🥤',supplements:'💪',generic:'🥘',meals:'🍽️',sweets:'🍮',fastfood:'🍟'}[food.category]||'🍽️';
            card.innerHTML = `
                <div class="food-result-img-wrap">
                    <img class="food-result-img" src="${imgPath}" alt="${food.name}"
                         loading="lazy" decoding="async" width="64" height="64"
                         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                    <div class="food-img-fallback" style="display:none">${catEmoji}</div>
                </div>
                <div class="food-result-info">
                    <h3 class="food-result-name">${food.name}</h3>
                    <p class="food-result-meta">${servingLabel} • ${food.subcategory}</p>
                </div>
                <div class="food-result-cals">
                    <span class="food-result-cal-num">${cals}</span>
                    <span class="food-result-cal-unit">kcal</span>
                </div>
            `;

            card.addEventListener('click', () => {
                if (typeof SoundFX !== 'undefined') SoundFX.playClick();
                this.openModal(food);
            });
            container.appendChild(card);
        }

        this._renderPage++;
    },

    /** Attach IntersectionObserver to load more items on scroll */
    _attachScrollObserver(container) {
        // Remove old sentinel / observer
        if (this._scrollObserver) this._scrollObserver.disconnect();
        const oldSentinel = container.querySelector('.scroll-sentinel');
        if (oldSentinel) oldSentinel.remove();

        // If all items already rendered, nothing to observe
        if (this._renderPage * this._pageSize >= this.filteredFoods.length) return;

        const sentinel = document.createElement('div');
        sentinel.className = 'scroll-sentinel';
        sentinel.style.height = '1px';
        container.appendChild(sentinel);

        this._scrollObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                sentinel.remove();
                this._renderNextBatch(container);

                // Re-attach if more items remain
                if (this._renderPage * this._pageSize < this.filteredFoods.length) {
                    const newSentinel = document.createElement('div');
                    newSentinel.className = 'scroll-sentinel';
                    newSentinel.style.height = '1px';
                    container.appendChild(newSentinel);
                    this._scrollObserver.observe(newSentinel);
                }
            }
        }, { rootMargin: '300px' });  // trigger 300px before reaching bottom

        this._scrollObserver.observe(sentinel);
    },

    openModal(food) {
        this.selectedFood = food;
        this.selectedServingIdx = 0;
        this.quantity = 1;

        // Pre-select the best matching serving option based on defaultServing
        if (food.defaultServing && food.defaultServing.amount) {
            const targetGrams = food.servingType === 'quantity'
                ? null // For quantity items, find by matching count patterns
                : food.defaultServing.amount;

            if (food.servingType === 'quantity') {
                // For quantity items (idli, roti), find the option that matches the amount
                const matchIdx = food.servingOptions.findIndex(opt => {
                    const label = opt.label.toLowerCase();
                    return label.startsWith(food.defaultServing.amount + ' ') ||
                           label.includes(food.defaultServing.amount + ' ');
                });
                if (matchIdx >= 0) this.selectedServingIdx = matchIdx;
            } else {
                // For weight/volume items, find the closest serving option
                let bestIdx = 0;
                let bestDiff = Infinity;
                food.servingOptions.forEach((opt, i) => {
                    if (opt.grams !== null) {
                        const diff = Math.abs(opt.grams - targetGrams);
                        if (diff < bestDiff) {
                            bestDiff = diff;
                            bestIdx = i;
                        }
                    }
                });
                this.selectedServingIdx = bestIdx;
            }
        }

        // Set modal content — clear old image immediately to prevent stale flash
        const imgPath = getFoodImagePath(food);
        const img = document.getElementById('food-modal-img');
        img.src = '';
        img.alt = food.name;
        // Show a letter placeholder while loading
        const placeholderSvg = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><rect fill='%230a0d14' width='200' height='200' rx='20'/><text x='100' y='125' font-family='sans-serif' font-weight='bold' fill='%238892b0' font-size='80' text-anchor='middle'>${food.name.charAt(0).toUpperCase()}</text></svg>`;
        img.src = placeholderSvg;
        // Load the real image
        const realImg = new Image();
        realImg.onload = () => { img.src = imgPath; };
        realImg.onerror = () => { img.src = placeholderSvg; };
        realImg.src = imgPath;

        document.getElementById('food-modal-name').textContent = food.name;
        document.getElementById('food-modal-category').textContent = food.subcategory;
        
        // Check favorite status
        const favBtn = document.getElementById('food-modal-fav-btn');
        if (favBtn && typeof QuickLogPanel !== 'undefined') {
            const isFav = QuickLogPanel.cache.favorites && QuickLogPanel.cache.favorites.some(f => f.foodId === food.id);
            favBtn.classList.toggle('active', !!isFav);
            favBtn.querySelector('.material-icons-round').textContent = isFav ? 'star' : 'star_border';
        }

        // Serving options
        const servingContainer = document.getElementById('serving-options');
        servingContainer.innerHTML = '';
        food.servingOptions.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'serving-opt' + (i === this.selectedServingIdx ? ' active' : '');
            btn.textContent = opt.label;
            btn.addEventListener('click', () => {
                if (typeof SoundFX !== 'undefined') SoundFX.playClick();
                servingContainer.querySelectorAll('.serving-opt').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.selectedServingIdx = i;

                // Show/hide custom input
                const customEl = document.getElementById('custom-serving');
                if (opt.grams === null) {
                    customEl.classList.remove('hidden');
                    document.getElementById('custom-serving-input').focus();
                } else {
                    customEl.classList.add('hidden');
                }

                this.updateModalMacros();
            });
            servingContainer.appendChild(btn);
        });

        // Reset custom
        document.getElementById('custom-serving').classList.add('hidden');
        document.getElementById('custom-serving-input').value = '';

        // Set quantity
        document.getElementById('qty-value').value = this.quantity;

        // Set meal pills
        document.querySelectorAll('.meal-pill').forEach(p => {
            p.classList.toggle('active', p.dataset.meal === this.selectedMeal);
        });

        // Cheese crust toggle — show for Domino's Cheese Burst OR Pizza Hut Ultimate Cheese
        const cbRow = document.getElementById('cheese-burst-row');
        const cbToggle = document.getElementById('cheese-burst-toggle');
        const cbLabel = document.getElementById('cheese-burst-label');
        const cbDesc = document.getElementById('cheese-burst-desc');
        cbToggle.checked = false;

        const cheeseAddon = food.cheeseBurst || food.ultimateCheese || null;
        if (cheeseAddon) {
            // Set label based on brand
            if (food.ultimateCheese) {
                cbLabel.textContent = '🏆 Ultimate Cheese Crust';
                cbDesc.textContent = `+${cheeseAddon.calories} kcal · +${cheeseAddon.protein}g protein · flat per pizza`;
            } else {
                cbLabel.textContent = '🧀 Cheese Burst Crust';
                cbDesc.textContent = `+${cheeseAddon.calories} kcal · +${cheeseAddon.fat}g fat · flat per pizza`;
            }
            cbRow.classList.remove('hidden');
            cbRow.style.display = 'flex';
            // Remove old listener by cloning
            const newToggle = cbToggle.cloneNode(true);
            cbToggle.parentNode.replaceChild(newToggle, cbToggle);
            newToggle.addEventListener('change', () => {
                if (typeof SoundFX !== 'undefined') SoundFX.playClick();
                this.updateModalMacros();
            });
        } else {
            cbRow.classList.add('hidden');
            cbRow.style.display = 'none';
        }

        // Update macros
        this.updateModalMacros();

        // Show modal
        document.getElementById('food-modal-overlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    closeModal() {
        document.getElementById('food-modal-overlay').classList.remove('active');
        document.body.style.overflow = '';
    },

    _resetAddBtn() {
        const btn = document.getElementById('btn-add-food');
        if (btn) {
            btn.innerHTML = '<span class="material-icons-round">add_circle</span> Add to Log';
        }
    },

    // Opens the food modal pre-filled with an existing log entry for editing
    openEditModal(entry) {
        this.editingEntry = entry;

        // Look up food in DB by ID
        const food = FOOD_DATABASE.find(f => f.id === entry.foodId);
        if (!food) {
            showToast('Food not found in database', 'error');
            return;
        }

        // Open the modal normally first
        this.openModal(food);

        // Then try to reverse-engineer the quantity / serving from the stored grams
        // We'll match by comparing stored grams to serving option grams
        let bestServingIdx = 0;
        let bestQty = 1;
        food.servingOptions.forEach((opt, i) => {
            if (opt.grams !== null && opt.grams > 0) {
                const estimatedQty = entry.grams / opt.grams;
                const roundedQty = Math.round(estimatedQty);
                if (roundedQty >= 1 && roundedQty <= 20 && Math.abs(roundedQty * opt.grams - entry.grams) < 1) {
                    bestServingIdx = i;
                    bestQty = roundedQty;
                }
            }
        });

        this.selectedServingIdx = bestServingIdx;
        this.quantity = bestQty;

        // Update UI
        const servingContainer = document.getElementById('serving-options');
        servingContainer.querySelectorAll('.serving-opt').forEach((b, i) => {
            b.classList.toggle('active', i === bestServingIdx);
        });
        document.getElementById('qty-value').value = bestQty;

        // Set meal pills to entry's meal
        this.selectedMeal = entry.meal;
        document.querySelectorAll('.meal-pill').forEach(p => {
            p.classList.toggle('active', p.dataset.meal === entry.meal);
        });

        this.updateModalMacros();

        // Change button to reflect update mode
        const btn = document.getElementById('btn-add-food');
        if (btn) {
            btn.innerHTML = '<span class="material-icons-round">edit</span> Update Entry';
        }
    },

    getServingGrams() {
        if (!this.selectedFood) return 100;
        const opt = this.selectedFood.servingOptions[this.selectedServingIdx];
        if (opt.grams === null) {
            const inputVal = parseFloat(document.getElementById('custom-serving-input').value) || 0;
            if (opt.unitWeight) {
                return inputVal * opt.unitWeight;
            }
            return inputVal;
        }
        return opt.grams;
    },

    updateModalMacros() {
        if (!this.selectedFood) return;

        const grams = this.getServingGrams() * this.quantity;
        const p = this.selectedFood.per100g;

        const macros = {
            calories: (p.calories / 100) * grams,
            protein: (p.protein / 100) * grams,
            carbs: (p.carbs / 100) * grams,
            fat: (p.fat / 100) * grams,
            fiber: (p.fiber / 100) * grams
        };

        // Add Cheese crust macros if toggled (flat per-pizza, not per-slice)
        const cbToggleEl = document.getElementById('cheese-burst-toggle');
        const cheeseAddon = this.selectedFood.cheeseBurst || this.selectedFood.ultimateCheese || null;
        if (cbToggleEl && cbToggleEl.checked && cheeseAddon) {
            macros.calories += cheeseAddon.calories;
            macros.protein  += cheeseAddon.protein;
            macros.carbs    += cheeseAddon.carbs;
            macros.fat      += cheeseAddon.fat;
            macros.fiber    += (cheeseAddon.fiber || 0);
        }

        document.getElementById('fm-protein').textContent = Math.round(macros.protein) + 'g';
        document.getElementById('fm-carbs').textContent = Math.round(macros.carbs) + 'g';
        document.getElementById('fm-fat').textContent = Math.round(macros.fat) + 'g';
        document.getElementById('fm-fiber').textContent = Math.round(macros.fiber) + 'g';
        document.getElementById('fm-calories').textContent = Math.round(macros.calories);
    },

    addFood() {
        if (!this.selectedFood) return;

        const grams = this.getServingGrams() * this.quantity;
        const p = this.selectedFood.per100g;

        const macros = {
            calories: Math.round((p.calories / 100) * grams * 10) / 10,
            protein: Math.round((p.protein / 100) * grams * 10) / 10,
            carbs: Math.round((p.carbs / 100) * grams * 10) / 10,
            fat: Math.round((p.fat / 100) * grams * 10) / 10,
            fiber: Math.round((p.fiber / 100) * grams * 10) / 10
        };

        // ── COMBO MODE: hand food back to the builder ─────────────────────────
        if (this._comboMode && typeof this._onComboFoodSelected === 'function') {
            const servingOpt = this.selectedFood.servingOptions[this.selectedServingIdx];
            const servingLabel = servingOpt.grams === null
                ? grams + 'g'
                : (this.quantity > 1 ? this.quantity + '× ' + servingOpt.label : servingOpt.label);
            this._comboMode = false;
            this.closeModal();
            this._onComboFoodSelected(this.selectedFood, grams, servingLabel, macros);
            return;
        }


        // Apply cheese crust extra macros if toggled (flat per-pizza)
        const cbToggleEl2 = document.getElementById('cheese-burst-toggle');
        const cheeseAddon2 = this.selectedFood.cheeseBurst || this.selectedFood.ultimateCheese || null;
        let cheeseActive = false;
        let cheeseLabel = '';
        if (cbToggleEl2 && cbToggleEl2.checked && cheeseAddon2) {
            macros.calories += cheeseAddon2.calories;
            macros.protein  += cheeseAddon2.protein;
            macros.carbs    += cheeseAddon2.carbs;
            macros.fat      += cheeseAddon2.fat;
            macros.fiber    += (cheeseAddon2.fiber || 0);
            cheeseActive = true;
            cheeseLabel = this.selectedFood.ultimateCheese ? ' (Ultimate Cheese)' : ' (Cheese Burst)';
        }

        const servingOpt = this.selectedFood.servingOptions[this.selectedServingIdx];
        const servingLabel = (servingOpt.grams === null ?
            grams + 'g' : (this.quantity > 1 ?
                this.quantity + '× ' + servingOpt.label : servingOpt.label))
            + (cheeseActive ? cheeseLabel : '');

        // ── EDIT MODE: update existing entry ─────────────────────────
        if (this.editingEntry) {
            const dateStr = DashboardScreen.getDateStr();
            Storage.updateFoodEntry(dateStr, this.editingEntry.id, {
                serving: servingLabel,
                grams: grams,
                meal: this.selectedMeal,
                macros: macros,
                foodName: this.selectedFood.name + (cheeseActive ? (this.selectedFood.ultimateCheese ? ' 🏆' : ' 🧀') : '')
            });

            this.closeModal();
            this.editingEntry = null;
            this._resetAddBtn();
            if (typeof SoundFX !== 'undefined') SoundFX.playSuccessLog();
            showToast(`${this.selectedFood.name} updated! ${Math.round(macros.calories)} kcal`, 'edit');

            // Refresh dashboard and invalidate quick log cache
            DashboardScreen.refresh();
            if (typeof QuickLogPanel !== 'undefined') QuickLogPanel.invalidate();
            return;
        }

        // ── ADD MODE: create new entry ────────────────────────────────
        const dateStr = DashboardScreen.getDateStr();

        Storage.addFoodEntry(dateStr, {
            foodId: this.selectedFood.id,
            foodName: this.selectedFood.name + (cheeseActive ? (this.selectedFood.ultimateCheese ? ' 🏆' : ' 🧀') : ''),
            serving: servingLabel,
            grams: grams,
            meal: this.selectedMeal,
            macros: macros
        });

        if (typeof QuickLogPanel !== 'undefined') QuickLogPanel.invalidate();

        this.closeModal();
        if (typeof SoundFX !== 'undefined') SoundFX.playSuccessLog();
        showToast(`${this.selectedFood.name} added! +${Math.round(macros.calories)} kcal`, 'check_circle');

        // Go back to dashboard
        setTimeout(() => {
            App.navigateTo('dashboard');
        }, 500);
    }
};
