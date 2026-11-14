import React from 'react';
import { ArrowRight, Compass, HeartHandshake, Sparkles, Store } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_ASSETS } from '../data/nuvamiloData';
import { PageId } from '../types/navigation';
import { PageHeader } from '../components/PageHeader';
import { MediaFrame } from '../components/MediaFrame';
import {
  HoverLiftCard,
  ParallaxVisual,
  RevealBlock,
  StaggerGroup,
  StaggerItem,
} from '../components/MotionPrimitives';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-[#071C44]">
      <PageHeader
        eyebrow="About NUVAMILO"
        title="A modern commerce brand built around everyday trust and local retail craft."
        description="NUVAMILO reimagines how neighborhoods shop for fresh produce, groceries, and daily essentials—combining refined digital design for customers with meaningful visibility for independent businesses."
        primaryAction={{
          label: 'Explore Our Categories',
          onClick: () => onNavigate('categories'),
        }}
        secondaryAction={{
          label: 'Partner With Us',
          onClick: () => onNavigate('partner'),
        }}
        visual={
          <div className="rounded-3xl border border-[#071C44]/10 bg-white p-3">
            <MediaFrame
              src={BRAND_ASSETS.brandStory}
              alt="3D illustration of a neighborhood grocer and customer engaging in local retail"
              aspectRatio="4/3"
              className="rounded-2xl"
            />
          </div>
        }
      />

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <RevealBlock className="lg:col-span-6">
              <HoverLiftCard className="h-full rounded-3xl bg-[#F5F8FC] border border-[#071C44]/8 p-8 sm:p-10 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#075BE8]">
                  Our Mission
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071C44]">
                  Make everyday local shopping calm, transparent, and deeply reliable.
                </h2>
                <p className="text-base leading-relaxed text-[#071C44]/75">
                  We focus on the essentials people buy week after week—fresh vegetables,
                  fruits, pantry staples, and household goods—eliminating noisy clutter
                  so both customers and store teams move with clarity.
                </p>
              </HoverLiftCard>
            </RevealBlock>

            <RevealBlock delay={0.1} className="lg:col-span-6">
              <HoverLiftCard className="h-full rounded-3xl bg-[#071C44] text-white p-8 sm:p-10 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2DEB80]">
                  Our Vision
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Give neighborhood retail the digital craft of a flagship brand.
                </h2>
                <p className="text-base leading-relaxed text-white/75">
                  We believe local stores should never have to compromise on presentation
                  to participate in digital commerce. NUVAMILO brings cohesive design,
                  packaging, and customer discovery to community retail.
                </p>
              </HoverLiftCard>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* What NUVAMILO Stands For */}
      <section className="py-16 sm:py-24 bg-[#F5F8FC] border-y border-[#071C44]/8">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <RevealBlock className="max-w-2xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#075BE8]">
              What NUVAMILO Stands For
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#071C44]">
              Four principles guiding every design and commerce decision.
            </h2>
          </RevealBlock>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#071C44]/12 pt-8">
            <StaggerItem className="group space-y-3">
              <Compass className="h-5 w-5 text-[#075BE8] transition-transform duration-200 group-hover:scale-110" />
              <h3 className="font-display text-xl font-bold text-[#071C44] group-hover:text-[#075BE8] transition-colors">
                01. Editorial Clarity Over Clutter
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#071C44]/72">
                Shopping for groceries and household essentials should feel organized and
                peaceful—never crowded with distracting banners or visual noise.
              </p>
            </StaggerItem>

            <StaggerItem className="group space-y-3">
              <Store className="h-5 w-5 text-[#075BE8] transition-transform duration-200 group-hover:scale-110" />
              <h3 className="font-display text-xl font-bold text-[#071C44] group-hover:text-[#075BE8] transition-colors">
                02. Partnership With Local Stores
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#071C44]/72">
                Local retailers are the backbone of everyday supply. NUVAMILO supports
                their storefront presence and day-to-day digital readiness.
              </p>
            </StaggerItem>

            <StaggerItem className="group space-y-3">
              <Sparkles className="h-5 w-5 text-[#075BE8] transition-transform duration-200 group-hover:scale-110" />
              <h3 className="font-display text-xl font-bold text-[#071C44] group-hover:text-[#075BE8] transition-colors">
                03. Attention to Physical Detail
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#071C44]/72">
                From crisp produce selection to our structured Small, Medium, and Large
                branded paper bags, quality shows in how goods arrive.
              </p>
            </StaggerItem>

            <StaggerItem className="group space-y-3">
              <HeartHandshake className="h-5 w-5 text-[#075BE8] transition-transform duration-200 group-hover:scale-110" />
              <h3 className="font-display text-xl font-bold text-[#071C44] group-hover:text-[#075BE8] transition-colors">
                04. Built for Long-Term Credibility
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#071C44]/72">
                We build carefully, communicate honestly, and prioritize durable brand
                trust among shoppers, merchants, and partners alike.
              </p>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Support for Local Businesses & Future Direction */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <RevealBlock className="lg:col-span-6">
              <ParallaxVisual offsetRange={14}>
                <MediaFrame
                  src={BRAND_ASSETS.futureVision}
                  alt="3D architectural render of a contemporary neighborhood retail storefront with a customer and store owner"
                  aspectRatio="16/9"
                  className="rounded-3xl border border-[#071C44]/10"
                />
              </ParallaxVisual>
            </RevealBlock>

            <RevealBlock delay={0.1} className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#075BE8]">
                Future Direction
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#071C44]">
                Growing together with forward-looking merchants.
              </h2>
              <p className="text-base leading-relaxed text-[#071C44]/75">
                As NUVAMILO evolves, our direction remains focused on deepening the
                quality of everyday shopping—expanding category curation, refining
                packaging standards, and opening thoughtful digital pathways for local
                retailers.
              </p>
              <div className="flex flex-wrap gap-3.5 pt-2">
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('businesses')}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#071C44] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#075BE8] transition-colors cursor-pointer"
                >
                  <span>For Businesses</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#071C44]/16 px-6 py-3.5 text-sm font-semibold text-[#071C44] hover:border-[#075BE8] hover:text-[#075BE8] transition-colors cursor-pointer"
                >
                  <span>Contact Our Team</span>
                </motion.button>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>
    </div>
  );
};
