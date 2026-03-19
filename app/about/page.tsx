import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CallToAction } from "@/components/CallToAction";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-slate-900/8 bg-white">
        <Container className="py-20 sm:py-24">
          <SectionHeading
            eyebrow="About"
            title="Founder-led consulting for businesses that need systems they can actually use."
            description="boolat is built by data engineers and product-minded builders. We help small and medium businesses improve operations through practical data and digital systems."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-900/10 bg-white p-8 shadow-sm shadow-slate-900/5">
                <h3 className="text-base font-semibold text-slate-950">
                  Founder introduction
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  I work directly with businesses to design systems that are
                  practical, usable, and built for real operations.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Our background spans Azure data engineering, analytics, AI/ML
                  work, startup development, and practical business systems.
                  That mix helps us solve both technical and operational
                  problems without overcomplicating delivery.
                </p>

                <h3 className="mt-8 text-base font-semibold text-slate-950">
                  How we solve business problems
                </h3>
                <div className="mt-5 grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      title: "Start with operations",
                      desc: "We map how your team currently works, where time is lost, and where decisions get blocked.",
                    },
                    {
                      title: "Build what gets used",
                      desc: "Dashboards, pipelines, and tools are shaped around real workflows, not slideware requirements.",
                    },
                    {
                      title: "Keep systems practical",
                      desc: "We avoid unnecessary complexity so your team can maintain and evolve what we deliver.",
                    },
                    {
                      title: "Measure outcomes",
                      desc: "Success is tracked through reporting speed, data trust, and decision quality.",
                    },
                  ].map((x) => (
                    <div key={x.title} className="rounded-2xl bg-surface p-5 ring-1 ring-slate-900/8">
                      <div className="text-sm font-semibold text-slate-950">
                        {x.title}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">
                        {x.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-900/10 bg-surface p-8 shadow-sm shadow-slate-900/5">
                <h3 className="text-base font-semibold text-slate-950">
                  Why this consultancy exists
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Many SMEs sit on useful data but still run key decisions on
                  fragmented spreadsheets and disconnected tools. We started this
                  consultancy to close that gap with practical systems that
                  improve day-to-day execution.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  You work directly with the people designing and building the
                  solution. That keeps communication clear, timelines realistic,
                  and outcomes aligned with your business.
                </p>

                <div className="mt-7 grid gap-3 text-sm">
                  {[
                    "Direct founder involvement from planning to delivery",
                    "Clear scope and pragmatic implementation",
                    "Documentation and handover your team can use",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex gap-2 rounded-xl border border-slate-900/10 bg-white px-4 py-3 text-slate-700"
                    >
                      <span className="mt-2 size-1.5 rounded-full bg-navy/70" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 grid gap-3 rounded-2xl border border-slate-900/10 bg-white p-5 text-sm">
                  <div className="font-semibold text-slate-950">
                    At a glance
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-slate-600">Leadership model</span>
                    <span className="font-medium text-slate-950">
                      Founder-led delivery
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-slate-600">Typical focus</span>
                    <span className="font-medium text-slate-950">
                      Data + operations
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-slate-600">Client type</span>
                    <span className="font-medium text-slate-950">
                      Small and medium businesses
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-900/10 bg-white p-8 shadow-sm shadow-slate-900/5">
                <div className="text-xs font-semibold uppercase tracking-[0.20em] text-navy">
                  Working style
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {[
                    "Clear communication over consultancy jargon.",
                    "Useful outputs over impressive complexity.",
                    "Steady progress with measurable milestones.",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-navy/70" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-900/8 bg-slate-50">
        <Container className="py-14 sm:py-20">
          <div className="rounded-3xl border border-slate-900/10 bg-white p-8 shadow-sm shadow-slate-900/5 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <div className="text-xs font-semibold uppercase tracking-[0.20em] text-navy">
                  R&D mindset
                </div>
                <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Built on real data experience.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Our analytical approach is grounded in work on AI-related
                  health data that required combining sensor, activity, and
                  environmental data under real-world constraints.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      title: "Real-world inputs",
                      desc: "Worked with sensor, activity, and environmental data across different quality levels.",
                    },
                    {
                      title: "Practical modeling",
                      desc: "Balanced model ambition with data constraints, reliability, and usability.",
                    },
                    {
                      title: "Meaningful outputs",
                      desc: "Kept focus on decision-support outputs that people can interpret and act on.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-900/10 bg-surface p-5"
                    >
                      <h3 className="text-sm font-semibold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-600">
                  We apply the same discipline in SME consulting: practical data
                  foundations, realistic system design, and reporting that
                  supports better business decisions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}

