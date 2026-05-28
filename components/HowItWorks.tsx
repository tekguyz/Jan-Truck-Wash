'use client';

import React from 'react';
import { useTranslation } from '../lib/LanguageContext';
import { CalendarCheck, MapPin, ShieldCheck } from 'lucide-react';
import FadeInUp from './ui/FadeInUp';

export default function HowItWorks() {
  const { t, locale } = useTranslation();
  const stepsData = t('howItWorks.steps') || [];

  // Mapped step icons according to specifications
  const icons = [
    <CalendarCheck className="text-brand-accent" size={28} key="0" />,
    <MapPin className="text-brand-accent" size={28} key="1" />,
    <ShieldCheck className="text-brand-accent" size={28} key="2" />
  ];

  return (
    <section id="how-it-works" className="bg-bg-mid py-[clamp(4.5rem,8vw,7rem)] px-5 sm:px-6 lg:px-8 text-white scroll-mt-20 relative select-none">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header following exact structure and spacing */}
        <div className="text-center mb-[clamp(3.5rem,6vw,5rem)]">
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-brand-glow">
            {t('howItWorks.eyebrow')}
          </p>
          <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-black text-chrome leading-[1.1] mt-3 tracking-tight [text-wrap:balance]">
            {t('howItWorks.heading')}
          </h2>
        </div>

        {/* --- DESKTOP VIEW STYLE (md and up) --- */}
        <div className="hidden md:block relative py-8">
          {/* Connecting line behind desktop circles */}
          <div 
            className="absolute top-[28px] left-[16%] right-[16%] h-px border-t-2 border-dashed border-border z-0"
            aria-hidden="true"
          />

          <div className="flex flex-row justify-between items-stretch gap-8 relative z-10">
            {stepsData.map((step: any, idx: number) => (
              <FadeInUp
                delay={0.05 * idx}
                key={`desktop-${idx}`}
                className="flex-1 flex flex-col items-center text-center max-w-[260px] mx-auto relative"
              >
                {/* 1. Step Circle Badge (Number only, no overlapping) */}
                <div className="w-10 h-10 rounded-full bg-brand-blue text-white font-sans text-sm font-bold flex items-center justify-center ring-4 ring-bg-mid z-10 relative mb-4">
                  {idx + 1}
                </div>

                {/* 2. Icon sits below the badge */}
                <div className="mb-3">
                  {icons[idx]}
                </div>

                {/* 3. Step Title (H3) */}
                <h3 className="text-base md:text-lg font-bold text-white">
                  {step.title}
                </h3>

                {/* 4. Step Description */}
                <p className="text-sm text-text-muted mt-2 leading-relaxed">
                  {step.description}
                </p>
              </FadeInUp>
            ))}
          </div>
        </div>

        {/* --- MOBILE VIEW STYLE (default stacked) --- */}
        <div className="block md:hidden relative pl-4">
          {/* Left vertical timeline border line */}
          <div 
            className="absolute left-[27px] top-4 bottom-8 w-px bg-border"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10 relative">
            {stepsData.map((step: any, idx: number) => (
              <div 
                key={`mobile-${idx}`} 
                className="flex flex-row items-start pl-12 relative"
              >
                {/* 1. Circle Badge on left */}
                <div className="absolute left-[16px] top-1 w-6 h-6 rounded-full bg-brand-blue text-white font-bold text-[10px] flex items-center justify-center ring-4 ring-bg-mid z-10">
                  {idx + 1}
                </div>

                {/* Inside step wrapper */}
                <div className="flex flex-col">
                  {/* 2. Icon to the right of badge */}
                  <div>
                    {icons[idx]}
                  </div>

                  {/* 3. Step Title */}
                  <h3 className="text-base font-bold text-white mt-2">
                    {step.title}
                  </h3>

                  {/* 4. Step Description */}
                  <p className="text-sm text-text-muted mt-1 leading-relaxed max-w-full">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
