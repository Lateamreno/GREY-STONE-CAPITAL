/**
 * Contenus de la page unique du groupe (accueil).
 * Règle n°1 : la holding présente, elle ne vend rien — aucun CTA commercial
 * vers la holding, les liens commerciaux pointent vers les sites des sociétés.
 * Règle n°2 : vocabulaire exact des participations. Zéro chiffre sur tout le site.
 */

export const home = {
  hero: {
    kicker: "Holding patrimoniale immobilière",
    title:
      "Grey Stone Capital prend des participations et crée des sociétés immobilières innovantes,",
    titleAccent: "créatrices de valeur pour les détenteurs d'actifs.",
  },
  groupe: {
    kicker: "Le groupe",
    title: "Chaque angle mort du marché appelle une société dédiée.",
    paragraphs: [
      "L'immobilier d'investissement est un marché exigeant, longtemps servi par des acteurs généralistes. Vendre un immeuble de rapport, le réhabiliter, en trouver un : à chaque étape, les détenteurs d'actifs composaient avec des solutions pensées pour d'autres.",
      "Le groupe s'est constitué autour d'une participation historique dans France Immeuble, maison de transaction dédiée aux vendeurs d'immeubles de rapport. De cette position d'actionnaire de référence est née une lecture précise du marché : ses usages, ses silences, ses manques.",
      "Cette lecture est devenue une méthode. Là où un besoin réel des détenteurs d'actifs restait sans réponse dédiée, le groupe a créé la société qui y répond — une filiale travaux pour la réhabilitation d'immeubles, une division dédiée à la vente à la découpe, une plateforme d'annonces pour l'immobilier d'investissement. Chaque société est née d'un manque constaté, jamais d'une opportunité de circonstance.",
    ],
  },
  systeme: {
    kicker: "Le système",
    title: "Un cycle qui s'entretient, des synergies organisées.",
    pullQuote:
      "Grey Stone Capital prend des participations et crée des sociétés immobilières innovantes, créatrices de valeur pour les détenteurs d'actifs.",
    paragraphs: [
      "Un immeuble de rapport ne se vend pas comme un appartement ; il ne se réhabilite pas comme une maison ; il ne se cherche pas sur les portails grand public. Chaque geste demande une spécialité — et chaque société du groupe en porte une.",
      "Conseiller une cession, valoriser un immeuble, le découper en lots, le diffuser auprès des investisseurs : chaque société porte un savoir-faire — et chacune peut servir les clients de toutes les autres. Un immeuble conseillé trouve son chantier ; un immeuble valorisé trouve ses lots, ses locataires ou ses investisseurs ; le produit d'une cession se réinvestit dans le suivant.",
      "Au centre, Grey Stone Capital centralise la vision de groupe, organise les synergies entre ses sociétés et prépare les développements futurs. Ce qu'elle apporte à chacune dépasse le capital : une exigence commune, une infrastructure partagée et le temps nécessaire pour construire une position de référence.",
    ],
  },
  operer: {
    kicker: "Manière d'opérer",
    title: "Le groupe crée, structure, digitalise.",
    items: [
      {
        icon: "create",
        title: "Créer",
        text: "Identifier un angle mort du marché, dessiner la société qui y répond, la porter jusqu'à ses premiers clients.",
      },
      {
        icon: "layers",
        title: "Structurer",
        text: "Doter chaque société d'une marque claire, d'une organisation propre et d'une discipline d'exécution constante.",
      },
      {
        icon: "screen",
        title: "Digitaliser",
        text: "Équiper chaque métier d'outils numériques à la hauteur de ses standards, du premier contact à la livraison.",
      },
    ],
  },
  societesSection: {
    kicker: "Les sociétés du groupe",
    title: "Quatre maisons, un même système.",
  },
  closing: {
    kicker: "Aller plus loin",
    title: "Des sociétés qui opèrent, un système qui les relie.",
    text: "Découvrir chaque société du groupe : son marché, sa réponse, sa place dans le système.",
  },
} as const;
