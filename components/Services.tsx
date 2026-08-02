'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
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

    const items = container.current?.querySelectorAll('.service-item');
    items?.forEach((el, i) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.fromTo(el, { opacity: 0, x: -20 }, {
            opacity: 1, x: 0, duration: 0.6, ease: 'power3.out', delay: i * 0.04,
          });
        },
      });
    });
  }, { scope: container });

  return (
    <section className="section" id="services" ref={container}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-index">fig. 05 — repair &amp; services</span>
            <h2 className="display" style={{ marginTop: '0.5rem' }}>Fixed properly.<br />Fixed fast.</h2>
          </div>
          <p className="desc">Every repair uses genuine or OEM-grade parts, backed by a written service warranty.</p>
        </div>

        <div className="services-timeline">
          <div className="service-item" style={{ opacity: 0 }}><span className="idx">01</span><div><h4>Screen Replacement</h4><p>Laptop &amp; mobile, same-day in most cases</p></div></div>
          <div className="service-item" style={{ opacity: 0 }}><span className="idx">02</span><div><h4>Battery Replacement</h4><p>Health-tested, genuine cells</p></div></div>
          <div className="service-item" style={{ opacity: 0 }}><span className="idx">03</span><div><h4>Motherboard Repair</h4><p>Chip-level diagnostics &amp; repair</p></div></div>
          <div className="service-item" style={{ opacity: 0 }}><span className="idx">04</span><div><h4>SSD / RAM Upgrade</h4><p>Instant performance uplift</p></div></div>
          <div className="service-item" style={{ opacity: 0 }}><span className="idx">05</span><div><h4>Data Recovery</h4><p>Drives, corrupted disks, deleted files</p></div></div>
          <div className="service-item" style={{ opacity: 0 }}><span className="idx">06</span><div><h4>Software &amp; OS Setup</h4><p>Installation, licensing, troubleshooting</p></div></div>
          <div className="service-item" style={{ opacity: 0 }}><span className="idx">07</span><div><h4>Virus &amp; Malware Removal</h4><p>Full system clean &amp; hardening</p></div></div>
          <div className="service-item" style={{ opacity: 0 }}><span className="idx">08</span><div><h4>Thermal Paste &amp; Cleaning</h4><p>Cooling restored, throttling fixed</p></div></div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
          <Link href="/services" className="btn btn-primary" data-magnetic>View All Services</Link>
        </div>
      </div>
    </section>
  );
}
