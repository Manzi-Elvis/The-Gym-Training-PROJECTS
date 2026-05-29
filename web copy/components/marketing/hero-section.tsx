import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          AI-powered global payments
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Move money smarter with Zentry.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Send, receive, automate, and manage money globally with a fast,
          secure, and intelligent financial platform.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/signup">Start building</Link>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <Link href="#security">Explore security</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}