// "use client";

// import React, { useEffect, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/context/AuthContext";
// import { IconLoader2, IconAlertCircle, IconCheck } from "@tabler/icons-react";

// function GithubCallbackContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { refreshUser, handleGithubCallback } = useAuth();
//   const [status, setStatus] = useState("Checking request state...");
//   const [error, setError] = useState<string | null>(null);
//   const [isSuccess, setIsSuccess] = useState(false);
  
//   // Guard ref to prevent double-execution in dev mode StrictMode
//   const hasRun = React.useRef(false);

//   useEffect(() => {
//     if (hasRun.current) return;
    
//     const code = searchParams.get("code");
//     const state = searchParams.get("state") || "";
    
//     if (!code) {
//       setError("No authorization code found in URL.");
//       return;
//     }

//     hasRun.current = true;

//     // Detect if this is an initial Login/Signup flow or a Connect-GitHub-to-Account flow.
//     const savedState = sessionStorage.getItem("github_oauth_state");
//     const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
//     const token = tokenMatch ? tokenMatch[2] : null;

//     const isAuthFlow = !!savedState || !token;

//     const processCallback = async () => {
//       try {
//         if (isAuthFlow) {
//           // ─── LOGIN / SIGNUP FLOW ───
//           setStatus("Authenticating with GitHub...");
//           await handleGithubCallback(code, state);
//           setStatus("Successfully authenticated! Redirecting...");
//         } else {
//           // ─── CONNECT ACCOUNT FLOW ───
//           setStatus("Connecting GitHub to your account...");
//           const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

//           const res = await fetch(`${API_URL}/api/github/connect`, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`
//             },
//             body: JSON.stringify({ code })
//           });

//           let data: any = {};
//           const contentType = res.headers.get("content-type");
//           if (contentType && contentType.includes("application/json")) {
//             data = await res.json();
//           } else {
//             const text = await res.text();
//             throw new Error(`Server returned non-JSON response (${res.status}): ${text.substring(0, 100) || "Empty response"}`);
//           }

//           if (!res.ok) {
//             throw new Error(data.error?.message || data.message || "Failed to connect to GitHub");
//           }

//           setStatus("GitHub successfully connected! Redirecting...");
//           await refreshUser();
//         }

//         setIsSuccess(true);
//         // Delay redirect slightly for premium feel & transition
//         setTimeout(() => {
//           router.replace("/dashboard");
//         }, 1200);

//       } catch (err: any) {
//         setError(err.message || "An unexpected error occurred during authentication.");
//       }
//     };

//     processCallback();
//   }, [searchParams, router, refreshUser, handleGithubCallback]);

//   return (
//     <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] px-4">
//       <div className="bg-[#09090b]/80 border border-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md w-full text-center shadow-2xl relative overflow-hidden">
//         {/* Glow effect in background */}
//         <div className="absolute -inset-10 bg-gradient-to-r from-violet-600/10 to-violet-500/10 rounded-full blur-2xl opacity-60 animate-pulse" />

//         <div className="relative z-10">
//           {error ? (
//             <>
//               <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-5 border border-red-500/20 shadow-lg shadow-red-500/10">
//                 <IconAlertCircle className="w-8 h-8" />
//               </div>
//               <h2 className="text-xl font-bold text-white mb-2">Process Failed</h2>
//               <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{error}</p>
//               <button 
//                 onClick={() => router.replace("/login")}
//                 className="w-full bg-violet-600 hover:bg-violet-500 text-white font-medium px-4 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-violet-600/20 active:scale-[0.98]"
//               >
//                 Return to Login
//               </button>
//             </>
//           ) : isSuccess ? (
//             <>
//               <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 border border-emerald-500/20 shadow-lg shadow-emerald-500/10 scale-in-animation">
//                 <IconCheck className="w-8 h-8" stroke={2.5} />
//               </div>
//               <h2 className="text-xl font-bold text-white mb-2">Success!</h2>
//               <p className="text-zinc-400 text-sm">{status}</p>
//             </>
//           ) : (
//             <>
//               <div className="w-16 h-16 bg-violet-600/10 text-violet-500 rounded-full flex items-center justify-center mx-auto mb-5 border border-violet-500/20 shadow-lg shadow-violet-600/10 animate-bounce-slow">
//                 <IconLoader2 className="w-8 h-8 animate-spin" stroke={2} />
//               </div>
//               <h2 className="text-xl font-bold text-white mb-2 animate-pulse">Please wait</h2>
//               <p className="text-zinc-400 text-sm">{status}</p>
//             </>
//           )}
//         </div>

//         <style jsx global>{`
//           .scale-in-animation {
//             animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
//           }
//           @keyframes scaleIn {
//             from { transform: scale(0.8); opacity: 0; }
//             to { transform: scale(1); opacity: 1; }
//           }
//           .animate-bounce-slow {
//             animation: bounce 3s infinite ease-in-out;
//           }
//           @keyframes bounce {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-6px); }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }

