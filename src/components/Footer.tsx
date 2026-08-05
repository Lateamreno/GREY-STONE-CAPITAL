import Link from "next/link";
import { companies } from "@/config/companies";

export default function Footer() {
  return (
    <footer className="border-t border-ligne bg-noir-2">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span aria-hidden className="block h-9 w-px bg-bronze" />
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-sm font-bold uppercase tracking-[0.22em] text-creme">
                Grey Stone Capital
              </span>
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-bronze">
                Holding d&rsquo;innovation immobilière
              </span>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-gris">
            Le groupe Grey Stone Capital réunit et développe des sociétés
            immobilières innovantes, créatrices de valeur pour les détenteurs
            d&rsquo;actifs.
          </p>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-bronze">
            Le groupe
          </p>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="/#groupe" className="text-gris transition-colors hover:text-creme">
                Le groupe
              </Link>
            </li>
            <li>
              <Link href="/#systeme" className="text-gris transition-colors hover:text-creme">
                Le système
              </Link>
            </li>
            <li>
              <Link href="/societes" className="text-gris transition-colors hover:text-creme">
                Sociétés
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-bronze">
            Sociétés
          </p>
          <ul className="flex flex-col gap-3 text-sm">
            {companies.map((company) => (
              <li key={company.id}>
                <Link
                  href={`/societes/${company.slug}`}
                  className="text-gris transition-colors hover:text-creme"
                >
                  {company.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ligne">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-gris sm:flex-row sm:items-center sm:justify-between">
          <p>Grey Stone Capital — Tous droits réservés.</p>
          <p>Holding patrimoniale à dominante immobilière.</p>
        </div>
      </div>
    </footer>
  );
}
