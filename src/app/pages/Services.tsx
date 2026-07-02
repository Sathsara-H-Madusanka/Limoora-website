import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Globe, Smartphone, Layers, Sparkles, Code2, Cpu, Cloud,
  ArrowRight, Check, ChevronRight
} from 'lucide-react';
import { services, pricingPlans, serviceCategories } from '../data/index';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={28} />, Smartphone: <Smartphone size={28} />, Layers: <Layers size={28} />,
  Sparkles: <Sparkles size={28} />, Code2: <Code2 size={28} />, Cpu: <Cpu size={28} />, Cloud: <Cloud size={28} />,
};

const process = [
  { step: '01', title: 'Discovery', desc: 'We dig deep into your business, users, and market to understand the problem worth solving.' },
  { step: '02', title: 'Strategy', desc: 'We define scope, prioritize features, and align on the architecture that serves your goals.' },
  { step: '03', title: 'Build', desc: 'Agile sprints with daily progress updates. You see real work, not just presentations.' },
  { step: '04', title: 'Launch & Grow', desc: 'Rigorous QA, performance optimization, and ongoing support after go-live.' },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? services
    : services.filter((s) => s.category === activeCategory);

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
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#F5C400]/6 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-4 block">What We Do</span>
            <h1 className="font-[Outfit] text-5xl lg:text-7xl font-black text-white tracking-[-0.03em] leading-tight mb-6">
              Services that<br />
              <span className="text-[#F5C400]">move the needle.</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl leading-relaxed">
              From strategy to launch, we bring the full stack of skills required to build exceptional digital products.
              No handoffs. No gaps. One team, end to end.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-lg border-b border-black/8 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {serviceCategories.map((cat) => (
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

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
              >
                <Link
                  to={`/services/${svc.id}`}
                  className="group flex flex-col h-full bg-[#F7F7F7] rounded-2xl p-8 hover:bg-[#111111] transition-all duration-300 hover:shadow-2xl hover:shadow-black/15 hover:-translate-y-1.5"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#F5C400]/12 text-[#F5C400] mb-6 group-hover:bg-[#F5C400]/20 transition-colors">
                    {iconMap[svc.icon]}
                  </div>

                  {/* Content */}
                  <h3 className="font-[Outfit] font-black text-[#111111] group-hover:text-white text-xl mb-2 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-[#F5C400] text-sm font-medium mb-4 group-hover:text-[#F5C400]/80 transition-colors">
                    {svc.tagline}
                  </p>
                  <p className="text-[#111111]/55 group-hover:text-white/55 text-sm leading-relaxed mb-6 flex-1 transition-colors">
                    {svc.description.slice(0, 140)}…
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {svc.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check size={13} className="text-[#F5C400] shrink-0" />
                        <span className="text-[#111111]/65 group-hover:text-white/65 transition-colors">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-1.5 text-[#F5C400] text-sm font-semibold">
                    Learn more <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-3 block">How We Work</span>
            <h2 className="font-[Outfit] text-4xl lg:text-5xl font-black text-white tracking-tight">
              A process built for clarity.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-7"
              >
                <div className="font-[Outfit] text-6xl font-black text-white/5 leading-none mb-4 select-none">{step.step}</div>
                <h3 className="font-[Outfit] font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-white/15" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-3 block">Pricing</span>
            <h2 className="font-[Outfit] text-4xl lg:text-5xl font-black text-[#111111] tracking-tight mb-4">
              Transparent pricing, every time.
            </h2>
            <p className="text-[#111111]/50 text-lg max-w-lg mx-auto">
              No hidden fees. No surprises. Your investment is agreed upfront before we start a single line of work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, i) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.highlighted
                    ? 'bg-[#111111] text-white shadow-2xl shadow-black/20 scale-[1.02]'
                    : 'bg-[#F7F7F7] text-[#111111]'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F5C400] text-[#111111] text-xs font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}
                <p className={`font-[Outfit] font-bold text-sm mb-1 ${plan.highlighted ? 'text-white/50' : 'text-[#111111]/50'}`}>{plan.name}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`font-[Outfit] text-4xl font-black ${plan.highlighted ? 'text-white' : 'text-[#111111]'}`}>{plan.price}</span>
                </div>
                <p className={`text-xs mb-4 ${plan.highlighted ? 'text-white/40' : 'text-[#111111]/40'}`}>{plan.period}</p>
                <p className={`text-sm leading-relaxed mb-6 ${plan.highlighted ? 'text-white/55' : 'text-[#111111]/55'}`}>{plan.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check size={14} className="text-[#F5C400] mt-0.5 shrink-0" />
                      <span className={`text-sm ${plan.highlighted ? 'text-white/75' : 'text-[#111111]/70'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center font-bold text-sm py-3.5 rounded-xl transition-all active:scale-95 ${
                    plan.highlighted
                      ? 'bg-[#F5C400] text-[#111111] hover:bg-[#F5C400]/90 shadow-lg shadow-[#F5C400]/25'
                      : 'bg-[#111111] text-white hover:bg-[#111111]/85'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-[Outfit] text-4xl font-black text-[#111111] tracking-tight mb-4">
            Not sure which service fits?
          </h2>
          <p className="text-[#111111]/55 text-lg mb-8">
            Tell us what you're trying to achieve. We'll recommend the right approach — no commitment required.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 bg-[#111111] text-white font-bold px-8 py-4 rounded-full hover:bg-[#111111]/85 active:scale-95 transition-all text-base"
          >
            Talk to Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
