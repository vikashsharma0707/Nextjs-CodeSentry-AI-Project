

// // // // // "use client";

// // // // // import { useState, type FormEvent } from "react";
// // // // // import Link from "next/link";
// // // // // import Image from "next/image";
// // // // // import { useRouter } from "next/navigation";
// // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // import {
// // // // //   IconBrandGithub,
// // // // //   IconLoader2,
// // // // //   IconMail,
// // // // //   IconLock,
// // // // //   IconShieldCheck,
// // // // //   IconAlertCircle,
// // // // //   IconSparkles,
// // // // //   IconBolt,
// // // // //   IconEye,
// // // // //   IconEyeOff,
// // // // //   IconArrowRight,
// // // // //   IconCode,
// // // // //   IconCheck,
// // // // // } from "@tabler/icons-react";
// // // // // import { useAuth } from "@/context/AuthContext";

// // // // // type Tab = "email" | "github";

// // // // // export default function LoginPage() {
// // // // //   const { signIn, signInWithGithub, setAuthActionLoading } = useAuth();
// // // // //   const router = useRouter();

// // // // //   const [email, setEmail] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState("");
// // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // //   const [remember, setRemember] = useState(true);
// // // // //   const [tab, setTab] = useState<Tab>("email");

// // // // //   async function handleSubmit(e: FormEvent) {
// // // // //     e.preventDefault();
// // // // //     if (!email || !password) {
// // // // //       setError("Please fill in all fields.");
// // // // //       return;
// // // // //     }
// // // // //     setLoading(true);
// // // // //     setAuthActionLoading("Signing in to your account...");
// // // // //     setError("");
// // // // //     try {
// // // // //       await signIn(email, password);
// // // // //       router.replace("/dashboard");
// // // // //     } catch {
// // // // //       setError("Invalid credentials. Try again.");
// // // // //       setAuthActionLoading(null);
// // // // //       setLoading(false);
// // // // //     }
// // // // //   }

// // // // //   function handleGithubLogin() {
// // // // //     setAuthActionLoading("Redirecting to GitHub...");
// // // // //     try {
// // // // //       signInWithGithub();
// // // // //     } catch {
// // // // //       setError("Could not redirect to GitHub. Try again.");
// // // // //       setAuthActionLoading(null);
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <main className="relative flex min-h-screen overflow-hidden bg-[#F7F4FF]">
// // // // //       {/* ═══════════════════════════════════════════════════════════════════
// // // // //           BACKGROUND — Premium Lavender Aurora
// // // // //          ═══════════════════════════════════════════════════════════════════ */}
// // // // //       <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
// // // // //         {/* Base gradient */}
// // // // //         <div
// // // // //           className="absolute inset-0"
// // // // //           style={{
// // // // //             background:
// // // // //               "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(122,90,248,0.18) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 85% 70%, rgba(155,124,255,0.2) 0%, transparent 50%), linear-gradient(165deg, #F8F5FF 0%, #ECE3FF 100%)",
// // // // //           }}
// // // // //         />

// // // // //         {/* Subtle grid texture */}
// // // // //         <div
// // // // //           className="absolute inset-0 opacity-[0.35]"
// // // // //           style={{
// // // // //             backgroundImage:
// // // // //               "linear-gradient(rgba(122,90,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(122,90,248,0.06) 1px, transparent 1px)",
// // // // //             backgroundSize: "48px 48px",
// // // // //             maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
// // // // //           }}
// // // // //         />

// // // // //         {/* Floating blur orbs */}
// // // // //         <motion.div
// // // // //           className="absolute -left-24 top-1/4 h-[420px] w-[420px] rounded-full bg-[#7A5AF8]/20 blur-[100px]"
// // // // //           animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
// // // // //           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
// // // // //         />
// // // // //         <motion.div
// // // // //           className="absolute -right-20 bottom-1/4 h-[380px] w-[380px] rounded-full bg-[#B99EFF]/30 blur-[110px]"
// // // // //           animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
// // // // //           transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
// // // // //         />
// // // // //         <motion.div
// // // // //           className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#9B7CFF]/15 blur-[90px]"
// // // // //           animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
// // // // //           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
// // // // //         />
// // // // //         <motion.div
// // // // //           className="absolute bottom-0 right-1/3 h-[320px] w-[320px] rounded-full bg-[#7A5AF8]/10 blur-[80px]"
// // // // //           animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
// // // // //           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
// // // // //         />
// // // // //       </div>

// // // // //       {/* ═══════════════════════════════════════════════════════════════════
// // // // //           MAIN LAYOUT — Split Screen
// // // // //          ═══════════════════════════════════════════════════════════════════ */}
// // // // //       <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-stretch lg:min-h-screen lg:flex-row">
// // // // //         {/* ─── LEFT PANEL ─── */}
// // // // //         <motion.section
// // // // //           className="relative hidden flex-1 flex-col justify-center px-12 py-16 lg:flex"
// // // // //           initial={{ opacity: 0, x: -40 }}
// // // // //           animate={{ opacity: 1, x: 0 }}
// // // // //           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// // // // //         >
// // // // //           {/* Brand Logo */}
// // // // //           <motion.div
// // // // //             className="mb-10 flex items-center gap-3"
// // // // //             initial={{ opacity: 0, y: -10 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ delay: 0.2, duration: 0.5 }}
// // // // //           >
// // // // //             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A5AF8] to-[#9B7CFF] text-white shadow-[0_8px_28px_-6px_rgba(122,90,248,0.55)]">
// // // // //               <IconCode className="h-5 w-5" stroke={2.2} />
// // // // //             </div>
// // // // //             <span className="text-[17px] font-bold tracking-tight text-[#18181B]">
// // // // //               CodeSentry <span className="text-[#7A5AF8]">AI</span>
// // // // //             </span>
// // // // //           </motion.div>

// // // // //           {/* Hero Heading */}
// // // // //           <motion.h1
// // // // //             className="max-w-md text-[2.6rem] font-bold leading-[1.12] tracking-tight text-[#18181B]"
// // // // //             initial={{ opacity: 0, y: 20 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ delay: 0.3, duration: 0.6 }}
// // // // //           >
// // // // //             AI-Powered Code Reviews that build{" "}
// // // // //             <span className="bg-gradient-to-r from-[#7A5AF8] to-[#9B7CFF] bg-clip-text text-transparent">
// // // // //               better products
// // // // //             </span>
// // // // //           </motion.h1>

// // // // //           {/* Supporting paragraph */}
// // // // //           <motion.p
// // // // //             className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#5B6172]"
// // // // //             initial={{ opacity: 0, y: 15 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ delay: 0.4, duration: 0.5 }}
// // // // //           >
// // // // //             Automated code reviews, security scanning, and intelligent insights — all in one place.
// // // // //           </motion.p>

// // // // //           {/* Feature Cards */}
// // // // //           <motion.ul
// // // // //             className="mt-10 space-y-4"
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             transition={{ delay: 0.5, duration: 0.5 }}
// // // // //           >
// // // // //             {[
// // // // //               {
// // // // //                 icon: IconShieldCheck,
// // // // //                 title: "Smart Security Analysis",
// // // // //                 desc: "Detect vulnerabilities and risky patterns before they reach production.",
// // // // //               },
// // // // //               {
// // // // //                 icon: IconSparkles,
// // // // //                 title: "AI Code Insights",
// // // // //                 desc: "Get intelligent suggestions and explanations to improve code quality.",
// // // // //               },
// // // // //               {
// // // // //                 icon: IconBolt,
// // // // //                 title: "Faster Development",
// // // // //                 desc: "Automate repetitive reviews and ship faster with confidence.",
// // // // //               },
// // // // //             ].map((f, i) => (
// // // // //               <motion.li
// // // // //                 key={f.title}
// // // // //                 className="group flex items-start gap-4"
// // // // //                 initial={{ opacity: 0, x: -20 }}
// // // // //                 animate={{ opacity: 1, x: 0 }}
// // // // //                 transition={{ delay: 0.55 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
// // // // //               >
// // // // //                 <motion.div
// // // // //                   whileHover={{ scale: 1.1, y: -2 }}
// // // // //                   className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[rgba(122,90,248,0.14)] bg-white/70 text-[#7A5AF8] shadow-sm backdrop-blur-md transition-shadow group-hover:shadow-[0_8px_24px_-6px_rgba(122,90,248,0.25)]"
// // // // //                 >
// // // // //                   <f.icon className="h-[18px] w-[18px]" stroke={1.8} />
// // // // //                 </motion.div>
// // // // //                 <div>
// // // // //                   <div className="text-[14px] font-semibold text-[#18181B]">{f.title}</div>
// // // // //                   <div className="mt-0.5 text-[13px] leading-snug text-[#5B6172]">{f.desc}</div>
// // // // //                 </div>
// // // // //               </motion.li>
// // // // //             ))}
// // // // //           </motion.ul>

// // // // //           {/* 3D Illustration — from /public/images/LoginBackgroundImage.png */}
// // // // //           <motion.div
// // // // //             className="relative mt-12 w-full max-w-lg"
// // // // //             initial={{ opacity: 0, y: 30 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// // // // //           >
// // // // //             {/* Glow behind illustration */}
// // // // //             <div
// // // // //               className="absolute -inset-8 -z-10 rounded-[48px] opacity-60 blur-3xl"
// // // // //               style={{
// // // // //                 background: "radial-gradient(circle at 50% 40%, rgba(122,90,248,0.35), transparent 70%)",
// // // // //               }}
// // // // //             />

// // // // //             {/* Floating container */}
// // // // //             <motion.div
// // // // //               animate={{ y: [0, -10, 0] }}
// // // // //               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
// // // // //               className="relative"
// // // // //             >
// // // // //               <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border border-[rgba(122,90,248,0.12)] bg-white/30 shadow-[0_32px_80px_-24px_rgba(122,90,248,0.35)] backdrop-blur-sm">
// // // // //                 <Image
// // // // //                   src="/images/LoginBackgroundImage.png"
// // // // //                   alt="CodeSentry AI — AI-powered code review illustration"
// // // // //                   fill
// // // // //                   priority
// // // // //                   sizes="(max-width: 1024px) 0px, 560px"
// // // // //                   className="object-contain object-center"
// // // // //                 />
// // // // //                 {/* Glass reflection overlay */}
// // // // //                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
// // // // //               </div>

// // // // //               {/* Soft shadow underneath */}
// // // // //               <div
// // // // //                 className="absolute -bottom-4 left-1/2 h-8 w-[80%] -translate-x-1/2 rounded-[50%] opacity-30 blur-xl"
// // // // //                 style={{ background: "radial-gradient(ellipse, rgba(122,90,248,0.4), transparent 70%)" }}
// // // // //               />
// // // // //             </motion.div>
// // // // //           </motion.div>

// // // // //           {/* Trusted Companies */}
// // // // //           <motion.div
// // // // //             className="mt-12"
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             transition={{ delay: 1, duration: 0.5 }}
// // // // //           >
// // // // //             <p className="text-[12px] font-medium text-[#5B6172]">
// // // // //               Trusted by 10,000+ developers and teams worldwide
// // // // //             </p>
// // // // //             <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
// // // // //               {["GitHub", "GitLab", "Bitbucket", "Vercel", "Microsoft"].map((name, i) => (
// // // // //                 <motion.span
// // // // //                   key={name}
// // // // //                   className="text-[13px] font-semibold text-[#5B6172]/50 transition-colors hover:text-[#7A5AF8]"
// // // // //                   initial={{ opacity: 0, y: 10 }}
// // // // //                   animate={{ opacity: 1, y: 0 }}
// // // // //                   transition={{ delay: 1.1 + i * 0.05, duration: 0.4 }}
// // // // //                 >
// // // // //                   {name}
// // // // //                 </motion.span>
// // // // //               ))}
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         </motion.section>

// // // // //         {/* ─── RIGHT PANEL ─── */}
// // // // //         <motion.section
// // // // //           className="flex flex-1 items-center justify-center px-5 py-12 lg:px-12 lg:py-16"
// // // // //           initial={{ opacity: 0, x: 40 }}
// // // // //           animate={{ opacity: 1, x: 0 }}
// // // // //           transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
// // // // //         >
// // // // //           {/* Mobile Logo */}
// // // // //           <motion.div
// // // // //             className="mb-8 flex items-center justify-center gap-2.5 lg:hidden"
// // // // //             initial={{ opacity: 0, y: -10 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ delay: 0.1, duration: 0.4 }}
// // // // //           >
// // // // //             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A5AF8] to-[#9B7CFF] text-white shadow-lg">
// // // // //               <IconCode className="h-5 w-5" stroke={2.2} />
// // // // //             </div>
// // // // //             <span className="text-[17px] font-bold tracking-tight text-[#18181B]">
// // // // //               CodeSentry <span className="text-[#7A5AF8]">AI</span>
// // // // //             </span>
// // // // //           </motion.div>

// // // // //           {/* Floating Auth Card */}
// // // // //           <div className="relative w-full max-w-[440px]">
// // // // //             {/* Card glow */}
// // // // //             <div
// // // // //               className="absolute -inset-5 -z-10 rounded-[44px] opacity-50 blur-2xl"
// // // // //               style={{
// // // // //                 background: "radial-gradient(circle at 50% 30%, rgba(122,90,248,0.25), transparent 70%)",
// // // // //               }}
// // // // //             />

// // // // //             <motion.div
// // // // //               className="relative overflow-hidden rounded-[32px] border border-[rgba(122,90,248,0.12)] p-8 shadow-[0_24px_80px_-24px_rgba(122,90,248,0.35)] sm:p-10"
// // // // //               style={{
// // // // //                 background: "rgba(255,255,255,0.72)",
// // // // //                 backdropFilter: "blur(40px)",
// // // // //                 WebkitBackdropFilter: "blur(40px)",
// // // // //               }}
// // // // //               initial={{ opacity: 0, y: 20, scale: 0.98 }}
// // // // //               animate={{ opacity: 1, y: 0, scale: 1 }}
// // // // //               transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
// // // // //             >
// // // // //               {/* Top Badge — Secure Login */}
// // // // //               <motion.div
// // // // //                 className="mb-6 flex justify-end"
// // // // //                 initial={{ opacity: 0, x: 10 }}
// // // // //                 animate={{ opacity: 1, x: 0 }}
// // // // //                 transition={{ delay: 0.5, duration: 0.4 }}
// // // // //               >
// // // // //                 <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(122,90,248,0.14)] bg-white/60 px-3 py-1.5 text-[11px] font-medium text-[#5B6172] backdrop-blur-sm shadow-sm">
// // // // //                   <IconShieldCheck className="h-3.5 w-3.5 text-[#7A5AF8]" stroke={2} />
// // // // //                   Secure Login
// // // // //                 </span>
// // // // //               </motion.div>

// // // // //               {/* Heading */}
// // // // //               <motion.h2
// // // // //                 className="text-[26px] font-bold tracking-tight text-[#18181B] sm:text-[28px]"
// // // // //                 initial={{ opacity: 0, y: 10 }}
// // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // //                 transition={{ delay: 0.4, duration: 0.5 }}
// // // // //               >
// // // // //                 Welcome back{" "}
// // // // //                 <motion.span
// // // // //                   animate={{ rotate: [0, 14, -8, 14, 0] }}
// // // // //                   transition={{ duration: 1.5, delay: 1.2, repeat: 0 }}
// // // // //                   className="inline-block"
// // // // //                 >
// // // // //                   👋
// // // // //                 </motion.span>
// // // // //               </motion.h2>
// // // // //               <motion.p
// // // // //                 className="mt-1.5 text-[14px] text-[#5B6172]"
// // // // //                 initial={{ opacity: 0 }}
// // // // //                 animate={{ opacity: 1 }}
// // // // //                 transition={{ delay: 0.5, duration: 0.4 }}
// // // // //               >
// // // // //                 Sign in to continue to your account
// // // // //               </motion.p>

// // // // //               {/* Login Tabs */}
// // // // //               <motion.div
// // // // //                 className="mt-7 flex gap-1 rounded-2xl border border-[rgba(122,90,248,0.1)] bg-[#F6F2FF]/80 p-1"
// // // // //                 initial={{ opacity: 0, y: 10 }}
// // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // //                 transition={{ delay: 0.55, duration: 0.4 }}
// // // // //               >
// // // // //                 {(
// // // // //                   [
// // // // //                     { id: "email" as Tab, label: "Email Login", icon: IconMail },
// // // // //                     { id: "github" as Tab, label: "GitHub Login", icon: IconBrandGithub },
// // // // //                   ] as const
// // // // //                 ).map((t) => (
// // // // //                   <button
// // // // //                     key={t.id}
// // // // //                     type="button"
// // // // //                     onClick={() => {
// // // // //                       setTab(t.id);
// // // // //                       setError("");
// // // // //                     }}
// // // // //                     className={`relative flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-[13px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40 ${
// // // // //                       tab === t.id ? "text-[#7A5AF8]" : "text-[#5B6172] hover:text-[#18181B]"
// // // // //                     }`}
// // // // //                   >
// // // // //                     {tab === t.id && (
// // // // //                       <motion.span
// // // // //                         layoutId="login-tab"
// // // // //                         className="absolute inset-0 rounded-xl bg-white shadow-sm"
// // // // //                         transition={{ type: "spring", stiffness: 380, damping: 30 }}
// // // // //                       />
// // // // //                     )}
// // // // //                     <t.icon className="relative z-10 h-4 w-4" stroke={1.8} />
// // // // //                     <span className="relative z-10">{t.label}</span>
// // // // //                   </button>
// // // // //                 ))}
// // // // //               </motion.div>

