import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import Image from "next/image";
import { Trans } from "@/components/Trans";

export const metadata = {
  title: "Case Studies",
};

type CaseStudy = {
  slug: string;
  title: string;
  titleRu: string;
  titleKk: string;
  summary: string;
  summaryRu: string;
  summaryKk: string;
  problem: string;
  problemRu: string;
  problemKk: string;
  solution: string;
  solutionRu: string;
  solutionKk: string;
  approach: string[];
  approachRu: string[];
  approachKk: string[];
  capabilities?: string[];
  capabilitiesRu?: string[];
  capabilitiesKk?: string[];
  outcome: string[];
  outcomeRu: string[];
  outcomeKk: string[];
};

const caseStudies: CaseStudy[] = [
  {
    slug: "azure-data-pipelines",
    title: "Replacing a legacy BI system and building a modern data platform",
    titleRu:
      "Замена устаревшей BI-системы и построение современной платформы данных",
    titleKk:
      "Ескі BI жүйесін ауыстырып, заманауи дерек платформасын құру",
    summary:
      "A data platform modernization engagement focused on replacing legacy BI, integrating fragmented enterprise data, and improving reporting reliability at scale.",
    summaryRu:
      "Проект модернизации платформы данных: заменить legacy BI, объединить разрозненные данные предприятия и повысить надёжность отчётности в масштабе.",
    summaryKk:
      "Дерек платформасын модернизациялау жобасы: legacy BI жүйесін ауыстыру, кәсіпорынның бөлшектенген деректерін біріктіру және есептіліктің сенімділігін ауқымда арттыруға бағытталды.",
    problem:
      "A legacy business intelligence solution was expensive to maintain, inflexible, and required significant manual effort to prepare data for reporting. Data was fragmented across multiple enterprise systems, including ERP platforms, databases, and external APIs, making it difficult to produce reliable and consistent insights.",
    problemRu:
      "Legacy BI‑решение было дорого в сопровождении, негибкое и требовало значительной ручной работы для подготовки данных к отчётности. Данные были разрознены по нескольким корпоративным системам, включая ERP, базы данных и внешние API, из-за чего сложно получать надёжные и согласованные инсайты.",
    problemKk:
      "Legacy BI шешімін сүйемелдеу қымбат болды, икемсіз еді және есептілікке арналған деректерді дайындау үшін көп қол еңбегін қажет етті. Деректер ERP платформалары, дерекқорлар және сыртқы API қоса алғанда бірнеше корпоративтік жүйеде шашыраңқы болғандықтан, сенімді әрі келісімді инсайттарды шығару қиынға соқты.",
    solution:
      "We designed and implemented a modern data platform that replaced the legacy BI system and unified data across the organization.",
    solutionRu:
      "Мы спроектировали и внедрили современную платформу данных, которая заменила legacy BI и объединила данные по всей организации.",
    solutionKk:
      "Біз ұйым бойынша деректерді біріздендіріп, legacy BI жүйесін ауыстырған заманауи дерек платформасын жобалап, іске асырдық.",
    approach: [
      "Decommissioned a legacy BI solution and replaced it with a modern data architecture.",
      "Integrated data from multiple enterprise systems, including SAP, JD Edwards, SQL Server databases, and external APIs.",
      "Built scalable data pipelines for ingestion, transformation, and storage.",
      "Implemented data enrichment and transformation using Databricks.",
      "Applied medallion architecture (bronze, silver, gold layers).",
      "Implemented Slowly Changing Dimensions (SCD) for historical tracking.",
      "Established data quality checks and validation processes.",
    ],
    approachRu: [
      "Деактивировали legacy BI‑решение и заменили его современной архитектурой данных.",
      "Интегрировали данные из нескольких корпоративных систем: SAP, JD Edwards, базы данных SQL Server и внешние API.",
      "Построили масштабируемые конвейеры данных для загрузки, преобразований и хранения.",
      "Внедрили обогащение данных и преобразования с использованием Databricks.",
      "Применили медальонную архитектуру (слои bronze, silver, gold).",
      "Внедрили Slowly Changing Dimensions (SCD) для исторического отслеживания.",
      "Организовали проверки качества данных и процессы валидации.",
    ],
    approachKk: [
      "Legacy BI шешімін тоқтатып, оны заманауи дерек архитектурасымен алмастырдық.",
      "SAP, JD Edwards, SQL Server дерекқорлары және сыртқы API қоса алғанда бірнеше корпоративтік жүйеден деректерді біріктірдік.",
      "Жүктеу, түрлендіру және сақтауға арналған масштабталатын дерек конвейерлерін тұрғыздық.",
      "Databricks арқылы деректерді байыту және түрлендіруді енгіздік.",
      "Медальонды архитектураны қолдандық (bronze, silver, gold қабаттары).",
      "Тарихты бақылау үшін Slowly Changing Dimensions (SCD) енгіздік.",
      "Дерек сапасын тексеру және валидациялау процестерін ұйымдастырдық.",
    ],
    outcome: [
      "Reduced infrastructure and licensing costs by approximately $250,000.",
      "Replaced a rigid legacy reporting system with a scalable data platform.",
      "Reduced manual data preparation effort.",
      "Improved consistency and reliability of reporting.",
      "Enabled a foundation for future analytics and decision-making.",
    ],
    outcomeRu: [
      "Снизили затраты на инфраструктуру и лицензии примерно на $250 000.",
      "Заменили жёсткую legacy‑отчётность масштабируемой платформой данных.",
      "Уменьшили ручную подготовку данных.",
      "Повысили согласованность и надёжность отчётности.",
      "Заложили основу для будущей аналитики и принятия решений.",
    ],
    outcomeKk: [
      "Инфрақұрылым мен лицензия шығындарын шамамен $250 000-ға азайттық.",
      "Икемсіз ескі есептілікті масштабталатын дерек платформасына ауыстырдық.",
      "Деректерді қолмен дайындау бойынша уақыт пен еңбекті қысқарттық.",
      "Есептіліктің келісімділігі мен сенімділігін арттырдық.",
      "Болашақ аналитика мен шешім қабылдауға негіз қалап бердік.",
    ],
  },
  {
    slug: "ai-multi-source-system",
    title: "AI-powered multi-source data system (R&D)",
    titleRu:
      "AI‑система из нескольких источников данных (R&D)",
    titleKk: "Көп дереккөзді AI негізіндегі дерек жүйесі (R&D)",
    summary:
      "An advanced R&D system combining health-related real-time inputs, structured processing, and an AI reasoning layer for decision-support workflows.",
    summaryRu:
      "Продвинутый R&D‑проект: сочетает медицинские входные данные в реальном времени, структурированную обработку и слой AI‑рассуждений для сценариев поддержки решений.",
    summaryKk:
      "Нақты уақыттағы денсаулыққа қатысты дерек кірістерін құрылымды өңдеумен және шешім қабылдауды қолдайтын сценарийлерге арналған AI‑пайымдау қабатын біріктіретін жетілдірілген R&D жүйесі.",
    problem:
      "Multiple health-related data streams arrived with inconsistent formats, timing, and signal quality, making reliable interpretation difficult for product and research teams.",
    problemRu:
      "Разные медицинские потоки приходили с несогласованными форматами, временными характеристиками и качеством сигналов, из-за чего надёжная интерпретация усложнялась для продуктовых и исследовательских команд.",
    problemKk:
      "Денсаулыққа қатысты бірнеше дерек ағыны әртүрлі форматтармен, уақыт параметрлерімен және сигнал сапасымен келді. Сондықтан өнім мен зерттеу командалары үшін деректі сенімді түрде түсіндіру қиын болды.",
    solution:
      "A multi-source processing system that normalized incoming events and routed them to an AI reasoning layer for structured, interpretable outputs in a prototype interface.",
    solutionRu:
      "Система обработки из нескольких источников: нормализует входящие события и направляет их в слой AI‑рассуждений для структурированных, интерпретируемых результатов в прототипном интерфейсе.",
    solutionKk:
      "Көп дереккөзді өңдеу жүйесі кіріс оқиғаларды нормализациялап, оларды AI‑пайымдау қабатына бағыттайды. Нәтижесінде прототип интерфейсінде құрылымды әрі түсінуге болатын нәтижелер беріледі.",
    approach: [
      "Defined a unified event model to align multiple real-time health-related inputs into a single processing flow.",
      "Implemented normalization, temporal alignment, and quality filtering before inference.",
      "Added an AI reasoning layer to evaluate patterns and return structured decision-support signals.",
      "Built a prototype interface to present analytics and AI-assisted interpretation in a clear operator workflow.",
    ],
    approachRu: [
      "Определили единый модель событий, чтобы свести несколько потоков данных в реальном времени в единый процесс обработки.",
      "Внедрили нормализацию, временное выравнивание и фильтрацию качества до inference.",
      "Добавили слой AI‑рассуждений: оценивает паттерны и возвращает структурированные сигналы поддержки решений.",
      "Собрали прототип интерфейса, чтобы показывать аналитику и AI‑пояснения в понятном операторском сценарии.",
    ],
    approachKk: [
      "Біріктірілген оқиға моделін анықтап, бірнеше нақты уақыттағы денсаулыққа қатысты кірістерді бір өңдеу ағысына келтірдік.",
      "Inference алдында нормализация, уақыттық сәйкестендіру және сапаны сүзу енгізілді.",
      "Үлгілерді бағалап, шешім қабылдауды қолдайтын құрылымды сигналдарды қайтару үшін AI‑пайымдау қабаты қосылды.",
      "Аналитика мен AI‑түсіндірмелерді операторға түсінікті сценарийде көрсету үшін прототип интерфейсі жасалды.",
    ],
    outcome: [
      "Clearer interpretation workflows from otherwise fragmented, asynchronous data streams.",
      "A reusable architecture for multi-source real-time ingestion, processing, and analysis.",
      "A credible R&D foundation for further validation and controlled product exploration.",
    ],
    outcomeRu: [
      "Более понятные сценарии интерпретации данных, которые иначе оставались бы фрагментированными и асинхронными.",
      "Переиспользуемая архитектура для многоканальной загрузки в реальном времени, обработки и анализа.",
      "Надёжная база для дальнейшей валидации и контролируемого продуктового исследования.",
    ],
    outcomeKk: [
      "Бұрын әртүрлі фрагменттелген, асинхронды дерек ағындарынан түсіндіру сценарийлері анық әрі түсінікті болды.",
      "Көп дереккөзді нақты уақыттағы жүктеу, өңдеу және талдауға арналған қайта қолданылатын архитектура алынды.",
      "Келесі валидация мен бақыланатын өнімдік зерттеуге арналған сенімді R&D негізі қалыптасты.",
    ],
  },
  {
    slug: "ar-mobile-prototypes",
    title: "Augmented reality prototypes for interactive mobile experiences",
    titleRu:
      "Прототипы дополненной реальности для интерактивных мобильных сценариев",
    titleKk:
      "Интерактивті мобильді тәжірибелерге арналған кеңейтілген шындық (AR) прототиптері",
    summary:
      "A prototype program demonstrating advanced iOS/mobile AR interaction patterns, including recognition, tracking, 3D content, and context-aware overlays.",
    summaryRu:
      "Прототипная программа с продвинутыми паттернами взаимодействия для iOS/мобильной AR: распознавание, трекинг, 3D‑контент и контекстные оверлеи.",
    summaryKk:
      "iOS/мобильді AR үшін жетілдірілген өзара әрекет паттерндерін көрсететін прототиптік бағдарлама: тану, трекинг, 3D‑контент және контекстке бейім оверлейлер.",
    problem:
      "Many mobile use cases need richer interaction than conventional interfaces can provide, especially when digital information must respond to physical objects, space, or movement.",
    problemRu:
      "Во многих мобильных сценариях нужна более богатая интерактивность, чем может дать обычный интерфейс, особенно когда цифровая информация должна реагировать на физические объекты, пространство или движение.",
    problemKk:
      "Көптеген мобильді сценарийлерге кәдімгі интерфейс бере алмайтын күрделірек өзара әрекет керек. Әсіресе цифрлық ақпарат физикалық объектілерге, кеңістікке немесе қозғалысқа жауап беруі тиіс болғанда.",
    solution:
      "We developed a set of AR prototypes showing image recognition, object tracking, interactive overlays, 3D visualization, and accessibility-oriented concepts in a controlled innovation context.",
    solutionRu:
      "Мы разработали набор AR‑прототипов: распознавание изображений, трекинг объектов, интерактивные оверлеи, 3D‑визуализация и идеи, ориентированные на доступность, в контролируемом инновационном контексте.",
    solutionKk:
      "Біз AR‑прототиптер жиынын әзірледік: суретті тану, объект трекингі, интерактивті оверлейлер, 3D‑визуализация және қолжетімділікке бағытталған концепттер. Барлығы бақыланатын инновациялық ортада жасалды.",
    approach: [
      "Mobile AR development focused on stable real-time interaction loops.",
      "Image recognition and object tracking for physical-digital alignment.",
      "3D content rendering and animation for immersive feature validation.",
      "Prototype-driven iteration to test interaction quality before productization.",
    ],
    approachRu: [
      "Разработка мобильной AR была сосредоточена на стабильных циклах взаимодействия в реальном времени.",
      "Распознавание изображений и трекинг объектов для точного физико‑цифрового соответствия.",
      "Рендер и анимация 3D‑контента для проверки иммерсивных функций.",
      "Итерации на основе прототипов: оценивали качество взаимодействия до превращения в продукт.",
    ],
    approachKk: [
      "Мобильді AR әзірлеу тұрақты нақты уақыттағы өзара әрекет циклдарына бағытталды.",
      "Физикалық‑цифрлық сәйкестендіру үшін суретті тану және объект трекингі жасалды.",
      "Иммерсивті функцияларды тексеру үшін 3D‑контентті рендерлеу және анимация қолданылды.",
      "Өнімге айналдырмас бұрын өзара әрекет сапасын сынау үшін прототипке негізделген итерациялар жасалды.",
    ],
    capabilities: [
      "Recognition of printed materials and contextual digital overlays.",
      "Digital annotations anchored to real-world objects during movement.",
      "Animated 3D visualization in a handheld mobile AR experience.",
      "Accessibility-oriented AR concept work for assistive navigation support.",
    ],
    capabilitiesRu: [
      "Распознавание печатных материалов и контекстные цифровые оверлеи.",
      "Цифровые аннотации, привязанные к реальным объектам во время движения.",
      "Анимированная 3D‑визуализация в мобильном AR‑опыте на устройстве в руках.",
      "Концепт‑работы AR для доступности: поддержка навигации для ассистивных сценариев.",
    ],
    capabilitiesKk: [
      "Баспа материалдарын тану және контекстке бейім цифрлық оверлейлер.",
      "Қозғалыс кезінде цифрлық аннотацияларды нақты әлем объектілеріне бекіту.",
      "Қолдағы мобильді AR тәжірибесінде анимацияланған 3D‑визуализация.",
      "Көмекші навигация сценарийлеріне арналған қолжетімділікке бағытталған AR концепттері.",
    ],
    outcome: [
      "Demonstrated capability to build advanced mobile interfaces beyond standard CRUD workflows.",
      "Provided reusable technical patterns for business, product, and innovation use cases.",
      "Established a practical foundation for future AR feature exploration in mobile products.",
    ],
    outcomeRu: [
      "Показали возможность создавать продвинутые мобильные интерфейсы, выходящие за рамки стандартных CRUD‑процессов.",
      "Дали переиспользуемые технические паттерны для бизнес‑, продуктовых и инновационных сценариев.",
      "Сформировали практичную основу для дальнейшего исследования AR‑функций в мобильных продуктах.",
    ],
    outcomeKk: [
      "Стандартты CRUD сценарийлерінен тыс жетілдірілген мобильді интерфейстер құру мүмкіндігін көрсетті.",
      "Бизнес, өнім және инновация сценарийлеріне арналған қайта қолданылатын техникалық паттерндер ұсынылды.",
      "Мобильді өнімдерде AR‑функцияларды әрі қарай зерттеуге арналған практикалық негіз қалыптастырылды.",
    ],
  },
];

