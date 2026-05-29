"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CreditCard,
  Home,
  Send,
  Settings,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import { cn } from "@/lib/utils";

export const dashboardNavItems = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Wallets", href: "/dashboard/wallets", icon: Wallet },
  { label: "Payments", href: "/dashboard/payments", icon: Send },
  { label: "Transactions", href: "/dashboard/transactions", icon: CreditCard },
  { label: "Security", href: "/dashboard/security", icon: ShieldCheck },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-1 p-4">
      {dashboardNavItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-background hover:text-foreground"
            )}
          >
            <Icon className="size-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}