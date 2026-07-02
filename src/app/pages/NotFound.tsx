import { Link } from 'react-router';
import { ArrowLeft, Home, Search, Mail } from 'lucide-react';

const suggestions = [
  { label: 'Home', href: '/', icon: <Home size={16} /> },
  { label: 'Portfolio', href: '/portfolio', icon: <Search size={16} /> },
  { label: 'Services', href: '/services', icon: <Search size={16} /> },
  { label: 'Contact', href: '/contact', icon: <Mail size={16} /> },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center relative overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#F5C400]/8 rounded-full blur-[100px]" />

      <div className="relative text-center px-6 max-w-2xl mx-auto">
        {/* 404 */}
        <div className="font-[Outfit] text-[160px] lg:text-[220px] font-black text-white/5 leading-none select-none mb-[-40px] lg:mb-[-60px]">
          404
        </div>

        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 border border-[#F5C400]/30 bg-[#F5C400]/8 text-[#F5C400] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Page Not Found
          </span>
          <h1 className="font-[Outfit] text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            This page doesn't exist.
          </h1>
          <p className="text-white/45 text-lg leading-relaxed mb-10 max-w-md mx-auto">
            The page you're looking for may have been moved, deleted, or never existed. Here are some helpful links instead.
          </p>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {suggestions.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="flex items-center gap-2 bg-white/8 border border-white/12 text-white/70 text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/14 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                {s.icon}
                {s.label}
              </Link>
            ))}
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2.5 bg-[#F5C400] text-[#111111] font-bold px-7 py-3.5 rounded-full hover:bg-[#F5C400]/90 active:scale-95 transition-all shadow-lg shadow-[#F5C400]/25"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
