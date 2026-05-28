'use client';

import React from 'react';
import { useTranslation } from '../../lib/LanguageContext';
import { Phone, Mail, Check } from 'lucide-react';
import { BUSINESS } from '../../lib/constants';
import { motion } from 'motion/react';

export default function ContactPhoneCard() {
  const { locale } = useTranslation();

  return (
    <div className="card-glow text-white rounded-3xl p-[clamp(2rem,6vw,3rem)] shadow-xl relative overflow-hidden flex flex-col justify-center min-h-[500px] w-full h-full">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(27,127,255,0.15)_0%,transparent_70%)] z-0 pointer-events-none" aria-hidden="true" />
      
      <div className="relative z-10 text-center flex flex-col items-center">
        {/* Large phone icon centered at top */}
        <div className="h-16 w-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-[clamp(1.5rem,4vw,2rem)]">
          <Phone className="h-8 w-8 text-brand-accent fill-brand-accent animate-none" />
        </div>

        {/* Tagline headers */}
        <h3 className="font-sans text-[clamp(1.1rem,3vw,1.25rem)] font-bold text-text-muted tracking-wide [text-wrap:balance]">
          {locale === 'en' ? 'Prefer to Call or Text?' : '¿Prefieres Llamar o Escribir?'}
        </h3>
        
        <a 
          href={BUSINESS.phoneLink} 
          className="font-sans text-[clamp(2rem,6vw,3rem)] font-black tracking-tight text-chrome hover:text-brand-accent transition-colors mt-[clamp(0.5rem,2vw,1rem)] select-all block cursor-pointer"
        >
          {BUSINESS.phone}
        </a>

        <p className="font-sans text-[clamp(0.9rem,2vw,1rem)] text-text-muted mt-[clamp(0.5rem,2vw,1rem)] [text-wrap:balance]">
          {locale === 'en' ? 'Available 7 days a week. We respond fast.' : 'Disponibles 7 días a la semana. Respondemos rápido.'}
        </p>

        {/* Email callout as a secondary contact option below phone numbers */}
        <div className="mt-[clamp(1rem,4vw,2rem)] flex flex-col items-center">
          <span className="text-[clamp(0.7rem,1.5vw,0.8rem)] text-text-subtle font-medium block uppercase tracking-widest">
            {locale === 'en' ? 'Or email us:' : 'O escríbenos por correo:'}
          </span>
          <a
            href={BUSINESS.emailLink}
            className="inline-flex items-center space-x-2 text-brand-glow text-[clamp(0.9rem,2vw,1rem)] hover:text-white transition-colors font-semibold mt-2"
          >
            <Mail className="h-4 w-4" />
            <span>{BUSINESS.email}</span>
          </a>
        </div>

        {/* Large CTA phone link button */}
        <motion.a
          href={BUSINESS.phoneLink}
          whileTap={{ scale: 0.97 }}
          className="w-full max-w-sm mt-[clamp(2rem,6vw,3rem)] flex items-center justify-center space-x-2.5 rounded-full bg-gradient-to-r from-brand-blue to-blue-600 text-white font-bold py-[clamp(0.9rem,2.5vw,1.1rem)] text-[clamp(0.9rem,2vw,1rem)] border border-cyan-400/30 hover:border-cyan-400/60 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:scale-105 transition-all"
        >
          <Phone className="h-4.5 w-4.5 fill-white" />
          <span>{locale === 'en' ? 'Call Now' : 'Llamar Ahora'}</span>
        </motion.a>

        {/* Minimalist badges row bottom */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-[clamp(2.5rem,6vw,3.5rem)] pt-[clamp(2rem,6vw,3rem)] border-t border-white/5 w-full text-[11px] text-text-muted font-semibold tracking-wide uppercase select-none">
          <div className="flex items-center space-x-1.5 animate-none">
            <Check className="h-4 w-4 text-brand-accent" />
            <span>Fully Insured</span>
          </div>
          <div className="flex items-center space-x-1.5 animate-none">
            <Check className="h-4 w-4 text-brand-accent" />
            <span>Mobile Service</span>
          </div>
          <div className="flex items-center space-x-1.5 animate-none">
            <Check className="h-4 w-4 text-brand-accent" />
            <span className="text-center">Guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
