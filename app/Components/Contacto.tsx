"use client";
import { motion } from "framer-motion";

export default function Contacto() {
  const WHATSAPP_NUMERO = "59178361900";
  const WHATSAPP_MENSAJE = encodeURIComponent(
    "Hola Dieselsoft, me gustaría recibir más información sobre sus servicios de diagnóstico y software.",
  );

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative bg-zinc-950/70 backdrop-blur-2xl border border-zinc-800/80 rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl shadow-black/80 overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-5xl font-black tracking-tight text-white  font-['Montserrat'] font-extrabold"
          >
            Ponte en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 text-white">
              Contacto
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-3 text-sm sm:text-base text-zinc-400  font-['Montserrat'] leading-relaxed"
          >
            Optimización, diagnóstico y software de alto rendimiento para tu
            flota. Respuestas rápidas y atención técnica directa.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card Principal: WhatsApp (Destacada) */}
          <motion.a
            variants={itemVariants}
            href={`https://wa.me/${WHATSAPP_NUMERO}?text=${WHATSAPP_MENSAJE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative md:col-span-2 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-950/30 via-zinc-900/60 to-zinc-950/80 border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center p-3 group-hover:scale-105 group-hover:bg-emerald-500/20 transition-all duration-300">
                  <img
                    src="/icon/whatsapp.png"
                    alt="WhatsApp"
                    className="w-full h-full object-contain filter drop-shadow"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400  font-['Montserrat'] font-extrabold ">
                      Canal Prioritario
                    </span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors  font-['Montserrat'] font-extrabold ">
                    Soporte por WhatsApp
                  </h3>
                </div>
              </div>

              {/* Flecha interactiva */}
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-emerald-500 group-hover:border-emerald-400 transition-all duration-300">
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </div>
            </div>

            <p className="text-sm text-zinc-400 mt-6 group-hover:text-zinc-300  font-['Montserrat'] transition-colors">
              Chatea directamente con nuestros ingenieros y especialistas de
              soporte técnico para cotizaciones o diagnóstico remoto.
            </p>
          </motion.a>

          {/* TikTok */}
          <motion.a
            variants={itemVariants}
            href="https://www.tiktok.com/@truckrallyteam"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-600/60 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center p-2.5 group-hover:scale-105 transition-all">
                <img
                  src="/icon/tiktok.png"
                  alt="TikTok"
                  className="w-full h-full object-contain"
                />
              </div>
              <svg
                className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </div>
            <div className="mt-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 group-hover:text-zinc-400  font-['Montserrat'] font-extrabold ">
                Comunidad
              </span>
              <h4 className="text-lg font-bold text-white  font-['Montserrat'] font-extrabold ">
                TikTok
              </h4>
              <p className="text-xs text-zinc-400 mt-1  font-['Montserrat']">
                Videos en acción & tips técnicos.
              </p>
            </div>
          </motion.a>

          {/* Facebook */}
          <motion.a
            variants={itemVariants}
            href="https://www.facebook.com/DieselSoftBo/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-blue-500/40 hover:bg-blue-950/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center p-2.5 group-hover:scale-105 transition-all">
                <img
                  src="/icon/facebook.png"
                  alt="Facebook"
                  className="w-full h-full object-contain"
                />
              </div>
              <svg
                className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </div>
            <div className="mt-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400  font-['Montserrat'] font-extrabold ">
                Novedades
              </span>
              <h4 className="text-lg font-bold text-whit e  font-['Montserrat'] font-extrabold ">
                Facebook
              </h4>
              <p className="text-xs text-zinc-400 mt-1  font-['Montserrat']">
                Noticias, lanzamientos y casos de éxito.
              </p>
            </div>
          </motion.a>

          {/* YouTube */}
          <motion.a
            variants={itemVariants}
            href="https://youtube.com/@tu-canal"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-red-500/40 hover:bg-red-950/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center p-2.5 group-hover:scale-105 transition-all">
                <img
                  src="/icon/youtube.png"
                  alt="YouTube"
                  className="w-full h-full object-contain"
                />
              </div>
              <svg
                className="w-4 h-4 text-zinc-500 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </div>
            <div className="mt-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-red-400  font-['Montserrat'] font-extrabold ">
                Tutoriales
              </span>
              <h4 className="text-lg font-bold text-white  font-['Montserrat'] font-extrabold ">
                YouTube
              </h4>
              <p className="text-xs text-zinc-400 mt-1  font-['Montserrat'] ">
                Guías de instalación y calibración.
              </p>
            </div>
          </motion.a>

          {/* Ubicación Google Maps */}
          <motion.a
            variants={itemVariants}
            href="https://www.google.com/maps/place/DIESEL+SOFT+S.R.L./@-17.3922711,-66.0719986,19z/data=!4m6!3m5!1s0x93e371d220f98449:0x116fb058d509f94c!8m2!3d-17.391955!4d-66.071485!16s%2Fg%2F11sbh_8_mb?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500/40 hover:bg-amber-950/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center p-2.5 group-hover:scale-105 transition-all">
                <img
                  src="/icon/google-maps.png"
                  alt="Ubicación"
                  className="w-full h-full object-contain"
                />
              </div>
              <svg
                className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </div>
            <div className="mt-6">
              <span className="text-[11px] font-bold font-['Montserrat'] font-extrabold  uppercase tracking-wider text-amber-400">
                Taller & Oficinas
              </span>
              <h4 className="text-lg font-bold text-white  font-['Montserrat'] font-extrabold ">
                Visítanos
              </h4>
              <p className="text-xs text-zinc-400 mt-1 font-['Montserrat']">
                Cochabamba, Bolivia
              </p>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
