/**
 * MyMacros — Meal Card Component
 */
const MealCard = {
    MEALS: [
        { id: 'breakfast', label: 'Breakfast', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>', timeRange: '6AM – 11AM' },
        { id: 'lunch', label: 'Lunch', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>', timeRange: '11AM – 3PM' },
        { id: 'snacks', label: 'Snacks', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>', timeRange: '3PM – 6PM' },
        { id: 'dinner', label: 'Dinner', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>', timeRange: '6PM – 10PM' }
    ],

    render(containerId, logs, onAddClicked, onEditClicked, onCopyMealClicked, onPasteMealClicked) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';

        const hasCopiedData = !!sessionStorage.getItem('MyMacros_CopiedMeals');

        this.MEALS.forEach(meal => {
            const mealEntries = logs.filter(e => e.meal === meal.id);
            const totalCals = mealEntries.reduce((sum, e) => sum + (e.macros.calories || 0), 0);

            const card = document.createElement('div');
            card.className = 'meal-card';
            card.innerHTML = `
                <div class="meal-card-left">
                    <div class="meal-card-icon" style="display:flex;align-items:center;justify-content:center;">
                        ${meal.icon}
                    </div>
                    <div class="meal-card-info">
                        <h3 class="meal-card-title">${meal.label}</h3>
                        <p class="meal-card-time">${meal.timeRange}</p>
                        ${mealEntries.length > 0 ?
                            `<div class="meal-card-items">${mealEntries.map(e =>
                                `<span class="meal-item-chip" data-entry-id="${e.id}" title="Tap to edit quantity">${e.foodName} <span class="meal-item-cal">${Math.round(e.macros.calories)}</span><span class="edit-hint">✏</span><button class="meal-item-remove" data-entry-id="${e.id}" data-date="${e.date}" title="Remove">×</button></span>`
                            ).join('')}</div>` :
                            `<p class="meal-card-empty">Tap to add meal</p>`
                        }
                    </div>
                </div>
                <div class="meal-card-right" style="display:flex;align-items:center;gap:6px;">
                    ${mealEntries.length > 0 ?
                        `<span class="meal-card-cals">${Math.round(totalCals)} kcal</span>` : ''
                    }
                    ${hasCopiedData ?
                        `<button class="icon-btn meal-card-paste" data-meal="${meal.id}" title="Paste into ${meal.label}" style="width:32px;height:32px;padding:4px;background:var(--primary-container);color:var(--primary);border-radius:50%;display:flex;align-items:center;justify-content:center;">
                            <span class="material-icons-round" style="font-size:16px;">content_paste</span>
                        </button>` : ''
                    }
                    ${mealEntries.length > 0 ?
                        `<button class="icon-btn meal-card-copy" data-meal="${meal.id}" title="Copy ${meal.label}" style="width:32px;height:32px;padding:4px;background:var(--surface-container-high);border-radius:50%;display:flex;align-items:center;justify-content:center;">
                            <span class="material-icons-round" style="font-size:16px;">content_copy</span>
                        </button>` : ''
                    }
                    <button class="meal-card-add" data-meal="${meal.id}" style="display:flex;align-items:center;justify-content:center;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    </button>
                </div>
            `;

            // Copy meal section button
            const copyBtn = card.querySelector('.meal-card-copy');
            if (copyBtn) {
                copyBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (typeof onCopyMealClicked === 'function') onCopyMealClicked(meal.id, meal.label, mealEntries);
                });
            }

            // Paste meal section button
            const pasteBtn = card.querySelector('.meal-card-paste');
            if (pasteBtn) {
                pasteBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (typeof onPasteMealClicked === 'function') onPasteMealClicked(meal.id, meal.label);
                });
            }

            // Add food button
            card.querySelector('.meal-card-add').addEventListener('click', (e) => {
                e.stopPropagation();
                onAddClicked(meal.id);
            });

            // Remove buttons
            card.querySelectorAll('.meal-item-remove').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const entryId = btn.dataset.entryId;
                    const date = btn.dataset.date;
                    if (entryId && date) {
                        Storage.removeFoodEntry(date, entryId);
                        if (typeof DashboardScreen !== 'undefined') {
                            DashboardScreen.refresh();
                        }
                        showToast('Removed from log', 'delete');
                    }
                });
            });

            // Edit chips — click on chip (not the × button) to edit quantity
            card.querySelectorAll('.meal-item-chip').forEach(chip => {
                chip.addEventListener('click', (e) => {
                    // Ignore clicks that originated from the remove button
                    if (e.target.classList.contains('meal-item-remove') || e.target.closest('.meal-item-remove')) return;
                    e.stopPropagation();
                    const entryId = chip.dataset.entryId;
                    if (entryId && typeof onEditClicked === 'function') {
                        const entry = mealEntries.find(en => en.id === entryId);
                        if (entry) onEditClicked(entry);
                    }
                });
            });

            // Card click also opens add
            card.addEventListener('click', () => onAddClicked(meal.id));

            container.appendChild(card);
        });
    }
};

