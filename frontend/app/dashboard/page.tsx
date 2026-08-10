// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import StatCard from "@/components/dashboard/StatCard";
// // // import CircularProgress from "@/components/dashboard/CircularProgress";
// // // import GithubAnalyzer from "@/components/dashboard/GithubAnalyzer";
// // // import RateLimitsWidget from "@/components/dashboard/RateLimitsWidget";
// // // import {
// // //   IconTrendingUp,
// // //   IconAlertTriangle,
// // //   IconCircleCheck,
// // //   IconBrandGithub,
// // //   IconLoader2,
// // // } from "@tabler/icons-react";
// // // import Link from "next/link";
// // // import { cn } from "@/lib/utils";

// // // interface Review {
// // //   id: string;
// // //   repositoryName: string;
// // //   repositoryOwner: string;
// // //   createdAt: string;
// // //   status: "pending" | "completed" | "failed";
// // //   prUrl?: string;
// // //   issuesFoundCount?: number;
// // // }

// // // export default function DashboardHome() {
// // //   const [stats, setStats] = useState<{
// // //     total: number;
// // //     issues: number | string;
// // //     fixes: number;
// // //     connected: string;
// // //   }>({
// // //     total: 0,
// // //     issues: "N/A",
// // //     fixes: 0,
// // //     connected: "No",
// // //   });
// // //   const [recentReviews, setRecentReviews] = useState<Review[]>([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [user, setUser] = useState<any>(null);

// // //   useEffect(() => {
// // //     async function fetchDashboardData() {
// // //       try {
// // //         const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
// // //         const token = tokenMatch ? tokenMatch[2] : null;

// // //         if (!token) {
// // //           setLoading(false);
// // //           return;
// // //         }

// // //         const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

// // //         // Fetch User
// // //         const userRes = await fetch(`${API_URL}/api/users/me`, {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         });
// // //         const userData = await userRes.json();
// // //         setUser(userData);

// // //         // Fetch Reviews
// // //         const reviewsRes = await fetch(`${API_URL}/api/reviews?sort=createdAt:desc&pagination[pageSize]=10`, {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         });

// // //         const reviewsData = await reviewsRes.json();
// // //         const reviews: Review[] = reviewsData.data || [];

// // //         const fixesApplied = reviews.filter((r) => r.prUrl || r.status === "completed").length;
// // //         const totalIssues = reviews.reduce((sum, r) => sum + (r.issuesFoundCount || 0), 0);

// // //         setStats({
// // //           total: reviewsData.meta?.pagination?.total ?? reviews.length,
// // //           issues: totalIssues,
// // //           fixes: fixesApplied,
// // //           connected: userData.githubConnected ? "Yes" : "No",
// // //         });

// // //         setRecentReviews(reviews.slice(0, 5));
// // //       } catch (err) {
// // //         console.error("Dashboard fetch error:", err);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     }

// // //     fetchDashboardData();
// // //   }, []);

// // //   // Loading State
// // //   if (loading) {
// // //     return (
// // //       <div className="flex h-[70vh] items-center justify-center">
// // //         <div className="flex flex-col items-center gap-4">
// // //           <IconLoader2 className="h-10 w-10 animate-spin text-[#5B5FFF]" />
// // //           <p className="text-[#7B859E]">Loading your dashboard...</p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="space-y-8">
// // //       {/* ── Stats Row ── */}
// // //       <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
// // //         {[
// // //           {
// // //             label: "Total Reviews",
// // //             value: stats.total,
// // //             icon: IconTrendingUp,
// // //             color: "#5B5FFF",
// // //           },
// // //           {
// // //             label: "Issues Found",
// // //             value: stats.issues,
// // //             icon: IconAlertTriangle,
// // //             color: "#FF8A65",
// // //           },
// // //           {
// // //             label: "Fixes Applied",
// // //             value: stats.fixes,
// // //             icon: IconCircleCheck,
// // //             color: "#4ADE80",
// // //           },
// // //           {
// // //             label: "GitHub Connected",
// // //             value: stats.connected,
// // //             icon: IconBrandGithub,
// // //             color: "#8B8FFF",
// // //           },
// // //         ].map((item, i) => (
// // //           <StatCard
// // //             key={i}
// // //             label={item.label}
// // //             value={item.value}
// // //             icon={item.icon}
// // //             color={item.color}
// // //           />
// // //         ))}
// // //       </div>

// // //       {/* GitHub Analyzer */}
// // //       <GithubAnalyzer />

// // //       {/* Rate Limits */}
// // //       <RateLimitsWidget />

// // //       {/* Main Content Grid */}
// // //       <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
// // //         {/* Recent Reviews */}
// // //         <div className="lg:col-span-2">
// // //           <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0E1324] to-[#0B0F1C] backdrop-blur-xl shadow-xl overflow-hidden">
// // //             <div className="border-b border-white/[0.08] px-6 py-4 flex items-center justify-between">
// // //               <h2 className="text-lg font-semibold text-white">Recent Reviews</h2>
// // //               <Link
// // //                 href="/dashboard/reviews"
// // //                 className="text-xs text-[#5B5FFF] hover:underline"
// // //               >
// // //                 View All
// // //               </Link>
// // //             </div>

// // //             <div className="divide-y divide-white/[0.05]">
// // //               {recentReviews.length === 0 ? (
// // //                 <div className="py-16 text-center text-[#7B859E]">
// // //                   No reviews yet. Start your first scan! 🚀
// // //                 </div>
// // //               ) : (
// // //                 recentReviews.map((review) => (
// // //                   <div
// // //                     key={review.id}
// // //                     className="flex items-center justify-between px-6 py-4 hover:bg-white/[0.03] transition-all group"
// // //                   >
// // //                     <div>
// // //                       <p className="font-medium text-white">
// // //                         {review.repositoryOwner}/{review.repositoryName}
// // //                       </p>
// // //                       <p className="text-xs text-[#7B859E]">
// // //                         {new Date(review.createdAt).toLocaleDateString("en-US", {
// // //                           month: "short",
// // //                           day: "numeric",
// // //                           year: "numeric",
// // //                         })}
// // //                       </p>
// // //                     </div>

// // //                     <div className="flex items-center gap-4">
// // //                       <span
// // //                         className={cn(
// // //                           "px-3 py-1 rounded-full text-xs font-medium border",
// // //                           review.status === "completed"
// // //                             ? "bg-green-500/10 text-green-400 border-green-500/30"
// // //                             : review.status === "pending"
// // //                             ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
// // //                             : "bg-red-500/10 text-red-400 border-red-500/30"
// // //                         )}
// // //                       >
// // //                         {review.status}
// // //                       </span>

// // //                       <Link
// // //                         href={`/dashboard/review/scan?reviewId=${review.id}&owner=${review.repositoryOwner}&repo=${review.repositoryName}`}
// // //                         className="px-5 py-1.5 text-sm rounded-lg bg-gradient-to-r from-[#5B5FFF] to-[#7C7CFF] text-white font-medium hover:brightness-110 transition shadow-md"
// // //                       >
// // //                         View
// // //                       </Link>
// // //                     </div>
// // //                   </div>
// // //                 ))
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Right Sidebar */}
// // //         <div className="flex flex-col gap-6">
// // //           {/* Quick Actions */}
// // //           <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0E1324] to-[#0B0F1C] p-6 shadow-lg">
// // //             <h2 className="text-lg font-semibold text-white mb-5">Quick Actions</h2>

