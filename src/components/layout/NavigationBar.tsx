import React, { useState } from 'react';
import {
  LayoutGrid,
  ChevronDown,
  Flame,
  Home,
  ShoppingBag,
  BookOpen,
  Layers,
  User,
  HelpCircle,
  Phone,
  FileText,
  Shield,
  Truck,
  RotateCcw,
} from 'lucide-react';
import { MegaMenu } from './MegaMenu';

interface NavigationBarProps {
  currentPath: string;
  onNavigate: (route: string) => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ currentPath, onNavigate }) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  return (
    <div className="relative z-20 hidden lg:block bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Left: Popular Categories Button & Mega Menu trigger */}
        <div
          className="relative"
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsMegaMenuOpen((prev) => !prev)}
            className="flex items-center gap-3 bg-[#071D49] hover:bg-[#0057D9] text-white py-3.5 px-6 font-display text-xs font-bold uppercase tracking-wider rounded-t-2xl transition-colors cursor-pointer"
          >
            <LayoutGrid className="h-4 w-4 text-[#20E78A]" />
            <span>Popular Categories</span>
            <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Mega Menu Dropdown */}
          <MegaMenu
            isOpen={isMegaMenuOpen}
            onClose={() => setIsMegaMenuOpen(false)}
            onNavigate={onNavigate}
          />
        </div>

        {/* Center: Main Navigation Links */}
        <nav className="flex items-center gap-1 xl:gap-2 text-xs font-bold text-[#071D49]">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className={`px-3.5 py-4 hover:text-[#0057D9] transition-colors cursor-pointer border-b-2 ${
              currentPath === '/' ? 'border-[#0057D9] text-[#0057D9]' : 'border-transparent'
            }`}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/shop')}
            className={`px-3.5 py-4 hover:text-[#0057D9] transition-colors cursor-pointer border-b-2 ${
              currentPath === '/shop' ? 'border-[#0057D9] text-[#0057D9]' : 'border-transparent'
            }`}
          >
            Shop
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/collections')}
            className={`px-3.5 py-4 hover:text-[#0057D9] transition-colors cursor-pointer border-b-2 ${
              currentPath === '/collections' ? 'border-[#0057D9] text-[#0057D9]' : 'border-transparent'
            }`}
          >
            Collection
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/blog')}
            className={`px-3.5 py-4 hover:text-[#0057D9] transition-colors cursor-pointer border-b-2 ${
              currentPath === '/blog' ? 'border-[#0057D9] text-[#0057D9]' : 'border-transparent'
            }`}
          >
            Blog
          </button>

          {/* Pages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsPagesDropdownOpen(true)}
            onMouseLeave={() => setIsPagesDropdownOpen(false)}
          >
            <button
              type="button"
              className="px-3.5 py-4 hover:text-[#0057D9] transition-colors cursor-pointer flex items-center gap-1 border-b-2 border-transparent"
            >
              <span>Pages</span>
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isPagesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isPagesDropdownOpen && (
              <div className="absolute top-full left-0 w-52 rounded-2xl bg-white shadow-xl border border-slate-100 py-2 z-50 divide-y divide-slate-50">
                <div
                  onClick={() => {
                    setIsPagesDropdownOpen(false);
                    onNavigate('/about');
                  }}
                  className="px-4 py-2 hover:bg-[#F7F9FC] text-slate-700 hover:text-[#0057D9] cursor-pointer flex items-center gap-2"
                >
                  <Home className="h-3.5 w-3.5 text-slate-400" />
                  <span>About Us</span>
                </div>
                <div
                  onClick={() => {
                    setIsPagesDropdownOpen(false);
                    onNavigate('/faq');
                  }}
                  className="px-4 py-2 hover:bg-[#F7F9FC] text-slate-700 hover:text-[#0057D9] cursor-pointer flex items-center gap-2"
                >
                  <HelpCircle className="h-3.5 w-3.5 text-slate-400" />
                  <span>FAQs</span>
                </div>
                <div
                  onClick={() => {
                    setIsPagesDropdownOpen(false);
                    onNavigate('/shipping-policy');
                  }}
                  className="px-4 py-2 hover:bg-[#F7F9FC] text-slate-700 hover:text-[#0057D9] cursor-pointer flex items-center gap-2"
                >
                  <Truck className="h-3.5 w-3.5 text-slate-400" />
                  <span>Shipping Policy</span>
                </div>
                <div
                  onClick={() => {
                    setIsPagesDropdownOpen(false);
                    onNavigate('/refund-policy');
                  }}
                  className="px-4 py-2 hover:bg-[#F7F9FC] text-slate-700 hover:text-[#0057D9] cursor-pointer flex items-center gap-2"
                >
                  <RotateCcw className="h-3.5 w-3.5 text-slate-400" />
                  <span>Refund Policy</span>
                </div>
                <div
                  onClick={() => {
                    setIsPagesDropdownOpen(false);
                    onNavigate('/privacy-policy');
                  }}
                  className="px-4 py-2 hover:bg-[#F7F9FC] text-slate-700 hover:text-[#0057D9] cursor-pointer flex items-center gap-2"
                >
                  <Shield className="h-3.5 w-3.5 text-slate-400" />
                  <span>Privacy Policy</span>
                </div>
                <div
                  onClick={() => {
                    setIsPagesDropdownOpen(false);
                    onNavigate('/terms');
                  }}
                  className="px-4 py-2 hover:bg-[#F7F9FC] text-slate-700 hover:text-[#0057D9] cursor-pointer flex items-center gap-2"
                >
                  <FileText className="h-3.5 w-3.5 text-slate-400" />
                  <span>Terms & Conditions</span>
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => onNavigate('/account')}
            className={`px-3.5 py-4 hover:text-[#0057D9] transition-colors cursor-pointer border-b-2 ${
              currentPath.startsWith('/account') ? 'border-[#0057D9] text-[#0057D9]' : 'border-transparent'
            }`}
          >
            My Account
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/contact')}
            className={`px-3.5 py-4 hover:text-[#0057D9] transition-colors cursor-pointer border-b-2 ${
              currentPath === '/contact' ? 'border-[#0057D9] text-[#0057D9]' : 'border-transparent'
            }`}
          >
            Contact Us
          </button>
        </nav>

        {/* Right: Daily Deals badge */}
        <div
          onClick={() => onNavigate('/offers')}
          className="flex items-center gap-2 py-2 px-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold hover:bg-amber-100 transition-colors cursor-pointer"
        >
          <Flame className="h-4 w-4 text-amber-500 fill-amber-500 animate-pulse" />
          <span>Daily Deals: <strong>Up to 50% Off</strong></span>
        </div>
      </div>
    </div>
  );
};
