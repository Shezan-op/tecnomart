'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Categories() {
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

    // Categories Tilt & Glow
    const cards = container.current?.querySelectorAll('.category-card');
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

  return (
    <section className="section" id="categories" ref={container}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-index">fig. 01 — categories</span>
            <h2 className="display" style={{ marginTop: '0.5rem' }}>Everything technology,<br />under one roof.</h2>
          </div>
          <p className="desc">From flagship laptops to a five-minute cable fix — Tecno Mart is built around the full lifecycle of your devices.</p>
        </div>

        <div className="category-grid" id="cat-grid">
          <Link href="/laptops" className="category-card" data-cursor-hover data-tilt>
            <svg className="cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <rect x="3" y="4" width="18" height="12" rx="1.5" />
              <path d="M2 19h20l-1.5-3h-17z" />
            </svg>
            <svg className="cat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
            <div>
              <h3>Laptops &amp; Desktops</h3>
              <p>New, business, gaming, creator-grade</p>
            </div>
            <span className="category-card-num">01</span>
          </Link>

          <Link href="/smartphones" className="category-card" data-cursor-hover data-tilt>
            <svg className="cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <rect x="6" y="2" width="12" height="20" rx="2.5" />
              <line x1="10" y1="19" x2="14" y2="19" />
            </svg>
            <svg className="cat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
            <div>
              <h3>Smartphones</h3>
              <p>Flagships to certified refurbished</p>
            </div>
            <span className="category-card-num">02</span>
          </Link>

          <Link href="/services" className="category-card" data-cursor-hover data-tilt>
            <svg className="cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M14.7 6.3a4 4 0 015.7 5.3L12 20l-8.4-8.4a4 4 0 015.7-5.7L12 8.6l2.7-2.3z" />
            </svg>
            <svg className="cat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
            <div>
              <h3>Repairs &amp; Services</h3>
              <p>Screens, batteries, boards, data</p>
            </div>
            <span className="category-card-num">03</span>
          </Link>

          <Link href="/refurbished" className="category-card" data-cursor-hover data-tilt>
            <svg className="cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12l2.5 2.5L16 9" />
            </svg>
            <svg className="cat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
            <div>
              <h3>Refurbished Devices</h3>
              <p>Multi-point checked, warrantied</p>
            </div>
            <span className="category-card-num">04</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
