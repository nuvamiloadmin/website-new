import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  X,
  ChevronDown,
  ShoppingBag,
  Heart,
  Home,
  Flame,
  Phone,
  Mail,
  User,
  Sparkles,
} from 'lucide-react';
import { BrandLogo } from '../BrandLogo';
import { CATEGORIES_DATA } from '../../data/categoriesData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  const [pagesExpanded, setPagesExpanded] = useState(false);

  const handleNav = (route: string) => {
    onClose();
    onNavigate(route);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#051433]/70 backdrop-blur-xs cursor-pointer"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative z-10 flex h-full w-4/5 max-w-sm flex-col bg-white shadow-2xl overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 p-5 bg-[#F7F9FC]">
              <BrandLogo />
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close navigation"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Nav list */}
            <div className="p-5 space-y-2 flex-1">
              <div
                onClick={() => handleNav('/')}
                className="flex items-center gap-3 p-2.5 rounded-xl text-xs font-bold text-[#071D49] hover:bg-[#F7F9FC] cursor-pointer"
              >
                <Home className="h-4 w-4 text-[#0057D9]" />
                <span>Home</span>
              </div>

              <div
                onClick={() => handleNav('/shop')}
                className="flex items-center gap-3 p-2.5 rounded-xl text-xs font-bold text-[#071D49] hover:bg-[#F7F9FC] cursor-pointer"
              >
                <ShoppingBag className="h-4 w-4 text-[#0057D9]" />
                <span>Shop All Groceries</span>
              </div>

              {/* Categories Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setCategoriesExpanded((prev) => !prev)}
                  className="flex w-full items-center justify-between p-2.5 rounded-xl text-xs font-bold text-[#071D49] hover:bg-[#F7F9FC] cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <Sparkles className="h-4 w-4 text-[#20E78A]" />
                    <span>Popular Categories</span>
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      categoriesExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {categoriesExpanded && (
                  <div className="pl-9 pr-2 py-1 space-y-1 text-xs text-slate-600">
                    {CATEGORIES_DATA.map((cat) => (
                      <div
                        key={cat.id}
                        onClick={() => handleNav(`/category/${cat.slug}`)}
                        className="py-1.5 hover:text-[#0057D9] cursor-pointer font-medium"
                      >
                        {cat.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div
                onClick={() => handleNav('/collections')}
                className="flex items-center gap-3 p-2.5 rounded-xl text-xs font-bold text-[#071D49] hover:bg-[#F7F9FC] cursor-pointer"
              >
                <ShoppingBag className="h-4 w-4 text-[#009BFF]" />
                <span>Collections</span>
              </div>

              <div
                onClick={() => handleNav('/offers')}
                className="flex items-center gap-3 p-2.5 rounded-xl text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 cursor-pointer"
              >
                <Flame className="h-4 w-4 text-amber-500 fill-amber-500" />
                <span>Special Offers & Deals</span>
              </div>

              <div
                onClick={() => handleNav('/blog')}
                className="flex items-center gap-3 p-2.5 rounded-xl text-xs font-bold text-[#071D49] hover:bg-[#F7F9FC] cursor-pointer"
              >
                <Sparkles className="h-4 w-4 text-[#0057D9]" />
                <span>Fresh Stories Blog</span>
              </div>

              {/* Pages Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setPagesExpanded((prev) => !prev)}
                  className="flex w-full items-center justify-between p-2.5 rounded-xl text-xs font-bold text-[#071D49] hover:bg-[#F7F9FC] cursor-pointer"
                >
                  <span>Company & Policies</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      pagesExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {pagesExpanded && (
                  <div className="pl-4 py-1 space-y-1 text-xs text-slate-600">
                    <div onClick={() => handleNav('/about')} className="py-1 hover:text-[#0057D9] cursor-pointer">About Nuvamilo</div>
                    <div onClick={() => handleNav('/faq')} className="py-1 hover:text-[#0057D9] cursor-pointer">Frequently Asked Questions</div>
                    <div onClick={() => handleNav('/shipping-policy')} className="py-1 hover:text-[#0057D9] cursor-pointer">Shipping & Delivery</div>
                    <div onClick={() => handleNav('/refund-policy')} className="py-1 hover:text-[#0057D9] cursor-pointer">Refund Policy</div>
                    <div onClick={() => handleNav('/privacy-policy')} className="py-1 hover:text-[#0057D9] cursor-pointer">Privacy Policy</div>
                    <div onClick={() => handleNav('/terms')} className="py-1 hover:text-[#0057D9] cursor-pointer">Terms of Service</div>
                  </div>
                )}
              </div>

              <div
                onClick={() => handleNav('/account')}
                className="flex items-center gap-3 p-2.5 rounded-xl text-xs font-bold text-[#071D49] hover:bg-[#F7F9FC] cursor-pointer"
              >
                <User className="h-4 w-4 text-[#0057D9]" />
                <span>My Account & Orders</span>
              </div>

              <div
                onClick={() => handleNav('/contact')}
                className="flex items-center gap-3 p-2.5 rounded-xl text-xs font-bold text-[#071D49] hover:bg-[#F7F9FC] cursor-pointer"
              >
                <Phone className="h-4 w-4 text-[#0057D9]" />
                <span>Contact Customer Support</span>
              </div>
            </div>

            {/* Footer Contact Info */}
            <div className="p-5 border-t border-slate-100 bg-[#F7F9FC] space-y-2 text-xs text-slate-600">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-slate-700 font-semibold">
                <Phone className="h-3.5 w-3.5 text-[#0057D9]" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:support@nuvamilo.in" className="flex items-center gap-2 text-slate-700 font-semibold">
                <Mail className="h-3.5 w-3.5 text-[#0057D9]" />
                <span>support@nuvamilo.in</span>
              </a>
              <p className="text-[10px] text-slate-400 mt-2">
                NUVAMILO Everyday Shopping Reimagined · Ahmedabad, India
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
