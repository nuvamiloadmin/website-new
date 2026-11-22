import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../../types/commerce';
import { PRODUCTS_DATA } from '../../data/productsData';
import { ProductCard } from '../product/ProductCard';

interface FeaturedProductsProps {
  onQuickView: (product: Product) => void;
  onNavigateProduct: (slug: string) => void;
  onViewAllShop?: () => void;
  onNavigateShop?: () => void;
}

const TABS = [
  { id: 'all', label: 'All Items' },
  { id: 'fresh-vegetables', label: 'Fresh Vegetables 🍅' },
  { id: 'fresh-fruits', label: 'Fresh Fruits 🍎' },
  { id: 'rice-grains', label: 'Rice, Atta & Grains 🌾' },
  { id: 'dairy-eggs', label: 'Dairy & Eggs 🥛' },
  { id: 'pulses-lentils', label: 'Dals & Pulses' },
  { id: 'cooking-oils', label: 'Oils & Ghee' },
  { id: 'spices', label: 'Spices & Masalas' },
  { id: 'snacks', label: 'Snacks & Dry Fruits' },
  { id: 'beverages', label: 'Tea & Coffee' },
];

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onQuickView,
  onNavigateProduct,
  onViewAllShop,
  onNavigateShop,
}) => {
  const [activeTab, setActiveTab] = useState('all');
  const handleViewAll = onNavigateShop || onViewAllShop || (() => {});

  const filteredProducts = activeTab === 'all'
    ? PRODUCTS_DATA.slice(0, 12)
    : PRODUCTS_DATA.filter((p) => p.categorySlug === activeTab);

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0057D9] mb-1">
              <Sparkles className="h-3.5 w-3.5" />
              <span>HANDPICKED FOR YOU</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071D49] tracking-tight">
              Handpicked Grocery Essentials at the Best Prices
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Fresh produce, pure cooking staples, and breakfast favorites.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#071D49] text-white shadow-sm'
                    : 'bg-[#F7F9FC] text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid (4 cols desktop, 2 cols tablet/mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onNavigateProduct={onNavigateProduct}
            />
          ))}
        </div>

        {/* View all button */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={handleViewAll}
            className="rounded-full bg-white border-2 border-[#071D49] hover:bg-[#071D49] text-[#071D49] hover:text-white px-8 py-3.5 font-display text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>View All Grocery Catalog</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
