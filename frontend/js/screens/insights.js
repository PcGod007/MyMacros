/**
 * MyMacros — Insights & Body Analysis Screen
 */
const InsightsScreen = {
    selectedRange: 'week',

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
    },

    show() {
        this.refresh();
    },

    refresh() {
        const user = Storage.getUser();
        const targets = Storage.getTargets();
        if (!user || !targets) return;

        const loggedDays = Storage.getLoggedDaysCount();

        // Maturation banner
        const banner = document.getElementById('maturation-banner');
        if (loggedDays < 7) {
            banner.classList.remove('hidden');
            document.getElementById('maturation-days').textContent = 7 - loggedDays;
        } else {
            banner.classList.add('hidden');
        }

        // Get date range based on selection
        let days;
        switch (this.selectedRange) {
            case 'month': days = 30; break;
            case 'year': days = 365; break;
            default: days = 7;
        }

        const dateRange = Storage.getDateRange(days);

        // ─── Calorie Chart ──────────────────
        const calValues = dateRange.map(d => {
            const totals = Storage.getDayTotals(d);
            return Math.round(totals.calories);
        });

        const calLabels = dateRange.map(d => {
            const date = new Date(d);
            if (days <= 7) return date.toLocaleDateString('en-IN', { weekday: 'short' }).charAt(0);
            if (days <= 30) return date.getDate().toString();
            return date.toLocaleDateString('en-IN', { month: 'short' }).slice(0, 1);
        });

        const calTargets = dateRange.map(() => targets.calories);

        setTimeout(() => {
            ChartComponent.drawBarChart('chart-calories', {}, {
                values: calValues,
                targets: calTargets,
                labels: calLabels
            });
        }, 100);

        // ─── Macro Donut ────────────────────
        const weekDates = Storage.getDateRange(7);
        let totalP = 0, totalC = 0, totalF = 0, totalFi = 0;
        let daysWithData = 0;

        weekDates.forEach(d => {
            const t = Storage.getDayTotals(d);
            if (t.calories > 0) {
                daysWithData++;
                totalP += t.protein;
                totalC += t.carbs;
                totalF += t.fat;
                totalFi += t.fiber;
            }
        });

        if (daysWithData > 0) {
            const avgP = Math.round(totalP / daysWithData);
            const avgC = Math.round(totalC / daysWithData);
            const avgF = Math.round(totalF / daysWithData);
            const avgFi = Math.round(totalFi / daysWithData);

            const cs = getComputedStyle(document.documentElement);

            setTimeout(() => {
                ChartComponent.drawDonut('chart-macros', [
                    { label: 'Protein', value: avgP, color: cs.getPropertyValue('--protein').trim() },
                    { label: 'Carbs', value: avgC, color: cs.getPropertyValue('--carbs').trim() },
                    { label: 'Fats', value: avgF, color: cs.getPropertyValue('--fats').trim() },
                    { label: 'Fiber', value: avgFi, color: cs.getPropertyValue('--fiber').trim() }
                ]);
            }, 200);

            // Legend
            document.getElementById('macro-split-legend').innerHTML = `
                <div class="legend-row"><span class="legend-dot" style="background:var(--protein)"></span> Protein <strong>${avgP}g</strong></div>
                <div class="legend-row"><span class="legend-dot" style="background:var(--carbs)"></span> Carbs <strong>${avgC}g</strong></div>
                <div class="legend-row"><span class="legend-dot" style="background:var(--fats)"></span> Fats <strong>${avgF}g</strong></div>
                <div class="legend-row"><span class="legend-dot" style="background:var(--fiber)"></span> Fiber <strong>${avgFi}g</strong></div>
            `;
        }

        // ─── Streak ─────────────────────────
        const streak = Storage.getStreak();
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
    }
};
