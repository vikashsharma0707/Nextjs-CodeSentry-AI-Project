// // "use client";

// // import { useEffect, useState } from "react";
// // import StatCard from "@/components/dashboard/StatCard";
// // import CircularProgress from "@/components/dashboard/CircularProgress";
// // import GithubAnalyzer from "@/components/dashboard/GithubAnalyzer";
// // import RateLimitsWidget from "@/components/dashboard/RateLimitsWidget";
// // import {
// //   IconTrendingUp,
// //   IconAlertTriangle,
// //   IconCircleCheck,
// //   IconBrandGithub,
// //   IconCodePlus,
// //   IconUpload,
// //   IconLoader2,
// // } from "@tabler/icons-react";
// // import Link from "next/link";
// // import { cn } from "@/lib/utils";

// // export default function DashboardHome() {
// //   const [stats, setStats] = useState({ total: 0, issues: 'N/A', fixes: 0, connected: 'No' });
// //   const [recentReviews, setRecentReviews] = useState<any[]>([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     async function fetchDashboardData() {
// //       try {
// //         const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
// //         const token = tokenMatch ? tokenMatch[2] : null;
// //         if (!token) return;

// //         const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
        
// //         // Fetch User
// //         const userRes = await fetch(`${API_URL}/api/users/me`, {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
// //         const userData = await userRes.json();
        
// //         // Fetch Reviews
// //         const reviewsRes = await fetch(`${API_URL}/api/reviews?sort=createdAt:desc`, {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
// //         const reviewsData = await reviewsRes.json();
        
// //         const reviews = reviewsData.data || [];
// //         const fixesApplied = reviews.filter((r: any) => r.prUrl).length;

// //         setStats({
// //           total: reviews.length,
// //           issues: 'N/A',
// //           fixes: fixesApplied,
// //           connected: userData.githubConnected ? 'Yes' : 'No'
// //         });
        
// //         setRecentReviews(reviews.slice(0, 5));

// //       } catch (err) {
// //         console.error(err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     fetchDashboardData();
// //   }, []);

// //   if (loading) {
// //     return (
// //       <div className="space-y-6 animate-pulse">
// //         {/* Stats Row Skeleton */}
// //         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
// //           {[...Array(4)].map((_, i) => (
// //             <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5 h-24"></div>
// //           ))}
// //         </div>
// //         {/* Main Content Skeleton */}
// //         <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
// //           <div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/5 h-80"></div>
// //           <div className="flex flex-col gap-6">
// //             <div className="rounded-xl border border-white/10 bg-white/5 h-36"></div>
// //             <div className="rounded-xl border border-white/10 bg-white/5 h-56"></div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="space-y-6">
// //       {/* ── Stats Row ── */}
// //       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
// //         <StatCard
// //           label="Total Reviews"
// //           value={stats.total.toString()}
// //           icon={IconTrendingUp}
// //         />
// //         <StatCard
// //           label="Issues Found"
// //           value={stats.issues}
// //           icon={IconAlertTriangle}
// //         />
// //         <StatCard
// //           label="Fixes Applied"
// //           value={stats.fixes.toString()}
// //           icon={IconCircleCheck}
// //         />
// //         <StatCard
// //           label="GitHub Connected"
// //           value={stats.connected}
// //           icon={IconBrandGithub}
// //         />
// //       </div>

// //       {/* ── GitHub Profile AI Analyzer Section ── */}
// //       <GithubAnalyzer />

// //       {/* ── AI Rate Limits & Usage Metrics Section ── */}
// //       <RateLimitsWidget />

// //       {/* ── Main Content Grid ── */}
// //       <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
// //         {/* Left Column: Recent Reviews */}
// //         <div className="lg:col-span-2">
// //           <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
// //             <div className="border-b border-white/10 px-5 py-4">
// //               <h2 className="text-base font-semibold text-white">Recent Reviews</h2>
// //             </div>
// //             <div className="divide-y divide-white/10">
// //               {recentReviews.length === 0 ? (
// //                 <div className="px-5 py-8 text-center text-zinc-500">No recent reviews.</div>
// //               ) : null}
// //               {recentReviews.map((review) => (
// //                 <div
// //                   key={review.id}
// //                   className="flex items-center justify-between px-5 py-4 transition-colors hover:bg-white/5"
// //                 >
// //                   <div className="flex items-center gap-4">
// //                     <div className="flex flex-col">
// //                       <span className="text-sm font-medium text-white">{review.repositoryName}</span>
// //                       <span className="text-xs text-zinc-500">{new Date(review.createdAt).toLocaleDateString()}</span>
// //                     </div>
// //                   </div>

