import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact corporate du groupe Grey Stone Capital : partenariats, presse, opportunités d'investissement.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
        Contact
      </p>
      <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-creme">
        Contact corporate.
      </h1>
      <p className="mt-8 max-w-2xl leading-relaxed text-gris">
        Partenariats, presse, opportunités d&rsquo;investissement. Le
        formulaire de contact sera mis en place lors d&rsquo;un prochain
        jalon. Pour toute demande concernant l&rsquo;activité d&rsquo;une
        société du groupe, adressez-vous directement à la société concernée.
      </p>
    </section>
  );
}
