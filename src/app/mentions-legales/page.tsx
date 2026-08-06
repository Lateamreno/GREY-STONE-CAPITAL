import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Grey Stone Capital.",
};

/**
 * Seule page du site autorisée à porter des chiffres (identifiants
 * légaux obligatoires) — exception actée au « zéro chiffre » de la charte.
 */
const sections = [
  {
    title: "Éditeur du site",
    lines: [
      "Le présent site est édité par GREY STONE CAPITAL, société au capital social de 100 €, dont le siège social est situé 66 avenue des Champs-Élysées, 75008 Paris, France, immatriculée sous le numéro 952 623 320.",
      "Directeur de la publication : Marc-Antoine Voci, Président.",
      "Contact : par courrier au siège social.",
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