// // // // //               {/* Error Message */}
// // // // //               <AnimatePresence mode="wait">
// // // // //                 {error && (
// // // // //                   <motion.div
// // // // //                     key={error}
// // // // //                     initial={{ opacity: 0, y: -6, height: 0 }}
// // // // //                     animate={{ opacity: 1, y: 0, height: "auto" }}
// // // // //                     exit={{ opacity: 0, y: -4, height: 0 }}
// // // // //                     className="mt-4 overflow-hidden"
// // // // //                   >
// // // // //                     <div className="flex items-start gap-2.5 rounded-2xl border border-red-200 bg-red-50 px-3.5 py-3">
// // // // //                       <IconAlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
// // // // //                       <p className="text-[13px] text-red-600">{error}</p>
// // // // //                     </div>
// // // // //                   </motion.div>
// // // // //                 )}
// // // // //               </AnimatePresence>

// // // // //               {/* ── Email Login Form ── */}
// // // // //               {tab === "email" && (
// // // // //                 <motion.form
// // // // //                   onSubmit={handleSubmit}
// // // // //                   className="mt-6 space-y-4"
// // // // //                   initial={{ opacity: 0, y: 10 }}
// // // // //                   animate={{ opacity: 1, y: 0 }}
// // // // //                   transition={{ delay: 0.1, duration: 0.3 }}
// // // // //                 >
// // // // //                   {/* Email Input */}
// // // // //                   <motion.div
// // // // //                     initial={{ opacity: 0, y: 10 }}
// // // // //                     animate={{ opacity: 1, y: 0 }}
// // // // //                     transition={{ delay: 0.15 }}
// // // // //                   >
// // // // //                     <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-[#18181B]">
// // // // //                       Email address
// // // // //                     </label>
// // // // //                     <div className="relative group">
// // // // //                       <IconMail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6172]/60 transition-colors group-focus-within:text-[#7A5AF8]" />
// // // // //                       <input
// // // // //                         id="email"
// // // // //                         type="email"
// // // // //                         autoComplete="email"
// // // // //                         placeholder="Enter your email"
// // // // //                         value={email}
// // // // //                         onChange={(e) => setEmail(e.target.value)}
// // // // //                         className="w-full rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/80 py-3 pl-10 pr-4 text-[14px] text-[#18181B] placeholder:text-[#5B6172]/50 outline-none transition-all duration-200 focus:border-[#7A5AF8] focus:ring-4 focus:ring-[#7A5AF8]/12 focus:bg-white"
// // // // //                         autoFocus
// // // // //                       />
// // // // //                     </div>
// // // // //                   </motion.div>

// // // // //                   {/* Password Input */}
// // // // //                   <motion.div
// // // // //                     initial={{ opacity: 0, y: 10 }}
// // // // //                     animate={{ opacity: 1, y: 0 }}
// // // // //                     transition={{ delay: 0.2 }}
// // // // //                   >
// // // // //                     <div className="mb-1.5 flex items-center justify-between">
// // // // //                       <label htmlFor="password" className="text-[13px] font-medium text-[#18181B]">
// // // // //                         Password
// // // // //                       </label>
// // // // //                       <Link
// // // // //                         href="/forgot-password"
// // // // //                         className="text-[12px] font-medium text-[#7A5AF8] transition hover:text-[#9B7CFF] hover:underline underline-offset-2"
// // // // //                       >
// // // // //                         Forgot password?
// // // // //                       </Link>
// // // // //                     </div>
// // // // //                     <div className="relative group">
// // // // //                       <IconLock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6172]/60 transition-colors group-focus-within:text-[#7A5AF8]" />
// // // // //                       <input
// // // // //                         id="password"
// // // // //                         type={showPassword ? "text" : "password"}
// // // // //                         autoComplete="current-password"
// // // // //                         placeholder="Enter your password"
// // // // //                         value={password}
// // // // //                         onChange={(e) => setPassword(e.target.value)}
// // // // //                         className="w-full rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/80 py-3 pl-10 pr-11 text-[14px] text-[#18181B] placeholder:text-[#5B6172]/50 outline-none transition-all duration-200 focus:border-[#7A5AF8] focus:ring-4 focus:ring-[#7A5AF8]/12 focus:bg-white"
// // // // //                       />
// // // // //                       <button
// // // // //                         type="button"
// // // // //                         onClick={() => setShowPassword((v) => !v)}
// // // // //                         className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-[#5B6172] transition hover:text-[#7A5AF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
// // // // //                         aria-label={showPassword ? "Hide password" : "Show password"}
// // // // //                       >
// // // // //                         {showPassword ? (
// // // // //                           <IconEyeOff className="h-4 w-4" stroke={1.8} />
// // // // //                         ) : (
// // // // //                           <IconEye className="h-4 w-4" stroke={1.8} />
// // // // //                         )}
// // // // //                       </button>
// // // // //                     </div>
// // // // //                   </motion.div>

// // // // //                   {/* Remember Me */}
// // // // //                   <motion.label
// // // // //                     className="flex cursor-pointer items-center gap-2.5 select-none"
// // // // //                     initial={{ opacity: 0 }}
// // // // //                     animate={{ opacity: 1 }}
// // // // //                     transition={{ delay: 0.25 }}
// // // // //                   >
// // // // //                     <div className="relative flex items-center">
// // // // //                       <input
// // // // //                         type="checkbox"
// // // // //                         checked={remember}
// // // // //                         onChange={(e) => setRemember(e.target.checked)}
// // // // //                         className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[rgba(122,90,248,0.3)] bg-white/60 transition checked:border-[#7A5AF8] checked:bg-[#7A5AF8]"
// // // // //                       />
// // // // //                       <IconCheck className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition peer-checked:opacity-100" stroke={3} />
// // // // //                     </div>
// // // // //                     <span className="text-[13px] text-[#5B6172]">Remember me</span>
// // // // //                   </motion.label>

// // // // //                   {/* Sign In Button */}
// // // // //                   <motion.button
// // // // //                     type="submit"
// // // // //                     disabled={loading}
// // // // //                     whileHover={{ y: -2, boxShadow: "0 16px 40px -8px rgba(122,90,248,0.55)" }}
// // // // //                     whileTap={{ scale: 0.98 }}
// // // // //                     className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_32px_-8px_rgba(122,90,248,0.5)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/50 focus-visible:ring-offset-2"
// // // // //                     style={{ background: "linear-gradient(135deg, #7A5AF8 0%, #9B7CFF 100%)" }}
// // // // //                     initial={{ opacity: 0, y: 10 }}
// // // // //                     animate={{ opacity: 1, y: 0 }}
// // // // //                     transition={{ delay: 0.3 }}
// // // // //                   >
// // // // //                     {/* Shimmer effect */}
// // // // //                     <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
// // // // //                     {loading ? (
// // // // //                       <>
// // // // //                         <IconLoader2 className="h-4 w-4 animate-spin" />
// // // // //                         Signing in…
// // // // //                       </>
// // // // //                     ) : (
// // // // //                       <>
// // // // //                         Sign In
// // // // //                         <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" stroke={2.2} />
// // // // //                       </>
// // // // //                     )}
// // // // //                   </motion.button>
// // // // //                 </motion.form>
// // // // //               )}

// // // // //               {/* ── GitHub Login Tab ── */}
// // // // //               {tab === "github" && (
// // // // //                 <motion.div
// // // // //                   className="mt-6 space-y-4"
// // // // //                   initial={{ opacity: 0, y: 10 }}
// // // // //                   animate={{ opacity: 1, y: 0 }}
// // // // //                   transition={{ delay: 0.1, duration: 0.3 }}
// // // // //                 >
// // // // //                   <p className="text-center text-[13px] leading-relaxed text-[#5B6172]">
// // // // //                     Connect your GitHub account for one-click sign in and repository access.
// // // // //                   </p>
// // // // //                   <motion.button
// // // // //                     type="button"
// // // // //                     onClick={handleGithubLogin}
// // // // //                     whileHover={{ y: -2, boxShadow: "0 12px 32px -12px rgba(122,90,248,0.3)" }}
// // // // //                     whileTap={{ scale: 0.98 }}
// // // // //                     className="group flex w-full items-center justify-center gap-2.5 rounded-xl border border-[rgba(122,90,248,0.14)] bg-white px-5 py-3.5 text-[15px] font-semibold text-[#18181B] shadow-sm transition-all duration-200 hover:border-[rgba(122,90,248,0.28)] hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
// // // // //                   >
// // // // //                     <IconBrandGithub className="h-5 w-5" stroke={1.8} />
// // // // //                     Continue with GitHub
// // // // //                   </motion.button>
// // // // //                 </motion.div>
// // // // //               )}

// // // // //               {/* Divider + GitHub (Email tab only) */}
// // // // //               {tab === "email" && (
// // // // //                 <motion.div
// // // // //                   initial={{ opacity: 0 }}
// // // // //                   animate={{ opacity: 1 }}
// // // // //                   transition={{ delay: 0.35 }}
// // // // //                 >
// // // // //                   <div className="my-6 flex items-center gap-3">
// // // // //                     <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(122,90,248,0.15)] to-transparent" />
// // // // //                     <span className="text-[11px] font-medium uppercase tracking-wider text-[#5B6172]/60">
// // // // //                       or continue with
// // // // //                     </span>
// // // // //                     <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(122,90,248,0.15)] to-transparent" />
// // // // //                   </div>

// // // // //                   <motion.button
// // // // //                     type="button"
// // // // //                     onClick={handleGithubLogin}
// // // // //                     whileHover={{ y: -2, boxShadow: "0 8px 24px -8px rgba(122,90,248,0.2)" }}
// // // // //                     whileTap={{ scale: 0.98 }}
// // // // //                     className="group flex w-full items-center justify-center gap-2.5 rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/60 px-5 py-3 text-[14px] font-semibold text-[#18181B] backdrop-blur-sm transition-all duration-200 hover:bg-white hover:border-[rgba(122,90,248,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
// // // // //                   >
// // // // //                     <IconBrandGithub className="h-[18px] w-[18px]" stroke={1.8} />
// // // // //                     Continue with GitHub
// // // // //                   </motion.button>
// // // // //                 </motion.div>
// // // // //               )}

// // // // //               {/* Sign Up Link */}
// // // // //               <motion.p
// // // // //                 className="mt-7 text-center text-[13px] text-[#5B6172]"
// // // // //                 initial={{ opacity: 0 }}
// // // // //                 animate={{ opacity: 1 }}
// // // // //                 transition={{ delay: 0.5 }}
// // // // //               >
// // // // //                 Don&apos;t have an account?{" "}
// // // // //                 <Link
// // // // //                   href="/signup"
// // // // //                   className="relative font-semibold text-[#7A5AF8] transition hover:text-[#9B7CFF]"
// // // // //                 >
// // // // //                   Sign up
// // // // //                   <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#7A5AF8] transition-all duration-300 hover:w-full" />
// // // // //                 </Link>
// // // // //               </motion.p>
// // // // //             </motion.div>
// // // // //           </div>

// // // // //           {/* Bottom security text */}
// // // // //           <motion.p
// // // // //             className="mt-6 flex items-center justify-center gap-1.5 text-center text-[12px] text-[#5B6172]/80"
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             transition={{ delay: 0.8 }}
// // // // //           >
// // // // //             <IconShieldCheck className="h-3.5 w-3.5 text-[#7A5AF8]" />
// // // // //             Your data is encrypted and secure
// // // // //           </motion.p>
// // // // //         </motion.section>
// // // // //       </div>
// // // // //     </main>
// // // // //   );
// // // // // }




// // // // "use client";

// // // // import { useState, type FormEvent } from "react";
// // // // import Link from "next/link";
// // // // import Image from "next/image";
// // // // import { useRouter } from "next/navigation";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import {
// // // //   IconLoader2,
// // // //   IconMail,
// // // //   IconLock,
// // // //   IconShieldCheck,
// // // //   IconAlertCircle,
// // // //   IconSparkles,
// // // //   IconBolt,
// // // //   IconEye,
// // // //   IconEyeOff,
// // // //   IconArrowRight,
// // // //   IconCode,
// // // //   IconCheck,
// // // // } from "@tabler/icons-react";
// // // // import { useAuth } from "@/context/AuthContext";

// // // // export default function LoginPage() {
// // // //   const { signIn, setAuthActionLoading } = useAuth();
// // // //   const router = useRouter();

// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState("");
// // // //   const [showPassword, setShowPassword] = useState(false);
// // // //   const [remember, setRemember] = useState(true);

// // // //   async function handleSubmit(e: FormEvent) {
// // // //     e.preventDefault();
// // // //     if (!email || !password) {
// // // //       setError("Please fill in all fields.");
// // // //       return;
// // // //     }
// // // //     setLoading(true);
// // // //     setAuthActionLoading("Signing in to your account...");
// // // //     setError("");
// // // //     try {
// // // //       await signIn(email, password);
// // // //       // Clear loading states on success (same pattern as registration)
// // // //       setAuthActionLoading(null);
// // // //       setLoading(false);
// // // //       router.replace("/dashboard");
// // // //     } catch {
// // // //       setError("Invalid credentials. Try again.");
// // // //       setAuthActionLoading(null);
// // // //       setLoading(false);
// // // //     }
// // // //   }

// // // //   return (
// // // //     <main className="relative flex min-h-screen overflow-hidden bg-[#F7F4FF]">
// // // //       {/* ═══════════════════════════════════════════════════════════════════
// // // //           BACKGROUND — Premium Lavender Aurora
// // // //          ═══════════════════════════════════════════════════════════════════ */}
// // // //       <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
// // // //         {/* Base gradient */}
// // // //         <div
// // // //           className="absolute inset-0"
// // // //           style={{
// // // //             background:
// // // //               "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(122,90,248,0.18) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 85% 70%, rgba(155,124,255,0.2) 0%, transparent 50%), linear-gradient(165deg, #F8F5FF 0%, #ECE3FF 100%)",
// // // //           }}
// // // //         />

// // // //         {/* Subtle grid texture */}
// // // //         <div
// // // //           className="absolute inset-0 opacity-[0.35]"
// // // //           style={{
// // // //             backgroundImage:
// // // //               "linear-gradient(rgba(122,90,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(122,90,248,0.06) 1px, transparent 1px)",
// // // //             backgroundSize: "48px 48px",
// // // //             maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
// // // //           }}
// // // //         />

// // // //         {/* Floating blur orbs */}
// // // //         <motion.div
// // // //           className="absolute -left-24 top-1/4 h-[420px] w-[420px] rounded-full bg-[#7A5AF8]/20 blur-[100px]"
// // // //           animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
// // // //           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //         <motion.div
// // // //           className="absolute -right-20 bottom-1/4 h-[380px] w-[380px] rounded-full bg-[#B99EFF]/30 blur-[110px]"
// // // //           animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
// // // //           transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //         <motion.div
// // // //           className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#9B7CFF]/15 blur-[90px]"
// // // //           animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
// // // //           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //         <motion.div
// // // //           className="absolute bottom-0 right-1/3 h-[320px] w-[320px] rounded-full bg-[#7A5AF8]/10 blur-[80px]"
// // // //           animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
// // // //           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //       </div>

// // // //       {/* ═══════════════════════════════════════════════════════════════════
// // // //           MAIN LAYOUT — Split Screen
// // // //          ═══════════════════════════════════════════════════════════════════ */}
// // // //       <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-stretch lg:min-h-screen lg:flex-row">
// // // //         {/* ─── LEFT PANEL ─── */}
// // // //         <motion.section
// // // //           className="relative hidden flex-1 flex-col justify-center px-12 py-16 lg:flex"
// // // //           initial={{ opacity: 0, x: -40 }}
// // // //           animate={{ opacity: 1, x: 0 }}
// // // //           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// // // //         >
// // // //           {/* Brand Logo */}
// // // //           <motion.div
// // // //             className="mb-10 flex items-center gap-3"
// // // //             initial={{ opacity: 0, y: -10 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ delay: 0.2, duration: 0.5 }}
// // // //           >
// // // //             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A5AF8] to-[#9B7CFF] text-white shadow-[0_8px_28px_-6px_rgba(122,90,248,0.55)]">
// // // //               <IconCode className="h-5 w-5" stroke={2.2} />
// // // //             </div>
// // // //             <span className="text-[17px] font-bold tracking-tight text-[#18181B]">
// // // //               CodeSentry <span className="text-[#7A5AF8]">AI</span>
// // // //             </span>
// // // //           </motion.div>

// // // //           {/* Hero Heading */}
// // // //           <motion.h1
// // // //             className="max-w-md text-[2.6rem] font-bold leading-[1.12] tracking-tight text-[#18181B]"
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ delay: 0.3, duration: 0.6 }}
// // // //           >
// // // //             AI-Powered Code Reviews that build{" "}
// // // //             <span className="bg-gradient-to-r from-[#7A5AF8] to-[#9B7CFF] bg-clip-text text-transparent">
// // // //               better products
// // // //             </span>
// // // //           </motion.h1>

// // // //           {/* Supporting paragraph */}
// // // //           <motion.p
// // // //             className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#5B6172]"
// // // //             initial={{ opacity: 0, y: 15 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ delay: 0.4, duration: 0.5 }}
// // // //           >
// // // //             Automated code reviews, security scanning, and intelligent insights — all in one place.
// // // //           </motion.p>

