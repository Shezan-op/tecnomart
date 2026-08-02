/* ============================================================
   TECHNO MART — CORE INTERACTIONS v2
   Awwwards-level · Apple-aesthetic · GSAP + Lenis + 3D
   ============================================================ */

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   PRELOADER
   ============================================================ */
const preloader = document.getElementById('preloader');

if (preloader) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      gsap.to(preloader, {
        opacity: 0,
        duration: 0.7,
        ease: 'power2.inOut',
        onComplete: () => {
          preloader.classList.add('is-done');
          document.body.classList.add('is-loaded');
          // Trigger hero entrance after preloader done
          triggerHeroEntrance();
        },
      });
    }, 900);
  });
}

/* ============================================================
   LENIS SMOOTH SCROLL
   ============================================================ */
let lenis;
if (!prefersReducedMotion) {
  lenis = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.85,
    touchMultiplier: 1.5,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ============================================================
   SCROLL PROGRESS BAR
   ============================================================ */
const scrollProgressBar = document.getElementById('scroll-progress');
if (scrollProgressBar) {
  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      scrollProgressBar.style.width = (self.progress * 100) + '%';
    },
  });
}

/* ============================================================
   NAV SCROLL STATE
   ============================================================ */
const nav = document.querySelector('.nav');
if (nav) {
  ScrollTrigger.create({
    start: 'top -10',
    onUpdate: (self) => nav.classList.toggle('is-scrolled', self.scroll() > 10),
  });
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';

    if (open) {
      gsap.fromTo(
        mobileMenu.querySelectorAll('a'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', stagger: 0.07, delay: 0.15 }
      );
    }
  });

  mobileMenu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    })
  );
}

/* ============================================================
   CUSTOM CURSOR
   ============================================================ */
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

if (cursorDot && cursorRing && window.matchMedia('(hover: hover)').matches) {
  const pos  = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const ring = { x: pos.x, y: pos.y };

  window.addEventListener('mousemove', (e) => {
    pos.x = e.clientX;
    pos.y = e.clientY;
    gsap.set(cursorDot, { x: pos.x, y: pos.y });
  });

  gsap.ticker.add(() => {
    ring.x += (pos.x - ring.x) * 0.14;
    ring.y += (pos.y - ring.y) * 0.14;
    gsap.set(cursorRing, { x: ring.x, y: ring.y });
  });

  document.querySelectorAll('a, button, [data-cursor-hover], model-viewer').forEach((el) => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('is-active'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('is-active'));
  });
} else if (cursorDot && cursorRing) {
  cursorDot.style.display = 'none';
  cursorRing.style.display = 'none';
}

/* ============================================================
   MAGNETIC BUTTONS
   ============================================================ */
document.querySelectorAll('[data-magnetic]').forEach((el) => {
  const strength = 0.38;
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * strength, y: y * strength, duration: 0.45, ease: 'power3.out' });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
  });
});

/* ============================================================
   CARD GLOW — follows cursor inside cards
   ============================================================ */
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  });
});

/* ============================================================
   CATEGORY CARD RADIAL GLOW
   ============================================================ */
document.querySelectorAll('.category-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  });
});

/* ============================================================
   3D CARD TILT
   ============================================================ */
document.querySelectorAll('[data-tilt]').forEach((el) => {
  const strength = 8;
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    gsap.to(el, {
      rotateY: dx * strength,
      rotateX: -dy * strength,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 1000,
    });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(el, {
      rotateX: 0, rotateY: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.5)',
    });
  });
});

/* ============================================================
   GENERIC SCROLL REVEAL
   ============================================================ */
if (!prefersReducedMotion) {
  gsap.utils.toArray('[data-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      }
    );
  });

  gsap.utils.toArray('[data-reveal-stagger]').forEach((group) => {
    const items = group.children;
    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.85, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: group, start: 'top 84%' },
      }
    );
  });
}

/* ============================================================
   SPLIT TEXT REVEAL (headings)
   ============================================================ */
