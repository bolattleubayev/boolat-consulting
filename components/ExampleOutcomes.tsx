import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { Trans } from "@/components/Trans";

const outcomes = [
  {
    metric: "-40%",
    titleEn: "Reporting turnaround",
    titleRu: "Скорость отчётности",
    titleKk: "Есепті дайындау жылдамдығы",
    detailEn:
      "Reduced time spent preparing weekly reporting through automation and cleaner data flow.",
    detailRu:
      "Сокращение времени на подготовку еженедельной отчётности за счёт автоматизации и более чистого потока данных.",
    detailKk:
      "Автоматизация және дерек ағынын тазарту арқылы апталық есеп дайындауға кететін уақыт азаяды.",
  },
  {
    metric: "99%+",
    titleEn: "Data consistency",
    titleRu: "Согласованность данных",
    titleKk: "Дерек сәйкестігі",
    detailEn:
      "Improved trust in core numbers by standardizing definitions and pipeline checks.",
    detailRu:
      "Повышение доверия к ключевым цифрам за счёт стандартизации определений и проверок конвейеров.",
    detailKk:
      "Анықтамаларды стандарттап, конвейер тексерістерін енгізу арқылы негізгі цифрларға сенім артады.",
  },
  {
    metric: "2-3x",
    titleEn: "Decision speed",
    titleRu: "Скорость решений",
    titleKk: "Шешім қабылдау жылдамдығы",
    detailEn:
      "Faster leadership decisions with KPI dashboards and clearer operational visibility.",
    detailRu:
      "Более быстрые решения руководства благодаря дашбордам KPI и более ясной видимости по операциям.",
    detailKk:
      "KPI дашбордтары және операциялар бойынша айқын көрініс басшылықтың шешімдерін жылдамдатуға көмектеседі.",
  },
];

export function ExampleOutcomes() {
  return (
    <section className="border-b border-slate-900/8 bg-slate-50">
      <Container className="py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow={
                <Trans
                  en="Example outcomes"
                  ru="Примеры результатов"
                  kk="Мысал нәтижелер"
                />
              }
              title={
                <Trans
                  en="What clients usually improve in the first phase."
                  ru="Что клиенты обычно улучшают в первой фазе."
                  kk="Бірінші кезеңде клиенттер әдетте нені жақсартады."
                />
              }
              description={
                <Trans
                  en="Targets depend on your baseline, but these are common early outcomes when data and reporting systems are cleaned up."
                  ru="Цели зависят от вашей исходной ситуации, но это типичные ранние результаты, когда данные и система отчётности приводятся в порядок."
                  kk="Мақсат сіздің бастапқы жағдайыңызға байланысты, бірақ дерек пен есептілік жүйелері ретке келтірілгенде жиі кездесетін алғашқы нәтижелер осылар."
                />
              }
            />
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <ButtonLink href="/contact" variant="secondary">
              <Trans
                en="Discuss your baseline"
                ru="Обсудить исходную ситуацию"
                kk="Бастапқы жағдайыңызды талқылау"
              />
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {outcomes.map((o) => (
            <article
              key={o.titleEn}
              className="rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5"
            >
              <div className="text-3xl font-semibold tracking-tight text-navy">
                {o.metric}
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-950">
                <Trans en={o.titleEn} ru={o.titleRu} kk={o.titleKk} />
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                <Trans en={o.detailEn} ru={o.detailRu} kk={o.detailKk} />
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

