import React from 'react';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';
import { ProductCard } from '../components/product/ProductCard';
import { PageId } from '../types/navigation';
import { Product } from '../types/commerce';

interface WishlistPageProps {
  onNavigate: (page: PageId) => void;
  onQuickView: (product: Product) => void;
  onNavigateProduct: (slug: string) => void;
}

export const WishlistPage: React.FC<WishlistPageProps> = ({
  onNavigate,
  onQuickView,
  onNavigateProduct,
}) => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { showNotification } = useNotification();

  const handleMoveAllToCart = () => {
    wishlist.forEach((p) => addToCart(p, 1));
    clearWishlist();
    showNotification('All saved items moved to your shopping cart!', 'success');
  };

  if (wishlist.length === 0) {
    return (
      <div className="bg-[#F7F9FC] min-h-[70vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 text-center shadow-lg">
          <div className="w-20 h-20 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-extrabold text-[#071D49] mb-2">Your Wishlist is Empty</h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-6">
            Save your favorite pantry staples, dairy essentials, and seasonal harvest for quick re-ordering later.
          </p>
          <button
            onClick={() => onNavigate('shop')}
            className="w-full py-3.5 px-6 rounded-full bg-[#071D49] hover:bg-[#0057D9] text-white text-sm font-bold transition shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Explore Groceries</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F9FC] min-h-screen py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#071D49] tracking-tight">
              My Saved Groceries ({wishlist.length})
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Items you've bookmarked for your upcoming weekly grocery restock.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleMoveAllToCart}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#071D49] hover:bg-[#0057D9] text-white text-xs font-bold transition shadow-xs cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Move All to Cart</span>
            </button>
            <button
              onClick={clearWishlist}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-slate-200 text-slate-600 hover:text-rose-500 hover:border-rose-200 text-xs font-bold transition bg-white cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onNavigateProduct={onNavigateProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
