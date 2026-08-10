// // // import type { Metadata } from "next";

// // // import NavBar from "@/components/marketing/NavBar";
// // // import HeroSection from "@/components/marketing/HeroSection";
// // // import FeaturesSection from "@/components/marketing/FeaturesSection";
// // // import UseCaseSection from "@/components/marketing/UseCaseSection";
// // // import TryItSection from "@/components/marketing/TryItSection";
// // // import PricingSection from "@/components/marketing/PricingSection";
// // // import ContactSection from "@/components/marketing/ContactSection";
// // // import Footer from "@/components/marketing/Footer";

// // // export const metadata: Metadata = {
// // //   title: "BunoBagera — Smart AI Code Reviewer for Real Projects",
// // //   description: "Identify issues, optimize code, and deploy cleaner codebases. AI-assisted automated code reviews matching your team's rules.",
// // //   keywords: [
// // //     "AI code review tool",
// // //     "automated PR analysis",
// // //     "smart static analysis",
// // //     "code quality assistant",
// // //     "GitHub bot review",
// // //     "automated code audit online",
// // //     "software debugging AI",
// // //     "automated security code scanner",
// // //     "clean code review",
// // //     "code refactoring AI assistant"
// // //   ],
// // //   openGraph: {
// // //     title: "BunoBagera — Smart AI Code Reviewer for Real Projects",
// // //     description: "Identify issues, optimize code, and deploy cleaner codebases. AI-assisted automated code reviews matching your team's rules.",
// // //     type: "website",
// // //     locale: "en_US",
// // //     siteName: "BunoBagera",
// // //   },
// // //   twitter: {
// // //     card: "summary_large_image",
// // //     title: "BunoBagera — Smart AI Code Reviewer for Real Projects",
// // //     description: "Identify issues, optimize code, and deploy cleaner codebases. AI-assisted automated code reviews matching your team's rules.",
// // //     creator: "@BunoBagera",
// // //   },
// // // };

// // // export default function MarketingPage() {
// // //   return (
// // //     <div className="min-h-screen bg-[#050505] font-sans antialiased">
// // //       <NavBar />
// // //       <main>
// // //         <HeroSection />
// // //         <FeaturesSection />
// // //         <UseCaseSection />
// // //         <TryItSection />
// // //         <PricingSection />
// // //         <ContactSection />
// // //       </main>
// // //       <Footer />
// // //     </div>
// // //   );
// // // }


// // import type { Metadata } from "next";

// // import NavBar from "@/components/marketing/NavBar";
// // import HeroSection from "@/components/marketing/HeroSection";
// // import FeaturesSection from "@/components/marketing/FeaturesSection";
// // import UseCaseSection from "@/components/marketing/UseCaseSection";
// // import TryItSection from "@/components/marketing/TryItSection";
// // import PricingSection from "@/components/marketing/PricingSection";
// // import ContactSection from "@/components/marketing/ContactSection";
// // import Footer from "@/components/marketing/Footer";

// // export const metadata: Metadata = {
// //   title: "CodeSentry AI — Smart AI Code Reviewer for Real Projects",
// //   description: "Identify issues, optimize code, and deploy cleaner codebases. AI-assisted automated code reviews matching your team's rules.",
// //   keywords: [
// //     "AI code review tool",
// //     "automated PR analysis",
// //     "smart static analysis",
// //     "code quality assistant",
// //     "GitHub bot review",
// //     "automated code audit online",
// //     "software debugging AI",
// //     "automated security code scanner",
// //     "clean code review",
// //     "code refactoring AI assistant"
// //   ],
// //   openGraph: {
// //     title: "CodeSentry AI — Smart AI Code Reviewer for Real Projects",
// //     description: "Identify issues, optimize code, and deploy cleaner codebases. AI-assisted automated code reviews matching your team's rules.",
// //     type: "website",
// //     locale: "en_US",
// //     siteName: "CodeSentry AI",
// //   },
// //   twitter: {
// //     card: "summary_large_image",
// //     title: "CodeSentry AI — Smart AI Code Reviewer for Real Projects",
// //     description: "Identify issues, optimize code, and deploy cleaner codebases. AI-assisted automated code reviews matching your team's rules.",
// //     creator: "@CodeSentryAI",
// //   },
// // };

// // export default function MarketingPage() {
// //   return (
// //     <div className="min-h-screen bg-[#060816] font-sans antialiased">
// //       <NavBar />
// //       <main>
// //         <HeroSection />
// //         <FeaturesSection />
// //         <UseCaseSection />
// //         <TryItSection />
// //         <PricingSection />
// //         <ContactSection />
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }


// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
// import {
//   Sparkles,
//   Shield,
//   Zap,
//   GitPullRequest,
//   Eye,
//   Check,
//   ChevronDown,
//   Star,
//   ArrowRight,
//   Play,
//   Cloud,
//   BarChart3,
//   TrendingUp,
//   Users,
//   Scan,
//   Wand2,
//   CheckCircle2,
//   AlertTriangle,
//   Bug,
//   Timer,
//   Server,
//   LayoutDashboard,
//   LayoutGrid,
//   GitBranch,
//   Search as SearchIcon,
//   CreditCard as CreditCardIcon,
//   Triangle,
// } from "lucide-react";

// import NavBar from "@/components/marketing/NavBar";
// import Footer from "@/components/marketing/Footer";

// /* ═══════════════════════════════════════════════════════════════════════════
//    TYPES
//    ═══════════════════════════════════════════════════════════════════════════ */

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// /* ═══════════════════════════════════════════════════════════════════════════
//    ANIMATION VARIANTS
//    ═══════════════════════════════════════════════════════════════════════════ */

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.8 } },
// };

// const scaleUp = {
//   hidden: { opacity: 0, scale: 0.92 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
// };

// const slideInLeft = {
//   hidden: { opacity: 0, x: -60 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
// };

// const slideInRight = {
//   hidden: { opacity: 0, x: 60 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: 0.15 },
//   },
// };

// const floatAnimation = {
//   y: [0, -12, 0],
//   transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
// };

// const glowPulse = {
//   scale: [1, 1.05, 1],
//   opacity: [0.6, 0.9, 0.6],
//   transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
// };

// /* ═══════════════════════════════════════════════════════════════════════════
//    REUSABLE COMPONENTS
//    ═══════════════════════════════════════════════════════════════════════════ */

// function GlassCard({ children, className = "", hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
//   return (
//     <motion.div
//       whileHover={hover ? { y: -6, boxShadow: "0 24px 60px rgba(122,90,248,0.18)" } : {}}
//       transition={{ type: "spring", stiffness: 400, damping: 25 }}
//       className={`rounded-3xl border border-[rgba(122,90,248,0.12)] bg-[rgba(255,255,255,0.65)] backdrop-blur-[40px] shadow-[0_8px_40px_rgba(122,90,248,0.1)] ${className}`}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function GradientButton({ children, href, onClick, className = "" }: { children: React.ReactNode; href?: string; onClick?: () => void; className?: string }) {
//   const base = (
//     <motion.span
//       whileHover={{ y: -2, boxShadow: "0 16px 48px rgba(122,90,248,0.4)" }}
//       whileTap={{ scale: 0.97 }}
//       className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7A5AF8] to-[#9C82FF] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_12px_40px_rgba(122,90,248,0.35)] transition-all duration-300 cursor-pointer ${className}`}
//     >
//       {children}
//     </motion.span>
//   );
//   if (href) return <Link href={href}>{base}</Link>;
//   if (onClick) return <button onClick={onClick}>{base}</button>;
//   return base;
// }

// function SecondaryButton({ children, href, onClick, className = "" }: { children: React.ReactNode; href?: string; onClick?: () => void; className?: string }) {
//   const base = (
//     <motion.span
//       whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.9)", boxShadow: "0 12px 32px rgba(122,90,248,0.15)" }}
//       whileTap={{ scale: 0.97 }}
//       className={`inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(122,90,248,0.15)] bg-white/60 px-8 py-4 text-[15px] font-semibold text-[#111827] backdrop-blur-sm transition-all duration-300 cursor-pointer ${className}`}
//     >
//       {children}
//     </motion.span>
//   );
//   if (href) return <Link href={href}>{base}</Link>;
//   if (onClick) return <button onClick={onClick}>{base}</button>;
//   return base;
// }

// function SectionBadge({ text }: { text: string }) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(122,90,248,0.15)] bg-white/50 px-4 py-2 text-sm font-medium text-[#7A5AF8] backdrop-blur-sm"
//     >
//       <Sparkles className="h-4 w-4" />
//       {text}
//     </motion.div>
//   );
// }

// function SectionHeading({ children, gradient = false }: { children: React.ReactNode; gradient?: boolean }) {
//   return (
//     <motion.h2
//       variants={fadeUp}
//       className={`text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.5rem] ${gradient ? "bg-gradient-to-r from-[#7A5AF8] to-[#5B6CFF] bg-clip-text text-transparent" : "text-[#111827]"}`}
//     >
//       {children}
//     </motion.h2>
//   );
// }

// function SectionSubheading({ children }: { children: React.ReactNode }) {
//   return (
//     <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#5B6172]">
//       {children}
//     </motion.p>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════════════════
//    BACKGROUND EFFECTS
//    ═══════════════════════════════════════════════════════════════════════════ */

// function GlobalBackground() {
//   return (
//     <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
//       {/* Base gradient */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(122,90,248,0.18) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 85% 70%, rgba(155,124,255,0.2) 0%, transparent 50%), linear-gradient(165deg, #F5F0FF 0%, #EEE5FF 100%)",
//         }}
//       />

//       {/* Grid texture */}
//       <div
//         className="absolute inset-0 opacity-[0.35]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(122,90,248,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(122,90,248,0.05) 1px, transparent 1px)",
//           backgroundSize: "60px 60px",
//           maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
//         }}
//       />

//       {/* Floating orbs */}
//       <motion.div
//         className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-[#7A5AF8]/15 blur-[120px]"
//         animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
//         transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute -right-24 bottom-1/4 h-[450px] w-[450px] rounded-full bg-[#9C82FF]/18 blur-[110px]"
//         animate={{ x: [0, -35, 0], y: [0, 30, 0] }}
//         transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute left-1/3 top-0 h-[350px] w-[350px] rounded-full bg-[#B59DFF]/12 blur-[90px]"
//         animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-1/3 h-[300px] w-[300px] rounded-full bg-[#7A5AF8]/10 blur-[80px]"
//         animate={{ scale: [1, 1.2, 1], x: [0, 25, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Noise overlay */}
//       <div
//         className="absolute inset-0 opacity-[0.015]"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//         }}
//       />
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════════════════
//    SECTION 1 — HERO
//    ═══════════════════════════════════════════════════════════════════════════ */

