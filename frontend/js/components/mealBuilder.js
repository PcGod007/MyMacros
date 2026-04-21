/**
 * MyMacros — Custom Meal Builder
 * Lets users combine multiple foods from the database into a single
 * logged meal entry with live macro summation.
 */
const MealBuilder = {
    ingredients: [],  // { food, grams, label }
    searchTimeout: null,

    init() {
        // Trigger button on search screen
        document.getElementById('meal-builder-btn').addEventListener('click', () => this.open());

        // Close buttons
        document.getElementById('meal-builder-close').addEventListener('click', () => this.close());
        document.getElementById('meal-builder-overlay').addEventListener('click', (e) => {
            if (e.target.id === 'meal-builder-overlay') this.close();
        });

        // Search input
        document.getElementById('mb-search-input').addEventListener('input', (e) => {
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => this.handleSearch(e.target.value), 200);
        });

        // Hide dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.meal-builder-search-wrap') && !e.target.closest('#mb-dropdown')) {
                this.hideDropdown();
            }
        });

        // Log button
        document.getElementById('mb-log-btn').addEventListener('click', () => this.logMeal());

        // Clear all
        document.getElementById('mb-clear-btn').addEventListener('click', () => this.clearAll());
    },

    open() {
        const overlay = document.getElementById('meal-builder-overlay');
        overlay.classList.remove('hidden');
        requestAnimationFrame(() => overlay.classList.add('active'));
        document.body.style.overflow = 'hidden';
        document.getElementById('mb-search-input').focus();
    },

    close() {
        const overlay = document.getElementById('meal-builder-overlay');
        overlay.classList.remove('active');
        setTimeout(() => overlay.classList.add('hidden'), 300);
        document.body.style.overflow = '';
        this.hideDropdown();
    },

    handleSearch(query) {
        const q = query.trim().toLowerCase();
        const dropdown = document.getElementById('mb-dropdown');

        if (!q) {
            this.hideDropdown();
            return;
        }

        const results = FOOD_DATABASE.filter(food =>
            food.name.toLowerCase().includes(q) ||
            food.subcategory.toLowerCase().includes(q)
        ).slice(0, 8);

        if (results.length === 0) {
            dropdown.innerHTML = `<div class="mb-no-results">No foods found</div>`;
            dropdown.classList.remove('hidden');
            return;
        }

        dropdown.innerHTML = results.map(food => {
            const defaultGrams = food.servingOptions[0].grams || 100;
            const cals = Math.round((food.per100g.calories / 100) * defaultGrams);
            return `
                <div class="mb-dropdown-item" data-id="${food.id}">
                    <div class="mb-dropdown-info">
                        <span class="mb-dropdown-name">${food.name}</span>
                        <span class="mb-dropdown-sub">${food.servingOptions[0].label} · ${food.subcategory}</span>
                    </div>
                    <span class="mb-dropdown-cal">${cals} kcal</span>
                </div>
            `;
        }).join('');

        dropdown.classList.remove('hidden');

        dropdown.querySelectorAll('.mb-dropdown-item').forEach(item => {
            item.addEventListener('click', () => {
                const food = FOOD_DATABASE.find(f => f.id === item.dataset.id);
                if (food) this.addIngredient(food);
            });
        });
    },

    hideDropdown() {
        document.getElementById('mb-dropdown').classList.add('hidden');
        document.getElementById('mb-dropdown').innerHTML = '';
    },

    addIngredient(food) {
        // Use first serving option as default
        const defaultOpt = food.servingOptions[0];
        const grams = defaultOpt.grams || 100;

        const ingredient = {
            id: Date.now() + Math.random(), // unique row id
            food,
            grams,
            label: defaultOpt.label
        };

        this.ingredients.push(ingredient);
        this.renderIngredients();
        this.updateTotals();

        // Reset search
        document.getElementById('mb-search-input').value = '';
        this.hideDropdown();
    },

    removeIngredient(rowId) {
        this.ingredients = this.ingredients.filter(i => i.id !== rowId);
        this.renderIngredients();
        this.updateTotals();
    },

    updateGrams(rowId, newGrams) {
        const ing = this.ingredients.find(i => i.id === rowId);
        if (ing) {
            ing.grams = Math.max(1, parseFloat(newGrams) || 1);
            ing.label = `${ing.grams}g`;
            this.updateTotals();
        }
    },

    renderIngredients() {
        const list = document.getElementById('mb-ingredient-list');
        const empty = document.getElementById('mb-empty-state');

        if (this.ingredients.length === 0) {
            list.innerHTML = '';
            list.appendChild(empty);
            empty.style.display = 'flex';
            return;
        }

        list.innerHTML = this.ingredients.map(ing => {
            const p = ing.food.per100g;
            const factor = ing.grams / 100;
            const cals = Math.round(p.calories * factor);
            const protein = Math.round(p.protein * factor);

            return `
                <div class="mb-ingredient-row" data-row="${ing.id}">
                    <div class="mb-ing-info">
                        <span class="mb-ing-name">${ing.food.name}</span>
                        <span class="mb-ing-macros">${protein}g P · ${cals} kcal</span>
                    </div>
                    <div class="mb-ing-controls">
                        <div class="mb-grams-wrap">
                            <input type="number" class="mb-grams-input" value="${ing.grams}" min="1" max="9999"
                                onchange="MealBuilder.updateGrams(${ing.id}, this.value)"
                                oninput="MealBuilder.updateGrams(${ing.id}, this.value)">
                            <span class="mb-grams-unit">g</span>
                        </div>
                        <button class="mb-remove-btn" onclick="MealBuilder.removeIngredient(${ing.id})">
                            <span class="material-icons-round">delete_outline</span>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    },

    updateTotals() {
        const totals = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 };

        this.ingredients.forEach(ing => {
            const p = ing.food.per100g;
            const f = ing.grams / 100;
            totals.calories += p.calories * f;
            totals.protein += p.protein * f;
            totals.carbs += p.carbs * f;
            totals.fat += p.fat * f;
            totals.fiber += p.fiber * f;
        });

        document.getElementById('mb-total-calories').textContent = Math.round(totals.calories);
        document.getElementById('mb-total-protein').textContent = Math.round(totals.protein) + 'g';
        document.getElementById('mb-total-carbs').textContent = Math.round(totals.carbs) + 'g';
        document.getElementById('mb-total-fat').textContent = Math.round(totals.fat) + 'g';
        document.getElementById('mb-total-fiber').textContent = Math.round(totals.fiber) + 'g';
    },

    logMeal() {
        if (this.ingredients.length === 0) {
            showToast('Add at least one ingredient first', 'warning');
            return;
        }

        const totals = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 };
        this.ingredients.forEach(ing => {
            const p = ing.food.per100g;
            const f = ing.grams / 100;
            totals.calories += p.calories * f;
            totals.protein += p.protein * f;
            totals.carbs += p.carbs * f;
            totals.fat += p.fat * f;
            totals.fiber += p.fiber * f;
        });

        // Round
        Object.keys(totals).forEach(k => {
            totals[k] = Math.round(totals[k] * 10) / 10;
        });

        const nameInput = document.getElementById('mb-meal-name').value.trim();
        const mealName = nameInput || `Custom Meal (${this.ingredients.length} item${this.ingredients.length > 1 ? 's' : ''})`;
        const ingredientSummary = this.ingredients.map(i => `${i.food.name} (${i.grams}g)`).join(', ');

        const dateStr = DashboardScreen.getDateStr();
        Storage.addFoodEntry(dateStr, {
            foodId: 'custom_meal_' + Date.now(),
            foodName: mealName,
            serving: ingredientSummary.length > 80 ? ingredientSummary.slice(0, 77) + '…' : ingredientSummary,
            grams: this.ingredients.reduce((sum, i) => sum + i.grams, 0),
            meal: SearchScreen.selectedMeal,
            macros: totals
        });

        this.close();
        showToast(`${mealName} logged! +${Math.round(totals.calories)} kcal`, 'check_circle');

        // Refresh dashboard
        setTimeout(() => {
            App.navigateTo('dashboard');
        }, 500);
    },

    clearAll() {
        this.ingredients = [];
        this.renderIngredients();
        this.updateTotals();
        document.getElementById('mb-meal-name').value = '';
    }
};
