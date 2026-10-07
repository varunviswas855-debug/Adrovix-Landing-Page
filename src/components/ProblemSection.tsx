import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            The Structural Challenge
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Stop Learning Meta Ads in Fragments.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Most beginners consume random videos, tutorials, and disconnected tips
            without understanding how campaigns actually fit together. ADROVIX
            provides a structured learning path from fundamentals to practical
            campaign execution.
          </p>
        </div>

        {/* Two-Column Editorial Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Fragmented Approach */}
          <div className="border-t border-white/15 pt-6">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Status Quo
            </div>
            <h3 className="text-lg font-bold text-slate-200 mb-4">
              Disconnected Tutorial Habits
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-slate-600 select-none font-mono">01</span>
                <span>Copying temporary targeting tricks without grasping algorithmic auction mechanics.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-600 select-none font-mono">02</span>
                <span>Setting up ad accounts with incomplete tracking and inaccurate conversion events.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-600 select-none font-mono">03</span>
                <span>Panicking when ads fluctuate because metrics aren't analyzed diagnostically.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-600 select-none font-mono">04</span>
                <span>Wasting media budgets on haphazard adjustments rather than systematic iterations.</span>
              </li>
            </ul>
          </div>

          {/* ADROVIX System */}
          <div className="border-t border-cyan-500/50 pt-6">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
              The ADROVIX Architecture
            </div>
            <h3 className="text-lg font-bold text-white mb-4">
              Structured First-Principles Execution
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 select-none font-mono">01</span>
                <span>A linear 12-module roadmap taking you sequentially from foundational setup to live deployment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 select-none font-mono">02</span>
                <span>Verified Pixel and Conversions API infrastructure to feed the algorithm clean signal data.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 select-none font-mono">03</span>
                <span>Data-backed diagnostic frameworks to isolate bottlenecks across Hook, CTR, and CPA.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 select-none font-mono">04</span>
                <span>Direct practitioner mentorship with Varun Biswas for ongoing live doubt resolution.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
