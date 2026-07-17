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

const NAV = [
  { label: "Dashboard",      href: "/dashboard",               icon: IconLayoutDashboard },
  { label: "New Review",     href: "/dashboard/review/new",    icon: IconCirclePlus      },
  { label: "Repositories",   href: "/dashboard/repositories",  icon: IconBrandGithub     },
  { label: "Review History", href: "/dashboard/history",       icon: IconHistory         },
  { label: "Settings",       href: "/dashboard/settings",      icon: IconSettings        },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { user, signOut } = useAuth();

  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === href : pathname.startsWith(href);

  return (
    <aside className="flex h-full w-60 flex-col bg-[#060816] border-r border-white/[0.08]">
      {/* ── Logo ── */}
      <div className="flex h-[72px] items-center gap-2.5 px-5 border-b border-white/[0.08]">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#5B5FFF] to-[#6F4CFF] shadow-[0_0_20px_rgba(91,95,255,0.5)]">
          <IconSparkles className="h-4.5 w-4.5 text-white" stroke={2} />
        </div>
        <span className="text-[15px] font-bold tracking-tight text-white">
          CodeSentry <span className="text-[#8B8FFF]">AI</span>
        </span>
      </div>

      {/* ── Nav ── */}
      <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-1">
        {NAV.map(({ label, href, icon: Icon }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
                active
                  ? "bg-[#5B5FFF]/10 border border-[#5B5FFF]/25 text-[#8B8FFF]"
                  : "border border-transparent text-[#7B859E] hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              <Icon
                className={`h-4.5 w-4.5 flex-shrink-0 transition-colors ${active ? "text-[#8B8FFF]" : ""}`}
                stroke={1.75}
              />
              <span className="flex-1 text-[13px]">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* ── User + Sign Out ── */}
      <div className="p-3 space-y-2 border-t border-white/[0.08]">
        {user && (
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#5B5FFF] to-[#6F4CFF] text-sm font-bold text-white">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-white">{user.name}</p>
              <p className="truncate text-[11px] text-[#7B859E]">{user.email}</p>
            </div>
          </div>
        )}
        <button
          onClick={signOut}
          className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-[#7B859E] transition-colors hover:bg-[#EF4444]/10 hover:text-[#EF4444]"
        >
          <IconLogout className="h-4.5 w-4.5" stroke={1.75} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}