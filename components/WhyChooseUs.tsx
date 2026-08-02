'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
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

    // Card stagger pop-in
    const whyCards = container.current?.querySelectorAll('.why-card');
    if (whyCards && whyCards.length) {
      gsap.fromTo(
        whyCards,
        { opacity: 0, y: 40, scale: 0.94 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: '.why-grid', start: 'top 82%' },
        }
      );
    }
  }, { scope: container });

  return (
    <section className="section" id="why-us" ref={container}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-index">fig. 08 — why techno mart</span>
            <h2 className="display" style={{ marginTop: '0.5rem' }}>Trust, built device by device.</h2>
          </div>
        </div>

        <div className="why-grid">
          <div className="why-card card" style={{ opacity: 0 }}>
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/></svg>
            <h4>Genuine Products</h4>
            <p>Sourced only from authorized channels and vetted resellers.</p>
          </div>
          <div className="why-card card" style={{ opacity: 0 }}>
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>
            <h4>Expert Technicians</h4>
            <p>Years of hands-on repair experience across every major brand.</p>
          </div>
          <div className="why-card card" style={{ opacity: 0 }}>
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M13 2L4 14h7l-1 8 10-13h-7z"/></svg>
            <h4>Fast Turnaround</h4>
            <p>Most repairs completed same-day, no unnecessary waiting.</p>
          </div>
          <div className="why-card card" style={{ opacity: 0 }}>
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a4 4 0 018 0v2"/></svg>
            <h4>Warranty Support</h4>
            <p>Every purchase and repair backed by clear written coverage.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
