'use client';

import React from 'react';
import { useTranslation } from '../lib/LanguageContext';
import { Phone, CheckSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS } from '../lib/constants';

export default function MobileStickyBar() {
  const { t, locale } = useTranslation();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 150px
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      id="mobile-sticky-bar"
      initial={{ y: 80, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 80, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{
        duration: 0.4,
        ease: 'easeOut'
      }}
      className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-bg-navy/95 backdrop-blur-md border-t border-white/5 flex items-center justify-between px-4 pb-safe shadow-[0_-8px_30px_rgb(0_0_0/0.2)] md:hidden"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)'
      }}
    >
      <div className="flex w-full items-center gap-3">
        {/* Left Action Button: Call Now link */}
        <motion.a
          id="sticky-bar-call"
          href={BUSINESS.phoneLink}
          whileTap={{ scale: 0.95 }}
          className="flex-1 flex h-11 items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-brand-blue to-blue-600 text-white font-bold text-sm shadow-lg shadow-brand-blue/20 transition-all"
        >
          <Phone className="h-4 w-4 fill-white text-white" />
          <span>{locale === 'en' ? 'Call Now' : 'Llamar'}</span>
        </motion.a>

        {/* Right Action Button: Quote triggers smooth scroll */}
        <motion.button
          id="sticky-bar-quote"
          onClick={handleScrollToContact}
          whileTap={{ scale: 0.95 }}
          className="flex-1 flex h-11 items-center justify-center space-x-2 rounded-full bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all cursor-pointer"
        >
          <CheckSquare className="h-4 w-4 text-brand-accent" />
          <span>{locale === 'en' ? 'Get a Quote' : 'Plan Cotización'}</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
