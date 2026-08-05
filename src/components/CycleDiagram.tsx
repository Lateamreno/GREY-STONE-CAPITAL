import { companies } from "@/config/companies";
import { CompanyGlyph } from "@/components/icons";

/**
 * Schéma du système de groupe : les trois sociétés en cycle,
 * la holding au centre (vision de groupe, synergies).
 */
export default function CycleDiagram() {
  const [a, b, c] = companies;

  return (
    <div className="relative mx-auto w-full max-w-md">
      <svg viewBox="0 0 400 400" className="w-full" aria-hidden>
        {/* Orbite */}
        <circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="#282522"
          strokeWidth="1"
        />
        {/* Flèches de cycle (sens horaire) */}
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill="#C19B6E" />
          </marker>
        </defs>
        <path
          d="M 310 130 A 140 140 0 0 1 310 270"
          fill="none"
          stroke="#C19B6E"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
          opacity="0.8"
        />
        <path
          d="M 265 315 A 140 140 0 0 1 135 315"
          fill="none"
          stroke="#C19B6E"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
          opacity="0.8"
        />
        <path
          d="M 90 270 A 140 140 0 0 1 90 130"
          fill="none"
          stroke="#C19B6E"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
          opacity="0.8"
        />
        {/* Liens vers le centre */}
        <line x1="200" y1="118" x2="200" y2="60" stroke="#282522" strokeDasharray="3 4" />
        <line x1="146" y1="252" x2="79" y2="308" stroke="#282522" strokeDasharray="3 4" />
        <line x1="254" y1="252" x2="321" y2="308" stroke="#282522" strokeDasharray="3 4" />
        {/* Centre */}
        <circle cx="200" cy="200" r="62" fill="#121110" stroke="#C19B6E" strokeWidth="1" />
      </svg>

      {/* Centre — holding */}
      <div className="absolute left-1/2 top-1/2 flex w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
        <span aria-hidden className="mb-2 block h-5 w-px bg-bronze" />
        <p className="font-display text-[0.68rem] font-bold uppercase leading-tight tracking-[0.18em] text-creme">
          Grey Stone Capital
        </p>
        <p className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.14em] text-gris">
          Vision de groupe · synergies
        </p>
      </div>

      {/* Nœuds sociétés */}
      {[
        { company: a, position: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/3" },
        { company: c, position: "bottom-0 right-0 translate-y-1/4 sm:translate-x-1/4" },
        { company: b, position: "bottom-0 left-0 translate-y-1/4 sm:-translate-x-1/4" },
      ].map(({ company, position }) => (
        <div
          key={company.id}
          className={`absolute ${position} flex flex-col items-center gap-1 border border-ligne bg-noir-2 px-4 py-3 text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
        >
          <CompanyGlyph icon={company.icon} className="h-5 w-5 text-bronze" />
          <p className="font-display text-xs font-bold text-creme">
            {company.name}
          </p>
          <p className="font-mono text-[0.55rem] uppercase tracking-[0.16em] text-bronze">
            {company.cycleRole}
          </p>
        </div>
      ))}
    </div>
  );
}
