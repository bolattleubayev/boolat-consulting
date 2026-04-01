import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CallToAction } from "@/components/CallToAction";
import { Trans } from "@/components/Trans";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  const supportingServices = [
    {
      key: "data-integration",
      titleEn: "Data Integration",
      titleRu: "Интеграция данных",
      titleKk: "Деректерді интеграциялау",
      problemEn:
        "Business data is spread across ERP, CRM, finance tools, operational systems, and spreadsheets. Teams spend time reconciling numbers instead of using them.",
      problemRu:
        "Бизнес-данные распределены между ERP, CRM, финансовыми инструментами, операционными системами и таблицами. Команды тратят время на сверку чисел вместо того, чтобы использовать их.",
      problemKk:
        "Бизнес деректері ERP, CRM, қаржы құралдары, операциялық жүйелер және кестелер арасында шашыраңқы болады. Командалар оларды қолданудың орнына сандарды сәйкестендіруге уақыт жұмсайды.",
      outcomeEn:
        "We connect systems into a consistent data flow across cloud and on-premise environments, so reporting and operations run from the same source of truth.",
      outcomeRu:
        "Мы связываем системы в единый поток данных в облаке и в on-premise среде, чтобы отчётность и операции работали из одного источника достоверности.",
      outcomeKk:
        "Біз жүйелерді бұлтта да, on-premise ортада да бірізді дерек ағынына біріктіреміз — сондықтан есептілік пен операциялар бір ғана шынайы дерек көзінен жұмыс істейді.",
    },
    {
      key: "analytics-dashboards",
      titleEn: "Analytics and Dashboards",
      titleRu: "Аналитика и дашборды",
      titleKk: "Аналитика және дашбордтар",
      problemEn:
        "Leadership and operations teams lack clear, shared KPI visibility, which slows decisions and creates debate over what is accurate.",
      problemRu:
        "Руководству и операционным командам не хватает единой, прозрачной видимости KPI, из-за чего решения замедляются и появляются споры о том, что является точным.",
      problemKk:
        "Басшылық пен операциялық командалар үшін KPI көрінісі анық және ортақ емес. Бұл шешім қабылдауды баяулатып, не нақты екенін талқылауға әкеледі.",
      outcomeEn:
        "We build analytics layers and dashboards tied to your business definitions, giving teams fast, reliable visibility into revenue, delivery, costs, and performance.",
      outcomeRu:
        "Мы создаём аналитические слои и дашборды, привязанные к вашим бизнес-определениям, чтобы команды быстро и надёжно видели выручку, сроки, затраты и показатели эффективности.",
      outcomeKk:
        "Біз сіздің бизнес анықтамаларыңызға байланған аналитика қабаттары мен дашбордтарды жасаймыз. Командалар кіріс, жеткізу мерзімдері, шығындар және өнімділік туралы тез әрі сенімді көрініске ие болады.",
    },
    {
      key: "reporting-automation",
      titleEn: "Reporting Automation",
      titleRu: "Автоматизация отчётности",
      titleKk: "Есептілікті автоматтандыру",
      problemEn:
        "Weekly and monthly reporting depends on manual spreadsheet work, causing delays, repetitive tasks, and inconsistencies.",
      problemRu:
        "Еженедельная и ежемесячная отчётность держится на ручной работе в таблицах: возникают задержки, повторяющиеся задачи и несоответствия.",
      problemKk:
        "Апталық және айлық есептілік көбіне кестедегі қол жұмысына тәуелді болады, соның салдарынан кешігулер, қайталанатын тапсырмалар және сәйкессіздіктер туындайды.",
      outcomeEn:
        "We automate reporting pipelines and refresh schedules so teams spend less time assembling reports and more time acting on insights.",
      outcomeRu:
        "Мы автоматизируем конвейеры отчётности и расписания обновления, чтобы команды тратили меньше времени на сбор отчётов и больше — на действия по инсайтам.",
      outcomeKk:
        "Біз есептілік конвейерлерін және жаңарту кестелерін автоматтандырамыз: команда есеп жинауға аз уақыт жұмсап, инсайттарға сүйеніп әрекет етуге көбірек уақыт бөледі.",
    },
    {
      key: "custom-apps",
      titleEn: "Custom Applications (Web and Mobile, including iOS)",
      titleRu: "Пользовательские приложения (веб и мобильные, включая iOS)",
      titleKk: "Арнайы қолданбалар (Web және Mobile, iOS қоса)",
      problemEn:
        "Standard tools do not always fit operational workflows, especially for field teams or process-heavy environments.",
      problemRu:
        "Стандартные инструменты не всегда подходят операционным процессам, особенно для выездных команд или сред с большим количеством процедур.",
      problemKk:
        "Стандартты құралдар операциялық процестерге әрдайым сай келе бермейді, әсіресе даладағы командаларға немесе процестер көп ортада.",
      outcomeEn:
        "When needed, we build supporting web and mobile applications, including iOS, to improve workflow execution and adoption around your core data platform.",
      outcomeRu:
        "При необходимости мы создаём поддерживающие веб- и мобильные приложения, включая iOS, чтобы улучшить выполнение процессов и их принятие вокруг вашей основной платформы данных.",
      outcomeKk:
        "Қажет болса, біз сіздің негізгі дерек платформаның айналасында процестердің орындалуын және қабылдануын жақсарту үшін iOS қоса web және mobile қолдау қолданбаларын жасаймыз.",
    },
  ];

  return (
    <>
      <section className="border-b border-slate-900/8 bg-white">
        <Container className="py-20 sm:py-24">
          <SectionHeading
            eyebrow={
              <Trans en="Services" ru="Услуги" kk="Қызметтер" />
            }
            title={
              <Trans
                en="Data engineering and integration services for small and medium businesses."
                ru="Услуги по инжинирингу данных и интеграции для малого и среднего бизнеса."
                kk="Шағын және орта бизнес үшін дерек инжинирингі мен интеграция қызметтері."
              />
            }
            description={
              <Trans
                en="Our core service is data engineering. We design pipelines, integrate systems, and deliver analytics platforms that improve reporting quality and decision speed."
                ru="Наша ключевая услуга — инжиниринг данных. Мы проектируем конвейеры, интегрируем системы и создаём аналитические платформы, которые повышают качество отчётности и скорость решений."
                kk="Біздің негізгі қызметіміз — дерек инжинирингі. Біз конвейерлерді жобалаймыз, жүйелерді интеграциялаймыз және есептілік сапасын әрі шешім қабылдау жылдамдығын жақсартатын аналитика платформаларын жеткіземіз."
              />
            }
          />

          <div className="mt-10 grid gap-6 rounded-3xl border border-slate-900/10 bg-surface p-6 md:grid-cols-3">
            {[
              {
                labelEn: "Core technologies",
                labelRu: "Ключевые технологии",
                labelKk: "Негізгі технологиялар",
                value: "Azure and Databricks",
                valueRu: "Azure и Databricks",
                valueKk: "Azure және Databricks",
              },
              {
                labelEn: "Core environments",
                labelRu: "Среды",
                labelKk: "Негізгі орталар",
                value: "Cloud and on-premise systems",
                valueRu: "Облачные и on-premise системы",
                valueKk: "Бұлттық және on-premise жүйелер",
              },
              {
                labelEn: "Primary focus",
                labelRu: "Основной фокус",
                labelKk: "Негізгі фокус",
                value: "Data pipelines, integration, and analytics reliability",
                valueRu: "Конвейеры данных, интеграция и надёжность аналитики",
                valueKk: "Дерек конвейерлері, интеграция және аналитиканың сенімділігі",
              },
            ].map((x) => (
              <div
                key={x.labelEn}
                className="rounded-2xl bg-white p-5 shadow-sm shadow-slate-900/5 ring-1 ring-slate-900/10"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  <Trans en={x.labelEn} ru={x.labelRu} kk={x.labelKk} />
                </div>
                <div className="mt-2 text-sm font-medium leading-6 text-slate-800">
                  <Trans en={x.value} ru={x.valueRu} kk={x.valueKk} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-navy/20 bg-gradient-to-br from-navy/[0.06] via-white to-white p-7 shadow-sm shadow-slate-900/5 sm:p-8">
            <div className="inline-flex items-center rounded-full bg-navy px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              <Trans en="Core service" ru="Базовая услуга" kk="Негізгі қызмет" />
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              <Trans
                en="1. Data Engineering"
                ru="1. Инжиниринг данных"
                kk="1. Дерек инжинирингі"
              />
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 sm:text-base">
              <Trans
                en="We build data pipelines that replace manual reporting and ensure reliable, scalable data for analytics. Delivery is centered on Azure and Databricks, with architecture designed to work across cloud and on-premise environments."
                ru="Мы создаём конвейеры данных, которые заменяют ручную отчётность и обеспечивают надёжные, масштабируемые данные для аналитики. Проектирование ориентировано на Azure и Databricks, а архитектура рассчитана на работу и в облаке, и в on-premise среде."
                kk="Біз қолмен есептілікті алмастыратын және аналитика үшін сенімді әрі масштабталатын деректерді қамтамасыз ететін дерек конвейерлерін жасаймыз. Жеткізу Azure және Databricks төңірегінде, ал архитектура бұлтта да, on-premise ортада да жұмыс істеуге арналған."
              />
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-900/10 bg-white p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  <Trans en="Business problem" ru="Бизнес-проблема" kk="Бизнес мәселе" />
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  <Trans
                    en="Reporting is slow and unreliable because source data is fragmented, transformations are inconsistent, and pipeline ownership is unclear."
                    ru="Отчётность медленная и ненадёжная, потому что исходные данные разрознены, преобразования выполняются по-разному, а ответственность за конвейер не определена."
                      kk="Есептілік баяу әрі сенімсіз: бастапқы деректер бөлшектенген, түрлендірулер әртүрлі орындалады және конвейер үшін жауапкершілік айқын емес."
                  />
                </p>
              </div>
              <div className="rounded-2xl border border-slate-900/10 bg-white p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  <Trans en="Client outcome" ru="Результат для клиента" kk="Клиент үшін нәтиже" />
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  <Trans
                    en="A dependable data foundation with governed models, predictable refresh cycles, and trusted numbers for operational and leadership decisions."
                    ru="Надёжный фундамент данных с управляемыми моделями, предсказуемыми циклами обновления и проверенными цифрами для операционных решений и решений руководства."
                      kk="Басқарылатын модельдері бар сенімді дерек негізі, болжамды жаңарту циклдары және операциялық әрі басшылық шешімдерге арналған тексерілген цифрлар."
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {supportingServices.map((service, idx) => (
              <article
                key={service.key}
                className="rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                  {idx + 2}.{" "}
                  <Trans
                    en={service.titleEn}
                    ru={service.titleRu}
                    kk={service.titleKk}
                  />
                </h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      <Trans en="Business problem" ru="Бизнес-проблема" kk="Бизнес мәселе" />
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      <Trans
                        en={service.problemEn}
                        ru={service.problemRu}
                        kk={service.problemKk}
                      />
                    </p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      <Trans en="Client outcome" ru="Результат для клиента" kk="Клиент үшін нәтиже" />
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      <Trans
                        en={service.outcomeEn}
                        ru={service.outcomeRu}
                        kk={service.outcomeKk}
                      />
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-slate-900/10 bg-white p-7 shadow-sm shadow-slate-900/5 sm:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
              <Trans
                en="Extension of data engineering"
                ru="Продолжение инжиниринга данных"
                kk="Дерек инжинирингінің жалғасы"
              />
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              <Trans
                en="AI-powered workflows and agents"
                ru="AI‑рабочие процессы и агенты"
                kk="AI‑жұмыс процестері және агенттер"
              />
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
              <Trans
                en="We build AI-powered systems that work on top of your data infrastructure to automate workflows, generate insights, and support business operations."
                ru="Мы создаём AI‑системы поверх вашей инфраструктуры данных: автоматизируем процессы, получаем инсайты и поддерживаем бизнес‑операции."
                kk="Біз дерек инфрақұрылымыңыздың үстіне AI‑жүйелерін құрамыз: процестерді автоматтандырамыз, инсайттар береміз және бизнес‑операцияларды қолдаймыз."
              />
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
              <Trans
                en="AI relies on clean, integrated data. Our work starts with pipelines, governance, and reliable connectors so these systems remain accurate, traceable, and safe to operate."
                ru="AI опирается на чистые и интегрированные данные. Мы начинаем с конвейеров, управления данными и надёжных интеграций, чтобы такие системы оставались точными, прозрачными и безопасными в эксплуатации."
                kk="AI таза әрі интеграцияланған деректерге сүйенеді. Біз конвейерлерден, деректерді басқарудан және сенімді интеграциялардан бастаймыз — сондықтан мұндай жүйелер дәл, қадағаланатын әрі қауіпсіз жұмыс істейді."
              />
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                {
                  titleEn: "Data-driven assistants",
                  titleRu: "Ассистенты на основе данных",
                  titleKk: "Дерекке негізделген ассистенттер",
                  descEn:
                    "AI agents that interact with your internal data, allowing teams to query information, generate reports, and access insights through natural language.",
                  descRu:
                    "AI‑агенты, которые работают с вашими внутренними данными: команды могут задавать вопросы, формировать отчёты и получать инсайты на естественном языке.",
                  descKk:
                    "Ішкі деректеріңізбен әрекеттесетін AI агенттері: командалар табиғи тілде сұрау салып, есептерді жасап, инсайттарға қол жеткізеді.",
                },
                {
                  titleEn: "Workflow automation",
                  titleRu: "Автоматизация процессов",
                  titleKk: "Процестерді автоматтандыру",
                  descEn:
                    "Automating repetitive business processes using AI, such as generating reports, summarizing data, or triggering actions based on data events.",
                  descRu:
                    "Автоматизация повторяющихся процессов с помощью AI: генерация отчётов, сводки по данным или запуск действий по событиям в данных.",
                  descKk:
                    "AI арқылы қайталанатын бизнес процестерді автоматтандыру: есептерді жасау, деректерді қысқаша түйіндеу немесе дерек оқиғаларына қарай әрекет іске қосу.",
                },
                {
                  titleEn: "Decision support systems",
                  titleRu: "Системы поддержки решений",
                  titleKk: "Шешім қабылдауды қолдау жүйелері",
                  descEn:
                    "Combining structured data with AI models to provide recommendations and assist decision-making processes.",
                  descRu:
                    "Совмещаем структурированные данные и AI‑модели, чтобы давать рекомендации и поддерживать процессы принятия решений.",
                  descKk:
                    "Ұсынымдар беру және шешім қабылдау процестерін қолдау үшін құрылымды деректерді AI модельдерімен біріктіреміз.",
                },
                {
                  titleEn: "Integration with existing systems",
                  titleRu: "Интеграция с существующими системами",
                  titleKk: "Қолданыстағы жүйелермен интеграция",
                  descEn:
                    "Connecting AI capabilities with your current tools, databases, and APIs.",
                  descRu:
                    "Подключаем AI‑возможности к вашим текущим инструментам, базам данных и API.",
                  descKk:
                    "AI мүмкіндіктерін қолданыстағы құралдарыңызға, дерекқорларға және API‑лерге қосамыз.",
                },
              ].map((item) => (
                <article
                  key={item.titleEn}
                  className="rounded-2xl border border-slate-900/10 bg-surface p-5"
                >
                  <h3 className="text-sm font-semibold text-slate-950">
                    <Trans en={item.titleEn} ru={item.titleRu} kk={item.titleKk} />
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    <Trans en={item.descEn} ru={item.descRu} kk={item.descKk} />
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
              <Trans en="Application layer" ru="Прикладной слой" kk="Қолданба қабаты" />
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              <Trans
                en="Applications built on top of your data"
                ru="Приложения поверх ваших данных"
                kk="Деректеріңіздің үстіне құрылған қолданбалар"
              />
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              <Trans
                en="In many cases, data systems need a user-facing layer. We design and build web and mobile applications that allow teams and customers to interact with data, workflows, and business processes in a practical way."
                ru="Во многих случаях системам данных нужен пользовательский слой. Мы проектируем и создаём веб- и мобильные приложения, чтобы команды и клиенты могли практично взаимодействовать с данными, процессами и бизнес-операциями."
                kk="Көп жағдайда дерек жүйелеріне пайдаланушыға арналған қабат қажет болады. Біз командалар мен клиенттер деректермен, процестермен және бизнес‑операциялармен ыңғайлы түрде әрекеттесуі үшін web және mobile қолданбаларды жобалап, жасаймыз."
              />
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                titleEn: "Internal tools and dashboards",
                titleRu: "Внутренние инструменты и дашборды",
                titleKk: "Ішкі құралдар мен дашбордтар",
                descriptionEn:
                  "Custom web applications for internal teams, including dashboards, reporting interfaces, and operational tools connected directly to your data systems.",
                descriptionRu:
                  "Пользовательские веб-приложения для внутренних команд: дашборды, интерфейсы отчётности и операционные инструменты, напрямую подключенные к вашим системам данных.",
                descriptionKk:
                  "Ішкі командаларға арналған арнайы web-қосымшалар: дашбордтар, есептілік интерфейстері және дерек жүйелеріңізге тікелей қосылған операциялық құралдар.",
              },
              {
                titleEn: "Customer-facing applications",
                titleRu: "Клиентские приложения",
                titleKk: "Тұтынушыға арналған қолданбалар",
                descriptionEn:
                  "Web and mobile applications that expose business functionality to customers, partners, or external users.",
                descriptionRu:
                  "Веб- и мобильные приложения, которые раскрывают бизнес-функциональность клиентам, партнёрам или внешним пользователям.",
                descriptionKk:
                  "Клиенттерге, серіктестерге немесе сыртқы пайдаланушыларға бизнес функцияларын ашатын web және mobile қолданбалар.",
              },
              {
                titleEn: "Mobile applications (iOS)",
                titleRu: "Мобильные приложения (iOS)",
                titleKk: "Мобильді қолданбалар (iOS)",
                descriptionEn:
                  "Development of iOS applications, including real-time data interfaces, integrations with backend systems, and advanced interaction patterns where needed.",
                descriptionRu:
                  "Разработка iOS-приложений: интерфейсы для данных в реальном времени, интеграции с бэкенд-системами и продвинутые паттерны взаимодействия при необходимости.",
                descriptionKk:
                  "iOS қосымшаларын әзірлеу: нақты уақыт деректері үшін интерфейстер, backend жүйелерімен интеграциялар және қажет болғанда озық өзара әрекет паттерндері.",
              },
              {
                titleEn: "Advanced interaction (optional)",
                titleRu: "Расширенное взаимодействие (опционально)",
                titleKk: "Кеңейтілген өзара әрекет (міндетті емес)",
                descriptionEn:
                  "Support for more advanced interfaces such as real-time updates, sensor-based features, or augmented reality when relevant to the use case.",
                descriptionRu:
                  "Поддержка более продвинутых интерфейсов: обновления в реальном времени, функции на основе датчиков или дополненная реальность — когда это соответствует задаче.",
                descriptionKk:
                  "Қолдану жағдайына сай келсе: нақты уақыт жаңартулары, сенсорға негізделген мүмкіндіктер немесе толықтырылған шындық сияқты күрделірек интерфейстерді қолдау.",
              },
            ].map((s, idx) => (
              <article
                key={s.titleEn}
                className="rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm shadow-slate-900/5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid size-8 place-items-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10">
                    {idx + 1}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-950">
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
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}

