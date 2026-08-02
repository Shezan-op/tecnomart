'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactAndFooter() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    // Contact stagger
    const contactInfo = container.current.querySelector('.contact-info');
    if (contactInfo) {
      gsap.fromTo(
        contactInfo.children,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.85, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: contactInfo, start: 'top 84%' },
        }
      );
    }

    // Map reveal
    const map = container.current.querySelector('.map-frame');
    if (map) {
      gsap.fromTo(
        map,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: map, start: 'top 88%' },
        }
      );
    }

    // Footer entrance
    const footerTop = container.current.querySelector('.footer-top');
    if (footerTop) {
      gsap.fromTo(
        footerTop.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.footer', start: 'top 88%' },
        }
      );
    }
  }, { scope: container });

  return (
    <div ref={container}>
      {/* ============ CONTACT ============ */}
      <section className="section" id="contact">
        <div className="wrap">
          <span className="section-index">fig. 12 — visit or reach us</span>
          <div className="contact-layout" style={{ marginTop: '2.5rem' }}>
            <div className="contact-info">
              <div className="contact-row" style={{ opacity: 0 }}>
                <span className="mono-label">Location</span>
                <div className="value small">Hyderabad, Telangana, India</div>
              </div>
              <div className="contact-row" style={{ opacity: 0 }}>
                <span className="mono-label">Phone</span>
                <div className="value">+91 99999 99999</div>
              </div>
              <div className="contact-row" style={{ opacity: 0 }}>
                <span className="mono-label">WhatsApp</span>
                <div className="value">+91 99999 99999</div>
              </div>
              <div className="contact-row" style={{ opacity: 0 }}>
                <span className="mono-label">Email</span>
                <div className="value small">hello@tecnomart.in</div>
              </div>
              <div className="contact-row" style={{ opacity: 0 }}>
                <span className="mono-label">Business Hours</span>
                <div className="value small">Mon – Sat, 10:00 AM – 8:30 PM</div>
              </div>
              <a href="https://wa.me/919999999999" className="btn btn-primary" data-magnetic style={{ alignSelf: 'flex-start', opacity: 0 }}>Message on WhatsApp</a>
            </div>
            <div className="map-frame" style={{ opacity: 0 }}>
              <iframe src="https://www.google.com/maps?q=Hyderabad,Telangana&output=embed" loading="lazy" title="Tecno Mart location map"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="final-cta">
        <div className="wrap">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Ready when you are</span>
          <h2 className="display">Let&apos;s get your tech sorted.</h2>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary" data-magnetic>Get In Touch</Link>
            <Link href="/services" className="btn btn-ghost" data-magnetic>Book a Repair</Link>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="nav-logo">Tecno<span className="dot">Mart</span></div>
              <p>Premium technology retail and service, based in Hyderabad. New, refurbished, and repaired — done right.</p>
            </div>
            <div className="footer-col">
              <h4>Products</h4>
              <ul>
                <li><Link href="/laptops">Laptops</Link></li>
                <li><Link href="/smartphones">Smartphones</Link></li>
                <li><Link href="/accessories">Accessories</Link></li>
                <li><Link href="/refurbished">Refurbished</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><Link href="/services">Laptop Repair</Link></li>
                <li><Link href="/services">Mobile Repair</Link></li>
                <li><Link href="/services">Data Recovery</Link></li>
                <li><Link href="/services">Upgrades</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/brands">Brands</Link></li>
                <li><Link href="/faqs">FAQs</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>Hyderabad, Telangana</li>
                <li>+91 99999 99999</li>
                <li>hello@tecnomart.in</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="mono-label">© 2026 Tecno Mart. All rights reserved.</span>
            <div className="footer-socials">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
