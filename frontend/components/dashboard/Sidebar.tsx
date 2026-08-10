// // // // // "use client";

// // // // // import Link from "next/link";
// // // // // import { usePathname } from "next/navigation";
// // // // // import {
// // // // //   IconLayoutDashboard,
// // // // //   IconCirclePlus,
// // // // //   IconBrandGithub,
// // // // //   IconHistory,
// // // // //   IconSettings,
// // // // //   IconLogout,
// // // // //   IconSparkles,
// // // // // } from "@tabler/icons-react";
// // // // // import { useAuth } from "@/context/AuthContext";

// // // // // const NAV = [
// // // // //   { label: "Dashboard",      href: "/dashboard",               icon: IconLayoutDashboard },
// // // // //   { label: "New Review",     href: "/dashboard/review/new",    icon: IconCirclePlus      },
// // // // //   { label: "Repositories",   href: "/dashboard/repositories",  icon: IconBrandGithub     },
// // // // //   { label: "Review History", href: "/dashboard/history",       icon: IconHistory         },
// // // // //   { label: "Settings",       href: "/dashboard/settings",      icon: IconSettings        },
// // // // // ];

// // // // // export default function Sidebar() {
// // // // //   const pathname = usePathname();
// // // // //   const { user, signOut } = useAuth();

// // // // //   const isActive = (href: string) =>
// // // // //     href === "/dashboard" ? pathname === href : pathname.startsWith(href);

// // // // //   return (
// // // // //     <aside className="flex h-full w-60 flex-col bg-[#060816] border-r border-white/[0.08]">
// // // // //       {/* ── Logo ── */}
// // // // //       <div className="flex h-[72px] items-center gap-2.5 px-5 border-b border-white/[0.08]">
// // // // //         <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#5B5FFF] to-[#6F4CFF] shadow-[0_0_20px_rgba(91,95,255,0.5)]">
// // // // //           <IconSparkles className="h-4.5 w-4.5 text-white" stroke={2} />
// // // // //         </div>
// // // // //         <span className="text-[15px] font-bold tracking-tight text-white">
// // // // //           CodeSentry <span className="text-[#8B8FFF]">AI</span>
// // // // //         </span>
// // // // //       </div>

// // // // //       {/* ── Nav ── */}
// // // // //       <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-1">
// // // // //         {NAV.map(({ label, href, icon: Icon }) => {
// // // // //           const active = isActive(href);
// // // // //           return (
// // // // //             <Link
// // // // //               key={href}
// // // // //               href={href}
// // // // //               className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
// // // // //                 active
// // // // //                   ? "bg-[#5B5FFF]/10 border border-[#5B5FFF]/25 text-[#8B8FFF]"
// // // // //                   : "border border-transparent text-[#7B859E] hover:bg-white/[0.04] hover:text-white"
// // // // //               }`}
// // // // //             >
// // // // //               <Icon
// // // // //                 className={`h-4.5 w-4.5 flex-shrink-0 transition-colors ${active ? "text-[#8B8FFF]" : ""}`}
// // // // //                 stroke={1.75}
// // // // //               />
// // // // //               <span className="flex-1 text-[13px]">{label}</span>
// // // // //             </Link>
// // // // //           );
// // // // //         })}
// // // // //       </nav>

// // // // //       {/* ── User + Sign Out ── */}
// // // // //       <div className="p-3 space-y-2 border-t border-white/[0.08]">
// // // // //         {user && (
// // // // //           <div className="flex items-center gap-3 px-3 py-2">
// // // // //             <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#5B5FFF] to-[#6F4CFF] text-sm font-bold text-white">
// // // // //               {user.name.charAt(0).toUpperCase()}
// // // // //             </div>
// // // // //             <div className="min-w-0 flex-1">
// // // // //               <p className="truncate text-xs font-semibold text-white">{user.name}</p>
// // // // //               <p className="truncate text-[11px] text-[#7B859E]">{user.email}</p>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //         <button
// // // // //           onClick={signOut}
// // // // //           className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-[#7B859E] transition-colors hover:bg-[#EF4444]/10 hover:text-[#EF4444]"
// // // // //         >
// // // // //           <IconLogout className="h-4.5 w-4.5" stroke={1.75} />
// // // // //           Sign Out
// // // // //         </button>
// // // // //       </div>
// // // // //     </aside>
// // // // //   );
// // // // // }


