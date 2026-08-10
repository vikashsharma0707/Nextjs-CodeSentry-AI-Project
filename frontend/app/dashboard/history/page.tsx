// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import { IconChevronLeft, IconChevronRight, IconFileCode, IconBrandGithub, IconLoader2 } from "@tabler/icons-react";
// // // import { LANGUAGE_COLORS } from "@/lib/mock-data";
// // // import { cn } from "@/lib/utils";
// // // import Link from "next/link";

// // // function TableSkeleton() {
// // //   return (
// // //     <>
// // //       {[...Array(5)].map((_, i) => (
// // //         <tr key={i} className="animate-pulse bg-white/[0.01]">
// // //           <td className="px-6 py-4">
// // //             <div className="h-4 bg-white/5 rounded w-16" />
// // //           </td>
// // //           <td className="px-6 py-4">
// // //             <div className="h-4 bg-white/5 rounded w-36" />
// // //           </td>
// // //           <td className="px-6 py-4">
// // //             <div className="h-4 bg-white/5 rounded w-20" />
// // //           </td>
// // //           <td className="px-6 py-4">
// // //             <div className="h-4 bg-white/5 rounded w-16" />
// // //           </td>
// // //           <td className="px-6 py-4 text-right">
// // //             <div className="h-4 bg-white/5 rounded w-12 ml-auto" />
// // //           </td>
// // //         </tr>
// // //       ))}
// // //     </>
// // //   );
// // // }

// // // export default function HistoryPage() {
// // //   const [reviews, setReviews] = useState<any[]>([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState<string | null>(null);

// // //   useEffect(() => {
// // //     async function fetchHistory() {
// // //       try {
// // //         const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
// // //         const token = tokenMatch ? tokenMatch[2] : null;
// // //         if (!token) throw new Error("Not authenticated");

// // //         const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
// // //         const res = await fetch(`${API_URL}/api/reviews?sort=createdAt:desc`, {
// // //           headers: { Authorization: `Bearer ${token}` }
// // //         });
        
// // //         const data = await res.json();
// // //         if (!res.ok) throw new Error(data.error?.message || "Failed to fetch history");
        
// // //         setReviews(data.data || []);
// // //       } catch (err: any) {
// // //         setError(err.message);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     }
    
// // //     fetchHistory();
// // //   }, []);

// // //   if (error) {
// // //     return <div className="text-red-400">Error: {error}</div>;
// // //   }

// // //   return (
// // //     <div className="space-y-6">
// // //       <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden flex flex-col">
// // //         {/* ── Table ── */}
// // //         <div className="overflow-x-auto">
// // //           <table className="w-full text-left text-sm text-zinc-300">
// // //             <thead className="border-b border-white/10 bg-white/5 text-xs uppercase text-zinc-500">
// // //               <tr>
// // //                 <th className="px-6 py-4 font-semibold">Date</th>
// // //                 <th className="px-6 py-4 font-semibold">Repository</th>
// // //                 <th className="px-6 py-4 font-semibold">Language</th>
// // //                 <th className="px-6 py-4 font-semibold">Status</th>
// // //                 <th className="px-6 py-4 font-semibold text-right">Actions</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody className="divide-y divide-white/10">
// // //               {loading ? (
// // //                 <TableSkeleton />
// // //               ) : reviews.length === 0 ? (
// // //                 <tr>
// // //                   <td colSpan={5} className="px-6 py-8 text-center text-zinc-500">
// // //                     No review history found. Go scan a repository!
// // //                   </td>
// // //                 </tr>
// // //               ) : (
// // //                 reviews.map((item, i) => (
// // //                   <tr
// // //                     key={item.id}
// // //                     className={cn(
// // //                       "transition-colors hover:bg-white/5",
// // //                       i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
// // //                     )}
// // //                   >
// // //                     <td className="whitespace-nowrap px-6 py-4 text-zinc-400">
// // //                       {new Date(item.createdAt).toLocaleDateString()}
// // //                     </td>
// // //                     <td className="px-6 py-4 font-medium text-white">
// // //                       <div className="flex items-center gap-2">
// // //                         <IconBrandGithub className="h-4 w-4 text-zinc-500" />
// // //                         {item.repositoryName}
// // //                       </div>
// // //                     </td>
// // //                     <td className="px-6 py-4">
// // //                       <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium", LANGUAGE_COLORS.default)}>
// // //                         Auto-detected
// // //                       </span>
// // //                     </td>
// // //                     <td className="px-6 py-4">
// // //                       <span
// // //                         className={cn(
// // //                           "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium border",
// // //                           item.status === "completed"
// // //                             ? "bg-green-500/20 text-green-400 border-green-500/30"
// // //                             : item.status === "pending"
// // //                             ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
// // //                             : "bg-red-500/20 text-red-400 border-red-500/30"
// // //                         )}
// // //                       >
// // //                         {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
// // //                       </span>
// // //                     </td>
// // //                     <td className="px-6 py-4 text-right">
// // //                       <Link href={`/dashboard/review/scan?reviewId=${item.id}&owner=${item.repositoryOwner}&repo=${item.repositoryName}`} className="text-violet-400 font-medium hover:text-violet-300 transition-colors">
// // //                         View Chat
// // //                       </Link>
// // //                     </td>
// // //                   </tr>
// // //                 ))
// // //               )}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { useState, useEffect } from "react";
// // import { IconBrandGithub } from "@tabler/icons-react";
// // import { LANGUAGE_COLORS } from "@/lib/mock-data";
// // import { cn } from "@/lib/utils";
// // import Link from "next/link";

