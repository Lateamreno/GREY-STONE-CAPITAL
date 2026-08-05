/**
 * Contenus de la page d'accueil.
 * Règle n°1 : la holding présente, elle ne vend rien — aucun CTA commercial
 * vers la holding, les liens commerciaux pointent vers les sites des sociétés.
 * Zéro chiffre sur tout le site.
 */

export const home = {
  hero: {
    kicker: "Holding patrimoniale immobilière",
    title:
      "Grey Stone Capital prend des participations et crée des sociétés immobilières innovantes,",
    titleAccent: "créatrices de valeur pour les détenteurs d'actifs.",
  },
  manifesto: {
    kicker: "Manifeste",
    title: "Chaque angle mort du marché appelle une société dédiée.",
    paragraphs: [
      "L'immobilier d'investissement est un marché exigeant, longtemps servi par des acteurs généralistes. Vendre un immeuble de rapport, le réhabiliter, en trouver un : à chaque étape, les détenteurs d'actifs composaient avec des solutions pensées pour d'autres.",
      "Grey Stone Capital s'est construit sur une conviction simple : ces angles morts appellent des sociétés dédiées, conçues pour une seule mission et tenues à un seul niveau d'exigence. Le groupe les réunit, les structure et les développe — chacune opère sur son marché, sous sa propre marque.",
    ],
  },
  companiesSection: {
    kicker: "Les sociétés du groupe",
    title: "Trois maisons, une même exigence.",
  },
  closing: {
    kicker: "Aller plus loin",
    title: "Une holding discrète. Des sociétés qui opèrent.",
    text: "Découvrir la manière dont le groupe crée, structure et développe ses sociétés.",
  },
} as const;
