import type { Metadata } from "next";
import { groupe } from "@/content/groupe";
import PillLink from "@/components/PillLink";
import CycleDiagram from "@/components/CycleDiagram";
import { IconCreate, IconLayers, IconScreen } from "@/components/icons";

export const metadata: Metadata = {
  title: "Le groupe",
  description:
    "Histoire, thèse d'investissement et manière d'opérer du groupe Grey Stone Capital.",
};

const opererIcons = {
  create: IconCreate,
  layers: IconLayers,
  screen: IconScreen,
} as const;

export default function GroupePage() {
  return (
    <>
      {/* En-tête */}
      <section className="relative overflow-hidden border-b border-ligne">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 0%, rgba(193,155,110,0.07), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pt-32">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
            {groupe.hero.kicker}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-creme sm:text-5xl">
            {groupe.hero.title}
          </h1>
          <p className="mt-8 max-w-2xl leading-relaxed text-gris">
            {groupe.hero.intro}
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section className="border-b border-ligne">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-28 lg:grid-cols-[5fr_7fr]">
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
              {groupe.histoire.kicker}
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-creme">
              {groupe.histoire.title}
            </h2>
          </div>
          <div className="flex flex-col gap-6 lg:pt-12">
            {groupe.histoire.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-gris">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Thèse d'investissement + système */}
      <section className="border-b border-ligne bg-noir-2">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
            {groupe.these.kicker}
          </p>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-creme">
            {groupe.these.title}
          </h2>

          <blockquote className="mt-12 max-w-3xl border-l-2 border-bronze pl-6 sm:pl-8">
            <p className="font-display text-xl font-bold leading-relaxed text-bronze-clair sm:text-2xl">
              « {groupe.these.pullQuote} »
            </p>
          </blockquote>

          <div className="mt-14 grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              {groupe.these.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-gris">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="px-4 py-6 sm:px-10">
              <CycleDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* Manière d'opérer */}
      <section className="border-b border-ligne">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
            {groupe.operer.kicker}
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-creme">
            {groupe.operer.title}
          </h2>

          <div className="mt-16 grid border-t border-ligne sm:grid-cols-3 sm:border-l">
            {groupe.operer.items.map((item) => {
              const Icon = opererIcons[item.icon as keyof typeof opererIcons];
              return (
                <div
                  key={item.title}
                  className="flex flex-col gap-4 border-b border-ligne py-10 sm:border-b-0 sm:border-r sm:px-8 sm:py-12"
                >
                  <Icon className="h-7 w-7 text-bronze" />
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-bronze">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-gris">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vers les sociétés */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% 100%, rgba(193,155,110,0.07), transparent 60%)",
          }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-bronze">
            {groupe.closing.kicker}
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-creme">
            {groupe.closing.title}
          </h2>
          <PillLink href="/societes" className="mt-10">
            Voir les sociétés
          </PillLink>
        </div>
      </section>
    </>
  );
}
