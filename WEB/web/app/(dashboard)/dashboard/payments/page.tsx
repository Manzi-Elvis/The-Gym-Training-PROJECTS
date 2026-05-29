"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Send } from "lucide-react";

import { DashboardContainer } from "@/components/dashboard/dashboard-container";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addTransaction } from "@/lib/demo/demo-store";

type PaymentInput = {
  recipient: string;
  amount: string;
  currency: string;
  note: string;
};

export default function PaymentsPage() {
  const form = useForm<PaymentInput>({
    defaultValues: {
      recipient: "",
      amount: "",
      currency: "USD",
      note: "",
    },
  });

  function onSubmit(values: PaymentInput) {
    const amount = Number(values.amount);

    if (!values.recipient || !amount || amount <= 0) {
      toast.error("Enter a valid recipient and amount.");
      return;
    }

    addTransaction({
      id: `TXN-${Date.now()}`,
      name: values.note || `Payment to ${values.recipient}`,
      type: "Outgoing",
      amount: `-${values.currency} ${amount.toFixed(2)}`,
      status: "Completed",
    });

    toast.success("Payment created and added to transactions.");
    form.reset({ recipient: "", amount: "", currency: "USD", note: "" });
  }

  return (
    <DashboardContainer>
      <PageHeader
        label="Payments"
        title="Send money"
        description="Create a secure demo payment and see it appear in transaction history."
      />

      <section className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl border bg-background">
            <Send className="size-5 text-muted-foreground" />
          </div>

          <div>
            <h2 className="font-semibold">New payment</h2>
            <p className="text-sm text-muted-foreground">
              Enter recipient and payment details.
            </p>
          </div>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium">Recipient</label>
            <Input placeholder="recipient@example.com" {...form.register("recipient")} />
          </div>

          <div className="grid gap-4 sm:grid-cols-[1fr_140px]">
            <div className="space-y-2">
              <label className="text-sm font-medium">Amount</label>
              <Input type="number" placeholder="100.00" {...form.register("amount")} />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Currency</label>
              <Input {...form.register("currency")} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Note</label>
            <Input placeholder="Payment for project work" {...form.register("note")} />
          </div>

          <Button type="submit" className="w-full">
            Create payment
          </Button>
        </form>
      </section>
    </DashboardContainer>
  );
}