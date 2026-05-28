'use client';

import React from 'react';

export default function MarqueeTrust() {
  const phrases = [
    "Owner Operators",
    "Commercial Fleets",
    "Trucking Companies",
    "Construction Companies",
    "Fully Insured",
    "Mobile Service",
    "PA · NJ · DE",
    "Satisfaction Guaranteed"
  ];

  return (
    <div
      id="marquee-trust"
      className="relative w-full overflow-hidden bg-brand-blue py-3.5 flex items-center select-none z-20 border-y border-white/10"
    >
      {/* Injecting CSS Keyframes for a seamless, jank-free marquee loop */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-infinite {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee-custom {
          display: flex;
          width: max-content;
          animation: marquee-infinite 30s linear infinite;
        }
        .animate-marquee-custom:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Marquee Inner Container - duplicating content for seamless looping */}
      <div className="animate-marquee-custom flex items-center">
        {/* Original Set */}
        {phrases.map((phrase, idx) => (
          <div key={`orig-${idx}`} className="flex items-center">
            <span className="font-sans text-xs md:text-sm font-semibold text-white tracking-wider uppercase whitespace-nowrap px-4 md:px-6">
              {phrase}
            </span>
            <span className="text-white/40 text-[10px] select-none">◆</span>
          </div>
        ))}
        {/* Duplicated Set for infinite continuous wrap */}
        {phrases.map((phrase, idx) => (
          <div key={`dup1-${idx}`} className="flex items-center">
            <span className="font-sans text-xs md:text-sm font-semibold text-white tracking-wider uppercase whitespace-nowrap px-4 md:px-6">
              {phrase}
            </span>
            <span className="text-white/40 text-[10px] select-none">◆</span>
          </div>
        ))}
        {/* Additional padding set for ultra-wide monitors */}
        {phrases.map((phrase, idx) => (
          <div key={`dup2-${idx}`} className="flex items-center">
            <span className="font-sans text-xs md:text-sm font-semibold text-white tracking-wider uppercase whitespace-nowrap px-4 md:px-6">
              {phrase}
            </span>
            <span className="text-white/40 text-[10px] select-none">◆</span>
          </div>
        ))}
        {/* Additional padding set for 4K and ultra-wide seamlessness */}
        {phrases.map((phrase, idx) => (
          <div key={`dup3-${idx}`} className="flex items-center">
            <span className="font-sans text-xs md:text-sm font-semibold text-white tracking-wider uppercase whitespace-nowrap px-4 md:px-6">
              {phrase}
            </span>
            <span className="text-white/40 text-[10px] select-none">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
