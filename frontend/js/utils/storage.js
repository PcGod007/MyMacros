/**
 * MyMacros — Storage Utility
 * localStorage abstraction for all app data
 */
window.getLocalISODate = function(date = new Date()) {
    const tzOffset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - tzOffset).toISOString().split('T')[0];
};

const Storage = {
    KEYS: {
        USER: 'mymacros_user',
        TARGETS: 'mymacros_targets',
        LOGS: 'mymacros_logs',
        WEIGHTS: 'mymacros_weights',
        THEME: 'mymacros_theme',
        ONBOARDED: 'mymacros_onboarded',
        WATER_REMINDER: 'mymacros_water_reminder_ts'
    },

    // ─── User Profile ───────────────────────
    getUser() {
        const data = localStorage.getItem(this.KEYS.USER);
        return data ? JSON.parse(data) : null;
    },

    saveUser(user) {
        localStorage.setItem(this.KEYS.USER, JSON.stringify(user));
    },

    // ─── Macro Targets ──────────────────────
    getTargets() {
        const data = localStorage.getItem(this.KEYS.TARGETS);
        return data ? JSON.parse(data) : null;
    },

    saveTargets(targets) {
        localStorage.setItem(this.KEYS.TARGETS, JSON.stringify(targets));
    },

    // ─── Daily Food Logs ────────────────────
    getLogs() {
        const data = localStorage.getItem(this.KEYS.LOGS);
        return data ? JSON.parse(data) : {};
    },

    getDayLog(dateStr) {
        const logs = this.getLogs();
        return logs[dateStr] || [];
    },

    addFoodEntry(dateStr, entry) {
        const logs = this.getLogs();
        if (!logs[dateStr]) logs[dateStr] = [];
        entry.id = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
        entry.timestamp = new Date().toISOString();
        logs[dateStr].push(entry);
        localStorage.setItem(this.KEYS.LOGS, JSON.stringify(logs));

        // Sync to cloud (Background)
        const token = localStorage.getItem('mymacros_token');
        if (token) {
            fetch(`${CONFIG.BACKEND_URL}/api/logs/${dateStr}/entries`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(entry)
            }).catch(e => console.warn('Cloud sync failed - will retry on next login.', e));
        }

        return entry;
    },

    removeFoodEntry(dateStr, entryId) {
        const logs = this.getLogs();
        if (logs[dateStr]) {
            logs[dateStr] = logs[dateStr].filter(e => e.id !== entryId);
            localStorage.setItem(this.KEYS.LOGS, JSON.stringify(logs));

            // Sync to cloud (Background)
            const token = localStorage.getItem('mymacros_token');
            if (token) {
                fetch(`${CONFIG.BACKEND_URL}/api/logs/${dateStr}/entries/${entryId}`, {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${token}` }
                }).catch(e => console.warn('Cloud sync failed - will retry on next login.', e));
            }
        }
    },

    updateFoodEntry(dateStr, entryId, updatedFields) {
        const logs = this.getLogs();
        if (logs[dateStr]) {
            const idx = logs[dateStr].findIndex(e => e.id === entryId);
            if (idx >= 0) {
                logs[dateStr][idx] = { ...logs[dateStr][idx], ...updatedFields };
                localStorage.setItem(this.KEYS.LOGS, JSON.stringify(logs));
            }
        }
    },

    // ─── Water Reminder ─────────────────────
    getWaterReminderLastOpened() {
        const ts = localStorage.getItem(this.KEYS.WATER_REMINDER);
        return ts ? parseInt(ts, 10) : 0;
    },

    setWaterReminderLastOpened() {
        localStorage.setItem(this.KEYS.WATER_REMINDER, Date.now().toString());
    },

    // ─── Weight History ─────────────────────
    getWeights() {
        const data = localStorage.getItem(this.KEYS.WEIGHTS);
        return data ? JSON.parse(data) : [];
    },

    addWeight(weight) {
        const weights = this.getWeights();
        const today = window.getLocalISODate(new Date());
        // Update today's entry or add new
        const existingIdx = weights.findIndex(w => w.date === today);
        if (existingIdx >= 0) {
            weights[existingIdx].weight = weight;
        } else {
            weights.push({ date: today, weight: weight });
        }
        // Sort by date
        weights.sort((a, b) => a.date.localeCompare(b.date));
        localStorage.setItem(this.KEYS.WEIGHTS, JSON.stringify(weights));

        // Sync to cloud (Background)
        const token = localStorage.getItem('mymacros_token');
        if (token) {
            fetch(`${CONFIG.BACKEND_URL}/api/weights`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({ date: today, weight: weight })
            }).catch(e => console.warn('Cloud sync failed - will retry on next login.', e));
        }
    },

    // ─── Theme ──────────────────────────────
    getTheme() {
        return localStorage.getItem(this.KEYS.THEME) || 'dark';
    },

    saveTheme(theme) {
        localStorage.setItem(this.KEYS.THEME, theme);
    },

    // ─── Onboarding ─────────────────────────
    isOnboarded() {
        return localStorage.getItem(this.KEYS.ONBOARDED) === 'true';
    },

    setOnboarded(val) {
        localStorage.setItem(this.KEYS.ONBOARDED, val ? 'true' : 'false');
    },

    // ─── Computed Helpers ────────────────────
    getLoggedDaysCount() {
        const logs = this.getLogs();
        return Object.keys(logs).filter(k => logs[k].length > 0).length;
    },

    getStreak() {
        const logs = this.getLogs();
        const dates = Object.keys(logs)
            .filter(k => logs[k].length > 0)
            .sort()
            .reverse();

        if (dates.length === 0) return 0;

        let streak = 0;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const todayStr = window.getLocalISODate(today);
        
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = window.getLocalISODate(yesterday);

        // Start checking from today, or yesterday if today is not logged
        let skipToday = false;
        if (!dates.includes(todayStr) && dates.includes(yesterdayStr)) {
            skipToday = true;
        }

        for (let i = skipToday ? 1 : 0; i < dates.length + (skipToday ? 1 : 0); i++) {
            const checkDate = new Date(today);
            checkDate.setDate(checkDate.getDate() - i);
            const checkStr = window.getLocalISODate(checkDate);

            if (dates.includes(checkStr)) {
                streak++;
            } else {
                break;
            }
        }
        return streak;
    },

    getDayTotals(dateStr) {
        const entries = this.getDayLog(dateStr);
        const totals = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 };
        entries.forEach(e => {
            totals.calories += e.macros.calories || 0;
            totals.protein += e.macros.protein || 0;
            totals.carbs += e.macros.carbs || 0;
            totals.fat += e.macros.fat || 0;
            totals.fiber += e.macros.fiber || 0;
        });
        return totals;
    },

    getDateRange(days) {
        const result = [];
        const today = new Date();
        for (let i = days - 1; i >= 0; i--) {
            const d = new Date(today);
            d.setDate(d.getDate() - i);
            result.push(window.getLocalISODate(d));
        }
        return result;
    },

    // ─── Water Reminder ──────────────────────
    getWaterReminderLastOpened() {
        return parseInt(localStorage.getItem(this.KEYS.WATER_REMINDER)) || 0;
    },

    setWaterReminderLastOpened() {
        localStorage.setItem(this.KEYS.WATER_REMINDER, Date.now().toString());
    },

    // ─── Clear All Data ─────────────────────
    clearAll() {
        Object.values(this.KEYS).forEach(key => localStorage.removeItem(key));
    }
};
