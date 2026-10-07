import React from 'react';
import {
  COURSE_TITLE,
  COURSE_PRICE,
  WHATSAPP_ENROLL_URL,
  WHATSAPP_PHONE,
  COURSE_INCLUSIONS,
} from '../data/courseData';
import { MessageCircle, Check, ArrowUpRight } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 border-b border-white/10 scroll-mt-14 relative">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
            One-Time Investment
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Transparent Enrollment
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A single one-time enrollment fee for lifetime access to the 12-module practical program and direct mentor doubt solving.
          </p>
        </div>

        {/* Confident, Clean Pricing Card */}
        <div className="relative rounded-2xl border border-white/10 bg-[#090e1a] p-8 sm:p-12 shadow-2xl overflow-hidden">
          {/* Subtle top edge hairline accent */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent"
            aria-hidden="true"
          />

          <div className="relative z-10">
            {/* Header: Title & Price */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  Comprehensive Program
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {COURSE_TITLE}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  12 Modules · Direct Mentorship by Varun Biswas
                </p>
              </div>

              <div className="sm:text-right shrink-0">
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {COURSE_PRICE}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  One-time enrollment
                </div>
              </div>
            </div>

            {/* Concise Course Inclusions */}
            <div className="py-8">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-5">
                Included in your program:
              </div>
              <ul className="space-y-3.5">
                {COURSE_INCLUSIONS.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Area */}
            <div className="pt-8 border-t border-white/10 flex flex-col items-center text-center">
              <a
                href={WHATSAPP_ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-cyan-500 px-9 py-4 text-sm sm:text-base font-semibold text-slate-950 hover:bg-cyan-400 transition-all shadow-md active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
                <span>Enroll Now — {COURSE_PRICE}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Subtle line per requirement */}
              <p className="text-xs text-slate-400 mt-3.5">
                Enrollment & payment details will be shared on WhatsApp.
              </p>

              <div className="mt-6 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-2">
                <span>Direct WhatsApp Onboarding with Varun Biswas</span>
                <span className="text-slate-600">·</span>
                <span>{WHATSAPP_PHONE}</span>
                <span className="text-slate-600">·</span>
                <span>No payment gateway required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
