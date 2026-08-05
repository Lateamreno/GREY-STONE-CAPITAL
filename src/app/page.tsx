import Link from "next/link";
import { companies } from "@/config/companies";
import { home } from "@/content/home";
import PillLink from "@/components/PillLink";
import FacadeMotif from "@/components/FacadeMotif";
import CycleDiagram from "@/components/CycleDiagram";
import { CompanyGlyph, IconArrowUpRight } from "@/components/icons";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ligne">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 30% 0%, rgba(193,155,110,0.08), transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-24 sm:pb-28 sm:pt-32 lg:grid-cols-[7fr_4fr]">
          <div>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
              {home.hero.kicker}
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-creme sm:text-5xl lg:text-6xl">
              {home.hero.title}{" "}
              <span className="text-bronze">{home.hero.titleAccent}</span>
            </h1>
            <div className="mt-12 flex flex-wrap gap-4">
              <PillLink href="/societes">Les sociétés</PillLink>
              <PillLink href="/groupe">Le groupe</PillLink>
            </div>
          </div>
          <div className="hidden justify-end lg:flex">
            <FacadeMotif className="w-64 opacity-90" />
          </div>
        </div>
      </section>

      {/* Bande sociétés */}
      <section className="border-b border-ligne bg-noir-2">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-3">
          {companies.map((company, index) => (
            <Link
              key={company.id}
              href={`/societes/${company.slug}`}
              className={`group flex items-start gap-4 px-6 py-8 transition-colors hover:bg-noir-3 ${
                index > 0 ? "border-t border-ligne sm:border-l sm:border-t-0" : ""
              }`}
            >
              <CompanyGlyph
                icon={company.icon}
                className="mt-1 h-6 w-6 shrink-0 text-bronze transition-colors group-hover:text-bronze-clair"
              />
              <span className="flex flex-col gap-1">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gris transition-colors group-hover:text-bronze">
                  {company.relation}
                </span>
                <span className="font-display text-lg font-bold text-creme transition-colors group-hover:text-bronze-clair">
                  {company.name}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Manifeste */}
      <section className="border-b border-ligne">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-28 lg:grid-cols-[5fr_7fr]">
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
              {home.manifesto.kicker}
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-creme sm:text-4xl">
              {home.manifesto.title}
            </h2>
          </div>
          <div className="flex flex-col gap-6 lg:pt-12">
            {home.manifesto.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-gris">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Le système — cycle et synergies */}
      <section className="border-b border-ligne bg-noir-2">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 sm:py-28 lg:grid-cols-2">
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
              {home.cycle.kicker}
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-creme sm:text-4xl">
              {home.cycle.title}
            </h2>
            <div className="mt-8 flex flex-col gap-6">
              {home.cycle.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-gris">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="px-4 py-10 sm:px-10">
            <CycleDiagram />
          </div>
        </div>
      </section>

      {/* Fiches sociétés en aperçu */}
      <section className="border-b border-ligne">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
            {home.companiesSection.kicker}
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-creme sm:text-4xl">
            {home.companiesSection.title}
          </h2>

          <div className="mt-16 grid border-t border-ligne lg:grid-cols-3 lg:border-l">
            {companies.map((company) => (
              <article
                key={company.id}
                className="group flex flex-col gap-4 border-b border-ligne py-10 lg:border-b-0 lg:border-r lg:px-8 lg:py-12"
              >
                <CompanyGlyph icon={company.icon} className="h-7 w-7 text-bronze" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-bronze">
                  {company.relation}
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
                <div className="mt-auto flex items-center gap-6 pt-4 text-sm font-medium">
                  <Link
                    href={`/societes/${company.slug}`}
                    className="text-bronze transition-colors hover:text-bronze-clair"
                  >
                    Découvrir
                  </Link>
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gris transition-colors hover:text-creme"
                  >
                    Site <IconArrowUpRight className="h-3.5 w-3.5" />
                  </a>
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
          <PillLink href="/groupe" className="mt-10">
            Découvrir le groupe
          </PillLink>
        </div>
      </section>
    </>
  );
}
