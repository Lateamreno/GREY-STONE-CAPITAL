import type { MetadataRoute } from "next";
import { companies } from "@/config/companies";

const BASE_URL = "https://www.greystonecapital.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/societes`, changeFrequency: "monthly", priority: 0.9 },
    ...companies.map((company) => ({
      url: `${BASE_URL}/societes/${company.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${BASE_URL}/mentions-legales`, changeFrequency: "yearly", priority: 0.1 },
  ];
}
