/* ============================================================
   HERO — 3D MacBook Model Scroll Animation
   model-viewer controls + GSAP ScrollTrigger
   ============================================================ */

(() => {
  const macbook = document.getElementById('macbook-model');
  const heroStage = document.getElementById('hero-3d-stage');
  const hero = document.getElementById('hero');

  if (!macbook || !hero) return;
  if (typeof prefersReducedMotion !== 'undefined' && prefersReducedMotion) return;

  /* ---- Scroll-pinned hero 3D orbit ---- */
  // As user scrolls, rotate the MacBook model's camera orbit
  let orbitTheta = 0; // horizontal angle in degrees
  let orbitPhi = 75;  // vertical angle in degrees

  ScrollTrigger.create({
    trigger: hero,
    start: 'top top',
    end: '+=80%',
    scrub: 1.2,
    onUpdate: (self) => {
      const p = self.progress;
      orbitTheta = 0 + p * -45;
      orbitPhi   = 75 - p * 15;
      const zoom = 120 + p * 20;
      macbook.setAttribute('camera-orbit', `${orbitTheta}deg ${orbitPhi}deg ${zoom}%`);
    },
  });

  /* ---- Hero content parallax on scroll ---- */
  gsap.to('.hero-content', {
    y: '-25%',
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  /* ---- Idle float animation on the 3D stage ---- */
  if (heroStage) {
    gsap.to(heroStage, {
      y: '-=12',
      duration: 3.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  }

  /* ---- MacBook model tilt on mouse move ---- */
  if (hero) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const xFrac = (e.clientX - rect.left) / rect.width;   // 0–1
      const yFrac = (e.clientY - rect.top)  / rect.height;  // 0–1

      // Subtle tilt: ±8 degrees horizontal, ±5 degrees vertical
      const tiltH = (xFrac - 0.5) * 16;  // -8 to +8
      const tiltV = (yFrac - 0.5) * 10;  // -5 to +5

      // Update orbit on mouse move (only if not scrolled)
      const scrollProg = ScrollTrigger.getAll().find(st => st.trigger === hero);
      if (!scrollProg || scrollProg.progress < 0.05) {
        macbook.setAttribute('camera-orbit', `${tiltH}deg ${75 - tiltV}deg 120%`);
      }
    });

    hero.addEventListener('mouseleave', () => {
      // Restore to default
      gsap.to({ theta: orbitTheta }, {
        theta: 0,
        duration: 1.2,
        ease: 'power2.out',
        onUpdate: function() {
          macbook.setAttribute('camera-orbit', `0deg 75deg 120%`);
        },
      });
    });
  }

})();

/* ============================================================
   PHONE SHOWCASE — scroll-driven entrance animations
   ============================================================ */
(() => {
  const phoneSection = document.getElementById('smartphone-showcase');
  if (!phoneSection) return;
  if (typeof prefersReducedMotion !== 'undefined' && prefersReducedMotion) return;

  const content = phoneSection.querySelector('.phone-showcase-content');
  const stage   = phoneSection.querySelector('.phone-3d-stage');

  if (content) {
    gsap.fromTo(
      content.children,
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: phoneSection, start: 'top 70%' },
      }
    );
  }

  if (stage) {
    gsap.fromTo(
      stage,
      { opacity: 0, x: 60, scale: 0.9 },
      {
        opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: phoneSection, start: 'top 70%' },
      }
    );
  }
})();

/* ============================================================
   LAPTOP SECTION — pinned horizontal scroll
   ============================================================ */
(() => {
  const laptopSection = document.getElementById('laptop-collection');
  if (!laptopSection) return;
  if (typeof prefersReducedMotion !== 'undefined' && prefersReducedMotion) return;

  // Animate section heading with split reveal
  const heading = laptopSection.querySelector('h2.display');
  if (heading && typeof SplitType !== 'undefined') {
    const split = new SplitType(heading, { types: 'lines,words' });
    gsap.fromTo(
      split.words,
      { y: '100%', opacity: 0 },
      {
        y: '0%', opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.035,
        scrollTrigger: { trigger: heading, start: 'top 85%' },
      }
    );
  }
})();

/* ============================================================
   REFURB RINGS — animated stagger
   ============================================================ */
(() => {
  const rings = document.querySelectorAll('.refurb-visual .ring');
  if (!rings.length) return;
  if (typeof prefersReducedMotion !== 'undefined' && prefersReducedMotion) return;

  gsap.fromTo(
    rings,
    { scale: 0.5, opacity: 0 },
    {
      scale: 1, opacity: 1, duration: 1.2, ease: 'elastic.out(1, 0.5)',
      stagger: 0.15,
      scrollTrigger: { trigger: '.refurb-visual', start: 'top 80%' },
    }
  );

  gsap.fromTo(
    '.refurb-badge',
    { opacity: 0, y: 20 },
    {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5,
      scrollTrigger: { trigger: '.refurb-visual', start: 'top 80%' },
    }
  );
})();

/* ============================================================
   STATS — big number reveal
   ============================================================ */
(() => {
  const statItems = document.querySelectorAll('.stat-item');
  if (!statItems.length) return;
  if (typeof prefersReducedMotion !== 'undefined' && prefersReducedMotion) return;

  gsap.fromTo(
    statItems,
    { opacity: 0, y: 30, scale: 0.95 },
    {
      opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12,
      scrollTrigger: { trigger: '.stats-grid', start: 'top 82%' },
    }
  );
})();

/* ============================================================
   FINAL CTA — dramatic entrance
   ============================================================ */
(() => {
  const cta = document.querySelector('.final-cta');
  if (!cta) return;
  if (typeof prefersReducedMotion !== 'undefined' && prefersReducedMotion) return;

  const tl = gsap.timeline({
    scrollTrigger: { trigger: cta, start: 'top 80%' },
  });

  tl.fromTo('.final-cta .eyebrow', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
    .fromTo('.final-cta h2', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' }, 0.15)
    .fromTo('.final-cta .hero-actions', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.35);
})();
