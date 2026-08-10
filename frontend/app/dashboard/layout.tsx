// // // // // import React from "react";
// // // // // import Sidebar from "@/components/dashboard/Sidebar";
// // // // // import TopBar from "@/components/dashboard/TopBar";
// // // // // import MobileNav from "@/components/dashboard/MobileNav";
// // // // // import { GithubConnectModal } from "@/components/dashboard/GithubConnectModal";

// // // // // export default function DashboardLayout({ children }: { children: React.ReactNode }) {
// // // // //   return (
// // // // //     <div className="flex h-screen overflow-hidden bg-[#09090b] text-white">
// // // // //       {/* Modal for GitHub Connection */}
// // // // //       <GithubConnectModal />

// // // // //       {/* Sidebar (Desktop only) */}
// // // // //       <div className="hidden sm:block">
// // // // //         <Sidebar />
// // // // //       </div>

// // // // //       {/* Main Content Area */}
// // // // //       <div className="flex flex-1 flex-col overflow-hidden">
// // // // //         {/* TopBar */}
// // // // //         <TopBar />

// // // // //         {/* Scrollable Main Content */}
// // // // //         <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 pb-20 sm:pb-6">
// // // // //           <div className="mx-auto max-w-6xl">
// // // // //             {children}
// // // // //           </div>
// // // // //         </main>
// // // // //       </div>

// // // // //       {/* Mobile Bottom Nav */}
// // // // //       <MobileNav />
// // // // //     </div>
// // // // //   );
// // // // // }




// // // // import React from "react";
// // // // import Sidebar from "@/components/dashboard/Sidebar";
// // // // import TopBar from "@/components/dashboard/TopBar";
// // // // import MobileNav from "@/components/dashboard/MobileNav";

// // // // export default function DashboardLayout({ children }: { children: React.ReactNode }) {
// // // //   return (
// // // //     <div className="flex h-screen overflow-hidden bg-[#09090b] text-white">
// // // //       {/* Sidebar (Desktop only) */}
// // // //       <div className="hidden sm:block">
// // // //         <Sidebar />
// // // //       </div>

// // // //       {/* Main Content Area */}
// // // //       <div className="flex flex-1 flex-col overflow-hidden">
// // // //         <TopBar />

// // // //         <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 pb-20 sm:pb-6">
// // // //           <div className="mx-auto max-w-6xl">
// // // //             {children}
// // // //           </div>
// // // //         </main>
// // // //       </div>

// // // //       {/* Mobile Bottom Nav */}
// // // //       <MobileNav />
// // // //     </div>
// // // //   );
// // // // }


// // // "use client";

// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import Sidebar from "@/components/dashboard/Sidebar";
// // // import TopBar from "@/components/dashboard/TopBar";
// // // import MobileNav from "@/components/dashboard/MobileNav";

// // // /* ═══════════════════════════════════════════════════════════════════════════
// // //    DASHBOARD LAYOUT — CodeSentry AI
// // //    Premium lavender glassmorphism layout.
// // //    Preserves all existing component imports and structure.
// // //    ═══════════════════════════════════════════════════════════════════════════ */

// // // export default function DashboardLayout({ children }: { children: React.ReactNode }) {
// // //   return (
// // //     <div className="relative flex h-screen overflow-hidden bg-[#F6F2FF] text-[#111827]">
// // //       {/* ═══════════════════════════════════════════════════════════════════
// // //           BACKGROUND EFFECTS — Premium Lavender Aurora
// // //          ═══════════════════════════════════════════════════════════════════ */}
// // //       <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
// // //         {/* Base aurora gradient */}
// // //         <div
// // //           className="absolute inset-0"
// // //           style={{
// // //             background:
// // //               "radial-gradient(ellipse 80% 60% at 15% 30%, rgba(122,90,248,0.14) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 85% 70%, rgba(155,124,255,0.16) 0%, transparent 50%), linear-gradient(165deg, #F8F5FF 0%, #EEE5FF 100%)",
// // //           }}
// // //         />

// // //         {/* Subtle grid texture */}
// // //         <div
// // //           className="absolute inset-0 opacity-[0.3]"
// // //           style={{
// // //             backgroundImage:
// // //               "linear-gradient(rgba(122,90,248,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(122,90,248,0.05) 1px, transparent 1px)",
// // //             backgroundSize: "60px 60px",
// // //             maskImage: "radial-gradient(ellipse at 50% 40%, black 15%, transparent 70%)",
// // //           }}
// // //         />

