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

        // Check if user is already logged in & onboarded
        const user = Storage.getUser();
        if (user && user.name && Storage.isOnboarded()) {
            // Restore last screen or default to dashboard
            const lastScreen = localStorage.getItem('mymacros_last_screen') || 'dashboard';
            const validScreens = ['dashboard', 'search', 'insights', 'profile'];
            this.navigateTo(validScreens.includes(lastScreen) ? lastScreen : 'dashboard');
            // Start notification system
            if (typeof NotificationManager !== 'undefined') NotificationManager.init();
            
            // Run silent background cloud sync
            const token = localStorage.getItem('mymacros_token');
            if (token) {
                setTimeout(() => {
                    LoginScreen._syncLocalToCloud(token)
                        .then(() => LoginScreen._pullCloudToLocal(token))
                        .catch(err => console.warn('Background sync failed:', err));
                }, 1000);
            }

        } else if (user && user.name) {
            this.showScreen('onboarding');
        } else {
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
        const navScreens = ['dashboard', 'search', 'insights', 'profile'];
        if (navScreens.includes(screenId)) {
            Navbar.show();
            Navbar.setActive(screenId);
        } else {
            Navbar.hide();
        }

        // Call screen-specific show method
        switch (screenId) {
            case 'login': LoginScreen.show(); break;
            case 'onboarding': OnboardingScreen.show(); break;
            case 'dashboard': DashboardScreen.show(); break;
            case 'search': SearchScreen.show(); break;
            case 'insights': InsightsScreen.show(); break;
            case 'profile': ProfileScreen.show(); break;
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
    }
};

// ─── Initialize on DOM Ready ─────────────
document.addEventListener('DOMContentLoaded', () => App.init());
