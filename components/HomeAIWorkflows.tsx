import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Trans } from "@/components/Trans";

const examples = [
  {
    en: "Automated report generation",
    ru: "Автоматизированная генерация отчётов",
    kk: "Есептерді автоматты түрде генерациялау",
  },
  {
    en: "Natural language querying of business data",
    ru: "Запросы к бизнес‑данным на естественном языке",
    kk: "Бизнес деректеріне табиғи тілде сұрау салу",
  },
  {
    en: "Data-driven assistants for internal teams",
    ru: "Ассистенты на основе данных для внутренних команд",
    kk: "Ішкі командаларға арналған дерекке негізделген ассистенттер",
  },
  {
    en: "Workflow automation using structured data and AI models",
    ru: "Автоматизация процессов с использованием структурированных данных и AI‑моделей",
    kk: "Құрылымды деректер мен AI модельдері арқылы процестерді автоматтандыру",
  },
] as const;

export function HomeAIWorkflows() {
  return (
    <section className="border-b border-slate-900/8 bg-white">
      <Container className="py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow={
                <Trans
                  en="Built on your data systems"
                  ru="Основано на ваших системах данных"
                  kk="Сіздің дерек жүйелеріңізге негізделген"
                />
              }
              title={
                <Trans
                  en="AI-powered workflows and agents"
                  ru="AI‑рабочие процессы и агенты"
                  kk="AI‑жұмыс процестері және агенттер"
                />
              }
              description={
                <Trans
                  en="We design AI-powered workflows that use your business data to automate tasks, generate insights, and support decision-making."
                  ru="Мы проектируем AI‑рабочие процессы, которые используют ваши бизнес‑данные для автоматизации задач, получения инсайтов и поддержки принятия решений."
                  kk="Біз бизнес деректеріңізді қолданып, тапсырмаларды автоматтандыратын, инсайттар беретін және шешім қабылдауды қолдайтын AI‑жұмыс процестерін жобалаймыз."
                />
              }
            />

            <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-7 text-slate-600 sm:text-base">
              <Trans
                en="This work extends data engineering and integration: governed pipelines, reliable connectors, and well-structured models are what make AI systems safe and useful in production."
                ru="Это продолжение инжиниринга данных и интеграции: управляемые конвейеры, надёжные интеграции и качественные модели данных делают AI‑системы безопасными и полезными в продакшене."
                kk="Бұл — дерек инжинирингі мен интеграцияның жалғасы: басқарылатын конвейерлер, сенімді интеграциялар және сапалы дерек модельдері AI жүйелерін продакшнда қауіпсіз әрі пайдалы етеді."
              />
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-900/10 bg-surface p-7 shadow-sm shadow-slate-900/5">
              <div className="text-xs font-semibold uppercase tracking-[0.20em] text-navy">
                <Trans en="Examples" ru="Примеры" kk="Мысалдар" />
              </div>
              <div className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                {examples.map((item) => (
                  <div key={item.en} className="flex gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-navy/80" />
                    <span>
                      <Trans en={item.en} ru={item.ru} kk={item.kk} />
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

