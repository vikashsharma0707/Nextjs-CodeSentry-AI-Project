

// // "use client";

// // import { useState, type FormEvent } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { useRouter } from "next/navigation";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   IconBrandGithub,
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

// // type Tab = "email" | "github";

// // export default function LoginPage() {
// //   const { signIn, signInWithGithub, setAuthActionLoading } = useAuth();
// //   const router = useRouter();

// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [remember, setRemember] = useState(true);
// //   const [tab, setTab] = useState<Tab>("email");

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
// //       await signIn(email, password);
// //       router.replace("/dashboard");
// //     } catch {
// //       setError("Invalid credentials. Try again.");
// //       setAuthActionLoading(null);
// //       setLoading(false);
// //     }
// //   }

// //   function handleGithubLogin() {
// //     setAuthActionLoading("Redirecting to GitHub...");
// //     try {
// //       signInWithGithub();
// //     } catch {
// //       setError("Could not redirect to GitHub. Try again.");
// //       setAuthActionLoading(null);
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
// //           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
// //                 transition={{ delay: 0.55 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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

// //           {/* 3D Illustration — from /public/images/LoginBackgroundImage.png */}
// //           <motion.div
// //             className="relative mt-12 w-full max-w-lg"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// //           >
// //             {/* Glow behind illustration */}
// //             <div
// //               className="absolute -inset-8 -z-10 rounded-[48px] opacity-60 blur-3xl"
// //               style={{
// //                 background: "radial-gradient(circle at 50% 40%, rgba(122,90,248,0.35), transparent 70%)",
// //               }}
// //             />

// //             {/* Floating container */}
// //             <motion.div
// //               animate={{ y: [0, -10, 0] }}
// //               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
// //               className="relative"
// //             >
// //               <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border border-[rgba(122,90,248,0.12)] bg-white/30 shadow-[0_32px_80px_-24px_rgba(122,90,248,0.35)] backdrop-blur-sm">
// //                 <Image
// //                   src="/images/LoginBackgroundImage.png"
// //                   alt="CodeSentry AI — AI-powered code review illustration"
// //                   fill
// //                   priority
// //                   sizes="(max-width: 1024px) 0px, 560px"
// //                   className="object-contain object-center"
// //                 />
// //                 {/* Glass reflection overlay */}
// //                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
// //               </div>

// //               {/* Soft shadow underneath */}
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
// //           transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
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
// //               transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

// //               {/* Login Tabs */}
// //               <motion.div
// //                 className="mt-7 flex gap-1 rounded-2xl border border-[rgba(122,90,248,0.1)] bg-[#F6F2FF]/80 p-1"
// //                 initial={{ opacity: 0, y: 10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.55, duration: 0.4 }}
// //               >
// //                 {(
// //                   [
// //                     { id: "email" as Tab, label: "Email Login", icon: IconMail },
// //                     { id: "github" as Tab, label: "GitHub Login", icon: IconBrandGithub },
// //                   ] as const
// //                 ).map((t) => (
// //                   <button
// //                     key={t.id}
// //                     type="button"
// //                     onClick={() => {
// //                       setTab(t.id);
// //                       setError("");
// //                     }}
// //                     className={`relative flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-[13px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40 ${
// //                       tab === t.id ? "text-[#7A5AF8]" : "text-[#5B6172] hover:text-[#18181B]"
// //                     }`}
// //                   >
// //                     {tab === t.id && (
// //                       <motion.span
// //                         layoutId="login-tab"
// //                         className="absolute inset-0 rounded-xl bg-white shadow-sm"
// //                         transition={{ type: "spring", stiffness: 380, damping: 30 }}
// //                       />
// //                     )}
// //                     <t.icon className="relative z-10 h-4 w-4" stroke={1.8} />
// //                     <span className="relative z-10">{t.label}</span>
// //                   </button>
// //                 ))}
// //               </motion.div>

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
// //               {tab === "email" && (
// //                 <motion.form
// //                   onSubmit={handleSubmit}
// //                   className="mt-6 space-y-4"
// //                   initial={{ opacity: 0, y: 10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: 0.1, duration: 0.3 }}
// //                 >
// //                   {/* Email Input */}
// //                   <motion.div
// //                     initial={{ opacity: 0, y: 10 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: 0.15 }}
// //                   >
// //                     <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-[#18181B]">
// //                       Email address
// //                     </label>
// //                     <div className="relative group">
// //                       <IconMail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6172]/60 transition-colors group-focus-within:text-[#7A5AF8]" />
// //                       <input
// //                         id="email"
// //                         type="email"
// //                         autoComplete="email"
// //                         placeholder="Enter your email"
// //                         value={email}
// //                         onChange={(e) => setEmail(e.target.value)}
// //                         className="w-full rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/80 py-3 pl-10 pr-4 text-[14px] text-[#18181B] placeholder:text-[#5B6172]/50 outline-none transition-all duration-200 focus:border-[#7A5AF8] focus:ring-4 focus:ring-[#7A5AF8]/12 focus:bg-white"
// //                         autoFocus
// //                       />
// //                     </div>
// //                   </motion.div>

