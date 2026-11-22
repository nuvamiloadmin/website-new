import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, Sparkles, ShoppingBag, ArrowRight, Tag, Clock } from 'lucide-react';

interface SpecialOfferPopupProps {
  onShopNow?: () => void;
}

export const SpecialOfferPopup: React.FC<SpecialOfferPopupProps> = ({ onShopNow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    try {
      const dismissed = sessionStorage.getItem('nuvamilo_offer_popup_dismissed');
      // Also do not show if on checkout
      if (window.location.pathname === '/checkout' || dismissed) {
        return;
      }

      // Delay popup by 2.5s for polite entry experience
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2500);

      return () => clearTimeout(timer);
    } catch {
      // sessionStorage unavailable
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem('nuvamilo_offer_popup_dismissed', 'true');
    } catch {
      // ignore
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard?.writeText('NUVAMILO50');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAction = () => {
    handleClose();
    onShopNow?.();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#051433]/70 backdrop-blur-sm cursor-pointer"
          />

          {/* Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative z-10 w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden border border-slate-100"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              aria-label="Close promotion dialog"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header Banner */}
            <div className="relative bg-gradient-to-br from-[#071D49] via-[#0057D9] to-[#009BFF] px-6 pt-8 pb-10 text-white overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-[#20E78A]/25 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-[#00C8F8]/20 blur-2xl pointer-events-none" />

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-[#20E78A] text-[11px] font-bold tracking-wider uppercase mb-3">
                <Sparkles className="h-3 w-3" />
                <span>Special First Order Welcome</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Get <span className="text-[#20E78A]">20% OFF</span> on Your Fresh Groceries
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed max-w-sm">
                Shop farm-fresh vegetables, dairy, cooking staples, and pantry favorites delivered in under 30 minutes!
              </p>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5 bg-white">
              {/* Coupon Box */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F7F9FC] border border-dashed border-[#009BFF]/40">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-xl bg-[#009BFF]/10 text-[#0057D9] flex items-center justify-center shrink-0">
                    <Tag className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Use Promo Code
                    </span>
                    <span className="font-display font-extrabold text-base tracking-wider text-[#071D49]">
                      NUVAMILO50
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-[#0057D9] text-xs font-bold text-[#071D49] hover:text-[#0057D9] shadow-sm transition-all cursor-pointer"
                >
                  {copied ? 'Copied! ✓' : 'Copy Code'}
                </button>
              </div>

              {/* Timing badge */}
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                <span>Valid on orders above ₹499 · Fresh Produce & Staples</span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleAction}
                  className="flex-1 py-3.5 px-5 rounded-2xl nuva-btn-gradient text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 cursor-pointer"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Shop Groceries Now</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="py-3.5 px-4 rounded-2xl border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-600 transition-colors cursor-pointer"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
