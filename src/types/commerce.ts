export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  weight: string;
  unit: string;
  image: string;
  gallery?: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  isDailyEssential?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isOrganic?: boolean;
  isFeatured?: boolean;
  description: string;
  features?: string[];
  nutritionalInfo?: {
    calories?: string;
    protein?: string;
    carbs?: string;
    fat?: string;
  };
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  itemCount: number;
  iconName: string;
  image: string;
  accentColor: string;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedWeight?: string;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface Coupon {
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minOrderValue: number;
  maxDiscount?: number;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  avatar?: string;
  city: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verifiedBuyer: boolean;
  productName?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface Address {
  id: string;
  fullName: string;
  phone: string;
  street: string;
  apartment?: string;
  landmark?: string;
  city: string;
  state: string;
  pincode: string;
  type: 'home' | 'work' | 'other';
  isDefault: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  paymentMethod: 'cod' | 'upi' | 'card' | 'wallet';
  status: 'placed' | 'confirmed' | 'packed' | 'out_for_delivery' | 'delivered';
  deliverySlot: string;
  address: Address;
  createdAt: string;
  estimatedDelivery: string;
}

export interface ProductFilters {
  category?: string;
  searchQuery?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'discount';
  inStockOnly?: boolean;
  organicOnly?: boolean;
}
