/**
 * MyMacros — Service Worker
 * Provides offline support by caching the app shell on install.
 */

const CACHE_NAME = 'mymacros-v1';

// App shell — everything needed to load the UI offline
const PRECACHE_URLS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/icon-512.png',
    '/favicon.svg',
    '/css/styles.css',
    '/css/liquid-glass.css',
    '/css/insights-glass.css',
    '/js/app.js',
    '/js/config.js',
    '/js/components/chart.js',
    '/js/screens/dashboard.js',
    '/js/screens/search.js',
    '/js/screens/insights.js',
    '/js/screens/profile.js',
    '/js/screens/aiDietitian.js',
    '/js/utils/storage.js',
    '/js/utils/bodyCalc.js',
    '/js/utils/notifications.js',
];

// ── Install: pre-cache the app shell ─────────────────────────────────
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(PRECACHE_URLS).catch(err => {
                // Non-fatal: cache what we can, skip missing files
                console.warn('[SW] Some files failed to cache:', err);
            });
        }).then(() => self.skipWaiting())
    );
});

// ── Activate: clean up old caches ────────────────────────────────────
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        ).then(() => self.clients.claim())
    );
});

// ── Fetch: network-first for API, cache-first for assets ─────────────
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Always go network-first for API calls (backend data)
    if (url.pathname.startsWith('/api/') || url.hostname !== self.location.hostname) {
        event.respondWith(
            fetch(request).catch(() => {
                // Return a simple offline JSON for API failures
                return new Response(JSON.stringify({ error: 'offline' }), {
                    headers: { 'Content-Type': 'application/json' }
                });
            })
        );
        return;
    }

    // Cache-first for static assets (CSS, JS, images, fonts)
    event.respondWith(
        caches.match(request).then(cached => {
            if (cached) return cached;

            return fetch(request).then(response => {
                // Only cache successful same-origin responses
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(request, responseToCache));
                return response;
            }).catch(() => {
                // Fallback to index.html for navigation requests (SPA)
                if (request.mode === 'navigate') {
                    return caches.match('/index.html');
                }
            });
        })
    );
});
