import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_ASSETS, JOURNEY_STEPS } from '../data/nuvamiloData';
import { PageId } from '../types/navigation';
import { PageHeader } from '../components/PageHeader';
import { MediaFrame } from '../components/MediaFrame';
import { PhoneAppMockup } from '../components/PhoneAppMockup';
import { ParallaxVisual, RevealBlock } from '../components/MotionPrimitives';

interface HowItWorksPageProps {
  onNavigate: (page: PageId) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-[#071C44]">
      <PageHeader
        eyebrow="How It Works"
        title="A clear, four-stage rhythm from shelf discovery to doorstep handoff."
        description="Every step in NUVAMILO is designed to feel effortless for shoppers while keeping store preparation structured and dependable."
        primaryAction={{
          label: 'Explore Categories',
          onClick: () => onNavigate('categories'),
        }}
        secondaryAction={{
          label: 'For Customers',
          onClick: () => onNavigate('customers'),
        }}
        visual={
          <div className="relative flex items-end justify-center py-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-20 bottom-2 h-7 rounded-full bg-[#071C44]/12 blur-xl"
            />
            <motion.img
              src={BRAND_ASSETS.deliveryFulfillment}
              alt="3D illustration of a NUVAMILO delivery courier carrying groceries in structured packaging"
              referrerPolicy="no-referrer"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 max-h-[410px] w-auto object-contain drop-shadow-[0_20px_34px_rgba(7,28,68,0.14)]"
            />
          </div>
        }
      />

      {/* Detailed Step-by-Step Visual Storytelling */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 space-y-16 sm:space-y-24">
          {JOURNEY_STEPS.map((step, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={step.key}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                <RevealBlock
                  direction={reversed ? 'left' : 'right'}
                  className={`lg:col-span-6 ${reversed ? 'lg:order-2' : ''}`}
                >
                  <ParallaxVisual offsetRange={12}>
                    {step.isCutout ? (
                      <div className="relative flex items-end justify-center py-4">
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-20 bottom-2 h-7 rounded-full bg-[#071C44]/12 blur-xl"
                        />
                        <motion.img
                          src={step.image}
                          alt={`${step.title}: ${step.lead}`}
                          referrerPolicy="no-referrer"
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.35 }}
                          className="relative z-10 max-h-[440px] w-auto object-contain drop-shadow-[0_22px_36px_rgba(7,28,68,0.14)]"
                        />
                      </div>
                    ) : (
                      <div className="rounded-3xl border border-[#071C44]/10 bg-[#F5F8FC] p-3">
                        <MediaFrame
                          src={step.image}
                          alt={`${step.title}: ${step.lead}`}
                          aspectRatio="4/3"
                          className="rounded-2xl"
                        />
                      </div>
                    )}
                  </ParallaxVisual>
                </RevealBlock>

                <RevealBlock
                  delay={0.08}
                  className={`lg:col-span-6 space-y-5 ${reversed ? 'lg:order-1' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl font-extrabold text-[#075BE8] tabular-nums">
                      {step.step}
                    </span>
                    <span className="h-px flex-1 bg-[#071C44]/12" aria-hidden="true" />
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#071C44]">
                    {step.title} — {step.lead}
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-[#071C44]/75">
                    {step.description}
                  </p>
                  <ul className="space-y-3 pt-2">
                    {step.detailPoints.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-3 text-sm sm:text-base text-[#071C44]/85"
                      >
                        <Check className="h-5 w-5 shrink-0 text-[#075BE8] mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </RevealBlock>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive App UI Storytelling */}
      <section className="py-16 sm:py-24 bg-[#F5F8FC] border-t border-[#071C44]/8">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <RevealBlock className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#075BE8]">
                App Experience
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#071C44]">
                Try the NUVAMILO browsing flow interactively.
              </h2>
              <p className="text-base leading-relaxed text-[#071C44]/75">
                Switch between Vegetables, Fruits, Groceries, and Daily Essentials on the
                iPhone preview to explore how items are organized, adjusted, and prepared
                for paper-bag packing.
              </p>
              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('partner')}
                className="group inline-flex items-center gap-2 rounded-xl bg-[#071C44] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#075BE8] transition-colors cursor-pointer"
              >
                <span>Partner With NUVAMILO</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>
            </RevealBlock>

            <RevealBlock delay={0.1} className="lg:col-span-6">
              <PhoneAppMockup initialTab="Vegetables" />
            </RevealBlock>
          </div>
        </div>
      </section>
    </div>
  );
};
