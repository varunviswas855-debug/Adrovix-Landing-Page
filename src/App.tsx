/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ProblemSection } from './components/ProblemSection';
import { WhatYouWillLearn } from './components/WhatYouWillLearn';
import { CurriculumSection } from './components/CurriculumSection';
import { PracticalCompetencies } from './components/PracticalCompetencies';
import { AudienceSection } from './components/AudienceSection';
import { FounderSection } from './components/FounderSection';
import { WhyAdrovix } from './components/WhyAdrovix';
import { IncludedSection } from './components/IncludedSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { SectionReveal } from './components/SectionReveal';
import { LegalPage, PolicyType } from './components/legal/LegalPage';

export default function App() {
  const [activePolicy, setActivePolicy] = useState<PolicyType | null>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'terms' || hash === 'refund' || hash === 'privacy') {
        return hash as PolicyType;
      }
    }
    return null;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'terms' || hash === 'refund' || hash === 'privacy') {
        setActivePolicy(hash as PolicyType);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setActivePolicy(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openPolicy = (policy: PolicyType) => {
    window.location.hash = `#${policy}`;
    setActivePolicy(policy);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToHome = () => {
    window.history.pushState(null, '', window.location.pathname);
    setActivePolicy(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (activePolicy) {
    return (
      <LegalPage
        activePolicy={activePolicy}
        onSelectPolicy={(policy) => {
          window.location.hash = `#${policy}`;
          setActivePolicy(policy);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onBackToHome={backToHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#070a12] text-[#f1f5f9] selection:bg-cyan-500/30 selection:text-cyan-200 pb-16 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <SectionReveal>
          <ProblemSection />
        </SectionReveal>
        <SectionReveal>
          <WhatYouWillLearn />
        </SectionReveal>
        <SectionReveal>
          <CurriculumSection />
        </SectionReveal>
        <SectionReveal>
          <PracticalCompetencies />
        </SectionReveal>
        <SectionReveal>
          <AudienceSection />
        </SectionReveal>
        <SectionReveal>
          <FounderSection />
        </SectionReveal>
        <SectionReveal>
          <WhyAdrovix />
        </SectionReveal>
        <SectionReveal>
          <IncludedSection />
        </SectionReveal>
        <SectionReveal>
          <PricingSection />
        </SectionReveal>
        <SectionReveal>
          <FaqSection />
        </SectionReveal>
        <SectionReveal>
          <FinalCta />
        </SectionReveal>
      </main>
      <Footer onOpenPolicy={openPolicy} />
      <MobileStickyBar />
    </div>
  );
}
