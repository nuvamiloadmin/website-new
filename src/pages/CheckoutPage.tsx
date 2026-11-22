import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  MapPin,
  Clock,
  CreditCard,
  CheckCircle2,
  ShieldCheck,
  Truck,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Phone,
  User,
  Home,
  Building,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';
import { PageId } from '../types/navigation';

interface CheckoutPageProps {
  onNavigate: (page: PageId) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ onNavigate }) => {
  const { items, subtotal, discountAmount, deliveryFee, finalTotal, clearCart } = useCart();
  const { showNotification } = useNotification();

  // Form states
  const [fullName, setFullName] = useState('Devendra Patel');
  const [phone, setPhone] = useState('9876543210');
  const [addressLine, setAddressLine] = useState('Flat 402, Shivalik Highstreet, Keshavbaug Party Plot Road');
  const [landmark, setLandmark] = useState('Near Vastrapur Lake');
  const [pincode, setPincode] = useState('380015');
  const [city, setCity] = useState('Ahmedabad');
  const [addressType, setAddressType] = useState<'home' | 'office' | 'other'>('home');

  // Slot & Payment states
  const [deliverySlot, setDeliverySlot] = useState<'express' | 'evening' | 'morning'>('express');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  const grandTotal = finalTotal + 5; // adding 5 rs handling

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !addressLine || !pincode) {
      showNotification('Please fill in your delivery address details.', 'info');
      return;
    }

    setIsPlacingOrder(true);

    setTimeout(() => {
      const generatedOrderId = `NVM-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedOrderId);
      setIsPlacingOrder(false);
      setOrderConfirmed(true);
      clearCart();

      // Launch victory confetti
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#071D49', '#0057D9', '#00C8F8', '#20E78A'],
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 1200);
  };

  return (
    <div className="bg-[#F7F9FC] min-h-screen py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#071D49] tracking-tight">
              Express Checkout
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select delivery destination and instant payment to confirm your dispatch.
            </p>
          </div>

          <button
            onClick={() => onNavigate('cart')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0057D9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Cart</span>
          </button>
        </div>

        {/* Confirmation Modal */}
        <AnimatePresence>
          {orderConfirmed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-3xl p-8 sm:p-10 max-w-lg w-full text-center shadow-2xl relative border border-slate-100"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-[#20E78A] stroke-[2.5]" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#20E78A]" />
                  Order Placed Successfully!
                </div>

                <h2 className="text-2xl font-black text-[#071D49] mb-1">
                  Thank You for Your Order!
                </h2>
                <p className="text-xs text-slate-400 font-mono mb-4">
                  Order ID: <strong className="text-[#071D49]">{orderId}</strong>
                </p>

                <div className="bg-[#F7F9FC] rounded-2xl p-4 text-left space-y-2 mb-6 border border-slate-100 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Estimated Delivery:</span>
                    <strong className="text-emerald-700 font-bold">15-30 Minutes</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Delivering To:</span>
                    <strong className="text-[#071D49] truncate max-w-[200px]">{addressLine}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Payment Status:</span>
                    <strong className="text-[#0057D9] font-bold uppercase">{paymentMethod} (Confirmed)</strong>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onNavigate('account')}
                    className="flex-1 py-3 px-5 rounded-full bg-[#071D49] hover:bg-[#0057D9] text-white text-xs font-bold transition shadow-md cursor-pointer"
                  >
                    View in My Orders
                  </button>
                  <button
                    onClick={() => onNavigate('home')}
                    className="flex-1 py-3 px-5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold transition cursor-pointer"
                  >
                    Back to Homepage
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left 2 Cols: Delivery Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Delivery Address */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0057D9] flex items-center justify-center font-black text-sm">
                  1
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-extrabold text-[#071D49]">
                    Delivery Address
                  </h2>
                  <p className="text-xs text-slate-400">Where should our rider bring your groceries?</p>
                </div>
              </div>

              {/* Tag options */}
              <div className="flex gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => setAddressType('home')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer transition ${
                    addressType === 'home'
                      ? 'bg-[#071D49] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAddressType('office')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer transition ${
                    addressType === 'office'
                      ? 'bg-[#071D49] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Building className="w-3.5 h-3.5" />
                  <span>Office</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#0057D9]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone Number (For OTP/Delivery)</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#0057D9]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Flat / House No. & Building / Society</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={addressLine}
                      onChange={(e) => setAddressLine(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#0057D9]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Landmark</label>
                  <input
                    type="text"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#0057D9]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Pincode</label>
                    <input
                      type="text"
                      required
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#0057D9]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">City</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#0057D9]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Delivery Slot */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0057D9] flex items-center justify-center font-black text-sm">
                  2
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-extrabold text-[#071D49]">
                    Select Delivery Slot
                  </h2>
                  <p className="text-xs text-slate-400">Choose when you want your groceries handed over.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliverySlot('express')}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition ${
                    deliverySlot === 'express'
                      ? 'border-[#0057D9] bg-blue-50/50 shadow-xs'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-extrabold text-[#071D49]">⚡ Express</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      FASTEST
                    </span>
                  </div>
                  <div className="text-sm font-black text-[#0057D9]">15-30 Mins</div>
                  <div className="text-[10px] text-slate-500 mt-1">Dispatched immediately</div>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliverySlot('evening')}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition ${
                    deliverySlot === 'evening'
                      ? 'border-[#0057D9] bg-blue-50/50 shadow-xs'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-extrabold text-[#071D49]">Evening Slot</span>
                  </div>
                  <div className="text-sm font-black text-[#071D49]">5:00 - 8:00 PM</div>
                  <div className="text-[10px] text-slate-500 mt-1">Today evening delivery</div>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliverySlot('morning')}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition ${
                    deliverySlot === 'morning'
                      ? 'border-[#0057D9] bg-blue-50/50 shadow-xs'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-extrabold text-[#071D49]">Tomorrow Slot</span>
                  </div>
                  <div className="text-sm font-black text-[#071D49]">7:00 - 9:00 AM</div>
                  <div className="text-[10px] text-slate-500 mt-1">Fresh breakfast basket</div>
                </button>
              </div>
            </div>

            {/* Step 3: Payment Method */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0057D9] flex items-center justify-center font-black text-sm">
                  3
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-extrabold text-[#071D49]">
                    Payment Mode
                  </h2>
                  <p className="text-xs text-slate-400">All transactions are encrypted and secured.</p>
                </div>
              </div>

              <div className="space-y-3">
                <label
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition ${
                    paymentMethod === 'upi' ? 'border-[#0057D9] bg-blue-50/50' : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="text-[#0057D9]"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#071D49]">Instant UPI / QR</div>
                      <div className="text-[10px] text-slate-400">Google Pay, PhonePe, Paytm, BHIM</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#0057D9] bg-blue-50 px-2 py-0.5 rounded-full">
                    Recommended
                  </span>
                </label>

                <label
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition ${
                    paymentMethod === 'card' ? 'border-[#0057D9] bg-blue-50/50' : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="text-[#0057D9]"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#071D49]">Credit / Debit Card</div>
                      <div className="text-[10px] text-slate-400">Visa, Mastercard, RuPay cards</div>
                    </div>
                  </div>
                </label>

                <label
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition ${
                    paymentMethod === 'cod' ? 'border-[#0057D9] bg-blue-50/50' : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="text-[#0057D9]"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#071D49]">Cash / UPI on Delivery</div>
                      <div className="text-[10px] text-slate-400">Pay rider upon inspection at doorstep</div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Col: Order Summary */}
          <div>
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs sticky top-24 space-y-6">
              <h3 className="font-extrabold text-base text-[#071D49] pb-3 border-b border-slate-100">
                Order Review ({items.length} items)
              </h3>

              <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
                {items.map((it) => (
                  <div key={it.product.id} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-5 h-5 rounded-md bg-slate-100 text-[#071D49] flex items-center justify-center font-bold text-[10px] shrink-0">
                        {it.quantity}×
                      </span>
                      <span className="truncate text-slate-700">{it.product.name}</span>
                    </div>
                    <span className="font-bold text-[#071D49] shrink-0">
                      ₹{it.product.price * it.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#071D49]">₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>Discount</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-500">
                  <span>Delivery</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-600 font-bold">FREE</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Handling Fee</span>
                  <span>₹5</span>
                </div>
                <div className="pt-2 border-t border-slate-100 flex justify-between items-baseline">
                  <span className="font-extrabold text-sm text-[#071D49]">Final Amount</span>
                  <span className="text-2xl font-black text-[#071D49]">₹{grandTotal}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isPlacingOrder}
                className="w-full py-4 px-6 rounded-full bg-[#20E78A] hover:bg-emerald-400 text-[#071D49] font-black text-sm transition shadow-lg active:scale-95 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isPlacingOrder ? (
                  <span>Confirming Order...</span>
                ) : (
                  <>
                    <span>Place Order (₹{grandTotal})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>NUVAMILO Guarantee: 100% refund if not fresh</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