// //                   {/* Password Input */}
// //                   <motion.div
// //                     initial={{ opacity: 0, y: 10 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: 0.2 }}
// //                   >
// //                     <div className="mb-1.5 flex items-center justify-between">
// //                       <label htmlFor="password" className="text-[13px] font-medium text-[#18181B]">
// //                         Password
// //                       </label>
// //                       <Link
// //                         href="/forgot-password"
// //                         className="text-[12px] font-medium text-[#7A5AF8] transition hover:text-[#9B7CFF] hover:underline underline-offset-2"
// //                       >
// //                         Forgot password?
// //                       </Link>
// //                     </div>
// //                     <div className="relative group">
// //                       <IconLock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6172]/60 transition-colors group-focus-within:text-[#7A5AF8]" />
// //                       <input
// //                         id="password"
// //                         type={showPassword ? "text" : "password"}
// //                         autoComplete="current-password"
// //                         placeholder="Enter your password"
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                         className="w-full rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/80 py-3 pl-10 pr-11 text-[14px] text-[#18181B] placeholder:text-[#5B6172]/50 outline-none transition-all duration-200 focus:border-[#7A5AF8] focus:ring-4 focus:ring-[#7A5AF8]/12 focus:bg-white"
// //                       />
// //                       <button
// //                         type="button"
// //                         onClick={() => setShowPassword((v) => !v)}
// //                         className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-[#5B6172] transition hover:text-[#7A5AF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
// //                         aria-label={showPassword ? "Hide password" : "Show password"}
// //                       >
// //                         {showPassword ? (
// //                           <IconEyeOff className="h-4 w-4" stroke={1.8} />
// //                         ) : (
// //                           <IconEye className="h-4 w-4" stroke={1.8} />
// //                         )}
// //                       </button>
// //                     </div>
// //                   </motion.div>

// //                   {/* Remember Me */}
// //                   <motion.label
// //                     className="flex cursor-pointer items-center gap-2.5 select-none"
// //                     initial={{ opacity: 0 }}
// //                     animate={{ opacity: 1 }}
// //                     transition={{ delay: 0.25 }}
// //                   >
// //                     <div className="relative flex items-center">
// //                       <input
// //                         type="checkbox"
// //                         checked={remember}
// //                         onChange={(e) => setRemember(e.target.checked)}
// //                         className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[rgba(122,90,248,0.3)] bg-white/60 transition checked:border-[#7A5AF8] checked:bg-[#7A5AF8]"
// //                       />
// //                       <IconCheck className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition peer-checked:opacity-100" stroke={3} />
// //                     </div>
// //                     <span className="text-[13px] text-[#5B6172]">Remember me</span>
// //                   </motion.label>

// //                   {/* Sign In Button */}
// //                   <motion.button
// //                     type="submit"
// //                     disabled={loading}
// //                     whileHover={{ y: -2, boxShadow: "0 16px 40px -8px rgba(122,90,248,0.55)" }}
// //                     whileTap={{ scale: 0.98 }}
// //                     className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_32px_-8px_rgba(122,90,248,0.5)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/50 focus-visible:ring-offset-2"
// //                     style={{ background: "linear-gradient(135deg, #7A5AF8 0%, #9B7CFF 100%)" }}
// //                     initial={{ opacity: 0, y: 10 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: 0.3 }}
// //                   >
// //                     {/* Shimmer effect */}
// //                     <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
// //                     {loading ? (
// //                       <>
// //                         <IconLoader2 className="h-4 w-4 animate-spin" />
// //                         Signing in…
// //                       </>
// //                     ) : (
// //                       <>
// //                         Sign In
// //                         <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" stroke={2.2} />
// //                       </>
// //                     )}
// //                   </motion.button>
// //                 </motion.form>
// //               )}

