import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/dealsData';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const activeReview = TESTIMONIALS_DATA[activeIndex];

  return (
    <section className="py-16 bg-[#F7F9FC] relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#20E78A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#009BFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#0057D9] uppercase tracking-wider mb-3">
            <ThumbsUp className="w-3.5 h-3.5" />
            Verified Customer Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071D49] tracking-tight">
            Loved by 50,000+ Happy Kitchens
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Real experiences from families across the city who count on NUVAMILO for their daily staples and farm fresh essentials.
          </p>
        </div>

        {/* Featured Review Spotlight */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100 relative">
            <div className="absolute top-6 right-8 text-slate-200 pointer-events-none hidden sm:block">
              <Quote className="w-20 h-20 opacity-30 text-[#0057D9]" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < activeReview.rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-slate-200 text-slate-200'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                    {activeReview.rating}.0 / 5.0 Rating
                  </span>
                </div>

                {/* Review Heading & Text */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#071D49] mb-3">
                    "{activeReview.title}"
                  </h3>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed italic">
                    "{activeReview.comment}"
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#071D49] to-[#009BFF] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      {activeReview.author.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-[#071D49] text-base">
                          {activeReview.author}
                        </span>
                        {activeReview.verifiedBuyer && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            Verified Order
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {activeReview.city} • Purchased {activeReview.productName}
                      </p>
                    </div>
                  </div>

                  <div className="text-xs text-slate-400 self-end sm:self-center">
                    {activeReview.date}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      idx === activeIndex
                        ? 'w-8 bg-[#0057D9]'
                        : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous review"
                  className="w-9 h-9 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#071D49] hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next review"
                  className="w-9 h-9 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#071D49] hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Quick highlights below */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-5 border border-slate-200/60 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 font-extrabold text-xl">
              ⚡
            </div>
            <div>
              <div className="text-base font-bold text-[#071D49]">15-30 Min Delivery</div>
              <div className="text-xs text-slate-500 mt-0.5">Rapid dispatch from your nearest hyperlocal hub.</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-5 border border-slate-200/60 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-extrabold text-xl">
              🌿
            </div>
            <div>
              <div className="text-base font-bold text-[#071D49]">100% Quality Guaranteed</div>
              <div className="text-xs text-slate-500 mt-0.5">No questions asked return if not completely fresh.</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-5 border border-slate-200/60 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 font-extrabold text-xl">
              🏷️
            </div>
            <div>
              <div className="text-base font-bold text-[#071D49]">Wholesale Fair Prices</div>
              <div className="text-xs text-slate-500 mt-0.5">Direct sourcing cuts middlemen markups for you.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
