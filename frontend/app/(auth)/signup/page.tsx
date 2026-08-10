// // "use client";

// // import { useState, type FormEvent } from "react";
// // import Link from "next/link";
// // import { useRouter } from "next/navigation";
// // import { IconCode, IconBrandGithub, IconLoader2 } from "@tabler/icons-react";
// // import { useAuth } from "@/context/AuthContext";

// // const inputCls =
// //   "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-600 backdrop-blur-sm transition-colors duration-200 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30";

// // export default function SignupPage() {
// //   const { signUp, signInWithGithub, setAuthActionLoading } = useAuth();
// //   const router = useRouter();

// //   const [name, setName]           = useState("");
// //   const [email, setEmail]         = useState("");
// //   const [password, setPassword]   = useState("");
// //   const [confirm, setConfirm]     = useState("");
// //   const [loading, setLoading]     = useState(false);
// //   const [error, setError]         = useState("");

// //   async function handleSubmit(e: FormEvent) {
// //     e.preventDefault();
// //     if (!name || !email || !password || !confirm) {
// //       setError("Please fill in all fields.");
// //       return;
// //     }
// //     if (password !== confirm) {
// //       setError("Passwords do not match.");
// //       return;
// //     }
// //     if (password.length < 8) {
// //       setError("Password must be at least 8 characters.");
// //       return;
// //     }
// //     setLoading(true);
// //     setAuthActionLoading("Creating your account...");
// //     setError("");
// //     try {
// //       await signUp(name, email, password);
// //       router.replace("/dashboard");
// //     } catch {
// //       setError("Something went wrong. Please try again.");
// //       setAuthActionLoading(null);
// //       setLoading(false);
// //     }
// //   }

// //   function handleGithubLogin() {
// //     setAuthActionLoading("Redirecting to GitHub...");
// //     try {
// //       signInWithGithub();
// //     } catch (err: any) {
// //       setError("Could not redirect to GitHub. Try again.");
// //       setAuthActionLoading(null);
// //     }
// //   }

// //   return (
// //     <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-md shadow-2xl shadow-black/40">
// //       {/* Logo */}
// //       <div className="mb-8 flex flex-col items-center gap-3">
// //         <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 shadow-lg shadow-violet-600/30">
// //           <IconCode className="h-6 w-6 text-white" stroke={2} />
// //         </div>
// //         <span className="text-lg font-semibold text-white tracking-tight">
// //           BunoBagera
// //         </span>
// //       </div>

// //       {/* Heading */}
// //       <h1 className="mb-1 text-center text-2xl font-bold text-white">
// //         Create your account
// //       </h1>
// //       <p className="mb-8 text-center text-sm text-zinc-500">
// //         Start reviewing code with AI in seconds
// //       </p>

// //       {/* Error */}
// //       {error && (
// //         <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
// //           {error}
// //         </div>
// //       )}

// //       {/* Form */}
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div>
// //           <label htmlFor="signup-name" className="mb-1.5 block text-xs font-medium text-zinc-400">
// //             Full name
// //           </label>
// //           <input
// //             id="signup-name"
// //             type="text"
// //             autoComplete="name"
// //             placeholder="Alex Johnson"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             className={inputCls}
// //             autoFocus
// //           />
// //         </div>

// //         <div>
// //           <label htmlFor="signup-email" className="mb-1.5 block text-xs font-medium text-zinc-400">
// //             Email address
// //           </label>
// //           <input
// //             id="signup-email"
// //             type="email"
// //             autoComplete="email"
// //             placeholder="you@company.com"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             className={inputCls}
// //           />
// //         </div>

// //         <div>
// //           <label htmlFor="signup-password" className="mb-1.5 block text-xs font-medium text-zinc-400">
// //             Password
// //           </label>
// //           <input
// //             id="signup-password"
// //             type="password"
// //             autoComplete="new-password"
// //             placeholder="At least 8 characters"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             className={inputCls}
// //           />
// //         </div>

// //         <div>
// //           <label htmlFor="signup-confirm" className="mb-1.5 block text-xs font-medium text-zinc-400">
// //             Confirm password
// //           </label>
// //           <input
// //             id="signup-confirm"
// //             type="password"
// //             autoComplete="new-password"
// //             placeholder="Repeat your password"
// //             value={confirm}
// //             onChange={(e) => setConfirm(e.target.value)}
// //             className={inputCls}
// //           />
// //         </div>

// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-200 hover:bg-violet-500 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
// //         >
// //           {loading && <IconLoader2 className="h-4 w-4 animate-spin" />}
// //           {loading ? "Creating account…" : "Create Account"}
// //         </button>
// //       </form>

// //       {/* Divider */}
// //       <div className="my-6 flex items-center gap-3">
// //         <div className="h-px flex-1 bg-white/10" />
// //         <span className="text-xs text-zinc-600">or</span>
// //         <div className="h-px flex-1 bg-white/10" />
// //       </div>

// //       {/* GitHub */}
// //       <button
// //         type="button"
// //         onClick={handleGithubLogin}
// //         className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/20 active:scale-[0.98]"
// //       >
// //         <IconBrandGithub className="h-4.5 w-4.5" />
// //         Continue with GitHub
// //       </button>

// //       {/* Footer link */}
// //       <p className="mt-8 text-center text-sm text-zinc-600">
// //         Already have an account?{" "}
// //         <Link href="/login" className="text-violet-400 hover:text-violet-300 transition-colors">
// //           Log in
// //         </Link>
// //       </p>
// //     </div>
// //   );
// // }


// "use client";

// import { useState, type FormEvent } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   IconCode,
//   IconBrandGithub,
//   IconLoader2,
//   IconUser,
//   IconMail,
//   IconLock,
//   IconShieldCheck,
//   IconAlertCircle,
//   IconSparkles,
//   IconCheck,
//   IconCircle,
// } from "@tabler/icons-react";
// import { useAuth } from "@/context/AuthContext";

// const inputCls =
//   "peer w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] py-3.5 pl-11 pr-4 text-[15px] text-white placeholder:text-[#7A8499] backdrop-blur-xl transition-all duration-200 focus:border-[#5B5FFF]/60 focus:outline-none focus:ring-4 focus:ring-[#5B5FFF]/10";

// /* ---------- Pure-UI helpers (do not touch validation logic) ---------- */
// function getPasswordChecks(pw: string) {
//   return {
//     length: pw.length >= 8,
//     upper: /[A-Z]/.test(pw),
//     lower: /[a-z]/.test(pw),
//     number: /\d/.test(pw),
//     special: /[^A-Za-z0-9]/.test(pw),
//   };
// }
// function getStrength(pw: string) {
//   const c = getPasswordChecks(pw);
//   const score = Object.values(c).filter(Boolean).length;
//   if (!pw) return { score: 0, label: "", color: "", width: "w-0" };
//   if (score <= 2)
//     return {
//       score,
//       label: "Weak",
//       color: "from-red-500 to-rose-500",
//       width: "w-1/3",
//     };
//   if (score <= 4)
//     return {
//       score,
//       label: "Medium",
//       color: "from-amber-400 to-orange-500",
//       width: "w-2/3",
//     };
//   return {
//     score,
//     label: "Strong",
//     color: "from-emerald-400 to-emerald-500",
//     width: "w-full",
//   };
// }

// export default function SignupPage() {
//   const { signUp, signInWithGithub, setAuthActionLoading } = useAuth();
//   const router = useRouter();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   async function handleSubmit(e: FormEvent) {
//     e.preventDefault();
//     if (!name || !email || !password || !confirm) {
//       setError("Please fill in all fields.");
//       return;
//     }
//     if (password !== confirm) {
//       setError("Passwords do not match.");
//       return;
//     }
//     if (password.length < 8) {
//       setError("Password must be at least 8 characters.");
//       return;
//     }
//     setLoading(true);
//     setAuthActionLoading("Creating your account...");
//     setError("");
//     try {
//       await signUp(name, email, password);
//       router.replace("/dashboard");
//     } catch {
//       setError("Something went wrong. Please try again.");
//       setAuthActionLoading(null);
//       setLoading(false);
//     }
//   }

//   function handleGithubLogin() {
//     setAuthActionLoading("Redirecting to GitHub...");
//     try {
//       signInWithGithub();
//     } catch (err: any) {
//       setError("Could not redirect to GitHub. Try again.");
//       setAuthActionLoading(null);
//     }
//   }

//   const checks = getPasswordChecks(password);
//   const strength = getStrength(password);

