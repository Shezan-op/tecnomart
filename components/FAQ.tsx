'use client';

import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What warranty comes with refurbished devices?",
    a: "Every refurbished laptop and smartphone comes with a minimum 90-day warranty covering parts and labor, along with a disclosed battery health rating."
  },
  {
    q: "How long do repairs typically take?",
    a: "Most screen, battery, and software repairs are completed same-day. Motherboard-level repairs or parts on order may take 2–4 business days."
  },
  {
    q: "Do you offer data recovery for damaged drives?",
    a: "Yes — we handle recovery for corrupted, formatted, or physically damaged drives, with a free diagnostic to assess recoverability before you commit."
  },
  {
    q: "Can I trade in my old device?",
    a: "Yes, we accept trade-ins on laptops and smartphones toward new or refurbished purchases, based on a quick in-store evaluation."
  },
  {
    q: "Do you provide on-site or pickup service?",
    a: "For bulk or business clients in Hyderabad, we offer pickup and drop-off scheduling — reach out via WhatsApp to arrange it."
  }
];

export default function FAQ() {
  const container = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
  }, { scope: container });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq" ref={container}>
      <div className="wrap">
        <div className="section-head" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div>
            <span className="section-index">fig. 11 — faqs</span>
            <h2 className="display" style={{ marginTop: '0.5rem' }}>Common questions.</h2>
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'is-open' : ''}`}>
              <button className="faq-q" onClick={() => toggleFAQ(i)}>
                {faq.q}<span className="plus"></span>
              </button>
              <div 
                className="faq-a" 
                style={{
                  height: openIndex === i ? 'auto' : 0,
                  overflow: 'hidden',
                  transition: 'height 0.4s cubic-bezier(0.87, 0, 0.13, 1)'
                }}
              >
                <div style={{ paddingBottom: '1.5rem' }}>
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
