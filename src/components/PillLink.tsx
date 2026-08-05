import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Bouton pilule unique du site — un seul style pour tous les CTA
 * (bordure bronze, remplissage bronze au survol).
 */
export default function PillLink({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const styles = `inline-flex items-center gap-2 rounded-full border border-bronze px-7 py-3 text-sm font-medium text-bronze transition-colors hover:bg-bronze hover:text-noir ${className}`;

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
