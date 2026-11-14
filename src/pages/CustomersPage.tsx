import React from 'react';
import { ArrowRight, Compass, ShoppingBag, Smartphone, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_ASSETS } from '../data/nuvamiloData';
import { PageId } from '../types/navigation';
import { PageHeader } from '../components/PageHeader';
import { PhoneAppMockup } from '../components/PhoneAppMockup';
import {
  HoverLiftCard,
  RevealBlock,
  StaggerGroup,
  StaggerItem,
} from '../components/MotionPrimitives';

interface CustomersPageProps {
  onNavigate: (page: PageId) => void;
}

export const CustomersPage: React.FC<CustomersPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-[#071C44]">
      <PageHeader
        eyebrow="For Customers"
        title="Everyday shopping designed around calm clarity, freshness, and ease."
        description="Discover crisp fruits and vegetables, pantry staples, and household refills in a refined mobile experience built to save you time without overwhelming your screen."
        primaryAction={{
          label: 'Browse Categories',
          onClick: () => onNavigate('categories'),
        }}
        secondaryAction={{
          label: 'How It Works',
          onClick: () => onNavigate('how-it-works'),
        }}
        visual={
          <div className="relative flex items-end justify-center py-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-12 bottom-2 h-7 rounded-full bg-[#071C44]/10 blur-xl"
            />
            <motion.img
              src={BRAND_ASSETS.heroScene}
              alt="3D illustration of a NUVAMILO shopper holding smartphone and grocery bag"
              referrerPolicy="no-referrer"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-full max-w-[480px] h-auto object-contain drop-shadow-[0_18px_32px_rgba(7,28,68,0.12)]"
            />
          </div>
        }
      />

      {/* Interactive App Showcase */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <RevealBlock direction="right" className="lg:col-span-5">
              <PhoneAppMockup initialTab="Groceries" />
            </RevealBlock>

            <div className="lg:col-span-7 space-y-8">
              <RevealBlock className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#075BE8]">
                  Customer Experience
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#071C44]">
                  Thoughtful details that make weekly shopping feel effortless.
                </h2>
              </RevealBlock>

              <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <StaggerItem>
                  <HoverLiftCard className="group h-full rounded-2xl bg-[#F5F8FC] border border-[#071C44]/8 p-6 space-y-2.5">
                    <Compass className="h-5 w-5 text-[#075BE8] transition-transform duration-200 group-hover:scale-110" />
                    <h3 className="font-display text-lg font-bold text-[#071C44]">
                      Clean Product Discovery
                    </h3>
                    <p className="text-sm leading-relaxed text-[#071C44]/72">
                      Explore well-organized shelves across Fresh Vegetables, Fruits,
                      Groceries, and Household care without competing popups.
                    </p>
                  </HoverLiftCard>
                </StaggerItem>

                <StaggerItem>
                  <HoverLiftCard className="group h-full rounded-2xl bg-[#F5F8FC] border border-[#071C44]/8 p-6 space-y-2.5">
                    <Smartphone className="h-5 w-5 text-[#075BE8] transition-transform duration-200 group-hover:scale-110" />
                    <h3 className="font-display text-lg font-bold text-[#071C44]">
                      Seamless Mobile Ordering
                    </h3>
                    <p className="text-sm leading-relaxed text-[#071C44]/72">
                      Build and adjust your basket fluidly with clear pack sizes and
                      transparent item details.
                    </p>
                  </HoverLiftCard>
                </StaggerItem>

                <StaggerItem>
                  <HoverLiftCard className="group h-full rounded-2xl bg-[#F5F8FC] border border-[#071C44]/8 p-6 space-y-2.5">
                    <ShoppingBag className="h-5 w-5 text-[#075BE8] transition-transform duration-200 group-hover:scale-110" />
                    <h3 className="font-display text-lg font-bold text-[#071C44]">
                      Protective Bag Packing
                    </h3>
                    <p className="text-sm leading-relaxed text-[#071C44]/72">
                      Orders are packed neatly in Small, Medium, and Large NUVAMILO paper
                      bags designed to protect delicate produce.
                    </p>
                  </HoverLiftCard>
                </StaggerItem>

                <StaggerItem>
                  <HoverLiftCard className="group h-full rounded-2xl bg-[#F5F8FC] border border-[#071C44]/8 p-6 space-y-2.5">
                    <Sparkles className="h-5 w-5 text-[#075BE8] transition-transform duration-200 group-hover:scale-110" />
                    <h3 className="font-display text-lg font-bold text-[#071C44]">
                      Consistent Everyday Quality
                    </h3>
                    <p className="text-sm leading-relaxed text-[#071C44]/72">
                      Curated presentation ensures every item—from avocados to olive oil—is
                      easy to inspect and reorder.
                    </p>
                  </HoverLiftCard>
                </StaggerItem>
              </StaggerGroup>

              <RevealBlock>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-[#075BE8] hover:text-[#071C44] transition-colors cursor-pointer"
                >
                  <span>Have questions? Read our FAQ</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
