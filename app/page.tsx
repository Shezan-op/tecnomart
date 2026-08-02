import React from 'react';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      {/* Preloader */}
      <div id="preloader">
        <div className="preloader-logo">Tecno<span>Mart</span></div>
        <div className="preloader-bar"></div>
      </div>
      
      <div id="scroll-progress"></div>
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>
      
      <header className="nav" id="nav">
        <a href="/" className="nav-logo">Tecno<span className="dot">Mart</span></a>
        <nav className="nav-links">
          <a href="/laptops">Laptops</a>
          <a href="/smartphones">Smartphones</a>
          <a href="/services">Services</a>
          <a href="/refurbished">Refurbished</a>
          <a href="/accessories">Accessories</a>
          <a href="/about">About</a>
        </nav>
        <div className="nav-actions">
          <a href="/contact" className="btn btn-ghost" data-magnetic>Contact</a>
          <a href="https://wa.me/919999999999" className="btn btn-primary" data-magnetic>
            <span>WhatsApp Us</span>
          </a>
        </div>
        <button className="nav-toggle" aria-label="Menu" aria-expanded="false" id="nav-toggle">
          <span></span><span></span><span></span>
        </button>
      </header>

      <div className="mobile-menu" id="mobile-menu">
        <a href="/laptops">Laptops</a>
        <a href="/smartphones">Smartphones</a>
        <a href="/services">Services</a>
        <a href="/refurbished">Refurbished</a>
        <a href="/accessories">Accessories</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <main>
        <Hero />
        {/* The rest of the content will be manually migrated component by component to ensure quality */}
      </main>
    </>
  );
}
