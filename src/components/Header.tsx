import Link from "next/link";

const navItems = [
  { href: "/groupe", label: "Le groupe" },
  { href: "/participations", label: "Participations" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ligne bg-noir/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="group flex items-center gap-3">
          <span
            aria-hidden
            className="block h-8 w-px bg-bronze transition-colors group-hover:bg-bronze-clair"
          />
          <span className="font-display text-sm font-bold uppercase tracking-[0.22em] text-creme">
            Grey Stone Capital
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden text-sm text-gris transition-colors hover:text-creme sm:block"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-bronze px-5 py-2 text-sm font-medium text-bronze transition-colors hover:border-bronze-clair hover:text-bronze-clair"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
