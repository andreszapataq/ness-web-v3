"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "@/components/ui/logo";

const MENU_EASE = [0.22, 1, 0.36, 1] as const;

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
            data-open={open}
            className="group lg:hidden relative w-11 h-11 inline-flex items-center justify-center rounded-full border border-black/10 text-black transition-[background-color,border-color,transform,color] duration-300 ease-out hover:bg-black hover:text-white active:scale-90 data-[open=true]:bg-black data-[open=true]:text-white data-[open=true]:border-black"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block w-5 h-5">
              <span
                aria-hidden
                className="absolute left-0 right-0 top-1 h-0.5 bg-current rounded-full origin-center transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-data-[open=true]:translate-y-1.25 group-data-[open=true]:rotate-45"
              />
              <span
                aria-hidden
                className="absolute left-0 right-0 top-2.25 h-0.5 bg-current rounded-full origin-center transition-[opacity,transform] duration-200 ease-out group-data-[open=true]:opacity-0 group-data-[open=true]:scale-x-0"
              />
              <span
                aria-hidden
                className="absolute left-0 right-0 top-3.5 h-0.5 bg-current rounded-full origin-center transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-data-[open=true]:-translate-y-1.25 group-data-[open=true]:-rotate-45"
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: MENU_EASE },
              opacity: { duration: 0.25, ease: "easeOut" },
            }}
            className="lg:hidden overflow-hidden border-t border-black/5 bg-white/95 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.35, ease: MENU_EASE }}
              className="flex flex-col px-6 py-6 gap-2 text-base font-bold uppercase tracking-widest"
            >
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 border-b border-black/5 transition-colors hover:text-black"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://cal.com/nessdigital/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full signature-cta normal-case tracking-normal"
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