// // // // "use client";

// // // // import Link from "next/link";
// // // // import { usePathname } from "next/navigation";
// // // // import {
// // // //   IconLayoutDashboard,
// // // //   IconCirclePlus,
// // // //   IconBrandGithub,
// // // //   IconHistory,
// // // //   IconSettings,
// // // //   IconLogout,
// // // //   IconSparkles,
// // // // } from "@tabler/icons-react";
// // // // import { useAuth } from "@/context/AuthContext";
// // // // import { clsx, type ClassValue } from "clsx";
// // // // import { twMerge } from "tailwind-merge";

// // // // function cn(...inputs: ClassValue[]) {
// // // //   return twMerge(clsx(inputs));
// // // // }

// // // // const NAV = [
// // // //   { label: "Dashboard", href: "/dashboard", icon: IconLayoutDashboard },
// // // //   { label: "New Review", href: "/dashboard/review/new", icon: IconCirclePlus },
// // // //   { label: "Repositories", href: "/dashboard/repositories", icon: IconBrandGithub },
// // // //   { label: "Review History", href: "/dashboard/history", icon: IconHistory },
// // // //   { label: "Settings", href: "/dashboard/settings", icon: IconSettings },
// // // // ];

// // // // export default function Sidebar() {
// // // //   const pathname = usePathname();
// // // //   const { user, signOut } = useAuth();

// // // //   const isActive = (href: string) =>
// // // //     href === "/dashboard" ? pathname === href : pathname.startsWith(href);

// // // //   return (
// // // //     <aside className="fixed left-0 top-0 z-50 flex h-screen w-[260px] flex-col border-r border-white/[0.06] bg-[#050816]/80 backdrop-blur-2xl">
// // // //       {/* Logo */}
// // // //       <div className="flex h-[72px] items-center gap-3 px-6">
// // // //         <div className="premium-button flex h-9 w-9 items-center justify-center rounded-xl">
// // // //           <IconSparkles className="h-[18px] w-[18px] text-white" stroke={2} />
// // // //         </div>
// // // //         <span className="text-[15px] font-bold tracking-tight text-white">
// // // //           CodeSentry <span className="text-[#4F8CFF]">AI</span>
// // // //         </span>
// // // //       </div>

// // // //       {/* Nav */}
// // // //       <nav className="flex-1 space-y-1 px-3 py-4">
// // // //         {NAV.map(({ label, href, icon: Icon }) => {
// // // //           const active = isActive(href);
// // // //           return (
// // // //             <Link
// // // //               key={href}
// // // //               href={href}
// // // //               className={cn(
// // // //                 "group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[13px] font-medium transition-all duration-200",
// // // //                 active
// // // //                   ? "bg-[#5B5FFF]/10 text-[#5B5FFF] ring-1 ring-[#5B5FFF]/20 shadow-[0_0_20px_-4px_rgba(91,95,255,0.15)]"
// // // //                   : "text-[#94A3B8] hover:bg-white/[0.04] hover:text-white"
// // // //               )}
// // // //             >
// // // //               <Icon
// // // //                 className={cn(
// // // //                   "h-[18px] w-[18px] flex-shrink-0 transition-colors",
// // // //                   active && "text-[#5B5FFF]"
// // // //                 )}
// // // //                 stroke={active ? 2 : 1.5}
// // // //               />
// // // //               <span className="flex-1">{label}</span>
// // // //               {active && (
// // // //                 <div className="h-1.5 w-1.5 rounded-full bg-[#5B5FFF] shadow-[0_0_8px_#5B5FFF]" />
// // // //               )}
// // // //             </Link>
// // // //           );
// // // //         })}
// // // //       </nav>

// // // //       {/* Profile + Sign Out */}
// // // //       <div className="space-y-2 p-3">
// // // //         {user && (
// // // //           <div className="glass-card flex items-center gap-3 rounded-2xl px-3.5 py-3">
// // // //             <div className="premium-button relative flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-bold text-white">
// // // //               {user.name.charAt(0).toUpperCase()}
// // // //               <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0A1020] bg-[#22C55E]" />
// // // //             </div>
// // // //             <div className="min-w-0 flex-1">
// // // //               <p className="truncate text-[13px] font-semibold text-white">
// // // //                 {user.name}
// // // //               </p>
// // // //               <p className="truncate text-[11px] text-[#64748B]">
// // // //                 {user.email}
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         <button
// // // //           onClick={signOut}
// // // //           className="flex w-full items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-[13px] font-medium text-[#64748B] transition-all hover:bg-[#EF4444]/10 hover:text-[#EF4444]"
// // // //         >
// // // //           <IconLogout className="h-[18px] w-[18px]" stroke={1.5} />
// // // //           Sign Out
// // // //         </button>
// // // //       </div>
// // // //     </aside>
// // // //   );
// // // // }


