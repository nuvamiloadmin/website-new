import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PROMO_OFFER_CARDS } from '../../data/dealsData';

interface PromoOfferCardsProps {
  onNavigateCategory: (slug: string) => void;
}

export const PromoOfferCards: React.FC<PromoOfferCardsProps> = ({ onNavigateCategory }) => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PROMO_OFFER_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              onClick={() => onNavigateCategory(card.targetCategory)}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${card.bgGradient} p-6 sm:p-7 text-white shadow-lg cursor-pointer group flex flex-col justify-between min-h-[220px]`}
            >
              {/* Subtle background glow */}
              <div className="absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-white/10 blur-2xl pointer-events-none" />

              {/* Text content */}
              <div className="relative z-10 max-w-[65%] space-y-2">
                <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase ${card.badgeColor}`}>
                  {card.badge}
                </span>

                <h3 className="font-display text-lg sm:text-xl font-extrabold text-white leading-tight">
                  {card.title}
                </h3>

                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                  {card.subtitle}
                </p>

                <div className="pt-2">
                  <span className="font-display text-sm font-black text-[#20E78A] block">
                    {card.discountText}
                  </span>
                </div>
              </div>

              {/* Action link */}
              <div className="relative z-10 pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#20E78A] transition-colors">
                  <span>{card.buttonText}</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

              {/* Card Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute right-0 bottom-0 h-44 w-auto object-contain opacity-95 group-hover:scale-108 transition-transform duration-500 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
