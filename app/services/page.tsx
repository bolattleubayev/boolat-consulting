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
      <section className="bg-white">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Services"
            title="Consulting engagements that move product, platform, and data forward."
            description="Pick a focused outcome or combine streams into a pragmatic modernization program."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Delivery acceleration",
                desc: "CI/CD, release readiness, testing strategy, and operational maturity.",
                points: ["Build pipelines", "Reduce incidents", "Improve lead time"],
              },
              {
                title: "Platform modernization",
                desc: "Practical cloud adoption, service boundaries, and reliability patterns.",
                points: ["Cloud foundations", "Observability", "Cost controls"],
              },
              {
                title: "Analytics enablement",
                desc: "KPI definitions, semantic models, and dashboards for real decision-making.",
                points: ["KPI design", "Data contracts", "Stakeholder alignment"],
              },
              {
                title: "Security improvements",
                desc: "Shift-left security with secure defaults and measurable coverage.",
                points: ["Threat modeling", "SAST/DAST", "Secrets management"],
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-2xl border border-slate-900/10 bg-white p-6"
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
        title="Capabilities"
        description="Flexible modules you can mix to fit your roadmap."
        showLink={false}
      />

      <CallToAction />
    </>
  );
}

