import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const problems = [
  "We have data but no visibility.",
  "Reports take too long every week.",
  "Everything lives in Excel and disconnected systems.",
  "We do not fully trust our numbers.",
  "We need dashboards but do not know where to start.",
  "Our operations are growing faster than our tools.",
];

export function ProblemsWeSolve() {
  return (
    <section className="border-b border-slate-900/8 bg-slate-50">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Problems we solve"
          title="Common pain points we hear from growing businesses."
          description="If these sound familiar, you are not alone. We help teams move from patchwork workflows to systems they can rely on."
          align="center"
        />

        <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <article
              key={problem}
              className="group rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                <span className="grid size-6 place-items-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10">
                  {index + 1}
                </span>
                Pain point
              </div>
              <p className="mt-4 text-base leading-7 text-slate-800">{problem}</p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-slate-600 sm:text-base">
          We help turn fragmented business processes into usable systems and
          clear reporting your team can act on.
        </p>
      </Container>
    </section>
  );
}

