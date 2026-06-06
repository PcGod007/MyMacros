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
     * Base ring fills to 100%, overflow ring shows the excess.
     * tipShadowId is a secondary element that provides the drop shadow ONLY at the leading tip.
     */
    animateWithOverflow(fillId, overflowId, percentage, circumference, duration = 800, tipShadowId = null) {
        const fillEl = document.getElementById(fillId);
        const overflowEl = document.getElementById(overflowId);
        const tipShadowEl = tipShadowId ? document.getElementById(tipShadowId) : null;
        
        if (!fillEl) return;

        // Base ring: cap at 100%
        const basePct = Math.min(percentage, 100);
        const baseOffset = circumference - (basePct / 100) * circumference;

        // Base ring animation
        fillEl.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        requestAnimationFrame(() => {
            fillEl.setAttribute('stroke-dashoffset', baseOffset);
        });

        // Overflow & Tip Shadow sequencing
        if (overflowEl) {
            if (percentage > 100) {
                const excessPct = Math.min(percentage - 100, 100);
                const overflowOffset = circumference - (excessPct / 100) * circumference;

                // Delay until base hits 100%
                setTimeout(() => {
                    const transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease`;
                    
                    if (tipShadowEl) {
                        tipShadowEl.style.transition = transition;
                        tipShadowEl.style.opacity = '1';
                        tipShadowEl.setAttribute('stroke-dashoffset', overflowOffset);
                    }

                    overflowEl.style.transition = transition;
                    requestAnimationFrame(() => {
                        overflowEl.style.opacity = '1';
                        overflowEl.setAttribute('stroke-dashoffset', overflowOffset);
                    });
                }, duration); 
            } else {
                if (tipShadowEl) {
                    tipShadowEl.style.opacity = '0';
                    tipShadowEl.setAttribute('stroke-dashoffset', circumference);
                }
                overflowEl.style.transition = 'opacity 0.3s ease';
                overflowEl.style.opacity = '0';
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
        let lastVal = start;

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (end - start) * eased);
            
            if (current !== lastVal) {
                // Play soft tick sound when the counter changes
                if (typeof SoundFX !== 'undefined' && current > lastVal) {
                    const percent = Math.min((current / 2000) * 100, 100); // normalized pitch scale
                    SoundFX.playRingTick(percent);
                }
                lastVal = current;
            }
            
            el.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }
};
