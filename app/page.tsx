import Image from "next/image";
import { Nav } from "@/components/sections/nav";
import { Faq } from "@/components/sections/faq";

const HERO_IMG = "/images/hero-dashboard.webp";
const FEATURE_IMG = "/images/feature-inventario-bodega.webp";
const TESTIMONIAL_AVATAR = "/images/testimonial-avatar.webp";
const STUDIO_IMG = "/images/operacion-logistica.webp";
const PRODUCT_DETAIL_IMG = "/images/plataforma-detalle.webp";
const TEXTURE_IMG = "/images/cta-textura.webp";

const stats = [
  { value: "9x", label: "Procesos más rápidos" },
  { value: "70%", label: "Menos tiempo de acceso" },
  { value: "6x", label: "Menos errores humanos" },
  { value: "100%", label: "Trazabilidad de lotes" },
];

const steps = [
  {
    n: "01",
    title: "Ingrese y ubique sus lotes",
    body: "Cargue lotes con sus datos clave y asígnelos a la bodega correspondiente. Ness Digital mantiene la ubicación de cada lote siempre actualizada.",
  },
  {
    n: "02",
    title: "Despache con precisión",
    body: "Cree remisiones por stock o por cirugía con los datos del paciente. Siga cada movimiento desde 'en tránsito' hasta 'entregado'.",
  },
  {
    n: "03",
    title: "Cierre la cirugía sin errores",
    body: "Registre el gasto de los lotes utilizados o libere los devueltos. El inventario se ajusta automáticamente.",
  },
];

