import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export function CallToAction() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-slate-900/10 bg-navy shadow-[0_20px_55px_rgba(11,31,68,0.22)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-[-10rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_65%)] blur-2xl"
          />
          <div className="grid gap-10 p-8 sm:p-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to strengthen your data and systems foundation?
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-white/80">
                Share your current data, reporting, and integration challenges.
                We will define a practical first phase with clear technical and
                business outcomes.
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
                <ButtonLink href="/contact" variant="secondary">
                  Book a consultation
                </ButtonLink>
                <ButtonLink
                  href="/case-studies"
                  variant="secondary"
                  className="!bg-white !text-navy border-white/20 hover:!bg-slate-100 hover:!text-navy"
                >
                  View case studies
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="h-px bg-white/10" />
          <div className="grid gap-6 p-8 text-sm text-white/80 sm:grid-cols-3 sm:p-12">
            <div>
              <div className="font-semibold text-white">Outcome-first</div>
              <div className="mt-1">Business outcomes tied to technical execution.</div>
            </div>
            <div>
              <div className="font-semibold text-white">Engineering rigor</div>
              <div className="mt-1">Reliable pipelines, integration, and reporting workflows.</div>
            </div>
            <div>
              <div className="font-semibold text-white">Operational fit</div>
              <div className="mt-1">Designed for SME teams, cloud or on-premise.</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

