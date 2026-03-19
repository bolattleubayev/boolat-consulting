import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const segments = [
  {
    title: "Owner-led SMEs",
    description:
      "Businesses that need clear numbers for weekly decisions but do not have a full internal data team.",
  },
  {
    title: "Operations-heavy teams",
    description:
      "Teams where manual reporting, repeated spreadsheet work, and disconnected tools are slowing execution.",
  },
  {
    title: "Scaling service companies",
    description:
      "Companies growing revenue and clients faster than their internal systems can keep up.",
  },
];

export function WhoWeHelp() {
  return (
    <section className="border-b border-slate-900/8 bg-white">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Who we help"
          title="Built for growing businesses that need practical systems, not enterprise overhead."
          description="Most clients come to us when operations have outgrown spreadsheets and ad-hoc reporting."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {segments.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-base font-semibold text-slate-950">{s.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{s.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