// // // "use client";

// // // import Link from "next/link";
// // // import { usePathname } from "next/navigation";
// // // import {
// // //   IconLayoutDashboard,
// // //   IconCirclePlus,
// // //   IconBrandGithub,
// // //   IconHistory,
// // //   IconSettings,
// // //   IconLogout,
// // //   IconSparkles,
// // // } from "@tabler/icons-react";
// // // import { useAuth } from "@/context/AuthContext";
// // // import { clsx, type ClassValue } from "clsx";
// // // import { twMerge } from "tailwind-merge";

// // // function cn(...inputs: ClassValue[]) {
// // //   return twMerge(clsx(inputs));
// // // }

// // // const NAV = [
// // //   { label: "Dashboard", href: "/dashboard", icon: IconLayoutDashboard },
// // //   { label: "New Review", href: "/dashboard/review/new", icon: IconCirclePlus },
// // //   { label: "Repositories", href: "/dashboard/repositories", icon: IconBrandGithub },
// // //   { label: "Review History", href: "/dashboard/history", icon: IconHistory },
// // //   { label: "Settings", href: "/dashboard/settings", icon: IconSettings },
// // // ];

// // // export default function Sidebar() {
// // //   const pathname = usePathname();
// // //   const { user, signOut } = useAuth();

// // //   const isActive = (href: string) =>
// // //     href === "/dashboard" ? pathname === href : pathname.startsWith(href);

// // //   return (
// // //     <aside className="fixed left-0 top-0 z-50 flex h-screen w-[260px] flex-col border-r border-white/[0.08] bg-[#070B16]/80 backdrop-blur-[30px]">
// // //       {/* Logo */}
// // //       <div className="flex h-[72px] items-center gap-3 px-6">
// // //         <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#4F8CFF] shadow-[0_0_20px_-4px_rgba(139,92,246,0.4)]">
// // //           <IconSparkles className="h-[18px] w-[18px] text-white" stroke={2} />
// // //         </div>
// // //         <span className="text-[15px] font-bold tracking-tight text-white">
// // //           CodeSentry <span className="text-[#4F8CFF]">AI</span>
// // //         </span>
// // //       </div>

// // //       {/* Nav */}
// // //       <nav className="flex-1 space-y-1 px-3 py-4">
// // //         {NAV.map(({ label, href, icon: Icon }) => {
// // //           const active = isActive(href);
// // //           return (
// // //             <Link
// // //               key={href}
// // //               href={href}
// // //               className={cn(
// // //                 "group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[13px] font-medium transition-all duration-200",
// // //                 active
// // //                   ? "bg-[#8B5CF6]/10 text-[#8B5CF6] ring-1 ring-[#8B5CF6]/20 shadow-[0_0_20px_-4px_rgba(139,92,246,0.25)]"
// // //                   : "text-[#94A3B8] hover:bg-white/[0.04] hover:text-white"
// // //               )}
// // //             >
// // //               <Icon
// // //                 className={cn(
// // //                   "h-[18px] w-[18px] flex-shrink-0 transition-colors",
// // //                   active && "text-[#8B5CF6]"
// // //                 )}
// // //                 stroke={active ? 2 : 1.5}
// // //               />
// // //               <span className="flex-1">{label}</span>
// // //               {active && (
// // //                 <div className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]" />
// // //               )}
// // //             </Link>
// // //           );
// // //         })}
// // //       </nav>

// // //       {/* Profile + Sign Out */}
// // //       <div className="space-y-2 p-3">
// // //         {user && (
// // //           <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[rgba(17,24,39,0.75)] px-3.5 py-3 backdrop-blur-[30px] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
// // //             <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#4F8CFF] text-[12px] font-bold text-white shadow-[0_0_16px_-2px_rgba(139,92,246,0.4)]">
// // //               {user.name.charAt(0).toUpperCase()}
// // //               <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#070B16] bg-[#22C55E]" />
// // //             </div>
// // //             <div className="min-w-0 flex-1">
// // //               <p className="truncate text-[13px] font-semibold text-white">
// // //                 {user.name}
// // //               </p>
// // //               <p className="truncate text-[11px] text-[#64748B]">
// // //                 {user.email}
// // //               </p>
// // //             </div>
// // //           </div>
// // //         )}

