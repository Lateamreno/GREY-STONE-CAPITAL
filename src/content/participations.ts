/**
 * Contenus de la page « Participations ».
 * Une fiche par société : rôle (vocabulaire exact, règle n°2), problème de
 * marché, réponse apportée, lien vers le site. La découpe apparaît UNIQUEMENT
 * en sous-bloc de la fiche France Immeuble.
 */

export interface Fiche {
  companyId: "france-immeuble" | "team-reno" | "pleinbail";
  marche: string;
  reponse: string;
}

export const participations = {
  hero: {
    kicker: "Participations",
    title: "Des sociétés dédiées, là où le marché n'offrait rien.",
    intro:
      "Le groupe Grey Stone Capital réunit et développe des sociétés immobilières innovantes. Chacune est née d'un angle mort du marché de l'investissement ; chacune opère sous sa propre marque, avec ses propres équipes.",
  },
  labels: {
    marche: "Le marché",
    reponse: "La réponse",
    visit: "Visiter le site",
  },
  fiches: [
    {
      companyId: "france-immeuble",
      marche:
        "Les vendeurs d'immeubles de rapport sont longtemps restés sans acteur dédié. Céder un actif singulier supposait de passer par des réseaux généralistes, au prix de la discrétion, de la justesse d'évaluation et de la qualité d'exécution.",
      reponse:
        "France Immeuble pratique la transaction off-market spécialisée : évaluation précise, acquéreurs qualifiés, confidentialité tenue de bout en bout. Une maison de transaction construite pour un seul type d'actif, et pour ceux qui le détiennent.",
    },
    {
      companyId: "team-reno",
      marche:
        "Réhabiliter un immeuble entier excède le cadre de l'artisanat courant : coordination des corps d'état, tenue des délais, arbitrages permanents. Les détenteurs d'actifs manquaient d'un interlocuteur construit pour cette échelle.",
      reponse:
        "Filiale travaux du groupe, née pour servir ses clients historiques, elle conduit les réhabilitations d'immeubles de bout en bout — conception, pilotage, livraison — avec un interlocuteur unique et une exécution tenue.",
    },
    {
      companyId: "pleinbail",
      marche:
        "L'immobilier d'investissement se cherchait sur des portails pensés pour la résidence principale : annonces noyées, critères inadaptés, qualité inégale. Aucun acteur de référence ne s'était consacré à ce segment.",
      reponse:
        "PleinBail, création du groupe, est la plateforme d'annonces dédiée à l'immobilier d'investissement : des biens qualifiés, présentés avec les informations qui comptent pour un investisseur, dans un cadre pensé pour ce seul usage.",
    },
  ] as Fiche[],
  division: {
    kicker: "Vente à la découpe",
    text: "Mise en copropriété et commercialisation lot par lot. Pour chaque immeuble, l'alternative chiffrée à la vente en bloc — deux voies de cession, un même conseil.",
  },
} as const;
