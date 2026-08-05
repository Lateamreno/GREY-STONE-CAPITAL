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
 * Quatre ellipses principales en trait plein, proportions généreuses
 * (~2,5:1, elles épousent le noyau) : deux diagonales — pointes sur les
 * médaillons — plus une horizontale et une verticale libres. Rosette
 * régulière à quarante-cinq degrés.
 */
const MAIN_ELLIPSES = [
  { rx: RX, ry: 70, angle: 45, dotted: false, starDur: 4.5, starBegin: 0 },
  { rx: RX, ry: 70, angle: 135, dotted: false, starDur: 6, starBegin: -2.5 },
  // Ellipses principales libres — reliées à rien
  { rx: RX, ry: 70, angle: 0, dotted: false, starDur: 5, starBegin: -1.5 },
  { rx: RX, ry: 70, angle: 90, dotted: false, starDur: 5.5, starBegin: -3.5 },
];

/** Deux ellipses pointillées nettement plus larges : le X décoratif */
const DOTTED_ELLIPSES = [
  { rx: RX, ry: 105, angle: 45, dotted: true, starDur: 9, starBegin: -3 },
  { rx: RX, ry: 105, angle: 135, dotted: true, starDur: 11, starBegin: -6 },
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

/**
 * Poussière d'or : particules déterministes (générateur à graine fixe,
 * indispensable pour le rendu statique) dispersées derrière le système.
 */
function makeDust(count: number) {
  let seed = 42;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  return Array.from({ length: count }, (_, index) => ({
    x: Math.round(rnd() * 470 + 5),
    y: Math.round(rnd() * 470 + 5),
    r: Math.round((rnd() * 0.7 + 0.4) * 100) / 100,
    opacity: Math.round((rnd() * 0.2 + 0.08) * 100) / 100,
    creme: rnd() > 0.65,
    twinkle: index % 4 === 0,
    dur: `${Math.round((rnd() * 5 + 4) * 10) / 10}s`,
    begin: `-${Math.round(rnd() * 60) / 10}s`,
  }));
}
const DUST = makeDust(70);

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
            <stop offset="0%" stopColor="rgba(193,155,110,0.15)" />
            <stop offset="40%" stopColor="rgba(193,155,110,0.07)" />
            <stop offset="65%" stopColor="rgba(193,155,110,0.03)" />
            <stop offset="85%" stopColor="rgba(193,155,110,0.01)" />
            <stop offset="100%" stopColor="rgba(193,155,110,0)" />
          </radialGradient>
          <filter id="gsc-blur" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="2.6" />
          </filter>
          <filter id="gsc-blur-lg" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
          {/* Modelé sphérique du noyau : lumière haut-gauche, ombre bas-droit */}
          <radialGradient id="gsc-sphere" cx="32%" cy="26%" r="90%">
            <stop offset="0%" stopColor="#292319" />
            <stop offset="40%" stopColor="#161412" />
            <stop offset="75%" stopColor="#0e0d0c" />
            <stop offset="100%" stopColor="#090808" />
          </radialGradient>
          {/* Très léger raccord lumineux au ras du bord interne */}
          <radialGradient id="gsc-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(193,155,110,0)" />
            <stop offset="88%" stopColor="rgba(193,155,110,0.015)" />
            <stop offset="97%" stopColor="rgba(193,155,110,0.06)" />
            <stop offset="100%" stopColor="rgba(193,155,110,0.1)" />
          </radialGradient>
        </defs>

        {/* Poussière d'or en fond */}
        {DUST.map((dust, index) => (
          <circle
            key={`dust-${index}`}
            cx={dust.x}
            cy={dust.y}
            r={dust.r}
            fill={dust.creme ? "#E6D4BD" : "#C19B6E"}
            opacity={dust.twinkle ? undefined : dust.opacity}
          >
            {dust.twinkle && (
              <animate
                attributeName="opacity"
                values={`${dust.opacity * 0.3};${Math.min(dust.opacity * 2.2, 0.5)};${dust.opacity * 0.3}`}
                dur={dust.dur}
                begin={dust.begin}
                repeatCount="indefinite"
              />
            )}
          </circle>
        ))}

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
                strokeWidth={ellipse.dotted ? 1.3 : 0.9}
                strokeDasharray={ellipse.dotted ? "0.1 8" : undefined}
                strokeLinecap="round"
                opacity={ellipse.dotted ? 0.42 : 0.5}
              />
              <Star
                rx={ellipse.rx}
                ry={ellipse.ry}
                dur={`${ellipse.starDur}s`}
                begin={`${ellipse.starBegin}s`}
                pulsed={!ellipse.dotted}
              />
              {/* Seconde étoile à l'opposé sur les ellipses pleines */}
              {!ellipse.dotted && (
                <Star
                  rx={ellipse.rx}
                  ry={ellipse.ry}
                  dur={`${ellipse.starDur}s`}
                  begin={`${ellipse.starBegin - ellipse.starDur / 2}s`}
                  pulsed
                />
              )}
            </g>
          ))}
        </g>

        {/* Halo et noyau — effet éclipse : couronne lumineuse asymétrique */}
        <circle cx="240" cy="240" r="130" fill="url(#gsc-glow)" />
        {/* Couronne solaire : la lumière déborde vers l'extérieur */}
        <circle
          cx="240"
          cy="240"
          r="88"
          fill="none"
          stroke="#C19B6E"
          strokeWidth="15"
          opacity="0.32"
          filter="url(#gsc-blur-lg)"
        />
        <circle
          cx="240"
          cy="240"
          r="82"
          fill="none"
          stroke="#E6D4BD"
          strokeWidth="3"
          opacity="0.55"
          filter="url(#gsc-blur)"
        />
        <circle cx="240" cy="240" r="76" fill="url(#gsc-sphere)" />
        <circle cx="240" cy="240" r="76" fill="url(#gsc-core-glow)" />
        {/* Liseré net */}
        <circle
          cx="240"
          cy="240"
          r="78"
          fill="none"
          stroke="#E6D4BD"
          strokeWidth="0.9"
          opacity="0.9"
        />
      </svg>

      {/* Noyau — holding */}
      <div className="absolute left-1/2 top-1/2 flex w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center sm:w-36">
        <p className="font-display text-[0.55rem] font-bold uppercase leading-snug tracking-[0.18em] text-creme sm:text-[0.7rem]">
          Grey Stone Capital
        </p>
        <span aria-hidden className="my-1.5 block h-px w-7 bg-bronze/60 sm:my-2 sm:w-8" />
        <p className="font-mono text-[0.45rem] uppercase leading-relaxed tracking-[0.15em] text-gris sm:text-[0.52rem]">
          Vision de groupe
          <br />
          Synergies
        </p>
      </div>

      {/* Carrousel des sociétés — disposition en X, orbite lente */}
      <div className="gsc-orbit pointer-events-none absolute inset-0">
        {nodes.map(({ company, position }) => (
          <Link
            key={company!.id}
            href={`/societes/${company!.slug}`}
            className={`group pointer-events-auto absolute ${position} h-[5rem] w-[5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-bronze/50 bg-[radial-gradient(circle_at_32%_26%,#1a1714,#0a0908_72%)] shadow-[inset_0_-8px_18px_rgba(193,155,110,0.12),inset_0_6px_12px_rgba(0,0,0,0.55),0_0_30px_rgba(193,155,110,0.22),0_18px_45px_rgba(0,0,0,0.6)] transition-[border-color,box-shadow] duration-300 hover:border-bronze-clair hover:shadow-[inset_0_-8px_18px_rgba(193,155,110,0.24),inset_0_6px_12px_rgba(0,0,0,0.55),0_0_50px_rgba(193,155,110,0.35),0_18px_45px_rgba(0,0,0,0.6)] sm:h-28 sm:w-28`}
          >
            <span className="gsc-orbit-rev flex h-full w-full flex-col items-center justify-center gap-0.5 rounded-full px-2.5 text-center sm:gap-1 sm:px-4">
              <CompanyGlyph
                icon={company!.icon}
                className="h-4 w-4 text-bronze transition-colors group-hover:text-bronze-clair sm:h-5 sm:w-5"
              />
              <span className="mt-0.5 font-display text-[0.5rem] font-bold uppercase leading-tight tracking-[0.08em] text-creme sm:mt-1 sm:text-[0.62rem]">
                {company!.name}
              </span>
              <span className="font-mono text-[0.45rem] uppercase tracking-[0.14em] text-bronze sm:text-[0.5rem]">
                {company!.cycleRole}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
