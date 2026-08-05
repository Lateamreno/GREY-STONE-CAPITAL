import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le groupe",
  description:
    "Histoire, vision et thèse d'investissement du groupe Grey Stone Capital.",
};

export default function GroupePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
        Le groupe
      </p>
      <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-creme">
        Une holding discrète, des sociétés qui opèrent.
      </h1>
      <p className="mt-8 max-w-2xl leading-relaxed text-gris">
        Le groupe Grey Stone Capital identifie des angles morts du marché
        immobilier d&rsquo;investissement, puis crée et développe des sociétés
        qui y répondent. Cette page sera enrichie lors d&rsquo;un prochain
        jalon.
      </p>
    </section>
  );
}
