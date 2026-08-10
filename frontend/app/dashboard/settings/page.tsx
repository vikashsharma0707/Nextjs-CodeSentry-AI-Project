// "use client";

// import { useRef, useState } from "react";
// import { useAuth } from "@/context/AuthContext";
// import { IconBrandGithub, IconUpload, IconCheck, IconLoader2 } from "@tabler/icons-react";
// import { cn } from "@/lib/utils";

// type TabId = "profile" | "github" | "notifications" | "billing";

// const TABS: { id: TabId; label: string }[] = [
//   { id: "profile", label: "Profile" },
//   { id: "github", label: "GitHub Integration" },
//   { id: "notifications", label: "Notifications" },
//   { id: "billing", label: "Billing & Plan" },
// ];

// function getAuthToken(): string | null {
//   const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
//   return tokenMatch ? tokenMatch[2] : null;
// }

// const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

// export default function SettingsPage() {
//   const { user, refreshUser } = useAuth();
//   const [activeTab, setActiveTab] = useState<TabId>("profile");

//   // Profile state
//   const [name, setName] = useState(user?.name || "");
//   const [email, setEmail] = useState(user?.email || "");
//   const [saving, setSaving] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

//   // Avatar upload state
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [avatarUploading, setAvatarUploading] = useState(false);
//   const [avatarError, setAvatarError] = useState("");

//   // GitHub tab state
//   const [githubBusy, setGithubBusy] = useState(false);
//   const [githubError, setGithubError] = useState("");

//   // Notifications state
//   const [emailAlerts, setEmailAlerts] = useState(true);
//   const [prAlerts, setPrAlerts] = useState(true);
//   const [weeklyDigest, setWeeklyDigest] = useState(false);
//   const [notifSaving, setNotifSaving] = useState(false);
//   const [notifSuccess, setNotifSuccess] = useState(false);
//   const [notifError, setNotifError] = useState("");

//   if (!user) return null;

//   const handleSaveProfile = async () => {
//     setSaving(true);
//     setError("");
//     setSuccess(false);

//     try {
//       const token = getAuthToken();
//       if (!token) throw new Error("Not authenticated");

//       const res = await fetch(`${API_URL}/api/users/${user.id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           username: name,
//           email: email
//         })
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error?.message || "Failed to save profile");

//       setSuccess(true);
//       await refreshUser();
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleAvatarFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     setAvatarError("");
//     setAvatarUploading(true);

//     try {
//       const token = getAuthToken();
//       if (!token) throw new Error("Not authenticated");

//       const formData = new FormData();
//       formData.append("avatar", file);

//       const res = await fetch(`${API_URL}/api/users/avatar`, {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: formData,
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error?.message || "Failed to upload avatar");

//       await refreshUser();
//     } catch (err: any) {
//       setAvatarError(err.message);
//     } finally {
//       setAvatarUploading(false);
//       if (fileInputRef.current) fileInputRef.current.value = "";
//     }
//   };

//   const handleConnectGithub = () => {
//     const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
//     const redirectUri = typeof window !== "undefined"
//       ? `${window.location.origin}/dashboard/github/callback`
//       : "http://localhost:3000/dashboard/github/callback";
//     const scope = "repo,user";
//     window.location.assign(`https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`);
//   };

//   const handleDisconnectGithub = async () => {
//     setGithubBusy(true);
//     setGithubError("");
//     try {
//       const token = getAuthToken();
//       if (!token) throw new Error("Not authenticated");

//       const res = await fetch(`${API_URL}/api/github/disconnect`, {
//         method: "DELETE",
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error?.message || "Failed to disconnect GitHub");

//       await refreshUser();
//     } catch (err: any) {
//       setGithubError(err.message);
//     } finally {
//       setGithubBusy(false);
//     }
//   };

//   const handleSaveNotifications = async () => {
//     setNotifSaving(true);
//     setNotifError("");
//     setNotifSuccess(false);

//     try {
//       const token = getAuthToken();
//       if (!token) throw new Error("Not authenticated");

//       const res = await fetch(`${API_URL}/api/users/me/notifications`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ emailAlerts, prAlerts, weeklyDigest }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error?.message || "Failed to save preferences");

