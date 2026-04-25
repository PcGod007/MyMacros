/**
 * MyMacros — Barcode Scanner Screen (Frontend-only, no backend)
 * Uses ZXing to decode barcodes, then queries OpenFoodFacts directly.
 */
const BarcodeScannerScreen = {
    reader: null,
    isScanning: false,

    init() {
        document.getElementById('barcode-back')?.addEventListener('click', () => {
            this.stop();
            App.navigateTo('dashboard');
        });
        document.getElementById('barcode-manual-btn')?.addEventListener('click', () => {
            this._showManualEntry();
        });
        document.getElementById('barcode-manual-submit')?.addEventListener('click', () => {
            const code = document.getElementById('barcode-manual-input')?.value.trim();
            if (code) this._handleScan(code);
        });
        document.getElementById('barcode-manual-input')?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const code = e.target.value.trim();
                if (code) this._handleScan(code);
            }
        });
        document.getElementById('barcode-retry-btn')?.addEventListener('click', () => this.start());
    },

    show() {
        this._resetUI();
        this.start();
    },

    async start() {
        const ZX = window.ZXing || window.ZXingBrowser;
        if (!ZX) {
            this._showError('Barcode scanner library not loaded. Please refresh.');
            return;
        }
        this._showScanner();
        this.isScanning = true;
        try {
            this.reader = new ZX.BrowserMultiFormatReader();
            const video = document.getElementById('barcode-video');
            
            // Request high resolution and continuous autofocus for better barcode scanning
            const constraints = {
                video: { 
                    facingMode: 'environment',
                    width: { ideal: 1280 },
                    height: { ideal: 720 },
                    advanced: [{ focusMode: 'continuous' }]
                }
            };

            // Start scanning with default settings (often most robust)
            this.reader.decodeFromConstraints(constraints, video, (result, err) => {
                if (result && this.isScanning) {
                    const code = result.getText();
                    this.isScanning = false;
                    this.stop();
                    navigator.vibrate?.(50);
                    this._handleScan(code);
                }
            });

        } catch (err) {
            console.error('Scanner start error:', err);
            this._showError('Could not start camera. Please enter barcode manually.');
        }
    },

    stop() {
        this.isScanning = false;
        try { this.reader?.reset(); } catch (_) {}
    },

    async _handleScan(barcode) {
        this.stop();
        if (!/^\d{8,14}$/.test(barcode)) {
            showToast('Invalid barcode format', 'warning');
            this.start();
            return;
        }
        this._showLoading(barcode);

        try {
            const res = await fetch(
                `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`,
                { headers: { 'User-Agent': 'MyMacros/1.0' }, signal: AbortSignal.timeout(5000) }
            );
            const data = await res.json();
            if (data.status === 1 && data.product) {
                const food = this._mapOFFProduct(data.product, barcode);
                this._showProductCard(food);
            } else {
                this._showNotFound(barcode);
            }
        } catch (_) {
            this._showNotFound(barcode);
        }
    },

    _mapOFFProduct(p, barcode) {
        const n = p.nutriments || {};
        const cal = n['energy-kcal_100g'] || (n.energy_100g ? n.energy_100g / 4.184 : 0);
        return {
            barcode,
            name: p.product_name_en || p.product_name || 'Unknown Product',
            brand: p.brands || '',
            imageUrl: p.image_url || '',
            per100g: {
                calories: Math.round(cal),
                protein:  Math.round((n.proteins_100g || 0) * 10) / 10,
                carbs:    Math.round((n.carbohydrates_100g || 0) * 10) / 10,
                fat:      Math.round((n.fat_100g || 0) * 10) / 10,
                fiber:    Math.round((n.fiber_100g || 0) * 10) / 10,
                sugar:    Math.round((n.sugars_100g || 0) * 10) / 10,
                sodium:   Math.round(((n.sodium_100g || (n.salt_100g || 0) / 2.5)) * 1000)
            },
            servingSize: parseFloat(p.serving_size) || 100,
            servingLabel: p.serving_size || '100g'
        };
    },

    _showProductCard(food) {
        const panel = document.getElementById('barcode-product-panel');
        const scanner = document.getElementById('barcode-scanner-view');
        const loading = document.getElementById('barcode-loading');
        if (loading) loading.classList.add('hidden');
        if (scanner) scanner.classList.add('hidden');
        if (!panel) return;
        panel.classList.remove('hidden');

        const grams = food.servingSize || 100;
        const m = food.per100g;
        const macros = {
            calories: Math.round((m.calories / 100) * grams),
            protein:  Math.round((m.protein  / 100) * grams * 10) / 10,
            carbs:    Math.round((m.carbs    / 100) * grams * 10) / 10,
            fat:      Math.round((m.fat      / 100) * grams * 10) / 10,
            fiber:    Math.round((m.fiber    / 100) * grams * 10) / 10
        };

        document.getElementById('bp-name').textContent = food.name;
        document.getElementById('bp-brand').textContent = food.brand || 'Unknown brand';
        document.getElementById('bp-serving').textContent = food.servingLabel;
        document.getElementById('bp-calories').textContent = macros.calories;
        document.getElementById('bp-protein').textContent = macros.protein + 'g';
        document.getElementById('bp-carbs').textContent   = macros.carbs   + 'g';
        document.getElementById('bp-fat').textContent     = macros.fat     + 'g';
        document.getElementById('bp-fiber').textContent   = macros.fiber   + 'g';

        const img = document.getElementById('bp-image');
        if (img) { img.src = food.imageUrl || ''; img.classList.toggle('hidden', !food.imageUrl); }

        // Gram input
        const gramInput = document.getElementById('bp-grams-input');
        if (gramInput) gramInput.value = grams;

        const logBtn = document.getElementById('bp-log-btn');
        if (logBtn) {
            logBtn.onclick = () => {
                const logGrams = parseFloat(gramInput?.value) || grams;
                const meal = document.querySelector('.bp-meal-pill.active')?.dataset.meal || this._inferMeal();
                const logMacros = {
                    calories: Math.round((m.calories / 100) * logGrams),
                    protein:  Math.round((m.protein  / 100) * logGrams * 10) / 10,
                    carbs:    Math.round((m.carbs    / 100) * logGrams * 10) / 10,
                    fat:      Math.round((m.fat      / 100) * logGrams * 10) / 10,
                    fiber:    Math.round((m.fiber    / 100) * logGrams * 10) / 10
                };
                const dateStr = window.getLocalISODate(DashboardScreen.currentDate);
                Storage.addFoodEntry(dateStr, {
                    foodId: 'barcode_' + food.barcode,
                    foodName: food.brand ? `${food.brand} ${food.name}` : food.name,
                    serving: `${logGrams}g`,
                    grams: logGrams,
                    meal,
                    macros: logMacros
                });
                showToast(`${food.name} logged! +${logMacros.calories} kcal`, 'check_circle');
                navigator.vibrate?.(20);
                setTimeout(() => App.navigateTo('dashboard'), 500);
            };
        }

        // Meal pills
        document.querySelectorAll('.bp-meal-pill').forEach((p, i) => {
            p.classList.toggle('active', i === 0);
            p.addEventListener('click', () => {
                document.querySelectorAll('.bp-meal-pill').forEach(x => x.classList.remove('active'));
                p.classList.add('active');
            });
        });

        // Rescan
        document.getElementById('bp-rescan-btn')?.addEventListener('click', () => {
            panel.classList.add('hidden');
            this.start();
        });

        // Update macros on gram change
        gramInput?.addEventListener('input', () => {
            const g = parseFloat(gramInput.value) || 100;
            document.getElementById('bp-calories').textContent = Math.round((m.calories / 100) * g);
            document.getElementById('bp-protein').textContent  = Math.round((m.protein  / 100) * g * 10) / 10 + 'g';
            document.getElementById('bp-carbs').textContent    = Math.round((m.carbs    / 100) * g * 10) / 10 + 'g';
            document.getElementById('bp-fat').textContent      = Math.round((m.fat      / 100) * g * 10) / 10 + 'g';
        });
    },

    _showNotFound(barcode) {
        this._setState('notfound');
        document.getElementById('barcode-notfound-code').textContent = barcode;
    },

    _showLoading(barcode) {
        this._setState('loading');
        document.getElementById('barcode-loading-code').textContent = barcode;
    },

    _showScanner() { this._setState('scanner'); },
    _showError(msg) {
        this._setState('error');
        const el = document.getElementById('barcode-error-msg');
        if (el) el.textContent = msg;
    },
    _showManualEntry() { this._setState('manual'); },

    _setState(state) {
        ['scanner', 'loading', 'notfound', 'error', 'manual'].forEach(s => {
            document.getElementById(`barcode-${s}-view`)?.classList.toggle('hidden', s !== state);
        });
        document.getElementById('barcode-product-panel')?.classList.add('hidden');
    },

    _resetUI() {
        this._setState('scanner');
        document.getElementById('barcode-manual-input').value = '';
    },

    _inferMeal() {
        const h = new Date().getHours();
        if (h < 11) return 'breakfast';
        if (h < 16) return 'lunch';
        if (h < 19) return 'snacks';
        return 'dinner';
    }
};
