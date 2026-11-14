import React, { useState } from 'react';
import { CheckCircle2, Mail, MessageSquare, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { PageId } from '../types/navigation';
import { PageHeader } from '../components/PageHeader';
import { EASE_PREMIUM, HoverLiftCard, RevealBlock } from '../components/MotionPrimitives';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!message.trim()) {
      setError('Please include a brief message.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-[#071C44]">
      <PageHeader
        eyebrow="Contact Us"
        title="Connect directly with the NUVAMILO team."
        description="Whether you have a question about everyday shopping, press and investor relations, or business collaboration, send us a message below."
        secondaryAction={{
          label: 'View Frequently Asked Questions',
          onClick: () => onNavigate('faq'),
        }}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Direct Channels */}
            <RevealBlock className="lg:col-span-5 space-y-6">
              <HoverLiftCard className="rounded-3xl bg-[#F5F8FC] border border-[#071C44]/10 p-7 space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#075BE8]">
                    Direct Channels
                  </span>
                  <h2 className="font-display text-2xl font-bold text-[#071C44]">
                    How to reach NUVAMILO
                  </h2>
                </div>

                <div className="space-y-4 pt-2 border-t border-[#071C44]/10">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-[#071C44]/10 text-[#075BE8]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#071C44]/60">
                        General & Brand Inquiries
                      </p>
                      <a
                        href="mailto:support@nuvamilo.in"
                        className="text-sm sm:text-base font-bold text-[#071C44] hover:text-[#075BE8] transition-colors"
                      >
                        support@nuvamilo.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-[#071C44]/10 text-[#075BE8]">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#071C44]/60">
                        Merchant & Partner Desk
                      </p>
                      <button
                        type="button"
                        onClick={() => onNavigate('partner')}
                        className="text-sm sm:text-base font-bold text-[#075BE8] hover:text-[#071C44] transition-colors cursor-pointer text-left"
                      >
                        Submit a Store Partnership Inquiry
                      </button>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white border border-[#071C44]/8 p-4 text-xs sm:text-sm leading-relaxed text-[#071C44]/68">
                  Office Address & Telephone Placeholders: Configure verified corporate
                  contact details here prior to regional publication.
                </div>
              </HoverLiftCard>
            </RevealBlock>

            {/* Contact Form */}
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
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2DEB80]/20">
                        <CheckCircle2 className="h-7 w-7 text-[#075BE8]" />
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#071C44]">
                        Message received
                      </h3>
                      <p className="mx-auto max-w-md text-base leading-relaxed text-[#071C44]/75">
                        Thank you for writing to NUVAMILO,{' '}
                        <span className="font-semibold text-[#071C44]">{name}</span>. Our team
                        will respond to{' '}
                        <span className="font-semibold text-[#075BE8]">{email}</span> shortly.
                      </p>
                      <motion.button
                        type="button"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setSubmitted(false);
                          setName('');
                          setEmail('');
                          setMessage('');
                        }}
                        className="inline-flex items-center justify-center rounded-xl bg-[#071C44] px-6 py-3 text-sm font-semibold text-white hover:bg-[#075BE8] transition-colors cursor-pointer"
                      >
                        Send Another Message
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
                          Send Us a Message
                        </h3>
                        <p className="mt-1 text-sm text-[#071C44]/65">
                          Tell us what you are looking for and how we can assist.
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
                            htmlFor="contact-name"
                            className="block text-sm font-semibold text-[#071C44] mb-1.5"
                          >
                            Full Name *
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            className="w-full rounded-xl border border-[#071C44]/15 bg-white px-4 py-3 text-sm text-[#071C44] placeholder:text-[#071C44]/40 focus:border-[#075BE8] focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="contact-email"
                            className="block text-sm font-semibold text-[#071C44] mb-1.5"
                          >
                            Email Address *
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-[#071C44]/15 bg-white px-4 py-3 text-sm text-[#071C44] placeholder:text-[#071C44]/40 focus:border-[#075BE8] focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-topic"
                          className="block text-sm font-semibold text-[#071C44] mb-1.5"
                        >
                          Topic
                        </label>
                        <select
                          id="contact-topic"
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                          className="w-full rounded-xl border border-[#071C44]/15 bg-white px-4 py-3 text-sm text-[#071C44] focus:border-[#075BE8] focus:outline-none transition-colors"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Customer Experience">Customer Experience</option>
                          <option value="Business & Merchant Collaboration">
                            Business & Merchant Collaboration
                          </option>
                          <option value="Investor & Media Relations">
                            Investor & Media Relations
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-message"
                          className="block text-sm font-semibold text-[#071C44] mb-1.5"
                        >
                          Message *
                        </label>
                        <textarea
                          id="contact-message"
                          rows={5}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Write your message here..."
                          className="w-full rounded-xl border border-[#071C44]/15 bg-white px-4 py-3 text-sm text-[#071C44] placeholder:text-[#071C44]/40 focus:border-[#075BE8] focus:outline-none resize-y transition-colors"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#071C44] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#075BE8] transition-colors cursor-pointer"
                      >
                        <span>Send Message</span>
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
