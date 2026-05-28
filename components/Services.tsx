'use client';

import React from 'react';
import { useTranslation } from '../lib/LanguageContext';
import { Truck, Layers, Cog, Circle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import FadeInUp from './ui/FadeInUp';

export default function Services() {
  const { t } = useTranslation();
  const serviceItems = t('services.items') || [];

  // Map each service matching user specification to correct icons
  const icons = [
    <Truck className="h-[22px] w-[22px] text-brand-accent" key="0" />,
    <Layers className="h-[22px] w-[22px] text-brand-accent" key="1" />,
    <Cog className="h-[22px] w-[22px] text-brand-accent" key="2" />,
    <Circle className="h-[22px] w-[22px] text-brand-accent" key="3" />,
    <Sparkles className="h-[22px] w-[22px] text-brand-accent" key="4" />
  ];

  return (
    <section id="services" className="bg-bg-navy py-[clamp(4.5rem,8vw,7rem)] px-5 sm:px-6 lg:px-8 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header following exact structure */}
        <div className="text-center mb-[clamp(3rem,6vw,5rem)]">
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-brand-glow">
            {t('services.eyebrow')}
          </p>
          <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-black text-chrome leading-[1.1] mt-3 tracking-tight [text-wrap:balance]">
            {t('services.heading')}
          </h2>
          <p className="text-[clamp(0.9rem,2vw,1.05rem)] text-text-muted leading-relaxed max-w-2xl mx-auto mt-4 [text-wrap:balance]">
            {t('services.subheading')}
          </p>
        </div>

        {/* Serves mapped in fluid grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(1rem,3vw,1.5rem)] justify-items-center w-full">
          {serviceItems.map((item: any, idx: number) => (
            <FadeInUp
              delay={0.05 * idx} // Staggered delays keep within 0.3s totals
              key={idx}
              className="w-full flex"
            >
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="w-full flex flex-col justify-between overflow-hidden rounded-2xl card-glow p-6 hover:shadow-electric hover:border-brand-glow transition-all duration-300"
              >
                <div>
                  {/* Icon square wrapper styled with bg-bg-mid and rounded shape */}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-bg-mid">
                    {icons[idx]}
                  </div>
                  
                  {/* Card Title (H3) */}
                  <h3 className="text-base md:text-lg font-bold text-white mt-1">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Learn More item */}
                <div className="mt-4 pt-2">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-brand-accent hover:text-brand-glow text-xs font-semibold transition-colors"
                  >
                    Learn More <span className="ml-1">→</span>
                  </a>
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>

      </div>
    </section>
  );
}
