/**
 * MyMacros — Quick Log Panel Component
 * Shows Recent / Frequent / ⭐ Favorites tabs on the dashboard.
 * Handles one-tap logging with optimistic UI and meal-type inference.
 */
const QuickLogPanel = {
    activeTab: 'recent',
    cache: { recent: null, frequent: null, favorites: null },
    cacheTs: { recent: 0, frequent: 0, favorites: 0 },
    CACHE_TTL_MS: 5 * 60 * 1000,

    mount(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        // Tab click
        this.container.querySelectorAll('.qlp-tab').forEach(btn => {
            btn.addEventListener('click', () => {
                this.container.querySelectorAll('.qlp-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.activeTab = btn.dataset.tab;
                this.load();
            });
        });

        this.load();
    },

    async load() {
        const tab = this.activeTab;
        const token = localStorage.getItem('mymacros_token');
        if (!token) { this._renderEmpty(tab); return; }

        // Check client-side cache
        const now = Date.now();
        if (this.cache[tab] && (now - this.cacheTs[tab]) < this.CACHE_TTL_MS) {
            this._render(this.cache[tab]);
            return;
        }

        this._renderLoading();

        try {
            const res = await fetch(`${CONFIG.BACKEND_URL}/api/quick-log/${tab}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!res.ok) throw new Error('Failed to fetch');
            const { items } = await res.json();
            this.cache[tab] = items || [];
            this.cacheTs[tab] = Date.now();
            this._render(this.cache[tab]);
        } catch (_) {
            this._renderEmpty(tab);
        }
    },

    _render(items) {
        const list = this.container.querySelector('.qlp-list');
        if (!list) return;

        let displayItems = items || [];
        if (this.activeTab === 'recent' || this.activeTab === 'frequent') {
            displayItems = displayItems.slice(0, 2);
        }

        if (displayItems.length === 0) {
            list.innerHTML = this._emptyState();
            return;
        }

        list.innerHTML = displayItems.map(item => this._itemHTML(item)).join('');

        // Bind log buttons
        list.querySelectorAll('.qlp-log-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this._logItem(btn.dataset.foodId, btn.dataset.foodName);
            });
        });

        // Bind favorite buttons
        list.querySelectorAll('.qlp-fav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this._toggleFavorite(btn.dataset.foodId, btn.dataset.foodName, btn);
            });
        });
    },

    _itemHTML(item) {
        const lastLogged = item.lastLoggedAt
            ? this._relativeTime(new Date(item.lastLoggedAt))
            : '';
        const serving = item.preferredServing?.servingLabel || '1 serving';
        const catEmoji = { breakfast:'🍳',rice:'🍚',biryani:'🍛',breads:'🫓',curries:'🍲',
            vegetables:'🥗',nonveg:'🍗',dairy:'🥛',fruits:'🍎',snacks:'🥨',
            beverages:'🥤',supplements:'💪',generic:'🥘',meals:'🍽️',sweets:'🍮',fastfood:'🍟' };
        
        const food = (typeof FOOD_DATABASE !== 'undefined') ? FOOD_DATABASE.find(f => f.id === item.foodId) : null;
        const emoji = food ? (catEmoji[food.category] || '🍽️') : '🍽️';
        const imgPath = (food && typeof getFoodImagePath === 'function') ? getFoodImagePath(food) : null;

        return `
            <div class="qlp-item">
                <div class="qlp-item-icon">
                    ${imgPath 
                        ? `<img src="${imgPath}" alt="${item.foodName}" class="qlp-item-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` 
                        : ''
                    }
                    <div class="qlp-item-emoji-fallback" style="${imgPath ? 'display:none;' : 'display:flex;'}">${emoji}</div>
                </div>
                <div class="qlp-item-info">
                    <span class="qlp-item-name">${item.foodName}</span>
                    <span class="qlp-item-meta">${serving}${lastLogged ? ' · ' + lastLogged : ''}</span>
                </div>
                <div class="qlp-item-actions">
                    <button class="qlp-fav-btn ${item.isFavorite ? 'active' : ''}"
                            data-food-id="${item.foodId}"
                            data-food-name="${item.foodName}"
                            title="${item.isFavorite ? 'Remove favorite' : 'Add to favorites'}">
                        <span class="material-icons-round">${item.isFavorite ? 'star' : 'star_border'}</span>
                    </button>
                    <button class="qlp-log-btn"
                            data-food-id="${item.foodId}"
                            data-food-name="${item.foodName}"
                            title="Log now">
                        <span class="material-icons-round">add_circle</span>
                    </button>
                </div>
            </div>
        `;
    },

    async _logItem(foodId, foodName) {
        if (typeof SearchScreen !== 'undefined' && typeof FOOD_DATABASE !== 'undefined') {
            const food = FOOD_DATABASE.find(f => f.id === foodId);
            if (food) {
                // Pre-select the inferred meal type
                SearchScreen.setMealType(this._inferMealType());
                
                // If they are on a different screen (e.g. Dashboard) and QuickLogPanel is used there,
                // we should navigate to the search screen to show the modal properly.
                // However, currently QuickLogPanel is mounted inside the Search Screen.
                // So we can just open the modal directly.
                SearchScreen.openModal(food);
                return;
            }
        }
        showToast('Error: Could not load food data', 'error');
    },

    async _toggleFavorite(foodId, foodName, btn) {
        const token = localStorage.getItem('mymacros_token');
        if (!token) return;

        const isNowFav = !btn.classList.contains('active');
        // Optimistic
        btn.classList.toggle('active', isNowFav);
        btn.querySelector('.material-icons-round').textContent = isNowFav ? 'star' : 'star_border';

        try {
            await fetch(`${CONFIG.BACKEND_URL}/api/quick-log/favorite`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({ foodId, foodName })
            });
            // Invalidate favorites cache
            this.cache.favorites = null;
            this.cacheTs.favorites = 0;
            
            // If we are currently on the favorites tab and just removed a favorite, re-load to show it gone
            if (!isNowFav && this.activeTab === 'favorites') {
                this.load();
            }

            showToast(isNowFav ? `${foodName} added to Favorites ⭐` : `${foodName} removed from Favorites`, isNowFav ? 'star' : 'star_border');
        } catch (_) {
            // Revert on failure
            btn.classList.toggle('active', !isNowFav);
            btn.querySelector('.material-icons-round').textContent = !isNowFav ? 'star' : 'star_border';
        }
    },

    _inferMealType() {
        const hour = new Date().getHours();
        if (hour < 11) return 'breakfast';
        if (hour < 16) return 'lunch';
        if (hour < 19) return 'snacks';
        return 'dinner';
    },

    _relativeTime(date) {
        const diff = Date.now() - date.getTime();
        const mins = Math.floor(diff / 60000);
        if (mins < 60) return `${mins}m ago`;
        const hrs = Math.floor(mins / 60);
        if (hrs < 24) return `${hrs}h ago`;
        const days = Math.floor(hrs / 24);
        return `${days}d ago`;
    },

    _renderLoading() {
        const list = this.container?.querySelector('.qlp-list');
        if (list) list.innerHTML = `
            <div class="qlp-loading">
                <div class="qlp-spinner"></div>
                <span>Loading...</span>
            </div>`;
    },

    _renderEmpty(tab) {
        const list = this.container?.querySelector('.qlp-list');
        if (list) list.innerHTML = this._emptyState(tab);
    },

    _emptyState(tab = this.activeTab) {
        const messages = {
            recent:    { icon: 'history', title: 'No recent foods yet', sub: 'Foods you log will appear here for quick access.' },
            frequent:  { icon: 'trending_up', title: 'No frequent foods yet', sub: 'Log consistently and your top foods will surface here.' },
            favorites: { icon: 'star_border', title: 'No favorites yet', sub: 'Tap the star icon on any food to pin it here.' }
        };
        const m = messages[tab] || messages.recent;
        return `
            <div class="qlp-empty">
                <span class="material-icons-round qlp-empty-icon">${m.icon}</span>
                <p class="qlp-empty-title">${m.title}</p>
                <p class="qlp-empty-sub">${m.sub}</p>
            </div>`;
    },

    // Call this after a new log is saved so the Recent tab refreshes next open
    invalidate() {
        this.cache = { recent: null, frequent: null, favorites: null };
        this.cacheTs = { recent: 0, frequent: 0, favorites: 0 };
    }
};
