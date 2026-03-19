import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";

const outcomes = [
  {
    metric: "-40%",
    title: "Reporting turnaround",
    detail:
      "Reduced time spent preparing weekly reporting through automation and cleaner data flow.",
  },
  {
    metric: "99%+",
    title: "Data consistency",
    detail:
      "Improved trust in core numbers by standardizing definitions and pipeline checks.",
  },
  {
    metric: "2-3x",
    title: "Decision speed",
    detail:
      "Faster leadership decisions with KPI dashboards and clearer operational visibility.",
  },
];

export function ExampleOutcomes() {
  return (
    <section className="border-b border-slate-900/8 bg-slate-50">
      <Container className="py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Example outcomes"
              title="What clients usually improve in the first phase."
              description="Targets depend on your baseline, but these are common early outcomes when data and reporting systems are cleaned up."
            />
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <ButtonLink href="/contact" variant="secondary">
              Discuss your baseline
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {outcomes.map((o) => (
            <article
              key={o.title}
              className="rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5"
            >
              <div className="text-3xl font-semibold tracking-tight text-navy">
                {o.metric}
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-950">
                {o.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{o.detail}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

