/**
 * MyMacros — Onboarding Screen (2-step flow)
 */
const OnboardingScreen = {
    selectedGender: 'male',
    selectedGoal: 'maintain',
    selectedActivity: 1.375,

    init() {
        // Gender toggle
        document.querySelectorAll('.gender-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.selectedGender = btn.dataset.gender;
            });
        });

        // Sliders
        const sliders = [
            { id: 'onboarding-age', display: 'age-val-display', fill: 'age-track-fill' },
            { id: 'onboarding-height', display: 'height-val-display', fill: 'height-track-fill' },
            { id: 'onboarding-weight', display: 'weight-val-display', fill: 'weight-track-fill' },
            { id: 'onboarding-target-weight', display: 'target-weight-val-display', fill: 'target-weight-track-fill' },
            { id: 'onboarding-duration', display: 'duration-val-display', fill: 'duration-track-fill' }
        ];

        sliders.forEach(s => {
            const input = document.getElementById(s.id);
            const display = document.getElementById(s.display);
            const fill = document.getElementById(s.fill);
            
            if (input && display) {
                const updateFill = () => {
                    if (fill) {
                        const min = parseFloat(input.min) || 0;
                        const max = parseFloat(input.max) || 100;
                        const val = parseFloat(input.value);
                        const percent = ((val - min) / (max - min)) * 100;
                        fill.style.width = `${percent}%`;
                    }
                };
                
                // When range slider is dragged
                input.addEventListener('input', (e) => {
                    display.value = e.target.value;
                    updateFill();
                    if (document.getElementById('onboarding-step2').classList.contains('active')) {
                        this.updateCalorieForecast();
                    }
                });

                // When user types in the number input
                display.addEventListener('input', (e) => {
                    let val = parseFloat(e.target.value);
                    const min = parseFloat(input.min);
                    const max = parseFloat(input.max);
                    
                    if (!isNaN(val)) {
                        // Clamp value
                        if (val < min) val = min;
                        if (val > max) val = max;
                        input.value = val;
                        updateFill();
                        if (document.getElementById('onboarding-step2').classList.contains('active')) {
                            this.updateCalorieForecast();
                        }
                    }
                });

                display.addEventListener('blur', (e) => {
                    // Update display output to match clamped value on blur
                    e.target.value = input.value;
                });
                
                // Initial fill
                updateFill();
            }
        });

        // Step 1 → Step 2
        document.getElementById('btn-onboarding-next').addEventListener('click', () => {
            this.goToStep2();
        });

        // Step 2 → Step 1
        document.getElementById('btn-onboarding-back').addEventListener('click', () => {
            document.getElementById('onboarding-step2').classList.remove('active');
            document.getElementById('onboarding-step1').classList.add('active');
        });

        // Goal cards
        document.querySelectorAll('.goal-card').forEach(card => {
            card.addEventListener('click', () => {
                document.querySelectorAll('.goal-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                this.selectedGoal = card.dataset.goal;
                this.updateCalorieForecast();
            });
        });

        // Activity pills
        document.querySelectorAll('.activity-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                document.querySelectorAll('.activity-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                this.selectedActivity = parseFloat(pill.dataset.activity);
                
                // Update description
                const descMap = {
                    '1.2': 'Little or no exercise, sedentary job.',
                    '1.375': 'Light exercise 1-3 days per week.',
                    '1.55': 'Moderate exercise 3-5 days per week.',
                    '1.725': 'Hard exercise/sports 6-7 days per week.'
                };
                const descEl = document.getElementById('activity-desc');
                if (descEl) descEl.textContent = descMap[pill.dataset.activity];

                this.updateCalorieForecast();
            });
        });

        // Done
        document.getElementById('btn-onboarding-done').addEventListener('click', () => {
            this.completeOnboarding();
        });
    },

    updateCalorieForecast() {
        const age = parseInt(document.getElementById('onboarding-age').value);
        const height = parseFloat(document.getElementById('onboarding-height').value);
        const weight = parseFloat(document.getElementById('onboarding-weight').value);
        const targetWeight = parseFloat(document.getElementById('onboarding-target-weight').value);
        const duration = parseInt(document.getElementById('onboarding-duration').value) || 8;

        const bmr = CalorieCalc.calculateBMR(weight, height, age, this.selectedGender);
        const tdee = CalorieCalc.calculateTDEE(bmr, this.selectedActivity);
        const weightDiff = targetWeight - weight;
        
        const calorieTarget = CalorieCalc.getCalorieTarget(tdee, this.selectedGoal, weightDiff, duration);
        
        // Update UI
        const calDisplay = document.getElementById('forecast-calories');
        if (calDisplay) calDisplay.textContent = calorieTarget.toLocaleString();

        const badge = document.getElementById('forecast-type-badge');
        if (badge) {
            badge.className = 'forecast-badge'; // Reset
            if (this.selectedGoal === 'loss') {
                badge.textContent = 'Deficit';
                badge.classList.add('deficit');
            } else if (this.selectedGoal === 'gain') {
                badge.textContent = 'Surplus';
                badge.classList.add('surplus');
            } else {
                badge.textContent = 'Maintenance';
                badge.classList.add('maintenance');
            }
        }

        const rateLabel = document.getElementById('forecast-rate-label');
        if (rateLabel) {
            if (this.selectedGoal === 'maintain') {
                rateLabel.textContent = 'Steady';
            } else {
                const weeklyRate = Math.abs(weightDiff / duration).toFixed(2);
                rateLabel.textContent = `${weeklyRate} kg / week`;
            }
        }

        const desc = document.getElementById('forecast-desc');
        if (desc) {
            if (this.selectedGoal === 'maintain') {
                desc.textContent = `Maintaining your current weight of ${weight}kg based on your ${CalorieCalc.getActivityLabel(this.selectedActivity).toLowerCase()} level.`;
            } else {
                const action = this.selectedGoal === 'loss' ? 'Reach' : 'Gain to';
                desc.textContent = `${action} ${targetWeight}kg in ${duration} weeks by sticking to this budget.`;
            }
        }
    },

    goToStep2() {
        const age = parseInt(document.getElementById('onboarding-age').value);
        const height = parseFloat(document.getElementById('onboarding-height').value);
        const weight = parseFloat(document.getElementById('onboarding-weight').value);
        const targetWeight = parseFloat(document.getElementById('onboarding-target-weight').value);

        if (!age || age < 14 || age > 80) {
            showToast('Please enter a valid age (14-80)', 'warning');
            return;
        }
        if (!height || height < 100 || height > 250) {
            showToast('Please enter a valid height', 'warning');
            return;
        }
        if (!weight || weight < 30 || weight > 250) {
            showToast('Please enter a valid weight', 'warning');
            return;
        }
        if (!targetWeight || targetWeight < 30 || targetWeight > 250) {
            showToast('Please enter a valid target weight', 'warning');
            return;
        }

        // Logic for Recommended Badge based on Difference & BMI
        const heightMeters = height / 100;
        const bmi = weight / (heightMeters * heightMeters);
        const weightDiff = targetWeight - weight;
        
        let recommendedGoal = 'maintain';

        // 1. If user explicitly wants to lose or gain a significant amount (>1kg)
        if (weightDiff <= -1) {
            recommendedGoal = 'loss';
        } else if (weightDiff >= 1) {
            recommendedGoal = 'gain';
        } 
        // 2. If user target is roughly their current weight, use BMI to suggest the optimal health path
        else {
            if (bmi >= 25) {
                // Overweight/Obese category -> suggest loss
                recommendedGoal = 'loss';
            } else if (bmi < 18.5) {
                // Underweight category -> suggest gain
                recommendedGoal = 'gain';
            } else {
                // Normal BMI -> suggest maintenance
                recommendedGoal = 'maintain';
            }
        }

        document.querySelectorAll('.badge-recommended').forEach(b => b.classList.add('hidden'));
        const badge = document.getElementById(`badge-${recommendedGoal}`);
        if (badge) badge.classList.remove('hidden');

        // Pre-select the recommended goal
        document.querySelectorAll('.goal-card').forEach(c => c.classList.remove('active'));
        const recommendedCard = document.querySelector(`.goal-card[data-goal="${recommendedGoal}"]`);
        if (recommendedCard) recommendedCard.classList.add('active');
        this.selectedGoal = recommendedGoal;

        document.getElementById('onboarding-step1').classList.remove('active');
        document.getElementById('onboarding-step2').classList.add('active');
        this.updateCalorieForecast();
    },

    completeOnboarding() {
        const user = Storage.getUser() || {};
        user.gender = this.selectedGender;
        user.age = parseInt(document.getElementById('onboarding-age').value);
        user.height = parseFloat(document.getElementById('onboarding-height').value);
        user.weight = parseFloat(document.getElementById('onboarding-weight').value);
        user.targetWeight = parseFloat(document.getElementById('onboarding-target-weight').value);
        user.durationWeeks = parseInt(document.getElementById('onboarding-duration').value);
        user.goal = this.selectedGoal;
        user.activity = this.selectedActivity;

        Storage.saveUser(user);

        // Calculate targets
        const targets = CalorieCalc.generateTargets(user);
        Storage.saveTargets(targets);

        // Save initial weight
        Storage.addWeight(user.weight);

        // Mark onboarded
        Storage.setOnboarded(true);

        // ── Persist profile + targets to backend (so next login skips onboarding) ──
        const token = localStorage.getItem('mymacros_token');
        if (token) {
            // Push profile to DB
            fetch(`${CONFIG.BACKEND_URL}/api/user/profile`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({
                    age: user.age,
                    gender: user.gender,
                    height: user.height,
                    weight: user.weight,
                    targetWeight: user.targetWeight,
                    durationWeeks: user.durationWeeks,
                    goal: user.goal,
                    activityLevel: user.activity
                })
            }).catch(err => console.warn('Profile sync to DB failed:', err));

            // Push targets to DB
            fetch(`${CONFIG.BACKEND_URL}/api/user/targets`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(targets)
            }).catch(err => console.warn('Targets sync to DB failed:', err));
        }

        showToast('Profile setup complete!', 'check_circle');

        // Navigate to dashboard
        setTimeout(() => {
            App.navigateTo('dashboard');
            if (typeof NotificationManager !== 'undefined') NotificationManager.init();
        }, 400);
    },

    show() {
        // Reset to step 1
        document.getElementById('onboarding-step1').classList.add('active');
        document.getElementById('onboarding-step2').classList.remove('active');

        // Pre-fill from existing user data
        const user = Storage.getUser();
        if (user) {
            if (user.age) {
                const ageInput = document.getElementById('onboarding-age');
                ageInput.value = user.age;
                ageInput.dispatchEvent(new Event('input'));
            }
            if (user.height) {
                const heightInput = document.getElementById('onboarding-height');
                heightInput.value = user.height;
                heightInput.dispatchEvent(new Event('input'));
            }
            if (user.weight) {
                const weightInput = document.getElementById('onboarding-weight');
                weightInput.value = user.weight;
                weightInput.dispatchEvent(new Event('input'));
            }
            if (user.targetWeight) {
                const targetWeightInput = document.getElementById('onboarding-target-weight');
                targetWeightInput.value = user.targetWeight;
                targetWeightInput.dispatchEvent(new Event('input'));
            }
            if (user.durationWeeks) {
                const durationInput = document.getElementById('onboarding-duration');
                durationInput.value = user.durationWeeks;
                durationInput.dispatchEvent(new Event('input'));
            }
            if (user.gender) {
                document.querySelectorAll('.gender-btn').forEach(b => {
                    b.classList.toggle('active', b.dataset.gender === user.gender);
                });
                this.selectedGender = user.gender;
            }
        }
    }
};
