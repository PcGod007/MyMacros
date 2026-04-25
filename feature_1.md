Detailed Walkthroughs — Batch 1 (Mongo-Native)
🍽️ Feature 1: Smart Meal Composer ("Thali Builder")
Goal & User Story

"As a user who eats the same lunch combo 4 times a week, I want to save my standard thali (2 rotis + dal + sabzi + curd + salad) as a single 'Combo' so I can log it in one tap instead of searching for 5 separate items."

Data Model Changes
New Mongoose schema: MealCombo.js
javascript// backend/models/MealCombo.js
const mongoose = require('mongoose');

const ComboItemSchema = new mongoose.Schema({
  foodId: { type: String, required: true },        // references foods.js ID
  foodName: { type: String, required: true },     // denormalized for resilience
  servingType: { 
    type: String, 
    enum: ['grams', 'pieces', 'katori', 'cup', 'glass', 'tbsp', 'tsp'],
    required: true 
  },
  servingSize: { type: Number, required: true },   // e.g., 2 (rotis), 100 (g)
  // Cached macros at save time — recomputed on log if food data changes
  cachedMacros: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fats: Number,
    fiber: Number
  }
}, { _id: false });

const MealComboSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
    index: true
  },
  name: { type: String, required: true, maxlength: 60 },
  emoji: { type: String, default: '🍽️' },          // user-selectable visual
  mealType: { 
    type: String, 
    enum: ['breakfast', 'lunch', 'dinner', 'snack', 'any'],
    default: 'any'
  },
  items: { 
    type: [ComboItemSchema], 
    validate: [arr => arr.length > 0 && arr.length <= 15, 'Combo must have 1-15 items']
  },
  // Denormalized totals for fast list rendering
  totals: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fats: Number,
    fiber: Number
  },
  usageCount: { type: Number, default: 0 },         // for sorting "most used"
  lastUsedAt: { type: Date },
  isPinned: { type: Boolean, default: false },     // user can pin to dashboard
  createdAt: { type: Date, default: Date.now }
});

MealComboSchema.index({ userId: 1, lastUsedAt: -1 });
MealComboSchema.index({ userId: 1, usageCount: -1 });
MealComboSchema.index({ userId: 1, isPinned: 1, lastUsedAt: -1 });

module.exports = mongoose.model('MealCombo', MealComboSchema);
API Endpoints
POST   /api/combos              → Create new combo
GET    /api/combos              → List user's combos (sorted by usage)
GET    /api/combos/:id          → Get single combo with full item details
PUT    /api/combos/:id          → Update combo
DELETE /api/combos/:id          → Delete combo
POST   /api/combos/:id/log      → Log entire combo to today's diary
PATCH  /api/combos/:id/pin      → Toggle pinned state
Critical implementation detail for POST /api/combos/:id/log:
javascript// backend/routes/combos.js — log endpoint logic
router.post('/:id/log', auth, async (req, res) => {
  const { mealType, date, servingMultiplier = 1 } = req.body;
  // servingMultiplier lets user log "half a thali" or "1.5x"
  
  const combo = await MealCombo.findOne({ _id: req.params.id, userId: req.user.id });
  if (!combo) return res.status(404).json({ error: 'Combo not found' });

  // Find or create day log
  const dayLog = await DayLog.findOneAndUpdate(
    { userId: req.user.id, date: normalizeDate(date) },
    { $setOnInsert: { meals: { breakfast: [], lunch: [], dinner: [], snack: [] } } },
    { upsert: true, new: true }
  );

  // Push every combo item into the chosen meal slot
  const loggedItems = combo.items.map(item => ({
    foodId: item.foodId,
    foodName: item.foodName,
    servingType: item.servingType,
    servingSize: item.servingSize * servingMultiplier,
    macros: scaleMacros(item.cachedMacros, servingMultiplier),
    loggedAt: new Date(),
    sourceCombo: combo._id  // traceability — for "Undo combo log" feature
  }));
  
  dayLog.meals[mealType].push(...loggedItems);
  await dayLog.save();

  // Update combo usage stats — use $inc to prevent race conditions
  await MealCombo.updateOne(
    { _id: combo._id },
    { $inc: { usageCount: 1 }, $set: { lastUsedAt: new Date() } }
  );

  res.json({ dayLog, itemsLogged: loggedItems.length });
});
Frontend Architecture
New screens to create:
frontend/js/screens/
├── combos.js                    ← List view (all user combos)
├── comboBuilder.js              ← Create/edit a combo
└── comboDetail.js               ← View combo details + log it
New components:
frontend/js/components/
├── ComboCard.js                 ← Used in list view + dashboard quick-log
├── ComboItemRow.js              ← Single item in builder (with stepper)
└── EmojiPicker.js               ← For combo icon selection
Step-by-Step Implementation Order

