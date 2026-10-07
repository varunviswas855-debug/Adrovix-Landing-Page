import React from 'react';
import { TARGET_AUDIENCE } from '../data/courseData';
import { Check, ShieldAlert } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  return (
    <section id="audience" className="py-20 md:py-28 border-b border-white/10 scroll-mt-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            Target Audience
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Is ADROVIX Right For You?
          </h2>
          <p className="text-base text-slate-300">
            Structured for anyone serious about mastering performance marketing through rigorous, practical execution.
          </p>
        </div>

        {/* 3 Clear Target Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {TARGET_AUDIENCE.map((aud) => (
            <div
              key={aud.group}
              className="p-6 rounded-xl border border-white/10 bg-[#090e1a] hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3 text-cyan-400">
                <Check className="w-4 h-4 shrink-0" />
                <h3 className="text-base font-semibold text-white">
                  {aud.group}
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {aud.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Realistic Expectations Boundary Callout */}
        <div className="rounded-xl border border-amber-500/30 bg-amber-950/15 p-6 flex items-start gap-4">
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-1">
              Who This Is Not For
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Not designed for people looking for overnight income, automated wealth hacks, or guaranteed results. Meta Ads is a real commercial skill requiring structured testing, patience, and diagnostic problem solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