// //               {/* ── GitHub Login Tab ── */}
// //               {tab === "github" && (
// //                 <motion.div
// //                   className="mt-6 space-y-4"
// //                   initial={{ opacity: 0, y: 10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: 0.1, duration: 0.3 }}
// //                 >
// //                   <p className="text-center text-[13px] leading-relaxed text-[#5B6172]">
// //                     Connect your GitHub account for one-click sign in and repository access.
// //                   </p>
// //                   <motion.button
// //                     type="button"
// //                     onClick={handleGithubLogin}
// //                     whileHover={{ y: -2, boxShadow: "0 12px 32px -12px rgba(122,90,248,0.3)" }}
// //                     whileTap={{ scale: 0.98 }}
// //                     className="group flex w-full items-center justify-center gap-2.5 rounded-xl border border-[rgba(122,90,248,0.14)] bg-white px-5 py-3.5 text-[15px] font-semibold text-[#18181B] shadow-sm transition-all duration-200 hover:border-[rgba(122,90,248,0.28)] hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
// //                   >
// //                     <IconBrandGithub className="h-5 w-5" stroke={1.8} />
// //                     Continue with GitHub
// //                   </motion.button>
// //                 </motion.div>
// //               )}

// //               {/* Divider + GitHub (Email tab only) */}
// //               {tab === "email" && (
// //                 <motion.div
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   transition={{ delay: 0.35 }}
// //                 >
// //                   <div className="my-6 flex items-center gap-3">
// //                     <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(122,90,248,0.15)] to-transparent" />
// //                     <span className="text-[11px] font-medium uppercase tracking-wider text-[#5B6172]/60">
// //                       or continue with
// //                     </span>
// //                     <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(122,90,248,0.15)] to-transparent" />
// //                   </div>

// //                   <motion.button
// //                     type="button"
// //                     onClick={handleGithubLogin}
// //                     whileHover={{ y: -2, boxShadow: "0 8px 24px -8px rgba(122,90,248,0.2)" }}
// //                     whileTap={{ scale: 0.98 }}
// //                     className="group flex w-full items-center justify-center gap-2.5 rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/60 px-5 py-3 text-[14px] font-semibold text-[#18181B] backdrop-blur-sm transition-all duration-200 hover:bg-white hover:border-[rgba(122,90,248,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
// //                   >
// //                     <IconBrandGithub className="h-[18px] w-[18px]" stroke={1.8} />
// //                     Continue with GitHub
// //                   </motion.button>
// //                 </motion.div>
// //               )}

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
// import Image from "next/image";
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
//       await signIn(email, password);
//       // Clear loading states on success (same pattern as registration)
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
//     <main className="relative flex min-h-screen overflow-hidden bg-[#F7F4FF]">
//       {/* ═══════════════════════════════════════════════════════════════════
//           BACKGROUND — Premium Lavender Aurora
//          ═══════════════════════════════════════════════════════════════════ */}
//       <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
//         {/* Base gradient */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(122,90,248,0.18) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 85% 70%, rgba(155,124,255,0.2) 0%, transparent 50%), linear-gradient(165deg, #F8F5FF 0%, #ECE3FF 100%)",
//           }}
//         />

//         {/* Subtle grid texture */}
//         <div
//           className="absolute inset-0 opacity-[0.35]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(122,90,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(122,90,248,0.06) 1px, transparent 1px)",
//             backgroundSize: "48px 48px",
//             maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
//           }}
//         />

//         {/* Floating blur orbs */}
//         <motion.div
//           className="absolute -left-24 top-1/4 h-[420px] w-[420px] rounded-full bg-[#7A5AF8]/20 blur-[100px]"
//           animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -right-20 bottom-1/4 h-[380px] w-[380px] rounded-full bg-[#B99EFF]/30 blur-[110px]"
//           animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
//           transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#9B7CFF]/15 blur-[90px]"
//           animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute bottom-0 right-1/3 h-[320px] w-[320px] rounded-full bg-[#7A5AF8]/10 blur-[80px]"
//           animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       {/* ═══════════════════════════════════════════════════════════════════
//           MAIN LAYOUT — Split Screen
//          ═══════════════════════════════════════════════════════════════════ */}
//       <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-stretch lg:min-h-screen lg:flex-row">
//         {/* ─── LEFT PANEL ─── */}
//         <motion.section
//           className="relative hidden flex-1 flex-col justify-center px-12 py-16 lg:flex"
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         >
//           {/* Brand Logo */}
//           <motion.div
//             className="mb-10 flex items-center gap-3"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A5AF8] to-[#9B7CFF] text-white shadow-[0_8px_28px_-6px_rgba(122,90,248,0.55)]">
//               <IconCode className="h-5 w-5" stroke={2.2} />
//             </div>
//             <span className="text-[17px] font-bold tracking-tight text-[#18181B]">
//               CodeSentry <span className="text-[#7A5AF8]">AI</span>
//             </span>
//           </motion.div>

