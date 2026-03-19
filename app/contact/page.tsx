import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="border-b border-slate-900/8 bg-white">
      <Container className="py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Contact"
              title="Tell us where operations or reporting are slowing you down."
              description="Share your current setup and biggest bottleneck. We will come back with a practical next step."
            />

            <div className="mt-10 space-y-6 text-sm text-slate-600">
              <div className="rounded-3xl border border-slate-900/10 bg-surface p-6 shadow-sm shadow-slate-900/5">
                <div className="text-sm font-semibold text-slate-950">
                  Typical next steps
                </div>
                <ol className="mt-4 space-y-3">
                  {[
                    "20-minute discovery call",
                    "Short recommendation with scope options",
                    "Implementation plan and kickoff",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-navy/70" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-3xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5">
                <div className="text-sm font-semibold text-slate-950">
                  Best fit for
                </div>
                <ul className="mt-3 space-y-2">
                  {[
                    "Teams spending too much time on manual reporting",
                    "Businesses with disconnected spreadsheets and tools",
                    "Leaders who need clear, reliable operational visibility",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-navy/70" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                Prefer email?{" "}
                <Link
                  className="font-medium text-navy hover:text-navy-2"
                  href="mailto:hello@boolat.example"
                >
                  hello@boolat.example
                </Link>
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-900/10 bg-white p-8 shadow-sm shadow-slate-900/5">
              <div className="text-sm font-semibold text-slate-950">
                Project inquiry
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Keep it short: current tools, what is not working, and what you
                want to improve first.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

