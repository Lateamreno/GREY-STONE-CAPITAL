import type { Metadata } from "next";
import { companies } from "@/config/companies";

export const metadata: Metadata = {
  title: "Participations",
  description:
    "Les sociétés que le groupe Grey Stone Capital réunit, anime et développe.",
};

export default function ParticipationsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
        Participations
      </p>
      <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-creme">
        Les sociétés du groupe.
      </h1>
      <div className="mt-16 divide-y divide-ligne border-y border-ligne">
        {companies.map((company) => (
          <article key={company.id} className="flex flex-col gap-3 py-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-bronze">
              {company.relation}
            </p>
            <h2 className="font-display text-2xl font-bold text-creme">
              {company.name}
            </h2>
            <p className="max-w-2xl leading-relaxed text-gris">
              {company.shortDescription}
            </p>
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-fit rounded-full border border-ligne px-6 py-2 text-sm text-creme transition-colors hover:border-bronze hover:text-bronze-clair"
            >
              Visiter le site
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
