"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Point = {
  date: string;
  revenue: number;
  orders: number;
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCompact(value: number) {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

function ChartCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-slate-900/10 bg-white p-6 shadow-sm shadow-slate-900/5">
      <div className="flex items-center justify-between gap-6">
        <div>
          <div className="text-sm font-semibold text-slate-950">{title}</div>
          <div className="mt-1 text-sm text-slate-600">{subtitle}</div>
        </div>
        <div className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-900/10">
          Last 12 months
        </div>
      </div>
      <div className="mt-6 h-64">{children}</div>
    </div>
  );
}

export function DashboardDemo({ data }: { data: Point[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <ChartCard title="Revenue" subtitle="Monthly revenue (USD)">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <LineChart data={data} margin={{ top: 5, right: 12, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="rgba(15,23,42,0.08)" vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "rgba(15,23,42,0.55)", fontSize: 12 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: "rgba(15,23,42,0.55)", fontSize: 12 }}
                tickFormatter={(v) => formatCompact(v)}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 16,
                  border: "1px solid rgba(15,23,42,0.10)",
                  background: "#fff",
                  boxShadow: "0 20px 50px rgba(15,23,42,0.12)",
                }}
                labelStyle={{ color: "rgba(15,23,42,0.8)", fontWeight: 600 }}
                formatter={(value) => formatCurrency(Number(value))}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#0b1f44"
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="lg:col-span-5">
        <ChartCard title="Orders" subtitle="Monthly orders">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <BarChart data={data} margin={{ top: 5, right: 12, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="rgba(15,23,42,0.08)" vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "rgba(15,23,42,0.55)", fontSize: 12 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: "rgba(15,23,42,0.55)", fontSize: 12 }}
                tickFormatter={(v) => formatCompact(v)}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 16,
                  border: "1px solid rgba(15,23,42,0.10)",
                  background: "#fff",
                  boxShadow: "0 20px 50px rgba(15,23,42,0.12)",
                }}
                labelStyle={{ color: "rgba(15,23,42,0.8)", fontWeight: 600 }}
                formatter={(value) => formatCompact(Number(value))}
              />
              <Bar dataKey="orders" fill="#123b7a" radius={[10, 10, 4, 4]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

export default DashboardDemo;

