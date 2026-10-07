import React, { useState } from 'react';
import { WHATSAPP_ENROLL_URL, COURSE_PRICE } from '../data/courseData';
import { AdrovixLogo } from './AdrovixLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Curriculum', href: '#curriculum' },
    { label: "What You'll Learn", href: '#learn' },
    { label: 'Competencies', href: '#competencies' },
    { label: "Who It's For", href: '#audience' },
    { label: 'Mentor', href: '#mentor' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#070a12]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3">
        {/* Zone 1: Official Brand Logo Wordmark */}
        <a
          href="#"
          className="inline-flex items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500 rounded transition-transform active:scale-[0.98]"
          aria-label="ADROVIX Home"
        >
          <AdrovixLogo size="nav" />
        </a>

        {/* Zone 2: Clean Text Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action with subtle micro-scale interaction */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={WHATSAPP_ENROLL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-400 transition-all duration-150 active:scale-[0.98] shadow-sm shadow-cyan-500/20 whitespace-nowrap"
          >
            <span>Enroll Now — {COURSE_PRICE}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#070a12] px-6 py-5 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-4 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10">
              <a
                href={WHATSAPP_ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-lg bg-cyan-500 px-4 py-3 text-xs font-semibold text-slate-950 hover:bg-cyan-400 active:scale-[0.98] transition-all text-center"
              >
                <span>Enroll Now — {COURSE_PRICE} (WhatsApp)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
