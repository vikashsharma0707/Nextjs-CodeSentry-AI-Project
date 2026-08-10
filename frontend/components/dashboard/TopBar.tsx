// // // // "use client";

// // // // import { usePathname } from "next/navigation";
// // // // import { IconBell, IconCirclePlus } from "@tabler/icons-react";
// // // // import Link from "next/link";
// // // // import { useAuth } from "@/context/AuthContext";

// // // // const ACCENT = "#ccff00";

// // // // const PAGE_TITLES: Record<string, string> = {
// // // //   "/dashboard": "Dashboard",
// // // //   "/dashboard/review/new": "New Review",
// // // //   "/dashboard/repositories": "My Repositories",
// // // //   "/dashboard/history": "Review History",
// // // //   "/dashboard/settings": "Settings",
// // // // };

// // // // export default function TopBar() {
// // // //   const pathname = usePathname();
// // // //   const { user } = useAuth();

// // // //   const title =
// // // //     Object.entries(PAGE_TITLES).find(([key]) =>
// // // //       key === "/dashboard" ? pathname === key : pathname.startsWith(key)
// // // //     )?.[1] ?? "Dashboard";

// // // //   return (
// // // //     <header
// // // //       className="flex h-[72px] shrink-0 items-center justify-between px-6 backdrop-blur-md"
// // // //       style={{
// // // //         background: "rgba(5,5,5,0.85)",
// // // //         borderBottom: "1px solid rgba(204,255,0,0.12)",
// // // //       }}
// // // //     >
// // // //       {/* ── Title ── */}
// // // //       <h1 className="text-[13px] font-black uppercase tracking-[0.25em] text-white">{title}</h1>

// // // //       {/* ── Right Actions ── */}
// // // //       <div className="flex items-center gap-3">
// // // //         <Link
// // // //           href="/dashboard/repositories"
// // // //           className="hidden sm:flex items-center gap-2 px-4 py-2 text-[12px] font-black uppercase tracking-widest text-black transition-all hover:opacity-80"
// // // //           style={{
// // // //             background: ACCENT,
// // // //             clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
// // // //           }}
// // // //         >
// // // //           <IconCirclePlus className="h-4 w-4" stroke={2} />
// // // //           New Review
// // // //         </Link>

// // // //         {/* Notification Bell */}
// // // //         <button
// // // //           className="relative flex h-9 w-9 items-center justify-center transition-all hover:border-[#ccff00]/30"
// // // //           style={{
// // // //             border: "1px solid rgba(255,255,255,0.1)",
// // // //             background: "rgba(255,255,255,0.03)",
// // // //             color: "#71717a",
// // // //           }}
// // // //           aria-label="Notifications"
// // // //         >
// // // //           <IconBell className="h-4 w-4" stroke={1.75} />
// // // //           <span
// // // //             className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full"
// // // //             style={{ background: ACCENT }}
// // // //           />
// // // //         </button>

// // // //         {/* User Avatar */}
// // // //         {user && (
// // // //           <div
// // // //             className="flex h-9 w-9 items-center justify-center text-sm font-black text-black"
// // // //             style={{
// // // //               background: ACCENT,
// // // //               clipPath: "polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)",
// // // //             }}
// // // //           >
// // // //             {user.name.charAt(0).toUpperCase()}
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </header>
// // // //   );
// // // // }



// // // "use client";

// // // import { usePathname } from "next/navigation";
// // // import Link from "next/link";
// // // import {
// // //   IconBell,
// // //   IconCirclePlus,
// // //   IconSparkles,
// // // } from "@tabler/icons-react";
// // // import { useAuth } from "@/context/AuthContext";

// // // const PAGE_TITLES: Record<string, string> = {
// // //   "/dashboard": "Dashboard",
// // //   "/dashboard/review/new": "AI Code Review",
// // //   "/dashboard/repositories": "Repositories",
// // //   "/dashboard/history": "Review History",
// // //   "/dashboard/settings": "Settings",
// // // };

