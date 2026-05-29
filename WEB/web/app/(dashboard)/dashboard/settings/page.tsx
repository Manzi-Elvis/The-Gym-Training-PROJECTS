"use client";

import { useState } from "react";
import { Bell, Building2, UserRound } from "lucide-react";
import { toast } from "sonner";

import { DashboardContainer } from "@/components/dashboard/dashboard-container";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: "Elvis Manzi",
    email: "elvis@example.com",
    business: "Zentry Labs",
    country: "Rwanda",
  });

  function saveSettings() {
    toast.success("Settings saved successfully.");
  }

  return (
    <DashboardContainer>
      <div className="max-w-4xl">
        <PageHeader
          label="Settings"
          title="Account settings"
          description="Manage profile, business details, notification preferences, and workspace settings."
        />

        <section className="mt-8 space-y-6">
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <UserRound className="size-5 text-muted-foreground" />
              <h2 className="font-semibold">Profile</h2>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Input
                value={profile.name}
                onChange={(event) =>
                  setProfile((current) => ({
                    ...current,
                    name: event.target.value,
                  }))
                }
                placeholder="Full name"
              />

              <Input
                value={profile.email}
                onChange={(event) =>
                  setProfile((current) => ({
                    ...current,
                    email: event.target.value,
                  }))
                }
                placeholder="Email"
              />
            </div>

            <Button className="mt-6" onClick={saveSettings}>
              Save profile
            </Button>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Building2 className="size-5 text-muted-foreground" />
              <h2 className="font-semibold">Business profile</h2>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Input
                value={profile.business}
                onChange={(event) =>
                  setProfile((current) => ({
                    ...current,
                    business: event.target.value,
                  }))
                }
                placeholder="Business name"
              />

              <Input
                value={profile.country}
                onChange={(event) =>
                  setProfile((current) => ({
                    ...current,
                    country: event.target.value,
                  }))
                }
                placeholder="Country"
              />
            </div>

            <Button className="mt-6" variant="outline" onClick={saveSettings}>
              Save business details
            </Button>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Bell className="size-5 text-muted-foreground" />
              <h2 className="font-semibold">Notifications</h2>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              Payment alerts, security updates, account activity, and risk alerts are enabled.
            </p>
          </div>
        </section>
      </div>
    </DashboardContainer>
  );
}