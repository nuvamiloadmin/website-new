import React, { useState } from 'react';
import { Check, CheckCircle2, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { BRAND_ASSETS } from '../data/nuvamiloData';
import { PageId } from '../types/navigation';
import { PageHeader } from '../components/PageHeader';
import { MediaFrame } from '../components/MediaFrame';
import { EASE_PREMIUM, RevealBlock } from '../components/MotionPrimitives';

interface PartnerPageProps {
  onNavigate: (page: PageId) => void;
}

const PARTNER_CATEGORIES = [
  'Groceries & Pantry',
  'Fresh Vegetables',
  'Fresh Fruits',
  'Daily Essentials',
  'Household Products',
];

export const PartnerPage: React.FC<PartnerPageProps> = ({ onNavigate }) => {
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'Groceries & Pantry',
  ]);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((item) => item !== cat) : [...prev, cat]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim() || !contactName.trim()) {
      setError('Please enter your business name and contact person.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address so our team can reach you.');
      return;
    }
    if (selectedCategories.length === 0) {
      setError('Please select at least one primary retail category.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-[#071C44]">
      <PageHeader
        eyebrow="Partner With Us"
        title="Bring your neighborhood store into the NUVAMILO commerce experience."
        description="Whether you operate a fresh produce market, grocery store, or daily essentials retailer, share your store profile below to begin a partnership conversation."
        secondaryAction={{
          label: 'Explore For Businesses',
          onClick: () => onNavigate('businesses'),
        }}
        visual={
          <div className="rounded-3xl border border-[#071C44]/10 bg-white p-3">
            <MediaFrame
              src={BRAND_ASSETS.businessMerchant}
              alt="3D illustration of a neighborhood shop owner with tablet and organized shelves"
              aspectRatio="4/3"
              className="rounded-2xl"
            />
          </div>
        }
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Guidance */}
            <RevealBlock className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#075BE8]">
                Partnership Inquiry
              </span>
              <h2 className="font-display text-3xl font-bold text-[#071C44]">
                What to expect after submitting your inquiry.
              </h2>
              <p className="text-base leading-relaxed text-[#071C44]/75">
                Every partnership conversation starts with understanding your store,
                category mix, and everyday customer priorities.
              </p>

              <ul className="space-y-4 pt-2 border-t border-[#071C44]/10">
                <li className="flex items-start gap-3 text-sm sm:text-base text-[#071C44]/85">
                  <Check className="h-5 w-5 shrink-0 text-[#075BE8] mt-0.5" />
                  <span>Direct review by the NUVAMILO merchant onboarding team</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-[#071C44]/85">
                  <Check className="h-5 w-5 shrink-0 text-[#075BE8] mt-0.5" />
                  <span>Guidance on catalog presentation and product clarity</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-[#071C44]/85">
                  <Check className="h-5 w-5 shrink-0 text-[#075BE8] mt-0.5" />
                  <span>Alignment on signature NUVAMILO Small, Medium, and Large packaging</span>
                </li>
              </ul>

              <div className="rounded-3xl overflow-hidden border border-[#071C44]/10">
                <MediaFrame
                  src={BRAND_ASSETS.packagingBags}
                  alt="NUVAMILO branded paper shopping bags"
                  aspectRatio="16/9"
                />
              </div>
            </RevealBlock>

            {/* Right Form */}
            <RevealBlock delay={0.1} className="lg:col-span-7">
              <div className="rounded-3xl bg-[#F5F8FC] border border-[#071C44]/10 p-6 sm:p-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="submitted"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                      className="py-10 text-center space-y-5"
                    >
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2DEB80]/20 text-[#071C44]">
                        <CheckCircle2 className="h-7 w-7 text-[#075BE8]" />
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#071C44]">
                        Partnership inquiry received
                      </h3>
                      <p className="mx-auto max-w-md text-base leading-relaxed text-[#071C44]/75">
                        Thank you, <span className="font-semibold text-[#071C44]">{contactName}</span>. We
                        have recorded the details for{' '}
                        <span className="font-semibold text-[#071C44]">{businessName}</span> and will
                        follow up at <span className="font-semibold text-[#075BE8]">{email}</span>.
                      </p>
                      <motion.button
                        type="button"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setSubmitted(false);
                          setBusinessName('');
                          setContactName('');
                          setEmail('');
                          setPhone('');
                          setNotes('');
                        }}
                        className="inline-flex items-center justify-center rounded-xl bg-[#071C44] px-6 py-3 text-sm font-semibold text-white hover:bg-[#075BE8] transition-colors cursor-pointer"
                      >
                        Submit Another Inquiry
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      noValidate
                    >
                      <div>
                        <h3 className="font-display text-2xl font-bold text-[#071C44]">
                          Store & Business Details
                        </h3>
                        <p className="mt-1 text-sm text-[#071C44]/65">
                          Complete the fields below to connect with NUVAMILO.
                        </p>
                      </div>

                      {error && (
                        <div
                          role="alert"
                          className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
                        >
                          {error}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="partner-business"
                            className="block text-sm font-semibold text-[#071C44] mb-1.5"
                          >
                            Business / Store Name *
                          </label>
                          <input
                            id="partner-business"
                            type="text"
                            required
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            placeholder="e.g., Greenleaf Fresh Market"
                            className="w-full rounded-xl border border-[#071C44]/15 bg-white px-4 py-3 text-sm text-[#071C44] placeholder:text-[#071C44]/40 focus:border-[#075BE8] focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="partner-contact"
                            className="block text-sm font-semibold text-[#071C44] mb-1.5"
                          >
                            Contact Person *
                          </label>
                          <input
                            id="partner-contact"
                            type="text"
                            required
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            placeholder="Your full name"
                            className="w-full rounded-xl border border-[#071C44]/15 bg-white px-4 py-3 text-sm text-[#071C44] placeholder:text-[#071C44]/40 focus:border-[#075BE8] focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="partner-email"
                            className="block text-sm font-semibold text-[#071C44] mb-1.5"
                          >
                            Business Email *
                          </label>
                          <input
                            id="partner-email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@storename.com"
                            className="w-full rounded-xl border border-[#071C44]/15 bg-white px-4 py-3 text-sm text-[#071C44] placeholder:text-[#071C44]/40 focus:border-[#075BE8] focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="partner-phone"
                            className="block text-sm font-semibold text-[#071C44] mb-1.5"
                          >
                            Phone Number (Optional)
                          </label>
                          <input
                            id="partner-phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Preferred contact number"
                            className="w-full rounded-xl border border-[#071C44]/15 bg-white px-4 py-3 text-sm text-[#071C44] placeholder:text-[#071C44]/40 focus:border-[#075BE8] focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <span className="block text-sm font-semibold text-[#071C44] mb-2">
                          Primary Categories *
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {PARTNER_CATEGORIES.map((cat) => {
                            const active = selectedCategories.includes(cat);
                            return (
                              <motion.button
                                key={cat}
                                type="button"
                                whileTap={{ scale: 0.96 }}
                                onClick={() => toggleCategory(cat)}
                                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors border cursor-pointer ${
                                  active
                                    ? 'bg-[#071C44] text-white border-[#071C44]'
                                    : 'bg-white text-[#071C44]/80 border-[#071C44]/15 hover:border-[#075BE8]'
                                }`}
                              >
                                {cat}
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="partner-notes"
                          className="block text-sm font-semibold text-[#071C44] mb-1.5"
                        >
                          Tell Us About Your Store
                        </label>
                        <textarea
                          id="partner-notes"
                          rows={4}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Share what products you specialize in and what you hope to achieve with NUVAMILO..."
                          className="w-full rounded-xl border border-[#071C44]/15 bg-white px-4 py-3 text-sm text-[#071C44] placeholder:text-[#071C44]/40 focus:border-[#075BE8] focus:outline-none resize-y transition-colors"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#071C44] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#075BE8] transition-colors cursor-pointer"
                      >
                        <span>Submit Partnership Inquiry</span>
                        <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>
    </div>
  );
};
