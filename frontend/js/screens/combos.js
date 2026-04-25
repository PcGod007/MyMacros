/**
 * MyMacros — Combos List Screen
 * Browse, pin, log, and delete your saved Meal Combos.
 */
const CombosScreen = {
    combos: [],
    activeSort: 'recent',

    init() {
        // Back button
        document.getElementById('combos-back')?.addEventListener('click', () => App.navigateTo('dashboard'));

        // New combo button
        document.getElementById('combos-new-btn')?.addEventListener('click', () => {
            ComboBuilderScreen.reset();
            App.navigateTo('comboBuilder');
        });

        // Sort tabs
        document.querySelectorAll('.combos-sort-tab').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.combos-sort-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.activeSort = btn.dataset.sort;
                this.load();
            });
        });
    },

    show() {
        this.load();
    },

    async load() {
        const token = localStorage.getItem('mymacros_token');
        if (!token) return;

        const list = document.getElementById('combos-list');
        if (!list) return;
        list.innerHTML = '<div class="combos-loading"><div class="qlp-spinner"></div></div>';

        try {
            const res = await fetch(`${CONFIG.BACKEND_URL}/api/combos?sort=${this.activeSort}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const { combos } = await res.json();
            this.combos = combos || [];
            this.render();
        } catch (_) {
            list.innerHTML = '<div class="combos-empty"><span class="material-icons-round">wifi_off</span><p>Could not load combos. Check your connection.</p></div>';
        }
    },

    render() {
        const list = document.getElementById('combos-list');
        if (!list) return;

        if (!this.combos.length) {
            list.innerHTML = `
                <div class="combos-empty">
                    <div class="combos-empty-icon">
                        <span class="material-icons-round" style="font-size: 4rem; color: var(--protein); opacity: 0.8;">restaurant</span>
                    </div>
                    <p class="combos-empty-title">No combos yet</p>
                    <p class="combos-empty-sub">Save your regular meals as combos to log them in one tap.</p>
                    <button class="btn-primary compact" onclick="ComboBuilderScreen.reset(); App.navigateTo('comboBuilder')" style="margin-top:16px; width: 100%;">
                        <span class="material-icons-round">add</span>
                        <span>Create First Combo</span>
                    </button>
                </div>`;
            return;
        }

        list.innerHTML = this.combos.map(c => this._cardHTML(c)).join('');

        list.querySelectorAll('.combo-log-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this._logCombo(btn.dataset.id);
            });
        });

        list.querySelectorAll('.combo-pin-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this._togglePin(btn.dataset.id, btn);
            });
        });

        list.querySelectorAll('.combo-delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this._deleteCombo(btn.dataset.id, btn.dataset.name);
            });
        });

        list.querySelectorAll('.combo-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.dataset.id;
                const combo = this.combos.find(c => c._id === id);
                if (combo) ComboBuilderScreen.openEdit(combo);
            });
        });
    },

    _cardHTML(c) {
        const totals = c.totals || {};
        const itemCount = c.items?.length || 0;
        const mealBadge = c.mealType !== 'any' ? `<span class="combo-meal-badge">${c.mealType}</span>` : '';
        const icon = c.emoji || 'restaurant';
        return `
            <div class="combo-card" data-id="${c._id}">
                <div class="combo-card-left">
                    <div class="combo-emoji">
                        <span class="material-icons-round">${icon}</span>
                    </div>
                    <div class="combo-card-info">
                        <div class="combo-card-name">${c.name} ${mealBadge}${c.isPinned ? '<span class="material-icons-round combo-pin-indicator">push_pin</span>' : ''}</div>
                        <div class="combo-card-meta">${itemCount} item${itemCount !== 1 ? 's' : ''} · ${Math.round(totals.calories || 0)} kcal · ${Math.round(totals.protein || 0)}g protein</div>
                    </div>
                </div>
                <div class="combo-card-actions">
                    <button class="combo-pin-btn icon-btn ${c.isPinned ? 'active' : ''}" data-id="${c._id}" title="${c.isPinned ? 'Unpin' : 'Pin'}">
                        <span class="material-icons-round">${c.isPinned ? 'push_pin' : 'push_pin'}</span>
                    </button>
                    <button class="combo-log-btn" data-id="${c._id}" title="Log this combo">
                        <span class="material-icons-round">add_circle</span>
                    </button>
                    <button class="combo-delete-btn icon-btn" data-id="${c._id}" data-name="${c.name}" title="Delete">
                        <span class="material-icons-round">delete_outline</span>
                    </button>
                </div>
            </div>
        `;
    },

    async _logCombo(id) {
        const combo = this.combos.find(c => c._id === id);
        if (!combo) return;

        const meal = await this._showMealSelectionModal(combo.name);
        if (!meal) return; // User cancelled

        const dateStr = window.getLocalISODate(DashboardScreen.currentDate);
        const token = localStorage.getItem('mymacros_token');
        if (!token) return;

        // Optimistic toast
        showToast(`${combo.emoji || '🍽️'} ${combo.name} logged!`, 'check_circle');

        try {
            const res = await fetch(`${CONFIG.BACKEND_URL}/api/combos/${id}/log`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({ meal, date: dateStr })
            });
            const { entries } = await res.json();

            // Merge into local storage so dashboard reflects immediately
            const logs = Storage.getLogs();
            if (!logs[dateStr]) logs[dateStr] = [];
            entries.forEach(e => logs[dateStr].push({
                id: e.id,
                foodId: e.foodId,
                foodName: e.foodName,
                serving: e.servingLabel,
                grams: e.grams,
                meal: e.meal,
                macros: e.macros
            }));
            localStorage.setItem(Storage.KEYS.LOGS, JSON.stringify(logs));

            App.navigateTo('dashboard');
        } catch (_) {
            showToast('Failed to log combo. Please try again.', 'error');
        }
    },

    _showMealSelectionModal(comboName) {
        return new Promise(resolve => {
            const overlay = document.getElementById('combo-log-overlay');
            document.getElementById('combo-log-title').textContent = `Log "${comboName}"`;
            
            const cleanup = () => {
                overlay.classList.add('hidden');
                document.querySelectorAll('.combo-meal-opt').forEach(btn => {
                    const newBtn = btn.cloneNode(true);
                    btn.parentNode.replaceChild(newBtn, btn);
                });
                const cancelBtn = document.getElementById('combo-log-cancel');
                const newCancel = cancelBtn.cloneNode(true);
                cancelBtn.parentNode.replaceChild(newCancel, cancelBtn);
            };

            document.querySelectorAll('.combo-meal-opt').forEach(btn => {
                btn.addEventListener('click', () => {
                    cleanup();
                    resolve(btn.dataset.meal);
                });
            });

            document.getElementById('combo-log-cancel').addEventListener('click', () => {
                cleanup();
                resolve(null);
            });

            overlay.classList.remove('hidden');
        });
    },

    async _togglePin(id, btn) {
        const token = localStorage.getItem('mymacros_token');
        if (!token) return;
        try {
            const res = await fetch(`${CONFIG.BACKEND_URL}/api/combos/${id}/pin`, {
                method: 'PATCH',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const { isPinned } = await res.json();
            const combo = this.combos.find(c => c._id === id);
            if (combo) combo.isPinned = isPinned;
            showToast(isPinned ? 'Combo pinned 📌' : 'Combo unpinned', 'push_pin');
            this.render();
        } catch (_) {
            showToast('Could not update pin.', 'error');
        }
    },

    async _deleteCombo(id, name) {
        App.showConfirm({
            icon: 'delete_outline',
            title: `Delete "${name}"?`,
            message: 'This will permanently remove this combo from your list. This cannot be undone.',
            confirmLabel: 'Delete Combo',
            onConfirm: async () => {
                const token = localStorage.getItem('mymacros_token');
                if (!token) return;
                try {
                    await fetch(`${CONFIG.BACKEND_URL}/api/combos/${id}`, {
                        method: 'DELETE',
                        headers: { 'Authorization': `Bearer ${token}` }
                    });
                    this.combos = this.combos.filter(c => c._id !== id);
                    this.render();
                    showToast(`${name} deleted`, 'delete');
                } catch (_) {
                    showToast('Could not delete combo.', 'error');
                }
            }
        });
    },

};
