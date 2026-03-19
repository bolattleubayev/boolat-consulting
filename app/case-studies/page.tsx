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
                        src: "/assets/videos/ar3.MOV",
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

