/**
 * MyMacros — Login Screen (Google OAuth only)
 */
const LoginScreen = {
    BACKEND: CONFIG.BACKEND_URL,

    init() {
        // Handle token returned from backend OAuth callback
        this._handleOAuthCallback();

        // Google login button
        const btn = document.getElementById('btn-google-login');
        if (btn) {
            btn.addEventListener('click', () => this.loginWithGoogle());
        }
    },

    loginWithGoogle() {
        // Redirect to backend which triggers the Google OAuth flow
        window.location.href = `${this.BACKEND}/api/auth/google`;
    },

    /**
     * After Google redirects back to frontend, the URL will look like:
     *   http://localhost:5500?token=xxx&onboarded=true
     * Read the token, store it, then clean the URL.
     */
    _handleOAuthCallback() {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const onboarded = params.get('onboarded');
        const error = params.get('error');

        if (error) {
            showToast('Google sign-in failed. Please try again.', 'error');
            // Clean URL
            history.replaceState({}, '', window.location.pathname);
            return;
        }

        if (token) {
            // Store auth token
            localStorage.setItem('mymacros_token', token);

            // If backend says user is already onboarded, set flag IMMEDIATELY
            // so App.init() doesn't show onboarding during the async profile fetch
            if (onboarded === 'true') {
                Storage.setOnboarded(true);
            }

            // Clean URL (remove token from browser history for security)
            history.replaceState({}, '', window.location.pathname);

            // Fetch full user profile from backend and merge into localStorage
            this._fetchAndStoreProfile(token, onboarded === 'true');
        }
    },

    async _fetchAndStoreProfile(token, onboarded) {
        try {
            const res = await fetch(`${this.BACKEND}/api/auth/me`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (!res.ok) throw new Error('Failed to fetch profile');

            const { user } = await res.json();

            // Store in localStorage (keeps the app working offline too)
            Storage.saveUser({
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                age: user.age,
                gender: user.gender,
                height: user.height,
                weight: user.weight,
                goal: user.goal,
                activityLevel: user.activityLevel
            });

            // Determine onboarded status from backend profile data
            // (covers the case where user completed onboarding on another device/domain)
            const isActuallyOnboarded = !!(user.age && user.weight && user.height);
            if (isActuallyOnboarded) onboarded = true;

            // Restore macro targets from DB, or auto-calculate from profile
            try {
                const targetsRes = await fetch(`${this.BACKEND}/api/user/targets`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (targetsRes.ok) {
                    const { targets } = await targetsRes.json();
                    if (targets && targets.isManual) {
                        // User manually set their targets — use those
                        Storage.saveTargets({
                            calories: targets.calories,
                            protein:  targets.protein,
                            carbs:    targets.carbs,
                            fat:      targets.fat,
                            fiber:    targets.fiber
                        });
                    } else if (isActuallyOnboarded) {
                        // No manual targets in DB, but user has profile — auto-calculate
                        const autoTargets = CalorieCalc.generateTargets({
                            age: user.age,
                            gender: user.gender,
                            height: user.height,
                            weight: user.weight,
                            goal: user.goal,
                            activity: user.activityLevel
                        });
                        Storage.saveTargets(autoTargets);
                    }
                }
            } catch (_) { /* non-critical — targets will be auto-calculated if missing */ }

            // Cloud Data Migration & Sync
            try {
                await this._syncLocalToCloud(token);
                await this._pullCloudToLocal(token);
            } catch (err) {
                console.error('Data sync failed:', err);
            }

            if (onboarded) {
                Storage.setOnboarded(true);
                App.navigateTo('dashboard');
                if (typeof NotificationManager !== 'undefined') NotificationManager.init();
            } else {
                // New user — go through onboarding
                App.showScreen('onboarding');
            }

        } catch (err) {
            console.error('Profile fetch error:', err);
            // Fallback: allow app to proceed if profile fetch fails
            App.showScreen('onboarding');
        }
    },

    async _syncLocalToCloud(token) {
        if (localStorage.getItem('mymacros_migrated')) return;

        // Push local weights up
        const weights = Storage.getWeights();
        if (weights && weights.length > 0) {
            await fetch(`${this.BACKEND}/api/weights/bulk`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({ entries: weights })
            });
        }

        // Push local logs up
        const logs = Storage.getLogs();
        const dates = Object.keys(logs);
        for (const date of dates) {
            const entries = logs[date];
            if (entries && entries.length > 0) {
                await fetch(`${this.BACKEND}/api/logs/${date}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                    body: JSON.stringify({ entries })
                });
            }
        }

        localStorage.setItem('mymacros_migrated', 'true');
    },

    async _pullCloudToLocal(token) {
        // Fetch Weights from cloud
        const weightRes = await fetch(`${this.BACKEND}/api/weights`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (weightRes.ok) {
            const { entries } = await weightRes.json();
            if (entries && entries.length > 0) localStorage.setItem(Storage.KEYS.WEIGHTS, JSON.stringify(entries));
        }

        // Fetch Logs from cloud (Last 365 days)
        const toDate = new Date();
        const fromDate = new Date();
        fromDate.setDate(fromDate.getDate() - 365);
        
        const logsRes = await fetch(`${this.BACKEND}/api/logs/range?from=${window.getLocalISODate(fromDate)}&to=${window.getLocalISODate(toDate)}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (logsRes.ok) {
            const { logs } = await logsRes.json();
            if (logs) {
                const localLogsFormat = Storage.getLogs(); // merge format
                logs.forEach(dayLog => {
                    localLogsFormat[dayLog.date] = dayLog.entries;
                });
                localStorage.setItem(Storage.KEYS.LOGS, JSON.stringify(localLogsFormat));
            }
        }
    }
};