Backend foundation

Create MealCombo model (above schema)
Add combosRoute to backend/routes/combos.js — implement all 7 endpoints
Mount router in server.js: app.use('/api/combos', require('./routes/combos'))
Test all endpoints with Postman/Thunder Client


Frontend — Combo Builder Screen

Add navigation entry #/combos/new
Build form with: name input, emoji picker, meal type selector
Integrate existing food search component (reuse from search.js)
Each added food row uses your existing serving stepper components
Real-time totals calculated client-side as items are added/modified
Save button → POST /api/combos


Frontend — Combos List Screen

Route: #/combos
Three sort tabs: "Recent" (lastUsedAt), "Most Used" (usageCount), "Pinned"
Each card shows: emoji, name, item count, total calories, protein
Long-press / kebab menu → Edit, Delete, Pin/Unpin


Dashboard Integration

Add "Quick Combos" horizontal scroll strip to dashboard
Show top 5 pinned + most-recently-used combos
One-tap log → opens meal type picker → posts to /log endpoint


Combo-from-History feature (high-value addition)

On the diary screen, add "Save as Combo" button on any meal section
Pre-fills the builder with that meal's items



Edge Cases & Gotchas

Stale food data: If a food's macros are updated in foods.js after the combo is saved, the cached macros become outdated. Solution: when loading a combo for logging, optionally re-fetch live macros from the foods database and offer a "Refresh combo" prompt if drift is detected.
Deleted foods: A user's combo might reference a food that was removed from the catalog. Handle this gracefully — show the item as "⚠️ Food no longer available" with option to remove or replace.
Serving multiplier UI: Don't expose this in v1. Add it as a v1.1 feature ("Log 0.5x" / "Log 2x") once base flow is stable.
Concurrency on usageCount: Already handled with $inc in the example above — never read-modify-write counters.

Acceptance Criteria

 User can create a combo with 1-15 food items, each with custom serving size
 Combo list sorted by recent/frequent, with pin support
 Logging a combo creates individual entries in the day log (not a single blob — preserves per-food granularity)
 Dashboard shows quick-log strip for top combos
 All operations work offline-first (queue locally, sync when online) — if you adopt PWA enhancements


⚡ Feature 2: Recent + Frequent + Favorites Logging
Goal & User Story

"As a daily user, the same 20-30 foods make up 80% of my logs. I want them surfaced instantly without typing or searching."

This is the single highest-ROI feature in your entire roadmap. Implement it well and average daily logging time drops by 60%+.
Data Model Changes
We'll use a denormalized stats collection. Aggregating from DayLogs every time the dashboard loads will be slow once a user has 6+ months of history.
javascript// backend/models/UserFoodStats.js
const mongoose = require('mongoose');

const UserFoodStatsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
  foodId: { type: String, required: true },
  foodName: { type: String, required: true },     // denormalized for fast list render
  logCount: { type: Number, default: 0 },
  lastLoggedAt: { type: Date, default: Date.now },
  isFavorite: { type: Boolean, default: false },
  favoritedAt: { type: Date },
  // Most common serving so we can pre-fill
  preferredServing: {
    servingType: String,
    servingSize: Number
  },
  // Weighted score = logCount * exp(-daysSinceLastLogged / 30)
  // Recomputed on each log; used for "Frequent" tab to decay old favorites
  freqScore: { type: Number, default: 0, index: true }
});

UserFoodStatsSchema.index({ userId: 1, foodId: 1 }, { unique: true });
UserFoodStatsSchema.index({ userId: 1, lastLoggedAt: -1 });
UserFoodStatsSchema.index({ userId: 1, freqScore: -1 });
UserFoodStatsSchema.index({ userId: 1, isFavorite: 1, favoritedAt: -1 });

