import Link from "next/link";
import { companyById } from "@/config/companies";
import { CompanyGlyph } from "@/components/icons";

/**
 * Schéma du système de groupe — constellation orbitale rigide.
 * Quatre médaillons en X. Trois ellipses principales fines en trait plein
 * disposées en étoile : deux sur les diagonales (pointes exactement sur
 * les médaillons, au ras du centre) et une verticale libre. Deux ellipses
 * pointillées plus larges forment le X décoratif. Le tout est solidaire
 * et tourne d'un seul bloc avec les médaillons. Étoiles rapides derrière
 * les médaillons, brillantes sur un large plateau autour de chaque
 * passage. Animations coupées avec prefers-reduced-motion.
 */

/** Étoile à quatre branches */
const STAR_PATH = "M0 -4.2 L1.1 -1.1 L4.2 0 L1.1 1.1 L0 4.2 L-1.1 1.1 L-4.2 0 L-1.1 -1.1 Z";

/** Décalage des médaillons : 26 % du viewBox (positions 24 % / 76 %) */
const NODE_OFFSET = 0.26 * 480;
/** Demi grand axe des ellipses en diagonale : pointes sur les médaillons */
const RX = Math.round(NODE_OFFSET * Math.SQRT2 * 10) / 10;

/** Trajectoire d'une ellipse rx/ry centrée (240,240), départ à la pointe droite */
function ellipsePath(rx: number, ry: number) {
  return `M ${240 + rx} 240 A ${rx} ${ry} 0 1 1 ${240 - rx} 240 A ${rx} ${ry} 0 1 1 ${240 + rx} 240`;
}

/**
 * Trois ellipses principales fines (trait plein) en étoile : deux
 * diagonales — pointes sur les médaillons — et une verticale libre.
 */
const MAIN_ELLIPSES = [
  { rx: RX, ry: 46, angle: 45, dotted: false, starDur: "4.5s", starBegin: "0s" },
  { rx: RX, ry: 46, angle: 135, dotted: false, starDur: "6s", starBegin: "-2.5s" },
  // Ellipse principale libre — verticale, reliée à rien
  { rx: RX, ry: 46, angle: 90, dotted: false, starDur: "5s", starBegin: "-1.5s" },
];

/** Deux ellipses pointillées plus larges : le X décoratif, solidaire du bloc */
const DOTTED_ELLIPSES = [
  { rx: RX, ry: 95, angle: 45, dotted: true, starDur: "9s", starBegin: "-3s" },
  { rx: RX, ry: 95, angle: 135, dotted: true, starDur: "11s", starBegin: "-6s" },
];

/**
 * Brillance : plateau lumineux couvrant au moins un quart de la course
 * avant ET après chaque médaillon (pointes à t=0 et t=0,5), creux au
 * milieu du trajet entre deux.
 */
const STAR_PULSE = {
  keyTimes: "0;0.125;0.2;0.3;0.375;0.5;0.625;0.7;0.8;0.875;1",
  values: "1;1;0.4;0.4;1;1;1;0.4;0.4;1;1",
  halo: "1;1;0;0;1;1;1;0;0;1;1",
};

/** Scintillements fixes en fond */
const TWINKLES = [
  { x: 96, y: 120, dur: "6s", begin: "0s" },
  { x: 388, y: 96, dur: "7.5s", begin: "-2s" },
  { x: 420, y: 300, dur: "5.5s", begin: "-4s" },
  { x: 70, y: 330, dur: "8s", begin: "-1s" },
  { x: 250, y: 60, dur: "6.5s", begin: "-3s" },
  { x: 210, y: 424, dur: "7s", begin: "-5s" },
];

function Star({
  rx,
  ry,
  dur,
  begin,
  pulsed,
}: {
  rx: number;
  ry: number;
  dur: string;
  begin: string;
  pulsed: boolean;
}) {
  return (
    <>
      <path d={STAR_PATH} fill="#E6D4BD" filter="url(#gsc-blur)" opacity={pulsed ? undefined : 0.35}>
        <animateMotion dur={dur} begin={begin} repeatCount="indefinite" path={ellipsePath(rx, ry)} />
        {pulsed && (
          <animate
            attributeName="opacity"
            values={STAR_PULSE.halo}
            keyTimes={STAR_PULSE.keyTimes}
            dur={dur}
            begin={begin}
            repeatCount="indefinite"
          />
        )}
      </path>
      <path d={STAR_PATH} fill="#E6D4BD" opacity={pulsed ? undefined : 0.7}>
        <animateMotion dur={dur} begin={begin} repeatCount="indefinite" path={ellipsePath(rx, ry)} />
        {pulsed && (
          <animate
            attributeName="opacity"
            values={STAR_PULSE.values}
            keyTimes={STAR_PULSE.keyTimes}
            dur={dur}
            begin={begin}
            repeatCount="indefinite"
          />
        )}
      </path>
    </>
  );
}

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

        {/* Bloc solidaire : 3 ellipses principales fines + X pointillé + étoiles */}
        <g className="gsc-orbit" style={{ transformOrigin: "240px 240px" }}>
          {[...DOTTED_ELLIPSES, ...MAIN_ELLIPSES].map((ellipse) => (
            <g
              key={`ell-${ellipse.angle}-${ellipse.ry}`}
              transform={`rotate(${ellipse.angle} 240 240)`}
            >
              <ellipse
                cx="240"
                cy="240"
                rx={ellipse.rx}
                ry={ellipse.ry}
                fill="none"
                stroke="#C19B6E"
                strokeWidth={ellipse.dotted ? 1.2 : 0.8}
                strokeDasharray={ellipse.dotted ? "0.1 8" : undefined}
                strokeLinecap="round"
                opacity={ellipse.dotted ? 0.4 : 0.48}
              />
              <Star
                rx={ellipse.rx}
                ry={ellipse.ry}
                dur={ellipse.starDur}
                begin={ellipse.starBegin}
                pulsed={!ellipse.dotted}
              />
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
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
