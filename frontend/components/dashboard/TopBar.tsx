// "use client";

// import { usePathname } from "next/navigation";
// import { IconBell, IconCirclePlus } from "@tabler/icons-react";
// import Link from "next/link";
// import { useAuth } from "@/context/AuthContext";

// const ACCENT = "#ccff00";

// const PAGE_TITLES: Record<string, string> = {
//   "/dashboard": "Dashboard",
//   "/dashboard/review/new": "New Review",
//   "/dashboard/repositories": "My Repositories",
//   "/dashboard/history": "Review History",
//   "/dashboard/settings": "Settings",
// };

// export default function TopBar() {
//   const pathname = usePathname();
//   const { user } = useAuth();

//   const title =
//     Object.entries(PAGE_TITLES).find(([key]) =>
//       key === "/dashboard" ? pathname === key : pathname.startsWith(key)
//     )?.[1] ?? "Dashboard";

//   return (
//     <header
//       className="flex h-[72px] shrink-0 items-center justify-between px-6 backdrop-blur-md"
//       style={{
//         background: "rgba(5,5,5,0.85)",
//         borderBottom: "1px solid rgba(204,255,0,0.12)",
//       }}
//     >
//       {/* ── Title ── */}
//       <h1 className="text-[13px] font-black uppercase tracking-[0.25em] text-white">{title}</h1>

//       {/* ── Right Actions ── */}
//       <div className="flex items-center gap-3">
//         <Link
//           href="/dashboard/repositories"
//           className="hidden sm:flex items-center gap-2 px-4 py-2 text-[12px] font-black uppercase tracking-widest text-black transition-all hover:opacity-80"
//           style={{
//             background: ACCENT,
//             clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
//           }}
//         >
//           <IconCirclePlus className="h-4 w-4" stroke={2} />
//           New Review
//         </Link>

//         {/* Notification Bell */}
//         <button
//           className="relative flex h-9 w-9 items-center justify-center transition-all hover:border-[#ccff00]/30"
//           style={{
//             border: "1px solid rgba(255,255,255,0.1)",
//             background: "rgba(255,255,255,0.03)",
//             color: "#71717a",
//           }}
//           aria-label="Notifications"
//         >
//           <IconBell className="h-4 w-4" stroke={1.75} />
//           <span
//             className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full"
//             style={{ background: ACCENT }}
//           />
//         </button>

//         {/* User Avatar */}
//         {user && (
//           <div
//             className="flex h-9 w-9 items-center justify-center text-sm font-black text-black"
//             style={{
//               background: ACCENT,
//               clipPath: "polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)",
//             }}
//           >
//             {user.name.charAt(0).toUpperCase()}
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }



"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  IconBell,
  IconCirclePlus,
  IconSparkles,
} from "@tabler/icons-react";
import { useAuth } from "@/context/AuthContext";

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

  const title =
    Object.entries(PAGE_TITLES).find(([key]) =>
      key === "/dashboard"
        ? pathname === key
        : pathname.startsWith(key)
    )?.[1] ?? "Dashboard";

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-white/10 bg-[#050816]/90 px-8 backdrop-blur-2xl">

      {/* LEFT */}

      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-[0.30em] text-[#4F8CFF] font-semibold">
          CodeSentry AI
        </span>

        <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">
          {title}
        </h1>
      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-4">

        {/* AI REVIEW BUTTON */}

        <Link
          href="/dashboard/repositories"
          className="group hidden items-center gap-2 rounded-xl border border-[#5B5FFF]/30 bg-gradient-to-r from-[#5B5FFF] via-[#6366F1] to-[#4F8CFF] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#5B5FFF]/20 transition-all duration-300 hover:scale-105 hover:shadow-[#5B5FFF]/40 sm:flex"
        >
          <IconSparkles
            className="h-4 w-4 transition-transform group-hover:rotate-12"
          />
          New Review
        </Link>

        {/* Notification */}

        <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 backdrop-blur-xl transition-all duration-300 hover:border-[#5B5FFF]/40 hover:bg-[#5B5FFF]/10 hover:text-white">

          <IconBell className="h-5 w-5" />

          <span className="absolute right-3 top-3 flex h-2.5 w-2.5">

            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D4FF] opacity-75" />

            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00D4FF]" />

          </span>

        </button>

        {/* User */}

        {user && (
          <button className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur-xl transition-all duration-300 hover:border-[#5B5FFF]/40 hover:bg-white/[0.07]">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#5B5FFF] via-[#4F8CFF] to-[#00D4FF] text-sm font-bold text-white shadow-lg shadow-[#5B5FFF]/25">

              {user.name.charAt(0).toUpperCase()}

            </div>

            <div className="hidden text-left lg:block">

              <p className="text-sm font-semibold text-white">
                {user.name}
              </p>

              <p className="text-xs text-slate-400">
                AI Developer
              </p>

            </div>

          </button>
        )}

      </div>
    </header>
  );
}