const demoFeatures = [
  "Implementación guiada por nuestro equipo",
  "Migración asistida desde Excel u otros sistemas",
  "Capacitación incluida para todo su personal operativo",
  "Soporte continuo en horario extendido",
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          id="features"
          className="executive-slide pt-32 md:pt-64! scroll-mt-24"
        >
          <div className="content-container text-center">
            <div className="mb-6 md:mb-8 inline-block px-6 py-2 bg-black text-white rounded-full reveal-up">
              <span className="text-xs font-bold uppercase tracking-[0.3em]">
                Software para distribuidores de dispositivos médicos
              </span>
            </div>
            <h1
              className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-primary mb-6 md:mb-10 leading-[1.1] reveal-up"
              style={{ animationDelay: "80ms" }}
            >
              Trazabilidad total, del lote a la cirugía.
            </h1>
            <p
              className="text-base sm:text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed font-medium reveal-up"
              style={{ animationDelay: "160ms" }}
            >
              Ness Digital reemplaza sus Excel y procesos manuales por una
              plataforma que controla inventarios, despachos y cirugías en
              tiempo real — para que cada lote llegue al quirófano correcto, en
              el momento correcto.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-14 md:mb-24 reveal-up"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href="#demo"
                className="px-10 md:px-12 py-4 md:py-5 bg-black text-white font-bold rounded-2xl text-base md:text-lg signature-cta shadow-2xl hover:scale-[1.02] transition-transform"
              >
                Agende una demo
              </a>
              <a
                href="#workflows"
                className="px-10 md:px-12 py-4 md:py-5 bg-white border-2 border-black/5 text-primary font-bold rounded-2xl text-base md:text-lg hover:bg-surface-container transition-colors"
              >
                Conozca la plataforma
              </a>
            </div>
            <div
              className="relative group reveal-up"
              style={{ animationDelay: "320ms" }}
            >
              <div className="absolute -inset-4 bg-black/5 rounded-4xl blur-2xl group-hover:bg-black/10 transition-colors" />
              <div className="relative bg-white p-3 rounded-4xl shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-black/5">
                <Image
                  src={HERO_IMG}
                  alt="Panel de control de Ness Digital"
                  width={1600}
                  height={1000}
                  priority
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section
          id="workflows"
          className="executive-slide bg-surface-container-low scroll-mt-24"
        >
          <div className="content-container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
              <div className="max-w-xl">
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary mb-6 leading-tight">
                  Una sola plataforma para toda su operación logística y
                  quirúrgica.
                </h2>
                <p className="text-lg md:text-xl text-on-surface-variant font-medium">
                  De la entrada del lote a la bodega, hasta el gasto en cirugía
                  o el egreso por stock.
                </p>
              </div>
              <div className="hidden md:block h-px bg-outline-variant/30 grow mx-12 mb-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div className="bg-white p-10 md:p-12 rounded-3xl shadow-sm border border-black/5 flex flex-col h-full">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-white text-3xl">
                    grid_view
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Inventario preciso por bodega y global
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10 grow">
                  Controle lotes, seriales y vencimientos con visibilidad en
                  tiempo real de cada bodega y de su inventario consolidado.
                  Encuentre cualquier lote en segundos.
                </p>
                <div className="aspect-video bg-surface-container rounded-2xl overflow-hidden border border-black/5 relative">
                  <Image
                    src={FEATURE_IMG}
                    alt="Inventario por bodega y global"
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 md:space-y-10 flex flex-col">
                <div className="bg-black text-white p-10 md:p-12 rounded-3xl shadow-2xl flex flex-col justify-between flex-1 min-h-80">
                  <div>
                    <span className="material-symbols-outlined text-4xl mb-6 opacity-70">
                      bolt
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Despachos por stock y por cirugía
                    </h3>
                    <p className="text-gray-400 text-lg">
                      Genere remisiones con los datos del paciente o despache
                      directo por stock. Clientes y bodegas sin límites.
                    </p>
                  </div>
                  <a
                    href="#demo"
                    className="mt-8 text-lg font-bold flex items-center gap-3 hover:gap-5 transition-all w-fit group"
                  >
                    Ver en una demo
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="bg-white p-10 md:p-12 rounded-3xl shadow-sm border border-black/5 flex flex-col flex-1 min-h-60">
                  <span className="material-symbols-outlined text-4xl mb-6 text-primary">
                    forum
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Trazabilidad y gasto de lotes
                  </h3>
                  <p className="text-on-surface-variant text-lg">
                    Siga el estado de cada remisión, libere lotes solo con la
                    firma del cliente y registre el gasto en cirugía sin
                    duplicar trabajo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="executive-slide">
          <div className="content-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`text-center p-6 md:p-8 ${
                    i > 0 ? "md:border-l border-black/5" : ""
                  } ${i > 0 && i % 2 === 0 ? "md:border-l" : ""}`}
                >
                  <div className="text-5xl md:text-7xl font-extrabold text-primary mb-4 tracking-tighter">
                    {s.value}
                  </div>
                  <div className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-on-surface-variant">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built for scale */}
        <section className="executive-slide bg-black text-white">
          <div className="content-container">
            <div className="text-center mb-20 md:mb-32">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
                Diseñado para crecer con su operación.
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
                Tres pasos claros que conectan bodega, despacho y quirófano sin
                fricción.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
              {steps.map((s) => (
                <div key={s.n} className="relative group">
                  <div className="text-[120px] font-black opacity-10 absolute -top-16 -left-8 pointer-events-none group-hover:opacity-20 transition-opacity select-none">
                    {s.n}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                      {s.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="executive-slide">
          <div className="content-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
              <div className="space-y-8 md:space-y-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                  Lo que dicen nuestros clientes
                </h2>
                <div className="relative pl-8 md:pl-12 border-l-8 border-black">
                  <div
                    className="flex gap-1 mb-6 md:mb-8"
                    aria-label="5 de 5 estrellas"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-primary text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  {/* TODO: reemplazar con testimonio real de cliente */}
                  <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed mb-8 md:mb-10 italic">
                    &ldquo;Antes dependíamos de Excel y de llamadas para saber
                    dónde estaba cada lote. Con Ness Digital tenemos toda la
                    operación en una sola pantalla — despachamos más cirugías
                    con el mismo equipo y dejamos de perder material.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-6">
                    <Image
                      src={TESTIMONIAL_AVATAR}
                      alt="Cliente de Ness Digital"
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-xl font-bold">Victor Cadena</div>
                      <div className="text-on-surface-variant font-medium">
                        Dir. de Biológicos, BioTissue Colombia
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="aspect-square rounded-3xl overflow-hidden grayscale relative">
                    <Image
                      src={STUDIO_IMG}
                      alt="Operación logística"
                      fill
                      sizes="(min-width: 768px) 25vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-surface-container-high p-8 md:p-10 rounded-3xl text-center">
                    <div className="text-3xl md:text-4xl font-black mb-2">
                      98%
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                      Satisfacción
                    </div>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-black text-white p-8 md:p-10 rounded-3xl text-center">
                    <div className="text-3xl md:text-4xl font-black mb-2 text-white">
                      24/7
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60">
                      Soporte
                    </div>
                  </div>
                  <div className="aspect-4/5 rounded-3xl overflow-hidden grayscale relative">
                    <Image
                      src={PRODUCT_DETAIL_IMG}
                      alt="Detalle de la plataforma"
                      fill
                      sizes="(min-width: 768px) 25vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo */}
        <section id="demo" className="executive-slide bg-surface-container scroll-mt-24">
          <div className="content-container">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                Conozca Ness Digital en acción.
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-medium leading-relaxed">
                Agende una demo personalizada de 30 minutos. Le mostramos la
                plataforma con su flujo real de inventario, despacho y
                cirugía — sin compromiso.
              </p>
            </div>
            <div className="max-w-3xl mx-auto bg-black text-white p-10 md:p-16 rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.2)]">
              <div className="text-xs font-black uppercase tracking-[0.3em] opacity-50 mb-8 md:mb-12">
                Qué incluye la implementación
              </div>
              <ul className="space-y-4 md:space-y-6 mb-10 md:mb-14">
                {demoFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-4 text-lg font-medium"
                  >
                    <span className="material-symbols-outlined text-white shrink-0">
                      check_circle
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <a
                  href="#cta"
                  className="flex-1 text-center py-5 bg-white text-black font-bold rounded-2xl text-lg hover:scale-[1.02] transition-transform"
                >
                  Agende su demo
                </a>
                <a
                  href="#cta"
                  className="flex-1 text-center py-5 border-2 border-white/20 text-white font-bold rounded-2xl text-lg hover:bg-white/10 transition-colors"
                >
                  Hable con ventas
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="executive-slide overflow-hidden">
          <div className="content-container">
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">
                  Se conecta con las herramientas que ya usa.
                </h2>
                <p className="text-lg md:text-xl text-on-surface-variant font-medium mb-12 leading-relaxed">
                  Ness Digital se integra con su software contable, su correo
                  corporativo y sus sistemas internos para que la información
                  fluya sin capturas duplicadas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-6 p-6 bg-surface-container-low rounded-2xl border border-black/5">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white shrink-0">
                      <span className="material-symbols-outlined">cloud</span>
                    </div>
                    <span className="text-lg font-bold">
                      Software contable y ERP
                    </span>
                  </div>
                  <div className="flex items-center gap-6 p-6 bg-surface-container-low rounded-2xl border border-black/5">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white shrink-0">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <span className="text-lg font-bold">
                      Correo y notificaciones
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 relative h-105 md:h-125 w-full flex items-center justify-center">
                <div className="absolute w-80 h-80 md:w-112.5 md:h-112.5 border border-black/5 rounded-full" />
                <div
                  className="absolute w-55 h-55 md:w-75 md:h-75 border border-black/10 rounded-full"
                  style={{
                    animation: "slow-spin 20s linear infinite",
                  }}
                />
                <div className="z-20 w-32 h-32 md:w-40 md:h-40 bg-black text-white rounded-4xl flex items-center justify-center shadow-2xl">
                  <span className="text-2xl md:text-3xl font-black">ND</span>
                </div>
                <div className="absolute top-1/4 right-0 md:-right-4 w-16 h-16 md:w-20 md:h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center border border-black/5">
                  <span className="material-symbols-outlined text-2xl md:text-3xl">
                    token
                  </span>
                </div>
                <div className="absolute bottom-1/4 left-0 md:-left-4 w-16 h-16 md:w-20 md:h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center border border-black/5">
                  <span className="material-symbols-outlined text-2xl md:text-3xl">
                    database
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="executive-slide bg-surface scroll-mt-24">
          <div className="content-container">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-16 md:mb-20 text-center">
              Preguntas frecuentes
            </h2>
            <Faq />
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="executive-slide scroll-mt-24">
          <div className="content-container bg-black rounded-[3rem] md:rounded-[4rem] p-12 sm:p-20 md:p-40 text-center relative overflow-hidden shadow-[0_80px_150px_rgba(0,0,0,0.3)]">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <Image
                src={TEXTURE_IMG}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
                aria-hidden
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-extrabold text-white mb-12 md:mb-16 leading-tight tracking-tight">
                Lleve el control total de su operación quirúrgica.
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center">
                <a
                  href="#"
                  className="px-10 md:px-16 py-5 md:py-6 bg-white text-black font-black text-lg md:text-xl rounded-2xl signature-cta hover:scale-105 transition-transform"
                  style={{ background: "#fff", color: "#000" }}
                >
                  Agende una demo
                </a>
                <a
                  href="#"
                  className="px-10 md:px-16 py-5 md:py-6 border-2 border-white/20 text-white font-black text-lg md:text-xl rounded-2xl hover:bg-white/10 transition-colors"
                >
                  Hable con ventas
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 md:py-20 px-6 md:px-8 bg-white border-t border-black/5">
        <div className="content-container flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 font-bold uppercase tracking-widest text-[10px] text-on-surface-variant">
          <div className="text-2xl font-black tracking-tighter text-black lowercase">
            ness digital.
          </div>
          <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a className="hover:text-black transition-colors" href="#">
              Privacidad
            </a>
            <a className="hover:text-black transition-colors" href="#">
              Términos
            </a>
            <a className="hover:text-black transition-colors" href="#">
              Seguridad
            </a>
            <a className="hover:text-black transition-colors" href="#">
              Contacto
            </a>
          </nav>
          <div className="normal-case tracking-normal opacity-50 font-medium">
            © 2026 Ness Digital. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}
