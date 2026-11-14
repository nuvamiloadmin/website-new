export type PageId =
  | 'home'
  | 'about'
  | 'how-it-works'
  | 'categories'
  | 'customers'
  | 'businesses'
  | 'solutions'
  | 'partner'
  | 'contact'
  | 'faq'
  | 'privacy'
  | 'terms';

export const PAGE_ROUTES: Record<PageId, string> = {
  home: '/',
  about: '/about',
  'how-it-works': '/how-it-works',
  categories: '/categories',
  customers: '/customers',
  businesses: '/businesses',
  solutions: '/solutions',
  partner: '/partner',
  contact: '/contact',
  faq: '/faq',
  privacy: '/privacy',
  terms: '/terms',
};

export const PAGE_TITLES: Record<PageId, string> = {
  home: 'NUVAMILO — Everyday Shopping, Reimagined',
  about: 'About Us — NUVAMILO',
  'how-it-works': 'How It Works — NUVAMILO',
  categories: 'Categories — NUVAMILO',
  customers: 'For Customers — NUVAMILO',
  businesses: 'For Businesses — NUVAMILO',
  solutions: 'Commerce Solutions — NUVAMILO',
  partner: 'Partner With Us — NUVAMILO',
  contact: 'Contact Us — NUVAMILO',
  faq: 'Frequently Asked Questions — NUVAMILO',
  privacy: 'Privacy Policy — NUVAMILO',
  terms: 'Terms & Conditions — NUVAMILO',
};

export function getPageFromPath(pathname: string): PageId {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const entry = Object.entries(PAGE_ROUTES).find(([, route]) => route === normalized);
  return (entry?.[0] as PageId) ?? 'home';
}
