import { companyById } from "@/config/companies";
import { CompanyGlyph } from "@/components/icons";

/**
 * Schéma du système de groupe — constellation : la holding au centre
 * (vision de groupe, synergies), les quatre sociétés autour. Rayons pleins
 * vers le centre, anneau pointillé entre sociétés : chacune peut servir
 * chacune, la holding organise.
 */
export default function CycleDiagram() {
  const top = companyById("france-immeuble");
  const right = companyById("team-reno");
  const bottom = companyById("fi-division");
  const left = companyById("pleinbail");
  if (!top || !right || !bottom || !left) return null;

  const nodes = [
    { company: top, position: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/3" },
    { company: right, position: "right-0 top-1/2 -translate-y-1/2 translate-x-1/6 sm:translate-x-1/4" },
    { company: bottom, position: "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/3" },
    { company: left, position: "left-0 top-1/2 -translate-y-1/2 -translate-x-1/6 sm:-translate-x-1/4" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-md py-10">
      <svg viewBox="0 0 400 400" className="w-full" aria-hidden>
        {/* Anneau des synergies — pointillé, sans sens unique */}
        <circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="#C19B6E"
          strokeWidth="1"
          strokeDasharray="4 7"
          opacity="0.55"
        />
        {/* Rayons pleins : chaque société reliée au centre */}
        <line x1="200" y1="140" x2="200" y2="60" stroke="#C19B6E" strokeWidth="1" opacity="0.8" />
        <line x1="260" y1="200" x2="340" y2="200" stroke="#C19B6E" strokeWidth="1" opacity="0.8" />
        <line x1="200" y1="260" x2="200" y2="340" stroke="#C19B6E" strokeWidth="1" opacity="0.8" />
        <line x1="140" y1="200" x2="60" y2="200" stroke="#C19B6E" strokeWidth="1" opacity="0.8" />
        {/* Centre */}
        <circle cx="200" cy="200" r="60" fill="#121110" stroke="#C19B6E" strokeWidth="1" />
      </svg>

      {/* Centre — holding */}
      <div className="absolute left-1/2 top-1/2 flex w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
        <span aria-hidden className="mb-2 block h-4 w-px bg-bronze" />
        <p className="font-display text-[0.65rem] font-bold uppercase leading-tight tracking-[0.18em] text-creme">
          Grey Stone Capital
        </p>
        <p className="mt-1 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-gris">
          Vision de groupe · synergies
        </p>
      </div>

      {/* Nœuds sociétés */}
      {nodes.map(({ company, position }) => (
        <div
          key={company.id}
          className={`absolute ${position} flex w-32 flex-col items-center gap-1 border border-ligne bg-noir-2 px-3 py-3 text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] sm:w-36`}
        >
          <CompanyGlyph icon={company.icon} className="h-5 w-5 text-bronze" />
          <p className="font-display text-[0.7rem] font-bold leading-tight text-creme">
            {company.name}
          </p>
          <p className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-bronze">
            {company.cycleRole}
          </p>
        </div>
      ))}
    </div>
  );
}