// function HeroSection() {
//   const codeLines = [
//     { line: 1, text: 'export async function login(req) {', type: 'normal' },
//     { line: 2, text: '  const { email, password } = req.body;', type: 'normal' },
//     { line: 3, text: '  // ⚠️ Critical — SQL Injection', type: 'warning' },
//     { line: 4, text: '  const user = await db.query(`SELECT * FROM users', type: 'error' },
//     { line: 5, text: '    WHERE email = "${email}"`);', type: 'error' },
//     { line: 6, text: '  ', type: 'normal' },
//     { line: 7, text: '  // ✅ Fix applied automatically', type: 'success' },
//     { line: 8, text: '  const user = await db.query(', type: 'success' },
//     { line: 9, text: '    "SELECT * FROM users WHERE email = ?",', type: 'success' },
//     { line: 10, text: '    [email]', type: 'success' },
//     { line: 11, text: '  );', type: 'success' },
//     { line: 12, text: '}', type: 'normal' },
//   ];

//   return (
//     <section className="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
//           {/* Left: Text */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={staggerContainer}
//           >
//             <SectionBadge text="AI-Powered Code Intelligence" />

//             <motion.h1
//               variants={fadeUp}
//               className="text-5xl font-bold leading-[1.1] tracking-tight text-[#111827] sm:text-6xl lg:text-[4.5rem]"
//             >
//               Code smarter with{" "}
//               <span className="bg-gradient-to-r from-[#7A5AF8] to-[#5B6CFF] bg-clip-text text-transparent">
//                 CodeSentry AI
//               </span>
//             </motion.h1>

//             <motion.p variants={fadeUp} className="mt-6 max-w-lg text-lg leading-relaxed text-[#5B6172]">
//               Connect your GitHub, get AI-generated code reviews, apply automated fixes, and ship production-ready code in minutes.
//             </motion.p>

//             <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
//               <GradientButton href="/dashboard">
//                 <Scan className="h-5 w-5" />
//                 Scan a Repo
//                 <ArrowRight className="h-4 w-4" />
//               </GradientButton>
//               <SecondaryButton href="/how-it-works">
//                 <Play className="h-5 w-5" />
//                 See how it works
//               </SecondaryButton>
//             </motion.div>

//             <motion.div variants={fadeUp} className="mt-10 flex items-center gap-6">
//               <div className="flex -space-x-3">
//                 {[1, 2, 3, 4, 5].map((i) => (
//                   <div
//                     key={i}
//                     className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#7A5AF8] to-[#9C82FF] text-xs font-bold text-white shadow-sm"
//                   >
//                     {String.fromCharCode(64 + i)}
//                   </div>
//                 ))}
//               </div>
//               <div>
//                 <div className="flex items-center gap-1">
//                   {[1, 2, 3, 4, 5].map((i) => (
//                     <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
//                   ))}
//                 </div>
//                 <p className="mt-1 text-sm text-[#5B6172]">
//                   <span className="font-semibold text-[#111827]">10K+</span> developers trust us
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right: Code Editor */}
//           <motion.div
//             initial={{ opacity: 0, x: 60, scale: 0.95 }}
//             whileInView={{ opacity: 1, x: 0, scale: 1 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="relative"
//           >
//             {/* Glow behind */}
//             <div className="absolute -inset-8 -z-10 rounded-[40px] bg-[#7A5AF8]/10 blur-3xl" />

//             <motion.div
//               animate={{ y: [0, -8, 0] }}
//               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//               className="relative overflow-hidden rounded-3xl border border-[rgba(122,90,248,0.12)] bg-[#2B2545] shadow-[0_32px_80px_-20px_rgba(122,90,248,0.35)]"
//             >
//               {/* Window chrome */}
//               <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3">
//                 <div className="flex gap-1.5">
//                   <div className="h-3 w-3 rounded-full bg-red-400/80" />
//                   <div className="h-3 w-3 rounded-full bg-amber-400/80" />
//                   <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
//                 </div>
//                 <span className="ml-3 text-xs text-white/40 font-mono">auth-service/login.ts</span>
//               </div>

//               {/* Code content */}
//               <div className="p-5 font-mono text-sm leading-relaxed">
//                 {codeLines.map((line, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.5 + i * 0.08 }}
//                     className={`flex ${line.type === 'warning' ? 'rounded-lg bg-amber-500/10 px-2 py-1 -mx-2 my-0.5 border border-amber-500/20' : line.type === 'error' ? 'rounded-lg bg-red-500/10 px-2 py-0.5 -mx-2 border border-red-500/20' : line.type === 'success' ? 'rounded-lg bg-emerald-500/10 px-2 py-0.5 -mx-2 border border-emerald-500/20' : ''}`}
//                   >
//                     <span className="mr-4 w-6 text-right text-white/20 select-none">{line.line}</span>
//                     <span className={
//                       line.type === 'warning' ? 'text-amber-300' :
//                       line.type === 'error' ? 'text-red-300' :
//                       line.type === 'success' ? 'text-emerald-300' :
//                       'text-white/80'
//                     }>
//                       {line.type === 'warning' && <AlertTriangle className="mr-2 inline h-4 w-4 text-amber-400" />}
//                       {line.type === 'success' && <CheckCircle2 className="mr-2 inline h-4 w-4 text-emerald-400" />}
//                       {line.text}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Floating badges */}
//               <motion.div
//                 animate={{ y: [0, -6, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//                 className="absolute -right-4 -top-4 rounded-2xl border border-[rgba(122,90,248,0.15)] bg-white/90 px-4 py-3 shadow-[0_12px_40px_rgba(122,90,248,0.2)] backdrop-blur-xl"
//               >
//                 <div className="flex items-center gap-2">
//                   <Shield className="h-5 w-5 text-[#7A5AF8]" />
//                   <div>
//                     <p className="text-[10px] font-medium uppercase tracking-wider text-[#5B6172]">Security Score</p>
//                     <p className="text-xl font-bold text-[#111827]">94/100</p>
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 animate={{ y: [0, 6, 0] }}
//                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//                 className="absolute -bottom-4 -left-4 rounded-2xl border border-[rgba(122,90,248,0.15)] bg-white/90 px-4 py-3 shadow-[0_12px_40px_rgba(122,90,248,0.2)] backdrop-blur-xl"
//               >
//                 <div className="flex items-center gap-2">
//                   <GitPullRequest className="h-5 w-5 text-[#7A5AF8]" />
//                   <div>
//                     <p className="text-[10px] font-medium uppercase tracking-wider text-[#5B6172]">Pull Request</p>
//                     <p className="text-sm font-bold text-[#111827]">Auto-opened</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════════════════
//    SECTION 2 — COMPANIES MARQUEE
//    ═══════════════════════════════════════════════════════════════════════════ */

// function CompaniesSection() {
//   const companies = [
//     { name: "GitHub", icon: Github },
//     { name: "Microsoft", icon: LayoutGrid },
//     { name: "Google", icon: SearchIcon },
//     { name: "Vercel", icon: Triangle },
//     { name: "Cloudflare", icon: Cloud },
//     { name: "Stripe", icon: CreditCardIcon },
//     { name: "AWS", icon: Server },
//     { name: "OpenAI", icon: Sparkles },
//   ];

//   return (
//     <section className="relative z-10 py-16">
//       <div className="mx-auto max-w-7xl px-6">
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="mb-10 text-center text-sm font-medium uppercase tracking-[0.2em] text-[#5B6172]"
//         >
//           Trusted by engineering teams at
//         </motion.p>

//         <div className="relative overflow-hidden">
//           {/* Gradient masks */}
//           <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#F5F0FF] to-transparent" />
//           <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#F5F0FF] to-transparent" />

//           <motion.div
//             animate={{ x: [0, -1200] }}
//             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//             className="flex items-center gap-16"
//           >
//             {[...companies, ...companies, ...companies].map((company, i) => (
//               <div key={i} className="flex shrink-0 items-center gap-3 text-[#5B6172]/40 transition-colors hover:text-[#7A5AF8]">
//                 <company.icon className="h-7 w-7" stroke={1.5} />
//                 <span className="text-lg font-semibold whitespace-nowrap">{company.name}</span>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════════════════
//    SECTION 3 — FEATURES
//    ═══════════════════════════════════════════════════════════════════════════ */

// function FeaturesSection() {
//   const features = [
//     {
//       icon: Eye,
//       title: "AI Code Reviews",
//       description: "Get smart, context-aware code review suggestions that understand your codebase architecture and patterns.",
//       color: "#7A5AF8",
//     },
//     {
//       icon: Wand2,
//       title: "Auto Fixes",
//       description: "Apply AI-suggested fixes with one click. From security patches to performance optimizations.",
//       color: "#9C82FF",
//     },
//     {
//       icon: Shield,
//       title: "Security First",
//       description: "Detect vulnerabilities before they go live. OWASP, CVE, and custom rule scanning.",
//       color: "#5B6CFF",
//     },
//     {
//       icon: GitBranch,
//       title: "Seamless Integration",
//       description: "Works with GitHub, GitLab, and Bitbucket. Zero-config setup for your existing workflow.",
//       color: "#7A5AF8",
//     },
//     {
//       icon: BarChart3,
//       title: "Team Insights",
//       description: "Track code health and improve together. Velocity, quality trends, and team performance.",
//       color: "#9C82FF",
//     },
//     {
//       icon: Zap,
//       title: "Real-time Analysis",
//       description: "Instant feedback as you write. Catch issues before they become PR comments.",
//       color: "#5B6CFF",
//     },
//   ];

//   return (
//     <section className="relative z-10 py-24 lg:py-32">
//       <div className="mx-auto max-w-7xl px-6">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="text-center"
//         >
//           <SectionBadge text="Features" />
//           <SectionHeading>Everything you need to ship better code</SectionHeading>
//           <SectionSubheading>
//             From automated reviews to security scanning — CodeSentry AI handles the heavy lifting so you can focus on building.
//           </SectionSubheading>
//         </motion.div>

