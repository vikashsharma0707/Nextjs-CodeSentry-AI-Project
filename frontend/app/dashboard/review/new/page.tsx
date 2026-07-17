// "use client";

// import { useState } from "react";
// import { IconPlayerPlay, IconLoader2, IconWand, IconAlertCircle } from "@tabler/icons-react";
// import { SEVERITY_STYLES } from "@/lib/mock-data";
// import { cn } from "@/lib/utils";

// type Severity = "critical" | "high" | "medium" | "low";

// type IssueResult = {
//   id: string;
//   line: number;
//   severity: Severity;
//   type: string;
//   description: string;
//   snippet: string;
// };

// export default function NewReviewPage() {
//   const [code, setCode] = useState("");
//   const [language, setLanguage] = useState("typescript");
//   const [reviewType, setReviewType] = useState("full");
//   const [isScanning, setIsScanning] = useState(false);
//   const [showResults, setShowResults] = useState(false);
//   const [issues, setIssues] = useState<IssueResult[]>([]);
//   const [error, setError] = useState("");

//   const handleScan = async () => {
//     if (!code.trim()) return;
//     setIsScanning(true);
//     setShowResults(false);
//     setError("");

//     try {
//       const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
//       const token = tokenMatch ? tokenMatch[2] : null;
//       if (!token) throw new Error("Not authenticated");

//       const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
//       const res = await fetch(`${API_URL}/api/review/scan-snippet`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ code, language, reviewType }),
//       });

//       if (!res.ok) {
//         const body = await res.json().catch(() => ({}));
//         throw new Error(body?.error?.message || "Scan failed");
//       }

//       const data = await res.json();
//       const resultsWithIds: IssueResult[] = (data.issues || []).map(
//         (issue: Omit<IssueResult, "id">, index: number) => ({
//           ...issue,
//           id: `issue-${index}`,
//         })
//       );

//       setIssues(resultsWithIds);
//       setShowResults(true);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Something went wrong while scanning.");
//     } finally {
//       setIsScanning(false);
//     }
//   };

//   const counts = issues.reduce(
//     (acc, issue) => {
//       acc[issue.severity] = (acc[issue.severity] || 0) + 1;
//       return acc;
//     },
//     {} as Record<Severity, number>
//   );

//   return (
//     <div className="space-y-6 max-w-4xl mx-auto">
//       {/* ── Editor Controls ── */}
//       <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
//         <div className="flex gap-4">
//           <div className="flex flex-col gap-1.5">
//             <label className="text-xs font-medium text-zinc-400">Language</label>
//             <select
//               value={language}
//               onChange={(e) => setLanguage(e.target.value)}
//               className="bg-black/40 border border-white/10 rounded-lg text-sm text-white px-3 py-2 outline-none focus:border-violet-500/50"
//             >
//               <option value="typescript">TypeScript</option>
//               <option value="javascript">JavaScript</option>
//               <option value="python">Python</option>
//               <option value="go">Go</option>
//               <option value="rust">Rust</option>
//             </select>
//           </div>
//           <div className="flex flex-col gap-1.5">
//             <label className="text-xs font-medium text-zinc-400">Review Type</label>
//             <select
//               value={reviewType}
//               onChange={(e) => setReviewType(e.target.value)}
//               className="bg-black/40 border border-white/10 rounded-lg text-sm text-white px-3 py-2 outline-none focus:border-violet-500/50"
//             >
//               <option value="full">Full Review</option>
//               <option value="security">Security Scan</option>
//               <option value="style">Style Check</option>
//               <option value="performance">Performance</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* ── Editor ── */}
//       <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-inner">
//         <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
//           <div className="flex gap-1.5">
//             <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
//             <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
//             <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
//           </div>
//           <span className="text-xs text-zinc-500 font-mono">snippet.{language === 'python' ? 'py' : language === 'go' ? 'go' : language === 'rust' ? 'rs' : 'ts'}</span>
//         </div>
//         <textarea
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//           placeholder="Paste your code here..."
//           className="w-full min-h-[320px] bg-transparent text-green-400 font-mono text-sm p-4 outline-none resize-y placeholder:text-zinc-600 leading-relaxed"
//           spellCheck={false}
//         />
//       </div>

//       {error && <p className="text-sm text-red-400">{error}</p>}

//       {/* ── Action ── */}
//       <div className="flex justify-end">
//         <button
//           onClick={handleScan}
//           disabled={!code.trim() || isScanning}
//           className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:bg-violet-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {isScanning ? (
//             <><IconLoader2 className="h-5 w-5 animate-spin" /> Analyzing...</>
//           ) : (
//             <><IconPlayerPlay className="h-5 w-5" /> Run Review</>
//           )}
//         </button>
//       </div>

