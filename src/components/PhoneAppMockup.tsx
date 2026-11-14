import React, { useId, useState } from 'react';
import { Check, ChevronRight, Minus, Plus, Search, ShoppingBag, Wifi } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { BRAND_ASSETS } from '../data/nuvamiloData';
import { EASE_PREMIUM } from './MotionPrimitives';

type AppCategoryTab = 'Vegetables' | 'Fruits' | 'Groceries' | 'Essentials';

interface SampleShelfItem {
  id: string;
  name: string;
  detail: string;
  category: AppCategoryTab;
  accent: string;
}

const APP_ITEMS: SampleShelfItem[] = [
  {
    id: 'kale',
    name: 'Organic Tuscan Kale',
    detail: 'Fresh Harvest · Bunch',
    category: 'Vegetables',
    accent: '#2DEB80',
  },
  {
    id: 'tomatoes',
    name: 'Vine Heirloom Tomatoes',
    detail: 'Selected Produce · 500 g',
    category: 'Vegetables',
    accent: '#2DEB80',
  },
  {
    id: 'citrus',
    name: 'Blood Oranges',
    detail: 'Seasonal Citrus · 1 kg',
    category: 'Fruits',
    accent: '#00C8EF',
  },
  {
    id: 'berries',
    name: 'Sweet Strawberries',
    detail: 'Morning Pick · Punnet',
    category: 'Fruits',
    accent: '#00C8EF',
  },
  {
    id: 'basmati',
    name: 'Farm Eggs & Dairy Milk',
    detail: 'Daily Staples · Pack',
    category: 'Groceries',
    accent: '#075BE8',
  },
  {
    id: 'lentils',
    name: 'Artisan Pasta & Olive Oil',
    detail: 'Pantry Selection · 500 g',
    category: 'Groceries',
    accent: '#075BE8',
  },
  {
    id: 'hand-wash',
    name: 'Botanical Hand Wash',
    detail: 'Refill Bottle · 400 ml',
    category: 'Essentials',
    accent: '#071C44',
  },
  {
    id: 'cotton-towels',
    name: 'Combed Cotton Towels',
    detail: 'Home Care · Set of 3',
    category: 'Essentials',
    accent: '#071C44',
  },
];

interface PhoneAppMockupProps {
  compact?: boolean;
  initialTab?: AppCategoryTab;
}