// // // //           {/* Feature Cards */}
// // // //           <motion.ul
// // // //             className="mt-10 space-y-4"
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             transition={{ delay: 0.5, duration: 0.5 }}
// // // //           >
// // // //             {[
// // // //               {
// // // //                 icon: IconShieldCheck,
// // // //                 title: "Smart Security Analysis",
// // // //                 desc: "Detect vulnerabilities and risky patterns before they reach production.",
// // // //               },
// // // //               {
// // // //                 icon: IconSparkles,
// // // //                 title: "AI Code Insights",
// // // //                 desc: "Get intelligent suggestions and explanations to improve code quality.",
// // // //               },
// // // //               {
// // // //                 icon: IconBolt,
// // // //                 title: "Faster Development",
// // // //                 desc: "Automate repetitive reviews and ship faster with confidence.",
// // // //               },
// // // //             ].map((f, i) => (
// // // //               <motion.li
// // // //                 key={f.title}
// // // //                 className="group flex items-start gap-4"
// // // //                 initial={{ opacity: 0, x: -20 }}
// // // //                 animate={{ opacity: 1, x: 0 }}
// // // //                 transition={{ delay: 0.55 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
// // // //               >
// // // //                 <motion.div
// // // //                   whileHover={{ scale: 1.1, y: -2 }}
// // // //                   className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[rgba(122,90,248,0.14)] bg-white/70 text-[#7A5AF8] shadow-sm backdrop-blur-md transition-shadow group-hover:shadow-[0_8px_24px_-6px_rgba(122,90,248,0.25)]"
// // // //                 >
// // // //                   <f.icon className="h-[18px] w-[18px]" stroke={1.8} />
// // // //                 </motion.div>
// // // //                 <div>
// // // //                   <div className="text-[14px] font-semibold text-[#18181B]">{f.title}</div>
// // // //                   <div className="mt-0.5 text-[13px] leading-snug text-[#5B6172]">{f.desc}</div>
// // // //                 </div>
// // // //               </motion.li>
// // // //             ))}
// // // //           </motion.ul>

// // // //           {/* 3D Illustration */}
// // // //           <motion.div
// // // //             className="relative mt-12 w-full max-w-lg"
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// // // //           >
// // // //             <div
// // // //               className="absolute -inset-8 -z-10 rounded-[48px] opacity-60 blur-3xl"
// // // //               style={{
// // // //                 background: "radial-gradient(circle at 50% 40%, rgba(122,90,248,0.35), transparent 70%)",
// // // //               }}
// // // //             />

// // // //             <motion.div
// // // //               animate={{ y: [0, -10, 0] }}
// // // //               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
// // // //               className="relative"
// // // //             >
// // // //               <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border border-[rgba(122,90,248,0.12)] bg-white/30 shadow-[0_32px_80px_-24px_rgba(122,90,248,0.35)] backdrop-blur-sm">
// // // //                 <Image
// // // //                   src="/images/nextjs.png"
// // // //                   alt="CodeSentry AI — AI-powered code review illustration"
// // // //                   fill
// // // //                   priority
// // // //                   sizes="(max-width: 1024px) 0px, 560px"
// // // //                   className="object-contain object-center"
// // // //                 />
// // // //                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
// // // //               </div>

// // // //               <div
// // // //                 className="absolute -bottom-4 left-1/2 h-8 w-[80%] -translate-x-1/2 rounded-[50%] opacity-30 blur-xl"
// // // //                 style={{ background: "radial-gradient(ellipse, rgba(122,90,248,0.4), transparent 70%)" }}
// // // //               />
// // // //             </motion.div>
// // // //           </motion.div>

// // // //           {/* Trusted Companies */}
// // // //           <motion.div
// // // //             className="mt-12"
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             transition={{ delay: 1, duration: 0.5 }}
// // // //           >
// // // //             <p className="text-[12px] font-medium text-[#5B6172]">
// // // //               Trusted by 10,000+ developers and teams worldwide
// // // //             </p>
// // // //             <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
// // // //               {["GitHub", "GitLab", "Bitbucket", "Vercel", "Microsoft"].map((name, i) => (
// // // //                 <motion.span
// // // //                   key={name}
// // // //                   className="text-[13px] font-semibold text-[#5B6172]/50 transition-colors hover:text-[#7A5AF8]"
// // // //                   initial={{ opacity: 0, y: 10 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ delay: 1.1 + i * 0.05, duration: 0.4 }}
// // // //                 >
// // // //                   {name}
// // // //                 </motion.span>
// // // //               ))}
// // // //             </div>
// // // //           </motion.div>
// // // //         </motion.section>

// // // //         {/* ─── RIGHT PANEL ─── */}
// // // //         <motion.section
// // // //           className="flex flex-1 items-center justify-center px-5 py-12 lg:px-12 lg:py-16"
// // // //           initial={{ opacity: 0, x: 40 }}
// // // //           animate={{ opacity: 1, x: 0 }}
// // // //           transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
// // // //         >
// // // //           {/* Mobile Logo */}
// // // //           <motion.div
// // // //             className="mb-8 flex items-center justify-center gap-2.5 lg:hidden"
// // // //             initial={{ opacity: 0, y: -10 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ delay: 0.1, duration: 0.4 }}
// // // //           >
// // // //             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A5AF8] to-[#9B7CFF] text-white shadow-lg">
// // // //               <IconCode className="h-5 w-5" stroke={2.2} />
// // // //             </div>
// // // //             <span className="text-[17px] font-bold tracking-tight text-[#18181B]">
// // // //               CodeSentry <span className="text-[#7A5AF8]">AI</span>
// // // //             </span>
// // // //           </motion.div>

// // // //           {/* Floating Auth Card */}
// // // //           <div className="relative w-full max-w-[440px]">
// // // //             {/* Card glow */}
// // // //             <div
// // // //               className="absolute -inset-5 -z-10 rounded-[44px] opacity-50 blur-2xl"
// // // //               style={{
// // // //                 background: "radial-gradient(circle at 50% 30%, rgba(122,90,248,0.25), transparent 70%)",
// // // //               }}
// // // //             />

// // // //             <motion.div
// // // //               className="relative overflow-hidden rounded-[32px] border border-[rgba(122,90,248,0.12)] p-8 shadow-[0_24px_80px_-24px_rgba(122,90,248,0.35)] sm:p-10"
// // // //               style={{
// // // //                 background: "rgba(255,255,255,0.72)",
// // // //                 backdropFilter: "blur(40px)",
// // // //                 WebkitBackdropFilter: "blur(40px)",
// // // //               }}
// // // //               initial={{ opacity: 0, y: 20, scale: 0.98 }}
// // // //               animate={{ opacity: 1, y: 0, scale: 1 }}
// // // //               transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
// // // //             >
// // // //               {/* Top Badge — Secure Login */}
// // // //               <motion.div
// // // //                 className="mb-6 flex justify-end"
// // // //                 initial={{ opacity: 0, x: 10 }}
// // // //                 animate={{ opacity: 1, x: 0 }}
// // // //                 transition={{ delay: 0.5, duration: 0.4 }}
// // // //               >
// // // //                 <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(122,90,248,0.14)] bg-white/60 px-3 py-1.5 text-[11px] font-medium text-[#5B6172] backdrop-blur-sm shadow-sm">
// // // //                   <IconShieldCheck className="h-3.5 w-3.5 text-[#7A5AF8]" stroke={2} />
// // // //                   Secure Login
// // // //                 </span>
// // // //               </motion.div>

// // // //               {/* Heading */}
// // // //               <motion.h2
// // // //                 className="text-[26px] font-bold tracking-tight text-[#18181B] sm:text-[28px]"
// // // //                 initial={{ opacity: 0, y: 10 }}
// // // //                 animate={{ opacity: 1, y: 0 }}
// // // //                 transition={{ delay: 0.4, duration: 0.5 }}
// // // //               >
// // // //                 Welcome back{" "}
// // // //                 <motion.span
// // // //                   animate={{ rotate: [0, 14, -8, 14, 0] }}
// // // //                   transition={{ duration: 1.5, delay: 1.2, repeat: 0 }}
// // // //                   className="inline-block"
// // // //                 >
// // // //                   👋
// // // //                 </motion.span>
// // // //               </motion.h2>
// // // //               <motion.p
// // // //                 className="mt-1.5 text-[14px] text-[#5B6172]"
// // // //                 initial={{ opacity: 0 }}
// // // //                 animate={{ opacity: 1 }}
// // // //                 transition={{ delay: 0.5, duration: 0.4 }}
// // // //               >
// // // //                 Sign in to continue to your account
// // // //               </motion.p>

// // // //               {/* Error Message */}
// // // //               <AnimatePresence mode="wait">
// // // //                 {error && (
// // // //                   <motion.div
// // // //                     key={error}
// // // //                     initial={{ opacity: 0, y: -6, height: 0 }}
// // // //                     animate={{ opacity: 1, y: 0, height: "auto" }}
// // // //                     exit={{ opacity: 0, y: -4, height: 0 }}
// // // //                     className="mt-4 overflow-hidden"
// // // //                   >
// // // //                     <div className="flex items-start gap-2.5 rounded-2xl border border-red-200 bg-red-50 px-3.5 py-3">
// // // //                       <IconAlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
// // // //                       <p className="text-[13px] text-red-600">{error}</p>
// // // //                     </div>
// // // //                   </motion.div>
// // // //                 )}
// // // //               </AnimatePresence>

// // // //               {/* ── Email Login Form ── */}
// // // //               <motion.form
// // // //                 onSubmit={handleSubmit}
// // // //                 className="mt-6 space-y-4"
// // // //                 initial={{ opacity: 0, y: 10 }}
// // // //                 animate={{ opacity: 1, y: 0 }}
// // // //                 transition={{ delay: 0.1, duration: 0.3 }}
// // // //               >
// // // //                 {/* Email Input */}
// // // //                 <motion.div
// // // //                   initial={{ opacity: 0, y: 10 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ delay: 0.15 }}
// // // //                 >
// // // //                   <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-[#18181B]">
// // // //                     Email address
// // // //                   </label>
// // // //                   <div className="relative group">
// // // //                     <IconMail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6172]/60 transition-colors group-focus-within:text-[#7A5AF8]" />
// // // //                     <input
// // // //                       id="email"
// // // //                       type="email"
// // // //                       autoComplete="email"
// // // //                       placeholder="Enter your email"
// // // //                       value={email}
// // // //                       onChange={(e) => setEmail(e.target.value)}
// // // //                       className="w-full rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/80 py-3 pl-10 pr-4 text-[14px] text-[#18181B] placeholder:text-[#5B6172]/50 outline-none transition-all duration-200 focus:border-[#7A5AF8] focus:ring-4 focus:ring-[#7A5AF8]/12 focus:bg-white"
// // // //                       autoFocus
// // // //                     />
// // // //                   </div>
// // // //                 </motion.div>

// // // //                 {/* Password Input */}
// // // //                 <motion.div
// // // //                   initial={{ opacity: 0, y: 10 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ delay: 0.2 }}
// // // //                 >
// // // //                   <div className="mb-1.5 flex items-center justify-between">
// // // //                     <label htmlFor="password" className="text-[13px] font-medium text-[#18181B]">
// // // //                       Password
// // // //                     </label>
// // // //                     <Link
// // // //                       href="/forgot-password"
// // // //                       className="text-[12px] font-medium text-[#7A5AF8] transition hover:text-[#9B7CFF] hover:underline underline-offset-2"
// // // //                     >
// // // //                       Forgot password?
// // // //                     </Link>
// // // //                   </div>
// // // //                   <div className="relative group">
// // // //                     <IconLock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6172]/60 transition-colors group-focus-within:text-[#7A5AF8]" />
// // // //                     <input
// // // //                       id="password"
// // // //                       type={showPassword ? "text" : "password"}
// // // //                       autoComplete="current-password"
// // // //                       placeholder="Enter your password"
// // // //                       value={password}
// // // //                       onChange={(e) => setPassword(e.target.value)}
// // // //                       className="w-full rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/80 py-3 pl-10 pr-11 text-[14px] text-[#18181B] placeholder:text-[#5B6172]/50 outline-none transition-all duration-200 focus:border-[#7A5AF8] focus:ring-4 focus:ring-[#7A5AF8]/12 focus:bg-white"
// // // //                     />
// // // //                     <button
// // // //                       type="button"
// // // //                       onClick={() => setShowPassword((v) => !v)}
// // // //                       className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-[#5B6172] transition hover:text-[#7A5AF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
// // // //                       aria-label={showPassword ? "Hide password" : "Show password"}
// // // //                     >
// // // //                       {showPassword ? (
// // // //                         <IconEyeOff className="h-4 w-4" stroke={1.8} />
// // // //                       ) : (
// // // //                         <IconEye className="h-4 w-4" stroke={1.8} />
// // // //                       )}
// // // //                     </button>
// // // //                   </div>
// // // //                 </motion.div>

// // // //                 {/* Remember Me */}
// // // //                 <motion.label
// // // //                   className="flex cursor-pointer items-center gap-2.5 select-none"
// // // //                   initial={{ opacity: 0 }}
// // // //                   animate={{ opacity: 1 }}
// // // //                   transition={{ delay: 0.25 }}
// // // //                 >
// // // //                   <div className="relative flex items-center">
// // // //                     <input
// // // //                       type="checkbox"
// // // //                       checked={remember}
// // // //                       onChange={(e) => setRemember(e.target.checked)}
// // // //                       className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[rgba(122,90,248,0.3)] bg-white/60 transition checked:border-[#7A5AF8] checked:bg-[#7A5AF8]"
// // // //                     />
// // // //                     <IconCheck className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition peer-checked:opacity-100" stroke={3} />
// // // //                   </div>
// // // //                   <span className="text-[13px] text-[#5B6172]">Remember me</span>
// // // //                 </motion.label>

// // // //                 {/* Sign In Button */}
// // // //                 <motion.button
// // // //                   type="submit"
// // // //                   disabled={loading}
// // // //                   whileHover={{ y: -2, boxShadow: "0 16px 40px -8px rgba(122,90,248,0.55)" }}
// // // //                   whileTap={{ scale: 0.98 }}
// // // //                   className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_32px_-8px_rgba(122,90,248,0.5)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/50 focus-visible:ring-offset-2"
// // // //                   style={{ background: "linear-gradient(135deg, #7A5AF8 0%, #9B7CFF 100%)" }}
// // // //                   initial={{ opacity: 0, y: 10 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ delay: 0.3 }}
// // // //                 >
// // // //                   {/* Shimmer effect */}
// // // //                   <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
// // // //                   {loading ? (
// // // //                     <>
// // // //                       <IconLoader2 className="h-4 w-4 animate-spin" />
// // // //                       Signing in…
// // // //                     </>
// // // //                   ) : (
// // // //                     <>
// // // //                       Sign In
// // // //                       <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" stroke={2.2} />
// // // //                     </>
// // // //                   )}
// // // //                 </motion.button>
// // // //               </motion.form>

// // // //               {/* Sign Up Link */}
// // // //               <motion.p
// // // //                 className="mt-7 text-center text-[13px] text-[#5B6172]"
// // // //                 initial={{ opacity: 0 }}
// // // //                 animate={{ opacity: 1 }}
// // // //                 transition={{ delay: 0.5 }}
// // // //               >
// // // //                 Don&apos;t have an account?{" "}
// // // //                 <Link
// // // //                   href="/signup"
// // // //                   className="relative font-semibold text-[#7A5AF8] transition hover:text-[#9B7CFF]"
// // // //                 >
// // // //                   Sign up
// // // //                   <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#7A5AF8] transition-all duration-300 hover:w-full" />
// // // //                 </Link>
// // // //               </motion.p>
// // // //             </motion.div>
// // // //           </div>

// // // //           {/* Bottom security text */}
// // // //           <motion.p
// // // //             className="mt-6 flex items-center justify-center gap-1.5 text-center text-[12px] text-[#5B6172]/80"
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             transition={{ delay: 0.8 }}
// // // //           >
// // // //             <IconShieldCheck className="h-3.5 w-3.5 text-[#7A5AF8]" />
// // // //             Your data is encrypted and secure
// // // //           </motion.p>
// // // //         </motion.section>
// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }

// // // "use client";

// // // import { useState, type FormEvent } from "react";
// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import { useRouter } from "next/navigation";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import {
// // //   IconLoader2,
// // //   IconMail,
// // //   IconLock,
// // //   IconShieldCheck,
// // //   IconAlertCircle,
// // //   IconSparkles,
// // //   IconBolt,
// // //   IconEye,
// // //   IconEyeOff,
// // //   IconArrowRight,
// // //   IconCode,
// // //   IconCheck,
// // // } from "@tabler/icons-react";
// // // import { useAuth } from "@/context/AuthContext";

// // // export default function LoginPage() {
// // //   const { signIn, setAuthActionLoading } = useAuth();
// // //   const router = useRouter();

// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState("");
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [remember, setRemember] = useState(true);

// // //   async function handleSubmit(e: FormEvent) {
// // //     e.preventDefault();
// // //     if (!email || !password) {
// // //       setError("Please fill in all fields.");
// // //       return;
// // //     }
// // //     setLoading(true);
// // //     setAuthActionLoading("Signing in to your account...");
// // //     setError("");
// // //     try {
// // //       await signIn(email, password, remember);
// // //       // Clear loading states on success (same pattern as registration)
// // //       setAuthActionLoading(null);
// // //       setLoading(false);
// // //       router.replace("/dashboard");
// // //     } catch {
// // //       setError("Invalid credentials. Try again.");
// // //       setAuthActionLoading(null);
// // //       setLoading(false);
// // //     }
// // //   }

// // //   return (
// // //     <main className="relative flex min-h-screen overflow-hidden bg-[#F7F4FF]">
// // //       {/* ═══════════════════════════════════════════════════════════════════
// // //           BACKGROUND — Premium Lavender Aurora
// // //          ═══════════════════════════════════════════════════════════════════ */}
// // //       <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
// // //         {/* Base gradient */}
// // //         <div
// // //           className="absolute inset-0"
// // //           style={{
// // //             background:
// // //               "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(122,90,248,0.18) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 85% 70%, rgba(155,124,255,0.2) 0%, transparent 50%), linear-gradient(165deg, #F8F5FF 0%, #ECE3FF 100%)",
// // //           }}
// // //         />