// // //             <Link
// // //               href="/dashboard/repositories"
// // //               className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-[#5B5FFF]/10 hover:border-[#5B5FFF]/40 transition group"
// // //             >
// // //               <div className="w-10 h-10 rounded-lg bg-[#5B5FFF]/10 flex items-center justify-center group-hover:scale-110 transition">
// // //                 <IconBrandGithub className="text-[#8B8FFF]" size={22} />
// // //               </div>
// // //               <div>
// // //                 <p className="text-white font-medium">Connect Repository</p>
// // //                 <p className="text-xs text-[#7B859E]">Scan a new GitHub repo</p>
// // //               </div>
// // //             </Link>
// // //           </div>

// // //           {/* Health Score */}
// // //           <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0E1324] to-[#0B0F1C] p-8 flex flex-col items-center shadow-xl overflow-hidden">
// // //             <div className="absolute w-48 h-48 bg-[#5B5FFF]/10 blur-3xl rounded-full top-12" />

// // //             <h2 className="text-lg font-semibold text-white mb-6">Code Health Score</h2>

// // //             <CircularProgress value={84} size={160} strokeWidth={14} />

// // //             <p className="text-center mt-6 text-[#7B859E]">
// // //               Your codebase is in{" "}
// // //               <span className="text-white font-semibold">Good</span> condition.
// // //               <br />
// // //               Keep pushing! <span className="text-[#4ADE80]">🚀</span>
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // "use client";

// // import { useEffect, useState } from "react";
// // import CircularProgress from "@/components/dashboard/CircularProgress";
// // import GithubAnalyzer from "@/components/dashboard/GithubAnalyzer";
// // import RateLimitsWidget from "@/components/dashboard/RateLimitsWidget";
// // import {
// //   IconTrendingUp,
// //   IconAlertTriangle,
// //   IconCircleCheck,
// //   IconBrandGithub,
// //   IconLoader2,
// //   IconSearch,
// //   IconSparkles,
// //   IconBell,
// //   IconSun,
// //   IconArrowRight,
// //   IconShieldCheck,
// //   IconBolt,
// // } from "@tabler/icons-react";
// // import Link from "next/link";
// // import { cn } from "@/lib/utils";

// // /* ── Mini Sparkline ── */
// // function MiniSparkline({ color, data = [30, 45, 35, 50, 40, 60, 55] }) {
// //   const w = 70;
// //   const h = 28;
// //   const max = Math.max(...data);
// //   const min = Math.min(...data);
// //   const range = max - min || 1;
// //   const pts = data
// //     .map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`)
// //     .join(" ");

// //   return (
// //     <svg width={w} height={h} className="opacity-80">
// //       <polyline
// //         fill="none"
// //         stroke={color}
// //         strokeWidth="2"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //         points={pts}
// //       />
// //     </svg>
// //   );
// // }

// // export default function DashboardHome() {
// //   const [stats, setStats] = useState({
// //     total: 0,
// //     issues: "N/A",
// //     fixes: 0,
// //     connected: "No",
// //   });
// //   const [recentReviews, setRecentReviews] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     async function fetchDashboardData() {
// //       try {
// //         const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
// //         const token = tokenMatch ? tokenMatch[2] : null;
// //         if (!token) {
// //           setLoading(false);
// //           return;
// //         }

// //         const API_URL =
// //           process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

// //         const userRes = await fetch(`${API_URL}/api/users/me`, {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         const userData = await userRes.json();
// //         setUser(userData);

// //         const reviewsRes = await fetch(
// //           `${API_URL}/api/reviews?sort=createdAt:desc&pagination[pageSize]=10`,
// //           { headers: { Authorization: `Bearer ${token}` } }
// //         );
// //         const reviewsData = await reviewsRes.json();
// //         const reviews = reviewsData.data || [];

// //         const fixesApplied = reviews.filter(
// //           (r) => r.prUrl || r.status === "completed"
// //         ).length;
// //         const totalIssues = reviews.reduce(
// //           (sum, r) => sum + (r.issuesFoundCount || 0),
// //           0
// //         );

// //         setStats({
// //           total: reviewsData.meta?.pagination?.total ?? reviews.length,
// //           issues: totalIssues,
// //           fixes: fixesApplied,
// //           connected: userData.githubConnected ? "Yes" : "No",
// //         });

// //         setRecentReviews(reviews.slice(0, 5));
// //       } catch (err) {
// //         console.error("Dashboard fetch error:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     fetchDashboardData();
// //   }, []);

// //   if (loading) {
// //     return (
// //       <div className="flex min-h-screen items-center justify-center bg-[#F3F0FF]">
// //         <div className="flex flex-col items-center gap-4">
// //           <IconLoader2 className="h-10 w-10 animate-spin text-[#8B5CF6]" />
// //           <p className="text-sm font-medium text-[#64748B]">
// //             Loading your dashboard...
// //           </p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   const statItems = [
// //     {
// //       label: "Total Reviews",
// //       value: stats.total,
// //       icon: IconTrendingUp,
// //       color: "#8B5CF6",
// //       trend: "↑ 12%",
// //       trendLabel: "vs last 30 days",
// //       trendUp: true,
// //       sparkColor: "#8B5CF6",
// //       sparkData: [25, 40, 35, 50, 45, 60, 55],
// //     },
// //     {
// //       label: "Issues Found",
// //       value: stats.issues,
// //       icon: IconAlertTriangle,
// //       color: "#F59E0B",
// //       trend: "↓ 8%",
// //       trendLabel: "vs last 30 days",
// //       trendUp: false,
// //       sparkColor: "#F59E0B",
// //       sparkData: [55, 50, 52, 45, 48, 42, 40],
// //     },
// //     {
// //       label: "Fixes Applied",
// //       value: stats.fixes,
// //       icon: IconCircleCheck,
// //       color: "#22C55E",
// //       trend: "↑ 18%",
// //       trendLabel: "vs last 30 days",
// //       trendUp: true,
// //       sparkColor: "#22C55E",
// //       sparkData: [20, 30, 28, 42, 38, 55, 50],
// //     },
// //     {
// //       label: "GitHub Connected",
// //       value: stats.connected,
// //       icon: IconBrandGithub,
// //       color: "#6366F1",
// //       trend: null,
// //       trendLabel: "Connected",
// //       trendUp: null,
// //       sparkColor: "#6366F1",
// //       sparkData: [30, 35, 40, 38, 45, 50, 55],
// //     },
// //   ];

// //   return (
// //     <div className="relative min-h-screen overflow-hidden bg-[#F3F0FF]">
// //       {/* Soft ambient glow */}
// //       <div className="pointer-events-none fixed inset-0">
// //         <div className="absolute -left-[5%] -top-[10%] h-[600px] w-[600px] rounded-full bg-purple-300/12 blur-3xl" />
// //         <div className="absolute -right-[5%] top-[20%] h-[500px] w-[500px] rounded-full bg-purple-200/10 blur-3xl" />
// //       </div>

// //       <div className="relative z-10 mx-auto max-w-[1440px] space-y-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
// //         {/* ── Header ── */}
// //         <header className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
// //           <div>
// //             <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-purple-200/50 bg-purple-100/60 px-3 py-1">
// //               <span className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] bg-clip-text text-[11px] font-extrabold uppercase tracking-widest text-transparent">
// //                 CodeSentry AI
// //               </span>
// //             </div>
// //             <h1 className="text-3xl font-extrabold tracking-tight text-[#11183A] sm:text-4xl">
// //               Dashboard
// //             </h1>
// //             <p className="mt-1 text-sm text-[#64748B]">
// //               Welcome back! Here’s what’s happening with your code today.
// //             </p>
// //           </div>

