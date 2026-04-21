/**
 * MyMacros — Notification Utility
 * Handles Web Notifications API for weekly weight update reminders
 */
const NotificationManager = {
    PERM_KEY: 'mymacros_notif_permission',
    LAST_ASKED_KEY: 'mymacros_notif_last_asked',
    SNOOZE_KEY: 'mymacros_weight_snooze_until',

    /** Call once on app startup after user is logged in */
    init() {
        if (!('Notification' in window)) return; // Not supported

        const permission = Notification.permission;

        // If already granted, schedule checks
        if (permission === 'granted') {
            this._scheduleWeeklyCheck();
            return;
        }

        // Don't ask more than once every 3 days
        if (permission === 'denied') return;

        const lastAsked = parseInt(localStorage.getItem(this.LAST_ASKED_KEY) || '0', 10);
        const threeDays = 3 * 24 * 60 * 60 * 1000;
        if (Date.now() - lastAsked < threeDays) return;

        // Ask after a short delay so the user is settled in the app
        setTimeout(() => this._requestPermission(), 4000);
    },

    async _requestPermission() {
        localStorage.setItem(this.LAST_ASKED_KEY, Date.now().toString());
        const result = await Notification.requestPermission();
        if (result === 'granted') {
            this._scheduleWeeklyCheck();
            // Welcome notification
            this._send(
                'MyMacros Notifications Enabled',
                "We'll remind you to log your weight every week so your body analysis stays accurate.",
                '⚖️'
            );
        }
    },

    /**
     * Check if we should fire a weight update notification.
     * Called on app load and after each navigation to any screen.
     */
    _scheduleWeeklyCheck() {
        // Run immediately, then every hour
        this._checkWeightReminder();
        setInterval(() => this._checkWeightReminder(), 60 * 60 * 1000);
    },

    _checkWeightReminder() {
        if (Notification.permission !== 'granted') return;

        // Check snooze
        const snoozeUntil = parseInt(localStorage.getItem(this.SNOOZE_KEY) || '0', 10);
        if (Date.now() < snoozeUntil) return;

        const weights = Storage.getWeights ? Storage.getWeights() : [];
        const oneWeek = 7 * 24 * 60 * 60 * 1000;

        let shouldNotify = false;

        if (weights.length === 0) {
            // Never logged weight — remind after 1 day of using the app
            const onboarded = localStorage.getItem('mymacros_onboarded');
            if (onboarded) shouldNotify = true;
        } else {
            const lastEntry = weights[weights.length - 1];
            const lastDate = new Date(lastEntry.date).getTime();
            if (Date.now() - lastDate > oneWeek) shouldNotify = true;
        }

        if (shouldNotify) {
            this._send(
                'Time to log your weight! ⚖️',
                'It\'s been over a week. Update your weight in the Profile tab to keep your body analysis accurate.',
                null,
                { tag: 'weight-reminder', requireInteraction: false }
            );
            // Auto-snooze for 24h after firing so it doesn't spam
            localStorage.setItem(this.SNOOZE_KEY, (Date.now() + 24 * 60 * 60 * 1000).toString());
        }
    },

    _send(title, body, icon = null, opts = {}) {
        if (Notification.permission !== 'granted') return;
        try {
            new Notification(title, {
                body,
                icon: icon || '/icon-192.png',
                badge: '/icon-192.png',
                vibrate: [200, 100, 200],
                ...opts
            });
        } catch (e) {
            // Safari may throw — silently ignore
        }
    },

    /** Snooze reminders for N days */
    snooze(days = 3) {
        localStorage.setItem(this.SNOOZE_KEY, (Date.now() + days * 24 * 60 * 60 * 1000).toString());
        showToast(`Reminder snoozed for ${days} day${days > 1 ? 's' : ''}`, 'notifications_off');
    }
};
