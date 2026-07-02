import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from 'lucide-react';
import { blogPosts } from '../data/index';

export default function BlogArticle() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center text-center px-6 pt-20">
        <h1 className="font-[Outfit] text-4xl font-black text-white mb-4">Article not found</h1>
        <Link to="/blog" className="text-[#F5C400] hover:underline">← Back to Blog</Link>
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);
  const fallback = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#111111] pt-36 pb-0 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 pb-12">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors">
            <ArrowLeft size={15} /> All Articles
          </Link>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-[#F5C400]/12 text-[#F5C400] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="font-[Outfit] text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-white/40 text-sm">
              <span className="flex items-center gap-2"><User size={14} className="text-[#F5C400]" /> {post.author} · {post.authorRole}</span>
              <span className="flex items-center gap-2"><Calendar size={14} className="text-[#F5C400]" /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock size={14} className="text-[#F5C400]" /> {post.readTime}</span>
            </div>
          </motion.div>
        </div>

        {/* Cover image */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-t-2xl overflow-hidden h-80 bg-[#1a1a1a]"
          >
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-16">
            {/* Article content */}
            <div className="lg:col-span-3">
              <div className="max-w-3xl">
                {/* Excerpt lead */}
                <p className="text-[#111111]/75 text-xl leading-relaxed font-medium mb-10 pb-10 border-b border-black/8">
                  {post.excerpt}
                </p>

                {/* Body */}
                <div className="prose-content space-y-6">
                  {post.content.split('\n\n').map((para, i) => (
                    <p key={i} className="text-[#111111]/70 text-base leading-[1.85]">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Author bio */}
                <div className="mt-14 pt-10 border-t border-black/8 flex items-start gap-5">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#F7F7F7] overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-${
                          post.author === 'Jordan Reeves' ? '1507003211169-0a1dd7228f2d' :
                          post.author === 'Aria Chen' ? '1494790108755-2616b612b786' :
                          post.author === 'Priya Sharma' ? '1438761681033-6461ffad8d80' :
                          post.author === 'Marcus Webb' ? '1472099645785-5658abf4ff4e' :
                          post.author === 'Alex Torres' ? '1500648767791-00dcc994a43e' :
                          '1534528741775-53994a69daeb'
                        }?w=100&h=100&fit=crop&auto=format`}
                        alt={post.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-[Outfit] font-bold text-[#111111] text-base">{post.author}</p>
                    <p className="text-[#F5C400] text-sm font-medium mb-2">{post.authorRole}</p>
                    <p className="text-[#111111]/50 text-sm leading-relaxed">
                      Part of the core leadership team at LUMOORA, shaping how we think about and deliver exceptional digital work.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                <div className="bg-[#111111] rounded-2xl p-6">
                  <p className="font-[Outfit] font-bold text-white text-sm mb-4">Ready to build something great?</p>
                  <p className="text-white/45 text-sm leading-relaxed mb-5">Tell us about your project. We respond within 24 hours.</p>
                  <Link
                    to="/contact"
                    className="block text-center bg-[#F5C400] text-[#111111] font-bold text-sm py-3 rounded-xl hover:bg-[#F5C400]/90 transition-colors"
                  >
                    Start a Project
                  </Link>
                </div>

                <div>
                  <p className="font-[Outfit] font-bold text-[#111111] text-sm mb-4">Also in {post.category}</p>
                  <div className="space-y-4">
                    {(related.length > 0 ? related : fallback).slice(0, 3).map((r) => (
                      <Link key={r.id} to={`/blog/${r.id}`} className="group block">
                        <p className="text-[#111111]/70 text-sm leading-snug group-hover:text-[#F5C400] transition-colors font-medium">{r.title}</p>
                        <p className="text-[#111111]/35 text-xs mt-1">{r.readTime}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More articles */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-[Outfit] text-3xl font-black text-[#111111] tracking-tight">More to read</h2>
            <Link to="/blog" className="text-sm font-semibold text-[#111111]/50 hover:text-[#111111] transition-colors flex items-center gap-1.5">
              All articles <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {(related.length > 0 ? related : fallback).map((article) => (
              <Link key={article.id} to={`/blog/${article.id}`} className="group block bg-white rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-black/6 transition-all hover:-translate-y-1">
                <div className="h-44 overflow-hidden bg-[#111111]">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-[#F5C400] text-xs font-semibold tracking-wide">{article.category}</span>
                  <h3 className="font-[Outfit] font-bold text-[#111111] mt-1.5 leading-snug group-hover:text-[#F5C400] transition-colors text-base">{article.title}</h3>
                  <p className="text-[#111111]/40 text-xs mt-2">{article.readTime} · {article.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
