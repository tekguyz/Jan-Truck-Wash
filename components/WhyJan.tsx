'use client';

import React from 'react';
import { useTranslation } from '../lib/LanguageContext';
import FadeInUp from './ui/FadeInUp';
import { ShieldCheck, MapPin, BadgeDollarSign, ThumbsUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyJan() {
  const { t } = useTranslation();
  const items = t('whyJan.items') || [];

  // Mapped icons using correct styling
  const icons = [
    <ShieldCheck className="h-[22px] w-[22px] text-brand-accent" key="0" />,
    <MapPin className="h-[22px] w-[22px] text-brand-accent" key="1" />,
    <BadgeDollarSign className="h-[22px] w-[22px] text-brand-accent" key="2" />,
    <ThumbsUp className="h-[22px] w-[22px] text-brand-accent" key="3" />
  ];

  return (
    <section id="why-us" className="bg-bg-navy py-16 md:py-24 px-6 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header following exact structure */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-glow">
            {t('whyJan.eyebrow')}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-chrome leading-tight mt-2">
            {t('whyJan.heading')}
          </h2>
        </div>

        {/* 2x2 Grid Layout support (1 column mobile, 2 columns on desktop) with gap-5 */}
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item: any, idx: number) => (
            <FadeInUp
              delay={0.05 * idx} // Staggered delays within 0.3s
              key={idx}
              className="flex w-full"
            >
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="w-full flex flex-row items-start gap-4 rounded-xl md:rounded-2xl card-glow p-5 md:p-6 transition-all duration-300 hover:shadow-electric hover:border-brand-glow"
              >
                {/* Icon container: w-12 h-12 min-w-[48px], bg-bg-mid, centered */}
                <div className="flex-shrink-0 w-12 h-12 min-w-[48px] rounded-xl bg-bg-mid flex items-center justify-center">
                  {icons[idx]}
                </div>
                
                {/* Right side content */}
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>

      </div>
    </section>
  );
}
