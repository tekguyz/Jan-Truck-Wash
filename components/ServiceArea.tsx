'use client';

import React from 'react';
import { useTranslation } from '../lib/LanguageContext';
import FadeInUp from './ui/FadeInUp';
import { Phone, MapPin } from 'lucide-react';
import { BUSINESS } from '../lib/constants';
import { motion } from 'motion/react';

export default function ServiceArea() {
  const { t } = useTranslation();
  const states = t('serviceArea.states') || [];

  return (
    <section id="coverage" className="bg-bg-mid py-[clamp(4.5rem,8vw,7rem)] px-5 sm:px-6 lg:px-8 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header following exact structure */}
        <div className="text-center mb-[clamp(3.5rem,6vw,5rem)]">
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-brand-glow">
            {t('serviceArea.eyebrow')}
          </p>
          <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-black text-chrome leading-[1.1] mt-3 tracking-tight [text-wrap:balance]">
            {t('serviceArea.heading')}
          </h2>
          <p className="text-[clamp(0.9rem,2vw,1.05rem)] text-text-muted leading-relaxed max-w-2xl mx-auto mt-4 [text-wrap:balance]">
            {t('serviceArea.subheading')}
          </p>
        </div>

        {/* 3 columns state coverage cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {states.map((state: any, idx: number) => (
            <FadeInUp
              key={idx}
              delay={0.05 * idx} // Staggered delays
              className="flex w-full"
            >
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="w-full rounded-2xl card-glow p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-electric hover:border-brand-glow flex flex-col justify-between"
              >
                <div>
                  {/* Top row with state name and abbr badge */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
                    <div className="flex items-center space-x-2">
                       <MapPin className="h-5 w-5 text-brand-glow flex-shrink-0" />
                       <span className="text-lg font-bold text-white select-none">
                        {state.name}
                      </span>
                    </div>
                    <span className="bg-brand-blue text-white text-xs font-bold px-2 py-1 rounded-md select-none">
                      {state.abbr}
                    </span>
                  </div>

                  {/* Market Pills List with flex-wrap as requested */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {state.markets.map((market: string, mIdx: number) => (
                      <span
                        key={mIdx}
                        className="bg-bg-mid text-brand-glow text-xs font-medium px-3 py-1 rounded-full select-none border border-border/40"
                      >
                        {market}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>

        {/* Full-width callout strip below the 3 state cards */}
        <FadeInUp delay={0.2} className="w-full">
          <div className="mt-12 card-glow rounded-2xl p-6 md:p-8 shadow-xl shadow-black/40 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div 
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(43,127,255,0.12),transparent)] z-0" 
              aria-hidden="true" 
            />
            
            <div className="relative z-10 text-center md:text-left max-w-xl">
              <p className="font-sans text-sm md:text-base text-white leading-relaxed font-semibold">
                {t('serviceArea.callout')}
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
              <motion.a
                href={BUSINESS.phoneLink}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center space-x-2 w-full md:w-auto rounded-full bg-gradient-to-r from-brand-blue to-blue-600 text-white font-bold px-7 py-3.5 border border-cyan-400/30 hover:border-cyan-400/60 shadow-lg shadow-black/80 hover:scale-105 transition-all cursor-pointer"
              >
                <Phone className="h-4 w-4 fill-white text-white" />
                <span>{t('serviceArea.calloutCta')} →</span>
              </motion.a>
            </div>
          </div>
        </FadeInUp>

      </div>
    </section>
  );
}
