import React, { useState } from 'react';
import { MODULES_CURRICULUM } from '../data/courseData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const CurriculumSection: React.FC = () => {
  // Keep first 2 open by default, or provide toggle for each
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({
    'Module 01': true,
    'Module 02': false,
  });

  const toggleModule = (modNumber: string) => {
    setOpenModules((prev) => ({
      ...prev,
      [modNumber]: !prev[modNumber],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    MODULES_CURRICULUM.forEach((m) => {
      allOpen[m.number] = true;
    });
    setOpenModules(allOpen);
  };

  const collapseAll = () => {
    setOpenModules({});
  };

  const isAllExpanded = MODULES_CURRICULUM.every((m) => openModules[m.number]);

  return (
    <section id="curriculum" className="py-20 md:py-28 border-b border-white/10 scroll-mt-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              Full Syllabus
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
              12-Module Practical Curriculum
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              A comprehensive sequence moving from foundational mechanics to advanced campaign execution.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={isAllExpanded ? collapseAll : expandAll}
              className="text-xs font-medium text-cyan-400 hover:text-cyan-300 py-1.5 px-3 rounded-md border border-cyan-500/30 bg-cyan-950/20 transition-colors"
            >
              {isAllExpanded ? 'Collapse All' : 'Expand All Modules'}
            </button>
          </div>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {MODULES_CURRICULUM.map((module) => {
            const isOpen = !!openModules[module.number];
            return (
              <div
                key={module.number}
                className={`rounded-xl border transition-colors overflow-hidden ${
                  isOpen
                    ? 'border-cyan-500/40 bg-[#0c1322]'
                    : 'border-white/10 bg-[#090e1a] hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleModule(module.number)}
                  className="w-full text-left p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-medium text-cyan-400">
                        {module.number}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white">
                      {module.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                      {module.oneLiner}
                    </p>
                  </div>

                  <div className="p-1 rounded-md bg-white/[0.04] text-slate-400 shrink-0 mt-1 sm:mt-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-white/5">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Key Topics Covered:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-400 font-mono text-xs select-none">›</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
