import React from 'react';
import { COURSE_INCLUSIONS } from '../data/courseData';
import { CheckCircle2 } from 'lucide-react';

export const IncludedSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            Deliverables
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            What's Included
          </h2>
          <p className="text-base text-slate-300">
            A comprehensive, mentor-backed package designed to support your development from day one.
          </p>
        </div>

        {/* 5 Concise Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COURSE_INCLUSIONS.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-6 rounded-xl border border-white/10 bg-[#090e1a] hover:border-cyan-500/30 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base font-semibold text-white">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