// // //         {/* Subtle grid texture */}
// // //         <div
// // //           className="absolute inset-0 opacity-[0.35]"
// // //           style={{
// // //             backgroundImage:
// // //               "linear-gradient(rgba(122,90,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(122,90,248,0.06) 1px, transparent 1px)",
// // //             backgroundSize: "48px 48px",
// // //             maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
// // //           }}
// // //         />

// // //         {/* Floating blur orbs */}
// // //         <motion.div
// // //           className="absolute -left-24 top-1/4 h-[420px] w-[420px] rounded-full bg-[#7A5AF8]/20 blur-[100px]"
// // //           animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
// // //           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //         <motion.div
// // //           className="absolute -right-20 bottom-1/4 h-[380px] w-[380px] rounded-full bg-[#B99EFF]/30 blur-[110px]"
// // //           animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
// // //           transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //         <motion.div
// // //           className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#9B7CFF]/15 blur-[90px]"
// // //           animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
// // //           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //         <motion.div
// // //           className="absolute bottom-0 right-1/3 h-[320px] w-[320px] rounded-full bg-[#7A5AF8]/10 blur-[80px]"
// // //           animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
// // //           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //       </div>

// // //       {/* ═══════════════════════════════════════════════════════════════════
// // //           MAIN LAYOUT — Split Screen
// // //          ═══════════════════════════════════════════════════════════════════ */}
// // //       <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-stretch lg:min-h-screen lg:flex-row">
// // //         {/* ─── LEFT PANEL ─── */}
// // //         <motion.section
// // //           className="relative hidden flex-1 flex-col justify-center px-12 py-16 lg:flex"
// // //           initial={{ opacity: 0, x: -40 }}
// // //           animate={{ opacity: 1, x: 0 }}
// // //           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// // //         >
// // //           {/* Brand Logo */}
// // //           <motion.div
// // //             className="mb-10 flex items-center gap-3"
// // //             initial={{ opacity: 0, y: -10 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ delay: 0.2, duration: 0.5 }}
// // //           >
// // //             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A5AF8] to-[#9B7CFF] text-white shadow-[0_8px_28px_-6px_rgba(122,90,248,0.55)]">
// // //               <IconCode className="h-5 w-5" stroke={2.2} />
// // //             </div>
// // //             <span className="text-[17px] font-bold tracking-tight text-[#18181B]">
// // //               CodeSentry <span className="text-[#7A5AF8]">AI</span>
// // //             </span>
// // //           </motion.div>

// // //           {/* Hero Heading */}
// // //           <motion.h1
// // //             className="max-w-md text-[2.6rem] font-bold leading-[1.12] tracking-tight text-[#18181B]"
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ delay: 0.3, duration: 0.6 }}
// // //           >
// // //             AI-Powered Code Reviews that build{" "}
// // //             <span className="bg-gradient-to-r from-[#7A5AF8] to-[#9B7CFF] bg-clip-text text-transparent">
// // //               better products
// // //             </span>
// // //           </motion.h1>

// // //           {/* Supporting paragraph */}
// // //           <motion.p
// // //             className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#5B6172]"
// // //             initial={{ opacity: 0, y: 15 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ delay: 0.4, duration: 0.5 }}
// // //           >
// // //             Automated code reviews, security scanning, and intelligent insights — all in one place.
// // //           </motion.p>

// // //           {/* Feature Cards */}
// // //           <motion.ul
// // //             className="mt-10 space-y-4"
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             transition={{ delay: 0.5, duration: 0.5 }}
// // //           >
// // //             {[
// // //               {
// // //                 icon: IconShieldCheck,
// // //                 title: "Smart Security Analysis",
// // //                 desc: "Detect vulnerabilities and risky patterns before they reach production.",
// // //               },
// // //               {
// // //                 icon: IconSparkles,
// // //                 title: "AI Code Insights",
// // //                 desc: "Get intelligent suggestions and explanations to improve code quality.",
// // //               },
// // //               {
// // //                 icon: IconBolt,
// // //                 title: "Faster Development",
// // //                 desc: "Automate repetitive reviews and ship faster with confidence.",
// // //               },
// // //             ].map((f, i) => (
// // //               <motion.li
// // //                 key={f.title}
// // //                 className="group flex items-start gap-4"
// // //                 initial={{ opacity: 0, x: -20 }}
// // //                 animate={{ opacity: 1, x: 0 }}
// // //                 transition={{ delay: 0.55 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
// // //               >
// // //                 <motion.div
// // //                   whileHover={{ scale: 1.1, y: -2 }}
// // //                   className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[rgba(122,90,248,0.14)] bg-white/70 text-[#7A5AF8] shadow-sm backdrop-blur-md transition-shadow group-hover:shadow-[0_8px_24px_-6px_rgba(122,90,248,0.25)]"
// // //                 >
// // //                   <f.icon className="h-[18px] w-[18px]" stroke={1.8} />
// // //                 </motion.div>
// // //                 <div>
// // //                   <div className="text-[14px] font-semibold text-[#18181B]">{f.title}</div>
// // //                   <div className="mt-0.5 text-[13px] leading-snug text-[#5B6172]">{f.desc}</div>
// // //                 </div>
// // //               </motion.li>
// // //             ))}
// // //           </motion.ul>

// // //           {/* 3D Illustration */}
// // //           <motion.div
// // //             className="relative mt-12 w-full max-w-lg"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// // //           >
// // //             <div
// // //               className="absolute -inset-8 -z-10 rounded-[48px] opacity-60 blur-3xl"
// // //               style={{
// // //                 background: "radial-gradient(circle at 50% 40%, rgba(122,90,248,0.35), transparent 70%)",
// // //               }}
// // //             />

// // //             <motion.div
// // //               animate={{ y: [0, -10, 0] }}
// // //               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
// // //               className="relative"
// // //             >
// // //               <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border border-[rgba(122,90,248,0.12)] bg-white/30 shadow-[0_32px_80px_-24px_rgba(122,90,248,0.35)] backdrop-blur-sm">
// // //                 <Image
// // //                   src="/images/nextjs.png"
// // //                   alt="CodeSentry AI — AI-powered code review illustration"
// // //                   fill
// // //                   priority
// // //                   sizes="(max-width: 1024px) 0px, 560px"
// // //                   className="object-contain object-center"
// // //                 />
// // //                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
// // //               </div>

// // //               <div
// // //                 className="absolute -bottom-4 left-1/2 h-8 w-[80%] -translate-x-1/2 rounded-[50%] opacity-30 blur-xl"
// // //                 style={{ background: "radial-gradient(ellipse, rgba(122,90,248,0.4), transparent 70%)" }}
// // //               />
// // //             </motion.div>
// // //           </motion.div>

// // //           {/* Trusted Companies */}
// // //           <motion.div
// // //             className="mt-12"
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             transition={{ delay: 1, duration: 0.5 }}
// // //           >
// // //             <p className="text-[12px] font-medium text-[#5B6172]">
// // //               Trusted by 10,000+ developers and teams worldwide
// // //             </p>
// // //             <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
// // //               {["GitHub", "GitLab", "Bitbucket", "Vercel", "Microsoft"].map((name, i) => (
// // //                 <motion.span
// // //                   key={name}
// // //                   className="text-[13px] font-semibold text-[#5B6172]/50 transition-colors hover:text-[#7A5AF8]"
// // //                   initial={{ opacity: 0, y: 10 }}
// // //                   animate={{ opacity: 1, y: 0 }}
// // //                   transition={{ delay: 1.1 + i * 0.05, duration: 0.4 }}
// // //                 >
// // //                   {name}
// // //                 </motion.span>
// // //               ))}
// // //             </div>
// // //           </motion.div>
// // //         </motion.section>

// // //         {/* ─── RIGHT PANEL ─── */}
// // //         <motion.section
// // //           className="flex flex-1 items-center justify-center px-5 py-12 lg:px-12 lg:py-16"
// // //           initial={{ opacity: 0, x: 40 }}
// // //           animate={{ opacity: 1, x: 0 }}
// // //           transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
// // //         >
// // //           {/* Mobile Logo */}
// // //           <motion.div
// // //             className="mb-8 flex items-center justify-center gap-2.5 lg:hidden"
// // //             initial={{ opacity: 0, y: -10 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ delay: 0.1, duration: 0.4 }}
// // //           >
// // //             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A5AF8] to-[#9B7CFF] text-white shadow-lg">
// // //               <IconCode className="h-5 w-5" stroke={2.2} />
// // //             </div>
// // //             <span className="text-[17px] font-bold tracking-tight text-[#18181B]">
// // //               CodeSentry <span className="text-[#7A5AF8]">AI</span>
// // //             </span>
// // //           </motion.div>

// // //           {/* Floating Auth Card */}
// // //           <div className="relative w-full max-w-[440px]">
// // //             {/* Card glow */}
// // //             <div
// // //               className="absolute -inset-5 -z-10 rounded-[44px] opacity-50 blur-2xl"
// // //               style={{
// // //                 background: "radial-gradient(circle at 50% 30%, rgba(122,90,248,0.25), transparent 70%)",
// // //               }}
// // //             />

// // //             <motion.div
// // //               className="relative overflow-hidden rounded-[32px] border border-[rgba(122,90,248,0.12)] p-8 shadow-[0_24px_80px_-24px_rgba(122,90,248,0.35)] sm:p-10"
// // //               style={{
// // //                 background: "rgba(255,255,255,0.72)",
// // //                 backdropFilter: "blur(40px)",
// // //                 WebkitBackdropFilter: "blur(40px)",
// // //               }}
// // //               initial={{ opacity: 0, y: 20, scale: 0.98 }}
// // //               animate={{ opacity: 1, y: 0, scale: 1 }}
// // //               transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
// // //             >
// // //               {/* Top Badge — Secure Login */}
// // //               <motion.div
// // //                 className="mb-6 flex justify-end"
// // //                 initial={{ opacity: 0, x: 10 }}
// // //                 animate={{ opacity: 1, x: 0 }}
// // //                 transition={{ delay: 0.5, duration: 0.4 }}
// // //               >
// // //                 <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(122,90,248,0.14)] bg-white/60 px-3 py-1.5 text-[11px] font-medium text-[#5B6172] backdrop-blur-sm shadow-sm">
// // //                   <IconShieldCheck className="h-3.5 w-3.5 text-[#7A5AF8]" stroke={2} />
// // //                   Secure Login
// // //                 </span>
// // //               </motion.div>

// // //               {/* Heading */}
// // //               <motion.h2
// // //                 className="text-[26px] font-bold tracking-tight text-[#18181B] sm:text-[28px]"
// // //                 initial={{ opacity: 0, y: 10 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ delay: 0.4, duration: 0.5 }}
// // //               >
// // //                 Welcome back{" "}
// // //                 <motion.span
// // //                   animate={{ rotate: [0, 14, -8, 14, 0] }}
// // //                   transition={{ duration: 1.5, delay: 1.2, repeat: 0 }}
// // //                   className="inline-block"
// // //                 >
// // //                   👋
// // //                 </motion.span>
// // //               </motion.h2>
// // //               <motion.p
// // //                 className="mt-1.5 text-[14px] text-[#5B6172]"
// // //                 initial={{ opacity: 0 }}
// // //                 animate={{ opacity: 1 }}
// // //                 transition={{ delay: 0.5, duration: 0.4 }}
// // //               >
// // //                 Sign in to continue to your account
// // //               </motion.p>

// // //               {/* Error Message */}
// // //               <AnimatePresence mode="wait">
// // //                 {error && (
// // //                   <motion.div
// // //                     key={error}
// // //                     initial={{ opacity: 0, y: -6, height: 0 }}
// // //                     animate={{ opacity: 1, y: 0, height: "auto" }}
// // //                     exit={{ opacity: 0, y: -4, height: 0 }}
// // //                     className="mt-4 overflow-hidden"
// // //                   >
// // //                     <div className="flex items-start gap-2.5 rounded-2xl border border-red-200 bg-red-50 px-3.5 py-3">
// // //                       <IconAlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
// // //                       <p className="text-[13px] text-red-600">{error}</p>
// // //                     </div>
// // //                   </motion.div>
// // //                 )}
// // //               </AnimatePresence>

// // //               {/* ── Email Login Form ── */}
// // //               <motion.form
// // //                 onSubmit={handleSubmit}
// // //                 className="mt-6 space-y-4"
// // //                 initial={{ opacity: 0, y: 10 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ delay: 0.1, duration: 0.3 }}
// // //               >
// // //                 {/* Email Input */}
// // //                 <motion.div
// // //                   initial={{ opacity: 0, y: 10 }}
// // //                   animate={{ opacity: 1, y: 0 }}
// // //                   transition={{ delay: 0.15 }}
// // //                 >
// // //                   <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-[#18181B]">
// // //                     Email address
// // //                   </label>
// // //                   <div className="relative group">
// // //                     <IconMail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6172]/60 transition-colors group-focus-within:text-[#7A5AF8]" />
// // //                     <input
// // //                       id="email"
// // //                       type="email"
// // //                       autoComplete="email"
// // //                       placeholder="Enter your email"
// // //                       value={email}
// // //                       onChange={(e) => setEmail(e.target.value)}
// // //                       className="w-full rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/80 py-3 pl-10 pr-4 text-[14px] text-[#18181B] placeholder:text-[#5B6172]/50 outline-none transition-all duration-200 focus:border-[#7A5AF8] focus:ring-4 focus:ring-[#7A5AF8]/12 focus:bg-white"
// // //                       autoFocus
// // //                     />
// // //                   </div>
// // //                 </motion.div>

// // //                 {/* Password Input */}
// // //                 <motion.div
// // //                   initial={{ opacity: 0, y: 10 }}
// // //                   animate={{ opacity: 1, y: 0 }}
// // //                   transition={{ delay: 0.2 }}
// // //                 >
// // //                   <div className="mb-1.5 flex items-center justify-between">
// // //                     <label htmlFor="password" className="text-[13px] font-medium text-[#18181B]">
// // //                       Password
// // //                     </label>
// // //                     <Link
// // //                       href="/forgot-password"
// // //                       className="text-[12px] font-medium text-[#7A5AF8] transition hover:text-[#9B7CFF] hover:underline underline-offset-2"
// // //                     >
// // //                       Forgot password?
// // //                     </Link>
// // //                   </div>
// // //                   <div className="relative group">
// // //                     <IconLock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6172]/60 transition-colors group-focus-within:text-[#7A5AF8]" />
// // //                     <input
// // //                       id="password"
// // //                       type={showPassword ? "text" : "password"}
// // //                       autoComplete="current-password"
// // //                       placeholder="Enter your password"
// // //                       value={password}
// // //                       onChange={(e) => setPassword(e.target.value)}
// // //                       className="w-full rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/80 py-3 pl-10 pr-11 text-[14px] text-[#18181B] placeholder:text-[#5B6172]/50 outline-none transition-all duration-200 focus:border-[#7A5AF8] focus:ring-4 focus:ring-[#7A5AF8]/12 focus:bg-white"
// // //                     />
// // //                     <button
// // //                       type="button"
// // //                       onClick={() => setShowPassword((v) => !v)}
// // //                       className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-[#5B6172] transition hover:text-[#7A5AF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
// // //                       aria-label={showPassword ? "Hide password" : "Show password"}
// // //                     >
// // //                       {showPassword ? (
// // //                         <IconEyeOff className="h-4 w-4" stroke={1.8} />
// // //                       ) : (
// // //                         <IconEye className="h-4 w-4" stroke={1.8} />
// // //                       )}
// // //                     </button>
// // //                   </div>
// // //                 </motion.div>

// // //                 {/* Remember Me */}
// // //                 <motion.label
// // //                   className="flex cursor-pointer items-center gap-2.5 select-none"
// // //                   initial={{ opacity: 0 }}
// // //                   animate={{ opacity: 1 }}
// // //                   transition={{ delay: 0.25 }}
// // //                 >
// // //                   <div className="relative flex items-center">
// // //                     <input
// // //                       type="checkbox"
// // //                       checked={remember}
// // //                       onChange={(e) => setRemember(e.target.checked)}
// // //                       className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[rgba(122,90,248,0.3)] bg-white/60 transition checked:border-[#7A5AF8] checked:bg-[#7A5AF8]"
// // //                     />
// // //                     <IconCheck className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition peer-checked:opacity-100" stroke={3} />
// // //                   </div>
// // //                   <span className="text-[13px] text-[#5B6172]">Remember me</span>
// // //                 </motion.label>

// // //                 {/* Sign In Button */}
// // //                 <motion.button
// // //                   type="submit"
// // //                   disabled={loading}
// // //                   whileHover={{ y: -2, boxShadow: "0 16px 40px -8px rgba(122,90,248,0.55)" }}
// // //                   whileTap={{ scale: 0.98 }}
// // //                   className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_32px_-8px_rgba(122,90,248,0.5)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/50 focus-visible:ring-offset-2"
// // //                   style={{ background: "linear-gradient(135deg, #7A5AF8 0%, #9B7CFF 100%)" }}
// // //                   initial={{ opacity: 0, y: 10 }}
// // //                   animate={{ opacity: 1, y: 0 }}
// // //                   transition={{ delay: 0.3 }}
// // //                 >
// // //                   {/* Shimmer effect */}
// // //                   <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
// // //                   {loading ? (
// // //                     <>
// // //                       <IconLoader2 className="h-4 w-4 animate-spin" />
// // //                       Signing in…
// // //                     </>
// // //                   ) : (
// // //                     <>
// // //                       Sign In
// // //                       <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" stroke={2.2} />
// // //                     </>
// // //                   )}
// // //                 </motion.button>
// // //               </motion.form>

