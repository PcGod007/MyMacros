tian subscription
Coach subscription tier
Client per-seat billing for coaches
Free trial logic

Edge Cases & Gotchas

Privacy is critical: Coaches should never see other coaches' clients. Add middleware that verifies coachId on every client data request.
AI hallucinations: The AI might suggest non-Indian foods or unsafe advice. Mitigations: (a) strong system prompt with explicit cultural rules, (b) post-generation validation against your foods database, (c) "Report unhelpful response" button on every AI message.
Token cost management: Each weekly review uses ~3-5K tokens. At Claude Opus pricing, that's roughly ₹3-5 per review. Cap free tier reviews at 1/month, paid tier at 1/week.
PII in AI context: Don't send identifiable info to the AI. Use anonymous user descriptors.
Real-time vs async: Coach messages should feel real-time but you may not want true WebSockets in v1. Polling every 30s in the foreground is acceptable.
Coach quality control: Bad coaches damage your brand. v1: manually verify all coaches. v2: rating system, automatic suspension for low ratings.
Liability: AI giving medical advice is legally risky. Add disclaimers everywhere ("This is not medical advice. Consult a doctor for medical conditions.").
AI memory limits: Claude has a context window but you shouldn't send all 365 days of logs every chat. Build a summarized "user memory" that gets updated periodically.
Cross-timezone coaches: A coach in Mumbai might have clients in Dubai. Always show times in client's TZ for the coach UI.

Acceptance Criteria
AI Dietitian:

 User can chat with AI and get culturally-aware Indian nutrition advice
 Weekly review generated automatically with structured wins/concerns/recommendations
 Reviews reference user's actual data (not generic advice)
 Token usage tracked and displayed for paid tier users
 Disclaimer shown on every AI response

Coach Mode:

 Coach can see all assigned clients with last activity
 Coach can read-only view client logs and health scores
 Coach can update client's macro targets with notes
 Coach-client messaging works with notifications
 Privacy: coaches cannot access non-assigned client data
 User can find and request a coach from public directory


📘 Feature 8: Gradual TypeScript Migration
Goal

"As a project grown to 3,000+ lines of CSS, complex state management, and increasing API surface area, type safety becomes essential before bugs become unmanageable."

Strategic Note: Why Gradual?
Rewriting your entire codebase in TypeScript would take weeks and introduce bugs. The mature approach is strangler fig migration: introduce TypeScript alongside JS, migrate file-by-file in priority order, and let both coexist indefinitely if needed.
The Migration Order (Highest ROI First)

Backend API contracts — these prevent the most bugs (API mismatches between frontend/backend)
State management layer — central source of truth, mistakes propagate everywhere
Mongoose models — type-safe DB operations
Utility functions — pure functions, easy wins
API client/fetcher — type the network boundary
Components — leave for last, bulk of code but lowest bug-per-line

Phase 1: Setup (Day 1)
Backend setup:
bashcd backend
npm install --save-dev typescript @types/node @types/express @types/jsonwebtoken ts-node nodemon
Create backend/tsconfig.json:
json{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./",
    "strict": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "allowJs": true,
    "checkJs": false,
    "noImplicitAny": false,
    "noEmitOnError": false,
    "incremental": true
  },
  "include": ["**/*.ts", "**/*.js"],
  "exclude": ["node_modules", "dist"]
}
Key flags:

allowJs: true — JS and TS files coexist
checkJs: false — JS files aren't type-checked yet (avoid noise)
strict: false initially — tighten later

Update package.json scripts:
json{
  "scripts": {
    "dev": "nodemon --exec ts-node server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "type-check": "tsc --noEmit"
  }
}
Frontend setup (vanilla JS context):
Since you're using vanilla JS modules without a bundler, the cleanest path is:
bashcd frontend
npm install --save-dev typescript
Create frontend/tsconfig.json:
json{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "node",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "outDir": "./js-compiled",
    "rootDir": "./js-src",
    "strict": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "allowJs": true,
    "noEmitOnError": false,
    "declaration": false,
    "sourceMap": true
  },
  "include": ["js-src/**/*"]
}
Build process:

Move source files to js-src/
TS compiles to js/ (which your HTML imports)
Add a watch script: tsc --watch

If this restructure feels heavy, a lighter alternative is using JSDoc with // @ts-check — you get TypeScript-level type checking without changing the file extension or build process. I'd recommend this for the frontend to start.
Phase 2: Backend Migration (1-2 weeks, file by file)
Migration order — prioritize the riskiest code first:

