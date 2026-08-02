'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function TrustMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current) return;
    
    // Duplicate content for seamless loop
    const track = trackRef.current;
    track.innerHTML += track.innerHTML;
    
    const distance = track.scrollWidth / 2;
    gsap.to(track, {
      x: -distance,
      duration: distance / 45,
      ease: 'none',
      repeat: -1,
    });
  }, { scope: trackRef });

  return (
    <div className="marquee-strip" id="marquee-strip">
      <div className="marquee-track" id="marquee-track" ref={trackRef}>
        <span>90-Day <b>Warranty</b> on All Refurbished Devices</span>
        <span className="marquee-dot">·</span>
        <span><b>Genuine Parts</b>, Every Repair</span>
        <span className="marquee-dot">·</span>
        <span>Same-Day <b>Diagnostics</b></span>
        <span className="marquee-dot">·</span>
        <span><b>1,200+</b> Devices Certified This Year</span>
        <span className="marquee-dot">·</span>
        <span>Hyderabad&apos;s Trusted <b>Local Tech Store</b></span>
        <span className="marquee-dot">·</span>
        <span>40-Point <b>Quality Check</b></span>
        <span className="marquee-dot">·</span>
        <span>Expert <b>Technicians</b></span>
        <span className="marquee-dot">·</span>
      </div>
    </div>
  );
}
