// "use client";

// import { useState, useEffect } from "react";
// import { IconBrandGithub, IconSearch, IconFilter, IconStar, IconScan, IconLoader2 } from "@tabler/icons-react";
// import { LANGUAGE_COLORS } from "@/lib/mock-data";
// import { cn } from "@/lib/utils";
// import { useAuth } from "@/context/AuthContext";
// import Link from "next/link";

// export default function RepositoriesPage() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [languageFilter, setLanguageFilter] = useState("All");
//   const [repos, setRepos] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const { user } = useAuth();

//   useEffect(() => {
//     async function fetchRepos() {
//       if (!user?.githubConnected) {
//         setLoading(false);
//         return;
//       }
      
//       try {
//         const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
//         const token = tokenMatch ? tokenMatch[2] : null;
        
//         if (!token) throw new Error("Not authenticated");

//         const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
//         const res = await fetch(`${API_URL}/api/github/repos`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
        
//         if (!res.ok) {
//           throw new Error("Failed to fetch repositories");
//         }
        
//         const data = await res.json();
//         setRepos(data);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }
    
//     fetchRepos();
//   }, [user]);

//   const filteredRepos = repos.filter((repo) => {
//     const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesLanguage = languageFilter === "All" || repo.language === languageFilter;
//     return matchesSearch && matchesLanguage;
//   });

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-[50vh]">
//         <IconLoader2 className="w-8 h-8 animate-spin text-violet-500" />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg">
//         {error}
//       </div>
//     );
//   }

//   if (!user?.githubConnected) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[50vh] text-center max-w-md mx-auto">
//         <IconBrandGithub className="w-12 h-12 text-zinc-600 mb-4" />
//         <h2 className="text-xl font-bold text-white mb-2">Connect GitHub</h2>
//         <p className="text-zinc-400 mb-6">You need to connect your GitHub account to view and scan your repositories.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       {/* ── Header & Filters ── */}
//       <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
//         <div className="relative flex-1 max-w-md w-full">
//           <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 z-10 pointer-events-none" />
//           <input
//             type="text"
//             placeholder="Search repositories..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-all backdrop-blur-sm"
//           />
//         </div>
//         <div className="relative shrink-0">
//           <IconFilter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 z-10 pointer-events-none" />
//           <select
//             value={languageFilter}
//             onChange={(e) => setLanguageFilter(e.target.value)}
//             style={{ colorScheme: "dark" }}
//             className="appearance-none rounded-xl border border-white/10 bg-zinc-900 pl-10 pr-10 py-2 text-sm text-white focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-all"
//           >
//             <option value="All" className="bg-zinc-900 text-white">All Languages</option>
//             <option value="TypeScript" className="bg-zinc-900 text-white">TypeScript</option>
//             <option value="Python" className="bg-zinc-900 text-white">Python</option>
//             <option value="Go" className="bg-zinc-900 text-white">Go</option>
//             <option value="Rust" className="bg-zinc-900 text-white">Rust</option>
//           </select>
//         </div>
//       </div>

//       {/* ── Repo Grid ── */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredRepos.map((repo) => (
//           <div
//             key={repo.id}
//             className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-violet-500/30"
//           >
//             <div className="flex items-start justify-between mb-4">
//               <div className="flex items-center gap-3">
//                 <IconBrandGithub className="h-6 w-6 text-zinc-400 group-hover:text-white transition-colors" />
//                 <h3 className="text-base font-semibold text-white">{repo.name}</h3>
//               </div>
//               <span
//                 className={cn(
//                   "rounded-full border px-2 py-0.5 text-[10px] font-medium",
//                   repo.private
//                     ? "border-orange-500/30 bg-orange-500/10 text-orange-400"
//                     : "border-green-500/30 bg-green-500/10 text-green-400"
//                 )}
//               >
//                 {repo.private ? "Private" : "Public"}
//               </span>
//             </div>

//             <div className="mb-6 flex items-center gap-4 text-xs text-zinc-400">
//               <span className={cn("flex items-center gap-1.5 rounded-full px-2 py-0.5 font-medium border", LANGUAGE_COLORS[repo.language] || LANGUAGE_COLORS.default)}>
//                 {repo.language}
//               </span>
//               {repo.stars > 0 && (
//                 <span className="flex items-center gap-1">
//                   <IconStar className="h-3.5 w-3.5 text-yellow-500" />
//                   {repo.stars}
//                 </span>
//               )}
//             </div>

