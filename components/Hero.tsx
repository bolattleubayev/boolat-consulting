import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(18,59,122,0.22),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-40 left-[-12rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(11,31,68,0.14),transparent_60%)] blur-2xl" />
      </div>

      <Container className="py-16 sm:py-28">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur">
              <span className="size-1.5 rounded-full bg-gradient-to-r from-navy to-navy-2" />
              Digital consulting for small and medium businesses
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Digital solutions for growing businesses
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-slate-600">
              We build websites, custom software, and analytics systems that help
              companies operate better and make smarter decisions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" variant="primary">
                Book a consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Explore services
              </ButtonLink>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { title: "Fast launch", desc: "Clear scope and quick delivery." },
                { title: "Quality builds", desc: "Maintainable, secure systems." },
                { title: "Better decisions", desc: "Analytics you can trust." },
              ].map((x) => (
                <div
                  key={x.title}
                  className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-sm shadow-slate-900/5 backdrop-blur"
                >
                  <div className="text-sm font-semibold text-slate-950">
                    {x.title}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{x.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-slate-900/10 bg-gradient-to-b from-surface to-white p-6 shadow-sm shadow-slate-900/5">
              <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-900/5">
                <div className="text-xs font-semibold uppercase tracking-[0.20em] text-slate-500">
                  Delivery snapshot
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-900/10 p-4">
                    <div className="text-sm font-medium text-slate-600">
                      Lead time
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-slate-950">
                      −37%
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-900/10 p-4">
                    <div className="text-sm font-medium text-slate-600">
                      Uptime
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-slate-950">
                      99.9%
                    </div>
                  </div>
                  <div className="col-span-2 rounded-xl border border-slate-900/10 p-4">
                    <div className="text-sm font-medium text-slate-600">
                      Weekly releases
                    </div>
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-2/3 rounded-full bg-navy" />
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-slate-500">
                      <span>Baseline</span>
                      <span>Target</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-white p-5 ring-1 ring-slate-900/5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-slate-700">
                    Security posture
                  </div>
                  <div className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                    Improving
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    { label: "SAST", value: "Pass" },
                    { label: "Secrets", value: "Clean" },
                    { label: "IaC", value: "Hardened" },
                  ].map((x) => (
                    <div
                      key={x.label}
                      className="rounded-xl border border-slate-900/10 px-3 py-3 text-center"
                    >
                      <div className="text-xs font-medium text-slate-500">
                        {x.label}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-slate-950">
                        {x.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

