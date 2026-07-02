import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Clock, User } from 'lucide-react';
import { blogPosts } from '../data/index';

const categories = ['All', 'Design', 'Engineering', 'Strategy', 'AI', 'Branding'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#111111] pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        <div className="absolute top-0 left-0 w-[500px] h-[350px] bg-[#F5C400]/5 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-4 block">Insights & Ideas</span>
            <h1 className="font-[Outfit] text-5xl lg:text-7xl font-black text-white tracking-[-0.03em] leading-tight mb-5">
              Thinking out<br />
              <span className="text-[#F5C400]">loud.</span>
            </h1>
            <p className="text-white/50 text-xl max-w-xl leading-relaxed">
              Perspectives on design, engineering, strategy, and the future of digital products from the LUMOORA team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <div className="sticky top-[72px] z-30 bg-white/96 backdrop-blur-xl border-b border-black/8 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#111111] text-white'
                  : 'text-[#111111]/60 hover:text-[#111111] hover:bg-black/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <Link to={`/blog/${featured.id}`} className="group grid lg:grid-cols-2 gap-8 bg-[#F7F7F7] rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-black/8 transition-all duration-300">
                <div className="h-72 lg:h-auto overflow-hidden bg-[#111111]">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="bg-[#F5C400]/15 text-[#111111] text-xs font-bold px-3 py-1.5 rounded-full">{featured.category}</span>
                    <span className="text-[#111111]/30 text-xs">Featured</span>
                  </div>
                  <h2 className="font-[Outfit] text-3xl lg:text-4xl font-black text-[#111111] tracking-tight leading-tight mb-4 group-hover:text-[#F5C400] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-[#111111]/60 text-base leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-[#111111]/40">
                    <span className="flex items-center gap-1.5"><User size={13} /> {featured.author}</span>
                    <span className="flex items-center gap-1.5"><Clock size={13} /> {featured.readTime}</span>
                    <span>{featured.date}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Grid */}
          {rest.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                >
                  <Link to={`/blog/${post.id}`} className="group block h-full">
                    <div className="h-48 rounded-2xl overflow-hidden bg-[#111111] mb-5">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <span className="text-[#F5C400] text-xs font-semibold tracking-wide uppercase mb-3 block">{post.category}</span>
                    <h3 className="font-[Outfit] font-black text-[#111111] text-xl leading-snug mb-3 group-hover:text-[#F5C400] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#111111]/55 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-[#111111]/35">
                      <span>{post.author}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-[#111111]/40 text-lg">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-3 block">Newsletter</span>
          <h2 className="font-[Outfit] text-4xl font-black text-white tracking-tight mb-4">
            Stay in the loop.
          </h2>
          <p className="text-white/45 text-lg mb-8">
            Monthly essays on design, engineering, and digital strategy. No fluff. Unsubscribe anytime.
          </p>
          <form className="flex gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/8 border border-white/12 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#F5C400]/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-[#F5C400] text-[#111111] font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-[#F5C400]/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
