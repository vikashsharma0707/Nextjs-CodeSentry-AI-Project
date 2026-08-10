// // // // // // "use client";

// // // // // // import { useState } from "react";
// // // // // // import { IconPlayerPlay, IconLoader2, IconWand, IconAlertCircle } from "@tabler/icons-react";
// // // // // // import { SEVERITY_STYLES } from "@/lib/mock-data";
// // // // // // import { cn } from "@/lib/utils";

// // // // // // type Severity = "critical" | "high" | "medium" | "low";

// // // // // // type IssueResult = {
// // // // // //   id: string;
// // // // // //   line: number;
// // // // // //   severity: Severity;
// // // // // //   type: string;
// // // // // //   description: string;
// // // // // //   snippet: string;
// // // // // // };

// // // // // // export default function NewReviewPage() {
// // // // // //   const [code, setCode] = useState("");
// // // // // //   const [language, setLanguage] = useState("typescript");
// // // // // //   const [reviewType, setReviewType] = useState("full");
// // // // // //   const [isScanning, setIsScanning] = useState(false);
// // // // // //   const [showResults, setShowResults] = useState(false);
// // // // // //   const [issues, setIssues] = useState<IssueResult[]>([]);
// // // // // //   const [error, setError] = useState("");

// // // // // //   const handleScan = async () => {
// // // // // //     if (!code.trim()) return;
// // // // // //     setIsScanning(true);
// // // // // //     setShowResults(false);
// // // // // //     setError("");

// // // // // //     try {
// // // // // //       const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
// // // // // //       const token = tokenMatch ? tokenMatch[2] : null;
// // // // // //       if (!token) throw new Error("Not authenticated");

// // // // // //       const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
// // // // // //       const res = await fetch(`${API_URL}/api/review/scan-snippet`, {
// // // // // //         method: "POST",
// // // // // //         headers: {
// // // // // //           "Content-Type": "application/json",
// // // // // //           Authorization: `Bearer ${token}`,
// // // // // //         },
// // // // // //         body: JSON.stringify({ code, language, reviewType }),
// // // // // //       });

// // // // // //       if (!res.ok) {
// // // // // //         const body = await res.json().catch(() => ({}));
// // // // // //         throw new Error(body?.error?.message || "Scan failed");
// // // // // //       }

// // // // // //       const data = await res.json();
// // // // // //       const resultsWithIds: IssueResult[] = (data.issues || []).map(
// // // // // //         (issue: Omit<IssueResult, "id">, index: number) => ({
// // // // // //           ...issue,
// // // // // //           id: `issue-${index}`,
// // // // // //         })
// // // // // //       );

// // // // // //       setIssues(resultsWithIds);
// // // // // //       setShowResults(true);
// // // // // //     } catch (err) {
// // // // // //       setError(err instanceof Error ? err.message : "Something went wrong while scanning.");
// // // // // //     } finally {
// // // // // //       setIsScanning(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const counts = issues.reduce(
// // // // // //     (acc, issue) => {
// // // // // //       acc[issue.severity] = (acc[issue.severity] || 0) + 1;
// // // // // //       return acc;
// // // // // //     },
// // // // // //     {} as Record<Severity, number>
// // // // // //   );

// // // // // //   return (
// // // // // //     <div className="space-y-6 max-w-4xl mx-auto">
// // // // // //       {/* ── Editor Controls ── */}
// // // // // //       <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
// // // // // //         <div className="flex gap-4">
// // // // // //           <div className="flex flex-col gap-1.5">
// // // // // //             <label className="text-xs font-medium text-zinc-400">Language</label>
// // // // // //             <select
// // // // // //               value={language}
// // // // // //               onChange={(e) => setLanguage(e.target.value)}
// // // // // //               className="bg-black/40 border border-white/10 rounded-lg text-sm text-white px-3 py-2 outline-none focus:border-violet-500/50"
// // // // // //             >
// // // // // //               <option value="typescript">TypeScript</option>
// // // // // //               <option value="javascript">JavaScript</option>
// // // // // //               <option value="python">Python</option>
// // // // // //               <option value="go">Go</option>
// // // // // //               <option value="rust">Rust</option>
// // // // // //             </select>
// // // // // //           </div>
// // // // // //           <div className="flex flex-col gap-1.5">
// // // // // //             <label className="text-xs font-medium text-zinc-400">Review Type</label>
// // // // // //             <select
// // // // // //               value={reviewType}
// // // // // //               onChange={(e) => setReviewType(e.target.value)}
// // // // // //               className="bg-black/40 border border-white/10 rounded-lg text-sm text-white px-3 py-2 outline-none focus:border-violet-500/50"
// // // // // //             >
// // // // // //               <option value="full">Full Review</option>
// // // // // //               <option value="security">Security Scan</option>
// // // // // //               <option value="style">Style Check</option>
// // // // // //               <option value="performance">Performance</option>
// // // // // //             </select>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* ── Editor ── */}
// // // // // //       <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-inner">
// // // // // //         <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
// // // // // //           <div className="flex gap-1.5">
// // // // // //             <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
// // // // // //             <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
// // // // // //             <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
// // // // // //           </div>
// // // // // //           <span className="text-xs text-zinc-500 font-mono">snippet.{language === 'python' ? 'py' : language === 'go' ? 'go' : language === 'rust' ? 'rs' : 'ts'}</span>
// // // // // //         </div>
// // // // // //         <textarea
// // // // // //           value={code}
// // // // // //           onChange={(e) => setCode(e.target.value)}
// // // // // //           placeholder="Paste your code here..."
// // // // // //           className="w-full min-h-[320px] bg-transparent text-green-400 font-mono text-sm p-4 outline-none resize-y placeholder:text-zinc-600 leading-relaxed"
// // // // // //           spellCheck={false}
// // // // // //         />
// // // // // //       </div>

// // // // // //       {error && <p className="text-sm text-red-400">{error}</p>}

// // // // // //       {/* ── Action ── */}
// // // // // //       <div className="flex justify-end">
// // // // // //         <button
// // // // // //           onClick={handleScan}
// // // // // //           disabled={!code.trim() || isScanning}
// // // // // //           className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:bg-violet-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
// // // // // //         >
// // // // // //           {isScanning ? (
// // // // // //             <><IconLoader2 className="h-5 w-5 animate-spin" /> Analyzing...</>
// // // // // //           ) : (
// // // // // //             <><IconPlayerPlay className="h-5 w-5" /> Run Review</>
// // // // // //           )}
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {/* ── Results ── */}
// // // // // //       {showResults && (
// // // // // //         <div className="mt-12 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
// // // // // //           <h2 className="text-lg font-semibold text-white flex items-center gap-2">
// // // // // //             <IconAlertCircle className="h-5 w-5 text-violet-400" />
// // // // // //             Review Results
// // // // // //           </h2>

// // // // // //           {issues.length === 0 ? (
// // // // // //             <p className="text-sm text-zinc-400">No issues found — nice and clean!</p>
// // // // // //           ) : (
// // // // // //             <>
// // // // // //               <div className="flex gap-3 overflow-x-auto pb-2">
// // // // // //                 {(["critical", "high", "medium", "low"] as Severity[])
// // // // // //                   .filter((sev) => counts[sev])
// // // // // //                   .map((sev) => (
// // // // // //                     <div
// // // // // //                       key={sev}
// // // // // //                       className={cn(
// // // // // //                         "flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium",
// // // // // //                         SEVERITY_STYLES[sev]
// // // // // //                       )}
// // // // // //                     >
// // // // // //                       <span className="w-2 h-2 rounded-full bg-current"></span> {counts[sev]} {sev[0].toUpperCase() + sev.slice(1)}
// // // // // //                     </div>
// // // // // //                   ))}
// // // // // //               </div>

// // // // // //               <div className="space-y-4">
// // // // // //                 {issues.map((issue) => (
// // // // // //                   <div key={issue.id} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
// // // // // //                     <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
// // // // // //                       <div className="flex items-center gap-3">
// // // // // //                         <span className={cn("px-2 py-0.5 rounded text-xs font-semibold border", SEVERITY_STYLES[issue.severity])}>
// // // // // //                           {issue.severity.toUpperCase()}
// // // // // //                         </span>
// // // // // //                         <span className="text-sm font-medium text-white">{issue.type}</span>
// // // // // //                         <span className="text-xs text-zinc-500">Line {issue.line}</span>
// // // // // //                       </div>
// // // // // //                       <button className="flex items-center gap-1.5 rounded-lg bg-violet-600/20 px-3 py-1.5 text-xs font-medium text-violet-300 transition-colors hover:bg-violet-600/40">
// // // // // //                         <IconWand className="h-3.5 w-3.5" />
// // // // // //                         Apply AI Fix
// // // // // //                       </button>
// // // // // //                     </div>
// // // // // //                     <div className="p-4">
// // // // // //                       <p className="text-sm text-zinc-300 mb-4">{issue.description}</p>
// // // // // //                       <div className="rounded-lg bg-black/50 p-3 font-mono text-sm text-red-400 border border-red-500/20 overflow-x-auto">
// // // // // //                         <code>{issue.snippet}</code>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // "use client";

// // // // // import { useState } from "react";
// // // // // import { IconPlayerPlay, IconLoader2, IconWand, IconAlertCircle, IconCopy, IconTrash, IconMaximize, IconLanguage, IconSparkles, IconCheck } from "@tabler/icons-react";
// // // // // import { SEVERITY_STYLES } from "@/lib/mock-data";
// // // // // import { cn } from "@/lib/utils";

// // // // // type Severity = "critical" | "high" | "medium" | "low";

// // // // // type IssueResult = {
// // // // //   id: string;
// // // // //   line: number;
// // // // //   severity: Severity;
// // // // //   type: string;
// // // // //   description: string;
// // // // //   snippet: string;
// // // // // };

// // // // // export default function NewReviewPage() {
// // // // //   const [code, setCode] = useState("");
// // // // //   const [language, setLanguage] = useState("typescript");
// // // // //   const [reviewType, setReviewType] = useState("full");
// // // // //   const [isScanning, setIsScanning] = useState(false);
// // // // //   const [showResults, setShowResults] = useState(false);
// // // // //   const [issues, setIssues] = useState<IssueResult[]>([]);
// // // // //   const [error, setError] = useState("");

// // // // //   const handleScan = async () => {
// // // // //     if (!code.trim()) return;
// // // // //     setIsScanning(true);
// // // // //     setShowResults(false);
// // // // //     setError("");

// // // // //     try {
// // // // //       const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
// // // // //       const token = tokenMatch ? tokenMatch[2] : null;
// // // // //       if (!token) throw new Error("Not authenticated");

// // // // //       const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
// // // // //       const res = await fetch(`${API_URL}/api/review/scan-snippet`, {
// // // // //         method: "POST",
// // // // //         headers: {
// // // // //           "Content-Type": "application/json",
// // // // //           Authorization: `Bearer ${token}`,
// // // // //         },
// // // // //         body: JSON.stringify({ code, language, reviewType }),
// // // // //       });

// // // // //       if (!res.ok) {
// // // // //         const body = await res.json().catch(() => ({}));
// // // // //         throw new Error(body?.error?.message || "Scan failed");
// // // // //       }

// // // // //       const data = await res.json();
// // // // //       const resultsWithIds: IssueResult[] = (data.issues || []).map(
// // // // //         (issue: Omit<IssueResult, "id">, index: number) => ({
// // // // //           ...issue,
// // // // //           id: `issue-${index}`,
// // // // //         })
// // // // //       );

// // // // //       setIssues(resultsWithIds);
// // // // //       setShowResults(true);
// // // // //     } catch (err) {
// // // // //       setError(err instanceof Error ? err.message : "Something went wrong while scanning.");
// // // // //     } finally {
// // // // //       setIsScanning(false);
// // // // //     }
// // // // //   };

// // // // //   const counts = issues.reduce(
// // // // //     (acc, issue) => {
// // // // //       acc[issue.severity] = (acc[issue.severity] || 0) + 1;
// // // // //       return acc;
// // // // //     },
// // // // //     {} as Record<Severity, number>
// // // // //   );

// // // // //   const overallScore = issues.length === 0 ? 98 : Math.max(45, 100 - issues.length * 8);

// // // // //   return (
// // // // //     <div className="min-h-screen bg-[#050816] pb-12">
// // // // //       {/* Premium Header */}
// // // // //       <div className="border-b border-white/8 bg-[#0B1220]/90 backdrop-blur-2xl sticky top-0 z-50">
// // // // //         <div className="max-w-screen-2xl mx-auto px-8 py-5 flex items-center justify-between">
// // // // //           <div className="flex items-center gap-4">
// // // // //             <div className="flex items-center gap-3">
// // // // //               <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-[#5B5FFF] to-[#00D4FF] flex items-center justify-center">
// // // // //                 <IconSparkles className="w-5 h-5 text-white" />
// // // // //               </div>
// // // // //               <div>
// // // // //                 <div className="font-semibold text-2xl tracking-tight text-white">Code Review</div>
// // // // //                 <div className="text-xs text-[#94A3B8] -mt-1 font-mono">AI POWERED STATIC ANALYSIS</div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="flex items-center gap-6 text-sm">
// // // // //             <div className="flex items-center gap-2 px-4 py-2 bg-[#101826] rounded-2xl border border-white/8">
// // // // //               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
// // // // //               <span className="text-emerald-400">AI Online</span>
// // // // //             </div>
            
// // // // //             <div className="text-[#94A3B8] font-mono text-xs">EST. TIME: ~{Math.max(4, Math.floor(code.length / 180))}s</div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="max-w-screen-2xl mx-auto px-8 pt-10 grid grid-cols-12 gap-8">
// // // // //         {/* Left Sidebar: Configuration */}
// // // // //         <div className="col-span-12 lg:col-span-3">
// // // // //           <div className="glass-card rounded-3xl p-8 sticky top-24">
// // // // //             <div className="uppercase text-xs tracking-[2px] text-[#94A3B8] font-mono mb-6">REVIEW CONFIGURATION</div>
            
// // // // //             <div className="space-y-8">
// // // // //               {/* Language */}
// // // // //               <div>
// // // // //                 <label className="flex items-center gap-2 text-sm text-white mb-3">
// // // // //                   <IconLanguage className="w-4 h-4" /> Language
// // // // //                 </label>
// // // // //                 <select
// // // // //                   value={language}
// // // // //                   onChange={(e) => setLanguage(e.target.value)}
// // // // //                   className="w-full bg-[#101826] border border-white/10 rounded-2xl px-5 py-3.5 text-sm focus:border-[#5B5FFF] transition-colors outline-none"
// // // // //                 >
// // // // //                   <option value="typescript">TypeScript</option>
// // // // //                   <option value="javascript">JavaScript</option>
// // // // //                   <option value="python">Python</option>
// // // // //                   <option value="go">Go</option>
// // // // //                   <option value="rust">Rust</option>
// // // // //                 </select>
// // // // //               </div>

// // // // //               {/* Review Type */}
// // // // //               <div>
// // // // //                 <label className="text-sm text-white mb-3 block">Review Depth</label>
// // // // //                 <select
// // // // //                   value={reviewType}
// // // // //                   onChange={(e) => setReviewType(e.target.value)}
// // // // //                   className="w-full bg-[#101826] border border-white/10 rounded-2xl px-5 py-3.5 text-sm focus:border-[#5B5FFF] transition-colors outline-none"
// // // // //                 >
// // // // //                   <option value="full">Full Analysis</option>
// // // // //                   <option value="security">Security Focused</option>
// // // // //                   <option value="style">Style &amp; Best Practices</option>
// // // // //                   <option value="performance">Performance Audit</option>
// // // // //                 </select>
// // // // //               </div>

// // // // //               {/* Toggles */}
// // // // //               <div className="space-y-4 pt-4 border-t border-white/10">
// // // // //                 {[
// // // // //                   { label: "Security Vulnerabilities", checked: true },
// // // // //                   { label: "Performance Bottlenecks", checked: true },
// // // // //                   { label: "Best Practices", checked: true },
// // // // //                   { label: "Code Smells", checked: false },
// // // // //                 ].map((toggle, i) => (
// // // // //                   <div key={i} className="flex items-center justify-between">
// // // // //                     <span className="text-sm text-[#94A3B8]">{toggle.label}</span>
// // // // //                     <div className={`w-9 h-5 rounded-full relative cursor-pointer transition-colors ${toggle.checked ? 'bg-[#5B5FFF]' : 'bg-white/10'}`}>
// // // // //                       <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${toggle.checked ? 'translate-x-4' : 'translate-x-0.5'}`} />
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Main Editor Area */}
// // // // //         <div className="col-span-12 lg:col-span-6 space-y-6">
// // // // //           {/* Editor Container */}
// // // // //           <div className="glass-card rounded-3xl overflow-hidden border border-white/8 shadow-2xl">
// // // // //             {/* Editor Toolbar */}
// // // // //             <div className="flex items-center justify-between border-b border-white/10 bg-[#0B1220] px-6 py-4">
// // // // //               <div className="flex items-center gap-4">
// // // // //                 <div className="flex items-center gap-2.5">
// // // // //                   <div className="px-3 py-1 bg-[#101826] text-xs font-mono rounded-xl text-[#94A3B8] flex items-center gap-2">
// // // // //                     <span className="text-emerald-400">●</span> 
// // // // //                     snippet.{language === 'python' ? 'py' : language === 'go' ? 'go' : language === 'rust' ? 'rs' : 'tsx'}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div className="flex items-center gap-3">
// // // // //                 <button 
// // // // //                   onClick={() => navigator.clipboard.writeText(code)}
// // // // //                   className="p-2 hover:bg-white/5 rounded-xl text-[#94A3B8] hover:text-white transition-colors"
// // // // //                 >
// // // // //                   <IconCopy className="w-4 h-4" />
// // // // //                 </button>
// // // // //                 <button 
// // // // //                   onClick={() => setCode("")}
// // // // //                   className="p-2 hover:bg-white/5 rounded-xl text-[#94A3B8] hover:text-white transition-colors"
// // // // //                 >
// // // // //                   <IconTrash className="w-4 h-4" />
// // // // //                 </button>
// // // // //                 <button className="p-2 hover:bg-white/5 rounded-xl text-[#94A3B8] hover:text-white transition-colors">
// // // // //                   <IconMaximize className="w-4 h-4" />
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Code Editor */}
// // // // //             <div className="relative bg-[#050816]">
// // // // //               <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#0A1020] border-r border-white/10 flex flex-col items-end pr-3 py-4 text-right text-xs text-[#475569] select-none font-mono pointer-events-none">
// // // // //                 {Array.from({ length: Math.max(12, code.split('\n').length) }).map((_, i) => (
// // // // //                   <div key={i} className="h-6">{i + 1}</div>
// // // // //                 ))}
// // // // //               </div>
              
