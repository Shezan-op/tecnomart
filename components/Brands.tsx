'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Brands() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const brandCells = container.current?.querySelectorAll('.brand-cell');
    if (brandCells && brandCells.length) {
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
  }, { scope: container });

  return (
    <section className="section" id="brands" ref={container}>
      <div className="wrap">
        <span className="section-index">fig. 09 — brands we carry</span>
        <div className="brand-grid" style={{ marginTop: '2.5rem' }}>
          <div className="brand-cell" style={{ opacity: 0 }}>Apple</div>
          <div className="brand-cell" style={{ opacity: 0 }}>Dell</div>
          <div className="brand-cell" style={{ opacity: 0 }}>HP</div>
          <div className="brand-cell" style={{ opacity: 0 }}>Lenovo</div>
          <div className="brand-cell" style={{ opacity: 0 }}>ASUS</div>
          <div className="brand-cell" style={{ opacity: 0 }}>Acer</div>
          <div className="brand-cell" style={{ opacity: 0 }}>MSI</div>
          <div className="brand-cell" style={{ opacity: 0 }}>Samsung</div>
          <div className="brand-cell" style={{ opacity: 0 }}>Xiaomi</div>
          <div className="brand-cell" style={{ opacity: 0 }}>OnePlus</div>
          <div className="brand-cell" style={{ opacity: 0 }}>Vivo</div>
          <div className="brand-cell" style={{ opacity: 0 }}>Oppo</div>
          <div className="brand-cell" style={{ opacity: 0 }}>Realme</div>
          <div className="brand-cell" style={{ opacity: 0 }}>Logitech</div>
          <div className="brand-cell" style={{ opacity: 0 }}>JBL</div>
          <div className="brand-cell" style={{ opacity: 0 }}>Sony</div>
        </div>
      </div>
    </section>
  );
}
