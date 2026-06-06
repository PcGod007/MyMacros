/**
 * MyMacros — Insights & Body Analysis Screen
 */
const InsightsScreen = {
    selectedRange: 'week',
    healthScoreOffsetDays: 0,

    init() {
        // Time range toggle
        document.querySelectorAll('.range-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.range-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.selectedRange = btn.dataset.range;
                this.refresh();
            });
        });

        // Health score date toggle
        const hsPrev = document.getElementById('hs-date-prev');
        const hsNext = document.getElementById('hs-date-next');
        if (hsPrev) hsPrev.addEventListener('click', () => {
            if (this.healthScoreOffsetDays > -3) {
                this.healthScoreOffsetDays--;
                this._fetchAndRenderHealthScore();
            }
        });
        if (hsNext) hsNext.addEventListener('click', () => {
            if (this.healthScoreOffsetDays < 0) {
                this.healthScoreOffsetDays++;
                this._fetchAndRenderHealthScore();
            }
        });
    },


    show() {
        this.refresh();
    },

    async refresh() {
        const user = Storage.getUser();
        const targets = Storage.getTargets();
        if (!user || !targets) return;

        const loggedDays = Storage.getLoggedDaysCount();
        const banner = document.getElementById('maturation-banner');
        if (loggedDays < 7) {
            banner.classList.remove('hidden');
            document.getElementById('maturation-days').textContent = 7 - loggedDays;
        } else {
            banner.classList.add('hidden');
        }

        let days;
        switch (this.selectedRange) {
            case 'month': days = 30; break;
            case 'year': days = 365; break;
            default: days = 7;
        }

        // --- Fetch from Backend or Fallback ---
        let trends = null;
        let streakData = null;
        let summaryData = null;
        const token = localStorage.getItem('mymacros_token');

        if (token) {
            try {
                const [trendRes, streakRes, summaryRes] = await Promise.all([
                    fetch(`${CONFIG.BACKEND_URL}/api/insights/trends?metric=calories&range=${days}`, { headers: { 'Authorization': `Bearer ${token}` } }),
                    fetch(`${CONFIG.BACKEND_URL}/api/insights/streak`, { headers: { 'Authorization': `Bearer ${token}` } }),
                    fetch(`${CONFIG.BACKEND_URL}/api/insights/summary?range=${days}`, { headers: { 'Authorization': `Bearer ${token}` } })
                ]);
                if (trendRes.ok) trends = await trendRes.json();
                if (streakRes.ok) streakData = await streakRes.json();
                if (summaryRes.ok) summaryData = await summaryRes.json();
            } catch (err) {
                console.warn("Insights API failed, using local fallback", err);
            }
        }

        // ─── Calorie Chart ──────────────────
        let calValues, calLabels, calTargets;

        if (trends && trends.points) {
            calValues = trends.points.map(p => p.value || 0);
            calLabels = trends.points.map(p => {
                const date = new Date(p.date);
                if (days <= 7) return date.toLocaleDateString('en-IN', { weekday: 'short' }).charAt(0);
                if (days <= 30) return date.getDate().toString();
                return date.toLocaleDateString('en-IN', { month: 'short' }).slice(0, 1);
            });
            calTargets = trends.points.map(() => targets.calories);
        } else {
            // Local Fallback
            const dateRange = Storage.getDateRange(days);
            calValues = dateRange.map(d => Math.round(Storage.getDayTotals(d).calories));
            calLabels = dateRange.map(d => {
                const date = new Date(d);
                if (days <= 7) return date.toLocaleDateString('en-IN', { weekday: 'short' }).charAt(0);
                if (days <= 30) return date.getDate().toString();
                return date.toLocaleDateString('en-IN', { month: 'short' }).slice(0, 1);
            });
            calTargets = dateRange.map(() => targets.calories);
        }

        setTimeout(() => {
            ChartComponent.drawBarChart('chart-calories', {}, { values: calValues, targets: calTargets, labels: calLabels });
        }, 100);

        // ─── Macro Donut ────────────────────
        let avgP = 0, avgC = 0, avgF = 0, avgFi = 0;
        let showDonut = false;

        if (summaryData && summaryData.daysLogged > 0) {
            avgP = summaryData.averages.protein;
            avgC = summaryData.averages.carbs;
            avgF = summaryData.averages.fat;
            avgFi = summaryData.averages.fiber;
            showDonut = true;
        } else {
            // Local Fallback
            const weekDates = Storage.getDateRange(7);
            let tP=0, tC=0, tF=0, tFi=0, d=0;
            weekDates.forEach(date => {
                const t = Storage.getDayTotals(date);
                if (t.calories > 0) { d++; tP+=t.protein; tC+=t.carbs; tF+=t.fat; tFi+=t.fiber; }
            });
            if (d > 0) {
                avgP = Math.round(tP/d); avgC = Math.round(tC/d); avgF = Math.round(tF/d); avgFi = Math.round(tFi/d);
                showDonut = true;
            }
        }

        if (showDonut) {
            const cs = getComputedStyle(document.documentElement);
            const totalGrams = avgP + avgC + avgF + avgFi;
            const donutValEl = document.getElementById('donut-total-val');
            if (donutValEl) {
                donutValEl.textContent = totalGrams + 'g';
            }
            setTimeout(() => {
                ChartComponent.drawDonut('chart-macros', [
                    { label: 'Protein', value: avgP, color: cs.getPropertyValue('--protein').trim() },
                    { label: 'Carbs', value: avgC, color: cs.getPropertyValue('--carbs').trim() },
                    { label: 'Fats', value: avgF, color: cs.getPropertyValue('--fats').trim() },
                    { label: 'Fiber', value: avgFi, color: cs.getPropertyValue('--fiber').trim() }
                ], { hideCenterText: true });
            }, 200);

            document.getElementById('macro-split-legend').innerHTML = `
                <div class="legend-row"><span class="legend-dot" style="background:var(--protein)"></span> Protein <strong>${avgP}g</strong></div>
                <div class="legend-row"><span class="legend-dot" style="background:var(--carbs)"></span> Carbs <strong>${avgC}g</strong></div>
                <div class="legend-row"><span class="legend-dot" style="background:var(--fats)"></span> Fats <strong>${avgF}g</strong></div>
                <div class="legend-row"><span class="legend-dot" style="background:var(--fiber)"></span> Fiber <strong>${avgFi}g</strong></div>
            `;
        }

        // ─── Streak ─────────────────────────
        const streak = streakData ? streakData.current : Storage.getStreak();
        document.getElementById('streak-count').textContent = streak;
        
        const flameIcon = document.querySelector('.streak-fire-icon');
        if (flameIcon) {
            if (streak >= 1) flameIcon.classList.remove('hidden');
            else flameIcon.classList.add('hidden');
        }

        const streakMsg = document.getElementById('streak-msg');
        if (streak === 0) streakMsg.textContent = "Start logging to build your streak!";
        else if (streak < 3) streakMsg.textContent = "Great start! Keep it going.";
        else if (streak < 7) streakMsg.textContent = "Consistency is key!";
        else if (streak < 14) streakMsg.textContent = "One week strong! Incredible!";
        else if (streak < 30) streakMsg.textContent = "You're on fire!";
        else streakMsg.textContent = "Legendary consistency! You're unstoppable!";

        // ─── Body Analysis ──────────────────
        const analysis = BodyCalc.analyze(user);

        // SMM / BFM
        document.getElementById('smm-val').textContent = analysis.smm;
        document.getElementById('bfm-val').textContent = analysis.bfm;
        const smmPct = (analysis.smm / (analysis.smm + analysis.bfm)) * 100;
        document.getElementById('smm-portion').style.width = smmPct + '%';
        document.getElementById('bfm-portion').style.width = (100 - smmPct) + '%';

        // BMI
        document.getElementById('bmi-val').textContent = analysis.bmi;
        document.getElementById('bmi-category').textContent = analysis.bmiCategory.label;
        document.getElementById('bmi-category').style.color = analysis.bmiCategory.color;
        document.getElementById('bmi-marker').style.left = analysis.bmiCategory.position + '%';

        // PBF
        document.getElementById('pbf-val').textContent = analysis.pbf;
        const pbfPct = Math.min((analysis.pbf / 40) * 100, 100);
        document.getElementById('pbf-fill').style.width = pbfPct + '%';
        document.getElementById('pbf-fill').style.background = analysis.pbfStatus.color;
        document.getElementById('pbf-status').textContent = analysis.pbfStatus.label;
        document.getElementById('pbf-status').style.color = analysis.pbfStatus.color;

        // ─── Weight Trend ───────────────────
        const weights = Storage.getWeights() || [];
        const wLabels = weights.map(w => {
            const d = new Date(w.date);
            return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
        });
        const wValues = weights.map(w => w.weight);

        const cs = getComputedStyle(document.documentElement);
        setTimeout(() => {
            ChartComponent.drawLineChart('chart-weight', {}, {
                labels: wLabels,
                values: wValues,
                lineColor: cs.getPropertyValue('--protein').trim()
            });
        }, 300);

        // ─── Health Score ────────────────────
        this._fetchAndRenderHealthScore();
    },

    async _fetchAndRenderHealthScore() {
        const token = localStorage.getItem('mymacros_token');
        const scoreCard = document.getElementById('health-score-card');
        if (!scoreCard) return;

        // Always hide if not logged in
        if (!token) { scoreCard.style.display = 'none'; return; }

        // Always show the card & display a loading state first
        // (prevents a previous failure from permanently hiding it)
        scoreCard.style.display = '';

        try {
            const dateObj = new Date();
            dateObj.setDate(dateObj.getDate() + this.healthScoreOffsetDays);
            const y = dateObj.getFullYear();
            const m = String(dateObj.getMonth() + 1).padStart(2, '0');
            const d = String(dateObj.getDate()).padStart(2, '0');
            const dateStr = `${y}-${m}-${d}`;

            const hsNext = document.getElementById('hs-date-next');
            const hsPrev = document.getElementById('hs-date-prev');
            const hsDisplay = document.getElementById('hs-date-display');
            
            if (hsNext) {
                hsNext.style.opacity = this.healthScoreOffsetDays === 0 ? '0.3' : '1';
                hsNext.style.pointerEvents = this.healthScoreOffsetDays === 0 ? 'none' : 'auto';
            }
            if (hsPrev) {
                hsPrev.style.opacity = this.healthScoreOffsetDays === -3 ? '0.3' : '1';
                hsPrev.style.pointerEvents = this.healthScoreOffsetDays === -3 ? 'none' : 'auto';
            }
            if (hsDisplay) {
                if (this.healthScoreOffsetDays === 0) hsDisplay.textContent = 'Today';
                else if (this.healthScoreOffsetDays === -1) hsDisplay.textContent = 'Yesterday';
                else {
                    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                    hsDisplay.textContent = days[dateObj.getDay()];
                }
            }

            const [todayRes, historyRes] = await Promise.all([
                fetch(`${CONFIG.BACKEND_URL}/api/health-score/today?date=${dateStr}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                }),
                fetch(`${CONFIG.BACKEND_URL}/api/health-score/history?days=7`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                })
            ]);

            // 401 = not logged in → hide card
            if (todayRes.status === 401) { scoreCard.style.display = 'none'; return; }

            // Other non-OK (e.g. 500) → show graceful error, keep card visible
            if (!todayRes.ok) {
                const barsEl = document.getElementById('health-score-bars');
                const flagsEl = document.getElementById('health-score-flags');
                const scoreNum = document.getElementById('health-score-number');
                if (scoreNum) scoreNum.textContent = '—';
                if (barsEl) barsEl.innerHTML = '<p style="color:var(--text-tertiary);font-size:0.8rem;">Could not load score. Log meals to generate one.</p>';
                if (flagsEl) flagsEl.innerHTML = '';
                return;
            }

            const today = await todayRes.json();

            // Animate ring
            const circumference = 175.9;
            const offset = circumference - (circumference * (today.overall / 100));
            const ringFill = document.getElementById('health-ring-fill');
            const scoreNum = document.getElementById('health-score-number');

            if (ringFill) {
                const score = today.overall || 0;
                const color = score >= 75 ? 'var(--success)'
                            : score >= 50 ? 'var(--carbs)'
                            : 'var(--error)';
                const resolvedColor = score >= 75 ? '#4ade80'
                                    : score >= 50 ? '#ffbe3a'
                                    : '#ff6a6a';
                ringFill.style.stroke = color;
                ringFill.style.strokeDashoffset = offset;
                const svgEl = ringFill.closest('svg');
                if (svgEl) {
                    if (score > 0) {
                        svgEl.style.filter = `drop-shadow(0 0 6px ${resolvedColor}99) drop-shadow(0 0 12px ${resolvedColor}44)`;
                    } else {
                        svgEl.style.filter = 'none';
                    }
                }
            }
            if (scoreNum) {
                // Animate number with sound effects
                const endScore = today.overall || 0;
                let startScore = 0;
                const startTime = performance.now();
                const duration = 600;

                function updateScoreNum(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = Math.round(startScore + (endScore - startScore) * eased);
                    
                    if (current !== parseInt(scoreNum.textContent || '0')) {
                        if (typeof SoundFX !== 'undefined' && current > 0) {
                            SoundFX.playRingTick(current);
                        }
                        scoreNum.textContent = current;
                    }

                    if (progress < 1) {
                        requestAnimationFrame(updateScoreNum);
                    }
                }
                requestAnimationFrame(updateScoreNum);
            }

            // Component bars
            const barsEl = document.getElementById('health-score-bars');
            if (barsEl && today.components) {
                const comp = today.components;
                const rows = [
                    { label: 'Protein',      key: 'protein',      color: 'var(--protein)' },
                    { label: 'Calories',     key: 'calories',     color: 'var(--carbs)'   },
                    { label: 'Fiber',        key: 'fiber',        color: 'var(--fiber)'   },
                    { label: 'Macro Balance',key: 'macroBalance', color: 'var(--fats)'    },
                    { label: 'Diversity',    key: 'diversity',    color: '#9b59b6'        },
                ];
                barsEl.innerHTML = rows.map(r => `
                    <div class="hs-bar-row">
                        <span class="hs-bar-label">${r.label}</span>
                        <div class="hs-bar-track">
                            <div class="hs-bar-fill" style="width:${comp[r.key] || 0}%;background:${r.color}"></div>
                        </div>
                        <span class="hs-bar-val">${comp[r.key] || 0}</span>
                    </div>`).join('');
            }

            // Flags
            const flagsEl = document.getElementById('health-score-flags');
            if (flagsEl && today.flags?.length) {
                flagsEl.innerHTML = today.flags.map(f =>
                    `<div class="hs-flag"><span class="material-icons-round" style="font-size:14px;color:var(--carbs)">lightbulb</span> ${f}</div>`
                ).join('');
            } else if (flagsEl) {
                flagsEl.innerHTML = '<div class="hs-flag" style="color:var(--success)"><span class="material-icons-round" style="font-size:14px">check_circle</span> Great nutrition today!</div>';
            }

        } catch (_) {
            // Network error (Render sleeping, no internet, etc.)
            // Keep card visible with a soft error message — don't permanently hide it
            const barsEl = document.getElementById('health-score-bars');
            const flagsEl = document.getElementById('health-score-flags');
            const scoreNum = document.getElementById('health-score-number');
            if (scoreNum) scoreNum.textContent = '—';
            if (barsEl) barsEl.innerHTML = '<p style="color:var(--text-tertiary);font-size:0.8rem;margin:0;">Could not connect to server. Log meals and try again.</p>';
            if (flagsEl) flagsEl.innerHTML = '';
        }
    }
};
