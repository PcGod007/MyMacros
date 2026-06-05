require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('./config/passport');

const app = express();

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'http://localhost:5500',
        'http://127.0.0.1:5500',
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        process.env.FRONTEND_URL
    ].filter(Boolean),
    credentials: true
}));

app.use(express.json());

// Minimal session — only used during the brief OAuth handshake, not for auth
app.use(session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === 'production', maxAge: 5 * 60 * 1000 } // 5 min
}));

app.use(passport.initialize());
app.use(passport.session());

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/auth',         require('./routes/auth'));
app.use('/api/user',         require('./routes/user'));
app.use('/api/logs',         require('./routes/logs'));
app.use('/api/weights',      require('./routes/weights'));
app.use('/api/quick-log',    require('./routes/quickLog'));
app.use('/api/combos',       require('./routes/combos'));
app.use('/api/insights',     require('./routes/insights'));
app.use('/api/health-score', require('./routes/healthScore'));
app.use('/api/adaptive',     require('./routes/adaptive'));
app.use('/api/ai',           require('./routes/ai').router);
app.use('/api/barcode',      require('./routes/barcode'));

// ─── Health check ─────────────────────────────────────────────────────────────
app.get('/api/health', (_, res) => res.json({ status: 'ok', ts: Date.now() }));

// ─── 404 catch-all ────────────────────────────────────────────────────────────
app.use((_, res) => res.status(404).json({ error: 'Route not found' }));

// ─── DB + Server ──────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB connected');

        // Start nightly freq-score decay cron job
        const { startDecayJob } = require('./jobs/decayFreqScores');
        startDecayJob();

        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);

            // ─── Keep-alive self-ping (prevents Render free-tier from sleeping) ───
            const KEEP_ALIVE_MS = 14 * 60 * 1000; // 14 minutes
            setInterval(() => {
                const url = process.env.RENDER_EXTERNAL_URL || `http://localhost:${PORT}`;
                fetch(`${url}/api/health`)
                    .then(r => r.json())
                    .then(() => console.log('♻️  Keep-alive ping OK'))
                    .catch(() => console.warn('♻️  Keep-alive ping failed (non-critical)'));
            }, KEEP_ALIVE_MS);
        });
    })
    .catch(err => {
        console.error('❌ MongoDB connection failed:', err.message);
        process.exit(1);
    });
