/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import {
  getPageFromPath,
  PAGE_ROUTES,
  PAGE_TITLES,
  PageId,
} from './types/navigation';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EASE_PREMIUM } from './components/MotionPrimitives';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { CustomersPage } from './pages/CustomersPage';
import { BusinessesPage } from './pages/BusinessesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { PartnerPage } from './pages/PartnerPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() =>
    typeof window !== 'undefined' ? getPageFromPath(window.location.pathname) : 'home'
  );

  useEffect(() => {
    document.title = PAGE_TITLES[currentPage];
  }, [currentPage]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (page: PageId) => {
    const targetRoute = PAGE_ROUTES[page];
    if (window.location.pathname !== targetRoute) {
      window.history.pushState({ page }, '', targetRoute);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'about':
        return <AboutPage onNavigate={navigate} />;
      case 'how-it-works':
        return <HowItWorksPage onNavigate={navigate} />;
      case 'categories':
        return <CategoriesPage onNavigate={navigate} />;
      case 'customers':
        return <CustomersPage onNavigate={navigate} />;
      case 'businesses':
        return <BusinessesPage onNavigate={navigate} />;
      case 'solutions':
        return <SolutionsPage onNavigate={navigate} />;
      case 'partner':
        return <PartnerPage onNavigate={navigate} />;
      case 'contact':
        return <ContactPage onNavigate={navigate} />;
      case 'faq':
        return <FaqPage onNavigate={navigate} />;
      case 'privacy':
        return <LegalPage mode="privacy" onNavigate={navigate} />;
      case 'terms':
        return <LegalPage mode="terms" onNavigate={navigate} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-white text-[#071C44]">
        <Navbar currentPage={currentPage} onNavigate={navigate} />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.26, ease: EASE_PREMIUM }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer onNavigate={navigate} />
      </div>
    </MotionConfig>
  );
}
