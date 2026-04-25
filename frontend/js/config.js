/**
 * MyMacros — Global Configuration
 * 
 * CHANGE THIS URL to your Render URL when deploying to production!
 */
window.CONFIG = {
    // Backend API URL (auto-detects local vs production)
    BACKEND_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:5000'
        : 'https://mymacros.onrender.com',

    /**
     * Keep-alive heartbeat — pings backend every 5 min while the app is open
     * to prevent Render free-tier from sleeping.
     */
    _keepAliveTimer: null,
    startKeepAlive() {
        if (this._keepAliveTimer) return;               // already running
        const INTERVAL = 5 * 60 * 1000;                 // 5 minutes
        const ping = () => {
            fetch(`${this.BACKEND_URL}/api/health`)
                .catch(() => {});                        // fire-and-forget
        };
        ping();                                          // first ping immediately
        this._keepAliveTimer = setInterval(ping, INTERVAL);
    }
};
