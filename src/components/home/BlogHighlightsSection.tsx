import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../../data/blogData';
import { BlogPost } from '../../types/commerce';

interface BlogHighlightsSectionProps {
  onNavigateBlog?: () => void;
  onNavigatePost?: (slug: string) => void;
}

export const BlogHighlightsSection: React.FC<BlogHighlightsSectionProps> = ({
  onNavigateBlog,
  onNavigatePost,
}) => {
  return (
    <section className="py-16 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#0057D9] uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              Fresh Stories & Kitchen Wisdom
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071D49] tracking-tight">
              Latest from the NUVAMILO Journal
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-slate-500 max-w-2xl">
              Nutrition insights, storage hacks to keep produce crisp, and wholesome recipes from culinary experts.
            </p>
          </div>

          {onNavigateBlog && (
            <button
              onClick={onNavigateBlog}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0057D9] hover:text-[#071D49] transition-colors self-start md:self-end"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              onClick={() => onNavigatePost && onNavigatePost(post.slug)}
              className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#009BFF]/40 overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-white/95 backdrop-blur-xs px-3 py-1 text-xs font-bold text-[#071D49] shadow-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#071D49] group-hover:text-[#0057D9] transition-colors line-clamp-2 leading-snug mb-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Read CTA */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#071D49]">{post.author}</div>
                  <div className="text-[10px] text-slate-400">{post.authorRole}</div>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0057D9] group-hover:translate-x-1 transition-transform">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