//       {/* ── Results ── */}
//       {showResults && (
//         <div className="mt-12 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
//           <h2 className="text-lg font-semibold text-white flex items-center gap-2">
//             <IconAlertCircle className="h-5 w-5 text-violet-400" />
//             Review Results
//           </h2>

//           {issues.length === 0 ? (
//             <p className="text-sm text-zinc-400">No issues found — nice and clean!</p>
//           ) : (
//             <>
//               <div className="flex gap-3 overflow-x-auto pb-2">
//                 {(["critical", "high", "medium", "low"] as Severity[])
//                   .filter((sev) => counts[sev])
//                   .map((sev) => (
//                     <div
//                       key={sev}
//                       className={cn(
//                         "flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium",
//                         SEVERITY_STYLES[sev]
//                       )}
//                     >
//                       <span className="w-2 h-2 rounded-full bg-current"></span> {counts[sev]} {sev[0].toUpperCase() + sev.slice(1)}
//                     </div>
//                   ))}
//               </div>

//               <div className="space-y-4">
//                 {issues.map((issue) => (
//                   <div key={issue.id} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
//                     <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
//                       <div className="flex items-center gap-3">
//                         <span className={cn("px-2 py-0.5 rounded text-xs font-semibold border", SEVERITY_STYLES[issue.severity])}>
//                           {issue.severity.toUpperCase()}
//                         </span>
//                         <span className="text-sm font-medium text-white">{issue.type}</span>
//                         <span className="text-xs text-zinc-500">Line {issue.line}</span>
//                       </div>
//                       <button className="flex items-center gap-1.5 rounded-lg bg-violet-600/20 px-3 py-1.5 text-xs font-medium text-violet-300 transition-colors hover:bg-violet-600/40">
//                         <IconWand className="h-3.5 w-3.5" />
//                         Apply AI Fix
//                       </button>
//                     </div>
//                     <div className="p-4">
//                       <p className="text-sm text-zinc-300 mb-4">{issue.description}</p>
//                       <div className="rounded-lg bg-black/50 p-3 font-mono text-sm text-red-400 border border-red-500/20 overflow-x-auto">
//                         <code>{issue.snippet}</code>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { IconPlayerPlay, IconLoader2, IconWand, IconAlertCircle, IconCopy, IconTrash, IconMaximize, IconLanguage, IconSparkles, IconCheck } from "@tabler/icons-react";
import { SEVERITY_STYLES } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

type Severity = "critical" | "high" | "medium" | "low";

type IssueResult = {
  id: string;
  line: number;
  severity: Severity;
  type: string;
  description: string;
  snippet: string;
};