// // //         <button
// // //           onClick={signOut}
// // //           className="flex w-full items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-[13px] font-medium text-[#64748B] transition-all duration-200 hover:bg-[#EF4444]/10 hover:text-[#EF4444]"
// // //         >
// // //           <IconLogout className="h-[18px] w-[18px]" stroke={1.5} />
// // //           Sign Out
// // //         </button>
// // //       </div>
// // //     </aside>
// // //   );
// // // }









// // "use client";

// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import {
// //   IconLayoutDashboard,
// //   IconCirclePlus,
// //   IconBrandGithub,
// //   IconHistory,
// //   IconSettings,
// //   IconLogout,
// //   IconSparkles,
// // } from "@tabler/icons-react";
// // import { useAuth } from "@/context/AuthContext";
// // import { clsx, type ClassValue } from "clsx";
// // import { twMerge } from "tailwind-merge";

// // function cn(...inputs: ClassValue[]) {
// //   return twMerge(clsx(inputs));
// // }

// // const NAV = [
// //   { label: "Dashboard", href: "/dashboard", icon: IconLayoutDashboard },
// //   { label: "New Review", href: "/dashboard/review/new", icon: IconCirclePlus },
// //   { label: "Repositories", href: "/dashboard/repositories", icon: IconBrandGithub },
// //   { label: "Review History", href: "/dashboard/history", icon: IconHistory },
// //   { label: "Settings", href: "/dashboard/settings", icon: IconSettings },
// // ];

// // export default function Sidebar() {
// //   const pathname = usePathname();
// //   const { user, signOut } = useAuth();

// //   const isActive = (href: string) =>
// //     href === "/dashboard" ? pathname === href : pathname.startsWith(href);

// //   return (
// //     <aside
// //       className={cn(
// //         "fixed left-0 top-0 z-50 flex h-screen w-[280px] flex-col",
// //         "bg-[#0B1020]/90 backdrop-blur-[40px]",
// //         "border-r border-white/[0.05]",
// //         "shadow-[0_20px_60px_rgba(0,0,0,0.45)]",
// //         "rounded-r-[28px]",
// //         "overflow-hidden"
// //       )}
// //     >
// //       {/* Soft aurora glows behind the glass */}
// //       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
// //         <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18)_0%,transparent_70%)] blur-3xl" />
// //         <div className="absolute -right-16 bottom-32 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,140,255,0.14)_0%,transparent_70%)] blur-3xl" />
// //         {/* very subtle noise */}
// //         <div
// //           className="absolute inset-0 opacity-[0.03]"
// //           style={{
// //             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
// //           }}
// //         />
// //       </div>

// //       {/* ── Logo Area ── */}
// //       <div className="flex flex-col gap-1 px-6 pt-8 pb-6">
// //         <div className="flex items-center gap-3.5">
// //           {/* Glass logo square */}
// //           <div
// //             className={cn(
// //               "relative flex h-14 w-14 items-center justify-center rounded-2xl",
// //               "bg-gradient-to-br from-[#8B5CF6] to-[#4F8CFF]",
// //               "shadow-[0_0_28px_-4px_rgba(139,92,246,0.55)]",
// //               "ring-1 ring-white/10"
// //             )}
// //           >
// //             <IconSparkles className="h-6 w-6 text-white" stroke={2} />
// //             {/* soft inner highlight */}
// //             <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
// //           </div>

// //           <div className="min-w-0">
// //             <h1 className="text-[17px] font-bold tracking-tight">
// //               <span className="bg-gradient-to-r from-white to-[#C4B5FD] bg-clip-text text-transparent">
// //                 CodeSentry
// //               </span>{" "}
// //               <span className="bg-gradient-to-r from-[#8B5CF6] to-[#4F8CFF] bg-clip-text text-transparent">
// //                 AI
// //               </span>
// //             </h1>
// //             <p className="mt-0.5 text-[11px] font-medium tracking-wide text-[#64748B]">
// //               AI Code Review Platform
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ── Navigation ── */}
// //       <nav className="flex-1 space-y-1.5 overflow-y-auto px-3.5 py-2">
// //         {NAV.map(({ label, href, icon: Icon }, index) => {
// //           const active = isActive(href);

