import type { Metadata } from "next";
import Link from "next/link";
import { companies } from "@/config/companies";
import { societes } from "@/content/societes";
import PillLink from "@/components/PillLink";
import { CompanyGlyph, IconArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Sociétés",
  description:
    "Les sociétés que le groupe Grey Stone Capital réunit, anime et développe.",
};

export default function SocietesPage() {
  return (
    <>
      {/* En-tête */}
      <section className="relative overflow-hidden border-b border-ligne">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 30% 0%, rgba(193,155,110,0.07), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pt-32">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
            {societes.hero.kicker}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-creme sm:text-5xl">
            {societes.hero.title}
          </h1>
          <p className="mt-8 max-w-2xl leading-relaxed text-gris">
            {societes.hero.intro}
          </p>
        </div>
      </section>

      {/* Cartes sociétés */}
      <section className="border-b border-ligne">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-2">
          {companies.map((company, index) => (
            <article
              key={company.id}
              className={`group relative flex flex-col gap-4 px-6 py-14 transition-colors hover:bg-noir-2 lg:px-10 ${
                index > 0 ? "border-t border-ligne" : ""
              } sm:[&:nth-child(-n+2)]:border-t-0 sm:even:border-l sm:[&:nth-child(n+3)]:border-t`}
            >
              <CompanyGlyph icon={company.icon} className="h-8 w-8 text-bronze" />
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-bronze">
                {company.metier}
              </p>
              <h2 className="font-display text-2xl font-bold text-creme">
                {company.name}
              </h2>
              <p className="text-sm font-medium text-creme/80">
                {company.baseline}
              </p>
              <p className="text-sm leading-relaxed text-gris">
                {company.shortDescription}
              </p>
              <div className="mt-auto flex items-center gap-6 pt-6 text-sm font-medium">
                <Link
                  href={`/societes/${company.slug}`}
                  className="text-bronze transition-colors hover:text-bronze-clair"
                >
                  {societes.labels.discover}
                  {/* étend la zone cliquable à toute la carte */}
                  <span className="absolute inset-0" aria-hidden />
                </Link>
                {company.url && (
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-bronze px-4 py-1.5 text-xs font-medium text-bronze transition-colors hover:bg-bronze hover:text-noir"
                  >
                    Site <IconArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Vers le groupe */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% 100%, rgba(193,155,110,0.07), transparent 60%)",
          }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-creme">
            Un système derrière chaque société.
          </h2>
          <PillLink href="/#systeme" className="mt-10">
            Découvrir le système
          </PillLink>
        </div>
      </section>
    </>
  );
}
