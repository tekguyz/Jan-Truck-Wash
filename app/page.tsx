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
  return (
    <div className="min-h-screen bg-bg-deep text-white flex flex-col justify-between">
      <Navbar />
      
      <main id="main-content" className="flex-grow pb-24 md:pb-0">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.4 }}
        >
          <Hero />
          <MarqueeTrust />
          <Services />
          <HowItWorks />
          <Stats />
          <WhyJan />
          <ServiceArea />
          <Contact />
        </motion.div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
