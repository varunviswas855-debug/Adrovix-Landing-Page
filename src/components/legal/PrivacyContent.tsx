import React from 'react';
import {
  BRAND_NAME,
  MENTOR_NAME,
  MENTOR_EMAIL,
  WHATSAPP_PHONE,
} from '../../data/courseData';
import { Lock, Eye, Server, Cookie, ShieldCheck, UserX, FileCheck } from 'lucide-react';

export const PrivacyContent: React.FC = () => {
  return (
    <div className="space-y-10 text-slate-300 leading-relaxed text-sm sm:text-base">
      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <Lock className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>1. Introduction & Scope</span>
        </h2>
        <p>
          This Privacy Policy outlines how <strong className="text-white">{BRAND_NAME}</strong> ("we", "our", or "us"),
          founded by <strong className="text-white">{MENTOR_NAME}</strong>, collects, utilizes, and safeguards your personal
          information when you visit our website or enroll in our educational program.
        </p>
        <p>
          We respect your privacy and are committed to handling your personal details with transparency, dignity, and care.
        </p>
      </section>

      {/* Information We Collect */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <Eye className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>2. Information We Collect</span>
        </h2>
        <p>
          We may collect personal information that you voluntarily provide to us when inquiring about or enrolling in the Program, including:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
          <li><strong className="text-white">Contact & Identity Details:</strong> Full name, email address, and WhatsApp/phone number.</li>
          <li><strong className="text-white">Enrollment Information:</strong> Course batch preferences and onboarding details.</li>
          <li><strong className="text-white">Communication Records:</strong> Direct WhatsApp conversations, email inquiries, and mentorship questions.</li>
          <li><strong className="text-white">Payment & Verification Details:</strong> Transaction reference IDs / UTR numbers or payment confirmation records required to verify enrollment.</li>
          <li><strong className="text-white">Technical & Usage Data:</strong> IP address, device type, operating system, browser specifications, and browsing interaction metrics.</li>
          <li><strong className="text-white">Analytics Information:</strong> Aggregate website metrics, page views, and navigation flows.</li>
        </ul>
      </section>

      {/* How We Use Your Information */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <FileCheck className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>3. Purpose of Data Processing</span>
        </h2>
        <p>We use the collected information strictly for legitimate educational and operational purposes, including:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="p-3.5 rounded-lg border border-white/5 bg-white/[0.02]">
            <span className="text-white font-medium block">Enrollment Processing</span>
            <span className="text-slate-400 text-xs">Confirming payments and activating student access</span>
          </div>
          <div className="p-3.5 rounded-lg border border-white/5 bg-white/[0.02]">
            <span className="text-white font-medium block">Direct Mentorship</span>
            <span className="text-slate-400 text-xs">Conducting 1-on-1 WhatsApp doubt clearing and guidance</span>
          </div>
          <div className="p-3.5 rounded-lg border border-white/5 bg-white/[0.02]">
            <span className="text-white font-medium block">Course Communication</span>
            <span className="text-slate-400 text-xs">Sending onboarding links, schedules, and important alerts</span>
          </div>
          <div className="p-3.5 rounded-lg border border-white/5 bg-white/[0.02]">
            <span className="text-white font-medium block">Student Support</span>
            <span className="text-slate-400 text-xs">Resolving queries and addressing student needs</span>
          </div>
          <div className="p-3.5 rounded-lg border border-white/5 bg-white/[0.02]">
            <span className="text-white font-medium block">Platform Security</span>
            <span className="text-slate-400 text-xs">Preventing unauthorized access and content piracy</span>
          </div>
          <div className="p-3.5 rounded-lg border border-white/5 bg-white/[0.02]">
            <span className="text-white font-medium block">Quality & Analytics</span>
            <span className="text-slate-400 text-xs">Measuring website performance and improving the curriculum</span>
          </div>
        </div>
      </section>

      {/* No Selling of Data & Third-Party Processors */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <Server className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>4. Data Sharing & Third-Party Processors</span>
        </h2>
        <p className="text-white font-medium">
          We do NOT sell, rent, monetize, or trade your personal information to third parties or marketing brokers.
        </p>
        <p>
          Information is shared only with trusted third-party service providers essential to operating our services:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-slate-300 pl-2">
          <li><strong>Cloud Infrastructure & Hosting:</strong> Secure cloud servers hosting the website and content delivery.</li>
          <li><strong>Messaging Services:</strong> WhatsApp (Meta Platforms, Inc.) used for direct student communication, onboarding, and doubt-solving.</li>
          <li><strong>Banking & Financial Institutions:</strong> Verified banking channels to confirm direct UPI / bank transfer settlements when applicable.</li>
        </ul>
        <p className="text-xs text-slate-400">
          All service providers are bound to handle personal data securely in accordance with their respective compliance standards.
        </p>
      </section>

      {/* Cookies & Tracking */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <Cookie className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>5. Cookies & Tracking Technologies</span>
        </h2>
        <p>
          Our website may use standard cookies and similar browser technologies for:
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
          <li>Essential site functionality, navigation, and state persistence.</li>
          <li>Basic performance measurement and latency optimization.</li>
          <li>Marketing measurement and attribution where tracking tags (such as Meta Pixel) are actively configured.</li>
        </ul>
        <p className="text-xs text-slate-400">
          You can configure your browser to decline non-essential cookies or notify you when cookies are sent without impacting core reading capabilities.
        </p>
      </section>

      {/* Data Security */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>6. Technical Data Security</span>
        </h2>
        <p>
          We employ reasonable technical and organizational measures (including HTTPS encryption, access controls, and secure communications)
          designed to safeguard personal information from accidental loss, unauthorized access, alteration, or disclosure.
        </p>
        <p className="text-xs text-slate-400">
          While we take rigorous precautions, no method of transmission over the internet or method of electronic storage can be
          guaranteed to be 100% secure.
        </p>
      </section>

      {/* Children's Privacy */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <UserX className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>7. Children's Privacy</span>
        </h2>
        <p>
          The Program is intended for a general adult audience (students, entrepreneurs, and professionals). The website is not
          intentionally structured or designed to attract or collect personal information from children under 18 years of age.
        </p>
      </section>

      {/* Policy Changes & Contact */}
      <section className="space-y-4 pt-4 border-t border-white/10 text-xs text-slate-400">
        <div>
          <h3 className="font-semibold text-white text-sm mb-1">8. Updates to this Policy</h3>
          <p>
            {BRAND_NAME} may update this Privacy Policy from time to time to reflect operational, legal, or regulatory modifications.
            Any updated version will be published directly on this website with an updated revision date.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white text-sm mb-1">Contact for Privacy Questions</h3>
          <p>If you have any questions, requests, or concerns regarding your privacy, please contact:</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2 text-slate-300">
            <div>
              <span className="text-slate-400 block">Founder:</span>
              <span className="font-medium text-white">{MENTOR_NAME}</span>
            </div>
            <div>
              <span className="text-slate-400 block">WhatsApp:</span>
              <span className="font-mono text-cyan-400">{WHATSAPP_PHONE}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Email:</span>
              <span className="font-mono text-cyan-400">{MENTOR_EMAIL}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
