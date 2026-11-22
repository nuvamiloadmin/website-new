import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, ArrowLeft, Search, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost } from '../types/commerce';
import { PageId } from '../types/navigation';

interface BlogPageProps {
  onNavigate: (page: PageId) => void;
  onNavigatePost: (slug: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onNavigatePost }) => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allTags = Array.from(new Set(BLOG_POSTS.flatMap((p) => p.tags)));

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedTag !== 'all' && !post.tags.includes(selectedTag)) return false;
    if (
      searchQuery &&
      !post.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="bg-[#F7F9FC] min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-xs font-bold text-[#0057D9] uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            NUVAMILO Journal
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#071D49] tracking-tight">
            Fresh Stories & Grocery Guides
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Kitchen storage secrets, nutritional facts behind unpolished staples, and clean eating advice.
          </p>
        </div>

        {/* Filter bar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedTag('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                selectedTag === 'all'
                  ? 'bg-[#071D49] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Articles
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-[#071D49] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-hidden"
            />
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              onClick={() => onNavigatePost(post.slug)}
              className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#009BFF]/40 overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#071D49]">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-[#071D49] group-hover:text-[#0057D9] transition line-clamp-2 leading-snug mb-2">
                    {post.title}
                  </h2>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#071D49]">{post.author}</div>
                  <div className="text-[10px] text-slate-400">{post.authorRole}</div>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0057D9]">
                  Read Story <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};
