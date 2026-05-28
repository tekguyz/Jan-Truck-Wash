'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarqueeTrust from '@/components/MarqueeTrust';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import WhyJan from '@/components/WhyJan';
import ServiceArea from '@/components/ServiceArea';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';

import { motion } from 'motion/react';

export default function Page() {
  // Emergency scroll reset to combat browser auto-scrolling to hash or focused elements
  React.useEffect(() => {
    if (typeof window !== 'undefined' && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as any });
      // Extra safety for some mobile browsers that delay layout
      const timer = setTimeout(() => window.scrollTo(0, 0), 10);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-bg-deep text-white flex flex-col justify-between overflow-x-hidden">
      <Navbar />
      
      <main id="main-content" className="flex-grow pb-24 md:pb-0">
        <Hero />
        <MarqueeTrust />
        <Services />
        <HowItWorks />
        <Stats />
        <WhyJan />
        <ServiceArea />
        <Contact />
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
