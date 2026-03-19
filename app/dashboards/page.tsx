import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { DashboardDemoClient } from "@/components/DashboardDemoClient";

export const metadata = {
  title: "Dashboards",
};

const demoData = [
  { date: "Apr", revenue: 142000, orders: 980 },
  { date: "May", revenue: 155000, orders: 1040 },
  { date: "Jun", revenue: 149000, orders: 1015 },
  { date: "Jul", revenue: 171000, orders: 1180 },
  { date: "Aug", revenue: 188000, orders: 1260 },
  { date: "Sep", revenue: 176000, orders: 1205 },
  { date: "Oct", revenue: 204000, orders: 1380 },
  { date: "Nov", revenue: 221000, orders: 1495 },
  { date: "Dec", revenue: 239000, orders: 1605 },
  { date: "Jan", revenue: 212000, orders: 1410 },
  { date: "Feb", revenue: 233000, orders: 1550 },
  { date: "Mar", revenue: 248000, orders: 1685 },
] as const;

function StatCard({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)]">
      <div className="text-sm font-medium text-slate-600">{label}</div>
      <div className="mt-2 flex items-end justify-between gap-4">
        <div className="text-3xl font-semibold tracking-tight text-slate-950">
          {value}
        </div>
        <div className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
          {change}
        </div>
      </div>
    </div>
  );
}

export default function DashboardsPage() {
  return (
    <section className="border-b border-slate-900/8 bg-white">
      <Container className="py-20 sm:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Dashboards (demo)"
            title="What useful business dashboards can look like."
            description="This demo uses sample data to show a practical dashboard structure: clear KPIs, trend charts, and transaction-level detail."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="primary">
              Book a dashboard consult
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              See analytics services
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid gap-6 rounded-3xl border border-slate-900/10 bg-surface p-6 shadow-sm shadow-slate-900/5 md:grid-cols-3">
          {[
            {
              label: "Built for",
              value: "Owners and managers who need clear weekly visibility",
            },
            {
              label: "Covers",
              value: "Revenue, orders, operational trends, and status breakdowns",
            },
            {
              label: "Designed to",
              value: "Reduce reporting overhead and improve decision speed",
            },
          ].map((x) => (
            <div
              key={x.label}
              className="rounded-2xl bg-white p-5 shadow-sm shadow-slate-900/5 ring-1 ring-slate-900/10"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {x.label}
              </div>
              <div className="mt-2 text-sm font-medium leading-6 text-slate-800">
                {x.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Monthly revenue" value="$248k" change="+12.4%" />
          <StatCard label="Orders" value="1,685" change="+6.2%" />
          <StatCard label="Avg order value" value="$147" change="+1.3%" />
          <StatCard label="Refund rate" value="0.8%" change="−0.1%" />
        </div>

        <div className="mt-10">
          <DashboardDemoClient data={[...demoData]} />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-900/10 bg-surface p-6 shadow-sm shadow-slate-900/5">
            <h3 className="text-base font-semibold text-slate-950">
              What a dashboard engagement includes
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
              {[
                "KPI definition workshop with business owners",
                "Data source mapping and quality checks",
                "Dashboard design around real decisions and routines",
                "Handover documentation for ongoing team use",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-2 size-1.5 rounded-full bg-navy/70" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5">
            <h3 className="text-base font-semibold text-slate-950">
              Typical questions we answer
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
              {[
                "Which numbers should leadership review every week?",
                "Where are we losing margin or operational efficiency?",
                "What changed this month and what needs action now?",
                "Which teams need support based on current metrics?",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-2 size-1.5 rounded-full bg-navy/70" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-950">Orders</div>
              <div className="mt-1 text-sm text-slate-600">
                Recent transactions (dummy data)
              </div>
            </div>
            <div className="text-xs text-slate-500">Updated 2 hours ago</div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-slate-900/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface text-xs font-semibold text-slate-600">
                <tr>
                  <th className="px-4 py-3">Order</th>
                  <th className="px-4 py-3">Customer</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Total</th>
                  <th className="px-4 py-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900/10">
                {[
                  {
                    id: "#1048",
                    customer: "Northwind Co.",
                    status: "Paid",
                    total: "$1,240.00",
                    date: "Mar 12",
                  },
                  {
                    id: "#1047",
                    customer: "Acme Industries",
                    status: "Paid",
                    total: "$860.00",
                    date: "Mar 11",
                  },
                  {
                    id: "#1046",
                    customer: "Blue Ridge LLC",
                    status: "Processing",
                    total: "$2,190.00",
                    date: "Mar 10",
                  },
                  {
                    id: "#1045",
                    customer: "Pine & Co.",
                    status: "Refunded",
                    total: "$320.00",
                    date: "Mar 08",
                  },
                  {
                    id: "#1044",
                    customer: "Evergreen Studio",
                    status: "Paid",
                    total: "$540.00",
                    date: "Mar 06",
                  },
                ].map((r) => (
                  <tr key={r.id} className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-950">
                      {r.id}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{r.customer}</td>
                    <td className="px-4 py-3">
                      <span
                        className={
                          r.status === "Paid"
                            ? "inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
                            : r.status === "Processing"
                              ? "inline-flex rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700"
                              : "inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                        }
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{r.total}</td>
                    <td className="px-4 py-3 text-slate-700">{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-8 text-sm leading-7 text-slate-600">
          Want this adapted to your business? We work directly with your team to
          define KPIs, clean the data flow, and ship dashboards people use.
        </p>
      </Container>
    </section>
  );
}

