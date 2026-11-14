import nuvamiloLogoTransparentImg from '../assets/images/nuvamilo_logo_transparent.png';
import nuvamiloLogoWhiteImg from '../assets/images/nuvamilo_logo_white_transparent.png';
import heroSceneCutoutImg from '../assets/images/hero_nuvamilo_cutout.png';
import brandStoryImg from '../assets/images/brand_story_shopper_1794604822432.jpg';
import freshProduceImg from '../assets/images/category_fresh_produce_1794604822649.jpg';
import groceriesProperImg from '../assets/images/category_groceries_retail_1794634831621.jpg';
import groceriesEssentialsImg from '../assets/images/category_groceries_essentials_1794604823980.jpg';
import businessMerchantImg from '../assets/images/business_merchant_scene_1794604823701.jpg';
import deliveryFulfillmentImg from '../assets/images/delivery_rider_cutout.png';
import packagingBagsImg from '../assets/images/nuvamilo_packaging_bags_1794604841095.jpg';
import futureVisionImg from '../assets/images/future_retail_architectural_1794605547767.jpg';

export const BRAND_ASSETS = {
  logo: nuvamiloLogoTransparentImg,
  logoWhite: nuvamiloLogoWhiteImg,
  heroScene: heroSceneCutoutImg,
  brandStory: brandStoryImg,
  freshProduce: freshProduceImg,
  groceriesProper: groceriesProperImg,
  groceriesEssentials: groceriesEssentialsImg,
  businessMerchant: businessMerchantImg,
  deliveryFulfillment: deliveryFulfillmentImg,
  packagingBags: packagingBagsImg,
  futureVision: futureVisionImg,
} as const;

export interface CategoryShowcaseItem {
  id: 'groceries' | 'vegetables' | 'fruits' | 'essentials' | 'household';
  index: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  accentColor: string;
}

export const CATEGORIES_DATA: CategoryShowcaseItem[] = [
  {
    id: 'vegetables',
    index: '01',
    title: 'Fresh Vegetables',
    subtitle: 'Crisp Greens · Root Staples · Culinary Herbs',
    description:
      'Carefully selected seasonal greens, heirloom tomatoes, crunchy brassicas, and aromatic kitchen staples sourced through neighborhood grocers who prioritize freshness every morning.',
    highlights: [
      'Leafy greens and crisp salad essentials',
      'Daily cooking staples from onions to bell peppers',
      'Thoughtful handling from shelf to paper bag',
    ],
    image: BRAND_ASSETS.freshProduce,
    accentColor: '#2DEB80',
  },
  {
    id: 'fruits',
    index: '02',
    title: 'Fresh Fruits',
    subtitle: 'Orchard Harvest · Citrus · Seasonal Berries',
    description:
      'Sun-ripened citrus, crisp orchard apples, stone fruits, and sweet berries presented with clear seasonal quality so every household basket arrives vibrant and ready to enjoy.',
    highlights: [
      'Everyday table fruits and citrus varieties',
      'Hand-checked ripeness and protective packing',
      'Seasonal selections curated by local specialists',
    ],
    image: BRAND_ASSETS.brandStory,
    accentColor: '#00C8EF',
  },
  {
    id: 'groceries',
    index: '03',
    title: 'Groceries',
    subtitle: 'Daily Staples · Dairy & Bakery · Pasta · Oils & Spices',
    description:
      'Everyday kitchen essentials—fresh dairy milk, farm eggs, crusty bread, pasta, cold-pressed olive oil, whole grains, roasted coffee, honey, and spices—curated from trusted neighborhood shelves for effortless restocking.',
    highlights: [
      'Dairy, farm eggs, artisan loaves, and breakfast staples',
      'Pasta, grains, cooking oils, honey, coffee, and spices',
      'Clean product discovery across trusted neighborhood shelves',
    ],
    image: BRAND_ASSETS.groceriesProper,
    accentColor: '#075BE8',
  },
  {
    id: 'essentials',
    index: '04',
    title: 'Daily Essentials',
    subtitle: 'Morning Necessities · Personal Care · Everyday Refills',
    description:
      'The reliable everyday items households reach for without thinking—clean personal care, bath necessities, and recurring refills organized for calm, friction-free reordering.',
    highlights: [
      'Personal hygiene and gentle daily care items',
      'Clear product variants and straightforward restocking',
      'Consistent availability from nearby neighborhood shops',
    ],
    image: BRAND_ASSETS.groceriesEssentials,
    accentColor: '#071C44',
  },
  {
    id: 'household',
    index: '05',
    title: 'Household Products',
    subtitle: 'Home Care · Cleaning · Paper & Kitchen Supplies',
    description:
      'Thoughtfully organized home maintenance, laundry care, surface cleaners, and kitchen paper goods packaged cleanly alongside your grocery order.',
    highlights: [
      'Dishwashing, laundry, and gentle surface care',
      'Kitchen wraps, tissues, and utility paper supplies',
      'Separated neatly inside structured NUVAMILO carry bags',
    ],
    image: BRAND_ASSETS.packagingBags,
    accentColor: '#075BE8',
  },
];

