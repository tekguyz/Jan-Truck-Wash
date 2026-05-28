'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}

export default function FadeInUp({
  children,
  delay = 0,
  className = '',
  id,
}: FadeInUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
