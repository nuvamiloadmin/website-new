import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Award, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';

interface FreshStoriesSectionProps {
  onNavigateAbout?: () => void;
  onNavigateShop?: () => void;
}

export const FreshStoriesSection: React.FC<FreshStoriesSectionProps> = ({
  onNavigateAbout,
  onNavigateShop,
}) => {
  const stories = [
    {
      title: 'Direct Farm Harvest Within 6 Hours',
      tag: 'ORIGIN & HARVEST',
      image: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=800&q=80',
      description: 'We partner directly with over 120 certified regional farmers. Produce picked at 4 AM reaches your kitchen counter before lunch, completely bypassing warehouse rot.',
      stat: '6 hrs',
      statLabel: 'Harvest to Doorstep',
    },
    {
      title: 'Unpolished Grains & Authentic Cold Pressed Oils',
      tag: 'PURE PANTRY',
      image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
      description: 'Zero chemical bleaching or synthetic wax. Our dals preserve their nutritious natural aleurone seed coat, and oils are extracted using traditional slow wooden churners.',
      stat: '100%',
      statLabel: 'Unadulterated & Lab Tested',
    },
    {
      title: 'Eco-Friendly Kraft Packaging & Plastic Neutrality',
      tag: 'SUSTAINABILITY',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
      description: 'Your groceries arrive in breathable, food-grade biodegradable paper bags and returnable insulated totes, keeping vegetables naturally crisp while protecting the earth.',
      stat: '0 Plastic',
      statLabel: 'Primary Produce Wrapping',
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
              <Leaf className="w-3.5 h-3.5 text-[#20E78A]" />
              The Nuvamilo Fresh Promise
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071D49] tracking-tight">
              Fresh Stories from Farm to Your Table
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-slate-500 max-w-2xl">
              Discover how our transparent supply chain and hyperlocal network bring honest food and pantry essentials to modern homes.
            </p>
          </div>

          {onNavigateAbout && (
            <button
              onClick={onNavigateAbout}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0057D9] hover:text-[#071D49] transition-colors self-start md:self-end cursor-pointer"
            >
              <span>Our Sourcing Story</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#009BFF]/40 overflow-hidden flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur-xs px-3 py-1 text-[11px] font-extrabold text-[#071D49] tracking-wider uppercase shadow-xs">
                    {story.tag}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xl sm:text-2xl font-black text-[#20E78A] block">
                      {story.stat}
                    </span>
                    <span className="text-xs text-slate-200 font-medium">
                      {story.statLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#071D49] mb-2 leading-snug group-hover:text-[#0057D9] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onNavigateShop}
                  className="w-full py-2.5 rounded-full border border-slate-200 hover:border-[#071D49] hover:bg-[#071D49] hover:text-white text-xs font-bold text-[#071D49] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Shop Verified Fresh</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
