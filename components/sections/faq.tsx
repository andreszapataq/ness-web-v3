"use client";

import { useState } from "react";

const items = [
  {
    q: "¿Cómo protegen la información de los lotes y los pacientes?",
    a: "Aplicamos cifrado en tránsito y en reposo, control de acceso por rol y registros de auditoría de cada movimiento. Su información está aislada por cliente y nunca se comparte con terceros.",
  },
  {
    q: "¿Puedo exportar mi inventario y mis remisiones?",
    a: "Sí. Puede exportar inventarios, remisiones, gastos y egresos a Excel o PDF en cualquier momento, sin bloqueos ni permisos adicionales.",
  },
  {
    q: "¿Funciona para distribuidores pequeños o solo para grandes operaciones?",
    a: "Funciona para ambos. Ness Digital escala desde una bodega y un cliente hasta redes con decenas de bodegas, cientos de clientes y múltiples centros quirúrgicos.",
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
              className="w-full text-left p-6 sm:p-8 md:p-10 flex justify-between items-center gap-4 md:gap-6"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-bold">{item.q}</h3>
              <span
                className={`material-symbols-outlined transition-transform duration-300 shrink-0 ${
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
                <p className="px-6 pb-6 sm:px-8 sm:pb-8 md:px-10 md:pb-10 -mt-2 text-on-surface-variant font-medium leading-relaxed">
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