//       setNotifSuccess(true);
//     } catch (err: any) {
//       setNotifError(err.message);
//     } finally {
//       setNotifSaving(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl space-y-8">
//       {/* ── Tabs ── */}
//       <div className="flex space-x-1 rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-sm overflow-x-auto">
//         {TABS.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={cn(
//               "flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-all whitespace-nowrap",
//               activeTab === tab.id
//                 ? "bg-violet-600/20 text-violet-300 shadow-sm border border-violet-500/30"
//                 : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
//             )}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* ── Tab Content ── */}
//       <div className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
        
//         {/* Profile Tab */}
//         {activeTab === "profile" && (
//           <div className="space-y-6 max-w-xl">
//             <h2 className="text-lg font-semibold text-white">Profile Settings</h2>
            
//             <div className="flex items-center gap-6">
//               {user.avatar && user.avatar !== "/avatars/default.png" ? (
//                 // eslint-disable-next-line @next/next/no-img-element
//                 <img
//                   src={user.avatar}
//                   alt={user.name}
//                   className="h-20 w-20 rounded-full object-cover ring-1 ring-violet-500/30"
//                 />
//               ) : (
//                 <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-600/20 text-2xl font-medium text-violet-300 ring-1 ring-violet-500/30">
//                   {user.name?.charAt(0).toUpperCase()}
//                 </div>
//               )}
//               <div>
//                 <input
//                   ref={fileInputRef}
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleAvatarFileSelected}
//                 />
//                 <button
//                   onClick={() => fileInputRef.current?.click()}
//                   disabled={avatarUploading}
//                   className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 disabled:opacity-50"
//                 >
//                   {avatarUploading ? <IconLoader2 className="h-4 w-4 animate-spin" /> : <IconUpload className="h-4 w-4" />}
//                   {avatarUploading ? "Uploading..." : "Upload Avatar"}
//                 </button>
//                 {avatarError && <p className="mt-2 text-xs text-red-400">{avatarError}</p>}
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <label className="mb-1.5 block text-xs font-medium text-zinc-400">Full Name</label>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-xs font-medium text-zinc-400">Email Address</label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30"
//                 />
//               </div>
//             </div>

//             {error && <p className="text-sm text-red-400">{error}</p>}
//             {success && <p className="text-sm text-green-400">Profile saved successfully!</p>}

//             <button 
//               onClick={handleSaveProfile}
//               disabled={saving}
//               className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:bg-violet-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {saving && <IconLoader2 className="w-4 h-4 animate-spin" />}
//               Save Changes
//             </button>
//           </div>
//         )}

//         {/* GitHub Tab */}
//         {activeTab === "github" && (
//           <div className="space-y-6 max-w-xl">
//             <h2 className="text-lg font-semibold text-white">GitHub Integration</h2>
//             <p className="text-sm text-zinc-400">
//               Connect your GitHub account to automatically scan pull requests and repositories.
//             </p>

//             {githubError && <p className="text-sm text-red-400">{githubError}</p>}

//             {user.githubConnected ? (
//               <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-4">
//                 <div className="flex items-center gap-4">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
//                     <IconBrandGithub className="h-6 w-6" />
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-white">{user.githubUsername || 'Connected'}</p>
//                     <p className="text-xs text-zinc-500">Connected via OAuth</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={handleDisconnectGithub}
//                   disabled={githubBusy}
//                   className="flex items-center gap-2 text-sm font-medium text-red-400 hover:text-red-300 transition-colors disabled:opacity-50"
//                 >
//                   {githubBusy && <IconLoader2 className="h-3.5 w-3.5 animate-spin" />}
//                   Disconnect
//                 </button>
//               </div>
//             ) : (
//               <button
//                 onClick={handleConnectGithub}
//                 className="flex items-center gap-2 rounded-xl bg-[#24292e] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2f363d]"
//               >
//                 <IconBrandGithub className="h-5 w-5" />
//                 Connect GitHub Account
//               </button>
//             )}
//           </div>
//         )}

//         {/* Notifications Tab */}
//         {activeTab === "notifications" && (
//           <div className="space-y-6 max-w-xl">
//             <h2 className="text-lg font-semibold text-white">Notification Preferences</h2>
            
