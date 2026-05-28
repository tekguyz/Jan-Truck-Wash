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
    <section id="services" className="bg-bg-navy py-16 md:py-24 px-6 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header following exact structure */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-glow">
            {t('services.eyebrow')}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-chrome leading-tight mt-2">
            {t('services.heading')}
          </h2>
          <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-2xl mx-auto mt-4">
            {t('services.subheading')}
          </p>
        </div>

        {/* 5 Service cards mapped in grid layout with centering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
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
