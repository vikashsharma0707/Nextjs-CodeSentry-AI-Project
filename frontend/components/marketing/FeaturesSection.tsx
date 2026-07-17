import {
  IconBug,
  IconCode,
  IconActivity,
  IconGitBranch,
  IconPlugConnected,
  IconShieldCheck,
} from "@tabler/icons-react";

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
  highlight?: boolean;
};

const FEATURES: Feature[] = [
  { icon: IconBug,           title: "AI Code Review",         description: "Catch bugs, logic errors, and anti-patterns before they hit production.", highlight: true },
  { icon: IconCode,          title: "Code Generation",        description: "Generate boilerplate, refactors, and entire modules with context-aware AI." },
  { icon: IconActivity,      title: "Real-time Analysis",     description: "Full-featured analysis API for CI/CD pipelines and editor plugins." },
  { icon: IconGitBranch,     title: "Repo Scanning",          description: "Connect GitHub to scan entire repositories across branches and PRs." },
  { icon: IconPlugConnected, title: "Integrations",           description: "Works with your existing workflow — VS Code, GitHub Actions, Slack." },
  { icon: IconShieldCheck,   title: "Security & Compliance",  description: "Detect secrets, vulnerabilities, and license violations automatically." },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative bg-[#060816] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#00D4FF]">
            Platform
          </p>
          <h2 className="mb-5 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-[#5B5FFF] to-[#00D4FF] bg-clip-text text-transparent">
              ship clean code
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-[#B6BED6]">
            A flexible code intelligence platform built for real production use — not just toy demos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 border ${
                  feature.highlight
                    ? "bg-gradient-to-b from-[#5B5FFF]/[0.08] to-[#0E1324] border-[#5B5FFF]/30 hover:shadow-[0_0_40px_-8px_rgba(91,95,255,0.4)]"
                    : "bg-[#0E1324] border-white/[0.08] hover:border-white/[0.16] hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]"
                }`}
              >
                {/* Icon */}
                <div
                  className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                    feature.highlight
                      ? "bg-gradient-to-br from-[#5B5FFF] to-[#6F4CFF] shadow-[0_4px_20px_rgba(91,95,255,0.5)]"
                      : "bg-white/[0.04] border border-white/[0.08]"
                  }`}
                >
                  <Icon className={`h-5.5 w-5.5 ${feature.highlight ? "text-white" : "text-[#B6BED6]"}`} stroke={1.75} />
                </div>

                <h3 className="mb-2.5 text-[17px] font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#7B859E]">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}