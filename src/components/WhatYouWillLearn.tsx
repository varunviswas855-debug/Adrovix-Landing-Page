import React from 'react';
import { CORE_LEARNING_AREAS } from '../data/courseData';

export const WhatYouWillLearn: React.FC = () => {
  return (
    <section id="learn" className="py-20 md:py-28 border-b border-white/10 scroll-mt-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            Curriculum Core
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            What You'll Learn
          </h2>
          <p className="text-base text-slate-300">
            Six foundational pillars structured to build comprehensive media-buying competence.
          </p>
        </div>

        {/* Clean Editorial Numbered Grid with generous whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {CORE_LEARNING_AREAS.map((area) => (
            <div
              key={area.number}
              className="group border-t border-white/10 pt-5 transition-colors"
            >
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-xs font-mono text-cyan-400 tracking-wider">
                  {area.number}
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {area.title}
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pl-8">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
