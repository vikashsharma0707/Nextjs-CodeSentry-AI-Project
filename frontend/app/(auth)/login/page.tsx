// "use client";

// import { useState, type FormEvent } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { IconCode, IconBrandGithub, IconLoader2 } from "@tabler/icons-react";
// import { useAuth } from "@/context/AuthContext";

// const inputCls =
//   "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-600 backdrop-blur-sm transition-colors duration-200 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30";

// export default function LoginPage() {
//   const { signIn, signInWithGithub, setAuthActionLoading } = useAuth();
//   const router = useRouter();

//   const [email, setEmail]       = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading]   = useState(false);
//   const [error, setError]       = useState("");

//   async function handleSubmit(e: FormEvent) {
//     e.preventDefault();
//     if (!email || !password) { setError("Please fill in all fields."); return; }
//     setLoading(true);
//     setAuthActionLoading("Signing in to your account...");
//     setError("");
//     try {
//       await signIn(email, password);
//       router.replace("/dashboard");
//     } catch {
//       setError("Invalid credentials. Try again.");
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

//   return (
//     <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-md shadow-2xl shadow-black/40">
//       {/* Logo */}
//       <div className="mb-8 flex flex-col items-center gap-3">
//         <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 shadow-lg shadow-violet-600/30">
//           <IconCode className="h-6 w-6 text-white" stroke={2} />
//         </div>
//         <span className="text-lg font-semibold text-white tracking-tight">
//           BunoBagera
//         </span>
//       </div>

//       {/* Heading */}
//       <h1 className="mb-1 text-center text-2xl font-bold text-white">
//         Welcome back
//       </h1>
//       <p className="mb-8 text-center text-sm text-zinc-500">
//         Sign in to your account
//       </p>

//       {/* Error */}
//       {error && (
//         <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
//           {error}
//         </div>
//       )}

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="login-email" className="mb-1.5 block text-xs font-medium text-zinc-400">
//             Email address
//           </label>
//           <input
//             id="login-email"
//             type="email"
//             autoComplete="email"
//             placeholder="you@company.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className={inputCls}
//             autoFocus
//           />
//         </div>

//         <div>
//           <div className="mb-1.5 flex items-center justify-between">
//             <label htmlFor="login-password" className="text-xs font-medium text-zinc-400">
//               Password
//             </label>
//             <Link href="#" className="text-xs text-violet-400 hover:text-violet-300 transition-colors">
//               Forgot password?
//             </Link>
//           </div>
//           <input
//             id="login-password"
//             type="password"
//             autoComplete="current-password"
//             placeholder="••••••••"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className={inputCls}
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-200 hover:bg-violet-500 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
//         >
//           {loading && <IconLoader2 className="h-4 w-4 animate-spin" />}
//           {loading ? "Signing in…" : "Sign In"}
//         </button>
//       </form>

//       {/* Divider */}
//       <div className="my-6 flex items-center gap-3">
//         <div className="h-px flex-1 bg-white/10" />
//         <span className="text-xs text-zinc-600">or</span>
//         <div className="h-px flex-1 bg-white/10" />
//       </div>

//       {/* GitHub */}
//       <button
//         type="button"
//         onClick={handleGithubLogin}
//         className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/20 active:scale-[0.98]"
//       >
//         <IconBrandGithub className="h-4.5 w-4.5" />
//         Continue with GitHub
//       </button>

//       {/* Footer link */}
//       <p className="mt-8 text-center text-sm text-zinc-600">
//         Don&apos;t have an account?{" "}
//         <Link href="/signup" className="text-violet-400 hover:text-violet-300 transition-colors">
//           Sign up
//         </Link>
//       </p>
//     </div>
//   );
// }

"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  IconCode,
  IconBrandGithub,
  IconLoader2,
  IconMail,
  IconLock,
  IconShieldCheck,
  IconAlertCircle,
  IconSparkles,
} from "@tabler/icons-react";
import { useAuth } from "@/context/AuthContext";

const inputCls =
  "peer w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] py-3.5 pl-11 pr-4 text-[15px] text-white placeholder:text-[#7A8499] backdrop-blur-xl transition-all duration-200 focus:border-[#5B5FFF]/60 focus:outline-none focus:ring-4 focus:ring-[#5B5FFF]/10";