// // // export default function TopBar() {
// // //   const pathname = usePathname();
// // //   const { user } = useAuth();

// // //   const title =
// // //     Object.entries(PAGE_TITLES).find(([key]) =>
// // //       key === "/dashboard"
// // //         ? pathname === key
// // //         : pathname.startsWith(key)
// // //     )?.[1] ?? "Dashboard";

// // //   return (
// // //     <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-white/10 bg-[#050816]/90 px-8 backdrop-blur-2xl">

// // //       {/* LEFT */}

// // //       <div className="flex flex-col">
// // //         <span className="text-xs uppercase tracking-[0.30em] text-[#4F8CFF] font-semibold">
// // //           CodeSentry AI
// // //         </span>

// // //         <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">
// // //           {title}
// // //         </h1>
// // //       </div>

// // //       {/* RIGHT */}

// // //       <div className="flex items-center gap-4">

// // //         {/* AI REVIEW BUTTON */}

// // //         <Link
// // //           href="/dashboard/repositories"
// // //           className="group hidden items-center gap-2 rounded-xl border border-[#5B5FFF]/30 bg-gradient-to-r from-[#5B5FFF] via-[#6366F1] to-[#4F8CFF] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#5B5FFF]/20 transition-all duration-300 hover:scale-105 hover:shadow-[#5B5FFF]/40 sm:flex"
// // //         >
// // //           <IconSparkles
// // //             className="h-4 w-4 transition-transform group-hover:rotate-12"
// // //           />
// // //           New Review
// // //         </Link>

// // //         {/* Notification */}

// // //         <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 backdrop-blur-xl transition-all duration-300 hover:border-[#5B5FFF]/40 hover:bg-[#5B5FFF]/10 hover:text-white">

// // //           <IconBell className="h-5 w-5" />

// // //           <span className="absolute right-3 top-3 flex h-2.5 w-2.5">

// // //             <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D4FF] opacity-75" />

// // //             <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00D4FF]" />

// // //           </span>

// // //         </button>

// // //         {/* User */}

// // //         {user && (
// // //           <button className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur-xl transition-all duration-300 hover:border-[#5B5FFF]/40 hover:bg-white/[0.07]">

// // //             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#5B5FFF] via-[#4F8CFF] to-[#00D4FF] text-sm font-bold text-white shadow-lg shadow-[#5B5FFF]/25">

// // //               {user.name.charAt(0).toUpperCase()}

// // //             </div>

// // //             <div className="hidden text-left lg:block">

// // //               <p className="text-sm font-semibold text-white">
// // //                 {user.name}
// // //               </p>

// // //               <p className="text-xs text-slate-400">
// // //                 AI Developer
// // //               </p>

// // //             </div>

// // //           </button>
// // //         )}

// // //       </div>
// // //     </header>
// // //   );
// // // }

// // "use client";

// // import { usePathname } from "next/navigation";
// // import Link from "next/link";
// // import {
// //   IconBell,
// //   IconSparkles,
// //   IconSearch,
// //   IconSun,
// //   IconChevronDown,
// // } from "@tabler/icons-react";
// // import { useAuth } from "@/context/AuthContext";
// // import { useRef, useEffect, useState } from "react";

// // const PAGE_TITLES: Record<string, string> = {
// //   "/dashboard": "Dashboard",
// //   "/dashboard/review/new": "AI Code Review",
// //   "/dashboard/repositories": "Repositories",
// //   "/dashboard/history": "Review History",
// //   "/dashboard/settings": "Settings",
// // };

// // export default function TopBar() {
// //   const pathname = usePathname();
// //   const { user } = useAuth();
// //   const headerRef = useRef<HTMLElement>(null);
// //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// //   const [hovering, setHovering] = useState(false);

// //   const title =
// //     Object.entries(PAGE_TITLES).find(([key]) =>
// //       key === "/dashboard" ? pathname === key : pathname.startsWith(key)
// //     )?.[1] ?? "Dashboard";

