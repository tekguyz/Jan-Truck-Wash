'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '../lib/LanguageContext';
import { motion, Variants } from 'motion/react';
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Gauge,
  Flame,
  ShieldCheck,
} from 'lucide-react';
import { BUSINESS } from '../lib/constants';
import FadeInUp from './ui/FadeInUp';

export default function Hero() {
  const { t } = useTranslation();

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
    <>
      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden bg-bg-deep text-white select-none"
      >
        {/* Top radial glow */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,217,255,0.08),transparent)] z-0"
          aria-hidden="true"
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-deep to-transparent z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-32 sm:pt-36 md:pt-36 lg:pt-44 pb-10 md:pb-16 lg:pb-20 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center"
          >
            {/* LEFT COLUMN */}
            <div className="md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left">
              {/* Eyebrow */}
              <motion.p
                variants={itemVariants}
                className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-brand-glow bg-brand-blue/10 border border-brand-accent/20 px-4 py-2 rounded-full"
              >
                {t('hero.eyebrow')}
              </motion.p>

              {/* Headline */}
              <motion.h1
                variants={itemVariants}
                className="mt-6 max-w-[11ch] font-sans font-black tracking-tight text-chrome [text-wrap:balance] leading-[0.95] text-[2.7rem] sm:text-6xl lg:text-7xl xl:text-[6rem]"
              >
                {t('hero.headline')}

                <br className="hidden sm:block" />

                <span className="block sm:inline mt-2 sm:mt-0 font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {' '}
                  {t('hero.headlineAccent')}
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={itemVariants}
                className="mt-6 max-w-xl text-base sm:text-lg text-text-muted leading-relaxed font-normal"
              >
                {t('hero.subheadline')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 w-full sm:w-auto pt-8"
              >
                {/* Primary CTA */}
                <motion.a
                  id="hero-cta-call"
                  href={BUSINESS.phoneLink}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center justify-center space-x-3 w-full sm:w-auto rounded-full bg-gradient-to-r from-brand-blue to-blue-600 text-white font-bold px-9 py-5 text-base border border-cyan-400/30 hover:border-cyan-400/60 shadow-[0_10px_40px_rgba(0,0,0,0.45)] hover:scale-[1.03] transition-all duration-300 cursor-pointer"
                >
                  <Phone className="h-5 w-5 fill-white text-white" />

                  <span>{t('hero.ctaCall')}</span>
                </motion.a>

                {/* Secondary CTA */}
                <motion.a
                  id="hero-cta-quote"
                  href="#contact"
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center space-x-2 w-full sm:w-auto rounded-full border border-white/15 hover:border-brand-accent text-white hover:bg-white/[0.03] font-semibold px-7 py-4 text-sm transition-all ease-out duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>{t('hero.ctaQuote')}</span>

                  <ArrowRight className="h-4 w-4" />
                </motion.a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center md:justify-start gap-x-7 gap-y-4 pt-8 mt-2 border-t border-white/5 w-full text-text-muted"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-glow flex-shrink-0" />

                  <span className="font-sans text-sm font-semibold tracking-wide">
                    {t('hero.badge1')}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-glow flex-shrink-0" />

                  <span className="font-sans text-sm font-semibold tracking-wide">
                    {t('hero.badge2')}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-glow flex-shrink-0" />

                  <span className="font-sans text-sm font-semibold tracking-wide">
                    {t('hero.badge3')}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN — DESKTOP LOGO */}
            <motion.div
              variants={itemVariants}
              className="hidden md:flex md:col-span-4 items-center justify-center relative select-none"
            >
              <div className="relative w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] opacity-80 scale-110">
                <Image
                  src="/logo.png"
                  alt="Jan Truck Wash premium logo"
                  fill
                  priority
                  className="object-contain"
                  style={{ mixBlendMode: 'lighten' }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* EQUIPMENT SPECS SECTION */}
      <section className="relative bg-bg-deep border-t border-white/5">
        <FadeInUp delay={0.2}>
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-10 md:py-12">
            {/* Header */}
            <div className="text-[10px] text-text-subtle tracking-[0.25em] uppercase font-bold text-center mb-8">
              {t('specs.title')}
            </div>

            {/* Specs Row */}
            <div className="flex flex-col md:flex-row md:items-center justify-center gap-8 md:gap-12">
              {/* Spec 1 */}
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <Gauge className="text-brand-accent h-5 w-5 flex-shrink-0" />

                <div className="text-left">
                  <p className="text-[10px] font-bold text-text-subtle uppercase tracking-wider leading-none">
                    {t('specs.card1.label')}
                  </p>

                  <p className="text-sm font-semibold text-white mt-1">
                    <span className="font-bold text-base text-brand-glow">
                      {t('specs.card1.value')}
                    </span>{' '}
                    — {t('specs.card1.sub')}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-8 bg-white/10" />

              {/* Spec 2 */}
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <Flame className="text-brand-accent h-5 w-5 flex-shrink-0" />

                <div className="text-left">
                  <p className="text-[10px] font-bold text-text-subtle uppercase tracking-wider leading-none">
                    {t('specs.card2.label')}
                  </p>

                  <p className="text-sm font-semibold text-white mt-1">
                    <span className="font-bold text-base text-brand-glow">
                      {t('specs.card2.value')}
                    </span>{' '}
                    — {t('specs.card2.sub')}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-8 bg-white/10" />

              {/* Spec 3 */}
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <ShieldCheck className="text-brand-accent h-5 w-5 flex-shrink-0" />

                <div className="text-left">
                  <p className="text-[10px] font-bold text-text-subtle uppercase tracking-wider leading-none">
                    {t('specs.card3.label')}
                  </p>

                  <p className="text-sm font-semibold text-white mt-1">
                    <span className="font-bold text-base text-brand-glow">
                      {t('specs.card3.value')}
                    </span>{' '}
                    — {t('specs.card3.sub')}
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="text-[10px] text-text-subtle italic mt-8 text-center">
              {t('specs.disclaimer')}
            </div>
          </div>
        </FadeInUp>
      </section>
    </>
  );
}