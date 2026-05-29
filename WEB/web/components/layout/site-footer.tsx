import Link from "next/link";

const links = [
  { label: "Products", href: "#products" },
  { label: "Security", href: "#security" },
  { label: "Developers", href: "#developers" },
  { label: "Pricing", href: "#pricing" },
];

export function SiteFooter() {
  return (
    <footer className="border-t px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="text-lg font-bold tracking-tight">
            Zentry
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">
            Tap. Send. Done.
          </p>
        </div>

        <nav className="flex flex-wrap gap-5 text-sm text-muted-foreground">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}