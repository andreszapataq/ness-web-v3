"use client";

import { useState } from "react";

const items = [
  {
    q: "How secure is my team's data?",
    a: "We use AES-256 encryption at rest and TLS 1.3 for data in transit. Infrastructure is SOC 2 Type II compliant.",
  },
  {
    q: "Can I export my data if I leave?",
    a: "Yes, you own your data. Export projects and tasks in CSV or JSON at any time from your settings panel.",
  },
  {
    q: "Discounts for non-profits?",
    a: "We offer a 50% discount for registered 501(c)(3) organizations. Contact our sales team for verification.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className="bg-white rounded-3xl border border-black/5 hover:border-black/10 transition-colors overflow-hidden"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full text-left p-10 flex justify-between items-center gap-6"
            >
              <h3 className="text-xl font-bold">{item.q}</h3>
              <span
                className={`material-symbols-outlined transition-transform duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
                aria-hidden
              >
                chevron_right
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-10 pb-10 -mt-2 text-on-surface-variant font-medium leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
