// re-stats.js — Real Estate Subdomain Animated Stats

const RE_STATS = {
  siteVisits: { start: 0, end: 12400, suffix: '+', id: 'siteVisitCount' },
  adSpend: { start: 0, end: 2.3, decimals: 1, prefix: '₹', suffix: 'Cr+', id: 'adSpendManaged' },
  cplReduction: { start: 0, end: 18, suffix: '%', id: 'cplReduction' }
};

function countUp(el, start, end, duration, decimals = 0, prefix = '', suffix = '') {
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = start + (end - start) * eased;
    el.textContent = prefix + current.toFixed(decimals) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    Object.values(RE_STATS).forEach(stat => {
      const el = document.getElementById(stat.id);
      if (el) countUp(el, stat.start, stat.end, 1800, stat.decimals || 0, stat.prefix || '', stat.suffix || '');
    });
  }, 600);
});
