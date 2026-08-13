// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import { IconBrandGithub, IconSearch, IconFilter, IconStar, IconScan, IconLoader2 } from "@tabler/icons-react";
// // // import { LANGUAGE_COLORS } from "@/lib/mock-data";
// // // import { cn } from "@/lib/utils";
// // // import { useAuth } from "@/context/AuthContext";
// // // import Link from "next/link";

// // // export default function RepositoriesPage() {
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [languageFilter, setLanguageFilter] = useState("All");
// // //   const [repos, setRepos] = useState<any[]>([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState<string | null>(null);
// // //   const { user } = useAuth();

// // //   useEffect(() => {
// // //     async function fetchRepos() {
// // //       if (!user?.githubConnected) {
// // //         setLoading(false);
// // //         return;
// // //       }
      
// // //       try {
// // //         const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
// // //         const token = tokenMatch ? tokenMatch[2] : null;
        
// // //         if (!token) throw new Error("Not authenticated");

// // //         const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
// // //         const res = await fetch(`${API_URL}/api/github/repos`, {
// // //           headers: { Authorization: `Bearer ${token}` }
// // //         });
        
// // //         if (!res.ok) {
// // //           throw new Error("Failed to fetch repositories");
// // //         }
        
// // //         const data = await res.json();
// // //         setRepos(data);
// // //       } catch (err: any) {
// // //         setError(err.message);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     }
    
// // //     fetchRepos();
// // //   }, [user]);

// // //   const filteredRepos = repos.filter((repo) => {
// // //     const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase());
// // //     const matchesLanguage = languageFilter === "All" || repo.language === languageFilter;
// // //     return matchesSearch && matchesLanguage;
// // //   });

// // //   if (loading) {
// // //     return (
// // //       <div className="flex items-center justify-center min-h-[50vh]">
// // //         <IconLoader2 className="w-8 h-8 animate-spin text-violet-500" />
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg">
// // //         {error}
// // //       </div>
// // //     );
// // //   }

// // //   if (!user?.githubConnected) {
// // //     return (
// // //       <div className="flex flex-col items-center justify-center min-h-[50vh] text-center max-w-md mx-auto">
// // //         <IconBrandGithub className="w-12 h-12 text-zinc-600 mb-4" />
// // //         <h2 className="text-xl font-bold text-white mb-2">Connect GitHub</h2>
// // //         <p className="text-zinc-400 mb-6">You need to connect your GitHub account to view and scan your repositories.</p>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="space-y-6">
// // //       {/* ── Header & Filters ── */}
// // //       <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
// // //         <div className="relative flex-1 max-w-md w-full">
// // //           <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 z-10 pointer-events-none" />
// // //           <input
// // //             type="text"
// // //             placeholder="Search repositories..."
// // //             value={searchQuery}
// // //             onChange={(e) => setSearchQuery(e.target.value)}
// // //             className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-all backdrop-blur-sm"
// // //           />
// // //         </div>
// // //         <div className="relative shrink-0">
// // //           <IconFilter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 z-10 pointer-events-none" />
// // //           <select
// // //             value={languageFilter}
// // //             onChange={(e) => setLanguageFilter(e.target.value)}
// // //             style={{ colorScheme: "dark" }}
// // //             className="appearance-none rounded-xl border border-white/10 bg-zinc-900 pl-10 pr-10 py-2 text-sm text-white focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-all"
// // //           >
// // //             <option value="All" className="bg-zinc-900 text-white">All Languages</option>
// // //             <option value="TypeScript" className="bg-zinc-900 text-white">TypeScript</option>
// // //             <option value="Python" className="bg-zinc-900 text-white">Python</option>
// // //             <option value="Go" className="bg-zinc-900 text-white">Go</option>
// // //             <option value="Rust" className="bg-zinc-900 text-white">Rust</option>
// // //           </select>
// // //         </div>
// // //       </div>

// // //       {/* ── Repo Grid ── */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //         {filteredRepos.map((repo) => (
// // //           <div
// // //             key={repo.id}
// // //             className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-violet-500/30"
// // //           >
// // //             <div className="flex items-start justify-between mb-4">
// // //               <div className="flex items-center gap-3">
// // //                 <IconBrandGithub className="h-6 w-6 text-zinc-400 group-hover:text-white transition-colors" />
// // //                 <h3 className="text-base font-semibold text-white">{repo.name}</h3>
// // //               </div>
// // //               <span
// // //                 className={cn(
// // //                   "rounded-full border px-2 py-0.5 text-[10px] font-medium",
// // //                   repo.private
// // //                     ? "border-orange-500/30 bg-orange-500/10 text-orange-400"
// // //                     : "border-green-500/30 bg-green-500/10 text-green-400"
// // //                 )}
// // //               >
// // //                 {repo.private ? "Private" : "Public"}
// // //               </span>
// // //             </div>

// // //             <div className="mb-6 flex items-center gap-4 text-xs text-zinc-400">
// // //               <span className={cn("flex items-center gap-1.5 rounded-full px-2 py-0.5 font-medium border", LANGUAGE_COLORS[repo.language] || LANGUAGE_COLORS.default)}>
// // //                 {repo.language}
// // //               </span>
// // //               {repo.stars > 0 && (
// // //                 <span className="flex items-center gap-1">
// // //                   <IconStar className="h-3.5 w-3.5 text-yellow-500" />
// // //                   {repo.stars}
// // //                 </span>
// // //               )}
// // //             </div>

// // //             <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
// // //               <div className="flex flex-col">
// // //                 <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold mb-0.5">Updated</span>
// // //                 <span className="text-xs font-medium text-zinc-300">{new Date(repo.updated_at).toLocaleDateString()}</span>
// // //               </div>
// // //               <Link 
// // //                 href={`/dashboard/review/scan?owner=${repo.full_name.split('/')[0]}&repo=${repo.name}`}
// // //                 className="flex items-center gap-1.5 rounded-lg bg-violet-600/20 px-3 py-1.5 text-xs font-semibold text-violet-300 transition-colors hover:bg-violet-600/40"
// // //               >
// // //                 <IconScan className="h-3.5 w-3.5" />
// // //                 Scan Now
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { useState, useEffect } from "react";
// // import {
// //   IconBrandGithub,
// //   IconSearch,
// //   IconFilter,
// //   IconStar,
// //   IconScan,
// //   IconLoader2,
// //   IconGitFork,
// //   IconAlertCircle,
// //   IconExclamationCircle,
// //   IconRefresh,
// //   IconChevronDown,
// //   IconExternalLink,
// //   IconCircleCheck,
// // } from "@tabler/icons-react";
// // import { LANGUAGE_COLORS } from "@/lib/mock-data";
// // import { cn } from "@/lib/utils";
// // import { useAuth } from "@/context/AuthContext";
// // import Link from "next/link";

// // /* ---------- Design tokens (local, no config changes) ---------- */
// // const LANG_STYLES: Record<string, string> = {
// //   TypeScript: "from-blue-500/20 to-blue-400/5 text-blue-300 ring-blue-400/20",
// //   JavaScript: "from-yellow-400/20 to-yellow-300/5 text-yellow-200 ring-yellow-300/20",
// //   Python: "from-cyan-400/20 to-cyan-300/5 text-cyan-200 ring-cyan-300/20",
// //   Go: "from-teal-400/20 to-teal-300/5 text-teal-200 ring-teal-300/20",
// //   Rust: "from-orange-500/20 to-orange-400/5 text-orange-200 ring-orange-400/20",
// //   Java: "from-red-500/20 to-red-400/5 text-red-200 ring-red-400/20",
// // };
// // const langStyle = (l?: string) =>
// //   (l && LANG_STYLES[l]) || "from-zinc-500/15 to-zinc-400/5 text-zinc-300 ring-white/10";

// // /* ---------- Reusable background ---------- */
// // function DashboardBackdrop() {
// //   return (
// //     <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050816]">
// //       <div
// //         className="absolute inset-0 opacity-[0.35]"
// //         style={{
// //           backgroundImage:
// //             "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
// //           backgroundSize: "48px 48px",
// //           maskImage:
// //             "radial-gradient(ellipse at 50% 20%, black 40%, transparent 75%)",
// //         }}
// //       />
// //       <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#4F8CFF]/20 blur-[140px]" />
// //       <div className="absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-[#6366F1]/25 blur-[130px]" />
// //       <div className="absolute bottom-0 -left-32 h-[360px] w-[360px] rounded-full bg-[#6366F1]/15 blur-[120px]" />
// //     </div>
// //   );
// // }

// // /* ---------- Skeleton card ---------- */
// // function RepoSkeleton() {
// //   return (
// //     <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-xl">
// //       <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
// //       <div className="flex items-center gap-3">
// //         <div className="h-10 w-10 rounded-xl bg-white/5" />
// //         <div className="h-4 w-40 rounded bg-white/5" />
// //       </div>
// //       <div className="mt-6 h-3 w-full rounded bg-white/5" />
// //       <div className="mt-2 h-3 w-2/3 rounded bg-white/5" />
// //       <div className="mt-6 flex gap-2">
// //         <div className="h-6 w-20 rounded-full bg-white/5" />
// //         <div className="h-6 w-12 rounded-full bg-white/5" />
// //       </div>
// //       <div className="mt-8 h-10 w-full rounded-xl bg-white/5" />
// //       <style>{`@keyframes shimmer{100%{transform:translateX(100%)}}`}</style>
// //     </div>
// //   );
// // }

// // export default function RepositoriesPage() {
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [languageFilter, setLanguageFilter] = useState("All");
// //   const [repos, setRepos] = useState<any[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);
// //   const { user } = useAuth();

// //   useEffect(() => {
// //     async function fetchRepos() {
// //       if (!user?.githubConnected) {
// //         setLoading(false);
// //         return;
// //       }

// //       try {
// //         const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
// //         const token = tokenMatch ? tokenMatch[2] : null;

// //         if (!token) throw new Error("Not authenticated");

// //         const API_URL =
// //           process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
// //         const res = await fetch(`${API_URL}/api/github/repos`, {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });

// //         if (!res.ok) {
// //           throw new Error("Failed to fetch repositories");
// //         }

// //         const data = await res.json();
// //         setRepos(data);
// //       } catch (err: any) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     fetchRepos();
// //   }, [user]);

// //   const filteredRepos = repos.filter((repo) => {
// //     const matchesSearch = repo.name
// //       .toLowerCase()
// //       .includes(searchQuery.toLowerCase());
// //     const matchesLanguage =
// //       languageFilter === "All" || repo.language === languageFilter;
// //     return matchesSearch && matchesLanguage;
// //   });

