import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { Trans } from "@/components/Trans";

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
              <Trans
                en="Data engineering and systems consulting for SMEs"
                ru="Консалтинг по инжинирингу данных и системам для SMB"
                kk="SMB үшін деректер инжинирингі мен жүйелер бойынша консалтинг"
              />
            </div>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              <Trans
                en="Data systems that power better business decisions"
                ru="Системы данных, которые помогают принимать лучшие бизнес‑решения"
                kk="Дәл бизнес шешімдер қабылдауға көмектесетін деректер жүйелері"
              />
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600">
              <Trans
                en="We design and build data pipelines, integrate business systems, and develop analytics platforms for small and medium businesses across cloud and on-premise environments."
                ru="Мы проектируем и создаём конвейеры данных, интегрируем бизнес‑системы и разрабатываем аналитические платформы для малого и среднего бизнеса в облаке и on-premise среде."
                kk="Біз деректер конвейерлерін жобалап, құрып, бизнес‑жүйелерді біріктіріп, шағын және орта бизнес үшін бұлтта да, on‑premise ортада да аналитикалық платформалар жасаймыз."
              />
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" variant="primary">
                <Trans
                  en="Book a consultation"
                  ru="Записаться на консультацию"
                  kk="Консультацияға жазылу"
                />
              </ButtonLink>
              <ButtonLink href="/case-studies" variant="secondary">
                <Trans
                  en="View case studies"
                  ru="Смотреть кейсы"
                  kk="Кейстерді қарау"
                />
              </ButtonLink>
            </div>

            <div className="mt-5 inline-flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <span className="rounded-full bg-slate-100 px-2.5 py-1 ring-1 ring-slate-900/10">
                Azure + Databricks
              </span>
              <span>•</span>
              <span>
                <Trans
                  en="System integration"
                  ru="Интеграция систем"
                  kk="Жүйелерді интеграциялау"
                />
              </span>
              <span>•</span>
              <span>
                <Trans
                  en="Cloud and on-premise delivery"
                  ru="Поставка в облаке и on-premise"
                  kk="Бұлтта және on‑premise ортада жеткізу"
                />
              </span>
            </div>
          </div>

          <div className="md:col-span-5 lg:col-span-5">
            <div className="rounded-3xl border border-slate-900/10 bg-surface p-6 shadow-sm shadow-slate-900/5">
              <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-900/5">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-[0.20em] text-slate-500">
                    <Trans
                      en="Operations snapshot"
                      ru="Снимок операций"
                      kk="Операциялар срезі"
                    />
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                    <Trans
                      en="Case study data"
                      ru="Данные из кейсов"
                      kk="Кейс деректері"
                    />
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-900/10 p-4">
                    <div className="text-sm font-medium text-slate-600">
                      <Trans
                        en="Cost savings"
                        ru="Экономия"
                        kk="Шығынды үнемдеу"
                      />
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-slate-950">~$250k</div>
                    <div className="mt-1 text-xs text-emerald-700">
                      <Trans
                        en="Infra + licensing"
                        ru="Инфраструктура + лицензии"
                        kk="Инфрақұрылым + лицензиялар"
                      />
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-900/10 p-4">
                    <div className="text-sm font-medium text-slate-600">
                      <Trans
                        en="Integrated sources"
                        ru="Интегрированные источники"
                        kk="Біріктірілген дереккөздер"
                      />
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-slate-950">4+</div>
                    <div className="mt-1 text-xs text-emerald-700">
                      ERP, SQL, APIs
                    </div>
                  </div>
                  <div className="col-span-2 rounded-xl border border-slate-900/10 p-4">
                    <div className="text-sm font-medium text-slate-600">
                      <Trans
                        en="Reporting reliability"
                        ru="Надёжность отчётности"
                        kk="Есептілік сенімділігі"
                      />
                    </div>
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[92%] rounded-full bg-navy" />
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-slate-500">
                      <span>
                        <Trans
                          en="Manual effort reduced"
                          ru="Меньше ручной работы"
                          kk="Қол еңбегі азайды"
                        />
                      </span>
                      <span>
                        <Trans
                          en="Scalable platform"
                          ru="Масштабируемая платформа"
                          kk="Масштабталатын платформа"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 px-1 text-xs leading-5 text-slate-500">
                <Trans
                  en="Snapshot based on legacy BI modernization outcomes from the Azure data engineering case study."
                  ru="Снимок основан на результатах модернизации legacy BI в кейсе по инжинирингу данных Azure."
                  kk="Azure деректер инжинирингі кейсіндегі legacy BI модернизациясының нәтижелеріне негізделген срез."
                />
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

