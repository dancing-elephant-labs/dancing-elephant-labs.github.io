import { expertiseAreas } from "../data/siteContent";

export default function Services() {
  return (
    <section id="expertise" className="section-shell">
      <div className="page-shell">
        <div className="grid gap-8 border-b border-border/70 pb-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <div>
            <div className="eyebrow mb-6">
              <span className="eyebrow-dot" />
              Current expertise
            </div>
            <h2 className="section-title max-w-2xl text-foreground">
              General software delivery, with domain depth where it matters.
            </h2>
          </div>

          <p className="body-large max-w-2xl lg:justify-self-end">
            We build across product categories, and we highlight specialized expertise areas with demo-ready solutions so prospects can quickly see what we know best.
          </p>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {expertiseAreas.map((item, index) => (
            <article key={item.slug} className="surface-card flex h-full flex-col">
              <div className="flex items-start justify-between gap-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-lg font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="max-w-[13rem] text-right text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                  {item.summary}
                </p>
              </div>

              <div className="mt-8 flex-1">
                <h3 className="font-display text-[2rem] font-semibold leading-tight tracking-[-0.03em] text-foreground">
                  {item.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>

                <ul className="mt-8 space-y-4 text-sm text-muted">
                  {item.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-3">
                      <span className="dot-accent mt-[7px] h-2 w-2 shrink-0" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={item.demoHref}
                  className="button-primary"
                >
                  {item.demoLabel}
                </a>
                <a href="#contact" className="button-secondary">
                  Discuss this capability
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