if (!prefersReducedMotion) {
  document.querySelectorAll('[data-split]').forEach((el) => {
    const split = new SplitType(el, { types: 'lines,words' });
    gsap.fromTo(
      split.words,
      { y: '110%', opacity: 0 },
      {
        y: '0%', opacity: 1, duration: 1.0, ease: 'power4.out', stagger: 0.025,
        scrollTrigger: { trigger: el, start: 'top 90%' },
      }
    );
  });
}

/* ============================================================
   HERO ENTRANCE ANIMATION (after preloader)
   ============================================================ */
function triggerHeroEntrance() {
  if (prefersReducedMotion) {
    document.getElementById('hero-eyebrow')?.style && (document.getElementById('hero-eyebrow').style.opacity = '1');
    document.getElementById('hero-sub')?.style && (document.getElementById('hero-sub').style.opacity = '1');
    document.getElementById('hero-actions')?.style && (document.getElementById('hero-actions').style.opacity = '1');
    return;
  }

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  tl.to('#hero-eyebrow', { opacity: 1, y: 0, duration: 0.8 }, 0.1)
    .fromTo(
      '#hero-title .word-wrap',
      { y: '110%', opacity: 0 },
      { y: '0%', opacity: 1, stagger: 0.06, duration: 0.9, ease: 'power4.out' },
      0.2
    )
    .to('#hero-sub', { opacity: 1, y: 0, duration: 0.7 }, 0.6)
    .to('#hero-actions', { opacity: 1, y: 0, duration: 0.6 }, 0.8)
    .fromTo(
      '#hero-3d-stage',
      { opacity: 0, scale: 0.92, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 1.4, ease: 'power3.out' },
      0.3
    );
}

/* ============================================================
   STAT COUNTER (count-up)
   ============================================================ */
document.querySelectorAll('[data-count]').forEach((el) => {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const obj = { val: 0 };

  ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = Math.round(obj.val).toLocaleString() + suffix;
        },
      });
    },
  });
});

/* ============================================================
   REFURB PERCENTAGE COUNTER
   ============================================================ */
const refurbPct = document.getElementById('refurb-pct');
if (refurbPct) {
  const obj = { val: 0 };
  ScrollTrigger.create({
    trigger: refurbPct,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to(obj, {
        val: 98,
        duration: 2.2,
        ease: 'power2.out',
        onUpdate: () => {
          refurbPct.textContent = Math.round(obj.val) + '%';
        },
      });
    },
  });
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
document.querySelectorAll('.faq-item').forEach((item) => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.faq-item.is-open').forEach((other) => {
      if (other !== item) {
        other.classList.remove('is-open');
        gsap.to(other.querySelector('.faq-a'), { height: 0, duration: 0.4, ease: 'power3.inOut' });
      }
    });
    item.classList.toggle('is-open', !isOpen);
    if (!isOpen) {
      gsap.set(a, { height: 'auto' });
      const h = a.offsetHeight;
      gsap.fromTo(a, { height: 0 }, { height: h, duration: 0.5, ease: 'power3.out' });
    } else {
      gsap.to(a, { height: 0, duration: 0.4, ease: 'power3.inOut' });
    }
  });
});

/* ============================================================
   TESTIMONIAL CAROUSEL
   ============================================================ */
