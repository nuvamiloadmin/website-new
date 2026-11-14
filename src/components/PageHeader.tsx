import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { EASE_PREMIUM } from './MotionPrimitives';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  visual?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  visual,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#F5F8FC] border-b border-[#071C44]/8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#00C8EF]/10 blur-[90px]"
      />
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-22">
        <div
          className={`grid grid-cols-1 gap-8 sm:gap-10 lg:gap-14 items-center ${
            visual ? 'lg:grid-cols-12' : ''
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, ease: EASE_PREMIUM }}
            className={visual ? 'lg:col-span-6 space-y-5 sm:space-y-6' : 'max-w-3xl space-y-5 sm:space-y-6'}
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full nuva-gradient-bar" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#075BE8]">
                {eyebrow}
              </span>
            </div>

            <h1 className="font-display text-[28px] min-[375px]:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#071C44] leading-[1.12]">
              {title}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#071C44]/75 max-w-2xl">
              {description}
            </p>

            {(primaryAction || secondaryAction) && (
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                {primaryAction && (
                  <motion.button
                    type="button"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.16, ease: EASE_PREMIUM }}
                    onClick={primaryAction.onClick}
                    className="group inline-flex items-center gap-2 rounded-xl bg-[#071C44] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#075BE8] transition-colors cursor-pointer"
                  >
                    <span>{primaryAction.label}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </motion.button>
                )}
                {secondaryAction && (
                  <motion.button
                    type="button"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.16, ease: EASE_PREMIUM }}
                    onClick={secondaryAction.onClick}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#071C44]/16 bg-white px-6 py-3.5 text-sm font-semibold text-[#071C44] hover:border-[#075BE8] hover:text-[#075BE8] transition-colors cursor-pointer"
                  >
                    <span>{secondaryAction.label}</span>
                  </motion.button>
                )}
              </div>
            )}
          </motion.div>

          {visual && (
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.08, ease: EASE_PREMIUM }}
              className="lg:col-span-6"
            >
              {visual}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
