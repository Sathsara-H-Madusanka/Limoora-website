import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, Check, Twitter, Linkedin, Github } from 'lucide-react';

const contactInfo = [
  { icon: <Mail size={20} />, label: 'Email', value: 'hello@lumoora.com', href: 'mailto:hello@lumoora.com' },
  { icon: <Phone size={20} />, label: 'Phone', value: '+1 (212) 555-0190', href: 'tel:+12125550190' },
  { icon: <MapPin size={20} />, label: 'Address', value: '340 Madison Avenue, Suite 2100\nNew York, NY 10017', href: '#' },
  { icon: <Clock size={20} />, label: 'Response Time', value: 'We respond within 24 hours\nMon – Fri, 9am – 6pm EST', href: undefined },
];

const budgets = ['Under $10,000', '$10,000 – $25,000', '$25,000 – $75,000', '$75,000 – $200,000', '$200,000+', "I'm not sure yet"];
const services = ['Website Development', 'Mobile Apps', 'UI/UX Design', 'Brand Identity', 'Software Development', 'AI Solutions', 'Cloud Consulting', 'Other'];

const faqs = [
  { q: 'How do we get started?', a: 'Fill out this form or email us directly. We\'ll schedule a 30-minute discovery call within 24 hours to understand your needs and see if we\'re a good fit.' },
  { q: 'Do you work with early-stage startups?', a: 'Yes — but selectively. We work with startups that have product-market signal, a clear brief, and the runway to see the project through. Our Starter package is designed for exactly this context.' },
  { q: 'How long do projects typically take?', a: 'Timelines vary by scope. A focused website might take 6–10 weeks. A complex web application with custom backend is typically 4–6 months. We always give a realistic timeline before we sign anything.' },
  { q: 'Do you offer ongoing support?', a: 'Yes. Every project includes a post-launch support window. For clients who need longer-term partnership, we offer retainer arrangements covering maintenance, feature development, and strategy.' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', service: '', budget: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-[#F5C400]/6 rounded-full blur-[80px]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-4 block">Get in Touch</span>
            <h1 className="font-[Outfit] text-5xl lg:text-7xl font-black text-white tracking-[-0.03em] leading-tight mb-5">
              Let's build<br />
              <span className="text-[#F5C400]">something great.</span>
            </h1>
            <p className="text-white/50 text-xl max-w-xl leading-relaxed">
              Tell us about your project. We review every inquiry personally and respond within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main contact area */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-[Outfit] font-black text-[#111111] text-2xl mb-2">Contact us</h2>
                <p className="text-[#111111]/55 text-sm leading-relaxed">
                  Prefer a direct line? Reach us through any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 bg-[#F7F7F7] rounded-2xl p-5">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F5C400]/12 text-[#F5C400] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[#111111]/40 text-xs font-semibold uppercase tracking-wide mb-1">{item.label}</p>
                      {item.href && item.href !== '#' ? (
                        <a href={item.href} className="text-[#111111] text-sm font-medium hover:text-[#F5C400] transition-colors whitespace-pre-line">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#111111] text-sm font-medium whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="pt-2">
                <p className="text-[#111111]/40 text-xs font-semibold uppercase tracking-wide mb-3">Follow us</p>
                <div className="flex gap-3">
                  {[
                    { icon: <Twitter size={16} />, href: '#', label: 'Twitter' },
                    { icon: <Linkedin size={16} />, href: '#', label: 'LinkedIn' },
                    { icon: <Github size={16} />, href: '#', label: 'GitHub' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#F7F7F7] text-[#111111]/50 hover:bg-[#F5C400] hover:text-[#111111] transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden h-44 bg-[#F7F7F7] flex items-center justify-center border border-black/6">
                <div className="text-center">
                  <MapPin size={28} className="text-[#F5C400] mx-auto mb-2" />
                  <p className="text-[#111111]/40 text-sm">340 Madison Avenue</p>
                  <p className="text-[#111111]/30 text-xs">New York, NY 10017</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#F7F7F7] rounded-3xl p-8 lg:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-16">
                    <div className="w-16 h-16 bg-[#F5C400]/15 rounded-full flex items-center justify-center mb-6">
                      <Check size={28} className="text-[#F5C400]" />
                    </div>
                    <h3 className="font-[Outfit] font-black text-[#111111] text-3xl mb-3">Message sent!</h3>
                    <p className="text-[#111111]/55 text-lg max-w-md">
                      We'll review your project brief and be back in touch within one business day. Looking forward to the conversation.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-[Outfit] font-black text-[#111111] text-2xl mb-7">Tell us about your project</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-[#111111] mb-2">Full Name *</label>
                          <input
                            required
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Your name"
                            className="w-full bg-white border border-black/8 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#F5C400]/60 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#111111] mb-2">Company</label>
                          <input
                            type="text"
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            placeholder="Your company"
                            className="w-full bg-white border border-black/8 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#F5C400]/60 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-[#111111] mb-2">Email Address *</label>
                          <input
                            required
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="your@email.com"
                            className="w-full bg-white border border-black/8 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#F5C400]/60 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#111111] mb-2">Phone</label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="+1 (555) 000-0000"
                            className="w-full bg-white border border-black/8 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#F5C400]/60 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-[#111111] mb-2">Service Needed</label>
                          <select
                            value={form.service}
                            onChange={(e) => setForm({ ...form, service: e.target.value })}
                            className="w-full bg-white border border-black/8 rounded-xl px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#F5C400]/60 transition-colors appearance-none"
                          >
                            <option value="">Select a service</option>
                            {services.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#111111] mb-2">Project Budget</label>
                          <select
                            value={form.budget}
                            onChange={(e) => setForm({ ...form, budget: e.target.value })}
                            className="w-full bg-white border border-black/8 rounded-xl px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#F5C400]/60 transition-colors appearance-none"
                          >
                            <option value="">Select a range</option>
                            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#111111] mb-2">Project Details *</label>
                        <textarea
                          required
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us about your project — what you're building, who it's for, and any timeline considerations..."
                          rows={5}
                          className="w-full bg-white border border-black/8 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#F5C400]/60 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2.5 bg-[#111111] text-white font-bold py-4 rounded-xl hover:bg-[#111111]/85 active:scale-[0.99] transition-all text-base shadow-lg shadow-black/10"
                      >
                        Send Message <Send size={17} />
                      </button>

                      <p className="text-center text-[#111111]/35 text-xs">
                        We'll respond within 24 hours. No spam, ever.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[Outfit] text-4xl font-black text-[#111111] tracking-tight">Common questions.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-7">
                <h3 className="font-[Outfit] font-bold text-[#111111] text-base mb-3">{faq.q}</h3>
                <p className="text-[#111111]/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
