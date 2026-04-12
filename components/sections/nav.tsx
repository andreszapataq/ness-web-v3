"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Features", href: "#features", active: true },
  { label: "Workflows", href: "#workflows" },
  { label: "Pricing", href: "#pricing" },
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
        <a href="#" className="text-2xl font-black tracking-tighter">
          TaskGo
        </a>

        <div className="hidden md:flex gap-10 items-center text-sm font-bold uppercase tracking-widest text-on-surface-variant">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={
                l.active
                  ? "text-black border-b-2 border-black pb-1"
                  : "hover:text-black transition-colors"
              }
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden sm:inline-flex px-8 py-2.5 bg-black text-white text-sm font-bold rounded-full signature-cta hover:scale-105 transition-transform"
          >
            Get Started
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden w-11 h-11 inline-flex items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/95 backdrop-blur-2xl">
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
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full signature-cta"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