module.exports = mongoose.model('UserFoodStats', UserFoodStatsSchema);
API Endpoints
GET  /api/quick-log/recent         → Last 20 unique foods logged
GET  /api/quick-log/frequent       → Top 20 by freqScore
GET  /api/quick-log/favorites      → All favorited foods
POST /api/quick-log/favorite       → Toggle favorite { foodId, isFavorite }
POST /api/quick-log/log            → One-tap log with preferred serving
The Critical Hook: Update Stats on Every Log
In your existing food-logging endpoint, add:
javascript// backend/services/foodStatsService.js
async function updateUserFoodStats(userId, foodId, foodName, servingType, servingSize) {
  // Use atomic $inc to avoid race conditions
  const updated = await UserFoodStats.findOneAndUpdate(
    { userId, foodId },
    {
      $inc: { logCount: 1 },
      $set: { 
        foodName,
        lastLoggedAt: new Date(),
        preferredServing: { servingType, servingSize }
      }
    },
    { upsert: true, new: true }
  );

  // Recompute freqScore (weighted, time-decayed)
  // freqScore = logCount * exp(-daysSinceLastLogged / 30)
  // Since lastLoggedAt is just now, daysSince = 0 → exp(0) = 1
  // So on every log: freqScore = logCount * 1 = logCount
  await UserFoodStats.updateOne(
    { _id: updated._id },
    { $set: { freqScore: updated.logCount } }
  );
}

// Call after every successful log (food log, combo log, etc.)
module.exports = { updateUserFoodStats };
Periodic decay job (decay scores so old foods drop off the "Frequent" list):
javascript// backend/jobs/decayFreqScores.js
// Run nightly via node-cron
const cron = require('node-cron');
const UserFoodStats = require('../models/UserFoodStats');

// Run at 3 AM daily — light load time
cron.schedule('0 3 * * *', async () => {
  console.log('[Cron] Starting freq score decay...');
  
  // For each stat, recompute freqScore based on days since last log
  // Mongo aggregation pipeline can do this server-side for efficiency
  await UserFoodStats.updateMany(
    {},
    [
      {
        $set: {
          freqScore: {
            $multiply: [
              '$logCount',
              {
                $exp: {
                  $multiply: [
                    -1,
                    {
                      $divide: [
                        { $dateDiff: { startDate: '$lastLoggedAt', endDate: '$$NOW', unit: 'day' } },
                        30
                      ]
                    }
                  ]
                }
              }
            ]
          }
        }
      }
    ]
  );
  
  console.log('[Cron] Freq score decay complete.');
});
This uses Mongo's aggregation update (available in 4.2+) to compute the decay server-side without loading documents into Node.
Frontend Architecture
Replace the current "Add Food" button on the dashboard with a tabbed surface:
┌──────────────────────────────────────┐
│  [Recent] [Frequent] [⭐ Favorites]  │
├──────────────────────────────────────┤
│  🍚 Basmati Rice    1 katori   ↻ Log │
│  🥛 Toned Milk      1 glass    ↻ Log │
│  🥗 Mixed Salad     1 bowl     ↻ Log │
│  ...                                 │
│  [🔍 Search for new food]           │
└──────────────────────────────────────┘
New component: frontend/js/components/QuickLogPanel.js
javascript// Pseudo-code structure
class QuickLogPanel {
  constructor(container) {
    this.activeTab = 'recent';  // recent | frequent | favorites
    this.cache = { recent: null, frequent: null, favorites: null };
    this.cacheTimestamps = {};
  }
  
  async loadTab(tab) {
    // Client-side cache with 5-minute TTL
    const now = Date.now();
    if (this.cache[tab] && (now - this.cacheTimestamps[tab]) < 5 * 60 * 1000) {
      return this.cache[tab];
    }
    const data = await api.get(`/quick-log/${tab}`);
    this.cache[tab] = data;
    this.cacheTimestamps[tab] = now;
    return data;
  }
  
  async logItem(foodId) {
    // Optimistic UI: instantly mark as logged, then call API
    showToast('Logged ✓');
    await api.post('/quick-log/log', { foodId, mealType: this.inferMealType() });
    this.invalidateCache();  // refresh recent tab
    this.refreshDashboardRings();
  }
  
  inferMealType() {
    const hour = new Date().getHours();
    if (hour < 11) return 'breakfast';
    if (hour < 16) return 'lunch';
    if (hour < 19) return 'snack';
    return 'dinner';
  }
}
Step-by-Step Implementation Order

Backend — Stats tracking foundation

Create UserFoodStats model
Write updateUserFoodStats() helper function
Hook it into existing log creation endpoint
Backfill script: One-time script to populate stats from existing DayLogs (scripts/backfill_food_stats.js)
Set up the nightly decay cron job


Backend — Quick-log endpoints

Implement all 5 endpoints in routes/quickLog.js
"Recent" query: find({ userId }).sort({ lastLoggedAt: -1 }).limit(20)
"Frequent" query: find({ userId }).sort({ freqScore: -1 }).limit(20)
"Favorites" query: find({ userId, isFavorite: true }).sort({ favoritedAt: -1 })
Join food details from local foods database before returning


Frontend — QuickLogPanel component

