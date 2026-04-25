export class ScanFeedback {
  constructor(container) {
    this.container = container;
  }

  showScanning() {
    this.container.classList.add('scanning');
    this.container.classList.remove('detected', 'error');
  }

  async showSuccess() {
    this.container.classList.add('detected');
    this.container.classList.remove('scanning');
    
    if ('vibrate' in navigator) {
      navigator.vibrate([50, 30, 50]);
    }
    
    this.playSound(880, 100);
    await new Promise(r => setTimeout(r, 300));
  }

  showError(message) {
    this.container.classList.add('error');
    this.container.classList.remove('scanning', 'detected');
    
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100]);
    }
    
    if (window.showToast) window.showToast(message, 'error');
  }

  showHint(message) {
    if (window.showToast) window.showToast(message, 'info');
  }

  playSound(frequency, duration) {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration / 1000);
      
      oscillator.start();
      oscillator.stop(ctx.currentTime + duration / 1000);
    } catch (e) {}
  }
}
