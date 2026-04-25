export class ScannerEngine {
  constructor() {
    this.engine = null;        // 'native' | 'zxing' | 'html5qrcode'
    this.scanning = false;
    this.onDetected = null;    // callback
    this.lastScannedCode = null;
    this.lastScannedAt = 0;
    this.DEBOUNCE_MS = 2000;   // ignore same code for 2s
    
    // Performance
    this.scanCount = 0;
    this.scanInterval = null;
    
    // ROI: only scan center 60% of frame
    // This dramatically improves speed AND accuracy
    this.roi = { x: 0.2, y: 0.35, width: 0.6, height: 0.3 };
  }

  async start(videoElement, onDetected) {
    this.videoElement = videoElement;
    this.onDetected = onDetected;
    this.scanning = true;

    // Try native BarcodeDetector first (fastest, most accurate)
    if ('BarcodeDetector' in window) {
      try {
        const formats = await BarcodeDetector.getSupportedFormats();
        const ourFormats = ['ean_13', 'ean_8', 'upc_a', 'upc_e', 'code_128', 'code_39'];
        const supported = ourFormats.filter(f => formats.includes(f));
        
        if (supported.length > 0) {
          this.detector = new BarcodeDetector({ formats: supported });
          this.engine = 'native';
          this.startNativeScanLoop();
          console.log('[Scanner] Using native BarcodeDetector');
          return;
        }
      } catch (e) {
        console.warn('[Scanner] Native detector failed, falling back:', e);
      }
    }

    // Fallback 1: ZXing (using whatever is available on window)
    try {
      const ZX = window.ZXing || window.ZXingBrowser;
      if (!ZX) throw new Error('ZXing not loaded');

      // Using the monolithic library style as seen before
      this.zxingReader = new ZX.BrowserBarcodeReader();
      this.engine = 'zxing';
      
      this.zxingReader.decodeFromVideoElement(
        this.videoElement,
        (result, error) => {
          if (result && this.scanning) {
            this.handleDetection(result.getText(), 'zxing');
          }
        }
      );
      
      console.log('[Scanner] Using ZXing continuous mode');
      return;
    } catch (e) {
      console.warn('[Scanner] ZXing failed, trying final fallback:', e);
    }

    // Fallback 2: html5-qrcode (most forgiving, good for damaged barcodes)
    try {
      // Assuming Html5Qrcode is loaded on window via script tag
      if (window.Html5Qrcode) {
        this.html5Reader = new window.Html5Qrcode('scanner-video-container');
        this.engine = 'html5qrcode';
        
        await this.html5Reader.start(
          { facingMode: 'environment' },
          {
            fps: 10,
            qrbox: { width: 280, height: 120 },  // ROI box
            aspectRatio: 1.7777
          },
          (decodedText) => {
            if (this.scanning) {
              this.handleDetection(decodedText, 'html5qrcode');
            }
          },
          () => {} // ignore individual frame failures
        );
        
        console.log('[Scanner] Using html5-qrcode fallback');
        return;
      }
    } catch (e) {
      console.warn('[Scanner] html5-qrcode failed:', e);
    }
    
    // If we reach here and nothing started, start a manual fallback loop with the native BarcodeDetector if it exists
    if (this.engine === null && 'BarcodeDetector' in window) {
        this.detector = new BarcodeDetector({ formats: ['ean_13', 'ean_8', 'upc_a', 'upc_e'] });
        this.engine = 'native';
        this.startNativeScanLoop();
    } else if (this.engine === null) {
        throw new Error('No barcode scanning library could initialize');
    }
  }

  startNativeScanLoop() {
    // Run detection every 100ms
    this.scanInterval = setInterval(async () => {
      if (!this.scanning || !this.videoElement.videoWidth) return;
      
      try {
        const barcodes = await this.detector.detect(this.videoElement);
        
        if (barcodes.length > 0) {
          const bestBarcode = barcodes[0]; // Simplification
          this.handleDetection(bestBarcode.rawValue, bestBarcode.format);
        }
      } catch (err) {
        // Detection errors per frame are normal
      }
    }, 100);
  }

  handleDetection(code, format) {
    const now = Date.now();
    
    // Debounce
    if (code === this.lastScannedCode && (now - this.lastScannedAt) < this.DEBOUNCE_MS) {
      return;
    }
    
    if (!this.isValidBarcode(code)) {
      return;
    }
    
    this.lastScannedCode = code;
    this.lastScannedAt = now;
    
    // Pause scanning
    this.scanning = false;
    
    // Notify
    if (this.onDetected) {
        this.onDetected({ code, format, engine: this.engine });
    }
  }

  isValidBarcode(code) {
    if (!/^\d{8,14}$/.test(code)) return false;
    return true;
  }

  resume() {
    this.scanning = true;
  }

  stop() {
    this.scanning = false;
    
    if (this.scanInterval) {
      clearInterval(this.scanInterval);
      this.scanInterval = null;
    }
    
    if (this.zxingReader) {
      this.zxingReader.reset();
      this.zxingReader = null;
    }
    
    if (this.html5Reader) {
      this.html5Reader.stop().catch(() => {});
      this.html5Reader = null;
    }
  }
}