// // //               {/* Sign Up Link */}
// // //               <motion.p
// // //                 className="mt-7 text-center text-[13px] text-[#5B6172]"
// // //                 initial={{ opacity: 0 }}
// // //                 animate={{ opacity: 1 }}
// // //                 transition={{ delay: 0.5 }}
// // //               >
// // //                 Don&apos;t have an account?{" "}
// // //                 <Link
// // //                   href="/signup"
// // //                   className="relative font-semibold text-[#7A5AF8] transition hover:text-[#9B7CFF]"
// // //                 >
// // //                   Sign up
// // //                   <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#7A5AF8] transition-all duration-300 hover:w-full" />
// // //                 </Link>
// // //               </motion.p>
// // //             </motion.div>
// // //           </div>

// // //           {/* Bottom security text */}
// // //           <motion.p
// // //             className="mt-6 flex items-center justify-center gap-1.5 text-center text-[12px] text-[#5B6172]/80"
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             transition={{ delay: 0.8 }}
// // //           >
// // //             <IconShieldCheck className="h-3.5 w-3.5 text-[#7A5AF8]" />
// // //             Your data is encrypted and secure
// // //           </motion.p>
// // //         </motion.section>
// // //       </div>
// // //     </main>
// // //   );
// // // }



// // "use client";

// // import { useState, type FormEvent } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { useRouter } from "next/navigation";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   IconLoader2,
// //   IconMail,
// //   IconLock,
// //   IconShieldCheck,
// //   IconAlertCircle,
// //   IconSparkles,
// //   IconBolt,
// //   IconEye,
// //   IconEyeOff,
// //   IconArrowRight,
// //   IconCode,
// //   IconCheck,
// // } from "@tabler/icons-react";
// // import { useAuth } from "@/context/AuthContext";

// // export default function LoginPage() {
// //   const { signIn, setAuthActionLoading } = useAuth();
// //   const router = useRouter();

// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [remember, setRemember] = useState(true);

// //   async function handleSubmit(e: FormEvent) {
// //     e.preventDefault();
// //     if (!email || !password) {
// //       setError("Please fill in all fields.");
// //       return;
// //     }
// //     setLoading(true);
// //     setAuthActionLoading("Signing in to your account...");
// //     setError("");
// //     try {
// //       await signIn(email, password, remember);
// //       // Clear loading states on success (same pattern as registration)
// //       setAuthActionLoading(null);
// //       setLoading(false);
// //       router.replace("/dashboard");
// //     } catch {
// //       setError("Invalid credentials. Try again.");
// //       setAuthActionLoading(null);
// //       setLoading(false);
// //     }
// //   }

// //   return (
// //     <main className="relative flex min-h-screen overflow-hidden bg-[#F7F4FF]">
// //       {/* ═══════════════════════════════════════════════════════════════════
// //           BACKGROUND — Premium Lavender Aurora
// //          ═══════════════════════════════════════════════════════════════════ */}
// //       <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
// //         {/* Base gradient */}
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             background:
// //               "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(122,90,248,0.18) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 85% 70%, rgba(155,124,255,0.2) 0%, transparent 50%), linear-gradient(165deg, #F8F5FF 0%, #ECE3FF 100%)",
// //           }}
// //         />

// //         {/* Subtle grid texture */}
// //         <div
// //           className="absolute inset-0 opacity-[0.35]"
// //           style={{
// //             backgroundImage:
// //               "linear-gradient(rgba(122,90,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(122,90,248,0.06) 1px, transparent 1px)",
// //             backgroundSize: "48px 48px",
// //             maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
// //           }}
// //         />

// //         {/* Floating blur orbs */}
// //         <motion.div
// //           className="absolute -left-24 top-1/4 h-[420px] w-[420px] rounded-full bg-[#7A5AF8]/20 blur-[100px]"
// //           animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
// //           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute -right-20 bottom-1/4 h-[380px] w-[380px] rounded-full bg-[#B99EFF]/30 blur-[110px]"
// //           animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
// //           transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#9B7CFF]/15 blur-[90px]"
// //           animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
// //           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute bottom-0 right-1/3 h-[320px] w-[320px] rounded-full bg-[#7A5AF8]/10 blur-[80px]"
// //           animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
// //           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //       </div>

// //       {/* ═══════════════════════════════════════════════════════════════════
// //           MAIN LAYOUT — Split Screen
// //          ═══════════════════════════════════════════════════════════════════ */}
// //       <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-stretch lg:min-h-screen lg:flex-row">
// //         {/* ─── LEFT PANEL ─── */}
// //         <motion.section
// //           className="relative hidden flex-1 flex-col justify-center px-12 py-16 lg:flex"
// //           initial={{ opacity: 0, x: -40 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
// //         >
// //           {/* Brand Logo */}
// //           <motion.div
// //             className="mb-10 flex items-center gap-3"
// //             initial={{ opacity: 0, y: -10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.2, duration: 0.5 }}
// //           >
// //             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A5AF8] to-[#9B7CFF] text-white shadow-[0_8px_28px_-6px_rgba(122,90,248,0.55)]">
// //               <IconCode className="h-5 w-5" stroke={2.2} />
// //             </div>
// //             <span className="text-[17px] font-bold tracking-tight text-[#18181B]">
// //               CodeSentry <span className="text-[#7A5AF8]">AI</span>
// //             </span>
// //           </motion.div>

// //           {/* Hero Heading */}
// //           <motion.h1
// //             className="max-w-md text-[2.6rem] font-bold leading-[1.12] tracking-tight text-[#18181B]"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.3, duration: 0.6 }}
// //           >
// //             AI-Powered Code Reviews that build{" "}
// //             <span className="bg-gradient-to-r from-[#7A5AF8] to-[#9B7CFF] bg-clip-text text-transparent">
// //               better products
// //             </span>
// //           </motion.h1>

// //           {/* Supporting paragraph */}
// //           <motion.p
// //             className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#5B6172]"
// //             initial={{ opacity: 0, y: 15 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.4, duration: 0.5 }}
// //           >
// //             Automated code reviews, security scanning, and intelligent insights — all in one place.
// //           </motion.p>

// //           {/* Feature Cards */}
// //           <motion.ul
// //             className="mt-10 space-y-4"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.5, duration: 0.5 }}
// //           >
// //             {[
// //               {
// //                 icon: IconShieldCheck,
// //                 title: "Smart Security Analysis",
// //                 desc: "Detect vulnerabilities and risky patterns before they reach production.",
// //               },
// //               {
// //                 icon: IconSparkles,
// //                 title: "AI Code Insights",
// //                 desc: "Get intelligent suggestions and explanations to improve code quality.",
// //               },
// //               {
// //                 icon: IconBolt,
// //                 title: "Faster Development",
// //                 desc: "Automate repetitive reviews and ship faster with confidence.",
// //               },
// //             ].map((f, i) => (
// //               <motion.li
// //                 key={f.title}
// //                 className="group flex items-start gap-4"
// //                 initial={{ opacity: 0, x: -20 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 transition={{ delay: 0.55 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
// //               >
// //                 <motion.div
// //                   whileHover={{ scale: 1.1, y: -2 }}
// //                   className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[rgba(122,90,248,0.14)] bg-white/70 text-[#7A5AF8] shadow-sm backdrop-blur-md transition-shadow group-hover:shadow-[0_8px_24px_-6px_rgba(122,90,248,0.25)]"
// //                 >
// //                   <f.icon className="h-[18px] w-[18px]" stroke={1.8} />
// //                 </motion.div>
// //                 <div>
// //                   <div className="text-[14px] font-semibold text-[#18181B]">{f.title}</div>
// //                   <div className="mt-0.5 text-[13px] leading-snug text-[#5B6172]">{f.desc}</div>
// //                 </div>
// //               </motion.li>
// //             ))}
// //           </motion.ul>

// //           {/* 3D Illustration */}
// //           <motion.div
// //             className="relative mt-12 w-full max-w-lg"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
// //           >
// //             <div
// //               className="absolute -inset-8 -z-10 rounded-[48px] opacity-60 blur-3xl"
// //               style={{
// //                 background: "radial-gradient(circle at 50% 40%, rgba(122,90,248,0.35), transparent 70%)",
// //               }}
// //             />

// //             <motion.div
// //               animate={{ y: [0, -10, 0] }}
// //               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
// //               className="relative"
// //             >
// //               <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border border-[rgba(122,90,248,0.12)] bg-white/30 shadow-[0_32px_80px_-24px_rgba(122,90,248,0.35)] backdrop-blur-sm">
// //                 <Image
// //                   src="/images/nextjs.png"
// //                   alt="CodeSentry AI — AI-powered code review illustration"
// //                   fill
// //                   priority
// //                   sizes="(max-width: 1024px) 0px, 560px"
// //                   className="object-contain object-center"
// //                 />
// //                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
// //               </div>

// //               <div
// //                 className="absolute -bottom-4 left-1/2 h-8 w-[80%] -translate-x-1/2 rounded-[50%] opacity-30 blur-xl"
// //                 style={{ background: "radial-gradient(ellipse, rgba(122,90,248,0.4), transparent 70%)" }}
// //               />
// //             </motion.div>
// //           </motion.div>

// //           {/* Trusted Companies */}
// //           <motion.div
// //             className="mt-12"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 1, duration: 0.5 }}
// //           >
// //             <p className="text-[12px] font-medium text-[#5B6172]">
// //               Trusted by 10,000+ developers and teams worldwide
// //             </p>
// //             <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
// //               {["GitHub", "GitLab", "Bitbucket", "Vercel", "Microsoft"].map((name, i) => (
// //                 <motion.span
// //                   key={name}
// //                   className="text-[13px] font-semibold text-[#5B6172]/50 transition-colors hover:text-[#7A5AF8]"
// //                   initial={{ opacity: 0, y: 10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: 1.1 + i * 0.05, duration: 0.4 }}
// //                 >
// //                   {name}
// //                 </motion.span>
// //               ))}
// //             </div>
// //           </motion.div>
// //         </motion.section>

// //         {/* ─── RIGHT PANEL ─── */}
// //         <motion.section
// //           className="flex flex-1 items-center justify-center px-5 py-12 lg:px-12 lg:py-16"
// //           initial={{ opacity: 0, x: 40 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
// //         >
// //           {/* Mobile Logo */}
// //           <motion.div
// //             className="mb-8 flex items-center justify-center gap-2.5 lg:hidden"
// //             initial={{ opacity: 0, y: -10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.1, duration: 0.4 }}
// //           >
// //             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A5AF8] to-[#9B7CFF] text-white shadow-lg">
// //               <IconCode className="h-5 w-5" stroke={2.2} />
// //             </div>
// //             <span className="text-[17px] font-bold tracking-tight text-[#18181B]">
// //               CodeSentry <span className="text-[#7A5AF8]">AI</span>
// //             </span>
// //           </motion.div>

// //           {/* Floating Auth Card */}
// //           <div className="relative w-full max-w-[440px]">
// //             {/* Card glow */}
// //             <div
// //               className="absolute -inset-5 -z-10 rounded-[44px] opacity-50 blur-2xl"
// //               style={{
// //                 background: "radial-gradient(circle at 50% 30%, rgba(122,90,248,0.25), transparent 70%)",
// //               }}
// //             />

// //             <motion.div
// //               className="relative overflow-hidden rounded-[32px] border border-[rgba(122,90,248,0.12)] p-8 shadow-[0_24px_80px_-24px_rgba(122,90,248,0.35)] sm:p-10"
// //               style={{
// //                 background: "rgba(255,255,255,0.72)",
// //                 backdropFilter: "blur(40px)",
// //                 WebkitBackdropFilter: "blur(40px)",
// //               }}
// //               initial={{ opacity: 0, y: 20, scale: 0.98 }}
// //               animate={{ opacity: 1, y: 0, scale: 1 }}
// //               transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
// //             >
// //               {/* Top Badge — Secure Login */}
// //               <motion.div
// //                 className="mb-6 flex justify-end"
// //                 initial={{ opacity: 0, x: 10 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 transition={{ delay: 0.5, duration: 0.4 }}
// //               >
// //                 <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(122,90,248,0.14)] bg-white/60 px-3 py-1.5 text-[11px] font-medium text-[#5B6172] backdrop-blur-sm shadow-sm">
// //                   <IconShieldCheck className="h-3.5 w-3.5 text-[#7A5AF8]" stroke={2} />
// //                   Secure Login
// //                 </span>
// //               </motion.div>

// //               {/* Heading */}
// //               <motion.h2
// //                 className="text-[26px] font-bold tracking-tight text-[#18181B] sm:text-[28px]"
// //                 initial={{ opacity: 0, y: 10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.4, duration: 0.5 }}
// //               >
// //                 Welcome back{" "}
// //                 <motion.span
// //                   animate={{ rotate: [0, 14, -8, 14, 0] }}
// //                   transition={{ duration: 1.5, delay: 1.2, repeat: 0 }}
// //                   className="inline-block"
// //                 >
// //                   👋
// //                 </motion.span>
// //               </motion.h2>
// //               <motion.p
// //                 className="mt-1.5 text-[14px] text-[#5B6172]"
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ delay: 0.5, duration: 0.4 }}
// //               >
// //                 Sign in to continue to your account
// //               </motion.p>

// //               {/* Error Message */}
// //               <AnimatePresence mode="wait">
// //                 {error && (
// //                   <motion.div
// //                     key={error}
// //                     initial={{ opacity: 0, y: -6, height: 0 }}
// //                     animate={{ opacity: 1, y: 0, height: "auto" }}
// //                     exit={{ opacity: 0, y: -4, height: 0 }}
// //                     className="mt-4 overflow-hidden"
// //                   >
// //                     <div className="flex items-start gap-2.5 rounded-2xl border border-red-200 bg-red-50 px-3.5 py-3">
// //                       <IconAlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
// //                       <p className="text-[13px] text-red-600">{error}</p>
// //                     </div>
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>

// //               {/* ── Email Login Form ── */}
// //               <motion.form
// //                 onSubmit={handleSubmit}
// //                 className="mt-6 space-y-4"
// //                 initial={{ opacity: 0, y: 10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.1, duration: 0.3 }}
// //               >
// //                 {/* Email Input */}
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: 0.15 }}
// //                 >
// //                   <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-[#18181B]">
// //                     Email address
// //                   </label>
// //                   <div className="relative group">
// //                     <IconMail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6172]/60 transition-colors group-focus-within:text-[#7A5AF8]" />
// //                     <input
// //                       id="email"
// //                       type="email"
// //                       autoComplete="email"
// //                       placeholder="Enter your email"
// //                       value={email}
// //                       onChange={(e) => setEmail(e.target.value)}
// //                       className="w-full rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/80 py-3 pl-10 pr-4 text-[14px] text-[#18181B] placeholder:text-[#5B6172]/50 outline-none transition-all duration-200 focus:border-[#7A5AF8] focus:ring-4 focus:ring-[#7A5AF8]/12 focus:bg-white"
// //                       autoFocus
// //                     />
// //                   </div>
// //                 </motion.div>

// //                 {/* Password Input */}
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: 0.2 }}
// //                 >
// //                   <div className="mb-1.5 flex items-center justify-between">
// //                     <label htmlFor="password" className="text-[13px] font-medium text-[#18181B]">
// //                       Password
// //                     </label>
// //                     <Link
// //                       href="/forgot-password"
// //                       className="text-[12px] font-medium text-[#7A5AF8] transition hover:text-[#9B7CFF] hover:underline underline-offset-2"
// //                     >
// //                       Forgot password?
// //                     </Link>
// //                   </div>
// //                   <div className="relative group">
// //                     <IconLock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6172]/60 transition-colors group-focus-within:text-[#7A5AF8]" />
// //                     <input
// //                       id="password"
// //                       type={showPassword ? "text" : "password"}
// //                       autoComplete="current-password"
// //                       placeholder="Enter your password"
// //                       value={password}
// //                       onChange={(e) => setPassword(e.target.value)}
// //                       className="w-full rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/80 py-3 pl-10 pr-11 text-[14px] text-[#18181B] placeholder:text-[#5B6172]/50 outline-none transition-all duration-200 focus:border-[#7A5AF8] focus:ring-4 focus:ring-[#7A5AF8]/12 focus:bg-white"
// //                     />
// //                     <button
// //                       type="button"
// //                       onClick={() => setShowPassword((v) => !v)}
// //                       className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-[#5B6172] transition hover:text-[#7A5AF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
// //                       aria-label={showPassword ? "Hide password" : "Show password"}
// //                     >
// //                       {showPassword ? (
// //                         <IconEyeOff className="h-4 w-4" stroke={1.8} />
// //                       ) : (
// //                         <IconEye className="h-4 w-4" stroke={1.8} />
// //                       )}
// //                     </button>
// //                   </div>
// //                 </motion.div>

// //                 {/* Remember Me */}
// //                 <motion.label
// //                   className="flex cursor-pointer items-center gap-2.5 select-none"
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   transition={{ delay: 0.25 }}
// //                 >
// //                   <div className="relative flex items-center">
// //                     <input
// //                       type="checkbox"
// //                       checked={remember}
// //                       onChange={(e) => setRemember(e.target.checked)}
// //                       className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[rgba(122,90,248,0.3)] bg-white/60 transition checked:border-[#7A5AF8] checked:bg-[#7A5AF8]"
// //                     />
// //                     <IconCheck className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition peer-checked:opacity-100" stroke={3} />
// //                   </div>
// //                   <span className="text-[13px] text-[#5B6172]">Remember me</span>
// //                 </motion.label>

