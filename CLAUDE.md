# CLAUDE.md — Site institutionnel Grey Stone Capital

## Contexte du projet

Site vitrine institutionnel de GREY STONE CAPITAL, holding patrimoniale à
dominante immobilière. Le site présente le groupe et ses sociétés. Objectif :
crédibilité et effet « groupe établi » — une holding discrète qui investit
dans des sociétés immobilières innovantes et les développe.

Site 100 % statique. PAS de Supabase, pas de base de données, pas d'espace
client, pas de tarifs. Seul élément actif : le formulaire de contact
(Formspree).

## RÈGLE N°1 — La holding PRÉSENTE, elle ne VEND rien (non négociable)

Grey Stone Capital est une holding animatrice. Pour des raisons juridiques et
fiscales impératives (statut de holding animatrice, régime mère-fille), le
site ne doit JAMAIS donner l'impression que la holding commercialise des
services en direct.

- Formulations OBLIGATOIRES : « le groupe Grey Stone Capital réunit / anime /
  développe ces activités », « les sociétés du groupe interviennent... »
- Formulations INTERDITES : « Grey Stone Capital vous propose »,
  « nos services », « nous réalisons vos travaux », « contactez-nous pour
  votre projet de vente ». Tout CTA commercial renvoie vers le site de la
  société concernée, jamais vers la holding.
- Le formulaire de contact du site groupe est un contact CORPORATE
  (partenariats, presse, investisseurs), pas un formulaire commercial.

## RÈGLE N°2 — Véracité des participations

Vocabulaire exact par société (ne pas dévier) :
- France Immeuble → « participation historique » ou « actionnaire de
  référence ». JAMAIS « détient » ni « filiale » ni de pourcentage.
- La Team Reno → « filiale » (exact : 100 % holding).
- PleinBail → « création du groupe ».
- Formule générale du groupe : « Grey Stone Capital prend des participations
  et crée des sociétés immobilières innovantes, créatrices de valeur pour
  les détenteurs d'actifs. »

## RÈGLE N°3 — Noms provisoires (discipline rebasculable)

- « La Team Reno » est un nom PROVISOIRE (marque travaux en cours de
  renommage). Centraliser son nom, sa baseline et son URL dans un fichier
  de config unique (ex : `src/config/companies.ts`). Le jour du renommage,
  on modifie ce seul fichier.
- Même logique pour toutes les sociétés : un objet par société dans
  `companies.ts` (nom, description courte, description longue, URL, statut
  de lien).

## Lien PleinBail — décision propriétaire

PleinBail est affiché avec son nom ET un lien vers son site (décision
assumée du propriétaire). CONTRAINTE : lien à sens unique. Le site groupe
pointe vers PleinBail ; ne jamais suggérer, demander ou implémenter de lien
retour ou de mention du groupe côté PleinBail.

## Liens et séquencement

Toutes les fiches sociétés pointent vers leurs sites réels (URLs dans
`companies.ts`). Le site groupe sera mis en ligne APRÈS les sites des
sociétés : coder les liens normalement sans logique « à venir ».

## Domaine

`greystonecapital.fr` (acquis). À configurer sur Vercel en fin de M4.

## Narration validée (fil conducteur du site)

Grey Stone Capital investit dans des sociétés immobilières innovantes.
Histoire à raconter :
1. Le groupe identifie des angles morts du marché immobilier
   d'investissement.
2. France Immeuble répond aux vendeurs d'immeubles de rapport, longtemps
   sans acteur dédié (transaction off-market spécialisée). « France
   Immeuble Division » (nom provisoire, configurable dans `companies.ts`)
   est présentée comme une SOCIÉTÉ À PART ENTIÈRE (décision propriétaire) :
   vente à la découpe — mise en copropriété et commercialisation lot par
   lot, l'alternative chiffrée à la vente en bloc. Relation affichée :
   « division de France Immeuble ». Pas de lien externe tant qu'elle n'a
   pas de site propre.
3. Autour de cette base, le groupe crée des sociétés répondant aux besoins
   des détenteurs d'actifs : la filiale travaux (réhabilitation
   d'immeubles, nom provisoire La Team Reno) née pour servir les clients
   historiques, et PleinBail, plateforme d'annonces dédiée à l'immobilier
   d'investissement, créée pour combler l'absence d'acteur de qualité.

Ton : institutionnel premium, sobre, factuel, phrases courtes. Impression
de solidité — on montre, on ne survend pas. Pas de superlatifs creux
(« leader », « n°1 »), la qualité s'exprime par la précision.

## Charte graphique (charte groupe)

