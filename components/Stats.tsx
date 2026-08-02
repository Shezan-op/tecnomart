'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Staggered reveal
    const items = container.current?.querySelectorAll('.stat-item');
    if (items) {
      gsap.fromTo(
        items,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.85, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.stats-grid', start: 'top 84%' },
        }
      );
    }

    // Number counting
    const nums = container.current?.querySelectorAll('.stat-num');
    nums?.forEach((el) => {
      const element = el as HTMLElement;
      const target = parseFloat(element.dataset.count || '0');
      const suffix = element.dataset.suffix || '';
      const obj = { val: 0 };

      ScrollTrigger.create({
        trigger: element,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              element.textContent = Math.round(obj.val).toLocaleString() + suffix;
            },
          });
        },
      });
    });
  }, { scope: container });

  return (
    <section className="stats-section" id="stats" ref={container}>
      <div className="wrap">
        <span className="section-index">fig. 02 — by the numbers</span>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-num" data-count="1200" data-suffix="+">1200+</span>
            <span className="stat-label">Devices Certified</span>
          </div>
          <div className="stat-item">
            <span className="stat-num" data-count="98" data-suffix="%">98%</span>
            <span className="stat-label">Pass Certification Rate</span>
          </div>
          <div className="stat-item">
            <span className="stat-num" data-count="90" data-suffix=" days">90 days</span>
            <span className="stat-label">Refurb Warranty</span>
          </div>
          <div className="stat-item">
            <span className="stat-num" data-count="40" data-suffix="pt">40pt</span>
            <span className="stat-label">Quality Checkpoint</span>
          </div>
        </div>
      </div>
    </section>
  );
}
