"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { DashboardNav } from "@/components/layout/dashboard-nav";
import { MobileDashboardNav } from "@/components/layout/mobile-dashboard-nav";
import { UserMenu } from "@/components/layout/user-menu";
import { isDemoAuthenticated } from "@/lib/auth/demo-auth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    if (!isDemoAuthenticated()) {
      router.push("/login");
    }
  }, [router]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="hidden border-r bg-card lg:block">
          <div className="flex h-16 items-center border-b px-6">
            <Link href="/dashboard" className="text-xl font-bold tracking-tight">
              Zentry
            </Link>
          </div>

          <DashboardNav />
        </aside>

        <section className="flex min-w-0 flex-col">
          <header className="flex h-16 items-center justify-between border-b px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <MobileDashboardNav />
              <p className="text-sm text-muted-foreground">Workspace</p>
            </div>

            <UserMenu />
          </header>

          <div className="flex-1">{children}</div>
        </section>
      </div>
    </main>
  );
}