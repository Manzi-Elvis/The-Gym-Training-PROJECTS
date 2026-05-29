"use client";

import { useEffect, useState } from "react";
import { ArrowDownLeft, ArrowUpRight, Plus, Wallet } from "lucide-react";
import { toast } from "sonner";

import { DashboardContainer } from "@/components/dashboard/dashboard-container";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  type DemoWallet,
  getWallets,
  saveWallets,
} from "@/lib/demo/demo-store";

export default function WalletsPage() {
  const [wallets, setWallets] = useState<DemoWallet[]>([]);
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    setWallets(getWallets());
  }, []);

  function addWallet() {
    const cleanCurrency = currency.trim().toUpperCase();

    if (!cleanCurrency) {
      toast.error("Enter a currency code.");
      return;
    }

    if (wallets.some((wallet) => wallet.currency === cleanCurrency)) {
      toast.error("This wallet already exists.");
      return;
    }

    const nextWallets = [
      ...wallets,
      {
        currency: cleanCurrency,
        name: `${cleanCurrency} Wallet`,
        balance: `${cleanCurrency} 0.00`,
        status: "Active",
      },
    ];

    setWallets(nextWallets);
    saveWallets(nextWallets);
    setCurrency("");
    toast.success(`${cleanCurrency} wallet created.`);
  }

  return (
    <DashboardContainer>
      <PageHeader
        label="Wallets"
        title="Multi-currency wallets"
        description="Hold, manage, send, and receive money across multiple currencies."
      />

      <section className="mt-8 rounded-2xl border bg-card p-5 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium">Create wallet</label>
            <Input
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
              placeholder="Example: KES"
            />
          </div>

          <Button onClick={addWallet}>
            <Plus className="mr-2 size-4" />
            Add wallet
          </Button>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {wallets.map((wallet) => (
          <div key={wallet.currency} className="rounded-2xl border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex size-11 items-center justify-center rounded-xl border bg-background">
                <Wallet className="size-5 text-muted-foreground" />
              </div>

              <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                {wallet.status}
              </span>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">{wallet.currency}</p>
            <h2 className="mt-1 font-semibold">{wallet.name}</h2>
            <p className="mt-4 text-2xl font-bold">{wallet.balance}</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" size="sm">
                <ArrowUpRight className="mr-2 size-4" />
                Send
              </Button>

              <Button variant="outline" size="sm">
                <ArrowDownLeft className="mr-2 size-4" />
                Receive
              </Button>
            </div>
          </div>
        ))}
      </section>
    </DashboardContainer>
  );
}