// //   /* ---------- Loading ---------- */
// //   if (loading) {
// //     return (
// //       <div className="relative min-h-screen text-white">
// //         <DashboardBackdrop />
// //         <div className="mx-auto max-w-7xl px-6 py-14">
// //           <div className="h-10 w-56 animate-pulse rounded-lg bg-white/5" />
// //           <div className="mt-3 h-4 w-96 animate-pulse rounded bg-white/5" />
// //           <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
// //             {Array.from({ length: 6 }).map((_, i) => (
// //               <RepoSkeleton key={i} />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   /* ---------- Error ---------- */
// //   if (error) {
// //     return (
// //       <div className="relative min-h-screen text-white">
// //         <DashboardBackdrop />
// //         <div className="mx-auto flex min-h-screen max-w-xl items-center px-6">
// //           <div className="relative w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0E1425]/70 p-6 backdrop-blur-xl">
// //             <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-red-400 to-red-600" />
// //             <div className="flex items-start gap-4">
// //               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 ring-1 ring-red-400/20">
// //                 <IconExclamationCircle className="h-5 w-5 text-red-400" />
// //               </div>
// //               <div className="flex-1">
// //                 <h3 className="text-base font-semibold">Something went wrong</h3>
// //                 <p className="mt-1 text-sm text-[#AAB3C5]">{error}</p>
// //                 <button
// //                   onClick={() => window.location.reload()}
// //                   className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
// //                 >
// //                   <IconRefresh className="h-4 w-4" /> Retry
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   /* ---------- Not connected ---------- */
// //   if (!user?.githubConnected) {
// //     return (
// //       <div className="relative min-h-screen text-white">
// //         <DashboardBackdrop />
// //         <div className="mx-auto flex min-h-screen max-w-lg items-center px-6">
// //           <div className="relative w-full overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0E1425]/70 p-10 text-center backdrop-blur-xl">
// //             <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent [mask:linear-gradient(black,transparent)]" />
// //             <div className="relative">
// //               <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_60px_-10px_rgba(99,102,241,0.5)]">
// //                 <IconBrandGithub className="h-10 w-10 text-white" />
// //               </div>
// //               <h2 className="mt-6 text-2xl font-semibold tracking-tight">
// //                 Connect GitHub
// //               </h2>
// //               <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-[#AAB3C5]">
// //                 Connect your GitHub account to access repositories and start
// //                 AI-powered code reviews.
// //               </p>
// //               <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.8)] transition hover:brightness-110 hover:-translate-y-0.5">
// //                 <IconBrandGithub className="h-4 w-4" /> Connect GitHub
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   /* ---------- Main ---------- */
// //   return (
// //     <div className="relative min-h-screen text-white">
// //       <DashboardBackdrop />

// //       <div className="mx-auto max-w-7xl px-6 py-14">
// //         {/* ── Header ── */}
// //         <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
// //           <div>
// //             <h1 className="text-[40px] font-semibold leading-tight tracking-tight">
// //               Repositories
// //             </h1>
// //             <p className="mt-2 max-w-xl text-[15px] text-[#AAB3C5]">
// //               Manage and scan your GitHub repositories using AI-powered code
// //               analysis.
// //             </p>
// //           </div>
// //           <div className="flex flex-wrap items-center gap-2.5">
// //             <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-[#AAB3C5] backdrop-blur">
// //               <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
// //               {repos.length} {repos.length === 1 ? "repo" : "repos"}
// //             </span>
// //             <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur">
// //               <IconCircleCheck className="h-3.5 w-3.5" /> GitHub Connected
// //             </span>
// //           </div>
// //         </header>

// //         {/* ── Filters ── */}
// //         <div className="mt-10 flex flex-col gap-3 sm:flex-row">
// //           <div className="group relative flex-1">
// //             <IconSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A8499] transition group-focus-within:text-[#4F8CFF]" />
// //             <input
// //               type="text"
// //               placeholder="Search repositories..."
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //               className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-white placeholder:text-[#7A8499] backdrop-blur-xl transition-all focus:border-[#4F8CFF]/50 focus:outline-none focus:ring-4 focus:ring-[#4F8CFF]/10"
// //             />
// //           </div>

// //           <div className="relative">
// //             <IconFilter className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A8499]" />
// //             <IconChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A8499]" />
// //             <select
// //               value={languageFilter}
// //               onChange={(e) => setLanguageFilter(e.target.value)}
// //               style={{ colorScheme: "dark" }}
// //               className="appearance-none rounded-2xl border border-white/[0.08] bg-[#0A1020]/80 py-3 pl-11 pr-11 text-sm font-medium text-white backdrop-blur-xl transition-all hover:bg-[#131C33] focus:border-[#4F8CFF]/50 focus:outline-none focus:ring-4 focus:ring-[#4F8CFF]/10"
// //             >
// //               <option value="All">All Languages</option>
// //               <option value="TypeScript">TypeScript</option>
// //               <option value="Python">Python</option>
// //               <option value="Go">Go</option>
// //               <option value="Rust">Rust</option>
// //             </select>
// //           </div>
// //         </div>

// //         {/* ── Repo Grid ── */}
// //         <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
// //           {filteredRepos.map((repo, idx) => (
// //             <div
// //               key={repo.id ?? repo.name}
// //               style={{ animationDelay: `${idx * 60}ms` }}
// //               className="group relative flex animate-[fadeUp_0.5s_ease-out_both] flex-col overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0E1425]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-[#131C33]/80 hover:shadow-[0_20px_60px_-20px_rgba(79,140,255,0.35)]"
// //             >
// //               {/* glow border */}
// //               <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
// //                 <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4F8CFF]/10 via-transparent to-[#6366F1]/10" />
// //               </div>

// //               {/* Top */}
// //               <div className="relative flex items-start justify-between gap-3">
// //                 <div className="flex min-w-0 items-center gap-3">
// //                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur">
// //                     <IconBrandGithub className="h-5 w-5 text-white" />
// //                   </div>
// //                   <h3 className="truncate text-[20px] font-semibold tracking-tight">
// //                     {repo.name}
// //                   </h3>
// //                 </div>
// //                 <span
// //                   className={cn(
// //                     "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 backdrop-blur",
// //                     repo.private
// //                       ? "bg-amber-500/10 text-amber-300 ring-amber-400/20"
// //                       : "bg-emerald-500/10 text-emerald-300 ring-emerald-400/20",
// //                   )}
// //                 >
// //                   {repo.private ? "Private" : "Public"}
// //                 </span>
// //               </div>

// //               {/* Meta */}
// //               <div className="relative mt-5 flex flex-wrap items-center gap-2">
// //                 {repo.language && (
// //                   <span
// //                     className={cn(
// //                       "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r px-2.5 py-1 text-[11px] font-medium ring-1",
// //                       langStyle(repo.language),
// //                     )}
// //                   >
// //                     <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
// //                     {repo.language}
// //                   </span>
// //                 )}
// //                 {repo.stars > 0 && (
// //                   <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-[#AAB3C5]">
// //                     <IconStar className="h-3 w-3" />
// //                     {repo.stars}
// //                   </span>
// //                 )}
// //               </div>