//             <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
//               <div className="flex flex-col">
//                 <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold mb-0.5">Updated</span>
//                 <span className="text-xs font-medium text-zinc-300">{new Date(repo.updated_at).toLocaleDateString()}</span>
//               </div>
//               <Link 
//                 href={`/dashboard/review/scan?owner=${repo.full_name.split('/')[0]}&repo=${repo.name}`}
//                 className="flex items-center gap-1.5 rounded-lg bg-violet-600/20 px-3 py-1.5 text-xs font-semibold text-violet-300 transition-colors hover:bg-violet-600/40"
//               >
//                 <IconScan className="h-3.5 w-3.5" />
//                 Scan Now
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import {
  IconBrandGithub,
  IconSearch,
  IconFilter,
  IconStar,
  IconScan,
  IconLoader2,
  IconGitFork,
  IconAlertCircle,
  IconExclamationCircle,
  IconRefresh,
  IconChevronDown,
  IconExternalLink,
  IconCircleCheck,
} from "@tabler/icons-react";
import { LANGUAGE_COLORS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

/* ---------- Design tokens (local, no config changes) ---------- */
const LANG_STYLES: Record<string, string> = {
  TypeScript: "from-blue-500/20 to-blue-400/5 text-blue-300 ring-blue-400/20",
  JavaScript: "from-yellow-400/20 to-yellow-300/5 text-yellow-200 ring-yellow-300/20",
  Python: "from-cyan-400/20 to-cyan-300/5 text-cyan-200 ring-cyan-300/20",
  Go: "from-teal-400/20 to-teal-300/5 text-teal-200 ring-teal-300/20",
  Rust: "from-orange-500/20 to-orange-400/5 text-orange-200 ring-orange-400/20",
  Java: "from-red-500/20 to-red-400/5 text-red-200 ring-red-400/20",
};
const langStyle = (l?: string) =>
  (l && LANG_STYLES[l]) || "from-zinc-500/15 to-zinc-400/5 text-zinc-300 ring-white/10";

/* ---------- Reusable background ---------- */
function DashboardBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050816]">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 50% 20%, black 40%, transparent 75%)",
        }}
      />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#4F8CFF]/20 blur-[140px]" />
      <div className="absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-[#6366F1]/25 blur-[130px]" />
      <div className="absolute bottom-0 -left-32 h-[360px] w-[360px] rounded-full bg-[#6366F1]/15 blur-[120px]" />
    </div>
  );
}

/* ---------- Skeleton card ---------- */
function RepoSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-xl">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-white/5" />
        <div className="h-4 w-40 rounded bg-white/5" />
      </div>
      <div className="mt-6 h-3 w-full rounded bg-white/5" />
      <div className="mt-2 h-3 w-2/3 rounded bg-white/5" />
      <div className="mt-6 flex gap-2">
        <div className="h-6 w-20 rounded-full bg-white/5" />
        <div className="h-6 w-12 rounded-full bg-white/5" />
      </div>
      <div className="mt-8 h-10 w-full rounded-xl bg-white/5" />
      <style>{`@keyframes shimmer{100%{transform:translateX(100%)}}`}</style>
    </div>
  );
}