// //           <div className="flex flex-wrap items-center gap-3">
// //             <div className="hidden items-center gap-2 rounded-full border border-purple-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md md:flex">
// //               <span className="relative flex h-2 w-2">
// //                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
// //                 <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
// //               </span>
// //               <span className="text-xs font-semibold text-[#64748B]">
// //                 AI System Online
// //               </span>
// //             </div>

// //             <div className="hidden min-w-[240px] items-center gap-2 rounded-xl border border-purple-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md lg:flex">
// //               <IconSearch size={16} className="text-[#94A3B8]" />
// //               <input
// //                 type="text"
// //                 placeholder="Search repositories..."
// //                 className="w-full border-none bg-transparent text-sm text-[#11183A] outline-none placeholder:text-[#94A3B8]"
// //               />
// //               <kbd className="hidden rounded bg-purple-50 px-1.5 py-0.5 font-mono text-[10px] font-bold text-[#8B5CF6] xl:inline-flex">
// //                 ⌘K
// //               </kbd>
// //             </div>

// //             <Link
// //               href="/dashboard/repositories"
// //               className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
// //             >
// //               <IconSparkles size={16} />
// //               <span className="hidden sm:inline">New Review</span>
// //             </Link>

// //             <button className="relative rounded-xl border border-purple-100 bg-white/80 p-2.5 shadow-sm backdrop-blur-md transition hover:bg-white">
// //               <IconBell size={18} className="text-[#64748B]" />
// //               <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
// //             </button>

// //             <button className="hidden rounded-xl border border-purple-100 bg-white/80 p-2.5 shadow-sm backdrop-blur-md transition hover:bg-white sm:flex">
// //               <IconSun size={18} className="text-[#64748B]" />
// //             </button>

// //             <div className="hidden items-center gap-2 rounded-xl border border-purple-100 bg-white/80 px-3 py-2.5 shadow-sm backdrop-blur-md md:flex">
// //               <IconBrandGithub size={18} className="text-[#6366F1]" />
// //               <span className="text-xs font-semibold text-[#64748B]">
// //                 {stats.connected === "Yes" ? "Connected" : "Not Connected"}
// //               </span>
// //             </div>

// //             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] text-sm font-bold text-white shadow-md ring-2 ring-white">
// //               {user?.username?.[0]?.toUpperCase() ||
// //                 user?.email?.[0]?.toUpperCase() ||
// //                 "U"}
// //             </div>
// //           </div>
// //         </header>

// //         {/* ── Stat Cards (fully light, high contrast) ── */}
// //         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
// //           {statItems.map((item, i) => (
// //             <div
// //               key={i}
// //               className="group relative overflow-hidden rounded-[20px] border border-purple-100/70 bg-white/90 p-5 shadow-[0_2px_12px_rgba(139,92,246,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(139,92,246,0.12)]"
// //             >
// //               <div
// //                 className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-50"
// //                 style={{ backgroundColor: item.color }}
// //               />

// //               <div className="relative flex items-start justify-between">
// //                 <div className="space-y-3">
// //                   {/* Icon */}
// //                   <div
// //                     className="flex h-10 w-10 items-center justify-center rounded-xl"
// //                     style={{ backgroundColor: `${item.color}18` }}
// //                   >
// //                     <item.icon size={20} style={{ color: item.color }} />
// //                   </div>

// //                   {/* Label + Value */}
// //                   <div>
// //                     <p className="text-sm font-medium text-[#64748B]">
// //                       {item.label}
// //                     </p>
// //                     <p className="mt-1 text-3xl font-extrabold tracking-tight text-[#11183A]">
// //                       {item.value}
// //                     </p>
// //                   </div>

// //                   {/* Trend */}
// //                   {item.trend ? (
// //                     <div className="flex items-center gap-1.5 text-[11px] font-medium">
// //                       <span
// //                         className={
// //                           item.trendUp ? "text-green-600" : "text-red-500"
// //                         }
// //                       >
// //                         {item.trend}
// //                       </span>
// //                       <span className="text-[#94A3B8]">{item.trendLabel}</span>
// //                     </div>
// //                   ) : (
// //                     <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#94A3B8]">
// //                       <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
// //                       {item.trendLabel}
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* Sparkline */}
// //                 <div className="pt-8">
// //                   <MiniSparkline color={item.sparkColor} data={item.sparkData} />
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* ── Analyzer + Rate Limits ── */}
// //         <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
// //           <div className="overflow-hidden rounded-[22px] border border-purple-100/70 bg-white/90 shadow-[0_2px_12px_rgba(139,92,246,0.06)] backdrop-blur-xl">
// //             <div className="p-6">
// //               <GithubAnalyzer />
// //             </div>
// //           </div>
// //           <div className="overflow-hidden rounded-[22px] border border-purple-100/70 bg-white/90 shadow-[0_2px_12px_rgba(139,92,246,0.06)] backdrop-blur-xl">
// //             <div className="p-6">
// //               <RateLimitsWidget />
// //             </div>
// //           </div>
// //         </div>

// //         {/* ── Recent Reviews + Right Column ── */}
// //         <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
// //           <div className="overflow-hidden rounded-[22px] border border-purple-100/70 bg-white/90 shadow-[0_2px_12px_rgba(139,92,246,0.06)] backdrop-blur-xl lg:col-span-2">
// //             <div className="flex items-center justify-between border-b border-purple-100/50 px-6 py-5">
// //               <div className="flex items-center gap-2.5">
// //                 <IconShieldCheck size={18} className="text-[#8B5CF6]" />
// //                 <h2 className="text-base font-bold text-[#11183A]">
// //                   Recent Reviews
// //                 </h2>
// //               </div>
// //               <Link
// //                 href="/dashboard/history"
// //                 className="flex items-center gap-1 text-sm font-semibold text-[#8B5CF6] transition hover:text-[#7C3AED]"
// //               >
// //                 View All Reviews
// //                 <IconArrowRight size={16} />
// //               </Link>
// //             </div>