// //   useEffect(() => {
// //     const el = headerRef.current;
// //     if (!el) return;
// //     const onMove = (e: MouseEvent) => {
// //       const r = el.getBoundingClientRect();
// //       setMousePos({ x: e.clientX - r.left, y: e.clientY - r.top });
// //     };
// //     el.addEventListener("mousemove", onMove);
// //     el.addEventListener("mouseenter", () => setHovering(true));
// //     el.addEventListener("mouseleave", () => setHovering(false));
// //     return () => {
// //       el.removeEventListener("mousemove", onMove);
// //     };
// //   }, []);

// //   return (
// //     <header
// //       ref={headerRef}
// //       className="sticky top-0 z-40 flex h-[72px] items-center justify-between border-b border-white/[0.06] bg-[#050816]/60 px-8 backdrop-blur-2xl"
// //     >
// //       {/* Mouse-follow glow */}
// //       <div
// //         className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
// //         style={{
// //           opacity: hovering ? 1 : 0,
// //           background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(91,95,255,0.06), transparent 50%)`,
// //         }}
// //       />

// //       {/* Left: Badge + Title */}
// //       <div className="relative z-10 flex flex-col gap-0.5">
// //         <span className="gradient-text text-[10px] font-bold uppercase tracking-[0.25em]">
// //           CodeSentry AI
// //         </span>
// //         <h1 className="text-xl font-bold tracking-tight text-white">
// //           {title}
// //         </h1>
// //       </div>

// //       {/* Center: AI Status */}
// //       <div className="relative z-10 hidden md:flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 backdrop-blur-xl">
// //         <span className="relative flex h-1.5 w-1.5">
// //           <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-60" />
// //           <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
// //         </span>
// //         <span className="text-[11px] font-medium text-white/80">
// //           AI System Online
// //         </span>
// //       </div>

// //       {/* Right */}
// //       <div className="relative z-10 flex items-center gap-3">
// //         {/* New Review */}
// //         <Link
// //           href="/dashboard/review/new"
// //           className="premium-button group relative hidden items-center gap-2 overflow-hidden rounded-xl px-4 py-2 text-[12px] font-bold text-white transition-all hover:scale-[1.03] sm:flex"
// //         >
// //           <IconSparkles
// //             className="h-4 w-4 transition-transform group-hover:rotate-12"
// //             stroke={2}
// //           />
// //           New Review
// //           <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
// //         </Link>

// //         {/* Notification */}
// //         <button className="glass-card flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-105">
// //           <IconBell className="h-[18px] w-[18px] text-white/50" stroke={1.5} />
// //           <span className="absolute right-2.5 top-2.5 flex h-2 w-2">
// //             <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EF4444] opacity-60" />
// //             <span className="relative inline-flex h-2 w-2 rounded-full bg-[#EF4444]" />
// //           </span>
// //         </button>

// //         {/* Search */}
// //         <div className="glass-card hidden items-center gap-2 rounded-xl px-3 py-2 lg:flex">
// //           <IconSearch className="h-4 w-4 text-white/30" stroke={1.5} />
// //           <span className="text-[12px] text-white/30">Search repositories...</span>
// //           <kbd className="hidden rounded-md border border-white/[0.08] bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-white/20 xl:inline-block">
// //             ⌘K
// //           </kbd>
// //         </div>

// //         {/* Theme */}
// //         <button className="glass-card flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-105">
// //           <IconSun
// //             className="h-[18px] w-[18px] text-white/50 transition-transform hover:rotate-90"
// //             stroke={1.5}
// //           />
// //         </button>

// //         {/* GitHub */}
// //         <div className="glass-card hidden items-center gap-2 rounded-full px-3 py-1.5 xl:flex">
// //           <svg className="h-4 w-4 text-white/60" viewBox="0 0 24 24" fill="currentColor">
// //             <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
// //           </svg>
// //           <span className="text-[11px] font-medium text-white/60">Connected</span>
// //           <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
// //         </div>