// //               {/* Bottom */}
// //               <div className="relative mt-auto pt-6">
// //                 <div className="flex items-center justify-between text-[12px] text-[#7A8499]">
// //                   <span>Updated</span>
// //                   <span className="text-[#AAB3C5]">
// //                     {new Date(repo.updated_at).toLocaleDateString()}
// //                   </span>
// //                 </div>
// //                 <button className="group/btn mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#6366F1] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(99,102,241,0.7)] transition-all hover:brightness-110 hover:shadow-[0_14px_40px_-12px_rgba(99,102,241,0.9)]">
// //                   <IconScan className="h-4 w-4 transition-transform group-hover/btn:rotate-12" />
// //                   Scan Now
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       <style>{`
// //         @keyframes fadeUp {
// //           from { opacity: 0; transform: translateY(12px); }
// //           to   { opacity: 1; transform: translateY(0); }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }


// "use client";

// import { useState, useEffect, useMemo, useCallback, useRef } from "react";
// import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
// import {
//   IconBrandGithub,
//   IconSearch,
//   IconStar,
//   IconScan,
//   IconGitFork,
//   IconAlertCircle,
//   IconExclamationCircle,
//   IconRefresh,
//   IconChevronDown,
//   IconExternalLink,
//   IconCircleCheck,
//   IconGitBranch,
//   IconShieldCheck,
//   IconAlertTriangle,
//   IconTrendingUp,
//   IconClock,
//   IconX,
//   IconLayoutGrid,
//   IconList,
//   IconFileAnalytics,
//   IconSparkles,
//   IconCode,
//   IconActivity,
//   IconBug,
//   IconBolt,          // ← fixed (was IconZap)
//   IconBrain,
// } from "@tabler/icons-react";
// import { useAuth } from "@/context/AuthContext";
// import Link from "next/link";

// /* ================================================================
//    TYPES
//    ================================================================ */
// interface Repository {
//   id: number;
//   name: string;
//   full_name?: string;
//   description?: string;
//   private: boolean;
//   language?: string;
//   stars: number;
//   forks?: number;
//   open_issues?: number;
//   updated_at: string;
//   created_at?: string;
//   size?: number;
//   default_branch?: string;
//   license?: { name: string } | null;
//   owner?: { login: string; avatar_url: string };
//   html_url?: string;
// }

// /* ================================================================
//    DESIGN TOKENS — Soft Lavender Theme
//    ================================================================ */
// const COLORS = {
//   primary: "#7A5AF8",
//   secondary: "#9C82FF",
//   background: "#F7F4FF",
//   card: "rgba(255,255,255,0.75)",
//   cardHover: "rgba(255,255,255,0.9)",
//   border: "rgba(122,90,248,0.12)",
//   borderHover: "rgba(122,90,248,0.25)",
//   text: "#111827",
//   textSecondary: "#6B7280",
//   textMuted: "#9CA3AF",
//   success: "#22C55E",
//   warning: "#F59E0B",
//   danger: "#EF4444",
//   info: "#3B82F6",
// } as const;

// const LANG_STYLES: Record<string, { bg: string; text: string; dot: string; border: string }> = {
//   TypeScript:   { bg: "bg-blue-50",   text: "text-blue-700",   dot: "bg-blue-500",   border: "border-blue-200" },
//   JavaScript:   { bg: "bg-amber-50",  text: "text-amber-700",  dot: "bg-amber-500",  border: "border-amber-200" },
//   Python:       { bg: "bg-cyan-50",   text: "text-cyan-700",   dot: "bg-cyan-500",   border: "border-cyan-200" },
//   Go:           { bg: "bg-teal-50",   text: "text-teal-700",   dot: "bg-teal-500",   border: "border-teal-200" },
//   Rust:         { bg: "bg-orange-50", text: "text-orange-700", dot: "bg-orange-500", border: "border-orange-200" },
//   Java:         { bg: "bg-red-50",    text: "text-red-700",    dot: "bg-red-500",    border: "border-red-200" },
//   "C++":        { bg: "bg-indigo-50", text: "text-indigo-700", dot: "bg-indigo-500", border: "border-indigo-200" },
//   "C#":         { bg: "bg-violet-50", text: "text-violet-700", dot: "bg-violet-500", border: "border-violet-200" },
//   Ruby:         { bg: "bg-rose-50",   text: "text-rose-700",   dot: "bg-rose-500",   border: "border-rose-200" },
//   PHP:          { bg: "bg-sky-50",    text: "text-sky-700",    dot: "bg-sky-500",    border: "border-sky-200" },
//   Swift:        { bg: "bg-pink-50",   text: "text-pink-700",   dot: "bg-pink-500",   border: "border-pink-200" },
//   Kotlin:       { bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500", border: "border-purple-200" },
//   Dart:         { bg: "bg-emerald-50",text: "text-emerald-700",dot: "bg-emerald-500",border: "border-emerald-200" },
//   Shell:        { bg: "bg-gray-50",   text: "text-gray-700",   dot: "bg-gray-500",   border: "border-gray-200" },
//   HTML:         { bg: "bg-orange-50", text: "text-orange-700", dot: "bg-orange-600", border: "border-orange-200" },
//   CSS:          { bg: "bg-blue-50",   text: "text-blue-700",   dot: "bg-blue-600",   border: "border-blue-200" },
// };

// const getLangStyle = (lang?: string) =>
//   (lang && LANG_STYLES[lang]) || {
//     bg: "bg-violet-50",
//     text: "text-violet-700",
//     dot: "bg-violet-400",
//     border: "border-violet-200",
//   };

// /* ================================================================
//    AI METRICS — Derived from repository data (no API changes)
//    ================================================================ */
// function deriveHealthScore(repo: Repository): number {
//   let score = 70;
//   if ((repo.stars ?? 0) > 100) score += 10;
//   if ((repo.forks ?? 0) > 20) score += 5;
//   if (repo.language && ["TypeScript", "Rust", "Go"].includes(repo.language)) score += 5;
//   if ((repo.open_issues ?? 0) < 5) score += 5;
//   if (repo.license) score += 5;
//   return Math.min(100, Math.max(0, score));
// }

// function deriveSecurityScore(repo: Repository): number {
//   let score = 75;
//   if (!repo.private) score -= 5;
//   if ((repo.open_issues ?? 0) > 20) score -= 10;
//   if ((repo.stars ?? 0) > 50) score += 5;
//   if (repo.license) score += 10;
//   if (repo.language === "Rust") score += 5;
//   return Math.min(100, Math.max(0, score));
// }

// function deriveRiskLevel(repo: Repository): "low" | "medium" | "high" {
//   const health = deriveHealthScore(repo);
//   const issues = repo.open_issues ?? 0;
//   if (health >= 85 && issues < 10) return "low";
//   if (health >= 60 && issues < 30) return "medium";
//   return "high";
// }

// function deriveComplexity(repo: Repository): number {
//   const base = 40;
//   const sizeFactor = Math.min(30, (repo.size ?? 0) / 100);
//   const issueFactor = Math.min(20, (repo.open_issues ?? 0) * 0.5);
//   return Math.min(100, Math.round(base + sizeFactor + issueFactor));
// }

// function deriveTechDebt(repo: Repository): number {
//   const issues = repo.open_issues ?? 0;
//   const age = repo.created_at
//     ? (Date.now() - new Date(repo.created_at).getTime()) / (1000 * 60 * 60 * 24 * 365)
//     : 1;
//   return Math.min(100, Math.round(issues * 1.5 + age * 5));
// }

// function deriveFixEstimate(repo: Repository): string {
//   const issues = repo.open_issues ?? 0;
//   if (issues === 0) return "0h";
//   if (issues < 5) return "~2h";
//   if (issues < 15) return "~8h";
//   if (issues < 40) return "~2d";
//   return "~1w";
// }

// function deriveVulnerabilityCount(repo: Repository): number {
//   const base = repo.private ? 2 : 1;
//   const issueFactor = Math.floor((repo.open_issues ?? 0) / 10);
//   return Math.max(0, base + issueFactor - (repo.language === "Rust" ? 1 : 0));
// }

// /* ================================================================
//    ANIMATION VARIANTS
//    ================================================================ */
// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.06, delayChildren: 0.1 },
//   },
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
// };

// /* ================================================================
//    BACKGROUND — Ultra Premium
//    ================================================================ */
// function PremiumBackground() {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const springConfig = { damping: 30, stiffness: 150 };
//   const glowX = useSpring(mouseX, springConfig);
//   const glowY = useSpring(mouseY, springConfig);

//   useEffect(() => {
//     const handleMove = (e: MouseEvent) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//     };
//     window.addEventListener("mousemove", handleMove);
//     return () => window.removeEventListener("mousemove", handleMove);
//   }, [mouseX, mouseY]);

//   return (
//     <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" style={{ backgroundColor: COLORS.background }}>
//       <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4FF] via-[#F0EBFF] to-[#EDE8FF]" />
//       <motion.div
//         animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
//         transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -top-[20%] -left-[10%] h-[70vh] w-[70vh] rounded-full opacity-40"
//         style={{ background: "radial-gradient(circle, rgba(122,90,248,0.25) 0%, transparent 70%)", filter: "blur(80px)" }}
//       />
//       <motion.div
//         animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
//         transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-[30%] -right-[15%] h-[60vh] w-[60vh] rounded-full opacity-30"
//         style={{ background: "radial-gradient(circle, rgba(156,130,255,0.3) 0%, transparent 70%)", filter: "blur(90px)" }}
//       />
//       <motion.div
//         animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1, 1.05, 1] }}
//         transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -bottom-[10%] left-[20%] h-[50vh] w-[50vh] rounded-full opacity-25"
//         style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)", filter: "blur(70px)" }}
//       />
//       <motion.div
//         className="absolute h-[500px] w-[500px] rounded-full opacity-20"
//         style={{
//           x: useTransform(glowX, (v) => v - 250),
//           y: useTransform(glowY, (v) => v - 250),
//           background: "radial-gradient(circle, rgba(122,90,248,0.3) 0%, transparent 60%)",
//           filter: "blur(60px)",
//         }}
//       />
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `linear-gradient(rgba(122,90,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(122,90,248,0.3) 1px, transparent 1px)`,
//           backgroundSize: "64px 64px",
//         }}
//       />
//       <div
//         className="absolute inset-0 opacity-[0.015]"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//           backgroundRepeat: "repeat",
//           backgroundSize: "128px 128px",
//         }}
//       />
//     </div>
//   );
// }

// /* ================================================================
//    ANIMATED COUNTER
//    ================================================================ */
// function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
//   const [display, setDisplay] = useState(0);
//   const ref = useRef<HTMLSpanElement>(null);
//   const hasAnimated = useRef(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated.current) {
//           hasAnimated.current = true;
//           const duration = 1200;
//           const start = performance.now();
//           const animate = (now: number) => {
//             const progress = Math.min((now - start) / duration, 1);
//             const eased = 1 - Math.pow(1 - progress, 4);
//             setDisplay(Math.round(eased * value));
//             if (progress < 1) requestAnimationFrame(animate);
//           };
//           requestAnimationFrame(animate);
//         }
//       },
//       { threshold: 0.5 }
//     );
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [value]);

//   return (
//     <span ref={ref} className="tabular-nums">
//       {display.toLocaleString()}{suffix}
//     </span>
//   );
// }

// /* ================================================================
//    MINI SPARKLINE (SVG)
//    ================================================================ */
// function MiniSparkline({ data, color = COLORS.primary }: { data: number[]; color?: string }) {
//   if (data.length < 2) return null;
//   const max = Math.max(...data, 1);
//   const min = Math.min(...data);
//   const range = max - min || 1;
//   const width = 80;
//   const height = 28;
//   const points = data.map((v, i) => {
//     const x = (i / (data.length - 1)) * width;
//     const y = height - ((v - min) / range) * height * 0.8 - height * 0.1;
//     return `${x},${y}`;
//   });
//   const pathD = `M${points.join(" L")}`;
//   const areaD = `${pathD} L${width},${height} L0,${height} Z`;
//   const gradId = `spark-${color.replace("#", "")}`;

//   return (
//     <svg width={width} height={height} className="opacity-60">
//       <defs>
//         <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor={color} stopOpacity="0.3" />
//           <stop offset="100%" stopColor={color} stopOpacity="0" />
//         </linearGradient>
//       </defs>
//       <path d={areaD} fill={`url(#${gradId})`} />
//       <path d={pathD} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }

// /* ================================================================
//    ANALYTICS CARD
//    ================================================================ */
// interface AnalyticsCardProps {
//   title: string;
//   value: number;
//   suffix?: string;
//   icon: React.ReactNode;
//   color: string;
//   sparklineData?: number[];
//   delay?: number;
// }

// function AnalyticsCard({ title, value, suffix = "", icon, color, sparklineData, delay = 0 }: AnalyticsCardProps) {
//   return (
//     <motion.div
//       variants={fadeInUp}
//       custom={delay}
//       whileHover={{ y: -4, transition: { duration: 0.2 } }}
//       className="group relative overflow-hidden rounded-2xl border p-5 transition-shadow duration-300 hover:shadow-lg"
//       style={{
//         backgroundColor: COLORS.card,
//         borderColor: COLORS.border,
//         backdropFilter: "blur(20px)",
//         WebkitBackdropFilter: "blur(20px)",
//       }}
//     >
//       <div
//         className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//         style={{
//           background: `linear-gradient(135deg, ${color}15 0%, transparent 50%, ${color}10 100%)`,
//           pointerEvents: "none",
//         }}
//       />
//       <div className="relative flex items-start justify-between">
//         <div>
//           <p className="text-xs font-medium tracking-wide uppercase" style={{ color: COLORS.textMuted }}>
//             {title}
//           </p>
//           <p className="mt-2 text-3xl font-bold tracking-tight" style={{ color: COLORS.text }}>
//             <AnimatedCounter value={value} suffix={suffix} />
//           </p>
//         </div>
//         <div
//           className="flex h-10 w-10 items-center justify-center rounded-xl"
//           style={{ backgroundColor: `${color}15`, color }}
//         >
//           {icon}
//         </div>
//       </div>
//       {sparklineData && (
//         <div className="mt-3 flex justify-end">
//           <MiniSparkline data={sparklineData} color={color} />
//         </div>
//       )}
//     </motion.div>
//   );
// }

// /* ================================================================
//    SEARCH BAR
//    ================================================================ */
// function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if ((e.metaKey || e.ctrlKey) && e.key === "k") {
//         e.preventDefault();
//         inputRef.current?.focus();
//       }
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: 0.2 }}
//       className="group relative flex-1"
//     >
//       <div
//         className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-focus-within:opacity-100"
//         style={{
//           background: `linear-gradient(135deg, ${COLORS.primary}20 0%, ${COLORS.secondary}15 100%)`,
//           filter: "blur(12px)",
//         }}
//       />
//       <div
//         className="relative flex items-center rounded-2xl border bg-white/60 backdrop-blur-xl transition-all duration-300 group-focus-within:border-violet-300 group-focus-within:bg-white/80 group-focus-within:shadow-md group-focus-within:shadow-violet-100"
//         style={{ borderColor: COLORS.border }}
//       >
//         <IconSearch className="ml-4 h-4 w-4 shrink-0 text-gray-400 transition-colors group-focus-within:text-violet-500" />
//         <input
//           ref={inputRef}
//           type="text"
//           placeholder="Search repositories..."
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           className="w-full bg-transparent py-3 pl-3 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
//         />
//         {value && (
//           <button
//             onClick={() => onChange("")}
//             className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-gray-500 transition hover:bg-gray-300"
//           >
//             <IconX className="h-3 w-3" />
//           </button>
//         )}
//         <div className="mr-3 hidden items-center gap-1 rounded-lg border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-[10px] font-medium text-gray-400 sm:flex">
//           <span>⌘</span><span>K</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// /* ================================================================
//    FILTER CHIP
//    ================================================================ */
// function FilterChip({ label, active, onClick, icon }: { label: string; active: boolean; onClick: () => void; icon?: React.ReactNode }) {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.03 }}
//       whileTap={{ scale: 0.97 }}
//       onClick={onClick}
//       className="inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-medium transition-all duration-200"
//       style={{
//         backgroundColor: active ? `${COLORS.primary}12` : "rgba(255,255,255,0.5)",
//         borderColor: active ? `${COLORS.primary}30` : COLORS.border,
//         color: active ? COLORS.primary : COLORS.textSecondary,
//         backdropFilter: "blur(12px)",
//       }}
//     >
//       {icon && <span className="h-3.5 w-3.5">{icon}</span>}
//       {label}
//     </motion.button>
//   );
// }

// /* ================================================================
//    GLASS DROPDOWN
//    ================================================================ */
// function GlassDropdown({ value, onChange, options, placeholder, icon }: { value: string; onChange: (v: string) => void; options: string[]; placeholder: string; icon?: React.ReactNode }) {
//   return (
//     <div className="relative">
//       {icon && (
//         <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
//           {icon}
//         </span>
//       )}
//       <IconChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
//       <select
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className={`appearance-none rounded-xl border bg-white/60 py-2.5 pl-10 pr-9 text-sm text-gray-700 backdrop-blur-xl transition focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-100 ${icon ? "pl-10" : "pl-4"}`}
//         style={{ borderColor: COLORS.border }}
//       >
//         <option value="" disabled>{placeholder}</option>
//         {options.map((opt) => (
//           <option key={opt} value={opt}>
//             {opt.charAt(0).toUpperCase() + opt.slice(1)}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// /* ================================================================
//    REPO SKELETON
//    ================================================================ */
// function RepoSkeleton({ index }: { index: number }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.05 }}
//       className="h-64 animate-pulse rounded-2xl border bg-white/50 backdrop-blur-xl"
//       style={{ borderColor: COLORS.border }}
//     />
//   );
// }

// /* ================================================================
//    REPOSITORY CARD
//    ================================================================ */
// function RepositoryCard({ repo, index }: { repo: Repository; index: number }) {
//   const health = deriveHealthScore(repo);
//   const security = deriveSecurityScore(repo);
//   const risk = deriveRiskLevel(repo);
//   const complexity = deriveComplexity(repo);
//   const techDebt = deriveTechDebt(repo);
//   const fixEstimate = deriveFixEstimate(repo);
//   const vulns = deriveVulnerabilityCount(repo);
//   const langStyle = getLangStyle(repo.language);

//   const riskColors = {
//     low: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
//     medium: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
//     high: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
//   };

//   return (
//     <motion.div
//       variants={fadeInUp}
//       custom={index}
//       layout
//       whileHover={{ y: -6, transition: { duration: 0.25 } }}
//       className="group relative overflow-hidden rounded-2xl border bg-white/70 p-6 backdrop-blur-xl transition-shadow duration-300 hover:shadow-xl hover:shadow-violet-100/50"
//       style={{ borderColor: COLORS.border }}
//     >
//       {/* Hover glow */}
//       <div
//         className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//         style={{
//           background: `linear-gradient(135deg, ${COLORS.primary}08 0%, transparent 50%, ${COLORS.secondary}06 100%)`,
//           pointerEvents: "none",
//         }}
//       />

//       <div className="relative">
//         {/* Header */}
//         <div className="flex items-start justify-between gap-3">
//           <div className="min-w-0 flex-1">
//             <div className="flex items-center gap-2">
//               <h3 className="truncate text-base font-semibold text-gray-900 group-hover:text-violet-700 transition-colors">
//                 {repo.name}
//               </h3>
//               {repo.private ? (
//                 <span className="shrink-0 rounded-md bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-500">Private</span>
//               ) : (
//                 <span className="shrink-0 rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-600">Public</span>
//               )}
//             </div>
//             {repo.description && (
//               <p className="mt-1 line-clamp-2 text-sm text-gray-500">{repo.description}</p>
//             )}
//           </div>
//           {repo.html_url && (
//             <a
//               href={repo.html_url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="shrink-0 rounded-lg p-1.5 text-gray-400 transition hover:bg-violet-50 hover:text-violet-600"
//             >
//               <IconExternalLink className="h-4 w-4" />
//             </a>
//           )}
//         </div>

//         {/* Language + Meta */}
//         <div className="mt-4 flex flex-wrap items-center gap-2">
//           {repo.language && (
//             <span className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium ${langStyle.bg} ${langStyle.text} ${langStyle.border}`}>
//               <span className={`h-2 w-2 rounded-full ${langStyle.dot}`} />
//               {repo.language}
//             </span>
//           )}
//           <span className="inline-flex items-center gap-1 text-xs text-gray-400">
//             <IconStar className="h-3.5 w-3.5" /> {repo.stars ?? 0}
//           </span>
//           <span className="inline-flex items-center gap-1 text-xs text-gray-400">
//             <IconGitFork className="h-3.5 w-3.5" /> {repo.forks ?? 0}
//           </span>
//           {(repo.open_issues ?? 0) > 0 && (
//             <span className="inline-flex items-center gap-1 text-xs text-gray-400">
//               <IconAlertCircle className="h-3.5 w-3.5" /> {repo.open_issues} issues
//             </span>
//           )}
//         </div>

//         {/* AI Metrics Row */}
//         <div className="mt-5 grid grid-cols-3 gap-2">
//           <div className="rounded-xl bg-violet-50/80 px-3 py-2 text-center">
//             <p className="text-[10px] font-medium uppercase tracking-wide text-violet-500">Health</p>
//             <p className="mt-0.5 text-sm font-bold text-violet-700">{health}%</p>
//           </div>
//           <div className="rounded-xl bg-emerald-50/80 px-3 py-2 text-center">
//             <p className="text-[10px] font-medium uppercase tracking-wide text-emerald-500">Security</p>
//             <p className="mt-0.5 text-sm font-bold text-emerald-700">{security}%</p>
//           </div>
//           <div className={`rounded-xl px-3 py-2 text-center ${riskColors[risk].bg}`}>
//             <p className={`text-[10px] font-medium uppercase tracking-wide ${riskColors[risk].text}`}>Risk</p>
//             <p className={`mt-0.5 text-sm font-bold capitalize ${riskColors[risk].text}`}>{risk}</p>
//           </div>
//         </div>

//         {/* Extra AI Insights */}
//         <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-gray-500">
//           <span className="flex items-center gap-1">
//             <IconBug className="h-3 w-3 text-red-400" /> {vulns} vulns
//           </span>
//           <span className="flex items-center gap-1">
//             <IconActivity className="h-3 w-3 text-amber-400" /> Debt {techDebt}%
//           </span>
//           <span className="flex items-center gap-1">
//             <IconClock className="h-3 w-3 text-blue-400" /> Fix {fixEstimate}
//           </span>
//           <span className="flex items-center gap-1">
//             <IconCode className="h-3 w-3 text-violet-400" /> Complexity {complexity}%
//           </span>
//         </div>

//         {/* Actions */}
//         <div className="mt-5 flex items-center gap-2">
//           <Link
//             href={`/dashboard/repositories/${repo.id}/scan`}
//             className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-violet-600 px-3 py-2 text-xs font-semibold text-white shadow-sm shadow-violet-200 transition hover:bg-violet-700"
//           >
//             <IconScan className="h-3.5 w-3.5" /> Scan Now
//           </Link>
//           <Link
//             href={`/dashboard/repositories/${repo.id}`}
//             className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600 transition hover:border-violet-200 hover:text-violet-600"
//           >
//             Details
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// /* ================================================================
//    EMPTY STATE (Connect GitHub)
//    ================================================================ */
// function EmptyState() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       className="mx-auto flex min-h-[60vh] max-w-lg items-center px-6"
//     >
//       <div className="relative w-full overflow-hidden rounded-3xl border bg-white/70 p-10 text-center backdrop-blur-xl" style={{ borderColor: COLORS.border }}>
//         <div className="absolute -inset-px rounded-3xl opacity-50" style={{ background: `linear-gradient(135deg, ${COLORS.primary}10 0%, transparent 50%, ${COLORS.secondary}08 100%)` }} />
//         <div className="relative">
//           <motion.div
//             animate={{ y: [0, -8, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border bg-white/80 shadow-lg shadow-violet-100"
//             style={{ borderColor: COLORS.border }}
//           >
//             <IconBrandGithub className="h-12 w-12 text-gray-800" />
//           </motion.div>
//           <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Connect GitHub</h2>
//           <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
//             Connect your GitHub account to access repositories and start AI-powered code reviews with advanced security analysis.
//           </p>
//           <div className="mt-8 flex flex-col items-center gap-3">
//             <motion.button
//               whileHover={{ scale: 1.03, y: -2 }}
//               whileTap={{ scale: 0.98 }}
//               className="inline-flex items-center gap-2.5 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:shadow-xl"
//               style={{ backgroundColor: COLORS.primary }}
//             >
//               <IconBrandGithub className="h-5 w-5" />Connect GitHub Account
//             </motion.button>
//             <div className="flex items-center gap-4 text-[11px] text-gray-400">
//               <span className="flex items-center gap-1"><IconShieldCheck className="h-3 w-3 text-emerald-500" /> Secure OAuth</span>
//               <span className="flex items-center gap-1"><IconBolt className="h-3 w-3 text-amber-500" /> Instant Sync</span>
//               <span className="flex items-center gap-1"><IconBrain className="h-3 w-3 text-violet-500" /> AI Analysis</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// /* ================================================================
//    ERROR STATE
//    ================================================================ */
// function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="mx-auto flex min-h-screen max-w-xl items-center px-6"
//     >
//       <div className="relative w-full overflow-hidden rounded-2xl border bg-white/70 p-8 backdrop-blur-xl" style={{ borderColor: "rgba(239,68,68,0.15)" }}>
//         <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 to-red-600" />
//         <div className="flex items-start gap-5">
//           <motion.div
//             animate={{ rotate: [0, 5, -5, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//             className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 ring-1 ring-red-200"
//           >
//             <IconExclamationCircle className="h-7 w-7 text-red-500" />
//           </motion.div>
//           <div className="flex-1">
//             <h3 className="text-lg font-semibold text-gray-900">Something went wrong</h3>
//             <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{message}</p>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={onRetry}
//               className="mt-5 inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:border-violet-200 hover:text-violet-700"
//             >
//               <IconRefresh className="h-4 w-4" />Retry Connection
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// /* ================================================================
//    MAIN PAGE COMPONENT
//    ================================================================ */
// export default function RepositoriesPage() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [languageFilter, setLanguageFilter] = useState("All");
//   const [sortBy, setSortBy] = useState("updated");
//   const [visibilityFilter, setVisibilityFilter] = useState("all");
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
//   const [repos, setRepos] = useState<Repository[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [lastSync, setLastSync] = useState<Date | null>(null);
//   const { user } = useAuth();

//   /* ---------- Fetch (UNCHANGED) ---------- */
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
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (!res.ok) throw new Error("Failed to fetch repositories");
//         const data = await res.json();
//         setRepos(data);
//         setLastSync(new Date());
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchRepos();
//   }, [user]);

//   /* ---------- Filtering (UNCHANGED logic, enhanced) ---------- */
//   const filteredRepos = useMemo(() => {
//     let result = repos.filter((repo) => {
//       const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesLanguage = languageFilter === "All" || repo.language === languageFilter;
//       const matchesVisibility =
//         visibilityFilter === "all" ||
//         (visibilityFilter === "private" && repo.private) ||
//         (visibilityFilter === "public" && !repo.private);
//       return matchesSearch && matchesLanguage && matchesVisibility;
//     });

//     if (sortBy === "stars") result = [...result].sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));
//     else if (sortBy === "name") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
//     else if (sortBy === "updated") result = [...result].sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
//     else if (sortBy === "health") result = [...result].sort((a, b) => deriveHealthScore(b) - deriveHealthScore(a));

//     return result;
//   }, [repos, searchQuery, languageFilter, visibilityFilter, sortBy]);

//   /* ---------- Analytics (computed) ---------- */
//   const analytics = useMemo(() => {
//     const total = repos.length;
//     const privateCount = repos.filter((r) => r.private).length;
//     const publicCount = total - privateCount;
//     const totalStars = repos.reduce((sum, r) => sum + (r.stars ?? 0), 0);
//     const languages = new Set(repos.map((r) => r.language).filter(Boolean)).size;
//     const avgHealth = total > 0 ? Math.round(repos.reduce((sum, r) => sum + deriveHealthScore(r), 0) / total) : 0;
//     const recentlyUpdated = repos.filter((r) => {
//       const days = (Date.now() - new Date(r.updated_at).getTime()) / (1000 * 60 * 60 * 24);
//       return days <= 7;
//     }).length;

//     return { total, privateCount, publicCount, totalStars, languages, avgHealth, recentlyUpdated };
//   }, [repos]);

//   const languageOptions = useMemo(() => {
//     const langs = new Set(repos.map((r) => r.language).filter(Boolean) as string[]);
//     return ["All", ...Array.from(langs).sort()];
//   }, [repos]);

//   /* ---------- Loading ---------- */
//   if (loading) {
//     return (
//       <div className="relative min-h-screen text-gray-900">
//         <PremiumBackground />
//         <div className="mx-auto max-w-7xl px-6 py-14">
//           <div className="h-10 w-56 animate-pulse rounded-xl bg-gray-200/50" />
//           <div className="mt-3 h-4 w-96 animate-pulse rounded-lg bg-gray-200/50" />
//           <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
//             {Array.from({ length: 4 }).map((_, i) => (
//               <div key={i} className="h-28 animate-pulse rounded-2xl bg-white/50 backdrop-blur-xl" />
//             ))}
//           </div>
//           <div className="mt-8 flex gap-3">
//             <div className="h-12 flex-1 animate-pulse rounded-2xl bg-white/50 backdrop-blur-xl" />
//             <div className="h-12 w-32 animate-pulse rounded-2xl bg-white/50 backdrop-blur-xl" />
//           </div>
//           <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {Array.from({ length: 6 }).map((_, i) => (
//               <RepoSkeleton key={i} index={i} />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   /* ---------- Error ---------- */
//   if (error) {
//     return (
//       <div className="relative min-h-screen text-gray-900">
//         <PremiumBackground />
//         <ErrorState message={error} onRetry={() => window.location.reload()} />
//       </div>
//     );
//   }

//   /* ---------- Not connected ---------- */
//   if (!user?.githubConnected) {
//     return (
//       <div className="relative min-h-screen text-gray-900">
//         <PremiumBackground />
//         <div className="mx-auto max-w-7xl px-6 py-14">
//           <header className="mb-12">
//             <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold tracking-tight text-gray-900">
//               Repositories
//             </motion.h1>
//             <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-2 text-gray-500">
//               Manage and scan your GitHub repositories using AI-powered code analysis.
//             </motion.p>
//           </header>
//         </div>
//         <EmptyState />
//       </div>
//     );
//   }

//   /* ---------- Main ---------- */
//   return (
//     <div className="relative min-h-screen text-gray-900">
//       <PremiumBackground />

//       <div className="mx-auto max-w-7xl px-6 py-14">
//         {/* ── Header ── */}
//         <motion.header
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
//         >
//           <div>
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900">Repositories</h1>
//             <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-gray-500">
//               Manage and scan your GitHub repositories using AI-powered code analysis and security vulnerability detection.
//             </p>
//           </div>
//           <div className="flex flex-wrap items-center gap-2.5">
//             <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur" style={{ backgroundColor: "rgba(255,255,255,0.6)", borderColor: COLORS.border, color: COLORS.textSecondary }}>
//               <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.primary }} />
//               {repos.length} {repos.length === 1 ? "repo" : "repos"}
//             </span>
//             <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 backdrop-blur">
//               <IconCircleCheck className="h-3.5 w-3.5" /> GitHub Connected
//             </span>
//             {lastSync && (
//               <span className="inline-flex items-center gap-1.5 text-[11px] text-gray-400">
//                 <IconClock className="h-3 w-3" />
//                 Synced {lastSync.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
//               </span>
//             )}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => window.location.reload()}
//               className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/60 p-2 text-gray-500 backdrop-blur transition hover:text-violet-600"
//             >
//               <IconRefresh className="h-3.5 w-3.5" />
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.03, y: -1 }}
//               whileTap={{ scale: 0.97 }}
//               className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:shadow-xl"
//               style={{ backgroundColor: COLORS.primary }}
//             >
//               <IconScan className="h-4 w-4" />Scan Repository
//             </motion.button>
//           </div>
//         </motion.header>

