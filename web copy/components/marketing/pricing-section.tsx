import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Multi-currency wallets",
  "Secure transfers",
  "AI financial insights",
  "Fraud monitoring",
  "Developer APIs",
];

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Simple pricing
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Start free. Scale when you grow.
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-md rounded-3xl border bg-card p-8 shadow-sm">
          <h3 className="text-xl font-semibold">Starter</h3>

          <p className="mt-3 text-sm text-muted-foreground">
            For individuals, freelancers, and early businesses.
          </p>

          <div className="mt-6 flex items-end gap-2">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-muted-foreground">/ month</span>
          </div>

          <Button className="mt-8 w-full" size="lg">
            Get started
          </Button>

          <div className="mt-8 space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-sm">
                <Check className="size-4 text-muted-foreground" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}