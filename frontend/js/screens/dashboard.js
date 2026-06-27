/**
 * MyMacros — Dashboard Screen (Daily Tracker)
 */
const DashboardScreen = {
    currentDate: new Date(),
    CALORIE_RING_CIRCUMFERENCE: 534, // 2 * π * 85

    init() {
        // Date navigation
        document.getElementById('date-prev').addEventListener('click', () => {
            if (typeof SoundFX !== 'undefined') SoundFX.playClick();
            this.changeDate(-1);
        });
        document.getElementById('date-next').addEventListener('click', () => {
            if (typeof SoundFX !== 'undefined') SoundFX.playClick();
            this.changeDate(1);
        });

        // Notification Menu Toggle
        const notifBtn = document.getElementById('btn-notification');
        const notifMenu = document.getElementById('notification-menu');
        
        notifBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const wasHidden = notifMenu.classList.contains('hidden');
            notifMenu.classList.toggle('hidden');
            if (wasHidden) {
                if (typeof SoundFX !== 'undefined') SoundFX.playBubble();
                this.updateNotificationDetails();
                // Mark water reminder as seen & hide badge
                Storage.setWaterReminderLastOpened();
                const waterBadge = document.getElementById('water-notification-badge');
                const waterExclaim = document.getElementById('notif-water-exclaim');
                if (waterBadge) waterBadge.classList.add('hidden');
                if (waterExclaim) waterExclaim.classList.add('hidden');
            } else {
                if (typeof SoundFX !== 'undefined') SoundFX.playClick();
            }
        });

        document.getElementById('btn-close-notifications').addEventListener('click', () => {
            if (typeof SoundFX !== 'undefined') SoundFX.playClick();
            notifMenu.classList.add('hidden');
        });

        document.getElementById('notif-weight-update').addEventListener('click', () => {
            if (typeof SoundFX !== 'undefined') SoundFX.playClick();
            notifMenu.classList.add('hidden');
            ProfileScreen.showWeightModal();
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!notifMenu.contains(e.target) && e.target !== notifBtn) {
                notifMenu.classList.add('hidden');
            }
        });

        // Copy Day
        document.getElementById('btn-copy-day').addEventListener('click', () => {
            if (typeof SoundFX !== 'undefined') SoundFX.playClick();
            const dateStr = this.getDateStr();
            const logs = Storage.getDayLog(dateStr);
            if(logs.length === 0) {
                showToast('No meals to copy today!', 'error');
                return;
            }
            sessionStorage.setItem('MyMacros_CopiedMeals', JSON.stringify({ type: 'day', entries: logs }));
            showToast('Day copied! Navigate to another date to paste.', 'content_copy');
            this.refresh(); // Refresh to show paste button immediately if staying on same page
        });

        // Paste Target Buttons
        document.querySelectorAll('.btn-paste-target').forEach(btn => {
            btn.addEventListener('click', () => {
                if (typeof SoundFX !== 'undefined') SoundFX.playClick();
                const copiedData = sessionStorage.getItem('MyMacros_CopiedMeals');
                if(!copiedData) return;

                const parsed = JSON.parse(copiedData);
                const logs = parsed.entries || (Array.isArray(parsed) ? parsed : []);
                const targetDateStr = this.getDateStr();
                const target = btn.dataset.target;

                logs.forEach(log => {
                    Storage.addFoodEntry(targetDateStr, {
                        foodId: log.foodId,
                        foodName: log.foodName,
                        serving: log.serving,
                        grams: log.grams,
                        meal: target === 'original' ? (log.meal || 'breakfast') : target,
                        macros: { ...log.macros }
                    });
                });

                sessionStorage.removeItem('MyMacros_CopiedMeals');
                const targetName = target === 'original' ? 'original slots' : (target.charAt(0).toUpperCase() + target.slice(1));
                showToast(`Pasted into ${targetName}!`, 'check_circle');
                this.refresh();
            });
        });

        // Cancel Paste
        document.getElementById('btn-cancel-paste')?.addEventListener('click', () => {
            if (typeof SoundFX !== 'undefined') SoundFX.playClick();
            sessionStorage.removeItem('MyMacros_CopiedMeals');
            showToast('Paste action cancelled', 'info');
            this.refresh();
        });
    },

    show() {
        this.refresh();
        this._fetchHealthScore();
        this._fetchAdaptiveSuggestion();
    },

    refresh() {
        const user = Storage.getUser();
        const targets = Storage.getTargets();
        if (!user || !targets) return;

        // Greeting
        const hour = new Date().getHours();
        let greeting = 'Good morning';
        if (hour >= 12 && hour < 17) greeting = 'Good afternoon';
        else if (hour >= 17) greeting = 'Good evening';
        document.getElementById('dashboard-greeting').textContent = greeting + ',';
        document.getElementById('dashboard-name').textContent = user.name || 'User';

        // Date display
        this.updateDateDisplay();

        // Check if weight notification is needed
        this.checkWeightFrequency();

        // Check if water reminder should show
        this.checkWaterReminder();

        // Get today's data
        const dateStr = this.getDateStr();
        const totals = Storage.getDayTotals(dateStr);
        const dayLogs = Storage.getDayLog(dateStr);

        // Update calorie ring (with overflow + tip shadow)
        const calPct = (totals.calories / targets.calories) * 100;
        ProgressRing.animateWithOverflow('calorie-ring-fill', 'calorie-ring-overflow', calPct, this.CALORIE_RING_CIRCUMFERENCE, 800, 'calorie-ring-tip-shadow');
        ProgressRing.animateNumber('calorie-eaten', 0, Math.round(totals.calories));

        const remaining = Math.max(targets.calories - Math.round(totals.calories), 0);
        document.getElementById('calorie-remaining').textContent = remaining + ' kcal left';

        // Update ring color based on percentage
        const ringFill = document.getElementById('calorie-ring-fill');
        const ringOverflow = document.getElementById('calorie-ring-overflow');
        if (calPct > 100) {
            ringFill.style.stroke = 'var(--error)';
            if (ringOverflow) ringOverflow.style.stroke = 'var(--error)';
        } else if (calPct > 85) {
            ringFill.style.stroke = 'var(--carbs)';
            if (ringOverflow) ringOverflow.style.stroke = 'var(--carbs)';
        } else {
            ringFill.style.stroke = 'var(--protein)';
            if (ringOverflow) ringOverflow.style.stroke = 'var(--protein)';
        }

        // Update macro bars
        this.updateMacroBar('protein', totals.protein, targets.protein);
        this.updateMacroBar('carbs', totals.carbs, targets.carbs);
        this.updateMacroBar('fat', totals.fat, targets.fat);
        this.updateMacroBar('fiber', totals.fiber, targets.fiber);

        // Summary text
        const summaryEl = document.getElementById('daily-summary-text');
        if (dayLogs.length === 0) {
            summaryEl.textContent = "No meals logged yet. Let's start!";
        } else if (calPct < 50) {
            summaryEl.textContent = "You're just getting started today.";
        } else if (calPct < 85) {
            summaryEl.textContent = "You're on track for today.";
        } else if (calPct <= 100) {
            summaryEl.textContent = "Almost at your daily target!";
        } else {
            summaryEl.textContent = "You've exceeded your daily target.";
        }

        // Render meal cards
        const logsWithDate = dayLogs.map(l => ({ ...l, date: dateStr }));
        MealCard.render('meal-slots', logsWithDate,
            (mealType) => {
                SearchScreen.setMealType(mealType);
                App.navigateTo('search');
            },
            (entry) => {
                // Edit mode: open the global food modal directly on the dashboard
                SearchScreen.openEditModal(entry);
            },
            (mealId, mealLabel, entries) => {
                if (typeof SoundFX !== 'undefined') SoundFX.playClick();
                if (!entries || entries.length === 0) {
                    showToast(`No items in ${mealLabel} to copy!`, 'error');
                    return;
                }
                sessionStorage.setItem('MyMacros_CopiedMeals', JSON.stringify({ type: 'section', label: mealLabel, entries }));
                showToast(`${mealLabel} copied! Tap "Paste to…" on any meal card.`, 'content_copy');
                this.refresh();
            },
            (targetMealId, targetMealLabel) => {
                if (typeof SoundFX !== 'undefined') SoundFX.playClick();
                const raw = sessionStorage.getItem('MyMacros_CopiedMeals');
                if (!raw) return;
                const parsed = JSON.parse(raw);
                const entriesToPaste = parsed.entries || (Array.isArray(parsed) ? parsed : []);
                const targetDateStr = this.getDateStr();

                entriesToPaste.forEach(log => {
                    Storage.addFoodEntry(targetDateStr, {
                        foodId: log.foodId,
                        foodName: log.foodName,
                        serving: log.serving,
                        grams: log.grams,
                        meal: targetMealId, // Paste into targeted meal section!
                        macros: { ...log.macros }
                    });
                });

                sessionStorage.removeItem('MyMacros_CopiedMeals');
                showToast(`Pasted into ${targetMealLabel}!`, 'check_circle');
                this.refresh();
            }
        );

        // Show paste button container if needed
        const pasteContainer = document.getElementById('paste-meals-container');
        const rawCopied = sessionStorage.getItem('MyMacros_CopiedMeals');
        if (rawCopied) {
            pasteContainer.classList.remove('hidden');
            const parsed = JSON.parse(rawCopied);
            const sourceLabel = document.getElementById('paste-source-label');
            if (sourceLabel) {
                const label = parsed.label || (parsed.type === 'day' ? 'Full Day' : 'Copied Meals');
                sourceLabel.textContent = `"${label}" ready to paste`;
            }
        } else {
            pasteContainer.classList.add('hidden');
        }
    },

    updateMacroBar(macro, current, target) {
        const pct = (current / target) * 100;
        
        // Small ring circumference = 2 * PI * 26 ≈ 163.36
        ProgressRing.animateWithOverflow(`macro-${macro}-fill`, `macro-${macro}-overflow`, pct, 163.36, 800, `macro-${macro}-tip-shadow`);
        
        const valDisplay = document.getElementById(`macro-${macro}-val-display`);
        if (valDisplay) {
            valDisplay.textContent = `${Math.round(current)}/${Math.round(target)}g`;
        }

        // Badge logic
        const badge = document.getElementById(`macro-${macro}-badge`);
        if (badge) {
            badge.classList.add('hidden');
            badge.classList.remove('star', 'caution');
            badge.innerHTML = '';

            if (macro === 'protein' || macro === 'fiber') {
                // Good macros — show star when target is met
                if (current >= target && target > 0) {
                    badge.innerHTML = '<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
                    badge.classList.add('star');
                    badge.classList.remove('hidden');
                }
            } else if (macro === 'carbs' || macro === 'fat') {
                // Watch macros — show caution when 10g+ over target
                if (current > target + 10) {
                    badge.innerHTML = '<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>';
                    badge.classList.add('caution');
                    badge.classList.remove('hidden');
                }
            }
        }
    },

    checkWeightFrequency() {
        const badge = document.getElementById('weight-notification-badge');
        if (!badge) return;
        
        const weights = Storage.getWeights();
        if (weights.length === 0) {
            badge.classList.remove('hidden');
            return;
        }

        const lastEntry = weights[weights.length - 1];
        const lastDate = new Date(lastEntry.date);
        const today = new Date();
        
        lastDate.setHours(0,0,0,0);
        today.setHours(0,0,0,0);
        
        const diffMs = today - lastDate;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        
        if (diffDays >= 7) {
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    },

    checkWaterReminder() {
        const TWO_HOURS_MS = 2 * 60 * 60 * 1000;
        const lastOpened = Storage.getWaterReminderLastOpened();
        const now = Date.now();
        const waterBadge = document.getElementById('water-notification-badge');
        const waterExclaim = document.getElementById('notif-water-exclaim');
        const waterDesc = document.getElementById('notif-water-desc');

        if (now - lastOpened >= TWO_HOURS_MS) {
            // Time to remind!
            if (waterBadge) waterBadge.classList.remove('hidden');
            if (waterExclaim) waterExclaim.classList.remove('hidden');
            if (waterDesc) waterDesc.textContent = '💧 Time to hydrate! Drink a glass of water.';
        } else {
            if (waterBadge) waterBadge.classList.add('hidden');
            if (waterExclaim) waterExclaim.classList.add('hidden');
            const minsLeft = Math.ceil((TWO_HOURS_MS - (now - lastOpened)) / 60000);
            if (waterDesc) waterDesc.textContent = `Next reminder in ${minsLeft} min. Keep it up! 💪`;
        }
    },

    changeDate(delta) {
        this.currentDate.setDate(this.currentDate.getDate() + delta);
        this.refresh();
    },

    getDateStr() {
        return window.getLocalISODate(this.currentDate);
    },

    updateDateDisplay() {
        const display = document.getElementById('date-display');
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const current = new Date(this.currentDate);
        current.setHours(0, 0, 0, 0);
        const diff = Math.round((today - current) / (1000 * 60 * 60 * 24));

        if (diff === 0) display.textContent = 'Today';
        else if (diff === 1) display.textContent = 'Yesterday';
        else if (diff === -1) display.textContent = 'Tomorrow';
        else {
            display.textContent = this.currentDate.toLocaleDateString('en-IN', {
                day: 'numeric', month: 'short'
            });
        }

        // Disable future dates
        document.getElementById('date-next').disabled = diff <= 0;
    },

    updateNotificationDetails() {
        const statusEl = document.getElementById('notif-weight-last-updated');
        if (!statusEl) return;

        const weights = Storage.getWeights();
        if (weights.length === 0) {
            statusEl.textContent = 'No records found. Setup now!';
            return;
        }

        const lastEntry = weights[weights.length - 1];
        const lastDate = new Date(lastEntry.date);
        const today = new Date();
        
        lastDate.setHours(0,0,0,0);
        today.setHours(0,0,0,0);
        
        const diffMs = today - lastDate;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffDays === 0) statusEl.textContent = 'Last updated: Today';
        else if (diffDays === 1) statusEl.textContent = 'Last updated: Yesterday';
        else statusEl.textContent = `Last updated: ${diffDays} days ago`;
    },

    async _fetchHealthScore() {
        const token = localStorage.getItem('mymacros_token');
        if (!token) return;
        try {
            const dateStr = this.getDateStr();
            const res = await fetch(`${CONFIG.BACKEND_URL}/api/health-score/today?date=${dateStr}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!res.ok) return;
            const data = await res.json();
            this._renderHealthChip(data.overall);
        } catch (_) { /* non-critical */ }
    },

    _renderHealthChip(score) {
        // Find or create a health chip in the calorie area
        let chip = document.getElementById('dash-health-chip');
        if (!chip) {
            chip = document.createElement('div');
            chip.id = 'dash-health-chip';
            chip.className = 'dash-health-chip';
            const ring = document.getElementById('calorie-ring-fill');
            if (ring) ring.closest('.calorie-ring-wrapper')?.appendChild(chip);
        }
        const color = score >= 75 ? 'var(--success)' : score >= 50 ? 'var(--carbs)' : 'var(--error)';
        chip.innerHTML = `<span class="material-icons-round" style="font-size:12px;color:${color}">favorite</span> <span style="color:${color};font-weight:700">${score}</span>`;
        chip.title = `Health Score: ${score}/100`;
    },

    async _fetchAdaptiveSuggestion() {
        const token = localStorage.getItem('mymacros_token');
        if (!token) return;
        try {
            const res = await fetch(`${CONFIG.BACKEND_URL}/api/adaptive/suggestion`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!res.ok) return;
            const data = await res.json();
            this._renderAdaptiveBanner(data.suggestion);
        } catch (_) { /* non-critical */ }
    },

    _renderAdaptiveBanner(suggestion) {
        const banner = document.getElementById('adaptive-banner');
        const badge = document.getElementById('adaptive-notification-badge');
        if (!banner) return;
        if (!suggestion) { 
            banner.classList.add('hidden'); 
            if (badge) badge.classList.add('hidden');
            return; 
        }

        document.getElementById('adaptive-banner-reason').textContent = suggestion.reason;
        banner.classList.remove('hidden');
        if (badge) badge.classList.remove('hidden');

        // Wire up Apply button
        const applyBtn = document.getElementById('adaptive-apply-btn');
        const newApply = applyBtn.cloneNode(true);
        applyBtn.parentNode.replaceChild(newApply, applyBtn);
        newApply.addEventListener('click', async () => {
            if (typeof SoundFX !== 'undefined') SoundFX.playClick();
            const token = localStorage.getItem('mymacros_token');
            try {
                const res = await fetch(`${CONFIG.BACKEND_URL}/api/adaptive/apply`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                    body: JSON.stringify({ newCalories: suggestion.newCalories })
                });
                if (res.ok) {
                    const { targets } = await res.json();
                    // Update local targets
                    const user = Storage.getUser();
                    if (user) Storage.saveTargets({ ...Storage.getTargets(), ...targets });
                    banner.classList.add('hidden');
                    if (badge) badge.classList.add('hidden');
                    showToast(`Target updated to ${Math.round(suggestion.newCalories)} kcal`, 'check_circle');
                    this.refresh();
                }
            } catch (_) { showToast('Could not apply suggestion', 'error'); }
        });

        // Wire up Dismiss button
        const dismissBtn = document.getElementById('adaptive-dismiss-btn');
        const newDismiss = dismissBtn.cloneNode(true);
        dismissBtn.parentNode.replaceChild(newDismiss, dismissBtn);
        newDismiss.addEventListener('click', async () => {
            if (typeof SoundFX !== 'undefined') SoundFX.playClick();
            const token = localStorage.getItem('mymacros_token');
            await fetch(`${CONFIG.BACKEND_URL}/api/adaptive/dismiss`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }
            }).catch(() => {});
            banner.classList.add('hidden');
            if (badge) badge.classList.add('hidden');
        });
    }
};