// // function TableSkeleton() {
// //   return (
// //     <>
// //       {[...Array(5)].map((_, i) => (
// //         <tr key={i} className="animate-pulse bg-white/[0.01]">
// //           <td className="px-6 py-4">
// //             <div className="h-4 bg-white/5 rounded w-16" />
// //           </td>
// //           <td className="px-6 py-4">
// //             <div className="h-4 bg-white/5 rounded w-36" />
// //           </td>
// //           <td className="px-6 py-4">
// //             <div className="h-4 bg-white/5 rounded w-20" />
// //           </td>
// //           <td className="px-6 py-4">
// //             <div className="h-4 bg-white/5 rounded w-16" />
// //           </td>
// //           <td className="px-6 py-4 text-right">
// //             <div className="h-4 bg-white/5 rounded w-12 ml-auto" />
// //           </td>
// //         </tr>
// //       ))}
// //     </>
// //   );
// // }

// // export default function HistoryPage() {
// //   const [reviews, setReviews] = useState<any[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     async function fetchHistory() {
// //       try {
// //         const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
// //         const token = tokenMatch ? tokenMatch[2] : null;
// //         if (!token) throw new Error("Not authenticated");

// //         const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
// //         const res = await fetch(`${API_URL}/api/reviews?sort=createdAt:desc`, {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
        
// //         const data = await res.json();
// //         if (!res.ok) throw new Error(data.error?.message || "Failed to fetch history");
        
// //         setReviews(data.data || []);
// //       } catch (err: any) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }
    
// //     fetchHistory();
// //   }, []);

// //   if (error) {
// //     return <div className="text-[#EF4444]">Error: {error}</div>;
// //   }

