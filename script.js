// Loader
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 2200);
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 80);
});

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('active'), i * 120);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
revealElements.forEach(el => revealObserver.observe(el));

// Counter animation
const statNums = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = +el.dataset.target;
      let current = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = Math.floor(current);
      }, 25);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
statNums.forEach(el => counterObserver.observe(el));

// Parallax hero
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-bg img');
  if (hero && window.scrollY < window.innerHeight) {
    hero.style.transform = `scale(1.08) translateY(${window.scrollY * 0.15}px)`;
  }
});

// Newsletter form
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = document.getElementById('newsletter-submit');
  btn.textContent = 'Subscribed ✓';
  btn.style.background = '#2d7a4f';
  btn.style.color = '#f5f0eb';
  document.getElementById('newsletter-email').value = '';
});

// Smooth cursor glow effect on hero
const hero = document.getElementById('hero');
hero.addEventListener('mousemove', (e) => {
  const overlay = hero.querySelector('.hero-overlay');
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  overlay.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0,0,0,.15) 0%, rgba(0,0,0,.4) 40%, rgba(0,0,0,.7) 100%)`;
});
