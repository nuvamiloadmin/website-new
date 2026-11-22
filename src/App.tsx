/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import {
  parseRoute,
  PAGE_ROUTES,
  PAGE_TITLES,
  PageId,
  RouteParams,
} from './types/navigation';
import { Product } from './types/commerce';

// Context Providers
import { NotificationProvider } from './context/NotificationContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

// Layout & UI Components
import { TopAnnouncementBar } from './components/layout/TopAnnouncementBar';
import { MainHeader } from './components/layout/MainHeader';
import { NavigationBar } from './components/layout/NavigationBar';
import { MobileMenu } from './components/layout/MobileMenu';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { SpecialOfferPopup } from './components/ui/SpecialOfferPopup';
import { ProductQuickViewModal } from './components/product/ProductQuickViewModal';
import { CartDrawer } from './components/cart/CartDrawer';
import { WishlistDrawer } from './components/cart/WishlistDrawer';
import { EASE_PREMIUM } from './components/MotionPrimitives';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { WishlistPage } from './pages/WishlistPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { OffersPage } from './pages/OffersPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AccountPage } from './pages/AccountPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { LegalPage } from './pages/LegalPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { CustomersPage } from './pages/CustomersPage';
import { BusinessesPage } from './pages/BusinessesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { PartnerPage } from './pages/PartnerPage';

