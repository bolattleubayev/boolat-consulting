import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export function CallToAction() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-slate-900/10 bg-gradient-to-br from-navy via-navy to-navy-2 shadow-[0_28px_80px_rgba(11,31,68,0.30)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-[-10rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_60%)] blur-2xl"
          />
          <div className="grid gap-10 p-8 sm:p-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to modernize your platform?
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-white/80">
                Tell us what you’re building. We’ll respond with a short set of
                clarifying questions and a practical next step.
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
                <ButtonLink href="/contact" variant="secondary">
                  Contact us
                </ButtonLink>
                <ButtonLink
                  href="/dashboards"
                  variant="primary"
                  className="bg-white text-navy hover:bg-slate-50"
                >
                  View demo dashboards
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="h-px bg-white/10" />
          <div className="grid gap-6 p-8 text-sm text-white/80 sm:grid-cols-3 sm:p-12">
            <div>
              <div className="font-semibold text-white">Clear scope</div>
              <div className="mt-1">Define goals, constraints, and measures.</div>
            </div>
            <div>
              <div className="font-semibold text-white">Senior execution</div>
              <div className="mt-1">Ship with quality, tests, and docs.</div>
            </div>
            <div>
              <div className="font-semibold text-white">Lasting enablement</div>
              <div className="mt-1">Handoff your team can maintain.</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

