import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CallToAction } from "@/components/CallToAction";
import { Trans } from "@/components/Trans";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-slate-900/8 bg-white">
        <Container className="py-20 sm:py-24">
          <SectionHeading
            eyebrow={<Trans en="About" ru="О нас" kk="Біз туралы" />}
            title={
              <Trans
                en="Founder-led consulting for businesses that need systems they can actually use."
                ru="Консалтинг от основателя для компаний, которым нужны системы, которые реально можно использовать."
                kk="Іс жүзінде қолданылатын жүйелер қажет бизнеске арналған негізін қалаушы басқаратын консалтинг."
              />
            }
            description={
              <Trans
                en="boolat is built by data engineers and product-minded builders. We help small and medium businesses improve operations through practical data and digital systems."
                ru="boolat создан инженерами данных и продуктово‑ориентированными разработчиками. Мы помогаем малому и среднему бизнесу улучшать операции с помощью практичных систем данных и цифровых решений."
                kk="boolat компаниясын дерек инженерлері мен өнімге бағытталған мамандар құрды. Біз шағын және орта бизнеске деректер мен цифрлық жүйелер арқылы операцияларды жақсартуға көмектесеміз."
              />
            }
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-900/10 bg-white p-8 shadow-sm shadow-slate-900/5">
                <h3 className="text-base font-semibold text-slate-950">
                  <Trans en="Founder introduction" ru="Введение от основателя" kk="Негізін қалаушыдан кіріспе" />
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  <Trans
                    en="I work directly with businesses to design systems that are practical, usable, and built for real operations."
                    ru="Я работаю напрямую с бизнесом, чтобы проектировать системы, которые практичны, удобны и созданы для реальных операций."
                    kk="Мен бизнеспен тікелей жұмыс істеп, нақты операцияларға бейімделген, қолдануға ыңғайлы және практикалық жүйелерді жобалаймын."
                  />
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  <Trans
                    en="Our background spans Azure data engineering, analytics, AI/ML work, startup development, and practical business systems. That mix helps us solve both technical and operational problems without overcomplicating delivery."
                    ru="Наш опыт включает Azure-инжиниринг данных, аналитику, AI/ML, работу в стартапах и практичные бизнес‑системы. Это помогает решать и технические, и операционные задачи, не усложняя внедрение."
                    kk="Біздің тәжірибеміз Azure дерек инжинирингі, аналитика, AI/ML, стартап әзірлеу және практикалық бизнес жүйелерін қамтиды. Осындай үйлесім енгізуді күрделендірмей, техникалық та, операциялық та мәселелерді шешуге көмектеседі."
                  />
                </p>

                <h3 className="mt-8 text-base font-semibold text-slate-950">
                  <Trans
                    en="How we solve business problems"
                    ru="Как мы решаем бизнес‑задачи"
                    kk="Бизнес мәселелерін қалай шешеміз"
                  />
                </h3>
                <div className="mt-5 grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      title: "Start with operations",
                      ruTitle: "Начинаем с операций",
                      kkTitle: "Операциядан бастаймыз",
                      desc: "We map how your team currently works, where time is lost, and where decisions get blocked.",
                      ruDesc:
                        "Мы фиксируем, как сейчас работает команда, где теряется время и где решения упираются в «блокеры».",
                      kkDesc:
                        "Команданың қазір қалай жұмыс істейтінін, уақыт қай жерде кететінін және шешім қай тұста бөгелетінін картаға түсіреміз.",
                    },
                    {
                      title: "Build what gets used",
                      ruTitle: "Строим то, чем пользуются",
                      kkTitle: "Қолданылатынды құрамыз",
                      desc: "Dashboards, pipelines, and tools are shaped around real workflows, not slideware requirements.",
                      ruDesc:
                        "Дашборды, конвейеры и инструменты формируются вокруг реальных процессов, а не «требований для слайдов».",
                      kkDesc:
                        "Дашбордтар, конвейерлер және құралдар слайд үшін емес, нақты жұмыс процестеріне сай жасалады.",
                    },
                    {
                      title: "Keep systems practical",
                      ruTitle: "Держим системы практичными",
                      kkTitle: "Жүйені практикалық ұстаймыз",
                      desc: "We avoid unnecessary complexity so your team can maintain and evolve what we deliver.",
                      ruDesc:
                        "Мы избегаем лишней сложности, чтобы команда могла поддерживать и развивать то, что внедряем.",
                      kkDesc:
                        "Артық күрделіліктен қашамыз, сондықтан команда енгізілген жүйені қолдап, дамыта алады.",
                    },
                    {
                      title: "Measure outcomes",
                      ruTitle: "Измеряем результаты",
                      kkTitle: "Нәтижені өлшейміз",
                      desc: "Success is tracked through reporting speed, data trust, and decision quality.",
                      ruDesc:
                        "Успех измеряется скоростью отчётности, доверием к данным и качеством решений.",
                      kkDesc:
                        "Табыс есеп беру жылдамдығы, дерекке сенім және шешім сапасы арқылы өлшенеді.",
                    },
                  ].map((x) => (
                    <div key={x.title} className="rounded-2xl bg-surface p-5 ring-1 ring-slate-900/8">
                      <div className="text-sm font-semibold text-slate-950">
                        <Trans en={x.title} ru={x.ruTitle} kk={x.kkTitle} />
                      </div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">
                        <Trans en={x.desc} ru={x.ruDesc} kk={x.kkDesc} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-900/10 bg-surface p-8 shadow-sm shadow-slate-900/5">
                <h3 className="text-base font-semibold text-slate-950">
                  <Trans
                    en="Why this consultancy exists"
                    ru="Почему существует эта консалтинговая практика"
                    kk="Неге бұл консалтинг бар"
                  />
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  <Trans
                    en="Many SMEs sit on useful data but still run key decisions on fragmented spreadsheets and disconnected tools. We started this consultancy to close that gap with practical systems that improve day-to-day execution."
                    ru="Многие SMB располагают полезными данными, но ключевые решения всё равно принимают на разрозненных таблицах и несвязанных инструментах. Мы начали этот консалтинг, чтобы закрыть этот разрыв практичными системами, которые улучшают ежедневное выполнение задач."
                    kk="Көптеген ШОБ-та пайдалы деректер бар, бірақ негізгі шешімдер әлі де бытыраңқы кестелер мен байланыспаған құралдар арқылы қабылданады. Біз бұл олқылықты күнделікті жұмысты жақсартатын практикалық жүйелермен жабу үшін осы консалтингті бастадық."
                  />
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  <Trans
                    en="You work directly with the people designing and building the solution. That keeps communication clear, timelines realistic, and outcomes aligned with your business."
                    ru="Вы работаете напрямую с людьми, которые проектируют и внедряют решение. Это сохраняет ясную коммуникацию, реалистичные сроки и результаты, соответствующие вашему бизнесу."
                    kk="Сіз шешімді жобалап, іске асыратын адамдармен тікелей жұмыс істейсіз. Бұл коммуникацияны анық, мерзімді шынайы және нәтижені бизнесіңізге сай ұстайды."
                  />
                </p>

                <div className="mt-7 grid gap-3 text-sm">
                  {[
                    {
                      en: "Direct founder involvement from planning to delivery",
                      ru: "Прямое участие основателя — от планирования до внедрения",
                      kk: "Жоспарлаудан іске асыруға дейін негізін қалаушының тікелей қатысуы",
                    },
                    {
                      en: "Clear scope and pragmatic implementation",
                      ru: "Чёткий объём и прагматичное внедрение",
                      kk: "Анық ауқым және прагматикалық енгізу",
                    },
                    {
                      en: "Documentation and handover your team can use",
                      ru: "Документация и передача знаний, которыми может пользоваться команда",
                      kk: "Команда қолдана алатын құжаттама және білімді тапсыру",
                    },
                  ].map((item) => (
                    <div
                      key={item.en}
                      className="flex gap-2 rounded-xl border border-slate-900/10 bg-white px-4 py-3 text-slate-700"
                    >
                      <span className="mt-2 size-1.5 rounded-full bg-navy/70" />
                      <span>
                        <Trans en={item.en} ru={item.ru} kk={item.kk} />
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 grid gap-3 rounded-2xl border border-slate-900/10 bg-white p-5 text-sm">
                  <div className="font-semibold text-slate-950">
                    <Trans en="At a glance" ru="Коротко" kk="Қысқаша" />
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-slate-600">
                      <Trans en="Leadership model" ru="Модель руководства" kk="Басқару моделі" />
                    </span>
                    <span className="font-medium text-slate-950">
                      <Trans
                        en="Founder-led delivery"
                        ru="Внедрение под руководством основателя"
                        kk="Негізін қалаушы басқаратын іске асыру"
                      />
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-slate-600">
                      <Trans en="Typical focus" ru="Типичный фокус" kk="Негізгі фокус" />
                    </span>
                    <span className="font-medium text-slate-950">
                      <Trans en="Data + operations" ru="Данные + операции" kk="Дерек + операция" />
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-slate-600">
                      <Trans en="Client type" ru="Тип клиентов" kk="Клиент түрі" />
                    </span>
                    <span className="font-medium text-slate-950">
                      <Trans
                        en="Small and medium businesses"
                        ru="Малый и средний бизнес"
                        kk="Шағын және орта бизнес"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-900/10 bg-white p-8 shadow-sm shadow-slate-900/5">
                <div className="text-xs font-semibold uppercase tracking-[0.20em] text-navy">
                  <Trans en="Working style" ru="Стиль работы" kk="Жұмыс стилі" />
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {[
                    {
                      en: "Clear communication over consultancy jargon.",
                      ru: "Ясная коммуникация вместо консультационного жаргона.",
                      kk: "Консалтинг жаргонының орнына анық коммуникация.",
                    },
                    {
                      en: "Useful outputs over impressive complexity.",
                      ru: "Полезные результаты вместо показной сложности.",
                      kk: "Көрнекі күрделіліктен гөрі пайдалы нәтиже.",
                    },
                    {
                      en: "Steady progress with measurable milestones.",
                      ru: "Планомерный прогресс с измеримыми вехами.",
                      kk: "Өлшенетін кезеңдермен тұрақты ілгерілеу.",
                    },
                  ].map((x) => (
                    <li key={x.en} className="flex gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-navy/70" />
                      <span>
                        <Trans en={x.en} ru={x.ru} kk={x.kk} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-900/8 bg-slate-50">
        <Container className="py-14 sm:py-20">
          <div className="rounded-3xl border border-slate-900/10 bg-white p-8 shadow-sm shadow-slate-900/5 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <div className="text-xs font-semibold uppercase tracking-[0.20em] text-navy">
                  <Trans en="R&D mindset" ru="Мышление R&D" kk="R&D ойлау тәсілі" />
                </div>
                <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  <Trans en="Built on real data experience." ru="Опирается на реальный опыт работы с данными." kk="Нақты дерек тәжірибесіне негізделген." />
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  <Trans
                    en="Our analytical approach is grounded in work on AI-related health data that required combining sensor, activity, and environmental data under real-world constraints."
                    ru="Наш аналитический подход сформирован на работе с медицинскими данными для AI‑задач, где нужно было объединять данные датчиков, активности и окружающей среды в условиях реальных ограничений."
                    kk="Біздің аналитикалық тәсіл AI-ға қатысты денсаулық деректерімен жұмысқа негізделген: онда нақты шектеулер жағдайында сенсор, белсенділік және қоршаған орта деректерін біріктіру қажет болды."
                  />
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      title: "Real-world inputs",
                      ruTitle: "Данные из реального мира",
                      kkTitle: "Нақты ортадан алынған деректер",
                      desc: "Worked with sensor, activity, and environmental data across different quality levels.",
                      ruDesc:
                        "Работали с данными датчиков, активности и окружающей среды при разных уровнях качества.",
                      kkDesc:
                        "Әртүрлі сапа деңгейіндегі сенсор, белсенділік және қоршаған орта деректерімен жұмыс істедік.",
                    },
                    {
                      title: "Practical modeling",
                      ruTitle: "Практичное моделирование",
                      kkTitle: "Практикалық модельдеу",
                      desc: "Balanced model ambition with data constraints, reliability, and usability.",
                      ruDesc:
                        "Сбалансировали амбиции модели с ограничениями данных, надёжностью и удобством использования.",
                      kkDesc:
                        "Модель амбициясын дерек шектеулерімен, сенімділікпен және қолдану ыңғайымен теңестірдік.",
                    },
                    {
                      title: "Meaningful outputs",
                      ruTitle: "Осмысленные результаты",
                      kkTitle: "Мағыналы нәтижелер",
                      desc: "Kept focus on decision-support outputs that people can interpret and act on.",
                      ruDesc:
                        "Сохранили фокус на результатах для поддержки решений — чтобы люди могли понимать и действовать.",
                      kkDesc:
                        "Адамдар түсініп, әрекет ете алатын шешім қабылдауды қолдайтын нәтижелерге назарды сақтадық.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-900/10 bg-surface p-5"
                    >
                      <h3 className="text-sm font-semibold text-slate-950">
                        <Trans en={item.title} ru={item.ruTitle} kk={item.kkTitle} />
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        <Trans en={item.desc} ru={item.ruDesc} kk={item.kkDesc} />
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-600">
                  <Trans
                    en="We apply the same discipline in SME consulting: practical data foundations, realistic system design, and reporting that supports better business decisions."
                    ru="Мы применяем ту же дисциплину в консалтинге для SMB: практичные основы данных, реалистичное проектирование систем и отчётность, которая помогает принимать более удачные бизнес‑решения."
                    kk="Біз дәл осы тәртіпті ШОБ консалтингінде қолданамыз: практикалық дерек негізі, шынайы жүйе дизайны және жақсы бизнес шешімдерін қолдайтын есептілік."
                  />
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}

