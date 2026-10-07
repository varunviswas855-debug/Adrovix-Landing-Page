import React from 'react';
import { PRACTICAL_COMPETENCIES } from '../data/courseData';
import { Check } from 'lucide-react';

export const PracticalCompetencies: React.FC = () => {
  return (
    <section id="competencies" className="py-20 md:py-28 border-b border-white/10 scroll-mt-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            Execution Outcomes
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            What You'll Be Able To Do
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Direct, practical campaign capabilities you will execute independently upon completing the program.
          </p>
        </div>

        {/* 5 Practical Outcomes */}
        <div className="space-y-4 max-w-3xl">
          {PRACTICAL_COMPETENCIES.map((competency, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-[#090e1a]/60 hover:border-white/15 transition-colors"
            >
              <div className="p-1 rounded-md bg-cyan-500/10 text-cyan-400 mt-0.5 shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div className="text-base font-medium text-slate-100">
                {competency}
              </div>
            </div>
          ))}
        </div>

        {/* Professional boundary notice */}
        <div className="mt-10 p-5 rounded-xl border border-white/5 bg-white/[0.01] text-xs text-slate-400 max-w-3xl">
          <span className="font-semibold text-slate-300">Methodology Note:</span> ADROVIX teaches verified campaign frameworks, algorithmic auction logic, and data diagnostics. We do not promise overnight income or guaranteed client acquisition.
        </div>
      </div>
    </section>
  );
};
