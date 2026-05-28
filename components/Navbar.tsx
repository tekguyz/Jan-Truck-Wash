'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from '../lib/LanguageContext';
import { Menu, X, Phone, Globe, Facebook, Instagram, MapPin, Wrench, Shield, HelpCircle, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS } from '../lib/constants';

export default function Navbar() {
  const { t, locale, setLocale } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Force active section to hero when at the very top of the page (detection threshold)
      if (scrollY < 100) {
        setActiveSection('hero');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Aggressive scroll to top on fresh load 
    // We do it once immediately and once after a tiny frame delay to ensure browser overrides
    if (typeof window !== 'undefined' && !window.location.hash) {
      window.scrollTo(0, 0);
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    }

    // Observer setup
    const sections = ['hero', 'services', 'how-it-works', 'why-us', 'coverage', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: [0, 0.1, 0.2],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Only update if we have scrolled down a bit to avoid jitter on load
          if (window.scrollY >= 100) {
            setActiveSection(entry.target.id);
          } else {
            setActiveSection('hero');
          }
        }
      });
    }, observerOptions);

    // Delay observing to allow layout to settle
    const timeoutId = setTimeout(() => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 150);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileMenuOpen]);

  const getLinkClass = (section: string) => {
    const isActive = activeSection === section;
    return `relative font-sans text-sm transition-all duration-200 py-1 cursor-pointer select-none ${
      isActive 
        ? 'text-white font-semibold' 
        : 'text-text-muted hover:text-white'
    } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-brand-accent after:transition-all after:duration-200 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`;
  };

  const getMobileLinkClass = (section: string) => {
    const isActive = activeSection === section;
    return `block rounded-lg px-4 py-2.5 font-sans text-base transition-colors ${
      isActive
        ? 'bg-bg-mid text-white font-bold'
        : 'text-text-muted hover:bg-bg-mid hover:text-white font-semibold'
    }`;
  };

  return (
    <>
      <motion.header
        id="main-header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-bg-navy/95 border-b border-border shadow-md backdrop-blur-md py-1.5 md:py-4'
            : 'bg-transparent border-b border-white/5 py-2.5 md:py-5'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global Navigation">
          <div className="flex items-center justify-between">
            
            {/* Left: Logo + Wordmark */}
            <div className="flex-shrink-0">
              <a href="#" id="nav-brand-logo" className="select-none">
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                    <Image
                      src="/logo.png"
                      alt="Jan Truck Wash"
                      fill
                      priority={true}
                      className="object-contain flex-shrink-0"
                    />
                  </div>
                  <span className="text-lg font-bold leading-none whitespace-nowrap">
                    <span className="text-white">JAN TRUCK </span>
                    <span className="text-brand-accent">WASH</span>
                  </span>
                </div>
              </a>
            </div>

            {/* Center: Desktop links */}
            <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
              <a id="link-services" href="#services" className={getLinkClass('services')}>
                {t('nav.services')}
              </a>
              <a id="link-how-it-works" href="#how-it-works" className={getLinkClass('how-it-works')}>
                {t('nav.howItWorks')}
              </a>
              <a id="link-why-us" href="#why-us" className={getLinkClass('why-us')}>
                {locale === 'en' ? 'Why Us' : 'Por Qué Nosotros'}
              </a>
              <a id="link-coverage" href="#coverage" className={getLinkClass('coverage')}>
                {t('nav.coverage')}
              </a>
              <a id="link-contact" href="#contact" className={getLinkClass('contact')}>
                {t('nav.contact')}
              </a>
            </div>

            {/* Right: Controls & Call CTA */}
            <div className="flex items-center space-x-3">
              
              {/* Desktop social icons */}
              <div className="hidden lg:flex items-center space-x-3 text-text-muted">
                <a
                  href={BUSINESS.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-glow transition-colors"
                  aria-label="Visit Jan Truck Wash on Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={BUSINESS.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-glow transition-colors"
                  aria-label="Visit Jan Truck Wash on Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>

              {/* Language Selector Pills Segmented Controls (Desktop only) */}
              <div className="hidden md:flex items-center space-x-0.5 bg-white/5 border border-white/10 rounded-full p-0.5">
                <button
                  id="nav-lang-en"
                  onClick={() => setLocale('en')}
                  aria-label="Switch language to English"
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                    locale === 'en'
                      ? 'bg-brand-blue text-white font-semibold'
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  EN
                </button>
                <button
                  id="nav-lang-es"
                  onClick={() => setLocale('es')}
                  aria-label="Cambiar idioma a Español"
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                    locale === 'es'
                      ? 'bg-brand-blue text-white font-semibold'
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  ES
                </button>
              </div>

              {/* Responsive Active Call button (Visible on desktop only) */}
              <motion.a
                id="btn-call-now"
                href={BUSINESS.phoneLink}
                whileTap={{ scale: 0.97 }}
                className="hidden md:flex items-center space-x-2 rounded-full bg-brand-blue px-4 py-2 font-sans text-sm font-semibold text-white hover:bg-brand-accent shadow-md transition-all cursor-pointer"
              >
                <Phone className="h-4 w-4 fill-white text-white" />
                <span>{t('nav.callNow')}</span>
              </motion.a>

              {/* Mobile Hamburger menu toggle */}
              <button
                id="btn-hamburger"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-lg p-2 transition-colors cursor-pointer text-white hover:bg-white/10 md:hidden"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>
       </motion.header>

      {/* Slide-Over Mobile Drawer & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              id="mobile-nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Side-sliding Drawer Content */}
            <motion.div
              id="mobile-nav-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] sm:w-[350px] bg-bg-navy border-l border-border flex flex-col h-full md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-border/60">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-[36px] h-[36px] flex-shrink-0">
                    <Image
                      src="/logo.png"
                      alt="Jan Truck Wash logo"
                      fill
                      priority={true}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-base font-bold leading-none select-none">
                    <span className="text-white">JAN TRUCK </span>
                    <span className="text-brand-accent">WASH</span>
                  </span>
                </div>
                
                <button
                  id="mobile-drawer-close"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full p-2 text-text-muted hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-text-subtle tracking-widest uppercase block mb-4">
                    {locale === 'en' ? 'Navigation' : 'Navegación'}
                  </span>
                  
                  <a
                    id="mobile-link-services"
                    href="#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${getMobileLinkClass('services')} flex items-center space-x-3`}
                  >
                    <Wrench className="h-4.5 w-4.5 text-brand-accent flex-shrink-0" />
                    <span>{t('nav.services')}</span>
                  </a>

                  <a
                    id="mobile-link-how-it-works"
                    href="#how-it-works"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${getMobileLinkClass('how-it-works')} flex items-center space-x-3`}
                  >
                    <HelpCircle className="h-4.5 w-4.5 text-brand-accent flex-shrink-0" />
                    <span>{t('nav.howItWorks')}</span>
                  </a>

                  <a
                    id="mobile-link-why-us"
                    href="#why-us"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${getMobileLinkClass('why-us')} flex items-center space-x-3`}
                  >
                    <Shield className="h-4.5 w-4.5 text-brand-accent flex-shrink-0" />
                    <span>{locale === 'en' ? 'Why Us' : 'Por Qué Nosotros'}</span>
                  </a>

                  <a
                    id="mobile-link-coverage"
                    href="#coverage"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${getMobileLinkClass('coverage')} flex items-center space-x-3`}
                  >
                    <MapPin className="h-4.5 w-4.5 text-brand-accent flex-shrink-0" />
                    <span>{t('nav.coverage')}</span>
                  </a>

                  <a
                    id="mobile-link-contact"
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${getMobileLinkClass('contact')} flex items-center space-x-3`}
                  >
                    <Mail className="h-4.5 w-4.5 text-brand-accent flex-shrink-0" />
                    <span>{t('nav.contact')}</span>
                  </a>
                </div>

                {/* Bottom section of drawer */}
                <div className="space-y-6 pt-6 border-t border-border/60">
                  {/* Inline Socials & Language Selector */}
                  <div className="flex items-center justify-between">
                    {/* Social links row */}
                    <div className="flex items-center space-x-4 text-text-muted">
                      <a
                        href={BUSINESS.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-glow transition-colors"
                        aria-label="Facebook (Opens in new tab)"
                      >
                        <Facebook size={18} />
                      </a>
                      <a
                        href={BUSINESS.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-glow transition-colors"
                        aria-label="Instagram (Opens in new tab)"
                      >
                        <Instagram size={18} />
                      </a>
                    </div>

                    {/* Desktop-style segmented language selector */}
                    <div className="flex items-center space-x-0.5 bg-white/5 border border-white/10 rounded-full p-0.5">
                      <button
                        onClick={() => setLocale('en')}
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                          locale === 'en'
                            ? 'bg-brand-blue text-white font-semibold'
                            : 'text-text-muted hover:text-white'
                        }`}
                      >
                        EN
                      </button>
                      <button
                        onClick={() => setLocale('es')}
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                          locale === 'es'
                            ? 'bg-brand-blue text-white font-semibold'
                            : 'text-text-muted hover:text-white'
                        }`}
                      >
                        ES
                      </button>
                    </div>
                  </div>

                  {/* Call CTA button */}
                  <div className="pt-2">
                    <motion.a
                      id="mobile-drawer-call-btn"
                      href={BUSINESS.phoneLink}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-center space-x-3 rounded-full bg-gradient-to-r from-brand-blue to-blue-600 py-3.5 font-sans text-base font-bold text-white shadow-lg shadow-brand-blue/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer border border-white/10"
                    >
                      <Phone className="h-5 w-5 fill-white text-white" />
                      <span>{BUSINESS.phone}</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
