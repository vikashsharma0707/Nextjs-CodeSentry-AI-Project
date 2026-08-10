// import Link from "next/link";
// import { IconSparkles } from "@tabler/icons-react";

// const FOOTER_LINKS = [
//   { label: "Privacy", href: "#" },
//   { label: "Terms", href: "#" },
//   { label: "Docs", href: "#docs" },
//   { label: "GitHub", href: "https://github.com" },
// ];

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="relative bg-[#060816] border-t border-white/[0.06]">
//       <div className="mx-auto max-w-7xl px-6 py-10">
//         <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
//           {/* Logo + copyright */}
//           <div className="flex items-center gap-3">
//             <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#5B5FFF] to-[#6F4CFF]">
//               <IconSparkles className="h-4 w-4 text-white" stroke={2} />
//             </div>
//             <span className="text-sm text-[#7B859E]">
//               &copy; {year} CodeSentry AI. All rights reserved.
//             </span>
//           </div>

//           {/* Footer links */}
//           <nav className="flex items-center gap-8" aria-label="Footer">
//             {FOOTER_LINKS.map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className="text-sm font-medium text-[#7B859E] transition-colors duration-200 hover:text-white"
//                 {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </footer>
//   );
// }




"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import {
  IconSparkles,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconMapPin,
  IconHeart,
  IconExternalLink,
  IconStar,
  IconBriefcase,
  IconWorld,
} from "@tabler/icons-react";
import { useRef } from "react";

// -----------------------------------------------------------------------------
// Data
// -----------------------------------------------------------------------------

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Documentation", href: "/docs" },
];

const RESOURCES = [
  { label: "Blog", href: "/blog" },
  { label: "API Docs", href: "/api-docs" },
  { label: "Security", href: "/security" },
  { label: "Release Notes", href: "/releases" },
  { label: "Status", href: "/status" },
  { label: "Changelog", href: "/changelog" },
];

const COMPANY = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/codesentry-ai",
    icon: IconBrandGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/codesentry-ai",
    icon: IconBrandLinkedin,
  },
  {
    label: "Twitter / X",
    href: "https://x.com/codesentryai",
    icon: IconBrandX,
  },
  {
    label: "Email",
    href: "mailto:hello@codesentry.ai",
    icon: IconMail,
  },
];

const TECH_STACK = [
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "OpenAI",
  "Docker",
  "Kubernetes",
  "TypeScript",
];

const CREATOR_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/vikashsharma",
    icon: IconBrandGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/vikashsharma",
    icon: IconBrandLinkedin,
  },
  {
    label: "Portfolio",
    href: "https://vikashsharma.dev",
    icon: IconWorld,
  },
  {
    label: "Email",
    href: "mailto:vikash@codesentry.ai",
    icon: IconMail,
  },
];

// -----------------------------------------------------------------------------
// Animation Variants
// -----------------------------------------------------------------------------

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const glowOrbVariants = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.25, 0.4, 0.25],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// -----------------------------------------------------------------------------
// Sub-Components
// -----------------------------------------------------------------------------

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1 text-sm font-medium text-[#5B6172] transition-all duration-200 hover:text-[#7A5AF8] hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8] focus-visible:ring-offset-2 focus-visible:rounded-sm"
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
      {isExternal && (
        <IconExternalLink
          className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
          stroke={2}
        />
      )}
    </Link>
  );
}

function SocialIcon({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.7)] backdrop-blur-sm border border-[rgba(122,90,248,0.12)] text-[#5B6172] transition-all duration-300 hover:text-[#7A5AF8] hover:border-[rgba(122,90,248,0.35)] hover:shadow-[0_8px_24px_rgba(122,90,248,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8] focus-visible:ring-offset-2"
      >
        <Icon className="h-[18px] w-[18px]" stroke={1.8} />
      </Link>
    </motion.div>
  );
}

