import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { companies, companyBySlug } from "@/config/companies";
import { ficheByCompanyId, societes } from "@/content/societes";
import PillLink from "@/components/PillLink";
import FacadeMotif from "@/components/FacadeMotif";
import { CompanyGlyph, IconArrowUpRight } from "@/components/icons";

export function generateStaticParams() {
  return companies.map((company) => ({ slug: company.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const company = companyBySlug(slug);
  if (!company) return {};
  return {
    title: company.name,
    description: company.shortDescription,
  };
}

export default async function SocietePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = companyBySlug(slug);
  const fiche = company ? ficheByCompanyId(company.id) : undefined;
  if (!company || !fiche) notFound();

  return (
    <>
      {/* En-tête société */}
      <section className="relative overflow-hidden border-b border-ligne">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 30% 0%, rgba(193,155,110,0.07), transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-24 sm:pt-32 lg:grid-cols-[7fr_4fr]">
          <div>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
              {company.metier}
            </p>
            <div className="flex items-center gap-5">
              <CompanyGlyph icon={company.icon} className="h-10 w-10 shrink-0 text-bronze" />
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-creme sm:text-5xl">
                {company.name}
              </h1>
            </div>
            <p className="mt-6 text-lg font-medium text-creme/80">
              {company.baseline}
            </p>
            <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gris">
              {company.relationLabel}
            </p>
            <p className="mt-6 max-w-2xl leading-relaxed text-gris">
              {company.longDescription}
            </p>
            {company.url && (
              <div className="mt-10">
                <PillLink href={company.url} external>
                  {societes.labels.visit} <IconArrowUpRight className="h-4 w-4" />
                </PillLink>
              </div>
            )}
          </div>
          <div className="hidden justify-end lg:flex">
            <FacadeMotif className="w-56 opacity-80" />
          </div>
        </div>
      </section>

      {/* Le marché */}
      <section className="border-b border-ligne">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[5fr_7fr]">
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
              {societes.labels.marche}
            </p>
            <h2 className="font-display text-2xl font-bold leading-tight text-creme sm:text-3xl">
              {fiche.marcheTitle}
            </h2>
          </div>
          <div className="flex flex-col gap-6 lg:pt-10">
            {fiche.marche.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-gris">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* La réponse */}
      <section className="border-b border-ligne bg-noir-2">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[5fr_7fr]">
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
              {societes.labels.reponse}
            </p>
            <h2 className="font-display text-2xl font-bold leading-tight text-creme sm:text-3xl">
              {fiche.reponseTitle}
            </h2>
          </div>
          <div className="flex flex-col gap-6 lg:pt-10">
            {fiche.reponse.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-gris">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Savoir-faire */}
      <section className="border-b border-ligne">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
            {societes.labels.savoirFaire}
          </p>
          <div className="mt-10 grid divide-y divide-ligne sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {fiche.savoirFaire.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 py-10 sm:px-8 sm:py-12 sm:first:pl-0"
              >
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-bronze">
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed text-gris">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Place dans le système */}
      <section className="border-b border-ligne bg-noir-2">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-bronze">
            {societes.labels.synergie}
          </p>
          <p className="max-w-3xl font-display text-xl font-bold leading-relaxed text-creme sm:text-2xl">
            {fiche.synergie}
          </p>
          {company.url && (
            <div className="mt-10">
              <PillLink href={company.url} external>
                {societes.labels.visit} <IconArrowUpRight className="h-4 w-4" />
              </PillLink>
            </div>
          )}
        </div>
      </section>

      {/* Navigation entre sociétés */}
      <section>
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 sm:flex-row sm:items-center">
          <Link
            href="/societes"
            className="text-sm font-medium text-gris transition-colors hover:text-creme"
          >
            ← {societes.labels.all}
          </Link>
          <div className="flex flex-wrap gap-3">
            {companies
              .filter((other) => other.id !== company.id)
              .map((other) => (
                <Link
                  key={other.id}
                  href={`/societes/${other.slug}`}
                  className="rounded-full border border-ligne px-5 py-2 text-sm text-gris transition-colors hover:border-bronze hover:text-bronze-clair"
                >
                  {other.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