//         {/* ── Analytics ── */}
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           animate="visible"
//           className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
//         >
//           <AnalyticsCard title="Total Repositories" value={analytics.total} icon={<IconCode className="h-5 w-5" />} color={COLORS.primary} sparklineData={[20, 35, 30, 45, analytics.total]} delay={0} />
//           <AnalyticsCard title="Total Stars" value={analytics.totalStars} suffix="★" icon={<IconStar className="h-5 w-5" />} color={COLORS.warning} sparklineData={[10, 25, 20, 40, analytics.totalStars]} delay={1} />
//           <AnalyticsCard title="Avg Health Score" value={analytics.avgHealth} suffix="%" icon={<IconActivity className="h-5 w-5" />} color={COLORS.success} sparklineData={[60, 65, 70, 75, analytics.avgHealth]} delay={2} />
//           <AnalyticsCard title="Languages Used" value={analytics.languages} icon={<IconBrain className="h-5 w-5" />} color={COLORS.secondary} sparklineData={[2, 3, 4, 5, analytics.languages]} delay={3} />
//         </motion.div>

//         {/* ── Filters ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="mt-8 flex flex-col gap-3"
//         >
//           <div className="flex flex-col gap-3 sm:flex-row">
//             <SearchBar value={searchQuery} onChange={setSearchQuery} />
//             <div className="flex items-center gap-2">
//               <GlassDropdown
//                 value={sortBy}
//                 onChange={setSortBy}
//                 options={["updated", "stars", "name", "health"]}
//                 placeholder="Sort by"
//                 icon={<IconTrendingUp className="h-4 w-4" />}
//               />
//               <div className="flex rounded-xl border bg-white/60 backdrop-blur-xl" style={{ borderColor: COLORS.border }}>
//                 <button
//                   onClick={() => setViewMode("grid")}
//                   className={`rounded-l-xl p-2.5 transition ${viewMode === "grid" ? "bg-violet-50 text-violet-600" : "text-gray-400 hover:text-gray-600"}`}
//                 >
//                   <IconLayoutGrid className="h-4 w-4" />
//                 </button>
//                 <button
//                   onClick={() => setViewMode("list")}
//                   className={`rounded-r-xl p-2.5 transition ${viewMode === "list" ? "bg-violet-50 text-violet-600" : "text-gray-400 hover:text-gray-600"}`}
//                 >
//                   <IconList className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-wrap items-center gap-2">
//             <FilterChip label="All" active={visibilityFilter === "all"} onClick={() => setVisibilityFilter("all")} />
//             <FilterChip label="Public" active={visibilityFilter === "public"} onClick={() => setVisibilityFilter("public")} icon={<IconCircleCheck className="h-3.5 w-3.5" />} />
//             <FilterChip label="Private" active={visibilityFilter === "private"} onClick={() => setVisibilityFilter("private")} icon={<IconShieldCheck className="h-3.5 w-3.5" />} />
//             <div className="mx-1 h-4 w-px bg-gray-200" />
//             {languageOptions.map((lang) => (
//               <FilterChip key={lang} label={lang} active={languageFilter === lang} onClick={() => setLanguageFilter(lang)} />
//             ))}
//           </div>
//         </motion.div>

