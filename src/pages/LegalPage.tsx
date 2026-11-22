import React from 'react';
import { PageId } from '../types/navigation';
import { PageHeader } from '../components/PageHeader';
import { RevealBlock } from '../components/MotionPrimitives';

interface LegalPageProps {
  mode: 'privacy' | 'terms' | 'shipping' | 'refund';
  onNavigate: (page: PageId) => void;
}

const SHIPPING_SECTIONS = [
  {
    id: 'dispatch',
    title: '01. Hyperlocal 15-30 Minute Express Delivery',
    body: [
      'NUVAMILO operates a network of hyperlocal micro-fulfilment centers and partnered verified grocery stores. Once your order is confirmed, our automated batching system alerts the nearest picker within 60 seconds.',
      'Our dedicated rider fleet arrives at your doorstep typically within 15 to 30 minutes in active serviceable pincodes.',
    ],
  },
  {
    id: 'fee-structure',
    title: '02. Shipping Charges & Free Delivery Threshold',
    body: [
      'Orders with an item subtotal of ₹499 or more qualify for FREE Express Delivery. For orders below ₹499, a nominal delivery fee of ₹29 to ₹40 applies to ensure prompt and sustainable rider compensation.',
      'During monsoon surges or peak holiday hours, slight dispatch windows may adjust to ensure rider road safety.',
    ],
  },
  {
    id: 'packaging',
    title: '03. Eco-Friendly & Insulated Cold-Chain Packaging',
    body: [
      'Dairy, frozen items, and farm fresh vegetables are packed in insulated temperature-regulated totes. Groceries are delivered in unbleached food-grade kraft bags to eliminate single-use plastic waste.',
    ],
  },
];

const REFUND_SECTIONS = [
  {
    id: 'policy',
    title: '01. 100% Freshness Guarantee & Doorstep Inspection',
    body: [
      'At NUVAMILO, we guarantee the freshness and quality of every fruit, vegetable, dairy product, and packaged grocery staple we deliver.',
      'Upon arrival of your order, you are welcome to inspect all items while the delivery executive is present. If any vegetable or grocery product does not meet your complete satisfaction, you can return it to the delivery executive on the spot with zero questions asked.',
    ],
  },
  {
    id: 'return-window',
    title: '02. Hassle-Free Post-Delivery Return Window',
    body: [
      'Perishable Produce (Vegetables, Fruits, Fresh Dairy & Bakery): Any quality issues can be reported within 24 hours of delivery directly through the NUVAMILO App or by contacting customer support.',
      'Packaged Food & Household Staples: Unopened items with intact manufacturer seals can be returned or exchanged within 48 hours of delivery.',
    ],
  },
  {
    id: 'refund-timeline',
    title: '03. Automated Refund Processing & Timelines',
    body: [
      'UPI / Instant QR Payments: Refunds are initiated automatically and credited to your original UPI account (GPay, PhonePe, Paytm, BHIM) within 15 minutes to 2 hours.',
      'Credit & Debit Cards: Refunds are processed through our banking gateway within 24 hours, reflecting on your bank statement within 3 to 5 working days depending on your bank.',
      'Cash on Delivery (COD) Orders: For items returned at the doorstep on COD orders, the bill amount is deducted immediately. For post-delivery returns, refunds are credited directly to your verified UPI ID or NUVAMILO Store Wallet as preferred.',
    ],
  },
  {
    id: 'damaged-items',
    title: '04. Damaged, Defective, or Incorrect Deliveries',
    body: [
      'If you receive an item with damaged packaging, broken seals, or an incorrect variant, simply snap a quick photo and raise a ticket under "My Orders" or message our support team on WhatsApp at +91 98765 43210. An instant replacement or full refund will be dispatched immediately.',
    ],
  },
  {
    id: 'support-contact',
    title: '05. Dedicated Customer Support & Assistance',
    body: [
      'Our customer care team is available daily from 6:00 AM to 11:00 PM IST to assist with cancellations, order modifications, and immediate refund queries. Email us at support@nuvamilo.in or tap "Contact Us" anytime.',
    ],
  },
];

