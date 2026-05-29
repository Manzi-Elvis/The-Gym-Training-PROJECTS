import { Brain, CreditCard, Globe2, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Global payments",
    description: "Send and receive money across borders with a fast, modern payment experience.",
    icon: Globe2,
  },
  {
    title: "Multi-currency wallets",
    description: "Hold, manage, and move money in different currencies from one clean dashboard.",
    icon: CreditCard,
  },
  {
    title: "Security-first design",
    description: "Built with authentication, audit logs, risk checks, and financial safety in mind.",
    icon: ShieldCheck,
  },
  {
    title: "AI financial automation",
    description: "Use intelligent insights for fraud detection, spending patterns, and smarter decisions.",
    icon: Brain,
  },
];

export function FeaturesSection() {
  return (
    <section id="products" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground">
            Built for modern finance
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything needed to move, manage, and automate money.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border bg-card p-6 shadow-sm"
              >
                <div className="mb-5 flex size-11 items-center justify-center rounded-xl border bg-background">
                  <Icon className="size-5" />
                </div>

                <h3 className="text-lg font-semibold">{feature.title}</h3>

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