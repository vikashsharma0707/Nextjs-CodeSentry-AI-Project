"use client";

import { useState } from "react";
import { IconCircleCheck } from "@tabler/icons-react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire up real submission
    setSubmitted(true);
  };

  const inputCls =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-[#7B859E] backdrop-blur-sm transition-all duration-200 focus:border-[#5B5FFF]/50 focus:outline-none focus:ring-2 focus:ring-[#5B5FFF]/20";

  return (
    <section id="contact" className="relative bg-[#060816] py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#00D4FF]">
            Contact
          </p>
          <h2 className="mb-5 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Get in touch
          </h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed text-[#B6BED6]">
            Have questions about features, pricing, or enterprise deployment? Our team is here to help.
          </p>
        </div>

        {/* Card */}
        <div className="relative rounded-3xl border border-white/[0.08] bg-[#0E1324] p-8 sm:p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#22C55E]/30 bg-[#22C55E]/10">
                <IconCircleCheck className="h-6 w-6 text-[#22C55E]" stroke={2} />
              </div>
              <h3 className="mt-2 text-lg font-bold text-white">Message sent!</h3>
              <p className="text-sm text-[#7B859E]">We&apos;ll get back to you within 24 hours.</p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", message: "" });
                }}
                className="mt-4 text-sm font-semibold text-[#8B8FFF] hover:text-[#00D4FF] transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-xs font-medium text-[#7B859E]">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className={inputCls}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-xs font-medium text-[#7B859E]">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className={inputCls}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-xs font-medium text-[#7B859E]">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell us about your use case or project..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className={`${inputCls} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-[#5B5FFF] to-[#6F4CFF] py-4 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(91,95,255,0.4)] transition-all hover:shadow-[0_4px_28px_rgba(91,95,255,0.6)] active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Brand badge */}
        <div className="mt-6 flex justify-end">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium text-[#7B859E] backdrop-blur-sm">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00D4FF]" />
            CodeSentry AI &middot; Powered by Claude
          </div>
        </div>
      </div>
    </section>
  );
}