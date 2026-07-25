'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '@/lib/motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section';
  delay?: number;
}

/** Fades and lifts its content into view once. */
export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Container that staggers direct <StaggerItem> children into view. */
export function StaggerGroup({ children, className }: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: AnimatedSectionProps) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
