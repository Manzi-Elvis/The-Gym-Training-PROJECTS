"use client";

import { useEffect, useMemo, useState } from "react";
import { CreditCard, Send, ShieldCheck, Wallet } from "lucide-react";

import { DashboardContainer } from "@/components/dashboard/dashboard-container";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import {
  type DemoTransaction,
  type DemoWallet,
  getTransactions,
  getWallets,
} from "@/lib/demo/demo-store";

export default function DashboardPage() {
  const [wallets, setWallets] = useState<DemoWallet[]>([]);
  const [transactions, setTransactions] = useState<DemoTransaction[]>([]);

  useEffect(() => {
    setWallets(getWallets());
    setTransactions(getTransactions());
  }, []);

  const recentTransactions = transactions.slice(0, 4);

  const stats = useMemo(
    () => [
      {
        title: "Total balance",
        value: "$12,840.50",
        description: "Demo balance across wallets",
        icon: Wallet,
      },
      {
        title: "Transactions",
        value: String(transactions.length),
        description: "Saved demo activity",
        icon: Send,
      },
      {
        title: "Active wallets",
        value: String(wallets.length),
        description: "Available wallet accounts",
        icon: CreditCard,
      },
      {
        title: "Security score",
        value: "96%",
        description: "Strong account protection",
        icon: ShieldCheck,
      },
    ],
    [transactions.length, wallets.length]
  );

  return (
    <DashboardContainer>
      <PageHeader
        label="Welcome back"
        title="Financial dashboard"
        description="Track demo balances, transfers, wallet activity, and security from one clean workspace."
      />

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Wallet overview</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Your active demo wallets.
          </p>

          <div className="mt-6 space-y-4">
            {wallets.map((wallet) => (
              <div
                key={wallet.currency}
                className="flex items-center justify-between gap-4 rounded-xl border bg-background px-4 py-3"
              >
                <div>
                  <p className="font-medium">{wallet.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {wallet.currency}
                  </p>
                </div>

                <p className="text-right font-semibold">{wallet.balance}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Recent activity</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Latest demo financial movements.
          </p>

          <div className="mt-6 space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between gap-4 rounded-xl border bg-background px-4 py-3"
              >
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {transaction.status}
                  </p>
                </div>

                <p className="font-semibold">{transaction.amount}</p>
              </div>
            ))}

            {recentTransactions.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No transactions yet.
              </p>
            )}
          </div>
        </div>
      </section>
    </DashboardContainer>
  );
}