const PRIVACY_SECTIONS = [
  {
    id: 'overview',
    title: '01. Information We Collect',
    body: [
      'When you interact with NUVAMILO—such as submitting a contact inquiry, expressing interest as a local retail partner, or browsing our digital experiences—we only collect information you voluntarily provide, including your name, business name, email address, phone number, and inquiry details.',
      'We may also collect standard, non-identifying technical metadata required to ensure reliable page rendering, security, and cross-device compatibility.',
    ],
  },
  {
    id: 'usage',
    title: '02. How Information Is Used',
    body: [
      'Information shared with NUVAMILO is used strictly to respond to your inquiries, evaluate merchant collaboration requests, communicate brand updates when requested, and improve the clarity and usability of our digital interfaces.',
      'NUVAMILO does not sell personal contact information to third-party data brokers.',
    ],
  },
  {
    id: 'protection',
    title: '03. Data Care & Retention',
    body: [
      'We apply reasonable administrative and technical safeguards to protect submitted inquiry data against unauthorized access or disclosure. Information is retained only as long as necessary to fulfill the purpose of your inquiry or satisfy applicable legal obligations.',
    ],
  },
  {
    id: 'rights',
    title: '04. Your Choices & Inquiries',
    body: [
      'You may request access to, correction of, or deletion of personal details you have shared with NUVAMILO at any time by contacting our team via our Contact Us page or writing to support@nuvamilo.in.',
    ],
  },
];

const TERMS_SECTIONS = [
  {
    id: 'acceptance',
    title: '01. Brand & Website Purpose',
    body: [
      'This website presents the NUVAMILO brand, product category focus (groceries, fresh vegetables, fresh fruits, daily essentials, and household products), customer experience concepts, and merchant partnership information.',
      'By accessing or using this website, you agree to use its content and inquiry forms lawfully and respectfully.',
    ],
  },
  {
    id: 'intellectual-property',
    title: '02. Brand Identity & Intellectual Property',
    body: [
      'The NUVAMILO name, the gradient N emblem, wordmark, original visual scenes, packaging designs, and written editorial materials are proprietary to NUVAMILO. They may not be reproduced, altered, or redistributed for commercial misrepresentation without prior written consent.',
    ],
  },
  {
    id: 'partnerships',
    title: '03. Partnership & Contact Submissions',
    body: [
      'Submitting a store partnership form or contact inquiry expresses interest in connecting with NUVAMILO and does not constitute a binding commercial agreement until formally agreed in writing by both parties.',
    ],
  },
  {
    id: 'updates',
    title: '04. Updates to These Terms',
    body: [
      'NUVAMILO may refine these Terms & Conditions periodically as our commerce ecosystem evolves. Updated terms take effect upon publication on this page.',
    ],
  },
];

export const LegalPage: React.FC<LegalPageProps> = ({ mode, onNavigate }) => {
  let title = 'Privacy Policy';
  let description = 'How NUVAMILO respects, handles, and protects information shared through our platform.';
  let sections = PRIVACY_SECTIONS;

  if (mode === 'terms') {
    title = 'Terms & Conditions';
    description = 'Clear guidelines governing the use of the NUVAMILO website, services, and brand assets.';
    sections = TERMS_SECTIONS;
  } else if (mode === 'shipping') {
    title = 'Express Shipping Policy';
    description = 'Hyperlocal 15-30 minute delivery timelines, free delivery threshold, and cold-chain care.';
    sections = SHIPPING_SECTIONS;
  } else if (mode === 'refund') {
    title = 'Return & Refund Policy';
    description = 'Our 100% fresh promise, instant doorstep return checks, and automated digital refunds.';
    sections = REFUND_SECTIONS;
  }

  return (
    <div className="bg-white text-[#071C44]">
      <PageHeader
        eyebrow="Customer Policies & Governance"
        title={title}
        description={description}
        secondaryAction={{
          label: 'Contact Support',
          onClick: () => onNavigate('contact'),
        }}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Table of Contents */}
            <aside className="lg:col-span-4">
              <RevealBlock className="lg:sticky lg:top-24 rounded-2xl bg-[#F5F8FC] border border-[#071C44]/8 p-6 space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#075BE8]">
                  Document Outline
                </p>
                <nav className="space-y-2.5" aria-label="Document sections">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block text-sm font-semibold text-[#071C44]/75 hover:text-[#075BE8] hover:translate-x-1 transition-all duration-200"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
                <div className="pt-4 border-t border-[#071C44]/10 text-xs text-[#071C44]/55">
                  NUVAMILO Brand Documentation
                </div>
              </RevealBlock>
            </aside>

            {/* Prose Content */}
            <div className="lg:col-span-8 space-y-10 divide-y divide-[#071C44]/10">
              {sections.map((sec, idx) => (
                <RevealBlock key={sec.id} delay={idx * 0.05} className="pt-8 first:pt-0 space-y-4">
                  <section id={sec.id} className="space-y-4">
                    <h2 className="font-display text-2xl font-bold text-[#071C44]">
                      {sec.title}
                    </h2>
                    <div className="space-y-4">
                      {sec.body.map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-base leading-[1.75] text-[#071C44]/78 max-w-[70ch]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                </RevealBlock>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
