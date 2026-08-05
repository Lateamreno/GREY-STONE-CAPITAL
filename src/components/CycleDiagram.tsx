import Link from "next/link";
import { companyById } from "@/config/companies";
import { CompanyGlyph } from "@/components/icons";

/**
 * Schéma du système de groupe — constellation orbitale rigide :
 * noyau Grey Stone Capital ; quatre sociétés en médaillons ronds disposés
 * en X et six ellipses étoilées, solidaires (même rotation lente d'un seul
 * bloc, contenu des médaillons contre-tourné pour rester droit). Étoiles
 * rapides, brillance pulsée par quart d'ellipse. Ellipses discrètes en
 * fond à vitesses propres. Animations coupées avec prefers-reduced-motion.
 */

/** Étoile à quatre branches (échelle ~unité) */
const STAR_PATH = "M0 -4.2 L1.1 -1.1 L4.2 0 L1.1 1.1 L0 4.2 L-1.1 1.1 L-4.2 0 L-1.1 -1.1 Z";

/** Trajectoire d'une ellipse rx/ry centrée (240,240), départ à droite */
function ellipsePath(rx: number, ry: number) {
  return `M ${240 + rx} 240 A ${rx} ${ry} 0 1 1 ${240 - rx} 240 A ${rx} ${ry} 0 1 1 ${240 + rx} 240`;
}

/**
 * Six ellipses visibles : figées par rapport aux médaillons (le groupe
 * entier tourne d'un bloc avec le carrousel). Étoiles rapides, brillance
 * pulsée par quart d'ellipse (passage des médaillons).
 */
const VISIBLE_ELLIPSES = [
  { rx: 175, ry: 68, angle: 20, dotted: false, starDur: "9s", starBegin: "0s" },
  { rx: 160, ry: 62, angle: 80, dotted: true, starDur: "12s", starBegin: "-4s" },
  { rx: 182, ry: 72, angle: 140, dotted: false, starDur: "14s", starBegin: "-7s" },
  { rx: 155, ry: 58, angle: 50, dotted: true, starDur: "10s", starBegin: "-2s" },
  { rx: 170, ry: 65, angle: 110, dotted: false, starDur: "15s", starBegin: "-11s" },
  { rx: 165, ry: 60, angle: 170, dotted: true, starDur: "8s", starBegin: "-5s" },
];

/** Brillance des étoiles : pic à chaque quart de tour, retour au calme entre deux */
const STAR_PULSE = {
  values: "1;0.4;1;0.4;1;0.4;1;0.4;1",
  halo: "0.9;0.1;0.9;0.1;0.9;0.1;0.9;0.1;0.9",
  keyTimes: "0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1",
};

/** Ellipses discrètes de fond */
const FAINT_ELLIPSES = [
  { rx: 205, ry: 88, angle: 35, spin: "gsc-spin-c" },
  { rx: 195, ry: 80, angle: 125, spin: "gsc-spin-e" },
];

/** Scintillements fixes en fond */
const TWINKLES = [
  { x: 96, y: 120, dur: "6s", begin: "0s" },
  { x: 388, y: 96, dur: "7.5s", begin: "-2s" },
  { x: 420, y: 300, dur: "5.5s", begin: "-4s" },
  { x: 70, y: 330, dur: "8s", begin: "-1s" },
  { x: 250, y: 60, dur: "6.5s", begin: "-3s" },
  { x: 210, y: 424, dur: "7s", begin: "-5s" },
];

