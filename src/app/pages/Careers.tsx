import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Clock, ChevronRight, Zap, Heart, Globe, BookOpen, Coffee, Shield } from 'lucide-react';
import { jobs } from '../data/index';

const benefits = [
  { icon: <Globe size={20} />, title: 'Fully Remote', desc: 'Work from anywhere. Quarterly team offsites to meet in person.' },
  { icon: <BookOpen size={20} />, title: 'Learning Budget', desc: '$2,500–$3,000 annual budget for courses, books, and conferences.' },
  { icon: <Shield size={20} />, title: 'Full Health Coverage', desc: 'Comprehensive health, dental, and vision for you and dependents.' },
  { icon: <Zap size={20} />, title: 'Equity Participation', desc: 'Everyone on the team has a stake in LUMOORA\'s success.' },
  { icon: <Heart size={20} />, title: 'Generous PTO', desc: '4 weeks paid time off plus all local public holidays.' },
  { icon: <Coffee size={20} />, title: 'Home Office Budget', desc: '$1,500 to set up a workspace you actually enjoy working in.' },
];

export default function Careers() {
  const departments = ['All', ...Array.from(new Set(jobs.map((j) => j.department)))];
  const [activeDept, setActiveDept] = useState('All');

  const filtered = activeDept === 'All' ? jobs : jobs.filter((j) => j.department === activeDept);

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
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#F5C400]/6 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-4 block">Join Our Team</span>
            <h1 className="font-[Outfit] text-5xl lg:text-7xl font-black text-white tracking-[-0.03em] leading-tight mb-6 max-w-3xl">
              Build the future<br />
              <span className="text-[#F5C400]">with us.</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl leading-relaxed">
              We're a team of practitioners building exceptional digital products for the world's most ambitious companies.
              If you care deeply about craft, we'd love to meet you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-4 block">Life at LUMOORA</span>
              <h2 className="font-[Outfit] text-4xl font-black text-[#111111] tracking-tight mb-5 leading-tight">
                Senior talent. Real ownership. Honest culture.
              </h2>
              <div className="space-y-4 text-[#111111]/65 text-base leading-relaxed">
                <p>We hire experienced people and trust them to do their jobs. There are no layers of approval for design decisions, no artificial seniority, and no "managing up" required to get great work done.</p>
                <p>Every team member works directly with clients and sees the impact of their work in the real world. We believe this connection between effort and outcome is what keeps talented people engaged long-term.</p>
                <p>We're intentionally small. We'll never grow faster than our ability to maintain quality — which means the team stays tight, the work stays excellent, and your voice matters.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&auto=format"
                alt="Team collaboration"
                className="rounded-2xl w-full h-44 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1558403194-611308249627?w=400&h=300&fit=crop&auto=format"
                alt="Design work"
                className="rounded-2xl w-full h-44 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&auto=format"
                alt="Remote work"
                className="rounded-2xl w-full h-44 object-cover -mt-4"
              />
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop&auto=format"
                alt="Team meeting"
                className="rounded-2xl w-full h-44 object-cover mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-3 block">Benefits</span>
            <h2 className="font-[Outfit] text-4xl font-black text-[#111111] tracking-tight">We take care of our team.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="bg-white rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F5C400]/12 text-[#F5C400] shrink-0">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-[Outfit] font-bold text-[#111111] text-sm mb-1">{b.title}</h3>
                  <p className="text-[#111111]/55 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
            <div>
              <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-2 block">Opportunities</span>
              <h2 className="font-[Outfit] text-4xl font-black text-[#111111] tracking-tight">
                Open positions
                <span className="ml-3 text-2xl text-[#111111]/20">({filtered.length})</span>
              </h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeDept === dept
                      ? 'bg-[#111111] text-white'
                      : 'bg-[#F7F7F7] text-[#111111]/60 hover:bg-black/8 hover:text-[#111111]'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {filtered.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <Link
                  to={`/careers/${job.id}`}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F7F7F7] hover:bg-[#111111] rounded-2xl px-7 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="font-[Outfit] font-black text-[#111111] group-hover:text-white text-lg transition-colors">{job.title}</h3>
                      <span className="text-[#F5C400] text-xs font-semibold bg-[#F5C400]/12 px-2.5 py-1 rounded-full">{job.level}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1.5 text-[#111111]/50 group-hover:text-white/50 transition-colors">
                        <span className="text-[#F5C400]">◆</span> {job.department}
                      </span>
                      <span className="flex items-center gap-1.5 text-[#111111]/50 group-hover:text-white/50 transition-colors">
                        <MapPin size={13} className="text-[#F5C400]" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-[#111111]/50 group-hover:text-white/50 transition-colors">
                        <Clock size={13} className="text-[#F5C400]" /> {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#F5C400] text-sm font-semibold shrink-0">
                    View Role
                    <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speculative CTA */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-[Outfit] text-4xl font-black text-white tracking-tight mb-4">
            Don't see the right role?
          </h2>
          <p className="text-white/45 text-lg mb-8">
            We often hire outside of active postings. If you're exceptional at what you do, we want to hear from you.
          </p>
          <a
            href="mailto:careers@lumoora.com"
            className="inline-flex items-center gap-2.5 bg-[#F5C400] text-[#111111] font-bold px-8 py-4 rounded-full hover:bg-[#F5C400]/90 active:scale-95 transition-all shadow-lg shadow-[#F5C400]/25 text-base"
          >
            Send Us Your CV <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
