import { FileText, Plus } from "lucide-react";

import { DashboardContainer } from "@/components/dashboard/dashboard-container";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";

const invoices = [
  { id: "INV-001", client: "Acme Studio", amount: "$1,200.00", status: "Paid", due: "May 14, 2026" },
  { id: "INV-002", client: "Nova Labs", amount: "$850.00", status: "Pending", due: "May 20, 2026" },
  { id: "INV-003", client: "Bright Agency", amount: "$2,400.00", status: "Draft", due: "Not sent" },
];

export default function InvoicesPage() {
  return (
    <DashboardContainer>
      <PageHeader
        label="Invoices"
        title="Manage client invoices"
        description="Create, track, and manage professional invoices for clients and businesses."
        action={
          <Button>
            <Plus className="mr-2 size-4" />
            New invoice
          </Button>
        }
      />

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="rounded-2xl border bg-card p-5 shadow-sm">
            <FileText className="size-5 text-muted-foreground" />

            <p className="mt-5 text-sm text-muted-foreground">{invoice.id}</p>
            <h2 className="mt-1 font-semibold">{invoice.client}</h2>
            <p className="mt-2 text-sm text-muted-foreground">Due: {invoice.due}</p>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-xl font-bold">{invoice.amount}</p>
              <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                {invoice.status}
              </span>
            </div>
          </div>
        ))}
      </section>
    </DashboardContainer>
  );
}