export default function NewReviewPage() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("typescript");
  const [reviewType, setReviewType] = useState("full");
  const [isScanning, setIsScanning] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [issues, setIssues] = useState<IssueResult[]>([]);
  const [error, setError] = useState("");

  const handleScan = async () => {
    if (!code.trim()) return;
    setIsScanning(true);
    setShowResults(false);
    setError("");

    try {
      const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
      const token = tokenMatch ? tokenMatch[2] : null;
      if (!token) throw new Error("Not authenticated");

      const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
      const res = await fetch(`${API_URL}/api/review/scan-snippet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ code, language, reviewType }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error?.message || "Scan failed");
      }

      const data = await res.json();
      const resultsWithIds: IssueResult[] = (data.issues || []).map(
        (issue: Omit<IssueResult, "id">, index: number) => ({
          ...issue,
          id: `issue-${index}`,
        })
      );

      setIssues(resultsWithIds);
      setShowResults(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong while scanning.");
    } finally {
      setIsScanning(false);
    }
  };

  const counts = issues.reduce(
    (acc, issue) => {
      acc[issue.severity] = (acc[issue.severity] || 0) + 1;
      return acc;
    },
    {} as Record<Severity, number>
  );

  const overallScore = issues.length === 0 ? 98 : Math.max(45, 100 - issues.length * 8);

  return (
    <div className="min-h-screen bg-[#050816] pb-12">
      {/* Premium Header */}
      <div className="border-b border-white/8 bg-[#0B1220]/90 backdrop-blur-2xl sticky top-0 z-50">
        <div className="max-w-screen-2xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-[#5B5FFF] to-[#00D4FF] flex items-center justify-center">
                <IconSparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-2xl tracking-tight text-white">Code Review</div>
                <div className="text-xs text-[#94A3B8] -mt-1 font-mono">AI POWERED STATIC ANALYSIS</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#101826] rounded-2xl border border-white/8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-400">AI Online</span>
            </div>
            
            <div className="text-[#94A3B8] font-mono text-xs">EST. TIME: ~{Math.max(4, Math.floor(code.length / 180))}s</div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-8 pt-10 grid grid-cols-12 gap-8">
        {/* Left Sidebar: Configuration */}
        <div className="col-span-12 lg:col-span-3">
          <div className="glass-card rounded-3xl p-8 sticky top-24">
            <div className="uppercase text-xs tracking-[2px] text-[#94A3B8] font-mono mb-6">REVIEW CONFIGURATION</div>
            
            <div className="space-y-8">
              {/* Language */}
              <div>
                <label className="flex items-center gap-2 text-sm text-white mb-3">
                  <IconLanguage className="w-4 h-4" /> Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-[#101826] border border-white/10 rounded-2xl px-5 py-3.5 text-sm focus:border-[#5B5FFF] transition-colors outline-none"
                >
                  <option value="typescript">TypeScript</option>
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="go">Go</option>
                  <option value="rust">Rust</option>
                </select>
              </div>

              {/* Review Type */}
              <div>
                <label className="text-sm text-white mb-3 block">Review Depth</label>
                <select
                  value={reviewType}
                  onChange={(e) => setReviewType(e.target.value)}
                  className="w-full bg-[#101826] border border-white/10 rounded-2xl px-5 py-3.5 text-sm focus:border-[#5B5FFF] transition-colors outline-none"
                >
                  <option value="full">Full Analysis</option>
                  <option value="security">Security Focused</option>
                  <option value="style">Style &amp; Best Practices</option>
                  <option value="performance">Performance Audit</option>
                </select>
              </div>

              {/* Toggles */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                {[
                  { label: "Security Vulnerabilities", checked: true },
                  { label: "Performance Bottlenecks", checked: true },
                  { label: "Best Practices", checked: true },
                  { label: "Code Smells", checked: false },
                ].map((toggle, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-[#94A3B8]">{toggle.label}</span>
                    <div className={`w-9 h-5 rounded-full relative cursor-pointer transition-colors ${toggle.checked ? 'bg-[#5B5FFF]' : 'bg-white/10'}`}>
                      <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${toggle.checked ? 'translate-x-4' : 'translate-x-0.5'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="col-span-12 lg:col-span-6 space-y-6">
          {/* Editor Container */}
          <div className="glass-card rounded-3xl overflow-hidden border border-white/8 shadow-2xl">
            {/* Editor Toolbar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#0B1220] px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="px-3 py-1 bg-[#101826] text-xs font-mono rounded-xl text-[#94A3B8] flex items-center gap-2">
                    <span className="text-emerald-400">●</span> 
                    snippet.{language === 'python' ? 'py' : language === 'go' ? 'go' : language === 'rust' ? 'rs' : 'tsx'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  onClick={() => navigator.clipboard.writeText(code)}
                  className="p-2 hover:bg-white/5 rounded-xl text-[#94A3B8] hover:text-white transition-colors"
                >
                  <IconCopy className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setCode("")}
                  className="p-2 hover:bg-white/5 rounded-xl text-[#94A3B8] hover:text-white transition-colors"
                >
                  <IconTrash className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-white/5 rounded-xl text-[#94A3B8] hover:text-white transition-colors">
                  <IconMaximize className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Code Editor */}
            <div className="relative bg-[#050816]">
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#0A1020] border-r border-white/10 flex flex-col items-end pr-3 py-4 text-right text-xs text-[#475569] select-none font-mono pointer-events-none">
                {Array.from({ length: Math.max(12, code.split('\n').length) }).map((_, i) => (
                  <div key={i} className="h-6">{i + 1}</div>
                ))}
              </div>
              
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="// Paste or type your code here to begin AI analysis..."
                className="w-full min-h-[460px] bg-transparent pl-16 pr-8 py-4 text-[#E0F2FE] font-mono text-sm leading-relaxed resize-y outline-none placeholder:text-[#475569]"
                spellCheck={false}
              />
            </div>
          </div>

          {error && (
            <div className="glass-card border-red-500/30 bg-red-500/5 p-5 rounded-2xl flex items-start gap-3 text-red-400">
              <IconAlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <p>{error}</p>
            </div>
          )}

          {/* Scan Button */}
          <div className="flex justify-center pt-3">
            <button
              onClick={handleScan}
              disabled={!code.trim() || isScanning}
              className="premium-button group relative flex items-center justify-center gap-3 px-14 py-6 rounded-3xl text-lg font-semibold shadow-2xl shadow-[#5B5FFF]/30 hover:shadow-[#5B5FFF]/50 transition-all active:scale-[0.985] disabled:opacity-60 disabled:cursor-not-allowed min-w-[280px]"
            >
              {isScanning ? (
                <>
                  <IconLoader2 className="h-6 w-6 animate-spin" />
                  <span>Analyzing with AI...</span>
                </>
              ) : (
                <>
                  <IconPlayerPlay className="h-6 w-6 group-hover:scale-110 transition" />
                  <span>RUN AI CODE REVIEW</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Sidebar: Live Status */}
        <div className="col-span-12 lg:col-span-3">
          <div className="glass-card rounded-3xl p-8 sticky top-24">
            <div className="uppercase text-xs tracking-widest text-[#94A3B8] font-mono mb-5">LIVE ANALYSIS STATUS</div>
            
            <div className="mb-8 p-6 bg-[#101826] rounded-2xl border border-white/8">
              <div className="flex justify-between text-sm mb-4">
                <span className="text-[#94A3B8]">AI Confidence</span>
                <span className="text-white font-medium">{isScanning ? "92%" : "—"}</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r from-[#5B5FFF] to-[#00D4FF] transition-all duration-700 ${isScanning ? 'w-[92%]' : 'w-0'}`} />
              </div>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">Model</span>
                <span className="font-medium text-white">codesentry-4o</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">Tokens Used</span>
                <span className="font-mono text-white">{Math.floor(code.length / 3.8)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">Review Scope</span>
                <span className="font-medium text-emerald-400">Full File</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {showResults && (
        <div className="max-w-screen-2xl mx-auto px-8 mt-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-semibold text-white flex items-center gap-4">
                Analysis Complete
                <div className="px-4 py-1 text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-2xl">READY FOR FIXES</div>
              </h2>
              <p className="text-[#94A3B8] mt-1">AI reviewed {code.split('\n').length} lines • Found {issues.length} issues</p>
            </div>

            {/* Summary Stats */}
            <div className="flex gap-4">
              {(["critical", "high", "medium", "low"] as Severity[]).map((sev) => 
                counts[sev] ? (
                  <div key={sev} className={cn("glass-card px-6 py-4 rounded-2xl flex items-center gap-4", SEVERITY_STYLES[sev])}>
                    <div className="text-3xl font-semibold tabular-nums">{counts[sev]}</div>
                    <div className="text-xs leading-tight uppercase tracking-widest">
                      {sev}<br />ISSUES
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>

          <div className="space-y-6">
            {issues.length === 0 ? (
              <div className="glass-card p-20 rounded-3xl text-center">
                <div className="mx-auto w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-8">
                  <IconCheck className="w-12 h-12 text-emerald-400" />
                </div>
                <h3 className="text-2xl text-white">Perfect score</h3>
                <p className="text-[#94A3B8] max-w-md mx-auto mt-3">No issues detected. Your code follows industry best practices.</p>
              </div>
            ) : (
              issues.map((issue, index) => (
                <div 
                  key={issue.id} 
                  className="glass-card rounded-3xl overflow-hidden border border-white/8 group"
                >
                  <div className="px-8 py-5 border-b border-white/10 flex items-center justify-between bg-[#101826]">
                    <div className="flex items-center gap-5">
                      <div className={cn("px-5 py-1 rounded-2xl text-xs font-semibold border", SEVERITY_STYLES[issue.severity])}>
                        {issue.severity.toUpperCase()}
                      </div>
                      <div>
                        <div className="font-medium text-white">{issue.type}</div>
                        <div className="text-xs text-[#94A3B8]">Line {issue.line} • Confidence 87%</div>
                      </div>
                    </div>

                    <button className="flex items-center gap-3 bg-gradient-to-r from-[#5B5FFF] to-[#4F8CFF] text-white text-sm font-medium px-8 py-3 rounded-2xl hover:brightness-110 active:scale-[0.985] transition-all">
                      <IconWand className="w-4 h-4" />
                      APPLY AI FIX
                    </button>
                  </div>

                  <div className="p-8 grid grid-cols-12 gap-8">
                    <div className="col-span-12 lg:col-span-7">
                      <div className="text-sm text-[#94A3B8] mb-2">DESCRIPTION</div>
                      <p className="text-white leading-relaxed">{issue.description}</p>
                    </div>
                    
                    <div className="col-span-12 lg:col-span-5">
                      <div className="text-sm text-[#94A3B8] mb-3">CODE SNIPPET</div>
                      <div className="rounded-2xl bg-[#050816] p-5 font-mono text-sm border border-red-500/20 text-red-300 overflow-x-auto">
                        <code>{issue.snippet}</code>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}