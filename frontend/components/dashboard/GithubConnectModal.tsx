// "use client";

// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { useAuth } from "@/context/AuthContext";
// import { IconBrandGithub } from "@tabler/icons-react";
// import { usePathname } from "next/navigation";

// const ACCENT = "#ccff00";

// export function GithubConnectModal() {
//   const { user } = useAuth();
//   const pathname = usePathname();
  
//   const isOpen = !!user && !user.githubConnected && pathname !== '/dashboard/github/callback';
  
//   const handleConnect = () => {
//     const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
//     const redirectUri = typeof window !== 'undefined'
//       ? `${window.location.origin}/dashboard/github/callback`
//       : "http://localhost:3000/dashboard/github/callback";
//     const scope = "repo,user";
//     window.location.assign(`https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`);
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={() => {}}>
//       <DialogContent className="sm:max-w-[425px] bg-[#050505] border-[#ccff00]/20 text-white rounded-none">
//         <DialogHeader>
//           <DialogTitle className="text-sm font-black uppercase tracking-[0.25em] flex items-center gap-2 text-white">
//             <IconBrandGithub className="w-5 h-5 text-[#ccff00]" />
//             Connect GitHub
//           </DialogTitle>
//           <DialogDescription className="text-zinc-400 mt-2 text-xs leading-relaxed font-sans">
//             To start scanning your repositories, you need to connect your GitHub account. 
//             This allows us to securely access your code and find vulnerabilities.
//           </DialogDescription>
//         </DialogHeader>
//         <div className="py-4">
//           <div
//             className="p-4 text-xs leading-relaxed font-sans"
//             style={{
//               background: "rgba(204,255,0,0.03)",
//               border: "1px solid rgba(204,255,0,0.15)",
//             }}
//           >
//             We only request read access to your repositories. Your code is never permanently stored on our servers.
//           </div>
//         </div>
//         <DialogFooter>
//           <Button
//             onClick={handleConnect}
//             className="w-full text-xs font-black uppercase tracking-widest text-black transition-all hover:opacity-90 py-6"
//             style={{
//               background: ACCENT,
//               clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
//             }}
//           >
//             Connect GitHub Account
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { IconBrandGithub, IconShieldCheck } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

const DISMISS_KEY = "github-connect-modal-dismissed";

export function GithubConnectModal() {
  const { user } = useAuth();
  const pathname = usePathname();

  // Dismissing is remembered for the current browser session only — the
  // nudge to connect GitHub will show again next time they sign in, but
  // won't keep blocking them while they're using the rest of the app.
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");
    }
  }, []);

  const isOpen =
    !!user && !user.githubConnected && pathname !== "/dashboard/github/callback" && !dismissed;

  const dismiss = () => {
    setDismissed(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(DISMISS_KEY, "1");
    }
  };

  const handleConnect = () => {
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const redirectUri = typeof window !== 'undefined'
      ? `${window.location.origin}/dashboard/github/callback`
      : "http://localhost:3000/dashboard/github/callback";
    const scope = "repo,user";
    window.location.assign(`https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) dismiss(); }}>
      <DialogContent
        className="sm:max-w-[440px] rounded-[24px] p-0 overflow-hidden border"
        style={{
          background: "rgba(255,255,255,0.85)",
          borderColor: "rgba(139,92,246,0.16)",
          backdropFilter: "blur(30px)",
          boxShadow: "0 24px 60px -12px rgba(139,92,246,0.35)",
        }}
      >
        <div className="p-6">
          <DialogHeader>
            <DialogTitle
              className="text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-2.5"
              style={{ color: "#1F1B3D" }}
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #8B5CF6, #6D8CFF)" }}
              >
                <IconBrandGithub className="w-4.5 h-4.5 text-white" />
              </span>
              Connect GitHub
            </DialogTitle>
            <DialogDescription className="mt-2.5 text-[13px] leading-relaxed" style={{ color: "#6B7280" }}>
              To start scanning your repositories, you need to connect your GitHub account.
              This allows us to securely access your code and find vulnerabilities.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <div
              className="flex items-start gap-2.5 rounded-2xl p-4 text-xs leading-relaxed"
              style={{
                background: "rgba(139,92,246,0.05)",
                border: "1px solid rgba(139,92,246,0.16)",
                color: "#6B7280",
              }}
            >
              <IconShieldCheck className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#8B5CF6" }} />
              We only request read access to your repositories. Your code is never permanently
              stored on our servers.
            </div>
          </div>

          <DialogFooter className="flex-col gap-2 sm:flex-col">
            <Button
              onClick={handleConnect}
              className="w-full text-sm font-semibold text-white transition-all hover:-translate-y-0.5 py-6 rounded-2xl border-0"
              style={{
                background: "linear-gradient(135deg, #8B5CF6, #6D8CFF)",
                boxShadow: "0 8px 24px -6px rgba(139,92,246,0.45)",
              }}
            >
              Connect GitHub Account
            </Button>
            <button
              type="button"
              onClick={dismiss}
              className="w-full py-2 text-xs font-medium transition-colors hover:text-[#1F1B3D]"
              style={{ color: "#94A3B8" }}
            >
              Maybe later
            </button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}