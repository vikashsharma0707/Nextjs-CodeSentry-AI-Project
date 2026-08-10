// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";
// import {
//   IconCpu,
//   IconActivity,
//   IconCoins,
//   IconCalendarEvent,
//   IconRefresh,
//   IconChartArea,
// } from "@tabler/icons-react";

// interface RateLimitData {
//   model: string;
//   limits: {
//     rpm: number;
//     tpm: number;
//     rpd: number;
//   };
//   current: {
//     rpm: number;
//     tpm: number;
//     rpd: number;
//   };
//   history: Array<{
//     time: string;
//     requests: number;
//     tokens: number;
//   }>;
// }

// export default function RateLimitsWidget() {
//   const [data, setData] = useState<RateLimitData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [activeTab, setActiveTab] = useState<"requests" | "tokens">("requests");

//   const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

//   const fetchStats = async () => {
//     try {
//       setLoading(true);
//       const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
//       const token = tokenMatch ? tokenMatch[2] : null;
//       if (!token) {
//         setError("Not authenticated");
//         return;
//       }

//       const res = await fetch(`${API_URL}/api/review/rate-limits`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (!res.ok) {
//         throw new Error("Failed to fetch rate limits stats");
//       }

//       const stats = await res.json();
//       setData(stats);
//       setError(null);
//     } catch (err: any) {
//       console.error(err);
//       setError(err.message || "An error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchStats();
//     // Refresh limits every 15 seconds to keep dashboard alive
//     const interval = setInterval(fetchStats, 15000);
//     return () => clearInterval(interval);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   if (loading && !data) {
//     return (
//       <div className="rounded-xl border border-white/10 bg-white/5 p-6 animate-pulse h-[400px]">
//         <div className="flex justify-between items-center mb-6">
//           <div className="h-6 w-48 bg-white/10 rounded"></div>
//           <div className="h-6 w-24 bg-white/10 rounded"></div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           {[...Array(3)].map((_, i) => (
//             <div key={i} className="h-24 bg-white/10 rounded-xl"></div>
//           ))}
//         </div>
//         <div className="h-44 bg-white/10 rounded-xl"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 text-center text-red-400">
//         <p className="text-sm font-medium">Failed to load AI Rate Limits: {error}</p>
//         <button
//           onClick={fetchStats}
//           className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-xs font-semibold rounded-lg transition-all"
//         >
//           <IconRefresh className="w-3.5 h-3.5" /> Retry
//         </button>
//       </div>
//     );
//   }

//   if (!data) return null;

//   const rpmPercent = Math.min((data.current.rpm / data.limits.rpm) * 100, 100);
//   const tpmPercent = Math.min((data.current.tpm / data.limits.tpm) * 100, 100);
//   const rpdPercent = Math.min((data.current.rpd / data.limits.rpd) * 100, 100);

//   // Formatting helper for token counts (e.g., 5200 -> 5.2K)
//   const formatTokens = (t: number) => {
//     if (t >= 1000) return `${(t / 1000).toFixed(1)}K`;
//     return t.toString();
//   };

//   return (
//     <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 relative overflow-hidden transition-all duration-300 hover:border-white/15">
//       {/* ── Top Header Section ── */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//         <div>
//           <h2 className="text-lg font-bold text-white flex items-center gap-2">
//             <IconCpu className="w-5 h-5 text-violet-400 animate-pulse" />
//             AI Model Engine & Usage
//           </h2>
//           <p className="text-xs text-zinc-400 mt-1">
//             Current rate limits and API consumption for the active model tier.
//           </p>
//         </div>

//         {/* Model Badge */}
//         <div className="flex items-center gap-2 px-3 py-1 bg-violet-500/10 border border-violet-500/35 rounded-full text-xs font-semibold text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
//           <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping"></span>
//           Model: {data.model}
//         </div>
//       </div>

//       {/* ── Limits & Usage Progress Row ── */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//         {/* RPM Card */}
//         <div className="bg-black/25 border border-white/5 rounded-xl p-4 flex flex-col justify-between">
//           <div className="flex justify-between items-start">
//             <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
//               Requests / Min (RPM)
//             </span>
//             <IconActivity className="w-4 h-4 text-violet-400" />
//           </div>
//           <div className="mt-2 flex items-baseline gap-2">
//             <span className="text-2xl font-black text-white">{data.current.rpm}</span>
//             <span className="text-xs text-zinc-500">/ {data.limits.rpm} limit</span>
//           </div>
//           <div className="mt-3 w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
//             <div
//               className="bg-violet-500 h-1.5 rounded-full transition-all duration-500"
//               style={{ width: `${rpmPercent}%` }}
//             ></div>
//           </div>
//         </div>

