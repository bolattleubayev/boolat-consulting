import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";

export const metadata = {
  title: "Case Studies",
};

type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  approach: string[];
  outcome: string[];
};

const caseStudies: CaseStudy[] = [
  {
    slug: "azure-data-pipelines",
    title: "Building scalable data pipelines in Azure",
    summary:
      "A large-scale data engineering engagement focused on reliability, traceability, and operational visibility.",
    problem:
      "The organization had multiple business-critical data sources but reporting was delayed by fragile pipelines, manual intervention, and inconsistent data definitions.",
    solution:
      "A scalable Azure-based data pipeline architecture with standardized ingestion, transformation, and quality controls designed for ongoing operational use.",
    approach: [
      "Defined a layered data model (raw, validated, curated) to separate ingestion from business logic.",
      "Implemented orchestration and monitoring to reduce silent failures and improve recoverability.",
      "Added data quality checkpoints and lineage conventions so teams could trust and audit outputs.",
      "Documented operational runbooks to support handover to internal teams.",
    ],
    outcome: [
      "More reliable daily data availability for analytics and reporting.",
      "Lower operational overhead from pipeline incidents and manual fixes.",
      "Improved confidence in core business metrics across stakeholders.",
    ],
  },
  {
    slug: "ai-multi-source-system",
    title: "AI-powered multi-source data system (R&D)",
    summary:
      "An R&D system integrating real-time data streams with an AI reasoning layer for context-aware analysis.",
    problem:
      "Data arrived from different real-time sources with varying formats, timing, and quality, making consistent interpretation difficult.",
    solution:
      "A processing pipeline that normalized incoming streams and fed a reasoning layer to generate structured, interpretable outputs.",
    approach: [
      "Built a unified event model to align multiple real-time sources into one processing flow.",
      "Designed preprocessing steps for normalization, temporal alignment, and quality filtering.",
      "Added an AI reasoning layer to evaluate patterns and output ranked, explainable signals.",
      "Focused on robust system behavior under noisy and incomplete real-world data conditions.",
    ],
    outcome: [
      "Clearer, more actionable outputs from otherwise fragmented signal streams.",
      "A reusable architecture for multi-source real-time data processing.",
      "Stronger internal capability in practical AI-assisted system design.",
    ],
  },
];

function CaseBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm shadow-slate-900/5">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </div>
      <div className="mt-3 text-sm leading-7 text-slate-700">{children}</div>
    </div>
  );
}

export default function CaseStudiesPage() {
  return (
    <section className="border-b border-slate-900/8 bg-white">
      <Container className="py-20 sm:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Case studies"
            title="Real systems built for complex data and operational needs."
            description="Selected examples of architecture and delivery work. Details are generalized to protect confidentiality while preserving technical and business relevance."
          />
          <ButtonLink href="/contact" variant="secondary">
            Discuss a similar project
          </ButtonLink>
        </div>

        <div className="mt-12 space-y-8">
          {caseStudies.map((study, idx) => (
            <article
              key={study.title}
              id={study.slug}
              className="rounded-3xl border border-slate-900/10 bg-surface p-6 shadow-sm shadow-slate-900/5 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                    Case study {idx + 1}
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    {study.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                    {study.summary}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <CaseBlock label="Problem">{study.problem}</CaseBlock>
                <CaseBlock label="Solution">{study.solution}</CaseBlock>
                <CaseBlock label="Approach">
                  <ul className="space-y-2">
                    {study.approach.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 size-1.5 rounded-full bg-navy/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CaseBlock>
                <CaseBlock label="Outcome">
                  <ul className="space-y-2">
                    {study.outcome.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 size-1.5 rounded-full bg-navy/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CaseBlock>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

