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
     * Estimate Percent Body Fat using Deurenberg formula
     * PBF = (1.20 × BMI) + (0.23 × Age) - (10.8 × sex) - 5.4
     * where sex = 1 for male, 0 for female
     * @param {number} bmi 
     * @param {number} age 
     * @param {string} gender 
     * @returns {number} PBF percentage
     */
    estimatePBF(bmi, age, gender) {
        const sexFactor = gender === 'male' ? 1 : 0;
        const pbf = (1.20 * bmi) + (0.23 * age) - (10.8 * sexFactor) - 5.4;
        return Math.max(pbf, 3); // minimum 3% essential fat
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
     * Generate complete body analysis (Now incorporating Dietary Adherence)
     * @param {Object} user - { weight, height, age, gender }
     * @returns {Object} all body metrics
     */
    analyze(user) {
        let bmi = this.calculateBMI(user.weight, user.height);
        const bmiCategory = this.getBMICategory(bmi);
        
        let pbf = this.estimatePBF(bmi, user.age, user.gender);
        let smm = this.estimateSMM(user.weight, user.height, user.age, user.gender);

        // --- Dietary Adherence Factor (DAF) ---
        // Dynamically adjust baseline SMM and PBF based on the last 7 days of macro logging
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

                    // Adherence ratios (clamped between 0.5 and 1.5 to prevent absurd skewing)
                    let proteinRatio = Math.max(0.5, Math.min(1.5, avgProtein / targets.protein));
                    let calorieRatio = Math.max(0.5, Math.min(1.5, avgCals / targets.calories));

                    // SMM Adjustment: Proper protein intake boosts muscle retention estimate by up to 3%
                    // Poor protein intake penalizes SMM by up to 5%
                    let muscleMultiplier = 0.95 + (0.05 * proteinRatio);
                    smm = smm * muscleMultiplier;

                    // PBF Adjustment: Caloric surplus increases estimated body fat %, Deficit decreases it
                    let fatMultiplier = 0.85 + (0.15 * calorieRatio);
                    pbf = pbf * fatMultiplier;
                }
            } catch (e) {
                console.warn('Could not calculate DAF:', e);
            }
        }

        // Final bounding to ensure formulas remain biologically realistic
        smm = Math.max(smm, 10); // Minimum 10kg skeletal muscle
        pbf = Math.max(pbf, user.gender === 'male' ? 3 : 10); // Minimum essential fat
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
            leanMass: Math.round((user.weight - bfm) * 10) / 10
        };
    }
};