Build the tabbed component
Implement client-side caching with 5-minute TTL
Add optimistic UI for instant feel


Frontend — Dashboard integration

Replace existing add-food button with QuickLogPanel
Keep "Search" button as fallback for new foods


Frontend — Favorite toggle UX

Add star icon on every food row in search results, history, combos
Single tap toggles favorite state
Subtle animation + haptic feedback (navigator.vibrate(10))


Polish: Smart defaults

On quick-log, pre-fill preferredServing (the user's most common serving for that food)
Show small "last logged 3h ago" timestamp on recent items



Edge Cases & Gotchas

First-time users have empty tabs: Show curated suggestions ("Popular in your region: Roti, Dal Tadka, Chai"). Tie this to onboarding cuisine preference.
Time-based meal inference is fragile: User logging dinner at 11 PM gets categorized as "dinner" correctly, but a 3 AM snack gets dinner. Add a small "Log to: [Lunch ▾]" dropdown on each row for override.
Favorites limit: Cap at ~50 favorites to keep the UI manageable.
Cron failure: If the decay job fails for several days, freq scores drift. Add a manual /admin/recompute-freq-scores endpoint as fallback.
Cold-start performance: First load of "Frequent" tab might be slow on huge datasets. The userId + freqScore compound index handles this — verify with .explain().

Acceptance Criteria

 Three tabs render in <100ms (cached) on dashboard
 One-tap log creates a diary entry with preferred serving in <1 second
 Favorite toggle is instant (optimistic UI)
 Empty states guide new users
 Backfill script successfully populates stats for existing users
 Decay cron runs nightly without errors


📊 Feature 3: Streaks, Stats & Insights Page
Goal & User Story

"As a user 3 weeks into my journey, I want to see patterns: am I consistent? What's my average protein? Am I improving?"

Data Model Changes
This is purely a presentation layer over existing DayLogs. We'll add a Mongo-based cache collection with TTL to avoid recomputing aggregates on every dashboard load.
javascript// backend/models/InsightsCache.js
const mongoose = require('mongoose');

const InsightsCacheSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  cacheKey: { type: String, required: true },     // e.g., "summary:30d", "streak", "trends:calories:90d"
  payload: { type: Object, required: true },     // the computed result
  computedAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, required: true }      // TTL field
});

// Mongo will auto-delete docs when expiresAt passes (TTL index)
InsightsCacheSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
InsightsCacheSchema.index({ userId: 1, cacheKey: 1 }, { unique: true });

module.exports = mongoose.model('InsightsCache', InsightsCacheSchema);
The TTL index is the magic here — Mongo automatically deletes expired cache entries, so you don't need a separate cleanup job. It's effectively a free, persistent cache layer.
API Endpoints
GET /api/insights/summary?range=7d|30d|90d|all   → Aggregate stats
GET /api/insights/streak                          → Current + longest streak
GET /api/insights/highlights                      → "Best day" superlatives
GET /api/insights/trends?metric=calories&range=30d → Time-series data for charts
The Aggregation Logic (Mongo-Native)
Use MongoDB aggregation pipelines instead of loading docs into Node — this is dramatically faster for users with months of data.
javascript// backend/services/insightsService.js
const DayLog = require('../models/DayLog');
const InsightsCache = require('../models/InsightsCache');

const CACHE_TTL_MINUTES = 60;

async function getCachedOrCompute(userId, cacheKey, computeFn) {
  // Try cache first
  const cached = await InsightsCache.findOne({ userId, cacheKey });
  if (cached && cached.expiresAt > new Date()) {
    return cached.payload;
  }
  
  // Compute fresh
  const result = await computeFn();
  
  // Upsert into cache
  await InsightsCache.updateOne(
    { userId, cacheKey },
    {
      $set: {
        payload: result,
        computedAt: new Date(),
        expiresAt: new Date(Date.now() + CACHE_TTL_MINUTES * 60 * 1000)
      }
    },
    { upsert: true }
  );
  
  return result;
}