//         {/* TPM Card */}
//         <div className="bg-black/25 border border-white/5 rounded-xl p-4 flex flex-col justify-between">
//           <div className="flex justify-between items-start">
//             <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
//               Tokens / Min (TPM)
//             </span>
//             <IconCoins className="w-4 h-4 text-blue-400" />
//           </div>
//           <div className="mt-2 flex items-baseline gap-2">
//             <span className="text-2xl font-black text-white">
//               {formatTokens(data.current.tpm)}
//             </span>
//             <span className="text-xs text-zinc-500">/ {formatTokens(data.limits.tpm)} limit</span>
//           </div>
//           <div className="mt-3 w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
//             <div
//               className="bg-blue-500 h-1.5 rounded-full transition-all duration-500"
//               style={{ width: `${tpmPercent}%` }}
//             ></div>
//           </div>
//         </div>

//         {/* RPD Card */}
//         <div className="bg-black/25 border border-white/5 rounded-xl p-4 flex flex-col justify-between">
//           <div className="flex justify-between items-start">
//             <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
//               Requests / Day (RPD)
//             </span>
//             <IconCalendarEvent className="w-4 h-4 text-emerald-400" />
//           </div>
//           <div className="mt-2 flex items-baseline gap-2">
//             <span className="text-2xl font-black text-white">{data.current.rpd}</span>
//             <span className="text-xs text-zinc-500">/ {data.limits.rpd} limit</span>
//           </div>
//           <div className="mt-3 w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
//             <div
//               className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500"
//               style={{ width: `${rpdPercent}%` }}
//             ></div>
//           </div>
//         </div>
//       </div>

//       {/* ── Historical Performance Area Chart ── */}
//       <div className="border-t border-white/5 pt-6">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
//             <IconChartArea className="w-4.5 h-4.5 text-zinc-400" />
//             Performance Charts
//           </div>

//           {/* Toggle buttons to switch charts */}
//           <div className="flex bg-black/40 border border-white/10 rounded-lg p-0.5">
//             <button
//               onClick={() => setActiveTab("requests")}
//               className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
//                 activeTab === "requests"
//                   ? "bg-violet-600 text-white shadow-sm"
//                   : "text-zinc-400 hover:text-white"
//               }`}
//             >
//               Requests
//             </button>
//             <button
//               onClick={() => setActiveTab("tokens")}
//               className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
//                 activeTab === "tokens"
//                   ? "bg-blue-600 text-white shadow-sm"
//                   : "text-zinc-400 hover:text-white"
//               }`}
//             >
//               Tokens
//             </button>
//           </div>
//         </div>

//         {/* Recharts Container */}
//         <div className="w-full h-[200px] mt-2">
//           <ResponsiveContainer width="100%" height="100%">
//             <AreaChart data={data.history} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
//               <defs>
//                 <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3} />
//                   <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
//                 </linearGradient>
//                 <linearGradient id="colorTokens" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
//                   <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
//                 </linearGradient>
//               </defs>
//               <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
//               <XAxis
//                 dataKey="time"
//                 stroke="#71717a"
//                 fontSize={10}
//                 tickLine={false}
//                 axisLine={false}
//                 dy={8}
//               />
//               <YAxis
//                 stroke="#71717a"
//                 fontSize={10}
//                 tickLine={false}
//                 axisLine={false}
//                 dx={-8}
//                 allowDecimals={false}
//               />
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: "#18181b",
//                   border: "1px solid rgba(255, 255, 255, 0.1)",
//                   borderRadius: "8px",
//                   fontSize: "12px",
//                   color: "#fff",
//                 }}
//                 labelStyle={{ color: "#a1a1aa" }}
//               />
//               {activeTab === "requests" ? (
//                 <Area
//                   type="monotone"
//                   dataKey="requests"
//                   name="Requests Count"
//                   stroke="#a78bfa"
//                   strokeWidth={2}
//                   fillOpacity={1}
//                   fill="url(#colorRequests)"
//                 />
//               ) : (
//                 <Area
//                   type="monotone"
//                   dataKey="tokens"
//                   name="Tokens volume"
//                   stroke="#3b82f6"
//                   strokeWidth={2}
//                   fillOpacity={1}
//                   fill="url(#colorTokens)"
//                 />
//               )}
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  IconCpu,
  IconActivity,
  IconCoins,
  IconCalendarEvent,
  IconRefresh,
  IconChartArea,
} from "@tabler/icons-react";

