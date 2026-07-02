import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href: string) => location.pathname === href || location.pathname.startsWith(href + '/');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/96 backdrop-blur-xl border-b border-black/8 shadow-sm shadow-black/4'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-0.5 group">
              <span
                className={`text-xl font-[Outfit] font-black tracking-[-0.02em] transition-colors duration-300 ${
                  scrolled ? 'text-[#111111]' : 'text-white'
                }`}
              >
                LUMOORA
              </span>
              <span className="text-[#F5C400] text-2xl font-black leading-none translate-y-[1px]">.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(link.href)
                      ? 'text-[#F5C400]'
                      : scrolled
                      ? 'text-[#111111]/80 hover:text-[#111111] hover:bg-black/5'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#F5C400] rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled ? 'text-[#111111]/70 hover:text-[#111111]' : 'text-white/70 hover:text-white'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-[#F5C400] text-[#111111] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#F5C400]/90 active:scale-95 transition-all duration-200 shadow-lg shadow-[#F5C400]/25"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 ${
                scrolled ? 'text-[#111111] hover:bg-black/5' : 'text-white hover:bg-white/10'
              }`}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 bottom-0 w-80 bg-white shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between h-[72px] px-6 border-b border-black/8">
            <Link to="/" className="flex items-center gap-0.5">
              <span className="text-xl font-[Outfit] font-black tracking-[-0.02em] text-[#111111]">LUMOORA</span>
              <span className="text-[#F5C400] text-2xl font-black leading-none translate-y-[1px]">.</span>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-[#111111] hover:bg-black/5"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="p-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-150 ${
                  isActive(link.href)
                    ? 'bg-[#F5C400]/12 text-[#111111]'
                    : 'text-[#111111]/70 hover:text-[#111111] hover:bg-black/5'
                }`}
              >
                {link.label}
                {isActive(link.href) && <span className="ml-auto w-1.5 h-1.5 bg-[#F5C400] rounded-full" />}
              </Link>
            ))}
          </nav>
          <div className="p-6 pt-2 border-t border-black/8 mt-auto">
            <Link
              to="/contact"
              className="block w-full bg-[#F5C400] text-[#111111] font-bold text-center py-3.5 rounded-xl hover:bg-[#F5C400]/90 transition-colors"
            >
              Get Started
            </Link>
            <p className="text-center text-sm text-[#111111]/40 mt-4">LUMOORA — Illuminating Digital Futures</p>
          </div>
        </div>
      </div>
    </>
  );
}
