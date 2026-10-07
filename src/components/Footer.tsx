import React from 'react';
import {
  BRAND_NAME,
  MENTOR_NAME,
  MENTOR_ROLE,
  MENTOR_EMAIL,
  WHATSAPP_PHONE,
  WHATSAPP_ENROLL_URL,
} from '../data/courseData';
import { AdrovixLogo } from './AdrovixLogo';
import { MessageCircle, Mail } from 'lucide-react';

interface FooterProps {
  onOpenPolicy?: (policy: 'terms' | 'privacy' | 'refund') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  const handlePolicyClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    policy: 'terms' | 'privacy' | 'refund'
  ) => {
    if (onOpenPolicy) {
      e.preventDefault();
      onOpenPolicy(policy);
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#06080f] py-12 text-slate-400 text-xs">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/5">
          {/* Brand Info */}
          <div className="space-y-3">
            <AdrovixLogo size="sm" />
            <p className="text-slate-300 max-w-sm text-xs leading-relaxed">
              Practical Meta Ads & Performance Marketing Education.
              Designed to take learners from fundamentals to practical campaign execution.
            </p>
            <div className="text-[11px] text-slate-400">
              Founder: <span className="text-slate-200">{MENTOR_NAME}</span> ({MENTOR_ROLE})
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Navigation
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <a href="#curriculum" className="hover:text-cyan-400 transition-colors">
                  12-Module Curriculum
                </a>
              </li>
              <li>
                <a href="#learn" className="hover:text-cyan-400 transition-colors">
                  Core Pillars
                </a>
              </li>
              <li>
                <a href="#competencies" className="hover:text-cyan-400 transition-colors">
                  Practical Capabilities
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors">
                  Pricing (₹2,999)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Policies Column */}
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Policies & Legal
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <a
                  href="#terms"
                  onClick={(e) => handlePolicyClick(e, 'terms')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#refund"
                  onClick={(e) => handlePolicyClick(e, 'refund')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Refund & Cancellation Policy
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  onClick={(e) => handlePolicyClick(e, 'privacy')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Direct Contact
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={WHATSAPP_ENROLL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>WhatsApp: {WHATSAPP_PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${MENTOR_EMAIL}`}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{MENTOR_EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal row */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="space-y-1">
            <div>
              © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-400 pt-1">
              <a
                href="#terms"
                onClick={(e) => handlePolicyClick(e, 'terms')}
                className="hover:text-cyan-400 transition-colors"
              >
                Terms & Conditions
              </a>
              <span className="text-slate-600">·</span>
              <a
                href="#refund"
                onClick={(e) => handlePolicyClick(e, 'refund')}
                className="hover:text-cyan-400 transition-colors"
              >
                Refund / Cancellation
              </a>
              <span className="text-slate-600">·</span>
              <a
                href="#privacy"
                onClick={(e) => handlePolicyClick(e, 'privacy')}
                className="hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="max-w-md text-left md:text-right leading-relaxed text-slate-400">
            Meta® is a registered trademark of Meta Platforms, Inc. ADROVIX is an independent educational training program and is not sponsored, endorsed, or affiliated with Meta Platforms, Inc. No guaranteed financial outcomes are promised.
          </div>
        </div>
      </div>
    </footer>
  );
};
