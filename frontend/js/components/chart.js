/**
 * MyMacros — Lightweight Canvas Chart Component
 * Bar charts, line charts, and donut charts
 */
const ChartComponent = {

    /**
     * Draw a bar chart (calories vs target)
     */
    drawBarChart(canvasId, data, options = {}) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;

        // Set canvas size
        canvas.width = canvas.offsetWidth * dpr;
        canvas.height = canvas.offsetHeight * dpr;
        ctx.scale(dpr, dpr);

        const w = canvas.offsetWidth;
        const h = canvas.offsetHeight;

        const {
            barColor = 'var(--protein)',
            targetColor = 'rgba(128,128,128,0.3)',
            labels = [],
            values = [],
            targets = [],
            maxVal = null
        } = options;

        const padding = { top: 10, right: 10, bottom: 30, left: 10 };
        const chartW = w - padding.left - padding.right;
        const chartH = h - padding.top - padding.bottom;
        const barCount = values.length;
        if (barCount === 0) return;

        const barSpacing = chartW / barCount;
        const barWidth = Math.min(barSpacing * 0.5, 28);
        const max = maxVal || Math.max(...values, ...targets) * 1.15;

        // Get computed colors
        const cs = getComputedStyle(document.documentElement);
        const primaryColor = cs.getPropertyValue('--protein').trim() || '#0546ed';
        const textColor = cs.getPropertyValue('--text-tertiary').trim() || '#888';

        ctx.clearRect(0, 0, w, h);

        const step = Math.max(1, Math.floor(values.length / 7));

        values.forEach((val, i) => {
            const x = padding.left + (i * barSpacing) + (barSpacing - barWidth) / 2;
            const barH = (val / max) * chartH;
            const y = padding.top + chartH - barH;

            // Target line (dashed)
            if (targets[i]) {
                const targetY = padding.top + chartH - (targets[i] / max) * chartH;
                ctx.strokeStyle = textColor;
                ctx.lineWidth = 1;
                ctx.setLineDash([3, 3]);
                ctx.beginPath();
                ctx.moveTo(x - 2, targetY);
                ctx.lineTo(x + barWidth + 2, targetY);
                ctx.stroke();
                ctx.setLineDash([]);
            }

            // Bar
            const gradient = ctx.createLinearGradient(x, y, x, y + barH);
            gradient.addColorStop(0, primaryColor);
            gradient.addColorStop(1, primaryColor + '88');
            ctx.fillStyle = gradient;

            // Rounded top
            const r = Math.min(barWidth / 2, 6);
            ctx.beginPath();
            ctx.moveTo(x, y + barH);
            ctx.lineTo(x, y + r);
            ctx.quadraticCurveTo(x, y, x + r, y);
            ctx.lineTo(x + barWidth - r, y);
            ctx.quadraticCurveTo(x + barWidth, y, x + barWidth, y + r);
            ctx.lineTo(x + barWidth, y + barH);
            ctx.closePath();
            ctx.fill();

            // Shadow/glow
            ctx.shadowColor = primaryColor + '33';
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;

            // Label
            if (labels[i] && (i % step === 0 || i === values.length - 1)) {
                ctx.fillStyle = textColor;
                ctx.font = '500 9px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(labels[i], x + barWidth / 2, h - 8);
            }
        });
    },

    /**
     * Draw a line chart (weight trend, composition)
     */
    drawLineChart(canvasId, data, options = {}) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;

        canvas.width = canvas.offsetWidth * dpr;
        canvas.height = canvas.offsetHeight * dpr;
        ctx.scale(dpr, dpr);

        const w = canvas.offsetWidth;
        const h = canvas.offsetHeight;

        const {
            lineColor = '#0546ed',
            labels = [],
            values = [],
            fillBelow = true
        } = options;

        const padding = { top: 15, right: 15, bottom: 30, left: 15 };
        const chartW = w - padding.left - padding.right;
        const chartH = h - padding.top - padding.bottom;

        if (values.length < 2) {
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-tertiary').trim();
            ctx.font = '400 13px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Not enough data yet', w / 2, h / 2);
            return;
        }

        const min = Math.min(...values) * 0.95;
        const max = Math.max(...values) * 1.05;
        const range = max - min || 1;

        const cs = getComputedStyle(document.documentElement);
        const textColor = cs.getPropertyValue('--text-tertiary').trim() || '#888';

        ctx.clearRect(0, 0, w, h);

        // Build points
        const points = values.map((v, i) => ({
            x: padding.left + (i / (values.length - 1)) * chartW,
            y: padding.top + chartH - ((v - min) / range) * chartH
        }));

        // Fill below
        if (fillBelow) {
            ctx.beginPath();
            ctx.moveTo(points[0].x, padding.top + chartH);
            points.forEach(p => ctx.lineTo(p.x, p.y));
            ctx.lineTo(points[points.length - 1].x, padding.top + chartH);
            ctx.closePath();
            const gradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartH);
            gradient.addColorStop(0, lineColor + '30');
            gradient.addColorStop(1, lineColor + '05');
            ctx.fillStyle = gradient;
            ctx.fill();
        }

        // Line
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            const xc = (points[i - 1].x + points[i].x) / 2;
            const yc = (points[i - 1].y + points[i].y) / 2;
            ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
        }
        ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Dots
        points.forEach((p, i) => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
            ctx.fillStyle = lineColor;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.fill();
        });

        // Labels
        const step = Math.max(1, Math.floor(labels.length / 7));
        labels.forEach((label, i) => {
            if (i % step === 0 || i === labels.length - 1) {
                ctx.fillStyle = textColor;
                ctx.font = '500 9px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(label, points[i].x, h - 6);
            }
        });
    },

    /**
     * Draw a donut chart (macro split)
     */
    drawDonut(canvasId, segments, options = {}) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;

        canvas.width = canvas.offsetWidth * dpr;
        canvas.height = canvas.offsetHeight * dpr;
        ctx.scale(dpr, dpr);

        const w = canvas.offsetWidth;
        const h = canvas.offsetHeight;
        const cx = w / 2;
        const cy = h / 2;
        const radius = Math.min(w, h) / 2 - 16;
        const innerRadius = radius * 0.6;

        const total = segments.reduce((acc, s) => acc + s.value, 0);
        if (total === 0) return;

        const cs = getComputedStyle(document.documentElement);
        const textColor = cs.getPropertyValue('--text-primary').trim() || '#272e42';
        const subTextColor = cs.getPropertyValue('--text-secondary').trim() || '#535b71';

        const { animate = true, duration = 1000 } = options;
        const startTime = Date.now();

        const drawFrame = () => {
            const elapsed = Date.now() - startTime;
            let progress = animate ? Math.min(elapsed / duration, 1) : 1;
            
            // easeOutQuart for smooth deceleration
            const easeProgress = 1 - Math.pow(1 - progress, 4);

            ctx.clearRect(0, 0, w, h);

            let startAngle = -Math.PI / 2;

            segments.forEach(seg => {
                // Scale the slice angle by the easing progress
                const sliceAngle = (seg.value / total) * Math.PI * 2 * easeProgress;
                
                // Only draw if there's a visible slice
                if (sliceAngle > 0) {
                    ctx.beginPath();
                    ctx.arc(cx, cy, radius, startAngle, startAngle + sliceAngle);
                    ctx.arc(cx, cy, innerRadius, startAngle + sliceAngle, startAngle, true);
                    ctx.closePath();
                    ctx.fillStyle = seg.color;
                    ctx.fill();
                }
                startAngle += sliceAngle;
            });

            // Center text (animate the number)
            const currentTotal = Math.round(total * easeProgress);
            ctx.fillStyle = textColor;
            ctx.font = '700 18px Manrope, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(currentTotal + 'g', cx, cy + 3);
            ctx.font = '400 10px Inter, sans-serif';
            ctx.fillStyle = subTextColor;
            ctx.fillText('total', cx, cy + 18);

            if (progress < 1) {
                requestAnimationFrame(drawFrame);
            }
        };

        drawFrame();
    }
};
