'use client';

import React from 'react';
import { useTranslation } from '../lib/LanguageContext';
import FadeInUp from './ui/FadeInUp';

export default function Stats() {
  const { t } = useTranslation();
  // Get the stats items array
  const statsItems = t('stats.items') || [];

  return (
    <section 
      id="stats" 
      className="relative overflow-hidden bg-bg-deep py-16 md:py-24 px-6 text-white select-none scroll-mt-20 border-t border-border"
    >
      {/* Background visual depth using soft radial gradient */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,47,90,0.25)_0%,rgba(6,13,26,0.95)_100%)] z-0" 
        aria-hidden="true" 
      />

      <div className="relative max-w-6xl mx-auto z-10 w-full">
        <FadeInUp delay={0.05}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full items-stretch">
            {statsItems.map((stat: any, idx: number) => {
              const rawValue = stat.value || '';
              const suffix = stat.suffix || '';
              const label = stat.label || '';

              return (
                <div 
                  key={idx} 
                  className="card-glow border-t-2 border-t-brand-accent rounded-2xl p-4 md:p-6 flex flex-col h-full items-center justify-center text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-electric"
                >
                  {/* Large Number & Suffix line - text-3xl on mobile, text-5xl on medium up */}
                  <div className="font-sans text-3xl md:text-5xl font-black text-chrome leading-none flex items-center justify-center select-none">
                    <span>{rawValue}</span>
                    {/* Suffix like + or ★ in inline accent color */}
                    {suffix && (
                      <span className="text-brand-accent font-extrabold ml-1">
                        {suffix}
                      </span>
                    )}
                  </div>

                  {/* Label below */}
                  <div className="font-sans text-[10px] md:text-xs text-text-muted uppercase tracking-widest mt-2 md:mt-3 font-semibold leading-relaxed max-w-[170px] mx-auto select-none">
                    {label}
                  </div>
                </div>
              );
            })}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
