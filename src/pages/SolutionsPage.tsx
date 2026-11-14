import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_ASSETS } from '../data/nuvamiloData';
import { PageId } from '../types/navigation';
import { PageHeader } from '../components/PageHeader';
import { MediaFrame } from '../components/MediaFrame';
import { ParallaxVisual, RevealBlock } from '../components/MotionPrimitives';

interface SolutionsPageProps {
  onNavigate: (page: PageId) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-[#071C44]">
      <PageHeader
        eyebrow="Commerce Solutions"
        title="Connected local retail infrastructure built for modern neighborhoods."
        description="NUVAMILO combines consumer storefront design, merchant presentation, and physical packaging into a unified commerce standard."
        primaryAction={{
          label: 'Partner With Us',
          onClick: () => onNavigate('partner'),
        }}
        secondaryAction={{
          label: 'About NUVAMILO',
          onClick: () => onNavigate('about'),
        }}
        visual={
          <div className="rounded-3xl border border-[#071C44]/10 bg-[#071C44] p-2">
            <MediaFrame
              src={BRAND_ASSETS.futureVision}
              alt="3D architectural render of a contemporary neighborhood retail storefront with a customer and store owner"
              aspectRatio="16/9"
              className="rounded-2xl"
            />
          </div>
        }
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 space-y-16">
          <RevealBlock className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-b border-[#071C44]/10 pb-14">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#075BE8]">
                01. Storefront Identity
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071C44]">
                Digital Merchandising Without Visual Clutter
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <p className="text-base sm:text-lg leading-relaxed text-[#071C44]/75">
                Every product category—from heirloom produce to household refills—is
                structured for immediate readability. Shoppers recognize quality at a
                glance, while stores avoid competing in chaotic discount carousels.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5 text-sm font-medium text-[#071C44]/85">
                  <Check className="h-4 w-4 text-[#075BE8] shrink-0 mt-0.5" />
                  <span>Consistent category architecture across mobile and web</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm font-medium text-[#071C44]/85">
                  <Check className="h-4 w-4 text-[#075BE8] shrink-0 mt-0.5" />
                  <span>High-clarity imagery and pack descriptions</span>
                </div>
              </div>
            </div>
          </RevealBlock>

          <RevealBlock className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-b border-[#071C44]/10 pb-14">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#075BE8]">
                02. Order & Packaging Alignment
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071C44]">
                Cohesive Handoff From Counter to Doorstep
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-[#071C44]/75">
                Digital orders translate cleanly into physical preparation. With
                purpose-sized Small, Medium, and Large NUVAMILO paper bags, delicate
                fruits and leafy vegetables travel upright and separated from household
                goods.
              </p>
              <ParallaxVisual offsetRange={12}>
                <div className="rounded-3xl overflow-hidden border border-[#071C44]/10">
                  <MediaFrame
                    src={BRAND_ASSETS.packagingBags}
                    alt="NUVAMILO Small, Medium, and Large paper bags"
                    aspectRatio="16/9"
                  />
                </div>
              </ParallaxVisual>
            </div>
          </RevealBlock>

          <RevealBlock className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#075BE8]">
                03. Scalable Retail Vision
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071C44]">
                Designed for Community-Scale Commerce
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5">
              <p className="text-base sm:text-lg leading-relaxed text-[#071C44]/75">
                NUVAMILO bridges the gap between boutique digital experience and daily
                grocery reality—creating a brand ecosystem that resonates equally with
                modern households, independent merchants, and strategic partners.
              </p>
              <div className="flex flex-wrap gap-3.5 pt-1">
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('partner')}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#071C44] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#075BE8] transition-colors cursor-pointer"
                >
                  <span>Start a Partnership Conversation</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#071C44]/16 px-6 py-3.5 text-sm font-semibold text-[#071C44] hover:border-[#075BE8] hover:text-[#075BE8] transition-colors cursor-pointer"
                >
                  <span>Contact Us</span>
                </motion.button>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
};
