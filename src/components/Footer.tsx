import Link from "next/link";
import ThemeLogo from "./ThemeLogo";
import { company } from "../data/siteContent";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-surface/35">
      <div className="page-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-start">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <ThemeLogo alt="Dancing Elephant Labs Logo" className="h-10 w-auto" />
              <div>
                <p className="font-display text-xl font-semibold tracking-[-0.03em] text-foreground">
                  Dancing Elephant Labs
                </p>
                <p className="text-xs uppercase tracking-[0.22em] text-muted">
                  Trusted digital systems
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-muted">
              {company.description}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted">Explore</p>
            <div className="flex flex-col gap-3 text-sm text-muted">
              <Link href="/#expertise" className="hover:text-primary">
                Expertise
              </Link>
              <Link href="/#about" className="hover:text-primary">
                About
              </Link>
              <a
                href="https://github.com/dancing-elephant-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted">Connect</p>
            <div className="flex flex-col gap-3 text-sm text-muted">
              <a href={`mailto:${company.email}`} className="hover:text-primary">
                Email Us
              </a>
              <p>Available for software product and platform engagements.</p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border/70 pt-6 text-sm text-muted">
          <p>© {currentYear} Dancing Elephant Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
