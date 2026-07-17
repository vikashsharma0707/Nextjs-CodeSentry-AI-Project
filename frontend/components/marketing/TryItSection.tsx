import Link from "next/link";
import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react";

const TRY_ITEMS = [
  { label: "No credit card required" },
  { label: "Free tier included" },
  { label: "Setup in under 2 minutes" },
];

export default function TryItSection() {
  return (
    <section className="relative bg-[#060816] py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] px-8 py-16 sm:px-16 sm:py-20 text-center">
          {/* Gradient background */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #5B5FFF 0%, #6F4CFF 55%, #1A1D3A 100%)" }}
          />
          {/* Floating glow blobs */}
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#00D4FF]/30 blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-[100px]" />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Ready to ship cleaner code?
            </h2>
            <p className="mt-5 text-lg text-white/80 leading-relaxed">
              Connect your GitHub repository and get your first AI code review in minutes.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard/repositories"
                className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#060816] shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(0,0,0,0.35)]"
              >
                <IconBrandGithub className="h-4.5 w-4.5" stroke={2} />
                Connect GitHub
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/signup"
                className="rounded-full border border-white/25 px-7 py-3.5 text-[15px] font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Create free account
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {TRY_ITEMS.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-white/70">
                  <svg className="h-4 w-4 text-[#00D4FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}