async function computeSummary(userId, rangeDays) {
  return getCachedOrCompute(userId, `summary:${rangeDays}d`, async () => {
    const startDate = new Date(Date.now() - rangeDays * 86400000);
    
    // Single aggregation pipeline — runs server-side on Mongo
    const result = await DayLog.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId), date: { $gte: startDate } } },
      // Flatten meals into individual food entries
      {
        $project: {
          date: 1,
          allFoods: {
            $concatArrays: [
              { $ifNull: ['$meals.breakfast', []] },
              { $ifNull: ['$meals.lunch', []] },
              { $ifNull: ['$meals.dinner', []] },
              { $ifNull: ['$meals.snack', []] }
            ]
          },
          waterMl: { $ifNull: ['$water.totalMl', 0] }
        }
      },
      // Sum macros per day
      {
        $project: {
          date: 1,
          waterMl: 1,
          totals: {
            calories: { $sum: '$allFoods.macros.calories' },
            protein: { $sum: '$allFoods.macros.protein' },
            carbs: { $sum: '$allFoods.macros.carbs' },
            fats: { $sum: '$allFoods.macros.fats' },
            fiber: { $sum: '$allFoods.macros.fiber' }
          }
        }
      },
      // Group all days into final stats
      {
        $group: {
          _id: null,
          daysLogged: { 
            $sum: { $cond: [{ $gt: ['$totals.calories', 0] }, 1, 0] } 
          },
          avgCalories: { $avg: '$totals.calories' },
          avgProtein: { $avg: '$totals.protein' },
          avgCarbs: { $avg: '$totals.carbs' },
          avgFats: { $avg: '$totals.fats' },
          avgFiber: { $avg: '$totals.fiber' },
          avgWater: { $avg: '$waterMl' },
          maxProtein: { $max: '$totals.protein' },
          maxFiber: { $max: '$totals.fiber' },
          maxCalories: { $max: '$totals.calories' },
          // Keep raw days for highlights computation
          days: { $push: { date: '$date', totals: '$totals' } }
        }
      }
    ]);
    
    if (!result.length || result[0].daysLogged === 0) {
      return emptyState(rangeDays);
    }
    
    const r = result[0];
    return {
      rangeDays,
      daysLogged: r.daysLogged,
      adherenceRate: (r.daysLogged / rangeDays) * 100,
      averages: {
        calories: Math.round(r.avgCalories),
        protein: Math.round(r.avgProtein),
        carbs: Math.round(r.avgCarbs),
        fats: Math.round(r.avgFats),
        fiber: Math.round(r.avgFiber),
        water: Math.round(r.avgWater)
      },
      highlights: {
        highestProteinDay: findDayWithMax(r.days, 'protein'),
        mostFiberDay: findDayWithMax(r.days, 'fiber'),
        highestCalorieDay: findDayWithMax(r.days, 'calories')
      }
    };
  });
}

async function computeStreak(userId) {
  return getCachedOrCompute(userId, 'streak', async () => {
    // Pull last 365 days, sorted descending
    const logs = await DayLog.find({ userId })
      .sort({ date: -1 })
      .limit(365)
      .lean();
    
    if (!logs.length) return { current: 0, longest: 0 };
    
    // Walk backwards from today
    const today = normalizeDate(new Date());
    let current = 0;
    let cursor = today;
    
    for (const log of logs) {
      const logDate = normalizeDate(log.date);
      if (totalCalories(log) === 0) continue;
      
      if (logDate.getTime() === cursor.getTime()) {
        current++;
        cursor = subtractDays(cursor, 1);
      } else if (current === 0 && logDate.getTime() === subtractDays(today, 1).getTime()) {
        // Allow today to be empty — streak continues from yesterday
        current++;
        cursor = subtractDays(logDate, 1);
      } else {
        break;
      }
    }
    
    // Compute longest streak across full history
    let longest = 0;
    let running = 0;
    let prevDate = null;
    
    const sortedAsc = [...logs].reverse();
    for (const log of sortedAsc) {
      if (totalCalories(log) === 0) continue;
      const logDate = normalizeDate(log.date);
      
      if (!prevDate || logDate.getTime() === addDays(prevDate, 1).getTime()) {
        running++;
        longest = Math.max(longest, running);
      } else {
        running = 1;
      }
      prevDate = logDate;
    }
    
    return { current, longest };
  });
}

// Cache invalidation — call this whenever a log is created/updated
async function invalidateUserInsights(userId) {
  await InsightsCache.deleteMany({ userId });
}

module.exports = { computeSummary, computeStreak, invalidateUserInsights };
Frontend Architecture
New screen: frontend/js/screens/insights.js
Layout (vertical scroll, mobile-first):
┌─────────────────────────────────┐
│ [7D] [30D] [90D] [All]          │  ← Range selector
├─────────────────────────────────┤
│  🔥 Streak                       │
│  Current: 12 days                │
│  Longest: 18 days                │
│  [Visual flame indicator]        │
├─────────────────────────────────┤
│  Adherence                       │
│  ▓▓▓▓▓▓▓░░░ 72%                 │
│  21 of 30 days logged            │
├─────────────────────────────────┤
│  Average Macros                  │
│  [Macro rings, smaller version] │
├─────────────────────────────────┤
│  Trends (line charts)            │
│  • Calories                      │
│  • Protein                       │
│  • Weight                        │
├─────────────────────────────────┤
│  ✨ Highlights                   │
│  🥇 Highest protein day: 142g   │
│  🌿 Most fiber: 38g              │
│  ⭐ Top food: Paneer Bhurji     │
└─────────────────────────────────┘
Chart library decision: Since you're vanilla JS and care about performance, use Chart.js (lightweight, ~75KB) or hand-roll SVG line charts (zero dependency, ~200 lines of code). Given your "Performance Editorial" ethos, I'd lean toward custom SVG charts with your design tokens.
Step-by-Step Implementation Order

