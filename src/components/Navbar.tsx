import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { PageId } from '../types/navigation';
import { BrandLogo } from './BrandLogo';
import { EASE_PREMIUM } from './MotionPrimitives';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const DESKTOP_NAV: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'categories', label: 'Categories' },
  { id: 'businesses', label: 'For Businesses' },
  { id: 'contact', label: 'Contact' },
];

const MOBILE_DRAWER_LINKS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'categories', label: 'Categories' },
  { id: 'customers', label: 'For Customers' },
  { id: 'businesses', label: 'For Businesses' },
  { id: 'solutions', label: 'Commerce Solutions' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact Us' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (page: PageId) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#071C44]/10 shadow-[0_8px_30px_-18px_rgba(7,28,68,0.18)]'
          : 'bg-white/90 backdrop-blur-sm border-b border-[#071C44]/6'
      }`}
    >
      <div className="mx-auto flex h-[70px] sm:h-[78px] lg:h-[84px] max-w-[1440px] items-center justify-between gap-3 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-10">
        {/* Zone 1: Original Brand Logo */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.18, ease: EASE_PREMIUM }}
          onClick={() => handleLinkClick('home')}
          aria-label="NUVAMILO Home"
          className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#075BE8] rounded-lg cursor-pointer"
        >
          <BrandLogo variant="light" />
        </motion.button>

        {/* Zone 2: Concise Single-Line Nav Links with Sliding Active Indicator */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-5 xl:gap-8"
        >
          {DESKTOP_NAV.map((item) => {
            const active = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleLinkClick(item.id)}
                className={`group relative py-2 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer ${
                  active
                    ? 'text-[#075BE8]'
                    : 'text-[#071C44]/80 hover:text-[#071C44]'
                }`}
              >
                {item.label}
                {active ? (
                  <motion.span
                    layoutId="nav-active-underline"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[2px] rounded-full nuva-gradient-bar"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-[#071C44]/25 scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <motion.button
            type="button"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.16, ease: EASE_PREMIUM }}
            onClick={() => handleLinkClick('partner')}
            className="group hidden sm:inline-flex items-center gap-2 rounded-xl bg-[#071C44] px-4 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#075BE8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#075BE8] cursor-pointer"
          >
            <span>Partner With Us</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#071C44]/12 text-[#071C44] lg:hidden hover:bg-[#F5F8FC] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Scroll Progress Scroller Bar */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX, transformOrigin: '0% 50%' }}
        className="h-[2px] w-full nuva-gradient-bar opacity-90"
      />

      {/* Animated Mobile & Tablet Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: EASE_PREMIUM }}
            className="lg:hidden overflow-hidden border-t border-[#071C44]/10 bg-white shadow-xl"
          >
            <div className="px-4 sm:px-6 pb-6 pt-4 max-h-[calc(100dvh-72px)] overflow-y-auto">
              <nav aria-label="Mobile navigation" className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {MOBILE_DRAWER_LINKS.map((item) => {
                  const active = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleLinkClick(item.id)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors cursor-pointer ${
                        active
                          ? 'bg-[#F5F8FC] text-[#075BE8]'
                          : 'text-[#071C44] hover:bg-[#F5F8FC]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {active && (
                        <span className="h-1.5 w-6 rounded-full nuva-gradient-bar" aria-hidden="true" />
                      )}
                    </button>
                  );
                })}
              </nav>

              <div className="mt-4 pt-4 border-t border-[#071C44]/10">
                <button
                  type="button"
                  onClick={() => handleLinkClick('partner')}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#071C44] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#075BE8] transition-colors cursor-pointer"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
