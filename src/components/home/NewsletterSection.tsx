import React, { useState } from 'react';
import { Mail, Check, Sparkles, Send, ShieldCheck } from 'lucide-react';
import { useNotification } from '../../context/NotificationContext';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');
  const { showNotification } = useNotification();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubscribed(true);
    showNotification('🎉 Welcome! Use code NUVAMILO50 for ₹50 off your first order.', 'success');
  };

  return (
    <section className="py-16 bg-[#F7F9FC] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#071D49] via-[#072460] to-[#0057D9] text-white p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Decorative background blurs */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#20E78A]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#00C8F8]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-xs font-bold text-[#20E78A] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Exclusive Grocery Perks
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Get ₹100 Off Your First Grocery Order
            </h2>
            <p className="mt-3 text-slate-200 text-sm sm:text-base leading-relaxed">
              Subscribe to the NUVAMILO newsletter to get seasonal harvest updates, flash sale notifications, and secret member promo codes delivered weekly.
            </p>

            {isSubscribed ? (
              <div className="mt-8 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-[#20E78A]/50 inline-flex items-center gap-3 text-[#20E78A]">
                <div className="w-8 h-8 rounded-full bg-[#20E78A] text-[#071D49] flex items-center justify-center font-bold">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white text-sm">You're Subscribed!</div>
                  <div className="text-xs text-slate-200">Use promo code <span className="font-mono font-bold text-[#20E78A]">NUVAMILO50</span> at checkout.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
                <div className="flex flex-col sm:flex-row items-center gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl sm:rounded-full border border-white/20 shadow-inner">
                  <div className="flex items-center gap-2 pl-4 w-full">
                    <Mail className="w-5 h-5 text-slate-300 shrink-0" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="w-full bg-transparent py-2.5 text-sm text-white placeholder-slate-300 focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto shrink-0 px-6 py-3 rounded-xl sm:rounded-full bg-[#20E78A] hover:bg-emerald-400 text-[#071D49] font-extrabold text-sm transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                {error && (
                  <p className="mt-2 text-xs text-rose-300 font-medium">{error}</p>
                )}

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-[#20E78A]" />
                  <span>Zero spam. Unsubscribe at any time with a single click.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