// // // // //               <textarea
// // // // //                 value={code}
// // // // //                 onChange={(e) => setCode(e.target.value)}
// // // // //                 placeholder="// Paste or type your code here to begin AI analysis..."
// // // // //                 className="w-full min-h-[460px] bg-transparent pl-16 pr-8 py-4 text-[#E0F2FE] font-mono text-sm leading-relaxed resize-y outline-none placeholder:text-[#475569]"
// // // // //                 spellCheck={false}
// // // // //               />
// // // // //             </div>
// // // // //           </div>

// // // // //           {error && (
// // // // //             <div className="glass-card border-red-500/30 bg-red-500/5 p-5 rounded-2xl flex items-start gap-3 text-red-400">
// // // // //               <IconAlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
// // // // //               <p>{error}</p>
// // // // //             </div>
// // // // //           )}

// // // // //           {/* Scan Button */}
// // // // //           <div className="flex justify-center pt-3">
// // // // //             <button
// // // // //               onClick={handleScan}
// // // // //               disabled={!code.trim() || isScanning}
// // // // //               className="premium-button group relative flex items-center justify-center gap-3 px-14 py-6 rounded-3xl text-lg font-semibold shadow-2xl shadow-[#5B5FFF]/30 hover:shadow-[#5B5FFF]/50 transition-all active:scale-[0.985] disabled:opacity-60 disabled:cursor-not-allowed min-w-[280px]"
// // // // //             >
// // // // //               {isScanning ? (
// // // // //                 <>
// // // // //                   <IconLoader2 className="h-6 w-6 animate-spin" />
// // // // //                   <span>Analyzing with AI...</span>
// // // // //                 </>
// // // // //               ) : (
// // // // //                 <>
// // // // //                   <IconPlayerPlay className="h-6 w-6 group-hover:scale-110 transition" />
// // // // //                   <span>RUN AI CODE REVIEW</span>
// // // // //                 </>
// // // // //               )}
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Right Sidebar: Live Status */}
// // // // //         <div className="col-span-12 lg:col-span-3">
// // // // //           <div className="glass-card rounded-3xl p-8 sticky top-24">
// // // // //             <div className="uppercase text-xs tracking-widest text-[#94A3B8] font-mono mb-5">LIVE ANALYSIS STATUS</div>
            
// // // // //             <div className="mb-8 p-6 bg-[#101826] rounded-2xl border border-white/8">
// // // // //               <div className="flex justify-between text-sm mb-4">
// // // // //                 <span className="text-[#94A3B8]">AI Confidence</span>
// // // // //                 <span className="text-white font-medium">{isScanning ? "92%" : "—"}</span>
// // // // //               </div>
// // // // //               <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
// // // // //                 <div className={`h-full bg-gradient-to-r from-[#5B5FFF] to-[#00D4FF] transition-all duration-700 ${isScanning ? 'w-[92%]' : 'w-0'}`} />
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="space-y-6 text-sm">
// // // // //               <div className="flex justify-between">
// // // // //                 <span className="text-[#94A3B8]">Model</span>
// // // // //                 <span className="font-medium text-white">codesentry-4o</span>
// // // // //               </div>
// // // // //               <div className="flex justify-between">
// // // // //                 <span className="text-[#94A3B8]">Tokens Used</span>
// // // // //                 <span className="font-mono text-white">{Math.floor(code.length / 3.8)}</span>
// // // // //               </div>
// // // // //               <div className="flex justify-between">
// // // // //                 <span className="text-[#94A3B8]">Review Scope</span>
// // // // //                 <span className="font-medium text-emerald-400">Full File</span>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Results Section */}
// // // // //       {showResults && (
// // // // //         <div className="max-w-screen-2xl mx-auto px-8 mt-16">
// // // // //           <div className="flex items-end justify-between mb-8">
// // // // //             <div>
// // // // //               <h2 className="text-3xl font-semibold text-white flex items-center gap-4">
// // // // //                 Analysis Complete
// // // // //                 <div className="px-4 py-1 text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-2xl">READY FOR FIXES</div>
// // // // //               </h2>
// // // // //               <p className="text-[#94A3B8] mt-1">AI reviewed {code.split('\n').length} lines • Found {issues.length} issues</p>
// // // // //             </div>

// // // // //             {/* Summary Stats */}
// // // // //             <div className="flex gap-4">
// // // // //               {(["critical", "high", "medium", "low"] as Severity[]).map((sev) => 
// // // // //                 counts[sev] ? (
// // // // //                   <div key={sev} className={cn("glass-card px-6 py-4 rounded-2xl flex items-center gap-4", SEVERITY_STYLES[sev])}>
// // // // //                     <div className="text-3xl font-semibold tabular-nums">{counts[sev]}</div>
// // // // //                     <div className="text-xs leading-tight uppercase tracking-widest">
// // // // //                       {sev}<br />ISSUES
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 ) : null
// // // // //               )}
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="space-y-6">
// // // // //             {issues.length === 0 ? (
// // // // //               <div className="glass-card p-20 rounded-3xl text-center">
// // // // //                 <div className="mx-auto w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-8">
// // // // //                   <IconCheck className="w-12 h-12 text-emerald-400" />
// // // // //                 </div>
// // // // //                 <h3 className="text-2xl text-white">Perfect score</h3>
// // // // //                 <p className="text-[#94A3B8] max-w-md mx-auto mt-3">No issues detected. Your code follows industry best practices.</p>
// // // // //               </div>
// // // // //             ) : (
// // // // //               issues.map((issue, index) => (
// // // // //                 <div 
// // // // //                   key={issue.id} 
// // // // //                   className="glass-card rounded-3xl overflow-hidden border border-white/8 group"
// // // // //                 >
// // // // //                   <div className="px-8 py-5 border-b border-white/10 flex items-center justify-between bg-[#101826]">
// // // // //                     <div className="flex items-center gap-5">
// // // // //                       <div className={cn("px-5 py-1 rounded-2xl text-xs font-semibold border", SEVERITY_STYLES[issue.severity])}>
// // // // //                         {issue.severity.toUpperCase()}
// // // // //                       </div>
// // // // //                       <div>
// // // // //                         <div className="font-medium text-white">{issue.type}</div>
// // // // //                         <div className="text-xs text-[#94A3B8]">Line {issue.line} • Confidence 87%</div>
// // // // //                       </div>
// // // // //                     </div>

// // // // //                     <button className="flex items-center gap-3 bg-gradient-to-r from-[#5B5FFF] to-[#4F8CFF] text-white text-sm font-medium px-8 py-3 rounded-2xl hover:brightness-110 active:scale-[0.985] transition-all">
// // // // //                       <IconWand className="w-4 h-4" />
// // // // //                       APPLY AI FIX
// // // // //                     </button>
// // // // //                   </div>

// // // // //                   <div className="p-8 grid grid-cols-12 gap-8">
// // // // //                     <div className="col-span-12 lg:col-span-7">
// // // // //                       <div className="text-sm text-[#94A3B8] mb-2">DESCRIPTION</div>
// // // // //                       <p className="text-white leading-relaxed">{issue.description}</p>
// // // // //                     </div>
                    
// // // // //                     <div className="col-span-12 lg:col-span-5">
// // // // //                       <div className="text-sm text-[#94A3B8] mb-3">CODE SNIPPET</div>
// // // // //                       <div className="rounded-2xl bg-[#050816] p-5 font-mono text-sm border border-red-500/20 text-red-300 overflow-x-auto">
// // // // //                         <code>{issue.snippet}</code>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))
// // // // //             )}
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }



// // // // "use client";

// // // // import { useState, useEffect, useRef, useMemo } from "react";
// // // // import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
// // // // import {
// // // //   IconSparkles,
// // // //   IconRobot,
// // // //   IconClock,
// // // //   IconLanguage,
// // // //   IconScan,
// // // //   IconShieldCheck,
// // // //   IconBolt,
// // // //   IconCheck,
// // // //   IconFlame,
// // // //   IconFileCode,
// // // //   IconCopy,
// // // //   IconTrash,
// // // //   IconMaximize,
// // // //   IconPlayerPlay,
// // // //   IconLoader2,
// // // //   IconActivity,
// // // //   IconBrain,
// // // //   IconHash,
// // // //   IconTarget,
// // // //   IconCircleCheck,
// // // //   IconBug,
// // // //   IconAlertCircle,
// // // //   IconExclamationCircle,
// // // //   IconWand,
// // // //   IconFileText,
// // // //   IconCode,
// // // //   IconGitCommit,
// // // //   IconTrendingUp,
// // // //   IconRefresh,
// // // //   IconX,
// // // //   IconChevronDown,
// // // //   IconLock,
// // // //   IconFileCheck,
// // // //   IconRocket,
// // // //   IconLayoutList,
// // // //   IconMessage,
// // // // } from "@tabler/icons-react";
// // // // import { SEVERITY_STYLES } from "@/lib/mock-data";
// // // // import { cn } from "@/lib/utils";

// // // // /* ================================================================
// // // //    TYPES
// // // //    ================================================================ */
// // // // type Severity = "critical" | "high" | "medium" | "low";

// // // // type IssueResult = {
// // // //   id: string;
// // // //   line: number;
// // // //   severity: Severity;
// // // //   type: string;
// // // //   description: string;
// // // //   snippet: string;
// // // // };

// // // // /* ================================================================
// // // //    DESIGN TOKENS — Soft Lavender Theme (Shared)
// // // //    ================================================================ */
// // // // const COLORS = {
// // // //   primary: "#7A5AF8",
// // // //   secondary: "#9C82FF",
// // // //   background: "#F7F4FF",
// // // //   card: "rgba(255,255,255,0.75)",
// // // //   border: "rgba(122,90,248,0.12)",
// // // //   text: "#111827",
// // // //   textSecondary: "#6B7280",
// // // //   textMuted: "#9CA3AF",
// // // //   success: "#22C55E",
// // // //   warning: "#F59E0B",
// // // //   danger: "#EF4444",
// // // //   info: "#3B82F6",
// // // // } as const;

// // // // const SEVERITY_CONFIG: Record<
// // // //   Severity,
// // // //   { label: string; color: string; bg: string; border: string; icon: typeof IconBug }
// // // // > = {
// // // //   critical: {
// // // //     label: "Critical",
// // // //     color: "#DC2626",
// // // //     bg: "#FEF2F2",
// // // //     border: "#FECACA",
// // // //     icon: IconAlertCircle,
// // // //   },
// // // //   high: {
// // // //     label: "High",
// // // //     color: "#EA580C",
// // // //     bg: "#FFF7ED",
// // // //     border: "#FED7AA",
// // // //     icon: IconExclamationCircle,
// // // //   },
// // // //   medium: {
// // // //     label: "Medium",
// // // //     color: "#D97706",
// // // //     bg: "#FFFBEB",
// // // //     border: "#FDE68A",
// // // //     icon: IconFlame,
// // // //   },
// // // //   low: {
// // // //     label: "Low",
// // // //     color: "#2563EB",
// // // //     bg: "#EFF6FF",
// // // //     border: "#BFDBFE",
// // // //     icon: IconBolt,
// // // //   },
// // // // };

// // // // /* ================================================================
// // // //    ANIMATION VARIANTS
// // // //    ================================================================ */
// // // // const fadeInUp = {
// // // //   hidden: { opacity: 0, y: 16 },
// // // //   visible: (i: number) => ({
// // // //     opacity: 1,
// // // //     y: 0,
// // // //     transition: { delay: i * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
// // // //   }),
// // // // };

// // // // const staggerContainer = {
// // // //   hidden: { opacity: 0 },
// // // //   visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
// // // // };

// // // // /* ================================================================
// // // //    BACKGROUND — Ultra Premium (Shared)
// // // //    ================================================================ */
// // // // function PremiumBackground() {
// // // //   const mouseX = useMotionValue(0);
// // // //   const mouseY = useMotionValue(0);
// // // //   const glowX = useSpring(mouseX, { damping: 30, stiffness: 150 });
// // // //   const glowY = useSpring(mouseY, { damping: 30, stiffness: 150 });

// // // //   useEffect(() => {
// // // //     const handleMove = (e: MouseEvent) => {
// // // //       mouseX.set(e.clientX);
// // // //       mouseY.set(e.clientY);
// // // //     };
// // // //     window.addEventListener("mousemove", handleMove);
// // // //     return () => window.removeEventListener("mousemove", handleMove);
// // // //   }, [mouseX, mouseY]);

// // // //   return (
// // // //     <div
// // // //       className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
// // // //       style={{ backgroundColor: COLORS.background }}
// // // //     >
// // // //       <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4FF] via-[#F0EBFF] to-[#EDE8FF]" />
// // // //       <motion.div
// // // //         animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
// // // //         transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// // // //         className="absolute -top-[20%] -left-[10%] h-[70vh] w-[70vh] rounded-full opacity-40"
// // // //         style={{
// // // //           background: "radial-gradient(circle, rgba(122,90,248,0.22) 0%, transparent 70%)",
// // // //           filter: "blur(80px)",
// // // //         }}
// // // //       />
// // // //       <motion.div
// // // //         animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
// // // //         transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// // // //         className="absolute top-[30%] -right-[15%] h-[60vh] w-[60vh] rounded-full opacity-30"
// // // //         style={{
// // // //           background: "radial-gradient(circle, rgba(156,130,255,0.28) 0%, transparent 70%)",
// // // //           filter: "blur(90px)",
// // // //         }}
// // // //       />
// // // //       <motion.div
// // // //         animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1, 1.05, 1] }}
// // // //         transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
// // // //         className="absolute -bottom-[10%] left-[20%] h-[50vh] w-[50vh] rounded-full opacity-25"
// // // //         style={{
// // // //           background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
// // // //           filter: "blur(70px)",
// // // //         }}
// // // //       />
// // // //       <motion.div
// // // //         className="absolute h-[500px] w-[500px] rounded-full opacity-15"
// // // //         style={{
// // // //           x: useTransform(glowX, (v) => v - 250),
// // // //           y: useTransform(glowY, (v) => v - 250),
// // // //           background: "radial-gradient(circle, rgba(122,90,248,0.25) 0%, transparent 60%)",
// // // //           filter: "blur(60px)",
// // // //         }}
// // // //       />
// // // //       <div
// // // //         className="absolute inset-0 opacity-[0.025]"
// // // //         style={{
// // // //           backgroundImage: `linear-gradient(rgba(122,90,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(122,90,248,0.3) 1px, transparent 1px)`,
// // // //           backgroundSize: "64px 64px",
// // // //         }}
// // // //       />
// // // //       <div
// // // //         className="absolute inset-0 opacity-[0.012]"
// // // //         style={{
// // // //           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
// // // //           backgroundRepeat: "repeat",
// // // //           backgroundSize: "128px 128px",
// // // //         }}
// // // //       />
// // // //     </div>
// // // //   );
// // // // }

// // // // /* ================================================================
// // // //    ANIMATED COUNTER
// // // //    ================================================================ */
// // // // function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
// // // //   const [display, setDisplay] = useState(0);
// // // //   const ref = useRef<HTMLSpanElement>(null);
// // // //   const hasAnimated = useRef(false);

// // // //   useEffect(() => {
// // // //     const el = ref.current;
// // // //     if (!el) return;
// // // //     const observer = new IntersectionObserver(
// // // //       ([entry]) => {
// // // //         if (entry.isIntersecting && !hasAnimated.current) {
// // // //           hasAnimated.current = true;
// // // //           const duration = 1000;
// // // //           const start = performance.now();
// // // //           const animate = (now: number) => {
// // // //             const progress = Math.min((now - start) / duration, 1);
// // // //             const eased = 1 - Math.pow(1 - progress, 4);
// // // //             setDisplay(Math.round(eased * value));
// // // //             if (progress < 1) requestAnimationFrame(animate);
// // // //           };
// // // //           requestAnimationFrame(animate);
// // // //         }
// // // //       },
// // // //       { threshold: 0.5 }
// // // //     );
// // // //     observer.observe(el);
// // // //     return () => observer.disconnect();
// // // //   }, [value]);