// //         {/* User */}
// //         <button className="glass-card group flex items-center gap-2.5 rounded-xl px-2.5 py-1.5 transition-all hover:scale-[1.02]">
// //           <div className="premium-button relative flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold text-white">
// //             {user?.name?.charAt(0).toUpperCase() ?? "A"}
// //             <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border-2 border-[#0A1020] bg-[#22C55E]" />
// //           </div>
// //           <div className="hidden flex-col items-start lg:flex">
// //             <span className="text-[12px] font-semibold text-white/90">
// //               {user?.name ?? "Alex Johnson"}
// //             </span>
// //             <span className="text-[10px] text-white/40">AI Developer</span>
// //           </div>
// //           <IconChevronDown
// //             className="hidden h-3.5 w-3.5 text-white/30 transition-transform group-hover:rotate-180 lg:block"
// //             stroke={2}
// //           />
// //         </button>
// //       </div>
// //     </header>
// //   );
// // }



// "use client";

// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import {
//   IconBell,
//   IconSparkles,
//   IconSearch,
//   IconSun,
//   IconChevronDown,
// } from "@tabler/icons-react";
// import { useAuth } from "@/context/AuthContext";
// import { useRef, useEffect, useState } from "react";

// const PAGE_TITLES: Record<string, string> = {
//   "/dashboard": "Dashboard",
//   "/dashboard/review/new": "AI Code Review",
//   "/dashboard/repositories": "Repositories",
//   "/dashboard/history": "Review History",
//   "/dashboard/settings": "Settings",
// };

// export default function TopBar() {
//   const pathname = usePathname();
//   const { user } = useAuth();
//   const headerRef = useRef<HTMLElement>(null);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [hovering, setHovering] = useState(false);

//   const title =
//     Object.entries(PAGE_TITLES).find(([key]) =>
//       key === "/dashboard" ? pathname === key : pathname.startsWith(key)
//     )?.[1] ?? "Dashboard";

//   useEffect(() => {
//     const el = headerRef.current;
//     if (!el) return;
//     const onMove = (e: MouseEvent) => {
//       const r = el.getBoundingClientRect();
//       setMousePos({ x: e.clientX - r.left, y: e.clientY - r.top });
//     };
//     el.addEventListener("mousemove", onMove);
//     el.addEventListener("mouseenter", () => setHovering(true));
//     el.addEventListener("mouseleave", () => setHovering(false));
//     return () => {
//       el.removeEventListener("mousemove", onMove);
//     };
//   }, []);

//   return (
//     <header
//       ref={headerRef}
//       className="sticky top-0 z-40 flex h-20 items-center justify-between overflow-hidden rounded-b-[22px] border-b border-white/[0.05] bg-[rgba(17,24,39,0.72)] px-6 backdrop-blur-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.35)] sm:px-8"
//     >
//       {/* Soft aurora + noise layer */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -left-24 -top-16 h-48 w-64 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,transparent_70%)] blur-3xl" />
//         <div className="absolute -right-20 top-0 h-40 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,140,255,0.10)_0%,transparent_70%)] blur-3xl" />
//         <div
//           className="absolute inset-0 opacity-[0.025]"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
//           }}
//         />
//       </div>

//       {/* Mouse-follow glow */}
//       <div
//         className="pointer-events-none absolute inset-0 transition-opacity duration-500"
//         style={{
//           opacity: hovering ? 1 : 0,
//           background: `radial-gradient(480px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139,92,246,0.07), transparent 55%)`,
//         }}
//       />

//       {/* ── Left: Badge + Title ── */}
//       <div className="relative z-10 flex flex-col gap-0.5">
//         <span className="bg-gradient-to-r from-white to-[#A78BFA] bg-clip-text text-[10px] font-bold uppercase tracking-[0.25em] text-transparent">
//           CodeSentry AI
//         </span>
//         <h1 className="text-[22px] font-bold tracking-tight text-white sm:text-[26px]">
//           {title}
//         </h1>
//         <p className="hidden text-[11px] font-medium text-[#64748B] sm:block">
//           AI Powered Code Intelligence
//         </p>
//       </div>

