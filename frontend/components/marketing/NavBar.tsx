// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { IconMenu2, IconX, IconSparkles } from "@tabler/icons-react";

// const NAV_LINKS = [
//   { label: "Features", href: "#features" },
//   { label: "Pricing", href: "#pricing" },
//   { label: "Contact", href: "#contact" },
// ];

// export default function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 12);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
//       <div
//         className={`flex w-full max-w-6xl items-center justify-between rounded-full border border-white/[0.08] px-6 py-3 backdrop-blur-xl transition-all duration-300 ${
//           scrolled ? "bg-[#0E1324]/90 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]" : "bg-[#0E1324]/60"
//         }`}
//       >
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2 select-none">
//           <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#5B5FFF] to-[#6F4CFF] shadow-[0_0_20px_rgba(91,95,255,0.5)]">
//             <IconSparkles className="h-4.5 w-4.5 text-white" stroke={2} />
//           </div>
//           <span className="text-[15px] font-bold tracking-tight text-white">
//             CodeSentry <span className="text-[#8B8FFF]">AI</span>
//           </span>
//         </Link>

//         {/* Center Nav */}
//         <div className="hidden md:flex items-center gap-1">
//           {NAV_LINKS.map((l) => (
//             <Link
//               key={l.label}
//               href={l.href}
//               className="rounded-full px-4 py-2 text-[13px] font-medium text-[#B6BED6] transition-all hover:bg-white/5 hover:text-white"
//             >
//               {l.label}
//             </Link>
//           ))}
//         </div>

//         {/* Right: Login/CTA */}
//         <div className="hidden md:flex items-center gap-3">
//           <Link href="/login" className="text-[13px] font-medium text-[#B6BED6] hover:text-white transition-colors px-3">
//             Log in
//           </Link>
//           <Link
//             href="/signup"
//             className="rounded-full bg-gradient-to-r from-[#5B5FFF] to-[#6F4CFF] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_20px_rgba(91,95,255,0.4)] transition-all hover:shadow-[0_4px_28px_rgba(91,95,255,0.6)] hover:-translate-y-0.5"
//           >
//             Get Started
//           </Link>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden flex items-center text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors"
//         >
//           {isOpen ? <IconX className="h-5 w-5" /> : <IconMenu2 className="h-5 w-5" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-[76px] left-4 right-4 rounded-2xl border border-white/[0.08] bg-[#0E1324]/95 backdrop-blur-xl md:hidden flex flex-col p-3 gap-1 shadow-2xl">
//           {NAV_LINKS.map((l) => (
//             <Link
//               key={l.label}
//               href={l.href}
//               onClick={() => setIsOpen(false)}
//               className="rounded-xl py-3 px-4 text-sm font-medium text-[#B6BED6] hover:bg-white/5 hover:text-white transition-colors"
//             >
//               {l.label}
//             </Link>
//           ))}
//           <div className="pt-2 flex gap-2 px-1">
//             <Link href="/login" className="flex-1 text-center py-3 rounded-xl text-sm font-medium text-white border border-white/[0.08] hover:bg-white/5 transition-colors">
//               Log in
//             </Link>
//             <Link
//               href="/signup"
//               className="flex-1 text-center py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#5B5FFF] to-[#6F4CFF]"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }






"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
  memo,
  type MouseEvent as ReactMouseEvent,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useSpring,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  IconMenu2,
  IconX,
  IconSparkles,
  IconSearch,
  IconBrandGithub,
  IconBrandDiscord,
  IconArrowUpRight,
} from "@tabler/icons-react";

const C = {
  primary: "#7A5AF8",
  secondary: "#9C82FF",
  bg: "#F5F0FF",
  glass: "rgba(255,255,255,0.65)",
  glassScrolled: "rgba(255,255,255,0.85)",
  dark: "#141726",
  body: "#5B6172",
  border: "rgba(122,90,248,0.12)",
  borderBright: "rgba(122,90,248,0.28)",
  glow: "rgba(122,90,248,0.25)",
} as const;

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;

const GITHUB_STARS = "2.4k";