//         <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {features.map((feature, i) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//             >
//               <GlassCard className="group h-full p-8">
//                 <motion.div
//                   whileHover={{ scale: 1.1, rotate: 5 }}
//                   className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
//                   style={{ backgroundColor: `${feature.color}15` }}
//                 >
//                   <feature.icon className="h-7 w-7" style={{ color: feature.color }} stroke={1.8} />
//                 </motion.div>
//                 <h3 className="text-xl font-bold text-[#111827]">{feature.title}</h3>
//                 <p className="mt-3 text-[15px] leading-relaxed text-[#5B6172]">{feature.description}</p>

//                 {/* Gradient border on hover */}
//                 <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `linear-gradient(135deg, ${feature.color}20, transparent 50%)`, pointerEvents: "none" }} />
//               </GlassCard>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════════════════
//    SECTION 4 — INTERACTIVE AI WORKFLOW
//    ═══════════════════════════════════════════════════════════════════════════ */

// function WorkflowSection() {
//   const steps = [
//     { icon: Upload, title: "Upload Repository", desc: "Connect GitHub, GitLab, or Bitbucket in seconds", color: "#7A5AF8" },
//     { icon: Scan, title: "AI Scan", desc: "Deep analysis of your entire codebase", color: "#9C82FF" },
//     { icon: Shield, title: "Security Analysis", desc: "Detect vulnerabilities and security risks", color: "#5B6CFF" },
//     { icon: Eye, title: "Code Review", desc: "AI-generated review with context", color: "#7A5AF8" },
//     { icon: Wand2, title: "Fix Suggestions", desc: "One-click automated fixes", color: "#9C82FF" },
//     { icon: GitPullRequest, title: "Pull Request", desc: "Auto-generated PR with fixes", color: "#5B6CFF" },
//   ];

//   return (
//     <section className="relative z-10 py-24 lg:py-32">
//       <div className="mx-auto max-w-7xl px-6">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="text-center"
//         >
//           <SectionBadge text="How It Works" />
//           <SectionHeading>From repository to production in minutes</SectionHeading>
//           <SectionSubheading>
//             Our AI pipeline analyzes, reviews, and fixes your code automatically — no manual intervention required.
//           </SectionSubheading>
//         </motion.div>

//         <div className="mt-16">
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {steps.map((step, i) => (
//               <motion.div
//                 key={step.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.12, duration: 0.5 }}
//                 className="relative"
//               >
//                 <GlassCard className="h-full p-8">
//                   {/* Step number */}
//                   <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#7A5AF8] to-[#9C82FF] text-xs font-bold text-white shadow-lg">
//                     {i + 1}
//                   </div>

//                   <div
//                     className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
//                     style={{ backgroundColor: `${step.color}15` }}
//                   >
//                     <step.icon className="h-7 w-7" style={{ color: step.color }} stroke={1.8} />
//                   </div>

//                   <h3 className="text-xl font-bold text-[#111827]">{step.title}</h3>
//                   <p className="mt-2 text-[15px] leading-relaxed text-[#5B6172]">{step.desc}</p>
//                 </GlassCard>

//                 {/* Connector arrow (not on last item of row) */}
//                 {i < steps.length - 1 && (
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: i * 0.12 + 0.3 }}
//                     className="absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:block"
//                   >
//                     <ArrowRight className="h-5 w-5 text-[#7A5AF8]/30" />
//                   </motion.div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Upload(props: any) {
//   return (
//     <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//       <polyline points="17 8 12 3 7 8" />
//       <line x1="12" y1="3" x2="12" y2="15" />
//     </svg>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════════════════
//    SECTION 5 — WHY DEVELOPERS LOVE CODESENTRY
//    ═══════════════════════════════════════════════════════════════════════════ */

// function WhyDevelopersSection() {
//   const stats = [
//     { value: "94%", label: "Fewer Bugs in Production", icon: Bug },
//     { value: "3.2x", label: "Faster Code Reviews", icon: Timer },
//     { value: "87%", label: "Security Issues Caught", icon: Shield },
//     { value: "12K+", label: "Developers Using It", icon: Users },
//   ];

//   const testimonials = [
//     {
//       quote: "CodeSentry AI caught a critical SQL injection that our team missed for weeks. It paid for itself in the first day.",
//       author: "Sarah Chen",
//       role: "Lead Engineer at Stripe",
//       avatar: "SC",
//     },
//     {
//       quote: "Our review time dropped from 4 hours to 45 minutes. The AI suggestions are surprisingly accurate.",
//       author: "Marcus Johnson",
//       role: "CTO at Vercel",
//       avatar: "MJ",
//     },
//     {
//       quote: "Finally, a code review tool that actually understands context. Not just linting — real intelligence.",
//       author: "Aisha Patel",
//       role: "Principal Engineer at OpenAI",
//       avatar: "AP",
//     },
//   ];

//   return (
//     <section className="relative z-10 py-24 lg:py-32">
//       <div className="mx-auto max-w-7xl px-6">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="text-center"
//         >
//           <SectionBadge text="Results" />
//           <SectionHeading>Why developers love CodeSentry</SectionHeading>
//           <SectionSubheading>
//             Join thousands of teams shipping better code, faster.
//           </SectionSubheading>
//         </motion.div>

//         {/* Stats */}
//         <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
//           {stats.map((stat, i) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//             >
//               <GlassCard className="p-6 text-center">
//                 <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7A5AF8]/10">
//                   <stat.icon className="h-6 w-6 text-[#7A5AF8]" stroke={1.8} />
//                 </div>
//                 <p className="text-3xl font-bold text-[#111827]">{stat.value}</p>
//                 <p className="mt-1 text-sm text-[#5B6172]">{stat.label}</p>
//               </GlassCard>
//             </motion.div>
//           ))}
//         </div>

//         {/* Testimonials */}
//         <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={t.author}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.12, duration: 0.5 }}
//             >
//               <GlassCard className="h-full p-8">
//                 <Quote className="h-8 w-8 text-[#7A5AF8]/20" />
//                 <p className="mt-4 text-[15px] leading-relaxed text-[#5B6172]">{t.quote}</p>
//                 <div className="mt-6 flex items-center gap-3">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7A5AF8] to-[#9C82FF] text-xs font-bold text-white">
//                     {t.avatar}
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold text-[#111827]">{t.author}</p>
//                     <p className="text-xs text-[#5B6172]">{t.role}</p>
//                   </div>
//                 </div>
//               </GlassCard>
//             </motion.div>
//           ))}
//         </div>

//         {/* Mini chart */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-16"
//         >
//           <GlassCard className="p-8">
//             <div className="mb-6 flex items-center justify-between">
//               <div>
//                 <h3 className="text-lg font-bold text-[#111827]">Review Velocity</h3>
//                 <p className="text-sm text-[#5B6172]">Average time to merge (hours)</p>
//               </div>
//               <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600">
//                 <TrendingUp className="h-3 w-3" />
//                 -68% faster
//               </div>
//             </div>
//             <svg viewBox="0 0 800 200" className="w-full h-40 overflow-visible">
//               <defs>
//                 <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#7A5AF8" stopOpacity="0.3" />
//                   <stop offset="100%" stopColor="#7A5AF8" stopOpacity="0" />
//                 </linearGradient>
//               </defs>
//               <motion.path
//                 d="M0,180 Q100,160 200,140 T400,100 T600,60 T800,30 L800,200 L0,200 Z"
//                 fill="url(#chartGrad)"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//               />
//               <motion.path
//                 d="M0,180 Q100,160 200,140 T400,100 T600,60 T800,30"
//                 fill="none"
//                 stroke="#7A5AF8"
//                 strokeWidth="3"
//                 strokeLinecap="round"
//                 initial={{ pathLength: 0 }}
//                 whileInView={{ pathLength: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 2, ease: "easeInOut" }}
//               />
//               {[[0, 180], [200, 140], [400, 100], [600, 60], [800, 30]].map(([x, y], i) => (
//                 <motion.circle
//                   key={i}
//                   cx={x}
//                   cy={y}
//                   r="5"
//                   fill="#7A5AF8"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 1 + i * 0.2 }}
//                 />
//               ))}
//             </svg>
//             <div className="mt-4 flex justify-between text-xs text-[#5B6172]">
//               <span>Week 1</span>
//               <span>Week 2</span>
//               <span>Week 3</span>
//               <span>Week 4</span>
//               <span>Week 5</span>
//             </div>
//           </GlassCard>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// function Github(props: any) {
//   return (
//     <svg {...props} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
//     </svg>
//   );
// }

// function Quote(props: any) {
//   return (
//     <svg {...props} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.825-.55-.13-1.07-.14-1.54-.03-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368h.006z" />
//     </svg>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════════════════
//    SECTION 6 — LIVE DASHBOARD PREVIEW
//    ═══════════════════════════════════════════════════════════════════════════ */

// function DashboardPreviewSection() {
//   return (
//     <section className="relative z-10 py-24 lg:py-32">
//       <div className="mx-auto max-w-7xl px-6">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="text-center"
//         >
//           <SectionBadge text="Dashboard" />
//           <SectionHeading>Your command center for code quality</SectionHeading>
//           <SectionSubheading>
//             Real-time insights into your codebase health, security posture, and team productivity.
//           </SectionSubheading>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mt-16"
//         >
//           <div className="relative">
//             {/* Glow */}
//             <div className="absolute -inset-8 -z-10 rounded-[48px] bg-[#7A5AF8]/10 blur-3xl" />

//             <motion.div
//               animate={{ y: [0, -8, 0] }}
//               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//               className="overflow-hidden rounded-3xl border border-[rgba(122,90,248,0.12)] bg-[#2B2545] shadow-[0_32px_80px_-20px_rgba(122,90,248,0.35)]"
//             >
//               {/* Dashboard chrome */}
//               <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3">
//                 <div className="flex gap-1.5">
//                   <div className="h-3 w-3 rounded-full bg-red-400/80" />
//                   <div className="h-3 w-3 rounded-full bg-amber-400/80" />
//                   <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
//                 </div>
//                 <div className="ml-4 flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-xs text-white/40">
//                   <SearchIcon className="h-3 w-3" />
//                   Search repositories...
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 gap-4 p-5 lg:grid-cols-4">
//                 {/* Sidebar */}
//                 <div className="hidden rounded-2xl bg-white/5 p-4 lg:block">
//                   <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white/80">
//                     <LayoutDashboard className="h-4 w-4 text-[#7A5AF8]" />
//                     Dashboard
//                   </div>
//                   {["Repositories", "Reviews", "Security", "Team", "Settings"].map((item) => (
//                     <div key={item} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/40 hover:bg-white/5 hover:text-white/60">
//                       <div className="h-2 w-2 rounded-full bg-[#7A5AF8]/40" />
//                       {item}
//                     </div>
//                   ))}
//                 </div>

//                 {/* Main content */}
//                 <div className="lg:col-span-3 space-y-4">
//                   {/* Metrics row */}
//                   <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
//                     {[
//                       { label: "Repositories", value: "24", change: "+12%", icon: GitBranch },
//                       { label: "Reviews", value: "1,847", change: "+23%", icon: Eye },
//                       { label: "Security Score", value: "94%", change: "+5%", icon: Shield },
//                       { label: "Issues Fixed", value: "342", change: "-8%", icon: CheckCircle2 },
//                     ].map((m, i) => (
//                       <motion.div
//                         key={m.label}
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: i * 0.1 }}
//                         className="rounded-2xl bg-white/5 p-4"
//                       >
//                         <div className="flex items-center gap-2 text-white/40">
//                           <m.icon className="h-4 w-4" />
//                           <span className="text-xs">{m.label}</span>
//                         </div>
//                         <p className="mt-2 text-2xl font-bold text-white">{m.value}</p>
//                         <span className="text-xs text-emerald-400">{m.change}</span>
//                       </motion.div>
//                     ))}
//                   </div>

