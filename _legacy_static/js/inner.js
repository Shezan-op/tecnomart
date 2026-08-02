/* Shared inner-page reveal animations (lighter than home.js hero) */
gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis;
if (!prefersReducedMotion) {
  lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

const nav = document.querySelector('.nav');
if (nav) {
  ScrollTrigger.create({
    start: 'top -10',
    onUpdate: (self) => nav.classList.toggle('is-scrolled', self.scroll() > 10),
  });
}

const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      document.body.style.overflow = '';
    })
  );
}

const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');
if (cursorDot && cursorRing && window.matchMedia('(hover: hover)').matches) {
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const ring = { x: pos.x, y: pos.y };
  window.addEventListener('mousemove', (e) => {
    pos.x = e.clientX; pos.y = e.clientY;
    gsap.set(cursorDot, { x: pos.x, y: pos.y });
  });
  gsap.ticker.add(() => {
    ring.x += (pos.x - ring.x) * 0.18;
    ring.y += (pos.y - ring.y) * 0.18;
    gsap.set(cursorRing, { x: ring.x, y: ring.y });
  });
  document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('is-active'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('is-active'));
  });
} else if (cursorDot && cursorRing) {
  cursorDot.style.display = 'none';
  cursorRing.style.display = 'none';
}

document.querySelectorAll('[data-magnetic]').forEach((el) => {
  const strength = 0.35;
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * strength, y: y * strength, duration: 0.4, ease: 'power3.out' });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
  });
});

document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  });
});

gsap.utils.toArray('[data-reveal]').forEach((el) => {
  gsap.fromTo(el, { y: 40, opacity: 0 }, {
    y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 88%' },
  });
});

gsap.utils.toArray('[data-reveal-stagger]').forEach((group) => {
  const items = group.children;
  gsap.fromTo(items, { y: 32, opacity: 0 }, {
    y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.08,
    scrollTrigger: { trigger: group, start: 'top 85%' },
  });
});

document.querySelectorAll('[data-split]').forEach((el) => {
  const split = new SplitType(el, { types: 'lines,words' });
  gsap.fromTo(split.words, { y: '110%', opacity: 0 }, {
    y: '0%', opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.02,
    scrollTrigger: { trigger: el, start: 'top 90%' },
  });
});

document.querySelectorAll('.faq-item').forEach((item) => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  if (!q || !a) return;
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.faq-item.is-open').forEach((other) => {
      if (other !== item) {
        other.classList.remove('is-open');
        gsap.to(other.querySelector('.faq-a'), { height: 0, duration: 0.4, ease: 'power3.out' });
      }
    });
    item.classList.toggle('is-open', !isOpen);
    if (!isOpen) {
      gsap.set(a, { height: 'auto' });
      const h = a.offsetHeight;
      gsap.fromTo(a, { height: 0 }, { height: h, duration: 0.45, ease: 'power3.out' });
    } else {
      gsap.to(a, { height: 0, duration: 0.4, ease: 'power3.out' });
    }
  });
});

(() => {
  const rail = document.querySelector('.showcase-rail');
  const wrap = document.querySelector('.showcase-rail-wrap');
  const prev = document.querySelector('[data-rail-prev]');
  const next = document.querySelector('[data-rail-next]');
  if (!rail || !wrap) return;
  const scrollAmount = () => wrap.clientWidth * 0.7;
  next?.addEventListener('click', () => wrap.scrollBy({ left: scrollAmount(), behavior: 'smooth' }));
  prev?.addEventListener('click', () => wrap.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
})();

document.querySelectorAll('.marquee-track').forEach((track) => {
  track.innerHTML += track.innerHTML;
  const distance = track.scrollWidth / 2;
  gsap.to(track, { x: -distance, duration: distance / 40, ease: 'none', repeat: -1 });
});

/* Filter chips (products pages) */
document.querySelectorAll('[data-filter-group]').forEach((group) => {
  const buttons = group.querySelectorAll('[data-filter]');
  const targetSelector = group.dataset.filterGroup;
  const items = document.querySelectorAll(targetSelector);
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const val = btn.dataset.filter;
      items.forEach((item) => {
        const show = val === 'all' || item.dataset.category === val;
        gsap.to(item, {
          opacity: show ? 1 : 0,
          scale: show ? 1 : 0.94,
          duration: 0.3,
          onStart: () => { if (show) item.style.display = ''; },
          onComplete: () => { if (!show) item.style.display = 'none'; },
        });
      });
    });
  });
});
