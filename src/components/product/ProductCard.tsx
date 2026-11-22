import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ShoppingBag, Heart, Eye, Plus, Minus, Check } from 'lucide-react';
import { Product } from '../../types/commerce';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  onNavigateProduct?: (slug: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onNavigateProduct,
}) => {
  const { items, addToCart, updateQuantity } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);

  const cartItem = items.find((i) => i.product.id === product.id);
  const isSaved = isInWishlist(product.id);

  const handleCardClick = () => {
    if (onNavigateProduct) {
      onNavigateProduct(product.slug);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-4 shadow-xs hover:shadow-xl hover:border-[#009BFF]/30 transition-all duration-300"
    >
      {/* Top Badges & Actions */}
      <div className="relative">
        <div className="flex items-center justify-between">
          {product.discountPercent ? (
            <span className="rounded-full bg-[#20E78A] px-2.5 py-0.5 text-[11px] font-black text-[#071D49] tracking-tight shadow-xs">
              {product.discountPercent}% OFF
            </span>
          ) : product.isOrganic ? (
            <span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold">
              ORGANIC
            </span>
          ) : (
            <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
              {product.brand}
            </span>
          )}

          {/* Wishlist Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product);
            }}
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all cursor-pointer ${
              isSaved
                ? 'border-rose-200 bg-rose-50 text-rose-500 shadow-xs'
                : 'border-slate-100 bg-white text-slate-400 hover:border-rose-200 hover:text-rose-500 hover:scale-110'
            }`}
            title={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
          >
            <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Product Image */}
        <div
          onClick={handleCardClick}
          className="relative mt-2 flex h-44 sm:h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F7F9FC] cursor-pointer"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
          />

          {/* Quick View Button on Hover */}
          {onQuickView && (
            <div
              className={`absolute inset-0 flex items-center justify-center bg-[#071D49]/20 backdrop-blur-[2px] transition-opacity duration-200 ${
                isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onQuickView(product);
                }}
                className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-extrabold text-[#071D49] shadow-lg hover:bg-[#071D49] hover:text-white transition-colors cursor-pointer"
              >
                <Eye className="h-3.5 w-3.5" />
                <span>Quick View</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-3 flex flex-1 flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span className="font-semibold text-[#0057D9]">{product.brand}</span>
            <span className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="h-3 w-3 fill-current" />
              <span>{product.rating}</span>
            </span>
          </div>

          <h4
            onClick={handleCardClick}
            className="mt-1 font-display text-sm font-bold text-[#071D49] line-clamp-2 hover:text-[#0057D9] transition-colors cursor-pointer leading-snug"
            title={product.name}
          >
            {product.name}
          </h4>

          <p className="mt-1 text-xs text-slate-400 font-medium">
            {product.weight}
          </p>
        </div>

        {/* Price & Add to Cart Action */}
        <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-50">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-base sm:text-lg font-extrabold text-[#071D49]">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-[11px] font-medium text-slate-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Add to Cart or Quantity Controls */}
          {cartItem ? (
            <div className="flex items-center rounded-xl bg-[#F7F9FC] border border-slate-200 p-0.5">
              <button
                type="button"
                onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-slate-700 shadow-2xs hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <Minus className="h-3 w-3" />
              </button>
              <span className="w-7 text-center font-display text-xs font-bold text-[#071D49]">
                {cartItem.quantity}
              </span>
              <button
                type="button"
                onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-slate-700 shadow-2xs hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <Plus className="h-3 w-3" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => addToCart(product, 1)}
              className="flex items-center gap-1.5 rounded-xl nuva-btn-gradient px-3 py-2 text-xs font-bold text-white shadow-xs hover:shadow-md transition-all cursor-pointer"
              title="Add to shopping cart"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