// export default function GithubCallbackPage() {
//   return (
//     <Suspense fallback={
//       <div className="flex-1 flex items-center justify-center min-h-[60vh]">
//         <IconLoader2 className="w-8 h-8 animate-spin text-violet-500" />
//       </div>
//     }>
//       <GithubCallbackContent />
//     </Suspense>
//   );
// }


"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { IconLoader2, IconAlertCircle, IconCheck } from "@tabler/icons-react";

function GithubCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { refreshUser, handleGithubCallback } = useAuth();
  const [status, setStatus] = useState("Checking request state...");
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Guard ref to prevent double-execution in dev mode StrictMode
  const hasRun = React.useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    
    const code = searchParams.get("code");
    const state = searchParams.get("state") || "";
    
    if (!code) {
      setError("No authorization code found in URL.");
      return;
    }

    hasRun.current = true;

    // Detect if this is an initial Login/Signup flow or a Connect-GitHub-to-Account flow.
    const savedState = sessionStorage.getItem("github_oauth_state");
    const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
    const token = tokenMatch ? tokenMatch[2] : null;

    const isAuthFlow = !!savedState || !token;

    const processCallback = async () => {
      try {
        if (isAuthFlow) {
          // ─── LOGIN / SIGNUP FLOW ───
          setStatus("Authenticating with GitHub...");
          await handleGithubCallback(code, state);
          setStatus("Successfully authenticated! Redirecting...");
        } else {
          // ─── CONNECT ACCOUNT FLOW ───
          setStatus("Connecting GitHub to your account...");
          const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

          const res = await fetch(`${API_URL}/api/github/connect`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ code })
          });

          let data: any = {};
          const contentType = res.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            data = await res.json();
          } else {
            const text = await res.text();
            throw new Error(`Server returned non-JSON response (${res.status}): ${text.substring(0, 100) || "Empty response"}`);
          }

          if (!res.ok) {
            throw new Error(data.error?.message || data.message || "Failed to connect to GitHub");
          }

          setStatus("GitHub successfully connected! Redirecting...");
          await refreshUser();
        }

        setIsSuccess(true);
        setTimeout(() => {
          router.replace("/dashboard");
        }, 1200);

      } catch (err: any) {
        setError(err.message || "An unexpected error occurred during authentication.");
      }
    };

    processCallback();
  }, [searchParams, router, refreshUser, handleGithubCallback]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] px-4 bg-[#060816]">
      <div className="bg-[#0E1324]/90 border border-white/[0.08] backdrop-blur-md rounded-3xl p-8 max-w-md w-full text-center shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] relative overflow-hidden">
        <div className="absolute -inset-10 bg-gradient-to-r from-[#5B5FFF]/15 to-[#00D4FF]/10 rounded-full blur-2xl opacity-60 animate-pulse" />

        <div className="relative z-10">
          {error ? (
            <>
              <div className="w-16 h-16 bg-[#EF4444]/10 text-[#EF4444] rounded-2xl flex items-center justify-center mx-auto mb-5 border border-[#EF4444]/25 shadow-[0_4px_20px_rgba(239,68,68,0.15)]">
                <IconAlertCircle className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Process Failed</h2>
              <p className="text-[#7B859E] text-sm mb-6 leading-relaxed">{error}</p>
              <button 
                onClick={() => router.replace("/login")}
                className="w-full bg-gradient-to-r from-[#5B5FFF] to-[#6F4CFF] hover:shadow-[0_4px_28px_rgba(91,95,255,0.6)] text-white font-medium px-4 py-3 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(91,95,255,0.4)] active:scale-[0.98]"
              >
                Return to Login
              </button>
            </>
          ) : isSuccess ? (
            <>
              <div className="w-16 h-16 bg-[#22C55E]/10 text-[#22C55E] rounded-2xl flex items-center justify-center mx-auto mb-5 border border-[#22C55E]/25 shadow-[0_4px_20px_rgba(34,197,94,0.15)] scale-in-animation">
                <IconCheck className="w-8 h-8" stroke={2.5} />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Success!</h2>
              <p className="text-[#7B859E] text-sm">{status}</p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-[#5B5FFF]/10 text-[#8B8FFF] rounded-2xl flex items-center justify-center mx-auto mb-5 border border-[#5B5FFF]/25 shadow-[0_4px_20px_rgba(91,95,255,0.15)] animate-bounce-slow">
                <IconLoader2 className="w-8 h-8 animate-spin" stroke={2} />
              </div>
              <h2 className="text-xl font-bold text-white mb-2 animate-pulse">Please wait</h2>
              <p className="text-[#7B859E] text-sm">{status}</p>
            </>
          )}
        </div>

        <style jsx global>{`
          .scale-in-animation {
            animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
          @keyframes scaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-bounce-slow {
            animation: bounce 3s infinite ease-in-out;
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
        `}</style>
      </div>
    </div>
  );
}

export default function GithubCallbackPage() {
  return (
    <Suspense fallback={
      <div className="flex-1 flex items-center justify-center min-h-[60vh] bg-[#060816]">
        <IconLoader2 className="w-8 h-8 animate-spin text-[#8B8FFF]" />
      </div>
    }>
      <GithubCallbackContent />
    </Suspense>
  );
}