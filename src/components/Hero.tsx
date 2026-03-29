import { company } from "../data/siteContent";

export default function Hero() {
  
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-[-8%] top-[8%] h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-[-6%] top-[12%] h-80 w-80 rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute bottom-[-8%] left-[28%] h-64 w-64 rounded-full bg-brand/10 blur-[140px]" />
      </div>

      <div className="page-shell grid min-h-[calc(100svh-5rem)] items-center gap-14 pb-20 pt-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:pb-24">
        <div className="max-w-3xl">
          <div className="eyebrow mb-8">
            <span className="eyebrow-dot" />
            Software solutions with specialized expertise
          </div>


          <h1 className="display-title max-w-4xl text-foreground">
            Trusted <span className="gradient-text">software systems</span> for teams building the
            next layer of digital operations.
          </h1>

          <p className="body-large mt-8 max-w-2xl">
            We design and ship secure platforms, workflow-heavy tools, and domain-specific products
            with clarity in the user experience and rigor in the system architecture.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="button-primary">
              Talk about your product
            </a>
            <a href="#expertise" className="button-secondary">
              Explore expertise
            </a>
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-border/70 bg-surface/75 p-8 shadow-elevation3 backdrop-blur-xl">
          <div
            className="absolute inset-x-0 top-0 h-44 opacity-80"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%)]" />
          <div className="trunk-curve" />

          <div className="absolute left-8 top-8 flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-white" />
            Delivery systems
          </div>

          <div
            className="absolute left-1/2 top-1/2 flex h-72 w-72 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-center text-white shadow-[0_0_80px_rgba(103,232,249,0.28)]"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            <div>
              <p className="font-display text-5xl font-semibold tracking-[-0.05em]">DEL</p>
              <p className="mt-3 text-sm uppercase tracking-[0.32em] text-white/78">
                build with clarity and specialized expertise with demo-led approach
              </p>
            </div>
          </div>
          <span className="dot-accent absolute bottom-16 right-12 h-3 w-3" />
          <span className="dot-accent absolute right-24 top-24 h-2 w-2" />
          <span className="dot-accent absolute left-20 top-32 h-4 w-4" />
        </div>
      </div>
    </section>
  );
}
