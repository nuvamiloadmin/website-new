import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Tag, Copy, Check, ArrowRight } from 'lucide-react';
import { AVAILABLE_COUPONS, PROMO_OFFER_CARDS, GROCERY_COMBOS } from '../data/dealsData';
import { useNotification } from '../context/NotificationContext';
import { GroceryCombosSection } from '../components/home/GroceryCombosSection';
import { PageId } from '../types/navigation';

interface OffersPageProps {
  onNavigate: (page: PageId) => void;
  onNavigateCategory: (slug: string) => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({ onNavigate, onNavigateCategory }) => {
  const { showNotification } = useNotification();

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    showNotification(`Coupon code ${code} copied to clipboard!`, 'success');
  };

  return (
    <div className="bg-[#F7F9FC] min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#20E78A]" />
            Exclusive Deals & Promos
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#071D49] tracking-tight">
            NUVAMILO Special Offers & Coupon Codes
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Enjoy instant checkout discounts, free express shipping, and exclusive combo pack savings.
          </p>
        </div>

        {/* Coupons Grid */}
        <div className="mb-14">
          <h2 className="text-xl font-extrabold text-[#071D49] mb-6 flex items-center gap-2">
            <Tag className="w-5 h-5 text-[#0057D9]" />
            Active Promo Codes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AVAILABLE_COUPONS.map((coupon) => (
              <div
                key={coupon.code}
                className="bg-white rounded-3xl p-6 border-2 border-dashed border-[#0057D9]/30 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono font-black text-lg text-[#071D49] bg-blue-50 px-3 py-1 rounded-xl">
                      {coupon.code}
                    </span>
                    <button
                      onClick={() => handleCopyCode(coupon.code)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0057D9] hover:underline cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 font-medium mb-4">
                    {coupon.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Min order: ₹{coupon.minOrderValue}</span>
                  <button
                    onClick={() => onNavigate('shop')}
                    className="font-bold text-[#071D49] hover:text-[#0057D9]"
                  >
                    Shop Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promotional Cards */}
        <div className="mb-14">
          <h2 className="text-xl font-extrabold text-[#071D49] mb-6">
            Category Discount Banners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROMO_OFFER_CARDS.map((card) => (
              <div
                key={card.id}
                className={`rounded-3xl p-6 text-white bg-gradient-to-br ${card.bgGradient} shadow-md flex flex-col justify-between`}
              >
                <div>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase mb-3 ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                  <h3 className="text-xl font-black mb-1">{card.title}</h3>
                  <p className="text-xs text-white/80 mb-6">{card.subtitle}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono font-black text-sm text-[#20E78A]">
                    {card.discountText}
                  </span>
                  <button
                    onClick={() => onNavigateCategory(card.targetCategory)}
                    className="px-4 py-2 rounded-full bg-white text-[#071D49] text-xs font-bold hover:bg-[#20E78A] transition cursor-pointer"
                  >
                    {card.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Combos Section */}
        <GroceryCombosSection onNavigateShop={() => onNavigate('shop')} />
      </div>
    </div>
  );
};
