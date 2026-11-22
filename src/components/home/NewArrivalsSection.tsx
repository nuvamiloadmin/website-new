import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { PRODUCTS_DATA } from '../../data/productsData';
import { ProductCard } from '../product/ProductCard';
import { Product } from '../../types/commerce';

interface NewArrivalsSectionProps {
  onQuickView: (product: Product) => void;
  onNavigateProduct: (slug: string) => void;
  onNavigateShop: () => void;
}

export const NewArrivalsSection: React.FC<NewArrivalsSectionProps> = ({
  onQuickView,
  onNavigateProduct,
  onNavigateShop,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Take the new arrivals or popular additions
  const newArrivals = PRODUCTS_DATA.filter((p) => p.isNewArrival || p.isOrganic).concat(
    PRODUCTS_DATA.slice(0, 4)
  ).filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 bg-gradient-to-b from-[#F7F9FC] to-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 border border-emerald-200/60">
              <Sparkles className="h-3.5 w-3.5 text-[#20E78A]" />
              Just In This Week
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071D49] tracking-tight">
              Fresh New Arrivals
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-slate-500 max-w-xl">
              Fresh harvest, artisanal staples, and wholesome snacks added to our pantry catalog.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Prev/Next buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                aria-label="Scroll previous products"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white text-[#071D49] hover:bg-[#071D49] hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Scroll next products"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white text-[#071D49] hover:bg-[#071D49] hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <button
              onClick={onNavigateShop}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#071D49] text-white text-xs sm:text-sm font-semibold hover:bg-[#0057D9] transition-all cursor-pointer shadow-xs"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Slider */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="w-[280px] sm:w-[300px] shrink-0 snap-start"
            >
              <ProductCard
                product={product}
                onQuickView={onQuickView}
                onNavigateProduct={onNavigateProduct}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
