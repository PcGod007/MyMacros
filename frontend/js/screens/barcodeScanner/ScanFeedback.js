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

  async playSound(frequency, duration) {
    try {
      // Reuse the shared SoundFX AudioContext — creating a new one each call
      // exhausts the browser's AudioContext limit (~6) and causes silent failures.
      const ctx = await window.SoundFX._ready();
      const dur = duration / 1000;
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();

      oscillator.connect(gain);
      gain.connect(ctx.destination);

      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);

      oscillator.start();
      oscillator.stop(ctx.currentTime + dur + 0.005);
    } catch (e) {}
  }
}