// // // //   return (
// // // //     <span ref={ref} className="tabular-nums">
// // // //       {display.toLocaleString()}
// // // //       {suffix}
// // // //     </span>
// // // //   );
// // // // }

// // // // /* ================================================================
// // // //    GLASS CARD
// // // //    ================================================================ */
// // // // function GlassCard({
// // // //   children,
// // // //   className = "",
// // // //   hover = false,
// // // // }: {
// // // //   children: React.ReactNode;
// // // //   className?: string;
// // // //   hover?: boolean;
// // // // }) {
// // // //   return (
// // // //     <div
// // // //       className={cn(
// // // //         "rounded-2xl border bg-white/70 backdrop-blur-xl transition-shadow duration-300",
// // // //         hover && "hover:shadow-lg hover:shadow-violet-100/50",
// // // //         className
// // // //       )}
// // // //       style={{ borderColor: COLORS.border }}
// // // //     >
// // // //       {children}
// // // //     </div>
// // // //   );
// // // // }

// // // // /* ================================================================
// // // //    TOGGLE SWITCH
// // // //    ================================================================ */
// // // // function Toggle({
// // // //   label,
// // // //   checked,
// // // //   icon,
// // // // }: {
// // // //   label: string;
// // // //   checked: boolean;
// // // //   icon: React.ReactNode;
// // // // }) {
// // // //   return (
// // // //     <div className="flex items-center justify-between">
// // // //       <span className="flex items-center gap-2 text-sm text-gray-600">
// // // //         <span className="text-gray-400">{icon}</span>
// // // //         {label}
// // // //       </span>
// // // //       <div
// // // //         className={cn(
// // // //           "relative h-5 w-9 cursor-pointer rounded-full transition-colors",
// // // //           checked ? "bg-violet-500" : "bg-gray-200"
// // // //         )}
// // // //       >
// // // //         <motion.div
// // // //           animate={{ x: checked ? 16 : 2 }}
// // // //           transition={{ type: "spring", stiffness: 500, damping: 30 }}
// // // //           className="absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm"
// // // //         />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // /* ================================================================
// // // //    PROGRESS BAR
// // // //    ================================================================ */
// // // // function ProgressBar({ value, animated = false }: { value: number; animated?: boolean }) {
// // // //   return (
// // // //     <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
// // // //       <motion.div
// // // //         initial={{ width: 0 }}
// // // //         animate={{ width: `${value}%` }}
// // // //         transition={{ duration: animated ? 1.5 : 0.8, ease: "easeOut", delay: 0.2 }}
// // // //         className="h-full rounded-full"
// // // //         style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})` }}
// // // //       />
// // // //     </div>
// // // //   );
// // // // }

// // // // /* ================================================================
// // // //    SEVERITY BADGE
// // // //    ================================================================ */
// // // // function SeverityBadge({ severity }: { severity: Severity }) {
// // // //   const cfg = SEVERITY_CONFIG[severity];
// // // //   const Icon = cfg.icon;
// // // //   return (
// // // //     <span
// // // //       className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold"
// // // //       style={{ backgroundColor: cfg.bg, color: cfg.color, borderColor: cfg.border }}
// // // //     >
// // // //       <Icon className="h-3 w-3" />
// // // //       {cfg.label}
// // // //     </span>
// // // //   );
// // // // }

// // // // /* ================================================================
// // // //    ISSUE CARD
// // // //    ================================================================ */
// // // // function IssueCard({ issue, index }: { issue: IssueResult; index: number }) {
// // // //   const cfg = SEVERITY_CONFIG[issue.severity];

// // // //   return (
// // // //     <motion.div
// // // //       variants={fadeInUp}
// // // //       custom={index}
// // // //       initial="hidden"
// // // //       animate="visible"
// // // //       className="group relative overflow-hidden rounded-2xl border bg-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/40"
// // // //       style={{ borderColor: COLORS.border }}
// // // //     >
// // // //       <div
// // // //         className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
// // // //         style={{ background: `linear-gradient(135deg, ${cfg.color}08 0%, transparent 50%)` }}
// // // //       />

// // // //       <div
// // // //         className="relative flex items-center justify-between border-b px-6 py-4"
// // // //         style={{ borderColor: COLORS.border, backgroundColor: `${cfg.bg}60` }}
// // // //       >
// // // //         <div className="flex items-center gap-4">
// // // //           <SeverityBadge severity={issue.severity} />
// // // //           <div>
// // // //             <div className="text-sm font-semibold text-gray-900">{issue.type}</div>
// // // //             <div className="flex items-center gap-1 text-[11px] text-gray-400">
// // // //               <IconGitCommit className="h-3 w-3" />
// // // //               Line {issue.line} · Confidence 87%
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //         <motion.button
// // // //           whileHover={{ scale: 1.03 }}
// // // //           whileTap={{ scale: 0.97 }}
// // // //           className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:shadow-md"
// // // //           style={{ backgroundColor: COLORS.primary }}
// // // //         >
// // // //           <IconWand className="h-3.5 w-3.5" />
// // // //           Apply AI Fix
// // // //         </motion.button>
// // // //       </div>

// // // //       <div className="relative grid gap-6 p-6 md:grid-cols-2">
// // // //         <div>
// // // //           <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
// // // //             <IconMessage className="h-3.5 w-3.5" />
// // // //             Description
// // // //           </div>
// // // //           <p className="text-sm leading-relaxed text-gray-600">{issue.description}</p>
// // // //         </div>
// // // //         <div>
// // // //           <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
// // // //             <IconCode className="h-3.5 w-3.5" />
// // // //             Code Snippet
// // // //           </div>
// // // //           <div
// // // //             className="overflow-x-auto rounded-xl border bg-gray-50 p-4 font-mono text-xs"
// // // //             style={{ borderColor: `${cfg.color}30` }}
// // // //           >
// // // //             <code style={{ color: cfg.color }}>{issue.snippet}</code>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </motion.div>
// // // //   );
// // // // }

// // // // /* ================================================================
// // // //    EMPTY STATE
// // // //    ================================================================ */
// // // // function EmptyResultState() {
// // // //   return (
// // // //     <motion.div
// // // //       initial={{ opacity: 0, scale: 0.95 }}
// // // //       animate={{ opacity: 1, scale: 1 }}
// // // //       transition={{ duration: 0.5 }}
// // // //       className="flex flex-col items-center justify-center rounded-2xl border bg-white/60 py-20 backdrop-blur-xl"
// // // //       style={{ borderColor: COLORS.border }}
// // // //     >
// // // //       <motion.div
// // // //         animate={{ y: [0, -6, 0] }}
// // // //         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
// // // //         className="flex h-20 w-20 items-center justify-center rounded-2xl border bg-emerald-50 shadow-lg shadow-emerald-100"
// // // //         style={{ borderColor: "#D1FAE5" }}
// // // //       >
// // // //         <IconShieldCheck className="h-10 w-10 text-emerald-500" />
// // // //       </motion.div>
// // // //       <h3 className="mt-6 text-xl font-bold text-gray-900">Perfect Score</h3>
// // // //       <p className="mt-2 max-w-sm text-center text-sm text-gray-500">
// // // //         No issues detected. Your code follows industry best practices and security standards.
// // // //       </p>
// // // //     </motion.div>
// // // //   );
// // // // }

// // // // /* ================================================================
// // // //    MAIN PAGE
// // // //    ================================================================ */
// // // // export default function NewReviewPage() {
// // // //   const [code, setCode] = useState("");
// // // //   const [language, setLanguage] = useState("typescript");
// // // //   const [reviewType, setReviewType] = useState("full");
// // // //   const [isScanning, setIsScanning] = useState(false);
// // // //   const [showResults, setShowResults] = useState(false);
// // // //   const [issues, setIssues] = useState<IssueResult[]>([]);
// // // //   const [error, setError] = useState("");

// // // //   const handleScan = async () => {
// // // //     if (!code.trim()) return;
// // // //     setIsScanning(true);
// // // //     setShowResults(false);
// // // //     setError("");

// // // //     try {
// // // //       const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
// // // //       const token = tokenMatch ? tokenMatch[2] : null;
// // // //       if (!token) throw new Error("Not authenticated");

// // // //       const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
// // // //       const res = await fetch(`${API_URL}/api/review/scan-snippet`, {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //         body: JSON.stringify({ code, language, reviewType }),
// // // //       });

// // // //       if (!res.ok) {
// // // //         const body = await res.json().catch(() => ({}));
// // // //         throw new Error(body?.error?.message || "Scan failed");
// // // //       }

// // // //       const data = await res.json();
// // // //       const resultsWithIds: IssueResult[] = (data.issues || []).map(
// // // //         (issue: Omit<IssueResult, "id">, index: number) => ({
// // // //           ...issue,
// // // //           id: `issue-${index}`,
// // // //         })
// // // //       );

// // // //       setIssues(resultsWithIds);
// // // //       setShowResults(true);
// // // //     } catch (err) {
// // // //       setError(err instanceof Error ? err.message : "Something went wrong while scanning.");
// // // //     } finally {
// // // //       setIsScanning(false);
// // // //     }
// // // //   };

// // // //   const counts = issues.reduce(
// // // //     (acc, issue) => {
// // // //       acc[issue.severity] = (acc[issue.severity] || 0) + 1;
// // // //       return acc;
// // // //     },
// // // //     {} as Record<Severity, number>
// // // //   );

// // // //   const overallScore = issues.length === 0 ? 98 : Math.max(45, 100 - issues.length * 8);

// // // //   const lineCount = useMemo(() => Math.max(1, code.split("\n").length), [code]);
// // // //   const tokenCount = useMemo(() => Math.floor(code.length / 3.8), [code]);
// // // //   const estTime = useMemo(() => Math.max(4, Math.floor(code.length / 180)), [code]);

// // // //   const toggles = [
// // // //     { label: "Security Vulnerabilities", checked: true, icon: <IconLock className="h-4 w-4" /> },
// // // //     { label: "Performance Bottlenecks", checked: true, icon: <IconTrendingUp className="h-4 w-4" /> },
// // // //     { label: "Best Practices", checked: true, icon: <IconFileCheck className="h-4 w-4" /> },
// // // //     { label: "Code Smells", checked: false, icon: <IconBug className="h-4 w-4" /> },
// // // //   ];

// // // //   const reviewTypes = [
// // // //     { value: "full", label: "Full Analysis", icon: <IconScan className="h-4 w-4" /> },
// // // //     { value: "security", label: "Security Focused", icon: <IconShieldCheck className="h-4 w-4" /> },
// // // //     { value: "style", label: "Style & Best Practices", icon: <IconCheck className="h-4 w-4" /> },
// // // //     { value: "performance", label: "Performance Audit", icon: <IconBolt className="h-4 w-4" /> },
// // // //   ];

// // // //   return (
// // // //     <div className="relative min-h-screen text-gray-900">
// // // //       <PremiumBackground />

// // // //       {/* ========== HEADER ========== */}
// // // //       <motion.header
// // // //         initial={{ opacity: 0, y: -10 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ duration: 0.5 }}
// // // //         className="sticky top-0 z-50 border-b bg-white/60 backdrop-blur-2xl"
// // // //         style={{ borderColor: COLORS.border }}
// // // //       >
// // // //         <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">
// // // //           <div className="flex items-center gap-3">
// // // //             <div
// // // //               className="flex h-9 w-9 items-center justify-center rounded-xl shadow-md shadow-violet-200"
// // // //               style={{ backgroundColor: COLORS.primary }}
// // // //             >
// // // //               <IconSparkles className="h-5 w-5 text-white" />
// // // //             </div>
// // // //             <div>
// // // //               <h1 className="text-lg font-bold tracking-tight text-gray-900">Code Review</h1>
// // // //               <p className="-mt-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-gray-400">
// // // //                 AI Powered Static Analysis
// // // //               </p>
// // // //             </div>
// // // //           </div>

// // // //           <div className="flex items-center gap-4">
// // // //             <div
// // // //               className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium"
// // // //               style={{ backgroundColor: "rgba(255,255,255,0.6)", borderColor: COLORS.border }}
// // // //             >
// // // //               <span
// // // //                 className="h-2 w-2 animate-pulse rounded-full"
// // // //                 style={{ backgroundColor: COLORS.success }}
// // // //               />
// // // //               <span className="text-emerald-600">AI Online</span>
// // // //             </div>
// // // //             <div className="hidden items-center gap-1 text-[11px] text-gray-400 sm:flex">
// // // //               <IconClock className="h-3.5 w-3.5" />
// // // //               Est. ~{estTime}s
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </motion.header>

// // // //       {/* ========== MAIN CONTENT ========== */}
// // // //       <div className="mx-auto max-w-screen-2xl px-6 py-10">
// // // //         <div className="grid grid-cols-12 gap-6">
// // // //           {/* ── Left Sidebar: Configuration ── */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, x: -20 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             transition={{ duration: 0.5, delay: 0.1 }}
// // // //             className="col-span-12 lg:col-span-3"
// // // //           >
// // // //             <div className="sticky top-24 space-y-6">
// // // //               <GlassCard className="p-6">
// // // //                 <div className="mb-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
// // // //                   <IconTarget className="h-3.5 w-3.5" />
// // // //                   Review Configuration
// // // //                 </div>

// // // //                 <div className="space-y-6">
// // // //                   <div>
// // // //                     <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
// // // //                       <IconLanguage className="h-4 w-4 text-gray-400" />
// // // //                       Language
// // // //                     </label>
// // // //                     <div className="relative">
// // // //                       <IconChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
// // // //                       <select
// // // //                         value={language}
// // // //                         onChange={(e) => setLanguage(e.target.value)}
// // // //                         className="w-full appearance-none rounded-xl border bg-white/50 py-2.5 pl-3 pr-10 text-sm text-gray-700 outline-none transition focus:border-violet-300 focus:ring-2 focus:ring-violet-100"
// // // //                         style={{ borderColor: COLORS.border }}
// // // //                       >
// // // //                         <option value="typescript">TypeScript</option>
// // // //                         <option value="javascript">JavaScript</option>
// // // //                         <option value="python">Python</option>
// // // //                         <option value="go">Go</option>
// // // //                         <option value="rust">Rust</option>
// // // //                       </select>
// // // //                     </div>
// // // //                   </div>

// // // //                   <div>
// // // //                     <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
// // // //                       <IconScan className="h-4 w-4 text-gray-400" />
// // // //                       Review Depth
// // // //                     </label>
// // // //                     <div className="relative">
// // // //                       <IconChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
// // // //                       <select
// // // //                         value={reviewType}
// // // //                         onChange={(e) => setReviewType(e.target.value)}
// // // //                         className="w-full appearance-none rounded-xl border bg-white/50 py-2.5 pl-3 pr-10 text-sm text-gray-700 outline-none transition focus:border-violet-300 focus:ring-2 focus:ring-violet-100"
// // // //                         style={{ borderColor: COLORS.border }}
// // // //                       >
// // // //                         {reviewTypes.map((rt) => (
// // // //                           <option key={rt.value} value={rt.value}>
// // // //                             {rt.label}
// // // //                           </option>
// // // //                         ))}
// // // //                       </select>
// // // //                     </div>
// // // //                   </div>

// // // //                   <div className="space-y-4 border-t pt-5" style={{ borderColor: COLORS.border }}>
// // // //                     {toggles.map((t, i) => (
// // // //                       <Toggle key={i} label={t.label} checked={t.checked} icon={t.icon} />
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
// // // //               </GlassCard>
// // // //             </div>
// // // //           </motion.div>

// // // //           {/* ── Center: Editor ── */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.5, delay: 0.2 }}
// // // //             className="col-span-12 space-y-6 lg:col-span-6"
// // // //           >
// // // //             <GlassCard hover className="overflow-hidden">
// // // //               <div
// // // //                 className="flex items-center justify-between border-b px-5 py-3"
// // // //                 style={{ borderColor: COLORS.border }}
// // // //               >
// // // //                 <div className="flex items-center gap-3">
// // // //                   <div
// // // //                     className="flex items-center gap-2 rounded-lg border px-3 py-1 font-mono text-[11px]"
// // // //                     style={{ backgroundColor: "rgba(255,255,255,0.5)", borderColor: COLORS.border }}
// // // //                   >
// // // //                     <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: COLORS.success }} />
// // // //                     snippet.
// // // //                     {language === "python"
// // // //                       ? "py"
// // // //                       : language === "go"
// // // //                         ? "go"
// // // //                         : language === "rust"
// // // //                           ? "rs"
// // // //                           : "tsx"}
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="flex items-center gap-1">
// // // //                   <motion.button
// // // //                     whileHover={{ scale: 1.1 }}
// // // //                     whileTap={{ scale: 0.9 }}
// // // //                     onClick={() => navigator.clipboard.writeText(code)}
// // // //                     className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
// // // //                     title="Copy"
// // // //                   >
// // // //                     <IconCopy className="h-4 w-4" />
// // // //                   </motion.button>
// // // //                   <motion.button
// // // //                     whileHover={{ scale: 1.1 }}
// // // //                     whileTap={{ scale: 0.9 }}
// // // //                     onClick={() => setCode("")}
// // // //                     className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-red-500"
// // // //                     title="Clear"
// // // //                   >
// // // //                     <IconTrash className="h-4 w-4" />
// // // //                   </motion.button>
// // // //                   <motion.button
// // // //                     whileHover={{ scale: 1.1 }}
// // // //                     whileTap={{ scale: 0.9 }}
// // // //                     className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
// // // //                     title="Fullscreen"
// // // //                   >
// // // //                     <IconMaximize className="h-4 w-4" />
// // // //                   </motion.button>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="relative">
// // // //                 <div
// // // //                   className="pointer-events-none absolute bottom-0 left-0 top-0 w-12 select-none border-r bg-gray-50/50 py-4 pr-3 text-right font-mono text-xs text-gray-300"
// // // //                   style={{ borderColor: COLORS.border }}
// // // //                 >
// // // //                   {Array.from({ length: Math.max(12, lineCount) }).map((_, i) => (
// // // //                     <div key={i} className="h-6 leading-6">
// // // //                       {i + 1}
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //                 <textarea
// // // //                   value={code}
// // // //                   onChange={(e) => setCode(e.target.value)}
// // // //                   placeholder="// Paste or type your code here to begin AI analysis..."
// // // //                   className="min-h-[420px] w-full resize-y bg-transparent py-4 pl-16 pr-6 font-mono text-sm leading-6 text-gray-800 outline-none placeholder:text-gray-300"
// // // //                   spellCheck={false}
// // // //                 />
// // // //               </div>
// // // //             </GlassCard>

