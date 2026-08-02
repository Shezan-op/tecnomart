'use client';

import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "Brought in a laptop with a dead motherboard — most places quoted a replacement. Tecno Mart repaired it for a fraction of the cost.",
    meta: "Arjun Reddy — Gachibowli, Hyderabad"
  },
  {
    text: "Bought a refurbished ThinkPad here — genuinely looks and performs like new. The battery health disclosure upfront won me over.",
    meta: "Meera Iyer — Kondapur, Hyderabad"
  },
  {
    text: "Screen replacement on my phone took under an hour. Transparent pricing, no upselling — rare to find these days.",
    meta: "Farhan Ali — Madhapur, Hyderabad"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section" id="testimonials">
      <div className="wrap">
        <span className="section-index" style={{ display: 'block', textAlign: 'center', marginBottom: '2.5rem' }}>fig. 10 — testimonials</span>
        <div className="testimonial-wrap">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`testimonial-slide ${i === current ? 'is-active' : ''}`}
              style={{
                opacity: i === current ? 1 : 0,
                transform: i === current ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                position: i === current ? 'relative' : 'absolute',
                top: i === current ? 'auto' : 0,
                left: i === current ? 'auto' : 0,
                width: '100%',
                visibility: i === current ? 'visible' : 'hidden'
              }}
            >
              <blockquote>&quot;{t.text}&quot;</blockquote>
              <div className="testimonial-meta">{t.meta}</div>
            </div>
          ))}
          <div className="testimonial-dots" style={{ position: 'relative', marginTop: '2rem' }}>
            {testimonials.map((_, i) => (
              <span 
                key={i} 
                className={`t-dot ${i === current ? 'is-active' : ''}`}
                onClick={() => setCurrent(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
