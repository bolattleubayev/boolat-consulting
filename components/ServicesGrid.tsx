import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Trans } from "@/components/Trans";
import type { ReactNode } from "react";

function Icon({
  name,
  className = "",
}: {
  name: "globe" | "devices" | "database" | "chart" | "mobile";
  className?: string;
}) {
  const common = "size-5";
  switch (name) {
    case "globe":
      return (
        <svg
          className={`${common} ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
            className="stroke-current"
            strokeWidth="1.8"
          />
          <path
            d="M2 12h20"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 2c3.2 2.7 5 6.2 5 10s-1.8 7.3-5 10c-3.2-2.7-5-6.2-5-10s1.8-7.3 5-10Z"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "devices":
      return (
        <svg
          className={`${common} ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 7h10a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3Z"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M3 9h2M3 15h2"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M9 21h8"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "database":
      return (
        <svg
          className={`${common} ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 3c4.4 0 8 1.6 8 3.5S16.4 10 12 10 4 8.4 4 6.5 7.6 3 12 3Z"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M20 6.5v11c0 1.9-3.6 3.5-8 3.5s-8-1.6-8-3.5v-11"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M20 12c0 1.9-3.6 3.5-8 3.5S4 13.9 4 12"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "chart":
      return (
        <svg
          className={`${common} ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 19V5"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M4 19h16"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M7 16l4-5 4 3 4-6"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      );
    case "mobile":
      return (
        <svg
          className={`${common} ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="7"
            y="2.5"
            width="10"
            height="19"
            rx="2.5"
            className="stroke-current"
            strokeWidth="1.8"
          />
          <path
            d="M11 5.8h2"
            className="stroke-current"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="12" cy="18.5" r="1" className="fill-current" />
        </svg>
      );
  }
}

type Service = {
  titleEn: string;
  titleRu: string;
  titleKk: string;
  descriptionEn: string;
  descriptionRu: string;
  descriptionKk: string;
  valueEn: string;
  valueRu: string;
  valueKk: string;
  icon: "globe" | "devices" | "database" | "chart" | "mobile";
};

const services: Service[] = [
  {
    titleEn: "Data Engineering",
    titleRu: "Инжиниринг данных",
    titleKk: "Дерек инжинирингі",
    descriptionEn:
      "Design and implement Azure and Databricks data pipelines, transformation jobs, and governed data models for dependable reporting.",
    descriptionRu:
      "Проектируем и внедряем конвейеры данных Azure и Databricks, задачи преобразований и управляемые модели данных для надёжной отчётности.",
    descriptionKk:
      "Сенімді есептілік үшін Azure және Databricks дерек конвейерлерін, түрлендіру процестерін және басқарылатын дерек модельдерін жобалап, енгіземіз.",
    valueEn: "Value: Reliable, decision-ready data with fewer failures and rework.",
    valueRu: "Ценность: Надёжные данные для решений с меньшим числом сбоев и переделок.",
    valueKk: "Құндылық: Істен шығу мен қайта өңдеу аз, шешімге дайын сенімді дерек.",
    icon: "database",
  },
  {
    titleEn: "Data Integration",
    titleRu: "Интеграция данных",
    titleKk: "Деректерді интеграциялау",
    descriptionEn:
      "Connect ERP, CRM, finance, operations, and line-of-business systems into a unified data flow across cloud and on-premise environments.",
    descriptionRu:
      "Соединяем ERP, CRM, финансы, операции и прикладные системы в единый поток данных в облаке и on-premise среде.",
    descriptionKk:
      "ERP, CRM, қаржы, операция және бизнес-жүйелерді бұлтта да, on-premise ортада да бірыңғай дерек ағынына біріктіреміз.",
    valueEn:
      "Value: Eliminate silos and create one consistent view of business performance.",
    valueRu: "Ценность: Убираем разрозненность и создаём единый взгляд на эффективность бизнеса.",
    valueKk: "Құндылық: Дерек оқшаулығын жойып, бизнес тиімділігінің бірізді көрінісін құрамыз.",
    icon: "devices",
  },
  {
    titleEn: "Analytics Dashboards",
    titleRu: "Аналитические дашборды",
    titleKk: "Аналитикалық дашбордтар",
    descriptionEn:
      "Build analytics dashboards and KPI layers that give leadership and operations teams visibility into revenue, delivery, costs, and risks.",
    descriptionRu:
      "Создаём аналитические дашборды и KPI‑слои, чтобы руководство и операционные команды видели выручку, сроки, затраты и риски.",
    descriptionKk:
      "Басшылық пен операциялық командалар түсім, мерзім, шығын және тәуекелді көре алуы үшін аналитикалық дашбордтар мен KPI қабаттарын құрамыз.",
    valueEn: "Value: Faster decisions with clear operational signals.",
    valueRu: "Ценность: Быстрее решения благодаря понятным операционным сигналам.",
    valueKk: "Құндылық: Операциялық сигналдар айқын болғандықтан, шешімдер жылдам қабылданады.",
    icon: "chart",
  },
  {
    titleEn: "Reporting Automation",
    titleRu: "Автоматизация отчётности",
    titleKk: "Есепті автоматтандыру",
    descriptionEn:
      "Automate recurring reporting and scheduled data workflows to reduce manual spreadsheet work and improve consistency.",
    descriptionRu:
      "Автоматизируем регулярную отчётность и расписания обработки данных, чтобы сократить ручную работу в таблицах и повысить согласованность.",
    descriptionKk:
      "Қайталанатын есептілік пен жоспарлы дерек процестерін автоматтандырып, кестедегі қол еңбегін азайтамыз және бірізділікті арттырамыз.",
    valueEn: "Value: Lower reporting overhead and higher confidence in numbers.",
    valueRu: "Ценность: Меньше нагрузки на отчётность и выше доверие к цифрам.",
    valueKk: "Құндылық: Есептілікке кететін жүктеме азайып, сандарға сенім артады.",
    icon: "globe",
  },
  {
    titleEn: "Custom Web and Mobile Applications",
    titleRu: "Пользовательские веб и мобильные приложения",
    titleKk: "Тапсырысқа сай веб және мобильді қосымшалар",
    descriptionEn:
      "Develop supporting web and mobile applications, including iOS, when operations require workflow-specific tools beyond dashboards.",
    descriptionRu:
      "Разрабатываем поддерживающие веб‑ и мобильные приложения, включая iOS, когда операции требуют инструментов под конкретные процессы — помимо дашбордов.",
    descriptionKk:
      "Операцияға дашбордтан бөлек нақты процесс құралдары қажет болса, соның ішінде iOS үшін де веб және мобильді қолданбалар әзірлейміз.",
    valueEn: "Value: Better system adoption and execution for front-line teams.",
    valueRu: "Ценность: Лучше внедряемость и выполнение процессов для фронт‑линейных команд.",
    valueKk: "Құндылық: Алдыңғы шептегі командалар үшін жүйені қолдану мен орындау сапасы жақсарады.",
    icon: "mobile",
  },
];

export function ServicesGrid({
  title = (
    <Trans en="What we do" ru="Что мы делаем" kk="Біз не істейміз" />
  ),
  description = (
    <Trans
      en="We build systems that reduce manual work, improve visibility, and support better business decisions."
      ru="Мы создаём системы, которые уменьшают ручную работу, улучшают прозрачность и помогают принимать лучшие бизнес‑решения."
      kk="Қолмен істелетін жұмысты азайтып, көрінуді арттыратын және жақсы бизнес шешімдерін қолдайтын жүйелер құрамыз."
    />
  ),
  showLink = true,
}: {
  title?: ReactNode;
  description?: ReactNode;
  showLink?: boolean;
}) {
  return (
    <section className="border-b border-slate-900/8 bg-white">
      <Container className="py-20 sm:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={<Trans en="What we do" ru="Что мы делаем" kk="Біз не істейміз" />}
            title={title}
            description={description}
          />
          {showLink ? (
            <Link
              href="/services"
              className="text-sm font-medium text-navy hover:text-navy-2 md:pb-2"
            >
              <Trans en="See details →" ru="Подробнее →" kk="Толығырақ →" />
            </Link>
          ) : null}
        </div>

        <div className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.titleEn}
              className="group relative flex h-full flex-col rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-surface text-navy ring-1 ring-slate-900/10 transition-colors group-hover:bg-navy group-hover:text-white">
                  <Icon name={s.icon} />
                </div>
                <span className="mt-1 inline-flex size-8 items-center justify-center rounded-full bg-white text-slate-400 ring-1 ring-slate-900/10 transition-colors group-hover:text-navy">
                  <span className="text-sm font-semibold">→</span>
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
                <Trans en={s.titleEn} ru={s.titleRu} kk={s.titleKk} />
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                <Trans en={s.descriptionEn} ru={s.descriptionRu} kk={s.descriptionKk} />
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-700">
                <Trans en={s.valueEn} ru={s.valueRu} kk={s.valueKk} />
              </p>
              <div className="mt-auto pt-5">
                <div className="h-px w-full bg-slate-900/10" />
                <div className="mt-4 text-sm font-medium text-navy">
                  <Trans en="Learn more" ru="Узнать больше" kk="Көбірек білу" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

