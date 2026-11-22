import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

interface WishlistDrawerProps {
  onNavigateShop: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ onNavigateShop }) => {
  const { wishlist, isWishlistOpen, closeWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (product: any) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
  };

  const handleShop = () => {
    closeWishlist();
    onNavigateShop();
  };

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <div className="fixed inset-0 z-[140] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeWishlist}
            className="fixed inset-0 bg-[#051433]/60 backdrop-blur-xs cursor-pointer"
          />

          {/* Drawer Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative z-10 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                  <Heart className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-[#071D49]">
                    My Wishlist
                  </h3>
                  <span className="text-xs text-slate-400">
                    {wishlist.length} saved {wishlist.length === 1 ? 'item' : 'items'}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={closeWishlist}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors cursor-pointer"
                aria-label="Close wishlist drawer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {wishlist.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-50 text-slate-300">
                    <Heart className="h-10 w-10" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-[#071D49]">
                      Your wishlist is empty
                    </h4>
                    <p className="mt-1 text-xs text-slate-400 max-w-xs">
                      Tap the heart icon on any grocery item to save it for quick reordering.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleShop}
                    className="rounded-2xl nuva-btn-gradient px-6 py-3 text-xs font-bold text-white shadow-md cursor-pointer"
                  >
                    Browse Groceries
                  </button>
                </div>
              ) : (
                wishlist.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3.5 rounded-2xl border border-slate-100 bg-white p-3 shadow-2xs"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-16 w-16 rounded-xl bg-slate-50 object-contain p-1.5 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h5 className="font-display text-xs font-bold text-[#071D49] line-clamp-1">
                        {product.name}
                      </h5>
                      <span className="text-[11px] text-slate-400 block font-medium">
                        {product.weight}
                      </span>
                      <span className="font-display text-xs font-extrabold text-[#0057D9]">
                        ₹{product.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleMoveToCart(product)}
                        className="flex items-center gap-1 rounded-xl bg-[#071D49] hover:bg-[#0057D9] text-white px-2.5 py-1.5 text-xs font-bold transition-colors cursor-pointer"
                        title="Move to shopping basket"
                      >
                        <ShoppingBag className="h-3.5 w-3.5" />
                        <span>Add</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => removeFromWishlist(product.id)}
                        className="text-slate-300 hover:text-rose-500 transition-colors p-1 cursor-pointer"
                        title="Remove from wishlist"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
