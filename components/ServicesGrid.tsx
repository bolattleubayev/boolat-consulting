import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

function Icon({
  name,
  className = "",
}: {
  name: "globe" | "devices" | "database" | "chart";
  className?: string;
}) {
  const common = "size-5";
  switch (name) {
    case "globe":
      return (
        <svg
          className={`${common} ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
            className="stroke-current"
            strokeWidth="1.8"
          />
          <path
            d="M2 12h20"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 2c3.2 2.7 5 6.2 5 10s-1.8 7.3-5 10c-3.2-2.7-5-6.2-5-10s1.8-7.3 5-10Z"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "devices":
      return (
        <svg
          className={`${common} ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 7h10a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3Z"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M3 9h2M3 15h2"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M9 21h8"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "database":
      return (
        <svg
          className={`${common} ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 3c4.4 0 8 1.6 8 3.5S16.4 10 12 10 4 8.4 4 6.5 7.6 3 12 3Z"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M20 6.5v11c0 1.9-3.6 3.5-8 3.5s-8-1.6-8-3.5v-11"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M20 12c0 1.9-3.6 3.5-8 3.5S4 13.9 4 12"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "chart":
      return (
        <svg
          className={`${common} ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 19V5"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M4 19h16"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M7 16l4-5 4 3 4-6"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

type Service = {
  title: string;
  description: string;
  icon: "globe" | "devices" | "database" | "chart";
};

const services: Service[] = [
  {
    title: "Website Development",
    description:
      "Fast, modern marketing sites and web experiences that look great and convert.",
    icon: "globe",
  },
  {
    title: "Custom Web and Mobile Apps",
    description:
      "Purpose-built apps to streamline operations, delight customers, and scale with you.",
    icon: "devices",
  },
  {
    title: "Data Engineering",
    description:
      "Reliable pipelines and clean data models that turn scattered sources into trusted data.",
    icon: "database",
  },
  {
    title: "Analytics & Dashboards",
    description:
      "Decision-ready reporting with clear KPIs, definitions, and drill-downs your team can use.",
    icon: "chart",
  },
];

export function ServicesGrid({
  title = "Services",
  description = "Focused consulting engagements that move key metrics.",
  showLink = true,
}: {
  title?: string;
  description?: string;
  showLink?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[22rem] bg-[radial-gradient(circle_at_top,rgba(18,59,122,0.12),transparent_55%)]"
      />
      <Container className="py-16 sm:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title={title}
            description={description}
          />
          {showLink ? (
            <Link
              href="/services"
              className="text-sm font-medium text-navy hover:text-navy-2 md:pb-2"
            >
              See details →
            </Link>
          ) : null}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-slate-900/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(140deg,rgba(11,31,68,0.05),transparent_35%,rgba(18,59,122,0.06))] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-surface text-navy ring-1 ring-slate-900/10 transition-colors group-hover:bg-navy group-hover:text-white">
                  <Icon name={s.icon} />
                </div>
                <span className="mt-1 inline-flex size-8 items-center justify-center rounded-full bg-white text-slate-400 ring-1 ring-slate-900/10 transition-colors group-hover:text-navy">
                  <span className="text-sm font-semibold">→</span>
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {s.description}
              </p>
              <div className="mt-5 h-px w-full bg-slate-900/10" />
              <div className="mt-4 text-sm font-medium text-navy">
                Learn more
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