// //   return (
// //     <div className="space-y-6">
// //       <div className="rounded-2xl border border-white/[0.08] bg-[#0E1324] backdrop-blur-sm overflow-hidden flex flex-col">
// //         <div className="overflow-x-auto">
// //           <table className="w-full text-left text-sm text-[#B6BED6]">
// //             <thead className="border-b border-white/[0.08] bg-white/[0.02] text-xs uppercase tracking-wider text-[#7B859E]">
// //               <tr>
// //                 <th className="px-6 py-4 font-semibold">Date</th>
// //                 <th className="px-6 py-4 font-semibold">Repository</th>
// //                 <th className="px-6 py-4 font-semibold">Language</th>
// //                 <th className="px-6 py-4 font-semibold">Status</th>
// //                 <th className="px-6 py-4 font-semibold text-right">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-white/[0.06]">
// //               {loading ? (
// //                 <TableSkeleton />
// //               ) : reviews.length === 0 ? (
// //                 <tr>
// //                   <td colSpan={5} className="px-6 py-8 text-center text-[#7B859E]">
// //                     No review history found. Go scan a repository!
// //                   </td>
// //                 </tr>
// //               ) : (
// //                 reviews.map((item, i) => (
// //                   <tr
// //                     key={item.id}
// //                     className={cn(
// //                       "transition-colors hover:bg-white/[0.03]",
// //                       i % 2 === 0 ? "bg-transparent" : "bg-white/[0.015]"
// //                     )}
// //                   >
// //                     <td className="whitespace-nowrap px-6 py-4 text-[#7B859E]">
// //                       {new Date(item.createdAt).toLocaleDateString()}
// //                     </td>
// //                     <td className="px-6 py-4 font-medium text-white">
// //                       <div className="flex items-center gap-2">
// //                         <IconBrandGithub className="h-4 w-4 text-[#7B859E]" />
// //                         {item.repositoryName}
// //                       </div>
// //                     </td>
// //                     <td className="px-6 py-4">
// //                       <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium", LANGUAGE_COLORS.default)}>
// //                         Auto-detected
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4">
// //                       <span
// //                         className={cn(
// //                           "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium border",
// //                           item.status === "completed"
// //                             ? "bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/30"
// //                             : item.status === "pending"
// //                             ? "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30"
// //                             : "bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/30"
// //                         )}
// //                       >
// //                         {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4 text-right">
// //                       <Link href={`/dashboard/review/scan?reviewId=${item.id}&owner=${item.repositoryOwner}&repo=${item.repositoryName}`} className="text-[#8B8FFF] font-medium hover:text-[#00D4FF] transition-colors">
// //                         View Chat hghghg
// //                       </Link>
// //                     </td>
// //                   </tr>
// //                 ))
// //               )}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useState, useEffect } from "react";
// import { IconBrandGithub } from "@tabler/icons-react";
// import { LANGUAGE_COLORS } from "@/lib/mock-data";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// function TableSkeleton() {
//   return (
//     <>
//       {[...Array(5)].map((_, i) => (
//         <tr key={i} className="animate-pulse">
//           <td className="px-6 py-4">
//             <div className="h-4 w-16 rounded bg-violet-100/60" />
//           </td>
//           <td className="px-6 py-4">
//             <div className="h-4 w-36 rounded bg-violet-100/60" />
//           </td>
//           <td className="px-6 py-4">
//             <div className="h-4 w-20 rounded bg-violet-100/60" />
//           </td>
//           <td className="px-6 py-4">
//             <div className="h-4 w-16 rounded bg-violet-100/60" />
//           </td>
//           <td className="px-6 py-4 text-right">
//             <div className="ml-auto h-4 w-12 rounded bg-violet-100/60" />
//           </td>
//         </tr>
//       ))}
//     </>
//   );
// }

// export default function HistoryPage() {
//   const [reviews, setReviews] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchHistory() {
//       try {
//         const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
//         const token = tokenMatch ? tokenMatch[2] : null;
//         if (!token) throw new Error("Not authenticated");

//         const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
//         const res = await fetch(`${API_URL}/api/reviews?sort=createdAt:desc`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const data = await res.json();
//         if (!res.ok) throw new Error(data.error?.message || "Failed to fetch history");

//         setReviews(data.data || []);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchHistory();
//   }, []);

