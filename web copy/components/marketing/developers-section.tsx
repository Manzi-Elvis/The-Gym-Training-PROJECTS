import { Code2, KeyRound, Webhook } from "lucide-react";

const developerFeatures = [
  {
    title: "Developer APIs",
    description: "Clean APIs for payments, wallets, invoices, and financial automation.",
    icon: Code2,
  },
  {
    title: "API keys",
    description: "Secure merchant keys with permissions, rotation, and usage visibility.",
    icon: KeyRound,
  },
  {
    title: "Webhooks",
    description: "Reliable event delivery for payments, refunds, invoices, and subscriptions.",
    icon: Webhook,
  },
];

export function DevelopersSection() {
  return (
    <section id="developers" className="px-6 py-24">
      <div className="mx-auto max-w-7xl rounded-3xl border bg-card p-8 shadow-sm md:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground">
            Built for developers
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Integrate payments and financial workflows with clean APIs.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {developerFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="rounded-2xl border bg-background p-6">
                <Icon className="mb-5 size-6" />
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}