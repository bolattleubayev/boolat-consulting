import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Trans } from "@/components/Trans";

const problems = [
  {
    en: "We have data but no visibility.",
    ru: "Данные есть, но нет прозрачности.",
    kk: "Дерек бар, бірақ айқын көріну жоқ.",
  },
  {
    en: "Reports take too long every week.",
    ru: "Еженедельные отчёты занимают слишком много времени.",
    kk: "Апта сайынғы есеп тым ұзақ уақыт алады.",
  },
  {
    en: "Everything lives in Excel and disconnected systems.",
    ru: "Всё живёт в Excel и разрозненных системах.",
    kk: "Барлығы Excel-де және байланыссыз жүйелерде сақталады.",
  },
  {
    en: "We do not fully trust our numbers.",
    ru: "Мы не до конца доверяем цифрам.",
    kk: "Біз цифрларға толық сенбейміз.",
  },
  {
    en: "We need dashboards but do not know where to start.",
    ru: "Нам нужны дашборды, но непонятно, с чего начать.",
    kk: "Бізге дашбордтар керек, бірақ қайдан бастау керегін білмейміз.",
  },
  {
    en: "Our operations are growing faster than our tools.",
    ru: "Операции растут быстрее, чем наши инструменты.",
    kk: "Операцияларымыз құралдарымыздан жылдам өсіп келеді.",
  },
];

export function ProblemsWeSolve() {
  return (
    <section className="border-b border-slate-900/8 bg-slate-50">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow={
            <Trans
              en="Problems we solve"
              ru="Проблемы, которые мы решаем"
              kk="Біз шешетін мәселелер"
            />
          }
          title={
            <Trans
              en="Common pain points we hear from growing businesses."
              ru="Самые частые проблемы, которые мы слышим от растущих компаний."
              kk="Өсіп келе жатқан компаниялардан еститін ең жиі мәселелер."
            />
          }
          description={
            <Trans
              en="If these sound familiar, you are not alone. We help teams move from patchwork workflows to systems they can rely on."
              ru="Если это похоже на ваши задачи — вы не одни. Мы помогаем командам уйти от «лоскутных» процессов к системам, на которые можно опираться."
              kk="Егер бұл таныс болса, сіз жалғыз емессіз. Біз командаларды «жамау-жамау» процестерден сенуге болатын жүйелерге көшіреміз."
            />
          }
          align="center"
        />

        <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, index) => (
            <article
              key={p.en}
              className="group rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                <span className="grid size-6 place-items-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10">
                  {index + 1}
                </span>
                <Trans en="Pain point" ru="Боль" kk="Мәселе" />
              </div>
              <p className="mt-4 text-base leading-7 text-slate-800">
                <Trans en={p.en} ru={p.ru} kk={p.kk} />
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-slate-600 sm:text-base">
          <Trans
            en="We help turn fragmented business processes into usable systems and clear reporting your team can act on."
            ru="Мы превращаем разрозненные бизнес‑процессы в работающие системы и понятную отчётность, на которую команда может опираться."
            kk="Біз бөлшектенген бизнес‑процестерді қолдануға болатын жүйелерге және команда әрекет ете алатын айқын есептілікке айналдырамыз."
          />
        </p>
      </Container>
    </section>
  );
}

