import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { LISTA_PRODUCTOS, Producto } from "../data/productos";

const WHATSAPP_NUMERO = "59178361900";

export default function Productos() {
  const [seleccionado, setSeleccionado] = useState<Producto | null>(null);
  const [indiceImagen, setIndiceImagen] = useState(0);
  const [modalAbierto, setModalAbierto] = useState(false);

  const siguienteImagen = useCallback(() => {
    if (!seleccionado) return;
    setIndiceImagen((indice) => (indice + 1) % seleccionado.imagenes.length);
  }, [seleccionado]);

  const anteriorImagen = useCallback(() => {
    if (!seleccionado) return;
    setIndiceImagen((indice) =>
      indice === 0 ? seleccionado.imagenes.length - 1 : indice - 1,
    );
  }, [seleccionado]);

  useEffect(() => {
    const manejarTeclado = (evento: KeyboardEvent) => {
      if (!modalAbierto) return;
      if (evento.key === "Escape") setModalAbierto(false);
      if (evento.key === "ArrowRight") siguienteImagen();
      if (evento.key === "ArrowLeft") anteriorImagen();
    };

    window.addEventListener("keydown", manejarTeclado);
    return () => window.removeEventListener("keydown", manejarTeclado);
  }, [modalAbierto, siguienteImagen, anteriorImagen]);

  if (!seleccionado) {
    return (
      <main className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-6 font-sans">
        <h1 className="mb-12 text-center text-5xl font-['Montserrat'] font-extrabold tracking-[0.1em] text-white md:text-7xl">
          PRODUCTOS
        </h1>

        <section className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {LISTA_PRODUCTOS.map((producto) => (
            <button
              key={producto.id}
              type="button"
              onClick={() => {
                setSeleccionado(producto);
                setIndiceImagen(0);
              }}
              className="group flex cursor-pointer flex-col items-center rounded-[2rem] border border-white/10 bg-black/30 p-8 text-center backdrop-blur-md transition-all hover:bg-white/10"
            >
              <div className="relative mb-6 h-48 w-full overflow-hidden rounded-2xl bg-white p-4">
                <Image
                  src={producto.imagenes[0]}
                  alt={producto.titulo}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-4 transition-transform group-hover:scale-105"
                />
              </div>

              <h2 className="mb-4 text-xl font-['Montserrat'] font-extrabold tracking-wider text-white">
                {producto.titulo}
              </h2>

              <p className="text-xs leading-relaxed tracking-widest text-zinc-300 opacity-70">
                {producto.descripcionCorta}
              </p>
            </button>
          ))}
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-6 font-sans">
      <button
        type="button"
        onClick={() => setSeleccionado(null)}
        className="mb-6 self-start text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:text-white/60"
      >
        ← VOLVER A PRODUCTOS
      </button>

      <section className="w-full max-w-5xl rounded-[2.5rem] border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-xl md:rounded-[3rem] md:p-12">
        <div className="grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Información del producto */}
          <div className="flex flex-col space-y-6 text-left">
            <div>
              <h1 className="text-3xl font-extrabold font-['Montserrat'] uppercase leading-tight tracking-wide text-white sm:text-4xl">
                {seleccionado.titulo}
              </h1>
              <div className="mt-4 h-[2px] w-20 bg-white/20" />
            </div>

            <p className="text-sm leading-relaxed tracking-wider font-['Montserrat'] text-zinc-200 md:text-base">
              {seleccionado.descripcionLarga}
              {seleccionado.descripcionLarga2 && (
                <span className="mt-2 block">
                  {seleccionado.descripcionLarga2}
                </span>
              )}
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
                `Hola Dieselsoft, me interesa cotizar el producto: ${seleccionado.titulo} (ID:${seleccionado.id}).`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center gap-3 rounded-xl bg-emerald-600 px-5 py-3 text-xs font-extrabold uppercase tracking-widest text-white shadow-lg shadow-emerald-950/40 transition hover:bg-emerald-500"
            >
              <Image
                src="/icon/whatsapp.png"
                alt="WhatsApp"
                width={20}
                height={20}
                className="h-5 w-5 brightness-0 invert"
              />
              <span>Cotizar por WhatsApp</span>
            </a>

            <div className="flex flex-wrap gap-3">
              {[seleccionado.manualPdf1, seleccionado.manualPdf2].map(
                (manual, indice) =>
                  manual ? (
                    <a
                      key={manual}
                      href={manual}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition hover:bg-white/20"
                    >
                      <Image
                        src="/icon/pdf.png"
                        alt="PDF"
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />
                      <span>Manual {indice + 1}</span>
                    </a>
                  ) : null,
              )}

              {seleccionado.videoYoutube && (
                <a
                  href={seleccionado.videoYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <Image
                    src="/icon/youtube.png"
                    alt="YouTube"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                  <span>Ver Video</span>
                </a>
              )}
            </div>
          </div>

          {/* Galería de imágenes */}
          <div className="flex w-full flex-col items-center gap-4">
            <div className="group relative h-[300px] w-full cursor-zoom-in overflow-hidden rounded-[2rem] bg-white shadow-inner sm:h-[350px] md:h-[400px]">
              <button
                type="button"
                onClick={() => setModalAbierto(true)}
                className="absolute inset-0 z-10"
                aria-label="Ampliar imagen"
              />
              <Image
                src={seleccionado.imagenes[indiceImagen]}
                alt={seleccionado.titulo}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-contain p-6"
              />

              {seleccionado.imagenes.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(evento) => {
                      evento.stopPropagation();
                      anteriorImagen();
                    }}
                    aria-label="Imagen anterior"
                    className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-lg font-bold text-white transition hover:bg-black/80"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={(evento) => {
                      evento.stopPropagation();
                      siguienteImagen();
                    }}
                    aria-label="Siguiente imagen"
                    className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-lg font-bold text-white transition hover:bg-black/80"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {seleccionado.imagenes.length > 1 && (
              <div className="flex w-full justify-center gap-3 overflow-x-auto p-2">
                {seleccionado.imagenes.map((imagen, indice) => (
                  <button
                    key={imagen}
                    type="button"
                    onClick={() => setIndiceImagen(indice)}
                    className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 bg-white transition ${
                      indiceImagen === indice
                        ? "scale-105 border-white shadow-md shadow-white/30"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={imagen}
                      alt={`Miniatura ${indice + 1}`}
                      fill
                      sizes="64px"
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalAbierto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setModalAbierto(false)}
        >
          <button
            type="button"
            onClick={() => setModalAbierto(false)}
            aria-label="Cerrar modal"
            className="absolute right-6 top-6 z-20 p-2 text-3xl font-bold text-white/70 transition hover:text-white"
          >
            ×
          </button>

          <div
            onClick={(evento) => evento.stopPropagation()}
            className="relative h-[70vh] w-full max-w-4xl rounded-[2.5rem] bg-white p-6 shadow-2xl sm:h-[80vh] sm:p-10"
          >
            <Image
              src={seleccionado.imagenes[indiceImagen]}
              alt={seleccionado.titulo}
              fill
              sizes="(max-width: 1024px) 95vw, 80vw"
              className="object-contain p-4"
            />
          </div>
        </div>
      )}
    </main>
  );
}