//           {/* Hero Heading */}
//           <motion.h1
//             className="max-w-md text-[2.6rem] font-bold leading-[1.12] tracking-tight text-[#18181B]"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//           >
//             AI-Powered Code Reviews that build{" "}
//             <span className="bg-gradient-to-r from-[#7A5AF8] to-[#9B7CFF] bg-clip-text text-transparent">
//               better products
//             </span>
//           </motion.h1>

//           {/* Supporting paragraph */}
//           <motion.p
//             className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#5B6172]"
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//           >
//             Automated code reviews, security scanning, and intelligent insights — all in one place.
//           </motion.p>

//           {/* Feature Cards */}
//           <motion.ul
//             className="mt-10 space-y-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.5 }}
//           >
//             {[
//               {
//                 icon: IconShieldCheck,
//                 title: "Smart Security Analysis",
//                 desc: "Detect vulnerabilities and risky patterns before they reach production.",
//               },
//               {
//                 icon: IconSparkles,
//                 title: "AI Code Insights",
//                 desc: "Get intelligent suggestions and explanations to improve code quality.",
//               },
//               {
//                 icon: IconBolt,
//                 title: "Faster Development",
//                 desc: "Automate repetitive reviews and ship faster with confidence.",
//               },
//             ].map((f, i) => (
//               <motion.li
//                 key={f.title}
//                 className="group flex items-start gap-4"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.55 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[rgba(122,90,248,0.14)] bg-white/70 text-[#7A5AF8] shadow-sm backdrop-blur-md transition-shadow group-hover:shadow-[0_8px_24px_-6px_rgba(122,90,248,0.25)]"
//                 >
//                   <f.icon className="h-[18px] w-[18px]" stroke={1.8} />
//                 </motion.div>
//                 <div>
//                   <div className="text-[14px] font-semibold text-[#18181B]">{f.title}</div>
//                   <div className="mt-0.5 text-[13px] leading-snug text-[#5B6172]">{f.desc}</div>
//                 </div>
//               </motion.li>
//             ))}
//           </motion.ul>

//           {/* 3D Illustration */}
//           <motion.div
//             className="relative mt-12 w-full max-w-lg"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <div
//               className="absolute -inset-8 -z-10 rounded-[48px] opacity-60 blur-3xl"
//               style={{
//                 background: "radial-gradient(circle at 50% 40%, rgba(122,90,248,0.35), transparent 70%)",
//               }}
//             />

//             <motion.div
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//               className="relative"
//             >
//               <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border border-[rgba(122,90,248,0.12)] bg-white/30 shadow-[0_32px_80px_-24px_rgba(122,90,248,0.35)] backdrop-blur-sm">
//                 <Image
//                   src="/images/nextjs.png"
//                   alt="CodeSentry AI — AI-powered code review illustration"
//                   fill
//                   priority
//                   sizes="(max-width: 1024px) 0px, 560px"
//                   className="object-contain object-center"
//                 />
//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
//               </div>

//               <div
//                 className="absolute -bottom-4 left-1/2 h-8 w-[80%] -translate-x-1/2 rounded-[50%] opacity-30 blur-xl"
//                 style={{ background: "radial-gradient(ellipse, rgba(122,90,248,0.4), transparent 70%)" }}
//               />
//             </motion.div>
//           </motion.div>

//           {/* Trusted Companies */}
//           <motion.div
//             className="mt-12"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1, duration: 0.5 }}
//           >
//             <p className="text-[12px] font-medium text-[#5B6172]">
//               Trusted by 10,000+ developers and teams worldwide
//             </p>
//             <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
//               {["GitHub", "GitLab", "Bitbucket", "Vercel", "Microsoft"].map((name, i) => (
//                 <motion.span
//                   key={name}
//                   className="text-[13px] font-semibold text-[#5B6172]/50 transition-colors hover:text-[#7A5AF8]"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 1.1 + i * 0.05, duration: 0.4 }}
//                 >
//                   {name}
//                 </motion.span>
//               ))}
//             </div>
//           </motion.div>
//         </motion.section>

