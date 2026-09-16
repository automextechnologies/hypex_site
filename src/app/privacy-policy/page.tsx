import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Hypex",
  description:
    "Learn how Hypex collects, uses, protects, and handles your personal information, communications, and consent data.",
};

export default function PrivacyPolicy() {
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
            Legal Documentation
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray">
            Last Updated: September 2026 • Effective Immediately
          </p>
        </div>

        <div className="space-y-10 text-gray text-sm md:text-base leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              1. Introduction
            </h2>
            <p>
              Hypex (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website, interact with our marketing platforms, or utilize our creative, performance marketing, and business automation services.
            </p>
            <p>
              By accessing our website or submitting your contact information, you consent to the data practices described in this policy.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              2. Information We Collect
            </h2>
            <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services:</p>
            <ul className="list-disc pl-6 space-y-2 text-light">
              <li>
                <strong className="text-white">Contact Data:</strong> Full name, telephone number, email address, and company name.
              </li>
              <li>
                <strong className="text-white">Consent Records:</strong> Explicit records of consent regarding SMS messaging, WhatsApp messaging, and acceptance of our Terms &amp; Conditions, including timestamp and source URL.
              </li>
              <li>
                <strong className="text-white">Technical &amp; Usage Data:</strong> IP address, browser type, device identifiers, operating system, referral URLs, and interactions with our landing pages collected via cookies and analytics scripts.
              </li>
              <li>
                <strong className="text-white">Business Information:</strong> Project scope, marketing objectives, campaign requirements, and budget ranges shared during consultations.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              3. How We Use Your Information
            </h2>
            <p>We use the collected information for legitimate commercial purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-light">
              <li>Contacting you regarding growth strategy, proposals, and service demonstrations.</li>
              <li>Delivering automated marketing workflows, creative deliverables, and campaign updates.</li>
              <li>Sending transactional, operational, or customer service notices.</li>
              <li>
                Sending promotional communications via SMS or WhatsApp only when you have granted express prior written consent.
              </li>
              <li>Monitoring, analyzing, and improving the performance and security of our digital platforms.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              4. SMS &amp; WhatsApp Communications Compliance
            </h2>
            <p>
              We take mobile messaging compliance seriously. When you submit your phone number and opt in to SMS or WhatsApp messages:
            </p>
            <div className="bg-dark rounded-2xl p-6 border border-white/10 space-y-3">
              <p className="font-semibold text-white">Our Mobile Messaging Principles:</p>
              <ul className="list-disc pl-6 space-y-2 text-light text-xs md:text-sm">
                <li>
                  <strong className="text-white">No Obligation:</strong> Consent to receive marketing text messages or WhatsApp messages is not a condition of purchasing any goods or services.
                </li>
                <li>
                  <strong className="text-white">Frequency:</strong> Message frequency varies based on your engagement and service requirements.
                </li>
                <li>
                  <strong className="text-white">Rates:</strong> Standard message and data rates may apply depending on your cellular mobile carrier.
                </li>
                <li>
                  <strong className="text-white">Opt-Out / Unsubscribe:</strong> You may opt out of SMS messages at any time by replying <span className="text-white font-mono bg-black px-2 py-0.5 rounded border border-white/20">STOP</span>, or unsubscribe from WhatsApp by sending &quot;STOP&quot;. For help, reply <span className="text-white font-mono bg-black px-2 py-0.5 rounded border border-white/20">HELP</span>.
                </li>
                <li>
                  <strong className="text-white">No Sharing of Mobile Data:</strong> Your mobile phone number and opt-in consent will NEVER be sold, rented, or shared with third-party marketers for their own marketing purposes.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              5. Information Sharing and Disclosure
            </h2>
            <p>
              We do not sell your personal data. We only share information with vetted service providers who support our technical operations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-light">
              <li>
                <strong className="text-white">Authorized Infrastructure Partners:</strong> Cloud hosting, database management, CRM providers, and communication gateways (e.g., Google Workspace, WhatsApp Business API) that adhere to stringent confidentiality terms.
              </li>
              <li>
                <strong className="text-white">Legal Obligations:</strong> When required to comply with applicable laws, governmental regulations, court orders, or enforceable legal proceedings.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              6. Data Security &amp; Retention
            </h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards to protect your personal data against unauthorized access, loss, or disclosure. We retain your contact information only as long as necessary to fulfill the purposes described in this policy, service your business account, or satisfy regulatory compliance requirements.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              7. Your Legal Rights
            </h2>
            <p>Depending on your jurisdiction, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-light">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction or updating of inaccurate information.</li>
              <li>Request deletion or erasure of your personal data from our systems.</li>
              <li>Withdraw previously granted consent for marketing communications at any time.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              8. Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or how your information is handled, please contact our data compliance team:
            </p>
            <div className="bg-dark rounded-xl p-5 border border-white/10 text-sm">
              <p className="text-white font-semibold">Hypex Privacy Team</p>
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
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
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