Backend — InsightsCache foundation

Create InsightsCache model with TTL index
Verify TTL works: insert a doc with expiresAt: new Date(Date.now() + 60000), wait 60s, confirm it's gone
Build getCachedOrCompute wrapper utility


Backend — Aggregation service

Create services/insightsService.js with all compute functions
Use Mongo aggregation pipelines (not Node-side loops) for computeSummary
Add helper utilities: normalizeDate, totalCalories, findDayWithMax
Write unit tests for streak computation (lots of edge cases)


Backend — Endpoints + cache invalidation

Implement 4 endpoints in routes/insights.js
Hook invalidateUserInsights(userId) into log creation/update endpoints
This ensures fresh data after any logging activity


Frontend — Streak component

Hero card with animated flame, current/longest numbers
Subtle pulse animation when streak ≥ 7 days


Frontend — Chart component

Custom SVG line chart with your editorial color palette
Touch-responsive: tap point to see exact value
Smooth path animations on render


Frontend — Highlights section

"Best of" cards with emoji + metric + date


Empty states

<3 days of data: "Keep logging — your insights unlock at 3 days"
<7 days: Show what's available, hint at weekly view



Edge Cases & Gotchas

Timezone bugs: Always normalize dates to user's timezone (store TZ in user profile). Otherwise streaks break for travelers.
Forgotten logging days: Decision needed — does forgetting one day break streak? Recommend: 1 grace day per week (like Duolingo's freeze).
Aggregation pipeline performance: For users with 1+ years of data, ensure { userId: 1, date: -1 } index exists on DayLog. Use .explain('executionStats') to verify it's being used.
TTL precision: Mongo's TTL deletion runs every 60 seconds, so cache entries can live up to 60s past expiresAt. Acceptable for our use case.
Cache stampede: If 100 users hit /insights/summary at the same instant after a deploy (cache empty), all of them trigger expensive aggregations. Mitigation: add a small in-memory lock per userId+cacheKey in Node, or accept the brief load spike.
First-day users: Show motivating empty state, never blank screens.

Acceptance Criteria

 All 4 range tabs (7D/30D/90D/All) load in <500ms (uncached) and <100ms (cached)
 Streak counter accurately handles missed days, timezone changes
 Charts are interactive (tap for value)
 Cache invalidates correctly when new log is created
 TTL index successfully expires old cache entries
 Empty states for new users are encouraging, not punishing


📷 Feature 4: Barcode Scanner for Packaged Foods
Goal & User Story

"As a user buying a Britannia Marie Gold biscuit pack, I want to scan the barcode and instantly log it — not search for 'biscuit' and hope it matches."

Architecture Overview
[User scans barcode]
        ↓
[Frontend: ZXing-js decodes EAN-13]
        ↓
[Check your Mongo PackagedFood collection]  ──→ Found? Return immediately
        ↓ not found
[Query OpenFoodFacts API]                    ──→ Found? Cache to Mongo + return
        ↓ not found
[Show "Add manually" form]                   ──→ Saves to your DB for next user
Data Model Changes
javascript// backend/models/PackagedFood.js
const mongoose = require('mongoose');

const PackagedFoodSchema = new mongoose.Schema({
  barcode: { type: String, required: true, unique: true, index: true },
  source: { 
    type: String, 
    enum: ['curated', 'openfoodfacts', 'user_submitted'],
    required: true
  },
  brand: String,
  name: { type: String, required: true },
  category: String,                          // "biscuits", "dairy", "snacks"
  
  // Per 100g/100ml — same standard as your foods.js
  per100g: {
    calories: Number,
    protein: Number,
    carbs: Number,
    sugar: Number,                          // packaged foods often have added sugar
    fats: Number,
    saturatedFats: Number,
    fiber: Number,
    sodium: Number
  },
  
  // Common serving sizes
  servings: [{
    label: String,                          // "1 biscuit", "1 packet (75g)"
    grams: Number
  }],
  
  imageUrl: String,
  ingredients: String,
  
  // Quality control
  isVerified: { type: Boolean, default: false },
  verifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reportedIssues: { type: Number, default: 0 },
  
  scanCount: { type: Number, default: 0 },  // popularity signal
  createdAt: { type: Date, default: Date.now }
});

PackagedFoodSchema.index({ scanCount: -1 });
PackagedFoodSchema.index({ brand: 1, name: 1 });
PackagedFoodSchema.index({ name: 'text', brand: 'text' });  // text search

module.exports = mongoose.model('PackagedFood', PackagedFoodSchema);
API Endpoints
GET  /api/barcode/:code           → Lookup by barcode (with fallback chain)
POST /api/barcode/submit          → User-submitted packaged food
POST /api/barcode/:code/report    → Report incorrect data
GET  /api/barcode/popular         → Top scanned items (browse view)
The lookup endpoint logic:
javascriptrouter.get('/:code', auth, async (req, res) => {
  const { code } = req.params;
  
  // Validate barcode format
  if (!/^\d{8,14}$/.test(code)) {
    return res.status(400).json({ error: 'Invalid barcode format' });
  }
  
  // Step 1: Check our Mongo DB
  let food = await PackagedFood.findOne({ barcode: code });
  if (food) {
    // Atomic increment to prevent race conditions
    await PackagedFood.updateOne(
      { _id: food._id },
      { $inc: { scanCount: 1 } }
    );
    return res.json({ source: 'local', food });
  }
  
  // Step 2: Try OpenFoodFacts
  try {
    const offResponse = await fetch(
      `https://world.openfoodfacts.org/api/v2/product/${code}.json`,
      { 
        headers: { 'User-Agent': 'MyMacros/1.0 (contact@mymacros.app)' },
        signal: AbortSignal.timeout(3000)  // OFF can be slow
      }
    );
    
    if (!offResponse.ok) throw new Error('OFF unavailable');
    
    const data = await offResponse.json();
    
    if (data.status === 1 && data.product) {
      // Map OFF data to our schema
      const mapped = mapOpenFoodFactsToOurSchema(data.product, code);
      
      // Cache it in our Mongo for next time
      // Use upsert to handle race condition: two users scan same product simultaneously
      const newFood = await PackagedFood.findOneAndUpdate(
        { barcode: code },
        { 
          $setOnInsert: {
            ...mapped,
            source: 'openfoodfacts',
            isVerified: false,
            scanCount: 1
          }
        },
        { upsert: true, new: true }
      );
      
      return res.json({ source: 'openfoodfacts', food: newFood });
    }
  } catch (err) {
    console.error('OFF lookup failed:', err);
  }
  
  // Step 3: Not found anywhere
  res.status(404).json({ 
    error: 'Product not found',
    suggestion: 'submit',
    barcode: code 
  });
});
OpenFoodFacts mapping (this is where Indian-specific quirks matter):
javascriptfunction mapOpenFoodFactsToOurSchema(product, barcode) {
  const n = product.nutriments || {};
  
  return {
    barcode,
    brand: product.brands || product.brands_tags?.[0] || 'Unknown',
    name: product.product_name_en || product.product_name || 'Unnamed Product',
    category: product.categories_tags?.[0]?.replace('en:', '') || 'misc',
    per100g: {
      calories: n['energy-kcal_100g'] || n.energy_100g / 4.184 || 0,
      protein: n.proteins_100g || 0,
      carbs: n.carbohydrates_100g || 0,
      sugar: n.sugars_100g || 0,
      fats: n.fat_100g || 0,
      saturatedFats: n['saturated-fat_100g'] || 0,
      fiber: n.fiber_100g || 0,
      sodium: (n.sodium_100g || n.salt_100g / 2.5) * 1000 || 0  // convert to mg
    },
    servings: parseServings(product.serving_size),
    imageUrl: product.image_url,
    ingredients: product.ingredients_text_en || product.ingredients_text
  };
}
Frontend Architecture
Library choice for barcode scanning:

ZXing-js (@zxing/browser) — ~200KB, supports all major formats, well-maintained. Recommended.
Alternative: quagga2 (lighter but less accurate for damaged barcodes)

New screen: frontend/js/screens/barcodeScanner.js
javascriptimport { BrowserMultiFormatReader } from '@zxing/browser';

class BarcodeScanner {
  constructor() {
    this.reader = new BrowserMultiFormatReader();
    this.videoElement = null;
  }
  
  async start() {
    try {
      this.videoElement = document.getElementById('scanner-video');
      
      const result = await this.reader.decodeOnceFromVideoDevice(
        undefined,  // default camera
        this.videoElement
      );
      
      const barcode = result.getText();
      navigator.vibrate?.(50);  // haptic confirmation
      this.handleScan(barcode);
    } catch (err) {
      if (err.name === 'NotAllowedError') {
        this.showPermissionDeniedUI();
      } else {
        this.showErrorUI(err);
      }
    }
  }
  
  async handleScan(barcode) {
    this.showLoading();
    try {
      const { food } = await api.get(`/barcode/${barcode}`);
      this.showProductCard(food);  // confirm + log flow
    } catch (err) {
      if (err.status === 404) {
        this.showNotFoundUI(barcode);  // → submit form
      }
    }
  }
  
  stop() {
    this.reader.reset();
  }
}
UI flow:
[Dashboard] → [📷 Scan button]
              ↓
[Camera viewport with overlay frame]
              ↓ (scan success)
[Product card slides up]
  - Brand + Name
  - Image
  - "Per 100g" macros
  - Serving picker (1 biscuit / 1 packet / custom grams)
  - [Log to: Snack ▾] [Confirm ✓]
              ↓
[Logged + return to dashboard]
Step-by-Step Implementation Order

Backend — Schema + lookup endpoint

Create PackagedFood model
Implement /api/barcode/:code with full fallback chain
Write mapOpenFoodFactsToOurSchema helper
Add error handling + timeout for OFF API


Backend — Submission endpoint

Implement POST /api/barcode/submit for user-submitted foods
Mark all submissions isVerified: false
Add admin review interface (later phase)


Frontend — Camera permission flow

Build permission request UI with clear explanation
Handle denied state gracefully
Test on iOS Safari (most restrictive)


Frontend — Scanner screen

Integrate @zxing/browser
Build viewfinder UI with corner brackets, scanning animation
Add manual entry fallback ("Enter barcode manually")


Frontend — Product confirmation

Build product card component
Serving size picker with smart defaults
Log to meal flow


Frontend — Manual submission flow

Form to add product when not found
Photo upload for product image (optional)
Submit to backend, show "Thanks for contributing"


Backend — Admin review

Simple admin route to approve user submissions
Mark as isVerified: true



Edge Cases & Gotchas

HTTPS required: Camera API only works on HTTPS. Ensure your dev environment uses HTTPS or localhost.
iOS Safari quirks: Camera autoplay needs playsinline attribute. Test extensively.
OpenFoodFacts data quality varies wildly for Indian products: Many entries are incomplete or wrong. Flag low-confidence data with "⚠️ Verify these values" tag.
Rate limiting on OFF: They request <100 requests/minute. Your Mongo cache solves this — every successful OFF lookup is saved permanently, so repeat scans of the same product never hit OFF.
Localization: OFF returns product_name in various languages. Prefer product_name_en, fall back to product_name. Some Indian products only have Hindi names.
Barcode format quirks: Some Indian products use 8-digit EAN-8, most use 13-digit EAN-13. Your validation regex should accept 8-14 digits.
Serving sizes: OFF stores serving_size as a free-text string ("30g", "1 biscuit (5g)", "100ml"). You'll need a parser. Store both raw text and parsed grams.
Race condition on first scan of new product: Two users scanning the same new product simultaneously could both hit OFF and both try to insert. The findOneAndUpdate with upsert: true in the lookup endpoint handles this atomically.

Acceptance Criteria

 Camera opens within 2 seconds of tapping scan button
 Successful scan → product card in <3 seconds (with OFF fallback)
 Manual entry works as fallback when camera unavailable
 User submissions are saved and queued for review
 All scanned products are cached in Mongo for instant re-scan
 Graceful "not found" UX with submission CTA


✋ End of Updated Batch 1
Key changes from the original:

Feature 3 now uses Mongo's TTL index as the cache mechanism — same end result as Redis caching, just stored as Mongo documents that auto-expire. The TTL index is a feature you already pay zero for.
Feature 2's decay job uses Mongo's aggregation pipeline ($set with expressions) to compute decay server-side — no Node-side loops, scales fine.
Feature 4 explicitly notes that Mongo serves as the OpenFoodFacts cache, eliminating any Redis layer.
All findOneAndUpdate operations use atomic operators ($inc, $setOnInsert) to handle concurrency without external locking.

When you're ready, reply "continue" for Batch 2 which will cover:

🥗 Nutrient Density & Health Score (the moat feature)
🎯 Adaptive Goals Engine
👨‍⚕️ Coach/Dietitian Mode + AI Dietitian
📘 TypeScript Migration Strategy