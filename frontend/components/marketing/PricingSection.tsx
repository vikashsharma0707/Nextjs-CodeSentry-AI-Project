"use client";

import { useState } from "react";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";

type Plan = {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted: boolean;
  badge?: string;
};

const PLANS: Plan[] = [
  {
    name: "Starter", monthlyPrice: 0, yearlyPrice: 0,
    description: "Perfect for individuals and side projects.",
    features: ["50 reviews / month", "Basic issue detection", "1 GitHub repo", "Community support"],
    cta: "Get Started Free", href: "/signup", highlighted: false,
  },
  {
    name: "Pro", monthlyPrice: 29, yearlyPrice: 23,
    description: "Best for growing teams shipping fast.",
    features: ["Unlimited reviews", "AI-powered fixes", "Up to 10 repos", "Advanced security scanning", "Priority support"],
    cta: "Start Free Trial", href: "/signup", highlighted: true, badge: "Most Popular",
  },
  {
    name: "Enterprise", monthlyPrice: 99, yearlyPrice: 79,
    description: "For large teams with advanced needs.",
    features: ["Unlimited everything", "Private model deployment", "SSO / SAML", "Dedicated account manager", "SLA guarantee"],
    cta: "Contact Sales", href: "#contact", highlighted: false,
  },
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative bg-[#060816] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#00D4FF]">Pricing</p>
          <h2 className="mb-5 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Flexible plans for{" "}
            <span className="bg-gradient-to-r from-[#5B5FFF] to-[#00D4FF] bg-clip-text text-transparent">
              every team
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-[#B6BED6]">
            Choose the right plan to scale your code quality.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1">
            <button
              id="billing-monthly"
              onClick={() => setIsYearly(false)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                !isYearly ? "bg-gradient-to-r from-[#5B5FFF] to-[#6F4CFF] text-white shadow-[0_2px_12px_rgba(91,95,255,0.4)]" : "text-[#7B859E] hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              id="billing-yearly"
              onClick={() => setIsYearly(true)}
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                isYearly ? "bg-gradient-to-r from-[#5B5FFF] to-[#6F4CFF] text-white shadow-[0_2px_12px_rgba(91,95,255,0.4)]" : "text-[#7B859E] hover:text-white"
              }`}
            >
              Yearly
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  isYearly ? "bg-white/20 text-white" : "bg-[#22C55E]/10 text-[#22C55E]"
                }`}
              >
                20% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 border ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-[#5B5FFF]/[0.1] to-[#0E1324] border-[#5B5FFF]/40 shadow-[0_0_50px_-12px_rgba(91,95,255,0.5)]"
                    : "bg-[#0E1324] border-white/[0.08] hover:border-white/[0.16]"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-0 right-0 flex justify-center">
                    <span className="rounded-full bg-gradient-to-r from-[#5B5FFF] to-[#6F4CFF] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(91,95,255,0.5)]">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-lg font-bold ${plan.highlighted ? "text-[#8B8FFF]" : "text-white"}`}>
                    {plan.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#7B859E]">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold tracking-tight text-white">
                      {price === 0 ? "Free" : `$${price}`}
                    </span>
                    {price > 0 && <span className="mb-1.5 text-sm text-[#7B859E]">/ month</span>}
                  </div>
                  {isYearly && price > 0 && (
                    <p className="mt-1.5 text-xs text-[#7B859E]">Billed annually — ${price * 12} / year</p>
                  )}
                </div>

                <ul className="mb-8 flex-1 space-y-3.5">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-[#B6BED6]">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                          plan.highlighted ? "border-[#5B5FFF]/40 bg-[#5B5FFF]/10 text-[#8B8FFF]" : "border-white/10 text-[#7B859E]"
                        }`}
                      >
                        <IconCheck className="h-3 w-3" stroke={3} />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition-all duration-200 active:scale-95 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[#5B5FFF] to-[#6F4CFF] text-white shadow-[0_4px_20px_rgba(91,95,255,0.4)] hover:shadow-[0_4px_28px_rgba(91,95,255,0.6)]"
                      : "border border-white/[0.12] text-white hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}