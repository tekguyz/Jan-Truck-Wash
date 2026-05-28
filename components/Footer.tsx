'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '../lib/LanguageContext';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { BUSINESS } from '../lib/constants';

export default function Footer() {
  const { t, locale } = useTranslation();

  return (
    <footer id="main-footer" className="bg-bg-deep text-white py-12 relative overflow-hidden select-none border-t border-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(26,47,90,0.2)_0%,transparent_60%)] z-0" aria-hidden="true" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        
        {/* ROW 1 — 3 columns on desktop, stacked on mobile */}
        <div className="grid gap-10 md:grid-cols-3 md:items-start pb-8">
          
          {/* Column 1 - Left: logo icon + wordmark brand name */}
          <div className="flex flex-col space-y-3.5 max-w-sm">
            <a href="#" className="select-none text-left block">
              <div className="flex items-center gap-3">
                <div className="relative w-[56px] h-[56px] flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Jan Truck Wash"
                    fill
                    priority={true}
                    className="object-contain flex-shrink-0"
                    style={{
                      mixBlendMode: 'lighten',
                      borderRadius: 0,
                      padding: 0,
                      boxShadow: 'none',
                      border: 'none',
                      background: 'none',
                    }}
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-tight">
                    JAN TRUCK <span className="text-brand-accent">WASH</span>
                  </p>
                  <p className="text-text-subtle text-xs mt-0.5 leading-tight">
                    {t('footer.tagline')}
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Column 2 - Center: Nav quick links stacked vertically */}
          <div className="flex flex-col md:items-center">
            <div className="flex flex-col space-y-3 text-left">
              <span className="font-sans text-xs font-black uppercase tracking-widest text-text-subtle">
                {locale === 'en' ? 'Quick Links' : 'Navegación'}
              </span>
              <div className="flex flex-col space-y-2">
                <a href="#services" className="font-sans text-sm text-text-muted hover:text-white transition-colors">
                  {t('nav.services')}
                </a>
                <a href="#how-it-works" className="font-sans text-sm text-text-muted hover:text-white transition-colors">
                  {t('nav.howItWorks')}
                </a>
                <a href="#why-us" className="font-sans text-sm text-text-muted hover:text-white transition-colors">
                  {locale === 'en' ? 'Why Us' : 'Por Qué Nosotros'}
                </a>
                <a href="#coverage" className="font-sans text-sm text-text-muted hover:text-white transition-colors">
                  {t('nav.coverage')}
                </a>
                <a href="#contact" className="font-sans text-sm text-text-muted hover:text-white transition-colors">
                  {t('nav.contact')}
                </a>
              </div>
            </div>
          </div>

          {/* Column 3 - Right: Clickable phone/email + social icons row */}
          <div className="flex flex-col md:items-end md:text-right">
            <div className="flex flex-col space-y-3 items-start md:items-end">
              <span className="font-sans text-xs font-black uppercase tracking-widest text-text-subtle">
                {locale === 'en' ? 'Get In Touch' : 'Contacto'}
              </span>
              <div className="space-y-2 font-sans w-full flex flex-col items-start md:items-end">
                <a 
                  href={BUSINESS.phoneLink} 
                  className="text-white font-bold text-lg hover:text-brand-glow transition-colors block"
                >
                  {BUSINESS.phone}
                </a>

                <a 
                  href={BUSINESS.emailLink} 
                  className="text-text-muted text-sm hover:text-white transition-colors block"
                >
                  {BUSINESS.email}
                </a>
                
                {/* Social icons row */}
                <div className="flex items-center space-x-3 pt-2">
                  <a
                    href={BUSINESS.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-bg-card border border-border flex items-center justify-center text-text-muted hover:border-brand-accent hover:text-brand-accent transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href={BUSINESS.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-bg-card border border-border flex items-center justify-center text-text-muted hover:border-brand-accent hover:text-brand-accent transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram size={16} />
                  </a>
                </div>

                <div className="pt-2 text-[10px] text-text-subtle select-none tracking-widest uppercase">
                  Serving {BUSINESS.serviceAreas.join(' · ')}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ROW 2 — divider */}
        <div className="border-t border-border my-6" />

        {/* ROW 3 — flex justify-between items-center */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <span className="font-sans text-xs text-text-subtle">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </span>
          <div>
            <span className="text-xs text-text-subtle">
              Crafted by{' '}
              <a
                href={BUSINESS.madeBy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-text-subtle hover:text-brand-glow transition-colors font-semibold"
              >
                ⚡ {BUSINESS.madeBy.name}
              </a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