//                   {/* Chart area */}
//                   <div className="rounded-2xl bg-white/5 p-5">
//                     <div className="mb-4 flex items-center justify-between">
//                       <span className="text-sm font-semibold text-white/80">Security Trend</span>
//                       <span className="text-xs text-white/40">Last 30 days</span>
//                     </div>
//                     <svg viewBox="0 0 600 120" className="w-full h-24 overflow-visible">
//                       <defs>
//                         <linearGradient id="dashGrad" x1="0" y1="0" x2="0" y2="1">
//                           <stop offset="0%" stopColor="#7A5AF8" stopOpacity="0.3" />
//                           <stop offset="100%" stopColor="#7A5AF8" stopOpacity="0" />
//                         </linearGradient>
//                       </defs>
//                       <motion.path
//                         d="M0,100 Q75,90 150,80 T300,60 T450,40 T600,20 L600,120 L0,120 Z"
//                         fill="url(#dashGrad)"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ once: true }}
//                       />
//                       <motion.path
//                         d="M0,100 Q75,90 150,80 T300,60 T450,40 T600,20"
//                         fill="none"
//                         stroke="#7A5AF8"
//                         strokeWidth="2.5"
//                         strokeLinecap="round"
//                         initial={{ pathLength: 0 }}
//                         whileInView={{ pathLength: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 2 }}
//                       />
//                     </svg>
//                   </div>

//                   {/* Recent activity */}
//                   <div className="rounded-2xl bg-white/5 p-5">
//                     <span className="text-sm font-semibold text-white/80">Recent Reviews</span>
//                     <div className="mt-3 space-y-2">
//                       {[
//                         { repo: "api-gateway", score: 94, status: "Passed" },
//                         { repo: "auth-service", score: 78, status: "Warning" },
//                         { repo: "payment-core", score: 62, status: "Critical" },
//                       ].map((r, i) => (
//                         <motion.div
//                           key={r.repo}
//                           initial={{ opacity: 0, x: -10 }}
//                           whileInView={{ opacity: 1, x: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: i * 0.1 }}
//                           className="flex items-center justify-between rounded-xl bg-white/3 px-4 py-3"
//                         >
//                           <div className="flex items-center gap-3">
//                             <Github className="h-4 w-4 text-white/30" />
//                             <span className="text-sm text-white/70">{r.repo}</span>
//                           </div>
//                           <div className="flex items-center gap-3">
//                             <span className="text-sm font-bold text-white/80">{r.score}</span>
//                             <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${r.status === "Passed" ? "bg-emerald-500/20 text-emerald-400" : r.status === "Warning" ? "bg-amber-500/20 text-amber-400" : "bg-red-500/20 text-red-400"}`}>
//                               {r.status}
//                             </span>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════════════════
//    SECTION 7 — CODE REVIEW DEMO
//    ═══════════════════════════════════════════════════════════════════════════ */

// function CodeReviewDemoSection() {
//   const [step, setStep] = useState(0);

//   const demoSteps = [
//     {
//       title: "Issue Detected",
//       description: "AI identifies a critical SQL injection vulnerability in the authentication handler.",
//       highlight: { line: 3, type: "error" as const },
//     },
//     {
//       title: "AI Suggestion",
//       description: "CodeSentry suggests using parameterized queries to prevent injection attacks.",
//       highlight: { line: 7, type: "warning" as const },
//     },
//     {
//       title: "Fixed Code",
//       description: "The fix is applied automatically, replacing the vulnerable query with a safe parameterized version.",
//       highlight: { line: 8, type: "success" as const },
//     },
//     {
//       title: "Performance Gain",
//       description: "Query execution time improved by 42% with proper indexing and prepared statements.",
//       highlight: { line: 11, type: "info" as const },
//     },
//   ];

//   const codeLines = [
//     { num: 1, text: "export async function login(req, res) {", type: "normal" },
//     { num: 2, text: "  const { email, password } = req.body;", type: "normal" },
//     { num: 3, text: "  // ❌ Vulnerable: String concatenation", type: "error" },
//     { num: 4, text: '  const query = `SELECT * FROM users', type: "error" },
//     { num: 5, text: '    WHERE email = "${email}"`;', type: "error" },
//     { num: 6, text: "", type: "normal" },
//     { num: 7, text: "  // 💡 AI Suggestion: Use parameterized query", type: "warning" },
//     { num: 8, text: '  const query = "SELECT * FROM users WHERE email = ?";', type: "success" },
//     { num: 9, text: "  const user = await db.execute(query, [email]);", type: "success" },
//     { num: 10, text: "", type: "normal" },
//     { num: 11, text: "  // ⚡ Performance: +42% faster with index", type: "info" },
//     { num: 12, text: "  return res.json({ user, token });", type: "normal" },
//     { num: 13, text: "}", type: "normal" },
//   ];

//   const typeColors: Record<string, string> = {
//     normal: "text-white/70",
//     error: "text-red-300",
//     warning: "text-amber-300",
//     success: "text-emerald-300",
//     info: "text-blue-300",
//   };