function smoothScrollTo(href: string) {
  if (!href.startsWith("#")) return;
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const Logo = memo(function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/50 focus-visible:ring-offset-2 rounded-xl"
      aria-label="CodeSentry AI — Home"
    >
      <motion.div
        className="relative flex h-9 w-9 items-center justify-center rounded-[10px]"
        style={{
          background: `linear-gradient(135deg, ${C.primary} 0%, ${C.secondary} 100%)`,
          boxShadow: `0 0 24px ${C.glow}`,
        }}
        whileHover={{ rotate: 8, scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
      >
        <IconSparkles className="h-[18px] w-[18px] text-white" stroke={2.2} />
        <div className="pointer-events-none absolute inset-0 rounded-[10px] bg-gradient-to-br from-white/30 to-transparent" />
      </motion.div>
      <span className="text-[15px] font-bold tracking-tight text-[#141726]">
        CodeSentry{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: `linear-gradient(90deg, ${C.primary}, ${C.secondary})` }}
        >
          AI
        </span>
      </span>
    </Link>
  );
});

const NavLink = memo(function NavLink({
  label,
  href,
  isActive,
  onClick,
}: {
  label: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick();
        smoothScrollTo(href);
      }}
      className="group relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
      style={{ color: isActive ? C.primary : C.body }}
      aria-current={isActive ? "page" : undefined}
    >
      <span className="absolute inset-0 rounded-full bg-[#7A5AF8]/[0.06] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <span className="relative z-10 group-hover:text-[#7A5AF8] transition-colors duration-200">
        {label}
      </span>
      <motion.span
        className="absolute bottom-1 left-3.5 right-3.5 h-[2px] origin-left rounded-full"
        style={{ background: `linear-gradient(90deg, ${C.primary}, ${C.secondary})` }}
        initial={false}
        animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
      />
      {isActive && (
        <motion.span
          layoutId="nav-active-glow"
          className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
          style={{ background: C.primary, boxShadow: `0 0 8px ${C.glow}` }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </Link>
  );
});

const MagneticCTA = memo(function MagneticCTA({
  href = "/signup",
  label = "Get Started",
  className = "",
}: {
  href?: string;
  label?: string;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 20 });
  const springY = useSpring(y, { stiffness: 280, damping: 20 });

  const handleMove = useCallback(
    (e: ReactMouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      x.set((e.clientX - (rect.left + rect.width / 2)) * 0.22);
      y.set((e.clientY - (rect.top + rect.height / 2)) * 0.22);
    },
    [x, y]
  );

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div style={{ x: springX, y: springY }} className={className}>
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-2.5 text-[13px] font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/50 focus-visible:ring-offset-2"
        style={{
          background: `linear-gradient(135deg, ${C.primary} 0%, ${C.secondary} 100%)`,
          boxShadow: `0 4px 20px ${C.glow}, 0 1px 0 rgba(255,255,255,0.2) inset`,
        }}
        aria-label={label}
      >
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        <span className="relative z-10 flex items-center gap-1.5">
          {label}
          <IconArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            stroke={2.2}
          />
        </span>
      </Link>
    </motion.div>
  );
});

const IconBtn = memo(function IconBtn({
  href,
  label,
  children,
  external,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="relative flex h-9 w-9 items-center justify-center rounded-full text-[#5B6172] transition-all duration-200 hover:bg-[#7A5AF8]/[0.08] hover:text-[#7A5AF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
    >
      {children}
    </Link>
  );
});

