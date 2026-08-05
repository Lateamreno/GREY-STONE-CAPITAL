import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-6 py-32">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
        Page introuvable
      </p>
      <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight text-creme">
        Cette page n&rsquo;existe pas.
      </h1>
      <Link
        href="/"
        className="mt-10 rounded-full border border-bronze/60 px-7 py-3 text-sm font-medium text-bronze transition-colors hover:border-bronze-clair hover:text-bronze-clair"
      >
        Retour à l&rsquo;accueil
      </Link>
    </section>
  );
}