function TechBadge({ name }: { name: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.06, y: -2 }}
      className="inline-flex items-center rounded-lg bg-[rgba(122,90,248,0.06)] border border-[rgba(122,90,248,0.12)] px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[#7A5AF8] uppercase transition-shadow duration-300 hover:shadow-[0_0_16px_rgba(122,90,248,0.12)] cursor-default select-none"
    >
      {name}
    </motion.span>
  );
}

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-[#111827]">
        {title}
      </h3>
      <ul className="space-y-3" role="list">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink href={link.href}>{link.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Main Component
// -----------------------------------------------------------------------------

export default function Footer() {
  const ctaRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });
  const mainInView = useInView(mainRef, { once: true, margin: "-60px" });

  // Mouse parallax for CTA glow orbs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 35, stiffness: 120 };
  const orbX1 = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-50, 50]),
    springConfig
  );
  const orbY1 = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-50, 50]),
    springConfig
  );
  const orbX2 = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [40, -40]),
    springConfig
  );
  const orbY2 = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [40, -40]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = ctaRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#F5F0FF]">
      {/* =================================================================== */}
      {/* TOP CTA SECTION                                                     */}
      {/* =================================================================== */}
      <section
        ref={ctaRef}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(122,90,248,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(156,130,255,0.12) 0%, transparent 50%), #EEE5FF",
        }}
      >
        {/* Floating Glow Orbs */}
        <motion.div
          style={{ x: orbX1, y: orbY1 }}
          variants={glowOrbVariants}
          animate="animate"
          className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#7A5AF8] blur-[120px]"
        />
        <motion.div
          style={{ x: orbX2, y: orbY2 }}
          variants={glowOrbVariants}
          animate="animate"
          className="pointer-events-none absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-[#9C82FF] blur-[120px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center sm:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl lg:text-6xl"
            >
              Ready to Build More Secure Software?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5B6172]"
            >
              Join thousands of developers using AI-powered automated code
              review to ship secure, faster, and cleaner software.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/signup"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-[#7A5AF8] px-8 py-4 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(122,90,248,1),0_4px_24px_rgba(122,90,248,0.35)] transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(122,90,248,1),0_8px_40px_rgba(122,90,248,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#EEE5FF]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      →
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center rounded-2xl bg-[rgba(255,255,255,0.75)] backdrop-blur-md border border-[rgba(122,90,248,0.15)] px-8 py-4 text-sm font-semibold text-[#111827] shadow-sm transition-all duration-300 hover:bg-white hover:shadow-[0_8px_32px_rgba(122,90,248,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#EEE5FF]"
                >
                  Book Demo
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* DIVIDER                                                             */}
      {/* =================================================================== */}
      <div className="h-px bg-[rgba(122,90,248,0.12)]" />

      {/* =================================================================== */}
      {/* MAIN FOOTER                                                         */}
      {/* =================================================================== */}
      <div
        ref={mainRef}
        className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mainInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8"
        >
          {/* --------------------------------------------------------------- */}
          {/* LEFT — Brand & Social                                           */}
          {/* --------------------------------------------------------------- */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8] focus-visible:ring-offset-4 focus-visible:rounded-xl"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A5AF8] to-[#9C82FF] shadow-[0_0_24px_rgba(122,90,248,0.35)]"
              >
                <IconSparkles
                  className="h-5 w-5 text-white"
                  stroke={2}
                />
              </motion.div>
              <span className="text-xl font-bold tracking-tight text-[#111827]">
                CodeSentry AI
              </span>
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-[#5B6172] max-w-xs">
              AI-powered automated code review platform helping developers
              build secure, faster and cleaner software.
            </p>

            <nav
              className="mt-8 flex items-center gap-3"
              aria-label="Social media links"
            >
              {SOCIAL_LINKS.map((social) => (
                <SocialIcon key={social.label} {...social} />
              ))}
            </nav>
          </motion.div>

          {/* --------------------------------------------------------------- */}
          {/* CENTER — Link Columns                                           */}
          {/* --------------------------------------------------------------- */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12"
          >
            <LinkColumn title="Quick Links" links={QUICK_LINKS} />
            <LinkColumn title="Resources" links={RESOURCES} />
            <LinkColumn title="Company" links={COMPANY} />
          </motion.div>

          {/* --------------------------------------------------------------- */}
          {/* RIGHT — Creator Card                                            */}
          {/* --------------------------------------------------------------- */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <motion.div
              variants={floatVariants}
              animate="animate"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="group relative overflow-hidden rounded-3xl bg-[rgba(255,255,255,0.65)] backdrop-blur-2xl border border-[rgba(122,90,248,0.12)] shadow-[0_8px_32px_rgba(122,90,248,0.08)] transition-shadow duration-500 hover:shadow-[0_12px_48px_rgba(122,90,248,0.2)]"
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7A5AF8] to-transparent opacity-40" />

              {/* Hover glow */}
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#7A5AF8] opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-20" />

              <div className="relative p-6 sm:p-7">
                {/* Card Header */}
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A5AF8] via-[#8B6CF8] to-[#9C82FF] text-white text-base font-bold shadow-[0_4px_20px_rgba(122,90,248,0.4)]">
                    VS
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base font-bold text-[#111827]">
                      Vikash Sharma
                    </h4>
                    <p className="text-xs font-medium text-[#5B6172] mt-0.5">
                      Founder & Full Stack + AI Engineer
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[rgba(122,90,248,0.08)] border border-[rgba(122,90,248,0.15)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#7A5AF8]">
                      <IconBriefcase className="h-3 w-3" stroke={2} />
                      Available for Freelance & Full-Time
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-5 text-xs leading-relaxed text-[#5B6172]">
                  Building AI-powered developer tools with modern web
                  technologies, scalable architectures and intelligent
                  automation.
                </p>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {TECH_STACK.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      href="https://github.com/vikashsharma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#111827] px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8] focus-visible:ring-offset-2"
                    >
                      <IconBrandGithub className="h-3.5 w-3.5" stroke={2} />
                      <IconStar
                        className="h-3 w-3 text-amber-400 fill-amber-400"
                        stroke={2}
                      />
                      <span>Star on GitHub</span>
                    </Link>
                  </motion.div>

                  {CREATOR_LINKS.slice(1, 3).map((link) => (
                    <motion.div
                      key={link.label}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-[rgba(122,90,248,0.08)] border border-[rgba(122,90,248,0.15)] px-4 py-2.5 text-xs font-bold text-[#7A5AF8] transition-all duration-300 hover:bg-[rgba(122,90,248,0.14)] hover:border-[rgba(122,90,248,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8] focus-visible:ring-offset-2"
                      >
                        <link.icon className="h-3.5 w-3.5" stroke={2} />
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Card Footer */}
                <div className="mt-6 flex flex-col gap-3 border-t border-[rgba(122,90,248,0.08)] pt-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-[11px] font-medium text-[#5B6172]">
                      <IconMapPin className="h-3 w-3" stroke={2} />
                      Pune, India
                    </span>
                    <span className="text-[11px] font-medium text-[#5B6172]">
                      v1.0
                    </span>
                  </div>
                  <p className="text-[10px] font-medium text-[#5B6172] text-center tracking-wide">
                    Powered by AI • Built with{" "}
                    <IconHeart
                      className="inline h-3 w-3 text-rose-500 fill-rose-500"
                      stroke={2}
                    />{" "}
                    in India
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* =================================================================== */}
      {/* BOTTOM BAR                                                        */}
      {/* =================================================================== */}
      <div className="relative border-t border-[rgba(122,90,248,0.12)] bg-[rgba(255,255,255,0.6)] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs font-medium text-[#5B6172]">
              <span>© {year} CodeSentry AI</span>
              <span className="hidden sm:inline h-1 w-1 rounded-full bg-[rgba(122,90,248,0.3)]" />
              <span className="flex items-center gap-1.5">
                Made with
                <IconHeart
                  className="h-3 w-3 text-rose-500 fill-rose-500"
                  stroke={2}
                />
                by Vikash Sharma
              </span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-5 text-xs font-medium text-[#5B6172]">
              <span className="flex items-center gap-2 rounded-full bg-[rgba(122,90,248,0.06)] border border-[rgba(122,90,248,0.1)] px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                All systems operational
              </span>
              <span className="flex items-center gap-1">
                <IconMapPin className="h-3 w-3" stroke={2} />
                Pune, India
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}