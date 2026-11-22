import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Filter, SlidersHorizontal, ArrowUpDown, Search, Grid, List, X, Sparkles } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';
import { CATEGORIES_DATA } from '../data/categoriesData';
import { ProductCard } from '../components/product/ProductCard';
import { Product } from '../types/commerce';
import { PageId } from '../types/navigation';

interface ShopPageProps {
  onNavigate: (page: PageId) => void;
  onQuickView: (product: Product) => void;
  onNavigateProduct: (slug: string) => void;
  initialCategory?: string;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onNavigate,
  onQuickView,
  onNavigateProduct,
  initialCategory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceMax, setPriceMax] = useState<number>(1000);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [organicOnly, setOrganicOnly] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.categorySlug !== selectedCategory) {
        return false;
      }
      // Search filter
      if (
        searchQuery &&
        !p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !p.brand.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      // Price filter
      if (p.price > priceMax) {
        return false;
      }
      // Stock filter
      if (inStockOnly && !p.inStock) {
        return false;
      }
      // Organic filter
      if (organicOnly && !p.isOrganic) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return (b.rating ?? 0) - (a.rating ?? 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, priceMax, inStockOnly, organicOnly, sortBy]);

  return (
    <div className="bg-[#F7F9FC] min-h-screen py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0057D9]">
              Home
            </button>
            <span>/</span>
            <span className="text-[#071D49] font-medium">Grocery Catalog</span>
            {selectedCategory !== 'all' && (
              <>
                <span>/</span>
                <span className="text-[#0057D9] font-semibold capitalize">
                  {CATEGORIES_DATA.find((c) => c.slug === selectedCategory)?.name ?? selectedCategory}
                </span>
              </>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#071D49] tracking-tight">
                {selectedCategory === 'all'
                  ? 'Shop All Groceries & Daily Essentials'
                  : CATEGORIES_DATA.find((c) => c.slug === selectedCategory)?.name ?? 'Groceries'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Showing {filteredProducts.length} fresh pantry items with hyperlocal 15-30 min delivery.
              </p>
            </div>

            {/* Mobile filter toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#071D49] shadow-xs"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Layout: Filters Sidebar + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Sidebar Filters */}
          <div className="hidden lg:block space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="font-extrabold text-[#071D49] text-base flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#0057D9]" />
                  Filters
                </span>
                {(selectedCategory !== 'all' || inStockOnly || organicOnly || priceMax < 1000) && (
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setPriceMax(1000);
                      setInStockOnly(false);
                      setOrganicOnly(false);
                      setSearchQuery('');
                    }}
                    className="text-xs font-bold text-rose-500 hover:text-rose-600 cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Categories list */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Categories
                </h3>
                <div className="space-y-1 max-h-64 overflow-y-auto pr-1">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedCategory === 'all'
                        ? 'bg-[#071D49] text-white'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>All Products</span>
                    <span className="text-[10px] opacity-75">{PRODUCTS_DATA.length}</span>
                  </button>
                  {CATEGORIES_DATA.map((cat) => {
                    const count = PRODUCTS_DATA.filter((p) => p.categorySlug === cat.slug).length;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.slug)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          selectedCategory === cat.slug
                            ? 'bg-[#071D49] text-white'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className="text-[10px] opacity-75">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price Range Slider */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Max Price
                  </span>
                  <span className="text-sm font-black text-[#071D49]">₹{priceMax}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="50"
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full accent-[#0057D9] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>₹50</span>
                  <span>₹1000</span>
                </div>
              </div>

              {/* Toggles */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="rounded border-slate-300 text-[#0057D9] focus:ring-0"
                  />
                  <span className="text-xs font-semibold text-slate-700">In Stock Only</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={organicOnly}
                    onChange={(e) => setOrganicOnly(e.target.checked)}
                    className="rounded border-slate-300 text-[#20E78A] focus:ring-0"
                  />
                  <span className="text-xs font-semibold text-slate-700">Certified Organic</span>
                </label>
              </div>
            </div>
          </div>

          {/* Product Grid Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and Sort Bar */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter in catalog..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-hidden focus:border-[#0057D9]"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <span className="text-xs text-slate-400 shrink-0">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#071D49] focus:outline-hidden cursor-pointer"
                >
                  <option value="featured">Featured / Best Match</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4 text-2xl">
                  🔍
                </div>
                <h3 className="text-lg font-bold text-[#071D49]">No groceries match your filter</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Try adjusting your search terms, changing the category, or clearing selected filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceMax(1000);
                    setSearchQuery('');
                  }}
                  className="mt-4 px-5 py-2 rounded-full bg-[#071D49] text-white text-xs font-bold hover:bg-[#0057D9]"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={onQuickView}
                    onNavigateProduct={onNavigateProduct}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
