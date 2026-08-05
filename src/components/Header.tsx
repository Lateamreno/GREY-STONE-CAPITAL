import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ligne bg-noir/85 backdrop-blur-md">
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

        <nav className="flex items-center gap-4 sm:gap-8">
          <Link
            href="/groupe"
            className="text-sm text-gris transition-colors hover:text-creme"
          >
            Le groupe
          </Link>
          <Link
            href="/participations"
            className="rounded-full border border-bronze/60 px-5 py-2 text-sm font-medium text-bronze transition-colors hover:border-bronze-clair hover:text-bronze-clair"
          >
            Participations
          </Link>
        </nav>
      </div>
    </header>
  );
}