//       {/* ── Center: AI Status Pill ── */}
//       <div className="relative z-10 hidden items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 backdrop-blur-[40px] transition-all duration-300 hover:bg-white/[0.07] hover:border-white/[0.12] md:flex">
//         <span className="relative flex h-2 w-2">
//           <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-55" />
//           <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E] shadow-[0_0_8px_#22C55E]" />
//         </span>
//         <span className="text-[12px] font-medium text-white/85">
//           AI System Online
//         </span>
//       </div>

//       {/* ── Right Actions ── */}
//       <div className="relative z-10 flex items-center gap-2.5 sm:gap-3">
//         {/* New Review Button */}
//         <Link
//           href="/dashboard/review/new"
//           className="group relative hidden h-11 items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#4F8CFF] px-5 text-[13px] font-semibold text-white shadow-[0_0_28px_rgba(139,92,246,0.30)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(139,92,246,0.45)] active:scale-[0.98] sm:flex"
//           style={{ transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)" }}
//         >
//           <IconSparkles
//             className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12"
//             stroke={2}
//           />
//           New Review
//           {/* Shine sweep */}
//           <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
//         </Link>

//         {/* Notification */}
//         <button
//           className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/[0.08] hover:border-violet-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.20)]"
//           style={{ transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)" }}
//         >
//           <IconBell
//             className="h-[18px] w-[18px] text-white/50 transition-colors group-hover:text-white"
//             stroke={1.5}
//           />
//           <span className="absolute right-2.5 top-2.5 flex h-2 w-2">
//             <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EF4444] opacity-55" />
//             <span className="relative inline-flex h-2 w-2 rounded-full bg-[#EF4444] shadow-[0_0_6px_#EF4444]" />
//           </span>
//         </button>

//         {/* Search */}
//         <div className="hidden h-11 w-[280px] items-center gap-2.5 rounded-2xl border border-white/[0.07] bg-white/[0.04] px-3.5 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.06] focus-within:border-violet-500/40 focus-within:shadow-[0_0_0_3px_rgba(139,92,246,0.15)] lg:flex">
//           <IconSearch className="h-4 w-4 flex-shrink-0 text-white/35" stroke={1.5} />
//           <span className="flex-1 truncate text-[13px] text-white/35">
//             Search repositories…
//           </span>
//           <kbd className="hidden rounded-lg border border-white/[0.08] bg-white/[0.05] px-1.5 py-0.5 text-[10px] font-medium text-white/25 xl:inline-block">
//             ⌘K
//           </kbd>
//         </div>

//         {/* Theme Toggle */}
//         <button
//           className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/[0.08] hover:border-blue-500/30 hover:shadow-[0_0_18px_rgba(79,140,255,0.18)]"
//           style={{ transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)" }}
//         >
//           <IconSun
//             className="h-[18px] w-[18px] text-white/50 transition-transform duration-500 hover:rotate-90 hover:text-white"
//             stroke={1.5}
//           />
//         </button>

//         {/* GitHub Connected */}
//         <div className="hidden items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.04] px-3.5 py-2 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/25 hover:bg-white/[0.07] xl:flex">
//           <svg
//             className="h-4 w-4 text-white/60"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//           >
//             <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//           </svg>
//           <span className="text-[11.5px] font-medium text-white/65">Connected</span>
//           <span className="relative flex h-1.5 w-1.5">
//             <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-50" />
//             <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
//           </span>
//         </div>

