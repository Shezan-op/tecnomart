'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Accessories() {
  const container = useRef<HTMLDivElement>(null);

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

    // Wall items staggered random entrance
    const wallItems = container.current?.querySelectorAll('.wall-item');
    if (wallItems && wallItems.length) {
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
  }, { scope: container });

  return (
    <section className="section" id="accessories" ref={container}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-index">fig. 07 — accessories</span>
            <h2 className="display" style={{ marginTop: '0.5rem' }}>The parts that complete it.</h2>
          </div>
          <p className="desc">Chargers, drives, gaming gear, and everything in between — genuine, in stock, ready today.</p>
        </div>

        <div className="wall-grid">
          <div className="wall-item span-2" style={{ opacity: 0 }}>
            <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="18" y="10" width="24" height="40" rx="10"/><circle cx="30" cy="42" r="2" fill="currentColor"/></svg>
            <span className="wall-label">Headphones</span>
          </div>
          <div className="wall-item" style={{ opacity: 0 }}>
            <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="20" y="14" width="8" height="14" rx="4"/><rect x="32" y="14" width="8" height="14" rx="4"/><rect x="16" y="30" width="28" height="12" rx="6"/></svg>
            <span className="wall-label">Earbuds</span>
          </div>
          <div className="wall-item" style={{ opacity: 0 }}>
            <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="14" y="20" width="32" height="20" rx="3"/><path d="M46 26h4v8h-4z"/></svg>
            <span className="wall-label">Chargers</span>
          </div>
          <div className="wall-item span-2-row" style={{ opacity: 0 }}>
            <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="16" y="8" width="28" height="44" rx="6"/><line x1="24" y1="18" x2="36" y2="18"/><line x1="24" y1="26" x2="36" y2="26"/></svg>
            <span className="wall-label">Power Banks</span>
          </div>
          <div className="wall-item" style={{ opacity: 0 }}>
            <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="16" y="24" width="28" height="12" rx="2"/></svg>
            <span className="wall-label">SSDs</span>
          </div>
          <div className="wall-item" style={{ opacity: 0 }}>
            <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="14" y="26" width="10" height="8"/><rect x="26" y="26" width="10" height="8"/><rect x="38" y="26" width="8" height="8"/></svg>
            <span className="wall-label">RAM</span>
          </div>
          <div className="wall-item" style={{ opacity: 0 }}>
            <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.3"><ellipse cx="30" cy="30" rx="12" ry="8"/></svg>
            <span className="wall-label">Mouse</span>
          </div>
          <div className="wall-item span-2" style={{ opacity: 0 }}>
            <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="10" y="24" width="40" height="14" rx="3"/></svg>
            <span className="wall-label">Keyboards</span>
          </div>
          <div className="wall-item" style={{ opacity: 0 }}>
            <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="16" y="16" width="28" height="20" rx="2"/><path d="M24 36v6M36 36v6"/></svg>
            <span className="wall-label">Monitors</span>
          </div>
          <div className="wall-item" style={{ opacity: 0 }}>
            <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="20" y="12" width="20" height="34" rx="4"/></svg>
            <span className="wall-label">Speakers</span>
          </div>
          <div className="wall-item" style={{ opacity: 0 }}>
            <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M14 30h32M40 24l6 6-6 6"/></svg>
            <span className="wall-label">Cables</span>
          </div>
          <div className="wall-item" style={{ opacity: 0 }}>
            <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="18" y="20" width="24" height="20" rx="4"/></svg>
            <span className="wall-label">Adapters</span>
          </div>
          <div className="wall-item span-2" style={{ opacity: 0 }}>
            <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="12" y="20" width="36" height="20" rx="3"/><circle cx="30" cy="30" r="5"/></svg>
            <span className="wall-label">Cooling Pads</span>
          </div>
          <div className="wall-item" style={{ opacity: 0 }}>
            <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="14" y="18" width="32" height="26" rx="4"/></svg>
            <span className="wall-label">Laptop Bags</span>
          </div>
        </div>
      </div>
    </section>
  );
}