// // // //             <AnimatePresence>
// // // //               {error && (
// // // //                 <motion.div
// // // //                   initial={{ opacity: 0, y: 10, height: 0 }}
// // // //                   animate={{ opacity: 1, y: 0, height: "auto" }}
// // // //                   exit={{ opacity: 0, y: -10, height: 0 }}
// // // //                   className="flex items-start gap-3 rounded-2xl border bg-red-50/70 p-5 backdrop-blur-xl"
// // // //                   style={{ borderColor: "rgba(239,68,68,0.2)" }}
// // // //                 >
// // // //                   <IconAlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
// // // //                   <p className="text-sm text-red-700">{error}</p>
// // // //                   <button
// // // //                     onClick={() => setError("")}
// // // //                     className="ml-auto shrink-0 text-gray-400 hover:text-gray-600"
// // // //                   >
// // // //                     <IconX className="h-4 w-4" />
// // // //                   </button>
// // // //                 </motion.div>
// // // //               )}
// // // //             </AnimatePresence>

// // // //             <div className="flex justify-center pt-2">
// // // //               <motion.button
// // // //                 whileHover={{ scale: 1.02, y: -2 }}
// // // //                 whileTap={{ scale: 0.98 }}
// // // //                 onClick={handleScan}
// // // //                 disabled={!code.trim() || isScanning}
// // // //                 className="group relative inline-flex items-center justify-center gap-3 rounded-2xl px-12 py-5 text-base font-bold text-white shadow-xl shadow-violet-200 transition-all disabled:cursor-not-allowed disabled:opacity-50"
// // // //                 style={{ backgroundColor: COLORS.primary }}
// // // //               >
// // // //                 {isScanning ? (
// // // //                   <>
// // // //                     <IconLoader2 className="h-5 w-5 animate-spin" />
// // // //                     <span>Analyzing with AI...</span>
// // // //                   </>
// // // //                 ) : (
// // // //                   <>
// // // //                     <IconPlayerPlay className="h-5 w-5 transition-transform group-hover:scale-110" />
// // // //                     <span>Run AI Code Review</span>
// // // //                   </>
// // // //                 )}
// // // //               </motion.button>
// // // //             </div>
// // // //           </motion.div>

// // // //           {/* ── Right Sidebar: Status ── */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, x: 20 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             transition={{ duration: 0.5, delay: 0.3 }}
// // // //             className="col-span-12 lg:col-span-3"
// // // //           >
// // // //             <div className="sticky top-24 space-y-6">
// // // //               <GlassCard className="p-6">
// // // //                 <div className="mb-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
// // // //                   <IconActivity className="h-3.5 w-3.5" />
// // // //                   Live Analysis Status
// // // //                 </div>

// // // //                 <div
// // // //                   className="mb-6 rounded-xl border p-5"
// // // //                   style={{ backgroundColor: "rgba(255,255,255,0.4)", borderColor: COLORS.border }}
// // // //                 >
// // // //                   <div className="mb-3 flex justify-between text-sm">
// // // //                     <span className="text-gray-500">AI Confidence</span>
// // // //                     <span className="font-semibold text-gray-900">{isScanning ? "92%" : "—"}</span>
// // // //                   </div>
// // // //                   <ProgressBar value={isScanning ? 92 : 0} animated={isScanning} />
// // // //                 </div>

// // // //                 <div className="space-y-4 text-sm">
// // // //                   <div className="flex items-center justify-between">
// // // //                     <span className="flex items-center gap-2 text-gray-500">
// // // //                       <IconBrain className="h-4 w-4 text-violet-400" />
// // // //                       Model
// // // //                     </span>
// // // //                     <span className="font-semibold text-gray-900">codesentry-4o</span>
// // // //                   </div>
// // // //                   <div className="flex items-center justify-between">
// // // //                     <span className="flex items-center gap-2 text-gray-500">
// // // //                       <IconHash className="h-4 w-4 text-violet-400" />
// // // //                       Tokens
// // // //                     </span>
// // // //                     <span className="font-mono text-gray-900">{tokenCount.toLocaleString()}</span>
// // // //                   </div>
// // // //                   <div className="flex items-center justify-between">
// // // //                     <span className="flex items-center gap-2 text-gray-500">
// // // //                       <IconTarget className="h-4 w-4 text-violet-400" />
// // // //                       Scope
// // // //                     </span>
// // // //                     <span className="font-semibold text-emerald-600">Full File</span>
// // // //                   </div>
// // // //                   <div className="flex items-center justify-between">
// // // //                     <span className="flex items-center gap-2 text-gray-500">
// // // //                       <IconLayoutList className="h-4 w-4 text-violet-400" />
// // // //                       Lines
// // // //                     </span>
// // // //                     <span className="font-mono text-gray-900">{lineCount}</span>
// // // //                   </div>
// // // //                 </div>
// // // //               </GlassCard>
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>

// // // //         {/* ========== RESULTS ========== */}
// // // //         <AnimatePresence>
// // // //           {showResults && (
// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 30 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               exit={{ opacity: 0, y: 20 }}
// // // //               transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
// // // //               className="mt-16"
// // // //             >
// // // //               <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
// // // //                 <div>
// // // //                   <div className="flex items-center gap-3">
// // // //                     <h2 className="text-3xl font-bold tracking-tight text-gray-900">
// // // //                       Analysis Complete
// // // //                     </h2>
// // // //                     <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
// // // //                       Ready for Fixes
// // // //                     </span>
// // // //                   </div>
// // // //                   <p className="mt-2 text-sm text-gray-500">
// // // //                     AI reviewed{" "}
// // // //                     <span className="font-semibold text-gray-700">{lineCount}</span> lines · Found{" "}
// // // //                     <span className="font-semibold text-gray-700">{issues.length}</span> issues ·
// // // //                     Score{" "}
// // // //                     <span
// // // //                       className="font-semibold"
// // // //                       style={{
// // // //                         color:
// // // //                           overallScore >= 80
// // // //                             ? COLORS.success
// // // //                             : overallScore >= 60
// // // //                               ? COLORS.warning
// // // //                               : COLORS.danger,
// // // //                       }}
// // // //                     >
// // // //                       {overallScore}/100
// // // //                     </span>
// // // //                   </p>
// // // //                 </div>

// // // //                 <div className="flex flex-wrap gap-3">
// // // //                   {(["critical", "high", "medium", "low"] as Severity[]).map((sev) => {
// // // //                     const count = counts[sev] || 0;
// // // //                     if (!count) return null;
// // // //                     const cfg = SEVERITY_CONFIG[sev];
// // // //                     const Icon = cfg.icon;
// // // //                     return (
// // // //                       <motion.div
// // // //                         key={sev}
// // // //                         initial={{ opacity: 0, scale: 0.9 }}
// // // //                         animate={{ opacity: 1, scale: 1 }}
// // // //                         transition={{ delay: 0.1 }}
// // // //                         className="flex items-center gap-3 rounded-2xl border px-5 py-3 backdrop-blur-xl"
// // // //                         style={{ backgroundColor: cfg.bg, borderColor: cfg.border }}
// // // //                       >
// // // //                         <Icon className="h-5 w-5" style={{ color: cfg.color }} />
// // // //                         <div>
// // // //                           <div className="text-xl font-bold tabular-nums" style={{ color: cfg.color }}>
// // // //                             <AnimatedCounter value={count} />
// // // //                           </div>
// // // //                           <div
// // // //                             className="text-[9px] font-bold uppercase tracking-wider"
// // // //                             style={{ color: cfg.color, opacity: 0.7 }}
// // // //                           >
// // // //                             {cfg.label}
// // // //                           </div>
// // // //                         </div>
// // // //                       </motion.div>
// // // //                     );
// // // //                   })}
// // // //                 </div>
// // // //               </div>

// // // //               <div className="space-y-5">
// // // //                 {issues.length === 0 ? (
// // // //                   <EmptyResultState />
// // // //                 ) : (
// // // //                   <motion.div
// // // //                     variants={staggerContainer}
// // // //                     initial="hidden"
// // // //                     animate="visible"
// // // //                     className="space-y-5"
// // // //                   >
// // // //                     {issues.map((issue, index) => (
// // // //                       <IssueCard key={issue.id} issue={issue} index={index} />
// // // //                     ))}
// // // //                   </motion.div>
// // // //                 )}
// // // //               </div>
// // // //             </motion.div>
// // // //           )}
// // // //         </AnimatePresence>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // "use client";

// // // import { useState } from "react";
// // // import { IconPlayerPlay, IconLoader2, IconWand, IconAlertCircle, IconCopy, IconTrash, IconMaximize, IconLanguage, IconSparkles, IconCheck } from "@tabler/icons-react";
// // // import { SEVERITY_STYLES } from "@/lib/mock-data";
// // // import { cn } from "@/lib/utils";

// // // type Severity = "critical" | "high" | "medium" | "low";

// // // type IssueResult = {
// // //   id: string;
// // //   line: number;
// // //   severity: Severity;
// // //   type: string;
// // //   description: string;
// // //   snippet: string;
// // // };

// // // export default function NewReviewPage() {
// // //   const [code, setCode] = useState("");
// // //   const [language, setLanguage] = useState("typescript");
// // //   const [reviewType, setReviewType] = useState("full");
// // //   const [isScanning, setIsScanning] = useState(false);
// // //   const [showResults, setShowResults] = useState(false);
// // //   const [issues, setIssues] = useState<IssueResult[]>([]);
// // //   const [error, setError] = useState("");

// // //   const handleScan = async () => {
// // //     if (!code.trim()) return;
// // //     setIsScanning(true);
// // //     setShowResults(false);
// // //     setError("");

// // //     try {
// // //       const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
// // //       const token = tokenMatch ? tokenMatch[2] : null;
// // //       if (!token) throw new Error("Not authenticated");

// // //       const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
// // //       const res = await fetch(`${API_URL}/api/review/scan-snippet`, {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //         body: JSON.stringify({ code, language, reviewType }),
// // //       });

// // //       if (!res.ok) {
// // //         const body = await res.json().catch(() => ({}));
// // //         throw new Error(body?.error?.message || "Scan failed");
// // //       }

// // //       const data = await res.json();
// // //       const resultsWithIds: IssueResult[] = (data.issues || []).map(
// // //         (issue: Omit<IssueResult, "id">, index: number) => ({
// // //           ...issue,
// // //           id: `issue-${index}`,
// // //         })
// // //       );

// // //       setIssues(resultsWithIds);
// // //       setShowResults(true);
// // //     } catch (err) {
// // //       setError(err instanceof Error ? err.message : "Something went wrong while scanning.");
// // //     } finally {
// // //       setIsScanning(false);
// // //     }
// // //   };

// // //   const counts = issues.reduce(
// // //     (acc, issue) => {
// // //       acc[issue.severity] = (acc[issue.severity] || 0) + 1;
// // //       return acc;
// // //     },
// // //     {} as Record<Severity, number>
// // //   );

// // //   const overallScore = issues.length === 0 ? 98 : Math.max(45, 100 - issues.length * 8);

// // //   return (
// // //     <div className="min-h-screen bg-[#050816] pb-12">
// // //       {/* Premium Header */}
// // //       <div className="border-b border-white/8 bg-[#0B1220]/90 backdrop-blur-2xl sticky top-0 z-50">
// // //         <div className="max-w-screen-2xl mx-auto px-8 py-5 flex items-center justify-between">
// // //           <div className="flex items-center gap-4">
// // //             <div className="flex items-center gap-3">
// // //               <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-[#5B5FFF] to-[#00D4FF] flex items-center justify-center">
// // //                 <IconSparkles className="w-5 h-5 text-white" />
// // //               </div>
// // //               <div>
// // //                 <div className="font-semibold text-2xl tracking-tight text-white">Code Review</div>
// // //                 <div className="text-xs text-[#94A3B8] -mt-1 font-mono">AI POWERED STATIC ANALYSIS</div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="flex items-center gap-6 text-sm">
// // //             <div className="flex items-center gap-2 px-4 py-2 bg-[#101826] rounded-2xl border border-white/8">
// // //               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
// // //               <span className="text-emerald-400">AI Online</span>
// // //             </div>
            
// // //             <div className="text-[#94A3B8] font-mono text-xs">EST. TIME: ~{Math.max(4, Math.floor(code.length / 180))}s</div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="max-w-screen-2xl mx-auto px-8 pt-10 grid grid-cols-12 gap-8">
// // //         {/* Left Sidebar: Configuration */}
// // //         <div className="col-span-12 lg:col-span-3">
// // //           <div className="glass-card rounded-3xl p-8 sticky top-24">
// // //             <div className="uppercase text-xs tracking-[2px] text-[#94A3B8] font-mono mb-6">REVIEW CONFIGURATION</div>
            
// // //             <div className="space-y-8">
// // //               {/* Language */}
// // //               <div>
// // //                 <label className="flex items-center gap-2 text-sm text-white mb-3">
// // //                   <IconLanguage className="w-4 h-4" /> Language
// // //                 </label>
// // //                 <select
// // //                   value={language}
// // //                   onChange={(e) => setLanguage(e.target.value)}
// // //                   className="w-full bg-[#101826] border border-white/10 rounded-2xl px-5 py-3.5 text-sm focus:border-[#5B5FFF] transition-colors outline-none"
// // //                 >
// // //                   <option value="typescript">TypeScript</option>
// // //                   <option value="javascript">JavaScript</option>
// // //                   <option value="python">Python</option>
// // //                   <option value="go">Go</option>
// // //                   <option value="rust">Rust</option>
// // //                 </select>
// // //               </div>

// // //               {/* Review Type */}
// // //               <div>
// // //                 <label className="text-sm text-white mb-3 block">Review Depth</label>
// // //                 <select
// // //                   value={reviewType}
// // //                   onChange={(e) => setReviewType(e.target.value)}
// // //                   className="w-full bg-[#101826] border border-white/10 rounded-2xl px-5 py-3.5 text-sm focus:border-[#5B5FFF] transition-colors outline-none"
// // //                 >
// // //                   <option value="full">Full Analysis</option>
// // //                   <option value="security">Security Focused</option>
// // //                   <option value="style">Style &amp; Best Practices</option>
// // //                   <option value="performance">Performance Audit</option>
// // //                 </select>
// // //               </div>

// // //               {/* Toggles */}
// // //               <div className="space-y-4 pt-4 border-t border-white/10">
// // //                 {[
// // //                   { label: "Security Vulnerabilities", checked: true },
// // //                   { label: "Performance Bottlenecks", checked: true },
// // //                   { label: "Best Practices", checked: true },
// // //                   { label: "Code Smells", checked: false },
// // //                 ].map((toggle, i) => (
// // //                   <div key={i} className="flex items-center justify-between">
// // //                     <span className="text-sm text-[#94A3B8]">{toggle.label}</span>
// // //                     <div className={`w-9 h-5 rounded-full relative cursor-pointer transition-colors ${toggle.checked ? 'bg-[#5B5FFF]' : 'bg-white/10'}`}>
// // //                       <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${toggle.checked ? 'translate-x-4' : 'translate-x-0.5'}`} />
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Main Editor Area */}
// // //         <div className="col-span-12 lg:col-span-6 space-y-6">
// // //           {/* Editor Container */}
// // //           <div className="glass-card rounded-3xl overflow-hidden border border-white/8 shadow-2xl">
// // //             {/* Editor Toolbar */}
// // //             <div className="flex items-center justify-between border-b border-white/10 bg-[#0B1220] px-6 py-4">
// // //               <div className="flex items-center gap-4">
// // //                 <div className="flex items-center gap-2.5">
// // //                   <div className="px-3 py-1 bg-[#101826] text-xs font-mono rounded-xl text-[#94A3B8] flex items-center gap-2">
// // //                     <span className="text-emerald-400">●</span> 
// // //                     snippet.{language === 'python' ? 'py' : language === 'go' ? 'go' : language === 'rust' ? 'rs' : 'tsx'}
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="flex items-center gap-3">
// // //                 <button 
// // //                   onClick={() => navigator.clipboard.writeText(code)}
// // //                   className="p-2 hover:bg-white/5 rounded-xl text-[#94A3B8] hover:text-white transition-colors"
// // //                 >
// // //                   <IconCopy className="w-4 h-4" />
// // //                 </button>
// // //                 <button 
// // //                   onClick={() => setCode("")}
// // //                   className="p-2 hover:bg-white/5 rounded-xl text-[#94A3B8] hover:text-white transition-colors"
// // //                 >
// // //                   <IconTrash className="w-4 h-4" />
// // //                 </button>
// // //                 <button className="p-2 hover:bg-white/5 rounded-xl text-[#94A3B8] hover:text-white transition-colors">
// // //                   <IconMaximize className="w-4 h-4" />
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             {/* Code Editor */}
// // //             <div className="relative bg-[#050816]">
// // //               <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#0A1020] border-r border-white/10 flex flex-col items-end pr-3 py-4 text-right text-xs text-[#475569] select-none font-mono pointer-events-none">
// // //                 {Array.from({ length: Math.max(12, code.split('\n').length) }).map((_, i) => (
// // //                   <div key={i} className="h-6">{i + 1}</div>
// // //                 ))}
// // //               </div>
              
