import React from 'react';
import { PageId } from '../types/navigation';
import { Product } from '../types/commerce';
import { HeroSection } from '../components/home/HeroSection';
import { PromoOfferCards } from '../components/home/PromoOfferCards';
import { CategoriesSection } from '../components/home/CategoriesSection';
import { FeaturedOfferBanner } from '../components/home/FeaturedOfferBanner';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { PromoBannerTwoCol } from '../components/home/PromoBannerTwoCol';
import { FreshStoriesSection } from '../components/home/FreshStoriesSection';
import { FlashSaleSection } from '../components/home/FlashSaleSection';
import { NewArrivalsSection } from '../components/home/NewArrivalsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { GroceryCombosSection } from '../components/home/GroceryCombosSection';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { BlogHighlightsSection } from '../components/home/BlogHighlightsSection';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onQuickView: (product: Product) => void;
  onNavigateCategory: (slug: string) => void;
  onNavigateProduct: (slug: string) => void;
  onNavigateBlog: (slug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onQuickView,
  onNavigateCategory,
  onNavigateProduct,
  onNavigateBlog,
}) => {
  return (
    <div className="bg-white">
      {/* SECTION 1: HERO */}
      <HeroSection
        onNavigateShop={() => onNavigate('shop')}
        onNavigateOffers={() => onNavigate('offers')}
      />

      {/* SECTION 2: PROMOTIONAL OFFER CARDS */}
      <PromoOfferCards
        onNavigateCategory={onNavigateCategory}
        onNavigateOffers={() => onNavigate('offers')}
      />

      {/* SECTION 3: SHOP BY CATEGORY */}
      <CategoriesSection onSelectCategory={onNavigateCategory} />

      {/* SECTION 4: FEATURED OFFER BANNER */}
      <FeaturedOfferBanner onNavigateShop={() => onNavigate('shop')} />

      {/* SECTION 5: FEATURED PRODUCTS */}
      <FeaturedProducts
        onQuickView={onQuickView}
        onNavigateProduct={onNavigateProduct}
        onNavigateShop={() => onNavigate('shop')}
      />

      {/* SECTION 6: PROMOTIONAL IMAGE CARDS (2-COL) */}
      <PromoBannerTwoCol
        onNavigateCategory={onNavigateCategory}
        onNavigateShop={() => onNavigate('shop')}
      />

      {/* SECTION 7: FRESH STORIES */}
      <FreshStoriesSection
        onNavigateAbout={() => onNavigate('about')}
        onNavigateShop={() => onNavigate('shop')}
      />

      {/* SECTION 8: FLASH SALE */}
      <FlashSaleSection
        onQuickView={onQuickView}
        onNavigateProduct={onNavigateProduct}
      />

      {/* SECTION 9: NEW ARRIVALS */}
      <NewArrivalsSection
        onQuickView={onQuickView}
        onNavigateProduct={onNavigateProduct}
        onNavigateShop={() => onNavigate('shop')}
      />

      {/* SECTION 10: CUSTOMER REVIEWS */}
      <TestimonialsSection />

      {/* SECTION 11: GROCERY COMBO DEALS */}
      <GroceryCombosSection onNavigateShop={() => onNavigate('shop')} />

      {/* SECTION 12: NEWSLETTER */}
      <NewsletterSection />

      {/* SECTION 13: LATEST BLOGS */}
      <BlogHighlightsSection
        onNavigateBlog={() => onNavigate('blog')}
        onNavigatePost={(slug) => onNavigateBlog(slug)}
      />
    </div>
  );
};
