import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Download,
  Mail,
  ShoppingBag,
  Smartphone,
  Store,
  Truck,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { PageId } from '../types/navigation';
import { BrandLogo } from './BrandLogo';
import { EASE_PREMIUM, RevealBlock } from './MotionPrimitives';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

type StorePlatform = 'google-play' | 'app-store';

interface AppOption {
  id: 'customer' | 'delivery' | 'shop';
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  apkFileName: string;
  downloadUrl: string;
  version: string;
}

const NUVAMILO_APPS: AppOption[] = [
  {
    id: 'customer',
    title: 'Nuvamilo Customer',
    subtitle: 'Hyperlocal Shopping & Fresh Choice',
    badge: 'For Shoppers',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    description:
      'Shop groceries, fresh fruits, vegetables, and daily essentials from verified neighborhood stores with real-time tracking.',
    icon: ShoppingBag,
    accent: '#00C8EF',
    apkFileName: 'nuvamilo.apk',
    downloadUrl: '/downloads/nuvamilo.apk',
    version: 'v1.0.4',
  },
  {
    id: 'shop',
    title: 'Nuvamilo Shop',
    subtitle: 'Merchant Catalogue & Order Dispatch',
    badge: 'For Merchants',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description:
      'Complete seller workspace: manage live inventory, orders, fresh produce substitution proposals, and delivery assignments.',
    icon: Store,
    accent: '#075BE8',
    apkFileName: 'nuvamilo-shop.apk',
    downloadUrl: '/downloads/nuvamilo-shop.apk',
    version: 'v1.0.4',
  },
  {
    id: 'delivery',
    title: 'Nuvamilo Delivery',
    subtitle: 'Rider Fleet & Route Navigation',
    badge: 'For Delivery Riders',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    description:
      'Rider mobile operations: accept order dispatches, live turn-by-turn navigation, cash-on-delivery tracking, and counter returns.',
    icon: Truck,
    accent: '#2DEB80',
    apkFileName: 'nuvamilo-delivery.apk',
    downloadUrl: '/downloads/nuvamilo-delivery.apk',
    version: 'v1.0.4',
  },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeError, setSubscribeError] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);

  const [activeStoreModal, setActiveStoreModal] = useState<StorePlatform | null>(null);
  const [selectedAppId, setSelectedAppId] = useState<AppOption['id'] | null>(null);

  useEffect(() => {
    if (!activeStoreModal) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveStoreModal(null);
        setSelectedAppId(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeStoreModal]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subscribeEmail.trim())) {
      setSubscribeError('Please enter a valid email address.');
      return;
    }
    setSubscribeError(null);
    setSubscribed(true);
    setSubscribeEmail('');
  };

  const openStoreModal = (platform: StorePlatform) => {
    setSelectedAppId(null);
    setActiveStoreModal(platform);
  };

  const linkClass =
    'group inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors duration-200 text-left cursor-pointer';

  return (
    <>
      <footer className="relative overflow-hidden bg-[#051433] text-white border-t border-white/10">
        {/* Subtle Ambient Brand Lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-44 right-0 h-[520px] w-[520px] rounded-full bg-[#075BE8]/18 blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-0 h-[420px] w-[420px] rounded-full bg-[#00C8EF]/10 blur-[130px]"
        />

        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10 pt-14 pb-10 lg:pt-20 lg:pb-12">
          {/* Top Architectural Footer Banner */}
          <RevealBlock className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-12 border-b border-white/12">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 rounded-full nuva-gradient-bar" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#00C8EF]">
                  NUVAMILO Commerce Ecosystem
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.15]">
                Thoughtful everyday shopping, connected directly to local retail.
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.16, ease: EASE_PREMIUM }}
                onClick={() => onNavigate('partner')}
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#071C44] hover:bg-[#00C8EF] transition-colors cursor-pointer"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.16, ease: EASE_PREMIUM }}
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white hover:border-white/45 hover:bg-white/[0.08] transition-colors cursor-pointer"
              >
                <span>Contact Us</span>
              </motion.button>
            </div>
          </RevealBlock>

          {/* Main Footer Grid */}
          <RevealBlock
            delay={0.05}
            className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 py-14 border-b border-white/12"
          >
            {/* Left Column: Brand Lockup, App Downloads, Support Card & Updates Input */}
            <div className="lg:col-span-5 space-y-6">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18, ease: EASE_PREMIUM }}
                onClick={() => onNavigate('home')}
                aria-label="Return to NUVAMILO homepage"
                className="inline-block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00C8EF] rounded-xl"
              >
                <BrandLogo variant="dark" />
              </motion.button>

              <p className="max-w-md text-[15px] leading-relaxed text-white/72">
                NUVAMILO unites clean everyday product discovery for households with a
                modern digital storefront foundation for independent local stores.
              </p>

              {/* App Store & Google Play Buttons */}
              <div className="space-y-2.5 max-w-md">
                <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                  Download NUVAMILO Apps
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Google Play Button */}
                  <motion.button
                    type="button"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.16, ease: EASE_PREMIUM }}
                    onClick={() => openStoreModal('google-play')}
                    className="flex items-center gap-3 rounded-xl border border-white/18 bg-white/[0.06] px-4 py-2.5 text-left hover:bg-white/[0.12] hover:border-[#00C8EF]/60 transition-colors cursor-pointer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        fill="#00C8EF"
                        d="M3.6 2.2C3.2 2.6 3 3.2 3 4v16c0 .8.2 1.4.6 1.8l.1.1 9-9v-.2l-9-9-.1.1z"
                      />
                      <path
                        fill="#2DEB80"
                        d="M15.7 15.1l-3-3v-.2l3-3 .1.1 3.5 2c1 .6 1 1.5 0 2.1l-3.5 2-.1 0z"
                      />
                      <path
                        fill="#075BE8"
                        d="M15.8 15l-3.1-3.1-9 9c.3.4.9.4 1.6 0l10.5-5.9z"
                      />
                      <path
                        fill="#38BDF8"
                        d="M15.8 9L5.3 3.1c-.7-.4-1.3-.4-1.6 0l9 9 3.1-3.1z"
                      />
                    </svg>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/65 leading-none">
                        Get it on
                      </span>
                      <span className="mt-1 block font-display text-sm font-bold text-white leading-tight whitespace-nowrap">
                        Google Play
                      </span>
                    </div>
                  </motion.button>

                  {/* App Store Button */}
                  <motion.button
                    type="button"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.16, ease: EASE_PREMIUM }}
                    onClick={() => openStoreModal('app-store')}
                    className="flex items-center gap-3 rounded-xl border border-white/18 bg-white/[0.06] px-4 py-2.5 text-left hover:bg-white/[0.12] hover:border-[#00C8EF]/60 transition-colors cursor-pointer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 shrink-0 text-white"
                      aria-hidden="true"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.33c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.68-1.1 1.79-.96 2.84 1.04.08 2.08-.52 2.72-1.3" />
                    </svg>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/65 leading-none">
                        Download on the
                      </span>
                      <span className="mt-1 block font-display text-sm font-bold text-white leading-tight whitespace-nowrap">
                        App Store
                      </span>
                    </div>
                  </motion.button>
                </div>
              </div>

              {/* Support Contact Card */}
              <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 max-w-md">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#075BE8]/25 border border-[#00C8EF]/25 text-[#00C8EF]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-white/55">
                      Official Support Email
                    </p>
                    <a
                      href="mailto:support@nuvamilo.in"
                      className="text-sm sm:text-[15px] font-bold text-white hover:text-[#00C8EF] transition-colors break-all"
                    >
                      support@nuvamilo.in
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-semibold text-[#2DEB80] hover:text-white transition-colors self-start sm:self-center cursor-pointer whitespace-nowrap shrink-0"
                >
                  Write to Us →
                </button>
              </div>

              {/* Stay Updated Form */}
              <div className="max-w-md space-y-2.5 pt-1">
                <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                  Receive Brand & Launch Updates
                </p>
                {subscribed ? (
                  <div className="flex items-center gap-2.5 rounded-xl border border-[#2DEB80]/30 bg-[#2DEB80]/10 px-4 py-3 text-sm text-[#2DEB80]">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Thank you — you are subscribed for NUVAMILO updates.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-2" noValidate>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        value={subscribeEmail}
                        onChange={(e) => setSubscribeEmail(e.target.value)}
                        placeholder="Enter your email address"
                        aria-label="Email address for NUVAMILO updates"
                        className="flex-1 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-white placeholder:text-white/45 focus:border-[#00C8EF] focus:bg-white/[0.1] focus:outline-none transition-colors"
                      />
                      <motion.button
                        type="submit"
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#075BE8] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#00C8EF] hover:text-[#071C44] transition-colors whitespace-nowrap cursor-pointer"
                      >
                        <span>Notify Me</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </motion.button>
                    </div>
                    {subscribeError && (
                      <p className="text-xs text-red-300">{subscribeError}</p>
                    )}
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: 4 Structured Navigation Groups */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-8 sm:gap-8 lg:gap-6">
              <div className="space-y-4">
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white/95 pb-2 border-b border-white/10">
                  Platform
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button type="button" onClick={() => onNavigate('home')} className={linkClass}>
                      <span>Home</span>
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={() => onNavigate('about')} className={linkClass}>
                      <span>About Us</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('how-it-works')}
                      className={linkClass}
                    >
                      <span>How It Works</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('categories')}
                      className={linkClass}
                    >
                      <span>Categories</span>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white/95 pb-2 border-b border-white/10">
                  Ecosystem
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('customers')}
                      className={linkClass}
                    >
                      <span>For Customers</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('businesses')}
                      className={linkClass}
                    >
                      <span>For Businesses</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('solutions')}
                      className={linkClass}
                    >
                      <span>Commerce Solutions</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('partner')}
                      className={linkClass}
                    >
                      <span>Partner With Us</span>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white/95 pb-2 border-b border-white/10">
                  Categories
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('categories')}
                      className={linkClass}
                    >
                      <span>Groceries</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('categories')}
                      className={linkClass}
                    >
                      <span>Fresh Vegetables</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('categories')}
                      className={linkClass}
                    >
                      <span>Fresh Fruits</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('categories')}
                      className={linkClass}
                    >
                      <span>Daily Essentials</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('categories')}
                      className={linkClass}
                    >
                      <span>Household Products</span>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white/95 pb-2 border-b border-white/10">
                  Support & Legal
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button type="button" onClick={() => onNavigate('faq')} className={linkClass}>
                      <span>FAQ</span>
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={() => onNavigate('contact')} className={linkClass}>
                      <span>Contact Us</span>
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={() => onNavigate('privacy')} className={linkClass}>
                      <span>Privacy Policy</span>
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={() => onNavigate('terms')} className={linkClass}>
                      <span>Terms & Conditions</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </RevealBlock>

          {/* Bottom Legal & Brand Row */}
          <RevealBlock delay={0.05} distance={12}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-white/55">
              <p>© {new Date().getFullYear()} NUVAMILO. All rights reserved.</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                <span>
                  Groceries · Fresh Vegetables · Fresh Fruits · Daily Essentials · Household Products
                </span>
              </div>
            </div>
          </RevealBlock>
        </div>
      </footer>

      {/* App Store / Google Play Selection Popup Modal */}
      <AnimatePresence>
        {activeStoreModal && (
          <motion.div
            key="app-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              setActiveStoreModal(null);
              setSelectedAppId(null);
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#051433]/75 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="nuvamilo-app-modal-title"
          >
            <motion.div
              key="app-modal-panel"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.26, ease: EASE_PREMIUM }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg max-h-[90dvh] overflow-y-auto rounded-3xl bg-white text-[#071C44] border border-[#071C44]/12 p-5 sm:p-8 shadow-[0_32px_90px_-20px_rgba(7,28,68,0.45)]"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#071C44]/10">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#075BE8]">
                    {activeStoreModal === 'google-play' ? 'Google Play' : 'App Store'}
                  </span>
                  <h3
                    id="nuvamilo-app-modal-title"
                    className="font-display text-2xl font-bold text-[#071C44]"
                  >
                    Choose a NUVAMILO App
                  </h3>
                  <p className="text-sm text-[#071C44]/70">
                    Select the application tailored for your role in the NUVAMILO ecosystem.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveStoreModal(null);
                    setSelectedAppId(null);
                  }}
                  aria-label="Close app selection popup"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#071C44]/12 text-[#071C44] hover:bg-[#F5F8FC] transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* 3 App Choices */}
              <div className="mt-5 space-y-3">
                {NUVAMILO_APPS.map((app) => {
                  const Icon = app.icon;
                  const isSelected = selectedAppId === app.id;
                  return (
                    <motion.div
                      key={app.id}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.16, ease: EASE_PREMIUM }}
                      onClick={() => setSelectedAppId(app.id)}
                      className={`w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border p-4 text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#075BE8] bg-[#F5F8FC] shadow-sm'
                          : 'border-[#071C44]/10 bg-white hover:border-[#075BE8]/50 hover:bg-[#F5F8FC]/60'
                      }`}
                    >
                      <div className="flex items-start gap-3.5 min-w-0 flex-1">
                        <div
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-sm"
                          style={{ backgroundColor: '#071C44' }}
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-display text-base font-bold text-[#071C44]">
                              {app.title}
                            </span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${app.badgeColor}`}>
                              {app.badge}
                            </span>
                            <span className="text-[10px] text-[#071C44]/50 font-mono">
                              {app.version}
                            </span>
                          </div>
                          <p className="text-xs font-semibold text-[#075BE8] mt-0.5">
                            {app.subtitle}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-[#071C44]/70">
                            {app.description}
                          </p>
                        </div>
                      </div>

                      {/* Download APK Button for Google Play / Direct Android */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#071C44]/8 shrink-0">
                        <a
                          href={app.downloadUrl}
                          download={app.apkFileName}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#075BE8] hover:bg-[#064bc2] text-white transition-all shadow-sm hover:shadow group cursor-pointer"
                        >
                          <Download className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
                          <span>Download APK</span>
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Selection Feedback Footer */}
              <AnimatePresence>
                {selectedAppId && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2, ease: EASE_PREMIUM }}
                    className="mt-5 rounded-2xl bg-[#071C44] text-white p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-md"
                  >
                    {(() => {
                      const selected = NUVAMILO_APPS.find((a) => a.id === selectedAppId);
                      if (!selected) return null;
                      return (
                        <>
                          <div className="flex items-start gap-2.5">
                            <Check className="h-4 w-4 text-[#2DEB80] shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs sm:text-sm font-semibold text-white">
                                {selected.title} ({selected.version})
                              </p>
                              <p className="text-[11px] text-white/70">
                                Standalone Android APK package ready for installation.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <a
                              href={selected.downloadUrl}
                              download={selected.apkFileName}
                              className="shrink-0 rounded-xl bg-[#2DEB80] hover:bg-[#25c86c] text-[#071C44] px-4 py-2 text-xs font-extrabold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                            >
                              <Download className="h-3.5 w-3.5" />
                              <span>Download APK</span>
                            </a>
                          </div>
                        </>
                      );
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Modal Bottom Banner Link to Download Hub */}
              <div className="mt-5 pt-4 border-t border-[#071C44]/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#071C44]/70">
                <span className="flex items-center gap-1.5">
                  <Smartphone className="h-3.5 w-3.5 text-[#075BE8]" />
                  <span>Looking for all APK packages in one place?</span>
                </span>
                <a
                  href="/download"
                  className="font-bold text-[#075BE8] hover:text-[#064bc2] hover:underline inline-flex items-center gap-1"
                >
                  Open Full Download Hub <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
