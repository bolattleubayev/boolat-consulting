"use client";

import dynamic from "next/dynamic";

const DashboardDemo = dynamic(() => import("@/components/DashboardDemo"), {
  ssr: false,
  loading: () => (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="h-[340px] rounded-3xl border border-slate-900/10 bg-white p-6 lg:col-span-7" />
      <div className="h-[340px] rounded-3xl border border-slate-900/10 bg-white p-6 lg:col-span-5" />
    </div>
  ),
});

export function DashboardDemoClient({
  data,
}: {
  data: { date: string; revenue: number; orders: number }[];
}) {
  return <DashboardDemo data={data} />;
}

