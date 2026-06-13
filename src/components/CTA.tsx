import { company } from "../data/siteContent";

export default function CTA() {
  return (
    <section id="contact" className="section-shell pt-0">
      <div className="page-shell">
        <div
          className="relative overflow-hidden rounded-[2rem] px-8 py-12 text-white shadow-elevation3 md:px-12 lg:px-16 lg:py-16"
          style={{ backgroundImage: "var(--gradient-primary)" }}
        >
          <div className="absolute left-[-4%] top-[-10%] h-60 w-60 rounded-full bg-white/12 blur-3xl" />
          <div className="absolute bottom-[-18%] right-[-4%] h-72 w-72 rounded-full bg-slate-950/18 blur-3xl" />
          <div className="absolute inset-y-0 right-[12%] hidden w-px bg-white/16 lg:block" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.75fr)] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-white" />
                Contact
              </div>

              <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-[-0.04em] text-white lg:text-6xl">
                Need a product partner for your next software build?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
                Whether you need a domain-specific platform, an internal operations tool, or an SSI-focused product, we can scope the right next step together.
              </p>
            </div>

            <div className="space-y-5 rounded-[1.5rem] border border-white/18 bg-white/10 p-6 backdrop-blur-md">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                Start the conversation
              </p>
              <a
                href={`mailto:${company.email}`}
                aria-label="Contact Dancing Elephant Labs"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-base font-bold text-slate-950 shadow-lg hover:scale-[1.02]"
              >
                <span>Contact the lab</span>
                <img
                  src="/logo.png"
                  alt=""
                  aria-hidden="true"
                  className="h-12 w-12 rounded-lg object-cover"
                />
              </a>
              <a
                href="#expertise"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/22 px-6 py-4 text-base font-semibold text-white hover:bg-white/10"
              >
                Review current expertise
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
