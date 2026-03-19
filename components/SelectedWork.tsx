import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

type WorkItem = {
  title: string;
  description: string;
  href: string;
};

const featuredWork: WorkItem[] = [
  {
    title: "Azure data pipelines",
    description:
      "Scalable Azure data workflows built for reliable ingestion, transformation, and reporting across high-volume business systems.",
    href: "/case-studies#azure-data-pipelines",
  },
  {
    title: "AI multi-source system",
    description:
      "An R&D architecture combining real-time streams from multiple sources with an AI reasoning layer for structured outputs.",
    href: "/case-studies#ai-multi-source-system",
  },
];

export function SelectedWork() {
  return (
    <section className="border-b border-slate-900/8 bg-white">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Selected work"
          title="Real delivery examples from data and AI system engagements."
          description="A quick view of practical projects focused on reliability, processing quality, and decision-ready outputs."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {featuredWork.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-900/10 bg-surface p-6 shadow-sm shadow-slate-900/5"
            >
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-5 inline-flex items-center text-sm font-medium text-navy transition-colors hover:text-navy-2"
              >
                Read full case study
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <ButtonLink href="/case-studies" variant="secondary">
            View all case studies
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

