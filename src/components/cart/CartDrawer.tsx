import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, Tag, Truck, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface CartDrawerProps {
  onNavigateCheckout: () => void;
  onNavigateShop: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  onNavigateCheckout,
  onNavigateShop,
}) => {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    discountAmount,
    deliveryFee,
    total,
    freeDeliveryThreshold,
    amountNeededForFreeDelivery,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [couponStatus, setCouponStatus] = useState<string | null>(null);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    const res = applyCoupon(couponCode);
    setCouponStatus(res.message);
    if (res.success) setCouponCode('');
  };

  const handleProceed = () => {
    closeCart();
    onNavigateCheckout();
  };

  const handleShop = () => {
    closeCart();
    onNavigateShop();
  };

  const freeDeliveryProgress = Math.min(100, Math.round((subtotal / freeDeliveryThreshold) * 100));

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[140] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
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
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0057D9]/10 text-[#0057D9]">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-[#071D49]">
                    My Shopping Basket
                  </h3>
                  <span className="text-xs text-slate-400">
                    {items.length} {items.length === 1 ? 'item' : 'items'}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={closeCart}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors cursor-pointer"
                aria-label="Close cart drawer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Free Delivery Meter */}
            <div className="bg-[#F7F9FC] px-5 py-3 border-b border-slate-100">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Truck className="h-4 w-4 text-[#009BFF]" />
                  {amountNeededForFreeDelivery > 0 ? (
                    <span>
                      Add <strong className="text-[#0057D9]">₹{amountNeededForFreeDelivery}</strong> more for{' '}
                      <strong className="text-[#20E78A]">FREE Delivery</strong>
                    </span>
                  ) : (
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#20E78A]" />
                      You unlocked FREE Express Delivery!
                    </span>
                  )}
                </span>
                <span className="text-[11px] font-mono text-slate-400">{freeDeliveryProgress}%</span>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full nuva-gradient-bar transition-all duration-500"
                  style={{ width: `${freeDeliveryProgress}%` }}
                />
              </div>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-50 text-slate-300">
                    <ShoppingBag className="h-10 w-10" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-[#071D49]">
                      Your basket is empty
                    </h4>
                    <p className="mt-1 text-xs text-slate-400 max-w-xs">
                      Explore our handpicked fresh vegetables, pantry staples, and daily dairy products.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleShop}
                    className="rounded-2xl nuva-btn-gradient px-6 py-3 text-xs font-bold text-white shadow-md cursor-pointer"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map(({ product, quantity, selectedWeight }) => (
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
                        {selectedWeight || product.weight}
                      </span>
                      <span className="font-display text-xs font-extrabold text-[#0057D9]">
                        ₹{product.price * quantity}
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 p-0.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="flex h-6 w-6 items-center justify-center rounded-lg bg-white text-slate-600 shadow-2xs hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center font-display text-xs font-bold text-[#071D49]">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="flex h-6 w-6 items-center justify-center rounded-lg bg-white text-slate-600 shadow-2xs hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    {/* Delete button */}
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                      className="text-slate-300 hover:text-rose-500 transition-colors p-1 cursor-pointer shrink-0"
                      title="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {items.length > 0 && (
              <div className="border-t border-slate-100 p-5 bg-white space-y-4">
                {/* Coupon Box */}
                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
                    <div className="flex items-center gap-1.5 font-bold">
                      <Tag className="h-3.5 w-3.5 text-emerald-600" />
                      <span>{appliedCoupon.code} Applied (-₹{discountAmount})</span>
                    </div>
                    <button
                      type="button"
                      onClick={removeCoupon}
                      className="text-emerald-700 hover:text-emerald-900 font-bold underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter promo code (e.g. NUVAMILO50)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0057D9]"
                    />
                    <button
                      type="submit"
                      className="rounded-xl border border-[#071D49] bg-[#071D49] hover:bg-[#0057D9] px-4 py-2 text-xs font-bold text-white transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>
                )}

                {/* Subtotal breakdown */}
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-slate-900">₹{subtotal}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-medium">
                      <span>Discount Savings</span>
                      <span>-₹{discountAmount}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>
                      {deliveryFee === 0 ? (
                        <span className="text-emerald-600 font-bold uppercase tracking-wide">
                          FREE
                        </span>
                      ) : (
                        `₹${deliveryFee}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between pt-2 border-t border-slate-100 text-sm font-bold text-[#071D49]">
                    <span>Total Amount</span>
                    <span className="font-display text-lg font-black text-[#071D49]">₹{total}</span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button
                  type="button"
                  onClick={handleProceed}
                  className="w-full py-3.5 px-5 rounded-2xl nuva-btn-gradient text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