//         {/* ─── RIGHT PANEL ─── */}
//         <motion.section
//           className="flex flex-1 items-center justify-center px-5 py-12 lg:px-12 lg:py-16"
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
//         >
//           {/* Mobile Logo */}
//           <motion.div
//             className="mb-8 flex items-center justify-center gap-2.5 lg:hidden"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1, duration: 0.4 }}
//           >
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A5AF8] to-[#9B7CFF] text-white shadow-lg">
//               <IconCode className="h-5 w-5" stroke={2.2} />
//             </div>
//             <span className="text-[17px] font-bold tracking-tight text-[#18181B]">
//               CodeSentry <span className="text-[#7A5AF8]">AI</span>
//             </span>
//           </motion.div>

//           {/* Floating Auth Card */}
//           <div className="relative w-full max-w-[440px]">
//             {/* Card glow */}
//             <div
//               className="absolute -inset-5 -z-10 rounded-[44px] opacity-50 blur-2xl"
//               style={{
//                 background: "radial-gradient(circle at 50% 30%, rgba(122,90,248,0.25), transparent 70%)",
//               }}
//             />

//             <motion.div
//               className="relative overflow-hidden rounded-[32px] border border-[rgba(122,90,248,0.12)] p-8 shadow-[0_24px_80px_-24px_rgba(122,90,248,0.35)] sm:p-10"
//               style={{
//                 background: "rgba(255,255,255,0.72)",
//                 backdropFilter: "blur(40px)",
//                 WebkitBackdropFilter: "blur(40px)",
//               }}
//               initial={{ opacity: 0, y: 20, scale: 0.98 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//             >
//               {/* Top Badge — Secure Login */}
//               <motion.div
//                 className="mb-6 flex justify-end"
//                 initial={{ opacity: 0, x: 10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.5, duration: 0.4 }}
//               >
//                 <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(122,90,248,0.14)] bg-white/60 px-3 py-1.5 text-[11px] font-medium text-[#5B6172] backdrop-blur-sm shadow-sm">
//                   <IconShieldCheck className="h-3.5 w-3.5 text-[#7A5AF8]" stroke={2} />
//                   Secure Login
//                 </span>
//               </motion.div>

//               {/* Heading */}
//               <motion.h2
//                 className="text-[26px] font-bold tracking-tight text-[#18181B] sm:text-[28px]"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.5 }}
//               >
//                 Welcome back{" "}
//                 <motion.span
//                   animate={{ rotate: [0, 14, -8, 14, 0] }}
//                   transition={{ duration: 1.5, delay: 1.2, repeat: 0 }}
//                   className="inline-block"
//                 >
//                   👋
//                 </motion.span>
//               </motion.h2>
//               <motion.p
//                 className="mt-1.5 text-[14px] text-[#5B6172]"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5, duration: 0.4 }}
//               >
//                 Sign in to continue to your account
//               </motion.p>

//               {/* Error Message */}
//               <AnimatePresence mode="wait">
//                 {error && (
//                   <motion.div
//                     key={error}
//                     initial={{ opacity: 0, y: -6, height: 0 }}
//                     animate={{ opacity: 1, y: 0, height: "auto" }}
//                     exit={{ opacity: 0, y: -4, height: 0 }}
//                     className="mt-4 overflow-hidden"
//                   >
//                     <div className="flex items-start gap-2.5 rounded-2xl border border-red-200 bg-red-50 px-3.5 py-3">
//                       <IconAlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
//                       <p className="text-[13px] text-red-600">{error}</p>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* ── Email Login Form ── */}
//               <motion.form
//                 onSubmit={handleSubmit}
//                 className="mt-6 space-y-4"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1, duration: 0.3 }}
//               >
//                 {/* Email Input */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.15 }}
//                 >
//                   <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-[#18181B]">
//                     Email address
//                   </label>
//                   <div className="relative group">
//                     <IconMail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6172]/60 transition-colors group-focus-within:text-[#7A5AF8]" />
//                     <input
//                       id="email"
//                       type="email"
//                       autoComplete="email"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="w-full rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/80 py-3 pl-10 pr-4 text-[14px] text-[#18181B] placeholder:text-[#5B6172]/50 outline-none transition-all duration-200 focus:border-[#7A5AF8] focus:ring-4 focus:ring-[#7A5AF8]/12 focus:bg-white"
//                       autoFocus
//                     />
//                   </div>
//                 </motion.div>

//                 {/* Password Input */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <div className="mb-1.5 flex items-center justify-between">
//                     <label htmlFor="password" className="text-[13px] font-medium text-[#18181B]">
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-[12px] font-medium text-[#7A5AF8] transition hover:text-[#9B7CFF] hover:underline underline-offset-2"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <div className="relative group">
//                     <IconLock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6172]/60 transition-colors group-focus-within:text-[#7A5AF8]" />
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="current-password"
//                       placeholder="Enter your password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="w-full rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/80 py-3 pl-10 pr-11 text-[14px] text-[#18181B] placeholder:text-[#5B6172]/50 outline-none transition-all duration-200 focus:border-[#7A5AF8] focus:ring-4 focus:ring-[#7A5AF8]/12 focus:bg-white"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((v) => !v)}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-[#5B6172] transition hover:text-[#7A5AF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
//                       aria-label={showPassword ? "Hide password" : "Show password"}
//                     >
//                       {showPassword ? (
//                         <IconEyeOff className="h-4 w-4" stroke={1.8} />
//                       ) : (
//                         <IconEye className="h-4 w-4" stroke={1.8} />
//                       )}
//                     </button>
//                   </div>
//                 </motion.div>

//                 {/* Remember Me */}
//                 <motion.label
//                   className="flex cursor-pointer items-center gap-2.5 select-none"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.25 }}
//                 >
//                   <div className="relative flex items-center">
//                     <input
//                       type="checkbox"
//                       checked={remember}
//                       onChange={(e) => setRemember(e.target.checked)}
//                       className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[rgba(122,90,248,0.3)] bg-white/60 transition checked:border-[#7A5AF8] checked:bg-[#7A5AF8]"
//                     />
//                     <IconCheck className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition peer-checked:opacity-100" stroke={3} />
//                   </div>
//                   <span className="text-[13px] text-[#5B6172]">Remember me</span>
//                 </motion.label>

//                 {/* Sign In Button */}
//                 <motion.button
//                   type="submit"
//                   disabled={loading}
//                   whileHover={{ y: -2, boxShadow: "0 16px 40px -8px rgba(122,90,248,0.55)" }}
//                   whileTap={{ scale: 0.98 }}
//                   className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_32px_-8px_rgba(122,90,248,0.5)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/50 focus-visible:ring-offset-2"
//                   style={{ background: "linear-gradient(135deg, #7A5AF8 0%, #9B7CFF 100%)" }}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   {/* Shimmer effect */}
//                   <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
//                   {loading ? (
//                     <>
//                       <IconLoader2 className="h-4 w-4 animate-spin" />
//                       Signing in…
//                     </>
//                   ) : (
//                     <>
//                       Sign In
//                       <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" stroke={2.2} />
//                     </>
//                   )}
//                 </motion.button>
//               </motion.form>

//               {/* Sign Up Link */}
//               <motion.p
//                 className="mt-7 text-center text-[13px] text-[#5B6172]"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 Don&apos;t have an account?{" "}
//                 <Link
//                   href="/signup"
//                   className="relative font-semibold text-[#7A5AF8] transition hover:text-[#9B7CFF]"
//                 >
//                   Sign up
//                   <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#7A5AF8] transition-all duration-300 hover:w-full" />
//                 </Link>
//               </motion.p>
//             </motion.div>
//           </div>

//           {/* Bottom security text */}
//           <motion.p
//             className="mt-6 flex items-center justify-center gap-1.5 text-center text-[12px] text-[#5B6172]/80"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//           >
//             <IconShieldCheck className="h-3.5 w-3.5 text-[#7A5AF8]" />
//             Your data is encrypted and secure
//           </motion.p>
//         </motion.section>
//       </div>
//     </main>
//   );
// }

"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
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
      // Clear loading states on success (same pattern as registration)
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
    <main className="relative flex min-h-screen overflow-hidden bg-[#F7F4FF]">
      {/* ═══════════════════════════════════════════════════════════════════
          BACKGROUND — Premium Lavender Aurora
         ═══════════════════════════════════════════════════════════════════ */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(122,90,248,0.18) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 85% 70%, rgba(155,124,255,0.2) 0%, transparent 50%), linear-gradient(165deg, #F8F5FF 0%, #ECE3FF 100%)",
          }}
        />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(122,90,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(122,90,248,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
          }}
        />

        {/* Floating blur orbs */}
        <motion.div
          className="absolute -left-24 top-1/4 h-[420px] w-[420px] rounded-full bg-[#7A5AF8]/20 blur-[100px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 bottom-1/4 h-[380px] w-[380px] rounded-full bg-[#B99EFF]/30 blur-[110px]"
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#9B7CFF]/15 blur-[90px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 h-[320px] w-[320px] rounded-full bg-[#7A5AF8]/10 blur-[80px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          MAIN LAYOUT — Split Screen
         ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-stretch lg:min-h-screen lg:flex-row">
        {/* ─── LEFT PANEL ─── */}
        <motion.section
          className="relative hidden flex-1 flex-col justify-center px-12 py-16 lg:flex"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Brand Logo */}
          <motion.div
            className="mb-10 flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A5AF8] to-[#9B7CFF] text-white shadow-[0_8px_28px_-6px_rgba(122,90,248,0.55)]">
              <IconCode className="h-5 w-5" stroke={2.2} />
            </div>
            <span className="text-[17px] font-bold tracking-tight text-[#18181B]">
              CodeSentry <span className="text-[#7A5AF8]">AI</span>
            </span>
          </motion.div>

          {/* Hero Heading */}
          <motion.h1
            className="max-w-md text-[2.6rem] font-bold leading-[1.12] tracking-tight text-[#18181B]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            AI-Powered Code Reviews that build{" "}
            <span className="bg-gradient-to-r from-[#7A5AF8] to-[#9B7CFF] bg-clip-text text-transparent">
              better products
            </span>
          </motion.h1>

          {/* Supporting paragraph */}
          <motion.p
            className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#5B6172]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Automated code reviews, security scanning, and intelligent insights — all in one place.
          </motion.p>

          {/* Feature Cards */}
          <motion.ul
            className="mt-10 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {[
              {
                icon: IconShieldCheck,
                title: "Smart Security Analysis",
                desc: "Detect vulnerabilities and risky patterns before they reach production.",
              },
              {
                icon: IconSparkles,
                title: "AI Code Insights",
                desc: "Get intelligent suggestions and explanations to improve code quality.",
              },
              {
                icon: IconBolt,
                title: "Faster Development",
                desc: "Automate repetitive reviews and ship faster with confidence.",
              },
            ].map((f, i) => (
              <motion.li
                key={f.title}
                className="group flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[rgba(122,90,248,0.14)] bg-white/70 text-[#7A5AF8] shadow-sm backdrop-blur-md transition-shadow group-hover:shadow-[0_8px_24px_-6px_rgba(122,90,248,0.25)]"
                >
                  <f.icon className="h-[18px] w-[18px]" stroke={1.8} />
                </motion.div>
                <div>
                  <div className="text-[14px] font-semibold text-[#18181B]">{f.title}</div>
                  <div className="mt-0.5 text-[13px] leading-snug text-[#5B6172]">{f.desc}</div>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          {/* 3D Illustration */}
          <motion.div
            className="relative mt-12 w-full max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="absolute -inset-8 -z-10 rounded-[48px] opacity-60 blur-3xl"
              style={{
                background: "radial-gradient(circle at 50% 40%, rgba(122,90,248,0.35), transparent 70%)",
              }}
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border border-[rgba(122,90,248,0.12)] bg-white/30 shadow-[0_32px_80px_-24px_rgba(122,90,248,0.35)] backdrop-blur-sm">
                <Image
                  src="/images/nextjs.png"
                  alt="CodeSentry AI — AI-powered code review illustration"
                  fill
                  priority
                  sizes="(max-width: 1024px) 0px, 560px"
                  className="object-contain object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
              </div>

              <div
                className="absolute -bottom-4 left-1/2 h-8 w-[80%] -translate-x-1/2 rounded-[50%] opacity-30 blur-xl"
                style={{ background: "radial-gradient(ellipse, rgba(122,90,248,0.4), transparent 70%)" }}
              />
            </motion.div>
          </motion.div>

          {/* Trusted Companies */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p className="text-[12px] font-medium text-[#5B6172]">
              Trusted by 10,000+ developers and teams worldwide
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
              {["GitHub", "GitLab", "Bitbucket", "Vercel", "Microsoft"].map((name, i) => (
                <motion.span
                  key={name}
                  className="text-[13px] font-semibold text-[#5B6172]/50 transition-colors hover:text-[#7A5AF8]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.05, duration: 0.4 }}
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* ─── RIGHT PANEL ─── */}
        <motion.section
          className="flex flex-1 items-center justify-center px-5 py-12 lg:px-12 lg:py-16"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Mobile Logo */}
          <motion.div
            className="mb-8 flex items-center justify-center gap-2.5 lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A5AF8] to-[#9B7CFF] text-white shadow-lg">
              <IconCode className="h-5 w-5" stroke={2.2} />
            </div>
            <span className="text-[17px] font-bold tracking-tight text-[#18181B]">
              CodeSentry <span className="text-[#7A5AF8]">AI</span>
            </span>
          </motion.div>

          {/* Floating Auth Card */}
          <div className="relative w-full max-w-[440px]">
            {/* Card glow */}
            <div
              className="absolute -inset-5 -z-10 rounded-[44px] opacity-50 blur-2xl"
              style={{
                background: "radial-gradient(circle at 50% 30%, rgba(122,90,248,0.25), transparent 70%)",
              }}
            />

            <motion.div
              className="relative overflow-hidden rounded-[32px] border border-[rgba(122,90,248,0.12)] p-8 shadow-[0_24px_80px_-24px_rgba(122,90,248,0.35)] sm:p-10"
              style={{
                background: "rgba(255,255,255,0.72)",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
              }}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Top Badge — Secure Login */}
              <motion.div
                className="mb-6 flex justify-end"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(122,90,248,0.14)] bg-white/60 px-3 py-1.5 text-[11px] font-medium text-[#5B6172] backdrop-blur-sm shadow-sm">
                  <IconShieldCheck className="h-3.5 w-3.5 text-[#7A5AF8]" stroke={2} />
                  Secure Login
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                className="text-[26px] font-bold tracking-tight text-[#18181B] sm:text-[28px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Welcome back{" "}
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, 0] }}
                  transition={{ duration: 1.5, delay: 1.2, repeat: 0 }}
                  className="inline-block"
                >
                  👋
                </motion.span>
              </motion.h2>
              <motion.p
                className="mt-1.5 text-[14px] text-[#5B6172]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                Sign in to continue to your account
              </motion.p>

              {/* Error Message */}
              <AnimatePresence mode="wait">
                {error && (
                  <motion.div
                    key={error}
                    initial={{ opacity: 0, y: -6, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -4, height: 0 }}
                    className="mt-4 overflow-hidden"
                  >
                    <div className="flex items-start gap-2.5 rounded-2xl border border-red-200 bg-red-50 px-3.5 py-3">
                      <IconAlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                      <p className="text-[13px] text-red-600">{error}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Email Login Form ── */}
              <motion.form
                onSubmit={handleSubmit}
                className="mt-6 space-y-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-[#18181B]">
                    Email address
                  </label>
                  <div className="relative group">
                    <IconMail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6172]/60 transition-colors group-focus-within:text-[#7A5AF8]" />
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/80 py-3 pl-10 pr-4 text-[14px] text-[#18181B] placeholder:text-[#5B6172]/50 outline-none transition-all duration-200 focus:border-[#7A5AF8] focus:ring-4 focus:ring-[#7A5AF8]/12 focus:bg-white"
                      autoFocus
                    />
                  </div>
                </motion.div>

                {/* Password Input */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="mb-1.5 flex items-center justify-between">
                    <label htmlFor="password" className="text-[13px] font-medium text-[#18181B]">
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-[12px] font-medium text-[#7A5AF8] transition hover:text-[#9B7CFF] hover:underline underline-offset-2"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative group">
                    <IconLock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6172]/60 transition-colors group-focus-within:text-[#7A5AF8]" />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/80 py-3 pl-10 pr-11 text-[14px] text-[#18181B] placeholder:text-[#5B6172]/50 outline-none transition-all duration-200 focus:border-[#7A5AF8] focus:ring-4 focus:ring-[#7A5AF8]/12 focus:bg-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-[#5B6172] transition hover:text-[#7A5AF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/40"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <IconEyeOff className="h-4 w-4" stroke={1.8} />
                      ) : (
                        <IconEye className="h-4 w-4" stroke={1.8} />
                      )}
                    </button>
                  </div>
                </motion.div>

                {/* Remember Me */}
                <motion.label
                  className="flex cursor-pointer items-center gap-2.5 select-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[rgba(122,90,248,0.3)] bg-white/60 transition checked:border-[#7A5AF8] checked:bg-[#7A5AF8]"
                    />
                    <IconCheck className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition peer-checked:opacity-100" stroke={3} />
                  </div>
                  <span className="text-[13px] text-[#5B6172]">Remember me</span>
                </motion.label>

                {/* Sign In Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ y: -2, boxShadow: "0 16px 40px -8px rgba(122,90,248,0.55)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_32px_-8px_rgba(122,90,248,0.5)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/50 focus-visible:ring-offset-2"
                  style={{ background: "linear-gradient(135deg, #7A5AF8 0%, #9B7CFF 100%)" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Shimmer effect */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  {loading ? (
                    <>
                      <IconLoader2 className="h-4 w-4 animate-spin" />
                      Signing in…
                    </>
                  ) : (
                    <>
                      Sign In
                      <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" stroke={2.2} />
                    </>
                  )}
                </motion.button>
              </motion.form>

              {/* Sign Up Link */}
              <motion.p
                className="mt-7 text-center text-[13px] text-[#5B6172]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="relative font-semibold text-[#7A5AF8] transition hover:text-[#9B7CFF]"
                >
                  Sign up
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#7A5AF8] transition-all duration-300 hover:w-full" />
                </Link>
              </motion.p>
            </motion.div>
          </div>

          {/* Bottom security text */}
          <motion.p
            className="mt-6 flex items-center justify-center gap-1.5 text-center text-[12px] text-[#5B6172]/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <IconShieldCheck className="h-3.5 w-3.5 text-[#7A5AF8]" />
            Your data is encrypted and secure
          </motion.p>
        </motion.section>
      </div>
    </main>
  );
}