import React from 'react';
import { motion } from 'motion/react';
import { PackageOpen, Check, ShoppingBag, Star, Sparkles, ArrowRight } from 'lucide-react';
import { GROCERY_COMBOS, ComboDeal } from '../../data/dealsData';
import { useCart } from '../../context/CartContext';
import { useNotification } from '../../context/NotificationContext';
import { Product } from '../../types/commerce';

interface GroceryCombosSectionProps {
  onNavigateShop?: () => void;
}

export const GroceryCombosSection: React.FC<GroceryCombosSectionProps> = ({ onNavigateShop }) => {
  const { addToCart } = useCart();
  const { showNotification } = useNotification();

  const handleAddCombo = (combo: ComboDeal) => {
    // Convert combo to Product-compatible structure
    const comboProduct: Product = {
      id: combo.id,
      name: combo.title,
      slug: `combo-${combo.id}`,
      description: `Includes: ${combo.items.join(', ')}`,
      category: 'Combo Packs',
      categorySlug: 'grocery-combos',
      brand: 'NUVAMILO Staples',
      weight: 'Combo Pack',
      unit: 'Pack',
      price: combo.dealPrice,
      originalPrice: combo.originalPrice,
      discountPercent: Math.round(((combo.originalPrice - combo.dealPrice) / combo.originalPrice) * 100),
      image: combo.image,
      rating: combo.rating,
      reviewCount: combo.reviews,
      stockCount: 35,
      inStock: true,
      isDailyEssential: true,
      tags: ['Combo', 'Value Pack', 'Staples'],
    };

    addToCart(comboProduct, 1);
    showNotification(`Added ${combo.title} to your cart!`, 'success');
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-bold text-[#071D49] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#20E78A]" />
              Smart Value Bundles
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071D49] tracking-tight">
              Grocery Combo Deals & Pantry Bundles
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-slate-500 max-w-2xl">
              Curated household staple pairings designed to save you time and maximize your grocery savings.
            </p>
          </div>

          {onNavigateShop && (
            <button
              onClick={onNavigateShop}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0057D9] hover:text-[#071D49] transition-colors self-start md:self-end"
            >
              <span>Explore All Bundles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {GROCERY_COMBOS.map((combo) => (
            <motion.div
              key={combo.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-[#0057D9]/40 flex flex-col justify-between overflow-hidden transition-all duration-300"
            >
              {/* Image & Badges */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={combo.image}
                  alt={combo.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="rounded-full bg-[#071D49] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm">
                    {combo.badge}
                  </span>
                  <span className="rounded-full bg-[#20E78A] text-[#071D49] px-2.5 py-0.5 text-xs font-extrabold shadow-sm">
                    SAVE ₹{combo.savings}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold">{combo.rating}</span>
                    <span className="opacity-80">({combo.reviews})</span>
                  </div>
                  <span className="bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full font-medium">
                    {combo.items.length} Essential Items
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#071D49] leading-snug mb-3">
                    {combo.title}
                  </h3>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Bundle Includes:
                    </div>
                    {combo.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Add button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs text-slate-400 line-through">
                      MRP ₹{combo.originalPrice}
                    </div>
                    <div className="text-2xl font-black text-[#071D49]">
                      ₹{combo.dealPrice}
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddCombo(combo)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#071D49] hover:bg-[#0057D9] text-white text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add Combo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
