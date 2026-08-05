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
      "Grey Stone Capital s'est construit sur une conviction simple : ces angles morts appellent des sociétés dédiées, conçues pour une seule mission et tenues à un seul niveau d'exigence. Chacune opère sur son marché, sous sa propre marque.",
    ],
  },
  cycle: {
    kicker: "Le système",
    title: "Un cycle qui s'entretient, des synergies organisées.",
    paragraphs: [
      "Céder, valoriser, louer, réinvestir : chaque société du groupe prend en charge un temps de la vie d'un immeuble de rapport. Un actif cédé trouve son chantier de réhabilitation ; un immeuble valorisé trouve ses locataires et ses investisseurs ; le produit d'une cession se réinvestit dans le suivant.",
      "Au centre, Grey Stone Capital centralise la vision de groupe, organise les synergies entre ses sociétés et prépare les développements futurs.",
    ],
  },
  companiesSection: {
    kicker: "Les sociétés du groupe",
    title: "Trois maisons, un même système.",
  },
  closing: {
    kicker: "Aller plus loin",
    title: "Une vision de groupe, des sociétés qui opèrent.",
    text: "Découvrir la manière dont le groupe crée, structure et développe ses sociétés.",
  },
} as const;
