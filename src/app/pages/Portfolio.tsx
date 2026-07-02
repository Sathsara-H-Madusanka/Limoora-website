import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { projects, categories } from '../data/index';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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
        <div className="absolute bottom-0 left-0 w-[500px] h-[350px] bg-[#F5C400]/5 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-4 block">Selected Work</span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <h1 className="font-[Outfit] text-5xl lg:text-7xl font-black text-white tracking-[-0.03em] leading-tight">
                Work that<br />
                <span className="text-[#F5C400]">speaks volumes.</span>
              </h1>
              <p className="text-white/45 text-lg max-w-sm leading-relaxed lg:text-right">
                12 case studies across 6 disciplines. Real clients, real results.
              </p>
            </div>
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
          <span className="ml-auto text-[#111111]/30 text-sm whitespace-nowrap shrink-0">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 6) * 0.07, duration: 0.45 }}
                layout
              >
                <Link
                  to={`/portfolio/${project.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-black/6 hover:border-transparent hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* Image */}
                  <div className="relative h-56 bg-[#111111] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[#111111] text-xs font-semibold px-3 py-1.5 rounded-full">
                      {project.category}
                    </span>
                    <div className="absolute bottom-4 right-4 w-9 h-9 bg-[#F5C400] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                      <ArrowRight size={16} className="text-[#111111]" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-[Outfit] font-black text-[#111111] text-lg leading-snug group-hover:text-[#F5C400] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-[#111111]/45 text-xs mb-4">{project.client} · {project.year}</p>
                    <p className="text-[#111111]/60 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-[#F7F7F7] text-[#111111]/55 text-xs font-medium px-2.5 py-1 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-[#111111]/40 text-lg">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-[Outfit] text-4xl font-black text-[#111111] tracking-tight mb-4">
            Ready to join this portfolio?
          </h2>
          <p className="text-[#111111]/55 text-lg mb-8">
            Every great project started with a conversation. Let's have ours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 bg-[#111111] text-white font-bold px-8 py-4 rounded-full hover:bg-[#111111]/85 active:scale-95 transition-all text-base"
          >
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