// //             {/* Desktop table */}
// //             <div className="hidden md:block">
// //               <div className="grid grid-cols-12 gap-4 bg-purple-50/40 px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
// //                 <div className="col-span-4">Repository</div>
// //                 <div className="col-span-2">Date</div>
// //                 <div className="col-span-2">Status</div>
// //                 <div className="col-span-2">Issues</div>
// //                 <div className="col-span-2 text-right">Actions</div>
// //               </div>
// //               <div className="divide-y divide-purple-100/40">
// //                 {recentReviews.length === 0 ? (
// //                   <div className="py-16 text-center text-sm text-[#94A3B8]">
// //                     No reviews yet. Start your first scan! 🚀
// //                   </div>
// //                 ) : (
// //                   recentReviews.map((review) => (
// //                     <div
// //                       key={review.id}
// //                       className="grid grid-cols-12 items-center gap-4 px-6 py-4 transition hover:bg-purple-50/30"
// //                     >
// //                       <div className="col-span-4 flex items-center gap-3">
// //                         <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111827]">
// //                           <IconBrandGithub size={16} className="text-white" />
// //                         </div>
// //                         <div className="min-w-0">
// //                           <p className="truncate text-sm font-semibold text-[#11183A]">
// //                             {review.repositoryName}
// //                           </p>
// //                           <p className="truncate text-[11px] text-[#94A3B8]">
// //                             {review.repositoryOwner}/{review.repositoryName}
// //                           </p>
// //                         </div>
// //                       </div>
// //                       <div className="col-span-2">
// //                         <p className="text-sm text-[#64748B]">
// //                           {new Date(review.createdAt).toLocaleDateString(
// //                             "en-US",
// //                             { month: "short", day: "numeric", year: "numeric" }
// //                           )}
// //                         </p>
// //                       </div>
// //                       <div className="col-span-2">
// //                         <span
// //                           className={cn(
// //                             "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold",
// //                             review.status === "completed"
// //                               ? "border-green-200 bg-green-50 text-green-600"
// //                               : review.status === "pending"
// //                               ? "border-amber-200 bg-amber-50 text-amber-600"
// //                               : "border-red-200 bg-red-50 text-red-600"
// //                           )}
// //                         >
// //                           <span
// //                             className={cn(
// //                               "h-1.5 w-1.5 rounded-full",
// //                               review.status === "completed"
// //                                 ? "bg-green-500"
// //                                 : review.status === "pending"
// //                                 ? "bg-amber-500"
// //                                 : "bg-red-500"
// //                             )}
// //                           />
// //                           {review.status.charAt(0).toUpperCase() +
// //                             review.status.slice(1)}
// //                         </span>
// //                       </div>
// //                       <div className="col-span-2 text-sm font-semibold text-[#11183A]">
// //                         {review.issuesFoundCount || 0}
// //                       </div>
// //                       <div className="col-span-2 text-right">
// //                         <Link
// //                           href={`/dashboard/review/scan?reviewId=${review.id}&owner=${review.repositoryOwner}&repo=${review.repositoryName}`}
// //                           className="inline-flex items-center gap-1 rounded-lg border border-[#8B5CF6]/20 px-4 py-1.5 text-sm font-semibold text-[#8B5CF6] transition hover:border-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white"
// //                         >
// //                           View Review
// //                           <IconArrowRight size={14} />
// //                         </Link>
// //                       </div>
// //                     </div>
// //                   ))
// //                 )}
// //               </div>
// //             </div>

// //             {/* Mobile */}
// //             <div className="divide-y divide-purple-100/40 md:hidden">
// //               {recentReviews.length === 0 ? (
// //                 <div className="py-16 text-center text-sm text-[#94A3B8]">
// //                   No reviews yet. Start your first scan! 🚀
// //                 </div>
// //               ) : (
// //                 recentReviews.map((review) => (
// //                   <div key={review.id} className="space-y-3 p-5">
// //                     <div className="flex items-center gap-3">
// //                       <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111827]">
// //                         <IconBrandGithub size={16} className="text-white" />
// //                       </div>
// //                       <div className="min-w-0 flex-1">
// //                         <p className="truncate text-sm font-semibold text-[#11183A]">
// //                           {review.repositoryName}
// //                         </p>
// //                         <p className="truncate text-[11px] text-[#94A3B8]">
// //                           {review.repositoryOwner}/{review.repositoryName}
// //                         </p>
// //                       </div>
// //                       <span
// //                         className={cn(
// //                           "rounded-full border px-2.5 py-1 text-[11px] font-bold",
// //                           review.status === "completed"
// //                             ? "border-green-200 bg-green-50 text-green-600"
// //                             : review.status === "pending"
// //                             ? "border-amber-200 bg-amber-50 text-amber-600"
// //                             : "border-red-200 bg-red-50 text-red-600"
// //                         )}
// //                       >
// //                         {review.status}
// //                       </span>
// //                     </div>
// //                     <div className="flex items-center justify-between text-sm">
// //                       <span className="text-[#64748B]">
// //                         {new Date(review.createdAt).toLocaleDateString(
// //                           "en-US",
// //                           { month: "short", day: "numeric", year: "numeric" }
// //                         )}
// //                       </span>
// //                       <span className="font-medium text-[#64748B]">
// //                         {review.issuesFoundCount || 0} issues
// //                       </span>
// //                     </div>
// //                     <Link
// //                       href={`/dashboard/review/scan?reviewId=${review.id}&owner=${review.repositoryOwner}&repo=${review.repositoryName}`}
// //                       className="flex w-full items-center justify-center gap-1 rounded-xl border border-[#8B5CF6]/20 py-2.5 text-sm font-semibold text-[#8B5CF6] transition hover:bg-[#8B5CF6] hover:text-white"
// //                     >
// //                       View Review
// //                       <IconArrowRight size={14} />
// //                     </Link>
// //                   </div>
// //                 ))
// //               )}
// //             </div>
// //           </div>

// //           {/* Right column */}
// //           <div className="flex flex-col gap-6">
// //             <div className="rounded-[22px] border border-purple-100/70 bg-white/90 p-6 shadow-[0_2px_12px_rgba(139,92,246,0.06)] backdrop-blur-xl">
// //               <div className="mb-5 flex items-center gap-2.5">
// //                 <IconBolt size={18} className="text-[#8B5CF6]" />
// //                 <h2 className="text-base font-bold text-[#11183A]">
// //                   Quick Actions
// //                 </h2>
// //               </div>
// //               <Link
// //                 href="/dashboard/repositories"
// //                 className="group flex items-center gap-4 rounded-xl border border-purple-100/60 bg-purple-50/40 p-4 transition hover:border-purple-200 hover:bg-purple-50 hover:shadow-md"
// //               >
// //                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#111827] transition group-hover:scale-110">
// //                   <IconBrandGithub className="text-white" size={22} />
// //                 </div>
// //                 <div className="min-w-0 flex-1">
// //                   <p className="text-sm font-semibold text-[#11183A]">
// //                     Connect Repository
// //                   </p>
// //                   <p className="mt-0.5 text-xs text-[#94A3B8]">
// //                     Scan a new GitHub repository
// //                   </p>
// //                 </div>
// //                 <IconArrowRight
// //                   size={18}
// //                   className="shrink-0 text-[#94A3B8] transition group-hover:translate-x-1 group-hover:text-[#8B5CF6]"
// //                 />
// //               </Link>
// //             </div>

// //             <div className="relative overflow-hidden rounded-[22px] border border-purple-100/70 bg-white/90 p-8 shadow-[0_2px_12px_rgba(139,92,246,0.06)] backdrop-blur-xl">
// //               <div className="pointer-events-none absolute left-1/2 top-8 h-56 w-56 -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
// //               <div className="relative z-10 mb-6 flex items-center gap-2.5">
// //                 <IconShieldCheck size={18} className="text-[#8B5CF6]" />
// //                 <h2 className="text-base font-bold text-[#11183A]">
// //                   Code Health Score
// //                 </h2>
// //               </div>
// //               <div className="relative z-10 flex flex-col items-center gap-8 sm:flex-row">
// //                 <div className="relative">
// //                   <CircularProgress value={84} size={160} strokeWidth={14} />
// //                   <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
// //                     <span className="text-4xl font-extrabold text-[#11183A]">
// //                       84
// //                     </span>
// //                     <span className="text-xs font-medium text-[#94A3B8]">
// //                       /100
// //                     </span>
// //                   </div>
// //                 </div>
// //                 <div className="text-center sm:text-left">
// //                   <p className="mb-1 text-xl font-bold text-[#8B5CF6]">Good</p>
// //                   <p className="text-sm leading-relaxed text-[#64748B]">
// //                     Your codebase is in good condition.
// //                     <br />
// //                     Keep up the great work! 🚀
// //                   </p>
// //                   <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#94A3B8]">
// //                     <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
// //                     Updated just now
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// "use client";

