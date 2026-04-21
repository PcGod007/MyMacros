/**
 * MyMacros — Global Configuration
 * 
 * CHANGE THIS URL to your Render URL when deploying to production!
 */
const CONFIG = {
    // Backend API URL
    BACKEND_URL: 'https://mymacros.onrender.com',

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
