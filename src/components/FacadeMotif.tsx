/**
 * Motif architectural sobre — placeholder visuel en attendant les
 * photographies définitives (charte : placeholders sobres, pas de photos
 * de personnes). Façade abstraite, fenêtres éclairées en bronze.
 */

const COLS = 7;
const ROWS = 9;
const CELL = 30;
const GAP = 10;

/** Fenêtres « éclairées » (déterministe, pas d'aléatoire au rendu) */
const LIT = new Set(["1-2", "2-5", "3-1", "4-6", "5-3", "0-7", "6-4", "2-0"]);

export default function FacadeMotif({
  className = "",
}: {
  className?: string;
}) {
  const width = COLS * CELL + (COLS - 1) * GAP;
  const height = ROWS * CELL + (ROWS - 1) * GAP;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      aria-hidden
      role="presentation"
    >
      {Array.from({ length: COLS }).map((_, col) =>
        Array.from({ length: ROWS }).map((_, row) => {
          const lit = LIT.has(`${col}-${row}`);
          return (
            <rect
              key={`${col}-${row}`}
              x={col * (CELL + GAP)}
              y={row * (CELL + GAP)}
              width={CELL}
              height={CELL}
              fill={lit ? "rgba(193,155,110,0.28)" : "transparent"}
              stroke={lit ? "rgba(193,155,110,0.5)" : "#282522"}
              strokeWidth="1"
            />
          );
        }),
      )}
    </svg>
  );
}