// //                 {/* Sign In Button */}
// //                 <motion.button
// //                   type="submit"
// //                   disabled={loading}
// //                   whileHover={{ y: -2, boxShadow: "0 16px 40px -8px rgba(122,90,248,0.55)" }}
// //                   whileTap={{ scale: 0.98 }}
// //                   className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_32px_-8px_rgba(122,90,248,0.5)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/50 focus-visible:ring-offset-2"
// //                   style={{ background: "linear-gradient(135deg, #7A5AF8 0%, #9B7CFF 100%)" }}
// //                   initial={{ opacity: 0, y: 10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: 0.3 }}
// //                 >
// //                   {/* Shimmer effect */}
// //                   <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
// //                   {loading ? (
// //                     <>
// //                       <IconLoader2 className="h-4 w-4 animate-spin" />
// //                       Signing in…
// //                     </>
// //                   ) : (
// //                     <>
// //                       Sign In
// //                       <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" stroke={2.2} />
// //                     </>
// //                   )}
// //                 </motion.button>
// //               </motion.form>

// //               {/* Sign Up Link */}
// //               <motion.p
// //                 className="mt-7 text-center text-[13px] text-[#5B6172]"
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ delay: 0.5 }}
// //               >
// //                 Don&apos;t have an account?{" "}
// //                 <Link
// //                   href="/signup"
// //                   className="relative font-semibold text-[#7A5AF8] transition hover:text-[#9B7CFF]"
// //                 >
// //                   Sign up
// //                   <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#7A5AF8] transition-all duration-300 hover:w-full" />
// //                 </Link>
// //               </motion.p>
// //             </motion.div>
// //           </div>

// //           {/* Bottom security text */}
// //           <motion.p
// //             className="mt-6 flex items-center justify-center gap-1.5 text-center text-[12px] text-[#5B6172]/80"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.8 }}
// //           >
// //             <IconShieldCheck className="h-3.5 w-3.5 text-[#7A5AF8]" />
// //             Your data is encrypted and secure
// //           </motion.p>
// //         </motion.section>
// //       </div>
// //     </main>
// //   );
// // }

// "use client";

// import { useState, type FormEvent } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   IconLoader2,
//   IconMail,
//   IconLock,
//   IconShieldCheck,
//   IconAlertCircle,
//   IconSparkles,
//   IconBolt,
//   IconEye,
//   IconEyeOff,
//   IconArrowRight,
//   IconCode,
//   IconCheck,
//   IconBrandGithub,
//   IconBug,
//   IconBraces,
//   IconTerminal2,
//   IconScan,
//   IconCircleCheck,
// } from "@tabler/icons-react";
// import { useAuth } from "@/context/AuthContext";

// export default function LoginPage() {
//   const { signIn, setAuthActionLoading } = useAuth();
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [remember, setRemember] = useState(true);

//   async function handleSubmit(e: FormEvent) {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     setLoading(true);
//     setAuthActionLoading("Signing in to your account...");
//     setError("");

//     try {
//       await signIn(email, password, remember);

//       setAuthActionLoading(null);
//       setLoading(false);

//       router.replace("/dashboard");
//     } catch {
//       setError("Invalid credentials. Try again.");
//       setAuthActionLoading(null);
//       setLoading(false);
//     }
//   }

//   return (
//     <main className="relative h-dvh w-full overflow-hidden bg-[#080611] text-white">
//       {/* =========================================================
//           PREMIUM 3D BACKGROUND
//       ========================================================= */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {/* Main gradient */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background: `
//               radial-gradient(
//                 ellipse 70% 70% at 15% 35%,
//                 rgba(124, 58, 237, 0.28),
//                 transparent 60%
//               ),
//               radial-gradient(
//                 ellipse 60% 65% at 88% 70%,
//                 rgba(139, 92, 246, 0.20),
//                 transparent 60%
//               ),
//               radial-gradient(
//                 ellipse 45% 45% at 50% 0%,
//                 rgba(168, 85, 247, 0.12),
//                 transparent 70%
//               ),
//               linear-gradient(
//                 135deg,
//                 #080611 0%,
//                 #0d091a 45%,
//                 #110c20 100%
//               )
//             `,
//           }}
//         />

//         {/* Grid */}
//         <div
//           className="absolute inset-0 opacity-[0.14]"
//           style={{
//             backgroundImage: `
//               linear-gradient(
//                 rgba(167,139,250,0.18) 1px,
//                 transparent 1px
//               ),
//               linear-gradient(
//                 90deg,
//                 rgba(167,139,250,0.18) 1px,
//                 transparent 1px
//               )
//             `,
//             backgroundSize: "55px 55px",
//             maskImage:
//               "radial-gradient(circle at center, black 0%, transparent 75%)",
//             WebkitMaskImage:
//               "radial-gradient(circle at center, black 0%, transparent 75%)",
//           }}
//         />

//         {/* Large glow */}
//         <motion.div
//           className="absolute -left-40 top-[18%] h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[130px]"
//           animate={{
//             x: [0, 35, 0],
//             y: [0, -25, 0],
//             scale: [1, 1.08, 1],
//           }}
//           transition={{
//             duration: 14,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//         <motion.div
//           className="absolute -right-40 bottom-[5%] h-[480px] w-[480px] rounded-full bg-purple-500/20 blur-[130px]"
//           animate={{
//             x: [0, -30, 0],
//             y: [0, 20, 0],
//             scale: [1, 1.12, 1],
//           }}
//           transition={{
//             duration: 16,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//         {/* Top light */}
//         <motion.div
//           className="absolute left-1/2 top-[-180px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[100px]"
//           animate={{
//             opacity: [0.4, 0.75, 0.4],
//             scale: [1, 1.15, 1],
//           }}
//           transition={{
//             duration: 9,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//         {/* Tiny stars */}
//         <div className="absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-violet-300/70 shadow-[0_0_14px_4px_rgba(167,139,250,0.5)]" />
//         <div className="absolute left-[42%] top-[12%] h-1 w-1 rounded-full bg-purple-300/60 shadow-[0_0_14px_4px_rgba(192,132,252,0.4)]" />
//         <div className="absolute right-[15%] top-[28%] h-1 w-1 rounded-full bg-violet-300/60 shadow-[0_0_14px_4px_rgba(167,139,250,0.4)]" />
//         <div className="absolute bottom-[20%] left-[47%] h-1 w-1 rounded-full bg-purple-300/50" />
//       </div>

//       {/* =========================================================
//           MAIN CONTAINER
//       ========================================================= */}
//       <div className="relative z-10 mx-auto flex h-full w-full max-w-[1500px] flex-col lg:flex-row">
//         {/* =======================================================
//             LEFT SIDE
//         ======================================================= */}
//         <motion.section
//           className="
//             relative hidden
//             h-full
//             min-h-0
//             flex-1
//             flex-col
//             justify-center
//             overflow-hidden
//             px-10
//             py-8
//             lg:flex
//             xl:px-16
//           "
//           initial={{ opacity: 0, x: -35 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//         >
//           {/* Logo */}
//           <motion.div
//             className="mb-7 flex items-center gap-3"
//             initial={{ opacity: 0, y: -15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <div
//               className="
//                 relative flex h-11 w-11 items-center justify-center
//                 rounded-[14px]
//                 border border-white/10
//                 bg-gradient-to-br from-violet-500 to-purple-700
//                 shadow-[0_15px_40px_-10px_rgba(139,92,246,0.8)]
//               "
//             >
//               <div className="absolute inset-[1px] rounded-[13px] bg-gradient-to-br from-white/20 to-transparent" />

//               <IconCode
//                 className="relative z-10 h-5 w-5 text-white"
//                 stroke={2.2}
//               />
//             </div>

//             <div>
//               <div className="text-[17px] font-bold tracking-tight text-white">
//                 CodeSentry{" "}
//                 <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
//                   AI
//                 </span>
//               </div>

//               <div className="text-[10px] uppercase tracking-[0.18em] text-white/35">
//                 Intelligent Code Security
//               </div>
//             </div>
//           </motion.div>

//           {/* Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//           >
//             <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-500/[0.07] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-violet-300">
//               <IconSparkles className="h-3.5 w-3.5" />
//               AI-powered development
//             </div>

//             <h1 className="max-w-[570px] text-[42px] font-bold leading-[1.05] tracking-[-0.035em] text-white xl:text-[48px]">
//               Build better code.
//               <br />

//               <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
//                 Ship with confidence.
//               </span>
//             </h1>

//             <p className="mt-4 max-w-[470px] text-[14px] leading-6 text-white/45 xl:text-[15px]">
//               AI-powered code reviews, security scanning, vulnerability
//               detection, and intelligent developer insights — all in one
//               platform.
//             </p>
//           </motion.div>

//           {/* Feature row */}
//           <motion.div
//             className="mt-6 flex max-w-[610px] gap-3"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//           >
//             {[
//               {
//                 icon: IconShieldCheck,
//                 title: "Secure",
//                 text: "Find vulnerabilities",
//               },
//               {
//                 icon: IconSparkles,
//                 title: "AI Insights",
//                 text: "Smarter reviews",
//               },
//               {
//                 icon: IconBolt,
//                 title: "Fast",
//                 text: "Ship confidently",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={item.title}
//                 whileHover={{
//                   y: -5,
//                   scale: 1.02,
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 300,
//                   damping: 20,
//                 }}
//                 className="
//                   flex min-w-0 flex-1 items-center gap-3
//                   rounded-2xl
//                   border border-white/[0.07]
//                   bg-white/[0.035]
//                   px-3.5 py-3
//                   shadow-[0_15px_45px_-25px_rgba(0,0,0,0.9)]
//                   backdrop-blur-xl
//                 "
//               >
//                 <div
//                   className="
//                     flex h-9 w-9 shrink-0 items-center justify-center
//                     rounded-xl
//                     border border-violet-400/10
//                     bg-violet-500/10
//                   "
//                 >
//                   <item.icon
//                     className="h-4 w-4 text-violet-300"
//                     stroke={1.8}
//                   />
//                 </div>

//                 <div className="min-w-0">
//                   <div className="truncate text-[11px] font-semibold text-white">
//                     {item.title}
//                   </div>

//                   <div className="truncate text-[9px] text-white/35">
//                     {item.text}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* =====================================================
//               3D CODE ILLUSTRATION
//           ===================================================== */}
//           <motion.div
//             className="relative mt-7 h-[245px] w-full max-w-[600px]"
//             initial={{ opacity: 0, y: 35 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               delay: 0.65,
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >
//             {/* Floor glow */}
//             <div
//               className="
//                 absolute bottom-0 left-1/2
//                 h-16 w-[80%]
//                 -translate-x-1/2
//                 rounded-full
//                 bg-violet-600/30
//                 blur-3xl
//               "
//             />

//             {/* Main 3D card */}
//             <motion.div
//               animate={{
//                 y: [0, -8, 0],
//                 rotateX: [2, 0, 2],
//                 rotateY: [-2, 1, -2],
//               }}
//               transition={{
//                 duration: 7,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               style={{
//                 transformStyle: "preserve-3d",
//                 perspective: "1200px",
//               }}
//               className="
//                 absolute left-[8%] top-2
//                 h-[205px] w-[84%]
//                 overflow-hidden
//                 rounded-[24px]
//                 border border-white/10
//                 bg-[#11101c]/90
//                 shadow-[0_35px_80px_-30px_rgba(0,0,0,0.95)]
//               "
//             >
//               {/* Top bar */}
//               <div className="flex h-10 items-center justify-between border-b border-white/[0.07] px-4">
//                 <div className="flex items-center gap-1.5">
//                   <span className="h-2 w-2 rounded-full bg-red-400/70" />
//                   <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
//                   <span className="h-2 w-2 rounded-full bg-green-400/70" />
//                 </div>

//                 <div className="flex items-center gap-2 text-[9px] text-white/30">
//                   <IconTerminal2 className="h-3 w-3" />
//                   review.ts
//                 </div>

//                 <IconBrandGithub className="h-3.5 w-3.5 text-white/25" />
//               </div>

//               {/* Code */}
//               <div className="relative p-5 font-mono text-[10px] leading-[1.9]">
//                 <div>
//                   <span className="text-violet-400">const</span>{" "}
//                   <span className="text-blue-300">review</span>{" "}
//                   <span className="text-white/40">=</span>{" "}
//                   <span className="text-purple-300">await</span>
//                 </div>

//                 <div className="pl-4">
//                   <span className="text-white/50">codeSentry</span>
//                   <span className="text-white/30">.</span>
//                   <span className="text-violet-300">analyze</span>
//                   <span className="text-white/30">(</span>
//                 </div>

//                 <div className="pl-8 text-emerald-300/80">
//                   repository
//                 </div>

//                 <div className="pl-4 text-white/30">
//                   );
//                 </div>

//                 <div className="mt-2">
//                   <span className="text-violet-400">if</span>
//                   <span className="text-white/40"> (</span>
//                   <span className="text-emerald-300">review.secure</span>
//                   <span className="text-white/40">)</span>
//                 </div>

//                 <div className="pl-4 text-emerald-300">
//                   ✓ Ready for production
//                 </div>
//               </div>

//               {/* Scan line */}
//               <motion.div
//                 className="
//                   absolute left-0 right-0 top-10
//                   h-[1px]
//                   bg-gradient-to-r
//                   from-transparent
//                   via-violet-400
//                   to-transparent
//                   shadow-[0_0_15px_3px_rgba(139,92,246,0.55)]
//                 "
//                 animate={{
//                   y: [0, 155, 0],
//                   opacity: [0, 1, 0],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />
//             </motion.div>

//             {/* Floating vulnerability card */}
//             <motion.div
//               animate={{
//                 y: [0, -12, 0],
//                 rotate: [2, 0, 2],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="
//                 absolute -right-1 top-0 z-20
//                 flex w-[145px] items-center gap-2.5
//                 rounded-2xl
//                 border border-red-400/10
//                 bg-[#15121f]/95
//                 p-3
//                 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.9)]
//                 backdrop-blur-xl
//               "
//             >
//               <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-500/10">
//                 <IconBug className="h-4 w-4 text-red-300" />
//               </div>

//               <div>
//                 <div className="text-[9px] font-semibold text-white">
//                   Vulnerability
//                 </div>
//                 <div className="text-[8px] text-emerald-300">
//                   0 Critical Issues
//                 </div>
//               </div>
//             </motion.div>

//             {/* Floating AI card */}
//             <motion.div
//               animate={{
//                 y: [0, 10, 0],
//                 rotate: [-2, 0, -2],
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="
//                 absolute -bottom-2 left-0 z-20
//                 flex w-[155px] items-center gap-2.5
//                 rounded-2xl
//                 border border-violet-400/10
//                 bg-[#15121f]/95
//                 p-3
//                 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.9)]
//                 backdrop-blur-xl
//               "
//             >
//               <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500/10">
//                 <IconScan className="h-4 w-4 text-violet-300" />
//               </div>

//               <div>
//                 <div className="text-[9px] font-semibold text-white">
//                   AI Analysis
//                 </div>
//                 <div className="text-[8px] text-white/35">
//                   98.7% confidence
//                 </div>
//               </div>
//             </motion.div>

//             {/* Purple cube */}
//             <motion.div
//               animate={{
//                 rotateX: [0, 360],
//                 rotateY: [0, 180],
//               }}
//               transition={{
//                 duration: 14,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               style={{
//                 transformStyle: "preserve-3d",
//               }}
//               className="
//                 absolute bottom-5 right-[14%]
//                 h-8 w-8
//                 rounded-lg
//                 border border-violet-300/20
//                 bg-gradient-to-br from-violet-500/30 to-purple-900/20
//                 shadow-[0_0_35px_rgba(139,92,246,0.25)]
//               "
//             />
//           </motion.div>

//           {/* Trusted */}
//           <motion.div
//             className="mt-4 flex items-center gap-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//           >
//             <div className="text-[10px] text-white/25">
//               Trusted by developers worldwide
//             </div>

//             <div className="h-px w-8 bg-white/10" />

//             <div className="flex gap-4 text-[10px] font-medium text-white/20">
//               <span>GitHub</span>
//               <span>GitLab</span>
//               <span>Vercel</span>
//               <span>Microsoft</span>
//             </div>
//           </motion.div>
//         </motion.section>

//         {/* =======================================================
//             RIGHT SIDE
//         ======================================================= */}
//         <motion.section
//           className="
//             flex
//             h-full
//             min-h-0
//             w-full
//             flex-1
//             items-center
//             justify-center
//             overflow-hidden
//             px-4
//             py-5
//             sm:px-6
//             lg:px-10
//             xl:px-16
//           "
//           initial={{ opacity: 0, x: 35 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{
//             duration: 0.8,
//             delay: 0.15,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//         >
//           <div className="w-full max-w-[430px]">
//             {/* Mobile Logo */}
//             <motion.div
//               className="mb-4 flex items-center justify-center gap-2.5 lg:hidden"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               <div
//                 className="
//                   flex h-9 w-9 items-center justify-center
//                   rounded-xl
//                   bg-gradient-to-br from-violet-500 to-purple-700
//                   shadow-[0_10px_30px_-8px_rgba(139,92,246,0.8)]
//                 "
//               >
//                 <IconCode className="h-4 w-4" />
//               </div>

//               <span className="text-[16px] font-bold">
//                 CodeSentry{" "}
//                 <span className="text-violet-400">AI</span>
//               </span>
//             </motion.div>