export default function LoginPage() {
  const { signIn, signInWithGithub, setAuthActionLoading } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      await signIn(email, password);
      router.replace("/dashboard");
    } catch {
      setError("Invalid credentials. Try again.");
      setAuthActionLoading(null);
      setLoading(false);
    }
  }

  function handleGithubLogin() {
    setAuthActionLoading("Redirecting to GitHub...");
    try {
      signInWithGithub();
    } catch (err: any) {
      setError("Could not redirect to GitHub. Try again.");
      setAuthActionLoading(null);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-5 py-14 text-white">
      {/* ─── Background ─── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5B5FFF]/25 blur-[160px]" />
        <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-[#4F8CFF]/25 blur-[140px]" />
        <div className="absolute bottom-0 -left-20 h-[380px] w-[380px] rounded-full bg-[#00D4FF]/10 blur-[130px]" />
      </div>

      <div className="w-full max-w-[480px] animate-[fadeUp_0.6s_ease-out_both]">
        {/* ─── Card ─── */}
        <div className="relative">
          {/* gradient border */}
          <div className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-transparent" />
          {/* soft glow */}
          <div className="absolute -inset-8 -z-10 rounded-[36px] bg-gradient-to-br from-[#5B5FFF]/20 via-transparent to-[#00D4FF]/10 blur-2xl" />

          <div className="relative rounded-[28px] bg-[#0D1324]/80 p-8 backdrop-blur-2xl shadow-[0_30px_120px_-30px_rgba(91,95,255,0.5)] sm:p-10">
            {/* ── Logo ── */}
            <div className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#4F8CFF]/25 to-[#5B5FFF]/25 shadow-[0_10px_40px_-10px_rgba(91,95,255,0.7)]">
                <IconCode className="h-5 w-5 text-white" />
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#050816] ring-1 ring-white/10">
                  <IconShieldCheck className="h-2.5 w-2.5 text-[#00D4FF]" />
                </span>
              </div>
              <div className="leading-tight">
                <div className="text-[15px] font-semibold tracking-tight">
                  CodeSentry AI
                </div>
                <div className="text-[11px] font-medium text-[#7A8499]">
                  AI Powered Code Intelligence
                </div>
              </div>
            </div>

            {/* ── Heading ── */}
            <div className="mt-8">
              <h1 className="text-[36px] font-semibold leading-[1.1] tracking-tight sm:text-[42px]">
                Welcome back
              </h1>
              <p className="mt-2 text-[15px] text-[#AAB3C5]">
                Continue reviewing code with AI-powered insights.
              </p>
            </div>

            {/* ── Error ── */}
            {error && (
              <div className="relative mt-6 animate-[fadeUp_0.25s_ease-out_both] overflow-hidden rounded-2xl border border-white/[0.06] bg-red-500/[0.06] p-3.5 pl-4 backdrop-blur">
                <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-red-400 to-red-600" />
                <div className="flex items-start gap-2.5 pl-2">
                  <IconAlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                  <p className="text-[13px] text-red-200">{error}</p>
                </div>
              </div>
            )}

            {/* ── Form ── */}
            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[13px] font-medium text-[#AAB3C5]"
                >
                  Email address
                </label>
                <div className="relative">
                  <IconMail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A8499] transition peer-focus:text-[#5B5FFF]" />
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputCls}
                    autoFocus
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-[13px] font-medium text-[#AAB3C5]"
                  >
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="group text-[12px] font-medium text-[#AAB3C5] transition hover:text-white"
                  >
                    Forgot password?
                    <span className="ml-0.5 inline-block h-px w-0 bg-white align-middle transition-all duration-300 group-hover:w-3" />
                  </Link>
                </div>
                <div className="relative">
                  <IconLock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A8499]" />
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={inputCls}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#4F8CFF] to-[#5B5FFF] px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_40px_-12px_rgba(91,95,255,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                {loading && <IconLoader2 className="h-4 w-4 animate-spin" />}
                {loading ? "Signing in…" : "Sign In"}
              </button>
            </form>

            {/* ── Divider ── */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#7A8499]">
                or
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </div>

            {/* ── GitHub ── */}
            <button
              type="button"
              onClick={handleGithubLogin}
              className="group flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-3.5 text-[15px] font-medium text-white backdrop-blur-xl transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_0_40px_-10px_rgba(91,95,255,0.4)]"
            >
              <IconBrandGithub className="h-5 w-5" />
              Continue with GitHub
            </button>

            {/* ── Footer ── */}
            <p className="mt-8 text-center text-[13px] text-[#AAB3C5]">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="group relative font-medium text-white"
              >
                Sign up
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-[#4F8CFF] to-[#5B5FFF] transition-all duration-300 group-hover:w-full" />
              </Link>
            </p>
          </div>
        </div>

        {/* ── Trust / Security ── */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium text-[#AAB3C5] backdrop-blur">
            <IconShieldCheck className="h-3.5 w-3.5 text-[#22C55E]" />
            Enterprise-grade Security
            <span className="mx-1 h-1 w-1 rounded-full bg-white/20" />
            <IconSparkles className="h-3.5 w-3.5 text-[#00D4FF]" />
            Powered by AI
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#7A8499]">
              Trusted by teams at
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[13px] font-semibold text-white/40">
              <span className="transition hover:text-white/70">GitHub</span>
              <span className="transition hover:text-white/70">Stripe</span>
              <span className="transition hover:text-white/70">Vercel</span>
              <span className="transition hover:text-white/70">OpenAI</span>
              <span className="transition hover:text-white/70">Linear</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}