//   return (
//     <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-5 py-14 text-white">
//       {/* ─── Background ─── */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div
//           className="absolute inset-0 opacity-[0.35]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
//             backgroundSize: "56px 56px",
//             maskImage:
//               "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)",
//           }}
//         />
//         <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5B5FFF]/25 blur-[160px]" />
//         <div className="absolute -top-32 right-0 h-[440px] w-[440px] rounded-full bg-[#4F8CFF]/25 blur-[140px]" />
//         <div className="absolute bottom-0 -left-20 h-[400px] w-[400px] rounded-full bg-[#00D4FF]/10 blur-[130px]" />
//       </div>

//       <div className="w-full max-w-[500px] animate-[fadeUp_0.6s_ease-out_both]">
//         {/* ─── Card ─── */}
//         <div className="relative">
//           <div className="absolute -inset-px rounded-[30px] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-transparent" />
//           <div className="absolute -inset-8 -z-10 rounded-[38px] bg-gradient-to-br from-[#5B5FFF]/20 via-transparent to-[#00D4FF]/10 blur-2xl" />

//           <div className="relative rounded-[30px] bg-[#0D1324]/80 p-8 backdrop-blur-2xl shadow-[0_30px_120px_-30px_rgba(91,95,255,0.5)] sm:p-10">
//             {/* ── Logo ── */}
//             <div className="flex items-center gap-3">
//               <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#4F8CFF]/25 to-[#5B5FFF]/25 shadow-[0_10px_40px_-10px_rgba(91,95,255,0.7)]">
//                 <IconCode className="h-5 w-5 text-white" />
//                 <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#050816] ring-1 ring-white/10">
//                   <IconShieldCheck className="h-2.5 w-2.5 text-[#00D4FF]" />
//                 </span>
//               </div>
//               <div className="leading-tight">
//                 <div className="text-[15px] font-semibold tracking-tight">
//                   CodeSentry AI
//                 </div>
//                 <div className="text-[11px] font-medium text-[#7A8499]">
//                   Enterprise AI Code Intelligence
//                 </div>
//               </div>
//             </div>

//             {/* ── Heading ── */}
//             <div className="mt-8">
//               <h1 className="text-[36px] font-semibold leading-[1.1] tracking-tight sm:text-[44px]">
//                 Create your account
//               </h1>
//               <p className="mt-2 text-[15px] text-[#AAB3C5]">
//                 Start reviewing code with enterprise-grade AI in minutes.
//               </p>
//             </div>

//             {/* ── Error ── */}
//             {error && (
//               <div className="relative mt-6 animate-[fadeUp_0.25s_ease-out_both] overflow-hidden rounded-2xl border border-white/[0.06] bg-red-500/[0.06] p-3.5 pl-4 backdrop-blur">
//                 <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-red-400 to-red-600" />
//                 <div className="flex items-start gap-2.5 pl-2">
//                   <IconAlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
//                   <p className="text-[13px] text-red-200">{error}</p>
//                 </div>
//               </div>
//             )}

//             {/* ── Form ── */}
//             <form onSubmit={handleSubmit} className="mt-7 space-y-4">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="mb-2 block text-[13px] font-medium text-[#AAB3C5]"
//                 >
//                   Full name
//                 </label>
//                 <div className="relative">
//                   <IconUser className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A8499]" />
//                   <input
//                     id="name"
//                     type="text"
//                     placeholder="Ada Lovelace"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className={inputCls}
//                     autoFocus
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="mb-2 block text-[13px] font-medium text-[#AAB3C5]"
//                 >
//                   Email address
//                 </label>
//                 <div className="relative">
//                   <IconMail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A8499]" />
//                   <input
//                     id="email"
//                     type="email"
//                     placeholder="you@company.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className={inputCls}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="password"
//                   className="mb-2 block text-[13px] font-medium text-[#AAB3C5]"
//                 >
//                   Password
//                 </label>
//                 <div className="relative">
//                   <IconLock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A8499]" />
//                   <input
//                     id="password"
//                     type="password"
//                     placeholder="At least 8 characters"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className={inputCls}
//                   />
//                 </div>