// import { useEffect, useState } from "react";
// import StatCard from "@/components/dashboard/StatCard";
// import CircularProgress from "@/components/dashboard/CircularProgress";
// import GithubAnalyzer from "@/components/dashboard/GithubAnalyzer";
// import RateLimitsWidget from "@/components/dashboard/RateLimitsWidget";
// import {
//   IconTrendingUp,
//   IconAlertTriangle,
//   IconCircleCheck,
//   IconBrandGithub,
//   IconLoader2,
//   IconSearch,
//   IconSparkles,
//   IconBell,
//   IconSun,
//   IconChevronRight,
//   IconArrowRight,
// } from "@tabler/icons-react";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// interface Review {
//   id: string;
//   repositoryName: string;
//   repositoryOwner: string;
//   createdAt: string;
//   status: "pending" | "completed" | "failed";
//   prUrl?: string;
//   issuesFoundCount?: number;
// }

// const STATUS_STYLES: Record<Review["status"], { dot: string; text: string; bg: string; label: string }> = {
//   completed: { dot: "#22C55E", text: "#15803D", bg: "rgba(34,197,94,0.10)", label: "Completed" },
//   pending: { dot: "#F59E0B", text: "#B45309", bg: "rgba(245,158,11,0.10)", label: "Pending" },
//   failed: { dot: "#EF4444", text: "#B91C1C", bg: "rgba(239,68,68,0.10)", label: "Failed" },
// };

// export default function DashboardHome() {
//   const [stats, setStats] = useState<{
//     total: number;
//     issues: number | string;
//     fixes: number;
//     connected: string;
//   }>({
//     total: 0,
//     issues: "N/A",
//     fixes: 0,
//     connected: "No",
//   });
//   const [recentReviews, setRecentReviews] = useState<Review[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState<any>(null);
//   const [searchValue, setSearchValue] = useState("");

//   useEffect(() => {
//     async function fetchDashboardData() {
//       try {
//         const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
//         const token = tokenMatch ? tokenMatch[2] : null;

//         if (!token) {
//           setLoading(false);
//           return;
//         }

//         const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

//         // Fetch User
//         const userRes = await fetch(`${API_URL}/api/users/me`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const userData = await userRes.json();
//         setUser(userData);

//         // Fetch Reviews
//         const reviewsRes = await fetch(`${API_URL}/api/reviews?sort=createdAt:desc&pagination[pageSize]=10`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const reviewsData = await reviewsRes.json();
//         const reviews: Review[] = reviewsData.data || [];

//         const fixesApplied = reviews.filter((r) => r.prUrl || r.status === "completed").length;
//         const totalIssues = reviews.reduce((sum, r) => sum + (r.issuesFoundCount || 0), 0);

//         setStats({
//           total: reviewsData.meta?.pagination?.total ?? reviews.length,
//           issues: totalIssues,
//           fixes: fixesApplied,
//           connected: userData.githubConnected ? "Yes" : "No",
//         });

//         setRecentReviews(reviews.slice(0, 5));
//       } catch (err) {
//         console.error("Dashboard fetch error:", err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchDashboardData();
//   }, []);

//   // Loading State
//   if (loading) {
//     return (
//       <div
//         className="relative flex h-[70vh] items-center justify-center overflow-hidden rounded-[24px]"
//         style={{ background: "#F3F0FF" }}
//       >
//         <div
//           className="pointer-events-none absolute inset-0 opacity-60"
//           style={{ background: "radial-gradient(circle at 30% 20%, rgba(139,92,246,0.18) 0%, transparent 55%), radial-gradient(circle at 80% 80%, rgba(79,140,255,0.14) 0%, transparent 55%)" }}
//         />
//         <div className="relative flex flex-col items-center gap-4">
//           <IconLoader2 className="h-10 w-10 animate-spin" style={{ color: "#8B5CF6" }} />
//           <p style={{ color: "#64748B" }}>Loading your dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   const userInitial = (user?.username || user?.email || "U").charAt(0).toUpperCase();

//   return (
//     <div
//       className="relative min-h-screen -m-4 sm:-m-6 lg:-m-8 p-4 sm:p-6 lg:p-8"
//       style={{ background: "#F3F0FF" }}
//     >
//       {/* Ambient background glow */}
//       <div
//         className="pointer-events-none fixed inset-0 opacity-70"
//         style={{
//           background:
//             "radial-gradient(circle at 15% 0%, rgba(139,92,246,0.14) 0%, transparent 45%), radial-gradient(circle at 90% 15%, rgba(0,184,217,0.10) 0%, transparent 40%), radial-gradient(circle at 50% 100%, rgba(124,58,237,0.08) 0%, transparent 50%)",
//         }}
//       />

//       <div className="relative max-w-[1400px] mx-auto space-y-6 sm:space-y-8">
//         {/* ── Top Header ── */}
//         <div
//           className="rounded-[22px] border p-5 sm:p-6 backdrop-blur-xl"
//           style={{ background: "rgba(255,255,255,0.70)", borderColor: "rgba(139,92,246,0.12)", boxShadow: "0 4px 24px -8px rgba(139,92,246,0.10)" }}
//         >
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
//             {/* Left: title */}
//             <div>
//               <span
//                 className="text-[11px] font-bold uppercase tracking-[0.15em]"
//                 style={{
//                   background: "linear-gradient(90deg, #8B5CF6, #4F8CFF)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 CodeSentry AI
//               </span>
//               <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mt-0.5" style={{ color: "#11183A" }}>
//                 Dashboard
//               </h1>
//               <p className="text-sm mt-1" style={{ color: "#64748B" }}>
//                 Welcome back{user?.username ? `, ${user.username}` : ""}! Here&apos;s what&apos;s happening with your code today.
//               </p>
//             </div>

//             {/* Center: status pill */}
//             <div className="hidden md:flex items-center">
//               <div
//                 className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
//                 style={{ background: "rgba(34,197,94,0.10)", border: "1px solid rgba(34,197,94,0.25)", color: "#15803D" }}
//               >
//                 <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#22C55E" }} />
//                 AI System Online
//               </div>
//             </div>

//             {/* Right: actions */}
//             <div className="flex items-center gap-3 flex-wrap">
//               {/* Search */}
//               <div
//                 className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-xl w-56"
//                 style={{ background: "rgba(139,92,246,0.05)", border: "1px solid rgba(139,92,246,0.14)" }}
//               >
//                 <IconSearch className="w-4 h-4 shrink-0" style={{ color: "#94A3B8" }} />
//                 <input
//                   type="text"
//                   value={searchValue}
//                   onChange={(e) => setSearchValue(e.target.value)}
//                   placeholder="Search repositories..."
//                   className="bg-transparent text-sm outline-none w-full placeholder:text-[#94A3B8]"
//                   style={{ color: "#11183A" }}
//                 />
//                 <kbd
//                   className="hidden lg:inline-block text-[10px] font-semibold px-1.5 py-0.5 rounded"
//                   style={{ background: "rgba(139,92,246,0.10)", color: "#8B5CF6" }}
//                 >
//                   ⌘K
//                 </kbd>
//               </div>