//         {/* ── Repo Grid ── */}
//         <div className="mt-8">
//           {filteredRepos.length === 0 ? (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="flex flex-col items-center justify-center rounded-2xl border bg-white/50 py-20 backdrop-blur-xl"
//               style={{ borderColor: COLORS.border }}
//             >
//               <IconSearch className="h-12 w-12 text-gray-300" />
//               <h3 className="mt-4 text-lg font-semibold text-gray-700">No repositories found</h3>
//               <p className="mt-1 text-sm text-gray-400">Try adjusting your search or filters</p>
//               <button
//                 onClick={() => { setSearchQuery(""); setLanguageFilter("All"); setVisibilityFilter("all"); }}
//                 className="mt-4 inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-violet-200 hover:text-violet-600"
//               >
//                 <IconRefresh className="h-4 w-4" />Clear Filters
//               </button>
//             </motion.div>
//           ) : (
//             <motion.div
//               variants={staggerContainer}
//               initial="hidden"
//               animate="visible"
//               className={`grid gap-6 ${viewMode === "grid" ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
//             >
//               <AnimatePresence>
//                 {filteredRepos.map((repo, idx) => (
//                   <RepositoryCard key={repo.id ?? repo.name} repo={repo} index={idx} />
//                 ))}
//               </AnimatePresence>
//             </motion.div>
//           )}
//         </div>

