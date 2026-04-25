/**
 * MyMacros — Main Application Controller
 */

// ─── Toast Helper ────────────────────────
function showToast(message, icon = 'check_circle') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    const toastIcon = document.getElementById('toast-icon');
    toastMsg.textContent = message;
    toastIcon.textContent = icon;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ─── App Controller ──────────────────────
const App = {
    currentScreen: 'login',

    init() {
        // Prevent browser from automatically restoring scroll position on refresh
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);

        // Start backend keep-alive heartbeat
        CONFIG.startKeepAlive();

        // Apply saved theme
        const theme = Storage.getTheme();
        document.documentElement.setAttribute('data-theme', theme);

        // Update meta theme color
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) {
            metaTheme.content = theme === 'dark' ? '#0f1120' : '#f6f6ff';
        }

        // Initialize all modules
        Navbar.init();
        LoginScreen.init();
        OnboardingScreen.init();
        DashboardScreen.init();
        SearchScreen.init();
        InsightsScreen.init();
        ProfileScreen.init();
        if (typeof MealBuilder !== 'undefined') MealBuilder.init();
        if (typeof CombosScreen !== 'undefined') CombosScreen.init();
        if (typeof ComboBuilderScreen !== 'undefined') ComboBuilderScreen.init();
        if (typeof BarcodeScannerScreen !== 'undefined') BarcodeScannerScreen.init();
        if (typeof AIDietitianScreen !== 'undefined') AIDietitianScreen.init();

        // Check if user is already logged in
        const user = Storage.getUser();
        const token = localStorage.getItem('mymacros_token');

        if (token) {
            // User has a session — go to app immediately (trust but verify)
            const lastScreen = localStorage.getItem('mymacros_last_screen') || 'dashboard';
            const validScreens = ['dashboard', 'search', 'insights', 'profile', 'combos', 'comboBuilder', 'barcodeScanner', 'ai'];
            const target = validScreens.includes(lastScreen) ? lastScreen : 'dashboard';
            
            // If they weren't onboarded locally, they'll see dashboard for a split second 
            // while LoginScreen._fetchAndStoreProfile verifies them in the background.
            this.navigateTo(target);

            // Start systems
            if (typeof NotificationManager !== 'undefined') NotificationManager.init();

            // Background check: verify profile & sync
            LoginScreen._fetchAndStoreProfile(token, Storage.isOnboarded());

        } else {
            // No token — must log in
            this.showScreen('login');
        }

    },

    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

        // Show target screen
        const target = document.getElementById('screen-' + screenId);
        if (target) {
            target.classList.add('active');
            // Add entrance animation
            target.style.animation = 'none';
            target.offsetHeight; // trigger reflow
            target.style.animation = 'fadeSlideIn 0.35s ease-out';
        }

        this.currentScreen = screenId;
        // Persist current screen so refresh stays here
        localStorage.setItem('mymacros_last_screen', screenId);

        // Show/hide navbar
        const navScreens = ['dashboard', 'search', 'insights', 'profile', 'combos', 'comboBuilder', 'barcodeScanner'];
        if (navScreens.includes(screenId)) {
            Navbar.show();
            Navbar.setActive(screenId);
        } else {
            Navbar.hide();
        }

        // Call screen-specific show method
        switch (screenId) {
            case 'login':          LoginScreen.show(); break;
            case 'onboarding':     OnboardingScreen.show(); break;
            case 'dashboard':      DashboardScreen.show(); break;
            case 'search':         SearchScreen.show(); break;
            case 'insights':       InsightsScreen.show(); break;
            case 'profile':        ProfileScreen.show(); break;
            case 'combos':         if (typeof CombosScreen !== 'undefined') CombosScreen.show(); break;
            case 'comboBuilder':   if (typeof ComboBuilderScreen !== 'undefined') ComboBuilderScreen.show(); break;
            case 'barcodeScanner': if (typeof BarcodeScannerScreen !== 'undefined') BarcodeScannerScreen.show(); break;
            case 'ai':             if (typeof AIDietitianScreen !== 'undefined') AIDietitianScreen.show(); break;
        }
    },

    navigateTo(screenId) {
        this.showScreen(screenId);
    },

    toggleTheme() {
        const current = Storage.getTheme();
        const next = current === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', next);
        Storage.saveTheme(next);

        // Update meta theme color
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) {
            metaTheme.content = next === 'dark' ? '#0f1120' : '#f6f6ff';
        }

        // Update toggle visual
        document.getElementById('theme-toggle').classList.toggle('active', next === 'dark');

        showToast(next === 'dark' ? 'Dark mode enabled 🌙' : 'Light mode enabled ☀️', 'brightness_6');
    },

    showConfirm({ icon, title, message, confirmLabel, onConfirm }) {
        const overlay = document.getElementById('confirm-modal-overlay');
        if (!overlay) return;

        document.getElementById('confirm-modal-icon').innerHTML =
            `<span class="material-icons-round">${icon}</span>`;
        document.getElementById('confirm-modal-title').textContent = title;
        document.getElementById('confirm-modal-message').textContent = message;
        
        const yesBtn = document.getElementById('confirm-modal-yes');
        yesBtn.textContent = confirmLabel;
        
        // Clone to remove old listeners
        const newYesBtn = yesBtn.cloneNode(true);
        yesBtn.parentNode.replaceChild(newYesBtn, yesBtn);
        
        newYesBtn.addEventListener('click', () => {
            overlay.classList.add('hidden');
            onConfirm();
        });

        const noBtn = document.getElementById('confirm-modal-no');
        const closeHandler = () => overlay.classList.add('hidden');
        
        const newNoBtn = noBtn.cloneNode(true);
        noBtn.parentNode.replaceChild(newNoBtn, noBtn);
        newNoBtn.addEventListener('click', closeHandler);
        
        overlay.onclick = (e) => {
            if (e.target.id === 'confirm-modal-overlay') closeHandler();
        };

        overlay.classList.remove('hidden');
    }
};

// ─── Initialize on DOM Ready ─────────────
document.addEventListener('DOMContentLoaded', () => App.init());
