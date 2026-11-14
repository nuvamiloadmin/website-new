import React, { useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { FAQ_ITEMS } from '../data/nuvamiloData';
import { PageId } from '../types/navigation';
import { PageHeader } from '../components/PageHeader';
import { FaqAccordion } from '../components/FaqAccordion';
import { RevealBlock } from '../components/MotionPrimitives';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

type TopicFilter = 'All' | 'Customers' | 'Businesses' | 'Brand & Vision';

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<TopicFilter>('All');
  const [query, setQuery] = useState('');

  const filtered = FAQ_ITEMS.filter((item) => {
    const matchesTopic = filter === 'All' || item.category === filter;
    const q = query.trim().toLowerCase();
    const matchesSearch =
      !q ||
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q);
    return matchesTopic && matchesSearch;
  });

  return (
    <div className="bg-white text-[#071C44]">
      <PageHeader
        eyebrow="Frequently Asked Questions"
        title="Answers about how NUVAMILO works for shoppers and businesses."
        description="Explore common questions regarding our product categories, customer experience, packaging standards, and merchant partnership model."
        primaryAction={{
          label: 'Contact Us',
          onClick: () => onNavigate('contact'),
        }}
        secondaryAction={{
          label: 'Partner With Us',
          onClick: () => onNavigate('partner'),
        }}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8 lg:px-10 space-y-8">
          {/* Controls */}
          <RevealBlock className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="FAQ categories">
              {(['All', 'Customers', 'Businesses', 'Brand & Vision'] as TopicFilter[]).map(
                (tab) => {
                  const active = filter === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setFilter(tab)}
                      className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                        active
                          ? 'text-white'
                          : 'bg-[#F5F8FC] text-[#071C44]/75 hover:text-[#071C44]'
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="faq-filter-pill"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                          className="absolute inset-0 rounded-xl bg-[#071C44]"
                          aria-hidden="true"
                        />
                      )}
                      <span className="relative z-10">{tab}</span>
                    </button>
                  );
                }
              )}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#071C44]/45" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter questions..."
                aria-label="Filter FAQ questions"
                className="w-full rounded-xl border border-[#071C44]/15 bg-[#F5F8FC] pl-10 pr-4 py-2.5 text-sm text-[#071C44] placeholder:text-[#071C44]/45 focus:border-[#075BE8] focus:bg-white focus:outline-none transition-colors"
              />
            </div>
          </RevealBlock>

          <RevealBlock delay={0.06}>
            {filtered.length > 0 ? (
              <FaqAccordion items={filtered} />
            ) : (
              <div className="rounded-3xl bg-[#F5F8FC] border border-[#071C44]/10 p-10 text-center space-y-3">
                <p className="font-display text-lg font-bold text-[#071C44]">
                  No matching questions found
                </p>
                <p className="text-sm text-[#071C44]/70">
                  Try clearing your filter or send us your question directly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFilter('All');
                    setQuery('');
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#071C44] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#075BE8] transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </RevealBlock>

          <RevealBlock className="rounded-3xl bg-[#F5F8FC] border border-[#071C44]/10 p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <h3 className="font-display text-xl font-bold text-[#071C44]">
                Still have a specific question?
              </h3>
              <p className="mt-1 text-sm text-[#071C44]/72">
                Reach out to our team and we will gladly follow up.
              </p>
            </div>
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('contact')}
              className="group inline-flex items-center gap-2 shrink-0 rounded-xl bg-[#071C44] px-6 py-3 text-sm font-semibold text-white hover:bg-[#075BE8] transition-colors cursor-pointer"
            >
              <span>Contact NUVAMILO</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
};
