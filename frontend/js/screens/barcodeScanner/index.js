import { CameraController } from './CameraController.js';
import { ScannerEngine } from './ScannerEngine.js';
import { ScanFeedback } from './ScanFeedback.js';

export const BarcodeScannerNew = {
  camera: new CameraController(),
  scanner: new ScannerEngine(),
  feedback: null,
  hintTimer: null,

  async init() {
    // UI elements are in index.html. We use the existing ones where possible or inject new ones.
    const backBtn = document.getElementById('barcode-back');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            this.stop();
            App.navigateTo('dashboard');
        });
    }

    const manualBtn = document.getElementById('barcode-manual-btn');
    if (manualBtn) {
        manualBtn.addEventListener('click', () => {
            this._setState('manual');
            this.stop(); // Stop camera when switching to manual
        });
    }

    const manualSubmit = document.getElementById('barcode-manual-submit');
    if (manualSubmit) {
        manualSubmit.onclick = () => {
            const input = document.getElementById('barcode-manual-input');
            if (input && input.value) {
                this._performLookup(input.value);
            }
        };
    }
    
    const torchBtn = document.getElementById('scanner-torch');
    if (torchBtn) {
        torchBtn.onclick = async () => {
            const enabled = await this.camera.toggleTorch();
            torchBtn.classList.toggle('active', enabled);
        };
    }
  },

  async show() {
    this._resetUI();
    const container = document.getElementById('barcode-scanner-screen');
    const viewport = document.getElementById('barcode-scanner-view');
    
    // Setup feedback
    this.feedback = new ScanFeedback(document.querySelector('.barcode-viewfinder'));
    
    try {
      await this.start();
    } catch (err) {
      this.handleCameraError(err);
    }
  },

  async start() {
    const video = document.getElementById('barcode-video');
    this._setState('scanner');
    
    // Initialize camera
    const { torchSupported } = await this.camera.initialize(video);
    
    // Toggle torch button visibility if supported
    const torchBtn = document.getElementById('scanner-torch');
    if (torchBtn) torchBtn.style.display = torchSupported ? 'flex' : 'none';
    
    // Start scanner
    this.feedback.showScanning();
    await this.scanner.start(video, (result) => this.handleScan(result));
    
    // Schedule hints
    this.scheduleHints();
  },

  scheduleHints() {
    this.cancelHints();
    this.hintTimer = setTimeout(() => {
      this.feedback.showHint('Hold the barcode 4-6 inches from the camera');
      this.hintTimer = setTimeout(() => {
        if (this.camera.torchSupported && !this.camera.torchEnabled) {
          this.feedback.showHint('Try turning on the flashlight 🔦');
        } else {
          this.feedback.showHint('Make sure the barcode is flat and well-lit');
        }
      }, 5000);
    }, 5000);
  },

  cancelHints() {
    if (this.hintTimer) {
      clearTimeout(this.hintTimer);
      this.hintTimer = null;
    }
  },

  async handleScan({ code, format, engine }) {
    this.cancelHints();
    await this.feedback.showSuccess();
    
    // Use the existing handleScan logic from BarcodeScannerScreen if possible, 
    // but here we call it directly or implement lookup
    this.stop();
    this._performLookup(code);
  },

  async _performLookup(barcode) {
    this._setState('loading');
    document.getElementById('barcode-loading-code').textContent = barcode;
    
    // Hint that we are doing a deep search if it takes a bit
    const aiHintTimer = setTimeout(() => {
        showToast('Searching deep database...', 'psychology');
    }, 2000);

    try {
      const token = localStorage.getItem('mymacros_token');
      const backendUrl = window.CONFIG?.BACKEND_URL || 'http://localhost:5000';
      const res = await fetch(`${backendUrl}/api/barcode/lookup/${barcode}`, {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        signal: AbortSignal.timeout(20000)
      });
      
      clearTimeout(aiHintTimer);
      const data = await res.json();
      
      if (res.ok && data.food) {
        if (data.source === 'ai') {
            showToast('AI Research complete!', 'psychology');
        }
        this._setState('product');
        BarcodeScannerScreen._showProductCard(data.food);
      } else {
        this._setState('notfound');
        const errorMsg = document.querySelector('#barcode-notfound-view p:nth-of-type(1)');
        if (errorMsg) errorMsg.textContent = `Product ${barcode} could not be identified even with AI research.`;
      }
    } catch (err) {
      clearTimeout(aiHintTimer);
      console.error('Lookup failed:', err);
      this._setState('notfound');
    }
  },

  handleCameraError(err) {
    console.error('Scanner Error:', err);
    this._setState('error');
    const msgEl = document.getElementById('barcode-error-msg');
    if (msgEl) msgEl.textContent = err.message || 'Could not start camera.';
  },

  stop() {
    this.cancelHints();
    this.scanner.stop();
    this.camera.stop();
  },

  _setState(state) {
    const views = ['scanner', 'loading', 'notfound', 'error', 'manual'];
    views.forEach(s => {
      document.getElementById(`barcode-${s}-view`)?.classList.toggle('hidden', s !== state);
    });
    
    const panel = document.getElementById('barcode-product-panel');
    if (panel) panel.classList.toggle('hidden', state !== 'product');
  },

  _resetUI() {
    this._setState('scanner');
    const torchBtn = document.getElementById('scanner-torch');
    if (torchBtn) torchBtn.classList.remove('active');
  }
};