//             <div className="space-y-4">
//               <ToggleRow 
//                 title="Email Alerts" 
//                 description="Receive emails when critical security issues are found."
//                 checked={emailAlerts}
//                 onChange={() => setEmailAlerts(!emailAlerts)}
//               />
//               <div className="h-px w-full bg-white/5" />
//               <ToggleRow 
//                 title="PR Review Comments" 
//                 description="BunoBagera will automatically comment on your GitHub PRs."
//                 checked={prAlerts}
//                 onChange={() => setPrAlerts(!prAlerts)}
//               />
//               <div className="h-px w-full bg-white/5" />
//               <ToggleRow 
//                 title="Weekly Digest" 
//                 description="A weekly summary of your codebase health and issues fixed."
//                 checked={weeklyDigest}
//                 onChange={() => setWeeklyDigest(!weeklyDigest)}
//               />
//             </div>

//             {notifError && <p className="text-sm text-red-400">{notifError}</p>}
//             {notifSuccess && <p className="text-sm text-green-400 flex items-center gap-1.5"><IconCheck className="h-4 w-4" /> Preferences saved!</p>}

//             <button
//               onClick={handleSaveNotifications}
//               disabled={notifSaving}
//               className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:bg-violet-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {notifSaving && <IconLoader2 className="w-4 h-4 animate-spin" />}
//               Save Preferences
//             </button>
//           </div>
//         )}

//         {/* Billing Tab */}
//         {activeTab === "billing" && (
//           <div className="space-y-6 max-w-xl">
//             <h2 className="text-lg font-semibold text-white">Billing & Plan</h2>
            
//             <div className="rounded-xl border border-violet-500/30 bg-violet-600/10 p-6 relative overflow-hidden">
//               <div className="relative z-10">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="text-xl font-bold text-white capitalize">{user.plan || 'Free'} Plan</h3>
//                   <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">Active</span>
//                 </div>
//                 <p className="text-sm text-violet-200/70 mb-6">You are currently on the {user.plan || 'Free'} plan.</p>
                
//                 <div className="space-y-2 mb-6">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-zinc-300">Monthly Usage</span>
//                     <span className="font-medium text-white">{user.reviewsUsed || 0} / {user.reviewsLimit || 50} Reviews</span>
//                   </div>
//                   {/* Progress bar */}
//                   <div className="h-2 w-full rounded-full bg-black/40 overflow-hidden">
//                     <div 
//                       className="h-full rounded-full bg-violet-500"
//                       style={{ width: `${((user.reviewsUsed || 0) / (user.reviewsLimit || 50)) * 100}%` }}
//                     />
//                   </div>
//                 </div>

//                 <button
//                   disabled
//                   title="Billing upgrades are coming soon"
//                   className="rounded-xl bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all opacity-50 cursor-not-allowed"
//                 >
//                   Upgrade Plan (Coming Soon)
//                 </button>
//               </div>
//               {/* Decorative glow */}
//               <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // Custom Switch/Toggle for Notifications
// function ToggleRow({ title, description, checked, onChange }: { title: string, description: string, checked: boolean, onChange: () => void }) {
//   return (
//     <div className="flex items-center justify-between py-2">
//       <div className="flex flex-col pr-4">
//         <span className="text-sm font-medium text-white">{title}</span>
//         <span className="text-xs text-zinc-400 mt-0.5">{description}</span>
//       </div>
//       <button 
//         type="button"
//         onClick={onChange}
//         className={cn(
//           "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[#09090b]",
//           checked ? "bg-violet-600" : "bg-white/10"
//         )}
//       >
//         <span
//           className={cn(
//             "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
//             checked ? "translate-x-5" : "translate-x-0"
//           )}
//         />
//       </button>
//     </div>
//   );
// }



"use client";