// // //         {/* Floating blur orbs */}
// // //         <motion.div
// // //           className="absolute -left-24 top-1/4 h-[400px] w-[400px] rounded-full bg-[#7A5AF8]/12 blur-[100px]"
// // //           animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
// // //           transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //         <motion.div
// // //           className="absolute -right-20 bottom-1/4 h-[350px] w-[350px] rounded-full bg-[#9C82FF]/14 blur-[90px]"
// // //           animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
// // //           transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //         <motion.div
// // //           className="absolute left-1/2 top-0 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-[#B59DFF]/10 blur-[80px]"
// // //           animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
// // //           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
// // //         />

// // //         {/* Noise texture */}
// // //         <div
// // //           className="absolute inset-0 opacity-[0.012]"
// // //           style={{
// // //             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
// // //           }}
// // //         />
// // //       </div>

// // //       {/* ═══════════════════════════════════════════════════════════════════
// // //           SIDEBAR — Desktop Only
// // //          ═══════════════════════════════════════════════════════════════════ */}
// // //       <motion.div
// // //         className="relative z-20 hidden sm:block"
// // //         initial={{ opacity: 0, x: -20 }}
// // //         animate={{ opacity: 1, x: 0 }}
// // //         transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
// // //       >
// // //         <Sidebar />
// // //       </motion.div>

// // //       {/* ═══════════════════════════════════════════════════════════════════
// // //           MAIN CONTENT AREA
// // //          ═══════════════════════════════════════════════════════════════════ */}
// // //       <div className="relative z-10 flex flex-1 flex-col overflow-hidden">
// // //         {/* TopBar */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: -10 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.4, delay: 0.1 }}
// // //         >
// // //           <TopBar />
// // //         </motion.div>

// // //         {/* Scrollable Main */}
// // //         <main className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 12 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
// // //             className="mx-auto max-w-[1440px] p-4 sm:p-6 lg:p-8 pb-24 sm:pb-8"
// // //           >
// // //             {children}
// // //           </motion.div>
// // //         </main>
// // //       </div>

// // //       {/* ═══════════════════════════════════════════════════════════════════
// // //           MOILE BOTTOM NAV
// // //          ═══════════════════════════════════════════════════════════════════ */}
// // //       <div className="relative z-30 sm:hidden">
// // //         <MobileNav />
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // "use client";

// // import React from "react";
// // import { motion } from "framer-motion";
// // import Sidebar from "@/components/dashboard/Sidebar";
// // import TopBar from "@/components/dashboard/TopBar";
// // import MobileNav from "@/components/dashboard/MobileNav";

// // /* ═══════════════════════════════════════════════════════════════════════════
// //    DASHBOARD LAYOUT — CodeSentry AI
// //    Premium Dark Glassmorphism Layout (Apple WWDC / Linear / Raycast style)
// //    ═══════════════════════════════════════════════════════════════════════════ */

// // export default function DashboardLayout({ children }: { children: React.ReactNode }) {
// //   return (
// //     <div className="relative flex h-screen overflow-hidden bg-[#070B16] text-white">
// //       {/* ═══════════════════════════════════════════════════════════════════
// //           BACKGROUND EFFECTS — Premium Dark Aurora
// //          ═══════════════════════════════════════════════════════════════════ */}
// //       <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
// //         {/* Base dark aurora */}
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             background:
// //               "radial-gradient(ellipse 80% 60% at 15% 20%, rgba(139,92,246,0.12) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 85% 75%, rgba(79,140,255,0.09) 0%, transparent 50%), radial-gradient(ellipse 50% 40% at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 50%), linear-gradient(165deg, #070B16 0%, #0B1020 100%)",
// //           }}
// //         />

// //         {/* Subtle grid */}
// //         <div
// //           className="absolute inset-0 opacity-[0.25]"
// //           style={{
// //             backgroundImage:
// //               "linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)",
// //             backgroundSize: "60px 60px",
// //             maskImage: "radial-gradient(ellipse at 50% 40%, black 10%, transparent 70%)",
// //           }}
// //         />

// //         {/* Floating blur orbs */}
// //         <motion.div
// //           className="absolute -left-24 top-1/4 h-[420px] w-[420px] rounded-full bg-[#8B5CF6]/10 blur-[110px]"
// //           animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
// //           transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute -right-20 bottom-1/4 h-[380px] w-[380px] rounded-full bg-[#4F8CFF]/10 blur-[100px]"
// //           animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
// //           transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#00D4FF]/06 blur-[90px]"
// //           animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
// //           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
// //         />