//   if (error) {
//     return (
//       <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-red-600">
//         Error: {error}
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       <div className="overflow-hidden rounded-2xl border border-violet-200/60 bg-white/70 backdrop-blur-xl shadow-sm">
//         <div className="overflow-x-auto">
//           <table className="w-full text-left text-sm text-gray-600">
//             <thead className="border-b border-violet-100 bg-violet-50/50 text-xs uppercase tracking-wider text-gray-500">
//               <tr>
//                 <th className="px-6 py-4 font-semibold">Date</th>
//                 <th className="px-6 py-4 font-semibold">Repository</th>
//                 <th className="px-6 py-4 font-semibold">Language</th>
//                 <th className="px-6 py-4 font-semibold">Status</th>
//                 <th className="px-6 py-4 text-right font-semibold">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-violet-100/70">
//               {loading ? (
//                 <TableSkeleton />
//               ) : reviews.length === 0 ? (
//                 <tr>
//                   <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
//                     No review history found. Go scan a repository!
//                   </td>
//                 </tr>
//               ) : (
//                 reviews.map((item, i) => (
//                   <tr
//                     key={item.id}
//                     className={cn(
//                       "transition-colors hover:bg-violet-50/40",
//                       i % 2 === 0 ? "bg-transparent" : "bg-violet-50/20"
//                     )}
//                   >
//                     <td className="whitespace-nowrap px-6 py-4 text-gray-500">
//                       {new Date(item.createdAt).toLocaleDateString()}
//                     </td>
//                     <td className="px-6 py-4 font-medium text-gray-900">
//                       <div className="flex items-center gap-2">
//                         <IconBrandGithub className="h-4 w-4 text-gray-400" />
//                         {item.repositoryName}
//                       </div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span
//                         className={cn(
//                           "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium",
//                           LANGUAGE_COLORS.default
//                         )}
//                       >
//                         Auto-detected
//                       </span>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span
//                         className={cn(
//                           "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium",
//                           item.status === "completed"
//                             ? "border-emerald-200 bg-emerald-50 text-emerald-700"
//                             : item.status === "pending"
//                             ? "border-amber-200 bg-amber-50 text-amber-700"
//                             : "border-red-200 bg-red-50 text-red-700"
//                         )}
//                       >
//                         {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-right">
//                       <Link
//                         href={`/dashboard/review/scan?reviewId=${item.id}&owner=${item.repositoryOwner}&repo=${item.repositoryName}`}
//                         className="font-medium text-violet-600 transition-colors hover:text-violet-800"
//                       >
//                         View Chat
//                       </Link>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect, useMemo } from "react";
import {
  IconBrandGithub,
  IconCalendar,
  IconPackage,
  IconCode,
  IconCircleCheck,
  IconClock,
  IconAlertTriangle,
  IconMessageChatbot,
  IconArrowRight,
  IconSearch,
  IconFilter,
  IconSortDescending,
  IconSparkles,
  IconTrendingUp,
  IconGitBranch,
} from "@tabler/icons-react";
import { LANGUAGE_COLORS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import Link from "next/link";

/* ─────────────────────────────────────────────
   Skeleton Loader (Apple-style glass shimmer)
───────────────────────────────────────────── */
function TableSkeleton() {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-[18px] border border-white/50 bg-white/40 backdrop-blur-xl px-6 py-5"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="flex items-center gap-6">
            <div className="h-4 w-20 rounded-full bg-violet-200/50" />
            <div className="h-4 w-44 rounded-full bg-violet-200/50" />
            <div className="h-5 w-24 rounded-full bg-violet-200/50" />
            <div className="h-5 w-20 rounded-full bg-violet-200/50" />
            <div className="ml-auto h-9 w-28 rounded-xl bg-violet-200/50" />
          </div>
        </div>
      ))}
    </>
  );
}

