import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES_DATA } from '../../data/categoriesData';

interface CategoriesSectionProps {
  onSelectCategory: (slug: string) => void;
  onViewAll?: () => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectCategory,
  onViewAll,
}) => {
  return (
    <section className="py-12 sm:py-16 bg-[#F7F9FC]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0057D9] mb-1">
              <Sparkles className="h-3.5 w-3.5" />
              <span>EXPLORE AISLES</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071D49] tracking-tight">
              Browse Our Popular Categories
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Fresh farm greens, staples, dairy and household essentials picked with care.
            </p>
          </div>

          <button
            type="button"
            onClick={onViewAll}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-bold text-[#0057D9] hover:text-[#071D49] transition-colors cursor-pointer group"
          >
            <span>View All Categories</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Categories Grid (2 rows of 5 on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {CATEGORIES_DATA.map((cat, idx) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              onClick={() => onSelectCategory(cat.slug)}
              className="group flex flex-col items-center text-center p-4 rounded-3xl bg-white border border-slate-100 shadow-2xs hover:shadow-xl hover:border-[#009BFF]/30 transition-all cursor-pointer"
            >
              {/* Circular Image Container */}
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden bg-[#F7F9FC] p-2 border-2 border-slate-100 group-hover:border-[#0057D9] transition-colors shadow-inner">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Title & Items count */}
              <h3 className="mt-3 font-display text-xs sm:text-sm font-bold text-[#071D49] group-hover:text-[#0057D9] transition-colors">
                {cat.name}
              </h3>

              <span className="mt-0.5 text-[11px] font-medium text-slate-400">
                {cat.itemCount} Items
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