// //                   <div className="flex items-center gap-3 sm:gap-6">
// //                     {/* Status Badge */}
// //                     <span
// //                       className={cn(
// //                         "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium border",
// //                         review.status === "completed"
// //                           ? "bg-green-500/20 text-green-400 border-green-500/30"
// //                           : review.status === "pending"
// //                           ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
// //                           : "bg-red-500/20 text-red-400 border-red-500/30"
// //                       )}
// //                     >
// //                       {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
// //                     </span>

// //                     {/* View Button */}
// //                     <Link
// //                       href={`/dashboard/review/scan?reviewId=${review.id}&owner=${review.repositoryOwner}&repo=${review.repositoryName}`}
// //                       className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/10"
// //                     >
// //                       View
// //                     </Link>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Column: Quick Actions & Score */}
// //         <div className="flex flex-col gap-6">
// //           {/* Quick Actions */}
// //           <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
// //             <h2 className="mb-4 text-base font-semibold text-white">Quick Actions</h2>
// //             <div className="flex flex-col gap-3">
// //               <Link
// //                 href="/dashboard/repositories"
// //                 className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:border-violet-500/50"
// //               >
// //                 <IconBrandGithub className="h-4.5 w-4.5 text-violet-400" />
// //                 Connect a GitHub Repo
// //               </Link>
// //             </div>
// //           </div>

// //           {/* Readiness Score */}
// //           <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm relative overflow-hidden">
// //             <h2 className="absolute top-5 left-5 text-base font-semibold text-white">
// //               Health Score
// //             </h2>
// //             <div className="mt-8 mb-2">
// //               <CircularProgress value={84} size={140} strokeWidth={12} />
// //             </div>
// //             <p className="text-center text-sm text-zinc-400 mt-2">
// //               Your overall codebase health is <strong className="text-white font-medium">Good</strong>. Keep resolving critical issues to reach 90%+.
// //             </p>
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
//   IconCodePlus,
//   IconUpload,
//   IconLoader2,
// } from "@tabler/icons-react";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// export default function DashboardHome() {
//   const [stats, setStats] = useState({ total: 0, issues: 'N/A', fixes: 0, connected: 'No' });
//   const [recentReviews, setRecentReviews] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchDashboardData() {
//       try {
//         const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
//         const token = tokenMatch ? tokenMatch[2] : null;
//         if (!token) return;

//         const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
        
//         // Fetch User
//         const userRes = await fetch(`${API_URL}/api/users/me`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         const userData = await userRes.json();
        
//         // Fetch Reviews
//         const reviewsRes = await fetch(`${API_URL}/api/reviews?sort=createdAt:desc`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         const reviewsData = await reviewsRes.json();
        
//         const reviews = reviewsData.data || [];
//         const fixesApplied = reviews.filter((r: any) => r.prUrl).length;

//         setStats({
//           total: reviews.length,
//           issues: 'N/A',
//           fixes: fixesApplied,
//           connected: userData.githubConnected ? 'Yes' : 'No'
//         });
        
//         setRecentReviews(reviews.slice(0, 5));

