/**
 * Contenus des pages « Sociétés » : index + une page par société.
 * Rôle (vocabulaire exact, règle n°2), problème de marché, réponse,
 * place dans le système de groupe. La découpe apparaît UNIQUEMENT en
 * sous-bloc de la page France Immeuble.
 */

import type { CompanyId } from "@/config/companies";

export interface FicheSociete {
  companyId: CompanyId;
  marche: string;
  reponse: string;
  synergie: string;
}

export const societes = {
  hero: {
    kicker: "Sociétés",
    title: "Des sociétés dédiées, reliées en système.",
    intro:
      "Le groupe Grey Stone Capital réunit et développe des sociétés immobilières innovantes. Chacune est née d'un angle mort du marché de l'investissement ; chacune opère sous sa propre marque — et chacune alimente les autres.",
  },
  labels: {
    marche: "Le marché",
    reponse: "La réponse",
    synergie: "Dans le système du groupe",
    visit: "Visiter le site",
    all: "Toutes les sociétés",
    discover: "Découvrir",
  },
  fiches: [
    {
      companyId: "france-immeuble",
      marche:
        "Les vendeurs d'immeubles de rapport sont longtemps restés sans acteur dédié. Céder un actif singulier supposait de passer par des réseaux généralistes, au prix de la discrétion, de la justesse d'évaluation et de la qualité d'exécution.",
      reponse:
        "France Immeuble pratique la transaction off-market spécialisée : évaluation précise, acquéreurs qualifiés, confidentialité tenue de bout en bout. Une maison de transaction construite pour un seul type d'actif, et pour ceux qui le détiennent.",
      synergie:
        "Dans le cycle du groupe, France Immeuble est la porte d'entrée et de sortie des actifs. Les immeubles qu'elle voit passer appellent des chantiers de réhabilitation ; les biens valorisés trouvent ensuite leur marché. Chaque cession peut ouvrir le cycle suivant.",
    },
    {
      companyId: "team-reno",
      marche:
        "Réhabiliter un immeuble entier excède le cadre de l'artisanat courant : coordination des corps d'état, tenue des délais, arbitrages permanents. Les détenteurs d'actifs manquaient d'un interlocuteur construit pour cette échelle.",
      reponse:
        "Filiale travaux du groupe, née pour servir ses clients historiques, elle conduit les réhabilitations d'immeubles de bout en bout — conception, pilotage, livraison — avec un interlocuteur unique et une exécution tenue.",
      synergie:
        "La filiale travaux intervient entre deux temps de la vie d'un actif : après l'acquisition, avant la mise en location ou la cession. Elle transforme les immeubles issus de la transaction en biens prêts à être portés au marché.",
    },
    {
      companyId: "pleinbail",
      marche:
        "L'immobilier d'investissement se cherchait sur des portails pensés pour la résidence principale : annonces noyées, critères inadaptés, qualité inégale. Aucun acteur de référence ne s'était consacré à ce segment.",
      reponse:
        "PleinBail, création du groupe, est la plateforme d'annonces dédiée à l'immobilier d'investissement : des biens qualifiés, présentés avec les informations qui comptent pour un investisseur, dans un cadre pensé pour ce seul usage.",
      synergie:
        "PleinBail referme le cycle : les immeubles cédés puis réhabilités y trouvent leurs locataires et leurs investisseurs. Et les opportunités qui s'y révèlent rouvrent le cycle — un bien trouvé appelle une transaction, puis des travaux.",
    },
  ] as FicheSociete[],
  division: {
    kicker: "Vente à la découpe",
    text: "Mise en copropriété et commercialisation lot par lot. Pour chaque immeuble, l'alternative chiffrée à la vente en bloc — deux voies de cession, un même conseil.",
  },
} as const;

export function ficheByCompanyId(id: CompanyId): FicheSociete | undefined {
  return societes.fiches.find((fiche) => fiche.companyId === id);
}