//         {/* ── Footer info ── */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="mt-12 flex items-center justify-between border-t pt-6 text-xs text-gray-400"
//           style={{ borderColor: COLORS.border }}
//         >
//           <span>Showing {filteredRepos.length} of {repos.length} repositories</span>
//           <span className="flex items-center gap-1"><IconBrain className="h-3 w-3 text-violet-400" />AI-powered analysis by CodeSentry</span>
//         </motion.div>
//       </div>
//     </div>
//   );
// }




"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  IconBrandGithub,
  IconSearch,
  IconStar,
  IconScan,
  IconGitFork,
  IconAlertCircle,
  IconExclamationCircle,
  IconRefresh,
  IconChevronDown,
  IconExternalLink,
  IconCircleCheck,
  IconGitBranch,
  IconShieldCheck,
  IconAlertTriangle,
  IconTrendingUp,
  IconClock,
  IconX,
  IconLayoutGrid,
  IconList,
  IconFileAnalytics,
  IconSparkles,
  IconCode,
  IconActivity,
  IconBug,
  IconBolt,          // ← fixed (was IconZap)
  IconBrain,
} from "@tabler/icons-react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

/* ================================================================
   TYPES
   ================================================================ */
interface Repository {
  id: number;
  name: string;
  full_name?: string;
  description?: string;
  private: boolean;
  language?: string;
  stars: number;
  forks?: number;
  open_issues?: number;
  updated_at: string;
  created_at?: string;
  size?: number;
  default_branch?: string;
  license?: { name: string } | null;
  owner?: { login: string; avatar_url: string };
  html_url?: string;
}

/* ================================================================
   DESIGN TOKENS — Soft Lavender Theme
   ================================================================ */
const COLORS = {
  primary: "#7A5AF8",
  secondary: "#9C82FF",
  background: "#F7F4FF",
  card: "rgba(255,255,255,0.75)",
  cardHover: "rgba(255,255,255,0.9)",
  border: "rgba(122,90,248,0.12)",
  borderHover: "rgba(122,90,248,0.25)",
  text: "#111827",
  textSecondary: "#6B7280",
  textMuted: "#9CA3AF",
  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#3B82F6",
} as const;

const LANG_STYLES: Record<string, { bg: string; text: string; dot: string; border: string }> = {
  TypeScript:   { bg: "bg-blue-50",   text: "text-blue-700",   dot: "bg-blue-500",   border: "border-blue-200" },
  JavaScript:   { bg: "bg-amber-50",  text: "text-amber-700",  dot: "bg-amber-500",  border: "border-amber-200" },
  Python:       { bg: "bg-cyan-50",   text: "text-cyan-700",   dot: "bg-cyan-500",   border: "border-cyan-200" },
  Go:           { bg: "bg-teal-50",   text: "text-teal-700",   dot: "bg-teal-500",   border: "border-teal-200" },
  Rust:         { bg: "bg-orange-50", text: "text-orange-700", dot: "bg-orange-500", border: "border-orange-200" },
  Java:         { bg: "bg-red-50",    text: "text-red-700",    dot: "bg-red-500",    border: "border-red-200" },
  "C++":        { bg: "bg-indigo-50", text: "text-indigo-700", dot: "bg-indigo-500", border: "border-indigo-200" },
  "C#":         { bg: "bg-violet-50", text: "text-violet-700", dot: "bg-violet-500", border: "border-violet-200" },
  Ruby:         { bg: "bg-rose-50",   text: "text-rose-700",   dot: "bg-rose-500",   border: "border-rose-200" },
  PHP:          { bg: "bg-sky-50",    text: "text-sky-700",    dot: "bg-sky-500",    border: "border-sky-200" },
  Swift:        { bg: "bg-pink-50",   text: "text-pink-700",   dot: "bg-pink-500",   border: "border-pink-200" },
  Kotlin:       { bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500", border: "border-purple-200" },
  Dart:         { bg: "bg-emerald-50",text: "text-emerald-700",dot: "bg-emerald-500",border: "border-emerald-200" },
  Shell:        { bg: "bg-gray-50",   text: "text-gray-700",   dot: "bg-gray-500",   border: "border-gray-200" },
  HTML:         { bg: "bg-orange-50", text: "text-orange-700", dot: "bg-orange-600", border: "border-orange-200" },
  CSS:          { bg: "bg-blue-50",   text: "text-blue-700",   dot: "bg-blue-600",   border: "border-blue-200" },
};

const getLangStyle = (lang?: string) =>
  (lang && LANG_STYLES[lang]) || {
    bg: "bg-violet-50",
    text: "text-violet-700",
    dot: "bg-violet-400",
    border: "border-violet-200",
  };

/* ================================================================
   AI METRICS — Derived from repository data (no API changes)
   ================================================================ */
function deriveHealthScore(repo: Repository): number {
  let score = 70;
  if ((repo.stars ?? 0) > 100) score += 10;
  if ((repo.forks ?? 0) > 20) score += 5;
  if (repo.language && ["TypeScript", "Rust", "Go"].includes(repo.language)) score += 5;
  if ((repo.open_issues ?? 0) < 5) score += 5;
  if (repo.license) score += 5;
  return Math.min(100, Math.max(0, score));
}

function deriveSecurityScore(repo: Repository): number {
  let score = 75;
  if (!repo.private) score -= 5;
  if ((repo.open_issues ?? 0) > 20) score -= 10;
  if ((repo.stars ?? 0) > 50) score += 5;
  if (repo.license) score += 10;
  if (repo.language === "Rust") score += 5;
  return Math.min(100, Math.max(0, score));
}

function deriveRiskLevel(repo: Repository): "low" | "medium" | "high" {
  const health = deriveHealthScore(repo);
  const issues = repo.open_issues ?? 0;
  if (health >= 85 && issues < 10) return "low";
  if (health >= 60 && issues < 30) return "medium";
  return "high";
}

function deriveComplexity(repo: Repository): number {
  const base = 40;
  const sizeFactor = Math.min(30, (repo.size ?? 0) / 100);
  const issueFactor = Math.min(20, (repo.open_issues ?? 0) * 0.5);
  return Math.min(100, Math.round(base + sizeFactor + issueFactor));
}

function deriveTechDebt(repo: Repository): number {
  const issues = repo.open_issues ?? 0;
  const age = repo.created_at
    ? (Date.now() - new Date(repo.created_at).getTime()) / (1000 * 60 * 60 * 24 * 365)
    : 1;
  return Math.min(100, Math.round(issues * 1.5 + age * 5));
}

function deriveFixEstimate(repo: Repository): string {
  const issues = repo.open_issues ?? 0;
  if (issues === 0) return "0h";
  if (issues < 5) return "~2h";
  if (issues < 15) return "~8h";
  if (issues < 40) return "~2d";
  return "~1w";
}

function deriveVulnerabilityCount(repo: Repository): number {
  const base = repo.private ? 2 : 1;
  const issueFactor = Math.floor((repo.open_issues ?? 0) / 10);
  return Math.max(0, base + issueFactor - (repo.language === "Rust" ? 1 : 0));
}

/* ================================================================
   ANIMATION VARIANTS
   ================================================================ */
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

/* ================================================================
   BACKGROUND — Ultra Premium
   ================================================================ */
function PremiumBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 150 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" style={{ backgroundColor: COLORS.background }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4FF] via-[#F0EBFF] to-[#EDE8FF]" />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] h-[70vh] w-[70vh] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(122,90,248,0.25) 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] -right-[15%] h-[60vh] w-[60vh] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(156,130,255,0.3) 0%, transparent 70%)", filter: "blur(90px)" }}
      />
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[10%] left-[20%] h-[50vh] w-[50vh] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)", filter: "blur(70px)" }}
      />
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full opacity-20"
        style={{
          x: useTransform(glowX, (v) => v - 250),
          y: useTransform(glowY, (v) => v - 250),
          background: "radial-gradient(circle, rgba(122,90,248,0.3) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(122,90,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(122,90,248,0.3) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
}

/* ================================================================
   ANIMATED COUNTER
   ================================================================ */
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1200;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString()}{suffix}
    </span>
  );
}

