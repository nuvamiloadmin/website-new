import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Layers,
  Smartphone,
  Store,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import {
  BRAND_ASSETS,
  CATEGORIES_DATA,
  FAQ_ITEMS,
  JOURNEY_STEPS,
} from '../data/nuvamiloData';
import { PageId } from '../types/navigation';
import { MediaFrame } from '../components/MediaFrame';
import { PhoneAppMockup } from '../components/PhoneAppMockup';
import { FaqAccordion } from '../components/FaqAccordion';
import {
  EASE_PREMIUM,
  HoverLiftCard,
  ParallaxVisual,
  RevealBlock,
  StaggerGroup,
  StaggerItem,
} from '../components/MotionPrimitives';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(CATEGORIES_DATA[0].id);
  const [activeStepKey, setActiveStepKey] = useState(JOURNEY_STEPS[0].key);

  const activeCategory =
    CATEGORIES_DATA.find((c) => c.id === activeCategoryId) ?? CATEGORIES_DATA[0];
  const activeStep =
    JOURNEY_STEPS.find((s) => s.key === activeStepKey) ?? JOURNEY_STEPS[0];

  return (
    <div className="bg-white text-[#071C44]">
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F8FC] via-[#F5F8FC] to-white border-b border-[#071C44]/8">
        <motion.div
          aria-hidden="true"
          animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-[#00C8EF]/12 blur-[120px]"
        />
        <motion.div
          aria-hidden="true"
          animate={{ scale: [1, 1.06, 1], opacity: [0.7, 0.95, 0.7] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-[#075BE8]/8 blur-[110px]"
        />

        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-12 lg:pb-18 xl:pt-16 xl:pb-24">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
            {/* Hero Copy */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 xl:space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: EASE_PREMIUM }}
                className="flex items-center gap-3"
              >
                <span className="h-[2px] w-8 rounded-full nuva-gradient-bar" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#075BE8]">
                  Modern Local Commerce
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.06, ease: EASE_PREMIUM }}
                className="font-display text-[30px] min-[375px]:text-[34px] sm:text-5xl lg:text-[44px] xl:text-[54px] font-extrabold tracking-tight text-[#071C44] leading-[1.08]"
              >
                Everyday Shopping, Reimagined with{' '}
                <span className="nuva-gradient-text">NUVAMILO</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12, ease: EASE_PREMIUM }}
                className="max-w-xl text-base sm:text-lg leading-relaxed text-[#071C44]/75"
              >
                From fresh fruits and vegetables to groceries and daily essentials,
                NUVAMILO brings together a more thoughtful and beautifully designed
                local shopping experience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18, ease: EASE_PREMIUM }}
                className="flex flex-wrap items-center gap-3.5 pt-1"
              >
                <div className="relative group inline-flex">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#075BE8] via-[#00C8EF] to-[#2DEB80] opacity-40 blur-md transition-all duration-300 group-hover:opacity-80 group-hover:blur-lg"
                  />
                  <motion.button
                    type="button"
                    whileHover={{ y: -2, scale: 1.015 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.18, ease: EASE_PREMIUM }}
                    onClick={() => onNavigate('categories')}
                    className="nuva-theme-btn relative overflow-hidden inline-flex items-center gap-3 rounded-xl px-6 py-3.5 text-sm font-bold text-white cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00C8EF]"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-20 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[340%]"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-[2.5px] nuva-gradient-bar opacity-95"
                    />
                    <span className="relative z-10 tracking-wide">Explore NUVAMILO</span>
                    <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-[#00C8EF] to-[#2DEB80] text-[#071C44] shadow-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">
                      <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                    </span>
                  </motion.button>
                </div>

                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.16, ease: EASE_PREMIUM }}
                  onClick={() => onNavigate('partner')}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#071C44]/18 bg-white px-6 py-3.5 text-sm font-semibold text-[#071C44] transition-colors duration-200 hover:border-[#075BE8] hover:text-[#075BE8] cursor-pointer"
                >
                  <span>Partner With Us</span>
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.24, ease: EASE_PREMIUM }}
                className="pt-4 border-t border-[#071C44]/10 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-medium text-[#071C44]/60"
              >
                <span>Groceries</span>
                <span aria-hidden="true">·</span>
                <span>Fresh Vegetables</span>
                <span aria-hidden="true">·</span>
                <span>Fresh Fruits</span>
                <span aria-hidden="true">·</span>
                <span>Daily Essentials</span>
                <span aria-hidden="true">·</span>
                <span>Household Products</span>
              </motion.div>
            </div>

            {/* Hero Visual Stage: Background-Free 3D Commerce Characters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: EASE_PREMIUM }}
              className="lg:col-span-6"
            >
              <div className="relative pt-2 pb-2">
                <div className="relative mx-auto flex items-end justify-center min-h-[300px] sm:min-h-[380px] lg:min-h-[430px]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-10 bottom-3 h-8 rounded-full bg-[#071C44]/12 blur-xl"
                  />
                  <motion.img
                    src={BRAND_ASSETS.heroScene}
                    alt="3D illustration of a modern NUVAMILO shopper carrying fresh groceries and a delivery rider with an insulated pack"
                    referrerPolicy="no-referrer"
                    animate={{ y: [0, -7, 0] }}
                    transition={{
                      duration: 5.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    whileHover={{ scale: 1.02 }}
                    className="relative z-10 w-full max-w-[540px] h-auto max-h-[440px] object-contain drop-shadow-[0_20px_35px_rgba(7,28,68,0.12)]"
                  />
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <HoverLiftCard className="rounded-2xl bg-white px-4 py-3 border border-[#071C44]/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#075BE8]">For Customers</p>
                      <p className="text-sm font-bold text-[#071C44]">
                        Fresh Produce & Staples
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate('customers')}
                      aria-label="Explore For Customers"
                      className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F5F8FC] text-[#071C44] border border-[#071C44]/10 hover:border-[#075BE8] hover:text-[#075BE8] transition-colors cursor-pointer"
                    >
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </HoverLiftCard>

                  <HoverLiftCard className="rounded-2xl bg-white px-4 py-3 border border-[#071C44]/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#071C44]/65">
                        For Local Stores
                      </p>
                      <p className="text-sm font-bold text-[#071C44]">
                        Digital Storefront Growth
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate('businesses')}
                      aria-label="Explore For Businesses"
                      className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F5F8FC] text-[#071C44] border border-[#071C44]/10 hover:border-[#075BE8] hover:text-[#075BE8] transition-colors cursor-pointer"
                    >
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </HoverLiftCard>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — BRAND STORY */}
      <section className="py-16 sm:py-24 lg:py-28 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-center">
            <RevealBlock className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-wider uppercase text-[#075BE8]">
                01. The NUVAMILO Perspective
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#071C44] leading-[1.14]">
                Everyday essentials deserve a calmer, more thoughtful digital home.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-[#071C44]/75">
                NUVAMILO was shaped around a simple observation: daily grocery shopping
                feels rushed online, while independent local stores often lack clean
                digital tools that reflect the quality of what they sell.
              </p>
              <p className="text-base leading-relaxed text-[#071C44]/70">
                We bring both sides together through clear design, curated categories,
                and signature packaging—giving customers an inviting way to shop daily
                essentials and giving neighborhood businesses a modern digital presence.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-[#075BE8] hover:text-[#071C44] transition-colors cursor-pointer"
                >
                  <span>Read Our Brand Story</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
                <span className="text-xs text-[#071C44]/50">
                  Built for Customers & Local Retail
                </span>
              </div>
            </RevealBlock>

            <RevealBlock delay={0.1} className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
              <ParallaxVisual offsetRange={14} className="sm:col-span-8">
                <div className="h-full rounded-3xl overflow-hidden border border-[#071C44]/10">
                  <MediaFrame
                    src={BRAND_ASSETS.brandStory}
                    alt="3D illustration of a local shopkeeper arranging fresh produce and a customer browsing with a basket"
                    aspectRatio="4/3"
                    className="h-full"
                  />
                </div>
              </ParallaxVisual>
              <div className="sm:col-span-4 flex flex-col justify-between gap-4">
                <div className="rounded-3xl overflow-hidden border border-[#071C44]/10 flex-1">
                  <MediaFrame
                    src={BRAND_ASSETS.groceriesProper}
                    alt="Curated pantry groceries including rice, lentils, pasta, olive oil, honey, coffee, and tea"
                    aspectRatio="4/3"
                    className="h-full"
                  />
                </div>
                <HoverLiftCard className="rounded-3xl bg-[#071C44] p-5 text-white">
                  <p className="text-xs font-semibold text-[#2DEB80]">Core Focus</p>
                  <p className="mt-1 font-display text-lg font-bold leading-snug">
                    Five everyday categories, zero clutter.
                  </p>
                </HoverLiftCard>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CATEGORIES */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#F5F8FC] border-y border-[#071C44]/8">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <RevealBlock className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold tracking-wider uppercase text-[#075BE8]">
                02. Curated Categories
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#071C44]">
                Focused on what households rely on every day.
              </h2>
            </div>
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('categories')}
              className="group inline-flex items-center gap-2 self-start lg:self-auto rounded-xl border border-[#071C44]/16 bg-white px-5 py-3 text-sm font-semibold text-[#071C44] hover:border-[#075BE8] hover:text-[#075BE8] transition-colors cursor-pointer"
            >
              <span>Explore All Categories</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>
          </RevealBlock>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
            {/* Editorial Selector List */}
            <RevealBlock className="lg:col-span-5 flex flex-col justify-between divide-y divide-[#071C44]/10 border-y border-[#071C44]/10 bg-white rounded-3xl px-5 sm:px-7 py-2">
              {CATEGORIES_DATA.map((cat) => {
                const selected = cat.id === activeCategory.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategoryId(cat.id)}
                    className={`w-full py-5 text-left transition-all duration-200 flex items-start justify-between gap-4 cursor-pointer group ${
                      selected ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="space-y-1 transition-transform duration-200 group-hover:translate-x-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold tabular-nums text-[#075BE8]">
                          {cat.index}.
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-[#071C44] group-hover:text-[#075BE8] transition-colors">
                          {cat.title}
                        </h3>
                      </div>
                      <p className="pl-7 text-xs sm:text-sm text-[#071C44]/65">
                        {cat.subtitle}
                      </p>
                    </div>
                    <span
                      className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                        selected
                          ? 'bg-[#071C44] text-white scale-105'
                          : 'bg-[#F5F8FC] text-[#071C44]/60 group-hover:bg-[#075BE8] group-hover:text-white'
                      }`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>
                );
              })}
            </RevealBlock>

            {/* Featured Category Storytelling Panel */}
            <RevealBlock delay={0.1} className="lg:col-span-7">
              <div className="h-full rounded-3xl bg-white border border-[#071C44]/10 overflow-hidden flex flex-col shadow-[0_18px_48px_-24px_rgba(7,28,68,0.14)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: EASE_PREMIUM }}
                    className="flex flex-col flex-1"
                  >
                    <div className="relative">
                      <MediaFrame
                        src={activeCategory.image}
                        alt={`${activeCategory.title} curated by NUVAMILO`}
                        aspectRatio="16/9"
                        imgClassName={
                          activeCategory.id === 'groceries' ? 'object-[center_68%]' : ''
                        }
                      />
                      <div
                        className="h-1 w-full"
                        style={{ backgroundColor: activeCategory.accentColor }}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#075BE8]">
                          <span>{activeCategory.index}</span>
                          <span aria-hidden="true">/</span>
                          <span>{activeCategory.subtitle}</span>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#071C44]">
                          {activeCategory.title}
                        </h3>
                        <p className="text-[15px] sm:text-base leading-relaxed text-[#071C44]/75">
                          {activeCategory.description}
                        </p>
                      </div>

                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#071C44]/10">
                        {activeCategory.highlights.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-xs sm:text-sm text-[#071C44]/80"
                          >
                            <Check className="h-4 w-4 shrink-0 text-[#075BE8] mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      <section className="py-16 sm:py-24 lg:py-28 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <RevealBlock className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold tracking-wider uppercase text-[#075BE8]">
                03. How NUVAMILO Works
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#071C44]">
                Four calm steps from discovery to doorstep.
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('how-it-works')}
              className="group inline-flex items-center gap-2 self-start lg:self-auto text-sm font-bold text-[#075BE8] hover:text-[#071C44] transition-colors cursor-pointer"
            >
              <span>View Full Experience Flow</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </RevealBlock>

          {/* Interactive Step Tabs with Sliding Pill */}
          <RevealBlock delay={0.05}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-8" role="tablist">
              {JOURNEY_STEPS.map((item) => {
                const active = item.key === activeStep.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveStepKey(item.key)}
                    className={`relative overflow-hidden rounded-2xl p-3.5 sm:p-5 text-left transition-colors border cursor-pointer ${
                      active
                        ? 'text-white border-[#071C44]'
                        : 'bg-[#F5F8FC] text-[#071C44] border-[#071C44]/8 hover:border-[#075BE8]/40 hover:-translate-y-0.5'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="home-journey-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-0 bg-[#071C44]"
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className={`relative z-10 block text-xs font-bold tabular-nums ${
                        active ? 'text-[#2DEB80]' : 'text-[#075BE8]'
                      }`}
                    >
                      Step {item.step}
                    </span>
                    <span className="relative z-10 mt-1 block font-display text-base sm:text-xl font-bold">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Step Visual + Explanation */}
            <div className="rounded-3xl bg-[#F5F8FC] border border-[#071C44]/10 p-5 sm:p-8 lg:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: EASE_PREMIUM }}
                className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center"
              >
                <div className="lg:col-span-6">
                  {activeStep.isCutout ? (
                    <div className="relative flex items-end justify-center py-2">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-20 bottom-1 h-6 rounded-full bg-[#071C44]/12 blur-xl"
                      />
                      <img
                        src={activeStep.image}
                        alt={`${activeStep.title} — ${activeStep.lead}`}
                        referrerPolicy="no-referrer"
                        className="relative z-10 max-h-[380px] w-auto object-contain drop-shadow-[0_18px_30px_rgba(7,28,68,0.14)]"
                      />
                    </div>
                  ) : (
                    <MediaFrame
                      src={activeStep.image}
                      alt={`${activeStep.title} — ${activeStep.lead}`}
                      aspectRatio="4/3"
                      className="rounded-2xl border border-[#071C44]/8"
                    />
                  )}
                </div>

                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#075BE8]">
                      {activeStep.step}. {activeStep.title}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#071C44]">
                      {activeStep.lead}
                    </h3>
                  </div>

                  <p className="text-base leading-relaxed text-[#071C44]/75">
                    {activeStep.description}
                  </p>

                  <ul className="space-y-3 pt-2 border-t border-[#071C44]/10">
                    {activeStep.detailPoints.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-sm font-medium text-[#071C44]/85"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2DEB80]/20 text-[#071C44]">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          </RevealBlock>
        </div>
      </section>

      {/* SECTION 5 — CUSTOMER EXPERIENCE */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#F5F8FC] border-y border-[#071C44]/8">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            <RevealBlock direction="right" className="lg:col-span-5 order-2 lg:order-1">
              <PhoneAppMockup initialTab="Fruits" />
            </RevealBlock>

            <RevealBlock direction="left" delay={0.08} className="lg:col-span-7 order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-wider uppercase text-[#075BE8]">
                  04. Customer Experience
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#071C44]">
                  Designed for effortless everyday browsing on any screen.
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-[#071C44]/75 max-w-2xl">
                  From quick morning fruit refills to weekly pantry restocks, every
                  screen in the NUVAMILO mobile experience removes friction so shoppers
                  find what they need in seconds.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="group space-y-2 border-t border-[#071C44]/12 pt-4 transition-colors hover:border-[#075BE8]">
                  <div className="flex items-center gap-2 text-[#075BE8]">
                    <Compass className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                    <h3 className="font-display text-lg font-bold text-[#071C44]">
                      Intuitive Product Discovery
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#071C44]/70">
                    Clean category navigation separates fresh produce from groceries and
                    household items for faster, calmer decision making.
                  </p>
                </div>

                <div className="group space-y-2 border-t border-[#071C44]/12 pt-4 transition-colors hover:border-[#075BE8]">
                  <div className="flex items-center gap-2 text-[#075BE8]">
                    <Smartphone className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                    <h3 className="font-display text-lg font-bold text-[#071C44]">
                      Mobile-First Convenience
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#071C44]/70">
                    Thumb-friendly controls, clear basket summaries, and instant item
                    adjustments built around real daily routines.
                  </p>
                </div>
              </div>

              <div>
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('customers')}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#071C44] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#075BE8] transition-colors cursor-pointer"
                >
                  <span>Explore Customer Experience</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FOR BUSINESSES */}
      <section className="py-16 sm:py-24 lg:py-28 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-center">
            <RevealBlock className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-wider uppercase text-[#075BE8]">
                05. For Local Businesses
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#071C44]">
                Digital presence and everyday clarity for local stores.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-[#071C44]/75">
                Independent grocers, fresh produce markets, and neighborhood retail shops
                bring vitality to local communities. NUVAMILO gives them a cohesive
                digital storefront without stripping away their local character.
              </p>

              <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <StaggerItem>
                  <HoverLiftCard className="h-full rounded-2xl bg-[#F5F8FC] p-5 border border-[#071C44]/8">
                    <Store className="h-5 w-5 text-[#075BE8]" />
                    <h3 className="mt-3 font-display text-base font-bold text-[#071C44]">
                      Showcase Products Clearly
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#071C44]/70">
                      Present fresh fruits, vegetables, and everyday inventory in a clean,
                      high-trust retail format.
                    </p>
                  </HoverLiftCard>
                </StaggerItem>

                <StaggerItem>
                  <HoverLiftCard className="h-full rounded-2xl bg-[#F5F8FC] p-5 border border-[#071C44]/8">
                    <Layers className="h-5 w-5 text-[#075BE8]" />
                    <h3 className="mt-3 font-display text-base font-bold text-[#071C44]">
                      Structured Daily Selling
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#071C44]/70">
                      Organize incoming baskets, pack sizes, and day-to-day store workflows
                      with less friction.
                    </p>
                  </HoverLiftCard>
                </StaggerItem>
              </StaggerGroup>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('partner')}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#075BE8] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#071C44] transition-colors cursor-pointer"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('businesses')}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#071C44]/16 px-6 py-3.5 text-sm font-semibold text-[#071C44] hover:border-[#075BE8] hover:text-[#075BE8] transition-colors cursor-pointer"
                >
                  <span>Explore Business Benefits</span>
                </motion.button>
              </div>
            </RevealBlock>

            <RevealBlock delay={0.1} className="lg:col-span-6">
              <ParallaxVisual offsetRange={14}>
                <div className="rounded-3xl border border-[#071C44]/10 bg-[#F5F8FC] p-3 sm:p-4">
                  <MediaFrame
                    src={BRAND_ASSETS.businessMerchant}
                    alt="3D illustration of a local shop owner managing store inventory on a sleek tablet surrounded by organized fresh produce and groceries"
                    aspectRatio="4/3"
                    className="rounded-2xl"
                  />
                </div>
              </ParallaxVisual>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* SECTION 7 — COMMERCE VISION */}
      <section className="py-16 sm:py-20 bg-[#F5F8FC] border-y border-[#071C44]/8">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <RevealBlock className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold tracking-wider uppercase text-[#075BE8]">
                06. Commerce Vision
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#071C44]">
                Built as a connected commerce foundation.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('solutions')}
              className="group inline-flex items-center gap-2 self-start lg:self-auto text-sm font-bold text-[#075BE8] hover:text-[#071C44] transition-colors cursor-pointer"
            >
              <span>Explore Commerce Solutions</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </RevealBlock>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 border-t border-[#071C44]/12 pt-8">
            <StaggerItem className="group space-y-2.5">
              <span className="inline-block text-xs font-bold text-[#075BE8] tabular-nums transition-transform duration-200 group-hover:translate-x-1">
                01
              </span>
              <h3 className="font-display text-xl font-bold text-[#071C44] group-hover:text-[#075BE8] transition-colors">
                Local Commerce
              </h3>
              <p className="text-sm leading-relaxed text-[#071C44]/72">
                Strengthening the everyday connection between neighborhood retail stores
                and the households around them.
              </p>
            </StaggerItem>

            <StaggerItem className="group space-y-2.5">
              <span className="inline-block text-xs font-bold text-[#00C8EF] tabular-nums transition-transform duration-200 group-hover:translate-x-1">
                02
              </span>
              <h3 className="font-display text-xl font-bold text-[#071C44] group-hover:text-[#075BE8] transition-colors">
                Digital Growth
              </h3>
              <p className="text-sm leading-relaxed text-[#071C44]/72">
                Equipping local merchants with modern presentation, clean product
                catalogs, and brand-consistent packaging.
              </p>
            </StaggerItem>

            <StaggerItem className="group space-y-2.5">
              <span className="inline-block text-xs font-bold text-[#2DEB80] tabular-nums transition-transform duration-200 group-hover:translate-x-1">
                03
              </span>
              <h3 className="font-display text-xl font-bold text-[#071C44] group-hover:text-[#075BE8] transition-colors">
                Connected Shopping
              </h3>
              <p className="text-sm leading-relaxed text-[#071C44]/72">
                Unifying discovery, selection, checkout, and fulfillment into one smooth
                end-to-end rhythm.
              </p>
            </StaggerItem>

            <StaggerItem className="group space-y-2.5">
              <span className="inline-block text-xs font-bold text-[#071C44] tabular-nums transition-transform duration-200 group-hover:translate-x-1">
                04
              </span>
              <h3 className="font-display text-xl font-bold text-[#071C44] group-hover:text-[#075BE8] transition-colors">
                Future-Ready Retail
              </h3>
              <p className="text-sm leading-relaxed text-[#071C44]/72">
                Thoughtful architecture designed to evolve alongside changing consumer
                habits and independent retail ambitions.
              </p>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* SECTION 8 — WHY NUVAMILO */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#071C44]/8">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <RevealBlock className="lg:col-span-4 space-y-4">
              <span className="text-xs font-bold tracking-wider uppercase text-[#075BE8]">
                07. Why NUVAMILO
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#071C44]">
                Built with intention, never noise.
              </h2>
              <p className="text-base leading-relaxed text-[#071C44]/72">
                Every design decision reflects our commitment to clarity for shoppers and
                long-term value for local businesses.
              </p>
            </RevealBlock>

            <StaggerGroup className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              <StaggerItem className="group border-t border-[#071C44]/14 pt-5 space-y-2 transition-colors hover:border-[#075BE8]">
                <span className="text-xs font-bold text-[#075BE8] tabular-nums">01</span>
                <h3 className="font-display text-xl font-bold text-[#071C44] group-hover:text-[#075BE8] transition-colors">
                  Thoughtful Experience
                </h3>
                <p className="text-sm leading-relaxed text-[#071C44]/72">
                  Calm visual hierarchy, refined product presentation, and care at every
                  step from browsing to bag packing.
                </p>
              </StaggerItem>

              <StaggerItem className="group border-t border-[#071C44]/14 pt-5 space-y-2 transition-colors hover:border-[#075BE8]">
                <span className="text-xs font-bold text-[#075BE8] tabular-nums">02</span>
                <h3 className="font-display text-xl font-bold text-[#071C44] group-hover:text-[#075BE8] transition-colors">
                  Local Connection
                </h3>
                <p className="text-sm leading-relaxed text-[#071C44]/72">
                  Rooted in real neighborhood commerce—elevating trusted local shops
                  without erasing what makes them personal.
                </p>
              </StaggerItem>

              <StaggerItem className="group border-t border-[#071C44]/14 pt-5 space-y-2 transition-colors hover:border-[#075BE8]">
                <span className="text-xs font-bold text-[#075BE8] tabular-nums">03</span>
                <h3 className="font-display text-xl font-bold text-[#071C44] group-hover:text-[#075BE8] transition-colors">
                  Everyday Simplicity
                </h3>
                <p className="text-sm leading-relaxed text-[#071C44]/72">
                  Zero clutter, straightforward category focus, and an uncluttered flow
                  that respects your time.
                </p>
              </StaggerItem>

              <StaggerItem className="group border-t border-[#071C44]/14 pt-5 space-y-2 transition-colors hover:border-[#075BE8]">
                <span className="text-xs font-bold text-[#075BE8] tabular-nums">04</span>
                <h3 className="font-display text-xl font-bold text-[#071C44] group-hover:text-[#075BE8] transition-colors">
                  Growth Potential
                </h3>
                <p className="text-sm leading-relaxed text-[#071C44]/72">
                  A cohesive brand system and digital storefront foundation built to grow
                  alongside independent merchants.
                </p>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FUTURE VISION (DARK NAVY) */}
      <section className="relative overflow-hidden bg-[#071C44] text-white py-16 sm:py-24 lg:py-28">
        <motion.div
          aria-hidden="true"
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -top-24 left-1/4 h-[380px] w-[380px] rounded-full bg-[#075BE8]/25 blur-[130px]"
        />
        <motion.div
          aria-hidden="true"
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute bottom-0 right-1/5 h-[320px] w-[320px] rounded-full bg-[#2DEB80]/15 blur-[120px]"
        />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center">
            <RevealBlock className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-wider uppercase text-[#00C8EF]">
                08. Future Vision
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.12]">
                Shaping the next chapter of neighborhood retail.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-white/75">
                NUVAMILO envisions a retail landscape where local stores thrive digitally
                with flagship-level design, and everyday shopping feels effortless,
                transparent, and human.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('solutions')}
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#071C44] hover:bg-[#00C8EF] transition-colors cursor-pointer"
                >
                  <span>Commerce Solutions</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <span>About NUVAMILO</span>
                </motion.button>
              </div>
            </RevealBlock>

            <RevealBlock delay={0.1} className="lg:col-span-7">
              <ParallaxVisual offsetRange={14}>
                <div className="rounded-3xl overflow-hidden border border-white/12 shadow-[0_28px_70px_-20px_rgba(0,0,0,0.45)]">
                  <MediaFrame
                    src={BRAND_ASSETS.futureVision}
                    alt="3D architectural render of a contemporary neighborhood retail storefront with a customer and store owner"
                    aspectRatio="16/9"
                  />
                </div>
              </ParallaxVisual>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
      <section className="py-16 sm:py-24 lg:py-28 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <RevealBlock className="lg:col-span-4 space-y-4">
              <span className="text-xs font-bold tracking-wider uppercase text-[#075BE8]">
                09. Frequently Asked Questions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#071C44]">
                Clear answers about NUVAMILO.
              </h2>
              <p className="text-base leading-relaxed text-[#071C44]/72">
                Everything you need to know about our product categories, customer
                experience, and merchant partnership approach.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-[#075BE8] hover:text-[#071C44] transition-colors cursor-pointer"
                >
                  <span>View All Questions</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </RevealBlock>

            <RevealBlock delay={0.08} className="lg:col-span-8">
              <FaqAccordion items={FAQ_ITEMS.slice(0, 5)} />
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* SECTION 12 — FINAL CTA */}
      <section className="pb-16 sm:pb-24 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <RevealBlock>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F5F8FC] via-white to-[#EAF3FF] border border-[#071C44]/10 p-6 sm:p-12 lg:p-16">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#075BE8]">
                    Begin With NUVAMILO
                  </span>
                  <h2 className="font-display text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#071C44] leading-[1.12]">
                    Ready to explore a more thoughtful local commerce experience?
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-[#071C44]/75 max-w-2xl">
                    Whether you are discovering NUVAMILO as a shopper, exploring business
                    collaboration, or connecting as a partner—our team would love to hear
                    from you.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3.5">
                  <motion.button
                    type="button"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onNavigate('partner')}
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#071C44] px-7 py-4 text-sm font-semibold text-white hover:bg-[#075BE8] transition-colors cursor-pointer"
                  >
                    <span>Partner With Us</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </motion.button>
                  <motion.button
                    type="button"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#071C44]/18 bg-white px-7 py-4 text-sm font-semibold text-[#071C44] hover:border-[#075BE8] hover:text-[#075BE8] transition-colors cursor-pointer"
                  >
                    <span>Contact Our Team</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
};
