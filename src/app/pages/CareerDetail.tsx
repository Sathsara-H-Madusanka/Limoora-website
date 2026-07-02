import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Clock, Briefcase, Check, Send } from 'lucide-react';
import { jobs } from '../data/index';

export default function CareerDetail() {
  const { slug } = useParams();
  const job = jobs.find((j) => j.id === slug);

  const [form, setForm] = useState({
    name: '', email: '', phone: '', linkedin: '', coverLetter: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!job) {
    return (
      <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center text-center px-6 pt-20">
        <h1 className="font-[Outfit] text-4xl font-black text-white mb-4">Role not found</h1>
        <Link to="/careers" className="text-[#F5C400] hover:underline">← Back to Careers</Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#111111] pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#F5C400]/5 rounded-full blur-[80px]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link to="/careers" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors">
            <ArrowLeft size={15} /> All Positions
          </Link>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-4 block">{job.department}</span>
            <h1 className="font-[Outfit] text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-5 text-white/45 text-sm">
              <span className="flex items-center gap-2"><MapPin size={14} className="text-[#F5C400]" /> {job.location}</span>
              <span className="flex items-center gap-2"><Clock size={14} className="text-[#F5C400]" /> {job.type}</span>
              <span className="flex items-center gap-2"><Briefcase size={14} className="text-[#F5C400]" /> {job.level}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main */}
            <div className="lg:col-span-2 space-y-14">
              <div>
                <h2 className="font-[Outfit] font-black text-[#111111] text-2xl mb-4">About the Role</h2>
                <p className="text-[#111111]/65 text-base leading-relaxed">{job.description}</p>
              </div>

              <div>
                <h2 className="font-[Outfit] font-black text-[#111111] text-2xl mb-5">Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#F5C400]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} className="text-[#F5C400]" />
                      </div>
                      <span className="text-[#111111]/70 text-base leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-[Outfit] font-black text-[#111111] text-2xl mb-5">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#111111]/8 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} className="text-[#111111]/50" />
                      </div>
                      <span className="text-[#111111]/70 text-base leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-[Outfit] font-black text-[#111111] text-2xl mb-5">Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {job.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2.5 bg-[#F7F7F7] rounded-xl px-4 py-3">
                      <Check size={14} className="text-[#F5C400] shrink-0" />
                      <span className="text-[#111111]/70 text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application form */}
              <div id="apply">
                <h2 className="font-[Outfit] font-black text-[#111111] text-2xl mb-6">Apply for this role</h2>
                {submitted ? (
                  <div className="bg-[#F5C400]/10 border border-[#F5C400]/30 rounded-2xl p-8 text-center">
                    <div className="w-12 h-12 bg-[#F5C400]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={22} className="text-[#F5C400]" />
                    </div>
                    <h3 className="font-[Outfit] font-bold text-[#111111] text-xl mb-2">Application Received</h3>
                    <p className="text-[#111111]/60">We review every application carefully and will be in touch within 5 business days.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#111111] mb-2">Full Name *</label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full bg-[#F7F7F7] border border-black/8 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#F5C400]/60 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#111111] mb-2">Email Address *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full bg-[#F7F7F7] border border-black/8 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#F5C400]/60 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#111111] mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-[#F7F7F7] border border-black/8 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#F5C400]/60 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#111111] mb-2">LinkedIn Profile</label>
                        <input
                          type="url"
                          value={form.linkedin}
                          onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                          placeholder="linkedin.com/in/yourname"
                          className="w-full bg-[#F7F7F7] border border-black/8 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#F5C400]/60 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#111111] mb-2">Resume / Portfolio URL *</label>
                      <input
                        required
                        type="url"
                        placeholder="Link to your resume, portfolio, or GitHub"
                        className="w-full bg-[#F7F7F7] border border-black/8 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#F5C400]/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#111111] mb-2">Cover Letter *</label>
                      <textarea
                        required
                        value={form.coverLetter}
                        onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
                        placeholder="Tell us why you're excited about this role and what you'd bring to the team..."
                        rows={6}
                        className="w-full bg-[#F7F7F7] border border-black/8 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#F5C400]/60 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2.5 bg-[#F5C400] text-[#111111] font-bold px-7 py-4 rounded-xl hover:bg-[#F5C400]/90 active:scale-95 transition-all shadow-lg shadow-[#F5C400]/20"
                    >
                      Submit Application <Send size={17} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-5">
                <div className="bg-[#111111] rounded-2xl p-7">
                  <h3 className="font-[Outfit] font-bold text-white text-base mb-5">Role Summary</h3>
                  <dl className="space-y-4">
                    {[
                      { label: 'Department', value: job.department },
                      { label: 'Location', value: job.location },
                      { label: 'Type', value: job.type },
                      { label: 'Level', value: job.level },
                    ].map((item) => (
                      <div key={item.label}>
                        <dt className="text-white/30 text-xs font-semibold uppercase tracking-wide mb-0.5">{item.label}</dt>
                        <dd className="text-white/70 text-sm">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <a
                    href="#apply"
                    className="block text-center mt-6 bg-[#F5C400] text-[#111111] font-bold text-sm py-3.5 rounded-xl hover:bg-[#F5C400]/90 transition-colors"
                  >
                    Apply Now
                  </a>
                </div>

                <div className="bg-[#F7F7F7] rounded-2xl p-6">
                  <p className="font-semibold text-[#111111] text-sm mb-2">Questions?</p>
                  <p className="text-[#111111]/55 text-sm mb-4">Reach out before applying — we're happy to answer any questions about the role or team.</p>
                  <a href="mailto:careers@lumoora.com" className="text-[#F5C400] text-sm font-semibold hover:underline">careers@lumoora.com</a>
                </div>

                <Link
                  to="/careers"
                  className="flex items-center gap-2 text-[#111111]/50 text-sm hover:text-[#111111] transition-colors"
                >
                  <ArrowLeft size={14} /> View all open roles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