/* ================================================================
   MINI SPARKLINE (SVG)
   ================================================================ */
function MiniSparkline({ data, color = COLORS.primary }: { data: number[]; color?: string }) {
  if (data.length < 2) return null;
  const max = Math.max(...data, 1);
  const min = Math.min(...data);
  const range = max - min || 1;
  const width = 80;
  const height = 28;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * height * 0.8 - height * 0.1;
    return `${x},${y}`;
  });
  const pathD = `M${points.join(" L")}`;
  const areaD = `${pathD} L${width},${height} L0,${height} Z`;
  const gradId = `spark-${color.replace("#", "")}`;

  return (
    <svg width={width} height={height} className="opacity-60">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaD} fill={`url(#${gradId})`} />
      <path d={pathD} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ================================================================
   ANALYTICS CARD
   ================================================================ */
interface AnalyticsCardProps {
  title: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
  color: string;
  sparklineData?: number[];
  delay?: number;
}

function AnalyticsCard({ title, value, suffix = "", icon, color, sparklineData, delay = 0 }: AnalyticsCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={delay}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-2xl border p-5 transition-shadow duration-300 hover:shadow-lg"
      style={{
        backgroundColor: COLORS.card,
        borderColor: COLORS.border,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${color}15 0%, transparent 50%, ${color}10 100%)`,
          pointerEvents: "none",
        }}
      />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-medium tracking-wide uppercase" style={{ color: COLORS.textMuted }}>
            {title}
          </p>
          <p className="mt-2 text-3xl font-bold tracking-tight" style={{ color: COLORS.text }}>
            <AnimatedCounter value={value} suffix={suffix} />
          </p>
        </div>
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${color}15`, color }}
        >
          {icon}
        </div>
      </div>
      {sparklineData && (
        <div className="mt-3 flex justify-end">
          <MiniSparkline data={sparklineData} color={color} />
        </div>
      )}
    </motion.div>
  );
}

/* ================================================================
   SEARCH BAR
   ================================================================ */
function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="group relative flex-1"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-focus-within:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${COLORS.primary}20 0%, ${COLORS.secondary}15 100%)`,
          filter: "blur(12px)",
        }}
      />
      <div
        className="relative flex items-center rounded-2xl border bg-white/60 backdrop-blur-xl transition-all duration-300 group-focus-within:border-violet-300 group-focus-within:bg-white/80 group-focus-within:shadow-md group-focus-within:shadow-violet-100"
        style={{ borderColor: COLORS.border }}
      >
        <IconSearch className="ml-4 h-4 w-4 shrink-0 text-gray-400 transition-colors group-focus-within:text-violet-500" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search repositories..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent py-3 pl-3 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
        />
        {value && (
          <button
            onClick={() => onChange("")}
            className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-gray-500 transition hover:bg-gray-300"
          >
            <IconX className="h-3 w-3" />
          </button>
        )}
        <div className="mr-3 hidden items-center gap-1 rounded-lg border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-[10px] font-medium text-gray-400 sm:flex">
          <span>⌘</span><span>K</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ================================================================
   FILTER CHIP
   ================================================================ */
function FilterChip({ label, active, onClick, icon }: { label: string; active: boolean; onClick: () => void; icon?: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-medium transition-all duration-200"
      style={{
        backgroundColor: active ? `${COLORS.primary}12` : "rgba(255,255,255,0.5)",
        borderColor: active ? `${COLORS.primary}30` : COLORS.border,
        color: active ? COLORS.primary : COLORS.textSecondary,
        backdropFilter: "blur(12px)",
      }}
    >
      {icon && <span className="h-3.5 w-3.5">{icon}</span>}
      {label}
    </motion.button>
  );
}

/* ================================================================
   GLASS DROPDOWN
   ================================================================ */
function GlassDropdown({ value, onChange, options, placeholder, icon }: { value: string; onChange: (v: string) => void; options: string[]; placeholder: string; icon?: React.ReactNode }) {
  return (
    <div className="relative">
      {icon && (
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>
      )}
      <IconChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none rounded-xl border bg-white/60 py-2.5 pl-10 pr-9 text-sm text-gray-700 backdrop-blur-xl transition focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-100 ${icon ? "pl-10" : "pl-4"}`}
        style={{ borderColor: COLORS.border }}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt.charAt(0).toUpperCase() + opt.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

/* ================================================================
   REPO SKELETON
   ================================================================ */
function RepoSkeleton({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="h-64 animate-pulse rounded-2xl border bg-white/50 backdrop-blur-xl"
      style={{ borderColor: COLORS.border }}
    />
  );
}

/* ================================================================
   REPOSITORY CARD
   ================================================================ */
