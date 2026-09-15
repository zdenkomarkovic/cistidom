"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BUSINESS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#usluge", label: "Usluge" },
  { href: "#kako-radimo", label: "Kako radimo" },
  { href: "#o-nama", label: "O nama" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-heading text-lg font-bold text-ink">
          <Image
            src="/logo.jpg"
            alt={`${BUSINESS.name} logo`}
            width={40}
            height={40}
            className="size-10 rounded-full object-cover"
            priority
          />
          {BUSINESS.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={BUSINESS.phoneHref}
            className="text-sm font-semibold text-ink/80 hover:text-primary"
          >
            {BUSINESS.phone}
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
          >
            Pozovite nas
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-lg border border-ink/10 md:hidden"
          aria-label="Otvori meni"
          aria-expanded={open}
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 bg-ink transition",
                open && "translate-y-[5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 bottom-0 h-0.5 w-5 bg-ink transition",
                open && "-translate-y-[5px] -rotate-45"
              )}
            />
          </span>
        </button>
      </Container>

      {open && (
        <div className="border-t border-ink/10 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-bg-soft hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BUSINESS.phoneHref}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Pozovite nas – {BUSINESS.phone}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
