"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Activity,
  Sliders,
  BookOpen,
  Network,
  Truck,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const modulosJaltest = [
  {
    titulo: "Diagnóstico de sistemas y fallas",
    descripcion:
      "Lectura y borrado de DTCs y parámetros en tiempo real de motor, frenos ABS/EBS y transmisión.",
    icono: Activity,
  },
  {
    titulo: "Calibraciones y ajustes",
    descripcion:
      "Reseteo de mantenimientos y calibración de embragues, inyectores y actuadores.",
    icono: Sliders,
  },
  {
    titulo: "Información técnica y guías",
    descripcion:
      "Esquemas de fusibles, pares de apriete, datos de fabricante y procedimientos guiados.",
    icono: BookOpen,
  },
  {
    titulo: "Diagramas eléctricos interactivos",
    descripcion:
      "Interpretación de diagramas para ubicar fallas en sensores y líneas cortadas.",
    icono: Network,
  },
  {
    titulo: "Cobertura multimarca pesada",
    descripcion:
      "Volvo, Scania, Mercedes-Benz, MAN, DAF, Iveco y más marcas del mercado.",
    icono: Truck,
  },
];

const beneficiosRapidos = [
  { icon: Wrench, texto: "Práctico con equipos reales" },
  { icon: Award, texto: "Certificado de participación" },
  { icon: ShieldCheck, texto: "Soporte técnico posterior" },
];

const imagenesCarrusel = [
  { src: "/img/KITJALTEST/1.png", alt: "Capacitación de diagnóstico Jaltest" },
  {
    src: "/img/KITJALTEST/2.png",
    alt: "Pruebas de diagnóstico en vivo en camiones",
  },
  { src: "/img/KITJALTEST/3.png", alt: "Uso del software Jaltest Cojali" },
  { src: "/img/KITJALTEST/4.png", alt: "Uso del software Jaltest Cojali" },
  { src: "/img/KITJALTEST/5.png", alt: "Uso del software Jaltest Cojali" },
  { src: "/img/KITJALTEST/6.png", alt: "Uso del software Jaltest Cojali" },
  { src: "/img/KITJALTEST/7.png", alt: "Uso del software Jaltest Cojali" },
];

const WHATSAPP_NUMERO = "59178361900";
const WHATSAPP_MENSAJE = encodeURIComponent(
  "Hola Diesel Soft, deseo obtener más información e inscribirme a la Capacitación de Diagnóstico con Jaltest.",
);

export default function Capacitaciones() {
  const [indiceActual, setIndiceActual] = useState(0);
  const [pausado, setPausado] = useState(false);
  const reducirMovimiento = useReducedMotion();
  const total = imagenesCarrusel.length;

  const anterior = useCallback(() => {
    setIndiceActual((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const siguiente = useCallback(() => {
    setIndiceActual((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  useEffect(() => {
    if (pausado || reducirMovimiento) return;
    const intervalo = setInterval(siguiente, 5000);
    return () => clearInterval(intervalo);
  }, [pausado, reducirMovimiento, siguiente]);

  const imagen = imagenesCarrusel[indiceActual];

  return (
    <motion.section
      initial={{ opacity: 0, y: reducirMovimiento ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      aria-labelledby="titulo-capacitacion"
      className="relative mx-auto mt-12 w-full max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-2xl md:p-10 lg:p-12"
    >
      {/* Resplandores de fondo sutiles */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* ENCABEZADO */}
      <header className="relative z-10 mx-auto mb-10 max-w-3xl text-center">
        <h2
          id="titulo-capacitacion"
          className="mt-4 font-montserrat text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl"
        >
          Diagnóstico de camiones con{" "}
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
            Jaltest by Cojali
          </span>
        </h2>

        <p className="mt-4 font-montserrat text-sm leading-relaxed text-zinc-400 md:text-base">
          Aprende a dominar el scanner líder en el sector pesado: diagnostica
          fallas complejas, reprograma parámetros y realiza calibraciones en
          unidades reales.
        </p>

        {/* Badges Rápidos */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {beneficiosRapidos.map(({ icon: Icon, texto }) => (
            <div
              key={texto}
              className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300"
            >
              <Icon className="h-4 w-4 text-blue-400" />
              <span>{texto}</span>
            </div>
          ))}
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL EN GRID */}
      <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
        {/* COLUMNA IZQUIERDA: CARRUSEL */}
        <div
          className="flex flex-col gap-4 lg:col-span-5 lg:sticky lg:top-8"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-xl">
            {/* Contador */}
            <div className="absolute left-4 top-4 z-20 rounded-md border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-xs text-zinc-300 backdrop-blur-md">
              <span className="font-bold text-blue-400">
                {String(indiceActual + 1).padStart(2, "0")}
              </span>
              <span className="mx-1 text-zinc-600">/</span>
              {String(total).padStart(2, "0")}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={indiceActual}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reducirMovimiento ? 0 : 0.25 }}
                className="relative h-full w-full"
              >
                <img
                  src={imagen.src}
                  alt={imagen.alt}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradiente inferior para controles */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-10" />

            {/* Botones de navegación */}
            <div className="absolute inset-x-3 top-1/2 z-20 flex -translate-y-1/2 justify-between">
              <button
                type="button"
                onClick={anterior}
                aria-label="Anterior"
                className="rounded-full border border-white/10 bg-black/50 p-2 text-white/80 backdrop-blur-md transition hover:border-white/30 hover:bg-black/80 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={siguiente}
                aria-label="Siguiente"
                className="rounded-full border border-white/10 bg-black/50 p-2 text-white/80 backdrop-blur-md transition hover:border-white/30 hover:bg-black/80 hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Indicadores de posición */}
          <div className="flex items-center justify-center gap-1.5">
            {imagenesCarrusel.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndiceActual(i)}
                aria-label={`Ir a la foto ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  indiceActual === i
                    ? "w-6 bg-blue-400"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* COLUMNA DERECHA: TEMARIO Y CTA */}
        <div className="flex flex-col justify-between gap-6 lg:col-span-7">
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Contenido del programa
            </h3>

            {/* Tarjetas de Módulos */}
            <div className="grid gap-3">
              {modulosJaltest.map(({ titulo, descripcion, icono: Icono }) => (
                <div
                  key={titulo}
                  className="group flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-200 hover:border-blue-500/30 hover:bg-white/[0.04]"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
                    <Icono className="h-4 w-4" aria-hidden="true" />
                  </div>

                  <div className="text-left">
                    <h4 className="font-montserrat text-sm font-semibold text-white">
                      {titulo}
                    </h4>
                    <p className="mt-1 font-montserrat text-xs leading-relaxed text-zinc-400">
                      {descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botón WhatsApp Destacado */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMERO}?text=${WHATSAPP_MENSAJE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-950/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
          >
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <img
                  src="/icon/whatsapp.png"
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 object-contain brightness-0 invert"
                />
              </div>

              <div className="text-left">
                <p className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Inscripciones abiertas
                </p>
                <p className="font-montserrat text-sm font-bold text-white">
                  Consultar / Inscribirse por WhatsApp
                </p>
              </div>
            </div>

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-emerald-400 group-hover:bg-emerald-500 group-hover:text-black">
              <ArrowRight className="h-4 w-4 text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:text-black" />
            </div>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
