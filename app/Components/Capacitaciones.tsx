import Image from "next/image";
import { motion } from "framer-motion";
import { LISTA_CAPACITACIONES } from "../data/capacitaciones";

const WHATSAPP_NUMERO = "59178361900";

export default function Capacitaciones() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-12 font-sans">
      {/* Encabezado */}
      <div className="mb-12 text-center">
        <h1 className="font-montserrat text-4xl font-black tracking-widest text-white sm:text-5xl md:text-6xl">
          CAPACITACIONES
        </h1>
        <p className="mt-3 font-montserrat text-sm font-medium tracking-widest text-white/60 uppercase">
          Especialización técnica y profesional
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex w-full flex-col gap-8"
      >
        {LISTA_CAPACITACIONES.map((item) => {
          const estaDisponible = item.estado === "disponible";

          const mensajeWhatsApp = encodeURIComponent(
            `¡Hola Dieselsoft! Quiero información y reservar mi cupo para:\n\n` +
              `Curso: ${item.titulo}\n` +
              `Modalidad: ${item.modalidad}${item.lugar ? ` (${item.lugar})` : ""}\n` +
              `¿Me podrían compartir los datos de pago para confirmar mi reserva?`,
          );

          return (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:shadow-2xl hover:shadow-emerald-950/20 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                {/* LADO IZQUIERDO: Imagen de portada */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900 lg:col-span-5 lg:h-full lg:min-h-[300px]">
                  <Image
                    src={item.imagen}
                    alt={item.titulo}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Badge de estado sobre la imagen en móviles/desktops */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-block rounded-full px-3 py-1 font-montserrat text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-md ${
                        estaDisponible
                          ? "border border-emerald-500/40 bg-emerald-950/80 text-emerald-400"
                          : "border border-red-500/40 bg-red-950/80 text-red-400"
                      }`}
                    >
                      {estaDisponible
                        ? "Cupos Disponibles"
                        : "Curso Finalizado"}
                    </span>
                  </div>
                </div>

                {/* LADO DERECHO: Contenido */}
                <div className="flex flex-col justify-between lg:col-span-7">
                  <div>
                    {/* Modalidad y Ubicación */}
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded-md bg-white/10 px-2.5 py-0.5 font-montserrat text-[11px] font-bold uppercase tracking-wider text-white/80">
                        {item.modalidad} {item.lugar && `• ${item.lugar}`}
                      </span>
                    </div>

                    {/* Título y Subtítulo */}
                    <h2 className="font-montserrat text-2xl font-black tracking-tight text-white sm:text-3xl">
                      {item.titulo}
                    </h2>
                    <p className="mt-1 font-montserrat text-xs font-bold uppercase tracking-widest text-white/90">
                      {item.subtitulo}
                    </p>

                    {/* Grid de Metadatos (Detalles) */}
                    <div className="my-5 grid grid-cols-2 gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3.5 font-montserrat text-xs">
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-white/50">
                          Fecha de inicio
                        </span>
                        <span className="font-semibold text-white">
                          {item.fechaInicio}
                        </span>
                      </div>

                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-white/50">
                          Horario
                        </span>
                        <span className="font-semibold text-white">
                          {item.horario}
                        </span>
                      </div>

                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-white/50">
                          Duración
                        </span>
                        <span className="font-semibold text-white">
                          {item.duracion}
                        </span>
                      </div>

                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-white/50">
                          Inversión
                        </span>
                        <span className="font-bold text-emerald-400">
                          {item.precioTotal} USD{" "}
                          <span className="font-normal text-white/60">
                            (Reserva {item.reserva} USD)
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Temario */}
                    <div className="mb-6 space-y-2">
                      <p className="font-montserrat text-[11px] font-bold uppercase tracking-wider text-white/60">
                        Contenido principal:
                      </p>
                      <ul className="grid grid-cols-1 gap-1.5 font-montserrat text-xs text-white/80">
                        {item.contenido.map((punto, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                            <span>{punto}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Botón de Acción */}
                  <div>
                    {estaDisponible ? (
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMERO}?text=${mensajeWhatsApp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-3.5 font-montserrat text-xs font-extrabold uppercase tracking-widest text-white shadow-lg transition-all duration-200 hover:bg-emerald-500 hover:shadow-emerald-900/40 active:scale-[0.99] sm:w-auto"
                      >
                        <Image
                          src="/icon/whatsapp.png"
                          alt="WhatsApp"
                          width={18}
                          height={18}
                          className="brightness-0 invert"
                        />
                        <span>Reservar Cupo por WhatsApp</span>
                      </a>
                    ) : (
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
                          `Hola, quisiera consultar próximas fechas para el curso: ${item.titulo}`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-montserrat text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10 sm:w-auto"
                      >
                        <span>Consultar próximas fechas</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </motion.div>
    </main>
  );
}
