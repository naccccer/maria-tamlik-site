// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
navToggle.addEventListener('click', () => {
const open = navMenu.classList.toggle('open');
navToggle.setAttribute('aria-expanded', String(open));
});
}


// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });


document.querySelectorAll('[data-animate]').forEach((el) => {
const delay = el.getAttribute('data-animate-delay');
if (delay) el.style.transitionDelay = `${delay}s`;
observer.observe(el);
});


// Scroll progress bar
const bar = document.getElementById('scrollbarBar');
const onScroll = () => {
const scrollTop = window.scrollY || document.documentElement.scrollTop;
const height = document.documentElement.scrollHeight - window.innerHeight;
const progress = height > 0 ? (scrollTop / height) : 0;
if (bar) bar.style.transform = `scaleX(${progress})`;
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });


// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
