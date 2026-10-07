import React from 'react';
import { BRAND_NAME } from '../../data/courseData';
import { AdrovixLogo } from '../AdrovixLogo';
import { TermsContent } from './TermsContent';
import { PrivacyContent } from './PrivacyContent';
import { RefundContent } from './RefundContent';
import { ArrowLeft, Shield, FileText, RefreshCw, CheckCircle2 } from 'lucide-react';

export type PolicyType = 'terms' | 'privacy' | 'refund';

interface LegalPageProps {
  activePolicy: PolicyType;
  onSelectPolicy: (policy: PolicyType) => void;
  onBackToHome: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  activePolicy,
  onSelectPolicy,
  onBackToHome,
}) => {
  const policies = [
    {
      id: 'terms' as PolicyType,
      title: 'Terms & Conditions',
      shortTitle: 'Terms',
      icon: FileText,
      description: 'Program nature, student responsibilities, and clear educational disclaimers.',
    },
    {
      id: 'refund' as PolicyType,
      title: 'Refund & Cancellation Policy',
      shortTitle: 'Refund Policy',
      icon: RefreshCw,
      description: 'Course access rules, pre-access reviews, and accidental duplicate payments.',
    },
    {
      id: 'privacy' as PolicyType,
      title: 'Privacy Policy',
      shortTitle: 'Privacy',
      icon: Shield,
      description: 'How we collect, use, and protect your information with zero data selling.',
    },
  ];

  const currentPolicyMeta = policies.find((p) => p.id === activePolicy) || policies[0];

  return (
    <div className="min-h-screen bg-[#070a12] text-[#f1f5f9]">
      {/* Top Legal Navigation Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#070a12]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 py-3.5">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors focus:outline-none group"
            aria-label="Back to ADROVIX Home"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </button>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onBackToHome();
            }}
            className="inline-flex items-center hover:opacity-90 transition-opacity"
            aria-label="ADROVIX Home"
          >
            <AdrovixLogo size="sm" />
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16">
        {/* Breadcrumb & Section Eyebrow */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-2">
            <span>{BRAND_NAME}</span>
            <span className="text-slate-600">/</span>
            <span>Legal & Compliance</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            {currentPolicyMeta.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            {currentPolicyMeta.description}
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Effective Date: October 2026</span>
            <span className="text-slate-600">·</span>
            <span>Official Policy Document</span>
          </div>
        </div>

        {/* Tab Switcher for Quick Navigation between the 3 Policies */}
        <div className="mb-12 border-b border-white/10 pb-4">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {policies.map((p) => {
              const Icon = p.icon;
              const isActive = activePolicy === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => onSelectPolicy(p.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-500/20 font-semibold'
                      : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
                  <span className="hidden sm:inline">{p.title}</span>
                  <span className="sm:hidden">{p.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Policy Document Body */}
        <article className="rounded-2xl border border-white/10 bg-[#090e1a] p-6 sm:p-10 md:p-12 shadow-xl">
          {activePolicy === 'terms' && <TermsContent />}
          {activePolicy === 'refund' && <RefundContent />}
          {activePolicy === 'privacy' && <PrivacyContent />}
        </article>

        {/* Bottom Navigation Return */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to ADROVIX Home Page</span>
          </button>
        </div>
      </main>
    </div>
  );
};
