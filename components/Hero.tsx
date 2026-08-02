'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to('#hero-eyebrow', { opacity: 1, y: 0, duration: 1, ease: 'expo.out' }, 0.2)
      .to('#hero-title .line', { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'expo.out' }, 0.4)
      .to('#hero-sub', { opacity: 1, y: 0, duration: 1, ease: 'expo.out' }, 0.6)
      .to('#hero-actions', { opacity: 1, y: 0, duration: 1, ease: 'expo.out' }, 0.8)
      .fromTo('#hero-3d-stage', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1.5, ease: 'expo.out' }, 1.0);

    // Scroll parallax effect
    gsap.to('#hero-3d-stage', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
      },
      yPercent: 30,
      opacity: 0.5,
    });
  }, { scope: container });

  return (
    <section className="hero" id="hero" ref={container}>
      <div className="grid-bg"></div>
      <div className="hero-glow"></div>
      <div className="hero-glow-2"></div>

      <div className="hero-content">
        <span className="eyebrow hero-eyebrow" id="hero-eyebrow" style={{ opacity: 0, transform: 'translateY(20px)' }}>
          Hyderabad · Premium Technology Retail &amp; Service
        </span>
        <h1 className="display" id="hero-title">
          <span className="line" style={{ opacity: 0, transform: 'translateY(40px)', display: 'block' }}><span className="word-wrap">Every device.</span></span>
          <span className="line" style={{ opacity: 0, transform: 'translateY(40px)', display: 'block' }}><em className="accent-word">Every</em> <span className="word-wrap">possibility.</span></span>
        </h1>
        <p className="hero-sub" id="hero-sub" style={{ opacity: 0, transform: 'translateY(20px)' }}>
          New and refurbished laptops, smartphones, repairs, and accessories — engineered around one standard: certified quality, honestly priced.
        </p>
        <div className="hero-actions" id="hero-actions" style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <a href="/laptops" className="btn btn-primary" data-magnetic>Explore Devices</a>
          <a href="/services" className="btn btn-ghost" data-magnetic>Book a Repair</a>
        </div>
      </div>

      <div className="hero-3d-stage" id="hero-3d-stage">
        {/* We use a web component, so we ignore TypeScript errors if any */}
        <model-viewer
          class="hero-model"
          src="/MacBook_Assembly.glb"
          alt="MacBook 3D model — premium laptop"
          auto-rotate
          auto-rotate-delay="500"
          rotation-per-second="18deg"
          camera-controls
          interaction-prompt="none"
          shadow-intensity="0"
          exposure="0.9"
          environment-image="neutral"
          id="macbook-model"
          camera-orbit="0deg 75deg 120%"
          min-camera-orbit="auto auto 80%"
          max-camera-orbit="auto auto 160%"
          style={{ '--poster-color': 'transparent' } as any}
          ar
          ar-modes="webxr scene-viewer quick-look"
        ></model-viewer>
      </div>

      <div className="hero-scroll-cue">
        <span>Scroll</span>
        <span className="stem"></span>
      </div>
    </section>
  );
}
