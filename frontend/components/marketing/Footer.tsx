import Link from "next/link";
import { IconSparkles } from "@tabler/icons-react";

const FOOTER_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Docs", href: "#docs" },
  { label: "GitHub", href: "https://github.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060816] border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#5B5FFF] to-[#6F4CFF]">
              <IconSparkles className="h-4 w-4 text-white" stroke={2} />
            </div>
            <span className="text-sm text-[#7B859E]">
              &copy; {year} CodeSentry AI. All rights reserved.
            </span>
          </div>

          {/* Footer links */}
          <nav className="flex items-center gap-8" aria-label="Footer">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#7B859E] transition-colors duration-200 hover:text-white"
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}