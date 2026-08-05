/**
 * Source unique de vérité pour les sociétés du groupe.
 *
 * RÈGLE N°2 (véracité des participations) — le champ `relation` porte le
 * vocabulaire exact et ne doit être reformulé nulle part ailleurs.
 * RÈGLE N°3 (noms provisoires) — le jour d'un renommage, on ne modifie
 * QUE ce fichier : nom, baseline, URL, slug.
 */

export type LinkStatus = "live" | "external";
export type CompanyId = "france-immeuble" | "team-reno" | "pleinbail";
export type CompanyIcon = "building" | "roller" | "platform";

export interface Company {
  /** Identifiant technique stable (ne change pas lors d'un renommage) */
  id: CompanyId;
  /** Segment d'URL de la page dédiée (/societes/[slug]) */
  slug: string;
  /** Nom affiché — provisoire si `provisionalName` est vrai */
  name: string;
  /** Nom provisoire en attente de renommage (règle n°3) */
  provisionalName: boolean;
  /**
   * Vocabulaire exact de la relation au groupe (règle n°2) :
   * - France Immeuble → « participation historique » (ou « actionnaire de
   *   référence ») — jamais « détient », jamais « filiale », aucun pourcentage
   * - La Team Reno → « filiale »
   * - PleinBail → « création du groupe »
   */
  relation: string;
  /** Variante autorisée du vocabulaire de relation, si applicable */
  relationAlt?: string;
  /** Rôle dans le cycle du groupe (schéma des synergies) */
  cycleRole: string;
  /** Picto associé */
  icon: CompanyIcon;
  baseline: string;
  shortDescription: string;
  longDescription: string;
  /** URL du site réel de la société — liens codés normalement, sans logique « à venir » */
  url: string;
  linkStatus: LinkStatus;
}

export const companies: Company[] = [
  {
    id: "france-immeuble",
    slug: "france-immeuble",
    name: "France Immeuble",
    provisionalName: false,
    relation: "participation historique",
    relationAlt: "actionnaire de référence",
    cycleRole: "Céder",
    icon: "building",
    baseline: "La vente d'immeubles de rapport, en spécialité.",
    shortDescription:
      "Maison de transaction dédiée aux vendeurs d'immeubles de rapport, sur un marché longtemps resté sans acteur spécialisé.",
    longDescription:
      "France Immeuble répond aux vendeurs d'immeubles de rapport, longtemps sans acteur dédié. La société pratique la transaction off-market spécialisée : identification d'acquéreurs qualifiés, discrétion, exécution rigoureuse.",
    url: "https://www.france-immeuble.fr",
    linkStatus: "external",
  },
  {
    id: "team-reno",
    slug: "la-team-reno",
    name: "La Team Reno",
    provisionalName: true,
    relation: "filiale",
    cycleRole: "Valoriser",
    icon: "roller",
    baseline: "La réhabilitation d'immeubles, de bout en bout.",
    shortDescription:
      "Filiale travaux du groupe, dédiée à la réhabilitation d'immeubles, née pour servir les clients historiques.",
    longDescription:
      "La filiale travaux du groupe conduit des réhabilitations d'immeubles pour les détenteurs d'actifs. Née pour servir les clients historiques du groupe, elle structure et pilote les chantiers de bout en bout.",
    url: "https://www.lateamreno.fr",
    linkStatus: "external",
  },
  {
    id: "pleinbail",
    slug: "pleinbail",
    name: "PleinBail",
    provisionalName: false,
    relation: "création du groupe",
    cycleRole: "Louer & investir",
    icon: "platform",
    baseline: "Les annonces de l'immobilier d'investissement.",
    shortDescription:
      "Plateforme d'annonces dédiée à l'immobilier d'investissement, créée pour combler l'absence d'acteur de qualité.",
    longDescription:
      "PleinBail est une plateforme d'annonces dédiée à l'immobilier d'investissement, créée par le groupe pour combler l'absence d'acteur de qualité sur ce segment.",
    // Lien à sens unique (décision propriétaire) : le site groupe pointe vers
    // PleinBail ; aucun lien retour côté PleinBail.
    url: "https://www.pleinbail.fr",
    linkStatus: "external",
  },
];

export function companyBySlug(slug: string): Company | undefined {
  return companies.find((company) => company.slug === slug);
}

/**
 * Sous-bloc de la fiche France Immeuble — jamais une fiche séparée.
 * Nom provisoire, configurable ici (règle n°3).
 */
export const franceImmeubleDivision = {
  name: "France Immeuble Division",
  provisionalName: true,
  baseline: "L'alternative à la vente en bloc.",
  description:
    "Service de vente à la découpe : mise en copropriété et commercialisation lot par lot, présenté comme l'alternative chiffrée à la vente en bloc.",
};

/** Formule générale du groupe (règle n°2) — à reprendre telle quelle. */
export const groupThesis =
  "Grey Stone Capital prend des participations et crée des sociétés immobilières innovantes, créatrices de valeur pour les détenteurs d'actifs.";
