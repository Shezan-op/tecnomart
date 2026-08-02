'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <header className="nav" id="nav">
        <Link href="/" className="nav-logo">
          Tecno<span className="dot">Mart</span>
        </Link>
        <nav className="nav-links">
          <Link href="/laptops">Laptops</Link>
          <Link href="/smartphones">Smartphones</Link>
          <Link href="/services">Services</Link>
          <Link href="/refurbished">Refurbished</Link>
          <Link href="/accessories">Accessories</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className="nav-actions">
          <Link href="/contact" className="btn btn-ghost" data-magnetic>Contact</Link>
          <a href="https://wa.me/919999999999" className="btn btn-primary" data-magnetic>
            <span>WhatsApp Us</span>
          </a>
        </div>
        <button 
          className="nav-toggle" 
          aria-label="Menu" 
          aria-expanded={isMobileMenuOpen} 
          id="nav-toggle"
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>
      </header>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'is-open' : ''}`} id="mobile-menu">
        <Link href="/laptops" onClick={closeMenu}>Laptops</Link>
        <Link href="/smartphones" onClick={closeMenu}>Smartphones</Link>
        <Link href="/services" onClick={closeMenu}>Services</Link>
        <Link href="/refurbished" onClick={closeMenu}>Refurbished</Link>
        <Link href="/accessories" onClick={closeMenu}>Accessories</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </>
  );
}
