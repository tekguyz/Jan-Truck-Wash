'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '../lib/LanguageContext';
import { motion, Variants } from 'motion/react';
import { Phone, ArrowRight, CheckCircle2, Gauge, Flame, ShieldCheck } from 'lucide-react';
import { BUSINESS } from '../lib/constants';
import FadeInUp from './ui/FadeInUp';

export default function Hero() {
  const { t } = useTranslation();

  // Stagger transition definitions
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg-deep text-white select-none"
    >
      {/* Radial glow gradient from the top center */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,217,255,0.08),transparent)] z-0"
        aria-hidden="true"
      />

      {/* Second subtle div for a bottom fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-deep to-transparent z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-36 text-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center space-y-7"
        >
          {/* Glowing Centered Logo - subtle scale entrance on mount */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center mb-2"
          >
            <div className="relative mx-auto w-[80px] h-[80px] md:w-[110px] md:h-[110px]">
              <Image
                src="/logo.png"
                alt="Jan Truck Wash logo"
                fill
                priority
                className="object-contain"
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
          </motion.div>

          {/* Eyebrow badge using theme colors */}
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-widest text-brand-glow bg-brand-blue/10 border border-brand-accent/20 px-4 py-1.5 rounded-full"
          >
            {t('hero.eyebrow')}
          </motion.p>

          {/* H1 Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-sans text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-chrome max-w-5xl break-words"
          >
            {t('hero.headline')}
            <span className="text-brand-accent block mt-2 sm:inline sm:mt-0 font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('hero.headlineAccent')}
            </span>
          </motion.h1>

          {/* Subheadline description */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-text-muted leading-relaxed max-w-2xl mx-auto font-normal"
          >
            {t('hero.subheadline')}
          </motion.p>

          {/* Actions & Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-4"
          >
            {/* Direct Phone Call Button */}
            <motion.a
              id="hero-cta-call"
              href={BUSINESS.phoneLink}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center space-x-3 w-full sm:w-auto rounded-full bg-gradient-to-r from-brand-blue to-blue-600 text-white font-bold px-8 py-4 border border-cyan-400/30 hover:border-cyan-400/60 shadow-lg shadow-black/80 hover:scale-105 transition-all cursor-pointer"
            >
              <Phone className="h-5 w-5 fill-white text-white" />
              <span>{t('hero.ctaCall')}</span>
            </motion.a>

            {/* Smooth Scroll Quote Button */}
            <motion.a
              id="hero-cta-quote"
              href="#contact"
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center space-x-2 w-full sm:w-auto rounded-full border border-white/20 hover:border-brand-accent text-white hover:bg-white/5 font-semibold px-8 py-4 transition-all ease-out duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{t('hero.ctaQuote')}</span>
              <ArrowRight className="h-5 w-5 animate-pulse" />
            </motion.a>
          </motion.div>

          {/* Trust indicators check cards */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-8 border-t border-white/5 w-full text-text-muted"
          >
            {/* Badge 1 */}
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-4 w-4 text-brand-glow flex-shrink-0" />
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide">
                {t('hero.badge1')}
              </span>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-4 w-4 text-brand-glow flex-shrink-0" />
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide">
                {t('hero.badge2')}
              </span>
            </div>

            {/* Badge 3 */}
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-4 w-4 text-brand-glow flex-shrink-0" />
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide">
                {t('hero.badge3')}
              </span>
            </div>
          </motion.div>

          {/* Equipment Specs Panel */}
          <FadeInUp delay={0.4} className="w-full">
            <div className="mt-12 border-t border-border pt-8 w-full">
              {/* Small label above the strip */}
              <div className="text-xs text-text-subtle tracking-widest uppercase font-bold text-center mb-6">
                {t('specs.title')}
              </div>

              {/* Three spec cards in a row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Card 1 — Pressure */}
                <div className="card-glow rounded-xl p-4 flex items-center space-x-4 border border-white/5 bg-bg-secondary/40 hover:border-brand-glow/40 hover:bg-white/5 transition-all duration-300 select-none">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-bg-mid border border-white/10 flex items-center justify-center text-brand-accent">
                    <Gauge className="text-brand-accent animate-none" size={20} />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-xl font-black text-chrome leading-none">{t('specs.card1.value')}</span>
                      <span className="text-[10px] font-bold text-brand-glow uppercase tracking-wider leading-none">{t('specs.card1.label')}</span>
                    </div>
                    <p className="text-xs text-text-muted mt-1 leading-normal">
                      {t('specs.card1.sub')}
                    </p>
                  </div>
                </div>

                {/* Card 2 — Hot Water */}
                <div className="card-glow rounded-xl p-4 flex items-center space-x-4 border border-white/5 bg-bg-secondary/40 hover:border-brand-glow/40 hover:bg-white/5 transition-all duration-300 select-none">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-bg-mid border border-white/10 flex items-center justify-center text-brand-accent">
                    <Flame className="text-brand-accent animate-none" size={20} />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-xl font-black text-chrome leading-none">{t('specs.card2.value')}</span>
                      <span className="text-[10px] font-bold text-brand-glow uppercase tracking-wider leading-none">{t('specs.card2.label')}</span>
                    </div>
                    <p className="text-xs text-text-muted mt-1 leading-normal">
                      {t('specs.card2.sub')}
                    </p>
                  </div>
                </div>

                {/* Card 3 — EPA Compliance */}
                <div className="card-glow rounded-xl p-4 flex items-center space-x-4 border border-white/5 bg-bg-secondary/40 hover:border-brand-glow/40 hover:bg-white/5 transition-all duration-300 select-none">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-bg-mid border border-white/10 flex items-center justify-center text-brand-accent">
                    <ShieldCheck className="text-brand-accent animate-none" size={20} />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-xl font-black text-chrome leading-none">{t('specs.card3.value')}</span>
                      <span className="text-[10px] font-bold text-brand-glow uppercase tracking-wider leading-none">{t('specs.card3.label')}</span>
                    </div>
                    <p className="text-xs text-text-muted mt-1 leading-normal">
                      {t('specs.card3.sub')}
                    </p>
                  </div>
                </div>

              </div>

              {/* Disclaimer */}
              <div className="text-[10px] text-text-subtle italic mt-4 text-center">
                {t('specs.disclaimer')}
              </div>
            </div>
          </FadeInUp>
        </motion.div>
      </div>
    </section>
  );
}
