export default function About() {
  const principles = [
    {
      title: "Built Around Real Operations",
      desc: "We translate messy, real-world processes into software that teams can actually adopt and rely on."
    },
    {
      title: "Specialized When It Counts",
      desc: "We use our specialized expertise to build the right system architecture and user experience for the domain, rather than trying to be all things to all people."
    },
    {
      title: "Demo-Led Conversations",
      desc: "Instead of abstract capability claims, we prefer to show working solution concepts and concrete product thinking early."
    }
  ];

  return (
    <section id="about" className="section-shell">
      <div className="page-shell grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
        <div>
          <div className="eyebrow mb-6">
            <span className="eyebrow-dot" />
            About the lab
          </div>

          <h2 className="section-title max-w-3xl text-foreground">
            A software partner for products, platforms, and specialized systems.
          </h2>

          <p className="body-large mt-8 max-w-2xl">
            Dancing Elephant Labs builds modern software for organizations that need more than generic agency delivery. We combine product thinking, hands-on engineering, and domain understanding to ship systems that are secure, useful, and ready to grow.
          </p>
        </div>

        <div className="space-y-4">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-[1.5rem] border border-border/70 bg-surface/70 p-6 shadow-elevation1 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <span className="dot-accent h-3 w-3" />
                <h3 className="font-display text-[1.65rem] font-semibold tracking-[-0.03em] text-foreground">
                  {principle.title}
                </h3>
              </div>
              <p className="mt-4 text-base leading-7 text-muted">{principle.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