//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchDashboardData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="space-y-6 animate-pulse">
//         {/* Stats Row Skeleton */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {[...Array(4)].map((_, i) => (
//             <div key={i} className="rounded-2xl border border-white/[0.08] bg-[#0E1324] h-24"></div>
//           ))}
//         </div>
//         {/* Main Content Skeleton */}
//         <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
//           <div className="lg:col-span-2 rounded-2xl border border-white/[0.08] bg-[#0E1324] h-80"></div>
//           <div className="flex flex-col gap-6">
//             <div className="rounded-2xl border border-white/[0.08] bg-[#0E1324] h-36"></div>
//             <div className="rounded-2xl border border-white/[0.08] bg-[#0E1324] h-56"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       {/* ── Stats Row ── */}
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//         <StatCard
//           label="Total Reviews"
//           value={stats.total.toString()}
//           icon={IconTrendingUp}
//         />
//         <StatCard
//           label="Issues Found"
//           value={stats.issues}
//           icon={IconAlertTriangle}
//         />
//         <StatCard
//           label="Fixes Applied"
//           value={stats.fixes.toString()}
//           icon={IconCircleCheck}
//         />
//         <StatCard
//           label="GitHub Connected"
//           value={stats.connected}
//           icon={IconBrandGithub}
//         />
//       </div>

//       {/* ── GitHub Profile AI Analyzer Section ── */}
//       <GithubAnalyzer />

//       {/* ── AI Rate Limits & Usage Metrics Section ── */}
//       <RateLimitsWidget />

//       {/* ── Main Content Grid ── */}
//       <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
//         {/* Left Column: Recent Reviews */}
//         <div className="lg:col-span-2">
//           <div className="rounded-2xl border border-white/[0.08] bg-[#0E1324] backdrop-blur-sm overflow-hidden">
//             <div className="border-b border-white/[0.08] px-5 py-4">
//               <h2 className="text-base font-semibold text-white">Recent Reviews</h2>
//             </div>
//             <div className="divide-y divide-white/[0.06]">
//               {recentReviews.length === 0 ? (
//                 <div className="px-5 py-8 text-center text-[#7B859E]">No recent reviews.</div>
//               ) : null}
//               {recentReviews.map((review) => (
//                 <div
//                   key={review.id}
//                   className="flex items-center justify-between px-5 py-4 transition-colors hover:bg-white/[0.03]"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="flex flex-col">
//                       <span className="text-sm font-medium text-white">{review.repositoryName}</span>
//                       <span className="text-xs text-[#7B859E]">{new Date(review.createdAt).toLocaleDateString()}</span>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3 sm:gap-6">
//                     {/* Status Badge */}
//                     <span
//                       className={cn(
//                         "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium border",
//                         review.status === "completed"
//                           ? "bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/30"
//                           : review.status === "pending"
//                           ? "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30"
//                           : "bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/30"
//                       )}
//                     >
//                       {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
//                     </span>

//                     {/* View Button */}
//                     <Link
//                       href={`/dashboard/review/scan?reviewId=${review.id}&owner=${review.repositoryOwner}&repo=${review.repositoryName}`}
//                       className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/[0.08] hover:border-[#5B5FFF]/40"
//                     >
//                       View
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Quick Actions & Score */}
//         <div className="flex flex-col gap-6">
//           {/* Quick Actions */}
//           <div className="rounded-2xl border border-white/[0.08] bg-[#0E1324] p-5 backdrop-blur-sm">
//             <h2 className="mb-4 text-base font-semibold text-white">Quick Actions</h2>
//             <div className="flex flex-col gap-3">
//               <Link
//                 href="/dashboard/repositories"
//                 className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.06] hover:border-[#5B5FFF]/40"
//               >
//                 <IconBrandGithub className="h-4.5 w-4.5 text-[#8B8FFF]" />
//                 Connect a GitHub Repo
//               </Link>
//             </div>
//           </div>

//           {/* Readiness Score */}
//           <div className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-[#0E1324] p-6 backdrop-blur-sm relative overflow-hidden">
//             <h2 className="absolute top-5 left-5 text-base font-semibold text-white">
//               Health Score
//             </h2>
//             <div className="mt-8 mb-2">
//               <CircularProgress value={84} size={140} strokeWidth={12} />
//             </div>
//             <p className="text-center text-sm text-[#7B859E] mt-2">
//               Your overall codebase health is <strong className="text-white font-medium">Good</strong>. Keep resolving critical issues to reach 90%+.
//             </p>
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
}

