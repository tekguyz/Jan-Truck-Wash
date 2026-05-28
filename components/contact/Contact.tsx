'use client';

import React from 'react';
import { useTranslation } from '../../lib/LanguageContext';
import FadeInUp from '../ui/FadeInUp';
import ContactForm from './ContactForm';
import ContactPhoneCard from './ContactPhoneCard';

export default function Contact() {
  const { locale } = useTranslation();

  return (
    <section id="contact" className="bg-bg-deep py-[clamp(4.5rem,8vw,7rem)] px-5 sm:px-6 lg:px-8 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center mb-[clamp(3.5rem,6vw,5rem)]">
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-brand-glow">
            {locale === 'en' ? 'GET IN TOUCH' : 'CONTÁCTANOS'}
          </p>
          <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-black text-chrome leading-[1.1] mt-3 tracking-tight [text-wrap:balance]">
            {locale === 'en' ? 'Ready to Keep Your Fleet Clean?' : '¿Listo para Mantener tu Flota Limpia?'}
          </h2>
        </div>

        {/* Form and Phone CTA block */}
        <div className="grid gap-[clamp(1.5rem,4vw,3.5rem)] lg:grid-cols-2 lg:items-stretch max-w-5xl mx-auto w-full">
          <FadeInUp delay={0.1} className="w-full">
            <ContactForm />
          </FadeInUp>
          <FadeInUp delay={0.2} className="w-full">
            <ContactPhoneCard />
          </FadeInUp>
        </div>

      </div>
    </section>
  );
}
