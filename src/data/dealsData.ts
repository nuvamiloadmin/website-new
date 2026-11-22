import { Review, Coupon } from '../types/commerce';

export interface PromoCard {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  discountText: string;
  buttonText: string;
  targetCategory: string;
  image: string;
  bgGradient: string;
}

export const PROMO_OFFER_CARDS: PromoCard[] = [
  {
    id: 'promo-1',
    badge: 'DAILY ESSENTIALS',
    badgeColor: 'bg-[#20E78A] text-[#071D49]',
    title: 'Farm Fresh Harvest & Dairy',
    subtitle: 'Pure farm milk, crisp greens & seasonal fruits at doorstep.',
    discountText: 'UP TO 40% OFF',
    buttonText: 'Shop Essentials',
    targetCategory: 'dairy-eggs',
    image: '/assets/images/promotions/fresh-deals-image.png',
    bgGradient: 'from-[#071D49] to-[#0057D9]',
  },
  {
    id: 'promo-2',
    badge: 'SNACKS & SIPS',
    badgeColor: 'bg-[#00C8F8] text-[#071D49]',
    title: 'Crunchy Munchies & Beverages',
    subtitle: 'Roasted California almonds, green teas & refreshing sips.',
    discountText: 'FLAT 25% OFF',
    buttonText: 'Explore Snacks',
    targetCategory: 'snacks',
    image: '/assets/images/promotions/exclusive-deals-image.png',
    bgGradient: 'from-[#0057D9] to-[#009BFF]',
  },
  {
    id: 'promo-3',
    badge: 'COMBO PACK SAVINGS',
    badgeColor: 'bg-[#20E78A] text-[#071D49]',
    title: 'Monthly Kitchen Staples Box',
    subtitle: 'Aged Basmati, unpolished Toor Dal & pure cold-pressed oil.',
    discountText: 'SAVE EXTRA ₹250',
    buttonText: 'Claim Combo',
    targetCategory: 'rice-grains',
    image: '/assets/images/promotions/limited-offer-image.png',
    bgGradient: 'from-[#071D49] to-[#072d73]',
  },
];

export interface ComboDeal {
  id: string;
  title: string;
  badge: string;
  items: string[];
  originalPrice: number;
  dealPrice: number;
  savings: number;
  image: string;
  rating: number;
  reviews: number;
}

export const GROCERY_COMBOS: ComboDeal[] = [
  {
    id: 'combo-1',
    title: 'Weekly Super Kitchen Staple Box',
    badge: 'BESTSELLER COMBO',
    items: ['Daawat Basmati Rice 5kg', 'Tata Sampann Toor Dal 1kg', 'Fortune Sunflower Oil 1L', 'Everest Haldi 500g'],
    originalPrice: 895,
    dealPrice: 699,
    savings: 196,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 184,
  },
  {
    id: 'combo-2',
    title: 'Morning Healthy Breakfast Basket',
    badge: 'POPULAR CHOICE',
    items: ['Organic Brown Eggs (6 pcs)', 'Britannia 100% Atta Bread', 'Amul Taaza Milk 1L', 'Epigamia Greek Yogurt'],
    originalPrice: 326,
    dealPrice: 249,
    savings: 77,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 240,
  },
  {
    id: 'combo-3',
    title: 'Immunity & Detox Wellness Bundle',
    badge: 'HEALTH FIRST',
    items: ['Nutty Grits Almonds 500g', 'Organic India Tulsi Green Tea', 'Salem High-Curcumin Haldi', 'Raw Honey 250g'],
    originalPrice: 979,
    dealPrice: 779,
    savings: 200,
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 115,
  },
];

export const TESTIMONIALS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Priya Sharma',
    city: 'Ahmedabad (Satellite)',
    rating: 5,
    title: 'Freshness you can actually smell and taste!',
    comment:
      'I was tired of limp supermarket spinach and tasteless apples. NUVAMILO delivered my grocery basket within 22 minutes, and the greens were still crisp from the morning harvest. The paper packaging is so neat!',
    date: '14 Nov 2026',
    verifiedBuyer: true,
    productName: 'Tender Fresh Spinach Bunch & Himachal Apples',
  },
  {
    id: 'rev-2',
    author: 'Rajesh Patel',
    city: 'Ahmedabad (Bodakdev)',
    rating: 5,
    title: 'Authentic staples, fair prices and no plastic clutter',
    comment:
      'We switched our monthly staples like Daawat Basmati and Tata Toor Dal to Nuvamilo. The combination of local store partnership with real-time tracking is unbelievable. Keep up the high standard!',
    date: '12 Nov 2026',
    verifiedBuyer: true,
    productName: 'Monthly Kitchen Staples Box',
  },
  {
    id: 'rev-3',
    author: 'Ananya Mehta',
    city: 'Ahmedabad (Prahladnagar)',
    rating: 5,
    title: 'Lifesaver for morning breakfast rush',
    comment:
      'Fresh brown eggs, whole wheat loaf, and toned milk delivered right before 7 AM. The delivery partner was courteous, and ordering took less than 40 seconds. Best grocery app experience by far.',
    date: '08 Nov 2026',
    verifiedBuyer: true,
    productName: 'Morning Healthy Breakfast Basket',
  },
];

export const AVAILABLE_COUPONS: Coupon[] = [
  {
    code: 'NUVAMILO50',
    discountType: 'percentage',
    discountValue: 20,
    minOrderValue: 499,
    maxDiscount: 200,
    description: 'Get 20% OFF up to ₹200 on all orders above ₹499.',
  },
  {
    code: 'FRESH100',
    discountType: 'fixed',
    discountValue: 100,
    minOrderValue: 799,
    description: 'Flat ₹100 instant discount on orders above ₹799.',
  },
  {
    code: 'FREEDEL',
    discountType: 'fixed',
    discountValue: 40,
    minOrderValue: 299,
    description: 'Free Express Delivery on orders above ₹299.',
  },
];
