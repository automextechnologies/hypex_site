"use client";

import { useState } from "react";

/* ================================================================
   NAVBAR
   ================================================================ */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/images/logoblack.png"
            alt="hypex"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-light transition-colors"
        >
          Let&apos;s Talk
          <span aria-hidden="true">↗</span>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark border-t border-white/5 px-6 pb-4 pt-2 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-gray hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block px-5 py-2 rounded-full bg-white text-black text-sm font-semibold"
          >
            Let&apos;s Talk ↗
          </a>
        </div>
      )}
    </nav>
  );
}

/* ================================================================
   HERO
   ================================================================ */
function Hero() {
  return (
    <section className="relative w-full min-h-[760px] md:min-h-[840px] lg:min-h-[900px] xl:min-h-[940px] pt-32 pb-24 md:pt-40 md:pb-36 lg:pb-44 flex flex-col justify-center overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full z-0 bg-cover bg-no-repeat bg-center md:bg-bottom opacity-95"
        style={{ backgroundImage: "url('/images/heroimg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent md:from-black/75 md:via-black/30 md:to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <p className="text-xs uppercase tracking-widest text-gray mb-6">
          A Complete Marketing Solution
        </p>

        <div className="max-w-2xl lg:max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-white">
            Brands grow
            <br />
            faster when
            <br />
            everything
            <br />
            works together.
          </h1>
          <p className="mt-6 text-gray max-w-xl text-base md:text-lg leading-relaxed">
            Strategy, creative, performance marketing and automation — brought
            together to turn attention into measurable growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-light transition-colors"
            >
              Start a Conversation
            </a>
            <a
              href="#services"
              className="px-7 py-3.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:border-white/40 transition-colors"
            >
              Explore Our Work
            </a>
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            {["Strategy", "Creative", "Performance", "Automation"].map((t) => (
              <span
                key={t}
                className="px-3.5 py-1.5 rounded-full border border-white/10 text-xs text-gray backdrop-blur-sm bg-black/30"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




/* ================================================================
   THE PROBLEM
   ================================================================ */
function Problem() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left — image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-light">
          <img
            src="/images/mainimg.png"
            alt="Too many tools. Too many agencies. Not enough results."
            className="w-full h-auto object-cover block"
          />
        </div>

        {/* Right — text */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gray mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-black">
            Marketing shouldn&apos;t
            <br />
            feel disconnected.
          </h2>
          <p className="mt-6 text-gray leading-relaxed">
            You shouldn&apos;t have to manage multiple agencies, tools and people
            to grow your business. Hypex brings everything together.
          </p>
          <p className="mt-6 text-black font-medium">
            One strategy. One creative direction. One connected system.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   WHAT WE DO — Services Grid
   ================================================================ */
const services = [
  {
    title: "Strategy",
    items: [
      "End-to-end strategy",
      "Marketing roadmaps",
      "Competitor research",
      "Growth planning",
    ],
  },
  {
    title: "Creative",
    items: [
      "Social media content",
      "Website design",
      "Video production",
      "Brand identity",
    ],
  },
  {
    title: "Performance",
    items: [
      "Meta Ads",
      "Google Ads",
      "Lead generation",
      "Analytics & attribution",
    ],
  },
  {
    title: "Automation",
    items: [
      "CRM setup",
      "Email sequences",
      "Marketing automation",
      "Customer journeys",
    ],
  },
];

function WhatWeDo() {
  return (
    <section id="services" className="py-20 md:py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left heading */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Everything
              <br />
              your brand
              <br />
              needs to grow.
            </h2>
            <p className="mt-6 text-gray max-w-md leading-relaxed">
              From strategy to automation, we help businesses build complete
              marketing systems that create real opportunities for growth.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 text-sm text-white font-semibold hover:underline"
            >
              Explore Our Services <span>→</span>
            </a>
          </div>

          {/* Right — service cards */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-black rounded-xl border border-white/10 p-6 hover:border-white/20 transition-colors"
              >
                {/* Icon placeholder */}
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <span className="text-xs text-gray">✦</span>
                </div>
                <h3 className="text-base font-bold mb-3">{s.title}</h3>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="text-xs text-gray leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   THE HYPEX SYSTEM — Flow Diagram
   ================================================================ */
function HypexSystem() {
  const steps = [
    "Brand",
    "Content",
    "Traffic",
    "Leads",
    "CRM",
    "Automation",
    "Sales",
    "Growth",
  ];

  return (
    <section id="solutions" className="py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray mb-4">
              The Hypex System
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              From attention
              <br />
              to long-term growth.
            </h2>
          </div>
          <div>
            <p className="text-gray leading-relaxed">
              We don&apos;t just create campaigns. We build connected systems
              that turn attention into opportunities.
            </p>
          </div>
        </div>

        {/* Flow steps */}
        <div className="relative flex flex-wrap items-center justify-between gap-y-6 gap-x-2">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 hidden md:block" />

          {steps.map((step, i) => (
            <div key={step} className="relative flex flex-col items-center gap-2 z-10">
              {/* Circle icon placeholder */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-dark border border-white/10 flex items-center justify-center">
                <span className="text-gray text-xs">✦</span>
              </div>
              <span className="text-xs text-gray font-medium">{step}</span>
              {/* Arrow (except last) */}
              {i < steps.length - 1 && (
                <span className="absolute top-5 -right-4 text-white/20 hidden md:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   HOW WE WORK — Process Steps
   ================================================================ */
const processSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "Understand your business, audience and goals.",
  },
  {
    num: "02",
    title: "Strategize",
    desc: "Build the roadmap, identify channels and priorities.",
  },
  {
    num: "03",
    title: "Create",
    desc: "Turn strategy into captivating creative.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Put campaigns and systems into action.",
  },
  {
    num: "05",
    title: "Optimize",
    desc: "Measure, learn and improve continuously.",
  },
  {
    num: "06",
    title: "Scale",
    desc: "Double down on what works.",
  },
];

function HowWeWork() {
  return (
    <section className="py-20 md:py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray mb-4">
              How We Work
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              A simple process.
              <br />
              Real results.
            </h2>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full border border-white/20 text-sm text-white font-semibold hover:border-white/40 transition-colors"
          >
            Our Process →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {processSteps.map((s) => (
            <div key={s.num}>
              <p className="text-2xl md:text-3xl font-extrabold text-white/20 mb-2">
                {s.num}
              </p>
              <h3 className="text-sm font-bold mb-1">{s.title}</h3>
              <p className="text-xs text-gray leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




/* ================================================================
   RESULTS THAT MATTER — Stats
   ================================================================ */
function Results() {
  const stats = [
    { value: "120%", label: "Increase in leads" },
    { value: "3.2X", label: "Avg ROAS" },
    { value: "48K+", label: "Qualified leads" },
  ];
  const subStats = [
    { value: "35%", label: "Lower customer acquisition cost" },
    { value: "2.4X", label: "Conversion rate lift" },
    { value: "80%", label: "Client retention rate" },
  ];

  return (
    <section className="py-20 md:py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray mb-4">
              Results That Matter
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Built for
              <br />
              measurable
              <br />
              growth.
            </h2>
          </div>

          {/* Right — stats */}
          <div>
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl md:text-4xl font-extrabold">{s.value}</p>
                  <p className="text-xs text-gray mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {subStats.map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-bold">{s.value}</p>
                  <p className="text-xs text-gray mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   WHY HYPEX
   ================================================================ */
const whyCards = [
  {
    title: "One System",
    desc: "Strategy, creative, marketing and automation in one platform.",
  },
  {
    title: "Creative + Data",
    desc: "Great strategy meets great creative for impactful results.",
  },
  {
    title: "Built to Scale",
    desc: "Built to deliver the growth that matters at every stage.",
  },
  {
    title: "Always Optimizing",
    desc: "Relentless focus on performance and continuous improvement.",
  },
];

function WhyHypex() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray mb-4">
              Why Hypex
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-black">
              More than an agency.
              <br />
              A growth partner.
            </h2>
          </div>
          <a
            href="#about"
            className="text-sm text-gray hover:text-black transition-colors"
          >
            Why Choose Us →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyCards.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-xl border border-light p-6 hover:border-gray transition-colors"
            >
              {/* Icon placeholder */}
              <div className="w-10 h-10 rounded-full bg-black/5 border border-light flex items-center justify-center mb-4">
                <span className="text-gray text-sm">✦</span>
              </div>
              <h3 className="text-sm font-bold text-black mb-2">{c.title}</h3>
              <p className="text-xs text-gray leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   CTA — Ready to Grow
   ================================================================ */
function CTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [smsOptin, setSmsOptin] = useState(false);
  const [whatsappOptin, setWhatsappOptin] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted) {
      setErrorMessage("Please accept the Terms & Conditions to proceed.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const cleanPhone = phone.replace(/\+/g, "").trim();

    const payload = {
      name: name.trim(),
      phone: cleanPhone,
      sms_optin: smsOptin,
      whatsapp_optin: whatsappOptin,
      terms_accepted: termsAccepted,
    };

    const scriptUrl =
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
      "https://script.google.com/macros/s/AKfycby1xdnimB12YrbLeqD07_jaoqKVMJzqLkT-lkZVyaYwN94t-xJ15-lNdQkb-rU-p1EI/exec";

    try {
      if (scriptUrl) {
        // Send data to Google Apps Script Web App
        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(payload),
        });
      } else {
        // Fallback simulation if script URL not yet set
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setStatus("success");
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
      setErrorMessage("Failed to submit. Please try again or contact us directly.");
    }
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setSmsOptin(false);
    setWhatsappOptin(false);
    setTermsAccepted(false);
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-dark border-y border-white/5 relative"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            READY TO GROW?
          </h2>
          <p className="mt-4 text-gray max-w-lg mx-auto">
            Let&apos;s build something that moves your business forward.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-black/70 border border-white/15 rounded-3xl p-8 md:p-14 text-center max-w-xl mx-auto shadow-2xl backdrop-blur-sm">
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto mb-6 shadow-lg shadow-white/10">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
              Submission Successful!
            </h3>
            <p className="text-gray text-sm md:text-base leading-relaxed mb-8">
              Thank you for reaching out. Your information has been received and our team will connect with you shortly.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form
            className="space-y-5"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-1.5">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white text-sm placeholder:text-gray focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-1.5">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\+/g, ""))}
                placeholder="971 XX XXX XXXX"
                className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white text-sm placeholder:text-gray focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            {/* Compliance checkboxes */}
            <div className="space-y-3 pt-2">
              {/* SMS opt-in */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="sms_optin"
                  checked={smsOptin}
                  onChange={(e) => setSmsOptin(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-white/20 bg-black accent-white shrink-0"
                />
                <span className="text-xs text-gray leading-relaxed group-hover:text-light transition-colors">
                  I agree to receive promotional and transactional SMS messages from Hypex.
                  Message frequency varies. Message &amp; data rates may apply.
                  Reply STOP to unsubscribe at any time.
                </span>
              </label>

              {/* WhatsApp opt-in */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="whatsapp_optin"
                  checked={whatsappOptin}
                  onChange={(e) => setWhatsappOptin(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-white/20 bg-black accent-white shrink-0"
                />
                <span className="text-xs text-gray leading-relaxed group-hover:text-light transition-colors">
                  I agree to receive messages from Hypex via WhatsApp, including updates,
                  promotions and service-related communications. You can opt out at any time
                  by messaging &quot;STOP&quot;.
                </span>
              </label>

              {/* Terms & Conditions */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="terms_accepted"
                  required
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-white/20 bg-black accent-white shrink-0"
                />
                <span className="text-xs text-gray leading-relaxed group-hover:text-light transition-colors">
                  I have read and agree to the{" "}
                  <a
                    href="/terms-and-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline hover:text-light"
                  >
                    Terms &amp; Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline hover:text-light"
                  >
                    Privacy Policy
                  </a>
                  . <span className="text-red-400">*</span>
                </span>
              </label>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-lg bg-red-900/30 border border-red-500/30 text-red-300 text-xs">
                {errorMessage}
              </div>
            )}

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full px-6 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Start a Conversation"
                )}
              </button>
            </div>

            {/* Bottom tagline */}
            <div className="flex flex-wrap justify-center gap-8 text-xs text-gray pt-2">
              <span>Strategy Today.</span>
              <span>Stronger Tomorrow.</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

/* ================================================================
   FOOTER
   ================================================================ */
function Footer() {
  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/images/logoblack.png"
              alt="hypex"
              className="h-11 md:h-13 w-auto object-contain"
            />
          </a>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-gray hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray hover:text-white transition-colors"
          >
            {/* Instagram icon placeholder — replace with SVG/image later */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>

        {/* Our Brands */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col items-center justify-center text-center gap-3">
          <p className="text-xs uppercase tracking-widest text-gray font-semibold">
            Our Brands
          </p>
          <a
            href="https://automextechnologies.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
            title="Automex Technologies"
          >
            <img
              src="/images/automexlogosmall.png"
              alt="Automex"
              className="h-6 md:h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>
          <p className="text-xs text-gray">
            Automex is a brand owned and operated by Hypex.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray">
            © {new Date().getFullYear()} Hypex. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy-policy"
              className="text-xs text-gray hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              className="text-xs text-gray hover:text-white transition-colors"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================================================================
   PAGE — Assembles all sections
   ================================================================ */
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <WhatWeDo />
        <HypexSystem />
        <HowWeWork />
        <Results />
        <WhyHypex />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
