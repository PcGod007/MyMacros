/**
 * MyMacros — Body Composition Estimations
 * BMI, PBF, SMM, BFM calculations
 * Note: These are estimates, not clinical measurements
 */
const BodyCalc = {

    /**
     * Calculate BMI
     * @param {number} weight - kg
     * @param {number} height - cm
     * @returns {number} BMI value
     */
    calculateBMI(weight, height) {
        const heightM = height / 100;
        return weight / (heightM * heightM);
    },

    /**
     * Get BMI category
     * @param {number} bmi 
     * @returns {Object} { label, color, position }
     */
    getBMICategory(bmi) {
        if (bmi < 18.5) return { label: 'Underweight', color: '#64b5f6', position: (bmi / 40) * 100 };
        if (bmi < 25) return { label: 'Normal', color: '#4caf50', position: (bmi / 40) * 100 };
        if (bmi < 30) return { label: 'Overweight', color: '#ff9800', position: (bmi / 40) * 100 };
        return { label: 'Obese', color: '#f44336', position: Math.min((bmi / 40) * 100, 95) };
    },

    /**
     * Estimate Percent Body Fat using calibrated adult bioimpedance equation
     * Incorporates South Asian / modern adult body composition validation (Deurenberg-Yap et al. 2002)
     * Standard 1991 Deurenberg formula systematically underestimates body fat in Indian adults by ~4.2%
     * @param {number} bmi 
     * @param {number} age 
     * @param {string} gender 
     * @returns {number} PBF percentage
     */
    estimatePBF(bmi, age, gender) {
        const sexFactor = gender === 'male' ? 1 : 0;
        // South Asian / contemporary adult calibration (+4.2%)
        const ethnicOffset = 4.2;
        const pbf = (1.20 * bmi) + (0.23 * age) - (10.8 * sexFactor) - 5.4 + ethnicOffset;
        return Math.max(pbf, gender === 'male' ? 4 : 10);
    },

    /**
     * Get PBF status
     * @param {number} pbf 
     * @param {string} gender 
     * @returns {Object} { label, color }
     */
    getPBFStatus(pbf, gender) {
        if (gender === 'male') {
            if (pbf < 6) return { label: 'Essential', color: '#2196f3' };
            if (pbf < 14) return { label: 'Athletic', color: '#4caf50' };
            if (pbf < 18) return { label: 'Fitness', color: '#8bc34a' };
            if (pbf < 25) return { label: 'Average', color: '#ff9800' };
            return { label: 'Above Average', color: '#f44336' };
        } else {
            if (pbf < 14) return { label: 'Essential', color: '#2196f3' };
            if (pbf < 21) return { label: 'Athletic', color: '#4caf50' };
            if (pbf < 25) return { label: 'Fitness', color: '#8bc34a' };
            if (pbf < 32) return { label: 'Average', color: '#ff9800' };
            return { label: 'Above Average', color: '#f44336' };
        }
    },

    /**
     * Estimate Body Fat Mass (BFM)
     * BFM = weight × (PBF / 100)
     * @param {number} weight 
     * @param {number} pbf 
     * @returns {number} BFM in kg
     */
    estimateBFM(weight, pbf) {
        return weight * (pbf / 100);
    },

    /**
     * Estimate Skeletal Muscle Mass (SMM)
     * Uses Lee et al. formula (simplified):
     * SMM ≈ (0.244 × weight) + (7.8 × height_m) + (6.6 × sex) − (0.098 × age) − 3.3
     * sex = 1 for male, 0 for female
     * @param {number} weight - kg
     * @param {number} height - cm
     * @param {number} age 
     * @param {string} gender 
     * @returns {number} SMM in kg
     */
    estimateSMM(weight, height, age, gender) {
        const heightM = height / 100;
        const sexFactor = gender === 'male' ? 1 : 0;
        const smm = (0.244 * weight) + (7.8 * heightM) + (6.6 * sexFactor) - (0.098 * age) - 3.3;
        return Math.max(smm, 5); // minimum 5kg
    },

    /**
     * Generate complete body analysis
     * Checks for clinical InBody Scan first; falls back to calibrated biometric estimation
     * @param {Object} user - { weight, height, age, gender }
     * @returns {Object} all body metrics
     */
    analyze(user) {
        // 1. Check for verified InBody scan in storage
        if (typeof Storage !== 'undefined') {
            try {
                const inbody = Storage.getInBodyScan();
                if (inbody && inbody.smm && inbody.bfm) {
                    const scanWeight = inbody.weight || user.weight;
                    const scanHeight = inbody.height || user.height;
                    const scanBmi = inbody.bmi || this.calculateBMI(scanWeight, scanHeight);
                    const scanPbf = inbody.pbf || ((inbody.bfm / scanWeight) * 100);
                    return {
                        bmi: Math.round(scanBmi * 10) / 10,
                        bmiCategory: this.getBMICategory(scanBmi),
                        pbf: Math.round(scanPbf * 10) / 10,
                        pbfStatus: this.getPBFStatus(scanPbf, inbody.gender || user.gender),
                        bfm: Math.round(inbody.bfm * 10) / 10,
                        smm: Math.round(inbody.smm * 10) / 10,
                        leanMass: inbody.fatFreeMass ? Math.round(inbody.fatFreeMass * 10) / 10 : Math.round((scanWeight - inbody.bfm) * 10) / 10,
                        isInBodyVerified: true,
                        inbodyData: inbody
                    };
                }
            } catch (e) {
                console.warn('InBody scan read error:', e);
            }
        }

        // 2. Calibrated Algorithmic Baseline Estimation
        let bmi = this.calculateBMI(user.weight, user.height);
        const bmiCategory = this.getBMICategory(bmi);
        
        let pbf = this.estimatePBF(bmi, user.age, user.gender);
        let smm = this.estimateSMM(user.weight, user.height, user.age, user.gender);

        // --- Dietary Adherence Factor (DAF) ---
        // Biologically realistic adjustments based on 7-day caloric balance (7700 kcal ≈ 1kg fat)
        if (typeof Storage !== 'undefined') {
            try {
                const targets = Storage.getTargets();
                const logs = Storage.getLogs();
                const today = new Date();
                
                let daysCounted = 0;
                let totalProtein = 0;
                let totalCals = 0;

                // Look back over the last 7 days
                for (let i = 0; i < 7; i++) {
                    const d = new Date(today);
                    d.setDate(d.getDate() - i);
                    const dateStr = window.getLocalISODate(d);

                    if (logs[dateStr] && logs[dateStr].length > 0) {
                        daysCounted++;
                        logs[dateStr].forEach(entry => {
                            totalProtein += (entry.macros.protein || 0);
                            totalCals += (entry.macros.calories || 0);
                        });
                    }
                }

                if (daysCounted > 0 && targets.protein > 0 && targets.calories > 0) {
                    const avgProtein = totalProtein / daysCounted;
                    const avgCals = totalCals / daysCounted;

                    // Caloric balance over logged days: ~7700 kcal = 1kg fat mass shift
                    const netWeeklyCalorieDelta = (avgCals - targets.calories) * Math.min(daysCounted, 7);
                    const fatDeltaKg = Math.max(-0.5, Math.min(0.5, netWeeklyCalorieDelta / 7700));

                    // Subtle protein adherence adjustment (adequate protein preserves lean mass)
                    const proteinRatio = Math.max(0.6, Math.min(1.4, avgProtein / targets.protein));
                    const muscleMultiplier = 0.985 + (0.015 * Math.min(proteinRatio, 1.2));
                    smm = smm * muscleMultiplier;

                    // Adjust body fat mass and recalculate PBF
                    let baseBfm = this.estimateBFM(user.weight, pbf) + fatDeltaKg;
                    pbf = (baseBfm / user.weight) * 100;
                }
            } catch (e) {
                console.warn('Could not calculate DAF:', e);
            }
        }

        // Final bounding to ensure formulas remain biologically realistic
        smm = Math.max(smm, 10); // Minimum 10kg skeletal muscle
        pbf = Math.max(pbf, user.gender === 'male' ? 4 : 10); // Minimum essential fat
        pbf = Math.min(pbf, 60); // Maximum 60%

        const pbfStatus = this.getPBFStatus(pbf, user.gender);
        const bfm = this.estimateBFM(user.weight, pbf);

        return {
            bmi: Math.round(bmi * 10) / 10,
            bmiCategory,
            pbf: Math.round(pbf * 10) / 10,
            pbfStatus,
            bfm: Math.round(bfm * 10) / 10,
            smm: Math.round(smm * 10) / 10,
            leanMass: Math.round((user.weight - bfm) * 10) / 10,
            isInBodyVerified: false,
            inbodyData: null
        };
    }
};