const MobileLink = memo(function MobileLink({
  label,
  href,
  index,
  isActive,
  onNavigate,
}: {
  label: string;
  href: string;
  index: number;
  isActive: boolean;
  onNavigate: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -8 }}
      transition={{ delay: 0.05 + index * 0.045, type: "spring", stiffness: 320, damping: 28 }}
    >
      <Link
        href={href}
        onClick={(e) => {
          e.preventDefault();
          onNavigate();
          smoothScrollTo(href);
        }}
        className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
        style={{
          color: isActive ? C.primary : C.dark,
          background: isActive ? "rgba(122,90,248,0.08)" : "transparent",
        }}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
        {isActive && (
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: C.primary, boxShadow: `0 0 8px ${C.glow}` }}
          />
        )}
      </Link>
    </motion.div>
  );
});

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const glowX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(mouseY, [0, 1], ["0%", "100%"]);
  const glowBg = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(500px circle at ${x} ${y}, rgba(122,90,248,0.12), transparent 55%)`
  );

  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setScrolled(v > 0.012);
  });

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveSection(`#${visible[0].target.id}`);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleNavMouse = useCallback(
    (e: ReactMouseEvent<HTMLElement>) => {
      const el = navRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const shellStyle = useMemo(
    () => ({
      background: scrolled ? C.glassScrolled : C.glass,
      borderColor: scrolled ? C.borderBright : C.border,
      boxShadow: scrolled
        ? `0 8px 40px -12px rgba(122,90,248,0.18), 0 0 0 1px ${C.borderBright}, 0 1px 0 rgba(255,255,255,0.6) inset`
        : `0 4px 24px -8px rgba(122,90,248,0.12), 0 0 0 1px ${C.border}, 0 1px 0 rgba(255,255,255,0.5) inset`,
    }),
    [scrolled]
  );

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
        style={{
          scaleX: progressScale,
          background: `linear-gradient(90deg, ${C.primary}, ${C.secondary})`,
        }}
        aria-hidden
      />

      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-5">
        <motion.nav
          ref={navRef}
          onMouseMove={handleNavMouse}
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1, height: scrolled ? 64 : 72 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="relative flex w-full max-w-[1320px] items-center justify-between overflow-hidden rounded-full border px-4 sm:px-5 md:px-6 backdrop-blur-3xl"
          style={shellStyle}
          role="navigation"
          aria-label="Main"
        >
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{ background: glowBg }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(122,90,248,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(122,90,248,0.4) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />

          <div className="relative z-10 flex items-center gap-3">
            <Logo />
            <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-[rgba(122,90,248,0.14)] bg-white/50 px-2.5 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                  style={{ background: C.primary }}
                />
                <span
                  className="relative inline-flex h-1.5 w-1.5 rounded-full"
                  style={{ background: C.primary }}
                />
              </span>
              <span className="text-[11px] font-medium text-[#5B6172]">Powered by GPT-5</span>
            </div>
          </div>

          <div className="relative z-10 hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                label={link.label}
                href={link.href}
                isActive={activeSection === link.href}
                onClick={() => setActiveSection(link.href)}
              />
            ))}
            <span className="ml-1 flex items-center gap-1 rounded-full bg-[#7A5AF8]/10 px-2 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: C.primary }} />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7A5AF8]">
                New
              </span>
            </span>
          </div>

          <div className="relative z-10 flex items-center gap-1 sm:gap-1.5">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-[#5B6172] transition-all duration-200 hover:bg-[#7A5AF8]/[0.08] hover:text-[#7A5AF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
              aria-label="Search"
              aria-expanded={searchOpen}
            >
              <IconSearch className="h-[18px] w-[18px]" stroke={1.8} />
            </button>

            <div className="hidden sm:block">
              <IconBtn href="https://github.com" label="GitHub" external>
                <IconBrandGithub className="h-[18px] w-[18px]" stroke={1.8} />
              </IconBtn>
            </div>

            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 rounded-full border border-[rgba(122,90,248,0.12)] bg-white/40 px-2.5 py-1.5 text-[12px] font-medium text-[#5B6172] transition-all hover:border-[rgba(122,90,248,0.28)] hover:text-[#7A5AF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
              aria-label={`${GITHUB_STARS} GitHub stars`}
            >
              <IconBrandGithub className="h-3.5 w-3.5" stroke={1.8} />
              <span>{GITHUB_STARS}</span>
            </Link>

            <div className="hidden sm:block">
              <IconBtn href="https://discord.com" label="Discord" external>
                <IconBrandDiscord className="h-[18px] w-[18px]" stroke={1.8} />
              </IconBtn>
            </div>

            <div className="mx-1 hidden h-5 w-px sm:block" style={{ background: C.border }} aria-hidden />

            <Link
              href="/login"
              className="hidden sm:inline-flex items-center rounded-full px-3.5 py-2 text-[13px] font-medium text-[#5B6172] transition-colors hover:text-[#141726] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
            >
              Log in
            </Link>

            <div className="hidden sm:block">
              <MagneticCTA />
            </div>

            <motion.button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#141726] transition-colors hover:bg-[#7A5AF8]/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              whileTap={{ scale: 0.92 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.18 }}
                  >
                    <IconX className="h-5 w-5" stroke={2} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.18 }}
                  >
                    <IconMenu2 className="h-5 w-5" stroke={2} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed inset-0 z-[55] flex items-start justify-center bg-[#141726]/30 px-4 pt-28 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Search"
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 360, damping: 28 }}
              className="w-full max-w-lg overflow-hidden rounded-2xl border border-[rgba(122,90,248,0.16)] bg-white/90 shadow-2xl backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 border-b border-[rgba(122,90,248,0.1)] px-4 py-3.5">
                <IconSearch className="h-5 w-5 shrink-0 text-[#7A5AF8]" stroke={1.8} />
                <input
                  autoFocus
                  type="search"
                  placeholder="Search docs, features, guides…"
                  className="w-full bg-transparent text-[15px] text-[#141726] placeholder:text-[#5B6172]/70 outline-none"
                  aria-label="Search input"
                />
                <kbd className="hidden sm:inline-flex rounded-md border border-[rgba(122,90,248,0.15)] bg-[#F5F0FF] px-1.5 py-0.5 text-[11px] font-medium text-[#5B6172]">
                  Esc
                </kbd>
              </div>
              <div className="px-4 py-3 text-[13px] text-[#5B6172]">
                Start typing to search CodeSentry AI…
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[55] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-[#141726]/25 backdrop-blur-md"
              onClick={closeMobile}
              aria-hidden
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="absolute inset-x-3 top-[88px] bottom-3 flex flex-col overflow-hidden rounded-3xl border border-[rgba(122,90,248,0.14)] bg-white/80 shadow-2xl backdrop-blur-3xl sm:inset-x-4"
              initial={{ y: 24, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 16, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
            >
              <div
                className="pointer-events-none absolute -top-20 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full opacity-50 blur-3xl"
                style={{ background: C.glow }}
                aria-hidden
              />
              <div className="relative z-10 flex-1 overflow-y-auto px-3 py-4">
                <p className="mb-2 px-4 text-[11px] font-semibold uppercase tracking-widest text-[#5B6172]/70">
                  Navigate
                </p>
                {NAV_LINKS.map((link, i) => (
                  <MobileLink
                    key={link.href}
                    label={link.label}
                    href={link.href}
                    index={i}
                    isActive={activeSection === link.href}
                    onNavigate={closeMobile}
                  />
                ))}
                <div className="my-4 mx-4 h-px" style={{ background: C.border }} />
                <p className="mb-2 px-4 text-[11px] font-semibold uppercase tracking-widest text-[#5B6172]/70">
                  Community
                </p>
                <div className="flex gap-2 px-3">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[rgba(122,90,248,0.12)] bg-white/50 py-3 text-[13px] font-medium text-[#141726] transition-colors hover:bg-white/80"
                  >
                    <IconBrandGithub className="h-4 w-4" />
                    GitHub
                    <span className="text-[#5B6172]">{GITHUB_STARS}</span>
                  </Link>
                  <Link
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[rgba(122,90,248,0.12)] bg-white/50 py-3 text-[13px] font-medium text-[#141726] transition-colors hover:bg-white/80"
                  >
                    <IconBrandDiscord className="h-4 w-4" />
                    Discord
                  </Link>
                </div>
              </div>
              <div className="relative z-10 border-t border-[rgba(122,90,248,0.1)] bg-white/50 px-4 py-4 backdrop-blur-xl">
                <div className="flex gap-2">
                  <Link
                    href="/login"
                    onClick={closeMobile}
                    className="flex flex-1 items-center justify-center rounded-full border border-[rgba(122,90,248,0.16)] bg-white/70 py-3.5 text-[14px] font-semibold text-[#141726] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    onClick={closeMobile}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full py-3.5 text-[14px] font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
                    style={{
                      background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                      boxShadow: `0 4px 20px ${C.glow}`,
                    }}
                  >
                    Get Started
                    <IconArrowUpRight className="h-4 w-4" stroke={2.2} />
                  </Link>
                </div>
                <p className="mt-3 text-center text-[11px] text-[#5B6172]">
                  Powered by GPT-5 · CodeSentry AI
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}