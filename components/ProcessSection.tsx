import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    title: "Business audit",
    description:
      "Map your current reporting, data flow, and operational bottlenecks.",
  },
  {
    title: "System design",
    description:
      "Define the right data model, automation approach, and delivery plan.",
  },
  {
    title: "Build and automate",
    description:
      "Implement dashboards, pipelines, and tools with measurable milestones.",
  },
  {
    title: "Adopt and improve",
    description:
      "Train your team and iterate based on business usage and outcomes.",
  },
];

export function ProcessSection() {
  return (
    <section className="border-b border-slate-900/8 bg-surface">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="How we work"
          title="A practical delivery model for growing businesses."
          description="Every phase is focused on reducing manual work, improving reporting quality, and giving leadership clearer decision signals."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-9 place-items-center rounded-full bg-navy text-white shadow-sm shadow-slate-900/10">
                  <span className="text-sm font-semibold">{idx + 1}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-950">
                  {s.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

