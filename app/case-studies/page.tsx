import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import Image from "next/image";

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
  capabilities?: string[];
  outcome: string[];
};

const caseStudies: CaseStudy[] = [
  {
    slug: "azure-data-pipelines",
    title: "Replacing a legacy BI system and building a modern data platform",
    summary:
      "A data platform modernization engagement focused on replacing legacy BI, integrating fragmented enterprise data, and improving reporting reliability at scale.",
    problem:
      "A legacy business intelligence solution was expensive to maintain, inflexible, and required significant manual effort to prepare data for reporting. Data was fragmented across multiple enterprise systems, including ERP platforms, databases, and external APIs, making it difficult to produce reliable and consistent insights.",
    solution:
      "We designed and implemented a modern data platform that replaced the legacy BI system and unified data across the organization.",
    approach: [
      "Decommissioned a legacy BI solution and replaced it with a modern data architecture.",
      "Integrated data from multiple enterprise systems, including SAP, JD Edwards, SQL Server databases, and external APIs.",
      "Built scalable data pipelines for ingestion, transformation, and storage.",
      "Implemented data enrichment and transformation using Databricks.",
      "Applied medallion architecture (bronze, silver, gold layers).",
      "Implemented Slowly Changing Dimensions (SCD) for historical tracking.",
      "Established data quality checks and validation processes.",
    ],
    outcome: [
      "Reduced infrastructure and licensing costs by approximately $250,000.",
      "Replaced a rigid legacy reporting system with a scalable data platform.",
      "Reduced manual data preparation effort.",
      "Improved consistency and reliability of reporting.",
      "Enabled a foundation for future analytics and decision-making.",
    ],
  },
  {
    slug: "ai-multi-source-system",
    title: "AI-powered multi-source data system (R&D)",
    summary:
      "An advanced R&D system combining health-related real-time inputs, structured processing, and an AI reasoning layer for decision-support workflows.",
    problem:
      "Multiple health-related data streams arrived with inconsistent formats, timing, and signal quality, making reliable interpretation difficult for product and research teams.",
    solution:
      "A multi-source processing system that normalized incoming events and routed them to an AI reasoning layer for structured, interpretable outputs in a prototype interface.",
    approach: [
      "Defined a unified event model to align multiple real-time health-related inputs into a single processing flow.",
      "Implemented normalization, temporal alignment, and quality filtering before inference.",
      "Added an AI reasoning layer to evaluate patterns and return structured decision-support signals.",
      "Built a prototype interface to present analytics and AI-assisted interpretation in a clear operator workflow.",
    ],
    outcome: [
      "Clearer interpretation workflows from otherwise fragmented, asynchronous data streams.",
      "A reusable architecture for multi-source real-time ingestion, processing, and analysis.",
      "A credible R&D foundation for further validation and controlled product exploration.",
    ],
  },
  {
    slug: "ar-mobile-prototypes",
    title: "Augmented reality prototypes for interactive mobile experiences",
    summary:
      "A prototype program demonstrating advanced iOS/mobile AR interaction patterns, including recognition, tracking, 3D content, and context-aware overlays.",
    problem:
      "Many mobile use cases need richer interaction than conventional interfaces can provide, especially when digital information must respond to physical objects, space, or movement.",
    solution:
      "We developed a set of AR prototypes showing image recognition, object tracking, interactive overlays, 3D visualization, and accessibility-oriented concepts in a controlled innovation context.",
    approach: [
      "Mobile AR development focused on stable real-time interaction loops.",
      "Image recognition and object tracking for physical-digital alignment.",
      "3D content rendering and animation for immersive feature validation.",
      "Prototype-driven iteration to test interaction quality before productization.",
    ],
    capabilities: [
      "Recognition of printed materials and contextual digital overlays.",
      "Digital annotations anchored to real-world objects during movement.",
      "Animated 3D visualization in a handheld mobile AR experience.",
      "Accessibility-oriented AR concept work for assistive navigation support.",
    ],
    outcome: [
      "Demonstrated capability to build advanced mobile interfaces beyond standard CRUD workflows.",
      "Provided reusable technical patterns for business, product, and innovation use cases.",
      "Established a practical foundation for future AR feature exploration in mobile products.",
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
                {study.capabilities ? (
                  <CaseBlock label="Example capabilities">
                    <ul className="space-y-2">
                      {study.capabilities.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 size-1.5 rounded-full bg-navy/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CaseBlock>
                ) : null}
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

              {study.slug === "ai-multi-source-system" ? (
                <div className="mt-6 rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm shadow-slate-900/5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Interface preview
                  </div>
                  <div className="mt-4 overflow-hidden rounded-xl border border-slate-900/10 bg-slate-50 shadow-sm shadow-slate-900/5">
                    <Image
                      src="/assets/photos/sattiv_screenshots.png"
                      alt="Prototype interface screenshots for a multi-source health data and AI-assisted interpretation system"
                      width={1800}
                      height={980}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  <p className="mt-3 text-xs leading-6 text-slate-500 sm:text-sm">
                    A prototype interface for a multi-source health data system with
                    analytics and AI-assisted interpretation.
                  </p>
                </div>
              ) : null}

              {study.slug === "azure-data-pipelines" ? (
                <div className="mt-6 rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm shadow-slate-900/5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Architecture overview
                  </div>
                  <div className="mt-4 rounded-xl border border-slate-900/10 bg-slate-50 p-4 sm:p-5">
                    <div className="grid gap-3 md:grid-cols-5 md:items-center">
                      <div className="rounded-lg border border-slate-900/10 bg-white p-3 text-center shadow-sm shadow-slate-900/5 md:col-span-1">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
                          Sources
                        </div>
                        <div className="mt-2 text-xs leading-5 text-slate-700">
                          SAP
                          <br />
                          JD Edwards
                          <br />
                          SQL Server
                          <br />
                          APIs
                        </div>
                      </div>

                      <div className="hidden justify-center md:flex">
                        <span className="text-lg font-semibold text-navy">→</span>
                      </div>
                      <div className="flex justify-center md:hidden">
                        <span className="text-lg font-semibold text-navy">↓</span>
                      </div>

                      <div className="rounded-lg border border-slate-900/10 bg-white p-3 text-center shadow-sm shadow-slate-900/5 md:col-span-1">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
                          Ingestion
                        </div>
                        <div className="mt-2 text-xs leading-5 text-slate-700">
                          Batch + API pipelines
                        </div>
                      </div>

                      <div className="hidden justify-center md:flex">
                        <span className="text-lg font-semibold text-navy">→</span>
                      </div>
                      <div className="flex justify-center md:hidden">
                        <span className="text-lg font-semibold text-navy">↓</span>
                      </div>

                      <div className="rounded-lg border border-slate-900/10 bg-white p-3 text-center shadow-sm shadow-slate-900/5 md:col-span-1">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
                          Databricks
                        </div>
                        <div className="mt-2 text-xs leading-5 text-slate-700">
                          Processing + enrichment
                        </div>
                      </div>
                    </div>

                    <div className="my-3 flex justify-center">
                      <span className="text-lg font-semibold text-navy">↓</span>
                    </div>

                    <div className="rounded-lg border border-navy/20 bg-[#f4f8ff] p-3 text-center shadow-sm shadow-slate-900/5">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
                        Medallion architecture
                      </div>
                      <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-700">
                        <span className="rounded-md border border-slate-900/10 bg-white px-2.5 py-1">
                          Bronze
                        </span>
                        <span className="text-navy">→</span>
                        <span className="rounded-md border border-slate-900/10 bg-white px-2.5 py-1">
                          Silver
                        </span>
                        <span className="text-navy">→</span>
                        <span className="rounded-md border border-slate-900/10 bg-white px-2.5 py-1">
                          Gold
                        </span>
                      </div>
                    </div>

                    <div className="my-3 flex justify-center">
                      <span className="text-lg font-semibold text-navy">↓</span>
                    </div>

                    <div className="rounded-lg border border-slate-900/10 bg-white p-3 text-center shadow-sm shadow-slate-900/5">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
                        Analytics / reporting
                      </div>
                      <div className="mt-2 text-xs leading-5 text-slate-700">
                        Consistent metrics and operational reporting
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {study.slug === "azure-data-pipelines" ? (
                <div className="mt-6 rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm shadow-slate-900/5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    KPI impact
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { value: "~$250k", label: "Cost savings" },
                      { value: "4+", label: "Enterprise systems integrated" },
                      { value: "Lower", label: "Manual reporting effort" },
                      { value: "Higher", label: "Data reliability" },
                    ].map((kpi) => (
                      <div
                        key={kpi.label}
                        className="rounded-xl border border-slate-900/10 bg-slate-50 p-4"
                      >
                        <div className="text-2xl font-semibold tracking-tight text-navy">
                          {kpi.value}
                        </div>
                        <div className="mt-1 text-sm leading-6 text-slate-700">
                          {kpi.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {study.slug === "azure-data-pipelines" ? (
                <div className="mt-6 rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm shadow-slate-900/5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Before vs after
                  </div>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-slate-900/10 bg-slate-50 p-4">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-700">
                        Before
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                        {[
                          "Legacy BI system",
                          "Fragmented data sources",
                          "Manual reporting effort",
                          "High infrastructure and licensing cost",
                        ].map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-2 size-1.5 rounded-full bg-slate-500/70" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-navy/20 bg-[#f4f8ff] p-4">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">
                        After
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                        {[
                          "Modern data platform",
                          "Integrated data sources",
                          "Automated pipelines",
                          "Reduced costs (~$250k)",
                          "Reliable and scalable reporting",
                        ].map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-2 size-1.5 rounded-full bg-navy/75" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : null}

              {study.slug === "ar-mobile-prototypes" ? (
                <div className="mt-6 rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm shadow-slate-900/5">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Prototype showcase
                    </div>
                    <span className="rounded-full border border-slate-900/10 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                      Advanced mobile capability
                    </span>
                    <span className="rounded-full border border-slate-900/10 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                      R&D
                    </span>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {[
                      {
                        src: "/assets/videos/ar1.MP4",
                        title: "Image recognition with contextual overlay",
                        caption:
                          "Recognizing a business card and overlaying relevant digital information in real time.",
                      },
                      {
                        src: "/assets/videos/ar2.MP4",
                        title: "Animated 3D model interaction",
                        caption:
                          "Rendering and animating a 3D model within a mobile AR experience.",
                      },
                      {
                        src: "/assets/videos/ar3.MP4",
                        title: "Object recognition and tracking",
                        caption:
                          "Recognizing, tracking, and maintaining alignment with a physical object as it rotates and moves.",
                      },
                      {
                        src: "/assets/videos/ar4.MP4",
                        title: "Accessibility-focused AR guidance",
                        caption:
                          "Overlaying visual guidance on a pedestrian crossing as part of an accessibility-oriented startup incubation project.",
                      },
                    ].map((item) => (
                      <figure
                        key={item.title}
                        className="rounded-xl border border-slate-900/10 bg-slate-50 p-3 shadow-sm shadow-slate-900/5"
                      >
                        <video
                          src={item.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          controls={false}
                          className="aspect-[9/16] w-full rounded-lg border border-slate-900/10 bg-black object-contain shadow-sm shadow-slate-900/10"
                        />
                        <figcaption className="mt-3">
                          <div className="text-sm font-semibold text-slate-900">
                            {item.title}
                          </div>
                          <div className="mt-1 text-xs leading-6 text-slate-600 sm:text-sm">
                            {item.caption}
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