//                 {/* Strength bar */}
//                 {password && (
//                   <div className="mt-3 animate-[fadeUp_0.25s_ease-out_both]">
//                     <div className="flex items-center justify-between text-[11px] font-medium">
//                       <span className="text-[#7A8499]">Password strength</span>
//                       <span
//                         className={
//                           strength.label === "Strong"
//                             ? "text-emerald-400"
//                             : strength.label === "Medium"
//                             ? "text-amber-300"
//                             : "text-red-300"
//                         }
//                       >
//                         {strength.label}
//                       </span>
//                     </div>
//                     <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
//                       <div
//                         className={`h-full rounded-full bg-gradient-to-r ${strength.color} ${strength.width} transition-all duration-500`}
//                       />
//                     </div>

//                     {/* Requirements */}
//                     <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 text-[12px]">
//                       {[
//                         { ok: checks.length, label: "8+ characters" },
//                         { ok: checks.upper, label: "Uppercase" },
//                         { ok: checks.lower, label: "Lowercase" },
//                         { ok: checks.number, label: "Number" },
//                         { ok: checks.special, label: "Special character" },
//                       ].map((r) => (
//                         <li
//                           key={r.label}
//                           className={`flex items-center gap-1.5 transition-colors ${
//                             r.ok ? "text-emerald-300" : "text-[#7A8499]"
//                           }`}
//                         >
//                           {r.ok ? (
//                             <IconCheck className="h-3.5 w-3.5" />
//                           ) : (
//                             <IconCircle className="h-3 w-3" />
//                           )}
//                           {r.label}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="confirm"
//                   className="mb-2 block text-[13px] font-medium text-[#AAB3C5]"
//                 >
//                   Confirm password
//                 </label>
//                 <div className="relative">
//                   <IconShieldCheck className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A8499]" />
//                   <input
//                     id="confirm"
//                     type="password"
//                     placeholder="Re-enter password"
//                     value={confirm}
//                     onChange={(e) => setConfirm(e.target.value)}
//                     className={inputCls}
//                   />
//                   {confirm && password && (
//                     <span className="absolute right-4 top-1/2 -translate-y-1/2">
//                       {confirm === password ? (
//                         <IconCheck className="h-4 w-4 text-emerald-400" />
//                       ) : (
//                         <IconAlertCircle className="h-4 w-4 text-red-400" />
//                       )}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#4F8CFF] to-[#5B5FFF] px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_40px_-12px_rgba(91,95,255,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
//               >
//                 <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
//                 {loading && <IconLoader2 className="h-4 w-4 animate-spin" />}
//                 {loading ? "Creating account…" : "Create Account"}
//               </button>
//             </form>

//             {/* ── Divider ── */}
//             <div className="my-7 flex items-center gap-4">
//               <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
//               <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#7A8499]">
//                 or
//               </span>
//               <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
//             </div>

//             {/* ── GitHub ── */}
//             <button
//               type="button"
//               onClick={handleGithubLogin}
//               className="group flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-3.5 text-[15px] font-medium text-white backdrop-blur-xl transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_0_40px_-10px_rgba(91,95,255,0.4)]"
//             >
//               <IconBrandGithub className="h-5 w-5" />
//               Continue with GitHub
//             </button>

//             {/* ── Footer ── */}
//             <p className="mt-8 text-center text-[13px] text-[#AAB3C5]">
//               Already have an account?{" "}
//               <Link
//                 href="/login"
//                 className="group relative font-medium text-white"
//               >
//                 Log in
//                 <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-[#4F8CFF] to-[#5B5FFF] transition-all duration-300 group-hover:w-full" />
//               </Link>
//             </p>
//           </div>
//         </div>

//         {/* ── Security badges ── */}
//         <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
//           {[
//             { icon: IconShieldCheck, label: "SOC 2 Ready", tint: "text-emerald-400" },
//             { icon: IconLock, label: "256-bit Encryption", tint: "text-[#4F8CFF]" },
//             { icon: IconBrandGithub, label: "GitHub OAuth", tint: "text-white" },
//             { icon: IconSparkles, label: "AI Powered", tint: "text-[#00D4FF]" },
//           ].map(({ icon: Icon, label, tint }) => (
//             <span
//               key={label}
//               className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium text-[#AAB3C5] backdrop-blur"
//             >
//               <Icon className={`h-3.5 w-3.5 ${tint}`} />
//               {label}
//             </span>
//           ))}
//         </div>

