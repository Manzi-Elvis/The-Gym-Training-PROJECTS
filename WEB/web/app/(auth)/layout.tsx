import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen">
        <section className="hidden flex-1 border-r bg-card px-10 py-8 lg:flex lg:flex-col lg:justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Zentry
          </Link>

          <div>
            <h1 className="max-w-md text-4xl font-bold tracking-tight">
              Secure financial access for modern money movement.
            </h1>

            <p className="mt-4 max-w-md text-muted-foreground">
              Sign in to manage wallets, transfers, payments, and intelligent financial tools.
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            Built with security, speed, and trust at the core.
          </p>
        </section>

        <section className="flex flex-1 items-center justify-center px-6 py-10">
          <div className="w-full max-w-md">{children}</div>
        </section>
      </div>
    </main>
  );
}