//   const typeBg: Record<string, string> = {
//     error: "bg-red-500/10 border-red-500/20",
//     warning: "bg-amber-500/10 border-amber-500/20",
//     success: "bg-emerald-500/10 border-emerald-500/20",
//     info: "bg-blue-500/10 border-blue-500/20",
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setStep((prev) => (prev + 1) % demoSteps.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative z-10 py-24 lg:py-32">
//       <div className="mx-auto max-w-7xl px-6">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="text-center"
//         >
//           <SectionBadge text="Interactive Demo" />
//           <SectionHeading>See AI code review in action</SectionHeading>
//           <SectionSubheading>
//             Watch how CodeSentry AI detects, explains, and fixes issues in real-time.
//           </SectionSubheading>
//         </motion.div>

//         <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
//           {/* Code Editor */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="relative">
//               <div className="absolute -inset-6 -z-10 rounded-[40px] bg-[#7A5AF8]/10 blur-3xl" />
//               <div className="overflow-hidden rounded-3xl border border-[rgba(122,90,248,0.12)] bg-[#2B2545] shadow-[0_24px_60px_-16px_rgba(122,90,248,0.3)]">
//                 <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3">
//                   <div className="flex gap-1.5">
//                     <div className="h-3 w-3 rounded-full bg-red-400/80" />
//                     <div className="h-3 w-3 rounded-full bg-amber-400/80" />
//                     <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
//                   </div>
//                   <span className="ml-3 text-xs text-white/40 font-mono">auth/login.ts</span>
//                 </div>
//                 <div className="p-5 font-mono text-sm leading-relaxed">
//                   {codeLines.map((line) => (
//                     <motion.div
//                       key={line.num}
//                       className={`flex rounded-lg px-2 py-0.5 -mx-2 transition-colors ${line.num === demoSteps[step].highlight.line ? typeBg[demoSteps[step].highlight.type] : ""}`}
//                       animate={line.num === demoSteps[step].highlight.line ? { backgroundColor: ["rgba(122,90,248,0.05)", "rgba(122,90,248,0.15)", "rgba(122,90,248,0.05)"] } : {}}
//                       transition={{ duration: 2, repeat: Infinity }}
//                     >
//                       <span className="mr-4 w-6 text-right text-white/20 select-none">{line.num}</span>
//                       <span className={typeColors[line.type]}>{line.text}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Step cards */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="space-y-4"
//           >
//             {demoSteps.map((s, i) => (
//               <motion.div
//                 key={s.title}
//                 onClick={() => setStep(i)}
//                 whileHover={{ x: 4 }}
//                 className={`cursor-pointer rounded-2xl border p-5 transition-all ${i === step ? "border-[#7A5AF8]/30 bg-white/80 shadow-[0_8px_32px_rgba(122,90,248,0.15)]" : "border-[rgba(122,90,248,0.08)] bg-white/40 hover:bg-white/60"}`}
//               >
//                 <div className="flex items-center gap-3">
//                   <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${i === step ? "bg-gradient-to-br from-[#7A5AF8] to-[#9C82FF]" : "bg-[#7A5AF8]/10 text-[#7A5AF8]"}`}>
//                     {i === step ? <Check className="h-4 w-4" /> : i + 1}
//                   </div>
//                   <div>
//                     <h4 className={`text-sm font-semibold ${i === step ? "text-[#111827]" : "text-[#5B6172]"}`}>{s.title}</h4>
//                     <p className="mt-1 text-sm text-[#5B6172]">{s.description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}

//             {/* Progress */}
//             <div className="flex gap-2 pt-2">
//               {demoSteps.map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="h-1 flex-1 rounded-full overflow-hidden bg-[rgba(122,90,248,0.1)]"
//                 >
//                   <motion.div
//                     className="h-full rounded-full bg-gradient-to-r from-[#7A5AF8] to-[#9C82FF]"
//                     initial={{ width: "0%" }}
//                     animate={{ width: i === step ? "100%" : i < step ? "100%" : "0%" }}
//                     transition={{ duration: i === step ? 4 : 0.3 }}
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════════════════
//    SECTION 8 — PRICING
//    ═══════════════════════════════════════════════════════════════════════════ */

// function PricingSection() {
//   const plans = [
//     {
//       name: "Starter",
//       price: "$0",
//       period: "/month",
//       description: "Perfect for individual developers and small projects.",
//       features: [
//         "Up to 5 repositories",
//         "100 AI reviews/month",
//         "Basic security scanning",
//         "GitHub integration",
//         "Community support",
//       ],
//       cta: "Get Started",
//       popular: false,
//     },
//     {
//       name: "Pro",
//       price: "$29",
//       period: "/month",
//       description: "For professional developers and growing teams.",
//       features: [
//         "Unlimited repositories",
//         "Unlimited AI reviews",
//         "Advanced security scanning",
//         "GitHub, GitLab, Bitbucket",
//         "Auto-fix suggestions",
//         "Priority support",
//         "Team analytics",
//       ],
//       cta: "Start Free Trial",
//       popular: true,
//     },
//     {
//       name: "Enterprise",
//       price: "Custom",
//       period: "",
//       description: "For organizations with advanced security needs.",
//       features: [
//         "Everything in Pro",
//         "SSO & SAML",
//         "Custom AI models",
//         "Dedicated support",
//         "SLA guarantee",
//         "On-premise option",
//         "Audit logs",
//       ],
//       cta: "Contact Sales",
//       popular: false,
//     },
//   ];

//   return (
//     <section className="relative z-10 py-24 lg:py-32">
//       <div className="mx-auto max-w-7xl px-6">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="text-center"
//         >
//           <SectionBadge text="Pricing" />
//           <SectionHeading>Simple, transparent pricing</SectionHeading>
//           <SectionSubheading>
//             Start free, scale as you grow. No hidden fees, no surprises.
//           </SectionSubheading>
//         </motion.div>

//         <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
//           {plans.map((plan, i) => (
//             <motion.div
//               key={plan.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.12, duration: 0.5 }}
//               className="relative"
//             >
//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//                   <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#7A5AF8] to-[#9C82FF] px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
//                     <Sparkles className="h-3 w-3" />
//                     Most Popular
//                   </span>
//                 </div>
//               )}

//               <GlassCard
//                 className={`h-full p-8 ${plan.popular ? "border-[#7A5AF8]/30 shadow-[0_12px_48px_rgba(122,90,248,0.2)]" : ""}`}
//                 hover={true}
//               >
//                 <h3 className="text-lg font-semibold text-[#111827]">{plan.name}</h3>
//                 <div className="mt-4 flex items-baseline gap-1">
//                   <span className="text-4xl font-bold text-[#111827]">{plan.price}</span>
//                   <span className="text-sm text-[#5B6172]">{plan.period}</span>
//                 </div>
//                 <p className="mt-3 text-sm text-[#5B6172]">{plan.description}</p>

//                 <ul className="mt-6 space-y-3">
//                   {plan.features.map((feature) => (
//                     <li key={feature} className="flex items-start gap-3">
//                       <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7A5AF8]/10">
//                         <Check className="h-3 w-3 text-[#7A5AF8]" stroke={3} />
//                       </div>
//                       <span className="text-sm text-[#5B6172]">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="mt-8">
//                   {plan.popular ? (
//                     <GradientButton className="w-full">
//                       {plan.cta}
//                       <ArrowRight className="h-4 w-4" />
//                     </GradientButton>
//                   ) : (
//                     <SecondaryButton className="w-full">
//                       {plan.cta}
//                     </SecondaryButton>
//                   )}
//                 </div>
//               </GlassCard>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════════════════
//    SECTION 9 — FAQ
//    ═══════════════════════════════════════════════════════════════════════════ */

// function FAQSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   const faqs: FAQItem[] = [
//     {
//       question: "How does CodeSentry AI work?",
//       answer: "CodeSentry AI connects to your repositories and uses advanced machine learning models to analyze your code. It detects security vulnerabilities, code quality issues, and performance bottlenecks — then suggests or applies fixes automatically.",
//     },
//     {
//       question: "Is my code secure?",
//       answer: "Absolutely. We use end-to-end encryption, never store your source code permanently, and are SOC 2 Type II compliant. Your code is analyzed in isolated environments and deleted immediately after processing.",
//     },
//     {
//       question: "Which languages are supported?",
//       answer: "CodeSentry AI supports all major programming languages including TypeScript, JavaScript, Python, Go, Rust, Java, C#, Ruby, PHP, and more. We're constantly adding support for new languages.",
//     },
//     {
//       question: "Can I use it with my existing CI/CD pipeline?",
//       answer: "Yes! CodeSentry AI integrates seamlessly with GitHub Actions, GitLab CI, CircleCI, Jenkins, and any other CI/CD platform. You can add it as a step in your pipeline for automated reviews on every commit.",
//     },
//     {
//       question: "How accurate are the AI suggestions?",
//       answer: "Our AI models are trained on millions of code reviews and achieve 97% accuracy in vulnerability detection. Every suggestion includes an explanation and confidence score so you can make informed decisions.",
//     },
//     {
//       question: "What happens if I exceed my plan limits?",
//       answer: "We'll notify you when you're approaching your limit. You can upgrade at any time, or we'll simply queue your reviews until your next billing cycle. We never block you unexpectedly.",
//     },
//   ];

//   return (
//     <section className="relative z-10 py-24 lg:py-32">
//       <div className="mx-auto max-w-3xl px-6">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="text-center"
//         >
//           <SectionBadge text="FAQ" />
//           <SectionHeading>Frequently asked questions</SectionHeading>
//           <SectionSubheading>
//             Everything you need to know about CodeSentry AI.
//           </SectionSubheading>
//         </motion.div>

//         <div className="mt-16 space-y-4">
//           {faqs.map((faq, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.06 }}
//             >
//               <GlassCard className="overflow-hidden" hover={false}>
//                 <button
//                   onClick={() => setOpenIndex(openIndex === i ? null : i)}
//                   className="flex w-full items-center justify-between p-6 text-left"
//                 >
//                   <span className="text-[15px] font-semibold text-[#111827]">{faq.question}</span>
//                   <motion.div
//                     animate={{ rotate: openIndex === i ? 180 : 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <ChevronDown className="h-5 w-5 text-[#7A5AF8]" />
//                   </motion.div>
//                 </button>
//                 <AnimatePresence>
//                   {openIndex === i && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//                     >
//                       <div className="border-t border-[rgba(122,90,248,0.08)] px-6 pb-6 pt-4">
//                         <p className="text-[15px] leading-relaxed text-[#5B6172]">{faq.answer}</p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </GlassCard>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════════════════
//    SECTION 10 — FINAL CTA
//    ═══════════════════════════════════════════════════════════════════════════ */

// function FinalCTASection() {
//   return (
//     <section className="relative z-10 py-24 lg:py-32">
//       <div className="mx-auto max-w-7xl px-6">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="relative overflow-hidden rounded-[40px] border border-[rgba(122,90,248,0.15)] bg-gradient-to-br from-[#7A5AF8]/10 via-[#9C82FF]/5 to-[#F5F0FF] p-12 text-center shadow-[0_24px_80px_-20px_rgba(122,90,248,0.25)] backdrop-blur-xl lg:p-20"
//         >
//           {/* Background glow */}
//           <div className="pointer-events-none absolute inset-0 overflow-hidden">
//             <motion.div
//               className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-[#7A5AF8]/20 blur-[100px]"
//               animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
//               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//             />
//             <motion.div
//               className="absolute -bottom-20 -right-20 h-[350px] w-[350px] rounded-full bg-[#9C82FF]/20 blur-[90px]"
//               animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
//               transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//             />
//           </div>

//           <div className="relative z-10">
//             <motion.div variants={fadeUp} className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A5AF8] to-[#9C82FF] shadow-[0_12px_40px_rgba(122,90,248,0.4)]">
//               <Sparkles className="h-8 w-8 text-white" />
//             </motion.div>

//             <motion.h2
//               variants={fadeUp}
//               className="text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl lg:text-6xl"
//             >
//               Ready to ship better code?
//             </motion.h2>

//             <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#5B6172]">
//               Join 10,000+ developers using CodeSentry AI to catch bugs, fix vulnerabilities, and ship production-ready code faster.
//             </motion.p>

//             <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
//               <GradientButton href="/dashboard">
//                 Get Started Free
//                 <ArrowRight className="h-4 w-4" />
//               </GradientButton>
//               <SecondaryButton href="/book-demo">
//                 <Play className="h-5 w-5" />
//                 Book a Demo
//               </SecondaryButton>
//             </motion.div>

//             <motion.p variants={fadeUp} className="mt-6 text-sm text-[#5B6172]">
//               No credit card required. 14-day free trial.
//             </motion.p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════════════════
//    MAIN PAGE EXPORT
//    ═══════════════════════════════════════════════════════════════════════════ */

// export default function MarketingPage() {
//   return (
//     <div className="relative min-h-screen bg-[#F5F0FF] font-sans antialiased overflow-x-hidden">
//       <GlobalBackground />
//       <NavBar />
//       <main className="relative z-10">
//         <HeroSection />
//         <CompaniesSection />
//         <FeaturesSection />
//         <WorkflowSection />
//         <WhyDevelopersSection />
//         <DashboardPreviewSection />
//         <CodeReviewDemoSection />
//         <PricingSection />
//         <FAQSection />
//         <FinalCTASection />
//       </main>
//       <Footer />
//     </div>
//   );
// }




"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Shield,
  Zap,
  GitPullRequest,
  Eye,
  Check,
  ChevronDown,
  Star,
  ArrowRight,
  Play,
  Cloud,
  BarChart3,
  TrendingUp,
  Users,
  Scan,
  Wand2,
  CheckCircle2,
  AlertTriangle,
  Bug,
  Timer,
  Server,
  LayoutDashboard,
  LayoutGrid,
  GitBranch,
  Search as SearchIcon,
  CreditCard as CreditCardIcon,
  Triangle,
} from "lucide-react";

import NavBar from "@/components/marketing/NavBar";
import Footer from "@/components/marketing/Footer";

