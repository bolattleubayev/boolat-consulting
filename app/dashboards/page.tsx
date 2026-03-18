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
    <div className="rounded-2xl border border-slate-900/10 bg-white p-6">
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
    <section className="bg-white">
      <Container className="py-16 sm:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Dashboards (demo)"
            title="Sample analytics with real charts."
            description="Dummy data for now, powered by a modern chart library. This shows the look and feel of a clean analytics experience."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="primary">
              Request a custom dashboard
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Analytics services
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Monthly revenue" value="$248k" change="+12.4%" />
          <StatCard label="Orders" value="1,685" change="+6.2%" />
          <StatCard label="Avg order value" value="$147" change="+1.3%" />
          <StatCard label="Refund rate" value="0.8%" change="−0.1%" />
        </div>

        <div className="mt-10">
          <DashboardDemoClient data={[...demoData]} />
        </div>

        <div className="mt-10 rounded-3xl border border-slate-900/10 bg-white p-6">
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
      </Container>
    </section>
  );
}