// //           return (
// //             <Link
// //               key={href}
// //               href={href}
// //               style={{
// //                 animationDelay: `${index * 40}ms`,
// //                 transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)",
// //               }}
// //               className={cn(
// //                 "group relative flex items-center gap-3.5 rounded-[18px] px-3.5 py-3.5 text-[14px] font-medium",
// //                 "transition-all duration-300",
// //                 "backdrop-blur-xl",
// //                 active
// //                   ? [
// //                       "bg-gradient-to-br from-[rgba(139,92,246,0.18)] to-[rgba(79,140,255,0.08)]",
// //                       "text-white",
// //                       "border border-[rgba(139,92,246,0.25)]",
// //                       "shadow-[0_0_40px_rgba(139,92,246,0.30)]",
// //                     ]
// //                   : [
// //                       "bg-white/[0.03]",
// //                       "text-[#94A3B8]",
// //                       "border border-transparent",
// //                       "hover:translate-x-1.5 hover:scale-[1.02]",
// //                       "hover:bg-white/[0.06] hover:text-white",
// //                       "hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]",
// //                     ]
// //               )}
// //             >
// //               {/* Left glowing indicator (active only) */}
// //               {active && (
// //                 <span className="absolute left-0 top-1/2 h-7 w-[3px] -translate-y-1/2 rounded-r-full bg-[#8B5CF6] shadow-[0_0_12px_#8B5CF6]" />
// //               )}

// //               <Icon
// //                 className={cn(
// //                   "h-5 w-5 flex-shrink-0 transition-all duration-300",
// //                   active
// //                     ? "text-[#A78BFA] scale-105"
// //                     : "text-[#94A3B8] group-hover:text-white group-hover:scale-110"
// //                 )}
// //                 stroke={active ? 2 : 1.5}
// //               />

// //               <span className="flex-1 truncate">{label}</span>

// //               {/* Right pulsing dot when active */}
// //               {active && (
// //                 <span className="relative flex h-2 w-2">
// //                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8B5CF6] opacity-60" />
// //                   <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]" />
// //                 </span>
// //               )}
// //             </Link>
// //           );
// //         })}
// //       </nav>

// //       {/* ── User Card + Sign Out ── */}
// //       <div className="mt-auto space-y-3 p-4">
// //         {user && (
// //           <div
// //             className={cn(
// //               "relative overflow-hidden rounded-[22px] p-4",
// //               "bg-[rgba(17,24,39,0.75)] backdrop-blur-[40px]",
// //               "border border-white/[0.06]",
// //               "shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
// //             )}
// //           >
// //             {/* soft inner glow */}
// //             <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)]" />

// //             <div className="relative flex items-center gap-3.5">
// //               {/* Avatar with gradient + online pulse */}
// //               <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#4F8CFF] text-[14px] font-bold text-white shadow-[0_0_20px_-2px_rgba(139,92,246,0.5)] ring-1 ring-white/10">
// //                 {user.name.charAt(0).toUpperCase()}
// //                 <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
// //                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-50" />
// //                   <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-[#0B1020] bg-[#22C55E]" />
// //                 </span>
// //               </div>

// //               <div className="min-w-0 flex-1">
// //                 <p className="truncate text-[13.5px] font-semibold text-white">
// //                   {user.name}
// //                 </p>
// //                 <p className="truncate text-[11.5px] text-[#64748B]">
// //                   {user.email}
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* Premium Sign Out */}
// //         <button
// //           onClick={signOut}
// //           className={cn(
// //             "group flex w-full items-center gap-3 rounded-[18px] px-4 py-3 text-[13.5px] font-medium",
// //             "bg-white/[0.03] text-[#64748B]",
// //             "border border-transparent",
// //             "transition-all duration-300",
// //             "hover:bg-[#EF4444]/[0.08] hover:text-[#F87171]",
// //             "hover:border-[#EF4444]/20",
// //             "hover:shadow-[0_0_24px_rgba(239,68,68,0.15)]",
// //             "active:scale-[0.98]"
// //           )}
// //           style={{ transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)" }}
// //         >
// //           <IconLogout
// //             className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:text-[#F87171]"
// //             stroke={1.5}
// //           />
// //           <span className="flex-1 text-left">Sign Out</span>
// //         </button>
// //       </div>
// //     </aside>
// //   );
// // }



// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   IconLayoutDashboard,
//   IconCirclePlus,
//   IconBrandGithub,
//   IconHistory,
//   IconSettings,
//   IconLogout,
//   IconSparkles,
// } from "@tabler/icons-react";
// import { useAuth } from "@/context/AuthContext";
// import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";

// function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// const NAV = [
//   { label: "Dashboard", href: "/dashboard", icon: IconLayoutDashboard },
//   { label: "New Review", href: "/dashboard/review/new", icon: IconCirclePlus },
//   { label: "Repositories", href: "/dashboard/repositories", icon: IconBrandGithub },
//   { label: "Review History", href: "/dashboard/history", icon: IconHistory },
//   { label: "Settings", href: "/dashboard/settings", icon: IconSettings },
// ];

// export default function Sidebar() {
//   const pathname = usePathname();
//   const { user, signOut } = useAuth();

//   const isActive = (href: string) =>
//     href === "/dashboard" ? pathname === href : pathname.startsWith(href);

//   return (
//     <aside
//       className={cn(
//         "fixed left-0 top-0 z-50 flex h-screen w-[272px] flex-col",
//         "border-r"
//       )}
//       style={{
//         background: "linear-gradient(180deg, #EFEAFC 0%, #F6F4FF 60%, #F8F7FF 100%)",
//         borderColor: "rgba(139,92,246,0.12)",
//       }}
//     >
//       {/* Soft ambient glows */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div
//           className="absolute -left-16 top-10 h-64 w-64 rounded-full blur-3xl opacity-60"
//           style={{ background: "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)" }}
//         />
//         <div
//           className="absolute -right-16 bottom-32 h-56 w-56 rounded-full blur-3xl opacity-50"
//           style={{ background: "radial-gradient(circle, rgba(79,140,255,0.12) 0%, transparent 70%)" }}
//         />
//       </div>

//       {/* ── Logo Area ── */}
//       <div className="flex flex-col gap-1 px-5 pt-7 pb-5">
//         <div className="flex items-center gap-3">
//           <div
//             className="relative flex h-12 w-12 items-center justify-center rounded-2xl shrink-0"
//             style={{
//               background: "linear-gradient(135deg, #8B5CF6, #4F8CFF)",
//               boxShadow: "0 8px 24px -6px rgba(139,92,246,0.45)",
//             }}
//           >
//             <IconSparkles className="h-5.5 w-5.5 text-white" stroke={2} />
//           </div>

//           <div className="min-w-0">
//             <h1 className="text-[16px] font-bold tracking-tight" style={{ color: "#11183A" }}>
//               CodeSentry <span style={{ color: "#8B5CF6" }}>AI</span>
//             </h1>
//             <p className="mt-0.5 text-[11px] font-medium tracking-wide" style={{ color: "#64748B" }}>
//               AI Code Review Platform
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ── Navigation ── */}
//       <nav className="flex-1 space-y-1.5 overflow-y-auto px-3.5 py-2">
//         {NAV.map(({ label, href, icon: Icon }) => {
//           const active = isActive(href);