export const PhoneAppMockup: React.FC<PhoneAppMockupProps> = ({
  compact = false,
  initialTab = 'Vegetables',
}) => {
  const uid = useId();
  const [activeTab, setActiveTab] = useState<AppCategoryTab>(initialTab);
  const [basketCounts, setBasketCounts] = useState<Record<string, number>>({
    kale: 1,
    citrus: 1,
    basmati: 1,
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const visibleItems = APP_ITEMS.filter((item) => item.category === activeTab);
  const totalItems = Object.values(basketCounts).reduce((sum, count) => sum + count, 0);

  const updateCount = (id: string, delta: number) => {
    setOrderConfirmed(false);
    setBasketCounts((prev) => {
      const next = Math.max(0, (prev[id] ?? 0) + delta);
      return { ...prev, [id]: next };
    });
  };

  const bannerImage =
    activeTab === 'Vegetables' || activeTab === 'Fruits'
      ? BRAND_ASSETS.freshProduce
      : activeTab === 'Groceries'
        ? BRAND_ASSETS.groceriesProper
        : BRAND_ASSETS.groceriesEssentials;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: EASE_PREMIUM }}
      className={`relative mx-auto w-full ${
        compact
          ? 'max-w-[280px] min-[360px]:max-w-[304px] sm:max-w-[328px]'
          : 'max-w-[284px] min-[360px]:max-w-[320px] sm:max-w-[356px]'
      }`}
    >
      {/* Realistic iPhone Side Hardware Buttons */}
      <div
        aria-hidden="true"
        className="absolute -left-[3px] top-[96px] h-7 w-[3px] rounded-l-sm bg-gradient-to-b from-[#6C778D] to-[#2B3447]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-[3px] top-[140px] h-12 w-[3px] rounded-l-sm bg-gradient-to-b from-[#6C778D] to-[#2B3447]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-[3px] top-[198px] h-12 w-[3px] rounded-l-sm bg-gradient-to-b from-[#6C778D] to-[#2B3447]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-[3px] top-[156px] h-16 w-[3px] rounded-r-sm bg-gradient-to-b from-[#6C778D] to-[#2B3447]"
      />

      {/* Titanium Metallic Outer Shell */}
      <div className="rounded-[52px] bg-gradient-to-b from-[#556075] via-[#262F42] to-[#11192B] p-[3.5px] shadow-[0_36px_80px_-20px_rgba(7,28,68,0.42),0_12px_28px_-12px_rgba(7,28,68,0.22)]">
        {/* Inner Gloss Black iPhone Glass Bezel */}
        <div className="rounded-[48.5px] bg-[#0B0F17] p-[9px] ring-1 ring-white/10">
          {/* Screen Surface */}
          <div className="relative overflow-hidden rounded-[40px] bg-white">
            {/* iOS Status Bar + Dynamic Island */}
            <div className="flex items-center justify-between px-4 sm:px-6 pt-3 pb-2 bg-[#F5F8FC]">
              <span className="text-[11px] font-bold tracking-tight text-[#071C44] tabular-nums w-9 sm:w-10">
                9:41
              </span>

              {/* Dynamic Island */}
              <div
                aria-hidden="true"
                className="flex h-[22px] sm:h-[24px] w-[76px] sm:w-[94px] items-center justify-end rounded-full bg-black px-2 sm:px-2.5 shadow-inner ring-1 ring-white/5"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#13203A] ring-1 ring-[#075BE8]/40 flex items-center justify-center">
                  <span className="h-1 w-1 rounded-full bg-[#00C8EF]/65" />
                </span>
              </div>

              {/* iOS Signal, WiFi, Battery */}
              <div className="flex items-center justify-end gap-1 sm:gap-1.5 w-11 sm:w-12 text-[#071C44]">
                <div className="flex items-end gap-[1.5px] h-2.5" aria-hidden="true">
                  <span className="w-[2px] h-1 rounded-xs bg-[#071C44]" />
                  <span className="w-[2px] h-1.5 rounded-xs bg-[#071C44]" />
                  <span className="w-[2px] h-2 rounded-xs bg-[#071C44]" />
                  <span className="w-[2px] h-2.5 rounded-xs bg-[#071C44]" />
                </div>
                <Wifi className="h-3 w-3 stroke-[2.4]" aria-hidden="true" />
                <div
                  aria-hidden="true"
                  className="flex items-center rounded-[3px] border border-[#071C44]/70 p-[1px]"
                >
                  <span className="h-1.5 w-3 rounded-[1px] bg-[#071C44]" />
                </div>
              </div>
            </div>

            {/* App Header */}
            <div className="px-4 sm:px-5 pt-1.5 pb-3.5 bg-[#F5F8FC] border-b border-[#071C44]/6">
              <div className="flex items-center justify-between gap-2">
                <img
                  src={BRAND_ASSETS.logo}
                  alt="NUVAMILO app header logo"
                  referrerPolicy="no-referrer"
                  className="h-7 w-auto object-contain"
                />
                <span className="text-[11px] font-semibold text-[#075BE8] whitespace-nowrap">
                  Everyday Market
                </span>
              </div>

              {/* Search Bar */}
              <div className="mt-2.5 flex items-center gap-2 rounded-xl bg-white px-3 py-2 border border-[#071C44]/8 text-xs text-[#071C44]/50">
                <Search className="h-3.5 w-3.5 text-[#075BE8]" />
                <span className="truncate">Search produce, groceries, home...</span>
              </div>

              {/* Category Tabs with Sliding Motion Indicator */}
              <div
                className="mt-2.5 flex items-center gap-1 overflow-x-auto pb-0.5 no-scrollbar"
                role="tablist"
                aria-label="NUVAMILO app categories"
              >
                {(['Vegetables', 'Fruits', 'Groceries', 'Essentials'] as AppCategoryTab[]).map(
                  (tab) => {
                    const isActive = activeTab === tab;
                    return (
                      <button
                        key={tab}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveTab(tab)}
                        className={`relative px-2.5 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                          isActive
                            ? 'text-white'
                            : 'bg-white text-[#071C44]/70 hover:text-[#071C44]'
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId={`iphone-tab-pill-${uid}`}
                            transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                            className="absolute inset-0 rounded-lg bg-[#071C44]"
                            aria-hidden="true"
                          />
                        )}
                        <span className="relative z-10">{tab}</span>
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            {/* Shelf Content */}
            <div className="p-4 space-y-3 bg-white">
              <div className="relative overflow-hidden rounded-2xl border border-[#071C44]/8 bg-[#F5F8FC] h-28">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.28, ease: EASE_PREMIUM }}
                    className="relative h-full w-full"
                  >
                    <img
                      src={bannerImage}
                      alt={`${activeTab} showcase`}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071C44]/80 via-[#071C44]/20 to-transparent flex items-end p-3">
                      <div>
                        <p className="text-[10px] font-semibold text-[#2DEB80] tracking-wide">
                          Curated Local Selection
                        </p>
                        <p className="text-sm font-bold text-white leading-tight">
                          {activeTab === 'Vegetables' && 'Crisp Morning Harvest'}
                          {activeTab === 'Fruits' && 'Seasonal Orchard Picks'}
                          {activeTab === 'Groceries' && 'Everyday Pantry Staples'}
                          {activeTab === 'Essentials' && 'Home & Personal Care'}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Item Rows */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.22, ease: EASE_PREMIUM }}
                  className="space-y-2"
                >
                  {visibleItems.map((item) => {
                    const qty = basketCounts[item.id] ?? 0;
                    return (
                      <div
                        key={item.id}
                        className="flex items-center justify-between gap-2.5 rounded-2xl border border-[#071C44]/8 p-2.5 transition-all duration-200 hover:border-[#075BE8]/35 hover:bg-[#F5F8FC]/40"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span
                              className="h-2 w-2 rounded-full shrink-0"
                              style={{ backgroundColor: item.accent }}
                              aria-hidden="true"
                            />
                            <p className="truncate text-xs font-bold text-[#071C44]">{item.name}</p>
                          </div>
                          <p className="mt-0.5 text-[11px] text-[#071C44]/60 pl-4 truncate">
                            {item.detail}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          {qty > 0 ? (
                            <div className="flex items-center gap-1 rounded-xl bg-[#F5F8FC] p-1 border border-[#071C44]/10">
                              <button
                                type="button"
                                onClick={() => updateCount(item.id, -1)}
                                aria-label={`Remove ${item.name}`}
                                className="flex h-6 w-6 items-center justify-center rounded-lg bg-white text-[#071C44] hover:bg-[#071C44] hover:text-white active:scale-90 transition-all cursor-pointer"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-4 text-center text-xs font-bold text-[#071C44] tabular-nums">
                                {qty}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateCount(item.id, 1)}
                                aria-label={`Add ${item.name}`}
                                className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#075BE8] text-white hover:bg-[#071C44] active:scale-90 transition-all cursor-pointer"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => updateCount(item.id, 1)}
                              className="flex items-center gap-1 rounded-xl bg-[#F5F8FC] px-2.5 py-1.5 text-[11px] font-semibold text-[#075BE8] hover:bg-[#075BE8] hover:text-white active:scale-95 transition-all cursor-pointer"
                            >
                              <Plus className="h-3 w-3" />
                              <span>Add</span>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {/* Basket Bar */}
              <motion.button
                type="button"
                whileTap={{ scale: 0.98 }}
                onClick={() => setOrderConfirmed(true)}
                className="w-full flex items-center justify-between gap-2 rounded-2xl bg-[#071C44] px-3.5 sm:px-4 py-3 text-left text-white transition-colors duration-200 hover:bg-[#075BE8] cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    {orderConfirmed ? (
                      <Check className="h-4 w-4 text-[#2DEB80]" />
                    ) : (
                      <ShoppingBag className="h-4 w-4 text-[#00C8EF]" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold leading-tight truncate">
                      {orderConfirmed ? 'Basket Preview Ready' : 'Review Your Basket'}
                    </p>
                    <p className="text-[11px] text-white/70 tabular-nums truncate">
                      {totalItems} {totalItems === 1 ? 'item' : 'items'} · Paper Bag Packed
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-[#2DEB80] shrink-0">
                  <span>{orderConfirmed ? 'Confirmed' : 'Preview'}</span>
                  {!orderConfirmed && <ChevronRight className="h-3.5 w-3.5" />}
                </div>
              </motion.button>

              {/* iPhone Home Indicator */}
              <div className="pt-1 flex justify-center" aria-hidden="true">
                <div className="h-1 w-28 rounded-full bg-[#071C44]/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
