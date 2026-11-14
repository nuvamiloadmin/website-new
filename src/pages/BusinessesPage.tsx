import React from 'react';
import { ArrowRight, Layers, ShoppingBag, Store, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_ASSETS } from '../data/nuvamiloData';
import { PageId } from '../types/navigation';
import { PageHeader } from '../components/PageHeader';
import { MediaFrame } from '../components/MediaFrame';
import {
  HoverLiftCard,
  RevealBlock,
  StaggerGroup,
  StaggerItem,
} from '../components/MotionPrimitives';

interface BusinessesPageProps {
  onNavigate: (page: PageId) => void;
}

export const BusinessesPage: React.FC<BusinessesPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-[#071C44]">
      <PageHeader
        eyebrow="For Businesses"
        title="Give your local store a modern digital presence built for everyday growth."
        description="NUVAMILO helps neighborhood grocers, produce markets, and essentials retailers showcase products clearly, organize daily orders, and connect with modern shoppers."
        primaryAction={{
          label: 'Partner With Us',
          onClick: () => onNavigate('partner'),
        }}
        secondaryAction={{
          label: 'Commerce Solutions',
          onClick: () => onNavigate('solutions'),
        }}
        visual={
          <div className="rounded-3xl border border-[#071C44]/10 bg-white p-3">
            <MediaFrame
              src={BRAND_ASSETS.businessMerchant}
              alt="3D illustration of a local store owner holding a tablet inside a modern grocery shop"
              aspectRatio="4/3"
              className="rounded-2xl"
            />
          </div>
        }
      />

      {/* Merchant Pillars */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <RevealBlock className="max-w-2xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#075BE8]">
              Merchant Advantages
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#071C44]">
              Designed to reflect the true quality of your shop.
            </h2>
          </RevealBlock>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggerItem>
              <HoverLiftCard className="group h-full rounded-3xl bg-[#F5F8FC] border border-[#071C44]/8 p-8 space-y-4">
                <Store className="h-6 w-6 text-[#075BE8] transition-transform duration-200 group-hover:scale-110" />
                <h3 className="font-display text-2xl font-bold text-[#071C44]">
                  Polished Digital Storefront
                </h3>
                <p className="text-base leading-relaxed text-[#071C44]/75">
                  Present fresh fruits, vegetables, groceries, and household products in a
                  clean, trustworthy visual layout that customers enjoy revisiting.
                </p>
              </HoverLiftCard>
            </StaggerItem>

            <StaggerItem>
              <HoverLiftCard className="group h-full rounded-3xl bg-[#F5F8FC] border border-[#071C44]/8 p-8 space-y-4">
                <Layers className="h-6 w-6 text-[#075BE8] transition-transform duration-200 group-hover:scale-110" />
                <h3 className="font-display text-2xl font-bold text-[#071C44]">
                  Clear Catalog Organization
                </h3>
                <p className="text-base leading-relaxed text-[#071C44]/75">
                  Structure seasonal produce, staple packs, and daily refills cleanly so
                  every customer basket is accurate from selection to packing.
                </p>
              </HoverLiftCard>
            </StaggerItem>

            <StaggerItem>
              <HoverLiftCard className="group h-full rounded-3xl bg-[#F5F8FC] border border-[#071C44]/8 p-8 space-y-4">
                <ShoppingBag className="h-6 w-6 text-[#075BE8] transition-transform duration-200 group-hover:scale-110" />
                <h3 className="font-display text-2xl font-bold text-[#071C44]">
                  Cohesive Packaging Identity
                </h3>
                <p className="text-base leading-relaxed text-[#071C44]/75">
                  Deliver every order in NUVAMILO Small, Medium, and Large paper bags that
                  elevate your counter presentation at the customer’s doorstep.
                </p>
              </HoverLiftCard>
            </StaggerItem>

            <StaggerItem>
              <HoverLiftCard className="group h-full rounded-3xl bg-[#F5F8FC] border border-[#071C44]/8 p-8 space-y-4">
                <TrendingUp className="h-6 w-6 text-[#075BE8] transition-transform duration-200 group-hover:scale-110" />
                <h3 className="font-display text-2xl font-bold text-[#071C44]">
                  Digital Growth Readiness
                </h3>
                <p className="text-base leading-relaxed text-[#071C44]/75">
                  Expand beyond walk-in footfall by reaching households looking for a
                  dependable, design-forward way to buy daily essentials.
                </p>
              </HoverLiftCard>
            </StaggerItem>
          </StaggerGroup>

          <RevealBlock className="mt-12 rounded-3xl bg-[#071C44] text-white p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Interested in bringing your store onto NUVAMILO?
              </h3>
              <p className="text-base text-white/75">
                Share a few details about your business and product categories through our
                partner inquiry form.
              </p>
            </div>
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('partner')}
              className="group inline-flex items-center justify-center gap-2 shrink-0 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-[#071C44] hover:bg-[#00C8EF] transition-colors cursor-pointer"
            >
              <span>Partner With Us</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
};
