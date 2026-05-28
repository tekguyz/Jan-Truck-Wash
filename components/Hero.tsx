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

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Subcomponent: Hero Eyebrow, Headline, and Supporting Text
interface HeroContentProps {
  t: (key: string) => string;
}

function HeroContent({ t }: HeroContentProps) {
  return (
    <>
      {/* Eyebrow Badge */}
      <motion.p
        variants={itemVariants}
        className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-glow bg-brand-blue/10 border border-brand-accent/20 px-3.5 sm:px-4 py-1.5 rounded-full select-none"
      >
        {t('hero.eyebrow')}
      </motion.p>

      {/* Cinematic Fluid Headline */}
      <motion.h1
        variants={itemVariants}
        className="mt-[clamp(0.85rem,2.5vw,1.35rem)] max-w-[15ch] font-sans font-black tracking-tight text-chrome [text-wrap:balance] leading-[1.05] text-[clamp(2.5rem,7vw,4rem)] md:text-[clamp(3.3rem,6.5vw,4.8rem)] lg:text-[clamp(4.2rem,7vw,5.5rem)]"
      >
        {t('hero.headline')}
        <br className="hidden sm:block" />
        <span className="block sm:inline mt-1.5 sm:mt-0 font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {' '}
          {t('hero.headlineAccent')}
        </span>
      </motion.h1>

      {/* Fluid Subheadline */}
      <motion.p
        variants={itemVariants}
        className="mt-[clamp(0.75rem,2vw,1.25rem)] max-w-xl md:max-w-2xl text-[clamp(0.9rem,1.8vw,1.05rem)] text-text-muted leading-relaxed font-normal"
      >
        {t('hero.subheadline')}
      </motion.p>
    </>
  );
}

// Subcomponent: Action Buttons
interface HeroCTAGroupProps {
  t: (key: string) => string;
}

function HeroCTAGroup({ t }: HeroCTAGroupProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 w-full sm:w-auto pt-[clamp(1.25rem,4vw,2.25rem)]"
    >
      {/* Primary Calling CTA */}
      <motion.a
        id="hero-cta-call"
        href={BUSINESS.phoneLink}
        whileTap={{ scale: 0.97 }}
        className="group flex items-center justify-center space-x-3 w-full sm:w-auto rounded-full bg-gradient-to-r from-brand-blue to-blue-600 text-white font-bold px-[clamp(1.5rem,4vw,2.25rem)] py-[clamp(0.9rem,2vw,1.2rem)] text-[clamp(0.85rem,2vw,1rem)] border border-cyan-400/30 hover:border-cyan-400/60 shadow-[0_10px_40px_rgba(0,0,0,0.45)] hover:scale-[1.03] transition-all duration-300 cursor-pointer"
      >
        <Phone className="h-4 sm:h-5 w-4 sm:w-5 fill-white text-white" />
        <span>{t('hero.ctaCall')}</span>
      </motion.a>

      {/* Secondary Quote CTA */}
      <motion.a
        id="hero-cta-quote"
        href="#contact"
        whileTap={{ scale: 0.97 }}
        className="flex items-center justify-center space-x-2 w-full sm:w-auto rounded-full border border-white/15 hover:border-brand-accent text-white hover:bg-white/[0.03] font-semibold px-[clamp(1.25rem,3.5vw,1.75rem)] py-[clamp(0.8rem,1.8vw,1.1rem)] text-[clamp(0.8rem,2vw,0.9rem)] transition-all ease-out duration-300 hover:-translate-y-0.5 cursor-pointer"
      >
        <span>{t('hero.ctaQuote')}</span>
        <ArrowRight className="h-4 w-4" />
      </motion.a>
    </motion.div>
  );
}

// Subcomponent: Trust Check Badges
interface TrustIndicatorsProps {
  t: (key: string) => string;
}

