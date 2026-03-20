import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Trans } from "@/components/Trans";

const segments = [
  {
    titleEn: "Owner-led SMEs",
    titleRu: "SMB под управлением владельца",
    titleKk: "Меншік иесі басқаратын SMB",
    descriptionEn:
      "Businesses that need clear numbers for weekly decisions but do not have a full internal data team.",
    descriptionRu:
      "Компании, которым нужны понятные цифры для еженедельных решений, но нет полноценной внутренней команды по данным.",
    descriptionKk:
      "Апта сайынғы шешімдер үшін нақты цифр керек, бірақ толыққанды ішкі дерек командасы жоқ бизнес.",
  },
  {
    titleEn: "Operations-heavy teams",
    titleRu: "Команды с нагрузкой на операции",
    titleKk: "Операцияға жүктемесі көп командалар",
    descriptionEn:
      "Teams where manual reporting, repeated spreadsheet work, and disconnected tools are slowing execution.",
    descriptionRu:
      "Команды, где ручная отчётность, повторяющаяся работа в таблицах и разрозненные инструменты тормозят выполнение задач.",
    descriptionKk:
      "Қолмен есеп беру, кестедегі қайталанатын жұмыс және байланыссыз құралдар орындалуды баяулататын командалар.",
  },
  {
    titleEn: "Scaling service companies",
    titleRu: "Сервисные компании в росте",
    titleKk: "Өсіп жатқан қызмет көрсету компаниялары",
    descriptionEn:
      "Companies growing revenue and clients faster than their internal systems can keep up.",
    descriptionRu:
      "Компании, которые растут по выручке и клиентам быстрее, чем внутренние системы могут это выдержать.",
    descriptionKk:
      "Кіріс пен клиенттер саны ішкі жүйелер үлгере алатындай жылдам емес, сондықтан компаниялар өсіп бара жатқан бизнес.",
  },
];

export function WhoWeHelp() {
  return (
    <section className="border-b border-slate-900/8 bg-white">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow={
            <Trans
              en="Who we help"
              ru="Кому мы помогаем"
              kk="Кімге көмектесеміз"
            />
          }
          title={
            <Trans
              en="Built for growing businesses that need practical systems, not enterprise overhead."
              ru="Сделано для растущих компаний, которым нужны практичные системы, а не «enterprise»-надстройки."
              kk="Өсіп келе жатқан компанияларға арналған: артық «enterprise» жүктемесіз, нақты практикалық жүйелер."
            />
          }
          description={
            <Trans
              en="Most clients come to us when operations have outgrown spreadsheets and ad-hoc reporting."
              ru="Большинство клиентов приходят, когда операции перерастают таблицы и «разовые» отчёты."
              kk="Көп клиенттер операциялар Excel мен ad-hoc есептіліктен асып кеткен кезде бізге келеді."
            />
          }
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {segments.map((s) => (
            <article
              key={s.titleEn}
              className="rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-base font-semibold text-slate-950">
                <Trans
                  en={s.titleEn}
                  ru={s.titleRu}
                  kk={s.titleKk}
                />
              </h3>
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
  );
}