server.ts (main entry)
middleware/auth.ts
models/*.ts (one file per session)
routes/*.ts

Example: Converting models/User.js to models/User.ts
typescript// backend/models/User.ts
import mongoose, { Schema, Document } from 'mongoose';

// 1. Define interfaces for all sub-documents
export interface MacroTargets {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  fiber: number;
}

export interface AdaptiveSettings {
  enabled: boolean;
  autoApply: boolean;
  lastEvaluatedAt?: Date;
  nextEvaluationAt?: Date;
  minAdjustment: number;
  maxAdjustment: number;
}

export interface AIDietitianContext {
  conditions: string[];
  allergies: string[];
  dietaryPreferences: string[];
  cuisinePreference?: string;
  activityLevel?: string;
  preferences?: string;
}

// 2. Main user interface
export interface IUser extends Document {
  email: string;
  passwordHash: string;
  name: string;
  age: number;
  sex: 'male' | 'female' | 'other';
  height: number;
  currentWeight: number;
  goal: 'lose' | 'maintain' | 'gain';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
  macroTargets: MacroTargets;
  role: 'user' | 'coach' | 'admin';
  
  goalHistory: Array<{
    targets: MacroTargets;
    setAt: Date;
    setBy: 'user' | 'onboarding' | 'adaptive_engine';
    reason?: string;
  }>;
  
  adaptiveSettings: AdaptiveSettings;
  
  aiDietitian: {
    enabled: boolean;
    plan?: 'free' | 'monthly' | 'annual';
    healthContext: AIDietitianContext;
    lastReviewAt?: Date;
    nextReviewAt?: Date;
  };
  
  coachId?: mongoose.Types.ObjectId;
  
  createdAt: Date;
  updatedAt: Date;
}

// 3. Schema definition (existing logic, just typed)
const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 13, max: 120 },
  sex: { type: String, enum: ['male', 'female', 'other'], required: true },
  height: { type: Number, required: true },
  currentWeight: { type: Number, required: true },
  goal: { type: String, enum: ['lose', 'maintain', 'gain'], required: true },
  activityLevel: { 
    type: String, 
    enum: ['sedentary', 'light', 'moderate', 'active', 'very_active'],
    required: true 
  },
  macroTargets: {
    calories: { type: Number, required: true },
    protein: { type: Number, required: true },
    carbs: { type: Number, required: true },
    fats: { type: Number, required: true },
    fiber: { type: Number, required: true }
  },
  role: { type: String, enum: ['user', 'coach', 'admin'], default: 'user' },
  // ... rest of schema
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);
Now in routes:
typescript// backend/routes/users.ts
import { Request, Response } from 'express';
import User, { IUser } from '../models/User';

interface AuthRequest extends Request {
  user?: { id: string };
}

router.get('/me', auth, async (req: AuthRequest, res: Response) => {
  const user: IUser | null = await User.findById(req.user!.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});
Phase 3: Shared Type Contracts (Critical!)
This is where TypeScript truly pays off — eliminating frontend-backend mismatches.
Create a shared types package:
shared/
├── types/
│   ├── api.ts          ← API request/response shapes
│   ├── models.ts       ← Domain types
│   └── enums.ts        ← Shared enums
├── package.json
└── tsconfig.json
Example shared types:
typescript// shared/types/api.ts

// Request DTOs
export interface CreateComboRequest {
  name: string;
  emoji?: string;
  mealType?: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'any';
  items: Array<{
    foodId: string;
    servingType: ServingType;
    servingSize: number;
  }>;
}

export interface LogComboRequest {
  mealType: MealType;
  date: string;
  servingMultiplier?: number;
}

// Response DTOs
export interface ComboResponse {
  _id: string;
  name: string;
  emoji: string;
  items: ComboItem[];
  totals: MacroTotals;
  usageCount: number;
  isPinned: boolean;
}

export interface HealthScoreResponse {
  overall: number;
  components: {
    protein: number;
    fiber: number;
    macroBalance: number;
    micronutrients: number;
    processedFood: number;
    sugarSodium: number;
  };
  flags: string[];
  computedAt: string;
}

// Shared enums
export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';
export type ServingType = 'grams' | 'pieces' | 'katori' | 'cup' | 'glass' | 'tbsp' | 'tsp';
export type GoalType = 'lose' | 'maintain' | 'gain';
Backend uses them:
typescript// backend/routes/combos.ts
import { CreateComboRequest, ComboResponse } from '../../shared/types/api';

router.post('/', auth, async (req: Request<{}, ComboResponse, CreateComboRequest>, res) => {
  const { name, items, mealType } = req.body;
  // TypeScript validates body shape
});
Frontend uses them too — eliminates entire categories of integration bugs.
Phase 4: Frontend State & API Layer (1 week)
Highest-priority frontend files to migrate first:

js/api/client.ts — typed fetch wrapper
js/state/store.ts — central state with types
js/utils/*.ts — pure functions
js/data/foods.ts — your food database with types

Example: typed API client
typescript// frontend/js-src/api/client.ts
import { 
  ComboResponse, 
  CreateComboRequest, 
  HealthScoreResponse 
} from '../../../shared/types/api';

class ApiClient {
  private baseUrl: string;
  private token: string | null;
  
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.token = localStorage.getItem('token');
  }
  
  private async request<TResponse>(
    method: string,
    path: string,
    body?: unknown
  ): Promise<TResponse> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { Authorization: `Bearer ${this.token}` })
      },
      body: body ? JSON.stringify(body) : undefined
    });
    
    if (!response.ok) {
      throw new ApiError(response.status, await response.text());
    }
    
    return response.json() as Promise<TResponse>;
  }
  
  // Typed endpoint methods
  combos = {
    list: () => this.request<ComboResponse[]>('GET', '/api/combos'),
    create: (data: CreateComboRequest) => 
      this.request<ComboResponse>('POST', '/api/combos', data),
    get: (id: string) => this.request<ComboResponse>('GET', `/api/combos/${id}`),
    delete: (id: string) => this.request<void>('DELETE', `/api/combos/${id}`),
    log: (id: string, data: LogComboRequest) => 
      this.request<{ itemsLogged: number }>('POST', `/api/combos/${id}/log`, data)
  };
  
  healthScore = {
    today: () => this.request<HealthScoreResponse>('GET', '/api/health-score/today'),
    range: (days: number) => 
      this.request<HealthScoreResponse[]>('GET', `/api/health-score/range?days=${days}`)
  };
}

class ApiError extends Error {
  constructor(public status: number, public details: string) {
    super(`API Error ${status}: ${details}`);
  }
}

export const api = new ApiClient(import.meta.env.VITE_API_URL);
Phase 5: Tightening (Ongoing)
Once 80% of files are migrated, gradually tighten the compiler:
json{
  "compilerOptions": {
    "strict": true,                    // enable all strict checks
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
Each tightening will surface new errors — fix in batches.
Step-by-Step Implementation Order

Day 1: Setup TS in backend, get server.ts running
Days 2-3: Migrate middleware (auth, error handlers)
Days 4-7: Migrate Mongoose models one per day
Days 8-10: Migrate routes (highest-traffic first)
Days 11-12: Set up shared/types package
Days 13-15: Frontend API client + state migration
Day 16+: Component migration (ongoing, low priority)

Edge Cases & Gotchas

any is okay during migration: Don't let perfect be the enemy of done. Use any to unblock yourself, fix later.
Mongoose typing complexity: Use Document interface and the Model<IUser> generic. Mongoose 7+ has much better TS support than earlier versions.
Build pipeline changes: Your CI/CD needs npm run build step before deploy. Update Render/Netlify configs.
Hot reload: ts-node-dev is faster than nodemon + ts-node for development.
Source maps in production: Enable for debugging but don't expose to users.
JSDoc as alternative: For frontend, // @ts-check + JSDoc comments give 80% of TypeScript's value with 20% of the migration effort. Consider this if a full TS migration feels too disruptive.
Don't migrate tests last: Migrate tests alongside code so you maintain coverage during transition.
Watch out for default export quirks: TS handles these differently than CommonJS. Use named exports where possible.

Acceptance Criteria

 Backend builds and runs in TypeScript
 All Mongoose models have full type definitions
 Shared types package eliminates frontend-backend type mismatches
 Frontend API client is fully typed
 CI runs tsc --noEmit as a check on every PR
 No regression in production behavior during migration
 Strict mode enabled by end of migration


✅ End of Batch 2 — Full Roadmap Complete
You now have detailed, paste-ready walkthroughs for all 8 chosen features:
Batch 1 (Mongo-native):

Smart Meal Composer (Thali Builder)
Recent + Frequent + Favorites Logging
Streaks, Stats & Insights Page
Barcode Scanner for Packaged Foods

Batch 2:
5. Nutrient Density & Health Score (your moat)
6. Adaptive Goals Engine
7. Coach Mode + AI Dietitian (combined)
8. TypeScript Migration