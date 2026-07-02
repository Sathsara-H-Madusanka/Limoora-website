import { Link } from 'react-router';
import { Twitter, Linkedin, Github, Instagram, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Website Development', href: '/services/web-development' },
    { label: 'Mobile Applications', href: '/services/mobile-apps' },
    { label: 'UI/UX Design', href: '/services/ui-ux-design' },
    { label: 'Brand Identity', href: '/services/branding' },
    { label: 'Software Development', href: '/services/software-development' },
    { label: 'AI Solutions', href: '/services/ai-solutions' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Newsletter bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-[Outfit] font-bold text-xl text-white">Stay ahead of the curve.</p>
            <p className="text-white/50 text-sm mt-1">Monthly insights on digital strategy, design, and technology.</p>
          </div>
          <form
            className="flex gap-3 w-full max-w-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/8 border border-white/12 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#F5C400]/60 transition-colors"
            />
            <button
              type="submit"
              className="bg-[#F5C400] text-[#111111] font-semibold text-sm px-5 py-3 rounded-xl hover:bg-[#F5C400]/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-0.5 mb-5">
              <span className="text-2xl font-[Outfit] font-black tracking-[-0.02em] text-white">LUMOORA</span>
              <span className="text-[#F5C400] text-3xl font-black leading-none translate-y-[2px]">.</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              We partner with ambitious companies to design and build digital products that define markets and
              illuminate new possibilities.
            </p>
            <div className="mt-8 space-y-2.5">
              <a href="mailto:hello@lumoora.com" className="flex items-center gap-2.5 text-white/50 text-sm hover:text-white transition-colors group">
                <Mail size={14} className="text-[#F5C400]" />
                hello@lumoora.com
              </a>
              <a href="tel:+12125550190" className="flex items-center gap-2.5 text-white/50 text-sm hover:text-white transition-colors">
                <Phone size={14} className="text-[#F5C400]" />
                +1 (212) 555-0190
              </a>
              <p className="flex items-start gap-2.5 text-white/50 text-sm">
                <MapPin size={14} className="text-[#F5C400] mt-0.5 shrink-0" />
                340 Madison Avenue, Suite 2100<br />New York, NY 10017
              </p>
            </div>
            <div className="flex items-center gap-3 mt-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/8 text-white/50 hover:bg-[#F5C400] hover:text-[#111111] transition-all duration-200"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">{group}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-white/55 text-sm hover:text-white transition-colors duration-150 hover:translate-x-0.5 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} LUMOORA. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Illuminating Digital Futures
          </p>
        </div>
      </div>
    </footer>
  );
}
