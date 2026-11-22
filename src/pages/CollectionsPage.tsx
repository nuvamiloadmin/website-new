import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Layers } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/categoriesData';
import { PageId } from '../types/navigation';

interface CollectionsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectCategory: (slug: string) => void;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({
  onNavigate,
  onSelectCategory,
}) => {
  const collections = [
    {
      title: 'Fresh Farm Vegetables',
      slug: 'fresh-vegetables',
      badge: 'FARM DIRECT',
      itemsCount: '48 items',
      description: 'Vine-ripened tomatoes, Nashik onions, Jyoti potatoes, and crisp tender leafy greens.',
      image: '/assets/images/products/tomatoes.jpg',
    },
    {
      title: 'Fresh Orchard Fruits',
      slug: 'fresh-fruits',
      badge: 'HANDPICKED FRUITS',
      itemsCount: '35 items',
      description: 'Himachal Shimla apples, Robusta bananas, Nagpur oranges, and sweet pomegranates.',
      image: '/assets/images/products/apples.jpg',
    },
    {
      title: 'Daily Essentials & Dairy',
      slug: 'dairy-eggs',
      badge: 'EVERYDAY REFILL',
      itemsCount: '48 items',
      description: 'Morning fresh milk, farm eggs, curd, and wholesome whole-wheat breads.',
      image: '/assets/images/products/milk.jpg',
    },
    {
      title: 'Rice, Grains & Flours',
      slug: 'rice-grains',
      badge: 'STAPLE KITCHEN',
      itemsCount: '62 items',
      description: 'Aged traditional Basmati, stone-ground Sharbati atta, and wholesome rolled oats.',
      image: '/assets/images/products/basmati-rice.jpg',
    },
    {
      title: 'Protein-Packed Pulses & Dals',
      slug: 'pulses-lentils',
      badge: 'UNPOLISHED NUTRITION',
      itemsCount: '35 items',
      description: 'Natural unpolished Toor, Moong, Masoor, Chana dals and Kashmiri Rajma.',
      image: '/assets/images/products/toor-dal.jpg',
    },
    {
      title: 'Pure Cold Pressed Cooking Oils',
      slug: 'cooking-oils',
      badge: 'WOOD CHURNED',
      itemsCount: '24 items',
      description: 'Pure Cow Ghee, Kachi Ghani Mustard Oil, and fortified refined sunflower oils.',
      image: '/assets/images/products/sunflower-oil.jpg',
    },
    {
      title: 'Roasted Snacks & Dry Fruits',
      slug: 'snacks',
      badge: 'CRUNCHY TREATS',
      itemsCount: '55 items',
      description: 'California almonds, whole cashews, Haldiram bhujia sev, and teatime biscuits.',
      image: '/assets/images/products/almonds.jpg',
    },
    {
      title: 'Aromatic Whole Spices & Masalas',
      slug: 'spices',
      badge: 'ORIGIN SPICES',
      itemsCount: '40 items',
      description: 'Salem turmeric, Deggi Mirch, Tata Salt, Garam Masala, and kitchen essentials.',
      image: '/assets/images/products/turmeric.jpg',
    },
  ];

  return (
    <div className="bg-[#F7F9FC] min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-xs font-bold text-[#0057D9] uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Curated For Every Diet
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#071D49] tracking-tight">
            Curated Grocery Collections
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Hand-assembled pantries tailored for healthy eating, authentic regional cooking, and everyday family needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {collections.map((col) => (
            <motion.div
              key={col.slug}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              onClick={() => onSelectCategory(col.slug)}
              className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#0057D9]/40 overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#071D49]">
                    {col.badge}
                  </span>
                  <span className="absolute bottom-3 right-4 text-xs font-bold text-white/90">
                    {col.itemsCount}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#071D49] group-hover:text-[#0057D9] transition-colors mb-1.5">
                    {col.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {col.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0057D9] group-hover:translate-x-1 transition-transform">
                  Browse Collection <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
