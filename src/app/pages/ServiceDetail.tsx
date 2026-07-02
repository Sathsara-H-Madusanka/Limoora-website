import React from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, Globe, Smartphone, Layers, Sparkles, Code2, Cpu, Cloud } from 'lucide-react';
import { services, projects } from '../data/index';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={32} />, Smartphone: <Smartphone size={32} />, Layers: <Layers size={32} />,
  Sparkles: <Sparkles size={32} />, Code2: <Code2 size={32} />, Cpu: <Cpu size={32} />, Cloud: <Cloud size={32} />,
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center text-center px-6 pt-20">
        <h1 className="font-[Outfit] text-4xl font-black text-white mb-4">Service not found</h1>
        <Link to="/services" className="text-[#F5C400] hover:underline">← Back to Services</Link>
      </div>
    );
  }

  const related = projects.filter((p) =>
    p.category.toLowerCase().includes(service.title.split(' ')[0].toLowerCase()) ||
    service.title.toLowerCase().includes(p.category.split(' ')[0].toLowerCase())
  ).slice(0, 3);

  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 4);

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
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-[#F5C400]/6 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors">
            <ArrowLeft size={15} /> All Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#F5C400]/12 text-[#F5C400] mb-7">
                {iconMap[service.icon]}
              </div>
              <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase mb-4 block">{service.category}</span>
              <h1 className="font-[Outfit] text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-5">
                {service.title}
              </h1>
              <p className="text-white/55 text-xl leading-relaxed mb-8">{service.tagline}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 bg-[#F5C400] text-[#111111] font-bold px-7 py-4 rounded-full hover:bg-[#F5C400]/90 active:scale-95 transition-all shadow-xl shadow-[#F5C400]/30"
              >
                Start a Project <ArrowRight size={17} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="rounded-2xl overflow-hidden h-72 bg-[#1a1a1a]">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-70" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-[Outfit] text-3xl font-black text-[#111111] tracking-tight mb-5">Overview</h2>
              <p className="text-[#111111]/65 text-lg leading-relaxed">{service.description}</p>

              <div className="mt-12">
                <h3 className="font-[Outfit] font-bold text-[#111111] text-xl mb-6">What's included</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 bg-[#F7F7F7] rounded-xl p-4">
                      <Check size={16} className="text-[#F5C400] mt-0.5 shrink-0" />
                      <span className="text-[#111111]/75 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Deliverables sidebar */}
            <div>
              <div className="bg-[#111111] rounded-2xl p-7 sticky top-24">
                <h3 className="font-[Outfit] font-bold text-white text-base mb-5">What you receive</h3>
                <ul className="space-y-3 mb-8">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2.5 text-white/60 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#F5C400] rounded-full shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block text-center bg-[#F5C400] text-[#111111] font-bold text-sm py-3.5 rounded-xl hover:bg-[#F5C400]/90 transition-colors"
                >
                  Get a Quote
                </Link>
                <p className="text-center text-white/25 text-xs mt-3">Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="py-20 bg-[#F7F7F7]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-[Outfit] text-3xl font-black text-[#111111] tracking-tight mb-10">
              Related work
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((project) => (
                <Link
                  key={project.id}
                  to={`/portfolio/${project.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-black/8 transition-all hover:-translate-y-1"
                >
                  <div className="h-44 overflow-hidden bg-[#111111]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[#F5C400] text-xs font-semibold tracking-wide">{project.category}</span>
                    <h3 className="font-[Outfit] font-bold text-[#111111] mt-1 group-hover:text-[#F5C400] transition-colors">{project.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-[Outfit] text-3xl font-black text-[#111111] tracking-tight mb-10">
            Other services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((svc) => (
              <Link
                key={svc.id}
                to={`/services/${svc.id}`}
                className="group flex items-center gap-3 bg-[#F7F7F7] rounded-xl p-4 hover:bg-[#111111] transition-all duration-200"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#F5C400]/12 text-[#F5C400] shrink-0">
                  {React.cloneElement(iconMap[svc.icon] as React.ReactElement, { size: 18 })}
                </div>
                <span className="font-semibold text-[#111111] group-hover:text-white text-sm transition-colors">{svc.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