//         {/* ── Trust logos ── */}
//         <div className="mt-6 flex flex-col items-center gap-3">
//           <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#7A8499]">
//             Trusted by engineering teams
//           </span>
//           <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[13px] font-semibold text-white/40">
//             {["GitHub", "Stripe", "OpenAI", "Vercel", "Linear", "Notion"].map(
//               (b) => (
//                 <span key={b} className="transition hover:text-white/70">
//                   {b}
//                 </span>
//               ),
//             )}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(14px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
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
  IconUser,
  IconMail,
  IconLock,
  IconShieldCheck,
  IconAlertCircle,
  IconSparkles,
  IconBolt,
  IconCheck,
  IconCircle,
  IconCode,
  IconArrowRight,
} from "@tabler/icons-react";
import { useAuth } from "@/context/AuthContext";

/* ---------- Pure-UI helpers ---------- */
function getPasswordChecks(pw: string) {
  return {
    length: pw.length >= 8,
    upper: /[A-Z]/.test(pw),
    lower: /[a-z]/.test(pw),
    number: /\d/.test(pw),
    special: /[^A-Za-z0-9]/.test(pw),
  };
}
function getStrength(pw: string) {
  const c = getPasswordChecks(pw);
  const score = Object.values(c).filter(Boolean).length;
  if (!pw) return { score: 0, label: "", color: "", width: "w-0" };
  if (score <= 2)
    return { score, label: "Weak", color: "from-red-500 to-rose-500", width: "w-1/3" };
  if (score <= 4)
    return { score, label: "Medium", color: "from-amber-400 to-orange-500", width: "w-2/3" };
  return { score, label: "Strong", color: "from-emerald-400 to-emerald-500", width: "w-full" };
}

