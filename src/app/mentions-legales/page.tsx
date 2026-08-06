import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Grey Stone Capital.",
  robots: { index: false },
};

/**
 * ⚠️ Emplacements à compléter avec les informations du propriétaire
 * (raison sociale exacte, siège, email) avant mise en production.
 */
const A_COMPLETER = "[à compléter]";

const sections = [
  {
    title: "Éditeur du site",
    lines: [
      `Le présent site est édité par ${A_COMPLETER} (Grey Stone Capital), société dont le siège social est situé ${A_COMPLETER}.`,
      `Directeur de la publication : ${A_COMPLETER}.`,
      `Contact : ${A_COMPLETER}.`,
    ],
  },
  {
    title: "Hébergement",
    lines: [
      "Le site est hébergé par Vercel Inc., dont le siège est situé à Covina, Californie, États-Unis (vercel.com).",
    ],
  },
  {
    title: "Propriété intellectuelle",
    lines: [
      "L'ensemble des contenus du site (textes, identité visuelle, schémas) est la propriété de l'éditeur, sauf mention contraire. Toute reproduction sans autorisation préalable est interdite.",
      "Les photographies d'illustration proviennent de la plateforme Unsplash et sont utilisées conformément à sa licence.",
    ],
  },
  {
    title: "Données personnelles",
    lines: [
      "Le site ne collecte aucune donnée personnelle : il ne comporte ni formulaire, ni traceur publicitaire, ni cookie de suivi.",
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
        Informations
      </p>
      <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight text-creme">
        Mentions légales
      </h1>
      <div className="mt-14 flex max-w-2xl flex-col gap-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-bronze">
              {section.title}
            </h2>
            <div className="flex flex-col gap-2">
              {section.lines.map((line) => (
                <p key={line} className="text-sm leading-relaxed text-gris">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
