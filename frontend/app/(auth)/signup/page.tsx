// "use client";

// import { useState, type FormEvent } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { IconCode, IconBrandGithub, IconLoader2 } from "@tabler/icons-react";
// import { useAuth } from "@/context/AuthContext";

// const inputCls =
//   "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-600 backdrop-blur-sm transition-colors duration-200 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30";

// export default function SignupPage() {
//   const { signUp, signInWithGithub, setAuthActionLoading } = useAuth();
//   const router = useRouter();

//   const [name, setName]           = useState("");
//   const [email, setEmail]         = useState("");
//   const [password, setPassword]   = useState("");
//   const [confirm, setConfirm]     = useState("");
//   const [loading, setLoading]     = useState(false);
//   const [error, setError]         = useState("");

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
//         Create your account
//       </h1>
//       <p className="mb-8 text-center text-sm text-zinc-500">
//         Start reviewing code with AI in seconds
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
//           <label htmlFor="signup-name" className="mb-1.5 block text-xs font-medium text-zinc-400">
//             Full name
//           </label>
//           <input
//             id="signup-name"
//             type="text"
//             autoComplete="name"
//             placeholder="Alex Johnson"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className={inputCls}
//             autoFocus
//           />
//         </div>

//         <div>
//           <label htmlFor="signup-email" className="mb-1.5 block text-xs font-medium text-zinc-400">
//             Email address
//           </label>
//           <input
//             id="signup-email"
//             type="email"
//             autoComplete="email"
//             placeholder="you@company.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className={inputCls}
//           />
//         </div>

//         <div>
//           <label htmlFor="signup-password" className="mb-1.5 block text-xs font-medium text-zinc-400">
//             Password
//           </label>
//           <input
//             id="signup-password"
//             type="password"
//             autoComplete="new-password"
//             placeholder="At least 8 characters"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className={inputCls}
//           />
//         </div>

//         <div>
//           <label htmlFor="signup-confirm" className="mb-1.5 block text-xs font-medium text-zinc-400">
//             Confirm password
//           </label>
//           <input
//             id="signup-confirm"
//             type="password"
//             autoComplete="new-password"
//             placeholder="Repeat your password"
//             value={confirm}
//             onChange={(e) => setConfirm(e.target.value)}
//             className={inputCls}
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-200 hover:bg-violet-500 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
//         >
//           {loading && <IconLoader2 className="h-4 w-4 animate-spin" />}
//           {loading ? "Creating account…" : "Create Account"}
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
//         Already have an account?{" "}
//         <Link href="/login" className="text-violet-400 hover:text-violet-300 transition-colors">
//           Log in
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
  IconUser,
  IconMail,
  IconLock,
  IconShieldCheck,
  IconAlertCircle,
  IconSparkles,
  IconCheck,
  IconCircle,
} from "@tabler/icons-react";
import { useAuth } from "@/context/AuthContext";

const inputCls =
  "peer w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] py-3.5 pl-11 pr-4 text-[15px] text-white placeholder:text-[#7A8499] backdrop-blur-xl transition-all duration-200 focus:border-[#5B5FFF]/60 focus:outline-none focus:ring-4 focus:ring-[#5B5FFF]/10";

/* ---------- Pure-UI helpers (do not touch validation logic) ---------- */
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
    return {
      score,
      label: "Weak",
      color: "from-red-500 to-rose-500",
      width: "w-1/3",
    };
  if (score <= 4)
    return {
      score,
      label: "Medium",
      color: "from-amber-400 to-orange-500",
      width: "w-2/3",
    };
  return {
    score,
    label: "Strong",
    color: "from-emerald-400 to-emerald-500",
    width: "w-full",
  };
}

