import React from 'react';
import {
  BRAND_NAME,
  MENTOR_NAME,
  MENTOR_EMAIL,
  WHATSAPP_PHONE,
  COURSE_PRICE,
} from '../../data/courseData';
import { ShieldAlert, BookOpen, UserCheck, AlertTriangle, Scale } from 'lucide-react';

export const TermsContent: React.FC = () => {
  return (
    <div className="space-y-10 text-slate-300 leading-relaxed text-sm sm:text-base">
      {/* Overview */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <BookOpen className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>1. Program Nature & Educational Purpose</span>
        </h2>
        <p>
          Welcome to <strong className="text-white">{BRAND_NAME}</strong>. By enrolling in or accessing the{' '}
          <strong className="text-white">{BRAND_NAME} Meta Ads & Performance Marketing Program</strong> (the "Program"),
          you agree to be bound by these Terms & Conditions.
        </p>
        <p>
          {BRAND_NAME} is an educational and skills-training initiative founded and led by{' '}
          <strong className="text-white">{MENTOR_NAME}</strong>. The Program is strictly intended for learning, conceptual
          understanding, and practical workflow development in media buying and performance marketing on Meta Platforms (Facebook & Instagram).
        </p>
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
            Curriculum Scope
          </div>
          <p className="text-sm text-slate-300">
            The educational curriculum covers: Meta Ads fundamentals and auction mechanics, business manager and account
            setup, audience and targeting architecture, creative strategy and testing frameworks, lead generation campaigns,
            sales and conversion workflows, Pixel and Conversions API tracking concepts, campaign optimization, performance
            analysis, and live practical execution workflows.
          </p>
        </div>
      </section>

      {/* Critical No-Guarantee Disclaimer */}
      <section className="space-y-4 rounded-xl border border-amber-500/20 bg-amber-500/[0.03] p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-amber-300 tracking-tight flex items-center gap-2.5">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
          <span>2. Strict Financial & Results Disclaimer</span>
        </h2>
        <p className="text-slate-200 font-medium">
          The {BRAND_NAME} Program does NOT promise, guarantee, or warrant any of the following:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">✕</span>
            <span>Specific income or revenue generation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">✕</span>
            <span>Client acquisition or contract awards</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">✕</span>
            <span>Employment, job placement, or hiring</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">✕</span>
            <span>Freelancing projects or opportunities</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">✕</span>
            <span>Specific sales volume or lead quantities</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">✕</span>
            <span>Guaranteed Return on Ad Spend (ROAS)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">✕</span>
            <span>Advertising performance benchmarks</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">✕</span>
            <span>Any predetermined business growth</span>
          </li>
        </ul>
        <p className="text-xs sm:text-sm text-slate-400 pt-2 border-t border-amber-500/15">
          Any campaign demonstrations, case studies, numerical examples, or live exercises shared throughout the Program
          are provided solely for pedagogical illustrative purposes and must not be construed as promises or projections of
          actual financial results.
        </p>
      </section>

      {/* Student Responsibilities */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <UserCheck className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>3. Student Responsibilities & Media Budgets</span>
        </h2>
        <p>
          Students are entirely and solely responsible for their own advertising implementations, media buying budgets,
          creative assets, landing pages, business offerings, compliance with Meta Advertising Policies, and commercial outcomes.
        </p>
        <p>
          Actual advertising results are non-linear and depend heavily on dynamic external variables outside our control, including
          market demand, product/service viability, competitive auction dynamics, ad creative quality, landing page conversion rates,
          server-side tracking health, account history, compliance integrity, and overall execution rigor.
        </p>
      </section>

      {/* Course Access & Enrollment */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <Scale className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>4. Enrollment, Pricing & Course Access</span>
        </h2>
        <p>
          The standard enrollment fee for the Program is <strong className="text-white">{COURSE_PRICE}</strong>. Course access
          and onboarding materials are granted after confirmation of enrollment and completion of the required onboarding process
          with mentor {MENTOR_NAME}.
        </p>
        <p>
          Course access is granted solely to the individual registered student. Login credentials, private community access, session
          links, and course materials are strictly personal and non-transferable.
        </p>
      </section>

      {/* Intellectual Property & Anti-Piracy */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <AlertTriangle className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>5. Intellectual Property & Non-Distribution</span>
        </h2>
        <p>
          All video lectures, frameworks, templates, written guides, and branding associated with {BRAND_NAME} are the proprietary
          intellectual property of {BRAND_NAME} and {MENTOR_NAME}.
        </p>
        <p>
          Students agree not to record, screen-capture, redistribute, resell, sublicense, upload to third-party file-sharing platforms,
          or publicly distribute any course material. Any unauthorized distribution or piracy constitutes a material breach and will
          result in immediate, irrevocable termination of course access without refund, without prejudice to any statutory remedies
          available under applicable copyright law.
        </p>
      </section>

      {/* Trademark Disclaimer */}
      <section className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-400">
        <p>
          <strong>Independent Program Disclaimer:</strong> Meta® and Facebook® are registered trademarks of Meta Platforms, Inc.
          {BRAND_NAME} is an independent training program and is neither sponsored, endorsed, certified by, nor affiliated with
          Meta Platforms, Inc.
        </p>
        <p>
          For questions regarding these Terms & Conditions, contact us via WhatsApp at{' '}
          <strong className="text-slate-300">{WHATSAPP_PHONE}</strong> or email at{' '}
          <strong className="text-slate-300">{MENTOR_EMAIL}</strong>.
        </p>
      </section>
    </div>
  );
};
