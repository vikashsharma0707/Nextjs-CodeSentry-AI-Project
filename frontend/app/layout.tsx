// import type { Metadata } from "next";
// import { Space_Grotesk, Geist_Mono, Playfair_Display } from "next/font/google";
// import "./globals.css";
// import { cn } from "@/lib/utils";
// import { AuthProvider } from "@/context/AuthContext";

// const spaceGrotesk = Space_Grotesk({
//   subsets: ["latin"],
//   variable: "--font-geist-sans", // Replacing geist-sans for drop-in replacement
// });
// const playfairDisplay = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-serif",
// });
// const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: {
//     default: "BunoBagera — Smart AI Code Reviewer",
//     template: "%s | BunoBagera",
//   },
//   description: "Advanced AI-powered code review and automated pull request analysis for real production projects.",
//   keywords: [
//     "AI code review",
//     "automated code reviewer",
//     "smart code analyzer",
//     "pull request assistant",
//     "github bot",
//     "code scanner",
//     "static code analysis",
//     "bug detection AI",
//     "claude code review",
//     "ai developer tools",
//     "software quality assurance",
//     "production code audit",
//     "code refactoring AI",
//     "find code bugs AI",
//     "AI pull request review",
//     "ChatGPT for code review",
//     "code smell detector",
//     "security vulnerability scanner"
//   ],
//   authors: [{ name: "BunoBagera Team" }],
//   creator: "BunoBagera",
//   publisher: "BunoBagera",
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   verification: {
//     google: "google43a546423ee2cbf5",
//   },
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html
//       lang="en"
//       className={cn(
//         "h-full antialiased",
//         spaceGrotesk.variable,
//         geistMono.variable,
//         playfairDisplay.variable,
//       )}
//     >
//       <body className="min-h-full flex flex-col bg-[#050505] font-sans">
//         <AuthProvider>{children}</AuthProvider>
//       </body>
//     </html>
//   );
// }



import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/context/AuthContext";

/* ═══════════════════════════════════════════════════════════════════════════
   FONTS — Premium Typography Stack
   ═══════════════════════════════════════════════════════════════════════════ */

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

/* ═══════════════════════════════════════════════════════════════════════════
   METADATA — SEO + Social
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  metadataBase: new URL("https://codesentry.ai"),
  title: {
    default: "CodeSentry AI — Smart AI Code Reviewer for Real Projects",
    template: "%s | CodeSentry AI",
  },
  description:
    "Advanced AI-powered code review and automated pull request analysis. Identify issues, optimize code, and deploy cleaner codebases with intelligent automation.",
  keywords: [
    "AI code review",
    "automated code reviewer",
    "smart code analyzer",
    "pull request assistant",
    "GitHub bot",
    "code scanner",
    "static code analysis",
    "bug detection AI",
    "code refactoring AI",
    "security vulnerability scanner",
    "AI developer tools",
    "production code audit",
    "automated PR review",
    "code quality assurance",
    "AI code insights",
  ],
  authors: [{ name: "Vikash Sharma", url: "https://codesentry.ai" }],
  creator: "CodeSentry AI",
  publisher: "CodeSentry AI",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codesentry.ai",
    siteName: "CodeSentry AI",
    title: "CodeSentry AI — Smart AI Code Reviewer",
    description:
      "AI-powered automated code reviews, security scanning, and intelligent insights for production teams.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeSentry AI — AI-Powered Code Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeSentry AI — Smart AI Code Reviewer",
    description:
      "AI-powered automated code reviews, security scanning, and intelligent insights.",
    creator: "@CodeSentryAI",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://codesentry.ai",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google43a546423ee2cbf5",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F0FF" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ═══════════════════════════════════════════════════════════════════════════
   ROOT LAYOUT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full scroll-smooth antialiased",
        spaceGrotesk.variable,
        geistMono.variable,
      )}
    >
      <head>
        <style>{`
          :root {
            /* CodeSentry AI Color System */
            --cs-primary: #7A5AF8;
            --cs-secondary: #9C82FF;
            --cs-accent: #B59DFF;
            --cs-bg: #F5F0FF;
            --cs-bg-section: #EEE5FF;
            --cs-card: rgba(255, 255, 255, 0.65);
            --cs-heading: #111827;
            --cs-body: #5B6172;
            --cs-border: rgba(122, 90, 248, 0.12);
            --cs-glow: rgba(122, 90, 248, 0.25);
          }

          /* Selection */
          ::selection {
            background-color: rgba(122, 90, 248, 0.2);
            color: #111827;
          }

          /* Scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background: rgba(122, 90, 248, 0.25);
            border-radius: 999px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: rgba(122, 90, 248, 0.4);
          }

          /* Firefox scrollbar */
          * {
            scrollbar-width: thin;
            scrollbar-color: rgba(122, 90, 248, 0.25) transparent;
          }

          /* Smooth anchor scrolling */
          html {
            scroll-behavior: smooth;
          }

          /* Focus visible ring */
          :focus-visible {
            outline: 2px solid rgba(122, 90, 248, 0.5);
            outline-offset: 2px;
          }

          /* Reduced motion */
          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
        `}</style>
      </head>
      <body
        className={cn(
          "min-h-full flex flex-col overflow-x-hidden",
          "font-sans text-[#111827]",
          "selection:bg-[rgba(122,90,248,0.2)] selection:text-[#111827]",
        )}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
