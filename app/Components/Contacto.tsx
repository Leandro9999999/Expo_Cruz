"use client";
import { motion } from "framer-motion";

export default function Contacto() {
  const WHATSAPP_NUMERO = "59178361900";
  const WHATSAPP_MENSAJE = encodeURIComponent(
    "Hola Dieselsoft, me gustaría recibir más información sobre sus servicios de diagnóstico y software.",
  );

  const socialLinks = [
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@truckrallyteam",
      icon: "/icon/tiktok.png",
      detail: "@truckrallyteam",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/DieselSoftBo/",
      icon: "/icon/facebook.png",
      detail: "Diesel Soft Bolivia",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@dieselsofttv2274",
      icon: "/icon/youtube.png",
      detail: "Canal Oficial",
    },
  ];

  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 py-12 sm:py-20 font-sans">
      {/* Luces de fondo sutiles */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-zinc-700/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-zinc-950/70 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Contáctanos
              </h2>
              <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
                Optimización, diagnóstico electrónico y software para flotas y
                maquinaria pesada. Escríbenos para recibir asistencia inmediata.
              </p>
            </div>

            {/* Botón WhatsApp sin color verde (Estilo Glass / Monocromático) */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMERO}?text=${WHATSAPP_MENSAJE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-between w-full sm:w-auto gap-4 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-white font-bold shadow-xl hover:border-white/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center p-1.5 group-hover:bg-white/20 transition-colors">
                    <img
                      src="/icon/whatsapp.png"
                      alt="WhatsApp"
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-zinc-400 font-medium leading-none">
                      Canal directo
                    </div>
                    <div className="text-base font-bold text-white">
                      Contactar por WhatsApp
                    </div>
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

            {/* Enlace a Ubicación */}
            <div className="pt-2 border-t border-zinc-800/60">
              <a
                href="https://www.google.com/maps/place/DIESEL+SOFT+S.R.L./@-17.3922711,-66.0719986,19z/data=!4m6!3m5!1s0x93e371d220f98449:0x116fb058d509f94c!8m2!3d-17.391955!4d-66.071485!16s%2Fg%2F11sbh_8_mb?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-zinc-400 hover:text-zinc-200 transition-colors text-sm"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700/60 flex items-center justify-center p-1.5 group-hover:border-zinc-500 transition-colors">
                  <img
                    src="/icon/google-maps.png"
                    alt="Ubicación"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span>
                  Taller & Laboratorio:{" "}
                  <strong className="text-zinc-300 font-medium">
                    Cochabamba, Bolivia
                  </strong>
                </span>
                <span className="text-xs text-zinc-500 group-hover:text-white transition-colors">
                  Ver mapa →
                </span>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Redes Sociales */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-3 bg-zinc-900/40 p-4 sm:p-5 rounded-2xl border border-zinc-800/50">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 px-2">
              Canales y Contenido
            </span>

            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/60 border border-zinc-800/60 hover:border-zinc-700 transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700/40 flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
                      {item.detail}
                    </div>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 group-hover:text-zinc-200 group-hover:bg-zinc-700/40 transition-all">
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