//           return (
//             <Link
//               key={href}
//               href={href}
//               className="group relative flex items-center gap-3.5 rounded-2xl px-3.5 py-3 text-[14px] font-medium transition-all duration-300"
//               style={
//                 active
//                   ? {
//                       background: "rgba(255,255,255,0.85)",
//                       color: "#8B5CF6",
//                       boxShadow: "0 4px 16px -4px rgba(139,92,246,0.25)",
//                       border: "1px solid rgba(139,92,246,0.14)",
//                     }
//                   : {
//                       background: "transparent",
//                       color: "#64748B",
//                       border: "1px solid transparent",
//                     }
//               }
//               onMouseEnter={(e) => {
//                 if (!active) {
//                   e.currentTarget.style.background = "rgba(255,255,255,0.55)";
//                   e.currentTarget.style.color = "#11183A";
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 if (!active) {
//                   e.currentTarget.style.background = "transparent";
//                   e.currentTarget.style.color = "#64748B";
//                 }
//               }}
//             >
//               <Icon
//                 className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
//                 stroke={active ? 2 : 1.5}
//                 style={{ color: active ? "#8B5CF6" : "inherit" }}
//               />
//               <span className="flex-1 truncate">{label}</span>

//               {active && (
//                 <span
//                   className="h-1.5 w-1.5 rounded-full"
//                   style={{ background: "#8B5CF6", boxShadow: "0 0 8px #8B5CF6" }}
//                 />
//               )}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* ── User Card + Sign Out ── */}
//       <div className="mt-auto space-y-2.5 p-4">
//         {user && (
//           <div
//             className="flex items-center gap-3 rounded-2xl p-3.5"
//             style={{
//               background: "rgba(255,255,255,0.75)",
//               border: "1px solid rgba(139,92,246,0.12)",
//               boxShadow: "0 4px 16px -6px rgba(139,92,246,0.15)",
//             }}
//           >
//             <div
//               className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-[14px] font-bold text-white"
//               style={{ background: "linear-gradient(135deg, #8B5CF6, #4F8CFF)" }}
//             >
//               {user.name.charAt(0).toUpperCase()}
//               <span
//                 className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2"
//                 style={{ background: "#22C55E", borderColor: "#FFFFFF" }}
//               />
//             </div>

//             <div className="min-w-0 flex-1">
//               <p className="truncate text-[13px] font-semibold" style={{ color: "#11183A" }}>
//                 {user.name}
//               </p>
//               <p className="truncate text-[11px]" style={{ color: "#94A3B8" }}>
//                 {user.email}
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Sign Out */}
//         <button
//           onClick={signOut}
//           className="group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-[13.5px] font-medium transition-all duration-300"
//           style={{ background: "rgba(255,255,255,0.55)", color: "#64748B", border: "1px solid rgba(139,92,246,0.10)" }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.background = "rgba(239,68,68,0.08)";
//             e.currentTarget.style.color = "#EF4444";
//             e.currentTarget.style.borderColor = "rgba(239,68,68,0.20)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.background = "rgba(255,255,255,0.55)";
//             e.currentTarget.style.color = "#64748B";
//             e.currentTarget.style.borderColor = "rgba(139,92,246,0.10)";
//           }}
//         >
//           <IconLogout className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" stroke={1.5} />
//           <span className="flex-1 text-left">Sign Out</span>
//         </button>
//       </div>
//     </aside>
//   );
// }



