/**
 * MyMacros — Bottom Navigation Bar
 */
const Navbar = {
    init() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const screen = item.dataset.screen;
                if (screen) App.navigateTo(screen);
            });
        });
    },

    setActive(screenId) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.screen === screenId);
        });
    },

    show() {
        document.getElementById('bottom-nav').classList.remove('hidden');
    },

    hide() {
        document.getElementById('bottom-nav').classList.add('hidden');
    }
};