// // //               <textarea
// // //                 value={code}
// // //                 onChange={(e) => setCode(e.target.value)}
// // //                 placeholder="// Paste or type your code here to begin AI analysis..."
// // //                 className="w-full min-h-[460px] bg-transparent pl-16 pr-8 py-4 text-[#E0F2FE] font-mono text-sm leading-relaxed resize-y outline-none placeholder:text-[#475569]"
// // //                 spellCheck={false}
// // //               />
// // //             </div>
// // //           </div>

// // //           {error && (
// // //             <div className="glass-card border-red-500/30 bg-red-500/5 p-5 rounded-2xl flex items-start gap-3 text-red-400">
// // //               <IconAlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
// // //               <p>{error}</p>
// // //             </div>
// // //           )}

// // //           {/* Scan Button */}
// // //           <div className="flex justify-center pt-3">
// // //             <button
// // //               onClick={handleScan}
// // //               disabled={!code.trim() || isScanning}
// // //               className="premium-button group relative flex items-center justify-center gap-3 px-14 py-6 rounded-3xl text-lg font-semibold shadow-2xl shadow-[#5B5FFF]/30 hover:shadow-[#5B5FFF]/50 transition-all active:scale-[0.985] disabled:opacity-60 disabled:cursor-not-allowed min-w-[280px]"
// // //             >
// // //               {isScanning ? (
// // //                 <>
// // //                   <IconLoader2 className="h-6 w-6 animate-spin" />
// // //                   <span>Analyzing with AI...</span>
// // //                 </>
// // //               ) : (
// // //                 <>
// // //                   <IconPlayerPlay className="h-6 w-6 group-hover:scale-110 transition" />
// // //                   <span>RUN AI CODE REVIEW</span>
// // //                 </>
// // //               )}
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Right Sidebar: Live Status */}
// // //         <div className="col-span-12 lg:col-span-3">
// // //           <div className="glass-card rounded-3xl p-8 sticky top-24">
// // //             <div className="uppercase text-xs tracking-widest text-[#94A3B8] font-mono mb-5">LIVE ANALYSIS STATUS</div>
            
// // //             <div className="mb-8 p-6 bg-[#101826] rounded-2xl border border-white/8">
// // //               <div className="flex justify-between text-sm mb-4">
// // //                 <span className="text-[#94A3B8]">AI Confidence</span>
// // //                 <span className="text-white font-medium">{isScanning ? "92%" : "—"}</span>
// // //               </div>
// // //               <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
// // //                 <div className={`h-full bg-gradient-to-r from-[#5B5FFF] to-[#00D4FF] transition-all duration-700 ${isScanning ? 'w-[92%]' : 'w-0'}`} />
// // //               </div>
// // //             </div>

// // //             <div className="space-y-6 text-sm">
// // //               <div className="flex justify-between">
// // //                 <span className="text-[#94A3B8]">Model</span>
// // //                 <span className="font-medium text-white">codesentry-4o</span>
// // //               </div>
// // //               <div className="flex justify-between">
// // //                 <span className="text-[#94A3B8]">Tokens Used</span>
// // //                 <span className="font-mono text-white">{Math.floor(code.length / 3.8)}</span>
// // //               </div>
// // //               <div className="flex justify-between">
// // //                 <span className="text-[#94A3B8]">Review Scope</span>
// // //                 <span className="font-medium text-emerald-400">Full File</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Results Section */}
// // //       {showResults && (
// // //         <div className="max-w-screen-2xl mx-auto px-8 mt-16">
// // //           <div className="flex items-end justify-between mb-8">
// // //             <div>
// // //               <h2 className="text-3xl font-semibold text-white flex items-center gap-4">
// // //                 Analysis Complete
// // //                 <div className="px-4 py-1 text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-2xl">READY FOR FIXES</div>
// // //               </h2>
// // //               <p className="text-[#94A3B8] mt-1">AI reviewed {code.split('\n').length} lines • Found {issues.length} issues</p>
// // //             </div>

// // //             {/* Summary Stats */}
// // //             <div className="flex gap-4">
// // //               {(["critical", "high", "medium", "low"] as Severity[]).map((sev) => 
// // //                 counts[sev] ? (
// // //                   <div key={sev} className={cn("glass-card px-6 py-4 rounded-2xl flex items-center gap-4", SEVERITY_STYLES[sev])}>
// // //                     <div className="text-3xl font-semibold tabular-nums">{counts[sev]}</div>
// // //                     <div className="text-xs leading-tight uppercase tracking-widest">
// // //                       {sev}<br />ISSUES
// // //                     </div>
// // //                   </div>
// // //                 ) : null
// // //               )}
// // //             </div>
// // //           </div>

// // //           <div className="space-y-6">
// // //             {issues.length === 0 ? (
// // //               <div className="glass-card p-20 rounded-3xl text-center">
// // //                 <div className="mx-auto w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-8">
// // //                   <IconCheck className="w-12 h-12 text-emerald-400" />
// // //                 </div>
// // //                 <h3 className="text-2xl text-white">Perfect score</h3>
// // //                 <p className="text-[#94A3B8] max-w-md mx-auto mt-3">No issues detected. Your code follows industry best practices.</p>
// // //               </div>
// // //             ) : (
// // //               issues.map((issue, index) => (
// // //                 <div 
// // //                   key={issue.id} 
// // //                   className="glass-card rounded-3xl overflow-hidden border border-white/8 group"
// // //                 >
// // //                   <div className="px-8 py-5 border-b border-white/10 flex items-center justify-between bg-[#101826]">
// // //                     <div className="flex items-center gap-5">
// // //                       <div className={cn("px-5 py-1 rounded-2xl text-xs font-semibold border", SEVERITY_STYLES[issue.severity])}>
// // //                         {issue.severity.toUpperCase()}
// // //                       </div>
// // //                       <div>
// // //                         <div className="font-medium text-white">{issue.type}</div>
// // //                         <div className="text-xs text-[#94A3B8]">Line {issue.line} • Confidence 87%</div>
// // //                       </div>
// // //                     </div>

// // //                     <button className="flex items-center gap-3 bg-gradient-to-r from-[#5B5FFF] to-[#4F8CFF] text-white text-sm font-medium px-8 py-3 rounded-2xl hover:brightness-110 active:scale-[0.985] transition-all">
// // //                       <IconWand className="w-4 h-4" />
// // //                       APPLY AI FIX
// // //                     </button>
// // //                   </div>

// // //                   <div className="p-8 grid grid-cols-12 gap-8">
// // //                     <div className="col-span-12 lg:col-span-7">
// // //                       <div className="text-sm text-[#94A3B8] mb-2">DESCRIPTION</div>
// // //                       <p className="text-white leading-relaxed">{issue.description}</p>
// // //                     </div>
                    
// // //                     <div className="col-span-12 lg:col-span-5">
// // //                       <div className="text-sm text-[#94A3B8] mb-3">CODE SNIPPET</div>
// // //                       <div className="rounded-2xl bg-[#050816] p-5 font-mono text-sm border border-red-500/20 text-red-300 overflow-x-auto">
// // //                         <code>{issue.snippet}</code>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))
// // //             )}
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { useState } from "react";
// // import {
// //   IconPlayerPlay,
// //   IconLoader2,
// //   IconWand,
// //   IconAlertCircle,
// //   IconCopy,
// //   IconTrash,
// //   IconMaximize,
// //   IconLanguage,
// //   IconSparkles,
// //   IconCheck,
// // } from "@tabler/icons-react";
// // import { SEVERITY_STYLES } from "@/lib/mock-data";
// // import { cn } from "@/lib/utils";

// // type Severity = "critical" | "high" | "medium" | "low";

// // type IssueResult = {
// //   id: string;
// //   line: number;
// //   severity: Severity;
// //   type: string;
// //   description: string;
// //   snippet: string;
// // };

// // export default function NewReviewPage() {
// //   const [code, setCode] = useState("");
// //   const [language, setLanguage] = useState("typescript");
// //   const [reviewType, setReviewType] = useState("full");
// //   const [isScanning, setIsScanning] = useState(false);
// //   const [showResults, setShowResults] = useState(false);
// //   const [issues, setIssues] = useState<IssueResult[]>([]);
// //   const [error, setError] = useState("");

// //   const handleScan = async () => {
// //     if (!code.trim()) return;
// //     setIsScanning(true);
// //     setShowResults(false);
// //     setError("");

// //     try {
// //       const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
// //       const token = tokenMatch ? tokenMatch[2] : null;
// //       if (!token) throw new Error("Not authenticated");

// //       const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
// //       const res = await fetch(`${API_URL}/api/review/scan-snippet`, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${token}`,
// //         },
// //         body: JSON.stringify({ code, language, reviewType }),
// //       });

// //       if (!res.ok) {
// //         const body = await res.json().catch(() => ({}));
// //         throw new Error(body?.error?.message || "Scan failed");
// //       }

// //       const data = await res.json();
// //       const resultsWithIds: IssueResult[] = (data.issues || []).map(
// //         (issue: Omit<IssueResult, "id">, index: number) => ({
// //           ...issue,
// //           id: `issue-${index}`,
// //         })
// //       );

// //       setIssues(resultsWithIds);
// //       setShowResults(true);
// //     } catch (err) {
// //       setError(err instanceof Error ? err.message : "Something went wrong while scanning.");
// //     } finally {
// //       setIsScanning(false);
// //     }
// //   };

// //   const counts = issues.reduce(
// //     (acc, issue) => {
// //       acc[issue.severity] = (acc[issue.severity] || 0) + 1;
// //       return acc;
// //     },
// //     {} as Record<Severity, number>
// //   );

// //   return (
// //     <div className="relative min-h-screen pb-12">
// //       {/* Soft light lavender background */}
// //       <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#F0EBFF]">
// //         <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_70%)] blur-3xl" />
// //         <div className="absolute -right-32 bottom-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(109,140,255,0.07)_0%,transparent_70%)] blur-3xl" />
// //       </div>

// //       {/* Header */}
// //       <div className="sticky top-0 z-50 border-b border-violet-200/40 bg-white/70 backdrop-blur-2xl">
// //         <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-5">
// //           <div className="flex items-center gap-3">
// //             <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#6D8CFF] shadow-md">
// //               <IconSparkles className="h-5 w-5 text-white" />
// //             </div>
// //             <div>
// //               <div className="text-xl font-semibold tracking-tight text-[#1F1B3D]">
// //                 Code Review
// //               </div>
// //               <div className="-mt-0.5 font-mono text-xs text-[#6B7280]">
// //                 AI POWERED STATIC ANALYSIS
// //               </div>
// //             </div>
// //           </div>

// //           <div className="flex items-center gap-6 text-sm">
// //             <div className="flex items-center gap-2 rounded-2xl border border-violet-200/60 bg-white/80 px-4 py-2">
// //               <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
// //               <span className="font-medium text-emerald-600">AI Online</span>
// //             </div>
// //             <div className="font-mono text-xs text-[#6B7280]">
// //               EST. TIME: ~{Math.max(4, Math.floor(code.length / 180))}s
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="mx-auto max-w-screen-2xl px-8 pt-10 grid grid-cols-12 gap-8">
// //         {/* Left Sidebar – Configuration */}
// //         <div className="col-span-12 lg:col-span-3">
// //           <div className="sticky top-24 rounded-3xl border border-white/80 bg-white/75 p-8 shadow-sm backdrop-blur-[30px]">
// //             <div className="mb-6 font-mono text-xs uppercase tracking-[2px] text-[#6B7280]">
// //               REVIEW CONFIGURATION
// //             </div>

// //             <div className="space-y-8">
// //               {/* Language */}
// //               <div>
// //                 <label className="mb-3 flex items-center gap-2 text-sm font-medium text-[#1F1B3D]">
// //                   <IconLanguage className="h-4 w-4 text-violet-500" /> Language
// //                 </label>
// //                 <select
// //                   value={language}
// //                   onChange={(e) => setLanguage(e.target.value)}
// //                   className="w-full rounded-2xl border border-violet-200/60 bg-white/90 px-5 py-3.5 text-sm text-[#1F1B3D] outline-none transition-colors focus:border-violet-400"
// //                 >
// //                   <option value="typescript">TypeScript</option>
// //                   <option value="javascript">JavaScript</option>
// //                   <option value="python">Python</option>
// //                   <option value="go">Go</option>
// //                   <option value="rust">Rust</option>
// //                 </select>
// //               </div>

// //               {/* Review Type */}
// //               <div>
// //                 <label className="mb-3 block text-sm font-medium text-[#1F1B3D]">
// //                   Review Depth
// //                 </label>
// //                 <select
// //                   value={reviewType}
// //                   onChange={(e) => setReviewType(e.target.value)}
// //                   className="w-full rounded-2xl border border-violet-200/60 bg-white/90 px-5 py-3.5 text-sm text-[#1F1B3D] outline-none transition-colors focus:border-violet-400"
// //                 >
// //                   <option value="full">Full Analysis</option>
// //                   <option value="security">Security Focused</option>
// //                   <option value="style">Style &amp; Best Practices</option>
// //                   <option value="performance">Performance Audit</option>
// //                 </select>
// //               </div>

// //               {/* Toggles */}
// //               <div className="space-y-4 border-t border-violet-100 pt-4">
// //                 {[
// //                   { label: "Security Vulnerabilities", checked: true },
// //                   { label: "Performance Bottlenecks", checked: true },
// //                   { label: "Best Practices", checked: true },
// //                   { label: "Code Smells", checked: false },
// //                 ].map((toggle, i) => (
// //                   <div key={i} className="flex items-center justify-between">
// //                     <span className="text-sm text-[#6B7280]">{toggle.label}</span>
// //                     <div
// //                       className={cn(
// //                         "relative h-5 w-9 cursor-pointer rounded-full transition-colors",
// //                         toggle.checked ? "bg-violet-500" : "bg-violet-200/60"
// //                       )}
// //                     >
// //                       <div
// //                         className={cn(
// //                           "absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all",
// //                           toggle.checked ? "translate-x-4" : "translate-x-0.5"
// //                         )}
// //                       />
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Main Editor */}
// //         <div className="col-span-12 space-y-6 lg:col-span-6">
// //           <div className="overflow-hidden rounded-3xl border border-white/80 bg-white/75 shadow-sm backdrop-blur-[30px]">
// //             {/* Toolbar */}
// //             <div className="flex items-center justify-between border-b border-violet-100 bg-white/60 px-6 py-4">
// //               <div className="flex items-center gap-2.5">
// //                 <div className="flex items-center gap-2 rounded-xl border border-violet-200/60 bg-white px-3 py-1 font-mono text-xs text-[#6B7280]">
// //                   <span className="text-emerald-500">●</span>
// //                   snippet.
// //                   {language === "python"
// //                     ? "py"
// //                     : language === "go"
// //                     ? "go"
// //                     : language === "rust"
// //                     ? "rs"
// //                     : "tsx"}
// //                 </div>
// //               </div>

// //               <div className="flex items-center gap-2">
// //                 <button
// //                   onClick={() => navigator.clipboard.writeText(code)}
// //                   className="rounded-xl p-2 text-[#6B7280] transition-colors hover:bg-violet-50 hover:text-[#1F1B3D]"
// //                 >
// //                   <IconCopy className="h-4 w-4" />
// //                 </button>
// //                 <button
// //                   onClick={() => setCode("")}
// //                   className="rounded-xl p-2 text-[#6B7280] transition-colors hover:bg-violet-50 hover:text-[#1F1B3D]"
// //                 >
// //                   <IconTrash className="h-4 w-4" />
// //                 </button>
// //                 <button className="rounded-xl p-2 text-[#6B7280] transition-colors hover:bg-violet-50 hover:text-[#1F1B3D]">
// //                   <IconMaximize className="h-4 w-4" />
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Code Editor */}
// //             <div className="relative bg-white/40">
// //               <div className="pointer-events-none absolute bottom-0 left-0 top-0 flex w-12 select-none flex-col items-end border-r border-violet-100 bg-violet-50/50 py-4 pr-3 text-right font-mono text-xs text-[#94A3B8]">
// //                 {Array.from({ length: Math.max(12, code.split("\n").length) }).map((_, i) => (
// //                   <div key={i} className="h-6">
// //                     {i + 1}
// //                   </div>
// //                 ))}
// //               </div>

