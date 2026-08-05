import Link from "next/link";
import { companies } from "@/config/companies";
import { home } from "@/content/home";

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
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-28 sm:pb-32 sm:pt-40">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
            {home.hero.kicker}
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-creme sm:text-6xl">
            {home.hero.title}{" "}
            <span className="text-bronze">{home.hero.titleAccent}</span>
          </h1>
          <div className="mt-14 flex flex-wrap gap-4">
            <Link
              href="/participations"
              className="rounded-full bg-bronze px-7 py-3 text-sm font-medium text-noir shadow-[0_0_40px_rgba(193,155,110,0.25)] transition-colors hover:bg-bronze-clair"
            >
              Les participations
            </Link>
            <Link
              href="/groupe"
              className="rounded-full border border-ligne px-7 py-3 text-sm font-medium text-creme transition-colors hover:border-bronze hover:text-bronze-clair"
            >
              Le groupe
            </Link>
          </div>
        </div>
      </section>

      {/* Bande sociétés */}
      <section className="border-b border-ligne bg-noir-2">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-3">
          {companies.map((company, index) => (
            <a
              key={company.id}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col gap-2 px-6 py-10 transition-colors hover:bg-noir-3 ${
                index > 0 ? "border-t border-ligne sm:border-l sm:border-t-0" : ""
              }`}
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-gris transition-colors group-hover:text-bronze">
                {company.relation}
              </span>
              <span className="font-display text-xl font-bold text-creme transition-colors group-hover:text-bronze-clair">
                {company.name}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Manifeste */}
      <section className="border-b border-ligne">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[5fr_7fr]">
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

      {/* Fiches sociétés en aperçu */}
      <section className="border-b border-ligne">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
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
                className="group relative flex flex-col gap-4 border-b border-ligne px-0 py-10 lg:border-b-0 lg:border-r lg:px-8 lg:py-12"
              >
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
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-fit pt-4 text-sm font-medium text-bronze transition-colors hover:text-bronze-clair"
                >
                  Visiter le site <span aria-hidden>↗</span>
                </a>
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
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center sm:py-32">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
            {home.closing.kicker}
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-creme sm:text-4xl">
            {home.closing.title}
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-gris">
            {home.closing.text}
          </p>
          <Link
            href="/groupe"
            className="mt-10 rounded-full border border-bronze px-7 py-3 text-sm font-medium text-bronze transition-colors hover:border-bronze-clair hover:text-bronze-clair"
          >
            Découvrir le groupe
          </Link>
        </div>
      </section>
    </>
  );
}
