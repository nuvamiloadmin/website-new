import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Truck, RefreshCw, Plus, Minus, Check } from 'lucide-react';
import { Product } from '../../types/commerce';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('');
  const [addedAnimation, setAddedAnimation] = useState(false);

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setSelectedWeight(product.weight);
      setAddedAnimation(false);
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const isSaved = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedWeight);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#051433]/70 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative z-10 w-full max-w-3xl rounded-3xl bg-white shadow-2xl overflow-hidden border border-slate-100 my-auto"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            aria-label="Close product quick view"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
            {/* Left: Product Image & Badges */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-[#F7F9FC] p-6 relative border border-slate-100">
              {product.discountPercent && (
                <div className="absolute top-4 left-4 rounded-full bg-[#20E78A] px-2.5 py-1 text-[11px] font-extrabold text-[#071D49] shadow-sm">
                  {product.discountPercent}% OFF
                </div>
              )}

              {product.isOrganic && (
                <div className="absolute top-4 right-14 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-800 border border-emerald-200">
                  Organic
                </div>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="h-64 sm:h-72 w-auto object-contain transition-transform duration-500 hover:scale-105"
                loading="eager"
              />

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Truck className="h-3.5 w-3.5 text-[#009BFF]" />
                <span>Express delivery in 15-30 minutes</span>
              </div>
            </div>

            {/* Right: Info, Price, Quantity, Cart Action */}
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0057D9]">
                  {product.brand} · {product.category}
                </span>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#071D49] mt-1 leading-snug">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-2">
                  <div className="inline-flex items-center gap-1 rounded-md bg-amber-50 border border-amber-200 px-2 py-0.5 text-xs font-bold text-amber-700">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                  <span className="text-xs text-slate-400">({product.reviewCount} customer reviews)</span>
                </div>

                {/* Price block */}
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#071D49]">
                    ₹{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm font-semibold text-slate-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Inclusive of all taxes
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="h-3.5 w-3.5 text-[#20E78A] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Quantity and Actions */}
              <div className="pt-4 border-t border-slate-100 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Pack Size / Weight:
                  </span>
                  <span className="text-xs font-bold text-[#071D49] px-2.5 py-1 rounded-lg bg-slate-100">
                    {product.weight}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Quantity selector */}
                  <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 p-1">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-slate-700 shadow-xs hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-10 text-center font-display text-sm font-bold text-[#071D49]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-slate-700 shadow-xs hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Add to Cart button */}
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex-1 py-3 px-5 rounded-2xl nuva-btn-gradient text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 cursor-pointer"
                  >
                    {addedAnimation ? (
                      <>
                        <Check className="h-4 w-4 text-[#20E78A]" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="h-4 w-4" />
                        <span>Add to Cart (₹{product.price * quantity})</span>
                      </>
                    )}
                  </button>

                  {/* Wishlist toggle */}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product)}
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-colors cursor-pointer ${
                      isSaved
                        ? 'border-rose-200 bg-rose-50 text-rose-500'
                        : 'border-slate-200 bg-white text-slate-500 hover:text-rose-500 hover:border-rose-200'
                    }`}
                    title={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
                  >
                    <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
