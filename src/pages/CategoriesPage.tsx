import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { BRAND_ASSETS, CATEGORIES_DATA } from '../data/nuvamiloData';
import { PageId } from '../types/navigation';
import { PageHeader } from '../components/PageHeader';
import { MediaFrame } from '../components/MediaFrame';
import { EASE_PREMIUM, RevealBlock } from '../components/MotionPrimitives';

interface CategoriesPageProps {
  onNavigate: (page: PageId) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({ onNavigate }) => {
  const [selectedId, setSelectedId] = useState<string>('all');

  const visibleCategories =
    selectedId === 'all'
      ? CATEGORIES_DATA
      : CATEGORIES_DATA.filter((cat) => cat.id === selectedId);

  return (
    <div className="bg-white text-[#071C44]">
      <PageHeader
        eyebrow="NUVAMILO Categories"
        title="Everyday essentials organized with clarity and fresh perspective."
        description="NUVAMILO focuses exclusively on core daily retail categories—Groceries, Fresh Vegetables, Fresh Fruits, Daily Essentials, and Household Products—crafted around real household routines."
        primaryAction={{
          label: 'For Customers',
          onClick: () => onNavigate('customers'),
        }}
        secondaryAction={{
          label: 'How It Works',
          onClick: () => onNavigate('how-it-works'),
        }}
        visual={
          <div className="rounded-3xl border border-[#071C44]/10 bg-white p-3">
            <MediaFrame
              src={BRAND_ASSETS.freshProduce}
              alt="Fresh organic vegetables and seasonal fruits on travertine surface"
              aspectRatio="4/3"
              className="rounded-2xl"
            />
          </div>
        }
      />

      {/* Interactive Category Filter Bar */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <RevealBlock className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#071C44]/10">
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter categories">
              <button
                type="button"
                onClick={() => setSelectedId('all')}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  selectedId === 'all'
                    ? 'text-white'
                    : 'bg-[#F5F8FC] text-[#071C44]/75 hover:text-[#071C44]'
                }`}
              >
                {selectedId === 'all' && (
                  <motion.span
                    layoutId="cat-filter-pill"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="absolute inset-0 rounded-xl bg-[#071C44]"
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10">All Categories</span>
              </button>
              {CATEGORIES_DATA.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedId(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    selectedId === cat.id
                      ? 'text-white'
                      : 'bg-[#F5F8FC] text-[#071C44]/75 hover:text-[#071C44]'
                  }`}
                >
                  {selectedId === cat.id && (
                    <motion.span
                      layoutId="cat-filter-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-xl bg-[#075BE8]"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">{cat.title}</span>
                </button>
              ))}
            </div>
            <span className="text-xs font-medium text-[#071C44]/55 tabular-nums">
              Showing {visibleCategories.length} of {CATEGORIES_DATA.length} core categories
            </span>
          </RevealBlock>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: EASE_PREMIUM }}
              className="mt-12 space-y-16 sm:space-y-20"
            >
              {visibleCategories.map((cat, idx) => {
                const reversed = idx % 2 === 1;
                return (
                  <article
                    key={cat.id}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pb-14 border-b border-[#071C44]/8 last:border-b-0"
                  >
                    <RevealBlock className={`lg:col-span-6 ${reversed ? 'lg:order-2' : ''}`}>
                      <div className="rounded-3xl overflow-hidden border border-[#071C44]/10 bg-[#F5F8FC]">
                        <MediaFrame
                          src={cat.image}
                          alt={cat.title}
                          aspectRatio="4/3"
                        />
                      </div>
                    </RevealBlock>

                    <RevealBlock delay={0.08} className={`lg:col-span-6 space-y-5 ${reversed ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center gap-3 text-xs font-bold text-[#075BE8]">
                        <span className="tabular-nums">{cat.index}</span>
                        <span aria-hidden="true">/</span>
                        <span>{cat.subtitle}</span>
                      </div>
                      <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#071C44]">
                        {cat.title}
                      </h2>
                      <p className="text-base sm:text-lg leading-relaxed text-[#071C44]/75">
                        {cat.description}
                      </p>
                      <ul className="space-y-3 pt-2">
                        {cat.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm sm:text-base text-[#071C44]/85"
                          >
                            <Check className="h-5 w-5 shrink-0 text-[#075BE8] mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </RevealBlock>
                  </article>
                );
              })}
            </motion.div>
          </AnimatePresence>

          <RevealBlock className="mt-12 rounded-3xl bg-[#F5F8FC] border border-[#071C44]/10 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-1.5">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#071C44]">
                Carry fresh produce and pantry goods cleanly in every order.
              </h3>
              <p className="text-sm sm:text-base text-[#071C44]/72">
                See how NUVAMILO pairs curated categories with structured paper-bag packaging.
              </p>
            </div>
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('how-it-works')}
              className="group inline-flex items-center gap-2 shrink-0 rounded-xl bg-[#071C44] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#075BE8] transition-colors cursor-pointer"
            >
              <span>See How It Works</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
};
