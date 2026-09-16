import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — Hypex",
  description:
    "Review the Terms and Conditions governing the use of Hypex digital marketing, creative strategy, performance campaigns, and automation services.",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-white selection:text-black">
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/images/logoblack.png"
              alt="Hypex"
              className="h-11 md:h-13 w-auto object-contain"
            />
          </Link>
          <Link
            href="/"
            className="px-5 py-2 rounded-full border border-white/20 text-xs font-semibold text-white hover:bg-white hover:text-black transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="border-b border-white/10 pb-8 mb-12">
          <p className="text-xs uppercase tracking-widest text-gray mb-3">
            Legal Agreement
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-gray">
            Last Updated: September 2026 • Effective Immediately
          </p>
        </div>

        <div className="space-y-10 text-gray text-sm md:text-base leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website, submitting an inquiry form, or engaging Hypex (&quot;Hypex,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) for marketing, creative, advertising, or automation services, you (&quot;Client,&quot; &quot;User,&quot; or &quot;you&quot;) agree to be legally bound by these Terms and Conditions (&quot;Terms&quot;). If you disagree with any portion of these Terms, you must discontinue use of our site and services immediately.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              2. Scope of Services
            </h2>
            <p>
              Hypex delivers comprehensive commercial marketing solutions, including but not limited to brand strategy, creative media production, paid advertising management (Meta, Google), CRM deployment, and lead automation systems. Detailed project specifications, deliverables, and timelines will be formalized in individual Statements of Work (SOW) or service agreements executed between the parties.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              3. Communications &amp; Messaging Consent
            </h2>
            <p>
              By ticking the consent checkboxes on our contact and inquiry forms:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-light">
              <li>
                <strong className="text-white">SMS Consent:</strong> You authorize Hypex to send transactional updates, appointment reminders, and promotional messages via SMS to the mobile number provided. You may opt out at any time by replying &quot;STOP&quot;. Standard carrier rates apply.
              </li>
              <li>
                <strong className="text-white">WhatsApp Consent:</strong> You grant express authorization to receive communications, proposals, project updates, and customer support via WhatsApp. You can opt out at any time by messaging &quot;STOP&quot;.
              </li>
              <li>
                <strong className="text-white">Accuracy:</strong> You warrant that the telephone number and contact details provided are registered in your name and authorized for use.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              4. Client Responsibilities
            </h2>
            <p>To enable successful campaign execution, the Client agrees to:</p>
            <ul className="list-disc pl-6 space-y-2 text-light">
              <li>Provide timely access to brand assets, ad accounts, CRM environments, and requested domain settings.</li>
              <li>Review deliverables and provide approval or feedback within the agreed review windows.</li>
              <li>Ensure that all products, claims, and materials provided to Hypex comply with applicable advertising standards and local laws.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              5. Intellectual Property
            </h2>
            <p>
              Unless otherwise specified in a formal written agreement:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-light">
              <li>
                <strong className="text-white">Client Materials:</strong> The Client retains full ownership of all pre-existing trademarks, logos, and proprietary materials provided to Hypex.
              </li>
              <li>
                <strong className="text-white">Delivered Works:</strong> Upon full settlement of all associated invoices, final customized creative assets and deliverables produced specifically for the Client shall transfer to the Client.
              </li>
              <li>
                <strong className="text-white">Hypex Proprietary Systems:</strong> Pre-existing software frameworks, automation sequences, methodologies, algorithms, and templates remain the exclusive intellectual property of Hypex.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              6. Performance &amp; Disclaimers
            </h2>
            <p>
              While Hypex employs proven, high-performance methodologies and data-driven optimization techniques, marketing outcomes and advertising results are influenced by factors beyond our direct control, including market conditions, third-party platform algorithm changes (Meta, Google), customer demand, and platform ad auction pricing.
            </p>
            <p className="text-light">
              Consequently, past case studies or metric projections do not constitute a binding guarantee of specific financial returns or conversion rates.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall Hypex, its officers, directors, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, or business data, arising out of or related to your use of our website or services.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              8. Termination
            </h2>
            <p>
              Either party may terminate a service agreement in accordance with the specific termination provisions set forth in the executed Statement of Work. Provisions concerning intellectual property, confidentiality, limitation of liability, and governing law shall survive termination.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              9. Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to conflict of law principles. Any dispute arising out of these Terms shall be resolved through good-faith negotiation, and if necessary, submitted to the competent commercial courts.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              10. Inquiries &amp; Legal Notices
            </h2>
            <div className="bg-dark rounded-xl p-5 border border-white/10 text-sm">
              <p className="text-white font-semibold">Hypex Legal Counsel</p>
              <p className="text-gray mt-1">Email: legal@hypex.agency</p>
              <p className="text-gray">Website: https://hypex.agency</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray">
          <p>© {new Date().getFullYear()} Hypex. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

