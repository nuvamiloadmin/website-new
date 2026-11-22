import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Truck, Sparkles, CheckCircle2 } from 'lucide-react';

interface FeaturedOfferBannerProps {
  onShopDeals?: () => void;
  onNavigateShop?: () => void;
}

export const FeaturedOfferBanner: React.FC<FeaturedOfferBannerProps> = ({ onShopDeals, onNavigateShop }) => {
  const handleDeals = onNavigateShop || onShopDeals || (() => {});
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#071D49] via-[#0057D9] to-[#009BFF] p-8 sm:p-12 text-white shadow-xl">
          {/* Decorative blur spots */}
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-[#20E78A]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 left-1/3 h-52 w-52 rounded-full bg-[#00C8F8]/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#20E78A]">
                <Sparkles className="h-3 w-3" />
                <span>LIMITED TIME CAMPAIGN</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Fresh Deals Everyday, Delivered to Your Doorstep
              </h2>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Enjoy daily discounts on farm-fresh fruits, organic vegetables, unpolished pulses,
                and dairy essentials. Packed in structured kraft paper bags for maximum freshness.
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
                <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-[#20E78A] shrink-0" />
                  <span>Zero Wax On Fruits</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-[#20E78A] shrink-0" />
                  <span>Aged Basmati Grains</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-[#20E78A] shrink-0" />
                  <span>30-Min Fast Delivery</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleDeals}
                  className="rounded-full bg-[#20E78A] hover:bg-[#19cf78] text-[#071D49] font-display text-xs sm:text-sm font-extrabold px-8 py-3.5 shadow-lg shadow-emerald-500/20 inline-flex items-center gap-2 transition-all hover:scale-102 cursor-pointer"
                >
                  <span>Explore Daily Deals</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Image Banner (5 cols) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-xs sm:max-w-sm select-none"
              >
                <img
                  src="/assets/images/promotions/special-offer-image-3.png"
                  alt="Fresh groceries banner"
                  className="w-full h-auto object-contain drop-shadow-xl"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
