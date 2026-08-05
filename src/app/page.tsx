import Link from "next/link";
import { companies, groupThesis } from "@/config/companies";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-ligne">
        <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
            Holding patrimoniale immobilière
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-creme sm:text-5xl">
            {groupThesis}
          </h1>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/participations"
              className="rounded-full bg-bronze px-7 py-3 text-sm font-medium text-noir transition-colors hover:bg-bronze-clair"
            >
              Découvrir les participations
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
    </>
  );
}
