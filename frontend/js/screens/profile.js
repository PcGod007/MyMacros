/**
 * MyMacros — Profile Screen
 */
const ProfileScreen = {
    init() {
        // Theme toggle
        document.getElementById('toggle-theme-row').addEventListener('click', () => {
            App.toggleTheme();
        });

        // Update weight
        document.getElementById('btn-update-weight').addEventListener('click', () => {
            this.showWeightModal();
        });

        // Update age
        document.getElementById('btn-update-age').addEventListener('click', () => {
            this.showAgeModal();
        });

        // Edit profile
        document.getElementById('btn-edit-profile').addEventListener('click', () => {
            App.showScreen('onboarding');
        });

        // Edit macros
        document.getElementById('btn-edit-macros').addEventListener('click', () => {
            this.showMacroModal();
        });

        // Clear data
        document.getElementById('btn-clear-data').addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
                Storage.clearAll();
                showToast('All data cleared', 'delete');
                setTimeout(() => {
                    location.reload();
                }, 800);
            }
        });

        // Weight modal
        document.getElementById('weight-modal-cancel').addEventListener('click', () => {
            document.getElementById('weight-modal-overlay').classList.add('hidden');
        });
        document.getElementById('weight-modal-save').addEventListener('click', () => {
            this.saveWeight();
        });
        document.getElementById('weight-modal-same').addEventListener('click', () => {
            document.getElementById('weight-update-input').value = Storage.getUser().weight;
            this.saveWeight();
            // Hide dashboard notification if present
            const badge = document.getElementById('weight-notification-badge');
            if (badge) badge.classList.add('hidden');
        });
        document.getElementById('weight-modal-overlay').addEventListener('click', (e) => {
            if (e.target.id === 'weight-modal-overlay') {
                document.getElementById('weight-modal-overlay').classList.add('hidden');
            }
        });

        // Age modal
        document.getElementById('age-modal-cancel').addEventListener('click', () => {
            document.getElementById('age-modal-overlay').classList.add('hidden');
        });
        document.getElementById('age-modal-save').addEventListener('click', () => {
            this.saveAge();
        });
        document.getElementById('age-modal-overlay').addEventListener('click', (e) => {
            if (e.target.id === 'age-modal-overlay') {
                document.getElementById('age-modal-overlay').classList.add('hidden');
            }
        });

        // Macro modal
        document.getElementById('macro-modal-cancel').addEventListener('click', () => {
            document.getElementById('macro-modal-overlay').classList.add('hidden');
        });
        document.getElementById('macro-modal-save').addEventListener('click', () => {
            this.saveMacros();
        });
        document.getElementById('macro-modal-overlay').addEventListener('click', (e) => {
            if (e.target.id === 'macro-modal-overlay') {
                document.getElementById('macro-modal-overlay').classList.add('hidden');
            }
        });

        // Setup custom macro steppers
        document.querySelectorAll('.macro-step-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');
                const step = parseInt(btn.getAttribute('data-step'));
                const input = document.getElementById(targetId);
                let val = parseInt(input.value) || 0;
                val += step;
                if (val < 0) val = 0;
                input.value = val;
            });
        });
    },

    show() {
        const user = Storage.getUser();
        const targets = Storage.getTargets();
        if (!user) return;

        // User info
        document.getElementById('profile-name').textContent = user.name || 'User';
        document.getElementById('profile-email').textContent = user.email || '—';

        // Avatar initials
        const avatar = document.getElementById('profile-avatar');
        if (user.name) {
            const initials = user.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
            avatar.innerHTML = `<span>${initials}</span>`;
        }

        // Stats
        document.getElementById('profile-cal-target').textContent = targets ? targets.calories + ' kcal' : '—';
        document.getElementById('profile-goal').textContent = user.goal ? CalorieCalc.getGoalLabel(user.goal) : '—';
        document.getElementById('profile-days-logged').textContent = Storage.getLoggedDaysCount();

        // Body metrics
        document.getElementById('profile-height').textContent = user.height ? user.height + ' cm' : '—';
        document.getElementById('profile-weight').textContent = user.weight ? user.weight + ' kg' : '—';
        document.getElementById('profile-age').textContent = user.age || '—';
        document.getElementById('profile-gender').textContent = user.gender ?
            user.gender.charAt(0).toUpperCase() + user.gender.slice(1) : '—';

        // Theme toggle state
        const toggle = document.getElementById('theme-toggle');
        toggle.classList.toggle('active', Storage.getTheme() === 'dark');
    },

    showWeightModal() {
        const user = Storage.getUser();
        document.getElementById('weight-update-input').value = user?.weight || '';
        document.getElementById('weight-modal-overlay').classList.remove('hidden');
        setTimeout(() => document.getElementById('weight-update-input').focus(), 200);
    },

    saveWeight() {
        const weight = parseFloat(document.getElementById('weight-update-input').value);
        if (!weight || weight < 30 || weight > 250) {
            showToast('Please enter a valid weight (30-250 kg)', 'warning');
            return;
        }

        // Update user weight
        const user = Storage.getUser();
        user.weight = weight;
        Storage.saveUser(user);

        // Recalculate targets
        const targets = CalorieCalc.generateTargets(user);
        Storage.saveTargets(targets);

        // Add to weight history
        Storage.addWeight(weight);

        document.getElementById('weight-modal-overlay').classList.add('hidden');
        showToast('Weight updated to ' + weight + ' kg', 'check_circle');
        this.show(); // Refresh profile
    },

    showAgeModal() {
        const user = Storage.getUser();
        document.getElementById('age-update-input').value = user?.age || '';
        document.getElementById('age-modal-overlay').classList.remove('hidden');
        setTimeout(() => document.getElementById('age-update-input').focus(), 200);
    },

    saveAge() {
        const age = parseInt(document.getElementById('age-update-input').value);
        if (!age || age < 10 || age > 120) {
            showToast('Please enter a valid age (10-120)', 'warning');
            return;
        }

        const user = Storage.getUser();
        user.age = age;
        Storage.saveUser(user);

        // Recalculate targets
        const targets = CalorieCalc.generateTargets(user);
        Storage.saveTargets(targets);

        document.getElementById('age-modal-overlay').classList.add('hidden');
        showToast('Age updated to ' + age, 'check_circle');
        this.show(); // Refresh profile
    },

    showMacroModal() {
        const targets = Storage.getTargets();
        if (!targets) return;
        
        document.getElementById('macro-cal-input').value = targets.calories;
        document.getElementById('macro-pro-input').value = targets.protein;
        document.getElementById('macro-car-input').value = targets.carbs;
        document.getElementById('macro-fat-input').value = targets.fat;
        document.getElementById('macro-fib-input').value = targets.fiber;
        
        document.getElementById('macro-modal-overlay').classList.remove('hidden');
    },

    saveMacros() {
        const cal = parseInt(document.getElementById('macro-cal-input').value);
        const pro = parseInt(document.getElementById('macro-pro-input').value);
        const car = parseInt(document.getElementById('macro-car-input').value);
        const fat = parseInt(document.getElementById('macro-fat-input').value);
        const fib = parseInt(document.getElementById('macro-fib-input').value);
        
        if (!cal || !pro || !car || !fat || !fib) {
            showToast('Please fill all macro fields', 'warning');
            return;
        }

        const targets = {
            calories: cal,
            protein: pro,
            carbs: car,
            fat: fat,
            fiber: fib
        };

        // 1. Save immediately to localStorage (instant, works offline)
        Storage.saveTargets(targets);
        document.getElementById('macro-modal-overlay').classList.add('hidden');
        showToast('Macro limits saved!', 'check_circle');
        this.show();

        // 2. Also persist to DB so it survives across devices / cache clears
        const token = localStorage.getItem('mymacros_token');
        if (token) {
            fetch(`${CONFIG.BACKEND_URL}/api/user/targets`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(targets)
            }).catch(err => console.warn('Target sync to DB failed (offline?):', err));
        }
    }
};