function AppContent() {
  const [routeState, setRouteState] = useState<{ page: PageId; params: RouteParams }>(() =>
    typeof window !== 'undefined' ? parseRoute(window.location.pathname) : { page: 'home', params: {} }
  );

  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { page, params } = routeState;

  useEffect(() => {
    document.title = PAGE_TITLES[page] || 'NUVAMILO — Fresh Groceries';
  }, [page]);

  useEffect(() => {
    const handlePopState = () => {
      setRouteState(parseRoute(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (targetPage: PageId, targetParams: RouteParams = {}) => {
    let targetRoute = PAGE_ROUTES[targetPage] || '/';
    if (targetPage === 'category' && targetParams.slug) {
      targetRoute = `/category/${targetParams.slug}`;
    } else if (targetPage === 'product' && targetParams.slug) {
      targetRoute = `/product/${targetParams.slug}`;
    } else if (targetPage === 'blog-post' && targetParams.slug) {
      targetRoute = `/blog/${targetParams.slug}`;
    } else if (targetPage === 'order-detail' && targetParams.id) {
      targetRoute = `/account/orders/${targetParams.id}`;
    }

    if (window.location.pathname !== targetRoute) {
      window.history.pushState({ page: targetPage, params: targetParams }, '', targetRoute);
    }
    setRouteState({ page: targetPage, params: targetParams });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStringRoute = (route: string) => {
    const parsed = parseRoute(route);
    navigate(parsed.page, parsed.params);
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <HomePage
            onNavigate={(p) => navigate(p)}
            onQuickView={(p) => setQuickViewProduct(p)}
            onNavigateCategory={(slug) => navigate('category', { slug })}
            onNavigateProduct={(slug) => navigate('product', { slug })}
            onNavigateBlog={(slug) => (slug ? navigate('blog-post', { slug }) : navigate('blog'))}
          />
        );
      case 'shop':
        return (
          <ShopPage
            onNavigate={(p) => navigate(p)}
            onQuickView={(p) => setQuickViewProduct(p)}
            onNavigateProduct={(slug) => navigate('product', { slug })}
          />
        );
      case 'category':
        return (
          <ShopPage
            initialCategory={params.slug}
            onNavigate={(p) => navigate(p)}
            onQuickView={(p) => setQuickViewProduct(p)}
            onNavigateProduct={(slug) => navigate('product', { slug })}
          />
        );
      case 'product':
        return (
          <ProductDetailPage
            slug={params.slug}
            onNavigate={(p) => navigate(p)}
            onQuickView={(p) => setQuickViewProduct(p)}
            onNavigateProduct={(slug) => navigate('product', { slug })}
          />
        );
      case 'cart':
        return <CartPage onNavigate={(p) => navigate(p)} />;
      case 'checkout':
        return <CheckoutPage onNavigate={(p) => navigate(p)} />;
      case 'wishlist':
        return (
          <WishlistPage
            onNavigate={(p) => navigate(p)}
            onQuickView={(p) => setQuickViewProduct(p)}
            onNavigateProduct={(slug) => navigate('product', { slug })}
          />
        );
      case 'collections':
        return (
          <CollectionsPage
            onNavigate={(p) => navigate(p)}
            onSelectCategory={(slug) => navigate('category', { slug })}
          />
        );
      case 'offers':
        return (
          <OffersPage
            onNavigate={(p) => navigate(p)}
            onNavigateCategory={(slug) => navigate('category', { slug })}
          />
        );
      case 'blog':
        return (
          <BlogPage
            onNavigate={(p) => navigate(p)}
            onNavigatePost={(slug) => navigate('blog-post', { slug })}
          />
        );
      case 'blog-post':
        return (
          <BlogPostPage
            slug={params.slug}
            onNavigate={(p) => navigate(p)}
            onNavigateBlog={(slug) => (slug ? navigate('blog-post', { slug }) : navigate('blog'))}
          />
        );
      case 'account':
        return <AccountPage onNavigate={(p) => navigate(p)} initialTab="profile" />;
      case 'orders':
      case 'order-detail':
        return <AccountPage onNavigate={(p) => navigate(p)} initialTab="orders" />;
      case 'addresses':
        return <AccountPage onNavigate={(p) => navigate(p)} initialTab="addresses" />;
      case 'about':
        return <AboutPage onNavigate={(p) => navigate(p)} />;
      case 'contact':
        return <ContactPage onNavigate={(p) => navigate(p)} />;
      case 'faq':
        return <FaqPage onNavigate={(p) => navigate(p)} />;
      case 'shipping-policy':
        return <LegalPage mode="shipping" onNavigate={(p) => navigate(p)} />;
      case 'refund-policy':
        return <LegalPage mode="refund" onNavigate={(p) => navigate(p)} />;
      case 'privacy-policy':
        return <LegalPage mode="privacy" onNavigate={(p) => navigate(p)} />;
      case 'terms':
        return <LegalPage mode="terms" onNavigate={(p) => navigate(p)} />;
      case 'how-it-works':
        return <HowItWorksPage onNavigate={(p) => navigate(p)} />;
      case 'categories':
        return <CategoriesPage onNavigate={(p) => navigate(p)} />;
      case 'customers':
        return <CustomersPage onNavigate={(p) => navigate(p)} />;
      case 'businesses':
        return <BusinessesPage onNavigate={(p) => navigate(p)} />;
      case 'solutions':
        return <SolutionsPage onNavigate={(p) => navigate(p)} />;
      case 'partner':
        return <PartnerPage onNavigate={(p) => navigate(p)} />;
      default:
        return (
          <HomePage
            onNavigate={(p) => navigate(p)}
            onQuickView={(p) => setQuickViewProduct(p)}
            onNavigateCategory={(slug) => navigate('category', { slug })}
            onNavigateProduct={(slug) => navigate('product', { slug })}
            onNavigateBlog={(slug) => (slug ? navigate('blog-post', { slug }) : navigate('blog'))}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#071D49] selection:bg-[#20E78A]/30">
      {/* Custom Cursor for desktop */}
      <CustomCursor />

      {/* Special Offer First Visit Popup */}
      <SpecialOfferPopup />

      {/* Header Stack */}
      <header className="sticky top-0 z-40 bg-white shadow-xs">
        <TopAnnouncementBar />
        <MainHeader
          onNavigate={handleStringRoute}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          onProductClick={(slug) => navigate('product', { slug })}
        />
        <NavigationBar
          currentPath={typeof window !== 'undefined' ? window.location.pathname : '/'}
          onNavigate={handleStringRoute}
        />
      </header>

      {/* Mobile Slide-in Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={handleStringRoute}
      />

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Slide-out Drawers */}
      <CartDrawer
        onNavigateCheckout={() => navigate('checkout')}
        onNavigateShop={() => navigate('shop')}
      />
      <WishlistDrawer onNavigateShop={() => navigate('shop')} />

      {/* Main View Area */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={page + (params.slug || params.id || '')}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: EASE_PREMIUM }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer onNavigate={(p) => navigate(p)} />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <NotificationProvider>
        <CartProvider>
          <WishlistProvider>
            <AppContent />
          </WishlistProvider>
        </CartProvider>
      </NotificationProvider>
    </MotionConfig>
  );
}
