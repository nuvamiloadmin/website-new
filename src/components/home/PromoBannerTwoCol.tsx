import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface PromoBannerTwoColProps {
  onNavigate?: (route: string) => void;
  onNavigateCategory?: (slug: string) => void;
  onNavigateShop?: () => void;
}

export const PromoBannerTwoCol: React.FC<PromoBannerTwoColProps> = ({
  onNavigate,
  onNavigateCategory,
  onNavigateShop,
}) => {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              if (onNavigateCategory) onNavigateCategory('fresh-fruits');
              else if (onNavigateShop) onNavigateShop();
              else onNavigate?.('/shop?filter=organic');
            }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#071D49] to-[#0057D9] p-7 sm:p-9 text-white shadow-lg cursor-pointer group flex flex-col justify-between min-h-[260px]"
          >
            <div className="relative z-10 max-w-[62%] space-y-2">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#20E78A] text-[#071D49]">
                100% ORGANIC
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-black text-white leading-tight">
                Fresh From Local Organic Orchards
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Apples, citrus, leafy greens, and stone fruits hand-graded for peak flavor.
              </p>
              <div className="pt-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#20E78A] group-hover:underline">
                  <span>Explore Harvest</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>

            <img
              src="/assets/images/promotions/smart-saving-item-image-5.jpeg"
              alt="Organic farm produce"
              className="absolute right-0 bottom-0 h-48 sm:h-56 w-auto object-contain opacity-90 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              if (onNavigateShop) onNavigateShop();
              else onNavigate?.('/offers');
            }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0057D9] to-[#009BFF] p-7 sm:p-9 text-white shadow-lg cursor-pointer group flex flex-col justify-between min-h-[260px]"
          >
            <div className="relative z-10 max-w-[62%] space-y-2">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#00C8F8] text-[#071D49]">
                BREAKFAST VALUE
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-black text-white leading-tight">
                Daily Dairy & Whole Grain Breads
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Amul milk, farm eggs, and artisanal atta bread at guaranteed best neighborhood prices.
              </p>
              <div className="pt-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:underline">
                  <span>Shop Breakfast Pack</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>

            <img
              src="/assets/images/promotions/Smiling Grocery Worker with Wicker Basket.png"
              alt="Grocery worker with basket"
              className="absolute right-0 bottom-0 h-52 sm:h-60 w-auto object-contain opacity-95 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
