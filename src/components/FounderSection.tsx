import React from 'react';
import {
  MENTOR_NAME,
  MENTOR_ROLE,
  MENTOR_EMAIL,
  WHATSAPP_PHONE,
  WHATSAPP_ENROLL_URL,
} from '../data/courseData';
import { AdrovixLogo } from './AdrovixLogo';
import { MessageCircle, Mail, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section id="mentor" className="py-20 md:py-28 border-b border-white/10 scroll-mt-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            Founder & Lead Mentor
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Meet Varun Biswas
          </h2>
          <p className="text-base text-slate-300">
            A practitioner-first approach to performance marketing and campaign execution.
          </p>
        </div>

        {/* Editorial Profile Frame */}
        <div className="rounded-2xl border border-white/10 bg-[#090e1a] p-6 sm:p-10 md:p-12 transition-all hover:border-white/15">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left Slot: Real Founder Photograph (Static Project Asset) */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#0e1626]">
                {/* Real Founder Photo - Static Project Asset */}
                <img
                  src="/images/varun-biswas.jpg"
                  alt="Varun Biswas — Lead Mentor & Founder, ADROVIX"
                  style={{ height: '411.475px' }}
                  className="w-full object-cover object-center select-none"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    // Safe fallback to alternate static path if needed without breaking React
                    const fallback = '/1000112240.jpg';
                    if (!e.currentTarget.src.endsWith(fallback)) {
                      e.currentTarget.src = fallback;
                    }
                  }}
                />

                {/* Subtle vignette scrim */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090e1a]/80 via-transparent to-transparent"
                  aria-hidden="true"
                />

                {/* Overlaid founder verified title badge */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#070a12]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>{MENTOR_NAME}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="text-[10px] text-cyan-400 font-mono">
                      Founder, ADROVIX
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                    Verified
                  </span>
                </div>
              </div>

              {/* Direct channels */}
              <div className="mt-5 w-full max-w-[280px] sm:max-w-[320px] space-y-2 text-xs">
                <a
                  href={WHATSAPP_ENROLL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg border border-white/10 bg-white/[0.02] text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all duration-150 active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">{WHATSAPP_PHONE}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-400" />
                </a>

                <a
                  href={`mailto:${MENTOR_EMAIL}`}
                  className="flex items-center gap-2 p-2.5 rounded-lg border border-white/10 bg-white/[0.02] text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">{MENTOR_EMAIL}</span>
                </a>
              </div>
            </div>

            {/* Right Slot: Concise, Authentic Founder Story */}
            <div className="md:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
              <div>
                <div className="mb-2">
                  <AdrovixLogo size="sm" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {MENTOR_NAME}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-cyan-400 mt-0.5 font-mono">
                  {MENTOR_ROLE}
                </p>
              </div>

              <blockquote className="border-l-2 border-cyan-400 pl-4 py-1 text-white font-medium text-base sm:text-lg italic">
                "ADROVIX was built around a simple idea: learn performance marketing by understanding how campaigns actually work — not by memorizing random tactics."
              </blockquote>

              <p>
                Most learners get stuck because they are taught surface toggles: which button to press without ever learning how the ad auction thinks, how algorithmic budget allocation functions, or how to identify creative fatigue before burning capital.
              </p>

              <p>
                In this program, we strip away the noise. You learn the complete mechanics of Meta Ads from ground zero: foundational structure, tracking integrity with Pixel and Conversions API, high-converting creative testing frameworks, and calculated data-driven scaling.
              </p>

              <p>
                Most importantly, you have direct mentor access for live doubt solving throughout your training. When you hit a real campaign obstacle, you get practical guidance grounded in real-world media buying.
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center gap-6 text-xs text-slate-400">
                <div>
                  <span className="text-white font-semibold block text-sm">Direct Mentorship</span>
                  <span>Personal doubt clearing on WhatsApp</span>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <span className="text-white font-semibold block text-sm">Real Execution</span>
                  <span>Practical campaign workflows</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
