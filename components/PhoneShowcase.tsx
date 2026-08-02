'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function PhoneShowcase() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (container.current) {
      const content = container.current.querySelector('.phone-showcase-content');
      if (content) {
        gsap.fromTo(
          content,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: content, start: 'top 88%' },
          }
        );
      }
    }
  }, { scope: container });

  return (
    <section className="section phone-showcase" id="smartphone-showcase" style={{ paddingInline: 0 }} ref={container}>
      <div className="phone-showcase-content">
        <span className="section-index">fig. 04 — smartphone collection</span>
        <h2 className="display" style={{ marginTop: '0.5rem' }}>Flagship to<br />first phone.</h2>
        <p>New, display units, and certified used — each tested across battery, display, and camera before it reaches you.</p>

        <div className="phone-spec-list">
          <div className="phone-spec">
            <span className="phone-spec-num">01</span>
            <div>
              <h4>Flagship Models</h4>
              <p className="cat">Latest silicon, pro cameras, day-one</p>
            </div>
          </div>
          <div className="phone-spec">
            <span className="phone-spec-num">02</span>
            <div>
              <h4>Mid-Range Performers</h4>
              <p className="cat">Balanced everyday excellence</p>
            </div>
          </div>
          <div className="phone-spec">
            <span className="phone-spec-num">03</span>
            <div>
              <h4>Certified Refurbished</h4>
              <p className="cat">Tested, warrantied, honestly graded</p>
            </div>
          </div>
          <div className="phone-spec">
            <span className="phone-spec-num">04</span>
            <div>
              <h4>Display Units</h4>
              <p className="cat">Deep discounts, fully tested</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
          <Link href="/smartphones" className="btn btn-primary" data-magnetic>View Smartphones</Link>
          <Link href="/refurbished" className="btn btn-ghost" data-magnetic>See Refurbished</Link>
        </div>
      </div>
      
      {/* 3D iPhone Showcase section is deliberately removed as per the request */}
    </section>
  );
}
