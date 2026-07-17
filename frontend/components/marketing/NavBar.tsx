"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IconMenu2, IconX, IconSparkles } from "@tabler/icons-react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border border-white/[0.08] px-6 py-3 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "bg-[#0E1324]/90 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]" : "bg-[#0E1324]/60"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 select-none">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#5B5FFF] to-[#6F4CFF] shadow-[0_0_20px_rgba(91,95,255,0.5)]">
            <IconSparkles className="h-4.5 w-4.5 text-white" stroke={2} />
          </div>
          <span className="text-[15px] font-bold tracking-tight text-white">
            CodeSentry <span className="text-[#8B8FFF]">AI</span>
          </span>
        </Link>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="rounded-full px-4 py-2 text-[13px] font-medium text-[#B6BED6] transition-all hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: Login/CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-[13px] font-medium text-[#B6BED6] hover:text-white transition-colors px-3">
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-gradient-to-r from-[#5B5FFF] to-[#6F4CFF] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_20px_rgba(91,95,255,0.4)] transition-all hover:shadow-[0_4px_28px_rgba(91,95,255,0.6)] hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors"
        >
          {isOpen ? <IconX className="h-5 w-5" /> : <IconMenu2 className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[76px] left-4 right-4 rounded-2xl border border-white/[0.08] bg-[#0E1324]/95 backdrop-blur-xl md:hidden flex flex-col p-3 gap-1 shadow-2xl">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="rounded-xl py-3 px-4 text-sm font-medium text-[#B6BED6] hover:bg-white/5 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-2 flex gap-2 px-1">
            <Link href="/login" className="flex-1 text-center py-3 rounded-xl text-sm font-medium text-white border border-white/[0.08] hover:bg-white/5 transition-colors">
              Log in
            </Link>
            <Link
              href="/signup"
              className="flex-1 text-center py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#5B5FFF] to-[#6F4CFF]"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}