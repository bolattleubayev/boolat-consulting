import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Trans } from "@/components/Trans";

type WorkItem = {
  titleEn: string;
  titleRu: string;
  titleKk: string;
  descriptionEn: string;
  descriptionRu: string;
  descriptionKk: string;
  href: string;
};

const featuredWork: WorkItem[] = [
  {
    titleEn: "Azure data pipelines",
    titleRu: "Конвейеры данных Azure",
    titleKk: "Azure дерек конвейерлері",
    descriptionEn:
      "Scalable Azure data workflows built for reliable ingestion, transformation, and reporting across high-volume business systems.",
    descriptionRu:
      "Масштабируемые Azure‑процессы для надёжной загрузки, преобразований и отчётности в системах с высокой нагрузкой.",
    descriptionKk:
      "Жоғары жүктемелі бизнес жүйелерінде сенімді жүктеу, түрлендіру және есеп беру үшін құрылған, масштабталатын Azure дерек ағындары.",
    href: "/case-studies#azure-data-pipelines",
  },
  {
    titleEn: "AI multi-source system",
    titleRu: "AI‑система из нескольких источников",
    titleKk: "Көп дереккөзді AI жүйе",
    descriptionEn:
      "An advanced R&D system combining multi-source health-related data, structured processing, and an AI reasoning layer for decision-support workflows.",
    descriptionRu:
      "Продвинутая R&D‑система, объединяющая медицинские данные из разных источников, структурированную обработку и слой AI‑рассуждений для сценариев поддержки решений.",
    descriptionKk:
      "Шешім қабылдауды қолдау сценарийлері үшін көп дереккөзді денсаулыққа қатысты деректерді, құрылымды өңдеуді және AI‑пайымдау қабатын біріктіретін жетілдірілген R&D жүйесі.",
    href: "/case-studies#ai-multi-source-system",
  },
  {
    titleEn: "AR mobile prototypes",
    titleRu: "Мобильные прототипы AR",
    titleKk: "Мобильді AR прототиптері",
    descriptionEn:
      "AR prototypes demonstrating image recognition, tracking, 3D interaction, and accessibility-oriented concepts for mobile experiences.",
    descriptionRu:
      "Прототипы AR: распознавание изображений, отслеживание, 3D‑взаимодействие и идеи, ориентированные на доступность в мобильных сценариях.",
    descriptionKk:
      "Мобильді тәжірибеде суретті тану, трекинг, 3D‑өзара әрекет және қолжетімділікке бағытталған идеяларды көрсететін AR прототиптері.",
    href: "/case-studies#ar-mobile-prototypes",
  },
];

export function SelectedWork() {
  return (
    <section className="border-b border-slate-900/8 bg-white">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow={
            <Trans en="Selected work" ru="Выбранные работы" kk="Таңдалған жұмыстар" />
          }
          title={
            <Trans
              en="Real delivery examples from data and AI system engagements."
              ru="Реальные примеры внедрения в проектах по данным и AI."
              kk="Деректер мен AI жүйелері жобаларынан нақты нәтижелердің мысалдары."
            />
          }
          description={
            <Trans
              en="A quick view of practical projects focused on reliability, processing quality, and decision-ready outputs."
              ru="Короткий обзор практичных проектов, где фокус — надёжность, качество обработки и результаты, готовые для решений."
              kk="Сенімділік, өңдеу сапасы және шешімге дайын нәтижелерге бағытталған практикалық жобаларға қысқаша шолу."
            />
          }
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredWork.map((item) => (
            <article
              key={item.href}
              className="rounded-2xl border border-slate-900/10 bg-surface p-6 shadow-sm shadow-slate-900/5"
            >
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                <Trans en={item.titleEn} ru={item.titleRu} kk={item.titleKk} />
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                <Trans
                  en={item.descriptionEn}
                  ru={item.descriptionRu}
                  kk={item.descriptionKk}
                />
              </p>
              <Link
                href={item.href}
                className="mt-5 inline-flex items-center text-sm font-medium text-navy transition-colors hover:text-navy-2"
              >
                <Trans
                  en="Read full case study"
                  ru="Открыть полный кейс"
                  kk="Толық кейсті ашу"
                />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <ButtonLink href="/case-studies" variant="secondary">
          <Trans
            en="View all case studies"
            ru="Смотреть все кейсы"
            kk="Барлық кейстерді қарау"
          />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

