import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Flame, Clock, Sparkles } from 'lucide-react';
import { Product } from '../../types/commerce';
import { PRODUCTS_DATA } from '../../data/productsData';
import { ProductCard } from '../product/ProductCard';

interface FlashSaleSectionProps {
  onQuickView: (product: Product) => void;
  onNavigateProduct: (slug: string) => void;
}

export const FlashSaleSection: React.FC<FlashSaleSectionProps> = ({
  onQuickView,
  onNavigateProduct,
}) => {
  // Real countdown timer anchored to next midnight IST
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 8,
    minutes: 45,
    seconds: 20,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      // Calculate remaining time until next midnight
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);
      const diffMs = midnight.getTime() - now.getTime();

      if (diffMs > 0) {
        const hours = Math.floor(diffMs / (1000 * 60 * 60));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Flash products
  const flashProducts = PRODUCTS_DATA.slice(4, 8);

  return (
    <section className="py-12 sm:py-16 bg-[#F7F9FC] border-y border-slate-100">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Live Countdown */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-rose-600 mb-1">
              <Flame className="h-4 w-4 fill-rose-500 animate-pulse" />
              <span>TODAY'S LIMITED DEALS</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071D49] tracking-tight">
              Hurry! Flash Sale Ends Soon
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Steep discounts on pantry essentials. Claim before today's quota runs out!
            </p>
          </div>

          {/* Real Countdown Block */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
              <Clock className="h-4 w-4 text-[#0057D9]" />
              Ends In:
            </span>

            <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-extrabold text-white">
              <div className="flex flex-col items-center justify-center h-12 w-12 rounded-2xl bg-[#071D49] shadow-sm">
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[9px] font-normal text-slate-300">HRS</span>
              </div>
              <span className="text-slate-400 font-bold">:</span>
              <div className="flex flex-col items-center justify-center h-12 w-12 rounded-2xl bg-[#071D49] shadow-sm">
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[9px] font-normal text-slate-300">MIN</span>
              </div>
              <span className="text-slate-400 font-bold">:</span>
              <div className="flex flex-col items-center justify-center h-12 w-12 rounded-2xl bg-[#0057D9] shadow-sm">
                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[9px] font-normal text-white/80">SEC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Flash Sale Product Cards with progress bars */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {flashProducts.map((product, idx) => {
            const soldPercent = [78, 64, 88, 55][idx % 4];
            const stockRemaining = [12, 19, 7, 24][idx % 4];

            return (
              <div key={product.id} className="flex flex-col justify-between">
                <ProductCard
                  product={product}
                  onQuickView={onQuickView}
                  onNavigateProduct={onNavigateProduct}
                />

                {/* Deal Stock Status Progress Bar */}
                <div className="mt-2.5 px-3 py-2 rounded-2xl bg-white border border-slate-100 shadow-2xs">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-1">
                    <span>Sold: <strong className="text-rose-600">{soldPercent}%</strong></span>
                    <span>{stockRemaining} items left</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-400 to-rose-500"
                      style={{ width: `${soldPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