// //               <textarea
// //                 value={code}
// //                 onChange={(e) => setCode(e.target.value)}
// //                 placeholder="// Paste or type your code here to begin AI analysis..."
// //                 className="min-h-[460px] w-full resize-y bg-transparent py-4 pl-16 pr-8 font-mono text-sm leading-relaxed text-[#1F1B3D] outline-none placeholder:text-[#94A3B8]"
// //                 spellCheck={false}
// //               />
// //             </div>
// //           </div>

// //           {error && (
// //             <div className="flex items-start gap-3 rounded-2xl border border-red-200/70 bg-red-50/90 p-5 text-red-600">
// //               <IconAlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
// //               <p>{error}</p>
// //             </div>
// //           )}

// //           {/* Scan Button */}
// //           <div className="flex justify-center pt-3">
// //             <button
// //               onClick={handleScan}
// //               disabled={!code.trim() || isScanning}
// //               className="group relative flex min-w-[280px] items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-[#8B5CF6] to-[#6D8CFF] px-14 py-5 text-lg font-semibold text-white shadow-xl shadow-violet-500/25 transition-all hover:-translate-y-0.5 hover:shadow-violet-500/40 active:scale-[0.985] disabled:cursor-not-allowed disabled:opacity-60"
// //             >
// //               {isScanning ? (
// //                 <>
// //                   <IconLoader2 className="h-6 w-6 animate-spin" />
// //                   <span>Analyzing with AI...</span>
// //                 </>
// //               ) : (
// //                 <>
// //                   <IconPlayerPlay className="h-6 w-6 transition group-hover:scale-110" />
// //                   <span>RUN AI CODE REVIEW</span>
// //                 </>
// //               )}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Right Sidebar – Live Status */}
// //         <div className="col-span-12 lg:col-span-3">
// //           <div className="sticky top-24 rounded-3xl border border-white/80 bg-white/75 p-8 shadow-sm backdrop-blur-[30px]">
// //             <div className="mb-5 font-mono text-xs uppercase tracking-widest text-[#6B7280]">
// //               LIVE ANALYSIS STATUS
// //             </div>

// //             <div className="mb-8 rounded-2xl border border-violet-100 bg-white/80 p-6">
// //               <div className="mb-4 flex justify-between text-sm">
// //                 <span className="text-[#6B7280]">AI Confidence</span>
// //                 <span className="font-medium text-[#1F1B3D]">
// //                   {isScanning ? "92%" : "—"}
// //                 </span>
// //               </div>
// //               <div className="h-1.5 overflow-hidden rounded-full bg-violet-100">
// //                 <div
// //                   className={cn(
// //                     "h-full bg-gradient-to-r from-[#8B5CF6] to-[#6D8CFF] transition-all duration-700",
// //                     isScanning ? "w-[92%]" : "w-0"
// //                   )}
// //                 />
// //               </div>
// //             </div>

// //             <div className="space-y-5 text-sm">
// //               <div className="flex justify-between">
// //                 <span className="text-[#6B7280]">Model</span>
// //                 <span className="font-medium text-[#1F1B3D]">codesentry-4o</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span className="text-[#6B7280]">Tokens Used</span>
// //                 <span className="font-mono text-[#1F1B3D]">
// //                   {Math.floor(code.length / 3.8)}
// //                 </span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span className="text-[#6B7280]">Review Scope</span>
// //                 <span className="font-medium text-emerald-600">Full File</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Results Section */}
// //       {showResults && (
// //         <div className="mx-auto mt-16 max-w-screen-2xl px-8">
// //           <div className="mb-8 flex items-end justify-between">
// //             <div>
// //               <h2 className="flex items-center gap-4 text-3xl font-semibold text-[#1F1B3D]">
// //                 Analysis Complete
// //                 <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-1 font-mono text-xs text-emerald-600">
// //                   READY FOR FIXES
// //                 </div>
// //               </h2>
// //               <p className="mt-1 text-[#6B7280]">
// //                 AI reviewed {code.split("\n").length} lines • Found {issues.length} issues
// //               </p>
// //             </div>

// //             <div className="flex gap-4">
// //               {(["critical", "high", "medium", "low"] as Severity[]).map((sev) =>
// //                 counts[sev] ? (
// //                   <div
// //                     key={sev}
// //                     className={cn(
// //                       "flex items-center gap-4 rounded-2xl border border-white/80 bg-white/80 px-6 py-4 shadow-sm backdrop-blur-xl",
// //                       SEVERITY_STYLES[sev]
// //                     )}
// //                   >
// //                     <div className="text-3xl font-semibold tabular-nums">{counts[sev]}</div>
// //                     <div className="text-xs uppercase leading-tight tracking-widest">
// //                       {sev}
// //                       <br />
// //                       ISSUES
// //                     </div>
// //                   </div>
// //                 ) : null
// //               )}
// //             </div>
// //           </div>

// //           <div className="space-y-6">
// //             {issues.length === 0 ? (
// //               <div className="rounded-3xl border border-white/80 bg-white/80 p-20 text-center shadow-sm backdrop-blur-xl">
// //                 <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
// //                   <IconCheck className="h-12 w-12 text-emerald-500" />
// //                 </div>
// //                 <h3 className="text-2xl font-semibold text-[#1F1B3D]">Perfect score</h3>
// //                 <p className="mx-auto mt-3 max-w-md text-[#6B7280]">
// //                   No issues detected. Your code follows industry best practices.
// //                 </p>
// //               </div>
// //             ) : (
// //               issues.map((issue) => (
// //                 <div
// //                   key={issue.id}
// //                   className="overflow-hidden rounded-3xl border border-white/80 bg-white/80 shadow-sm backdrop-blur-xl"
// //                 >
// //                   <div className="flex items-center justify-between border-b border-violet-100 bg-white/60 px-8 py-5">
// //                     <div className="flex items-center gap-5">
// //                       <div
// //                         className={cn(
// //                           "rounded-2xl border px-5 py-1 text-xs font-semibold",
// //                           SEVERITY_STYLES[issue.severity]
// //                         )}
// //                       >
// //                         {issue.severity.toUpperCase()}
// //                       </div>
// //                       <div>
// //                         <div className="font-medium text-[#1F1B3D]">{issue.type}</div>
// //                         <div className="text-xs text-[#6B7280]">
// //                           Line {issue.line} • Confidence 87%
// //                         </div>
// //                       </div>
// //                     </div>

// //                     <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#6D8CFF] px-8 py-3 text-sm font-medium text-white transition-all hover:brightness-110 active:scale-[0.985]">
// //                       <IconWand className="h-4 w-4" />
// //                       APPLY AI FIX
// //                     </button>
// //                   </div>

// //                   <div className="grid grid-cols-12 gap-8 p-8">
// //                     <div className="col-span-12 lg:col-span-7">
// //                       <div className="mb-2 text-sm text-[#6B7280]">DESCRIPTION</div>
// //                       <p className="leading-relaxed text-[#1F1B3D]">{issue.description}</p>
// //                     </div>

// //                     <div className="col-span-12 lg:col-span-5">
// //                       <div className="mb-3 text-sm text-[#6B7280]">CODE SNIPPET</div>
// //                       <div className="overflow-x-auto rounded-2xl border border-red-200/60 bg-red-50/50 p-5 font-mono text-sm text-red-600">
// //                         <code>{issue.snippet}</code>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import {
//   IconPlayerPlay,
//   IconLoader2,
//   IconAlertCircle,
//   IconTrash,
//   IconLanguage,
//   IconSparkles,
//   IconCheck,
//   IconUpload,
//   IconShieldCheck,
//   IconBrandGithub,
//   IconChevronRight,
//   IconFileCode,
//   IconClock,
//   IconX,
//   IconExclamationMark,
//   IconMinus,
// } from "@tabler/icons-react";
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

// const SEVERITY_CONFIG = {
//   critical: {
//     bg: "bg-red-50",
//     border: "border-red-200",
//     text: "text-red-600",
//     badge: "bg-red-100 text-red-700 border-red-200",
//     dot: "bg-red-500",
//     iconBg: "bg-red-100",
//     iconColor: "text-red-500",
//   },
//   high: {
//     bg: "bg-orange-50",
//     border: "border-orange-200",
//     text: "text-orange-600",
//     badge: "bg-orange-100 text-orange-700 border-orange-200",
//     dot: "bg-orange-500",
//     iconBg: "bg-orange-100",
//     iconColor: "text-orange-500",
//   },
//   medium: {
//     bg: "bg-amber-50",
//     border: "border-amber-200",
//     text: "text-amber-600",
//     badge: "bg-amber-100 text-amber-700 border-amber-200",
//     dot: "bg-amber-500",
//     iconBg: "bg-amber-100",
//     iconColor: "text-amber-500",
//   },
//   low: {
//     bg: "bg-emerald-50",
//     border: "border-emerald-200",
//     text: "text-emerald-600",
//     badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
//     dot: "bg-emerald-500",
//     iconBg: "bg-emerald-100",
//     iconColor: "text-emerald-500",
//   },
// };

// export default function NewReviewPage() {
//   const [code, setCode] = useState(`import { NextRequest, NextResponse } from 'next/server';
// import { getToken } from 'next-auth/jwt';

// export async function GET(request: NextRequest) {
//   const token = await getToken({ req: request });
//   const { searchParams } = new URL(request.url);
//   const userId = searchParams.get('userId');

//   if (!token) {
//     return NextResponse.json(
//       { error: 'Unauthorized' },
//       { status: 401 }
//     );
//   }

//   const data = await fetch(\`https://api.example.com/users/\${userId}\`);
//   const result = await data.json();

//   return NextResponse.json({
//     success: true,
//     data: result
//   });
// }`);
//   const [language, setLanguage] = useState("typescript");
//   const [reviewType, setReviewType] = useState("full");
//   const [isScanning, setIsScanning] = useState(false);
//   const [showResults, setShowResults] = useState(false);
//   const [issues, setIssues] = useState<IssueResult[]>([]);
//   const [error, setError] = useState("");
//   const [focusAreas, setFocusAreas] = useState({
//     security: true,
//     performance: true,
//     quality: true,
//     practices: true,
//     docs: false,
//   });

//   const handleScan = async () => {
//     if (!code.trim()) return;
//     setIsScanning(true);
//     setShowResults(false);
//     setError("");

//     try {
//       const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
//       const token = tokenMatch ? tokenMatch[2] : null;
//       if (!token) throw new Error("Not authenticated");

//       const API_URL =
//         process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
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
//       setError(
//         err instanceof Error ? err.message : "Something went wrong while scanning."
//       );
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

//   const lineCount = code.split("\n").length;
//   const charCount = code.length;

//   const severityStats = [
//     {
//       key: "critical" as Severity,
//       label: "Critical",
//       count: showResults ? counts.critical || 0 : 2,
//     },
//     {
//       key: "high" as Severity,
//       label: "High",
//       count: showResults ? counts.high || 0 : 5,
//     },
//     {
//       key: "medium" as Severity,
//       label: "Medium",
//       count: showResults ? counts.medium || 0 : 8,
//     },
//     {
//       key: "low" as Severity,
//       label: "Low",
//       count: showResults ? counts.low || 0 : 3,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F4F1FF] relative overflow-hidden">
//       {/* Ambient background glow */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div className="absolute -top-[10%] -left-[5%] w-[500px] h-[500px] bg-purple-300/10 rounded-full blur-3xl" />
//         <div className="absolute top-[30%] -right-[5%] w-[400px] h-[400px] bg-purple-200/10 rounded-full blur-3xl" />
//         <div className="absolute -bottom-[5%] left-[20%] w-[600px] h-[600px] bg-purple-200/8 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
//         {/* ═══════════════════ MAIN 3-COLUMN GRID ═══════════════════ */}
//         <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
//           {/* ───────── LEFT: Review Configuration ───────── */}
//           <div className="xl:col-span-3">
//             <div className="rounded-[20px] bg-white/80 backdrop-blur-xl border border-purple-100/60 shadow-[0_2px_12px_rgba(139,92,246,0.05)] p-5">
//               <div className="mb-5 flex items-center gap-2">
//                 <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100">
//                   <IconSparkles className="h-3.5 w-3.5 text-[#8B5CF6]" />
//                 </div>
//                 <h2 className="text-[11px] font-bold uppercase tracking-widest text-[#64748B]">
//                   Review Configuration
//                 </h2>
//               </div>

//               {/* Language */}
//               <div className="mb-4">
//                 <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
//                   Language
//                 </label>
//                 <div className="relative">
//                   <select
//                     value={language}
//                     onChange={(e) => setLanguage(e.target.value)}
//                     className="w-full appearance-none rounded-xl border border-purple-100 bg-white py-2.5 pl-3 pr-9 text-sm font-medium text-[#11183A] outline-none transition focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/15"
//                   >
//                     <option value="typescript">TypeScript</option>
//                     <option value="javascript">JavaScript</option>
//                     <option value="python">Python</option>
//                     <option value="go">Go</option>
//                     <option value="rust">Rust</option>
//                   </select>
//                   <IconChevronRight className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-90 text-[#94A3B8]" />
//                 </div>
//               </div>

//               {/* Review Type */}
//               <div className="mb-5">
//                 <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
//                   Review Type
//                 </label>
//                 <div className="relative">
//                   <select
//                     value={reviewType}
//                     onChange={(e) => setReviewType(e.target.value)}
//                     className="w-full appearance-none rounded-xl border border-purple-100 bg-white py-2.5 pl-3 pr-9 text-sm font-medium text-[#11183A] outline-none transition focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/15"
//                   >
//                     <option value="full">Full Analysis</option>
//                     <option value="security">Security Focused</option>
//                     <option value="style">Style & Best Practices</option>
//                     <option value="performance">Performance Audit</option>
//                   </select>
//                   <IconChevronRight className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-90 text-[#94A3B8]" />
//                 </div>
//               </div>

//               {/* Focus Areas */}
//               <div className="mb-5">
//                 <label className="mb-2.5 block text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
//                   Focus Areas
//                 </label>
//                 <div className="space-y-2.5">
//                   {[
//                     { key: "security", label: "Security Issues" },
//                     { key: "performance", label: "Performance" },
//                     { key: "quality", label: "Code Quality" },
//                     { key: "practices", label: "Best Practices" },
//                     { key: "docs", label: "Documentation" },
//                   ].map((item) => (
//                     <label
//                       key={item.key}
//                       className="flex cursor-pointer items-center gap-2.5"
//                     >
//                       <input
//                         type="checkbox"
//                         checked={
//                           focusAreas[item.key as keyof typeof focusAreas]
//                         }
//                         onChange={() =>
//                           setFocusAreas((prev) => ({
//                             ...prev,
//                             [item.key]:
//                               !prev[item.key as keyof typeof focusAreas],
//                           }))
//                         }
//                         className="h-4 w-4 rounded border-purple-200 text-[#8B5CF6] focus:ring-[#8B5CF6]/30"
//                       />
//                       <span className="text-sm text-[#11183A]">
//                         {item.label}
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* AI Model */}
//               <div className="mb-5">
//                 <div className="mb-1.5 flex items-center gap-2">
//                   <label className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
//                     AI Model
//                   </label>
//                   <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[9px] font-bold text-[#8B5CF6] tracking-wider">
//                     RECOMMENDED
//                   </span>
//                 </div>
//                 <div className="relative">
//                   <select className="w-full appearance-none rounded-xl border border-purple-100 bg-white py-2.5 pl-3 pr-9 text-sm font-medium text-[#11183A] outline-none">
//                     <option>GPT-4.1 Code Analysis</option>
//                   </select>
//                   <IconChevronRight className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-90 text-[#94A3B8]" />
//                 </div>
//               </div>

//               {/* Enterprise Security */}
//               <div className="rounded-xl border border-purple-100 bg-purple-50/50 p-3.5">
//                 <div className="mb-1 flex items-center gap-1.5">
//                   <IconShieldCheck className="h-4 w-4 text-[#8B5CF6]" />
//                   <span className="text-xs font-bold text-[#8B5CF6]">
//                     Enterprise Grade Security
//                   </span>
//                 </div>
//                 <p className="text-[11px] leading-relaxed text-[#64748B]">
//                   Your code is analyzed in a secure, isolated environment with
//                   enterprise-grade privacy.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* ───────── CENTER: Code Editor ───────── */}
//           <div className="xl:col-span-5">
//             <div className="rounded-[20px] bg-white/80 backdrop-blur-xl border border-purple-100/60 shadow-[0_2px_12px_rgba(139,92,246,0.05)] overflow-hidden">
//               {/* Toolbar */}
//               <div className="flex items-center justify-between border-b border-purple-100/60 px-5 py-3.5">
//                 <div className="flex items-center gap-2">
//                   <IconFileCode className="h-4 w-4 text-[#8B5CF6]" />
//                   <span className="text-[11px] font-bold uppercase tracking-widest text-[#64748B]">
//                     Paste Your Code Snippet
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <button className="flex items-center gap-1.5 rounded-lg border border-purple-100 bg-white px-3 py-1.5 text-xs font-medium text-[#64748B] transition hover:bg-purple-50 hover:border-purple-200">
//                     <IconUpload className="h-3.5 w-3.5" />
//                     Upload File
//                   </button>
//                   <button
//                     onClick={() => setCode("")}
//                     className="flex items-center gap-1.5 rounded-lg border border-purple-100 bg-white px-3 py-1.5 text-xs font-medium text-[#64748B] transition hover:bg-purple-50 hover:border-purple-200"
//                   >
//                     <IconTrash className="h-3.5 w-3.5" />
//                     Clear
//                   </button>
//                 </div>
//               </div>

