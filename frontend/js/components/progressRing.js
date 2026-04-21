/**
 * MyMacros — SVG Progress Ring Component
 */
const ProgressRing = {
    /**
     * Animate a circular progress ring (capped at 100%)
     */
    animate(elementId, percentage, circumference, duration = 800) {
        const el = document.getElementById(elementId);
        if (!el) return;

        const capped = Math.min(percentage, 100);
        const offset = circumference - (capped / 100) * circumference;

        el.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        requestAnimationFrame(() => {
            el.setAttribute('stroke-dashoffset', offset);
        });
    },

    /**
     * Apple Activity Ring–style overlap when > 100%
     * Base ring fills to 100%, overflow ring shows the excess with shadow
     */
    animateWithOverflow(fillId, overflowId, percentage, circumference, duration = 800) {
        const fillEl = document.getElementById(fillId);
        const overflowEl = document.getElementById(overflowId);
        if (!fillEl) return;

        // Base ring: cap at 100%
        const basePct = Math.min(percentage, 100);
        const baseOffset = circumference - (basePct / 100) * circumference;

        fillEl.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        requestAnimationFrame(() => {
            fillEl.setAttribute('stroke-dashoffset', baseOffset);
        });

        // Overflow ring: only if > 100%
        if (overflowEl) {
            if (percentage > 100) {
                const excessPct = Math.min(percentage - 100, 100); // cap overlap at another full loop
                const overflowOffset = circumference - (excessPct / 100) * circumference;

                overflowEl.style.display = '';
                overflowEl.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
                // Slight delay so base fills first, then overlap appears on top
                setTimeout(() => {
                    requestAnimationFrame(() => {
                        overflowEl.setAttribute('stroke-dashoffset', overflowOffset);
                    });
                }, duration * 0.6);
            } else {
                overflowEl.style.display = 'none';
                overflowEl.setAttribute('stroke-dashoffset', circumference);
            }
        }
    },

    /**
     * Animate a number counting up
     */
    animateNumber(elementId, start, end, duration = 600, suffix = '') {
        const el = document.getElementById(elementId);
        if (!el) return;

        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (end - start) * eased);
            el.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }
};