/* ═══════════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

interface FAQItem {
  question: string;
  answer: string;
}

/* ═══════════════════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const floatAnimation = {
  y: [0, -12, 0],
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
};

const glowPulse = {
  scale: [1, 1.05, 1],
  opacity: [0.6, 0.9, 0.6],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

/* ═══════════════════════════════════════════════════════════════════════════
   REUSABLE COMPONENTS
   ═══════════════════════════════════════════════════════════════════════════ */

function GlassCard({ children, className = "", hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, boxShadow: "0 24px 60px rgba(122,90,248,0.18)" } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`rounded-3xl border border-[rgba(122,90,248,0.12)] bg-[rgba(255,255,255,0.65)] backdrop-blur-[40px] shadow-[0_8px_40px_rgba(122,90,248,0.1)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

function GradientButton({ children, href, onClick, className = "" }: { children: React.ReactNode; href?: string; onClick?: () => void; className?: string }) {
  const base = (
    <motion.span
      whileHover={{ y: -2, boxShadow: "0 16px 48px rgba(122,90,248,0.4)" }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7A5AF8] to-[#9C82FF] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_12px_40px_rgba(122,90,248,0.35)] transition-all duration-300 cursor-pointer ${className}`}
    >
      {children}
    </motion.span>
  );
  if (href) return <Link href={href}>{base}</Link>;
  if (onClick) return <button onClick={onClick}>{base}</button>;
  return base;
}

function SecondaryButton({ children, href, onClick, className = "" }: { children: React.ReactNode; href?: string; onClick?: () => void; className?: string }) {
  const base = (
    <motion.span
      whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.9)", boxShadow: "0 12px 32px rgba(122,90,248,0.15)" }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(122,90,248,0.15)] bg-white/60 px-8 py-4 text-[15px] font-semibold text-[#111827] backdrop-blur-sm transition-all duration-300 cursor-pointer ${className}`}
    >
      {children}
    </motion.span>
  );
  if (href) return <Link href={href}>{base}</Link>;
  if (onClick) return <button onClick={onClick}>{base}</button>;
  return base;
}

function SectionBadge({ text }: { text: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(122,90,248,0.15)] bg-white/50 px-4 py-2 text-sm font-medium text-[#7A5AF8] backdrop-blur-sm"
    >
      <Sparkles className="h-4 w-4" />
      {text}
    </motion.div>
  );
}

function SectionHeading({ children, gradient = false }: { children: React.ReactNode; gradient?: boolean }) {
  return (
    <motion.h2
      variants={fadeUp}
      className={`text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.5rem] ${gradient ? "bg-gradient-to-r from-[#7A5AF8] to-[#5B6CFF] bg-clip-text text-transparent" : "text-[#111827]"}`}
    >
      {children}
    </motion.h2>
  );
}