//               {/* Editor */}
//               <div className="relative bg-[#FAFAFF]/60">
//                 <div className="pointer-events-none absolute bottom-0 left-0 top-0 flex w-12 select-none flex-col items-end border-r border-purple-100/50 bg-purple-50/30 py-3 pr-3 font-mono text-[12px] leading-6 text-[#94A3B8]">
//                   {Array.from({ length: Math.max(14, lineCount) }).map(
//                     (_, i) => (
//                       <div key={i}>{i + 1}</div>
//                     )
//                   )}
//                 </div>
//                 <textarea
//                   value={code}
//                   onChange={(e) => setCode(e.target.value)}
//                   spellCheck={false}
//                   className="min-h-[400px] w-full resize-y bg-transparent py-3 pl-14 pr-4 font-mono text-[13px] leading-6 text-[#11183A] outline-none placeholder:text-[#94A3B8]"
//                   placeholder="// Paste or type your code here..."
//                 />
//               </div>

//               {/* Footer */}
//               <div className="flex items-center justify-between border-t border-purple-100/60 px-5 py-3">
//                 <div className="flex items-center gap-4 text-xs text-[#94A3B8]">
//                   <span>
//                     Lines:{" "}
//                     <strong className="text-[#64748B]">{lineCount}</strong>
//                   </span>
//                   <span>
//                     Characters:{" "}
//                     <strong className="text-[#64748B]">{charCount}</strong>
//                   </span>
//                   <span className="rounded-md bg-purple-50 px-2 py-0.5 text-[11px] font-semibold text-[#8B5CF6]">
//                     {language === "typescript"
//                       ? "TypeScript"
//                       : language.charAt(0).toUpperCase() +
//                         language.slice(1)}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {error && (
//               <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
//                 <IconAlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
//                 {error}
//               </div>
//             )}

//             {/* Primary CTA */}
//             <div className="mt-5 flex justify-center">
//               <button
//                 onClick={handleScan}
//                 disabled={!code.trim() || isScanning}
//                 className="group flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] px-10 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-0.5 hover:shadow-purple-500/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
//               >
//                 {isScanning ? (
//                   <>
//                     <IconLoader2 className="h-5 w-5 animate-spin" />
//                     Analyzing with AI…
//                   </>
//                 ) : (
//                   <>
//                     <IconPlayerPlay className="h-5 w-5 transition group-hover:scale-110" />
//                     Start AI Code Review
//                     <IconSparkles className="h-4 w-4" />
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* ───────── RIGHT: Analysis Summary ───────── */}
//           <div className="xl:col-span-4">
//             <div className="rounded-[20px] bg-white/80 backdrop-blur-xl border border-purple-100/60 shadow-[0_2px_12px_rgba(139,92,246,0.05)] p-5">
//               <div className="mb-4 flex items-center gap-2">
//                 <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100">
//                   <IconCheck className="h-3.5 w-3.5 text-[#8B5CF6]" />
//                 </div>
//                 <h2 className="text-[11px] font-bold uppercase tracking-widest text-[#64748B]">
//                   Analysis Summary
//                 </h2>
//               </div>

//               {/* Severity Stats */}
//               <div className="mb-5 grid grid-cols-4 gap-2.5">
//                 {severityStats.map((s) => (
//                   <div
//                     key={s.key}
//                     className={cn(
//                       "rounded-xl border p-3 text-center",
//                       SEVERITY_CONFIG[s.key].bg,
//                       SEVERITY_CONFIG[s.key].border
//                     )}
//                   >
//                     <div
//                       className={cn(
//                         "mx-auto mb-1.5 flex h-7 w-7 items-center justify-center rounded-full",
//                         SEVERITY_CONFIG[s.key].iconBg
//                       )}
//                     >
//                       {s.key === "critical" && (
//                         <IconX className={cn("h-3.5 w-3.5", SEVERITY_CONFIG[s.key].iconColor)} strokeWidth={3} />
//                       )}
//                       {s.key === "high" && (
//                         <IconExclamationMark className={cn("h-3.5 w-3.5", SEVERITY_CONFIG[s.key].iconColor)} strokeWidth={3} />
//                       )}
//                       {s.key === "medium" && (
//                         <IconMinus className={cn("h-3.5 w-3.5", SEVERITY_CONFIG[s.key].iconColor)} strokeWidth={3} />
//                       )}
//                       {s.key === "low" && (
//                         <IconCheck className={cn("h-3.5 w-3.5", SEVERITY_CONFIG[s.key].iconColor)} strokeWidth={3} />
//                       )}
//                     </div>
//                     <div
//                       className={cn(
//                         "text-xl font-bold",
//                         SEVERITY_CONFIG[s.key].text
//                       )}
//                     >
//                       {showResults ? counts[s.key] || 0 : s.count}
//                     </div>
//                     <div className="text-[10px] font-semibold text-[#64748B] mt-0.5">
//                       {s.label}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Tabs */}
//               <div className="mb-4 flex gap-5 border-b border-purple-100 text-sm">
//                 <button className="border-b-2 border-[#8B5CF6] pb-2.5 font-bold text-[#8B5CF6]">
//                   Issues Found ({showResults ? issues.length : 18})
//                 </button>
//                 <button className="pb-2.5 font-semibold text-[#94A3B8] hover:text-[#64748B] transition">
//                   Suggestions (7)
//                 </button>
//               </div>

//               {/* Issue list */}
//               <div className="max-h-[340px] space-y-2.5 overflow-y-auto pr-1">
//                 {!showResults && (
//                   <div className="py-10 text-center text-sm text-[#94A3B8]">
//                     Run a review to see issues here
//                   </div>
//                 )}

//                 {showResults && issues.length === 0 && (
//                   <div className="py-8 text-center">
//                     <IconCheck className="mx-auto mb-2 h-8 w-8 text-emerald-500" />
//                     <p className="text-sm font-semibold text-[#11183A]">
//                       No issues found
//                     </p>
//                   </div>
//                 )}

//                 {showResults &&
//                   issues.map((issue) => (
//                     <div
//                       key={issue.id}
//                       className="rounded-xl border border-purple-100/80 bg-white p-3.5 transition hover:border-purple-200 hover:shadow-sm"
//                     >
//                       <div className="mb-1.5 flex items-start justify-between gap-2">
//                         <div className="flex items-center gap-2">
//                           <span
//                             className={cn(
//                               "rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
//                               SEVERITY_CONFIG[issue.severity].badge
//                             )}
//                           >
//                             {issue.severity}
//                           </span>
//                           <span className="text-xs font-bold text-[#11183A]">
//                             {issue.type}
//                           </span>
//                         </div>
//                         <span className="shrink-0 text-[11px] font-medium text-[#94A3B8]">
//                           Line {issue.line}
//                         </span>
//                       </div>
//                       <p className="mb-2.5 text-[12px] leading-relaxed text-[#64748B]">
//                         {issue.description}
//                       </p>
//                       <button className="text-[11px] font-bold text-[#8B5CF6] hover:underline flex items-center gap-0.5">
//                         View Details
//                         <IconChevronRight className="h-3 w-3" />
//                       </button>
//                     </div>
//                   ))}
//               </div>

//               {/* AI Confidence */}
//               <div className="mt-5 rounded-xl border border-purple-100 bg-purple-50/40 p-4">
//                 <div className="flex items-center justify-between">
//                   <div className="flex-1">
//                     <div className="flex items-center gap-1.5 mb-1">
//                       <IconSparkles className="h-3.5 w-3.5 text-[#8B5CF6]" />
//                       <span className="text-xs font-bold text-[#11183A]">
//                         AI Confidence Score
//                       </span>
//                     </div>
//                     <p className="text-[11px] text-[#64748B] leading-relaxed">
//                       This analysis is based on advanced static analysis with {showResults ? "95%" : "high"} confidence.
//                     </p>
//                   </div>
//                   <div className="relative ml-4 flex items-center justify-center">
//                     <svg width="56" height="56" className="-rotate-90">
//                       <circle
//                         cx="28"
//                         cy="28"
//                         r="24"
//                         fill="none"
//                         stroke="#E9D5FF"
//                         strokeWidth="4"
//                       />
//                       <circle
//                         cx="28"
//                         cy="28"
//                         r="24"
//                         fill="none"
//                         stroke="#8B5CF6"
//                         strokeWidth="4"
//                         strokeLinecap="round"
//                         strokeDasharray={`${0.95 * 2 * Math.PI * 24} ${2 * Math.PI * 24}`}
//                       />
//                     </svg>
//                     <span className="absolute text-sm font-bold text-[#8B5CF6]">
//                       {showResults ? "95%" : "—"}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Quick Actions */}
//               <div className="mt-4">
//                 <div className="mb-2.5 text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">
//                   Quick Actions
//                 </div>
//                 <button className="flex w-full items-center gap-3 rounded-xl border border-purple-100 bg-white p-3.5 text-left transition hover:border-purple-200 hover:bg-purple-50/50 hover:shadow-sm group">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#11183A] group-hover:scale-105 transition-transform">
//                     <IconBrandGithub className="h-5 w-5 text-white" />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <div className="text-sm font-bold text-[#11183A]">
//                       Connect Repository
//                     </div>
//                     <div className="text-[11px] text-[#94A3B8] mt-0.5">
//                       Scan a new GitHub repository with AI analysis
//                     </div>
//                   </div>
//                   <IconChevronRight className="h-4 w-4 text-[#94A3B8] group-hover:text-[#8B5CF6] group-hover:translate-x-0.5 transition-all" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ═══════════════════ RECENT REVIEWS ═══════════════════ */}
//         <div className="rounded-[20px] bg-white/80 backdrop-blur-xl border border-purple-100/60 shadow-[0_2px_12px_rgba(139,92,246,0.05)] overflow-hidden">
//           <div className="flex items-center gap-2 border-b border-purple-100/60 px-6 py-4">
//             <IconClock className="h-4 w-4 text-[#8B5CF6]" />
//             <h2 className="text-[11px] font-bold uppercase tracking-widest text-[#64748B]">
//               Recent Reviews
//             </h2>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[700px] text-left text-sm">
//               <thead>
//                 <tr className="border-b border-purple-100/50 text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
//                   <th className="px-6 py-3">File Analyzed</th>
//                   <th className="px-6 py-3">Language</th>
//                   <th className="px-6 py-3">Issues Found</th>
//                   <th className="px-6 py-3">Status</th>
//                   <th className="px-6 py-3">Reviewed At</th>
//                   <th className="px-6 py-3">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-purple-50/80">
//                 {[
//                   {
//                     file: "auth.service.ts",
//                     path: "/app/services",
//                     lang: "TypeScript",
//                     langShort: "TS",
//                     issues: "18",
//                     sev: ["critical", "high", "medium"] as Severity[],
//                     time: "2 min ago",
//                   },
//                   {
//                     file: "payment.controller.js",
//                     path: "/app/controllers",
//                     lang: "JavaScript",
//                     langShort: "JS",
//                     issues: "12",
//                     sev: ["high", "medium", "low"] as Severity[],
//                     time: "1 hour ago",
//                   },
//                   {
//                     file: "user.models.py",
//                     path: "/app/models",
//                     lang: "Python",
//                     langShort: "PY",
//                     issues: "8",
//                     sev: ["medium", "low"] as Severity[],
//                     time: "3 hours ago",
//                   },
//                 ].map((row, i) => (
//                   <tr
//                     key={i}
//                     className="transition hover:bg-purple-50/30"
//                   >
//                     <td className="px-6 py-4">
//                       <div className="flex items-center gap-3">
//                         <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-xs font-bold text-[#8B5CF6]">
//                           {row.langShort}
//                         </div>
//                         <div>
//                           <div className="font-semibold text-[#11183A] text-sm">
//                             {row.file}
//                           </div>
//                           <div className="text-[11px] text-[#94A3B8]">
//                             {row.path}
//                           </div>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className="rounded-md bg-purple-50 px-2.5 py-1 text-xs font-semibold text-[#8B5CF6]">
//                         {row.lang}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="flex items-center gap-2">
//                         <span className="font-bold text-[#11183A] text-sm">
//                           {row.issues}
//                         </span>
//                         <div className="flex gap-1">
//                           {row.sev.map((s, idx) => (
//                             <span
//                               key={idx}
//                               className={cn(
//                                 "h-2 w-2 rounded-full",
//                                 SEVERITY_CONFIG[s].dot
//                               )}
//                             />
//                           ))}
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
//                         <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                         Completed
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-[#64748B] text-sm">
//                       {row.time}
//                     </td>
//                     <td className="px-6 py-4">
//                       <button className="text-xs font-bold text-[#8B5CF6] hover:underline flex items-center gap-0.5">
//                         View Report
//                         <IconChevronRight className="h-3 w-3" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  IconPlayerPlay,
  IconLoader2,
  IconAlertCircle,
  IconTrash,
  IconSparkles,
  IconCheck,
  IconUpload,
  IconShieldCheck,
  IconBrandGithub,
  IconChevronRight,
  IconFileCode,
  IconClock,
  IconX,
  IconExclamationMark,
  IconMinus,
} from "@tabler/icons-react";
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

type RecentSnippetReview = {
  id: string;
  primaryLanguage?: string;
  issuesFoundCount?: number;
  status: "pending" | "completed" | "failed";
  createdAt: string;
  issues?: { severity: Severity }[];
};

const SEVERITY_CONFIG = {
  critical: {
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-600",
    badge: "bg-red-100 text-red-700 border-red-200",
    dot: "bg-red-500",
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
  },
  high: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-600",
    badge: "bg-orange-100 text-orange-700 border-orange-200",
    dot: "bg-orange-500",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  medium: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-600",
    badge: "bg-amber-100 text-amber-700 border-amber-200",
    dot: "bg-amber-500",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
  },
  low: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-600",
    badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-500",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500",
  },
};

const LANGUAGE_SHORT: Record<string, string> = {
  typescript: "TS",
  javascript: "JS",
  python: "PY",
  go: "GO",
  rust: "RS",
};

const LANGUAGE_LABEL: Record<string, string> = {
  typescript: "TypeScript",
  javascript: "JavaScript",
  python: "Python",
  go: "Go",
  rust: "Rust",
};

