import React from 'react';
import {
  WHATSAPP_ENROLL_URL,
  COURSE_PRICE,
} from '../data/courseData';
import { CampaignVisual } from './CampaignVisual';
import { ArrowDown, MessageCircle, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl mb-10">
          {/* Eyebrow: unboxed text with subtle separator */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-4">
            <span className="font-semibold text-white">ADROVIX</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Meta Ads & Performance Marketing</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            Learn Meta Ads from Basics to Practical Campaign Execution.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
            A structured, practitioner-led program designed to help you understand how
            Meta Ads work, build campaigns correctly, analyze performance, and make
            better optimization decisions.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href={WHATSAPP_ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition-all shadow-md active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>Enroll Now — {COURSE_PRICE}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#curriculum"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-medium text-slate-300 hover:bg-white/[0.07] hover:text-white transition-colors"
            >
              <span>Explore Curriculum</span>
              <ArrowDown className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>

        {/* 3D-inspired Campaign Intelligence System Visual */}
        <div className="mt-6 sm:mt-8">
          <CampaignVisual />
        </div>
      </div>
    </section>
  );
};
