import Image from "next/image";
import Link from "next/link";
import { companies } from "@/config/companies";
import { home } from "@/content/home";
import PillLink from "@/components/PillLink";
import CycleDiagram from "@/components/CycleDiagram";
import {
  CompanyGlyph,
  IconArrowUpRight,
  IconCreate,
  IconLayers,
  IconScreen,
} from "@/components/icons";

const opererIcons = {
  create: IconCreate,
  layers: IconLayers,
  screen: IconScreen,
} as const;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ligne">
        {/* Photo d'immeubles haussmanniens, traitement sombre charte */}
        <Image
          src="/images/hero-immeubles.jpg"
          alt="Toits et façades d'immeubles haussmanniens à Paris"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_35%] opacity-50 brightness-[0.55] saturate-[0.65] sepia-[0.25]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.75) 45%, rgba(10,10,10,0.35) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, transparent 30%, transparent 60%, rgba(10,10,10,0.9) 100%), radial-gradient(ellipse 80% 60% at 30% 0%, rgba(193,155,110,0.08), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 sm:pb-32 sm:pt-36">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
            {home.hero.kicker}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-creme sm:text-5xl lg:text-6xl">
            {home.hero.title}{" "}
            <span className="text-bronze">{home.hero.titleAccent}</span>
          </h1>
          <div className="mt-12 flex flex-wrap gap-4">
            <PillLink href="/societes">Les sociétés</PillLink>
            <PillLink href="/#groupe">Le groupe</PillLink>
          </div>
        </div>
      </section>

      {/* Bande sociétés */}
      <section className="border-b border-ligne bg-noir-2">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((company, index) => (
            <Link
              key={company.id}
              href={`#apercu-${company.slug}`}
              className={`group flex items-start gap-4 px-6 py-8 transition-colors hover:bg-noir-3 ${
                index > 0 ? "border-t border-ligne" : ""
              } sm:[&:nth-child(-n+2)]:border-t-0 sm:even:border-l sm:[&:nth-child(n+3)]:border-t lg:border-t-0 lg:border-l lg:first:border-l-0`}
            >
              <CompanyGlyph
                icon={company.icon}
                className="mt-1 h-6 w-6 shrink-0 text-bronze transition-colors group-hover:text-bronze-clair"
              />
              <span className="flex flex-col gap-1">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gris transition-colors group-hover:text-bronze">
                  {company.metier}
                </span>
                <span className="font-display text-lg font-bold text-creme transition-colors group-hover:text-bronze-clair">
                  {company.name}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Le groupe — manifeste et histoire */}
      <section id="groupe" className="scroll-mt-24 border-b border-ligne">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-28 lg:grid-cols-[5fr_7fr]">
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
              {home.groupe.kicker}
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-creme sm:text-4xl">
              {home.groupe.title}
            </h2>
          </div>
          <div className="flex flex-col gap-6 lg:pt-12">
            {home.groupe.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-gris">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Le système — cycle et synergies */}
      <section id="systeme" className="scroll-mt-24 border-b border-ligne bg-noir-2">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
            {home.systeme.kicker}
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-creme sm:text-4xl">
            {home.systeme.title}
          </h2>

          <blockquote className="mt-12 max-w-3xl border-l-2 border-bronze pl-6 sm:pl-8">
            <p className="font-display text-xl font-bold leading-relaxed text-bronze-clair sm:text-2xl">
              « {home.systeme.pullQuote} »
            </p>
          </blockquote>

          <div className="mt-14 grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              {home.systeme.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-gris">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="px-4 py-6 sm:px-10">
              <CycleDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* Manière d'opérer */}
      <section className="border-b border-ligne">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
            {home.operer.kicker}
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-creme sm:text-4xl">
            {home.operer.title}
          </h2>

          {/* L'humain du groupe — équipe au travail, traitement sombre */}
          <div className="relative mt-16 h-64 overflow-hidden border border-ligne sm:h-96">
            <Image
              src="/images/equipe-travail.jpg"
              alt="Équipe au travail autour d'une table, sur ordinateurs"
              fill
              sizes="(min-width: 1152px) 1104px, 100vw"
              className="object-cover object-center brightness-[0.65] saturate-[0.75] sepia-[0.15]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 45%), linear-gradient(to bottom, rgba(10,10,10,0.35) 0%, transparent 30%)",
              }}
            />
          </div>

          <div className="mt-4 grid border-t border-ligne sm:grid-cols-3 sm:border-l">
            {home.operer.items.map((item) => {
              const Icon = opererIcons[item.icon as keyof typeof opererIcons];
              return (
                <div
                  key={item.title}
                  className="flex flex-col gap-4 border-b border-ligne py-10 sm:border-b-0 sm:border-r sm:px-8 sm:py-12"
                >
                  <Icon className="h-7 w-7 text-bronze" />
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-bronze">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-gris">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fiches sociétés en aperçu */}
      <section className="border-b border-ligne">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
            {home.societesSection.kicker}
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-creme sm:text-4xl">
            {home.societesSection.title}
          </h2>

          <div className="mt-16 grid border-t border-ligne sm:grid-cols-2">
            {companies.map((company) => (
              <article
                key={company.id}
                id={`apercu-${company.slug}`}
                className="group flex scroll-mt-24 flex-col gap-4 border-b border-ligne py-10 sm:px-8 sm:py-12 sm:odd:border-r"
              >
                <CompanyGlyph icon={company.icon} className="h-7 w-7 text-bronze" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-bronze">
                  {company.metier}
                </p>
                <h3 className="font-display text-2xl font-bold text-creme">
                  {company.name}
                </h3>
                <p className="text-sm font-medium text-creme/80">
                  {company.baseline}
                </p>
                <p className="text-sm leading-relaxed text-gris">
                  {company.shortDescription}
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-5 pt-4 text-sm font-medium">
                  <Link
                    href={`/societes/${company.slug}`}
                    className="text-bronze transition-colors hover:text-bronze-clair"
                  >
                    En savoir plus
                  </Link>
                  {company.url && (
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-bronze px-4 py-1.5 text-xs font-medium text-bronze transition-colors hover:bg-bronze hover:text-noir"
                    >
                      Site <IconArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% 100%, rgba(193,155,110,0.07), transparent 60%)",
          }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center sm:py-28">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
            {home.closing.kicker}
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-creme sm:text-4xl">
            {home.closing.title}
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-gris">
            {home.closing.text}
          </p>
          <PillLink href="/societes" className="mt-10">
            Voir les sociétés
          </PillLink>
        </div>
      </section>
    </>
  );
}
