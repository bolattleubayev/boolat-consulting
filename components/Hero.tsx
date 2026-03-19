import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-900/8 bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-44 right-[-12rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(18,59,122,0.12),transparent_65%)] blur-3xl" />
      </div>

      <Container className="py-20 sm:py-28">
        <div className="grid items-center gap-10 md:grid-cols-12 lg:gap-14">
          <div className="md:col-span-7 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur">
              <span className="size-1.5 rounded-full bg-gradient-to-r from-navy to-navy-2" />
              Data engineering and systems consulting for SMEs
            </div>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Data systems that power better business decisions
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600">
              We design and build data pipelines, integrate business systems, and
              develop analytics platforms for small and medium businesses across
              cloud and on-premise environments.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" variant="primary">
                Book a consultation
              </ButtonLink>
              <ButtonLink href="/case-studies" variant="secondary">
                View case studies
              </ButtonLink>
            </div>

            <div className="mt-5 inline-flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <span className="rounded-full bg-slate-100 px-2.5 py-1 ring-1 ring-slate-900/10">
                Azure + Databricks
              </span>
              <span>•</span>
              <span>System integration</span>
              <span>•</span>
              <span>Cloud and on-premise delivery</span>
            </div>
          </div>

          <div className="md:col-span-5 lg:col-span-5">
            <div className="rounded-3xl border border-slate-900/10 bg-surface p-6 shadow-sm shadow-slate-900/5">
              <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-900/5">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-[0.20em] text-slate-500">
                    Operations snapshot
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                    Live demo
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-900/10 p-4">
                    <div className="text-sm font-medium text-slate-600">Revenue</div>
                    <div className="mt-2 text-2xl font-semibold text-slate-950">$248k</div>
                    <div className="mt-1 text-xs text-emerald-700">+12.4% MoM</div>
                  </div>
                  <div className="rounded-xl border border-slate-900/10 p-4">
                    <div className="text-sm font-medium text-slate-600">Orders</div>
                    <div className="mt-2 text-2xl font-semibold text-slate-950">1,685</div>
                    <div className="mt-1 text-xs text-emerald-700">+6.2% MoM</div>
                  </div>
                  <div className="col-span-2 rounded-xl border border-slate-900/10 p-4">
                    <div className="text-sm font-medium text-slate-600">Pipeline health</div>
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-4/5 rounded-full bg-navy" />
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-slate-500">
                      <span>Stable</span>
                      <span>99.2% success</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 px-1 text-xs leading-5 text-slate-500">
                Built for leadership visibility: finance, operations, and delivery metrics
                in one place.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

