/**
 * MyMacros — Service Worker
 * Provides offline support by caching the app shell on install.
 *
 * Strategy:
 *  - CSS / JS / HTML  → Network-first (always picks up updates, falls back to cache)
 *  - Images / fonts   → Cache-first  (rarely change, safe to serve stale)
 *  - API calls        → Network-only (never cache backend data)
 */

// ── Bump this string whenever you deploy CSS/JS changes ─────────────────────
// The activate handler deletes every cache whose name doesn't match, forcing
// a fresh download of all app-shell files on the next normal page load.
const CACHE_NAME = 'mymacros-v5';

// Static assets that are safe to serve from cache (images, icons, manifest)
const PRECACHE_URLS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/icon-512.png',
    '/favicon.svg',
];

// ── Install: pre-cache minimal shell ────────────────────────────────────────
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(PRECACHE_URLS).catch(err => {
                console.warn('[SW] Some files failed to cache:', err);
            });
        }).then(() => self.skipWaiting())   // activate immediately, don't wait
    );
});

// ── Activate: delete every stale cache ──────────────────────────────────────
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => {
                        console.log('[SW] Deleting old cache:', key);
                        return caches.delete(key);
                    })
            )
        ).then(() => self.clients.claim())
    );
});

// ── Fetch ────────────────────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // 1. API calls / cross-origin → always network, never cache
    if (url.pathname.startsWith('/api/') || url.hostname !== self.location.hostname) {
        event.respondWith(
            fetch(request).catch(() =>
                new Response(JSON.stringify({ error: 'offline' }), {
                    headers: { 'Content-Type': 'application/json' }
                })
            )
        );
        return;
    }

    // 2. CSS / JS / HTML → Network-first so code updates are always picked up.
    //    Falls back to cache only when genuinely offline.
    const isCodeAsset =
        url.pathname.endsWith('.css') ||
        url.pathname.endsWith('.js')  ||
        url.pathname.endsWith('.html')||
        url.pathname === '/';

    if (isCodeAsset) {
        event.respondWith(
            fetch(request)
                .then(response => {
                    // Store a fresh copy in cache for offline fallback
                    if (response && response.status === 200 && response.type === 'basic') {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
                    }
                    return response;
                })
                .catch(() => caches.match(request))  // offline fallback
        );
        return;
    }

    // 3. Images / icons / manifest → Cache-first (rarely change)
    event.respondWith(
        caches.match(request).then(cached => {
            if (cached) return cached;
            return fetch(request).then(response => {
                if (response && response.status === 200 && response.type === 'basic') {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
                }
                return response;
            }).catch(() => {
                // SPA fallback for navigation requests
                if (request.mode === 'navigate') {
                    return caches.match('/index.html');
                }
            });
        })
    );
});