### Couleurs
- Noir architectural (fond) : `#0A0A0A`
- Noirs secondaires : `#121110`, `#1B1917`
- Bronze groupe (accent UNIQUE) : `#C19B6E`
- Bronze clair (survols) : `#E6D4BD` · Bronze profond : `#7A5C3E`
- Crème (texte) : `#EFE9DE` · Gris secondaire : `#8E8A84`
- Lignes : `#282522`

Une seule couleur d'accent. Relief par dégradés monochromes + ombres.

### Typographies
- Display : **Archivo** 700/800 · Body : **Inter** 400/500/600 ·
  Mono (kickers, chiffres) : **JetBrains Mono** 400/500
- ⚠️ PAS de `next/font/google` (échecs de build Vercel constatés).
  Charger via `<link>` Google Fonts dans le layout, `font-display: swap`.

### Style
- Fond sombre, boutons pilule (radius 999px), filet vertical bronze en
  marqueur de logo, kickers mono uppercase, grilles à séparateurs 1px.
- Registre visuel : société d'investissement, pas agence web. Beaucoup
  d'espace, peu d'effets.

## Arborescence (mise à jour — décisions propriétaire en cours de projet)

| Route | Page | Contenu |
|---|---|---|
| `/` | Page unique du groupe | Hero (holding + thèse) · bande sociétés · section Le groupe (ancre `#groupe` : manifeste + histoire) · section Le système (ancre `#systeme` : thèse, schéma des synergies) · manière d'opérer · aperçu sociétés · CTA vers /societes |
| `/societes` | Sociétés | Une carte par société (étiquette métier, pas le statut juridique) ; menu déroulant « Sociétés » dans le header, burger sur mobile |
| `/societes/[slug]` | Page société | Page longue : hero (métier + relation exacte en mention discrète), marché, réponse, savoir-faire (3 volets), place dans le système, lien site (si existant), navigation entre sociétés |

PAS de page contact (décision propriétaire) ni de formulaire. Le nav ne
contient que « Le groupe » et « Sociétés ». Étiquettes métier :
Spécialiste immeuble / Vente à la découpe / Spécialiste travaux /
Marketplace d'investissement. Schéma du système : holding au centre,
quatre sociétés autour (Conseiller / Découper / Valoriser / Diffuser).

## Stack technique

- Next.js (App Router) + TypeScript + Tailwind CSS
- 100 % statique, aucun besoin serveur
- Contenus dans `src/content/` (un fichier par page) + `src/config/companies.ts`
- Formulaire : Formspree (`NEXT_PUBLIC_FORMSPREE_ID` en variable d'env)
- Images : `next/image`, placeholders sobres en attendant les visuels

### Config Vercel (prévention 404 plateforme)
- `vercel.json` à la racine : `{ "framework": "nextjs" }`
- Root Directory VIDE, branche de production `main` toujours buildable
- `npm run build` en local avant chaque push

## SEO

- H1 unique par page, hiérarchie propre
- Metadata par page. Schema.org JSON-LD type `Organization` dans le layout
- `sitemap.xml` + `robots.txt`
- Le SEO n'est PAS un objectif de ce site (pas de trafic commercial
  recherché) : propreté technique suffit, aucun contenu SEO artificiel

## Milestones (validation preview Vercel à chaque étape)

1. **M1 — Fondations** : Next.js + Tailwind, `companies.ts`, layout
   (header/footer), tokens charte, déploiement Vercel OK
2. **M2 — Accueil** : page d'accueil complète
3. **M3 — Le groupe + Participations** : les 2 pages éditoriales
4. **M4 — Contact + finitions** : formulaire, mentions légales, SEO
   technique, audit responsive mobile, Lighthouse > 90

Ne pas enchaîner deux milestones sans validation explicite du client sur la
preview Vercel.

## Ce qu'il ne faut PAS faire

- Aucune formulation commerciale directe de la holding (règle n°1)
- Aucun pourcentage de détention, aucun chiffre capitalistique
- ZÉRO CHIFFRE sur tout le site (pas de bande de stats, pas de « 365
  immeubles », pas de volumes, pas de CA) : sobriété totale, la
  crédibilité passe par le verbe et la précision, jamais par les nombres
- Pas de mention de sociétés/projets non validés (pas de Hopelia, pas de
  conciergerie, pas de menuiseries). La découpe (France Immeuble Division)
  est une fiche société à part entière (décision propriétaire, à terme
  société distincte), sans lien externe tant qu'elle n'a pas de site
- Pas de `next/font/google`, pas de deuxième couleur d'accent
- Pas de photos de personnes (le dirigeant reste en retrait), pas de page
  équipe
- Pas de jaune #FFC000