//         {/* User Profile */}
//         <button
//           className="group flex items-center gap-2.5 rounded-[18px] border border-white/[0.07] bg-white/[0.04] px-2.5 py-1.5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.07] hover:border-white/[0.12] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
//           style={{ transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)" }}
//         >
//           <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#4F8CFF] text-[12px] font-bold text-white shadow-[0_0_16px_-2px_rgba(139,92,246,0.45)] ring-1 ring-white/10">
//             {user?.name?.charAt(0).toUpperCase() ?? "A"}
//             <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-50" />
//               <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-[#0B1020] bg-[#22C55E]" />
//             </span>
//           </div>
//           <div className="hidden flex-col items-start lg:flex">
//             <span className="text-[12.5px] font-semibold text-white/90">
//               {user?.name ?? "Alex Johnson"}
//             </span>
//             <span className="text-[10.5px] text-[#64748B]">AI Developer</span>
//           </div>
//           <IconChevronDown
//             className="hidden h-3.5 w-3.5 text-white/30 transition-transform duration-300 group-hover:rotate-180 lg:block"
//             stroke={2}
//           />
//         </button>
//       </div>
//     </header>
//   );
// }




"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  IconBell,
  IconSparkles,
  IconSearch,
  IconSun,
  IconChevronDown,
} from "@tabler/icons-react";
import { useAuth } from "@/context/AuthContext";
import { useRef, useEffect, useState } from "react";

const PAGE_TITLES: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/review/new": "AI Code Review",
  "/dashboard/repositories": "Repositories",
  "/dashboard/history": "Review History",
  "/dashboard/settings": "Settings",
};