(() => {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots   = document.querySelectorAll('.t-dot');
  if (!slides.length) return;
  let current = 0;

  const show = (i) => {
    gsap.to(slides[current], { opacity: 0, y: -10, duration: 0.35, ease: 'power2.in', onComplete: () => {
      slides[current].classList.remove('is-active');
      dots[current]?.classList.remove('is-active');
      current = i;
      slides[current].classList.add('is-active');
      dots[current]?.classList.add('is-active');
      gsap.fromTo(slides[current], { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' });
    }});
  };

  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
  setInterval(() => show((current + 1) % slides.length), 5500);
})();

/* ============================================================
   HORIZONTAL PRODUCT RAIL
   ============================================================ */
(() => {
  const rail = document.querySelector('.showcase-rail');
  const wrap = document.querySelector('.showcase-rail-wrap');
  const prev = document.querySelector('[data-rail-prev]');
  const next = document.querySelector('[data-rail-next]');
  if (!rail || !wrap) return;

  const scrollAmount = () => wrap.clientWidth * 0.72;
  next?.addEventListener('click', () => wrap.scrollBy({ left: scrollAmount(), behavior: 'smooth' }));
  prev?.addEventListener('click', () => wrap.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
})();

/* ============================================================
   MARQUEE — infinite horizontal scroll
   ============================================================ */
document.querySelectorAll('.marquee-track').forEach((track) => {
  track.innerHTML += track.innerHTML;
  const distance = track.scrollWidth / 2;
  gsap.to(track, {
    x: -distance,
    duration: distance / 45,
    ease: 'none',
    repeat: -1,
  });
});

/* ============================================================
   SECTION HEADING PARALLAX
   ============================================================ */
if (!prefersReducedMotion) {
  gsap.utils.toArray('.section-head h2').forEach((h2) => {
    gsap.fromTo(h2,
      { y: 30 },
      {
        y: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: h2,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      }
    );
  });
}

/* ============================================================
   WALL GRID — staggered entrance with random rotate
   ============================================================ */
if (!prefersReducedMotion) {
  const wallItems = document.querySelectorAll('.wall-item');
  if (wallItems.length) {
    gsap.fromTo(
      wallItems,
      { opacity: 0, scale: 0.88, y: 20 },
      {
        opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: {
          each: 0.04,
          from: 'random',
        },
        scrollTrigger: { trigger: '.wall-grid', start: 'top 80%' },
      }
    );
  }
}

/* ============================================================
   BRAND CELLS — staggered wave
   ============================================================ */
if (!prefersReducedMotion) {
  const brandCells = document.querySelectorAll('.brand-cell');
  if (brandCells.length) {
    gsap.fromTo(
      brandCells,
      { opacity: 0 },
      {
        opacity: 1, duration: 0.4, ease: 'power2.out',
        stagger: { each: 0.04, from: 'start' },
        scrollTrigger: { trigger: '.brand-grid', start: 'top 82%' },
      }
    );
  }
}

/* ============================================================
   SERVICE ITEMS — draw underline on enter
   ============================================================ */
if (!prefersReducedMotion) {
  gsap.utils.toArray('.service-item').forEach((item, i) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.fromTo(item, { opacity: 0, x: -20 }, {
          opacity: 1, x: 0, duration: 0.6, ease: 'power3.out', delay: i * 0.04,
        });
      },
    });
  });
}

/* ============================================================
   WHY CARDS — staggered pop-in
   ============================================================ */
if (!prefersReducedMotion) {
  const whyCards = document.querySelectorAll('.why-card');
  if (whyCards.length) {
    gsap.fromTo(
      whyCards,
      { opacity: 0, y: 40, scale: 0.94 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: '.why-grid', start: 'top 82%' },
      }
    );
  }
}

/* ============================================================
   HERO GLOW — cursor follow
   ============================================================ */
(() => {
  const glow = document.querySelector('.hero-glow');
  const hero = document.querySelector('.hero');
  if (!glow || !hero || prefersReducedMotion) return;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width - 0.5) * 60;
    gsap.to(glow, { x: xPct, duration: 1.5, ease: 'power2.out' });
  });
})();

/* ============================================================
   PHONE SHOWCASE — scroll-linked 3D rotation
   ============================================================ */
if (!prefersReducedMotion) {
  const phoneModel = document.getElementById('iphone-model');
  if (phoneModel) {
    ScrollTrigger.create({
      trigger: '#smartphone-showcase',
      start: 'top center',
      end: 'bottom center',
      onUpdate: (self) => {
        // Smoothly adjust auto-rotate speed based on scroll
        const speed = 15 + self.progress * 25;
        phoneModel.setAttribute('rotation-per-second', `${speed}deg`);
      },
    });
  }
}

/* ============================================================
   FOOTER ENTRANCE
   ============================================================ */
if (!prefersReducedMotion) {
  gsap.fromTo('.footer-top > *',
    { opacity: 0, y: 30 },
    {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
      scrollTrigger: { trigger: '.footer', start: 'top 88%' },
    }
  );
}

/* ============================================================
   BODY LOADED
   ============================================================ */
window.addEventListener('load', () => {
  document.body.classList.add('is-loaded');
  ScrollTrigger.refresh();
});
