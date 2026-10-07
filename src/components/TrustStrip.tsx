import React from 'react';
import { TRUST_POINTS } from '../data/courseData';
import { Layers, CheckCircle2, MessageSquare, UserCheck } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const icons = [Layers, CheckCircle2, MessageSquare, UserCheck];

  return (
    <section className="border-y border-white/10 bg-[#090e1a]/80 py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_POINTS.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div key={item.label} className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5 text-cyan-400 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-tight">
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
