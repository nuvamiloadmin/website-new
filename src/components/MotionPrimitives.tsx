import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

interface RevealBlockProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

export const RevealBlock: React.FC<RevealBlockProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 24,
}) => {
  const offset =
    direction === 'up'
      ? { y: distance, x: 0 }
      : direction === 'down'
        ? { y: -distance, x: 0 }
        : direction === 'left'
          ? { x: distance, y: 0 }
          : direction === 'right'
            ? { x: -distance, y: 0 }
            : { x: 0, y: 0 };

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.58, delay, ease: EASE_PREMIUM }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerGroup: React.FC<StaggerGroupProps> = ({
  children,
  className = '',
  staggerDelay = 0.08,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: EASE_PREMIUM },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxVisualProps {
  children: React.ReactNode;
  className?: string;
  offsetRange?: number;
}

export const ParallaxVisual: React.FC<ParallaxVisualProps> = ({
  children,
  className = '',
  offsetRange = 22,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offsetRange, -offsetRange]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
};

interface HoverLiftCardProps {
  children: React.ReactNode;
  className?: string;
}

export const HoverLiftCard: React.FC<HoverLiftCardProps> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22, ease: EASE_PREMIUM }}
      className={`transition-shadow duration-300 hover:shadow-[0_22px_48px_-18px_rgba(7,28,68,0.16)] ${className}`}
    >
      {children}
    </motion.div>
  );
};