export interface JourneyStep {
  step: string;
  key: 'discover' | 'choose' | 'order' | 'fulfillment';
  title: string;
  lead: string;
  description: string;
  detailPoints: string[];
  image: string;
  isCutout?: boolean;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: '01',
    key: 'discover',
    title: 'Discover',
    lead: 'Explore nearby stores with editorial clarity',
    description:
      'Open NUVAMILO to browse fresh produce, curated pantry shelves, and household essentials presented in a calm, distraction-free mobile experience.',
    detailPoints: [
      'Organized by fresh produce, groceries, and daily essentials',
      'Clean product photography and clear item details',
      'Built to spotlight trusted local stores around you',
    ],
    image: BRAND_ASSETS.brandStory,
  },
  {
    step: '02',
    key: 'choose',
    title: 'Choose',
    lead: 'Build a thoughtful everyday basket',
    description:
      'Select crisp vegetables, seasonal fruit, pantry staples, and household goods side by side with clear pack sizes and effortless basket adjustments.',
    detailPoints: [
      'Transparent quantities, weights, and item notes',
      'Quick switches between fresh produce and home refills',
      'Zero visual clutter while comparing everyday essentials',
    ],
    image: BRAND_ASSETS.groceriesProper,
  },
  {
    step: '03',
    key: 'order',
    title: 'Order',
    lead: 'Confirm in moments with complete clarity',
    description:
      'Review your basket, confirm your fulfillment preferences, and send your order directly into a structured store workflow built for accuracy.',
    detailPoints: [
      'Clean checkout summary with clear item breakdown',
      'Real-time order confirmation sent to the local store',
      'Structured handling instructions for delicate produce',
    ],
    image: BRAND_ASSETS.businessMerchant,
  },
  {
    step: '04',
    key: 'fulfillment',
    title: 'Fulfillment',
    lead: 'Packed with care in signature NUVAMILO bags',
    description:
      'Stores pack each order in right-sized NUVAMILO paper shopping bags—separating chilled greens, ripe fruit, and household products—before smooth local fulfillment.',
    detailPoints: [
      'Small, Medium, and Large structured kraft paper bags',
      'Dedicated care for fragile fruits and leafy greens',
      'Seamless handoff from local counter to your doorstep',
    ],
    image: BRAND_ASSETS.deliveryFulfillment,
    isCutout: true,
  },
];

export interface PackagingTier {
  size: string;
  dimensions: string;
  idealFor: string;
  description: string;
  accent: string;
}