//               {/* New Review */}
//               <Link
//                 href="/dashboard/review/new"
//                 className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all active:scale-95"
//                 style={{ background: "linear-gradient(135deg, #8B5CF6, #7C3AED)", boxShadow: "0 4px 16px -4px rgba(139,92,246,0.45)" }}
//               >
//                 <IconSparkles className="w-4 h-4" />
//                 <span className="hidden sm:inline">New Review</span>
//               </Link>

//               {/* Notifications */}
//               <button
//                 type="button"
//                 aria-label="Notifications"
//                 className="relative p-2.5 rounded-xl transition-colors hover:bg-[rgba(139,92,246,0.08)]"
//                 style={{ border: "1px solid rgba(139,92,246,0.14)" }}
//               >
//                 <IconBell className="w-4 h-4" style={{ color: "#64748B" }} />
//                 <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full" style={{ background: "#EF4444" }} />
//               </button>

//               {/* Theme toggle (decorative) */}
//               <button
//                 type="button"
//                 aria-label="Toggle theme"
//                 className="hidden sm:flex p-2.5 rounded-xl transition-colors hover:bg-[rgba(139,92,246,0.08)]"
//                 style={{ border: "1px solid rgba(139,92,246,0.14)" }}
//               >
//                 <IconSun className="w-4 h-4" style={{ color: "#64748B" }} />
//               </button>

//               {/* GitHub connected status */}
//               <div
//                 className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium"
//                 style={{ border: "1px solid rgba(139,92,246,0.14)", color: stats.connected === "Yes" ? "#15803D" : "#64748B" }}
//               >
//                 <IconBrandGithub className="w-4 h-4" />
//                 {stats.connected === "Yes" ? "Connected" : "Not Connected"}
//               </div>

//               {/* Avatar */}
//               <div
//                 className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0 overflow-hidden"
//                 style={{ background: "linear-gradient(135deg, #8B5CF6, #4F8CFF)" }}
//               >
//                 {user?.avatarUrl ? (
//                   // eslint-disable-next-line @next/next/no-img-element
//                   <img src={user.avatarUrl} alt={user?.username || "User"} className="w-full h-full object-cover" />
//                 ) : (
//                   userInitial
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── Stats Row ── */}
//         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {[
//             { label: "Total Reviews", value: stats.total, icon: IconTrendingUp, color: "#8B5CF6" },
//             { label: "Issues Found", value: stats.issues, icon: IconAlertTriangle, color: "#F59E0B" },
//             { label: "Fixes Applied", value: stats.fixes, icon: IconCircleCheck, color: "#22C55E" },
//             { label: "GitHub Connected", value: stats.connected, icon: IconBrandGithub, color: "#4F8CFF" },
//           ].map((item, i) => (
//             <StatCard key={i} label={item.label} value={item.value} icon={item.icon} color={item.color} />
//           ))}
//         </div>

//         {/* ── Analyzer + Rate Limits ── */}
//         <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
//           <GithubAnalyzer />
//           <RateLimitsWidget />
//         </div>

//         {/* ── Main Content Grid ── */}
//         <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
//           {/* Recent Reviews */}
//           <div className="lg:col-span-2">
//             <div
//               className="rounded-[22px] border backdrop-blur-xl overflow-hidden"
//               style={{ background: "rgba(255,255,255,0.70)", borderColor: "rgba(139,92,246,0.12)", boxShadow: "0 4px 24px -8px rgba(139,92,246,0.10)" }}
//             >
//               <div className="border-b px-6 py-4 flex items-center justify-between" style={{ borderColor: "rgba(139,92,246,0.10)" }}>
//                 <h2 className="text-lg font-semibold" style={{ color: "#11183A" }}>Recent Reviews</h2>
//                 <Link
//                   href="/dashboard/history"
//                   className="text-xs font-semibold flex items-center gap-1 transition-colors"
//                   style={{ color: "#8B5CF6" }}
//                 >
//                   View All Reviews <IconArrowRight className="w-3.5 h-3.5" />
//                 </Link>
//               </div>

//               {recentReviews.length === 0 ? (
//                 <div className="py-16 text-center" style={{ color: "#94A3B8" }}>
//                   No reviews yet. Start your first scan! 🚀
//                 </div>
//               ) : (
//                 <>
//                   {/* Desktop table */}
//                   <div className="hidden md:block overflow-x-auto">
//                     <table className="w-full text-sm">
//                       <thead>
//                         <tr style={{ color: "#94A3B8" }} className="text-left text-xs uppercase tracking-wider">
//                           <th className="px-6 py-3 font-medium">Repository</th>
//                           <th className="px-6 py-3 font-medium">Date</th>
//                           <th className="px-6 py-3 font-medium">Status</th>
//                           <th className="px-6 py-3 font-medium">Issues</th>
//                           <th className="px-6 py-3 font-medium text-right">Actions</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {recentReviews.map((review) => {
//                           const s = STATUS_STYLES[review.status];
//                           return (
//                             <tr
//                               key={review.id}
//                               className="transition-colors hover:bg-[rgba(139,92,246,0.04)]"
//                               style={{ borderTop: "1px solid rgba(139,92,246,0.08)" }}
//                             >
//                               <td className="px-6 py-4">
//                                 <div className="flex items-center gap-2.5">
//                                   <IconBrandGithub className="w-4 h-4 shrink-0" style={{ color: "#94A3B8" }} />
//                                   <span className="font-medium" style={{ color: "#11183A" }}>
//                                     {review.repositoryOwner}/{review.repositoryName}
//                                   </span>
//                                 </div>
//                               </td>
//                               <td className="px-6 py-4" style={{ color: "#64748B" }}>
//                                 {new Date(review.createdAt).toLocaleDateString("en-US", {
//                                   month: "short",
//                                   day: "numeric",
//                                   year: "numeric",
//                                 })}
//                               </td>
//                               <td className="px-6 py-4">
//                                 <span
//                                   className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
//                                   style={{ background: s.bg, color: s.text }}
//                                 >
//                                   <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.dot }} />
//                                   {s.label}
//                                 </span>
//                               </td>
//                               <td className="px-6 py-4 font-medium" style={{ color: "#11183A" }}>
//                                 {review.issuesFoundCount ?? 0}
//                               </td>
//                               <td className="px-6 py-4 text-right">
//                                 <Link
//                                   href={`/dashboard/review/scan?reviewId=${review.id}&owner=${review.repositoryOwner}&repo=${review.repositoryName}`}
//                                   className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all"
//                                   style={{ background: "rgba(139,92,246,0.10)", color: "#7C3AED", border: "1px solid rgba(139,92,246,0.20)" }}
//                                 >
//                                   View Review <IconChevronRight className="w-3 h-3" />
//                                 </Link>
//                               </td>
//                             </tr>
//                           );
//                         })}
//                       </tbody>
//                     </table>
//                   </div>

