import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, User, Tag } from 'lucide-react';
import { projects } from '../data/index';

export default function PortfolioDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center text-center px-6 pt-20">
        <h1 className="font-[Outfit] text-4xl font-black text-white mb-4">Project not found</h1>
        <Link to="/portfolio" className="text-[#F5C400] hover:underline">← Back to Portfolio</Link>
      </div>
    );
  }

  const related = projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3);
  const fallbackRelated = projects.filter((p) => p.id !== project.id).slice(0, 3);

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
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-12">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors">
            <ArrowLeft size={15} /> All Projects
          </Link>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-4 block">{project.category}</span>
            <h1 className="font-[Outfit] text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-white/40 text-sm mb-8">
              <span className="flex items-center gap-2"><User size={14} className="text-[#F5C400]" /> {project.client}</span>
              <span className="flex items-center gap-2"><Calendar size={14} className="text-[#F5C400]" /> {project.year}</span>
              <span className="flex items-center gap-2"><Tag size={14} className="text-[#F5C400]" /> {project.tags.join(', ')}</span>
            </div>
          </motion.div>
        </div>

        {/* Hero image */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-t-2xl overflow-hidden h-[420px] lg:h-[520px] bg-[#1a1a1a]"
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-14">
              <div>
                <h2 className="font-[Outfit] text-3xl font-black text-[#111111] tracking-tight mb-4">Overview</h2>
                <p className="text-[#111111]/65 text-lg leading-relaxed">{project.description}</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { label: 'The Challenge', text: project.challenge },
                  { label: 'Our Solution', text: project.solution },
                  { label: 'The Result', text: project.result },
                ].map((item) => (
                  <div key={item.label} className="bg-[#F7F7F7] rounded-2xl p-6">
                    <div className="text-[#F5C400] text-xs font-bold tracking-widest uppercase mb-3">{item.label}</div>
                    <p className="text-[#111111]/70 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Gallery placeholder */}
              <div>
                <h3 className="font-[Outfit] font-bold text-[#111111] text-xl mb-6">Project Gallery</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[0, 1, 2, 3].map((j) => (
                    <div key={j} className={`rounded-xl overflow-hidden bg-[#F7F7F7] ${j === 0 ? 'sm:col-span-2 h-64' : 'h-48'}`}>
                      <img
                        src={`${project.image.split('?')[0]}?w=800&h=${j === 0 ? 400 : 300}&fit=crop&auto=format&q=${70 + j * 5}`}
                        alt={`${project.title} detail ${j + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-5">
                {/* Project info */}
                <div className="bg-[#111111] rounded-2xl p-7">
                  <h3 className="font-[Outfit] font-bold text-white text-base mb-5">Project Details</h3>
                  <dl className="space-y-4">
                    {[
                      { label: 'Client', value: project.client },
                      { label: 'Year', value: project.year },
                      { label: 'Category', value: project.category },
                    ].map((item) => (
                      <div key={item.label}>
                        <dt className="text-white/30 text-xs font-semibold uppercase tracking-wide mb-1">{item.label}</dt>
                        <dd className="text-white/80 text-sm">{item.value}</dd>
                      </div>
                    ))}
                    <div>
                      <dt className="text-white/30 text-xs font-semibold uppercase tracking-wide mb-2">Tech Stack</dt>
                      <dd className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded-lg">{tag}</span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                  <Link
                    to="/contact"
                    className="block text-center mt-7 bg-[#F5C400] text-[#111111] font-bold text-sm py-3.5 rounded-xl hover:bg-[#F5C400]/90 transition-colors"
                  >
                    Start a Similar Project
                  </Link>
                </div>

                {/* Tags */}
                <div className="bg-[#F7F7F7] rounded-2xl p-6">
                  <p className="font-semibold text-[#111111] text-sm mb-3">Explore this category</p>
                  <Link
                    to="/portfolio"
                    className="flex items-center justify-between text-[#111111]/60 text-sm hover:text-[#F5C400] transition-colors group"
                  >
                    More {project.category} projects
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-10">
            <h2 className="font-[Outfit] text-3xl font-black text-[#111111] tracking-tight">
              More work
            </h2>
            <Link to="/portfolio" className="text-sm font-semibold text-[#111111]/50 hover:text-[#111111] transition-colors flex items-center gap-1.5">
              All projects <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {(related.length > 0 ? related : fallbackRelated).map((p) => (
              <Link
                key={p.id}
                to={`/portfolio/${p.id}`}
                className="group block bg-white rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-black/8 transition-all hover:-translate-y-1"
              >
                <div className="h-44 overflow-hidden bg-[#111111]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[#F5C400] text-xs font-semibold">{p.category}</span>
                  <h3 className="font-[Outfit] font-bold text-[#111111] mt-1 group-hover:text-[#F5C400] transition-colors">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