//             {/* Card wrapper */}
//             <div className="relative">
//               {/* Glow */}
//               <div
//                 className="
//                   absolute -inset-6 -z-10
//                   rounded-[45px]
//                   bg-violet-600/15
//                   blur-3xl
//                 "
//               />

//               {/* 3D shadow layer */}
//               <div
//                 className="
//                   absolute inset-x-4 -bottom-3 h-8
//                   rounded-full
//                   bg-violet-600/20
//                   blur-2xl
//                 "
//               />

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 25,
//                   scale: 0.97,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   scale: 1,
//                 }}
//                 transition={{
//                   delay: 0.3,
//                   duration: 0.7,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="
//                   relative
//                   overflow-hidden
//                   rounded-[28px]
//                   border border-white/[0.10]
//                   bg-[#11101a]/80
//                   p-6
//                   shadow-[0_35px_100px_-30px_rgba(0,0,0,0.95)]
//                   backdrop-blur-[40px]
//                   sm:p-8
//                 "
//               >
//                 {/* Top glass reflection */}
//                 <div
//                   className="
//                     pointer-events-none absolute
//                     left-[-20%] top-[-50%]
//                     h-[180%] w-[70%]
//                     rotate-[25deg]
//                     bg-gradient-to-r
//                     from-transparent
//                     via-white/[0.045]
//                     to-transparent
//                   "
//                 />

//                 {/* Top border glow */}
//                 <div
//                   className="
//                     pointer-events-none absolute left-[10%] right-[10%] top-0
//                     h-px
//                     bg-gradient-to-r
//                     from-transparent
//                     via-violet-400/40
//                     to-transparent
//                   "
//                 />

//                 <div className="relative z-10">
//                   {/* Secure badge */}
//                   <motion.div
//                     className="mb-5 flex justify-end"
//                     initial={{ opacity: 0, x: 10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.5 }}
//                   >
//                     <div
//                       className="
//                         inline-flex items-center gap-1.5
//                         rounded-full
//                         border border-emerald-400/10
//                         bg-emerald-400/[0.06]
//                         px-2.5 py-1.5
//                         text-[9px]
//                         font-medium
//                         uppercase
//                         tracking-wider
//                         text-emerald-300/80
//                       "
//                     >
//                       <span className="relative flex h-1.5 w-1.5">
//                         <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
//                         <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                       </span>

//                       Secure Login
//                     </div>
//                   </motion.div>

//                   {/* Heading */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4 }}
//                   >
//                     <h2 className="text-[26px] font-bold tracking-[-0.025em] text-white sm:text-[28px]">
//                       Welcome back{" "}
//                       <motion.span
//                         className="inline-block"
//                         animate={{
//                           rotate: [0, 15, -8, 15, 0],
//                         }}
//                         transition={{
//                           duration: 1.4,
//                           delay: 1.1,
//                         }}
//                       >
//                         👋
//                       </motion.span>
//                     </h2>

//                     <p className="mt-1 text-[13px] text-white/40">
//                       Sign in to continue to your account
//                     </p>
//                   </motion.div>

//                   {/* Error */}
//                   <AnimatePresence mode="wait">
//                     {error && (
//                       <motion.div
//                         key={error}
//                         initial={{
//                           opacity: 0,
//                           height: 0,
//                           y: -5,
//                         }}
//                         animate={{
//                           opacity: 1,
//                           height: "auto",
//                           y: 0,
//                         }}
//                         exit={{
//                           opacity: 0,
//                           height: 0,
//                         }}
//                         className="overflow-hidden"
//                       >
//                         <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-red-400/15 bg-red-500/[0.07] px-3 py-2.5">
//                           <IconAlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />

//                           <p className="text-[11px] leading-5 text-red-300">
//                             {error}
//                           </p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>

//                   {/* FORM */}
//                   <motion.form
//                     onSubmit={handleSubmit}
//                     className="mt-5 space-y-4"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.45 }}
//                   >
//                     {/* Email */}
//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="mb-1.5 block text-[11px] font-medium text-white/65"
//                       >
//                         Email address
//                       </label>

//                       <div className="group relative">
//                         <IconMail
//                           className="
//                             pointer-events-none absolute
//                             left-3.5 top-1/2
//                             h-4 w-4
//                             -translate-y-1/2
//                             text-white/25
//                             transition-colors
//                             group-focus-within:text-violet-400
//                           "
//                         />

//                         <input
//                           id="email"
//                           type="email"
//                           autoComplete="email"
//                           placeholder="you@example.com"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           autoFocus
//                           className="
//                             h-[46px]
//                             w-full
//                             rounded-xl
//                             border border-white/[0.08]
//                             bg-white/[0.035]
//                             pl-10 pr-4
//                             text-[13px]
//                             text-white
//                             placeholder:text-white/20
//                             outline-none
//                             transition-all
//                             duration-200
//                             hover:border-white/[0.13]
//                             focus:border-violet-400/50
//                             focus:bg-violet-500/[0.035]
//                             focus:ring-4
//                             focus:ring-violet-500/10
//                           "
//                         />
//                       </div>
//                     </div>

//                     {/* Password */}
//                     <div>
//                       <div className="mb-1.5 flex items-center justify-between">
//                         <label
//                           htmlFor="password"
//                           className="text-[11px] font-medium text-white/65"
//                         >
//                           Password
//                         </label>

//                         <Link
//                           href="/forgot-password"
//                           className="
//                             text-[10px]
//                             font-medium
//                             text-violet-400
//                             transition
//                             hover:text-violet-300
//                           "
//                         >
//                           Forgot password?
//                         </Link>
//                       </div>

//                       <div className="group relative">
//                         <IconLock
//                           className="
//                             pointer-events-none absolute
//                             left-3.5 top-1/2
//                             h-4 w-4
//                             -translate-y-1/2
//                             text-white/25
//                             transition-colors
//                             group-focus-within:text-violet-400
//                           "
//                         />

//                         <input
//                           id="password"
//                           type={showPassword ? "text" : "password"}
//                           autoComplete="current-password"
//                           placeholder="Enter your password"
//                           value={password}
//                           onChange={(e) => setPassword(e.target.value)}
//                           className="
//                             h-[46px]
//                             w-full
//                             rounded-xl
//                             border border-white/[0.08]
//                             bg-white/[0.035]
//                             pl-10 pr-11
//                             text-[13px]
//                             text-white
//                             placeholder:text-white/20
//                             outline-none
//                             transition-all
//                             duration-200
//                             hover:border-white/[0.13]
//                             focus:border-violet-400/50
//                             focus:bg-violet-500/[0.035]
//                             focus:ring-4
//                             focus:ring-violet-500/10
//                           "
//                         />

//                         <button
//                           type="button"
//                           onClick={() =>
//                             setShowPassword((value) => !value)
//                           }
//                           className="
//                             absolute right-2.5 top-1/2
//                             -translate-y-1/2
//                             rounded-lg p-1.5
//                             text-white/30
//                             transition
//                             hover:bg-white/5
//                             hover:text-violet-300
//                           "
//                           aria-label={
//                             showPassword
//                               ? "Hide password"
//                               : "Show password"
//                           }
//                         >
//                           {showPassword ? (
//                             <IconEyeOff className="h-4 w-4" />
//                           ) : (
//                             <IconEye className="h-4 w-4" />
//                           )}
//                         </button>
//                       </div>
//                     </div>

//                     {/* Remember */}
//                     <label className="flex cursor-pointer items-center gap-2 select-none">
//                       <div className="relative">
//                         <input
//                           type="checkbox"
//                           checked={remember}
//                           onChange={(e) =>
//                             setRemember(e.target.checked)
//                           }
//                           className="
//                             peer
//                             h-4 w-4
//                             cursor-pointer
//                             appearance-none
//                             rounded-[5px]
//                             border border-white/15
//                             bg-white/[0.04]
//                             transition
//                             checked:border-violet-500
//                             checked:bg-violet-600
//                           "
//                         />

//                         <IconCheck
//                           className="
//                             pointer-events-none
//                             absolute left-1/2 top-1/2
//                             h-2.5 w-2.5
//                             -translate-x-1/2
//                             -translate-y-1/2
//                             text-white
//                             opacity-0
//                             peer-checked:opacity-100
//                           "
//                           stroke={3}
//                         />
//                       </div>

//                       <span className="text-[11px] text-white/40">
//                         Remember me
//                       </span>
//                     </label>

//                     {/* Button */}
//                     <motion.button
//                       type="submit"
//                       disabled={loading}
//                       whileHover={{
//                         y: -2,
//                         scale: 1.005,
//                       }}
//                       whileTap={{
//                         scale: 0.985,
//                       }}
//                       className="
//                         group
//                         relative
//                         mt-1
//                         flex
//                         h-[48px]
//                         w-full
//                         items-center
//                         justify-center
//                         gap-2
//                         overflow-hidden
//                         rounded-xl
//                         border border-violet-300/20
//                         bg-gradient-to-r
//                         from-violet-600
//                         via-purple-600
//                         to-violet-500
//                         text-[13px]
//                         font-semibold
//                         text-white
//                         shadow-[0_15px_40px_-12px_rgba(139,92,246,0.8)]
//                         transition-all
//                         duration-200
//                         hover:shadow-[0_20px_50px_-12px_rgba(139,92,246,0.95)]
//                         disabled:cursor-not-allowed
//                         disabled:opacity-60
//                       "
//                     >
//                       {/* Button shine */}
//                       <span
//                         className="
//                           pointer-events-none
//                           absolute inset-0
//                           -translate-x-full
//                           bg-gradient-to-r
//                           from-transparent
//                           via-white/20
//                           to-transparent
//                           transition-transform
//                           duration-700
//                           group-hover:translate-x-full
//                         "
//                       />

//                       <span className="relative z-10 flex items-center gap-2">
//                         {loading ? (
//                           <>
//                             <IconLoader2 className="h-4 w-4 animate-spin" />
//                             Signing in...
//                           </>
//                         ) : (
//                           <>
//                             Sign In
//                             <IconArrowRight
//                               className="h-4 w-4 transition-transform group-hover:translate-x-1"
//                               stroke={2.3}
//                             />
//                           </>
//                         )}
//                       </span>
//                     </motion.button>
//                   </motion.form>

//                   {/* Divider */}
//                   <div className="my-5 flex items-center gap-3">
//                     <div className="h-px flex-1 bg-white/[0.07]" />
//                     <span className="text-[9px] uppercase tracking-[0.15em] text-white/20">
//                       Secure access
//                     </span>
//                     <div className="h-px flex-1 bg-white/[0.07]" />
//                   </div>

//                   {/* Security */}
//                   <div className="flex items-center justify-center gap-2 text-[10px] text-white/30">
//                     <IconCircleCheck className="h-3.5 w-3.5 text-emerald-400/70" />
//                     <span>Encrypted authentication</span>
//                     <span className="text-white/10">•</span>
//                     <IconShieldCheck className="h-3.5 w-3.5 text-violet-400/70" />
//                     <span>Secure session</span>
//                   </div>

//                   {/* Signup */}
//                   <motion.p
//                     className="mt-5 text-center text-[11px] text-white/35"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.7 }}
//                   >
//                     Don&apos;t have an account?{" "}
//                     <Link
//                       href="/signup"
//                       className="
//                         font-semibold
//                         text-violet-400
//                         transition
//                         hover:text-violet-300
//                       "
//                     >
//                       Create account
//                     </Link>
//                   </motion.p>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Bottom security */}
//             <motion.div
//               className="mt-4 flex items-center justify-center gap-1.5 text-[9px] text-white/20"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.9 }}
//             >
//               <IconShieldCheck className="h-3 w-3 text-violet-400/60" />
//               Your data is encrypted and protected
//             </motion.div>
//           </div>
//         </motion.section>
//       </div>
//     </main>
//   );
// }

