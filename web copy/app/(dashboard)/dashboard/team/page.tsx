import { Crown, Plus, ShieldCheck, UserCog, UsersRound } from "lucide-react";

import { DashboardContainer } from "@/components/dashboard/dashboard-container";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";

const members = [
  {
    name: "Elvis Manzi",
    email: "elvis@example.com",
    role: "Owner",
    status: "Active",
    icon: Crown,
  },
  {
    name: "Finance Manager",
    email: "finance@zentry.app",
    role: "Finance",
    status: "Invited",
    icon: ShieldCheck,
  },
  {
    name: "Developer",
    email: "dev@zentry.app",
    role: "Developer",
    status: "Active",
    icon: UserCog,
  },
];

const roles = [
  "Owner has full workspace access.",
  "Finance can manage wallets, invoices, and payments.",
  "Developer can manage API keys and webhooks.",
];

export default function TeamPage() {
  return (
    <DashboardContainer>
      <PageHeader
        label="Team"
        title="Team management"
        description="Invite teammates, assign roles, and control access across your financial workspace."
        action={
          <Button>
            <Plus className="mr-2 size-4" />
            Invite member
          </Button>
        }
      />

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {members.map((member) => {
          const Icon = member.icon;

          return (
            <div key={member.email} className="rounded-2xl border bg-card p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl border bg-background">
                  <Icon className="size-5 text-muted-foreground" />
                </div>

                <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                  {member.status}
                </span>
              </div>

              <h2 className="mt-6 font-semibold">{member.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{member.email}</p>

              <div className="mt-5 rounded-xl border bg-background px-4 py-3">
                <p className="text-sm text-muted-foreground">Role</p>
                <p className="mt-1 font-medium">{member.role}</p>
              </div>
            </div>
          );
        })}
      </section>

      <section className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <UsersRound className="size-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold">Role permissions</h2>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {roles.map((role) => (
            <div key={role} className="rounded-xl border bg-background p-4 text-sm text-muted-foreground">
              {role}
            </div>
          ))}
        </div>
      </section>
    </DashboardContainer>
  );
}