import { useRef, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  IconBrandGithub,
  IconUpload,
  IconCheck,
  IconLoader2,
  IconUser,
  IconBell,
  IconCreditCard,
  IconGitBranch,
  IconSparkles,
  IconShieldCheck,
  IconMail,
  IconMessageCircle,
  IconCalendarStats,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type TabId = "profile" | "github" | "notifications" | "billing";

const TABS: { id: TabId; label: string; icon: React.ElementType }[] = [
  { id: "profile", label: "Profile", icon: IconUser },
  { id: "github", label: "GitHub Integration", icon: IconBrandGithub },
  { id: "notifications", label: "Notifications", icon: IconBell },
  { id: "billing", label: "Billing & Plan", icon: IconCreditCard },
];

function getAuthToken(): string | null {
  const tokenMatch = document.cookie.match(/(^| )auth-token=([^;]+)/);
  return tokenMatch ? tokenMatch[2] : null;
}

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

export default function SettingsPage() {
  const { user, refreshUser } = useAuth();
  const [activeTab, setActiveTab] = useState<TabId>("profile");

  // Profile state
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Avatar upload state
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarUploading, setAvatarUploading] = useState(false);
  const [avatarError, setAvatarError] = useState("");

  // GitHub tab state
  const [githubBusy, setGithubBusy] = useState(false);
  const [githubError, setGithubError] = useState("");

  // Notifications state
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [prAlerts, setPrAlerts] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);
  const [notifSaving, setNotifSaving] = useState(false);
  const [notifSuccess, setNotifSuccess] = useState(false);
  const [notifError, setNotifError] = useState("");

  if (!user) return null;

  const handleSaveProfile = async () => {
    setSaving(true);
    setError("");
    setSuccess(false);

    try {
      const token = getAuthToken();
      if (!token) throw new Error("Not authenticated");

      const res = await fetch(`${API_URL}/api/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: name,
          email: email,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Failed to save profile");

      setSuccess(true);
      await refreshUser();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleAvatarFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarError("");
    setAvatarUploading(true);

    try {
      const token = getAuthToken();
      if (!token) throw new Error("Not authenticated");

      const formData = new FormData();
      formData.append("avatar", file);

      const res = await fetch(`${API_URL}/api/users/avatar`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Failed to upload avatar");

      await refreshUser();
    } catch (err: any) {
      setAvatarError(err.message);
    } finally {
      setAvatarUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleConnectGithub = () => {
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const redirectUri =
      typeof window !== "undefined"
        ? `${window.location.origin}/dashboard/github/callback`
        : "http://localhost:3000/dashboard/github/callback";
    const scope = "repo,user";
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`
    );
  };

  const handleDisconnectGithub = async () => {
    setGithubBusy(true);
    setGithubError("");
    try {
      const token = getAuthToken();
      if (!token) throw new Error("Not authenticated");

      const res = await fetch(`${API_URL}/api/github/disconnect`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Failed to disconnect GitHub");

      await refreshUser();
    } catch (err: any) {
      setGithubError(err.message);
    } finally {
      setGithubBusy(false);
    }
  };

  const handleSaveNotifications = async () => {
    setNotifSaving(true);
    setNotifError("");
    setNotifSuccess(false);

    try {
      const token = getAuthToken();
      if (!token) throw new Error("Not authenticated");

      const res = await fetch(`${API_URL}/api/users/me/notifications`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ emailAlerts, prAlerts, weeklyDigest }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Failed to save preferences");

      setNotifSuccess(true);
    } catch (err: any) {
      setNotifError(err.message);
    } finally {
      setNotifSaving(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ── Luxury Background (same system as History) ── */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#ECE8FF]" />
        <div
          className="absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -left-40 top-0 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.26)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute -right-32 top-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.22)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[380px] w-[580px] rounded-full bg-[radial-gradient(circle,rgba(109,140,255,0.18)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl space-y-8 px-1 pb-16">
        {/* ── Page Header ── */}
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight text-[#1F1B3D]">
            Settings
          </h1>
          <p className="text-sm text-[#6B7280]">
            Manage your profile, integrations, notifications and billing.
          </p>
        </div>

        {/* ── Tabs ── */}
        <div className="flex space-x-1 overflow-x-auto rounded-[20px] border border-white/60 bg-white/55 p-1.5 backdrop-blur-[30px] shadow-[0_8px_32px_rgba(139,92,246,0.06)]">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium transition-all duration-200 whitespace-nowrap",
                  isActive
                    ? "bg-gradient-to-r from-violet-500/15 to-blue-500/10 text-violet-700 shadow-sm border border-violet-300/40"
                    : "text-[#6B7280] hover:bg-white/60 hover:text-[#1F1B3D]"
                )}
              >
                <Icon className={cn("h-4 w-4", isActive ? "text-violet-600" : "text-violet-400/70")} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── Tab Content Card ── */}
        <div className="overflow-hidden rounded-[28px] border border-white/60 bg-white/55 p-6 sm:p-8 backdrop-blur-[40px] shadow-[0_12px_48px_rgba(139,92,246,0.08)]">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="mx-auto max-w-xl space-y-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/25">
                  <IconUser className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#1F1B3D]">Profile Settings</h2>
                  <p className="text-xs text-[#6B7280]">Update your personal information</p>
                </div>
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-6">
                {user.avatar && user.avatar !== "/avatars/default.png" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-20 w-20 rounded-2xl object-cover ring-2 ring-violet-200/60 shadow-lg"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/10 text-2xl font-semibold text-violet-600 ring-2 ring-violet-200/50 shadow-inner">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarFileSelected}
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={avatarUploading}
                    className="flex items-center gap-2 rounded-2xl border border-white/70 bg-white/70 px-4 py-2.5 text-sm font-medium text-[#1F1B3D] shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {avatarUploading ? (
                      <IconLoader2 className="h-4 w-4 animate-spin text-violet-500" />
                    ) : (
                      <IconUpload className="h-4 w-4 text-violet-500" />
                    )}
                    {avatarUploading ? "Uploading…" : "Upload Avatar"}
                  </button>
                  {avatarError && (
                    <p className="mt-2 text-xs text-red-500">{avatarError}</p>
                  )}
                </div>
              </div>

              {/* Form fields */}
              <div className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-[#1F1B3D] placeholder:text-[#6B7280]/60 backdrop-blur-sm outline-none transition-all focus:border-violet-300 focus:bg-white/80 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.12)]"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-[#1F1B3D] placeholder:text-[#6B7280]/60 backdrop-blur-sm outline-none transition-all focus:border-violet-300 focus:bg-white/80 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.12)]"
                  />
                </div>
              </div>

              {error && (
                <p className="rounded-xl border border-red-200/60 bg-red-50/80 px-4 py-2.5 text-sm text-red-600">
                  {error}
                </p>
              )}
              {success && (
                <p className="flex items-center gap-2 rounded-xl border border-emerald-200/60 bg-emerald-50/80 px-4 py-2.5 text-sm text-emerald-700">
                  <IconCheck className="h-4 w-4" /> Profile saved successfully!
                </p>
              )}

              <button
                onClick={handleSaveProfile}
                disabled={saving}
                className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#6D8CFF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:-translate-y-0.5 hover:shadow-violet-500/40 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving && <IconLoader2 className="h-4 w-4 animate-spin" />}
                Save Changes
              </button>
            </div>
          )}

          {/* GitHub Tab */}
          {activeTab === "github" && (
            <div className="mx-auto max-w-xl space-y-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-900 shadow-lg">
                  <IconBrandGithub className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#1F1B3D]">GitHub Integration</h2>
                  <p className="text-xs text-[#6B7280]">
                    Connect your account to scan PRs and repositories automatically
                  </p>
                </div>
              </div>

              {githubError && (
                <p className="rounded-xl border border-red-200/60 bg-red-50/80 px-4 py-2.5 text-sm text-red-600">
                  {githubError}
                </p>
              )}

              {user.githubConnected ? (
                <div className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/60 p-5 backdrop-blur-sm shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-white shadow-md">
                      <IconBrandGithub className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1F1B3D]">
                        {user.githubUsername || "Connected"}
                      </p>
                      <p className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
                        Connected via OAuth
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleDisconnectGithub}
                    disabled={githubBusy}
                    className="flex items-center gap-2 rounded-xl border border-red-200/60 bg-red-50/50 px-4 py-2 text-sm font-medium text-red-600 transition-all hover:bg-red-50 hover:border-red-300 disabled:opacity-50"
                  >
                    {githubBusy && <IconLoader2 className="h-3.5 w-3.5 animate-spin" />}
                    Disconnect
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleConnectGithub}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-zinc-800 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
                >
                  <IconBrandGithub className="h-5 w-5" />
                  Connect GitHub Account
                </button>
              )}

              <div className="rounded-2xl border border-violet-200/50 bg-violet-50/40 p-4 text-sm text-[#6B7280]">
                <div className="flex items-start gap-3">
                  <IconShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" />
                  <p>
                    CodeSentry only requests the minimum scopes needed (`repo`, `user`). You can
                    revoke access at any time from your GitHub settings.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="mx-auto max-w-xl space-y-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/25">
                  <IconBell className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#1F1B3D]">Notification Preferences</h2>
                  <p className="text-xs text-[#6B7280]">Choose how you want to stay informed</p>
                </div>
              </div>

              <div className="space-y-1 rounded-2xl border border-white/70 bg-white/50 p-2 backdrop-blur-sm">
                <ToggleRow
                  icon={IconMail}
                  title="Email Alerts"
                  description="Receive emails when critical security issues are found."
                  checked={emailAlerts}
                  onChange={() => setEmailAlerts(!emailAlerts)}
                />
                <div className="mx-4 h-px bg-violet-100/60" />
                <ToggleRow
                  icon={IconMessageCircle}
                  title="PR Review Comments"
                  description="CodeSentry will automatically comment on your GitHub PRs."
                  checked={prAlerts}
                  onChange={() => setPrAlerts(!prAlerts)}
                />
                <div className="mx-4 h-px bg-violet-100/60" />
                <ToggleRow
                  icon={IconCalendarStats}
                  title="Weekly Digest"
                  description="A weekly summary of your codebase health and issues fixed."
                  checked={weeklyDigest}
                  onChange={() => setWeeklyDigest(!weeklyDigest)}
                />
              </div>

              {notifError && (
                <p className="rounded-xl border border-red-200/60 bg-red-50/80 px-4 py-2.5 text-sm text-red-600">
                  {notifError}
                </p>
              )}
              {notifSuccess && (
                <p className="flex items-center gap-2 rounded-xl border border-emerald-200/60 bg-emerald-50/80 px-4 py-2.5 text-sm text-emerald-700">
                  <IconCheck className="h-4 w-4" /> Preferences saved!
                </p>
              )}

              <button
                onClick={handleSaveNotifications}
                disabled={notifSaving}
                className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#6D8CFF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:-translate-y-0.5 hover:shadow-violet-500/40 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {notifSaving && <IconLoader2 className="h-4 w-4 animate-spin" />}
                Save Preferences
              </button>
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === "billing" && (
            <div className="mx-auto max-w-xl space-y-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/25">
                  <IconCreditCard className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#1F1B3D]">Billing & Plan</h2>
                  <p className="text-xs text-[#6B7280]">Manage your subscription and usage</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[24px] border border-violet-200/60 bg-gradient-to-br from-violet-50/80 to-white/70 p-6 backdrop-blur-sm shadow-lg">
                {/* decorative glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-400/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-blue-400/15 blur-3xl" />

                <div className="relative z-10">
                  <div className="mb-1 flex items-center justify-between">
                    <h3 className="text-xl font-bold capitalize text-[#1F1B3D]">
                      {user.plan || "Free"} Plan
                    </h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/70 bg-emerald-50/80 px-3 py-1 text-xs font-semibold text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
                      Active
                    </span>
                  </div>
                  <p className="mb-6 text-sm text-[#6B7280]">
                    You are currently on the {user.plan || "Free"} plan.
                  </p>

                  <div className="mb-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#6B7280]">Monthly Usage</span>
                      <span className="font-semibold text-[#1F1B3D]">
                        {user.reviewsUsed || 0} / {user.reviewsLimit || 50} Reviews
                      </span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-violet-100/80">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-500"
                        style={{
                          width: `${Math.min(
                            ((user.reviewsUsed || 0) / (user.reviewsLimit || 50)) * 100,
                            100
                          )}%`,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    disabled
                    title="Billing upgrades are coming soon"
                    className="w-full rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#6D8CFF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 opacity-50 cursor-not-allowed"
                  >
                    Upgrade Plan (Coming Soon)
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Premium Toggle Row
───────────────────────────────────────────── */
function ToggleRow({
  icon: Icon,
  title,
  description,
  checked,
  onChange,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl px-3 py-3.5 transition-colors hover:bg-white/40">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-violet-100/70 text-violet-600">
          <Icon className="h-4 w-4" />
        </div>
        <div className="flex flex-col pr-2">
          <span className="text-sm font-medium text-[#1F1B3D]">{title}</span>
          <span className="mt-0.5 text-xs text-[#6B7280]">{description}</span>
        </div>
      </div>
      <button
        type="button"
        onClick={onChange}
        className={cn(
          "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2",
          checked ? "bg-violet-600" : "bg-violet-200/60"
        )}
      >
        <span
          className={cn(
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out",
            checked ? "translate-x-5" : "translate-x-0"
          )}
        />
      </button>
    </div>
  );
}