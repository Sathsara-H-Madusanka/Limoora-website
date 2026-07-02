import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowRight, Globe, Smartphone, Layers, Sparkles, Code2, Cpu, Cloud,
  Check, Quote, ChevronRight, Star, Zap, Shield, Clock, TrendingUp, Users
} from 'lucide-react';
import { services, projects, blogPosts, testimonials, pricingPlans } from '../data/index';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={24} />, Smartphone: <Smartphone size={24} />, Layers: <Layers size={24} />,
  Sparkles: <Sparkles size={24} />, Code2: <Code2 size={24} />, Cpu: <Cpu size={24} />, Cloud: <Cloud size={24} />,
};

const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '5+', label: 'Years of Excellence' },
  { value: '24/7', label: 'Client Support' },
];

const whyUs = [
  { icon: <Zap size={20} />, title: 'Innovation First', desc: 'We use emerging technologies to build products that set new standards, not just meet them.' },
  { icon: <Users size={20} />, title: 'Experienced Team', desc: 'Senior engineers and designers who have shipped products used by millions of people.' },
  { icon: <Clock size={20} />, title: 'Fast Delivery', desc: 'Agile workflows and clear processes that keep projects on time without sacrificing quality.' },
  { icon: <Shield size={20} />, title: 'Reliable Support', desc: '24/7 availability and proactive communication throughout every engagement.' },
  { icon: <TrendingUp size={20} />, title: 'Scalable Solutions', desc: 'Architecture designed to grow with your business — from day one to day one million.' },
  { icon: <Star size={20} />, title: 'Premium Quality', desc: 'Every pixel, every line of code, every decision held to an uncompromising standard.' },
];

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