export default function DashboardHome() {
  const [stats, setStats] = useState({
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
        const reviewsRes = await fetch(`${API_URL}/api/reviews?sort=createdAt:desc&pagination[limit]=10`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const reviewsData = await reviewsRes.json();
        const reviews: Review[] = reviewsData.data || [];

        const fixesApplied = reviews.filter((r) => r.prUrl || r.status === "completed").length;

        setStats({
          total: reviews.length,
          issues: "N/A", // TODO: Update when backend supports issue count
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
      <div className="flex h-[70vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <IconLoader2 className="h-10 w-10 animate-spin text-[#5B5FFF]" />
          <p className="text-[#7B859E]">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* ── Stats Row ── */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Total Reviews",
            value: stats.total,
            icon: IconTrendingUp,
            color: "#5B5FFF",
          },
          {
            label: "Issues Found",
            value: stats.issues,
            icon: IconAlertTriangle,
            color: "#FF8A65",
          },
          {
            label: "Fixes Applied",
            value: stats.fixes,
            icon: IconCircleCheck,
            color: "#4ADE80",
          },
          {
            label: "GitHub Connected",
            value: stats.connected,
            icon: IconBrandGithub,
            color: "#8B8FFF",
          },
        ].map((item, i) => (
          <StatCard
            key={i}
            label={item.label}
            value={item.value}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>

      {/* GitHub Analyzer */}
      <GithubAnalyzer />

      {/* Rate Limits */}
      <RateLimitsWidget />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Reviews */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0E1324] to-[#0B0F1C] backdrop-blur-xl shadow-xl overflow-hidden">
            <div className="border-b border-white/[0.08] px-6 py-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Recent Reviews</h2>
              <Link
                href="/dashboard/reviews"
                className="text-xs text-[#5B5FFF] hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="divide-y divide-white/[0.05]">
              {recentReviews.length === 0 ? (
                <div className="py-16 text-center text-[#7B859E]">
                  No reviews yet. Start your first scan! 🚀
                </div>
              ) : (
                recentReviews.map((review) => (
                  <div
                    key={review.id}
                    className="flex items-center justify-between px-6 py-4 hover:bg-white/[0.03] transition-all group"
                  >
                    <div>
                      <p className="font-medium text-white">
                        {review.repositoryOwner}/{review.repositoryName}
                      </p>
                      <p className="text-xs text-[#7B859E]">
                        {new Date(review.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-medium border",
                          review.status === "completed"
                            ? "bg-green-500/10 text-green-400 border-green-500/30"
                            : review.status === "pending"
                            ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
                            : "bg-red-500/10 text-red-400 border-red-500/30"
                        )}
                      >
                        {review.status}
                      </span>

                      <Link
                        href={`/dashboard/review/scan?reviewId=${review.id}&owner=${review.repositoryOwner}&repo=${review.repositoryName}`}
                        className="px-5 py-1.5 text-sm rounded-lg bg-gradient-to-r from-[#5B5FFF] to-[#7C7CFF] text-white font-medium hover:brightness-110 transition shadow-md"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="flex flex-col gap-6">
          {/* Quick Actions */}
          <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0E1324] to-[#0B0F1C] p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-white mb-5">Quick Actions</h2>

            <Link
              href="/dashboard/repositories"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-[#5B5FFF]/10 hover:border-[#5B5FFF]/40 transition group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#5B5FFF]/10 flex items-center justify-center group-hover:scale-110 transition">
                <IconBrandGithub className="text-[#8B8FFF]" size={22} />
              </div>
              <div>
                <p className="text-white font-medium">Connect Repository</p>
                <p className="text-xs text-[#7B859E]">Scan a new GitHub repo</p>
              </div>
            </Link>
          </div>

          {/* Health Score */}
          <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0E1324] to-[#0B0F1C] p-8 flex flex-col items-center shadow-xl overflow-hidden">
            <div className="absolute w-48 h-48 bg-[#5B5FFF]/10 blur-3xl rounded-full top-12" />

            <h2 className="text-lg font-semibold text-white mb-6">Code Health Score</h2>

            <CircularProgress value={84} size={160} strokeWidth={14} />

            <p className="text-center mt-6 text-[#7B859E]">
              Your codebase is in{" "}
              <span className="text-white font-semibold">Good</span> condition.
              <br />
              Keep pushing! <span className="text-[#4ADE80]">🚀</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}