import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CallToAction } from "@/components/CallToAction";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  const supportingServices = [
    {
      title: "Data Integration",
      problem:
        "Business data is spread across ERP, CRM, finance tools, operational systems, and spreadsheets. Teams spend time reconciling numbers instead of using them.",
      outcome:
        "We connect systems into a consistent data flow across cloud and on-premise environments, so reporting and operations run from the same source of truth.",
    },
    {
      title: "Analytics and Dashboards",
      problem:
        "Leadership and operations teams lack clear, shared KPI visibility, which slows decisions and creates debate over what is accurate.",
      outcome:
        "We build analytics layers and dashboards tied to your business definitions, giving teams fast, reliable visibility into revenue, delivery, costs, and performance.",
    },
    {
      title: "Reporting Automation",
      problem:
        "Weekly and monthly reporting depends on manual spreadsheet work, causing delays, repetitive tasks, and inconsistencies.",
      outcome:
        "We automate reporting pipelines and refresh schedules so teams spend less time assembling reports and more time acting on insights.",
    },
    {
      title: "Custom Applications (Web and Mobile, including iOS)",
      problem:
        "Standard tools do not always fit operational workflows, especially for field teams or process-heavy environments.",
      outcome:
        "When needed, we build supporting web and mobile applications, including iOS, to improve workflow execution and adoption around your core data platform.",
    },
  ];

  return (
    <>
      <section className="border-b border-slate-900/8 bg-white">
        <Container className="py-20 sm:py-24">
          <SectionHeading
            eyebrow="Services"
            title="Data engineering and integration services for small and medium businesses."
            description="Our core service is data engineering. We design pipelines, integrate systems, and deliver analytics platforms that improve reporting quality and decision speed."
          />

          <div className="mt-10 grid gap-6 rounded-3xl border border-slate-900/10 bg-surface p-6 md:grid-cols-3">
            {[
              {
                label: "Core technologies",
                value: "Azure and Databricks",
              },
              {
                label: "Core environments",
                value: "Cloud and on-premise systems",
              },
              {
                label: "Primary focus",
                value: "Data pipelines, integration, and analytics reliability",
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

          <div className="mt-12 rounded-3xl border border-navy/20 bg-gradient-to-br from-navy/[0.06] via-white to-white p-7 shadow-sm shadow-slate-900/5 sm:p-8">
            <div className="inline-flex items-center rounded-full bg-navy px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Core service
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              1. Data Engineering
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 sm:text-base">
              We build data pipelines that replace manual reporting and ensure
              reliable, scalable data for analytics. Delivery is centered on Azure
              and Databricks, with architecture designed to work across cloud and
              on-premise environments.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-900/10 bg-white p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Business problem
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Reporting is slow and unreliable because source data is fragmented,
                  transformations are inconsistent, and pipeline ownership is unclear.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-900/10 bg-white p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Client outcome
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  A dependable data foundation with governed models, predictable
                  refresh cycles, and trusted numbers for operational and leadership
                  decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {supportingServices.map((service, idx) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                  {idx + 2}. {service.title}
                </h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Business problem
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {service.problem}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Client outcome
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {service.outcome}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}

