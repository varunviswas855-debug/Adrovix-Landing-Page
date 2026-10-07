import React from 'react';
import {
  COURSE_PRICE,
  WHATSAPP_ENROLL_URL,
  WHATSAPP_PHONE,
} from '../data/courseData';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(14,165,233,0.08),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
          Enrollment Open
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-2xl mx-auto">
          Build a Practical Foundation in Meta Ads.
        </h2>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Learn the fundamentals, understand campaign execution, and develop the ability
          to make better performance marketing decisions.
        </p>

        <div className="flex flex-col items-center gap-3">
          <a
            href={WHATSAPP_ENROLL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-950 hover:bg-cyan-400 transition-all shadow-xl shadow-cyan-500/25 active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
            <span>Enroll Now — {COURSE_PRICE}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="text-xs text-slate-400 mt-2">
            Connect directly with Varun Biswas on WhatsApp: {WHATSAPP_PHONE}
          </div>
        </div>
      </div>
    </section>
  );
};