export default function SignupPage() {
  const { signUp, setAuthActionLoading } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || !email || !password || !confirm) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setLoading(true);
    setAuthActionLoading("Creating your account...");
    setError("");
    try {
      await signUp(name, email, password);
      setAuthActionLoading(null);
      setLoading(false);
      router.replace("/dashboard");
    } catch {
      setError("Something went wrong. Please try again.");
      setAuthActionLoading(null);
      setLoading(false);
    }
  }

  const checks = getPasswordChecks(password);
  const strength = getStrength(password);

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#F7F4FF]">
      {/* ═══════════════════════════════════════════════════════════════════
          BACKGROUND — Premium Lavender Aurora
         ═══════════════════════════════════════════════════════════════════ */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(122,90,248,0.18) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 85% 70%, rgba(155,124,255,0.2) 0%, transparent 50%), linear-gradient(165deg, #F8F5FF 0%, #ECE3FF 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(122,90,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(122,90,248,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
          }}
        />
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

          <motion.h1
            className="max-w-md text-[2.6rem] font-bold leading-[1.12] tracking-tight text-[#18181B]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Start reviewing code with{" "}
            <span className="bg-gradient-to-r from-[#7A5AF8] to-[#9B7CFF] bg-clip-text text-transparent">
              enterprise-grade AI
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#5B6172]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Create your account and get intelligent code reviews, security scanning, and insights in minutes.
          </motion.p>

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

          <div className="relative w-full max-w-[440px]">
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
              {/* Top Badge */}
              <motion.div
                className="mb-6 flex justify-end"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(122,90,248,0.14)] bg-white/60 px-3 py-1.5 text-[11px] font-medium text-[#5B6172] backdrop-blur-sm shadow-sm">
                  <IconShieldCheck className="h-3.5 w-3.5 text-[#7A5AF8]" stroke={2} />
                  Secure Signup
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                className="text-[26px] font-bold tracking-tight text-[#18181B] sm:text-[28px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Create your account
              </motion.h2>
              <motion.p
                className="mt-1.5 text-[14px] text-[#5B6172]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                Start reviewing code with enterprise-grade AI in minutes.
              </motion.p>

              {/* Error */}
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

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="mt-6 space-y-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-[13px] font-medium text-[#18181B]">
                    Full name
                  </label>
                  <div className="relative group">
                    <IconUser className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6172]/60 transition-colors group-focus-within:text-[#7A5AF8]" />
                    <input
                      id="name"
                      type="text"
                      placeholder="Ada Lovelace"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/80 py-3 pl-10 pr-4 text-[14px] text-[#18181B] placeholder:text-[#5B6172]/50 outline-none transition-all duration-200 focus:border-[#7A5AF8] focus:ring-4 focus:ring-[#7A5AF8]/12 focus:bg-white"
                      autoFocus
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-[#18181B]">
                    Email address
                  </label>
                  <div className="relative group">
                    <IconMail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6172]/60 transition-colors group-focus-within:text-[#7A5AF8]" />
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/80 py-3 pl-10 pr-4 text-[14px] text-[#18181B] placeholder:text-[#5B6172]/50 outline-none transition-all duration-200 focus:border-[#7A5AF8] focus:ring-4 focus:ring-[#7A5AF8]/12 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="mb-1.5 block text-[13px] font-medium text-[#18181B]">
                    Password
                  </label>
                  <div className="relative group">
                    <IconLock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6172]/60 transition-colors group-focus-within:text-[#7A5AF8]" />
                    <input
                      id="password"
                      type="password"
                      placeholder="At least 8 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/80 py-3 pl-10 pr-4 text-[14px] text-[#18181B] placeholder:text-[#5B6172]/50 outline-none transition-all duration-200 focus:border-[#7A5AF8] focus:ring-4 focus:ring-[#7A5AF8]/12 focus:bg-white"
                    />
                  </div>

                  {/* Strength + Requirements */}
                  {password && (
                    <motion.div
                      className="mt-3"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="flex items-center justify-between text-[11px] font-medium">
                        <span className="text-[#5B6172]">Password strength</span>
                        <span
                          className={
                            strength.label === "Strong"
                              ? "text-emerald-500"
                              : strength.label === "Medium"
                              ? "text-amber-500"
                              : "text-red-500"
                          }
                        >
                          {strength.label}
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[rgba(122,90,248,0.1)]">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${strength.color} ${strength.width} transition-all duration-500`}
                        />
                      </div>
                      <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 rounded-xl border border-[rgba(122,90,248,0.1)] bg-white/50 p-3 text-[12px]">
                        {[
                          { ok: checks.length, label: "8+ characters" },
                          { ok: checks.upper, label: "Uppercase" },
                          { ok: checks.lower, label: "Lowercase" },
                          { ok: checks.number, label: "Number" },
                          { ok: checks.special, label: "Special character" },
                        ].map((r) => (
                          <li
                            key={r.label}
                            className={`flex items-center gap-1.5 transition-colors ${
                              r.ok ? "text-emerald-600" : "text-[#5B6172]"
                            }`}
                          >
                            {r.ok ? (
                              <IconCheck className="h-3.5 w-3.5" />
                            ) : (
                              <IconCircle className="h-3 w-3" />
                            )}
                            {r.label}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label htmlFor="confirm" className="mb-1.5 block text-[13px] font-medium text-[#18181B]">
                    Confirm password
                  </label>
                  <div className="relative group">
                    <IconShieldCheck className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6172]/60 transition-colors group-focus-within:text-[#7A5AF8]" />
                    <input
                      id="confirm"
                      type="password"
                      placeholder="Re-enter password"
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      className="w-full rounded-xl border border-[rgba(122,90,248,0.14)] bg-white/80 py-3 pl-10 pr-11 text-[14px] text-[#18181B] placeholder:text-[#5B6172]/50 outline-none transition-all duration-200 focus:border-[#7A5AF8] focus:ring-4 focus:ring-[#7A5AF8]/12 focus:bg-white"
                    />
                    {confirm && password && (
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2">
                        {confirm === password ? (
                          <IconCheck className="h-4 w-4 text-emerald-500" />
                        ) : (
                          <IconAlertCircle className="h-4 w-4 text-red-500" />
                        )}
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ y: -2, boxShadow: "0 16px 40px -8px rgba(122,90,248,0.55)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_32px_-8px_rgba(122,90,248,0.5)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A5AF8]/50 focus-visible:ring-offset-2"
                  style={{ background: "linear-gradient(135deg, #7A5AF8 0%, #9B7CFF 100%)" }}
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  {loading ? (
                    <>
                      <IconLoader2 className="h-4 w-4 animate-spin" />
                      Creating account…
                    </>
                  ) : (
                    <>
                      Create Account
                      <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" stroke={2.2} />
                    </>
                  )}
                </motion.button>
              </motion.form>

              {/* Footer */}
              <motion.p
                className="mt-7 text-center text-[13px] text-[#5B6172]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="relative font-semibold text-[#7A5AF8] transition hover:text-[#9B7CFF]"
                >
                  Log in
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#7A5AF8] transition-all duration-300 hover:w-full" />
                </Link>
              </motion.p>
            </motion.div>
          </div>

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