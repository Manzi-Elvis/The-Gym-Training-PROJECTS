import { BarChart3, TrendingUp, Wallet } from "lucide-react";

import { DashboardContainer } from "@/components/dashboard/dashboard-container";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/dashboard/stat-card";

const metrics = [
  { title: "Revenue tracked", value: "$18,420.00", description: "+18% this month", icon: TrendingUp },
  { title: "Wallet growth", value: "24%", description: "Across active balances", icon: Wallet },
  { title: "Transfer volume", value: "$42,890.00", description: "Total processed value", icon: BarChart3 },
];

export default function AnalyticsPage() {
  return (
    <DashboardContainer>
      <PageHeader
        label="Analytics"
        title="Financial insights"
        description="Understand wallet growth, transfer activity, revenue movement, and financial performance."
      />

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <StatCard key={metric.title} {...metric} />
        ))}
      </section>

      <section className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Monthly activity</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Overview of processed activity across the last six months.
        </p>

        <div className="mt-8 grid h-64 grid-cols-6 items-end gap-3">
          {[45, 70, 55, 90, 65, 82].map((height, index) => (
            <div key={index} className="flex h-full items-end rounded-xl bg-background p-2">
              <div className="w-full rounded-lg bg-primary" style={{ height: `${height}%` }} />
            </div>
          ))}
        </div>
      </section>
    </DashboardContainer>
  );
}