export default function RepositoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [languageFilter, setLanguageFilter] = useState("All");
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    async function fetchRepos() {
      if (!user?.githubConnected) {
        setLoading(false);
        return;
      }

      try {
        const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
        const token = tokenMatch ? tokenMatch[2] : null;

        if (!token) throw new Error("Not authenticated");

        const API_URL =
          process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
        const res = await fetch(`${API_URL}/api/github/repos`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data = await res.json();
        setRepos(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [user]);

  const filteredRepos = repos.filter((repo) => {
    const matchesSearch = repo.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesLanguage =
      languageFilter === "All" || repo.language === languageFilter;
    return matchesSearch && matchesLanguage;
  });

  /* ---------- Loading ---------- */
  if (loading) {
    return (
      <div className="relative min-h-screen text-white">
        <DashboardBackdrop />
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="h-10 w-56 animate-pulse rounded-lg bg-white/5" />
          <div className="mt-3 h-4 w-96 animate-pulse rounded bg-white/5" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <RepoSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ---------- Error ---------- */
  if (error) {
    return (
      <div className="relative min-h-screen text-white">
        <DashboardBackdrop />
        <div className="mx-auto flex min-h-screen max-w-xl items-center px-6">
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0E1425]/70 p-6 backdrop-blur-xl">
            <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-red-400 to-red-600" />
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 ring-1 ring-red-400/20">
                <IconExclamationCircle className="h-5 w-5 text-red-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold">Something went wrong</h3>
                <p className="mt-1 text-sm text-[#AAB3C5]">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <IconRefresh className="h-4 w-4" /> Retry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- Not connected ---------- */
  if (!user?.githubConnected) {
    return (
      <div className="relative min-h-screen text-white">
        <DashboardBackdrop />
        <div className="mx-auto flex min-h-screen max-w-lg items-center px-6">
          <div className="relative w-full overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0E1425]/70 p-10 text-center backdrop-blur-xl">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent [mask:linear-gradient(black,transparent)]" />
            <div className="relative">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_60px_-10px_rgba(99,102,241,0.5)]">
                <IconBrandGithub className="h-10 w-10 text-white" />
              </div>
              <h2 className="mt-6 text-2xl font-semibold tracking-tight">
                Connect GitHub
              </h2>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-[#AAB3C5]">
                Connect your GitHub account to access repositories and start
                AI-powered code reviews.
              </p>
              <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.8)] transition hover:brightness-110 hover:-translate-y-0.5">
                <IconBrandGithub className="h-4 w-4" /> Connect GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- Main ---------- */
  return (
    <div className="relative min-h-screen text-white">
      <DashboardBackdrop />

      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* ── Header ── */}
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-[40px] font-semibold leading-tight tracking-tight">
              Repositories
            </h1>
            <p className="mt-2 max-w-xl text-[15px] text-[#AAB3C5]">
              Manage and scan your GitHub repositories using AI-powered code
              analysis.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-[#AAB3C5] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
              {repos.length} {repos.length === 1 ? "repo" : "repos"}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur">
              <IconCircleCheck className="h-3.5 w-3.5" /> GitHub Connected
            </span>
          </div>
        </header>

        {/* ── Filters ── */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <div className="group relative flex-1">
            <IconSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A8499] transition group-focus-within:text-[#4F8CFF]" />
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-white placeholder:text-[#7A8499] backdrop-blur-xl transition-all focus:border-[#4F8CFF]/50 focus:outline-none focus:ring-4 focus:ring-[#4F8CFF]/10"
            />
          </div>

          <div className="relative">
            <IconFilter className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A8499]" />
            <IconChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A8499]" />
            <select
              value={languageFilter}
              onChange={(e) => setLanguageFilter(e.target.value)}
              style={{ colorScheme: "dark" }}
              className="appearance-none rounded-2xl border border-white/[0.08] bg-[#0A1020]/80 py-3 pl-11 pr-11 text-sm font-medium text-white backdrop-blur-xl transition-all hover:bg-[#131C33] focus:border-[#4F8CFF]/50 focus:outline-none focus:ring-4 focus:ring-[#4F8CFF]/10"
            >
              <option value="All">All Languages</option>
              <option value="TypeScript">TypeScript</option>
              <option value="Python">Python</option>
              <option value="Go">Go</option>
              <option value="Rust">Rust</option>
            </select>
          </div>
        </div>

        {/* ── Repo Grid ── */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRepos.map((repo, idx) => (
            <div
              key={repo.id ?? repo.name}
              style={{ animationDelay: `${idx * 60}ms` }}
              className="group relative flex animate-[fadeUp_0.5s_ease-out_both] flex-col overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0E1425]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-[#131C33]/80 hover:shadow-[0_20px_60px_-20px_rgba(79,140,255,0.35)]"
            >
              {/* glow border */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4F8CFF]/10 via-transparent to-[#6366F1]/10" />
              </div>

              {/* Top */}
              <div className="relative flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur">
                    <IconBrandGithub className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="truncate text-[20px] font-semibold tracking-tight">
                    {repo.name}
                  </h3>
                </div>
                <span
                  className={cn(
                    "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 backdrop-blur",
                    repo.private
                      ? "bg-amber-500/10 text-amber-300 ring-amber-400/20"
                      : "bg-emerald-500/10 text-emerald-300 ring-emerald-400/20",
                  )}
                >
                  {repo.private ? "Private" : "Public"}
                </span>
              </div>

              {/* Meta */}
              <div className="relative mt-5 flex flex-wrap items-center gap-2">
                {repo.language && (
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r px-2.5 py-1 text-[11px] font-medium ring-1",
                      langStyle(repo.language),
                    )}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
                    {repo.language}
                  </span>
                )}
                {repo.stars > 0 && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-[#AAB3C5]">
                    <IconStar className="h-3 w-3" />
                    {repo.stars}
                  </span>
                )}
              </div>

              {/* Bottom */}
              <div className="relative mt-auto pt-6">
                <div className="flex items-center justify-between text-[12px] text-[#7A8499]">
                  <span>Updated</span>
                  <span className="text-[#AAB3C5]">
                    {new Date(repo.updated_at).toLocaleDateString()}
                  </span>
                </div>
                <button className="group/btn mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#6366F1] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(99,102,241,0.7)] transition-all hover:brightness-110 hover:shadow-[0_14px_40px_-12px_rgba(99,102,241,0.9)]">
                  <IconScan className="h-4 w-4 transition-transform group-hover/btn:rotate-12" />
                  Scan Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