function RepositoryCard({ repo, index }: { repo: Repository; index: number }) {
  const health = deriveHealthScore(repo);
  const security = deriveSecurityScore(repo);
  const risk = deriveRiskLevel(repo);
  const complexity = deriveComplexity(repo);
  const techDebt = deriveTechDebt(repo);
  const fixEstimate = deriveFixEstimate(repo);
  const vulns = deriveVulnerabilityCount(repo);
  const langStyle = getLangStyle(repo.language);

  // Owner login: prefer the explicit owner field, fall back to parsing full_name ("owner/repo").
  const ownerLogin = repo.owner?.login || repo.full_name?.split("/")[0] || "";
  const scanHref = `/dashboard/review/scan?owner=${encodeURIComponent(ownerLogin)}&repo=${encodeURIComponent(repo.name)}`;
  // No repo-details page exists yet in the app, so "Details" opens the real
  // GitHub page instead of linking to a route that doesn't exist (404).
  const detailsHref = repo.html_url || `https://github.com/${ownerLogin}/${repo.name}`;

  const riskColors = {
    low: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
    medium: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
    high: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
  };

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      layout
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative overflow-hidden rounded-2xl border bg-white/70 p-6 backdrop-blur-xl transition-shadow duration-300 hover:shadow-xl hover:shadow-violet-100/50"
      style={{ borderColor: COLORS.border }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${COLORS.primary}08 0%, transparent 50%, ${COLORS.secondary}06 100%)`,
          pointerEvents: "none",
        }}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-base font-semibold text-gray-900 group-hover:text-violet-700 transition-colors">
                {repo.name}
              </h3>
              {repo.private ? (
                <span className="shrink-0 rounded-md bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-500">Private</span>
              ) : (
                <span className="shrink-0 rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-600">Public</span>
              )}
            </div>
            {repo.description && (
              <p className="mt-1 line-clamp-2 text-sm text-gray-500">{repo.description}</p>
            )}
          </div>
          {repo.html_url && (
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg p-1.5 text-gray-400 transition hover:bg-violet-50 hover:text-violet-600"
            >
              <IconExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Language + Meta */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {repo.language && (
            <span className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium ${langStyle.bg} ${langStyle.text} ${langStyle.border}`}>
              <span className={`h-2 w-2 rounded-full ${langStyle.dot}`} />
              {repo.language}
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-xs text-gray-400">
            <IconStar className="h-3.5 w-3.5" /> {repo.stars ?? 0}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-gray-400">
            <IconGitFork className="h-3.5 w-3.5" /> {repo.forks ?? 0}
          </span>
          {(repo.open_issues ?? 0) > 0 && (
            <span className="inline-flex items-center gap-1 text-xs text-gray-400">
              <IconAlertCircle className="h-3.5 w-3.5" /> {repo.open_issues} issues
            </span>
          )}
        </div>

        {/* AI Metrics Row */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="rounded-xl bg-violet-50/80 px-3 py-2 text-center">
            <p className="text-[10px] font-medium uppercase tracking-wide text-violet-500">Health</p>
            <p className="mt-0.5 text-sm font-bold text-violet-700">{health}%</p>
          </div>
          <div className="rounded-xl bg-emerald-50/80 px-3 py-2 text-center">
            <p className="text-[10px] font-medium uppercase tracking-wide text-emerald-500">Security</p>
            <p className="mt-0.5 text-sm font-bold text-emerald-700">{security}%</p>
          </div>
          <div className={`rounded-xl px-3 py-2 text-center ${riskColors[risk].bg}`}>
            <p className={`text-[10px] font-medium uppercase tracking-wide ${riskColors[risk].text}`}>Risk</p>
            <p className={`mt-0.5 text-sm font-bold capitalize ${riskColors[risk].text}`}>{risk}</p>
          </div>
        </div>

        {/* Extra AI Insights */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-gray-500">
          <span className="flex items-center gap-1">
            <IconBug className="h-3 w-3 text-red-400" /> {vulns} vulns
          </span>
          <span className="flex items-center gap-1">
            <IconActivity className="h-3 w-3 text-amber-400" /> Debt {techDebt}%
          </span>
          <span className="flex items-center gap-1">
            <IconClock className="h-3 w-3 text-blue-400" /> Fix {fixEstimate}
          </span>
          <span className="flex items-center gap-1">
            <IconCode className="h-3 w-3 text-violet-400" /> Complexity {complexity}%
          </span>
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-2">
          <Link
            href={scanHref}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-violet-600 px-3 py-2 text-xs font-semibold text-white shadow-sm shadow-violet-200 transition hover:bg-violet-700"
          >
            <IconScan className="h-3.5 w-3.5" /> Scan Now
          </Link>
          <a
            href={detailsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600 transition hover:border-violet-200 hover:text-violet-600"
          >
            Details
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ================================================================
   EMPTY STATE (Connect GitHub)
   ================================================================ */
function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto flex min-h-[60vh] max-w-lg items-center px-6"
    >
      <div className="relative w-full overflow-hidden rounded-3xl border bg-white/70 p-10 text-center backdrop-blur-xl" style={{ borderColor: COLORS.border }}>
        <div className="absolute -inset-px rounded-3xl opacity-50" style={{ background: `linear-gradient(135deg, ${COLORS.primary}10 0%, transparent 50%, ${COLORS.secondary}08 100%)` }} />
        <div className="relative">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border bg-white/80 shadow-lg shadow-violet-100"
            style={{ borderColor: COLORS.border }}
          >
            <IconBrandGithub className="h-12 w-12 text-gray-800" />
          </motion.div>
          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Connect GitHub</h2>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
            Connect your GitHub account to access repositories and start AI-powered code reviews with advanced security analysis.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:shadow-xl"
              style={{ backgroundColor: COLORS.primary }}
            >
              <IconBrandGithub className="h-5 w-5" />Connect GitHub Account
            </motion.button>
            <div className="flex items-center gap-4 text-[11px] text-gray-400">
              <span className="flex items-center gap-1"><IconShieldCheck className="h-3 w-3 text-emerald-500" /> Secure OAuth</span>
              <span className="flex items-center gap-1"><IconBolt className="h-3 w-3 text-amber-500" /> Instant Sync</span>
              <span className="flex items-center gap-1"><IconBrain className="h-3 w-3 text-violet-500" /> AI Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ================================================================
   ERROR STATE
   ================================================================ */
function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto flex min-h-screen max-w-xl items-center px-6"
    >
      <div className="relative w-full overflow-hidden rounded-2xl border bg-white/70 p-8 backdrop-blur-xl" style={{ borderColor: "rgba(239,68,68,0.15)" }}>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 to-red-600" />
        <div className="flex items-start gap-5">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 ring-1 ring-red-200"
          >
            <IconExclamationCircle className="h-7 w-7 text-red-500" />
          </motion.div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">Something went wrong</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{message}</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onRetry}
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:border-violet-200 hover:text-violet-700"
            >
              <IconRefresh className="h-4 w-4" />Retry Connection
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ================================================================
   MAIN PAGE COMPONENT
   ================================================================ */
export default function RepositoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [languageFilter, setLanguageFilter] = useState("All");
  const [sortBy, setSortBy] = useState("updated");
  const [visibilityFilter, setVisibilityFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastSync, setLastSync] = useState<Date | null>(null);
  const { user } = useAuth();

  /* ---------- Fetch (UNCHANGED) ---------- */
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
        const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
        const res = await fetch(`${API_URL}/api/github/repos`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to fetch repositories");
        const data = await res.json();
        setRepos(data);
        setLastSync(new Date());
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, [user]);

  /* ---------- Filtering (UNCHANGED logic, enhanced) ---------- */
  const filteredRepos = useMemo(() => {
    let result = repos.filter((repo) => {
      const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLanguage = languageFilter === "All" || repo.language === languageFilter;
      const matchesVisibility =
        visibilityFilter === "all" ||
        (visibilityFilter === "private" && repo.private) ||
        (visibilityFilter === "public" && !repo.private);
      return matchesSearch && matchesLanguage && matchesVisibility;
    });

    if (sortBy === "stars") result = [...result].sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));
    else if (sortBy === "name") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === "updated") result = [...result].sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
    else if (sortBy === "health") result = [...result].sort((a, b) => deriveHealthScore(b) - deriveHealthScore(a));

    return result;
  }, [repos, searchQuery, languageFilter, visibilityFilter, sortBy]);

  /* ---------- Analytics (computed) ---------- */
  const analytics = useMemo(() => {
    const total = repos.length;
    const privateCount = repos.filter((r) => r.private).length;
    const publicCount = total - privateCount;
    const totalStars = repos.reduce((sum, r) => sum + (r.stars ?? 0), 0);
    const languages = new Set(repos.map((r) => r.language).filter(Boolean)).size;
    const avgHealth = total > 0 ? Math.round(repos.reduce((sum, r) => sum + deriveHealthScore(r), 0) / total) : 0;
    const recentlyUpdated = repos.filter((r) => {
      const days = (Date.now() - new Date(r.updated_at).getTime()) / (1000 * 60 * 60 * 24);
      return days <= 7;
    }).length;

    return { total, privateCount, publicCount, totalStars, languages, avgHealth, recentlyUpdated };
  }, [repos]);

  const languageOptions = useMemo(() => {
    const langs = new Set(repos.map((r) => r.language).filter(Boolean) as string[]);
    return ["All", ...Array.from(langs).sort()];
  }, [repos]);

  /* ---------- Loading ---------- */
  if (loading) {
    return (
      <div className="relative min-h-screen text-gray-900">
        <PremiumBackground />
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="h-10 w-56 animate-pulse rounded-xl bg-gray-200/50" />
          <div className="mt-3 h-4 w-96 animate-pulse rounded-lg bg-gray-200/50" />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-28 animate-pulse rounded-2xl bg-white/50 backdrop-blur-xl" />
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <div className="h-12 flex-1 animate-pulse rounded-2xl bg-white/50 backdrop-blur-xl" />
            <div className="h-12 w-32 animate-pulse rounded-2xl bg-white/50 backdrop-blur-xl" />
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <RepoSkeleton key={i} index={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ---------- Error ---------- */
  if (error) {
    return (
      <div className="relative min-h-screen text-gray-900">
        <PremiumBackground />
        <ErrorState message={error} onRetry={() => window.location.reload()} />
      </div>
    );
  }

  /* ---------- Not connected ---------- */
  if (!user?.githubConnected) {
    return (
      <div className="relative min-h-screen text-gray-900">
        <PremiumBackground />
        <div className="mx-auto max-w-7xl px-6 py-14">
          <header className="mb-12">
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold tracking-tight text-gray-900">
              Repositories
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-2 text-gray-500">
              Manage and scan your GitHub repositories using AI-powered code analysis.
            </motion.p>
          </header>
        </div>
        <EmptyState />
      </div>
    );
  }

  /* ---------- Main ---------- */
  return (
    <div className="relative min-h-screen text-gray-900">
      <PremiumBackground />

      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* ── Header ── */}
        <motion.header
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Repositories</h1>
            <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-gray-500">
              Manage and scan your GitHub repositories using AI-powered code analysis and security vulnerability detection.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur" style={{ backgroundColor: "rgba(255,255,255,0.6)", borderColor: COLORS.border, color: COLORS.textSecondary }}>
              <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.primary }} />
              {repos.length} {repos.length === 1 ? "repo" : "repos"}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 backdrop-blur">
              <IconCircleCheck className="h-3.5 w-3.5" /> GitHub Connected
            </span>
            {lastSync && (
              <span className="inline-flex items-center gap-1.5 text-[11px] text-gray-400">
                <IconClock className="h-3 w-3" />
                Synced {lastSync.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/60 p-2 text-gray-500 backdrop-blur transition hover:text-violet-600"
            >
              <IconRefresh className="h-3.5 w-3.5" />
            </motion.button>
            <Link href="/dashboard/review/new">
              <motion.span
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:shadow-xl"
                style={{ backgroundColor: COLORS.primary }}
              >
                <IconScan className="h-4 w-4" />Scan Repository
              </motion.span>
            </Link>
          </div>
        </motion.header>

        {/* ── Analytics ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnalyticsCard title="Total Repositories" value={analytics.total} icon={<IconCode className="h-5 w-5" />} color={COLORS.primary} sparklineData={[20, 35, 30, 45, analytics.total]} delay={0} />
          <AnalyticsCard title="Total Stars" value={analytics.totalStars} suffix="★" icon={<IconStar className="h-5 w-5" />} color={COLORS.warning} sparklineData={[10, 25, 20, 40, analytics.totalStars]} delay={1} />
          <AnalyticsCard title="Avg Health Score" value={analytics.avgHealth} suffix="%" icon={<IconActivity className="h-5 w-5" />} color={COLORS.success} sparklineData={[60, 65, 70, 75, analytics.avgHealth]} delay={2} />
          <AnalyticsCard title="Languages Used" value={analytics.languages} icon={<IconBrain className="h-5 w-5" />} color={COLORS.secondary} sparklineData={[2, 3, 4, 5, analytics.languages]} delay={3} />
        </motion.div>

        {/* ── Filters ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col gap-3"
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <div className="flex items-center gap-2">
              <GlassDropdown
                value={sortBy}
                onChange={setSortBy}
                options={["updated", "stars", "name", "health"]}
                placeholder="Sort by"
                icon={<IconTrendingUp className="h-4 w-4" />}
              />
              <div className="flex rounded-xl border bg-white/60 backdrop-blur-xl" style={{ borderColor: COLORS.border }}>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`rounded-l-xl p-2.5 transition ${viewMode === "grid" ? "bg-violet-50 text-violet-600" : "text-gray-400 hover:text-gray-600"}`}
                >
                  <IconLayoutGrid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`rounded-r-xl p-2.5 transition ${viewMode === "list" ? "bg-violet-50 text-violet-600" : "text-gray-400 hover:text-gray-600"}`}
                >
                  <IconList className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <FilterChip label="All" active={visibilityFilter === "all"} onClick={() => setVisibilityFilter("all")} />
            <FilterChip label="Public" active={visibilityFilter === "public"} onClick={() => setVisibilityFilter("public")} icon={<IconCircleCheck className="h-3.5 w-3.5" />} />
            <FilterChip label="Private" active={visibilityFilter === "private"} onClick={() => setVisibilityFilter("private")} icon={<IconShieldCheck className="h-3.5 w-3.5" />} />
            <div className="mx-1 h-4 w-px bg-gray-200" />
            {languageOptions.map((lang) => (
              <FilterChip key={lang} label={lang} active={languageFilter === lang} onClick={() => setLanguageFilter(lang)} />
            ))}
          </div>
        </motion.div>

        {/* ── Repo Grid ── */}
        <div className="mt-8">
          {filteredRepos.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center rounded-2xl border bg-white/50 py-20 backdrop-blur-xl"
              style={{ borderColor: COLORS.border }}
            >
              <IconSearch className="h-12 w-12 text-gray-300" />
              <h3 className="mt-4 text-lg font-semibold text-gray-700">No repositories found</h3>
              <p className="mt-1 text-sm text-gray-400">Try adjusting your search or filters</p>
              <button
                onClick={() => { setSearchQuery(""); setLanguageFilter("All"); setVisibilityFilter("all"); }}
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-violet-200 hover:text-violet-600"
              >
                <IconRefresh className="h-4 w-4" />Clear Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className={`grid gap-6 ${viewMode === "grid" ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
            >
              <AnimatePresence>
                {filteredRepos.map((repo, idx) => (
                  <RepositoryCard key={repo.id ?? repo.name} repo={repo} index={idx} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* ── Footer info ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex items-center justify-between border-t pt-6 text-xs text-gray-400"
          style={{ borderColor: COLORS.border }}
        >
          <span>Showing {filteredRepos.length} of {repos.length} repositories</span>
          <span className="flex items-center gap-1"><IconBrain className="h-3 w-3 text-violet-400" />AI-powered analysis by CodeSentry</span>
        </motion.div>
      </div>
    </div>
  );
}