export default function SignupPage() {
  const { signUp, signInWithGithub, setAuthActionLoading } = useAuth();
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
      router.replace("/dashboard");
    } catch {
      setError("Something went wrong. Please try again.");
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

  const checks = getPasswordChecks(password);
  const strength = getStrength(password);

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
        <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5B5FFF]/25 blur-[160px]" />
        <div className="absolute -top-32 right-0 h-[440px] w-[440px] rounded-full bg-[#4F8CFF]/25 blur-[140px]" />
        <div className="absolute bottom-0 -left-20 h-[400px] w-[400px] rounded-full bg-[#00D4FF]/10 blur-[130px]" />
      </div>

      <div className="w-full max-w-[500px] animate-[fadeUp_0.6s_ease-out_both]">
        {/* ─── Card ─── */}
        <div className="relative">
          <div className="absolute -inset-px rounded-[30px] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-transparent" />
          <div className="absolute -inset-8 -z-10 rounded-[38px] bg-gradient-to-br from-[#5B5FFF]/20 via-transparent to-[#00D4FF]/10 blur-2xl" />

          <div className="relative rounded-[30px] bg-[#0D1324]/80 p-8 backdrop-blur-2xl shadow-[0_30px_120px_-30px_rgba(91,95,255,0.5)] sm:p-10">
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
                  Enterprise AI Code Intelligence
                </div>
              </div>
            </div>

            {/* ── Heading ── */}
            <div className="mt-8">
              <h1 className="text-[36px] font-semibold leading-[1.1] tracking-tight sm:text-[44px]">
                Create your account
              </h1>
              <p className="mt-2 text-[15px] text-[#AAB3C5]">
                Start reviewing code with enterprise-grade AI in minutes.
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
                  htmlFor="name"
                  className="mb-2 block text-[13px] font-medium text-[#AAB3C5]"
                >
                  Full name
                </label>
                <div className="relative">
                  <IconUser className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A8499]" />
                  <input
                    id="name"
                    type="text"
                    placeholder="Ada Lovelace"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputCls}
                    autoFocus
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[13px] font-medium text-[#AAB3C5]"
                >
                  Email address
                </label>
                <div className="relative">
                  <IconMail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A8499]" />
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-[13px] font-medium text-[#AAB3C5]"
                >
                  Password
                </label>
                <div className="relative">
                  <IconLock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A8499]" />
                  <input
                    id="password"
                    type="password"
                    placeholder="At least 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={inputCls}
                  />
                </div>

                {/* Strength bar */}
                {password && (
                  <div className="mt-3 animate-[fadeUp_0.25s_ease-out_both]">
                    <div className="flex items-center justify-between text-[11px] font-medium">
                      <span className="text-[#7A8499]">Password strength</span>
                      <span
                        className={
                          strength.label === "Strong"
                            ? "text-emerald-400"
                            : strength.label === "Medium"
                            ? "text-amber-300"
                            : "text-red-300"
                        }
                      >
                        {strength.label}
                      </span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${strength.color} ${strength.width} transition-all duration-500`}
                      />
                    </div>

                    {/* Requirements */}
                    <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 text-[12px]">
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
                            r.ok ? "text-emerald-300" : "text-[#7A8499]"
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
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="confirm"
                  className="mb-2 block text-[13px] font-medium text-[#AAB3C5]"
                >
                  Confirm password
                </label>
                <div className="relative">
                  <IconShieldCheck className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A8499]" />
                  <input
                    id="confirm"
                    type="password"
                    placeholder="Re-enter password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    className={inputCls}
                  />
                  {confirm && password && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2">
                      {confirm === password ? (
                        <IconCheck className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <IconAlertCircle className="h-4 w-4 text-red-400" />
                      )}
                    </span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#4F8CFF] to-[#5B5FFF] px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_40px_-12px_rgba(91,95,255,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                {loading && <IconLoader2 className="h-4 w-4 animate-spin" />}
                {loading ? "Creating account…" : "Create Account"}
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
              Already have an account?{" "}
              <Link
                href="/login"
                className="group relative font-medium text-white"
              >
                Log in
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-[#4F8CFF] to-[#5B5FFF] transition-all duration-300 group-hover:w-full" />
              </Link>
            </p>
          </div>
        </div>

        {/* ── Security badges ── */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {[
            { icon: IconShieldCheck, label: "SOC 2 Ready", tint: "text-emerald-400" },
            { icon: IconLock, label: "256-bit Encryption", tint: "text-[#4F8CFF]" },
            { icon: IconBrandGithub, label: "GitHub OAuth", tint: "text-white" },
            { icon: IconSparkles, label: "AI Powered", tint: "text-[#00D4FF]" },
          ].map(({ icon: Icon, label, tint }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium text-[#AAB3C5] backdrop-blur"
            >
              <Icon className={`h-3.5 w-3.5 ${tint}`} />
              {label}
            </span>
          ))}
        </div>

        {/* ── Trust logos ── */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#7A8499]">
            Trusted by engineering teams
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[13px] font-semibold text-white/40">
            {["GitHub", "Stripe", "OpenAI", "Vercel", "Linear", "Notion"].map(
              (b) => (
                <span key={b} className="transition hover:text-white/70">
                  {b}
                </span>
              ),
            )}
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
