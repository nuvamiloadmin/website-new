import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Star,
  ShoppingBag,
  Heart,
  Truck,
  ShieldCheck,
  RefreshCw,
  Plus,
  Minus,
  Check,
  ArrowLeft,
  Sparkles,
  Share2,
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';
import { ProductCard } from '../components/product/ProductCard';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useNotification } from '../context/NotificationContext';
import { PageId } from '../types/navigation';
import { Product } from '../types/commerce';

interface ProductDetailPageProps {
  slug?: string;
  onNavigate: (page: PageId) => void;
  onQuickView: (product: Product) => void;
  onNavigateProduct: (slug: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  slug,
  onNavigate,
  onQuickView,
  onNavigateProduct,
}) => {
  const { addToCart, items, updateQuantity } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showNotification } = useNotification();

  const product =
    PRODUCTS_DATA.find((p) => p.slug === slug) ??
    PRODUCTS_DATA[0];

  const productImages = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const cartItem = items.find((i) => i.product.id === product.id);
  const isSaved = isInWishlist(product.id);

  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showNotification(`Added ${quantity} × ${product.name} to cart`, 'success');
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    onNavigate('checkout');
  };

  return (
    <div className="bg-[#F7F9FC] min-h-screen py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => onNavigate('shop')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#0057D9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Groceries</span>
          </button>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: product.name,
                  text: `Buy ${product.name} on NUVAMILO with 15-30 min delivery!`,
                  url: window.location.href,
                }).catch(() => {});
              } else {
                navigator.clipboard.writeText(window.location.href);
                showNotification('Link copied to clipboard!', 'info');
              }
            }}
            className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#071D49] shadow-xs cursor-pointer"
            title="Share Product"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Main Product Card Grid */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-3xl bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center p-6">
                <img
                  src={productImages[selectedImage] || product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain drop-shadow-md transition-all duration-300"
                />

                {/* Discount Badge */}
                {product.discountPercent && (
                  <span className="absolute top-4 left-4 rounded-full bg-[#20E78A] px-3 py-1 text-xs font-black text-[#071D49] shadow-sm">
                    {product.discountPercent}% OFF
                  </span>
                )}

                {/* Wishlist toggle */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all cursor-pointer ${
                    isSaved
                      ? 'bg-rose-50 text-rose-500 border border-rose-200'
                      : 'bg-white text-slate-400 hover:text-rose-500 border border-slate-100'
                  }`}
                  aria-label="Save to Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Thumbnails */}
              {productImages.length > 1 && (
                <div className="flex items-center gap-3">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-16 h-16 rounded-2xl border-2 p-1 bg-slate-50 overflow-hidden cursor-pointer transition-all ${
                        selectedImage === idx ? 'border-[#0057D9]' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Info & Purchase Controls */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#0057D9] bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {product.category}
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs font-bold text-slate-600">{product.brand}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#071D49] tracking-tight leading-snug">
                  {product.name}
                </h1>

                <div className="mt-2 flex items-center gap-3">
                  <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-full">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-amber-900">{product.rating}</span>
                  </div>
                  <span className="text-xs text-slate-400">
                    ({product.reviewCount} customer reviews)
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    ✓ Verified Fresh
                  </span>
                </div>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline gap-3 pb-6 border-b border-slate-100">
                  <div className="text-3xl sm:text-4xl font-black text-[#071D49]">
                    ₹{product.price}
                  </div>
                  {product.originalPrice && (
                    <div className="text-base text-slate-400 line-through">
                      ₹{product.originalPrice}
                    </div>
                  )}
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    Net: {product.unit}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-6 text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Delivery & Assurance Perks */}
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-emerald-900">
                    <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <div className="font-bold">15-30 Min Delivery</div>
                      <div className="text-[10px] text-emerald-700">Hyperlocal Hub dispatch</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-blue-50/70 border border-blue-100 text-blue-900">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                    <div>
                      <div className="font-bold">100% Guaranteed</div>
                      <div className="text-[10px] text-blue-700">Instant doorstep return</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quantity Controls & CTA Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Quantity:
                  </span>
                  <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 p-1">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-8 h-8 rounded-full bg-white text-[#071D49] flex items-center justify-center hover:bg-slate-200 transition cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-10 text-center font-bold text-sm text-[#071D49]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-8 h-8 rounded-full bg-white text-[#071D49] flex items-center justify-center hover:bg-slate-200 transition cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 py-3.5 px-6 rounded-full bg-[#071D49] hover:bg-[#0057D9] text-white font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>

                  <button
                    onClick={handleBuyNow}
                    className="flex-1 py-3.5 px-6 rounded-full bg-[#20E78A] hover:bg-emerald-400 text-[#071D49] font-extrabold text-sm transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Instant Checkout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#071D49] mb-6">
              You Might Also Need
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onQuickView={onQuickView}
                  onNavigateProduct={onNavigateProduct}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
