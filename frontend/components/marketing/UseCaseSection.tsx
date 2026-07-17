import {
  IconGitPullRequest,
  IconUsers,
  IconWorld,
  IconRefresh,
} from "@tabler/icons-react";

type UseCase = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const USE_CASES: UseCase[] = [
  {
    icon: IconGitPullRequest,
    title: "PR Reviews",
    description:
      "Automated, consistent feedback on every pull request — no manual reviewer bottlenecks.",
  },
  {
    icon: IconUsers,
    title: "Onboarding",
    description:
      "Help new engineers understand the codebase instantly with AI-generated explanations.",
  },
  {
    icon: IconWorld,
    title: "Multilingual Repos",
    description:
      "Supports JavaScript, Python, TypeScript, Go, Rust, and 20+ languages out of the box.",
  },
  {
    icon: IconRefresh,
    title: "Legacy Refactoring",
    description:
      "Identify outdated patterns and receive AI-generated modernisation suggestions.",
  },
];

export default function UseCaseSection() {
  return (
    <section className="relative bg-[#060816] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#00D4FF]">
            Use Cases
          </p>
          <h2 className="mb-5 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Designed for{" "}
            <span className="bg-gradient-to-r from-[#5B5FFF] to-[#00D4FF] bg-clip-text text-transparent">
              fast-moving dev teams
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-[#B6BED6]">
            From solo developers to enterprise teams — CodeSentry AI adapts perfectly to every engineering workflow.
          </p>
        </div>

        {/* 2 × 2 grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {USE_CASES.map((uc) => {
            const Icon = uc.icon;
            return (
              <div
                key={uc.title}
                className="group relative rounded-3xl border border-white/[0.08] bg-[#0E1324] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#5B5FFF]/30 hover:shadow-[0_0_40px_-12px_rgba(91,95,255,0.4)]"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.08] transition-colors duration-300 group-hover:bg-[#5B5FFF]/10 group-hover:border-[#5B5FFF]/30">
                  <Icon className="h-5.5 w-5.5 text-[#B6BED6] group-hover:text-[#8B8FFF] transition-colors" stroke={1.75} />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-white">
                  {uc.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#7B859E]">
                  {uc.description}
                </p>

                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-[#7B859E] transition-all duration-200 group-hover:text-[#00D4FF] group-hover:gap-2.5">
                  <span>Learn more</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}