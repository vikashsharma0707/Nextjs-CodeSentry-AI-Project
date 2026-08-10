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
    <aside
      className={cn(
        "fixed left-0 top-0 z-50 flex h-screen w-[272px] flex-col",
        "border-r"
      )}
      style={{
        background: "linear-gradient(180deg, #EFEAFC 0%, #F6F4FF 60%, #F8F7FF 100%)",
        borderColor: "rgba(139,92,246,0.12)",
      }}
    >
      {/* Soft ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-16 top-10 h-64 w-64 rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -right-16 bottom-32 h-56 w-56 rounded-full blur-3xl opacity-50"
          style={{ background: "radial-gradient(circle, rgba(79,140,255,0.12) 0%, transparent 70%)" }}
        />
      </div>

      {/* ── Logo Area ── */}
      <div className="flex flex-col gap-1 px-5 pt-7 pb-5">
        <div className="flex items-center gap-3">
          <div
            className="relative flex h-12 w-12 items-center justify-center rounded-2xl shrink-0"
            style={{
              background: "linear-gradient(135deg, #8B5CF6, #4F8CFF)",
              boxShadow: "0 8px 24px -6px rgba(139,92,246,0.45)",
            }}
          >
            <IconSparkles className="h-5.5 w-5.5 text-white" stroke={2} />
          </div>

          <div className="min-w-0">
            <h1 className="text-[16px] font-bold tracking-tight" style={{ color: "#11183A" }}>
              CodeSentry <span style={{ color: "#8B5CF6" }}>AI</span>
            </h1>
            <p className="mt-0.5 text-[11px] font-medium tracking-wide" style={{ color: "#64748B" }}>
              AI Code Review Platform
            </p>
          </div>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav className="flex-1 space-y-1.5 overflow-y-auto px-3.5 py-2">
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
                      background: "rgba(255,255,255,0.85)",
                      color: "#8B5CF6",
                      boxShadow: "0 4px 16px -4px rgba(139,92,246,0.25)",
                      border: "1px solid rgba(139,92,246,0.14)",
                    }
                  : {
                      background: "transparent",
                      color: "#64748B",
                      border: "1px solid transparent",
                    }
              }
              onMouseEnter={(e) => {
                if (!active) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.55)";
                  e.currentTarget.style.color = "#11183A";
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#64748B";
                }
              }}
            >
              <Icon
                className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                stroke={active ? 2 : 1.5}
                style={{ color: active ? "#8B5CF6" : "inherit" }}
              />
              <span className="flex-1 truncate">{label}</span>

              {active && (
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "#8B5CF6", boxShadow: "0 0 8px #8B5CF6" }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* ── User Card + Sign Out ── */}
      <div className="mt-auto space-y-2.5 p-4">
        {user && (
          <div
            className="flex items-center gap-3 rounded-2xl p-3.5"
            style={{
              background: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(139,92,246,0.12)",
              boxShadow: "0 4px 16px -6px rgba(139,92,246,0.15)",
            }}
          >
            <div
              className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-[14px] font-bold text-white"
              style={{ background: "linear-gradient(135deg, #8B5CF6, #4F8CFF)" }}
            >
              {user.name.charAt(0).toUpperCase()}
              <span
                className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2"
                style={{ background: "#22C55E", borderColor: "#FFFFFF" }}
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold" style={{ color: "#11183A" }}>
                {user.name}
              </p>
              <p className="truncate text-[11px]" style={{ color: "#94A3B8" }}>
                {user.email}
              </p>
            </div>
          </div>
        )}

        {/* Sign Out */}
        <button
          onClick={signOut}
          className="group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-[13.5px] font-medium transition-all duration-300"
          style={{ background: "rgba(255,255,255,0.55)", color: "#64748B", border: "1px solid rgba(139,92,246,0.10)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(239,68,68,0.08)";
            e.currentTarget.style.color = "#EF4444";
            e.currentTarget.style.borderColor = "rgba(239,68,68,0.20)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.55)";
            e.currentTarget.style.color = "#64748B";
            e.currentTarget.style.borderColor = "rgba(139,92,246,0.10)";
          }}
        >
          <IconLogout className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" stroke={1.5} />
          <span className="flex-1 text-left">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}