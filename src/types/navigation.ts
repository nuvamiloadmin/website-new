export type PageId =
  | 'home'
  | 'shop'
  | 'category'
  | 'product'
  | 'cart'
  | 'checkout'
  | 'wishlist'
  | 'collections'
  | 'offers'
  | 'blog'
  | 'blog-post'
  | 'account'
  | 'orders'
  | 'order-detail'
  | 'addresses'
  | 'about'
  | 'contact'
  | 'faq'
  | 'shipping-policy'
  | 'refund-policy'
  | 'privacy-policy'
  | 'terms'
  | 'not-found';

export interface RouteParams {
  slug?: string;
  id?: string;
}

export const PAGE_ROUTES: Record<PageId, string> = {
  home: '/',
  shop: '/shop',
  category: '/category',
  product: '/product',
  cart: '/cart',
  checkout: '/checkout',
  wishlist: '/wishlist',
  collections: '/collections',
  offers: '/offers',
  blog: '/blog',
  'blog-post': '/blog',
  account: '/account',
  orders: '/account/orders',
  'order-detail': '/account/orders',
  addresses: '/account/addresses',
  about: '/about',
  contact: '/contact',
  faq: '/faq',
  'shipping-policy': '/shipping-policy',
  'refund-policy': '/refund-policy',
  'privacy-policy': '/privacy-policy',
  terms: '/terms',
  'not-found': '/404',
};

export const PAGE_TITLES: Record<PageId, string> = {
  home: 'NUVAMILO — Fresh Groceries for Your Everyday Needs',
  shop: 'Shop All Groceries — NUVAMILO',
  category: 'Browse Category — NUVAMILO',
  product: 'Product Details — NUVAMILO',
  cart: 'Shopping Cart — NUVAMILO',
  checkout: 'Secure Checkout — NUVAMILO',
  wishlist: 'My Wishlist — NUVAMILO',
  collections: 'Curated Grocery Collections — NUVAMILO',
  offers: 'Exclusive Deals & Offers — NUVAMILO',
  blog: 'Fresh Stories & Grocery Guides — NUVAMILO',
  'blog-post': 'Blog Article — NUVAMILO',
  account: 'My Account — NUVAMILO',
  orders: 'My Orders — NUVAMILO',
  'order-detail': 'Order Details — NUVAMILO',
  addresses: 'Saved Addresses — NUVAMILO',
  about: 'About NUVAMILO — Everyday Shopping, Reimagined',
  contact: 'Contact Customer Support — NUVAMILO',
  faq: 'Frequently Asked Questions — NUVAMILO',
  'shipping-policy': 'Fast Express Shipping Policy — NUVAMILO',
  'refund-policy': 'Hassle-Free Return & Refund Policy — NUVAMILO',
  'privacy-policy': 'Privacy & Security Policy — NUVAMILO',
  terms: 'Terms & Conditions of Service — NUVAMILO',
  'not-found': '404 Page Not Found — NUVAMILO',
};

export function parseRoute(pathname: string): { page: PageId; params: RouteParams } {
  // Strip origin, hash, and query parameters
  let clean = (pathname || '/').split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';
  if (!clean.startsWith('/')) {
    clean = '/' + clean;
  }
  
  if (clean === '/') return { page: 'home', params: {} };
  if (clean === '/shop') return { page: 'shop', params: {} };
  if (clean === '/cart') return { page: 'cart', params: {} };
  if (clean === '/checkout') return { page: 'checkout', params: {} };
  if (clean === '/wishlist') return { page: 'wishlist', params: {} };
  if (clean === '/collections') return { page: 'collections', params: {} };
  if (clean === '/offers') return { page: 'offers', params: {} };
  if (clean === '/about') return { page: 'about', params: {} };
  if (clean === '/contact') return { page: 'contact', params: {} };
  if (clean === '/faq') return { page: 'faq', params: {} };
  if (clean === '/shipping-policy') return { page: 'shipping-policy', params: {} };
  if (clean === '/refund-policy' || clean === '/refund' || clean === '/returns') return { page: 'refund-policy', params: {} };
  if (clean === '/privacy-policy' || clean === '/privacy') return { page: 'privacy-policy', params: {} };
  if (clean === '/terms' || clean === '/terms-and-conditions') return { page: 'terms', params: {} };
  if (clean === '/account') return { page: 'account', params: {} };
  if (clean === '/account/orders') return { page: 'orders', params: {} };
  if (clean === '/account/addresses') return { page: 'addresses', params: {} };
  if (clean === '/blog' || clean === '/blogs' || clean === '/journal') return { page: 'blog', params: {} };

  if (clean.startsWith('/category/')) {
    const slug = clean.replace('/category/', '');
    return { page: 'category', params: { slug } };
  }

  if (clean.startsWith('/product/')) {
    const slug = clean.replace('/product/', '');
    return { page: 'product', params: { slug } };
  }

  if (clean.startsWith('/blog/')) {
    const slug = clean.replace('/blog/', '');
    return { page: 'blog-post', params: { slug } };
  }

  if (clean.startsWith('/account/orders/')) {
    const id = clean.replace('/account/orders/', '');
    return { page: 'order-detail', params: { id } };
  }

  return { page: 'not-found', params: {} };
}
