import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Trans } from "@/components/Trans";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="border-b border-slate-900/8 bg-white">
      <Container className="py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow={<Trans en="Contact" ru="Контакты" kk="Байланыс" />}
              title={
                <Trans
                  en="Tell us where operations or reporting are slowing you down."
                  ru="Расскажите, где операции или отчётность тормозят вас."
                  kk="Операциялар немесе есептілік қай жерде баяулап тұрғанын айтыңыз."
                />
              }
              description={
                <Trans
                  en="Share your current setup and biggest bottleneck. We will come back with a practical next step."
                  ru="Опишите вашу текущую ситуацию и главный «узкий участок». Мы вернёмся с практичным следующим шагом."
                  kk="Қазіргі жағдайыңызды және ең үлкен тар жерді сипаттаңыз. Біз практикалық келесі қадаммен қайта ораламыз."
                />
              }
            />

            <div className="mt-10 space-y-6 text-sm text-slate-600">
              <div className="rounded-3xl border border-slate-900/10 bg-surface p-6 shadow-sm shadow-slate-900/5">
                <div className="text-sm font-semibold text-slate-950">
                  <Trans
                    en="Typical next steps"
                    ru="Обычно следующие шаги"
                    kk="Әдеттегі келесі қадамдар"
                  />
                </div>
                <ol className="mt-4 space-y-3">
                  {[
                    {
                      en: "20-minute discovery call",
                      ru: "Разговор на 20 минут",
                      kk: "20 минуттық танысу қоңырауы",
                    },
                    {
                      en: "Short recommendation with scope options",
                      ru: "Короткая рекомендация и варианты масштаба",
                      kk: "Қамту нұсқалары бар қысқа ұсыныс",
                    },
                    {
                      en: "Implementation plan and kickoff",
                      ru: "План внедрения и старт работ",
                      kk: "Іске асыру жоспары және жұмысты бастау",
                    },
                  ].map((x) => (
                    <li key={x.en} className="flex gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-navy/70" />
                      <span>
                        <Trans en={x.en} ru={x.ru} kk={x.kk} />
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-3xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5">
                <div className="text-sm font-semibold text-slate-950">
                  <Trans
                    en="Best fit for"
                    ru="Лучше всего подходит, если"
                    kk="Кімге жақсы сәйкес келеді"
                  />
                </div>
                <ul className="mt-3 space-y-2">
                  {[
                    {
                      en: "Teams spending too much time on manual reporting",
                      ru: "Команды тратят слишком много времени на ручную отчётность",
                      kk: "Қолмен есеп беруге тым көп уақыт жұмсайтын командалар",
                    },
                    {
                      en: "Businesses with disconnected spreadsheets and tools",
                      ru: "Бизнесы с разрозненными таблицами и инструментами",
                      kk: "Кестелері мен құралдары бір-бірімен байланыспаған бизнес",
                    },
                    {
                      en: "Leaders who need clear, reliable operational visibility",
                      ru: "Руководителям нужна ясная и надёжная операционная видимость",
                      kk: "Операциялық көрінісі анық әрі сенімді болуы қажет басшылар",
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

              <p>
                <Trans
                  en="Prefer email?"
                  ru="Предпочитаете email?"
                  kk="Email ыңғайлы ма?"
                />{" "}
                <Link
                  className="font-medium text-navy hover:text-navy-2"
                  href="mailto:tleubayevb@gmail.com"
                >
                  tleubayevb@gmail.com
                </Link>
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-900/10 bg-white p-8 shadow-sm shadow-slate-900/5">
              <div className="text-sm font-semibold text-slate-950">
                <Trans en="Project inquiry" ru="Запрос по проекту" kk="Жоба бойынша сұрау" />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                <Trans
                  en="Keep it short: current tools, what is not working, and what you want to improve first."
                  ru="Коротко: ваши текущие инструменты, что сейчас не работает и что вы хотите улучшить в первую очередь."
                  kk="Қысқа жазыңыз: қазіргі құралдарыңыз, не жұмыс істемей тұр және алдымен нені жақсартқыңыз келеді."
                />
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

