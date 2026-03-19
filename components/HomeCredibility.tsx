import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const reasons = [
  {
    title: "Real engineering experience",
    desc: "Hands-on background in Azure data engineering, pipelines, analytics, and AI/ML projects.",
    icon: "01",
  },
  {
    title: "Business-focused solutions",
    desc: "Work starts from business bottlenecks and decision needs, not tools for the sake of tools.",
    icon: "02",
  },
  {
    title: "Direct builder communication",
    desc: "You work directly with the technical founder, which keeps scope clear and delivery fast.",
    icon: "03",
  },
  {
    title: "Practical systems, no overengineering",
    desc: "Systems are designed to be maintainable by small teams and useful in day-to-day operations.",
    icon: "04",
  },
  {
    title: "Analytics + product thinking",
    desc: "Combines reporting depth with startup/product building experience to ship what teams actually use.",
    icon: "05",
  },
] as const;

export function HomeCredibility() {
  return (
    <section className="border-b border-slate-900/8 bg-white">
      <Container className="py-20 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Why work with us"
              title="Senior technical execution with practical business judgment."
              description="We help small and medium businesses improve reporting, operations, and decisions with systems that are clear, useful, and maintainable."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {reasons.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                >
                  <div className="inline-flex size-8 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10">
                    {item.icon}
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-900/10 bg-surface p-7 shadow-sm shadow-slate-900/5">
              <div className="text-xs font-semibold uppercase tracking-[0.20em] text-navy">
                Founder-led
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                Bolat
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Technical founder with experience in Azure data engineering,
                data pipelines, analytics, AI/ML work, startup/product building,
                and practical business systems.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-700">
                {[
                  "Understands both technical depth and business pressure",
                  "Balances delivery speed with long-term maintainability",
                  "Builds with your actual team capacity in mind",
                  "Keeps communication direct, clear, and actionable",
                ].map((point) => (
                  <div key={point} className="flex gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-navy/80" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

