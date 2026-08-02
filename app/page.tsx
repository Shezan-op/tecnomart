import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustMarquee from '@/components/TrustMarquee';
import Categories from '@/components/Categories';
import Stats from '@/components/Stats';
import LaptopCollection from '@/components/LaptopCollection';
import PhoneShowcase from '@/components/PhoneShowcase';
import Services from '@/components/Services';
import RefurbishedTrust from '@/components/RefurbishedTrust';
import Accessories from '@/components/Accessories';
import WhyChooseUs from '@/components/WhyChooseUs';
import Brands from '@/components/Brands';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactAndFooter from '@/components/ContactAndFooter';

export default function Home() {
  return (
    <>
      <div id="preloader">
        <div className="preloader-logo">Tecno<span>Mart</span></div>
        <div className="preloader-bar"></div>
      </div>
      
      <div id="scroll-progress"></div>
      
      <Header />

      <main>
        <Hero />
        <TrustMarquee />
        <Categories />
        <Stats />
        <LaptopCollection />
        <PhoneShowcase />
        <Services />
        <RefurbishedTrust />
        <Accessories />
        <WhyChooseUs />
        <Brands />
        <Testimonials />
        <FAQ />
        <ContactAndFooter />
      </main>
    </>
  );
}