export default function CycleDiagram() {
  const nodes = [
    { company: companyById("france-immeuble"), position: "left-[24%] top-[24%]" },
    { company: companyById("team-reno"), position: "left-[76%] top-[24%]" },
    { company: companyById("pleinbail"), position: "left-[24%] top-[76%]" },
    { company: companyById("fi-division"), position: "left-[76%] top-[76%]" },
  ].filter((node) => node.company !== undefined);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      <svg viewBox="0 0 480 480" className="h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="gsc-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(193,155,110,0.20)" />
            <stop offset="55%" stopColor="rgba(193,155,110,0.07)" />
            <stop offset="100%" stopColor="rgba(193,155,110,0)" />
          </radialGradient>
          <filter id="gsc-blur" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="2.6" />
          </filter>
        </defs>

        {/* Scintillements de fond */}
        {TWINKLES.map((twinkle) => (
          <circle
            key={`${twinkle.x}-${twinkle.y}`}
            cx={twinkle.x}
            cy={twinkle.y}
            r="1.3"
            fill="#E6D4BD"
          >
            <animate
              attributeName="opacity"
              values="0.08;0.7;0.08"
              dur={twinkle.dur}
              begin={twinkle.begin}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Ellipses discrètes */}
        {FAINT_ELLIPSES.map((ellipse) => (
          <g
            key={`faint-${ellipse.angle}`}
            className={ellipse.spin}
            style={{ transformOrigin: "240px 240px" }}
          >
            <ellipse
              cx="240"
              cy="240"
              rx={ellipse.rx}
              ry={ellipse.ry}
              transform={`rotate(${ellipse.angle} 240 240)`}
              fill="none"
              stroke="#C19B6E"
              strokeWidth="0.7"
              strokeDasharray="1 8"
              opacity="0.15"
            />
          </g>
        ))}

        {/* Six ellipses solidaires des médaillons (rotation commune) + étoiles */}
        <g className="gsc-orbit" style={{ transformOrigin: "240px 240px" }}>
          {VISIBLE_ELLIPSES.map((ellipse) => (
            <g
              key={`vis-${ellipse.angle}`}
              transform={`rotate(${ellipse.angle} 240 240)`}
            >
              <ellipse
                cx="240"
                cy="240"
                rx={ellipse.rx}
                ry={ellipse.ry}
                fill="none"
                stroke="#C19B6E"
                strokeWidth={ellipse.dotted ? 1.4 : 0.9}
                strokeDasharray={ellipse.dotted ? "0.1 8" : undefined}
                strokeLinecap="round"
                opacity={ellipse.dotted ? 0.45 : 0.38}
              />
              {/* Étoile rapide, brillance pulsée par quart d'ellipse */}
              <path d={STAR_PATH} fill="#E6D4BD" filter="url(#gsc-blur)">
                <animateMotion
                  dur={ellipse.starDur}
                  begin={ellipse.starBegin}
                  repeatCount="indefinite"
                  path={ellipsePath(ellipse.rx, ellipse.ry)}
                />
                <animate
                  attributeName="opacity"
                  values={STAR_PULSE.halo}
                  keyTimes={STAR_PULSE.keyTimes}
                  dur={ellipse.starDur}
                  begin={ellipse.starBegin}
                  repeatCount="indefinite"
                />
              </path>
              <path d={STAR_PATH} fill="#E6D4BD">
                <animateMotion
                  dur={ellipse.starDur}
                  begin={ellipse.starBegin}
                  repeatCount="indefinite"
                  path={ellipsePath(ellipse.rx, ellipse.ry)}
                />
                <animate
                  attributeName="opacity"
                  values={STAR_PULSE.values}
                  keyTimes={STAR_PULSE.keyTimes}
                  dur={ellipse.starDur}
                  begin={ellipse.starBegin}
                  repeatCount="indefinite"
                />
              </path>
            </g>
          ))}
        </g>

        {/* Halo et noyau */}
        <circle cx="240" cy="240" r="120" fill="url(#gsc-glow)" />
        <circle
          cx="240"
          cy="240"
          r="78"
          fill="none"
          stroke="#C19B6E"
          strokeWidth="5"
          opacity="0.4"
          filter="url(#gsc-blur)"
        />
        <circle cx="240" cy="240" r="76" fill="#121110" />
        <circle
          cx="240"
          cy="240"
          r="78"
          fill="none"
          stroke="#E6D4BD"
          strokeWidth="1.1"
          opacity="0.85"
        />
        <g className="gsc-spin-core" style={{ transformOrigin: "240px 240px" }}>
          <circle
            cx="240"
            cy="240"
            r="88"
            fill="none"
            stroke="#C19B6E"
            strokeWidth="0.8"
            strokeDasharray="1 6"
            opacity="0.5"
          />
        </g>
      </svg>

      {/* Noyau — holding */}
      <div className="absolute left-1/2 top-1/2 flex w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center sm:w-36">
        <p className="font-display text-[0.55rem] font-bold uppercase leading-snug tracking-[0.18em] text-creme sm:text-[0.7rem]">
          Grey Stone Capital
        </p>
        <span aria-hidden className="my-1.5 block h-px w-7 bg-bronze/60 sm:my-2 sm:w-8" />
        <p className="font-mono text-[0.45rem] uppercase leading-relaxed tracking-[0.15em] text-gris sm:text-[0.52rem]">
          Vision de groupe · synergies
        </p>
      </div>

      {/* Carrousel des sociétés — disposition en X, orbite lente */}
      <div className="gsc-orbit pointer-events-none absolute inset-0">
        {nodes.map(({ company, position }) => (
          <Link
            key={company!.id}
            href={`/societes/${company!.slug}`}
            className={`group pointer-events-auto absolute ${position} h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-bronze/50 bg-noir/95 shadow-[0_0_35px_rgba(193,155,110,0.16),0_18px_45px_rgba(0,0,0,0.6)] transition-[border-color,box-shadow] duration-300 hover:border-bronze-clair hover:shadow-[0_0_50px_rgba(193,155,110,0.3),0_18px_45px_rgba(0,0,0,0.6)] sm:h-32 sm:w-32`}
          >
            <span className="gsc-orbit-rev flex h-full w-full flex-col items-center justify-center gap-0.5 rounded-full px-2 text-center sm:gap-1 sm:px-3">
              <CompanyGlyph
                icon={company!.icon}
                className="h-5 w-5 text-bronze transition-colors group-hover:text-bronze-clair sm:h-6 sm:w-6"
              />
              <span className="mt-1 font-display text-[0.56rem] font-bold uppercase leading-tight tracking-[0.1em] text-creme sm:text-[0.66rem]">
                {company!.name}
              </span>
              <span className="font-mono text-[0.5rem] uppercase tracking-[0.16em] text-bronze">
                {company!.cycleRole}
              </span>
              <span aria-hidden className="mt-0.5 block h-px w-5 bg-bronze/60" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
