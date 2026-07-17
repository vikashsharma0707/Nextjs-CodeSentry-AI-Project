// "use client";

// import React from "react";

// const ACCENT = "#ccff00";

// interface StatCardProps {
//   label: string;
//   value: string | number;
//   icon: React.ElementType;
//   className?: string;
// }

// export default function StatCard({ label, value, icon: Icon, className = "" }: StatCardProps) {
//   return (
//     <div
//       className={`relative overflow-hidden p-5 transition-all duration-300 hover:-translate-y-0.5 ${className}`}
//       style={{
//         background: "rgba(204,255,0,0.03)",
//         border: "1px solid rgba(204,255,0,0.15)",
//         clipPath: "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
//       }}
//     >
//       {/* Corner accent lines */}
//       <div className="absolute top-0 left-0 w-6 h-px" style={{ background: ACCENT }} />
//       <div className="absolute top-0 left-0 h-6 w-px" style={{ background: ACCENT }} />
//       <div className="absolute bottom-0 right-0 w-6 h-px" style={{ background: ACCENT }} />
//       <div className="absolute bottom-0 right-0 h-6 w-px" style={{ background: ACCENT }} />

//       <div className="flex items-start justify-between">
//         <div>
//           <p className="text-3xl font-black text-white tracking-tight">{value}</p>
//           <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">{label}</p>
//         </div>
//         <div
//           className="flex h-10 w-10 items-center justify-center"
//           style={{
//             border: "1px solid rgba(204,255,0,0.25)",
//             background: "rgba(204,255,0,0.06)",
//             color: ACCENT,
//           }}
//         >
//           <Icon className="h-5 w-5" stroke={1.75} />
//         </div>
//       </div>

//       {/* Glow effect */}
//       <div
//         className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full blur-2xl pointer-events-none"
//         style={{ background: "rgba(204,255,0,0.08)" }}
//       />
//     </div>
//   );
// }



"use client";

import React from "react";

const ACCENT = "#5B5FFF";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ElementType;
  className?: string;
}

export default function StatCard({ label, value, icon: Icon, className = "" }: StatCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0E1324] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5B5FFF]/30 hover:shadow-[0_0_30px_-10px_rgba(91,95,255,0.4)] ${className}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-3xl font-bold text-white tracking-tight">{value}</p>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7B859E]">{label}</p>
        </div>
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#5B5FFF]/25 bg-gradient-to-br from-[#5B5FFF]/15 to-[#6F4CFF]/5"
          style={{ color: ACCENT }}
        >
          <Icon className="h-5 w-5" stroke={1.75} />
        </div>
      </div>

      {/* Glow effect */}
      <div
        className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full blur-2xl pointer-events-none opacity-60"
        style={{ background: "rgba(91,95,255,0.15)" }}
      />
    </div>
  );
}