/**
 * MyMacros — Calorie & Macro Calculations
 * Uses Mifflin-St Jeor equation for BMR
 */
const CalorieCalc = {

    /**
     * Calculate Basal Metabolic Rate using Mifflin-St Jeor
     * @param {number} weight - kg
     * @param {number} height - cm
     * @param {number} age - years
     * @param {string} gender - "male" or "female"
     * @returns {number} BMR in kcal/day
     */
    calculateBMR(weight, height, age, gender) {
        if (gender === 'male') {
            return (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else {
            return (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }
    },

    /**
     * Calculate Total Daily Energy Expenditure
     * @param {number} bmr 
     * @param {number} activityMultiplier - 1.2 to 1.9
     * @returns {number} TDEE in kcal/day
     */
    calculateTDEE(bmr, activityMultiplier) {
        return Math.round(bmr * activityMultiplier);
    },

    /**
     * Calculate daily calorie target based on goal and duration
     * @param {number} tdee 
     * @param {string} goal - "loss", "maintain", or "gain"
     * @param {number} [weightDiff=0] - Difference between current and target (kg)
     * @param {number} [durationWeeks=8] - Time to achieve goal
     * @returns {number} Target calories
     */
    getCalorieTarget(tdee, goal, weightDiff = 0, durationWeeks = 8) {
        if (goal === 'maintain') return tdee;

        // Formula: 7000kcal ≈ 1kg fat
        // Daily offset = (weightDiff * 7000) / (durationWeeks * 7)
        // Which simplifies to: (weightDiff * 1000) / durationWeeks
        
        // Safety: Limit daily deficit to 1000 or 25% of TDEE
        // Limit daily surplus to 500
        let offset = Math.round((weightDiff * 1000) / (durationWeeks || 1));

        if (goal === 'loss') {
            const maxDeficit = Math.min(1000, tdee * 0.4); // More aggressive than standard 25% but safe
            offset = Math.max(offset, -maxDeficit);
            // If offset is somehow positive but goal is loss, default to standard -500
            if (offset >= 0) offset = -500;
        } else if (goal === 'gain') {
            const maxSurplus = 500;
            offset = Math.min(offset, maxSurplus);
            // If offset is somehow negative but goal is gain, default to standard +300
            if (offset <= 0) offset = 300;
        }

        return tdee + offset;
    },

    /**
     * Calculate macro targets in grams based on calorie target and goal
     * @param {number} calorieTarget 
     * @param {string} goal 
     * @param {number} weight - kg (for protein calculation)
     * @returns {Object} { protein, carbs, fat, fiber } in grams
     */
    getMacroTargets(calorieTarget, goal, weight) {
        let proteinPct, carbsPct, fatPct, fiberTarget;

        switch (goal) {
            case 'loss':
                // High protein (muscle sparing), moderate carbs, moderate fat
                proteinPct = 0.30;
                carbsPct = 0.40;
                fatPct = 0.30;
                fiberTarget = 25;
                break;
            case 'gain':
                // Adequate protein, high carbs (energy), lower fat
                proteinPct = 0.25;
                carbsPct = 0.55;
                fatPct = 0.20;
                fiberTarget = 30;
                break;
            default: // maintain
                proteinPct = 0.25;
                carbsPct = 0.50;
                fatPct = 0.25;
                fiberTarget = 28;
                break;
        }

        // Protein: 1 cal = 4g, Carbs: 1 cal = 4g, Fat: 1 cal = 9g
        const proteinGrams = Math.round((calorieTarget * proteinPct) / 4);
        const carbsGrams = Math.round((calorieTarget * carbsPct) / 4);
        const fatGrams = Math.round((calorieTarget * fatPct) / 9);

        // Ensure minimum protein based on body weight (at least 1.2g/kg)
        const minProtein = Math.round(weight * 1.2);
        const finalProtein = Math.max(proteinGrams, minProtein);

        return {
            calories: calorieTarget,
            protein: finalProtein,
            carbs: carbsGrams,
            fat: fatGrams,
            fiber: fiberTarget
        };
    },

    /**
     * Generate complete targets from user profile
     * @param {Object} user 
     * @returns {Object} targets
     */
    generateTargets(user) {
        const bmr = this.calculateBMR(user.weight, user.height, user.age, user.gender);
        const tdee = this.calculateTDEE(bmr, user.activity);
        const weightDiff = (user.targetWeight || user.weight) - user.weight;
        const calorieTarget = this.getCalorieTarget(tdee, user.goal, weightDiff, user.durationWeeks || 8);
        return this.getMacroTargets(calorieTarget, user.goal, user.weight);
    },

    /**
     * Get activity level label
     */
    getActivityLabel(multiplier) {
        const labels = {
            '1.2': 'Sedentary',
            '1.375': 'Lightly Active',
            '1.55': 'Moderately Active',
            '1.725': 'Very Active',
            '1.9': 'Super Active'
        };
        return labels[String(multiplier)] || 'Unknown';
    },

    /**
     * Get goal label
     */
    getGoalLabel(goal) {
        const labels = {
            'loss': 'Weight Loss',
            'maintain': 'Maintenance',
            'gain': 'Muscle Gain'
        };
        return labels[goal] || 'Unknown';
    }
};
