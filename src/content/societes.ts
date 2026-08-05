/**
 * Contenus des pages « Sociétés » : index + une page par société.
 * Métier en étiquette, relation exacte (règle n°2) en mention sur la page.
 * Zéro chiffre. La holding présente, elle ne vend rien (règle n°1).
 */

import type { CompanyId } from "@/config/companies";

export interface SavoirFaireItem {
  title: string;
  text: string;
}

export interface FicheSociete {
  companyId: CompanyId;
  marcheTitle: string;
  marche: string[];
  reponseTitle: string;
  reponse: string[];
  savoirFaire: SavoirFaireItem[];
  synergie: string;
}

export const societes = {
  hero: {
    kicker: "Sociétés",
    title: "Des sociétés dédiées, reliées en système.",
    intro:
      "Le groupe Grey Stone Capital réunit et développe des sociétés immobilières innovantes. Chacune est née d'un angle mort du marché de l'investissement ; chacune opère sous sa propre marque — et chacune peut servir les clients de toutes les autres.",
  },
  labels: {
    marche: "Le marché",
    reponse: "La réponse",
    savoirFaire: "Savoir-faire",
    synergie: "Dans le système du groupe",
    visit: "Visiter le site",
    all: "Toutes les sociétés",
    discover: "En savoir plus",
  },
  fiches: [
    {
      companyId: "france-immeuble",
      marcheTitle: "Un actif singulier, longtemps sans acteur dédié.",
      marche: [
        "Un immeuble de rapport ne s'évalue pas comme un appartement : revenus locatifs, état de la structure, potentiel de valorisation, situation des baux — chaque paramètre pèse sur le prix et sur la suite.",
        "Longtemps, les vendeurs n'avaient pourtant que des réseaux généralistes : diffusion publique, visites sans lendemain, estimations approximatives. À cette échelle, le manque de spécialité coûte cher — en valeur comme en discrétion.",
      ],
      reponseTitle: "La transaction off-market, en spécialité.",
      reponse: [
        "France Immeuble s'est construite pour ce seul type d'actif. La société travaille off-market : les immeubles ne sont pas exposés publiquement, ils sont présentés à des acquéreurs qualifiés, identifiés pour chaque dossier.",
        "L'accompagnement couvre tout le parcours : évaluation précise, stratégie de cession, négociation, jusqu'à l'acte. La confidentialité est tenue de bout en bout — c'est souvent la condition première des vendeurs.",
      ],
      savoirFaire: [
        {
          title: "Évaluer",
          text: "Analyse de l'immeuble, de ses revenus et de son potentiel : une valeur juste, argumentée, tenable en négociation.",
        },
        {
          title: "Rapprocher",
          text: "Un réseau d'acquéreurs qualifiés — investisseurs privés, family offices, professionnels — sollicités dossier par dossier.",
        },
        {
          title: "Exécuter",
          text: "Négociation, sécurisation juridique, accompagnement jusqu'à l'acte : une exécution tenue, sans exposition inutile.",
        },
      ],
      synergie:
        "Dans le système du groupe, France Immeuble conseille les détenteurs à l'entrée comme à la sortie. Quand la vente lot par lot est plus pertinente que la vente en bloc, France Immeuble Division prend le relais ; quand un immeuble appelle des travaux, la filiale travaux intervient ; quand un bien cherche son investisseur, PleinBail le diffuse.",
    },
    {
      companyId: "fi-division",
      marcheTitle: "La vente en bloc n'est pas toujours la meilleure voie.",
      marche: [
        "Pour un même immeuble, vendre en bloc et vendre lot par lot n'aboutissent pas à la même valeur. La découpe demande du temps et une technicité propre — mise en copropriété, commercialisation, gestion du rythme — mais elle peut mieux rémunérer le détenteur.",
        "Cette voie est longtemps restée l'apanage d'opérateurs institutionnels. Les détenteurs privés, eux, manquaient d'un accompagnement pour arbitrer sérieusement entre les deux options.",
      ],
      reponseTitle: "Deux voies de cession, un arbitrage documenté.",
      reponse: [
        "France Immeuble Division étudie chaque immeuble sous les deux angles et présente l'alternative chiffrée : vendre en bloc, ou mettre en copropriété et commercialiser lot par lot. Le détenteur décide, chiffres en main.",
        "Quand la découpe est retenue, la division conduit l'ensemble : structuration de la copropriété, préparation des lots, commercialisation au rythme du marché.",
      ],
      savoirFaire: [
        {
          title: "Étudier",
          text: "Le comparatif bloc / découpe : valeur, délais, contraintes — un arbitrage posé sur des faits, pas sur une intuition.",
        },
        {
          title: "Structurer",
          text: "Mise en copropriété, règlement, diagnostics : l'immeuble est préparé lot par lot, dans les règles.",
        },
        {
          title: "Commercialiser",
          text: "Une vente au rythme maîtrisé, lot après lot, pour tenir la valeur sans précipiter le marché.",
        },
      ],
      synergie:
        "La division prolonge le conseil de France Immeuble : c'est la seconde voie de cession, ouverte quand elle sert mieux le détenteur. Elle s'appuie sur la filiale travaux pour préparer les lots, et sur les canaux du groupe — dont PleinBail — pour les porter au marché.",
    },
    {
      companyId: "team-reno",
      marcheTitle: "L'échelle de l'immeuble change tout.",
      marche: [
        "Réhabiliter un immeuble entier n'est pas une somme de petits chantiers : coordination des corps d'état, phasage des travaux en site parfois occupé, tenue des délais et du budget, arbitrages permanents entre l'existant et le projet.",
        "À cette échelle, les détenteurs d'actifs se retrouvaient face à un choix insatisfaisant : des artisans dimensionnés pour l'appartement, ou des majors dimensionnées pour la tour de bureaux.",
      ],
      reponseTitle: "Un seul interlocuteur, de bout en bout.",
      reponse: [
        "La filiale travaux du groupe s'est construite précisément pour ce format : l'immeuble de rapport. Née pour servir les clients historiques du groupe, elle conduit la réhabilitation de bout en bout — conception, pilotage, livraison.",
        "Un interlocuteur unique porte le projet du premier diagnostic à la remise des clés. Le détenteur suit l'avancement ; la société tient le chantier.",
      ],
      savoirFaire: [
        {
          title: "Concevoir",
          text: "Programme de travaux, optimisation des surfaces et des usages : le projet est dessiné pour la valeur locative finale.",
        },
        {
          title: "Piloter",
          text: "Corps d'état coordonnés, planning tenu, budget suivi : le chantier avance sans que le détenteur ait à s'en mêler.",
        },
        {
          title: "Livrer",
          text: "Finitions, conformité, mise en service : un immeuble prêt à être loué, découpé ou cédé.",
        },
      ],
      synergie:
        "La filiale travaux intervient entre deux temps de la vie d'un actif : après l'acquisition, avant la mise en location ou la cession. Elle valorise les immeubles conseillés par France Immeuble, prépare les lots de la division découpe, et livre des biens que PleinBail porte au marché — au service de tous les clients du groupe.",
    },
    {
      companyId: "pleinbail",
      marcheTitle: "Des portails pensés pour d'autres.",
      marche: [
        "L'immobilier d'investissement se cherchait sur des portails conçus pour la résidence principale : annonces noyées dans le flux, critères inadaptés — on y cherche une cuisine équipée, pas un rendement ou un état locatif.",
        "Résultat : des heures perdues pour les investisseurs, une visibilité médiocre pour les détenteurs, et aucun acteur de référence consacré à ce segment.",
      ],
      reponseTitle: "Une plateforme pour un seul usage.",
      reponse: [
        "PleinBail, création du groupe, est la plateforme d'annonces dédiée à l'immobilier d'investissement. Les biens y sont qualifiés et présentés avec les informations qui comptent pour un investisseur : revenus, occupation, charges, potentiel.",
        "Le cadre est pensé pour ce seul usage : une lecture rapide, des critères pertinents, une mise en relation directe entre détenteurs, investisseurs et locataires.",
      ],
      savoirFaire: [
        {
          title: "Qualifier",
          text: "Des annonces vérifiées et complètes : l'information utile à la décision d'investissement, sans remplissage.",
        },
        {
          title: "Présenter",
          text: "Un cadre clair, des critères propres à l'investissement : chaque bien se lit en quelques instants.",
        },
        {
          title: "Connecter",
          text: "Détenteurs, investisseurs et locataires se rencontrent directement, sur un segment enfin traité comme tel.",
        },
      ],
      synergie:
        "PleinBail diffuse : les immeubles conseillés, réhabilités ou découpés par les sociétés du groupe y rencontrent leur marché, aux côtés des biens de tous les détenteurs. Et les opportunités qui s'y révèlent rouvrent le système — un bien trouvé appelle un conseil, des travaux, un arbitrage.",
    },
  ] as FicheSociete[],
} as const;

export function ficheByCompanyId(id: CompanyId): FicheSociete | undefined {
  return societes.fiches.find((fiche) => fiche.companyId === id);
}