// //         {/* Very subtle noise */}
// //         <div
// //           className="absolute inset-0 opacity-[0.015]"
// //           style={{
// //             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
// //           }}
// //         />
// //       </div>

// //       {/* ═══════════════════════════════════════════════════════════════════
// //           SIDEBAR — Desktop Only
// //          ═══════════════════════════════════════════════════════════════════ */}
// //       <motion.div
// //         className="relative z-20 hidden sm:block"
// //         initial={{ opacity: 0, x: -20 }}
// //         animate={{ opacity: 1, x: 0 }}
// //         transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
// //       >
// //         <Sidebar />
// //       </motion.div>

// //       {/* ═══════════════════════════════════════════════════════════════════
// //           MAIN CONTENT AREA
// //          ═══════════════════════════════════════════════════════════════════ */}
// //       <div className="relative z-10 flex flex-1 flex-col overflow-hidden sm:ml-[260px]">
// //         {/* TopBar */}
// //         <motion.div
// //           initial={{ opacity: 0, y: -10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.4, delay: 0.1 }}
// //         >
// //           <TopBar />
// //         </motion.div>

// //         {/* Scrollable Main */}
// //         <main className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth">
// //           <motion.div
// //             initial={{ opacity: 0, y: 12 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
// //             className="mx-auto max-w-[1440px] p-4 sm:p-6 lg:p-8 pb-24 sm:pb-8"
// //           >
// //             {children}
// //           </motion.div>
// //         </main>
// //       </div>

// //       {/* ═══════════════════════════════════════════════════════════════════
// //           MOBILE BOTTOM NAV
// //          ═══════════════════════════════════════════════════════════════════ */}
// //       <div className="relative z-30 sm:hidden">
// //         <MobileNav />
// //       </div>
// //     </div>
// //   );
// // }


// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Sidebar from "@/components/dashboard/Sidebar";
// import TopBar from "@/components/dashboard/TopBar";
// import MobileNav from "@/components/dashboard/MobileNav";

// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="relative flex h-screen overflow-hidden bg-[#070B16] text-white">
//       {/* Background Effects */}
//       <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(ellipse 80% 60% at 15% 20%, rgba(139,92,246,0.12) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 85% 75%, rgba(79,140,255,0.09) 0%, transparent 50%), radial-gradient(ellipse 50% 40% at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 50%), linear-gradient(165deg, #070B16 0%, #0B1020 100%)",
//           }}
//         />
//         <div
//           className="absolute inset-0 opacity-[0.25]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)",
//             backgroundSize: "60px 60px",
//             maskImage: "radial-gradient(ellipse at 50% 40%, black 10%, transparent 70%)",
//           }}
//         />
//         <motion.div
//           className="absolute -left-24 top-1/4 h-[420px] w-[420px] rounded-full bg-[#8B5CF6]/10 blur-[110px]"
//           animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
//           transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -right-20 bottom-1/4 h-[380px] w-[380px] rounded-full bg-[#4F8CFF]/10 blur-[100px]"
//           animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
//           transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#00D4FF]/06 blur-[90px]"
//           animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <div
//           className="absolute inset-0 opacity-[0.015]"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//           }}
//         />
//       </div>

//       {/* Sidebar */}
//       <motion.div
//         className="relative z-20 hidden sm:block"
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//       >
//         <Sidebar />
//       </motion.div>

//       {/* Main Content — FIXED offset to 280px */}
//       <div className="relative z-10 flex flex-1 flex-col overflow-hidden sm:ml-[280px]">
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, delay: 0.1 }}
//         >
//           <TopBar />
//         </motion.div>

//         <main className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth">
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//             className="mx-auto max-w-[1440px] p-4 sm:p-6 lg:p-8 pb-24 sm:pb-8"
//           >
//             {children}
//           </motion.div>
//         </main>
//       </div>

//       {/* Mobile Nav */}
//       <div className="relative z-30 sm:hidden">
//         <MobileNav />
//       </div>
//     </div>
//   );
// }


import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";
import MobileNav from "@/components/dashboard/MobileNav";
import { GithubConnectModal } from "@/components/dashboard/GithubConnectModal";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "#F3F0FF", color: "#11183A" }}>
      {/* Modal for GitHub Connection */}
      <GithubConnectModal />

      {/* Sidebar (Desktop only) — fixed position, so reserve its width below */}
      <div className="hidden sm:block sm:w-[272px] shrink-0">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* TopBar */}
        <TopBar />

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 pb-20 sm:pb-6">
          <div className="mx-auto max-w-6xl">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <MobileNav />
    </div>
  );
}