import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Polices auto-hébergées (fichiers variables committés) : aucune requête
 * réseau au build ni au chargement — pas de next/font/google (charte).
 */
const archivo = localFont({
  src: "../fonts/archivo.woff2",
  weight: "700 800",
  variable: "--font-archivo",
  display: "swap",
});
const inter = localFont({
  src: "../fonts/inter.woff2",
  weight: "400 600",
  variable: "--font-inter",
  display: "swap",
});
const jetbrainsMono = localFont({
  src: "../fonts/jetbrains-mono.woff2",
  weight: "400 500",
  variable: "--font-jbmono",
  display: "swap",
});

const SITE_URL = "https://www.greystonecapital.fr";
const DESCRIPTION =
  "Grey Stone Capital prend des participations et crée des sociétés immobilières innovantes, créatrices de valeur pour les détenteurs d'actifs.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Grey Stone Capital — Holding d'innovation immobilière",
    template: "%s — Grey Stone Capital",
  },
  description: DESCRIPTION,
  // URL canonique par page : Google indexe l'adresse en www
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Grey Stone Capital",
    title: "Grey Stone Capital — Holding d'innovation immobilière",
    description: DESCRIPTION,
    url: SITE_URL,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Grey Stone Capital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grey Stone Capital — Holding d'innovation immobilière",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

/** Schema.org Organization (charte SEO) */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Grey Stone Capital",
  url: SITE_URL,
  logo: `${SITE_URL}/og.png`,
  description: DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
