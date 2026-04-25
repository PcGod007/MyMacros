/**
 * MyMacros — Combo Builder Screen
 * Create and edit saved Meal Combos (Thali Builder).
 */
const ComboBuilderScreen = {
    editingId: null,
    items: [],
    selectedEmoji: 'restaurant',
    ICONS: ['restaurant', 'restaurant_menu', 'breakfast_dining', 'lunch_dining', 'dinner_dining', 'bakery_dining', 'local_pizza', 'egg_alt', 'ramen_dining', 'set_meal', 'takeout_dining', 'icecream', 'local_cafe', 'local_bar'],

    init() {
        document.getElementById('combo-builder-back')?.addEventListener('click', () => {
            this.reset();
            App.navigateTo('combos');
        });
        document.getElementById('combo-builder-save')?.addEventListener('click', () => this.save());
        document.getElementById('combo-emoji-display')?.addEventListener('click', () => {
            document.getElementById('combo-emoji-picker').classList.toggle('hidden');
        });
        document.getElementById('combo-add-food-btn')?.addEventListener('click', () => this._openFoodSearch());
        document.querySelectorAll('.combo-meal-pill').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.combo-meal-pill').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    },

    show() {
        this._renderItems();
        this._renderTotals();
        this._renderEmojiPicker();
    },

    openEdit(combo) {
        this.editingId = combo._id;
        this.items = (combo.items || []).map(i => ({ ...i }));
        this.selectedEmoji = combo.emoji || 'restaurant';
        document.getElementById('combo-name-input').value = combo.name || '';
        const disp = document.getElementById('combo-emoji-display');
        if (disp) {
            disp.innerHTML = `<span class="material-icons-round">${this.selectedEmoji}</span>`;
        }
        document.querySelectorAll('.combo-meal-pill').forEach(b => {
            b.classList.toggle('active', b.dataset.meal === combo.mealType);
        });
        document.getElementById('combo-builder-title').textContent = 'Edit Combo';
        App.navigateTo('comboBuilder');
    },

    reset() {
        this.editingId = null;
        this.items = [];
        this.selectedEmoji = 'restaurant';
        const ni = document.getElementById('combo-name-input');
        if (ni) ni.value = '';
        const title = document.getElementById('combo-builder-title');
        if (title) title.textContent = 'New Combo';
        const disp = document.getElementById('combo-emoji-display');
        if (disp) disp.innerHTML = `<span class="material-icons-round">${this.selectedEmoji}</span>`;
        document.querySelectorAll('.combo-meal-pill').forEach((b, i) => b.classList.toggle('active', i === 0));
    },

    _renderEmojiPicker() {
        const picker = document.getElementById('combo-emoji-picker');
        if (!picker) return;
        picker.innerHTML = this.ICONS.map(i =>
            `<button class="emoji-btn ${i === this.selectedEmoji ? 'active' : ''}" data-emoji="${i}">
                <span class="material-icons-round">${i}</span>
            </button>`
        ).join('');
        picker.querySelectorAll('.emoji-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.selectedEmoji = btn.dataset.emoji;
                document.getElementById('combo-emoji-display').innerHTML = `<span class="material-icons-round">${this.selectedEmoji}</span>`;
                picker.classList.add('hidden');
            });
        });
    },

    _openFoodSearch() {
        SearchScreen._comboMode = true;
        SearchScreen._onComboFoodSelected = (food, grams, servingLabel, macros) => {
            this.items.push({ foodId: food.id, foodName: food.name, servingLabel, grams, cachedMacros: macros });
            this._renderItems();
            this._renderTotals();
            App.navigateTo('comboBuilder');
        };
        SearchScreen.setMealType('breakfast');
        App.navigateTo('search');
    },

    _renderItems() {
        const container = document.getElementById('combo-items-list');
        if (!container) return;
        if (!this.items.length) {
            container.innerHTML = `<div class="combo-items-empty">
                <span class="material-icons-round">add_shopping_cart</span>
                <p>No items yet. Tap "Add Food" to build your combo.</p>
            </div>`;
            return;
        }
        container.innerHTML = this.items.map((item, idx) => `
            <div class="combo-item-row">
                <div class="combo-item-info">
                    <span class="combo-item-name">${item.foodName}</span>
                    <span class="combo-item-serving">${item.servingLabel} · ${Math.round(item.cachedMacros?.calories || 0)} kcal</span>
                </div>
                <button class="combo-item-remove icon-btn" data-idx="${idx}">
                    <span class="material-icons-round">remove_circle_outline</span>
                </button>
            </div>`).join('');
        container.querySelectorAll('.combo-item-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                this.items.splice(parseInt(btn.dataset.idx), 1);
                this._renderItems();
                this._renderTotals();
            });
        });
    },

    _renderTotals() {
        const totals = this.items.reduce((a, item) => {
            a.calories += item.cachedMacros?.calories || 0;
            a.protein  += item.cachedMacros?.protein  || 0;
            a.carbs    += item.cachedMacros?.carbs    || 0;
            a.fat      += item.cachedMacros?.fat      || 0;
            return a;
        }, { calories: 0, protein: 0, carbs: 0, fat: 0 });
        const el = document.getElementById('combo-totals');
        if (!el) return;
        el.innerHTML = `
            <div class="combo-total-chip"><span>${Math.round(totals.calories)}</span><small>kcal</small></div>
            <div class="combo-total-chip protein"><span>${Math.round(totals.protein)}g</span><small>Protein</small></div>
            <div class="combo-total-chip carbs"><span>${Math.round(totals.carbs)}g</span><small>Carbs</small></div>
            <div class="combo-total-chip fat"><span>${Math.round(totals.fat)}g</span><small>Fat</small></div>`;
    },

    async save() {
        const name = document.getElementById('combo-name-input')?.value.trim();
        if (!name) { showToast('Give your combo a name!', 'warning'); return; }
        if (!this.items.length) { showToast('Add at least one food item.', 'warning'); return; }
        const mealType = document.querySelector('.combo-meal-pill.active')?.dataset.meal || 'any';
        const token = localStorage.getItem('mymacros_token');
        if (!token) return;

        const payload = { name, emoji: this.selectedEmoji, mealType, items: this.items };
        const saveBtn = document.getElementById('combo-builder-save');
        if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = 'Saving…'; }

        try {
            const url = this.editingId
                ? `${CONFIG.BACKEND_URL}/api/combos/${this.editingId}`
                : `${CONFIG.BACKEND_URL}/api/combos`;
            const res = await fetch(url, {
                method: this.editingId ? 'PUT' : 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error();
            showToast(this.editingId ? `${name} updated!` : `${this.selectedEmoji} ${name} saved!`, 'check_circle');
            this.reset();
            App.navigateTo('combos');
        } catch (_) {
            showToast('Could not save combo. Please try again.', 'error');
        } finally {
            if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = 'Save Combo'; }
        }
    }
};
