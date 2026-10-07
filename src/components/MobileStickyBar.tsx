import React from 'react';
import { COURSE_PRICE, WHATSAPP_ENROLL_URL } from '../data/courseData';
import { ArrowUpRight } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  return (
    <aside
      aria-label="Mobile enrollment action"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#070a12]/95 backdrop-blur-md px-4 py-3"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
            One-Time Access
          </span>
          <span className="text-base font-bold text-white tracking-tight">
            {COURSE_PRICE}
          </span>
        </div>

        <a
          href={WHATSAPP_ENROLL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-cyan-500 px-5 py-2.5 text-xs font-semibold text-slate-950 hover:bg-cyan-400 active:scale-[0.98] transition-all shadow-sm"
        >
          <span>Enroll Now</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </aside>
  );
};
