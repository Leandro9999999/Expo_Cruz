import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col text-white overflow-hidden font-[family-name:var(--font-volvo)]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/img/3.png"
          alt="Dieselsoft"
          fill
          className="object-cover"
          priority
        />
      </div>

      <nav className="relative z-20 flex justify-between items-center px-10 py-8 md:px-16">
        <div className="text-3xl regular tracking-[1 em]">DIESELSOFT</div>
        <div className="hidden md:flex space-x-10 text-[15px] tracking-[1 em] font-bold">
          <a href="About_US" className="hover:opacity-60 transition">
            SOBRE NOSOTROS
          </a>
          <a href="#" className="hover:opacity-60 transition">
            SERVICIOS
          </a>
          <a href="#" className="hover:opacity-60 transition">
            PRODUCTOS
          </a>
          <a href="#" className="hover:opacity-60 transition">
            CONTACTO
          </a>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-10">
        <h1 className="text-[14vw] md:text-[12rem] regular leading-[0.85] tracking-[-1 em] mb-6 drop-shadow-2xl">
          DIESELSOFT
        </h1>

        <p className="max-w-3xl text-[10px] md:text-[13px] tracking-[0.15em] leading-relaxed uppercase opacity-85 px-4">
          En Dieselsoft, integramos el desarrollo de hardware y software de
          vanguardia con la ingeniería mecánica pesada para optimizar,
          diagnosticar y transformar la gestión de tu flota vehicular.
        </p>

        <button className="mt-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-12 py-4 rounded-xl text-[12px] tracking-[0.2em] font-bold transition-all uppercase">
          Mas informacion
        </button>
      </div>
    </main>
  );
}
