// // "use client";

// // import React from "react";

// // const ACCENT = "#ccff00";

// // interface StatCardProps {
// //   label: string;
// //   value: string | number;
// //   icon: React.ElementType;
// //   className?: string;
// // }

// // export default function StatCard({ label, value, icon: Icon, className = "" }: StatCardProps) {
// //   return (
// //     <div
// //       className={`relative overflow-hidden p-5 transition-all duration-300 hover:-translate-y-0.5 ${className}`}
// //       style={{
// //         background: "rgba(204,255,0,0.03)",
// //         border: "1px solid rgba(204,255,0,0.15)",
// //         clipPath: "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
// //       }}
// //     >
// //       {/* Corner accent lines */}
// //       <div className="absolute top-0 left-0 w-6 h-px" style={{ background: ACCENT }} />
// //       <div className="absolute top-0 left-0 h-6 w-px" style={{ background: ACCENT }} />
// //       <div className="absolute bottom-0 right-0 w-6 h-px" style={{ background: ACCENT }} />
// //       <div className="absolute bottom-0 right-0 h-6 w-px" style={{ background: ACCENT }} />

// //       <div className="flex items-start justify-between">
// //         <div>
// //           <p className="text-3xl font-black text-white tracking-tight">{value}</p>
// //           <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">{label}</p>
// //         </div>
// //         <div
// //           className="flex h-10 w-10 items-center justify-center"
// //           style={{
// //             border: "1px solid rgba(204,255,0,0.25)",
// //             background: "rgba(204,255,0,0.06)",
// //             color: ACCENT,
// //           }}
// //         >
// //           <Icon className="h-5 w-5" stroke={1.75} />
// //         </div>
// //       </div>

// //       {/* Glow effect */}
// //       <div
// //         className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full blur-2xl pointer-events-none"
// //         style={{ background: "rgba(204,255,0,0.08)" }}
// //       />
// //     </div>
// //   );
// // }



// "use client";

// import React from "react";

// const ACCENT = "#5B5FFF";

// interface StatCardProps {
//   label: string;
//   value: string | number;
//   icon: React.ElementType;
//   className?: string;
// }

// export default function StatCard({ label, value, icon: Icon, className = "" }: StatCardProps) {
//   return (
//     <div
//       className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0E1324] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5B5FFF]/30 hover:shadow-[0_0_30px_-10px_rgba(91,95,255,0.4)] ${className}`}
//     >
//       <div className="flex items-start justify-between">
//         <div>
//           <p className="text-3xl font-bold text-white tracking-tight">{value}</p>
//           <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7B859E]">{label}</p>
//         </div>
//         <div
//           className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#5B5FFF]/25 bg-gradient-to-br from-[#5B5FFF]/15 to-[#6F4CFF]/5"
//           style={{ color: ACCENT }}
//         >
//           <Icon className="h-5 w-5" stroke={1.75} />
//         </div>
//       </div>

//       {/* Glow effect */}
//       <div
//         className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full blur-2xl pointer-events-none opacity-60"
//         style={{ background: "rgba(91,95,255,0.15)" }}
//       />
//     </div>
//   );
// }


"use client";

import React from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ElementType;
  color?: string;
  className?: string;
}

export default function StatCard({
  label,
  value,
  icon: Icon,
  color = "#8B5CF6",
  className = "",
}: StatCardProps) {
  // Deterministic decorative sparkline path (visual only — not tied to real trend data)
  const sparkPoints = React.useMemo(() => {
    const seed = label.length + String(value).length;
    const pts = Array.from({ length: 8 }, (_, i) => {
      const n = Math.sin(seed * (i + 1) * 1.7) * 0.5 + 0.5;
      return 18 - n * 12;
    });
    return pts
      .map((y, i) => `${(i * 100) / (pts.length - 1)},${y.toFixed(1)}`)
      .join(" ");
  }, [label, value]);

  return (
    <div
      className={`group relative overflow-hidden rounded-[20px] border p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 ${className}`}
      style={{
        background: "rgba(255,255,255,0.70)",
        borderColor: "rgba(139,92,246,0.12)",
        boxShadow: "0 4px 24px -8px rgba(139,92,246,0.10)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 8px 32px -8px ${color}33`;
        e.currentTarget.style.borderColor = `${color}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 24px -8px rgba(139,92,246,0.10)";
        e.currentTarget.style.borderColor = "rgba(139,92,246,0.12)";
      }}
    >
      <div className="flex items-start justify-between">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-[14px] transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${color}14`,
            border: `1px solid ${color}2E`,
            color,
          }}
        >
          <Icon className="h-5 w-5" stroke={1.75} />
        </div>
      </div>

      <div className="mt-4">
        <p
          className="text-[13px] font-medium tracking-tight"
          style={{ color: "#64748B" }}
        >
          {label}
        </p>
        <p
          className="mt-1 text-[28px] font-bold leading-none tracking-tight"
          style={{ color: "#11183A" }}
        >
          {value}
        </p>
      </div>

      {/* Decorative sparkline */}
      <div className="mt-3 h-6 w-full opacity-80">
        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="h-full w-full">
          <polyline
            points={sparkPoints}
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full blur-2xl opacity-40 transition-opacity duration-300 group-hover:opacity-70"
        style={{ background: color }}
      />
    </div>
  );
}