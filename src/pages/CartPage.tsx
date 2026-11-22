import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
  Tag,
  ShieldCheck,
  Truck,
  Sparkles,
  Check,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';
import { PageId } from '../types/navigation';
import { AVAILABLE_COUPONS } from '../data/dealsData';

interface CartPageProps {
  onNavigate: (page: PageId) => void;
}

export const CartPage: React.FC<CartPageProps> = ({ onNavigate }) => {
  const {
    items,
    updateQuantity,
    removeFromCart,
    subtotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    discountAmount,
    deliveryFee,
    finalTotal,
    itemCount,
  } = useCart();

  const { showNotification } = useNotification();
  const [couponCodeInput, setCouponCodeInput] = useState('');
  const [couponError, setCouponError] = useState('');

  const freeDeliveryThreshold = 499;
  const freeDeliveryProgress = Math.min(100, Math.round((subtotal / freeDeliveryThreshold) * 100));
  const remainingForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    if (!couponCodeInput.trim()) return;

    const success = applyCoupon(couponCodeInput.trim());
    if (success) {
      showNotification(`Coupon ${couponCodeInput.toUpperCase()} applied!`, 'success');
      setCouponCodeInput('');
    } else {
      setCouponError('Invalid coupon code or minimum order requirement not met.');
    }
  };

  if (items.length === 0) {
    return (
      <div className="bg-[#F7F9FC] min-h-[70vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 text-center shadow-lg">
          <div className="w-20 h-20 rounded-full bg-blue-50 text-[#0057D9] flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-extrabold text-[#071D49] mb-2">Your Cart is Empty</h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-6">
            Looks like you haven't added any fresh groceries or daily staples to your cart yet.
          </p>
          <button
            onClick={() => onNavigate('shop')}
            className="w-full py-3.5 px-6 rounded-full bg-[#071D49] hover:bg-[#0057D9] text-white text-sm font-bold transition shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Start Shopping Fresh</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F9FC] min-h-screen py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Continue Link */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#071D49] tracking-tight">
              Shopping Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Reviewed items are reserved for 15 minutes during live order dispatch.
            </p>
          </div>

          <button
            onClick={() => onNavigate('shop')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0057D9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </button>
        </div>

        {/* Free Delivery Banner */}
        <div className="mb-8 bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-bold text-[#071D49] flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#0057D9]" />
              {remainingForFreeDelivery === 0 ? (
                <span className="text-emerald-600 font-extrabold">
                  🎉 Congratulations! You unlocked Free Delivery!
                </span>
              ) : (
                <span>
                  Add <strong className="text-[#0057D9]">₹{remainingForFreeDelivery}</strong> more for{' '}
                  <strong className="text-emerald-600">FREE Delivery</strong>
                </span>
              )}
            </span>
            <span className="font-extrabold text-slate-500">{freeDeliveryProgress}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#0057D9] to-[#20E78A] transition-all duration-500 rounded-full"
              style={{ width: `${freeDeliveryProgress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex items-center gap-4 transition hover:border-[#009BFF]/30"
              >
                {/* Product image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-50 border border-slate-100 p-2 shrink-0 flex items-center justify-center">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0057D9]">
                    {item.product.category}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-[#071D49] truncate">
                    {item.product.name}
                  </h3>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {item.product.unit} • ₹{item.product.price} each
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    {/* Quantity controls */}
                    <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 p-0.5">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-full bg-white text-[#071D49] flex items-center justify-center hover:bg-slate-200 transition cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-[#071D49]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-white text-[#071D49] flex items-center justify-center hover:bg-slate-200 transition cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Total for this line */}
                    <div className="flex items-center gap-4">
                      <span className="font-black text-sm sm:text-base text-[#071D49]">
                        ₹{item.product.price * item.quantity}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-1.5 rounded-full text-slate-300 hover:text-rose-500 hover:bg-rose-50 transition cursor-pointer"
                        title="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary & Coupon Card */}
          <div className="space-y-6">
            {/* Coupon Box */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4 text-[#0057D9]" />
                <h3 className="font-extrabold text-sm text-[#071D49]">Apply Coupon Code</h3>
              </div>

              {appliedCoupon ? (
                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <div>
                      <div className="text-xs font-bold text-emerald-900">
                        {appliedCoupon.code} Applied
                      </div>
                      <div className="text-[10px] text-emerald-700">
                        Saved ₹{discountAmount} on this order!
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-xs font-bold text-rose-500 hover:text-rose-600 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCodeInput}
                      onChange={(e) => setCouponCodeInput(e.target.value.toUpperCase())}
                      placeholder="e.g. NUVAMILO50"
                      className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-bold uppercase focus:outline-hidden focus:border-[#0057D9]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#071D49] text-white text-xs font-bold hover:bg-[#0057D9] transition cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  {couponError && <p className="text-[11px] text-rose-500">{couponError}</p>}
                </form>
              )}

              {/* Recommended coupon pills */}
              <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                {AVAILABLE_COUPONS.map((cp) => (
                  <button
                    key={cp.code}
                    onClick={() => {
                      setCouponCodeInput(cp.code);
                      applyCoupon(cp.code);
                    }}
                    className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-[#0057D9] transition cursor-pointer"
                  >
                    {cp.code}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="font-extrabold text-base text-[#071D49] pb-3 border-b border-slate-100">
                Order Bill Summary
              </h3>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Item Subtotal</span>
                  <span className="font-bold text-[#071D49]">₹{subtotal}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Coupon Discount</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between text-slate-600">
                  <span>Express Delivery Fee</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="font-bold text-emerald-600">FREE</span>
                    ) : (
                      <span className="font-bold text-[#071D49]">₹{deliveryFee}</span>
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-slate-600">
                  <span>Handling & Eco Packaging</span>
                  <span className="font-bold text-[#071D49]">₹5</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-between items-baseline">
                <div>
                  <span className="text-sm font-extrabold text-[#071D49]">Total Payable</span>
                  <p className="text-[10px] text-slate-400">Inclusive of all local taxes</p>
                </div>
                <span className="text-2xl font-black text-[#071D49]">₹{finalTotal + 5}</span>
              </div>

              <button
                onClick={() => onNavigate('checkout')}
                className="w-full py-4 px-6 rounded-full bg-[#071D49] hover:bg-[#0057D9] text-white font-extrabold text-sm transition-all shadow-lg active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Secure Checkout with 256-Bit SSL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
