import type { SVGProps } from "react";
import type { CompanyIcon } from "@/config/companies";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Immeuble — transaction */
export function IconBuilding(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="14" height="18" />
      <path d="M9 7h2m2 0h2M9 11h2m2 0h2M9 15h2m2 0h2M10 21v-3h4v3" />
    </svg>
  );
}

/** Rouleau — travaux */
export function IconRoller(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="12" height="5" rx="1" />
      <path d="M16 6.5h3.5v4H12v3.5" />
      <rect x="10.75" y="16" width="2.5" height="5" rx="0.5" />
    </svg>
  );
}

/** Fenêtre d'annonces — plateforme */
export function IconPlatform(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 9h18M7 13h6M7 16h4" />
    </svg>
  );
}

/** Créer */
export function IconCreate(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8.5v7M8.5 12h7" />
    </svg>
  );
}

/** Structurer */
export function IconLayers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 21 8l-9 4.5L3 8l9-4.5Z" />
      <path d="m3 12.5 9 4.5 9-4.5M3 17l9 4.5L21 17" opacity={0.85} />
    </svg>
  );
}

/** Digitaliser */
export function IconScreen(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4.5" width="18" height="12" rx="1" />
      <path d="M9 20.5h6M12 16.5v4M7 9l3 2.5L7 14M12.5 14H17" />
    </svg>
  );
}

export function IconChevron(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function CompanyGlyph({
  icon,
  ...props
}: IconProps & { icon: CompanyIcon }) {
  if (icon === "building") return <IconBuilding {...props} />;
  if (icon === "roller") return <IconRoller {...props} />;
  return <IconPlatform {...props} />;
}
