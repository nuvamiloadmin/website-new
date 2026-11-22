import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, ShieldCheck, Clock, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onShopNow: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopNow }) => {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] py-14 sm:py-20 lg:py-24 border-b border-slate-100">
      {/* Decorative Vegetable Outlines Background (hero-bg-image.png) */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply">
        <img
          src="/assets/images/hero/hero-bg-image.png"
          alt=""
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
      </div>

      {/* Decorative Left-Side Grocery Cutout (hero-bg-image-1 (1).png) */}
      <div className="absolute -bottom-8 -left-10 lg:bottom-0 lg:left-0 pointer-events-none z-10 w-44 sm:w-60 lg:w-72 select-none opacity-90">
        <img
          src="/assets/images/hero/hero-bg-image-1 (1).png"
          alt=""
          className="w-full h-auto object-contain"
          aria-hidden="true"
        />
      </div>

      {/* Main Container (~1320px) */}
      <div className="relative z-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column (55% -> col-span-7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 shadow-xs border border-slate-200/80"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#20E78A] animate-ping" />
              <span className="font-display text-xs font-black tracking-widest uppercase text-[#0057D9]">
                FRESH DELIVERY
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs font-semibold text-slate-500">
                Express 15-30 Mins
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#071D49] leading-[1.12]"
            >
              Fresh Groceries for Your{' '}
              <span className="nuva-gradient-text">Everyday Needs</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Shop everyday grocery essentials, rice, pulses, dairy products, snacks,
              beverages and household necessities with Nuvamilo.
            </motion.p>

            {/* CTA Button & Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              {/* Rounded pill CTA with circular arrow icon */}
              <button
                type="button"
                onClick={onShopNow}
                className="group relative flex items-center gap-3 rounded-full bg-[#071D49] hover:bg-gradient-to-r hover:from-[#0057D9] hover:via-[#009BFF] hover:to-[#20E78A] text-white px-8 py-4 font-display text-sm sm:text-base font-bold shadow-xl shadow-blue-950/20 transition-all duration-300 hover:shadow-2xl hover:scale-102 cursor-pointer"
              >
                <span>Shop Now</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-[#071D49] transition-colors">
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <ShieldCheck className="h-4 w-4 text-[#20E78A]" />
                <span>100% Quality & Freshness Guarantee</span>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 max-w-md mx-auto lg:mx-0 text-left"
            >
              <div>
                <div className="font-display text-lg sm:text-xl font-black text-[#071D49]">
                  10,000+
                </div>
                <div className="text-[11px] text-slate-500 font-medium leading-tight">
                  Fresh Grocery Items
                </div>
              </div>

              <div>
                <div className="font-display text-lg sm:text-xl font-black text-[#0057D9]">
                  15-30m
                </div>
                <div className="text-[11px] text-slate-500 font-medium leading-tight">
                  Doorstep Delivery
                </div>
              </div>

              <div>
                <div className="font-display text-lg sm:text-xl font-black text-[#20E78A]">
                  4.9 / 5★
                </div>
                <div className="text-[11px] text-slate-500 font-medium leading-tight">
                  Verified Ratings
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (45% -> col-span-5) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            {/* Soft Ambient Background Glow */}
            <div className="absolute h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-gradient-to-tr from-[#009BFF]/20 via-[#00C8F8]/15 to-[#20E78A]/20 blur-3xl pointer-events-none" />

            {/* Floating Hero Image (hero-image.png with 4s loop animation) */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 w-full max-w-[480px] select-none"
            >
              <img
                src="/assets/images/hero/hero-image.png"
                alt="Fresh NUVAMILO grocery shopping basket with fresh greens and essentials"
                className="w-full h-auto object-contain drop-shadow-2xl"
                loading="eager"
              />

              {/* Floating Badge 1: 100% Fresh Guaranteed */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-3 -left-3 sm:-top-5 sm:-left-6 rounded-2xl bg-white/95 backdrop-blur-md p-3 shadow-xl border border-slate-100 flex items-center gap-2.5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#20E78A]/20 text-[#071D49]">
                  <Sparkles className="h-5 w-5 text-[#0057D9]" />
                </div>
                <div>
                  <span className="block font-display text-xs font-black text-[#071D49]">
                    100% Fresh
                  </span>
                  <span className="block text-[10px] text-slate-500 font-semibold">
                    Farm Direct
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Flat ₹150 Off */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-4 rounded-2xl bg-[#071D49] text-white p-3.5 shadow-xl border border-white/10 flex items-center gap-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#20E78A] text-[#071D49] font-black text-xs">
                  ₹150
                </div>
                <div>
                  <span className="block font-display text-xs font-bold text-white leading-none">
                    Flat Discount
                  </span>
                  <span className="block text-[10px] text-[#20E78A] font-semibold mt-0.5">
                    Code: NUVAMILO50
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
