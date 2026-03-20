import { Fragment } from "react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Trans } from "@/components/Trans";

export const metadata = {
  title: "Dashboards",
};

export default function DashboardsPage() {
  const stages = [
    {
      title: "Data sources",
      titleRu: "Источники данных",
      titleKk: "Дерек көздері",
      note:
        "Data is fragmented, inconsistent, and stored in different formats.",
      noteRu:
        "Данные разрознены, несогласованы и хранятся в разных форматах.",
      noteKk:
        "Дерек шашыраңқы, біркелкі емес және әртүрлі форматтарда сақталады.",
      examples: [
        { en: "1C (orders)", ru: "1С (заказы)", kk: "1С (тапсырыстар)" },
        { en: "SAP (products)", ru: "SAP (продукты)", kk: "SAP (өнімдер)" },
        {
          en: "APIs (payments / external data)",
          ru: "API (платежи / внешние данные)",
          kk: "API (төлемдер / сыртқы дерек)",
        },
      ],
      description:
        "We start by mapping where your business numbers come from so we know what needs to be connected and normalized.",
      descriptionRu:
        "Мы начинаем с карты того, откуда берутся бизнес-числа, чтобы понять, что нужно подключить и привести к единому виду.",
      descriptionKk:
        "Алдымен бизнес-цифрлар қайдан шығатынын картаға түсіреміз: нені қосу керек және қалай біріздендіру керек екенін білеміз.",
    },
    {
      title: "Data processing and enrichment",
      titleRu: "Обработка и обогащение данных",
      titleKk: "Деректерді өңдеу және байыту",
      description:
        "We turn raw inputs into trustworthy datasets using pipelines and processing layers that perform data ingestion, transformation, matching and joining, and validation and data quality checks.",
      descriptionRu:
        "Мы превращаем сырые входные данные в надёжные датасеты: используем конвейеры и слои обработки для загрузки, преобразований, сопоставления и объединения, а также для валидации и проверок качества.",
      descriptionKk:
        "Біз конвейерлер мен өңдеу қабаттары арқылы шикі деректерді сенімді датасеттерге айналдырамыз: дерек жүктеу, түрлендіру, сәйкестендіру мен біріктіру, сондай-ақ валидация мен сапа тексерістері орындалады.",
      highlights: [
        "Ingestion: bring data into a consistent workflow",
        "Transformation: standardize definitions and formats",
        "Matching and joins: connect related records accurately",
        "Validation: apply quality checks before data is used",
      ],
      highlightsRu: [
        "Загрузка: привести данные в единый процесс",
        "Преобразования: унифицировать определения и форматы",
        "Сопоставление и объединения: точно связывать связанные записи",
        "Валидация: проверки качества до использования данных",
      ],
      highlightsKk: [
        "Жүктеу: деректі бірізді жұмыс процесіне әкелу",
        "Түрлендіру: анықтамалар мен форматтарды стандарттау",
        "Сәйкестендіру және біріктіру: байланысты жазбаларды дәл қосу",
        "Валидация: дерек қолданылмас бұрын сапа тексерістері",
      ],
    },
    {
      title: "Clean business data",
      titleRu: "Чистые бизнес-данные",
      titleKk: "Таза бизнес-деректер",
      description:
        "This layer produces a unified data model with consistent structure and validated, enriched records. It becomes the foundation for reporting and analytics across your organization.",
      descriptionRu:
        "Этот слой формирует единую модель данных с согласованной структурой и валидацией: обогащённые записи, которым можно доверять. Он становится фундаментом отчётности и аналитики по всей организации.",
      descriptionKk:
        "Бұл қабат келісілген құрылымы бар біріңғай дерек моделін және валидацияланған, байытылған жазбаларды қалыптастырады. Ол ұйым бойынша есептілік пен аналитиканың іргетасына айналады.",
      highlights: [
        "Unified data model",
        "Consistent structure",
        "Validated and enriched records",
      ],
      highlightsRu: [
        "Единая модель данных",
        "Согласованная структура",
        "Валидированные и обогащённые записи",
      ],
      highlightsKk: [
        "Біріңғай дерек моделі",
        "Сәйкес құрылым",
        "Валидацияланған және байытылған жазбалар",
      ],
    },
    {
      title: "Dashboard and insights",
      titleRu: "Дашборды и инсайты",
      titleKk: "Дашбордтар және инсайттар",
      description:
        "Dashboards bring the clean business data into practical views for teams: KPIs for weekly rhythm, charts for trends, and tables for traceability.",
      descriptionRu:
        "Дашборды выводят чистые бизнес-данные в практичные представления для команд: KPI для еженедельного ритма, графики для трендов и таблицы для прослеживаемости.",
      descriptionKk:
        "Дашбордтар таза бизнес-деректі командаларға ыңғайлы көріністерге айналдырады: апта сайынғы ырғаққа арналған KPI, трендтерге арналған графиктер және қадағалау үшін таблицалар.",
    },
  ] as const;

  const dashboardSeries = {
    months: [
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
    ],
    revenue: [
      142000, 155000, 149000, 171000, 188000, 176000, 204000, 221000,
      239000, 212000, 233000, 248000,
    ],
    orders: [
      980, 1040, 1015, 1180, 1260, 1205, 1380, 1495, 1605, 1410, 1550,
      1685,
    ],
    // Percent of transactions that end up refunded/failed.
    refundRate: [1.2, 1.0, 1.1, 0.9, 0.8, 1.0, 0.7, 0.8, 0.6, 0.9, 0.8, 0.8],
  };

  // Simple “what-if” dataset used to make correlations tangible in the UI.
  // As average temperature rises, sunglasses demand increases.
  const temperatureOutsideC = [5, 7, 9, 11, 14, 16, 19, 20, 18, 14, 10, 7];
  const sunglassesOrders = [180, 200, 230, 260, 300, 330, 370, 390, 350, 300, 240, 210];

  const aovSeries = dashboardSeries.revenue.map((r, i) => r / dashboardSeries.orders[i]);
  const latestRevenue = dashboardSeries.revenue[dashboardSeries.revenue.length - 1];
  const latestOrders = dashboardSeries.orders[dashboardSeries.orders.length - 1];
  const latestAov = latestRevenue / latestOrders;

  function MiniSparkline({
    values,
    stroke,
    fill,
  }: {
    values: number[];
    stroke: string;
    fill: string;
  }) {
    const w = 120;
    const h = 30;
    const pad = 3;

    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = Math.max(1e-9, max - min);

    const points = values.map((v, i) => {
      const t = values.length === 1 ? 0 : i / (values.length - 1);
      const x = pad + t * (w - pad * 2);
      const y = pad + (1 - (v - min) / range) * (h - pad * 2);
      return { x, y };
    });

    const line = points
      .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
      .join(" ");
    const area = `${line} L ${points[points.length - 1].x} ${h - pad} L ${
      points[0].x
    } ${h - pad} Z`;

    return (
      <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
        <path d={area} fill={fill} opacity={0.85} />
        <path
          d={line}
          fill="none"
          stroke={stroke}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  function KpiTopIcon({ kind }: { kind: "revenue" | "orders" | "aov" }) {
    const common =
      "size-5 text-navy transition-colors duration-200 group-hover:text-navy";
    switch (kind) {
      case "revenue":
        return (
          <svg
            className={common}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 19.5V5.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M8 15.5l3-3 3 3 5-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 9v6h-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "orders":
        return (
          <svg
            className={common}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7 7h10l1.2 12H5.8L7 7Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M9 7a3 3 0 0 1 6 0"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M9 12h6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        );
      case "aov":
        return (
          <svg
            className={common}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 12a8 8 0 1 0 16 0"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M12 12l3.5-3.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 20h8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        );
    }
  }

  return (
    <section className="border-b border-slate-900/8 bg-white">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow={<Trans en="Dashboards" ru="Дашборды" kk="Дашбордтар" />}
          title={
            <Trans
              en="From raw data to business insights"
              ru="От сырых данных к бизнес‑инсайтам"
              kk="Шикі деректен бизнес‑инсайттарға дейін"
            />
          }
          description={
            <Trans
              en="Dashboards are only as reliable as the data behind them. We design systems that turn fragmented data into consistent, usable insights."
              ru="Дашборды надёжны настолько, насколько надёжны данные за ними. Мы создаём системы, которые превращают разрозненные данные в согласованные и удобные для работы инсайты."
              kk="Дашбордтар оған негіз болған деректер қаншалықты сенімді болса, соншалықты сенімді. Біз бөлшектенген деректерді бірізді, қолдануға ыңғайлы инсайттарға айналдыратын жүйелерді құрастырамыз."
            />
          }
        />

        <div className="mt-12 flex flex-col gap-10">
          {stages.map((stage, idx) => (
            <Fragment key={stage.title}>
              <article className="h-full w-full rounded-3xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-slate-950">
                      {idx + 1}.{" "}
                      <Trans
                        en={stage.title}
                        ru={stage.titleRu}
                        kk={stage.titleKk}
                      />
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      <Trans
                        en={stage.description}
                        ru={stage.descriptionRu}
                        kk={stage.descriptionKk}
                      />
                    </p>
                  </div>

                  <div className="mt-1 grid size-9 place-items-center rounded-full bg-slate-100 text-xs font-semibold text-navy ring-1 ring-slate-900/10">
                    {idx + 1}
                  </div>
                </div>

                {stage.title === "Data sources" ? (
                  <>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {stage.examples.map((x) => (
                        <span
                          key={x.en}
                          className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-900/10"
                        >
                          <Trans en={x.en} ru={x.ru} kk={x.kk} />
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 rounded-2xl bg-white p-4 ring-1 ring-slate-900/10">
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        <Trans
                          en="Illustrative raw samples"
                          ru="Иллюстративные исходные данные"
                          kk="Иллюстративті шикі деректер"
                        />
                      </div>

                      <div className="mt-3 grid gap-3 md:grid-cols-3">
                        <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-900/5">
                          <div className="text-sm font-semibold text-slate-950">
                            <Trans
                              en="1C (orders)"
                              ru="1С (заказы)"
                              kk="1С (тапсырыстар)"
                            />
                          </div>
                          <pre className="mt-2 whitespace-pre-wrap break-words font-mono text-[11px] leading-5 text-slate-600">
                            {`ORD-1048 | 12.03.2026 | "Northwind" | sum=1 240,00 RUB | status=paid
ORD-1047 | 2026/03/11 | ACME ltd | total:860.00 | cur=RUB
ORD-1046 ; 10-03-2026 ; Blue Ridge LLC ; amount=2 190 rub ; state=processing
ORD-1045 | 08.03.26 | Pine & Co. | refund? yes (320,00)`}
                          </pre>
                        </div>

                        <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-900/5">
                          <div className="text-sm font-semibold text-slate-950">
                            <Trans
                              en="SAP (products)"
                              ru="SAP (продукты)"
                              kk="SAP (өнімдер)"
                            />
                          </div>
                          <pre className="mt-2 whitespace-pre-wrap break-words font-mono text-[11px] leading-5 text-slate-600">
                            {`MAT-2201 - Widget A (cat: Tools) - price=19,90 USD - stock=120
MAT-2202|widget b|Category=tools|unitPrice: 19.9|STOCK:- 
mat-2203 | Widget C | category: Services | net_price=0? (check)
MAT-2204; widget d; cat=TOOLS; unit=29 USD; availability=--`}
                          </pre>
                        </div>

                        <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-900/5">
                          <div className="text-sm font-semibold text-slate-950">
                            <Trans
                              en="APIs (payments)"
                              ru="API (платежи)"
                              kk="API (төлемдер)"
                            />
                          </div>
                          <pre className="mt-2 whitespace-pre-wrap break-words font-mono text-[11px] leading-5 text-slate-600">
                            {`pay_88a1 {amount:124000, currency:"RUB", time:"2026-03-12T09:14:00Z", status:"succeeded"}
pay_88a2 {amount_cents:86000; USD ; timestamp: 12/03/2026 13:04 ; state: ok}
PAY-88A3 {amt=219000; cur=RUB; created=2026-03-10 18:22; result=fail?}
pay_88a4 {amount:320000; currency: RUB} // missing timestamp`}
                          </pre>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-900/10">
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        <Trans
                          en="Short note"
                          ru="Короткая заметка"
                          kk="Қысқа ескерту"
                        />
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        <Trans
                          en={stage.note}
                          ru={stage.noteRu}
                          kk={stage.noteKk}
                        />
                      </p>
                    </div>
                  </>
                ) : null}

                {stage.highlights ? (
                  <div className="mt-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      <Trans
                        en="What this stage delivers"
                        ru="Что даёт этот этап"
                        kk="Бұл кезең не береді"
                      />
                    </div>
                    <div className="mt-3 space-y-2 text-sm text-slate-700">
                      {stage.highlights.map((h, i) => (
                        <div key={`${h}-${i}`} className="flex items-start gap-2">
                          <span className="mt-2 size-1.5 rounded-full bg-navy/70" />
                          <span className="leading-6">
                            <Trans
                              en={h}
                              ru={stage.highlightsRu?.[i] ?? h}
                              kk={stage.highlightsKk?.[i] ?? h}
                            />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {stage.title === "Data processing and enrichment" ? (
                  <div className="mt-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      <Trans
                        en="Example enriched records"
                        ru="Пример обогащённых записей"
                        kk="Мысал ретінде байытылған жазбалар"
                      />
                    </div>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-900/10">
                        <div className="text-sm font-semibold text-slate-950">
                          <Trans
                            en="Normalized fields"
                            ru="Нормализованные поля"
                            kk="Нормаланған өрістер"
                          />
                        </div>
                        <pre className="mt-3 whitespace-pre-wrap break-words font-mono text-[11px] leading-5 text-slate-600">
                          {`order_id | order_date  | customer     | currency | total_amount
ORD-1048  | 2026-03-12 | Northwind    | RUB       | 1240.00
ORD-1047  | 2026-03-11 | ACME ltd     | RUB       | 860.00
ORD-1046  | 2026-03-10 | Blue Ridge   | RUB       | 2190.00`}
                        </pre>
                      </div>

                      <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-900/10">
                        <div className="text-sm font-semibold text-slate-950">
                          <Trans
                            en="Matched joins"
                            ru="Связанные объединения"
                            kk="Сәйкес қосылыстар"
                          />
                        </div>
                        <pre className="mt-3 whitespace-pre-wrap break-words font-mono text-[11px] leading-5 text-slate-600">
                          {`order_id | product_id | product_category | payment_status | quality_flag
ORD-1048  | MAT-2201   | Tools             | succeeded       | ok
ORD-1047  | MAT-2202   | Tools             | ok (mapped)    | ok
ORD-1046  | MAT-2204   | Tools             | failed/mismatch| needs_review`}
                        </pre>
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      <Trans
                        en="The result is consistent, validated records that can be trusted for reporting and analytics."
                        ru="В результате получаются согласованные и валидированные записи, которым можно доверять для отчётности и аналитики."
                        kk="Нәтижесінде есептілік пен аналитика үшін сенімді, келісілген және валидацияланған жазбалар шығады."
                      />
                    </p>
                  </div>
                ) : null}

                {stage.title === "Clean business data" ? (
                  <div className="mt-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      <Trans
                        en="Example reporting-ready records"
                        ru="Пример отчётных записей"
                        kk="Есепке дайын жазбалар мысалы"
                      />
                    </div>

                    <div className="mt-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-900/10">
                      <pre className="whitespace-pre-wrap break-words font-mono text-[11px] leading-5 text-slate-600">
                        {`order_id | order_date | customer   | product_id | product_category | payment_status | currency | revenue_amount | record_quality
ORD-1048  | 2026-03-12 | Northwind  | MAT-2201   | Tools            | succeeded       | RUB       | 1240.00        | valid
ORD-1047  | 2026-03-11 | ACME ltd   | MAT-2202   | Tools            | succeeded       | RUB       | 860.00         | valid
ORD-1046  | 2026-03-10 | Blue Ridge | MAT-2204   | Tools            | needs_review    | RUB       | 2190.00        | needs_review`}
                      </pre>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      <Trans
                        en="This is the layer reporting and analytics query against. Consistent definitions keep KPIs comparable over time."
                        ru="Именно к этому слою обращаются отчётность и аналитика. Согласованные определения делают KPI сопоставимыми во времени."
                        kk="Дәл осы қабатқа есептілік пен аналитиканың сұрауы жасалады. Бірізді анықтамалар KPI-ді уақыт бойынша салыстыруға мүмкіндік береді."
                      />
                    </p>
                  </div>
                ) : null}

                {stage.title === "Dashboard and insights" ? (
                  <div className="mt-6">
                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        {
                          label: "Revenue",
                          labelRu: "Выручка",
                          labelKk: "Түсім",
                          value: `$${Math.round(latestRevenue / 1000)}k`,
                          values: dashboardSeries.revenue,
                          color: "rgb(29,78,216)",
                          iconKind: "revenue" as const,
                        },
                        {
                          label: "Orders",
                          labelRu: "Заказы",
                          labelKk: "Тапсырыстар",
                          value: latestOrders.toLocaleString(),
                          values: dashboardSeries.orders,
                          color: "rgb(11,31,68)",
                          iconKind: "orders" as const,
                        },
                        {
                          label: "Average order value",
                          labelRu: "Средний чек",
                          labelKk: "Орташа тапсырыс құны",
                          value: `$${Math.round(latestAov)}`,
                          values: aovSeries,
                          color: "rgb(18,59,122)",
                          iconKind: "aov" as const,
                        },
                      ].map((k) => (
                        <div
                          key={k.label}
                          className="relative rounded-3xl border border-slate-900/10 bg-gradient-to-br from-white via-surface to-white p-5 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18)]"
                        >
                          <div className="absolute right-5 top-5 grid size-10 place-items-center rounded-full bg-navy/[0.06] ring-1 ring-slate-900/10">
                            <KpiTopIcon kind={k.iconKind} />
                          </div>
                          <div className="text-xs font-semibold text-slate-600">
                            <Trans en={k.label} ru={k.labelRu} kk={k.labelKk} />
                          </div>
                          <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                            {k.value}
                          </div>
                          <div className="mt-2">
                            <MiniSparkline
                              values={k.values}
                              stroke={k.color}
                              fill={`rgba(11,31,68,0.10)`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      <div className="rounded-3xl border border-slate-900/10 bg-gradient-to-br from-slate-50 via-white to-white p-5 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18)]">
                        <div className="flex items-center justify-between gap-4">
                          <div className="text-sm font-semibold text-slate-950">
                          <Trans
                            en="Revenue over time (USD)"
                            ru="Выручка по времени (USD)"
                            kk="Уақыт бойынша түсім (USD)"
                          />
                          </div>
                          <div className="text-xs font-medium text-slate-600">
                            <Trans
                              en="Last 12 months"
                              ru="Последние 12 месяцев"
                              kk="Соңғы 12 ай"
                            />
                          </div>
                        </div>
                        <div className="mt-3 rounded-2xl bg-surface ring-1 ring-slate-900/10 p-3">
                          <svg
                            width="100%"
                            height="74"
                            viewBox="0 0 240 74"
                            aria-hidden="true"
                          >
                            {(() => {
                              const xs = dashboardSeries.revenue;
                              const min = Math.min(...xs);
                              const max = Math.max(...xs);
                              const pad = 6;
                              const w = 240;
                              const h = 74;
                              const plotW = w - pad * 2;
                              const plotH = h - pad * 2;

                              const points = xs.map((v, i) => {
                                const t = xs.length === 1 ? 0 : i / (xs.length - 1);
                                const x = pad + t * plotW;
                                const y =
                                  pad +
                                  (1 - (v - min) / Math.max(1, max - min)) * plotH;
                                return { x, y, v };
                              });

                              const gridYs = [0, 0.5, 1].map((t) => pad + (t * plotH));
                              const gridXs = [0, 1 / 3, 2 / 3, 1].map((t) => pad + t * plotW);

                              const yTickValues = [max, (max + min) / 2, min];
                              const xTickLabels = [
                                <Trans en="Apr" ru="Апр" kk="Сәуір" />,
                                <Trans en="Sep" ru="Сен" kk="Қыркүйек" />,
                                <Trans en="Jan" ru="Янв" kk="Қаңтар" />,
                                <Trans en="Mar" ru="Мар" kk="Наурыз" />,
                              ];

                              const line = points
                                .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
                                .join(" ");
                              const area =
                                `${line} L ${points[points.length - 1].x} ${h - pad} L ${points[0].x} ${h - pad} Z`;

                              return (
                                <>
                                  {gridYs.map((y, i) => (
                                    <Fragment key={`gywrap-${i}`}>
                                      <line
                                        key={`gy-${i}`}
                                        x1={pad}
                                        y1={y}
                                        x2={w - pad}
                                        y2={y}
                                        stroke="rgba(15,23,42,0.12)"
                                        strokeDasharray="4 4"
                                      />
                                      <text
                                        key={`yt-${i}`}
                                        x={pad - 2}
                                        y={y + 4}
                                        textAnchor="end"
                                        fontSize="9"
                                        fill="rgba(15,23,42,0.55)"
                                      >
                                        {`$${Math.round(yTickValues[i] / 1000)}k`}
                                      </text>
                                    </Fragment>
                                  ))}
                                  {gridXs.map((x, i) => (
                                    <line
                                      key={`gx-${i}`}
                                      x1={x}
                                      y1={pad}
                                      x2={x}
                                      y2={h - pad}
                                      stroke="rgba(15,23,42,0.08)"
                                    />
                                  ))}
                                  {gridXs.map((x, i) => (
                                    <text
                                      key={`xt-${i}`}
                                      x={x}
                                      y={h - 4}
                                      textAnchor="middle"
                                      fontSize="9"
                                      fill="rgba(15,23,42,0.55)"
                                    >
                                      {xTickLabels[i]}
                                    </text>
                                  ))}
                                  <path
                                    d={area}
                                    fill="rgba(11,31,68,0.08)"
                                  />
                                  <path
                                    d={line}
                                    fill="none"
                                    stroke="rgb(11,31,68)"
                                    strokeWidth="2.2"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                  />
                                  {points.map((p, i) => (
                                    <circle
                                      key={i}
                                      cx={p.x}
                                      cy={p.y}
                                      r="3.2"
                                      fill="white"
                                      stroke="rgb(11,31,68)"
                                      strokeWidth="2"
                                    />
                                  ))}
                                </>
                              );
                            })()}
                          </svg>
                          <div className="mt-1 text-[11px] text-slate-500">
                            <Trans
                              en="Line shows total revenue for the same months."
                              ru="Линия показывает общую выручку за те же месяцы."
                              kk="Сызық сол айлардағы жалпы түсімді көрсетеді."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="rounded-3xl border border-slate-900/10 bg-gradient-to-br from-slate-50 via-white to-white p-5 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18)]">
                        <div className="text-sm font-semibold text-slate-950">
                          <Trans
                            en="Top products by revenue share"
                            ru="Топ‑продукты по доле выручки"
                            kk="Түсім үлесі бойынша үздік өнімдер"
                          />
                        </div>
                        <div className="mt-3 space-y-3">
                          {[
                            {
                              name: "Sunglasses",
                              nameRu: "Солнцезащитные очки",
                              nameKk: "Күннен қорғайтын көзілдірік",
                              value: 219000,
                              pct: 219000 / 429000,
                            },
                            {
                              name: "Sunscreen",
                              nameRu: "Солнцезащитный крем",
                              nameKk: "Күннен қорғайтын крем",
                              value: 124000,
                              pct: 124000 / 429000,
                            },
                            {
                              name: "Beach towels",
                              nameRu: "Пляжные полотенца",
                              nameKk: "Жағажай сүлгілері",
                              value: 86000,
                              pct: 86000 / 429000,
                            },
                          ]
                            .map((p) => ({
                              ...p,
                              displayValue: `$${Math.round(p.value).toLocaleString()}`,
                              displayPct: `${Math.round(p.pct * 100)}%`,
                            }))
                            .slice(0, 3)
                            .map((p) => (
                              <div key={p.name} className="flex items-center gap-3">
                                <div className="w-24 text-xs font-medium text-slate-800">
                                  <Trans en={p.name} ru={p.nameRu} kk={p.nameKk} />
                                </div>
                                <div className="h-2 flex-1 rounded-full bg-slate-100 ring-1 ring-slate-900/10">
                                  <div
                                    className="h-full rounded-full bg-gradient-to-r from-navy via-navy-2 to-sky-accent"
                                    style={{ width: `${Math.max(8, p.pct * 100)}%` }}
                                  />
                                </div>
                                <div className="w-20 text-right text-xs font-semibold text-slate-950">
                                  <div>{p.displayValue}</div>
                                  <div className="mt-0.5 text-[11px] font-medium text-slate-600">
                                    {p.displayPct}
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-3xl border border-slate-900/10 bg-gradient-to-br from-navy/[0.05] via-white to-white p-5 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18)]">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-sm font-semibold text-slate-950">
                            <Trans
                              en="What your data is telling you"
                              ru="Что подсказывают данные"
                              kk="Деректер не айтып тұр"
                            />
                          </div>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            <Trans
                              en="These patterns help you spot what to check first when KPIs change."
                              ru="Эти закономерности помогают понять, что проверить в первую очередь, когда меняются KPI."
                              kk="Бұл үрдістер KPI өзгергенде ең алдымен нені тексеру керегін табуға көмектеседі."
                            />
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 grid gap-3 md:grid-cols-2">
                        <div className="rounded-2xl border border-slate-900/10 bg-white p-4">
                          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                            <Trans
                              en="Outside temperature vs sunglasses demand"
                              ru="Температура на улице vs спрос на солнцезащитные очки"
                              kk="Сыртқы температура және күннен қорғайтын көзілдірікке сұраныс"
                            />
                          </div>
                          <div className="mt-2 text-sm font-semibold text-slate-950">
                            <Trans
                              en="When it gets warmer, sunglasses orders rise too."
                              ru="Когда становится теплее, растёт и спрос на солнцезащитные очки."
                              kk="Ауа жылынса, көзілдірікке тапсырыс та өседі."
                            />
                          </div>

                          <div className="mt-3 grid gap-3">
                            <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-900/10">
                              <div className="text-xs font-semibold text-slate-600">
                                <Trans
                                  en="Temperature (°C)"
                                  ru="Температура (°C)"
                                  kk="Температура (°C)"
                                />
                              </div>
                              <svg
                                className="mt-2 w-full"
                                viewBox="0 0 240 56"
                                aria-hidden="true"
                              >
                                {(() => {
                                  const xs = temperatureOutsideC;
                                  const w = 240;
                                  const h = 56;
                                  const pad = 8;
                                  const plotW = w - pad * 2;
                                  const plotH = h - pad * 2;
                                  const min = Math.min(...xs);
                                  const max = Math.max(...xs);
                                  const range = Math.max(1e-9, max - min);

                                  const points = xs.map((v, i) => {
                                    const t = xs.length === 1 ? 0 : i / (xs.length - 1);
                                    const x = pad + t * plotW;
                                    const y = pad + (1 - (v - min) / range) * plotH;
                                    return { x, y };
                                  });

                                  const line = points
                                    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
                                    .join(" ");

                                  return (
                                    <>
                                      {[0, 0.5, 1].map((t, i) => {
                                        const y = pad + t * plotH;
                                        return (
                                          <line
                                            key={i}
                                            x1={pad}
                                            y1={y}
                                            x2={w - pad}
                                            y2={y}
                                            stroke="rgba(15,23,42,0.10)"
                                          />
                                        );
                                      })}
                                      <path d={line} fill="none" stroke="rgb(29,78,216)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                      {points.map((p, i) => (
                                        <circle key={i} cx={p.x} cy={p.y} r="2.6" fill="white" stroke="rgb(29,78,216)" strokeWidth="2" />
                                      ))}
                                    </>
                                  );
                                })()}
                              </svg>
                            </div>

                            <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-900/10">
                              <div className="text-xs font-semibold text-slate-600">
                                <Trans
                                  en="Sunglasses demand (people)"
                                  ru="Спрос на очки (человек)"
                                  kk="Көзілдірікке сұраныс (адам)"
                                />
                              </div>
                              <svg
                                className="mt-2 w-full"
                                viewBox="0 0 240 56"
                                aria-hidden="true"
                              >
                                {(() => {
                                  const ys = sunglassesOrders;
                                  const w = 240;
                                  const h = 56;
                                  const pad = 8;
                                  const plotW = w - pad * 2;
                                  const plotH = h - pad * 2;
                                  const max = Math.max(...ys);
                                  const n = ys.length;
                                  const barW = plotW / n;

                                  return (
                                    <>
                                      {[0, 0.5, 1].map((t, i) => {
                                        const y = pad + (1 - t) * plotH;
                                        return (
                                          <line
                                            key={i}
                                            x1={pad}
                                            y1={y}
                                            x2={w - pad}
                                            y2={y}
                                            stroke="rgba(15,23,42,0.10)"
                                          />
                                        );
                                      })}
                                      {ys.map((v, i) => {
                                        const t = max === 0 ? 0 : v / max;
                                        const barH = t * plotH;
                                        const x = pad + i * barW + barW * 0.15;
                                        const bw = barW * 0.7;
                                        const y = pad + (plotH - barH);
                                        return (
                                          <rect
                                            key={i}
                                            x={x}
                                            y={y}
                                            width={bw}
                                            height={barH}
                                            rx="3"
                                            fill="rgba(11,31,68,0.85)"
                                          />
                                        );
                                      })}
                                    </>
                                  );
                                })()}
                              </svg>
                            </div>
                          </div>

                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            <Trans
                              en="This kind of co-movement is a practical trigger for planning stock before demand shifts."
                              ru="Такое совместное изменение — практичный сигнал для планирования запасов до того, как спрос заметно сместится."
                              kk="Мұндай бірге өзгеру сұраныс айтарлықтай ауысар алдында қорды жоспарлауға нақты белгі болады."
                            />
                          </p>
                        </div>

                        <div className="rounded-2xl border border-slate-900/10 bg-white p-4">
                          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                            <Trans
                              en="Orders vs revenue"
                              ru="Заказы vs выручка"
                              kk="Тапсырыстар және түсім"
                            />
                          </div>
                          <div className="mt-2 text-sm font-semibold text-slate-950">
                            <Trans
                              en="When orders rise, revenue rises too."
                              ru="Когда растёт число заказов, растёт и выручка."
                              kk="Тапсырыс көбейсе, түсім де өседі."
                            />
                          </div>

                          <div className="mt-3 grid gap-3">
                            <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-900/10">
                              <div className="text-xs font-semibold text-slate-600">
                                <Trans en="Orders" ru="Заказы" kk="Тапсырыстар" />
                              </div>
                              <svg
                                className="mt-2 w-full"
                                viewBox="0 0 240 56"
                                aria-hidden="true"
                              >
                                {(() => {
                                  const ys = dashboardSeries.orders;
                                  const w = 240;
                                  const h = 56;
                                  const pad = 8;
                                  const plotW = w - pad * 2;
                                  const plotH = h - pad * 2;
                                  const min = Math.min(...ys);
                                  const max = Math.max(...ys);
                                  const range = Math.max(1e-9, max - min);
                                  const n = ys.length;

                                  const points = ys.map((v, i) => {
                                    const t = n === 1 ? 0 : i / (n - 1);
                                    const x = pad + t * plotW;
                                    const y = pad + (1 - (v - min) / range) * plotH;
                                    return { x, y };
                                  });

                                  const line = points
                                    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
                                    .join(" ");

                                  return (
                                    <>
                                      {[0, 0.5, 1].map((t, i) => {
                                        const y = pad + (1 - t) * plotH;
                                        return (
                                          <line
                                            key={i}
                                            x1={pad}
                                            y1={y}
                                            x2={w - pad}
                                            y2={y}
                                            stroke="rgba(15,23,42,0.10)"
                                          />
                                        );
                                      })}
                                      <path d={line} fill="none" stroke="rgb(11,31,68)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                      {points.map((p, i) => (
                                        <circle key={i} cx={p.x} cy={p.y} r="2.6" fill="white" stroke="rgb(11,31,68)" strokeWidth="2" />
                                      ))}
                                    </>
                                  );
                                })()}
                              </svg>
                            </div>

                            <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-900/10">
                              <div className="text-xs font-semibold text-slate-600">
                              <Trans
                                en="Revenue (USD)"
                                ru="Выручка (USD)"
                                kk="Түсім (USD)"
                              />
                              </div>
                              <svg
                                className="mt-2 w-full"
                                viewBox="0 0 240 56"
                                aria-hidden="true"
                              >
                                {(() => {
                                  const ys = dashboardSeries.revenue;
                                  const w = 240;
                                  const h = 56;
                                  const pad = 8;
                                  const plotW = w - pad * 2;
                                  const plotH = h - pad * 2;
                                  const min = Math.min(...ys);
                                  const max = Math.max(...ys);
                                  const range = Math.max(1e-9, max - min);
                                  const n = ys.length;

                                  const points = ys.map((v, i) => {
                                    const t = n === 1 ? 0 : i / (n - 1);
                                    const x = pad + t * plotW;
                                    const y = pad + (1 - (v - min) / range) * plotH;
                                    return { x, y };
                                  });

                                  const line = points
                                    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
                                    .join(" ");

                                  return (
                                    <>
                                      {[0, 0.5, 1].map((t, i) => {
                                        const y = pad + (1 - t) * plotH;
                                        return (
                                          <line
                                            key={i}
                                            x1={pad}
                                            y1={y}
                                            x2={w - pad}
                                            y2={y}
                                            stroke="rgba(15,23,42,0.10)"
                                          />
                                        );
                                      })}
                                      <path d={line} fill="none" stroke="rgb(29,78,216)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                      {points.map((p, i) => (
                                        <circle key={i} cx={p.x} cy={p.y} r="2.6" fill="white" stroke="rgb(29,78,216)" strokeWidth="2" />
                                      ))}
                                    </>
                                  );
                                })()}
                              </svg>
                            </div>
                          </div>

                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            <Trans
                              en="This is why operational teams often track order volume as a leading indicator for financial results."
                              ru="Поэтому операционные команды часто отслеживают объём заказов как ведущий индикатор финансовых результатов."
                              kk="Сондықтан операциялық топтар қаржылық нәтижелер үшін жетекші индикатор ретінде тапсырыс көлемін бақылайды."
                            />
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 grid gap-3 md:grid-cols-3">
                        <div className="rounded-2xl border border-slate-900/10 bg-white p-4">
                          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          <Trans
                            en="Data quality guardrails"
                            ru="Ограждения качества данных"
                            kk="Дерек сапасының кепілдіктері"
                          />
                          </div>
                          <div className="mt-2 text-sm font-semibold text-slate-950">
                          <Trans
                            en="When enrichment detects mismatches, records are flagged so KPIs stay trustworthy."
                            ru="Если обогащение находит несоответствия, записи помечаются, чтобы KPI оставались надёжными."
                            kk="Байыту сәйкессіздікті анықтаса, жазбалар белгіленеді, сондықтан KPI сенімді болып қалады."
                          />
                          </div>
                          <div className="mt-3 grid gap-2">
                            <div className="flex items-center gap-3">
                              <span className="size-2 rounded-full bg-navy" />
                              <span className="text-sm text-slate-700">
                              <Trans
                                en="Valid: matches passed checks"
                                ru="Ок: совпадения прошли проверки"
                                kk="Жарамды: тексерістерден өтті"
                              />
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="size-2 rounded-full bg-amber-500" />
                              <span className="text-sm text-slate-700">
                              <Trans
                                en="Needs review: enrichment mismatch flagged"
                                ru="На проверке: обнаружено несоответствие"
                                kk="Қарау керек: сәйкессіздік белгіленді"
                              />
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-slate-900/10 bg-white p-4 md:col-span-2">
                          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          <Trans
                            en="Business action (example)"
                            ru="Бизнес-действие (пример)"
                            kk="Бизнес-әрекет (мысал)"
                          />
                          </div>
                          <div className="mt-2 text-sm font-semibold text-slate-950">
                          <Trans
                            en="Prioritize order volume fixes when revenue drops"
                            ru="При падении выручки — в первую очередь чинить объём заказов"
                            kk="Түсім төмендесе, ең алдымен тапсырыс көлемін түзетуге басымдық беріңіз"
                          />
                          </div>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                          <Trans
                            en="Start by checking ingestion and join quality for the sources that drive order counts. If payment success degrades, review the last enrichment step before KPIs are published."
                            ru="Начните с проверки загрузки и качества объединений для источников, которые формируют количество заказов. Если успешность платежей ухудшается, проверьте последний шаг обогащения перед публикацией KPI."
                            kk="Алдымен тапсырыс санын қалыптастыратын дерек көздеріндегі жүктеу мен біріктіру сапасын тексеріңіз. Төлемдердің сәттілігі төмендесе, KPI жарияланар алдында соңғы байыту қадамын қарап шығыңыз."
                          />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-slate-900/10">
                      <div className="bg-surface px-4 py-3 text-xs font-semibold text-slate-600">
                      <Trans
                        en="Simple table: orders (snapshot)"
                        ru="Простая таблица: заказы (снимок)"
                        kk="Қарапайым кесте: тапсырыстар (көрініс)"
                      />
                      </div>
                      <table className="w-full text-left text-sm">
                        <thead className="sr-only">
                          <tr>
                          <th>
                            <Trans en="Order" ru="Заказ" kk="Тапсырыс" />
                          </th>
                          <th>
                            <Trans en="Customer" ru="Клиент" kk="Клиент" />
                          </th>
                          <th>
                            <Trans en="Status" ru="Статус" kk="Мәртебе" />
                          </th>
                          <th>
                            <Trans en="Total" ru="Итого" kk="Жиыны" />
                          </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-900/10">
                          {[
                            { id: "#1048", customer: "Northwind", status: "Paid", total: "$1,240" },
                            { id: "#1047", customer: "Acme", status: "Paid", total: "$860" },
                            { id: "#1046", customer: "Blue Ridge", status: "Processing", total: "$2,190" },
                            { id: "#1045", customer: "Pine & Co.", status: "Refunded", total: "$320" },
                          ].map((r) => (
                            <tr key={r.id} className="bg-white">
                              <td className="px-4 py-3 font-medium text-slate-950">
                                {r.id}
                              </td>
                              <td className="px-4 py-3 text-slate-700">
                                {r.customer}
                              </td>
                              <td className="px-4 py-3 text-slate-700">
                                <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                                  <Trans
                                    en={r.status}
                                    ru={
                                      r.status === "Paid"
                                        ? "Оплачено"
                                        : r.status === "Processing"
                                          ? "В обработке"
                                          : "Возвращено"
                                    }
                                    kk={
                                      r.status === "Paid"
                                        ? "Төленді"
                                        : r.status === "Processing"
                                          ? "Өңделуде"
                                          : "Қайтарылды"
                                    }
                                  />
                                </span>
                              </td>
                              <td className="px-4 py-3 text-slate-700">
                                {r.total}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : null}
              </article>

              {idx < stages.length - 1 ? (
                <>
                  <div className="flex items-center justify-center text-navy">
                    <div className="grid size-10 place-items-center rounded-full bg-surface ring-1 ring-slate-900/10">
                      <span className="text-xl font-semibold">↓</span>
                    </div>
                  </div>
                </>
              ) : null}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}

