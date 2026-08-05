import Link from "next/link";
import { companyById } from "@/config/companies";
import { CompanyGlyph } from "@/components/icons";

/**
 * Schéma « atome » du système de groupe : noyau Grey Stone Capital
 * (vision de groupe, synergies), quatre sociétés sur l'anneau, orbites
 * elliptiques et particules bronze en circulation — les échanges vont
 * dans tous les sens, la holding organise. Animations désactivées si
 * prefers-reduced-motion.
 */

const RING_PATH =
  "M 410 240 A 170 170 0 1 1 70 240 A 170 170 0 1 1 410 240";
const ELLIPSE_PATH =
  "M 445 240 A 205 80 0 1 1 35 240 A 205 80 0 1 1 445 240";
const CENTER = { transformOrigin: "240px 240px" };

export default function CycleDiagram() {
  const top = companyById("france-immeuble");
  const right = companyById("team-reno");
  const bottom = companyById("fi-division");
  const left = companyById("pleinbail");
  if (!top || !right || !bottom || !left) return null;

  const nodes = [
    { company: top, position: "left-1/2 top-[14.6%]" },
    { company: right, position: "left-[85.4%] top-1/2" },
    { company: bottom, position: "left-1/2 top-[85.4%]" },
    { company: left, position: "left-[14.6%] top-1/2" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-lg px-2 py-8">
      <svg viewBox="0 0 480 480" className="w-full" aria-hidden>
        <defs>
          <radialGradient id="gsc-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(193,155,110,0.18)" />
            <stop offset="55%" stopColor="rgba(193,155,110,0.06)" />
            <stop offset="100%" stopColor="rgba(193,155,110,0)" />
          </radialGradient>
          <filter id="gsc-blur" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="2.4" />
          </filter>
        </defs>

        {/* Halo du noyau */}
        <circle cx="240" cy="240" r="120" fill="url(#gsc-glow)" />

        {/* Orbites elliptiques inclinées, en rotation lente */}
        <g className="gsc-spin" style={CENTER}>
          <ellipse
            cx="240"
            cy="240"
            rx="205"
            ry="80"
            transform="rotate(55 240 240)"
            fill="none"
            stroke="#C19B6E"
            strokeWidth="0.8"
            strokeDasharray="1 7"
            opacity="0.35"
          />
        </g>
        <g className="gsc-spin-rev" style={CENTER}>
          <ellipse
            cx="240"
            cy="240"
            rx="205"
            ry="80"
            transform="rotate(-55 240 240)"
            fill="none"
            stroke="#C19B6E"
            strokeWidth="0.8"
            strokeDasharray="1 7"
            opacity="0.3"
          />
        </g>

        {/* Anneau principal : trait fin + flux pointillé en mouvement */}
        <circle
          cx="240"
          cy="240"
          r="170"
          fill="none"
          stroke="#282522"
          strokeWidth="1"
        />
        <circle
          className="gsc-dash-flow"
          cx="240"
          cy="240"
          r="170"
          fill="none"
          stroke="#C19B6E"
          strokeWidth="1"
          strokeDasharray="2 14"
          opacity="0.5"
        />

        {/* Particules en circulation */}
        <circle r="2.6" fill="#E6D4BD" filter="url(#gsc-blur)">
          <animateMotion dur="16s" repeatCount="indefinite" path={RING_PATH} />
        </circle>
        <circle r="2.6" fill="#E6D4BD" opacity="0.9">
          <animateMotion dur="16s" repeatCount="indefinite" path={RING_PATH} />
        </circle>
        <circle r="2" fill="#C19B6E" opacity="0.85">
          <animateMotion
            dur="23s"
            begin="-9s"
            repeatCount="indefinite"
            path={RING_PATH}
          />
        </circle>
        <g transform="rotate(55 240 240)">
          <circle r="1.8" fill="#C19B6E" opacity="0.75">
            <animateMotion
              dur="19s"
              repeatCount="indefinite"
              path={ELLIPSE_PATH}
            />
          </circle>
        </g>
        <g transform="rotate(-55 240 240)">
          <circle r="1.8" fill="#C19B6E" opacity="0.75">
            <animateMotion
              dur="27s"
              begin="-7s"
              repeatCount="indefinite"
              path={ELLIPSE_PATH}
            />
          </circle>
        </g>

        {/* Noyau */}
        <g className="gsc-spin-core" style={CENTER}>
          <circle
            cx="240"
            cy="240"
            r="74"
            fill="none"
            stroke="#C19B6E"
            strokeWidth="0.8"
            strokeDasharray="1 6"
            opacity="0.6"
          />
        </g>
        <circle
          cx="240"
          cy="240"
          r="62"
          fill="#121110"
          stroke="#C19B6E"
          strokeWidth="1"
        />
      </svg>

      {/* Noyau — holding */}
      <div className="absolute left-1/2 top-1/2 flex w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
        <span aria-hidden className="mb-2 block h-4 w-px bg-bronze" />
        <p className="font-display text-[0.65rem] font-bold uppercase leading-tight tracking-[0.18em] text-creme">
          Grey Stone Capital
        </p>
        <p className="mt-1 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-gris">
          Vision de groupe · synergies
        </p>
      </div>

      {/* Nœuds sociétés — sur l'anneau, cliquables */}
      {nodes.map(({ company, position }) => (
        <Link
          key={company.id}
          href={`/societes/${company.slug}`}
          className={`group absolute ${position} flex w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 border border-ligne bg-noir px-2.5 py-3 text-center shadow-[0_16px_40px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-[calc(50%_+_3px)] hover:border-bronze sm:w-36 sm:px-4`}
        >
          <CompanyGlyph
            icon={company.icon}
            className="h-5 w-5 text-bronze transition-colors group-hover:text-bronze-clair"
          />
          <p className="font-display text-[0.66rem] font-bold leading-tight text-creme sm:text-xs">
            {company.name}
          </p>
          <p className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-bronze">
            {company.cycleRole}
          </p>
        </Link>
      ))}
    </div>
  );
}
