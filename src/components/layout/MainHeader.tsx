import React, { useState, useRef, useEffect } from 'react';
import { Search, Heart, ShoppingBag, User, Flame, Menu, X, ArrowRight } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { PRODUCTS_DATA } from '../../data/productsData';
import { CATEGORIES_DATA } from '../../data/categoriesData';
import { Product } from '../../types/commerce';

interface MainHeaderProps {
  onNavigate: (route: string) => void;
  onOpenMobileMenu: () => void;
  onProductClick: (slug: string) => void;
}

export const MainHeader: React.FC<MainHeaderProps> = ({
  onNavigate,
  onOpenMobileMenu,
  onProductClick,
}) => {
  const { itemsCount, subtotal, openCart } = useCart();
  const { wishlist, openWishlist } = useWishlist();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search suggestions on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter products for instant suggestions
  const searchResults: Product[] = searchQuery.trim().length > 1
    ? PRODUCTS_DATA.filter((p) => {
        const matchesQuery =
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
          selectedCategory === 'all' || p.categorySlug === selectedCategory;
        return matchesQuery && matchesCategory;
      }).slice(0, 6)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchFocused(false);
    onNavigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
  };

  const handleSelectProduct = (slug: string) => {
    setIsSearchFocused(false);
    setSearchQuery('');
    onProductClick(slug);
  };

  return (
    <div className="relative z-30 bg-white border-b border-slate-100 py-3.5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 lg:gap-8">
        {/* Left: Mobile hamburger & Logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Open mobile navigation"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div onClick={() => onNavigate('/')} className="cursor-pointer">
            <BrandLogo />
          </div>
        </div>

        {/* Center: Search Input with Category Dropdown & Suggestions */}
        <div ref={searchContainerRef} className="hidden md:flex flex-1 max-w-2xl relative">
          <form
            onSubmit={handleSearchSubmit}
            className="flex w-full items-center rounded-2xl border-2 border-slate-200 bg-[#F7F9FC] focus-within:border-[#0057D9] focus-within:bg-white transition-all overflow-hidden shadow-2xs"
          >
            {/* Category Selector */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent border-r border-slate-200 py-2.5 px-3 text-xs font-semibold text-slate-600 focus:outline-none cursor-pointer max-w-[140px] truncate"
            >
              <option value="all">All Categories</option>
              {CATEGORIES_DATA.map((cat) => (
                <option key={cat.id} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>

            {/* Input field */}
            <input
              type="text"
              placeholder="Search for groceries, brands and more..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchFocused(true);
              }}
              onFocus={() => setIsSearchFocused(true)}
              className="flex-1 bg-transparent px-3 py-2 text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
            />

            {/* Clear or Search button */}
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            <button
              type="submit"
              className="flex h-10 w-12 items-center justify-center bg-[#071D49] hover:bg-[#0057D9] text-white transition-colors cursor-pointer"
              aria-label="Submit search"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>

          {/* Real-time search suggestions dropdown */}
          {isSearchFocused && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl bg-white shadow-2xl border border-slate-100 overflow-hidden py-2 divide-y divide-slate-50">
              <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Matching Groceries ({searchResults.length})
              </div>
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleSelectProduct(product.slug)}
                  className="flex items-center gap-3 px-3 py-2.5 hover:bg-[#F7F9FC] cursor-pointer transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-10 w-10 rounded-lg bg-slate-50 object-contain p-1 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-xs font-bold text-[#071D49] line-clamp-1">
                      {product.name}
                    </p>
                    <span className="text-[11px] text-slate-400">
                      {product.brand} · {product.weight}
                    </span>
                  </div>
                  <span className="font-display text-xs font-extrabold text-[#0057D9] shrink-0">
                    ₹{product.price}
                  </span>
                </div>
              ))}
              <div
                onClick={handleSearchSubmit}
                className="px-3 py-2 text-center text-xs font-bold text-[#0057D9] hover:bg-blue-50 cursor-pointer flex items-center justify-center gap-1"
              >
                <span>View all search results</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          )}
        </div>

        {/* Right: Functional Action Icons */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          {/* Special Offers */}
          <button
            type="button"
            onClick={() => onNavigate('/offers')}
            className="hidden sm:flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-bold text-amber-600 hover:bg-amber-50 border border-transparent hover:border-amber-200 transition-all cursor-pointer"
          >
            <Flame className="h-4 w-4 fill-amber-500 text-amber-500" />
            <span className="hidden xl:inline">Deals</span>
          </button>

          {/* Wishlist */}
          <button
            type="button"
            onClick={openWishlist}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-700 transition-colors cursor-pointer"
            title="View saved wishlist"
          >
            <Heart className="h-4 w-4" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-xs">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* My Account */}
          <button
            type="button"
            onClick={() => onNavigate('/account')}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-700 transition-colors cursor-pointer"
            title="My Account"
          >
            <User className="h-4 w-4" />
          </button>

          {/* Cart with Item Counter and Subtotal */}
          <button
            type="button"
            onClick={openCart}
            className="flex items-center gap-2.5 rounded-2xl nuva-btn-gradient px-3.5 sm:px-4 py-2 text-white shadow-md shadow-blue-500/15 cursor-pointer hover:shadow-lg transition-all"
            title="Open Cart Basket"
          >
            <div className="relative">
              <ShoppingBag className="h-4 w-4" />
              {itemsCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#20E78A] text-[9px] font-black text-[#071D49] shadow-xs">
                  {itemsCount}
                </span>
              )}
            </div>

            <div className="hidden sm:flex flex-col text-left leading-none">
              <span className="text-[10px] uppercase font-bold text-white/70">Cart</span>
              <span className="font-display text-xs font-black text-white mt-0.5">
                ₹{subtotal}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="mt-3 md:hidden">
        <form
          onSubmit={handleSearchSubmit}
          className="flex w-full items-center rounded-xl border border-slate-200 bg-[#F7F9FC] overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search groceries, staples..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none"
          />
          <button
            type="submit"
            className="px-3 py-2 bg-[#071D49] text-white"
            aria-label="Search"
          >
            <Search className="h-3.5 w-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
