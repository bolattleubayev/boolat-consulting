import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const reasons = [
  {
    title: "Data engineering depth",
    desc: "Strong delivery capability across Azure and Databricks pipelines, transformation layers, and analytics-ready data models.",
    icon: "01",
  },
  {
    title: "Systems-first approach",
    desc: "Architecture is designed around data flow, integration reliability, and long-term maintainability for growing businesses.",
    icon: "02",
  },
  {
    title: "Business-aligned execution",
    desc: "Engagements are scoped around measurable operational outcomes, reporting speed, and decision quality.",
    icon: "03",
  },
  {
    title: "Cloud and on-premise support",
    desc: "Solutions are delivered across mixed environments and integrated with existing systems and constraints.",
    icon: "04",
  },
  {
    title: "Full delivery coverage",
    desc: "From pipeline engineering to dashboards, reporting automation, and supporting web/mobile applications including iOS.",
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
              title="Serious technical capability for business-critical systems."
              description="We deliver data and analytics systems that improve reliability, reduce manual process load, and support stronger operational decisions."
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
                Delivery model
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                Engineering-led consulting team
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Clients work with a focused consulting team that combines data
                engineering, system integration, and analytics implementation.
                We keep communication direct and execution accountable.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-700">
                {[
                  "Clear technical ownership from architecture to delivery",
                  "Structured implementation with visible milestones",
                  "Documentation and handover suitable for internal teams",
                  "Long-term support aligned to business growth",
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

