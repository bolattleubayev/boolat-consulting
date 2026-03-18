import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    title: "Discover",
    description:
      "We align on goals, constraints, and success metrics. You’ll leave with a clear plan.",
  },
  {
    title: "Design",
    description:
      "Architecture and implementation plan with trade-offs, risks, and milestones.",
  },
  {
    title: "Deliver",
    description:
      "Build in small increments with reviews, documentation, and measurable outcomes.",
  },
  {
    title: "Enable",
    description:
      "Handover with playbooks, training, and ongoing support options if needed.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[18rem] bg-[radial-gradient(circle_at_top,rgba(11,31,68,0.10),transparent_60%)]"
      />
      <Container className="py-16 sm:py-28">
        <SectionHeading
          eyebrow="How we work"
          title="A lightweight process with enterprise-grade rigor."
          description="Transparent delivery, crisp communication, and artifacts your team can reuse."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-slate-900/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-9 place-items-center rounded-full bg-gradient-to-r from-navy to-navy-2 text-white shadow-sm shadow-slate-900/10">
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

