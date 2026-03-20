import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Trans } from "@/components/Trans";

const reasons = [
  {
    title: "Data engineering depth",
    titleRu: "Глубина инжиниринга данных",
    titleKk: "Дерек инжинирингі тереңдігі",
    desc:
      "Strong delivery capability across Azure and Databricks pipelines, transformation layers, and analytics-ready data models.",
    descRu:
      "Сильная способность внедрять решения на конвейерах Azure и Databricks, слоях преобразований и моделях данных, готовых для аналитики.",
    descKk:
      "Azure және Databricks конвейерлерінде, түрлендіру қабаттарында және аналитикаға дайын дерек модельдерінде мықты жеткізу қабілеті.",
    icon: "01",
  },
  {
    title: "Systems-first approach",
    titleRu: "Подход «системы прежде всего»",
    titleKk: "Алдымен жүйелер тәсілі",
    desc:
      "Architecture is designed around data flow, integration reliability, and long-term maintainability for growing businesses.",
    descRu:
      "Архитектура строится вокруг потока данных, надёжности интеграций и долгосрочной поддерживаемости для растущих компаний.",
    descKk:
      "Архитектура дерек ағынына, интеграция сенімділігіне және өсіп келе жатқан бизнес үшін ұзақ мерзімді қолдауға негізделген.",
    icon: "02",
  },
  {
    title: "Business-aligned execution",
    titleRu: "Исполнение, связанное с бизнесом",
    titleKk: "Бизнеске сай орындалу",
    desc:
      "Engagements are scoped around measurable operational outcomes, reporting speed, and decision quality.",
    descRu:
      "Проектирование по задачам строится вокруг измеримых операционных результатов, скорости отчётности и качества решений.",
    descKk:
      "Жобалар өлшенетін операциялық нәтижелер, есептілік жылдамдығы және шешім сапасы бойынша жоспарланады.",
    icon: "03",
  },
  {
    title: "Cloud and on-premise support",
    titleRu: "Работа в облаке и on‑premise",
    titleKk: "Бұлтта және on‑premise қолдау",
    desc:
      "Solutions are delivered across mixed environments and integrated with existing systems and constraints.",
    descRu:
      "Решения внедряются в смешанных средах и интегрируются с существующими системами и ограничениями.",
    descKk:
      "Шешімдер аралас ортада жеткізіледі және қолданыстағы жүйелермен әрі шектеулермен интеграцияланады.",
    icon: "04",
  },
  {
    title: "Full delivery coverage",
    titleRu: "Полное покрытие внедрения",
    titleKk: "Жеткізудің толық қамтылуы",
    desc:
      "From pipeline engineering to dashboards, reporting automation, and supporting web/mobile applications including iOS.",
    descRu:
      "От инжиниринга конвейеров до дашбордов, автоматизации отчётности и поддерживающих веб/мобильных приложений, включая iOS.",
    descKk:
      "Конвейер инжинирингінен бастап дашбордтарға, есептілік автоматизациясына және iOS қоса веб/мобильді қосымшаларды қолдауға дейін.",
    icon: "05",
  },
] as const;

export function HomeCredibility() {
  return (
    <section className="border-b border-slate-900/8 bg-white">
      <Container className="py-20 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow={
                <Trans
                  en="Why work with us"
                  ru="Почему выбирают нас"
                  kk="Неге бізбен жұмыс істейді"
                />
              }
              title={
                <Trans
                  en="Serious technical capability for business-critical systems."
                  ru="Серьёзная техническая экспертиза для бизнес‑критичных систем."
                  kk="Бизнес‑маңызды жүйелер үшін нақты техникалық тәжірибе."
                />
              }
              description={
                <Trans
                  en="We deliver data and analytics systems that improve reliability, reduce manual process load, and support stronger operational decisions."
                  ru="Мы внедряем системы данных и аналитики, которые повышают надёжность, снижают ручную нагрузку и помогают принимать более сильные операционные решения."
                  kk="Біз дерек және аналитика жүйелерін енгіземіз: сенімділікті арттырамыз, қол еңбегін азайтамыз және операциялық шешімдерді күшейтеміз."
                />
              }
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {reasons.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                >
                  <div className="inline-flex size-8 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10">
                    {item.icon}
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-slate-950">
                    <Trans en={item.title} ru={item.titleRu} kk={item.titleKk} />
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    <Trans en={item.desc} ru={item.descRu} kk={item.descKk} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-900/10 bg-surface p-7 shadow-sm shadow-slate-900/5">
              <div className="text-xs font-semibold uppercase tracking-[0.20em] text-navy">
                  <Trans
                    en="Delivery model"
                    ru="Модель внедрения"
                    kk="Жеткізу моделі"
                  />
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                  <Trans
                    en="Engineering-led consulting team"
                    ru="Консультации с командой инженеров"
                    kk="Инженерлік бағыттағы консалтинг командасы"
                  />
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                  <Trans
                    en="Clients work with a focused consulting team that combines data engineering, system integration, and analytics implementation. We keep communication direct and execution accountable."
                    ru="Клиенты работают с командой, которая сочетает инжиниринг данных, системную интеграцию и внедрение аналитики. Мы держим коммуникацию прямой, а выполнение — под ответственностью."
                    kk="Клиенттер дерек инжинирингі, жүйе интеграциясы және аналитика енгізуді біріктіретін бағытталған консалтинг командасымен жұмыс істейді. Біз байланысты тік ұстаймыз, ал орындалуға жауапкершілік береміз."
                  />
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-700">
                  {[
                    {
                      en: "Clear technical ownership from architecture to delivery",
                      ru: "Техническая ответственность — от архитектуры до внедрения",
                      kk: "Архитектурадан бастап жеткізуге дейін нақты техникалық жауапкершілік",
                    },
                    {
                      en: "Structured implementation with visible milestones",
                      ru: "Структурированное внедрение с понятными вехами",
                      kk: "Көрінетін кезеңдермен құрылымды енгізу",
                    },
                    {
                      en: "Documentation and handover suitable for internal teams",
                      ru: "Документация и передача знаний для внутренних команд",
                      kk: "Ішкі командалар қолдана алатын құжаттама және тапсыру",
                    },
                    {
                      en: "Long-term support aligned to business growth",
                      ru: "Долгосрочная поддержка, связанная с ростом бизнеса",
                      kk: "Бизнес өсіміне сай ұзақ мерзімді қолдау",
                    },
                  ].map((p) => (
                    <div key={p.en} className="flex gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-navy/80" />
                      <span>
                        <Trans en={p.en} ru={p.ru} kk={p.kk} />
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

