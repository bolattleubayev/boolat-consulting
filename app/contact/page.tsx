import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Contact"
              title="Tell us what you’re building."
              description="Share a little context and we’ll respond with clarifying questions and a suggested next step."
            />

            <div className="mt-10 space-y-6 text-sm text-slate-600">
              <div className="rounded-3xl border border-slate-900/10 bg-surface p-6">
                <div className="text-sm font-semibold text-slate-950">
                  Typical next steps
                </div>
                <ol className="mt-4 space-y-3">
                  {[
                    "15–30 minute intro call",
                    "Scope + timeline proposal",
                    "Kickoff and delivery plan",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-navy/70" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ol>
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
            <div className="rounded-3xl border border-slate-900/10 bg-white p-8">
              <div className="text-sm font-semibold text-slate-950">
                Project inquiry
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Send a short note. We’ll reply with clarifying questions and a
                suggested next step.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

