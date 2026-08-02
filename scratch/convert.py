import re

def html_to_jsx(html):
    # class to className
    jsx = html.replace('class=', 'className=')
    # Self closing tags
    jsx = re.sub(r'<(img|br|hr|input|source|meta|link)([^>]*)>', r'<\1\2 />', jsx)
    # Style strings to objects - extremely basic, works for inline styles like style="margin-top:0.5rem;"
    def style_replacer(match):
        style_str = match.group(1)
        # simplistic: 'margin-top:0.5rem;' -> '{ marginTop: "0.5rem" }'
        # just let's remove inline styles or convert them manually. 
        # For our case, let's just do it manually.
        return 'style={{}}'
    jsx = re.sub(r'style="([^"]*)"', style_replacer, jsx)
    return jsx

with open('_legacy_static/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# extract body
body = re.search(r'<body>(.*)</body>', content, re.DOTALL)
if body:
    body_content = body.group(1)
    
    # Remove hero section since we have Hero.tsx
    body_content = re.sub(r'<section className="hero".*?</section>', '<Hero />', body_content, flags=re.DOTALL)
    
    # Remove scripts
    body_content = re.sub(r'<script.*?</script>', '', body_content, flags=re.DOTALL)
    
    jsx = html_to_jsx(body_content)
    
    final_output = f"""import React from 'react';
import Hero from '../components/Hero';

export default function Home() {{
  return (
    <>
      {{/* Preloader */}}
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
        {{/* The rest of the content will be manually migrated component by component to ensure quality */}}
      </main>
    </>
  );
}}
"""
    with open('app/page.tsx', 'w', encoding='utf-8') as out:
        out.write(final_output)
