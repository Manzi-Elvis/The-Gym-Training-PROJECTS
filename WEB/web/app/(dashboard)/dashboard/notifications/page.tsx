import { Bell, CheckCircle2, CreditCard, ShieldAlert } from "lucide-react";

import { DashboardContainer } from "@/components/dashboard/dashboard-container";
import { PageHeader } from "@/components/dashboard/page-header";

const notifications = [
  {
    title: "Payment received",
    description: "You received $980 from Client invoice.",
    time: "2 minutes ago",
    type: "Payment",
    icon: CheckCircle2,
  },
  {
    title: "Security check",
    description: "New login detected from a trusted device.",
    time: "18 minutes ago",
    type: "Security",
    icon: ShieldAlert,
  },
  {
    title: "Wallet update",
    description: "Your USD wallet balance was updated.",
    time: "1 hour ago",
    type: "Wallet",
    icon: CreditCard,
  },
  {
    title: "Notification preferences",
    description: "Email and push notifications are currently enabled.",
    time: "Today",
    type: "System",
    icon: Bell,
  },
];

export default function NotificationsPage() {
  return (
    <DashboardContainer>
      <div className="max-w-4xl">
        <PageHeader
          label="Notifications"
          title="Recent alerts"
          description="Stay updated on payments, account activity, wallet changes, and security events."
        />

        <section className="mt-8 space-y-4">
          {notifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border bg-card p-5 shadow-sm"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-background">
                  <Icon className="size-5 text-muted-foreground" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="font-semibold">{item.title}</h2>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>

                  <span className="mt-4 inline-flex rounded-full border px-3 py-1 text-xs text-muted-foreground">
                    {item.type}
                  </span>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </DashboardContainer>
  );
}