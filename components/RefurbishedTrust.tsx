'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function RefurbishedTrust() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Staggered checks
    const checks = container.current?.querySelector('.refurb-checks');
    if (checks) {
      gsap.fromTo(
        checks.children,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.85, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: checks, start: 'top 84%' },
        }
      );
    }

    // Visual reveal
    const visual = container.current?.querySelector('.refurb-visual');
    if (visual) {
      gsap.fromTo(
        visual,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: visual, start: 'top 88%' },
        }
      );
    }

    // Percentage counter
    const pct = container.current?.querySelector('#refurb-pct') as HTMLElement;
    if (pct) {
      const obj = { val: 0 };
      ScrollTrigger.create({
        trigger: pct,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: 98,
            duration: 2.2,
            ease: 'power2.out',
            onUpdate: () => {
              pct.textContent = Math.round(obj.val) + '%';
            },
          });
        },
      });
    }
  }, { scope: container });

  return (
    <section className="section" id="refurbished" ref={container}>
      <div className="wrap">
        <span className="section-index">fig. 06 — refurbished devices</span>
        <div className="refurb-layout" style={{ marginTop: '2.5rem' }}>
          <div className="refurb-checks">
            <div className="refurb-check" style={{ opacity: 0 }}>
              <span className="num">01</span>
              <div><h4>40-Point Quality Check</h4><p>Every device tested across hardware, display, ports, and battery.</p></div>
            </div>
            <div className="refurb-check" style={{ opacity: 0 }}>
              <span className="num">02</span>
              <div><h4>Battery Health Verified</h4><p>Minimum 85% health guaranteed, disclosed upfront.</p></div>
            </div>
            <div className="refurb-check" style={{ opacity: 0 }}>
              <span className="num">03</span>
              <div><h4>90-Day Warranty</h4><p>Written coverage on parts and labor, no fine print.</p></div>
            </div>
            <div className="refurb-check" style={{ opacity: 0 }}>
              <span className="num">04</span>
              <div><h4>Certified Grading</h4><p>Transparent cosmetic grading — you know exactly what you&apos;re buying.</p></div>
            </div>
          </div>

          <div className="refurb-visual" style={{ opacity: 0 }}>
            <div className="ring r1"></div>
            <div className="ring r2"></div>
            <div className="ring r3"></div>
            <div className="refurb-badge">
              <div className="pct" id="refurb-pct">0%</div>
              <div className="label">Pass Certification</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
