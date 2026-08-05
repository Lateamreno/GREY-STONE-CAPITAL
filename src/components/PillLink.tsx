import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Bouton pilule du site : « outline » (bordure bronze, remplissage au
 * survol) par défaut, « solid » (plein bronze) pour le CTA principal.
 */
export default function PillLink({
  href,
  children,
  external = false,
  variant = "outline",
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  variant?: "outline" | "solid";
  className?: string;
}) {
  const base = "inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "solid"
      ? `${base} bg-bronze text-noir hover:bg-bronze-clair ${className}`
      : `${base} border border-bronze text-bronze hover:bg-bronze hover:text-noir ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
