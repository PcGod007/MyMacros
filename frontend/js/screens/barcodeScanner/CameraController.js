export class CameraController {
  constructor() {
    this.stream = null;
    this.videoTrack = null;
    this.videoElement = null;
    this.torchSupported = false;
    this.torchEnabled = false;
  }

  async initialize(videoElement) {
    this.stop(); // Clean up existing stream before starting new one
    this.videoElement = videoElement;

    try {
      // CRITICAL: Request the BACK camera with continuous focus
      // 'environment' = back camera, which is what we want for scanning
      const constraints = {
        video: {
          facingMode: { ideal: 'environment' },  // back camera
          width: { ideal: 1920 },                // high res for small barcodes
          height: { ideal: 1080 },
          // These advanced constraints are what make scanning actually work
          advanced: [
            { focusMode: 'continuous' },         // auto-refocus continuously
            { exposureMode: 'continuous' },
            { whiteBalanceMode: 'continuous' }
          ]
        },
        audio: false
      };

      this.stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.videoTrack = this.stream.getVideoTracks()[0];
      
      // Critical for iOS Safari
      this.videoElement.setAttribute('playsinline', 'true');
      this.videoElement.setAttribute('autoplay', 'true');
      this.videoElement.setAttribute('muted', 'true');
      this.videoElement.srcObject = this.stream;

      // Wait for video to actually start
      await new Promise((resolve) => {
        this.videoElement.onloadedmetadata = () => {
          this.videoElement.play().then(resolve);
        };
      });

      // Check for torch (flashlight) support
      const capabilities = this.videoTrack.getCapabilities();
      this.torchSupported = !!capabilities.torch;

      // Try to lock focus to a closer distance (better for barcodes)
      // Not all devices support this, but when they do it's gold
      if (capabilities.focusDistance) {
        try {
          await this.videoTrack.applyConstraints({
            advanced: [{ 
              focusMode: 'manual',
              focusDistance: capabilities.focusDistance.min  // closest focus
            }]
          });
        } catch (e) {
          // Fallback to continuous if manual fails
          await this.videoTrack.applyConstraints({
            advanced: [{ focusMode: 'continuous' }]
          });
        }
      }

      // Try to apply zoom for tiny barcodes
      if (capabilities.zoom) {
        const idealZoom = Math.min(2, capabilities.zoom.max);
        try {
          await this.videoTrack.applyConstraints({
            advanced: [{ zoom: idealZoom }]
          });
        } catch (e) {
          // Zoom not critical, continue
        }
      }

      return { success: true, torchSupported: this.torchSupported };
    } catch (err) {
      console.error('[CameraController] Init failed:', err);
      throw this.translateError(err);
    }
  }

  async toggleTorch() {
    if (!this.torchSupported || !this.videoTrack) return false;

    try {
      this.torchEnabled = !this.torchEnabled;
      await this.videoTrack.applyConstraints({
        advanced: [{ torch: this.torchEnabled }]
      });
      return this.torchEnabled;
    } catch (err) {
      console.error('[CameraController] Torch toggle failed:', err);
      this.torchEnabled = false;
      return false;
    }
  }

  // Tap-to-focus: when user taps on the video, focus on that point
  async focusAt(x, y) {
    if (!this.videoTrack) return;
    
    const capabilities = this.videoTrack.getCapabilities();
    if (!capabilities.pointsOfInterest) return;
    
    try {
      await this.videoTrack.applyConstraints({
        advanced: [{
          pointsOfInterest: [{ x, y }],
          focusMode: 'single-shot'
        }]
      });
    } catch (e) {
      // Tap-to-focus not supported, ignore
    }
  }

  stop() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
      this.videoTrack = null;
    }
    if (this.videoElement) {
      this.videoElement.srcObject = null;
    }
  }

  translateError(err) {
    const errorMap = {
      'NotAllowedError': { 
        code: 'PERMISSION_DENIED',
        message: 'Camera access denied. Please enable camera permissions in your browser settings.'
      },
      'NotFoundError': {
        code: 'NO_CAMERA',
        message: 'No camera found on this device.'
      },
      'NotReadableError': {
        code: 'CAMERA_IN_USE',
        message: 'Camera is being used by another application.'
      },
      'OverconstrainedError': {
        code: 'CONSTRAINTS_FAILED',
        message: 'Camera does not support required settings. Trying with reduced quality...'
      },
      'SecurityError': {
        code: 'NOT_HTTPS',
        message: 'Camera requires a secure connection (HTTPS).'
      }
    };

    const translated = errorMap[err.name] || {
      code: 'UNKNOWN',
      message: err.message || 'Failed to access camera.'
    };

    return Object.assign(new Error(translated.message), translated);
  }
}
