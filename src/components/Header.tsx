"use client";

import { useState } from "react";
import Link from "next/link";
import { companies } from "@/config/companies";
import { IconChevron } from "@/components/icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ligne bg-noir/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" onClick={close} className="group flex items-center gap-3">
          <span
            aria-hidden
            className="block h-9 w-px bg-bronze transition-colors group-hover:bg-bronze-clair"
          />
          <span className="flex flex-col gap-0.5">
            <span className="font-display text-sm font-bold uppercase tracking-[0.22em] text-creme">
              Grey Stone Capital
            </span>
            <span className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-bronze">
              Catalyseur d&rsquo;innovation immobilière
            </span>
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-8 sm:flex">
          <Link
            href="/#groupe"
            className="text-sm text-gris transition-colors hover:text-creme"
          >
            Le groupe
          </Link>

          <div className="group relative">
            <Link
              href="/societes"
              className="flex items-center gap-1.5 text-sm text-gris transition-colors hover:text-creme"
            >
              Sociétés
              <IconChevron className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute right-0 top-full pt-4 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-72 border border-ligne bg-noir-2 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                {companies.map((company) => (
                  <Link
                    key={company.id}
                    href={`/societes/${company.slug}`}
                    className="flex flex-col gap-0.5 border-b border-ligne px-5 py-4 transition-colors hover:bg-noir-3"
                  >
                    <span className="font-display text-sm font-bold text-creme">
                      {company.name}
                    </span>
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-bronze">
                      {company.metier}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/societes"
                  className="block px-5 py-3.5 text-sm text-gris transition-colors hover:bg-noir-3 hover:text-creme"
                >
                  Toutes les sociétés
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Bouton burger mobile */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`block h-px w-6 bg-creme transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-creme transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Panneau mobile */}
      {open && (
        <nav className="border-t border-ligne bg-noir sm:hidden">
          <Link
            href="/#groupe"
            onClick={close}
            className="block border-b border-ligne px-6 py-5 font-display text-lg font-bold text-creme"
          >
            Le groupe
          </Link>
          <Link
            href="/societes"
            onClick={close}
            className="block border-b border-ligne px-6 py-5 font-display text-lg font-bold text-creme"
          >
            Sociétés
          </Link>
          {companies.map((company) => (
            <Link
              key={company.id}
              href={`/societes/${company.slug}`}
              onClick={close}
              className="flex items-baseline justify-between border-b border-ligne px-6 py-4 pl-10"
            >
              <span className="text-sm text-creme">{company.name}</span>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-bronze">
                {company.metier}
              </span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
