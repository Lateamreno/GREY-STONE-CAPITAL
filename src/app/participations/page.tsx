import type { Metadata } from "next";
import Link from "next/link";
import { companies, franceImmeubleDivision } from "@/config/companies";
import { participations } from "@/content/participations";

export const metadata: Metadata = {
  title: "Participations",
  description:
    "Les sociétés que le groupe Grey Stone Capital réunit, anime et développe.",
};

export default function ParticipationsPage() {
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
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-28 sm:pt-36">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
            {participations.hero.kicker}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-creme sm:text-5xl">
            {participations.hero.title}
          </h1>
          <p className="mt-8 max-w-2xl leading-relaxed text-gris">
            {participations.hero.intro}
          </p>
        </div>
      </section>

      {/* Fiches sociétés */}
      {participations.fiches.map((fiche) => {
        const company = companies.find((c) => c.id === fiche.companyId);
        if (!company) return null;

        return (
          <section key={company.id} className="border-b border-ligne">
            <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
              <div className="flex flex-col gap-3">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-bronze">
                  {company.relation}
                </p>
                <h2 className="font-display text-3xl font-bold text-creme sm:text-4xl">
                  {company.name}
                </h2>
                <p className="font-medium text-creme/80">{company.baseline}</p>
              </div>

              <div className="mt-12 grid gap-10 border-t border-ligne pt-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-gris">
                    {participations.labels.marche}
                  </p>
                  <p className="leading-relaxed text-gris">{fiche.marche}</p>
                </div>
                <div>
                  <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-gris">
                    {participations.labels.reponse}
                  </p>
                  <p className="leading-relaxed text-gris">{fiche.reponse}</p>
                </div>
              </div>

              {company.id === "france-immeuble" && (
                <div className="mt-12 border-l-2 border-bronze bg-noir-2 px-6 py-8 sm:px-8">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-bronze">
                    {participations.division.kicker}
                  </p>
                  <p className="mt-3 font-display text-lg font-bold text-creme">
                    {franceImmeubleDivision.name}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gris">
                    {participations.division.text}
                  </p>
                </div>
              )}

              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-block rounded-full border border-bronze/60 px-7 py-3 text-sm font-medium text-bronze transition-colors hover:border-bronze-clair hover:text-bronze-clair"
              >
                {participations.labels.visit} <span aria-hidden>↗</span>
              </a>
            </div>
          </section>
        );
      })}

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
            Une méthode derrière chaque société.
          </h2>
          <Link
            href="/groupe"
            className="mt-10 rounded-full border border-ligne px-7 py-3 text-sm font-medium text-creme transition-colors hover:border-bronze hover:text-bronze-clair"
          >
            Découvrir le groupe
          </Link>
        </div>
      </section>
    </>
  );
}