"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconLayoutDashboard,
  IconCirclePlus,
  IconBrandGithub,
  IconHistory,
  IconSettings,
  IconLogout,
  IconSparkles,
} from "@tabler/icons-react";
import { useAuth } from "@/context/AuthContext";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV = [
  { label: "Dashboard", href: "/dashboard", icon: IconLayoutDashboard },
  { label: "New Review", href: "/dashboard/review/new", icon: IconCirclePlus },
  { label: "Repositories", href: "/dashboard/repositories", icon: IconBrandGithub },
  { label: "Review History", href: "/dashboard/history", icon: IconHistory },
  { label: "Settings", href: "/dashboard/settings", icon: IconSettings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { user, signOut } = useAuth();

  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === href : pathname.startsWith(href);

  return (
    <div className="relative h-full w-[280px] shrink-0">
      {/* Floating decorative orbs */}
      <div
        className="pointer-events-none absolute -right-6 top-[32%] h-14 w-14 rounded-full blur-[1px]"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95), rgba(167,139,250,0.35))",
          boxShadow: "0 12px 32px -8px rgba(139,92,246,0.45)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-3 bottom-[18%] h-6 w-6 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.9), rgba(139,92,246,0.25))",
        }}
      />
      <div
        className="pointer-events-none absolute -left-4 top-[55%] h-8 w-8 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.8), rgba(99,102,241,0.2))",
        }}
      />

      {/* ── Main Floating Card ── */}
      <aside
        className="absolute inset-3 flex flex-col overflow-hidden rounded-[28px]"
        style={{
          background: "linear-gradient(165deg, #F3EFFF 0%, #F7F4FF 45%, #FAF8FF 100%)",
          border: "1px solid rgba(139,92,246,0.13)",
          boxShadow: `
            0 32px 64px -16px rgba(139,92,246,0.32),
            0 12px 28px -10px rgba(139,92,246,0.22),
            0 4px 12px -4px rgba(139,92,246,0.12),
            inset 0 1px 0 rgba(255,255,255,0.7)
          `,
        }}
      >
        {/* Inner ambient glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -left-20 top-8 h-72 w-72 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -right-16 bottom-24 h-64 w-64 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(79,140,255,0.15) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* ── Logo ── */}
        <div className="relative z-10 flex items-center gap-3 px-5 pt-7 pb-6">
          <div
            className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #4F8CFF 100%)",
              boxShadow:
                "0 10px 28px -6px rgba(139,92,246,0.55), inset 0 1px 0 rgba(255,255,255,0.25)",
            }}
          >
            <IconSparkles className="h-5.5 w-5.5 text-white" stroke={2} />
          </div>
          <div className="min-w-0">
            <h1
              className="text-[16px] font-bold tracking-tight"
              style={{ color: "#11183A" }}
            >
              CodeSentry <span style={{ color: "#8B5CF6" }}>AI</span>
            </h1>
            <p
              className="mt-0.5 text-[11px] font-medium tracking-wide"
              style={{ color: "#64748B" }}
            >
              AI Code Review Platform
            </p>
          </div>
        </div>

        {/* ── Navigation ── */}
        <nav className="relative z-10 flex-1 space-y-1.5 overflow-y-auto px-3.5 py-1">
          {NAV.map(({ label, href, icon: Icon }) => {
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                className="group relative flex items-center gap-3.5 rounded-2xl px-3.5 py-3 text-[14px] font-medium transition-all duration-300"
                style={
                  active
                    ? {
                        background: "#FFFFFF",
                        color: "#8B5CF6",
                        boxShadow:
                          "0 8px 20px -6px rgba(139,92,246,0.38), 0 2px 6px -2px rgba(139,92,246,0.15)",
                        border: "1px solid rgba(139,92,246,0.16)",
                      }
                    : {
                        background: "transparent",
                        color: "#33395B",
                        border: "1px solid transparent",
                      }
                }
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.65)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px -4px rgba(139,92,246,0.15)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.boxShadow = "none";
                  }
                }}
              >
                {/* Active left accent bar */}
                {active && (
                  <span
                    className="absolute left-0 top-1/2 h-7 w-[3.5px] -translate-y-1/2 rounded-r-full"
                    style={{
                      background: "linear-gradient(180deg, #A78BFA, #8B5CF6)",
                      boxShadow: "0 0 12px rgba(139,92,246,0.7)",
                    }}
                  />
                )}

                <Icon
                  className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  stroke={active ? 2 : 1.5}
                  style={{ color: active ? "#8B5CF6" : "#5B6280" }}
                />
                <span className="flex-1 truncate">{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* ── User + Sign Out ── */}
        <div className="relative z-10 mt-auto space-y-2.5 p-4">
          {user && (
            <div
              className="flex items-center gap-3 rounded-2xl p-3.5"
              style={{
                background: "rgba(255,255,255,0.78)",
                border: "1px solid rgba(139,92,246,0.12)",
                boxShadow: "0 6px 18px -6px rgba(139,92,246,0.18)",
              }}
            >
              <div
                className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-[14px] font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #8B5CF6, #4F8CFF)",
                  boxShadow: "0 4px 12px -3px rgba(139,92,246,0.45)",
                }}
              >
                {user.name.charAt(0).toUpperCase()}
                <span
                  className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2"
                  style={{ background: "#22C55E", borderColor: "#FFFFFF" }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <p
                  className="truncate text-[13px] font-semibold"
                  style={{ color: "#11183A" }}
                >
                  {user.name}
                </p>
                <p className="truncate text-[11px]" style={{ color: "#94A3B8" }}>
                  {user.email}
                </p>
              </div>
            </div>
          )}

          {/* Sign Out Button */}
          <button
            onClick={signOut}
            className="group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-[13.5px] font-medium transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.55)",
              color: "#64748B",
              border: "1px solid rgba(139,92,246,0.10)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(239,68,68,0.09)";
              e.currentTarget.style.color = "#EF4444";
              e.currentTarget.style.borderColor = "rgba(239,68,68,0.22)";
              e.currentTarget.style.boxShadow =
                "0 4px 14px -4px rgba(239,68,68,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.55)";
              e.currentTarget.style.color = "#64748B";
              e.currentTarget.style.borderColor = "rgba(139,92,246,0.10)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <IconLogout
              className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5"
              stroke={1.5}
            />
            <span className="flex-1 text-left">Sign Out</span>
          </button>
        </div>
      </aside>
    </div>
  );
}