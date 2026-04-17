"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";

const links = [
  { label: "Plataforma", href: "#workflows" },
  { label: "Demo", href: "#demo" },
  { label: "Preguntas", href: "#faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-2xl border-b border-black/5">
      <div className="flex justify-between items-center px-6 md:px-10 py-5 max-w-7xl mx-auto">
        <Link href="/" aria-label="Ness Digital — inicio" className="inline-flex items-center">
          <Logo className="h-8 md:h-9 w-auto" />
        </Link>

        <div className="hidden lg:flex gap-10 items-center text-sm font-bold uppercase tracking-widest text-on-surface-variant">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="hover:text-black transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://cal.com/nessdigital/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex whitespace-nowrap px-6 lg:px-8 py-2.5 bg-black text-white text-sm font-bold rounded-full signature-cta hover:scale-105 transition-transform"
          >
            Agende una demo
          </a>
          <a
            href="https://app.nessdigital.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex whitespace-nowrap px-8 py-2.5 text-sm font-bold rounded-full border border-black/15 text-black/75 hover:border-black/5 hover:text-black hover:bg-black/5 transition-colors"
          >
            Ingresar
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="lg:hidden w-11 h-11 inline-flex items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-white/95 backdrop-blur-2xl">
          <div className="flex flex-col px-6 py-6 gap-2 text-base font-bold uppercase tracking-widest">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-black/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://cal.com/nessdigital/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full signature-cta"
            >
              Agende una demo
            </a>
            <a
              href="https://app.nessdigital.co/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-8 py-4 rounded-full border border-black/15 text-black/75 normal-case tracking-normal hover:border-black/5 hover:text-black hover:bg-black/5 transition-colors"
            >
              Ingresar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
