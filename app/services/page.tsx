import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CallToAction } from "@/components/CallToAction";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-slate-900/8 bg-white">
        <Container className="py-20 sm:py-24">
          <SectionHeading
            eyebrow="Services"
            title="Practical data and digital systems for small and medium businesses."
            description="Choose a focused engagement or combine services into a roadmap that improves reporting, operations, and decision-making."
          />

          <div className="mt-10 grid gap-6 rounded-3xl border border-slate-900/10 bg-surface p-6 md:grid-cols-3">
            {[
              {
                label: "Who we help",
                value: "SMEs with growing operational complexity",
              },
              {
                label: "Typical outcomes",
                value: "Faster reporting and clearer visibility",
              },
              {
                label: "Working model",
                value: "Founder-led, hands-on implementation",
              },
            ].map((x) => (
              <div
                key={x.label}
                className="rounded-2xl bg-white p-5 shadow-sm shadow-slate-900/5 ring-1 ring-slate-900/10"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {x.label}
                </div>
                <div className="mt-2 text-sm font-medium leading-6 text-slate-800">
                  {x.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Data Engineering",
                desc: "Design data flows and models that turn fragmented sources into reliable reporting inputs.",
                points: [
                  "Clean pipeline architecture",
                  "Consistent data definitions",
                  "Less time spent fixing data issues",
                ],
              },
              {
                title: "Analytics Dashboards",
                desc: "Build decision-ready dashboards around the KPIs your leadership team actually uses.",
                points: [
                  "Executive and team views",
                  "KPI alignment",
                  "Faster, clearer decision cycles",
                ],
              },
              {
                title: "Reporting Automation",
                desc: "Replace manual weekly reporting work with automated pipelines and repeatable outputs.",
                points: [
                  "Automated refresh and delivery",
                  "Reduced spreadsheet overhead",
                  "More time for analysis",
                ],
              },
              {
                title: "Digital Tools and Apps",
                desc: "Develop lightweight internal tools, web apps, or mobile workflows to support day-to-day operations.",
                points: [
                  "Built around real workflow steps",
                  "Usable by non-technical teams",
                  "Improved process consistency",
                ],
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                  {x.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{x.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {x.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-navy/70" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ServicesGrid
        title="Core capabilities"
        description="Delivery modules you can combine based on your business priorities."
        showLink={false}
      />

      <CallToAction />
    </>
  );
}

