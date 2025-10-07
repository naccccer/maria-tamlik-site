// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Reveal sections (fallback shows all immediately)
  const items = document.querySelectorAll('[data-animate]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach((el) => {
      const d = el.getAttribute('data-animate-delay');
      if (d) el.style.transitionDelay = `${d}s`;
      io.observe(el);
    });
  } else {
    // Old browsers: just show everything
    items.forEach((el) => {
      el.classList.add('is-visible');
      el.style.transitionDelay = '0s';
    });
  }

  // Header progress bar
  const bar = document.getElementById('scrollbarBar');
  function onScroll() {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const p = h > 0 ? (window.scrollY || document.documentElement.scrollTop) / h : 0;
    if (bar) bar.style.width = `${Math.max(0, Math.min(1, p)) * 100}%`;
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
