/**
 * Source unique de vérité pour les sociétés du groupe.
 *
 * RÈGLE N°2 (véracité des participations) — le champ `relation` porte le
 * vocabulaire exact et ne doit être reformulé nulle part ailleurs.
 * RÈGLE N°3 (noms provisoires) — le jour d'un renommage, on ne modifie
 * QUE ce fichier : nom, baseline, URL, slug.
 */

export type CompanyId = "france-immeuble" | "fi-division" | "team-reno" | "pleinbail";
export type CompanyIcon = "building" | "lots" | "roller" | "platform";

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
   * Vocabulaire exact de la relation (règle n°2) :
   * - France Immeuble → « participation historique » (ou « actionnaire de
   *   référence ») — jamais « détient », jamais « filiale », aucun pourcentage
   * - La Team Reno → « filiale »
   * - PleinBail → « création du groupe »
   * - France Immeuble Division → « division de France Immeuble »
   */
  relation: string;
  /** Ligne de rattachement affichée sur la page société */
  relationLabel: string;
  /** Variante autorisée du vocabulaire de relation, si applicable */
  relationAlt?: string;
  /**
   * Métier affiché en étiquette (cartes, menus) — la relation exacte
   * (règle n°2) reste mentionnée dans les textes et sur la page société.
   */
  metier: string;
  /** Rôle dans le système du groupe (schéma des synergies) */
  cycleRole: string;
  /** Picto associé */
  icon: CompanyIcon;
  baseline: string;
  shortDescription: string;
  longDescription: string;
  /** URL du site réel — absente tant que la société n'a pas de site propre */
  url?: string;
}

export const companies: Company[] = [
  {
    id: "france-immeuble",
    slug: "france-immeuble",
    name: "France Immeuble",
    provisionalName: false,
    relation: "participation historique",
    relationLabel: "Grey Stone Capital — participation historique",
    relationAlt: "actionnaire de référence",
    metier: "Spécialiste immeuble",
    cycleRole: "Conseiller",
    icon: "building",
    baseline: "La vente d'immeubles de rapport, en spécialité.",
    shortDescription:
      "Maison de transaction dédiée aux vendeurs d'immeubles de rapport, sur un marché longtemps resté sans acteur spécialisé.",
    longDescription:
      "France Immeuble répond aux vendeurs d'immeubles de rapport, longtemps sans acteur dédié. La société pratique la transaction off-market spécialisée : identification d'acquéreurs qualifiés, discrétion, exécution rigoureuse.",
    url: "https://www.france-immeuble.fr",
  },
  {
    id: "fi-division",
    slug: "france-immeuble-division",
    name: "France Immeuble Division",
    provisionalName: true,
    relation: "division de France Immeuble",
    relationLabel: "Division de France Immeuble",
    metier: "Vente à la découpe",
    cycleRole: "Découper",
    icon: "lots",
    baseline: "L'alternative à la vente en bloc.",
    shortDescription:
      "Mise en copropriété et commercialisation lot par lot : l'alternative chiffrée à la vente en bloc.",
    longDescription:
      "France Immeuble Division prépare et conduit la vente à la découpe : mise en copropriété, puis commercialisation lot par lot. Pour chaque immeuble, l'alternative chiffrée à la vente en bloc — deux voies de cession, un même conseil.",
    // Pas de site propre à ce jour : aucune URL tant que le site n'existe pas.
  },
  {
    id: "team-reno",
    slug: "la-team-reno",
    name: "La Team Reno",
    provisionalName: true,
    relation: "filiale",
    relationLabel: "Grey Stone Capital — filiale",
    metier: "Spécialiste travaux",
    cycleRole: "Valoriser",
    icon: "roller",
    baseline: "La réhabilitation d'immeubles, de bout en bout.",
    shortDescription:
      "Filiale travaux du groupe, dédiée à la réhabilitation d'immeubles, née pour servir les clients historiques.",
    longDescription:
      "La filiale travaux du groupe conduit des réhabilitations d'immeubles pour les détenteurs d'actifs. Née pour servir les clients historiques du groupe, elle structure et pilote les chantiers de bout en bout.",
    url: "https://www.lateamreno.fr",
  },
  {
    id: "pleinbail",
    slug: "pleinbail",
    name: "PleinBail",
    provisionalName: false,
    relation: "création du groupe",
    relationLabel: "Grey Stone Capital — création du groupe",
    metier: "Marketplace d'investissement",
    cycleRole: "Diffuser",
    icon: "platform",
    baseline: "Les annonces de l'immobilier d'investissement.",
    shortDescription:
      "Plateforme d'annonces dédiée à l'immobilier d'investissement, créée pour combler l'absence d'acteur de qualité.",
    longDescription:
      "PleinBail est une plateforme d'annonces dédiée à l'immobilier d'investissement, créée par le groupe pour combler l'absence d'acteur de qualité sur ce segment.",
    // Lien à sens unique (décision propriétaire) : le site groupe pointe vers
    // PleinBail ; aucun lien retour côté PleinBail.
    url: "https://www.pleinbail.fr",
  },
];

export function companyBySlug(slug: string): Company | undefined {
  return companies.find((company) => company.slug === slug);
}

export function companyById(id: CompanyId): Company | undefined {
  return companies.find((company) => company.id === id);
}

/** Formule générale du groupe (règle n°2) — à reprendre telle quelle. */
export const groupThesis =
  "Grey Stone Capital prend des participations et crée des sociétés immobilières innovantes, créatrices de valeur pour les détenteurs d'actifs.";