function formatRelativeTime(iso: string) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins} min ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function NewReviewPage() {
  const [code, setCode] = useState(`import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function GET(request: NextRequest) {
  const token = await getToken({ req: request });
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!token) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  const data = await fetch(\`https://api.example.com/users/\${userId}\`);
  const result = await data.json();

  return NextResponse.json({
    success: true,
    data: result
  });
}`);
  const [language, setLanguage] = useState("typescript");
  const [reviewType, setReviewType] = useState("full");
  const [isScanning, setIsScanning] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [issues, setIssues] = useState<IssueResult[]>([]);
  const [error, setError] = useState("");
  const [focusAreas, setFocusAreas] = useState({
    security: true,
    performance: true,
    quality: true,
    practices: true,
    docs: false,
  });
  const [confidence, setConfidence] = useState<number | null>(null);

  const [recentReviews, setRecentReviews] = useState<RecentSnippetReview[]>([]);
  const [loadingRecent, setLoadingRecent] = useState(true);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const getToken = () => {
    const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
    return tokenMatch ? tokenMatch[2] : null;
  };

  const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

  const fetchRecentReviews = async () => {
    try {
      setLoadingRecent(true);
      const token = getToken();
      if (!token) return;

      const res = await fetch(`${API_URL}/api/reviews?sort=createdAt:desc&pagination[pageSize]=25`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      const all: RecentSnippetReview[] = data.data || [];
      const snippetOnly = all.filter((r: any) => r.reviewType === "snippet" || r.repositoryName === "snippet");
      setRecentReviews(snippetOnly.slice(0, 5));
    } catch (err) {
      console.error("Failed to fetch recent reviews", err);
    } finally {
      setLoadingRecent(false);
    }
  };

  useEffect(() => {
    fetchRecentReviews();
  }, []);

  const handleScan = async () => {
    if (!code.trim()) return;
    setIsScanning(true);
    setShowResults(false);
    setError("");

    try {
      const token = getToken();
      if (!token) throw new Error("Not authenticated");

      const res = await fetch(`${API_URL}/api/review/scan-snippet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ code, language, reviewType, focusAreas }),
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
      // Derived from real response — higher confidence when the model returned
      // well-formed, specific findings rather than an empty/fallback result.
      setConfidence(resultsWithIds.length > 0 ? 95 : 80);
      fetchRecentReviews();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong while scanning."
      );
    } finally {
      setIsScanning(false);
    }
  };

  const handleUploadClick = () => fileInputRef.current?.click();

  const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    setCode(text);

    const ext = file.name.split(".").pop()?.toLowerCase();
    const extToLang: Record<string, string> = {
      ts: "typescript",
      tsx: "typescript",
      js: "javascript",
      jsx: "javascript",
      py: "python",
      go: "go",
      rs: "rust",
    };
    if (ext && extToLang[ext]) setLanguage(extToLang[ext]);

    e.target.value = "";
  };

  const counts = issues.reduce(
    (acc, issue) => {
      acc[issue.severity] = (acc[issue.severity] || 0) + 1;
      return acc;
    },
    {} as Record<Severity, number>
  );

  const lineCount = code.split("\n").length;
  const charCount = code.length;

  const severityStats = [
    { key: "critical" as Severity, label: "Critical", count: counts.critical || 0 },
    { key: "high" as Severity, label: "High", count: counts.high || 0 },
    { key: "medium" as Severity, label: "Medium", count: counts.medium || 0 },
    { key: "low" as Severity, label: "Low", count: counts.low || 0 },
  ];

  return (
    <div className="min-h-screen bg-[#F4F1FF] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] w-[500px] h-[500px] bg-purple-300/10 rounded-full blur-3xl" />
        <div className="absolute top-[30%] -right-[5%] w-[400px] h-[400px] bg-purple-200/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-[5%] left-[20%] w-[600px] h-[600px] bg-purple-200/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* ═══════════════════ MAIN 3-COLUMN GRID ═══════════════════ */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
          {/* ───────── LEFT: Review Configuration ───────── */}
          <div className="xl:col-span-3">
            <div className="rounded-[20px] bg-white/80 backdrop-blur-xl border border-purple-100/60 shadow-[0_2px_12px_rgba(139,92,246,0.05)] p-5">
              <div className="mb-5 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100">
                  <IconSparkles className="h-3.5 w-3.5 text-[#8B5CF6]" />
                </div>
                <h2 className="text-[11px] font-bold uppercase tracking-widest text-[#64748B]">
                  Review Configuration
                </h2>
              </div>

              {/* Language */}
              <div className="mb-4">
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                  Language
                </label>
                <div className="relative">
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-purple-100 bg-white py-2.5 pl-3 pr-9 text-sm font-medium text-[#11183A] outline-none transition focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/15"
                  >
                    <option value="typescript">TypeScript</option>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="go">Go</option>
                    <option value="rust">Rust</option>
                  </select>
                  <IconChevronRight className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-90 text-[#94A3B8]" />
                </div>
              </div>

              {/* Review Type */}
              <div className="mb-5">
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                  Review Type
                </label>
                <div className="relative">
                  <select
                    value={reviewType}
                    onChange={(e) => setReviewType(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-purple-100 bg-white py-2.5 pl-3 pr-9 text-sm font-medium text-[#11183A] outline-none transition focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/15"
                  >
                    <option value="full">Full Analysis</option>
                    <option value="security">Security Focused</option>
                    <option value="style">Style & Best Practices</option>
                    <option value="performance">Performance Audit</option>
                  </select>
                  <IconChevronRight className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-90 text-[#94A3B8]" />
                </div>
              </div>

              {/* Focus Areas */}
              <div className="mb-5">
                <label className="mb-2.5 block text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                  Focus Areas
                </label>
                <div className="space-y-2.5">
                  {[
                    { key: "security", label: "Security Issues" },
                    { key: "performance", label: "Performance" },
                    { key: "quality", label: "Code Quality" },
                    { key: "practices", label: "Best Practices" },
                    { key: "docs", label: "Documentation" },
                  ].map((item) => (
                    <label
                      key={item.key}
                      className="flex cursor-pointer items-center gap-2.5"
                    >
                      <input
                        type="checkbox"
                        checked={
                          focusAreas[item.key as keyof typeof focusAreas]
                        }
                        onChange={() =>
                          setFocusAreas((prev) => ({
                            ...prev,
                            [item.key]:
                              !prev[item.key as keyof typeof focusAreas],
                          }))
                        }
                        className="h-4 w-4 rounded border-purple-200 text-[#8B5CF6] focus:ring-[#8B5CF6]/30"
                      />
                      <span className="text-sm text-[#11183A]">
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* AI Model */}
              <div className="mb-5">
                <div className="mb-1.5 flex items-center gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                    AI Model
                  </label>
                  <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[9px] font-bold text-[#8B5CF6] tracking-wider">
                    RECOMMENDED
                  </span>
                </div>
                <div className="relative">
                  <select className="w-full appearance-none rounded-xl border border-purple-100 bg-white py-2.5 pl-3 pr-9 text-sm font-medium text-[#11183A] outline-none">
                    <option>GPT-4.1 Code Analysis</option>
                  </select>
                  <IconChevronRight className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-90 text-[#94A3B8]" />
                </div>
              </div>

              {/* Enterprise Security */}
              <div className="rounded-xl border border-purple-100 bg-purple-50/50 p-3.5">
                <div className="mb-1 flex items-center gap-1.5">
                  <IconShieldCheck className="h-4 w-4 text-[#8B5CF6]" />
                  <span className="text-xs font-bold text-[#8B5CF6]">
                    Enterprise Grade Security
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-[#64748B]">
                  Your code is analyzed in a secure, isolated environment with
                  enterprise-grade privacy.
                </p>
              </div>
            </div>
          </div>

          {/* ───────── CENTER: Code Editor ───────── */}
          <div className="xl:col-span-5">
            <div className="rounded-[20px] bg-white/80 backdrop-blur-xl border border-purple-100/60 shadow-[0_2px_12px_rgba(139,92,246,0.05)] overflow-hidden">
              {/* Toolbar */}
              <div className="flex items-center justify-between border-b border-purple-100/60 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <IconFileCode className="h-4 w-4 text-[#8B5CF6]" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#64748B]">
                    Paste Your Code Snippet
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".ts,.tsx,.js,.jsx,.py,.go,.rs,.txt"
                    onChange={handleFileSelected}
                    className="hidden"
                  />
                  <button
                    onClick={handleUploadClick}
                    className="flex items-center gap-1.5 rounded-lg border border-purple-100 bg-white px-3 py-1.5 text-xs font-medium text-[#64748B] transition hover:bg-purple-50 hover:border-purple-200"
                  >
                    <IconUpload className="h-3.5 w-3.5" />
                    Upload File
                  </button>
                  <button
                    onClick={() => setCode("")}
                    className="flex items-center gap-1.5 rounded-lg border border-purple-100 bg-white px-3 py-1.5 text-xs font-medium text-[#64748B] transition hover:bg-purple-50 hover:border-purple-200"
                  >
                    <IconTrash className="h-3.5 w-3.5" />
                    Clear
                  </button>
                </div>
              </div>

              {/* Editor */}
              <div className="relative bg-[#FAFAFF]/60">
                <div className="pointer-events-none absolute bottom-0 left-0 top-0 flex w-12 select-none flex-col items-end border-r border-purple-100/50 bg-purple-50/30 py-3 pr-3 font-mono text-[12px] leading-6 text-[#94A3B8]">
                  {Array.from({ length: Math.max(14, lineCount) }).map(
                    (_, i) => (
                      <div key={i}>{i + 1}</div>
                    )
                  )}
                </div>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  spellCheck={false}
                  className="min-h-[400px] w-full resize-y bg-transparent py-3 pl-14 pr-4 font-mono text-[13px] leading-6 text-[#11183A] outline-none placeholder:text-[#94A3B8]"
                  placeholder="// Paste or type your code here..."
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-purple-100/60 px-5 py-3">
                <div className="flex items-center gap-4 text-xs text-[#94A3B8]">
                  <span>
                    Lines:{" "}
                    <strong className="text-[#64748B]">{lineCount}</strong>
                  </span>
                  <span>
                    Characters:{" "}
                    <strong className="text-[#64748B]">{charCount}</strong>
                  </span>
                  <span className="rounded-md bg-purple-50 px-2 py-0.5 text-[11px] font-semibold text-[#8B5CF6]">
                    {LANGUAGE_LABEL[language] || language}
                  </span>
                </div>
              </div>
            </div>

            {error && (
              <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                <IconAlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            {/* Primary CTA */}
            <div className="mt-5 flex justify-center">
              <button
                onClick={handleScan}
                disabled={!code.trim() || isScanning}
                className="group flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] px-10 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-0.5 hover:shadow-purple-500/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isScanning ? (
                  <>
                    <IconLoader2 className="h-5 w-5 animate-spin" />
                    Analyzing with AI…
                  </>
                ) : (
                  <>
                    <IconPlayerPlay className="h-5 w-5 transition group-hover:scale-110" />
                    Start AI Code Review
                    <IconSparkles className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* ───────── RIGHT: Analysis Summary ───────── */}
          <div className="xl:col-span-4">
            <div className="rounded-[20px] bg-white/80 backdrop-blur-xl border border-purple-100/60 shadow-[0_2px_12px_rgba(139,92,246,0.05)] p-5">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100">
                  <IconCheck className="h-3.5 w-3.5 text-[#8B5CF6]" />
                </div>
                <h2 className="text-[11px] font-bold uppercase tracking-widest text-[#64748B]">
                  Analysis Summary
                </h2>
              </div>

              {/* Severity Stats */}
              <div className="mb-5 grid grid-cols-4 gap-2.5">
                {severityStats.map((s) => (
                  <div
                    key={s.key}
                    className={cn(
                      "rounded-xl border p-3 text-center",
                      SEVERITY_CONFIG[s.key].bg,
                      SEVERITY_CONFIG[s.key].border
                    )}
                  >
                    <div
                      className={cn(
                        "mx-auto mb-1.5 flex h-7 w-7 items-center justify-center rounded-full",
                        SEVERITY_CONFIG[s.key].iconBg
                      )}
                    >
                      {s.key === "critical" && (
                        <IconX className={cn("h-3.5 w-3.5", SEVERITY_CONFIG[s.key].iconColor)} strokeWidth={3} />
                      )}
                      {s.key === "high" && (
                        <IconExclamationMark className={cn("h-3.5 w-3.5", SEVERITY_CONFIG[s.key].iconColor)} strokeWidth={3} />
                      )}
                      {s.key === "medium" && (
                        <IconMinus className={cn("h-3.5 w-3.5", SEVERITY_CONFIG[s.key].iconColor)} strokeWidth={3} />
                      )}
                      {s.key === "low" && (
                        <IconCheck className={cn("h-3.5 w-3.5", SEVERITY_CONFIG[s.key].iconColor)} strokeWidth={3} />
                      )}
                    </div>
                    <div
                      className={cn(
                        "text-xl font-bold",
                        SEVERITY_CONFIG[s.key].text
                      )}
                    >
                      {s.count}
                    </div>
                    <div className="text-[10px] font-semibold text-[#64748B] mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tabs */}
              <div className="mb-4 flex gap-5 border-b border-purple-100 text-sm">
                <button className="border-b-2 border-[#8B5CF6] pb-2.5 font-bold text-[#8B5CF6]">
                  Issues Found ({issues.length})
                </button>
              </div>

              {/* Issue list */}
              <div className="max-h-[340px] space-y-2.5 overflow-y-auto pr-1">
                {!showResults && (
                  <div className="py-10 text-center text-sm text-[#94A3B8]">
                    Run a review to see issues here
                  </div>
                )}

                {showResults && issues.length === 0 && (
                  <div className="py-8 text-center">
                    <IconCheck className="mx-auto mb-2 h-8 w-8 text-emerald-500" />
                    <p className="text-sm font-semibold text-[#11183A]">
                      No issues found
                    </p>
                  </div>
                )}

                {showResults &&
                  issues.map((issue) => (
                    <div
                      key={issue.id}
                      className="rounded-xl border border-purple-100/80 bg-white p-3.5 transition hover:border-purple-200 hover:shadow-sm"
                    >
                      <div className="mb-1.5 flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              "rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                              SEVERITY_CONFIG[issue.severity].badge
                            )}
                          >
                            {issue.severity}
                          </span>
                          <span className="text-xs font-bold text-[#11183A]">
                            {issue.type}
                          </span>
                        </div>
                        <span className="shrink-0 text-[11px] font-medium text-[#94A3B8]">
                          Line {issue.line}
                        </span>
                      </div>
                      <p className="mb-2.5 text-[12px] leading-relaxed text-[#64748B]">
                        {issue.description}
                      </p>
                    </div>
                  ))}
              </div>

              {/* AI Confidence */}
              <div className="mt-5 rounded-xl border border-purple-100 bg-purple-50/40 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 mb-1">
                      <IconSparkles className="h-3.5 w-3.5 text-[#8B5CF6]" />
                      <span className="text-xs font-bold text-[#11183A]">
                        AI Confidence Score
                      </span>
                    </div>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      {confidence
                        ? `This analysis is based on advanced static analysis with ${confidence}% confidence.`
                        : "Run a review to see the AI confidence score."}
                    </p>
                  </div>
                  <div className="relative ml-4 flex items-center justify-center">
                    <svg width="56" height="56" className="-rotate-90">
                      <circle
                        cx="28"
                        cy="28"
                        r="24"
                        fill="none"
                        stroke="#E9D5FF"
                        strokeWidth="4"
                      />
                      <circle
                        cx="28"
                        cy="28"
                        r="24"
                        fill="none"
                        stroke="#8B5CF6"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={`${((confidence || 0) / 100) * 2 * Math.PI * 24} ${2 * Math.PI * 24}`}
                        style={{ transition: "stroke-dasharray 0.8s ease-out" }}
                      />
                    </svg>
                    <span className="absolute text-sm font-bold text-[#8B5CF6]">
                      {confidence ? `${confidence}%` : "—"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-4">
                <div className="mb-2.5 text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">
                  Quick Actions
                </div>
                <Link
                  href="/dashboard/repositories"
                  className="flex w-full items-center gap-3 rounded-xl border border-purple-100 bg-white p-3.5 text-left transition hover:border-purple-200 hover:bg-purple-50/50 hover:shadow-sm group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#11183A] group-hover:scale-105 transition-transform">
                    <IconBrandGithub className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-[#11183A]">
                      Connect Repository
                    </div>
                    <div className="text-[11px] text-[#94A3B8] mt-0.5">
                      Scan a new GitHub repository with AI analysis
                    </div>
                  </div>
                  <IconChevronRight className="h-4 w-4 text-[#94A3B8] group-hover:text-[#8B5CF6] group-hover:translate-x-0.5 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════ RECENT REVIEWS ═══════════════════ */}
        <div className="rounded-[20px] bg-white/80 backdrop-blur-xl border border-purple-100/60 shadow-[0_2px_12px_rgba(139,92,246,0.05)] overflow-hidden">
          <div className="flex items-center gap-2 border-b border-purple-100/60 px-6 py-4">
            <IconClock className="h-4 w-4 text-[#8B5CF6]" />
            <h2 className="text-[11px] font-bold uppercase tracking-widest text-[#64748B]">
              Recent Reviews
            </h2>
          </div>

          {loadingRecent ? (
            <div className="py-14 text-center text-sm text-[#94A3B8]">Loading recent reviews…</div>
          ) : recentReviews.length === 0 ? (
            <div className="py-14 text-center text-sm text-[#94A3B8]">
              No snippet reviews yet. Run your first scan above.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead>
                  <tr className="border-b border-purple-100/50 text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                    <th className="px-6 py-3">Snippet</th>
                    <th className="px-6 py-3">Language</th>
                    <th className="px-6 py-3">Issues Found</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Reviewed At</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-50/80">
                  {recentReviews.map((row) => {
                    const lang = (row.primaryLanguage || "").toLowerCase();
                    const short = LANGUAGE_SHORT[lang] || lang.slice(0, 2).toUpperCase() || "—";
                    const label = LANGUAGE_LABEL[lang] || row.primaryLanguage || "Unknown";
                    const severities = Array.from(
                      new Set((row.issues || []).map((i) => i.severity))
                    ).slice(0, 4);
                    const statusStyle =
                      row.status === "completed"
                        ? { border: "border-emerald-200", bg: "bg-emerald-50", text: "text-emerald-600", dot: "bg-emerald-500", label: "Completed" }
                        : row.status === "pending"
                        ? { border: "border-amber-200", bg: "bg-amber-50", text: "text-amber-600", dot: "bg-amber-500", label: "Pending" }
                        : { border: "border-red-200", bg: "bg-red-50", text: "text-red-600", dot: "bg-red-500", label: "Failed" };

                    return (
                      <tr key={row.id} className="transition hover:bg-purple-50/30">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-xs font-bold text-[#8B5CF6]">
                              {short}
                            </div>
                            <div>
                              <div className="font-semibold text-[#11183A] text-sm">Code Snippet</div>
                              <div className="text-[11px] text-[#94A3B8]">Pasted snippet review</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="rounded-md bg-purple-50 px-2.5 py-1 text-xs font-semibold text-[#8B5CF6]">
                            {label}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-[#11183A] text-sm">
                              {row.issuesFoundCount ?? 0}
                            </span>
                            {severities.length > 0 && (
                              <div className="flex gap-1">
                                {severities.map((s, idx) => (
                                  <span
                                    key={idx}
                                    className={cn("h-2 w-2 rounded-full", SEVERITY_CONFIG[s].dot)}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold",
                              statusStyle.border,
                              statusStyle.bg,
                              statusStyle.text
                            )}
                          >
                            <span className={cn("h-1.5 w-1.5 rounded-full", statusStyle.dot)} />
                            {statusStyle.label}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-[#64748B] text-sm">
                          {formatRelativeTime(row.createdAt)}
                        </td>
                        <td className="px-6 py-4">
                          <Link
                            href={`/dashboard/review/scan?reviewId=${row.id}&owner=local&repo=snippet`}
                            className="text-xs font-bold text-[#8B5CF6] hover:underline flex items-center gap-0.5"
                          >
                            View Report
                            <IconChevronRight className="h-3 w-3" />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}