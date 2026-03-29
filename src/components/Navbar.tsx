"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeLogo from "./ThemeLogo";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { href: "/#expertise", label: "Expertise" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border/70 bg-background/72 backdrop-blur-xl">
      <div className="page-shell flex min-h-[5rem] items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <ThemeLogo alt="Dancing Elephant Labs Logo" className="h-11 w-auto" />
          <div className="hidden sm:block">
            <p className="font-display text-lg font-semibold tracking-[-0.03em] text-foreground">
              Dancing Elephant Labs
            </p>
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted">
              Trusted digital systems
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-3 md:gap-5">
          <div className="hidden items-center gap-7 text-sm font-semibold text-muted md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface/80 text-foreground shadow-elevation1 hover:border-primary/50 hover:text-primary hover:shadow-glow md:hidden"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
            >
              {isMenuOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
            </button>
            <Link
              href="/#contact"
              className="button-primary hidden sm:inline-flex"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen ? (
        <div id="mobile-nav" className="border-t border-border/70 bg-background/95 md:hidden">
          <div className="page-shell space-y-3 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl border border-border/70 bg-surface/70 px-4 py-3 text-base font-semibold text-foreground shadow-elevation1"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              className="button-primary w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Start a Project
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
