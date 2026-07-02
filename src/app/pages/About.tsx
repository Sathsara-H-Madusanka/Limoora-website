import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Target, Lightbulb, Heart, Globe } from 'lucide-react';
import { teamMembers, testimonials } from '../data/index';

const values = [
  { icon: <Target size={22} />, title: 'Precision', desc: 'We believe craft lives in the details. Every component, every word, every interaction is considered.' },
  { icon: <Lightbulb size={22} />, title: 'Clarity', desc: 'Complex problems deserve simple, elegant solutions. We strip away everything that isn\'t essential.' },
  { icon: <Heart size={22} />, title: 'Partnership', desc: 'We embed deeply with our clients. Your success is our metric. We work like your team, not a vendor.' },
  { icon: <Globe size={22} />, title: 'Impact', desc: 'We measure ourselves by outcomes, not outputs. The work only matters if it moves the needle.' },
];

const timeline = [
  { year: '2019', title: 'LUMOORA Founded', desc: 'Marcus and Aria left their respective roles to build a digital agency they\'d actually want to hire.' },
  { year: '2020', title: 'First Enterprise Client', desc: 'Landed our first Fortune 500 engagement and proved our model worked at scale.' },
  { year: '2021', title: 'Design Practice Launched', desc: 'Brought Jordan on board to build the design team that would define our visual reputation.' },
  { year: '2022', title: '25 Clients, Zero Churn', desc: 'Grew to 25 active clients without losing a single one — a point of enormous pride.' },
  { year: '2023', title: 'AI Practice Launched', desc: 'Started integrating LLMs and ML into client products before it was a requirement.' },
  { year: '2025', title: '100+ Projects Delivered', desc: 'Crossed the milestone with 50+ clients, 35+ team members, and offices in New York and London.' },
];

const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Clients Worldwide' },
  { value: '35+', label: 'Team Members' },
  { value: '0', label: 'Client Churn Rate' },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#111111] pt-36 pb-28 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#F5C400]/6 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-4 block">Who We Are</span>
            <h1 className="font-[Outfit] text-5xl lg:text-7xl font-black text-white tracking-[-0.03em] leading-tight mb-6 max-w-3xl">
              We build things<br />
              <span className="text-[#F5C400]">worth building.</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl leading-relaxed">
              LUMOORA is a premium digital agency specializing in the full spectrum of digital product creation — from brand identity to AI-powered platforms. We work with companies that want partners, not vendors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-white border-b border-black/6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="text-center"
              >
                <p className="font-[Outfit] text-5xl font-black text-[#111111] mb-1">{stat.value}</p>
                <p className="text-[#111111]/45 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden h-[480px] bg-[#F7F7F7]">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=900&fit=crop&auto=format"
                  alt="LUMOORA team at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-4 block">Our Story</span>
              <h2 className="font-[Outfit] text-4xl lg:text-5xl font-black text-[#111111] tracking-tight mb-6 leading-tight">
                Built by practitioners, not pitchmen.
              </h2>
              <div className="space-y-5 text-[#111111]/65 text-base leading-relaxed">
                <p>
                  LUMOORA was founded in 2019 by Marcus Webb and Aria Chen — a product leader from Stripe and an engineer from Google who were tired of watching agencies produce beautiful presentations and mediocre products.
                </p>
                <p>
                  The idea was simple: build a firm where the people who sell the work are the same people who do it. Where seniority is real, not a billing category. Where success is measured in client outcomes, not agency hours.
                </p>
                <p>
                  Six years later, we've built over 100 digital products for 50+ companies across fintech, healthcare, enterprise SaaS, luxury retail, and more. We've never lost a client to a competitor. That's not luck — it's how we work.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-3 block">What Drives Us</span>
            <h2 className="font-[Outfit] text-4xl lg:text-5xl font-black text-white tracking-tight">Our values.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="bg-white/5 border border-white/8 rounded-2xl p-7 hover:border-[#F5C400]/30 transition-colors"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#F5C400]/10 text-[#F5C400] mb-5">
                  {val.icon}
                </div>
                <h3 className="font-[Outfit] font-bold text-white text-base mb-2">{val.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-3 block">Our People</span>
            <h2 className="font-[Outfit] text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
              The team behind the work.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="group"
              >
                <div className="rounded-2xl overflow-hidden h-64 bg-[#F7F7F7] mb-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-[Outfit] font-black text-[#111111] text-lg">{member.name}</h3>
                <p className="text-[#F5C400] text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-[#111111]/55 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-3 block">Our Journey</span>
            <h2 className="font-[Outfit] text-4xl font-black text-[#111111] tracking-tight">
              Six years, zero compromises.
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-black/8 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className={`relative md:grid md:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? '' : 'md:text-right'}`}
                >
                  {i % 2 === 0 ? (
                    <>
                      <div className="md:text-right">
                        <span className="font-[Outfit] text-4xl font-black text-[#F5C400]">{item.year}</span>
                      </div>
                      <div className="mt-2 md:mt-0 bg-white rounded-2xl p-5 shadow-sm">
                        <h3 className="font-[Outfit] font-bold text-[#111111] mb-1">{item.title}</h3>
                        <p className="text-[#111111]/55 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="order-2 md:order-1 mt-2 md:mt-0 bg-white rounded-2xl p-5 shadow-sm md:text-left">
                        <h3 className="font-[Outfit] font-bold text-[#111111] mb-1">{item.title}</h3>
                        <p className="text-[#111111]/55 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="order-1 md:order-2">
                        <span className="font-[Outfit] text-4xl font-black text-[#F5C400]">{item.year}</span>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-[#F5C400] mb-6 flex justify-center">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl">★</span>
            ))}
          </div>
          <blockquote className="font-[Outfit] text-2xl lg:text-3xl font-bold text-white leading-relaxed mb-8">
            "{testimonials[0].quote}"
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <img src={testimonials[0].image} alt={testimonials[0].name} className="w-10 h-10 rounded-full" />
            <div className="text-left">
              <p className="text-white font-semibold text-sm">{testimonials[0].name}</p>
              <p className="text-white/40 text-xs">{testimonials[0].role}, {testimonials[0].company}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-[Outfit] text-4xl font-black text-[#111111] tracking-tight mb-4">
            Want to work with us?
          </h2>
          <p className="text-[#111111]/55 text-lg mb-8">We take on a limited number of projects each quarter to ensure quality. Reach out early.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2.5 bg-[#111111] text-white font-bold px-8 py-4 rounded-full hover:bg-[#111111]/85 active:scale-95 transition-all text-base">
              Start a Conversation <ArrowRight size={18} />
            </Link>
            <Link to="/careers" className="inline-flex items-center gap-2.5 border border-black/15 text-[#111111] font-semibold px-8 py-4 rounded-full hover:bg-black/5 transition-all text-base">
              View Open Roles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
