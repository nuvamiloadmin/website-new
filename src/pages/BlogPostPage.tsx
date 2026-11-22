import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, Share2, Tag, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { PageId } from '../types/navigation';
import { useNotification } from '../context/NotificationContext';

interface BlogPostPageProps {
  slug?: string;
  onNavigate: (page: PageId) => void;
  onNavigateBlog: (slug?: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  slug,
  onNavigate,
  onNavigateBlog,
}) => {
  const { showNotification } = useNotification();
  const post = BLOG_POSTS.find((p) => p.slug === slug) ?? BLOG_POSTS[0];

  return (
    <div className="bg-[#F7F9FC] min-h-screen py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('blog')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#0057D9] transition-colors mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Journal Articles</span>
        </button>

        <article className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 sm:p-10 lg:p-12 overflow-hidden">
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-[#0057D9] uppercase tracking-wider">
              {post.category}
            </span>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: post.title, url: window.location.href }).catch(() => {});
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  showNotification('Article link copied!', 'info');
                }
              }}
              className="p-2 rounded-full border border-slate-200 text-slate-500 hover:text-[#071D49] cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071D49] leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-400 pb-6 border-b border-slate-100 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#071D49] text-white flex items-center justify-center font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <span className="font-bold text-[#071D49] block">{post.author}</span>
                <span className="text-[10px] text-slate-400">{post.authorRole}</span>
              </div>
            </div>
            <span>•</span>
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

          <div className="rounded-2xl overflow-hidden mb-8 aspect-video bg-slate-100">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4">
            <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed italic bg-blue-50/50 p-4 rounded-2xl border-l-4 border-[#0057D9]">
              {post.excerpt}
            </p>
            <div className="whitespace-pre-line text-slate-700">
              {post.content}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 mr-2">Tags:</span>
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-slate-100 text-[#071D49] text-xs font-semibold"
              >
                #{t}
              </span>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};
