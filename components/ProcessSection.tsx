import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Trans } from "@/components/Trans";

const steps = [
  {
    titleEn: "Business audit",
    titleRu: "Бизнес‑аудит",
    titleKk: "Бизнес-аудит",
    descriptionEn:
      "Map your current reporting, data flow, and operational bottlenecks.",
    descriptionRu:
      "Определяем текущую отчётность, поток данных и операционные узкие места.",
    descriptionKk:
      "Қазіргі есептілік, дерек ағыны және операциялық кедергілерді картаға түсіреміз.",
  },
  {
    titleEn: "System design",
    titleRu: "Проектирование системы",
    titleKk: "Жүйені жобалау",
    descriptionEn:
      "Define the right data model, automation approach, and delivery plan.",
    descriptionRu:
      "Формируем подходящую модель данных, стратегию автоматизации и план внедрения.",
    descriptionKk:
      "Дұрыс дерек моделі, автоматтандыру тәсілі және енгізу жоспарын анықтаймыз.",
  },
  {
    titleEn: "Build and automate",
    titleRu: "Создаём и автоматизируем",
    titleKk: "Құру және автоматтандыру",
    descriptionEn:
      "Implement dashboards, pipelines, and tools with measurable milestones.",
    descriptionRu:
      "Внедряем дашборды, конвейеры и инструменты с измеримыми вехами.",
    descriptionKk:
      "Өлшенетін кезеңдермен дашбордтар, конвейерлер және құралдарды енгіземіз.",
  },
  {
    titleEn: "Adopt and improve",
    titleRu: "Внедряем и улучшаем",
    titleKk: "Қабылдау және жетілдіру",
    descriptionEn:
      "Train your team and iterate based on business usage and outcomes.",
    descriptionRu:
      "Обучаем команду и итеративно улучшаем решение по фактическому использованию и результатам.",
    descriptionKk:
      "Командаңызды үйретеміз және бизнестің қолданылуы мен нәтижелеріне қарай жетілдіреміз.",
  },
];

export function ProcessSection() {
  return (
    <section className="border-b border-slate-900/8 bg-surface">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow={
            <Trans
              en="How we work"
              ru="Как мы работаем"
              kk="Біз қалай жұмыс істейміз"
            />
          }
          title={
            <Trans
              en="A practical delivery model for growing businesses."
              ru="Практичная модель внедрения для растущих компаний."
              kk="Өсіп келе жатқан компанияларға арналған практикалық енгізу моделі."
            />
          }
          description={
            <Trans
              en="Every phase is focused on reducing manual work, improving reporting quality, and giving leadership clearer decision signals."
              ru="Каждый этап направлен на снижение ручной нагрузки, улучшение качества отчётности и более ясные сигналы для решений руководства."
              kk="Әр кезең қол еңбегін азайтуға, есептілік сапасын жақсартуға және басшылыққа шешім үшін анық сигналдар беруге бағытталған."
            />
          }
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <div
              key={s.titleEn}
              className="group rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-9 place-items-center rounded-full bg-navy text-white shadow-sm shadow-slate-900/10">
                  <span className="text-sm font-semibold">{idx + 1}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-950">
                  <Trans en={s.titleEn} ru={s.titleRu} kk={s.titleKk} />
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                  <Trans
                    en={s.descriptionEn}
                    ru={s.descriptionRu}
                    kk={s.descriptionKk}
                  />
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