export default function TopBar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const headerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const title =
    Object.entries(PAGE_TITLES).find(([key]) =>
      key === "/dashboard" ? pathname === key : pathname.startsWith(key)
    )?.[1] ?? "Dashboard";

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setMousePos({ x: e.clientX - r.left, y: e.clientY - r.top });
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", () => setHovering(true));
    el.addEventListener("mouseleave", () => setHovering(false));
    return () => {
      el.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 flex h-20 items-center justify-between overflow-hidden rounded-b-[22px] border-b px-6 backdrop-blur-[40px] sm:px-8"
      style={{
        background: "rgba(248,247,255,0.85)",
        borderColor: "rgba(139,92,246,0.12)",
        boxShadow: "0 15px 40px -20px rgba(139,92,246,0.20)",
      }}
    >
      {/* Soft aurora layer */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-24 -top-16 h-48 w-64 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -right-20 top-0 h-40 w-56 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(79,140,255,0.12) 0%, transparent 70%)" }}
        />
      </div>

      {/* Mouse-follow glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(480px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139,92,246,0.08), transparent 55%)`,
        }}
      />

      {/* ── Left: Badge + Title ── */}
      <div className="relative z-10 flex flex-col gap-0.5">
        <span
          className="text-[10px] font-bold uppercase tracking-[0.25em]"
          style={{
            background: "linear-gradient(90deg, #8B5CF6, #4F8CFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          CodeSentry AI
        </span>
        <h1 className="text-[22px] font-bold tracking-tight sm:text-[26px]" style={{ color: "#11183A" }}>
          {title}
        </h1>
        <p className="hidden text-[11px] font-medium sm:block" style={{ color: "#94A3B8" }}>
          AI Powered Code Intelligence
        </p>
      </div>

      {/* ── Center: AI Status Pill ── */}
      <div
        className="relative z-10 hidden items-center gap-2.5 rounded-full border px-4 py-2 backdrop-blur-[40px] transition-all duration-300 md:flex"
        style={{ borderColor: "rgba(34,197,94,0.25)", background: "rgba(34,197,94,0.08)" }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-55" style={{ background: "#22C55E" }} />
          <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "#22C55E", boxShadow: "0 0 8px #22C55E" }} />
        </span>
        <span className="text-[12px] font-medium" style={{ color: "#15803D" }}>
          AI System Online
        </span>
      </div>

      {/* ── Right Actions ── */}
      <div className="relative z-10 flex items-center gap-2.5 sm:gap-3">
        {/* New Review Button */}
        <Link
          href="/dashboard/review/new"
          className="group relative hidden h-11 items-center gap-2 overflow-hidden rounded-2xl px-5 text-[13px] font-semibold text-white transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] sm:flex"
          style={{
            background: "linear-gradient(135deg, #8B5CF6, #4F8CFF)",
            boxShadow: "0 0 28px -6px rgba(139,92,246,0.45)",
            transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)",
          }}
        >
          <IconSparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" stroke={2} />
          New Review
          {/* Shine sweep */}
          <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </Link>

        {/* Notification */}
        <button
          className="relative flex h-11 w-11 items-center justify-center rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:scale-105"
          style={{
            borderColor: "rgba(139,92,246,0.14)",
            background: "rgba(255,255,255,0.6)",
            transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)",
          }}
        >
          <IconBell className="h-[18px] w-[18px]" style={{ color: "#64748B" }} stroke={1.5} />
          <span className="absolute right-2.5 top-2.5 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ background: "#EF4444" }} />
            <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "#EF4444", boxShadow: "0 0 6px #EF4444" }} />
          </span>
        </button>

        {/* Search */}
        <div
          className="hidden h-11 w-[280px] items-center gap-2.5 rounded-2xl border px-3.5 backdrop-blur-xl transition-all duration-300 lg:flex"
          style={{ borderColor: "rgba(139,92,246,0.14)", background: "rgba(255,255,255,0.6)" }}
        >
          <IconSearch className="h-4 w-4 flex-shrink-0" style={{ color: "#94A3B8" }} stroke={1.5} />
          <span className="flex-1 truncate text-[13px]" style={{ color: "#94A3B8" }}>
            Search repositories…
          </span>
          <kbd
            className="hidden rounded-lg border px-1.5 py-0.5 text-[10px] font-medium xl:inline-block"
            style={{ borderColor: "rgba(139,92,246,0.14)", background: "rgba(139,92,246,0.06)", color: "#8B5CF6" }}
          >
            ⌘K
          </kbd>
        </div>

        {/* Theme Toggle */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:scale-105"
          style={{
            borderColor: "rgba(139,92,246,0.14)",
            background: "rgba(255,255,255,0.6)",
            transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)",
          }}
        >
          <IconSun className="h-[18px] w-[18px] transition-transform duration-500 hover:rotate-90" style={{ color: "#64748B" }} stroke={1.5} />
        </button>

        {/* GitHub Connected */}
        <div
          className="hidden items-center gap-2 rounded-full border px-3.5 py-2 backdrop-blur-xl transition-all duration-300 xl:flex"
          style={{ borderColor: "rgba(139,92,246,0.14)", background: "rgba(255,255,255,0.6)" }}
        >
          <svg className="h-4 w-4" style={{ color: "#64748B" }} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="text-[11.5px] font-medium" style={{ color: "#64748B" }}>Connected</span>
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-50" style={{ background: "#22C55E" }} />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: "#22C55E" }} />
          </span>
        </div>

        {/* User Profile */}
        <button
          className="group flex items-center gap-2.5 rounded-[18px] border px-2.5 py-1.5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
          style={{
            borderColor: "rgba(139,92,246,0.14)",
            background: "rgba(255,255,255,0.6)",
            transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)",
          }}
        >
          <div
            className="relative flex h-9 w-9 items-center justify-center rounded-xl text-[12px] font-bold text-white"
            style={{ background: "linear-gradient(135deg, #8B5CF6, #4F8CFF)", boxShadow: "0 0 16px -2px rgba(139,92,246,0.45)" }}
          >
            {user?.name?.charAt(0).toUpperCase() ?? "A"}
            <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-50" style={{ background: "#22C55E" }} />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2" style={{ background: "#22C55E", borderColor: "#F8F7FF" }} />
            </span>
          </div>
          <div className="hidden flex-col items-start lg:flex">
            <span className="text-[12.5px] font-semibold" style={{ color: "#11183A" }}>
              {user?.name ?? "Alex Johnson"}
            </span>
            <span className="text-[10.5px]" style={{ color: "#94A3B8" }}>AI Developer</span>
          </div>
          <IconChevronDown
            className="hidden h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 lg:block"
            style={{ color: "#94A3B8" }}
            stroke={2}
          />
        </button>
      </div>
    </header>
  );
}