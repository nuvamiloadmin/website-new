import React from 'react';
import { motion } from 'motion/react';
import {
  Wheat,
  Boxes,
  Droplet,
  Egg,
  Cookie,
  Coffee,
  Flame,
  Croissant,
  Sparkles,
  Home,
  ArrowRight,
  Tag,
  Star,
  Zap,
  Carrot,
  Apple,
} from 'lucide-react';
import { CATEGORIES_DATA } from '../../data/categoriesData';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: string) => void;
}

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'fresh-vegetables': Carrot,
  'fresh-fruits': Apple,
  'rice-grains': Wheat,
  'pulses-lentils': Boxes,
  'cooking-oils': Droplet,
  'dairy-eggs': Egg,
  'snacks': Cookie,
  'beverages': Coffee,
  'spices': Flame,
  'bakery': Croissant,
  'personal-care': Sparkles,
  'home-essentials': Home,
};

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <div
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-[960px] min-w-[780px] max-w-[calc(100vw-3rem)] pt-2 z-50 pointer-events-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="w-full rounded-3xl bg-white shadow-2xl ring-1 ring-slate-900/5 border border-slate-200/80 p-6 sm:p-7 overflow-hidden"
      >
        <div className="grid grid-cols-12 gap-8">
          {/* Column 1: Category Sidebar with Icons (4 cols) */}
          <div className="col-span-4 border-r border-slate-100 pr-6 space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#071D49]">
                Shop by Category
              </span>
              <span
                onClick={() => {
                  onClose();
                  onNavigate('/categories');
                }}
                className="text-[11px] font-bold text-[#0057D9] hover:underline cursor-pointer"
              >
                View All
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 pt-1">
              {CATEGORIES_DATA.slice(0, 8).map((cat) => {
                const Icon = CATEGORY_ICONS[cat.slug] || Wheat;
                return (
                  <div
                    key={cat.id}
                    onClick={() => {
                      onClose();
                      onNavigate(`/category/${cat.slug}`);
                    }}
                    className="flex items-center gap-2.5 rounded-xl p-2 hover:bg-[#F7F9FC] transition-colors cursor-pointer group"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-[#0057D9] group-hover:bg-[#0057D9] group-hover:text-white transition-colors shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display text-xs font-bold text-slate-800 group-hover:text-[#0057D9] truncate">
                        {cat.name}
                      </p>
                      <span className="text-[10px] text-slate-400">{cat.itemCount} items</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Shop Features & Collections (4 cols) */}
          <div className="col-span-4 border-r border-slate-100 pr-6 space-y-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#071D49] block pb-2 border-b border-slate-100">
                Curated Collections
              </span>
              <ul className="mt-3 space-y-2.5 text-xs">
                {[
                  { name: 'Daily Morning Essentials', route: '/shop?filter=daily' },
                  { name: 'Organic & Farm Harvest', route: '/shop?filter=organic' },
                  { name: 'Bestseller Pantry Staples', route: '/shop?sort=bestseller' },
                  { name: 'Fresh Fruits & Greens', route: '/category/rice-grains' },
                  { name: 'Healthy Tea & Beverages', route: '/category/beverages' },
                  { name: 'Artisanal Bakery & Breads', route: '/category/bakery' },
                ].map((item, idx) => (
                  <li key={idx}>
                    <span
                      onClick={() => {
                        onClose();
                        onNavigate(item.route);
                      }}
                      className="text-slate-600 hover:text-[#0057D9] font-medium transition-colors cursor-pointer flex items-center justify-between group"
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="h-3 w-3 text-slate-300 group-hover:text-[#0057D9] group-hover:translate-x-1 transition-all" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Deal Badges */}
            <div className="pt-2 border-t border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-2">
                Special Highlights
              </span>
              <div className="flex flex-wrap gap-2">
                <span
                  onClick={() => {
                    onClose();
                    onNavigate('/offers');
                  }}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200 hover:bg-amber-100 cursor-pointer"
                >
                  <Flame className="h-3 w-3 text-amber-500" />
                  Flash Deals Up to 40%
                </span>
                <span
                  onClick={() => {
                    onClose();
                    onNavigate('/shop');
                  }}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 hover:bg-emerald-100 cursor-pointer"
                >
                  <Tag className="h-3 w-3 text-emerald-500" />
                  Combo Packs
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Visual Promotional Banners (4 cols) */}
          <div className="col-span-4 flex flex-col gap-3">
            {/* Promo Card 1 */}
            <div
              onClick={() => {
                onClose();
                onNavigate('/shop?filter=organic');
              }}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#071D49] to-[#0057D9] p-4 text-white cursor-pointer group shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative z-10 max-w-[65%]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#20E78A] block">
                  Weekend Harvest
                </span>
                <h5 className="font-display text-sm font-extrabold text-white mt-1 leading-snug">
                  100% Organic Farm Produce
                </h5>
                <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#00C8F8] group-hover:underline">
                  Shop Now <ArrowRight className="h-3 w-3" />
                </span>
              </div>
              <img
                src="/assets/images/menu/mega-menu-item-image-1.jpeg"
                alt="Organic Produce"
                className="absolute right-0 top-0 bottom-0 h-full w-28 object-cover opacity-85 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Promo Card 2 */}
            <div
              onClick={() => {
                onClose();
                onNavigate('/offers');
              }}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0057D9] to-[#009BFF] p-4 text-white cursor-pointer group shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative z-10 max-w-[65%]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                  Limited Time
                </span>
                <h5 className="font-display text-sm font-extrabold text-white mt-1 leading-snug">
                  Save ₹250 on Monthly Staples
                </h5>
                <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-white group-hover:underline">
                  Claim Deal <ArrowRight className="h-3 w-3" />
                </span>
              </div>
              <img
                src="/assets/images/menu/mega-menu-item-image-2.jpeg"
                alt="Monthly Staples"
                className="absolute right-0 top-0 bottom-0 h-full w-28 object-cover opacity-85 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