//                   {/* Mobile cards */}
//                   <div className="md:hidden divide-y" style={{ borderColor: "rgba(139,92,246,0.08)" }}>
//                     {recentReviews.map((review) => {
//                       const s = STATUS_STYLES[review.status];
//                       return (
//                         <div key={review.id} className="px-5 py-4 space-y-2.5" style={{ borderColor: "rgba(139,92,246,0.08)" }}>
//                           <div className="flex items-center justify-between">
//                             <div className="flex items-center gap-2 min-w-0">
//                               <IconBrandGithub className="w-4 h-4 shrink-0" style={{ color: "#94A3B8" }} />
//                               <span className="font-medium truncate" style={{ color: "#11183A" }}>
//                                 {review.repositoryOwner}/{review.repositoryName}
//                               </span>
//                             </div>
//                             <span
//                               className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium shrink-0"
//                               style={{ background: s.bg, color: s.text }}
//                             >
//                               <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.dot }} />
//                               {s.label}
//                             </span>
//                           </div>
//                           <div className="flex items-center justify-between text-xs" style={{ color: "#64748B" }}>
//                             <span>
//                               {new Date(review.createdAt).toLocaleDateString("en-US", {
//                                 month: "short",
//                                 day: "numeric",
//                                 year: "numeric",
//                               })}
//                               {" • "}
//                               {review.issuesFoundCount ?? 0} issues
//                             </span>
//                           </div>
//                           <Link
//                             href={`/dashboard/review/scan?reviewId=${review.id}&owner=${review.repositoryOwner}&repo=${review.repositoryName}`}
//                             className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold"
//                             style={{ background: "rgba(139,92,246,0.10)", color: "#7C3AED", border: "1px solid rgba(139,92,246,0.20)" }}
//                           >
//                             View Review <IconChevronRight className="w-3 h-3" />
//                           </Link>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Right Sidebar */}
//           <div className="flex flex-col gap-6">
//             {/* Quick Actions */}
//             <div
//               className="rounded-[22px] border p-6 backdrop-blur-xl"
//               style={{ background: "rgba(255,255,255,0.70)", borderColor: "rgba(139,92,246,0.12)", boxShadow: "0 4px 24px -8px rgba(139,92,246,0.10)" }}
//             >
//               <h2 className="text-lg font-semibold mb-5" style={{ color: "#11183A" }}>Quick Actions</h2>

//               <Link
//                 href="/dashboard/repositories"
//                 className="group flex items-center gap-3 p-4 rounded-2xl transition-all"
//                 style={{ background: "rgba(139,92,246,0.05)", border: "1px solid rgba(139,92,246,0.12)" }}
//               >
//                 <div
//                   className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
//                   style={{ background: "rgba(139,92,246,0.12)", color: "#8B5CF6" }}
//                 >
//                   <IconBrandGithub size={22} />
//                 </div>
//                 <div className="min-w-0 flex-1">
//                   <p className="font-semibold" style={{ color: "#11183A" }}>Connect Repository</p>
//                   <p className="text-xs" style={{ color: "#64748B" }}>Scan a new GitHub repo</p>
//                 </div>
//                 <IconChevronRight className="w-4 h-4 shrink-0" style={{ color: "#94A3B8" }} />
//               </Link>
//             </div>

//             {/* Health Score */}
//             <div
//               className="relative rounded-[22px] border p-8 flex flex-col items-center text-center backdrop-blur-xl overflow-hidden"
//               style={{ background: "rgba(255,255,255,0.70)", borderColor: "rgba(139,92,246,0.12)", boxShadow: "0 4px 24px -8px rgba(139,92,246,0.10)" }}
//             >
//               <div
//                 className="pointer-events-none absolute w-48 h-48 rounded-full blur-3xl top-8 opacity-40"
//                 style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)" }}
//               />

//               <h2 className="relative text-lg font-semibold mb-6" style={{ color: "#11183A" }}>Code Health Score</h2>

//               <div className="relative">
//                 <CircularProgress value={84} size={160} strokeWidth={14} />
//               </div>

//               <p className="relative font-semibold mt-4" style={{ color: "#8B5CF6" }}>Good</p>
//               <p className="relative text-sm mt-2 max-w-[220px]" style={{ color: "#64748B" }}>
//                 Your codebase is in good condition.
//                 <br />
//                 Keep pushing! <span>🚀</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import StatCard from "@/components/dashboard/StatCard";
import CircularProgress from "@/components/dashboard/CircularProgress";
import GithubAnalyzer from "@/components/dashboard/GithubAnalyzer";
import RateLimitsWidget from "@/components/dashboard/RateLimitsWidget";
import {
  IconTrendingUp,
  IconAlertTriangle,
  IconCircleCheck,
  IconBrandGithub,
  IconLoader2,
  IconChevronRight,
  IconArrowRight,
} from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Review {
  id: string;
  repositoryName: string;
  repositoryOwner: string;
  createdAt: string;
  status: "pending" | "completed" | "failed";
  prUrl?: string;
  issuesFoundCount?: number;
}

const STATUS_STYLES: Record<Review["status"], { dot: string; text: string; bg: string; label: string }> = {
  completed: { dot: "#22C55E", text: "#15803D", bg: "rgba(34,197,94,0.10)", label: "Completed" },
  pending: { dot: "#F59E0B", text: "#B45309", bg: "rgba(245,158,11,0.10)", label: "Pending" },
  failed: { dot: "#EF4444", text: "#B91C1C", bg: "rgba(239,68,68,0.10)", label: "Failed" },
};

