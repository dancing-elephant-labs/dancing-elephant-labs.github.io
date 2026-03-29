import Link from "next/link";
import { teamMembers } from "../data/siteContent";

export default function TeamPreview() {
  const gridClassName =
    teamMembers.length > 1 ? "grid md:grid-cols-2 gap-8" : "grid gap-8 max-w-3xl";

  return (
    <section className="section-shell">
      <div className="page-shell">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="eyebrow mb-4">
              <span className="eyebrow-dot" />
              Team
            </div>
            <h2 className="section-title text-foreground">Lean team, specialized delivery</h2>
            <p className="body-large mt-6">
              We keep the team close to the work so discovery, architecture, and execution stay tightly connected.
            </p>
          </div>
          <Link href="/team" className="button-secondary w-fit">
            View team page
          </Link>
        </div>

        <div className={gridClassName}>
          {teamMembers.map((member) => (
            <div key={member.name} className="surface-card h-full">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-lg font-black text-primary">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                    {member.role}
                  </p>
                </div>
              </div>

              <p className="mt-6 leading-7 text-muted">{member.bio}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {member.expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/80 bg-background/70 px-4 py-2 text-sm font-semibold text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
