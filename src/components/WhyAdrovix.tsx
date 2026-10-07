import React from 'react';
import { WHY_ADROVIX } from '../data/courseData';

export const WhyAdrovix: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            The Principles
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Why ADROVIX
          </h2>
          <p className="text-base text-slate-300">
            Four core commitments that differentiate this program from superficial internet tutorials.
          </p>
        </div>

        {/* 4 Strong Reasons in a clean editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {WHY_ADROVIX.map((item) => (
            <div
              key={item.number}
              className="border-t border-white/10 pt-5 group"
            >
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-xs font-mono text-cyan-400 tracking-wider">
                  {item.number}
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pl-8">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
