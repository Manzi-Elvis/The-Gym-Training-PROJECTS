import { LockKeyhole, Radar, ShieldCheck } from "lucide-react";

const securityItems = [
  "Multi-factor authentication",
  "Passkeys and secure sessions",
  "Audit logs for sensitive actions",
  "Fraud and risk monitoring",
  "Rate limiting and API protection",
  "Ledger-first financial correctness",
];

export function SecuritySection() {
  return (
    <section id="security" className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Security-first fintech architecture
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Built around trust, protection, and financial correctness.
          </h2>

          <p className="mt-5 max-w-xl text-muted-foreground">
            Zentry is designed with strong authentication, risk checks, audit
            trails, and ledger-first money movement from the beginning.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {securityItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3 text-sm"
              >
                <ShieldCheck className="size-4 text-muted-foreground" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border bg-card p-6 shadow-sm">
          <div className="grid gap-4">
            <div className="rounded-2xl border bg-background p-5">
              <LockKeyhole className="mb-4 size-6" />
              <h3 className="font-semibold">Protected access</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Secure login, MFA, passkeys, session control, and suspicious
                activity detection.
              </p>
            </div>

            <div className="rounded-2xl border bg-background p-5">
              <Radar className="mb-4 size-6" />
              <h3 className="font-semibold">Risk-aware payments</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every sensitive action can be checked against fraud signals,
                device history, velocity limits, and transaction patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}