export default function DashboardHome() {
  const [stats, setStats] = useState<{
    total: number;
    issues: number | string;
    fixes: number;
    connected: string;
  }>({
    total: 0,
    issues: "N/A",
    fixes: 0,
    connected: "No",
  });
  const [recentReviews, setRecentReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
        const token = tokenMatch ? tokenMatch[2] : null;

        if (!token) {
          setLoading(false);
          return;
        }

        const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

        // Fetch User
        const userRes = await fetch(`${API_URL}/api/users/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const userData = await userRes.json();
        setUser(userData);

        // Fetch Reviews
        const reviewsRes = await fetch(`${API_URL}/api/reviews?sort=createdAt:desc&pagination[pageSize]=10`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const reviewsData = await reviewsRes.json();
        const reviews: Review[] = reviewsData.data || [];

        const fixesApplied = reviews.filter((r) => r.prUrl || r.status === "completed").length;
        const totalIssues = reviews.reduce((sum, r) => sum + (r.issuesFoundCount || 0), 0);

        setStats({
          total: reviewsData.meta?.pagination?.total ?? reviews.length,
          issues: totalIssues,
          fixes: fixesApplied,
          connected: userData.githubConnected ? "Yes" : "No",
        });

        setRecentReviews(reviews.slice(0, 5));
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  // Loading State
  if (loading) {
    return (
      <div
        className="relative flex h-[70vh] items-center justify-center overflow-hidden rounded-[24px]"
        style={{ background: "#F3F0FF" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(circle at 30% 20%, rgba(139,92,246,0.18) 0%, transparent 55%), radial-gradient(circle at 80% 80%, rgba(79,140,255,0.14) 0%, transparent 55%)" }}
        />
        <div className="relative flex flex-col items-center gap-4">
          <IconLoader2 className="h-10 w-10 animate-spin" style={{ color: "#8B5CF6" }} />
          <p style={{ color: "#64748B" }}>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen -m-4 sm:-m-6 lg:-m-8 p-4 sm:p-6 lg:p-8"
      style={{ background: "#F3F0FF" }}
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none fixed inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 15% 0%, rgba(139,92,246,0.14) 0%, transparent 45%), radial-gradient(circle at 90% 15%, rgba(0,184,217,0.10) 0%, transparent 40%), radial-gradient(circle at 50% 100%, rgba(124,58,237,0.08) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto space-y-6 sm:space-y-8">
        {/* ── Page intro ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: "#11183A" }}>
              Welcome back{user?.username ? `, ${user.username}` : ""} 👋
            </h1>
            <p className="text-sm mt-1" style={{ color: "#64748B" }}>
              Here&apos;s what&apos;s happening with your code today.
            </p>
          </div>

          <div
            className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
            style={{ background: "rgba(34,197,94,0.10)", border: "1px solid rgba(34,197,94,0.25)", color: "#15803D" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#22C55E" }} />
            AI System Online
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Total Reviews", value: stats.total, icon: IconTrendingUp, color: "#8B5CF6" },
            { label: "Issues Found", value: stats.issues, icon: IconAlertTriangle, color: "#F59E0B" },
            { label: "Fixes Applied", value: stats.fixes, icon: IconCircleCheck, color: "#22C55E" },
            { label: "GitHub Connected", value: stats.connected, icon: IconBrandGithub, color: "#4F8CFF" },
          ].map((item, i) => (
            <StatCard key={i} label={item.label} value={item.value} icon={item.icon} color={item.color} />
          ))}
        </div>

        {/* ── Analyzer + Rate Limits ── */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <GithubAnalyzer />
          <RateLimitsWidget />
        </div>

        {/* ── Main Content Grid ── */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Recent Reviews */}
          <div className="lg:col-span-2">
            <div
              className="rounded-[22px] border backdrop-blur-xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.70)", borderColor: "rgba(139,92,246,0.12)", boxShadow: "0 4px 24px -8px rgba(139,92,246,0.10)" }}
            >
              <div className="border-b px-6 py-4 flex items-center justify-between" style={{ borderColor: "rgba(139,92,246,0.10)" }}>
                <h2 className="text-lg font-semibold" style={{ color: "#11183A" }}>Recent Reviews</h2>
                <Link
                  href="/dashboard/history"
                  className="text-xs font-semibold flex items-center gap-1 transition-colors"
                  style={{ color: "#8B5CF6" }}
                >
                  View All Reviews <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {recentReviews.length === 0 ? (
                <div className="py-16 text-center" style={{ color: "#94A3B8" }}>
                  No reviews yet. Start your first scan! 🚀
                </div>
              ) : (
                <>
                  {/* Desktop table */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr style={{ color: "#94A3B8" }} className="text-left text-xs uppercase tracking-wider">
                          <th className="px-6 py-3 font-medium">Repository</th>
                          <th className="px-6 py-3 font-medium">Date</th>
                          <th className="px-6 py-3 font-medium">Status</th>
                          <th className="px-6 py-3 font-medium">Issues</th>
                          <th className="px-6 py-3 font-medium text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentReviews.map((review) => {
                          const s = STATUS_STYLES[review.status];
                          return (
                            <tr
                              key={review.id}
                              className="transition-colors hover:bg-[rgba(139,92,246,0.04)]"
                              style={{ borderTop: "1px solid rgba(139,92,246,0.08)" }}
                            >
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-2.5">
                                  <IconBrandGithub className="w-4 h-4 shrink-0" style={{ color: "#94A3B8" }} />
                                  <span className="font-medium" style={{ color: "#11183A" }}>
                                    {review.repositoryOwner}/{review.repositoryName}
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4" style={{ color: "#64748B" }}>
                                {new Date(review.createdAt).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </td>
                              <td className="px-6 py-4">
                                <span
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                                  style={{ background: s.bg, color: s.text }}
                                >
                                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.dot }} />
                                  {s.label}
                                </span>
                              </td>
                              <td className="px-6 py-4 font-medium" style={{ color: "#11183A" }}>
                                {review.issuesFoundCount ?? 0}
                              </td>
                              <td className="px-6 py-4 text-right">
                                <Link
                                  href={`/dashboard/review/scan?reviewId=${review.id}&owner=${review.repositoryOwner}&repo=${review.repositoryName}`}
                                  className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all"
                                  style={{ background: "rgba(139,92,246,0.10)", color: "#7C3AED", border: "1px solid rgba(139,92,246,0.20)" }}
                                >
                                  View Review <IconChevronRight className="w-3 h-3" />
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile cards */}
                  <div className="md:hidden divide-y" style={{ borderColor: "rgba(139,92,246,0.08)" }}>
                    {recentReviews.map((review) => {
                      const s = STATUS_STYLES[review.status];
                      return (
                        <div key={review.id} className="px-5 py-4 space-y-2.5" style={{ borderColor: "rgba(139,92,246,0.08)" }}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 min-w-0">
                              <IconBrandGithub className="w-4 h-4 shrink-0" style={{ color: "#94A3B8" }} />
                              <span className="font-medium truncate" style={{ color: "#11183A" }}>
                                {review.repositoryOwner}/{review.repositoryName}
                              </span>
                            </div>
                            <span
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium shrink-0"
                              style={{ background: s.bg, color: s.text }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.dot }} />
                              {s.label}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-xs" style={{ color: "#64748B" }}>
                            <span>
                              {new Date(review.createdAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                              {" • "}
                              {review.issuesFoundCount ?? 0} issues
                            </span>
                          </div>
                          <Link
                            href={`/dashboard/review/scan?reviewId=${review.id}&owner=${review.repositoryOwner}&repo=${review.repositoryName}`}
                            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold"
                            style={{ background: "rgba(139,92,246,0.10)", color: "#7C3AED", border: "1px solid rgba(139,92,246,0.20)" }}
                          >
                            View Review <IconChevronRight className="w-3 h-3" />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="flex flex-col gap-6">
            {/* Quick Actions */}
            <div
              className="rounded-[22px] border p-6 backdrop-blur-xl"
              style={{ background: "rgba(255,255,255,0.70)", borderColor: "rgba(139,92,246,0.12)", boxShadow: "0 4px 24px -8px rgba(139,92,246,0.10)" }}
            >
              <h2 className="text-lg font-semibold mb-5" style={{ color: "#11183A" }}>Quick Actions</h2>

              <Link
                href="/dashboard/repositories"
                className="group flex items-center gap-3 p-4 rounded-2xl transition-all"
                style={{ background: "rgba(139,92,246,0.05)", border: "1px solid rgba(139,92,246,0.12)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: "rgba(139,92,246,0.12)", color: "#8B5CF6" }}
                >
                  <IconBrandGithub size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold" style={{ color: "#11183A" }}>Connect Repository</p>
                  <p className="text-xs" style={{ color: "#64748B" }}>Scan a new GitHub repo</p>
                </div>
                <IconChevronRight className="w-4 h-4 shrink-0" style={{ color: "#94A3B8" }} />
              </Link>
            </div>

            {/* Health Score */}
            <div
              className="relative rounded-[22px] border p-8 flex flex-col items-center text-center backdrop-blur-xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.70)", borderColor: "rgba(139,92,246,0.12)", boxShadow: "0 4px 24px -8px rgba(139,92,246,0.10)" }}
            >
              <div
                className="pointer-events-none absolute w-48 h-48 rounded-full blur-3xl top-8 opacity-40"
                style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)" }}
              />

              <h2 className="relative text-lg font-semibold mb-6" style={{ color: "#11183A" }}>Code Health Score</h2>

              <div className="relative">
                <CircularProgress value={84} size={160} strokeWidth={14} />
              </div>

              <p className="relative font-semibold mt-4" style={{ color: "#8B5CF6" }}>Good</p>
              <p className="relative text-sm mt-2 max-w-[220px]" style={{ color: "#64748B" }}>
                Your codebase is in good condition.
                <br />
                Keep pushing! <span>🚀</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}