/* ─────────────────────────────────────────────
   Analytics Card
───────────────────────────────────────────── */
function AnalyticsCard({
  title,
  value,
  icon: Icon,
  gradient,
  trend,
}: {
  title: string;
  value: number | string;
  icon: React.ElementType;
  gradient: string;
  trend?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[20px] border border-white/60 bg-white/55 backdrop-blur-[30px] p-5 shadow-[0_8px_32px_rgba(139,92,246,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(139,92,246,0.18)] hover:border-violet-300/60">
      {/* soft glow blob */}
      <div
        className={cn(
          "pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-40 blur-2xl transition-opacity group-hover:opacity-70",
          gradient
        )}
      />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-[#6B7280]">
            {title}
          </p>
          <p className="mt-1.5 text-2xl font-semibold tracking-tight text-[#1F1B3D]">
            {value}
          </p>
          {trend && (
            <div className="mt-2 flex items-center gap-1 text-[11px] font-medium text-emerald-600">
              <IconTrendingUp className="h-3.5 w-3.5" />
              {trend}
            </div>
          )}
        </div>
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br shadow-inner",
            gradient
          )}
        >
          <Icon className="h-5 w-5 text-white" stroke={1.75} />
        </div>
      </div>
      {/* mini sparkline placeholder */}
      <div className="mt-4 flex items-end gap-0.5 h-6 opacity-60">
        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
          <div
            key={i}
            className="w-1.5 rounded-full bg-violet-400/70"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Status Badge
───────────────────────────────────────────── */
function StatusBadge({ status }: { status: string }) {
  const config = {
    completed: {
      bg: "bg-emerald-50/80 border-emerald-200/70 text-emerald-700",
      dot: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]",
      label: "Completed",
    },
    pending: {
      bg: "bg-amber-50/80 border-amber-200/70 text-amber-700",
      dot: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)] animate-pulse",
      label: "Pending",
    },
    failed: {
      bg: "bg-red-50/80 border-red-200/70 text-red-700",
      dot: "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]",
      label: "Failed",
    },
  }[status] || {
    bg: "bg-gray-50/80 border-gray-200/70 text-gray-600",
    dot: "bg-gray-400",
    label: status,
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm",
        config.bg
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", config.dot)} />
      {config.label}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Language Badge
───────────────────────────────────────────── */
function LanguageBadge({ language }: { language?: string }) {
  // Keep existing behavior (Auto-detected) but make it premium
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-violet-200/60 bg-white/60 px-2.5 py-1 text-[11px] font-medium text-[#1F1B3D] backdrop-blur-sm",
        LANGUAGE_COLORS.default
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
      Auto-detected
    </span>
  );
}

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
export default function HistoryPage() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Local UI state for filters (does not change backend behavior)
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    async function fetchHistory() {
      try {
        const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
        const token = tokenMatch ? tokenMatch[2] : null;
        if (!token) throw new Error("Not authenticated");

        const API_URL =
          process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
        const res = await fetch(
          `${API_URL}/api/reviews?sort=createdAt:desc`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const data = await res.json();
        if (!res.ok)
          throw new Error(data.error?.message || "Failed to fetch history");

        setReviews(data.data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchHistory();
  }, []);

  // Derived analytics
  const stats = useMemo(() => {
    const total = reviews.length;
    const completed = reviews.filter((r) => r.status === "completed").length;
    const pending = reviews.filter((r) => r.status === "pending").length;
    const failed = reviews.filter(
      (r) => r.status !== "completed" && r.status !== "pending"
    ).length;
    return { total, completed, pending, failed };
  }, [reviews]);

  // Client-side filtering (UI only)
  const filtered = useMemo(() => {
    return reviews.filter((item) => {
      const matchesSearch =
        !search ||
        item.repositoryName?.toLowerCase().includes(search.toLowerCase()) ||
        item.repositoryOwner?.toLowerCase().includes(search.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || item.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [reviews, search, statusFilter]);

  if (error) {
    return (
      <div className="relative min-h-[60vh] overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-[#ECE6FE]" />
        <div className="relative flex h-full items-center justify-center p-8">
          <div className="rounded-2xl border border-red-200/60 bg-red-50/80 px-8 py-6 text-red-600 backdrop-blur-xl shadow-lg">
            Error: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ── Luxury Background ── */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* base */}
        <div className="absolute inset-0 bg-[#ECE6FE]" />
        {/* soft grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* aurora / large blobs */}
        <div className="absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.28)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute -right-24 top-40 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(109,140,255,0.25)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.2)_0%,transparent_70%)] blur-3xl" />
        {/* floating particles */}
        <div className="absolute left-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-violet-400/40 animate-pulse" />
        <div className="absolute right-[22%] top-[32%] h-1 w-1 rounded-full bg-blue-400/50 animate-pulse delay-700" />
        <div className="absolute left-[55%] top-[12%] h-1 w-1 rounded-full bg-violet-300/50 animate-pulse delay-300" />
      </div>

      <div className="relative space-y-8 px-1 pb-12">
        {/* ── Analytics Cards ── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <AnalyticsCard
            title="Total Reviews"
            value={loading ? "—" : stats.total}
            icon={IconSparkles}
            gradient="from-violet-500 to-purple-600"
            trend={stats.total > 0 ? "+12% this month" : undefined}
          />
          <AnalyticsCard
            title="Completed"
            value={loading ? "—" : stats.completed}
            icon={IconCircleCheck}
            gradient="from-emerald-400 to-teal-500"
          />
          <AnalyticsCard
            title="Pending"
            value={loading ? "—" : stats.pending}
            icon={IconClock}
            gradient="from-amber-400 to-orange-500"
          />
          <AnalyticsCard
            title="Failed"
            value={loading ? "—" : stats.failed}
            icon={IconAlertTriangle}
            gradient="from-rose-400 to-red-500"
          />
        </div>

        {/* ── Search & Filters ── */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <IconSearch className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-400" />
            <input
              type="text"
              placeholder="Search reviews by repository…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-white/60 bg-white/55 py-2.5 pl-10 pr-4 text-sm text-[#1F1B3D] placeholder:text-[#6B7280]/70 backdrop-blur-[20px] outline-none transition-all focus:border-violet-300 focus:bg-white/75 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <IconFilter className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-violet-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="appearance-none rounded-2xl border border-white/60 bg-white/55 py-2.5 pl-9 pr-8 text-sm text-[#1F1B3D] backdrop-blur-[20px] outline-none transition-all focus:border-violet-300 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)]"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 rounded-2xl border border-white/60 bg-white/55 px-3.5 py-2.5 text-sm text-[#6B7280] backdrop-blur-[20px]">
              <IconSortDescending className="h-3.5 w-3.5 text-violet-400" />
              Newest first
            </div>
          </div>
        </div>

        {/* ── Review History “Table” (floating glass cards) ── */}
        <div className="overflow-hidden rounded-[24px] border border-white/50 bg-white/40 backdrop-blur-[30px] shadow-[0_8px_40px_rgba(139,92,246,0.08)]">
          {/* Sticky Header */}
          <div className="sticky top-0 z-10 border-b border-white/50 bg-white/70 backdrop-blur-[24px]">
            <div className="grid grid-cols-[140px_1fr_140px_130px_140px] gap-4 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">
              <div className="flex items-center gap-1.5">
                <IconCalendar className="h-3.5 w-3.5 text-violet-400" />
                Date
              </div>
              <div className="flex items-center gap-1.5">
                <IconPackage className="h-3.5 w-3.5 text-violet-400" />
                Repository
              </div>
              <div className="flex items-center gap-1.5">
                <IconCode className="h-3.5 w-3.5 text-violet-400" />
                Language
              </div>
              <div className="flex items-center gap-1.5">
                <IconCircleCheck className="h-3.5 w-3.5 text-violet-400" />
                Status
              </div>
              <div className="flex items-center justify-end gap-1.5">
                <IconMessageChatbot className="h-3.5 w-3.5 text-violet-400" />
                Action
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-3 p-4">
            {loading ? (
              <TableSkeleton />
            ) : filtered.length === 0 ? (
              /* ── Premium Empty State ── */
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-violet-400/20 blur-3xl" />
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-[28px] border border-white/60 bg-white/60 backdrop-blur-xl shadow-xl">
                    <IconBrandGithub className="h-12 w-12 text-violet-500" stroke={1.25} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#1F1B3D]">
                  Start your first AI Review
                </h3>
                <p className="mt-2 max-w-sm text-sm text-[#6B7280]">
                  Scan any GitHub repository and let CodeSentry AI generate a
                  deep, contextual code review.
                </p>
                <Link
                  href="/dashboard/review/scan"
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#6D8CFF] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-all hover:-translate-y-0.5 hover:shadow-violet-500/40 active:scale-[0.98]"
                >
                  <IconSparkles className="h-4 w-4" />
                  Scan a Repository
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              filtered.map((item, i) => (
                <div
                  key={item.id}
                  className={cn(
                    "group relative grid grid-cols-[140px_1fr_140px_130px_140px] items-center gap-4 rounded-[18px] border border-white/50 bg-white/55 px-5 py-4 backdrop-blur-xl transition-all duration-300",
                    "hover:-translate-y-1.5 hover:border-violet-300/70 hover:bg-white/80 hover:shadow-[0_12px_36px_rgba(139,92,246,0.18)]",
                    "animate-in fade-in slide-in-from-bottom-2"
                  )}
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {/* subtle border glow on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-[18px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      boxShadow: "inset 0 0 0 1px rgba(139,92,246,0.25)",
                    }}
                  />

                  {/* Date */}
                  <div className="text-sm text-[#6B7280]">
                    {new Date(item.createdAt).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>

                  {/* Repository */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/60 bg-white/70 shadow-sm">
                      <IconBrandGithub className="h-4.5 w-4.5 text-[#1F1B3D]" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-medium text-[#1F1B3D]">
                        {item.repositoryName}
                      </p>
                      <p className="truncate text-xs text-[#6B7280]">
                        {item.repositoryOwner}
                      </p>
                    </div>
                  </div>

                  {/* Language */}
                  <div>
                    <LanguageBadge />
                  </div>

                  {/* Status */}
                  <div>
                    <StatusBadge status={item.status} />
                  </div>

                  {/* Action */}
                  <div className="flex justify-end">
                    <Link
                      href={`/dashboard/review/scan?reviewId=${item.id}&owner=${item.repositoryOwner}&repo=${item.repositoryName}`}
                      className="group/btn relative inline-flex items-center gap-1.5 overflow-hidden rounded-xl border border-violet-200/60 bg-gradient-to-r from-violet-500/10 to-blue-500/10 px-3.5 py-2 text-xs font-medium text-violet-700 transition-all hover:border-violet-300 hover:from-violet-500/20 hover:to-blue-500/20 hover:shadow-[0_4px_16px_rgba(139,92,246,0.25)] active:scale-[0.97]"
                    >
                      <IconMessageChatbot className="h-3.5 w-3.5" />
                      View Chat
                      <IconArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}