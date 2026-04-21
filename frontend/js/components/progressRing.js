/**
 * MyMacros — SVG Progress Ring Component
 */
const ProgressRing = {
    /**
     * Animate a circular progress ring
     * @param {string} elementId - ID of the SVG circle element
     * @param {number} percentage - 0 to 100
     * @param {number} circumference - total circumference of the circle
     * @param {number} duration - animation duration in ms
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
     * Animate a number counting up
     * @param {string} elementId 
     * @param {number} start 
     * @param {number} end 
     * @param {number} duration 
     * @param {string} suffix 
     */
    animateNumber(elementId, start, end, duration = 600, suffix = '') {
        const el = document.getElementById(elementId);
        if (!el) return;

        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
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