export default function Home() {
  const [billingPeriod] = useState<'project'>('project');
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="bg-white">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-[#111111] flex items-center overflow-hidden">
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        {/* Gold glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#F5C400]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F5C400]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
                <span className="inline-flex items-center gap-2 border border-[#F5C400]/30 bg-[#F5C400]/8 text-[#F5C400] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
                  <span className="w-1.5 h-1.5 bg-[#F5C400] rounded-full animate-pulse" />
                  Premium Digital Agency
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="font-[Outfit] text-5xl lg:text-7xl font-black text-white tracking-[-0.03em] leading-[1.05] mb-6"
              >
                ILLUMINATING
                <br />
                <span className="text-[#F5C400]">DIGITAL</span>
                <br />
                FUTURES.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-white/55 text-lg leading-relaxed max-w-lg mb-10"
              >
                LUMOORA partners with ambitious companies to design and build digital products
                that define markets — from world-class websites to AI-powered platforms.
              </motion.p>

              <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 bg-[#F5C400] text-[#111111] font-bold px-7 py-4 rounded-full hover:bg-[#F5C400]/90 active:scale-95 transition-all duration-200 shadow-xl shadow-[#F5C400]/30 text-base"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2.5 border border-white/20 text-white font-semibold px-7 py-4 rounded-full hover:bg-white/8 hover:border-white/30 transition-all duration-200 text-base"
                >
                  View Portfolio
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: floating stats cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white/6 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <p className="font-[Outfit] text-4xl font-black text-white mb-1">{stat.value}</p>
                  <p className="text-white/45 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-16 lg:hidden">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/6 border border-white/10 rounded-xl p-4 text-center">
                <p className="font-[Outfit] text-2xl font-black text-white">{stat.value}</p>
                <p className="text-white/45 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/40" />
        </div>
      </section>

      {/* ── Trusted by ────────────────────────────────────────────────── */}
      <section className="py-12 border-y border-black/6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs text-[#111111]/30 font-semibold tracking-widest uppercase mb-8">
            Trusted by teams at leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {['Nexus Financial', 'Momentum Health', 'Aria Systems', 'Lumina Energy', 'CloudSync', 'Cortex AI', 'Solaris'].map((name) => (
              <span key={name} className="text-[#111111]/25 font-[Outfit] font-bold text-lg tracking-tight hover:text-[#111111]/50 transition-colors cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-3 block">What We Do</span>
              <h2 className="font-[Outfit] text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight">
                End-to-end digital<br />expertise.
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <Link to="/services" className="inline-flex items-center gap-2 text-[#111111] font-semibold text-sm hover:text-[#F5C400] transition-colors group">
                All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.slice(0, 8).map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
              >
                <Link
                  to={`/services/${svc.id}`}
                  className="group flex flex-col h-full bg-[#F7F7F7] rounded-2xl p-6 hover:bg-[#111111] transition-all duration-300 hover:shadow-2xl hover:shadow-black/15 hover:-translate-y-1"
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#F5C400]/15 text-[#F5C400] mb-5 group-hover:bg-[#F5C400]/20 transition-colors">
                    {iconMap[svc.icon]}
                  </div>
                  <h3 className="font-[Outfit] font-bold text-[#111111] group-hover:text-white text-base mb-2 transition-colors leading-snug">{svc.title}</h3>
                  <p className="text-[#111111]/50 group-hover:text-white/55 text-sm leading-relaxed flex-1 transition-colors">{svc.tagline}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-[#F5C400] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ChevronRight size={13} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Portfolio ────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-3 block">Selected Work</span>
              <h2 className="font-[Outfit] text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight">
                Work that speaks<br />for itself.
              </h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-[#111111] font-semibold text-sm hover:text-[#F5C400] transition-colors group">
              View All Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  to={`/portfolio/${project.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/8 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-56 bg-[#111111] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#111111] text-xs font-semibold px-3 py-1.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-[Outfit] font-bold text-[#111111] text-xl leading-snug group-hover:text-[#F5C400] transition-colors">
                        {project.title}
                      </h3>
                      <ArrowRight size={18} className="text-[#111111]/30 group-hover:text-[#F5C400] group-hover:translate-x-1 transition-all shrink-0 mt-0.5" />
                    </div>
                    <p className="text-[#111111]/55 text-sm leading-relaxed mb-4">{project.description.slice(0, 100)}…</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-[#F7F7F7] text-[#111111]/60 text-xs font-medium px-3 py-1 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-3 block">Why LUMOORA</span>
            <h2 className="font-[Outfit] text-4xl lg:text-5xl font-black text-white tracking-tight">
              Built different, by design.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="bg-white/5 border border-white/8 rounded-2xl p-7 hover:bg-white/8 hover:border-[#F5C400]/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F5C400]/10 text-[#F5C400] mb-5 group-hover:bg-[#F5C400]/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-[Outfit] font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-3 block">Pricing</span>
            <h2 className="font-[Outfit] text-4xl lg:text-5xl font-black text-[#111111] tracking-tight mb-4">
              Simple, transparent pricing.
            </h2>
            <p className="text-[#111111]/50 text-lg max-w-xl mx-auto">
              Every project is unique — but these packages give you a clear starting point.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.highlighted
                    ? 'bg-[#111111] text-white shadow-2xl shadow-black/20 scale-[1.02]'
                    : 'bg-[#F7F7F7] text-[#111111]'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F5C400] text-[#111111] text-xs font-bold px-4 py-1.5 rounded-full tracking-wide">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <p className={`font-[Outfit] font-bold text-sm mb-1 ${plan.highlighted ? 'text-white/50' : 'text-[#111111]/50'}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className={`font-[Outfit] text-4xl font-black ${plan.highlighted ? 'text-white' : 'text-[#111111]'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.highlighted ? 'text-white/40' : 'text-[#111111]/40'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${plan.highlighted ? 'text-white/55' : 'text-[#111111]/55'}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check size={15} className={`mt-0.5 shrink-0 ${plan.highlighted ? 'text-[#F5C400]' : 'text-[#F5C400]'}`} />
                      <span className={`text-sm ${plan.highlighted ? 'text-white/75' : 'text-[#111111]/70'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block text-center font-bold text-sm py-3.5 rounded-xl transition-all duration-200 active:scale-95 ${
                    plan.highlighted
                      ? 'bg-[#F5C400] text-[#111111] hover:bg-[#F5C400]/90 shadow-lg shadow-[#F5C400]/25'
                      : 'bg-[#111111] text-white hover:bg-[#111111]/85'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-3 block">Testimonials</span>
            <h2 className="font-[Outfit] text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
              What clients say.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 flex flex-col gap-6 hover:shadow-lg hover:shadow-black/6 transition-all duration-300"
              >
                <Quote size={28} className="text-[#F5C400]" />
                <p className="text-[#111111]/70 text-sm leading-relaxed flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-black/6">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-[#111111] text-sm">{t.name}</p>
                    <p className="text-[#111111]/45 text-xs">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Preview ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-3 block">Insights</span>
              <h2 className="font-[Outfit] text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
                Latest thinking.
              </h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 text-[#111111] font-semibold text-sm hover:text-[#F5C400] transition-colors group">
              All Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link to={`/blog/${post.id}`} className="group block">
                  <div className="h-48 rounded-2xl overflow-hidden bg-[#111111] mb-5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <span className="text-[#F5C400] text-xs font-semibold tracking-wide uppercase mb-2.5 block">{post.category}</span>
                  <h3 className="font-[Outfit] font-bold text-[#111111] text-lg leading-snug mb-2 group-hover:text-[#F5C400] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#111111]/50 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-[#111111]/40">
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
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#F5C400]/10 rounded-full blur-[80px]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[Outfit] text-4xl lg:text-6xl font-black text-white tracking-tight mb-6">
              Ready to illuminate<br />
              <span className="text-[#F5C400]">your future?</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Tell us about your project. We'll get back to you within 24 hours with a clear plan forward.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 bg-[#F5C400] text-[#111111] font-bold px-8 py-4 rounded-full hover:bg-[#F5C400]/90 active:scale-95 transition-all shadow-xl shadow-[#F5C400]/30 text-base"
              >
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2.5 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/8 transition-all text-base"
              >
                See Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