function SectionSubheading({ children }: { children: React.ReactNode }) {
  return (
    <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#5B6172]">
      {children}
    </motion.p>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   BACKGROUND EFFECTS
   ═══════════════════════════════════════════════════════════════════════════ */

function GlobalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(122,90,248,0.18) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 85% 70%, rgba(155,124,255,0.2) 0%, transparent 50%), linear-gradient(165deg, #F5F0FF 0%, #EEE5FF 100%)",
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(122,90,248,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(122,90,248,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-[#7A5AF8]/15 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 bottom-1/4 h-[450px] w-[450px] rounded-full bg-[#9C82FF]/18 blur-[110px]"
        animate={{ x: [0, -35, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/3 top-0 h-[350px] w-[350px] rounded-full bg-[#B59DFF]/12 blur-[90px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 h-[300px] w-[300px] rounded-full bg-[#7A5AF8]/10 blur-[80px]"
        animate={{ scale: [1, 1.2, 1], x: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 1 — HERO
   ═══════════════════════════════════════════════════════════════════════════ */

function HeroSection() {
  const codeLines = [
    { line: 1, text: 'export async function login(req) {', type: 'normal' },
    { line: 2, text: '  const { email, password } = req.body;', type: 'normal' },
    { line: 3, text: '  // ⚠️ Critical — SQL Injection', type: 'warning' },
    { line: 4, text: '  const user = await db.query(`SELECT * FROM users', type: 'error' },
    { line: 5, text: '    WHERE email = "${email}"`);', type: 'error' },
    { line: 6, text: '  ', type: 'normal' },
    { line: 7, text: '  // ✅ Fix applied automatically', type: 'success' },
    { line: 8, text: '  const user = await db.query(', type: 'success' },
    { line: 9, text: '    "SELECT * FROM users WHERE email = ?",', type: 'success' },
    { line: 10, text: '    [email]', type: 'success' },
    { line: 11, text: '  );', type: 'success' },
    { line: 12, text: '}', type: 'normal' },
  ];

  return (
    <section className="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <SectionBadge text="AI-Powered Code Intelligence" />

            <motion.h1
              variants={fadeUp}
              className="text-5xl font-bold leading-[1.1] tracking-tight text-[#111827] sm:text-6xl lg:text-[4.5rem]"
            >
              Code smarter with{" "}
              <span className="bg-gradient-to-r from-[#7A5AF8] to-[#5B6CFF] bg-clip-text text-transparent">
                CodeSentry AI
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-lg text-lg leading-relaxed text-[#5B6172]">
              Connect your GitHub, get AI-generated code reviews, apply automated fixes, and ship production-ready code in minutes.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
              <GradientButton href="/dashboard">
                <Scan className="h-5 w-5" />
                Scan a Repo
                <ArrowRight className="h-4 w-4" />
              </GradientButton>
              <SecondaryButton href="/how-it-works">
                <Play className="h-5 w-5" />
                See how it works
              </SecondaryButton>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#7A5AF8] to-[#9C82FF] text-xs font-bold text-white shadow-sm"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-1 text-sm text-[#5B6172]">
                  <span className="font-semibold text-[#111827]">10K+</span> developers trust us
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow behind */}
            <div className="absolute -inset-8 -z-10 rounded-[40px] bg-[#7A5AF8]/10 blur-3xl" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-3xl border border-[rgba(122,90,248,0.12)] bg-[#2B2545] shadow-[0_32px_80px_-20px_rgba(122,90,248,0.35)]"
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="ml-3 text-xs text-white/40 font-mono">auth-service/login.ts</span>
              </div>

              {/* Code content */}
              <div className="p-5 font-mono text-sm leading-relaxed">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className={`flex ${line.type === 'warning' ? 'rounded-lg bg-amber-500/10 px-2 py-1 -mx-2 my-0.5 border border-amber-500/20' : line.type === 'error' ? 'rounded-lg bg-red-500/10 px-2 py-0.5 -mx-2 border border-red-500/20' : line.type === 'success' ? 'rounded-lg bg-emerald-500/10 px-2 py-0.5 -mx-2 border border-emerald-500/20' : ''}`}
                  >
                    <span className="mr-4 w-6 text-right text-white/20 select-none">{line.line}</span>
                    <span className={
                      line.type === 'warning' ? 'text-amber-300' :
                      line.type === 'error' ? 'text-red-300' :
                      line.type === 'success' ? 'text-emerald-300' :
                      'text-white/80'
                    }>
                      {line.type === 'warning' && <AlertTriangle className="mr-2 inline h-4 w-4 text-amber-400" />}
                      {line.type === 'success' && <CheckCircle2 className="mr-2 inline h-4 w-4 text-emerald-400" />}
                      {line.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-4 -top-4 rounded-2xl border border-[rgba(122,90,248,0.15)] bg-white/90 px-4 py-3 shadow-[0_12px_40px_rgba(122,90,248,0.2)] backdrop-blur-xl"
              >
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#7A5AF8]" />
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-[#5B6172]">Security Score</p>
                    <p className="text-xl font-bold text-[#111827]">94/100</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 rounded-2xl border border-[rgba(122,90,248,0.15)] bg-white/90 px-4 py-3 shadow-[0_12px_40px_rgba(122,90,248,0.2)] backdrop-blur-xl"
              >
                <div className="flex items-center gap-2">
                  <GitPullRequest className="h-5 w-5 text-[#7A5AF8]" />
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-[#5B6172]">Pull Request</p>
                    <p className="text-sm font-bold text-[#111827]">Auto-opened</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 2 — COMPANIES MARQUEE
   ═══════════════════════════════════════════════════════════════════════════ */

function CompaniesSection() {
  const companies = [
    { name: "GitHub", icon: Github },
    { name: "Microsoft", icon: LayoutGrid },
    { name: "Google", icon: SearchIcon },
    { name: "Vercel", icon: Triangle },
    { name: "Cloudflare", icon: Cloud },
    { name: "Stripe", icon: CreditCardIcon },
    { name: "AWS", icon: Server },
    { name: "OpenAI", icon: Sparkles },
  ];

  return (
    <section id="integrations" className="relative z-10 scroll-mt-28 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-sm font-medium uppercase tracking-[0.2em] text-[#5B6172]"
        >
          Trusted by engineering teams at
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#F5F0FF] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#F5F0FF] to-transparent" />

          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-16"
          >
            {[...companies, ...companies, ...companies].map((company, i) => (
              <div key={i} className="flex shrink-0 items-center gap-3 text-[#5B6172]/40 transition-colors hover:text-[#7A5AF8]">
                <company.icon className="h-7 w-7" stroke={1.5} />
                <span className="text-lg font-semibold whitespace-nowrap">{company.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 3 — FEATURES
   ═══════════════════════════════════════════════════════════════════════════ */

function FeaturesSection() {
  const features = [
    {
      icon: Eye,
      title: "AI Code Reviews",
      description: "Get smart, context-aware code review suggestions that understand your codebase architecture and patterns.",
      color: "#7A5AF8",
    },
    {
      icon: Wand2,
      title: "Auto Fixes",
      description: "Apply AI-suggested fixes with one click. From security patches to performance optimizations.",
      color: "#9C82FF",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Detect vulnerabilities before they go live. OWASP, CVE, and custom rule scanning.",
      color: "#5B6CFF",
    },
    {
      icon: GitBranch,
      title: "Seamless Integration",
      description: "Works with GitHub, GitLab, and Bitbucket. Zero-config setup for your existing workflow.",
      color: "#7A5AF8",
    },
    {
      icon: BarChart3,
      title: "Team Insights",
      description: "Track code health and improve together. Velocity, quality trends, and team performance.",
      color: "#9C82FF",
    },
    {
      icon: Zap,
      title: "Real-time Analysis",
      description: "Instant feedback as you write. Catch issues before they become PR comments.",
      color: "#5B6CFF",
    },
  ];

  return (
    <section id="features" className="relative z-10 scroll-mt-28 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <SectionBadge text="Features" />
          <SectionHeading>Everything you need to ship better code</SectionHeading>
          <SectionSubheading>
            From automated reviews to security scanning — CodeSentry AI handles the heavy lifting so you can focus on building.
          </SectionSubheading>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard className="group h-full p-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon className="h-7 w-7" style={{ color: feature.color }} stroke={1.8} />
                </motion.div>
                <h3 className="text-xl font-bold text-[#111827]">{feature.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5B6172]">{feature.description}</p>

                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `linear-gradient(135deg, ${feature.color}20, transparent 50%)`, pointerEvents: "none" }} />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 4 — INTERACTIVE AI WORKFLOW
   ═══════════════════════════════════════════════════════════════════════════ */

function WorkflowSection() {
  const steps = [
    { icon: Upload, title: "Upload Repository", desc: "Connect GitHub, GitLab, or Bitbucket in seconds", color: "#7A5AF8" },
    { icon: Scan, title: "AI Scan", desc: "Deep analysis of your entire codebase", color: "#9C82FF" },
    { icon: Shield, title: "Security Analysis", desc: "Detect vulnerabilities and security risks", color: "#5B6CFF" },
    { icon: Eye, title: "Code Review", desc: "AI-generated review with context", color: "#7A5AF8" },
    { icon: Wand2, title: "Fix Suggestions", desc: "One-click automated fixes", color: "#9C82FF" },
    { icon: GitPullRequest, title: "Pull Request", desc: "Auto-generated PR with fixes", color: "#5B6CFF" },
  ];

  return (
    <section id="how-it-works" className="relative z-10 scroll-mt-28 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <SectionBadge text="How It Works" />
          <SectionHeading>From repository to production in minutes</SectionHeading>
          <SectionSubheading>
            Our AI pipeline analyzes, reviews, and fixes your code automatically — no manual intervention required.
          </SectionSubheading>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative"
              >
                <GlassCard className="h-full p-8">
                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#7A5AF8] to-[#9C82FF] text-xs font-bold text-white shadow-lg">
                    {i + 1}
                  </div>

                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <step.icon className="h-7 w-7" style={{ color: step.color }} stroke={1.8} />
                  </div>

                  <h3 className="text-xl font-bold text-[#111827]">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#5B6172]">{step.desc}</p>
                </GlassCard>

                {/* Connector arrow (not on last item of row) */}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.3 }}
                    className="absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:block"
                  >
                    <ArrowRight className="h-5 w-5 text-[#7A5AF8]/30" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Upload(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 5 — WHY DEVELOPERS LOVE CODESENTRY
   ═══════════════════════════════════════════════════════════════════════════ */

function WhyDevelopersSection() {
  const stats = [
    { value: "94%", label: "Fewer Bugs in Production", icon: Bug },
    { value: "3.2x", label: "Faster Code Reviews", icon: Timer },
    { value: "87%", label: "Security Issues Caught", icon: Shield },
    { value: "12K+", label: "Developers Using It", icon: Users },
  ];

  const testimonials = [
    {
      quote: "CodeSentry AI caught a critical SQL injection that our team missed for weeks. It paid for itself in the first day.",
      author: "Sarah Chen",
      role: "Lead Engineer at Stripe",
      avatar: "SC",
    },
    {
      quote: "Our review time dropped from 4 hours to 45 minutes. The AI suggestions are surprisingly accurate.",
      author: "Marcus Johnson",
      role: "CTO at Vercel",
      avatar: "MJ",
    },
    {
      quote: "Finally, a code review tool that actually understands context. Not just linting — real intelligence.",
      author: "Aisha Patel",
      role: "Principal Engineer at OpenAI",
      avatar: "AP",
    },
  ];

  return (
    <section className="relative z-10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <SectionBadge text="Results" />
          <SectionHeading>Why developers love CodeSentry</SectionHeading>
          <SectionSubheading>
            Join thousands of teams shipping better code, faster.
          </SectionSubheading>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7A5AF8]/10">
                  <stat.icon className="h-6 w-6 text-[#7A5AF8]" stroke={1.8} />
                </div>
                <p className="text-3xl font-bold text-[#111827]">{stat.value}</p>
                <p className="mt-1 text-sm text-[#5B6172]">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <GlassCard className="h-full p-8">
                <Quote className="h-8 w-8 text-[#7A5AF8]/20" />
                <p className="mt-4 text-[15px] leading-relaxed text-[#5B6172]">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7A5AF8] to-[#9C82FF] text-xs font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">{t.author}</p>
                    <p className="text-xs text-[#5B6172]">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Mini chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <GlassCard className="p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#111827]">Review Velocity</h3>
                <p className="text-sm text-[#5B6172]">Average time to merge (hours)</p>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600">
                <TrendingUp className="h-3 w-3" />
                -68% faster
              </div>
            </div>
            <svg viewBox="0 0 800 200" className="w-full h-40 overflow-visible">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7A5AF8" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#7A5AF8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,180 Q100,160 200,140 T400,100 T600,60 T800,30 L800,200 L0,200 Z"
                fill="url(#chartGrad)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              />
              <motion.path
                d="M0,180 Q100,160 200,140 T400,100 T600,60 T800,30"
                fill="none"
                stroke="#7A5AF8"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              {[[0, 180], [200, 140], [400, 100], [600, 60], [800, 30]].map(([x, y], i) => (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="5"
                  fill="#7A5AF8"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.2 }}
                />
              ))}
            </svg>
            <div className="mt-4 flex justify-between text-xs text-[#5B6172]">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
              <span>Week 5</span>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}


function Github(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function Quote(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.825-.55-.13-1.07-.14-1.54-.03-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368h.006z" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 6 — LIVE DASHBOARD PREVIEW
   ═══════════════════════════════════════════════════════════════════════════ */

function DashboardPreviewSection() {
  return (
    <section className="relative z-10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <SectionBadge text="Dashboard" />
          <SectionHeading>Your command center for code quality</SectionHeading>
          <SectionSubheading>
            Real-time insights into your codebase health, security posture, and team productivity.
          </SectionSubheading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-8 -z-10 rounded-[48px] bg-[#7A5AF8]/10 blur-3xl" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="overflow-hidden rounded-3xl border border-[rgba(122,90,248,0.12)] bg-[#2B2545] shadow-[0_32px_80px_-20px_rgba(122,90,248,0.35)]"
            >
              {/* Dashboard chrome */}
              <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="ml-4 flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-xs text-white/40">
                  <SearchIcon className="h-3 w-3" />
                  Search repositories...
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 p-5 lg:grid-cols-4">
                {/* Sidebar */}
                <div className="hidden rounded-2xl bg-white/5 p-4 lg:block">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white/80">
                    <LayoutDashboard className="h-4 w-4 text-[#7A5AF8]" />
                    Dashboard
                  </div>
                  {["Repositories", "Reviews", "Security", "Team", "Settings"].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/40 hover:bg-white/5 hover:text-white/60">
                      <div className="h-2 w-2 rounded-full bg-[#7A5AF8]/40" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="lg:col-span-3 space-y-4">
                  {/* Metrics row */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      { label: "Repositories", value: "24", change: "+12%", icon: GitBranch },
                      { label: "Reviews", value: "1,847", change: "+23%", icon: Eye },
                      { label: "Security Score", value: "94%", change: "+5%", icon: Shield },
                      { label: "Issues Fixed", value: "342", change: "-8%", icon: CheckCircle2 },
                    ].map((m, i) => (
                      <motion.div
                        key={m.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="rounded-2xl bg-white/5 p-4"
                      >
                        <div className="flex items-center gap-2 text-white/40">
                          <m.icon className="h-4 w-4" />
                          <span className="text-xs">{m.label}</span>
                        </div>
                        <p className="mt-2 text-2xl font-bold text-white">{m.value}</p>
                        <span className="text-xs text-emerald-400">{m.change}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="rounded-2xl bg-white/5 p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm font-semibold text-white/80">Security Trend</span>
                      <span className="text-xs text-white/40">Last 30 days</span>
                    </div>
                    <svg viewBox="0 0 600 120" className="w-full h-24 overflow-visible">
                      <defs>
                        <linearGradient id="dashGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#7A5AF8" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#7A5AF8" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <motion.path
                        d="M0,100 Q75,90 150,80 T300,60 T450,40 T600,20 L600,120 L0,120 Z"
                        fill="url(#dashGrad)"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      />
                      <motion.path
                        d="M0,100 Q75,90 150,80 T300,60 T450,40 T600,20"
                        fill="none"
                        stroke="#7A5AF8"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                      />
                    </svg>
                  </div>

                  {/* Recent activity */}
                  <div className="rounded-2xl bg-white/5 p-5">
                    <span className="text-sm font-semibold text-white/80">Recent Reviews</span>
                    <div className="mt-3 space-y-2">
                      {[
                        { repo: "api-gateway", score: 94, status: "Passed" },
                        { repo: "auth-service", score: 78, status: "Warning" },
                        { repo: "payment-core", score: 62, status: "Critical" },
                      ].map((r, i) => (
                        <motion.div
                          key={r.repo}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center justify-between rounded-xl bg-white/3 px-4 py-3"
                        >
                          <div className="flex items-center gap-3">
                            <Github className="h-4 w-4 text-white/30" />
                            <span className="text-sm text-white/70">{r.repo}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-white/80">{r.score}</span>
                            <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${r.status === "Passed" ? "bg-emerald-500/20 text-emerald-400" : r.status === "Warning" ? "bg-amber-500/20 text-amber-400" : "bg-red-500/20 text-red-400"}`}>
                              {r.status}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 7 — CODE REVIEW DEMO
   ═══════════════════════════════════════════════════════════════════════════ */

function CodeReviewDemoSection() {
  const [step, setStep] = useState(0);

  const demoSteps = [
    {
      title: "Issue Detected",
      description: "AI identifies a critical SQL injection vulnerability in the authentication handler.",
      highlight: { line: 3, type: "error" as const },
    },
    {
      title: "AI Suggestion",
      description: "CodeSentry suggests using parameterized queries to prevent injection attacks.",
      highlight: { line: 7, type: "warning" as const },
    },
    {
      title: "Fixed Code",
      description: "The fix is applied automatically, replacing the vulnerable query with a safe parameterized version.",
      highlight: { line: 8, type: "success" as const },
    },
    {
      title: "Performance Gain",
      description: "Query execution time improved by 42% with proper indexing and prepared statements.",
      highlight: { line: 11, type: "info" as const },
    },
  ];

  const codeLines = [
    { num: 1, text: "export async function login(req, res) {", type: "normal" },
    { num: 2, text: "  const { email, password } = req.body;", type: "normal" },
    { num: 3, text: "  // ❌ Vulnerable: String concatenation", type: "error" },
    { num: 4, text: '  const query = `SELECT * FROM users', type: "error" },
    { num: 5, text: '    WHERE email = "${email}"`;', type: "error" },
    { num: 6, text: "", type: "normal" },
    { num: 7, text: "  // 💡 AI Suggestion: Use parameterized query", type: "warning" },
    { num: 8, text: '  const query = "SELECT * FROM users WHERE email = ?";', type: "success" },
    { num: 9, text: "  const user = await db.execute(query, [email]);", type: "success" },
    { num: 10, text: "", type: "normal" },
    { num: 11, text: "  // ⚡ Performance: +42% faster with index", type: "info" },
    { num: 12, text: "  return res.json({ user, token });", type: "normal" },
    { num: 13, text: "}", type: "normal" },
  ];

  const typeColors: Record<string, string> = {
    normal: "text-white/70",
    error: "text-red-300",
    warning: "text-amber-300",
    success: "text-emerald-300",
    info: "text-blue-300",
  };

  const typeBg: Record<string, string> = {
    error: "bg-red-500/10 border-red-500/20",
    warning: "bg-amber-500/10 border-amber-500/20",
    success: "bg-emerald-500/10 border-emerald-500/20",
    info: "bg-blue-500/10 border-blue-500/20",
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % demoSteps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <SectionBadge text="Interactive Demo" />
          <SectionHeading>See AI code review in action</SectionHeading>
          <SectionSubheading>
            Watch how CodeSentry AI detects, explains, and fixes issues in real-time.
          </SectionSubheading>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[40px] bg-[#7A5AF8]/10 blur-3xl" />
              <div className="overflow-hidden rounded-3xl border border-[rgba(122,90,248,0.12)] bg-[#2B2545] shadow-[0_24px_60px_-16px_rgba(122,90,248,0.3)]">
                <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="ml-3 text-xs text-white/40 font-mono">auth/login.ts</span>
                </div>
                <div className="p-5 font-mono text-sm leading-relaxed">
                  {codeLines.map((line) => (
                    <motion.div
                      key={line.num}
                      className={`flex rounded-lg px-2 py-0.5 -mx-2 transition-colors ${line.num === demoSteps[step].highlight.line ? typeBg[demoSteps[step].highlight.type] : ""}`}
                      animate={line.num === demoSteps[step].highlight.line ? { backgroundColor: ["rgba(122,90,248,0.05)", "rgba(122,90,248,0.15)", "rgba(122,90,248,0.05)"] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="mr-4 w-6 text-right text-white/20 select-none">{line.num}</span>
                      <span className={typeColors[line.type]}>{line.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {demoSteps.map((s, i) => (
              <motion.div
                key={s.title}
                onClick={() => setStep(i)}
                whileHover={{ x: 4 }}
                className={`cursor-pointer rounded-2xl border p-5 transition-all ${i === step ? "border-[#7A5AF8]/30 bg-white/80 shadow-[0_8px_32px_rgba(122,90,248,0.15)]" : "border-[rgba(122,90,248,0.08)] bg-white/40 hover:bg-white/60"}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${i === step ? "bg-gradient-to-br from-[#7A5AF8] to-[#9C82FF]" : "bg-[#7A5AF8]/10 text-[#7A5AF8]"}`}>
                    {i === step ? <Check className="h-4 w-4" /> : i + 1}
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold ${i === step ? "text-[#111827]" : "text-[#5B6172]"}`}>{s.title}</h4>
                    <p className="mt-1 text-sm text-[#5B6172]">{s.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Progress */}
            <div className="flex gap-2 pt-2">
              {demoSteps.map((_, i) => (
                <motion.div
                  key={i}
                  className="h-1 flex-1 rounded-full overflow-hidden bg-[rgba(122,90,248,0.1)]"
                >
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#7A5AF8] to-[#9C82FF]"
                    initial={{ width: "0%" }}
                    animate={{ width: i === step ? "100%" : i < step ? "100%" : "0%" }}
                    transition={{ duration: i === step ? 4 : 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 8 — PRICING
   ═══════════════════════════════════════════════════════════════════════════ */

function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/month",
      description: "Perfect for individual developers and small projects.",
      features: [
        "Up to 5 repositories",
        "100 AI reviews/month",
        "Basic security scanning",
        "GitHub integration",
        "Community support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For professional developers and growing teams.",
      features: [
        "Unlimited repositories",
        "Unlimited AI reviews",
        "Advanced security scanning",
        "GitHub, GitLab, Bitbucket",
        "Auto-fix suggestions",
        "Priority support",
        "Team analytics",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For organizations with advanced security needs.",
      features: [
        "Everything in Pro",
        "SSO & SAML",
        "Custom AI models",
        "Dedicated support",
        "SLA guarantee",
        "On-premise option",
        "Audit logs",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="relative z-10 scroll-mt-28 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <SectionBadge text="Pricing" />
          <SectionHeading>Simple, transparent pricing</SectionHeading>
          <SectionSubheading>
            Start free, scale as you grow. No hidden fees, no surprises.
          </SectionSubheading>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#7A5AF8] to-[#9C82FF] px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <GlassCard
                className={`h-full p-8 ${plan.popular ? "border-[#7A5AF8]/30 shadow-[0_12px_48px_rgba(122,90,248,0.2)]" : ""}`}
                hover={true}
              >
                <h3 className="text-lg font-semibold text-[#111827]">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[#111827]">{plan.price}</span>
                  <span className="text-sm text-[#5B6172]">{plan.period}</span>
                </div>
                <p className="mt-3 text-sm text-[#5B6172]">{plan.description}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7A5AF8]/10">
                        <Check className="h-3 w-3 text-[#7A5AF8]" stroke={3} />
                      </div>
                      <span className="text-sm text-[#5B6172]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  {plan.popular ? (
                    <GradientButton className="w-full">
                      {plan.cta}
                      <ArrowRight className="h-4 w-4" />
                    </GradientButton>
                  ) : (
                    <SecondaryButton className="w-full">
                      {plan.cta}
                    </SecondaryButton>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 9 — FAQ
   ═══════════════════════════════════════════════════════════════════════════ */

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How does CodeSentry AI work?",
      answer: "CodeSentry AI connects to your repositories and uses advanced machine learning models to analyze your code. It detects security vulnerabilities, code quality issues, and performance bottlenecks — then suggests or applies fixes automatically.",
    },
    {
      question: "Is my code secure?",
      answer: "Absolutely. We use end-to-end encryption, never store your source code permanently, and are SOC 2 Type II compliant. Your code is analyzed in isolated environments and deleted immediately after processing.",
    },
    {
      question: "Which languages are supported?",
      answer: "CodeSentry AI supports all major programming languages including TypeScript, JavaScript, Python, Go, Rust, Java, C#, Ruby, PHP, and more. We're constantly adding support for new languages.",
    },
    {
      question: "Can I use it with my existing CI/CD pipeline?",
      answer: "Yes! CodeSentry AI integrates seamlessly with GitHub Actions, GitLab CI, CircleCI, Jenkins, and any other CI/CD platform. You can add it as a step in your pipeline for automated reviews on every commit.",
    },
    {
      question: "How accurate are the AI suggestions?",
      answer: "Our AI models are trained on millions of code reviews and achieve 97% accuracy in vulnerability detection. Every suggestion includes an explanation and confidence score so you can make informed decisions.",
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you when you're approaching your limit. You can upgrade at any time, or we'll simply queue your reviews until your next billing cycle. We never block you unexpectedly.",
    },
  ];

  return (
    <section className="relative z-10 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <SectionBadge text="FAQ" />
          <SectionHeading>Frequently asked questions</SectionHeading>
          <SectionSubheading>
            Everything you need to know about CodeSentry AI.
          </SectionSubheading>
        </motion.div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <GlassCard className="overflow-hidden" hover={false}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-[15px] font-semibold text-[#111827]">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-[#7A5AF8]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="border-t border-[rgba(122,90,248,0.08)] px-6 pb-6 pt-4">
                        <p className="text-[15px] leading-relaxed text-[#5B6172]">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION 10 — FINAL CTA
   ═══════════════════════════════════════════════════════════════════════════ */

function FinalCTASection() {
  return (
    <section id="contact" className="relative z-10 scroll-mt-28 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative overflow-hidden rounded-[40px] border border-[rgba(122,90,248,0.15)] bg-gradient-to-br from-[#7A5AF8]/10 via-[#9C82FF]/5 to-[#F5F0FF] p-12 text-center shadow-[0_24px_80px_-20px_rgba(122,90,248,0.25)] backdrop-blur-xl lg:p-20"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-[#7A5AF8]/20 blur-[100px]"
              animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-20 -right-20 h-[350px] w-[350px] rounded-full bg-[#9C82FF]/20 blur-[90px]"
              animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative z-10">
            <motion.div variants={fadeUp} className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A5AF8] to-[#9C82FF] shadow-[0_12px_40px_rgba(122,90,248,0.4)]">
              <Sparkles className="h-8 w-8 text-white" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl lg:text-6xl"
            >
              Ready to ship better code?
            </motion.h2>

            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#5B6172]">
              Join 10,000+ developers using CodeSentry AI to catch bugs, fix vulnerabilities, and ship production-ready code faster.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GradientButton href="/dashboard">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </GradientButton>
              <SecondaryButton href="/book-demo">
                <Play className="h-5 w-5" />
                Book a Demo
              </SecondaryButton>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 text-sm text-[#5B6172]">
              No credit card required. 14-day free trial.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE EXPORT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function MarketingPage() {
  return (
    <div className="relative min-h-screen bg-[#F5F0FF] font-sans antialiased overflow-x-hidden">
      <GlobalBackground />
      <NavBar />
      <main className="relative z-10">
        <HeroSection />
        <CompaniesSection />
        <FeaturesSection />
        <WorkflowSection />
        <WhyDevelopersSection />
        <DashboardPreviewSection />
        <CodeReviewDemoSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
