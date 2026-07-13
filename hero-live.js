// hero-live.js
const pathname = window.location.pathname;

const slug = window.__RE_SUBDOMAIN__
  ? 'real-estate'
  : pathname.split('/industries/')[1]?.replace('.html', '') || null;

console.log('Hero live initialized for slug:', slug);
