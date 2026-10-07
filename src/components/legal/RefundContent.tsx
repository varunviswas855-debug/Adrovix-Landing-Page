import React from 'react';
import {
  BRAND_NAME,
  MENTOR_NAME,
  MENTOR_EMAIL,
  WHATSAPP_PHONE,
  COURSE_PRICE,
} from '../../data/courseData';
import { CheckCircle2, AlertCircle, RefreshCw, HelpCircle, FileText } from 'lucide-react';

export const RefundContent: React.FC = () => {
  return (
    <div className="space-y-10 text-slate-300 leading-relaxed text-sm sm:text-base">
      {/* Primary Policy Banner */}
      <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/[0.04] p-6 space-y-3">
        <div className="flex items-center gap-2.5 text-cyan-400 font-semibold text-base sm:text-lg">
          <FileText className="w-5 h-5 shrink-0" />
          <span>Core Policy Overview</span>
        </div>
        <p className="text-white text-base sm:text-lg font-medium">
          Once course access has been provided to the student, the course fee of {COURSE_PRICE} is non-refundable.
        </p>
        <p className="text-xs sm:text-sm text-slate-300">
          Due to the immediate digital nature of the curriculum, intellectual frameworks, and proprietary materials provided upon onboarding, enrollment fees are deemed fully earned upon the provisioning of course access.
        </p>
      </div>

      {/* Activated Access Policy */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>1. Post-Activation Policy</span>
        </h2>
        <p>
          Once course access has been activated, refunds will not be provided for change of mind, lack of participation,
          failure to complete the course, scheduling conflicts, dissatisfaction with personal external ad performance,
          or personal circumstances, subject to applicable law.
        </p>
        <p>
          {BRAND_NAME} provides extensive upfront information regarding the course syllabus, format, price, and mentorship structure.
          Students are encouraged to review all curriculum modules and reach out with any clarifying questions before completing enrollment.
        </p>
      </section>

      {/* Pre-Access Cancellation Review */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>2. Pre-Access Cancellation Requests</span>
        </h2>
        <p>
          Before course access is provided or activated, cancellation and refund requests may be reviewed by {BRAND_NAME}
          on a case-by-case basis.
        </p>
        <p>
          Please note that refunds are not issued automatically. Any pre-access request must be submitted promptly in writing
          via WhatsApp or email, citing the transaction details, prior to the issuance of onboarding links or curriculum access.
        </p>
      </section>

      {/* Accidental Duplicate Payments */}
      <section className="space-y-4 rounded-xl border border-white/10 bg-white/[0.02] p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <RefreshCw className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>3. Accidental Duplicate Payments</span>
        </h2>
        <p>
          If a student accidentally makes the same course payment twice for the same enrollment, the duplicate payment may be
          refunded after verification. The original valid enrollment payment will remain applicable.
        </p>
        <div className="space-y-2 text-sm text-slate-300">
          <div className="font-semibold text-white text-xs uppercase tracking-wider font-mono">
            Verification Protocol:
          </div>
          <ul className="list-disc list-inside space-y-1.5 text-slate-300">
            <li>Duplicate-payment refund requests must include both transaction reference IDs / UTR numbers and timestamps.</li>
            <li>Verification is performed directly with banking records to confirm duplicate settlement.</li>
            <li>Once confirmed, the verified duplicate transaction amount will be initiated for return to the original source account.</li>
          </ul>
        </div>
      </section>

      {/* Statutory Rights Disclaimer */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>4. Statutory Rights & Legal Compliance</span>
        </h2>
        <p>
          Nothing in this Refund and Cancellation Policy is intended to exclude, restrict, or modify any statutory consumer
          rights or guarantees that cannot legally be excluded under applicable laws of India.
        </p>
      </section>

      {/* Refund Support Contact */}
      <section className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-400">
        <h3 className="font-semibold text-white text-sm">How to Contact Us for Payment Queries</h3>
        <p>
          If you experience a transaction anomaly or wish to inquire about an enrollment payment, please contact {MENTOR_NAME} directly:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-2 text-slate-300">
          <div>
            <span className="text-slate-400 block">WhatsApp:</span>
            <span className="font-mono text-cyan-400">{WHATSAPP_PHONE}</span>
          </div>
          <div>
            <span className="text-slate-400 block">Email:</span>
            <span className="font-mono text-cyan-400">{MENTOR_EMAIL}</span>
          </div>
        </div>
      </section>
    </div>
  );
};
