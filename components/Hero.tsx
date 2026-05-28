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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:py-36 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column — Text Copy & Core Actions */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-6">

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
            className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-chrome max-w-2xl break-words"
          >
            {t('hero.headline')}
            <span className="text-brand-accent block mt-1 sm:inline sm:mt-0 font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}{t('hero.headlineAccent')}
            </span>
          </motion.h1>

          {/* Subheadline description */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl font-normal"
          >
            {t('hero.subheadline')}
          </motion.p>

          {/* Actions & Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full sm:w-auto pt-2"
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
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>

          {/* Trust indicators check cards */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 pt-6 border-t border-white/5 w-full text-text-muted"
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
        </div>

        {/* Right Column — Desktop Logo (Desktop only, completely hidden on mobile) */}
        <motion.div
          variants={itemVariants}
          className="hidden md:flex md:col-span-12 lg:col-span-5 items-center justify-center relative select-none"
        >
          <div className="relative w-[240px] h-[240px] lg:w-[320px] lg:h-[320px]">
            <Image
              src="/logo.png"
              alt="Jan Truck Wash premium desktop logo"
              fill
              priority
              className="object-contain"
              style={{ mixBlendMode: 'lighten' }}
            />
          </div>
        </motion.div>

          {/* Equipment Specs Panel */}
          <FadeInUp delay={0.4} className="w-full md:col-span-12">
            <div className="mt-12 border-t border-white/5 pt-8 w-full">
              {/* Strip Header */}
              <div className="text-[10px] text-text-subtle tracking-widest uppercase font-bold text-center mb-6">
                {t('specs.title')}
              </div>

              {/* Clean minimalist horizontally aligned specs list */}
              <div className="flex flex-col md:flex-row md:items-center justify-center gap-6 md:gap-12">
                
                {/* Spec 1 — Pressure */}
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Gauge className="text-brand-accent h-5 w-5 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-text-subtle uppercase tracking-wider leading-none">{t('specs.card1.label')}</p>
                    <p className="text-xs font-semibold text-white mt-1">
                      <span className="font-bold text-sm text-brand-glow">{t('specs.card1.value')}</span> — {t('specs.card1.sub')}
                    </p>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-px h-8 bg-white/10" />

                {/* Spec 2 — Hot Water */}
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Flame className="text-brand-accent h-5 w-5 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-text-subtle uppercase tracking-wider leading-none">{t('specs.card2.label')}</p>
                    <p className="text-xs font-semibold text-white mt-1">
                      <span className="font-bold text-sm text-brand-glow">{t('specs.card2.value')}</span> — {t('specs.card2.sub')}
                    </p>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-px h-8 bg-white/10" />

                {/* Spec 3 — Eco Compliance */}
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <ShieldCheck className="text-brand-accent h-5 w-5 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-text-subtle uppercase tracking-wider leading-none">{t('specs.card3.label')}</p>
                    <p className="text-xs font-semibold text-white mt-1">
                      <span className="font-bold text-sm text-brand-glow">{t('specs.card3.value')}</span> — {t('specs.card3.sub')}
                    </p>
                  </div>
                </div>

              </div>

              {/* Disclaimer */}
              <div className="text-[10px] text-text-subtle italic mt-6 text-center">
                {t('specs.disclaimer')}
              </div>
            </div>
          </FadeInUp>
        </motion.div>
      </div>
    </section>
  );
}
