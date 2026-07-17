"use client";

import Link from "next/link";
import { IconArrowRight, IconShieldCheck, IconGitPullRequest, IconSparkles, IconAlertTriangle, IconCircleCheck } from "@tabler/icons-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#060816]">
      {/* ── Premium background: grid + glow blobs + spotlight ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* Soft spotlight behind hero */}
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full blur-[120px] opacity-40"
          style={{ background: "radial-gradient(ellipse, #5B5FFF 0%, transparent 65%)" }}
        />
        <div
          className="absolute top-[15%] right-[5%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-25"
          style={{ background: "radial-gradient(ellipse, #00D4FF 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full blur-[110px] opacity-20"
          style={{ background: "radial-gradient(ellipse, #6F4CFF 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-1 flex-col lg:flex-row items-center gap-12 px-6 pt-36 pb-20 lg:pt-40">
        {/* ── Left: Copy ── */}
        <div className="flex-1 flex flex-col items-start text-left max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
            <IconSparkles className="h-3.5 w-3.5 text-[#00D4FF]" stroke={2} />
            <span className="text-xs font-medium text-[#B6BED6]">AI-Powered Code Intelligence</span>
          </div>

          <h1 className="font-bold leading-[1.05] tracking-tight text-white" style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.75rem)" }}>
            Code smarter with{" "}
            <span className="bg-gradient-to-r from-[#5B5FFF] via-[#8B7FFF] to-[#00D4FF] bg-clip-text text-transparent">
              CodeSentry AI
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[#B6BED6] max-w-lg">
            Connect your GitHub, get AI-generated code reviews, apply automated fixes,
            and ship production-ready code in minutes.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/dashboard/repositories"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5B5FFF] to-[#6F4CFF] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_30px_rgba(91,95,255,0.4)] transition-all hover:shadow-[0_8px_36px_rgba(91,95,255,0.6)] hover:-translate-y-0.5"
            >
              Scan a Repo
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#features"
              className="rounded-full border border-white/[0.12] px-7 py-3.5 text-[15px] font-medium text-white transition-all hover:bg-white/5"
            >
              See how it works
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex items-center gap-6">
            <p className="text-xs uppercase tracking-wider text-[#7B859E]">Trusted by 10,000+ developers</p>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 opacity-60">
            {["Vercel", "Linear", "Supabase", "Raycast"].map((name) => (
              <span key={name} className="text-sm font-semibold tracking-tight text-[#7B859E]">
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: AI Dashboard Illustration ── */}
        <div className="relative flex-1 w-full max-w-lg lg:max-w-none">
          <div className="relative mx-auto max-w-[440px]">
            {/* Glow behind panel */}
            <div
              className="absolute -inset-10 rounded-[40px] blur-3xl opacity-40"
              style={{ background: "radial-gradient(ellipse, rgba(91,95,255,0.35) 0%, transparent 70%)" }}
            />

            {/* Main code review panel */}
            <div className="relative rounded-3xl border border-white/[0.08] bg-[#0E1324]/90 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3.5">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#22C55E]/60" />
                </div>
                <span className="ml-2 text-xs font-mono text-[#7B859E]">auth-service/login.ts</span>
              </div>

              {/* Code with inline review annotations */}
              <div className="px-5 py-5 font-mono text-[13px] leading-relaxed">
                <div className="text-[#7B859E]">1&nbsp;&nbsp;<span className="text-[#8B7FFF]">export async function</span> <span className="text-[#00D4FF]">login</span>(req) &#123;</div>

                <div className="my-1.5 flex items-start gap-2 rounded-lg border border-[#EF4444]/30 bg-[#EF4444]/[0.08] px-3 py-2">
                  <IconAlertTriangle className="h-3.5 w-3.5 shrink-0 mt-0.5 text-[#EF4444]" stroke={2} />
                  <div>
                    <p className="text-[#EF4444] text-xs font-semibold">Critical — SQL Injection</p>
                    <p className="text-[#B6BED6] text-xs mt-0.5">Use parameterized queries here.</p>
                  </div>
                </div>

                <div className="text-[#7B859E]">3&nbsp;&nbsp;<span className="text-[#8B7FFF]">const</span> user = db.query(email)</div>

                <div className="my-1.5 flex items-start gap-2 rounded-lg border border-[#22C55E]/30 bg-[#22C55E]/[0.08] px-3 py-2">
                  <IconCircleCheck className="h-3.5 w-3.5 shrink-0 mt-0.5 text-[#22C55E]" stroke={2} />
                  <div>
                    <p className="text-[#22C55E] text-xs font-semibold">Fix applied automatically</p>
                    <p className="text-[#B6BED6] text-xs mt-0.5">Password hashing added with bcrypt.</p>
                  </div>
                </div>

                <div className="text-[#7B859E]">6&nbsp;&nbsp;&#125;</div>
              </div>
            </div>

            {/* Floating security score chip */}
            <div className="absolute -top-6 -right-6 flex items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-[#0E1324]/95 backdrop-blur-xl px-4 py-3 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)]">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#22C55E]/20 to-[#22C55E]/5 border border-[#22C55E]/30">
                <IconShieldCheck className="h-4.5 w-4.5 text-[#22C55E]" stroke={2} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wide text-[#7B859E]">Security Score</p>
                <p className="text-sm font-bold text-white">94<span className="text-[#7B859E] font-normal">/100</span></p>
              </div>
            </div>

            {/* Floating PR chip */}
            <div className="absolute -bottom-5 -left-6 flex items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-[#0E1324]/95 backdrop-blur-xl px-4 py-3 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)]">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#5B5FFF]/20 to-[#6F4CFF]/10 border border-[#5B5FFF]/30">
                <IconGitPullRequest className="h-4.5 w-4.5 text-[#8B8FFF]" stroke={2} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wide text-[#7B859E]">Pull Request</p>
                <p className="text-sm font-bold text-white">Auto-opened</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}