// "use client";

// import React, { useEffect, useState } from "react";

// const ACCENT = "#ccff00";

// interface CircularProgressProps {
//   value: number;
//   size?: number;
//   strokeWidth?: number;
//   className?: string;
//   label?: string;
// }

// export default function CircularProgress({
//   value,
//   size = 120,
//   strokeWidth = 10,
//   className = "",
//   label,
// }: CircularProgressProps) {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => setProgress(value), 100);
//     return () => clearTimeout(timer);
//   }, [value]);

//   const radius = (size - strokeWidth) / 2;
//   const circumference = radius * 2 * Math.PI;
//   const strokeDashoffset = circumference - (progress / 100) * circumference;

//   return (
//     <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
//       <div className="relative" style={{ width: size, height: size }}>

//         <svg className="h-full w-full -rotate-90 transform" viewBox={`0 0 ${size} ${size}`}>
//           {/* Background track */}
//           <circle
//             cx={size / 2}
//             cy={size / 2}
//             r={radius}
//             fill="transparent"
//             stroke="rgba(255,255,255,0.07)"
//             strokeWidth={strokeWidth}
//           />
//           {/* Progress track */}
//           <circle
//             cx={size / 2}
//             cy={size / 2}
//             r={radius}
//             fill="transparent"
//             stroke={ACCENT}
//             strokeWidth={strokeWidth}
//             strokeLinecap="butt"
//             style={{
//               strokeDasharray: circumference,
//               strokeDashoffset,
//               transition: "stroke-dashoffset 1s ease-out",
//             }}
//           />
//         </svg>
//         {/* Center text */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <span className="text-2xl font-black text-white">{value}%</span>
//         </div>
//       </div>
//       {label && <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">{label}</span>}
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";

interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  label?: string;
}

export default function CircularProgress({
  value,
  size = 120,
  strokeWidth = 10,
  className = "",
  label,
}: CircularProgressProps) {
  const [progress, setProgress] = useState(0);
  const gradientId = React.useId();

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 100);
    return () => clearTimeout(timer);
  }, [value]);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        {/* Soft ambient glow behind the ring */}
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-40"
          style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)" }}
        />

        <svg className="relative h-full w-full -rotate-90 transform" viewBox={`0 0 ${size} ${size}`}>
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="rgba(139,92,246,0.12)"
            strokeWidth={strokeWidth}
          />
          {/* Progress track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={`url(#${gradientId})`}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset,
              transition: "stroke-dashoffset 1s ease-out",
            }}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold" style={{ color: "#11183A" }}>
            {value}
          </span>
          <span className="text-xs font-medium" style={{ color: "#94A3B8" }}>
            /100
          </span>
        </div>
      </div>
      {label && (
        <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "#94A3B8" }}>
          {label}
        </span>
      )}
    </div>
  );
}