"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconLoader2,
  IconMail,
  IconLock,
  IconShieldCheck,
  IconAlertCircle,
  IconSparkles,
  IconBolt,
  IconEye,
  IconEyeOff,
  IconArrowRight,
  IconCode,
  IconCheck,
  IconBrandGithub,
  IconBug,
  IconScan,
  IconCircleCheck,
  IconGitBranch,
  IconBraces,
} from "@tabler/icons-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { signIn, setAuthActionLoading } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setAuthActionLoading("Signing in to your account...");
    setError("");

    try {
      await signIn(email, password, remember);

      setAuthActionLoading(null);
      setLoading(false);

      router.replace("/dashboard");
    } catch {
      setError("Invalid credentials. Try again.");
      setAuthActionLoading(null);
      setLoading(false);
    }
  }

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-[#F7F4FF]">
      {/* ============================================================
          PREMIUM LAVENDER AURORA BACKGROUND
      ============================================================ */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main background */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse 70% 60% at 8% 20%,
                rgba(122,90,248,0.17) 0%,
                transparent 58%
              ),
              radial-gradient(
                ellipse 65% 60% at 92% 80%,
                rgba(155,124,255,0.19) 0%,
                transparent 58%
              ),
              radial-gradient(
                ellipse 45% 45% at 55% 0%,
                rgba(122,90,248,0.10) 0%,
                transparent 65%
              ),
              linear-gradient(
                145deg,
                #FAF8FF 0%,
                #F7F4FF 42%,
                #EEE7FF 100%
              )
            `,
          }}
        />

        {/* Aurora left */}
        <motion.div
          className="
            absolute
            -left-40
            top-[18%]
            h-[430px]
            w-[430px]
            rounded-full
            bg-[#7A5AF8]/20
            blur-[110px]
          "
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Aurora right */}
        <motion.div
          className="
            absolute
            -right-32
            bottom-[5%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#9B7CFF]/25
            blur-[120px]
          "
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Top glow */}
        <motion.div
          className="
            absolute
            left-1/2
            top-[-160px]
            h-[330px]
            w-[330px]
            -translate-x-1/2
            rounded-full
            bg-[#9B7CFF]/15
            blur-[100px]
          "
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.45, 0.8, 0.45],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Bottom glow */}
        <motion.div
          className="
            absolute
            bottom-[-150px]
            left-[38%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#7A5AF8]/10
            blur-[100px]
          "
          animate={{
            x: [0, 30, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Premium grid */}
        <div
          className="absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(122,90,248,0.055) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(122,90,248,0.055) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "52px 52px",
            maskImage:
              "radial-gradient(ellipse at center, black 15%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 15%, transparent 75%)",
          }}
        />

        {/* Soft decorative circles */}
        <div className="absolute left-[4%] top-[15%] h-2 w-2 rounded-full bg-[#7A5AF8]/30 shadow-[0_0_20px_5px_rgba(122,90,248,0.2)]" />

        <div className="absolute right-[8%] top-[22%] h-1.5 w-1.5 rounded-full bg-[#9B7CFF]/40 shadow-[0_0_18px_4px_rgba(155,124,255,0.25)]" />

        <div className="absolute bottom-[18%] left-[46%] h-1.5 w-1.5 rounded-full bg-[#7A5AF8]/30" />
      </div>

      {/* ============================================================
          MAIN LAYOUT
      ============================================================ */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1500px] flex-col lg:flex-row">
        {/* ============================================================
            LEFT PANEL
        ============================================================ */}
        <motion.section
          className="
            relative
            hidden
            h-full
            min-h-0
            flex-1
            flex-col
            justify-center
            overflow-hidden
            px-10
            py-8
            lg:flex
            xl:px-16
          "
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Brand */}
          <motion.div
            className="mb-6 flex items-center gap-3"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div
              className="
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-[14px]
                bg-gradient-to-br
                from-[#7A5AF8]
                to-[#9B7CFF]
                text-white
                shadow-[0_14px_35px_-8px_rgba(122,90,248,0.55)]
              "
            >
              <div className="absolute inset-[1px] rounded-[13px] bg-gradient-to-br from-white/25 to-transparent" />

              <IconCode
                className="relative z-10 h-5 w-5"
                stroke={2.2}
              />
            </div>

            <div>
              <div className="text-[17px] font-bold tracking-tight text-[#18181B]">
                CodeSentry{" "}
                <span className="text-[#7A5AF8]">AI</span>
              </div>

              <div className="text-[9px] uppercase tracking-[0.16em] text-[#5B6172]/50">
                Intelligent Code Security
              </div>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div
              className="
                mb-3
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-[#7A5AF8]/10
                bg-white/60
                px-3
                py-1.5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.13em]
                text-[#7A5AF8]
                shadow-[0_8px_25px_-12px_rgba(122,90,248,0.3)]
                backdrop-blur-md
              "
            >
              <IconSparkles className="h-3.5 w-3.5" />
              AI-powered development
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <h1
              className="
                max-w-[570px]
                text-[40px]
                font-bold
                leading-[1.06]
                tracking-[-0.035em]
                text-[#18181B]
                xl:text-[48px]
              "
            >
              AI-powered code reviews that build{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#7A5AF8]
                  via-[#8566F8]
                  to-[#9B7CFF]
                  bg-clip-text
                  text-transparent
                "
              >
                better products.
              </span>
            </h1>

            <p
              className="
                mt-4
                max-w-[475px]
                text-[14px]
                leading-6
                text-[#5B6172]
                xl:text-[15px]
              "
            >
              Automatically review code, detect vulnerabilities, identify
              risky patterns, and get intelligent AI recommendations before
              your code reaches production.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            className="mt-6 flex max-w-[620px] gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {[
              {
                icon: IconShieldCheck,
                title: "Smart Security",
                text: "Detect vulnerabilities",
              },
              {
                icon: IconSparkles,
                title: "AI Insights",
                text: "Improve code quality",
              },
              {
                icon: IconBolt,
                title: "Ship Faster",
                text: "Automate reviews",
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  flex
                  min-w-0
                  flex-1
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-[#7A5AF8]/10
                  bg-white/55
                  px-3.5
                  py-3
                  shadow-[0_15px_40px_-25px_rgba(122,90,248,0.35)]
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#7A5AF8]/10
                    bg-[#7A5AF8]/[0.08]
                  "
                >
                  <feature.icon
                    className="h-4 w-4 text-[#7A5AF8]"
                    stroke={1.8}
                  />
                </div>

                <div className="min-w-0">
                  <div className="truncate text-[11px] font-semibold text-[#18181B]">
                    {feature.title}
                  </div>

                  <div className="truncate text-[9px] text-[#5B6172]">
                    {feature.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ========================================================
              3D CODE CARD
          ======================================================== */}
          <motion.div
            className="relative mt-6 h-[230px] w-full max-w-[600px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.65,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Purple floor shadow */}
            <div
              className="
                absolute
                bottom-0
                left-1/2
                h-12
                w-[80%]
                -translate-x-1/2
                rounded-full
                bg-[#7A5AF8]/20
                blur-3xl
              "
            />

            {/* Main card */}
            <motion.div
              animate={{
                y: [0, -7, 0],
                rotateX: [1, 0, 1],
                rotateY: [-1, 1, -1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1200px",
              }}
              className="
                absolute
                left-[7%]
                top-2
                h-[195px]
                w-[86%]
                overflow-hidden
                rounded-[24px]
                border
                border-[#7A5AF8]/10
                bg-white/70
                shadow-[0_30px_70px_-25px_rgba(122,90,248,0.38)]
                backdrop-blur-2xl
              "
            >
              {/* Window header */}
              <div
                className="
                  flex
                  h-10
                  items-center
                  justify-between
                  border-b
                  border-[#7A5AF8]/[0.08]
                  bg-white/40
                  px-4
                "
              >
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#FF7B7B]/70" />
                  <span className="h-2 w-2 rounded-full bg-[#F4C95D]/80" />
                  <span className="h-2 w-2 rounded-full bg-[#62C98C]/80" />
                </div>

                <div className="flex items-center gap-2 text-[9px] text-[#5B6172]/50">
                  <IconBraces className="h-3 w-3 text-[#7A5AF8]" />
                  code-review.ts
                </div>

                <IconBrandGithub className="h-3.5 w-3.5 text-[#18181B]/30" />
              </div>

              {/* Code */}
              <div className="relative p-5 font-mono text-[10px] leading-[1.9]">
                <div>
                  <span className="text-[#7A5AF8]">const</span>{" "}
                  <span className="text-[#5B6172]">review</span>{" "}
                  <span className="text-[#18181B]/30">=</span>{" "}
                  <span className="text-[#9B7CFF]">await</span>
                </div>

                <div className="pl-4">
                  <span className="text-[#18181B]/60">
                    codeSentry
                  </span>
                  <span className="text-[#18181B]/25">.</span>
                  <span className="text-[#7A5AF8]">analyze</span>
                  <span className="text-[#18181B]/25">(</span>
                </div>

                <div className="pl-8 text-[#7A5AF8]/80">
                  repository
                </div>

                <div className="pl-4 text-[#18181B]/30">);</div>

                <div className="mt-1.5">
                  <span className="text-[#7A5AF8]">if</span>
                  <span className="text-[#18181B]/30"> (</span>
                  <span className="text-[#5B6172]">
                    review.secure
                  </span>
                  <span className="text-[#18181B]/30">)</span>
                </div>

                <div className="pl-4 text-emerald-600/80">
                  ✓ Ready for production
                </div>
              </div>

              {/* Scan line */}
              <motion.div
                className="
                  absolute
                  left-0
                  right-0
                  top-10
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#7A5AF8]
                  to-transparent
                  shadow-[0_0_14px_3px_rgba(122,90,248,0.35)]
                "
                animate={{
                  y: [0, 145, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Glow overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#7A5AF8]/[0.04]" />
            </motion.div>

            {/* Vulnerability floating card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [1, -1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-1
                top-0
                z-20
                flex
                w-[145px]
                items-center
                gap-2.5
                rounded-2xl
                border
                border-[#7A5AF8]/10
                bg-white/90
                p-3
                shadow-[0_20px_45px_-18px_rgba(122,90,248,0.35)]
                backdrop-blur-xl
              "
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#7A5AF8]/[0.08]">
                <IconBug className="h-4 w-4 text-[#7A5AF8]" />
              </div>

              <div>
                <div className="text-[9px] font-semibold text-[#18181B]">
                  Security scan
                </div>

                <div className="text-[8px] text-emerald-600">
                  No critical issues
                </div>
              </div>
            </motion.div>

            {/* AI floating card */}
            <motion.div
              animate={{
                y: [0, 9, 0],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-2
                left-0
                z-20
                flex
                w-[150px]
                items-center
                gap-2.5
                rounded-2xl
                border
                border-[#7A5AF8]/10
                bg-white/90
                p-3
                shadow-[0_20px_45px_-18px_rgba(122,90,248,0.35)]
                backdrop-blur-xl
              "
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#7A5AF8]/[0.08]">
                <IconScan className="h-4 w-4 text-[#7A5AF8]" />
              </div>

              <div>
                <div className="text-[9px] font-semibold text-[#18181B]">
                  AI Analysis
                </div>

                <div className="text-[8px] text-[#5B6172]">
                  98.7% confidence
                </div>
              </div>
            </motion.div>

            {/* Floating purple cube */}
            <motion.div
              animate={{
                rotate: [0, 360],
                y: [0, -6, 0],
              }}
              transition={{
                rotate: {
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                absolute
                bottom-4
                right-[13%]
                h-8
                w-8
                rotate-12
                rounded-lg
                border
                border-[#7A5AF8]/20
                bg-gradient-to-br
                from-[#7A5AF8]/30
                to-[#9B7CFF]/10
                shadow-[0_0_30px_rgba(122,90,248,0.22)]
              "
            />
          </motion.div>

          {/* Trust */}
          <motion.div
            className="mt-3 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="text-[10px] text-[#5B6172]/55">
              Trusted by developers worldwide
            </span>

            <span className="h-px w-7 bg-[#7A5AF8]/10" />

            <div className="flex gap-4 text-[10px] font-semibold text-[#5B6172]/35">
              <span>GitHub</span>
              <span>GitLab</span>
              <span>Vercel</span>
              <span>Microsoft</span>
            </div>
          </motion.div>
        </motion.section>

        {/* ============================================================
            RIGHT LOGIN PANEL
        ============================================================ */}
        <motion.section
          className="
            flex
            h-full
            min-h-0
            w-full
            flex-1
            items-center
            justify-center
            overflow-hidden
            px-4
            py-4
            sm:px-6
            lg:px-10
            xl:px-16
          "
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="w-full max-w-[430px]">
            {/* Mobile Logo */}
            <motion.div
              className="mb-3 flex items-center justify-center gap-2.5 lg:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-[#7A5AF8]
                  to-[#9B7CFF]
                  text-white
                  shadow-[0_10px_25px_-6px_rgba(122,90,248,0.5)]
                "
              >
                <IconCode className="h-4 w-4" />
              </div>

              <span className="text-[16px] font-bold text-[#18181B]">
                CodeSentry{" "}
                <span className="text-[#7A5AF8]">AI</span>
              </span>
            </motion.div>

            {/* Card */}
            <div className="relative">
              {/* Outer purple glow */}
              <div
                className="
                  absolute
                  -inset-6
                  -z-10
                  rounded-[45px]
                  bg-[#7A5AF8]/15
                  blur-3xl
                "
              />

              {/* 3D bottom shadow */}
              <div
                className="
                  absolute
                  bottom-[-8px]
                  left-[8%]
                  right-[8%]
                  h-8
                  rounded-full
                  bg-[#7A5AF8]/20
                  blur-2xl
                "
              />

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/70
                  bg-white/[0.72]
                  p-6
                  shadow-[0_30px_90px_-30px_rgba(122,90,248,0.38)]
                  backdrop-blur-[40px]
                  sm:p-8
                "
              >
                {/* Glass reflection */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-[-30%]
                    top-[-55%]
                    h-[180%]
                    w-[70%]
                    rotate-[25deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/50
                    to-transparent
                  "
                />

                {/* Top purple line */}
                <div
                  className="
                    absolute
                    left-[12%]
                    right-[12%]
                    top-0
                    h-[2px]
                    rounded-full
                    bg-gradient-to-r
                    from-transparent
                    via-[#7A5AF8]/50
                    to-transparent
                  "
                />

                <div className="relative z-10">
                  {/* Secure badge */}
                  <motion.div
                    className="mb-5 flex justify-end"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-[#7A5AF8]/10
                        bg-white/70
                        px-3
                        py-1.5
                        text-[10px]
                        font-medium
                        text-[#5B6172]
                        shadow-[0_6px_20px_-10px_rgba(122,90,248,0.3)]
                        backdrop-blur-sm
                      "
                    >
                      <IconShieldCheck
                        className="h-3.5 w-3.5 text-[#7A5AF8]"
                        stroke={2}
                      />
                      Secure Login
                    </span>
                  </motion.div>

                  {/* Heading */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h2
                      className="
                        text-[26px]
                        font-bold
                        tracking-[-0.025em]
                        text-[#18181B]
                        sm:text-[28px]
                      "
                    >
                      Welcome back{" "}
                      <motion.span
                        className="inline-block"
                        animate={{
                          rotate: [0, 14, -8, 14, 0],
                        }}
                        transition={{
                          duration: 1.4,
                          delay: 1.1,
                        }}
                      >
                        👋
                      </motion.span>
                    </h2>

                    <p className="mt-1.5 text-[13px] text-[#5B6172]">
                      Sign in to continue to your account
                    </p>
                  </motion.div>

                  {/* Error */}
                  <AnimatePresence mode="wait">
                    {error && (
                      <motion.div
                        key={error}
                        initial={{
                          opacity: 0,
                          height: 0,
                          y: -5,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        className="overflow-hidden"
                      >
                        <div
                          className="
                            mt-4
                            flex
                            items-start
                            gap-2.5
                            rounded-xl
                            border
                            border-red-200
                            bg-red-50
                            px-3
                            py-2.5
                          "
                        >
                          <IconAlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />

                          <p className="text-[11px] leading-5 text-red-600">
                            {error}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* FORM */}
                  <motion.form
                    onSubmit={handleSubmit}
                    className="mt-5 space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                  >
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="
                          mb-1.5
                          block
                          text-[12px]
                          font-semibold
                          text-[#18181B]
                        "
                      >
                        Email address
                      </label>

                      <div className="group relative">
                        <IconMail
                          className="
                            pointer-events-none
                            absolute
                            left-3.5
                            top-1/2
                            h-4
                            w-4
                            -translate-y-1/2
                            text-[#5B6172]/45
                            transition-colors
                            group-focus-within:text-[#7A5AF8]
                          "
                        />

                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          autoFocus
                          className="
                            h-[46px]
                            w-full
                            rounded-xl
                            border
                            border-[#7A5AF8]/[0.13]
                            bg-white/75
                            pl-10
                            pr-4
                            text-[13px]
                            text-[#18181B]
                            placeholder:text-[#5B6172]/40
                            outline-none
                            shadow-[0_5px_20px_-12px_rgba(122,90,248,0.3)]
                            transition-all
                            duration-200
                            hover:border-[#7A5AF8]/25
                            focus:border-[#7A5AF8]
                            focus:bg-white
                            focus:ring-4
                            focus:ring-[#7A5AF8]/10
                          "
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <div className="mb-1.5 flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="
                            text-[12px]
                            font-semibold
                            text-[#18181B]
                          "
                        >
                          Password
                        </label>

                        <Link
                          href="/forgot-password"
                          className="
                            text-[11px]
                            font-semibold
                            text-[#7A5AF8]
                            transition
                            hover:text-[#9B7CFF]
                            hover:underline
                            underline-offset-2
                          "
                        >
                          Forgot password?
                        </Link>
                      </div>

                      <div className="group relative">
                        <IconLock
                          className="
                            pointer-events-none
                            absolute
                            left-3.5
                            top-1/2
                            h-4
                            w-4
                            -translate-y-1/2
                            text-[#5B6172]/45
                            transition-colors
                            group-focus-within:text-[#7A5AF8]
                          "
                        />

                        <input
                          id="password"
                          type={
                            showPassword ? "text" : "password"
                          }
                          autoComplete="current-password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) =>
                            setPassword(e.target.value)
                          }
                          className="
                            h-[46px]
                            w-full
                            rounded-xl
                            border
                            border-[#7A5AF8]/[0.13]
                            bg-white/75
                            pl-10
                            pr-11
                            text-[13px]
                            text-[#18181B]
                            placeholder:text-[#5B6172]/40
                            outline-none
                            shadow-[0_5px_20px_-12px_rgba(122,90,248,0.3)]
                            transition-all
                            duration-200
                            hover:border-[#7A5AF8]/25
                            focus:border-[#7A5AF8]
                            focus:bg-white
                            focus:ring-4
                            focus:ring-[#7A5AF8]/10
                          "
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowPassword((v) => !v)
                          }
                          className="
                            absolute
                            right-2.5
                            top-1/2
                            -translate-y-1/2
                            rounded-lg
                            p-1.5
                            text-[#5B6172]/60
                            transition
                            hover:bg-[#7A5AF8]/[0.06]
                            hover:text-[#7A5AF8]
                          "
                          aria-label={
                            showPassword
                              ? "Hide password"
                              : "Show password"
                          }
                        >
                          {showPassword ? (
                            <IconEyeOff className="h-4 w-4" />
                          ) : (
                            <IconEye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Remember */}
                    <label className="flex cursor-pointer items-center gap-2.5 select-none">
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          checked={remember}
                          onChange={(e) =>
                            setRemember(e.target.checked)
                          }
                          className="
                            peer
                            h-4
                            w-4
                            cursor-pointer
                            appearance-none
                            rounded-[5px]
                            border
                            border-[#7A5AF8]/25
                            bg-white/80
                            transition
                            checked:border-[#7A5AF8]
                            checked:bg-[#7A5AF8]
                          "
                        />

                        <IconCheck
                          className="
                            pointer-events-none
                            absolute
                            left-1/2
                            top-1/2
                            h-2.5
                            w-2.5
                            -translate-x-1/2
                            -translate-y-1/2
                            text-white
                            opacity-0
                            transition
                            peer-checked:opacity-100
                          "
                          stroke={3}
                        />
                      </div>

                      <span className="text-[11px] text-[#5B6172]">
                        Remember me
                      </span>
                    </label>

                    {/* Sign In */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{
                        y: -2,
                        boxShadow:
                          "0 18px 45px -10px rgba(122,90,248,0.55)",
                      }}
                      whileTap={{
                        scale: 0.985,
                      }}
                      className="
                        group
                        relative
                        mt-1
                        flex
                        h-[48px]
                        w-full
                        items-center
                        justify-center
                        gap-2
                        overflow-hidden
                        rounded-xl
                        border
                        border-[#7A5AF8]/20
                        bg-gradient-to-r
                        from-[#7A5AF8]
                        to-[#9B7CFF]
                        text-[13px]
                        font-semibold
                        text-white
                        shadow-[0_14px_35px_-9px_rgba(122,90,248,0.55)]
                        transition-all
                        duration-200
                        hover:shadow-[0_20px_45px_-9px_rgba(122,90,248,0.65)]
                        disabled:cursor-not-allowed
                        disabled:opacity-65
                      "
                    >
                      {/* Shine */}
                      <span
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          -translate-x-full
                          bg-gradient-to-r
                          from-transparent
                          via-white/25
                          to-transparent
                          transition-transform
                          duration-700
                          group-hover:translate-x-full
                        "
                      />

                      <span className="relative z-10 flex items-center gap-2">
                        {loading ? (
                          <>
                            <IconLoader2 className="h-4 w-4 animate-spin" />
                            Signing in...
                          </>
                        ) : (
                          <>
                            Sign In
                            <IconArrowRight
                              className="
                                h-4 w-4
                                transition-transform
                                duration-200
                                group-hover:translate-x-1
                              "
                              stroke={2.2}
                            />
                          </>
                        )}
                      </span>
                    </motion.button>
                  </motion.form>

                  {/* Secure divider */}
                  <div className="my-5 flex items-center gap-3">
                    <div className="h-px flex-1 bg-[#7A5AF8]/[0.08]" />

                    <span className="text-[8px] font-medium uppercase tracking-[0.15em] text-[#5B6172]/40">
                      Secure access
                    </span>

                    <div className="h-px flex-1 bg-[#7A5AF8]/[0.08]" />
                  </div>

                  {/* Security */}
                  <div className="flex items-center justify-center gap-2 text-[9px] text-[#5B6172]/60">
                    <IconCircleCheck className="h-3.5 w-3.5 text-emerald-500/70" />
                    <span>Encrypted authentication</span>

                    <span className="text-[#7A5AF8]/20">•</span>

                    <IconShieldCheck className="h-3.5 w-3.5 text-[#7A5AF8]/70" />
                    <span>Secure session</span>
                  </div>

                  {/* Signup */}
                  <motion.p
                    className="
                      mt-5
                      text-center
                      text-[11px]
                      text-[#5B6172]
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/signup"
                      className="
                        font-semibold
                        text-[#7A5AF8]
                        transition
                        hover:text-[#9B7CFF]
                      "
                    >
                      Create account
                    </Link>
                  </motion.p>
                </div>
              </motion.div>
            </div>

            {/* Bottom text */}
            <motion.div
              className="
                mt-3
                flex
                items-center
                justify-center
                gap-1.5
                text-[9px]
                text-[#5B6172]/55
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <IconShieldCheck className="h-3 w-3 text-[#7A5AF8]" />
              Your data is encrypted and secure
            </motion.div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}