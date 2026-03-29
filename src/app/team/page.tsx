// import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import { expertiseAreas, teamMembers } from "../../data/siteContent";

export default function TeamPage() {
  return (
    <main>
      <Navbar />

      <section className="relative overflow-hidden pb-20 pt-14 lg:pt-20">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute right-[-10%] top-[-10%] h-80 w-80 rounded-full bg-primary/20 blur-[140px]" />
          <div className="absolute bottom-[0%] left-[-10%] h-72 w-72 rounded-full bg-accent/18 blur-[130px]" />
        </div>

        <div className="page-shell">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">
              <span className="eyebrow-dot" />
              Team
            </div>

            <h1 className="display-title text-foreground">
              The people behind our specialized software delivery
            </h1>

            <p className="body-large mt-8 max-w-2xl">
              We keep the team lean, senior, and close to the product so decisions stay fast and the right expertise shows up where it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* <section id="team-directory" className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.4fr,0.9fr] gap-8 items-start">
            <div className="space-y-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="glass-card">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center text-2xl font-black shrink-0">
                      {member.initials}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-foreground">{member.name}</h2>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-foreground/40">
                        {member.role}
                      </p>
                      <p className="mt-6 text-lg text-foreground/60 leading-relaxed">{member.bio}</p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {member.expertise.map((item) => (
                          <span
                            key={item}
                            className="px-4 py-2 rounded-full bg-background border border-card-border text-sm font-semibold text-foreground/70"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      {member.contactHref ? (
                        <a
                          href={member.contactHref}
                          className="inline-block mt-8 px-6 py-3 btn-gradient rounded-full text-sm font-bold shadow-md"
                        >
                          Contact this team
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold tracking-widest uppercase">
                Expertise Coverage
              </div>
              <h2 className="text-3xl font-bold text-foreground">Areas we currently spotlight</h2>
              <div className="mt-8 space-y-5">
                {expertiseAreas.map((expertise) => (
                  <div key={expertise.slug} className="pb-5 border-b border-card-border last:border-b-0 last:pb-0">
                    <h3 className="text-lg font-bold text-foreground">{expertise.name}</h3>
                    <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{expertise.summary}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/#expertise"
                  className="px-5 py-3 bg-background border border-card-border rounded-full text-sm font-bold hover:bg-card-border transition-all duration-300"
                >
                  View expertise
                </Link>
                <Link
                  href="/#contact"
                  className="px-5 py-3 btn-gradient rounded-full text-sm font-bold shadow-md"
                >
                  Start a conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}