function TrustIndicators({ t }: TrustIndicatorsProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 pt-[clamp(1.25rem,4vw,2rem)] mt-[clamp(1rem,3vw,1.75rem)] border-t border-white/5 w-full text-text-muted select-none"
    >
      <div className="flex items-center space-x-2">
        <CheckCircle2 className="h-4 w-4 text-brand-glow flex-shrink-0" />
        <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide">
          {t('hero.badge1')}
        </span>
      </div>

      <div className="flex items-center space-x-2">
        <CheckCircle2 className="h-4 w-4 text-brand-glow flex-shrink-0" />
        <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide">
          {t('hero.badge2')}
        </span>
      </div>

      <div className="flex items-center space-x-2">
        <CheckCircle2 className="h-4 w-4 text-brand-glow flex-shrink-0" />
        <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide">
          {t('hero.badge3')}
        </span>
      </div>
    </motion.div>
  );
}

// Subcomponent: Individual Equipment Spec Card
interface SpecCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}

function SpecCard({ icon, label, value, sub }: SpecCardProps) {
  return (
    <div className="flex items-center space-x-4 justify-center md:justify-start">
      <div className="text-brand-accent h-5 w-5 flex-shrink-0">
        {icon}
      </div>
      <div className="text-left">
        <p className="text-[10px] font-bold text-text-subtle uppercase tracking-wider leading-none">
          {label}
        </p>
        <p className="text-sm font-semibold text-white mt-1">
          <span className="font-bold text-base text-brand-glow">
            {value}
          </span>{' '}
          — {sub}
        </p>
      </div>
    </div>
  );
}

// Subcomponent: Specs Panel
interface SpecsPanelProps {
  t: (key: string) => string;
}

function SpecsPanel({ t }: SpecsPanelProps) {
  return (
    <section className="relative bg-bg-deep border-t border-white/5 select-none">
      <FadeInUp delay={0.2}>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-[clamp(1.5rem,4vw,2.5rem)]">
          {/* Header */}
          <div className="text-[10px] text-text-subtle tracking-[0.25em] uppercase font-bold text-center mb-[clamp(1.25rem,3vw,2rem)]">
            {t('specs.title')}
          </div>

          {/* Specs Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-center gap-6 md:gap-12">
            <SpecCard
              icon={<Gauge className="h-5 w-5" />}
              label={t('specs.card1.label')}
              value={t('specs.card1.value')}
              sub={t('specs.card1.sub')}
            />

            <div className="hidden md:block w-px h-8 bg-white/10" />

            <SpecCard
              icon={<Flame className="h-5 w-5" />}
              label={t('specs.card2.label')}
              value={t('specs.card2.value')}
              sub={t('specs.card2.sub')}
            />

            <div className="hidden md:block w-px h-8 bg-white/10" />

            <SpecCard
              icon={<ShieldCheck className="h-5 w-5" />}
              label={t('specs.card3.label')}
              value={t('specs.card3.value')}
              sub={t('specs.card3.sub')}
            />
          </div>

          {/* Disclaimer */}
          <div className="text-[10px] text-text-subtle italic mt-[clamp(1.5rem,3vw,2rem)] text-center">
            {t('specs.disclaimer')}
          </div>
        </div>
      </FadeInUp>
    </section>
  );
}

// Main Component
export default function Hero() {
  const { t } = useTranslation();

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-[100svh] lg:min-h-screen flex items-center overflow-hidden bg-bg-deep text-white select-none"
      >
        {/* Top subtle radial atmospheric lighting */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,217,255,0.08),transparent)] z-0 pointer-events-none"
          aria-hidden="true"
        />

        {/* Bottom smooth darkness blend */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-deep to-transparent z-0 pointer-events-none"
          aria-hidden="true"
        />

        {/* Content Wrapper */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-[clamp(5.5rem,10vw,7.5rem)] pb-[clamp(4rem,8vw,5rem)] w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-10 lg:gap-14 items-center"
          >
            {/* LEFT COLUMN: Texts & CTA actions */}
            <div className="md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left">
              <HeroContent t={t} />
              <HeroCTAGroup t={t} />
              <TrustIndicators t={t} />
            </div>

            {/* RIGHT COLUMN: Interactive branded Logo */}
            <motion.div
              variants={itemVariants}
              className="hidden md:flex md:col-span-4 items-center justify-center relative select-none"
            >
              <div className="relative w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] opacity-80 scale-110 pointer-events-none">
                <Image
                  src="/logo.png"
                  alt="Jan Truck Wash premium logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* EQUIPMENT SPECS PANEL */}
      <SpecsPanel t={t} />
    </>
  );
}