export const PACKAGING_TIERS: PackagingTier[] = [
  {
    size: 'Small',
    dimensions: 'Compact Carry Format',
    idealFor: 'Quick Top-Ups & Fresh Fruit',
    description:
      'Tailored for morning fruit selections, daily dairy or pantry top-ups, and compact personal care refills with reinforced twisted handles.',
    accent: '#00C8EF',
  },
  {
    size: 'Medium',
    dimensions: 'Everyday Basket Format',
    idealFor: 'Daily Vegetables & Kitchen Groceries',
    description:
      'Balanced gusset depth designed to keep leafy vegetables upright alongside bottled oils, grains, and mid-week essentials without crowding.',
    accent: '#075BE8',
  },
  {
    size: 'Large',
    dimensions: 'Full Household Format',
    idealFor: 'Weekly Groceries & Home Supplies',
    description:
      'Heavy-gauge structured kraft stock engineered to carry full household restocks—combining fresh produce crates, pantry staples, and home care neatly.',
    accent: '#2DEB80',
  },
];

export interface FaqItem {
  id: string;
  category: 'Customers' | 'Businesses' | 'Brand & Vision';
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-is-nuvamilo',
    category: 'Brand & Vision',
    question: 'What is NUVAMILO?',
    answer:
      'NUVAMILO is a modern local commerce brand designed to connect everyday shoppers with neighborhood stores through a refined digital experience—covering fresh vegetables, fresh fruits, groceries, daily essentials, and household products.',
  },
  {
    id: 'categories-focus',
    category: 'Customers',
    question: 'What product categories does NUVAMILO focus on?',
    answer:
      'NUVAMILO focuses on five core everyday categories: Groceries, Fresh Vegetables, Fresh Fruits, Daily Essentials, and Household Products. Every detail of the browsing and packaging experience is tailored around these household necessities.',
  },
  {
    id: 'how-businesses-benefit',
    category: 'Businesses',
    question: 'How does NUVAMILO support local shops and merchants?',
    answer:
      'NUVAMILO helps local retail businesses establish a polished digital storefront, present their product catalog clearly, organize day-to-day customer orders more efficiently, and build a recognizable brand presence with modern packaging and commerce tools.',
  },
  {
    id: 'shopping-experience',
    category: 'Customers',
    question: 'What makes shopping on NUVAMILO feel different from typical grocery apps?',
    answer:
      'Rather than overwhelming shoppers with cluttered banners and noisy grids, NUVAMILO prioritizes calm visual clarity, thoughtful category storytelling, transparent item selection, and careful packing in branded paper bags.',
  },
  {
    id: 'packaging-bags',
    category: 'Brand & Vision',
    question: 'Why does NUVAMILO emphasize branded paper shopping bags?',
    answer:
      'Packaging is the physical touchpoint of digital commerce. NUVAMILO Small, Medium, and Large paper bags protect delicate fruits, fresh vegetables, and pantry goods while giving local stores a cohesive, premium presentation at the doorstep.',
  },
  {
    id: 'partner-onboarding',
    category: 'Businesses',
    question: 'How can a local store or business express interest in partnering with NUVAMILO?',
    answer:
      'Local grocers, produce specialists, and daily-essentials retailers can submit an inquiry directly through our Partner With Us page. Our team reviews every inquiry carefully as we expand our merchant network.',
  },
  {
    id: 'commerce-vision',
    category: 'Brand & Vision',
    question: 'Is NUVAMILO only for consumers, or is it a broader commerce platform?',
    answer:
      'NUVAMILO is built as a connected local commerce ecosystem. While customers experience an effortless way to shop daily essentials, businesses gain digital visibility, structured order workflows, and scalable brand infrastructure.',
  },
  {
    id: 'homemade-food-policy',
    category: 'Customers',
    question: 'Does NUVAMILO offer restaurant meals or homemade food?',
    answer:
      'No. NUVAMILO is dedicated strictly to retail groceries, fresh vegetables, fresh fruits, daily essentials, and household products—allowing us to design specialized discovery and fulfillment standards for everyday retail.',
  },
];