function CaseBlock({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm shadow-slate-900/5">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </div>
      <div className="mt-3 text-sm leading-7 text-slate-700">{children}</div>
    </div>
  );
}

export default function CaseStudiesPage() {
  return (
    <section className="border-b border-slate-900/8 bg-white">
      <Container className="py-20 sm:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={
              <Trans en="Case studies" ru="Кейсы" kk="Кейстер" />
            }
            title={
              <Trans
                en="Real systems built for complex data and operational needs."
                ru="Реальные системы для сложных данных и операционных задач."
                kk="Күрделі дерек пен операциялық қажеттіліктерге арналған нақты жүйелер."
              />
            }
            description={
              <Trans
                en="Selected examples of architecture and delivery work. Details are generalized to protect confidentiality while preserving technical and business relevance."
                ru="Подборка примеров архитектуры и внедрения. Детали обобщены, чтобы защитить конфиденциальность, сохраняя техническую и бизнес‑ценность."
                kk="Архитектура мен жеткізу жұмыстарынан іріктелген мысалдар. Құпиялылықты сақтау үшін детальдар жалпыланды, бірақ техникалық және бизнес маңыздылығы сақталды."
              />
            }
          />
          <ButtonLink href="/contact" variant="secondary">
            <Trans
              en="Discuss a similar project"
              ru="Обсудить похожий проект"
              kk="Ұқсас жобаны талқылайық"
            />
          </ButtonLink>
        </div>

        <div className="mt-12 space-y-8">
          {caseStudies.map((study, idx) => (
            <article
              key={study.slug}
              id={study.slug}
              className="rounded-3xl border border-slate-900/10 bg-surface p-6 shadow-sm shadow-slate-900/5 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                      <Trans en="Case study" ru="Кейс" kk="Кейс" />{" "}
                      {idx + 1}
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    <Trans
                      en={study.title}
                      ru={study.titleRu}
                      kk={study.titleKk}
                    />
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                    <Trans
                      en={study.summary}
                      ru={study.summaryRu}
                      kk={study.summaryKk}
                    />
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <CaseBlock
                  label={<Trans en="Problem" ru="Проблема" kk="Мәселе" />}
                >
                  <Trans
                    en={study.problem}
                    ru={study.problemRu}
                    kk={study.problemKk}
                  />
                </CaseBlock>
                <CaseBlock
                  label={<Trans en="Solution" ru="Решение" kk="Шешім" />}
                >
                  <Trans
                    en={study.solution}
                    ru={study.solutionRu}
                    kk={study.solutionKk}
                  />
                </CaseBlock>
                <CaseBlock
                  label={<Trans en="Approach" ru="Подход" kk="Тәсіл" />}
                >
                  <ul className="space-y-2">
                    {study.approach.map((item, i) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 size-1.5 rounded-full bg-navy/70" />
                        <span>
                          <Trans
                            en={item}
                            ru={study.approachRu?.[i] ?? item}
                            kk={study.approachKk?.[i] ?? item}
                          />
                        </span>
                      </li>
                    ))}
                  </ul>
                </CaseBlock>
                {study.capabilities ? (
                  <CaseBlock
                    label={
                      <Trans
                        en="Example capabilities"
                        ru="Примеры возможностей"
                        kk="Мүмкіндіктердің мысалдары"
                      />
                    }
                  >
                    <ul className="space-y-2">
                      {study.capabilities.map((item, i) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 size-1.5 rounded-full bg-navy/70" />
                          <span>
                            <Trans
                              en={item}
                              ru={study.capabilitiesRu?.[i] ?? item}
                              kk={study.capabilitiesKk?.[i] ?? item}
                            />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CaseBlock>
                ) : null}
                <CaseBlock
                  label={<Trans en="Outcome" ru="Результат" kk="Нәтиже" />}
                >
                  <ul className="space-y-2">
                    {study.outcome.map((item, i) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 size-1.5 rounded-full bg-navy/70" />
                        <span>
                          <Trans
                            en={item}
                            ru={study.outcomeRu?.[i] ?? item}
                            kk={study.outcomeKk?.[i] ?? item}
                          />
                        </span>
                      </li>
                    ))}
                  </ul>
                </CaseBlock>
              </div>

              {study.slug === "ai-multi-source-system" ? (
                <div className="mt-6 rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm shadow-slate-900/5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    <Trans
                      en="Interface preview"
                      ru="Превью интерфейса"
                      kk="Интерфейсті алдын ала көру"
                    />
                  </div>
                  <div className="mt-4 overflow-hidden rounded-xl border border-slate-900/10 bg-slate-50 shadow-sm shadow-slate-900/5">
                    <Image
                      src="/assets/photos/sattiv_screenshots.png"
                      alt="Prototype interface screenshots for a multi-source health data and AI-assisted interpretation system"
                      width={1800}
                      height={980}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  <p className="mt-3 text-xs leading-6 text-slate-500 sm:text-sm">
                    <Trans
                      en="A prototype interface for a multi-source health data system with analytics and AI-assisted interpretation."
                      ru="Прототип интерфейса для системы медицинских данных из нескольких источников: аналитика и AI‑поддержка интерпретации."
                      kk="Аналитика мен AI‑қолдаулы интерпретациясы бар көп дереккөзді медициналық дерек жүйесіне арналған прототип интерфейсі."
                    />
                  </p>
                </div>
              ) : null}

              {study.slug === "azure-data-pipelines" ? (
                <div className="mt-6 rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm shadow-slate-900/5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    <Trans
                      en="Architecture overview"
                      ru="Обзор архитектуры"
                      kk="Архитектураға шолу"
                    />
                  </div>
                  <div className="mt-4 rounded-xl border border-slate-900/10 bg-slate-50 p-4 sm:p-5">
                    <div className="grid gap-3 md:grid-cols-5 md:items-center">
                      <div className="rounded-lg border border-slate-900/10 bg-white p-3 text-center shadow-sm shadow-slate-900/5 md:col-span-1">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
                          <Trans en="Sources" ru="Источники" kk="Дерек көздері" />
                        </div>
                        <div className="mt-2 text-xs leading-5 text-slate-700">
                          SAP
                          <br />
                          JD Edwards
                          <br />
                          SQL Server
                          <br />
                          APIs
                        </div>
                      </div>

                      <div className="hidden justify-center md:flex">
                        <span className="text-lg font-semibold text-navy">→</span>
                      </div>
                      <div className="flex justify-center md:hidden">
                        <span className="text-lg font-semibold text-navy">↓</span>
                      </div>

                      <div className="rounded-lg border border-slate-900/10 bg-white p-3 text-center shadow-sm shadow-slate-900/5 md:col-span-1">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
                          <Trans en="Ingestion" ru="Загрузка" kk="Жүктеу" />
                        </div>
                        <div className="mt-2 text-xs leading-5 text-slate-700">
                          <Trans
                            en="Batch + API pipelines"
                            ru="Пакетные + API‑конвейеры"
                            kk="Пакеттік + API конвейерлері"
                          />
                        </div>
                      </div>

                      <div className="hidden justify-center md:flex">
                        <span className="text-lg font-semibold text-navy">→</span>
                      </div>
                      <div className="flex justify-center md:hidden">
                        <span className="text-lg font-semibold text-navy">↓</span>
                      </div>

                      <div className="rounded-lg border border-slate-900/10 bg-white p-3 text-center shadow-sm shadow-slate-900/5 md:col-span-1">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
                          Databricks
                        </div>
                        <div className="mt-2 text-xs leading-5 text-slate-700">
                          <Trans
                            en="Processing + enrichment"
                            ru="Обработка + обогащение"
                            kk="Өңдеу + байыту"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="my-3 flex justify-center">
                      <span className="text-lg font-semibold text-navy">↓</span>
                    </div>

                    <div className="rounded-lg border border-navy/20 bg-[#f4f8ff] p-3 text-center shadow-sm shadow-slate-900/5">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
                        <Trans
                          en="Medallion architecture"
                          ru="Медальонная архитектура"
                          kk="Медальон архитектурасы"
                        />
                      </div>
                      <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-700">
                        <span className="rounded-md border border-slate-900/10 bg-white px-2.5 py-1">
                          <Trans en="Bronze" ru="Bronze" kk="Қола" />
                        </span>
                        <span className="text-navy">→</span>
                        <span className="rounded-md border border-slate-900/10 bg-white px-2.5 py-1">
                          <Trans en="Silver" ru="Silver" kk="Күміс" />
                        </span>
                        <span className="text-navy">→</span>
                        <span className="rounded-md border border-slate-900/10 bg-white px-2.5 py-1">
                          <Trans en="Gold" ru="Gold" kk="Алтын" />
                        </span>
                      </div>
                    </div>

                    <div className="my-3 flex justify-center">
                      <span className="text-lg font-semibold text-navy">↓</span>
                    </div>

                    <div className="rounded-lg border border-slate-900/10 bg-white p-3 text-center shadow-sm shadow-slate-900/5">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
                          <Trans
                            en="Analytics / reporting"
                            ru="Аналитика / отчётность"
                            kk="Аналитика / есептілік"
                          />
                      </div>
                      <div className="mt-2 text-xs leading-5 text-slate-700">
                          <Trans
                            en="Consistent metrics and operational reporting"
                            ru="Согласованные метрики и операционная отчётность"
                            kk="Дәйекті метрикалар және операциялық есептілік"
                          />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {study.slug === "azure-data-pipelines" ? (
                <div className="mt-6 rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm shadow-slate-900/5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    <Trans en="KPI impact" ru="Влияние на KPI" kk="KPI-ге әсері" />
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      {
                        value: "~$250k",
                        label: "Cost savings",
                        labelKk: "Шығын үнемдеу",
                      },
                      {
                        value: "4+",
                        label: "Enterprise systems integrated",
                        labelKk: "Кәсіпорын жүйелері біріктірілді",
                      },
                      {
                        value: "Lower",
                        label: "Manual reporting effort",
                        labelKk: "Қолмен есеп дайындау азайды",
                      },
                      {
                        value: "Higher",
                        label: "Data reliability",
                        labelKk: "Дерек сенімділігі артты",
                      },
                    ].map((kpi) => (
                      <div
                        key={kpi.label}
                        className="rounded-xl border border-slate-900/10 bg-slate-50 p-4"
                      >
                        <div className="text-2xl font-semibold tracking-tight text-navy">
                          {kpi.value}
                        </div>
                        <div className="mt-1 text-sm leading-6 text-slate-700">
                          <Trans
                            en={kpi.label}
                            ru={
                              kpi.label === "Cost savings"
                                ? "Экономия средств"
                                : kpi.label ===
                                      "Enterprise systems integrated"
                                  ? "Интегрировано ERP‑систем"
                                  : kpi.label === "Manual reporting effort"
                                    ? "Меньше ручной отчётности"
                                    : "Больше надёжности данных"
                            }
                            kk={kpi.labelKk}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {study.slug === "azure-data-pipelines" ? (
                <div className="mt-6 rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm shadow-slate-900/5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    <Trans
                      en="Before vs after"
                      ru="До и после"
                      kk="Бұрын және кейін"
                    />
                  </div>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-slate-900/10 bg-slate-50 p-4">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-700">
                        <Trans en="Before" ru="До" kk="Бұрын" />
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                        {[
                          {
                            en: "Legacy BI system",
                            ru: "Устаревшая BI‑система",
                            kk: "Ескі BI жүйесі",
                          },
                          {
                            en: "Fragmented data sources",
                            ru: "Разрозненные источники данных",
                            kk: "Бөлшектенген дерек көздері",
                          },
                          {
                            en: "Manual reporting effort",
                            ru: "Много ручной работы в отчётности",
                            kk: "Есептілікте көп қол еңбегі",
                          },
                          {
                            en: "High infrastructure and licensing cost",
                            ru: "Высокие затраты на инфраструктуру и лицензии",
                            kk: "Инфрақұрылым мен лицензия шығындары жоғары",
                          },
                        ].map((item) => (
                          <li key={item.en} className="flex gap-2">
                            <span className="mt-2 size-1.5 rounded-full bg-slate-500/70" />
                            <span>
                              <Trans en={item.en} ru={item.ru} kk={item.kk} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-navy/20 bg-[#f4f8ff] p-4">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">
                        <Trans en="After" ru="После" kk="Кейін" />
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                        {[
                          {
                            en: "Modern data platform",
                            ru: "Современная платформа данных",
                            kk: "Заманауи дерек платформасы",
                          },
                          {
                            en: "Integrated data sources",
                            ru: "Интегрированные источники данных",
                            kk: "Интеграцияланған дерек көздері",
                          },
                          {
                            en: "Automated pipelines",
                            ru: "Автоматизированные конвейеры",
                            kk: "Автоматтандырылған конвейерлер",
                          },
                          {
                            en: "Reduced costs (~$250k)",
                            ru: "Снижение затрат (~$250k)",
                            kk: "Шығын азайды (~$250k)",
                          },
                          {
                            en: "Reliable and scalable reporting",
                            ru: "Надёжная и масштабируемая отчётность",
                            kk: "Сенімді және масштабталатын есептілік",
                          },
                        ].map((item) => (
                          <li key={item.en} className="flex gap-2">
                            <span className="mt-2 size-1.5 rounded-full bg-navy/75" />
                            <span>
                              <Trans en={item.en} ru={item.ru} kk={item.kk} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : null}

              {study.slug === "ar-mobile-prototypes" ? (
                <div className="mt-6 rounded-2xl border border-slate-900/10 bg-white p-5 shadow-sm shadow-slate-900/5">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      <Trans
                        en="Prototype showcase"
                        ru="Демо‑презентация прототипов"
                        kk="Прототиптер демо‑көрмесі"
                      />
                    </div>
                    <span className="rounded-full border border-slate-900/10 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                      <Trans
                        en="Advanced mobile capability"
                        ru="Продвинутая мобильная функциональность"
                        kk="Жетілдірілген мобильді функционалдық"
                      />
                    </span>
                    <span className="rounded-full border border-slate-900/10 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                      <Trans en="R&D" ru="R&D" kk="R&D" />
                    </span>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {[
                      {
                        src: "/assets/videos/ar1.MP4",
                        titleEn: "Image recognition with contextual overlay",
                        titleRu: "Распознавание изображения с контекстным оверлеем",
                        titleKk: "Контексті ескеретін оверлеймен суретті тану",
                        captionEn:
                          "Recognizing a business card and overlaying relevant digital information in real time.",
                        captionRu:
                          "Распознаём визитку и накладываем релевантную цифровую информацию в реальном времени.",
                        captionKk:
                          "Визит картасын танып, сәйкес цифрлық ақпаратты нақты уақытта оверлей ретінде көрсетеміз.",
                      },
                      {
                        src: "/assets/videos/ar2.MP4",
                        titleEn: "Animated 3D model interaction",
                        titleRu: "Взаимодействие с анимированной 3D‑моделью",
                        titleKk: "Анимацияланған 3D модельмен өзара әрекет",
                        captionEn:
                          "Rendering and animating a 3D model within a mobile AR experience.",
                        captionRu:
                          "Рендерим и анимируем 3D‑модель в мобильном AR‑опыте.",
                        captionKk:
                          "Мобильді AR тәжірибесінде 3D модельді рендерлеп, анимациялаймыз.",
                      },
                      {
                        src: "/assets/videos/ar3.MP4",
                        titleEn: "Object recognition and tracking",
                        titleRu: "Распознавание объектов и трекинг",
                        titleKk: "Объектілерді тану және трекинг",
                        captionEn:
                          "Recognizing, tracking, and maintaining alignment with a physical object as it rotates and moves.",
                        captionRu:
                          "Распознаём, отслеживаем и сохраняем выравнивание с физическим объектом по мере вращения и движения.",
                        captionKk:
                          "Физикалық объект айналып, қозғалған сайын оны танимыз, қадағалаймыз және сәйкес қалпын сақтаймыз.",
                      },
                      {
                        src: "/assets/videos/ar4.MP4",
                        titleEn: "Accessibility-focused AR guidance",
                        titleRu: "AR‑подсказки, ориентированные на доступность",
                        titleKk: "Қолжетімділікке бағытталған AR бағыттау",
                        captionEn:
                          "Overlaying visual guidance on a pedestrian crossing as part of an accessibility-oriented startup incubation project.",
                        captionRu:
                          "Накладываем визуальные подсказки на пешеходном переходе в рамках инкубационного проекта, ориентированного на доступность.",
                        captionKk:
                          "Қолжетімділікке бағытталған стартап инкубациясы жобасының бөлігі ретінде жаяу өткелде визуалды бағыттауды оверлей ретінде көрсетеміз.",
                      },
                    ].map((item) => (
                      <figure
                        key={item.titleEn}
                        className="rounded-xl border border-slate-900/10 bg-slate-50 p-3 shadow-sm shadow-slate-900/5"
                      >
                        <video
                          src={item.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          controls={false}
                          className="aspect-[9/16] w-full rounded-lg border border-slate-900/10 bg-black object-contain shadow-sm shadow-slate-900/10"
                        />
                        <figcaption className="mt-3">
                          <div className="text-sm font-semibold text-slate-900">
                            <Trans
                              en={item.titleEn}
                              ru={item.titleRu}
                              kk={item.titleKk}
                            />
                          </div>
                          <div className="mt-1 text-xs leading-6 text-slate-600 sm:text-sm">
                            <Trans
                              en={item.captionEn}
                              ru={item.captionRu}
                              kk={item.captionKk}
                            />
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