interface RateLimitData {
  model: string;
  limits: {
    rpm: number;
    tpm: number;
    rpd: number;
  };
  current: {
    rpm: number;
    tpm: number;
    rpd: number;
  };
  history: Array<{
    time: string;
    requests: number;
    tokens: number;
  }>;
}

const CARD_STYLE = {
  background: "rgba(255,255,255,0.70)",
  borderColor: "rgba(139,92,246,0.12)",
  boxShadow: "0 4px 24px -8px rgba(139,92,246,0.10)",
};

export default function RateLimitsWidget() {
  const [data, setData] = useState<RateLimitData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"requests" | "tokens">("requests");

  const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

  const fetchStats = async () => {
    try {
      setLoading(true);
      const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
      const token = tokenMatch ? tokenMatch[2] : null;
      if (!token) {
        setError("Not authenticated");
        return;
      }

      const res = await fetch(`${API_URL}/api/review/rate-limits`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch rate limits stats");
      }

      const stats = await res.json();
      setData(stats);
      setError(null);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    // Refresh limits every 15 seconds to keep dashboard alive
    const interval = setInterval(fetchStats, 15000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading && !data) {
    return (
      <div className="rounded-[22px] border p-6 animate-pulse h-[400px]" style={CARD_STYLE}>
        <div className="flex justify-between items-center mb-6">
          <div className="h-6 w-48 rounded" style={{ background: "rgba(139,92,246,0.10)" }} />
          <div className="h-6 w-24 rounded" style={{ background: "rgba(139,92,246,0.10)" }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-24 rounded-2xl" style={{ background: "rgba(139,92,246,0.08)" }} />
          ))}
        </div>
        <div className="h-44 rounded-2xl" style={{ background: "rgba(139,92,246,0.08)" }} />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="rounded-[22px] border p-6 text-center"
        style={{ background: "rgba(255,255,255,0.70)", borderColor: "rgba(239,68,68,0.25)", color: "#EF4444" }}
      >
        <p className="text-sm font-medium">Failed to load AI Rate Limits: {error}</p>
        <button
          onClick={fetchStats}
          className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all"
          style={{ background: "rgba(239,68,68,0.10)", color: "#EF4444" }}
        >
          <IconRefresh className="w-3.5 h-3.5" /> Retry
        </button>
      </div>
    );
  }

  if (!data) return null;

  const rpmPercent = Math.min((data.current.rpm / data.limits.rpm) * 100, 100);
  const tpmPercent = Math.min((data.current.tpm / data.limits.tpm) * 100, 100);
  const rpdPercent = Math.min((data.current.rpd / data.limits.rpd) * 100, 100);

  // Formatting helper for token counts (e.g., 5200 -> 5.2K)
  const formatTokens = (t: number) => {
    if (t >= 1000) return `${(t / 1000).toFixed(1)}K`;
    return t.toString();
  };

  return (
    <div className="rounded-[22px] border backdrop-blur-xl p-6 relative overflow-hidden transition-all duration-300" style={CARD_STYLE}>
      {/* ── Top Header Section ── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-lg font-bold flex items-center gap-2" style={{ color: "#11183A" }}>
            <IconCpu className="w-5 h-5" style={{ color: "#8B5CF6" }} />
            Rate Limits &amp; Usage
          </h2>
          <p className="text-xs mt-1" style={{ color: "#64748B" }}>
            Current rate limits and API consumption for the active model tier.
          </p>
        </div>

        {/* Model Badge */}
        <div
          className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold"
          style={{ background: "rgba(139,92,246,0.10)", border: "1px solid rgba(139,92,246,0.25)", color: "#7C3AED" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#8B5CF6" }} />
          Model: {data.model}
        </div>
      </div>

      {/* ── Limits & Usage Progress Row ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* RPM Card */}
        <div className="rounded-2xl p-4 flex flex-col justify-between" style={{ background: "rgba(139,92,246,0.04)", border: "1px solid rgba(139,92,246,0.10)" }}>
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#64748B" }}>
              Requests / Min (RPM)
            </span>
            <IconActivity className="w-4 h-4" style={{ color: "#8B5CF6" }} />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold" style={{ color: "#11183A" }}>{data.current.rpm}</span>
            <span className="text-xs" style={{ color: "#94A3B8" }}>/ {data.limits.rpm} limit</span>
          </div>
          <div className="mt-3 w-full rounded-full h-1.5 overflow-hidden" style={{ background: "rgba(139,92,246,0.10)" }}>
            <div
              className="h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${rpmPercent}%`, background: "linear-gradient(90deg, #A78BFA, #8B5CF6)" }}
            />
          </div>
        </div>

        {/* TPM Card */}
        <div className="rounded-2xl p-4 flex flex-col justify-between" style={{ background: "rgba(79,140,255,0.04)", border: "1px solid rgba(79,140,255,0.10)" }}>
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#64748B" }}>
              Tokens / Min (TPM)
            </span>
            <IconCoins className="w-4 h-4" style={{ color: "#4F8CFF" }} />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold" style={{ color: "#11183A" }}>
              {formatTokens(data.current.tpm)}
            </span>
            <span className="text-xs" style={{ color: "#94A3B8" }}>/ {formatTokens(data.limits.tpm)} limit</span>
          </div>
          <div className="mt-3 w-full rounded-full h-1.5 overflow-hidden" style={{ background: "rgba(79,140,255,0.10)" }}>
            <div
              className="h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${tpmPercent}%`, background: "linear-gradient(90deg, #7DB4FF, #4F8CFF)" }}
            />
          </div>
        </div>

        {/* RPD Card */}
        <div className="rounded-2xl p-4 flex flex-col justify-between" style={{ background: "rgba(0,184,217,0.04)", border: "1px solid rgba(0,184,217,0.10)" }}>
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#64748B" }}>
              Requests / Day (RPD)
            </span>
            <IconCalendarEvent className="w-4 h-4" style={{ color: "#00B8D9" }} />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold" style={{ color: "#11183A" }}>{data.current.rpd}</span>
            <span className="text-xs" style={{ color: "#94A3B8" }}>/ {data.limits.rpd} limit</span>
          </div>
          <div className="mt-3 w-full rounded-full h-1.5 overflow-hidden" style={{ background: "rgba(0,184,217,0.10)" }}>
            <div
              className="h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${rpdPercent}%`, background: "linear-gradient(90deg, #5FDCEF, #00B8D9)" }}
            />
          </div>
        </div>
      </div>

      {/* ── Historical Performance Area Chart ── */}
      <div className="border-t pt-6" style={{ borderColor: "rgba(139,92,246,0.12)" }}>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#11183A" }}>
            <IconChartArea className="w-4.5 h-4.5" style={{ color: "#64748B" }} />
            Performance Charts
          </div>

          {/* Toggle buttons to switch charts */}
          <div className="flex rounded-lg p-0.5" style={{ background: "rgba(139,92,246,0.06)", border: "1px solid rgba(139,92,246,0.12)" }}>
            <button
              onClick={() => setActiveTab("requests")}
              className="px-3 py-1 text-xs font-medium rounded-md transition-all"
              style={
                activeTab === "requests"
                  ? { background: "#8B5CF6", color: "#fff" }
                  : { color: "#64748B" }
              }
            >
              Requests
            </button>
            <button
              onClick={() => setActiveTab("tokens")}
              className="px-3 py-1 text-xs font-medium rounded-md transition-all"
              style={
                activeTab === "tokens"
                  ? { background: "#4F8CFF", color: "#fff" }
                  : { color: "#64748B" }
              }
            >
              Tokens
            </button>
          </div>
        </div>

        {/* Recharts Container */}
        <div className="w-full h-[200px] mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data.history} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorTokens" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4F8CFF" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#4F8CFF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(139,92,246,0.10)" vertical={false} />
              <XAxis
                dataKey="time"
                stroke="#94A3B8"
                fontSize={10}
                tickLine={false}
                axisLine={false}
                dy={8}
              />
              <YAxis
                stroke="#94A3B8"
                fontSize={10}
                tickLine={false}
                axisLine={false}
                dx={-8}
                allowDecimals={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(139,92,246,0.20)",
                  borderRadius: "12px",
                  fontSize: "12px",
                  color: "#11183A",
                  boxShadow: "0 8px 24px -8px rgba(139,92,246,0.25)",
                }}
                labelStyle={{ color: "#64748B" }}
              />
              {activeTab === "requests" ? (
                <Area
                  type="monotone"
                  dataKey="requests"
                  name="Requests Count"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorRequests)"
                />
              ) : (
                <Area
                  type="monotone"
                  dataKey="tokens"
                  name="Tokens volume"
                  stroke="#4F8CFF"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorTokens)"
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}