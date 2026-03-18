import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CallToAction } from "@/components/CallToAction";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="About"
            title="A small, senior team focused on clarity and outcomes."
            description="boolat is an IT consulting firm partnering with teams that need pragmatic architecture, clean execution, and reliable delivery."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-900/10 bg-white p-8">
                <h3 className="text-base font-semibold text-slate-950">
                  What we optimize for
                </h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      title: "Simple systems",
                      desc: "Clear boundaries, fewer moving parts, and boring infrastructure where possible.",
                    },
                    {
                      title: "Measurable delivery",
                      desc: "Define success metrics early and track them throughout execution.",
                    },
                    {
                      title: "Security by default",
                      desc: "Good hygiene and a threat-aware mindset—without slowing teams down.",
                    },
                    {
                      title: "Enablement",
                      desc: "Docs, playbooks, and knowledge transfer so your team owns the outcome.",
                    },
                  ].map((x) => (
                    <div key={x.title} className="rounded-2xl bg-surface p-5">
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
              <div className="rounded-3xl border border-slate-900/10 bg-surface p-8">
                <h3 className="text-base font-semibold text-slate-950">
                  Engagement basics
                </h3>
                <dl className="mt-6 space-y-5 text-sm">
                  <div className="flex items-start justify-between gap-6">
                    <dt className="text-slate-600">Typical start</dt>
                    <dd className="font-medium text-slate-950">
                      1–2 weeks
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <dt className="text-slate-600">Cadence</dt>
                    <dd className="font-medium text-slate-950">
                      Weekly check-ins
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <dt className="text-slate-600">Deliverables</dt>
                    <dd className="font-medium text-slate-950">
                      Code + docs
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <dt className="text-slate-600">Timezones</dt>
                    <dd className="font-medium text-slate-950">
                      Flexible overlap
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-900/10 bg-white p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.20em] text-navy">
                  Principles
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {[
                    "Prefer clear interfaces over clever abstractions.",
                    "Ship small increments with feedback loops.",
                    "Make quality visible with tests and telemetry.",
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

      <CallToAction />
    </>
  );
}

