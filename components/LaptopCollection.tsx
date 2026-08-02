'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function LaptopCollection() {
  const container = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Section Head Parallax
    gsap.fromTo(container.current?.querySelector('h2') as Element,
      { y: 30 },
      {
        y: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current?.querySelector('h2'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      }
    );

    // Staggered reveal of cards
    if (railRef.current) {
      gsap.fromTo(
        railRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.85, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: railRef.current, start: 'top 84%' },
        }
      );
    }

    // 3D Tilt and Glow
    const cards = container.current?.querySelectorAll('.product-card');
    cards?.forEach((el) => {
      const card = el as HTMLElement;
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        card.style.setProperty('--my', `${e.clientY - rect.top}px`);

        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        gsap.to(card, {
          rotateY: dx * 8,
          rotateX: -dy * 8,
          duration: 0.4,
          ease: 'power2.out',
          transformPerspective: 1000,
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateX: 0, rotateY: 0,
          duration: 0.7,
          ease: 'elastic.out(1, 0.5)',
        });
      });
    });
  }, { scope: container });

  const scrollRail = (direction: 'prev' | 'next') => {
    if (!wrapRef.current) return;
    const amount = wrapRef.current.clientWidth * 0.72;
    wrapRef.current.scrollBy({ left: direction === 'next' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <section className="section" id="laptop-collection" ref={container}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-index">fig. 03 — laptop collection</span>
            <h2 className="display" style={{ marginTop: '0.5rem' }}>Built for how you work.</h2>
          </div>
          <p className="desc">Gaming rigs, creator workstations, and everyday business machines — new and precision-refurbished.</p>
        </div>
      </div>

      <div className="showcase-rail-wrap wrap" ref={wrapRef}>
        <div className="showcase-rail" id="showcase-rail" ref={railRef}>

          <div className="product-card card" data-cursor-hover data-tilt>
            <div className="card-glow"></div>
            <div className="stage">
              <svg viewBox="0 0 200 140"><rect x="20" y="10" width="160" height="100" rx="8" fill="#141416" stroke="#2a2a2e"/><rect x="30" y="20" width="140" height="80" rx="3" fill="#0a0a0b"/><rect x="10" y="112" width="180" height="10" rx="3" fill="#1a1a1c" stroke="#2a2a2e"/><text x="100" y="68" textAnchor="middle" fill="#3a3a3e" fontSize="11" fontFamily="monospace">RTX · 165Hz</text></svg>
              <span className="product-spec-badge">RTX · 165Hz</span>
            </div>
            <div className="product-meta">
              <div>
                <span className="chip chip-accent">Gaming</span>
                <h3 style={{ marginTop: '0.6rem' }}>Vertex RX 15</h3>
                <p className="cat">RTX-class · 16GB · 165Hz</p>
              </div>
              <span className="product-price">₹94,999</span>
            </div>
          </div>

          <div className="product-card card" data-cursor-hover data-tilt>
            <div className="card-glow"></div>
            <div className="stage">
              <svg viewBox="0 0 200 140"><rect x="20" y="10" width="160" height="100" rx="8" fill="#141416" stroke="#2a2a2e"/><rect x="30" y="20" width="140" height="80" rx="3" fill="#0a0a0b"/><rect x="10" y="112" width="180" height="10" rx="3" fill="#1a1a1c" stroke="#2a2a2e"/></svg>
              <span className="product-spec-badge">i5 · FP</span>
            </div>
            <div className="product-meta">
              <div>
                <span className="chip">Business</span>
                <h3 style={{ marginTop: '0.6rem' }}>ProBook Slate 14</h3>
                <p className="cat">i5 · 16GB · Fingerprint</p>
              </div>
              <span className="product-price">₹52,499</span>
            </div>
          </div>

          <div className="product-card card" data-cursor-hover data-tilt>
            <div className="card-glow"></div>
            <div className="stage">
              <svg viewBox="0 0 200 140"><rect x="20" y="10" width="160" height="100" rx="8" fill="#141416" stroke="#2a2a2e"/><rect x="30" y="20" width="140" height="80" rx="3" fill="#0a0a0b"/><rect x="10" y="112" width="180" height="10" rx="3" fill="#1a1a1c" stroke="#2a2a2e"/></svg>
              <span className="product-spec-badge">OLED</span>
            </div>
            <div className="product-meta">
              <div>
                <span className="chip">Creator</span>
                <h3 style={{ marginTop: '0.6rem' }}>StudioBook Pro X</h3>
                <p className="cat">OLED · 32GB · Color-true</p>
              </div>
              <span className="product-price">₹1,38,000</span>
            </div>
          </div>

          <div className="product-card card" data-cursor-hover data-tilt>
            <div className="card-glow"></div>
            <div className="stage">
              <svg viewBox="0 0 200 140"><rect x="20" y="10" width="160" height="100" rx="8" fill="#141416" stroke="#2a2a2e"/><rect x="30" y="20" width="140" height="80" rx="3" fill="#0a0a0b"/><rect x="10" y="112" width="180" height="10" rx="3" fill="#1a1a1c" stroke="#2a2a2e"/></svg>
              <span className="product-spec-badge">8GB</span>
            </div>
            <div className="product-meta">
              <div>
                <span className="chip">Student</span>
                <h3 style={{ marginTop: '0.6rem' }}>Everyday Air 13</h3>
                <p className="cat">Lightweight · 8GB · Long battery</p>
              </div>
              <span className="product-price">₹36,999</span>
            </div>
          </div>

          <div className="product-card card" data-cursor-hover data-tilt>
            <div className="card-glow"></div>
            <div className="stage">
              <svg viewBox="0 0 200 140"><rect x="20" y="10" width="160" height="100" rx="8" fill="#141416" stroke="#2a2a2e"/><rect x="30" y="20" width="140" height="80" rx="3" fill="#0a0a0b"/><rect x="10" y="112" width="180" height="10" rx="3" fill="#1a1a1c" stroke="#2a2a2e"/></svg>
              <span className="product-spec-badge">Grade A</span>
            </div>
            <div className="product-meta">
              <div>
                <span className="chip chip-accent">Refurbished</span>
                <h3 style={{ marginTop: '0.6rem' }}>Certified ThinkPad T14</h3>
                <p className="cat">i7 · Grade A · 90-day warranty</p>
              </div>
              <span className="product-price">₹28,499</span>
            </div>
          </div>

        </div>
      </div>

      <div className="wrap rail-controls">
        <button className="rail-btn" onClick={() => scrollRail('prev')} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button className="rail-btn" onClick={() => scrollRail('next')} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </section>
  );
}
