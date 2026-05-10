export default function Home() {
  return (
    <main className="overflow-hidden bg-black text-white">

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-fuchsia-500/20 bg-black/40 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <h1 className="text-2xl font-black uppercase tracking-[0.3em] text-fuchsia-400">
            NEON TEMPLE
          </h1>

          <nav className="hidden gap-8 text-sm uppercase tracking-[0.3em] md:flex">

            <a href="#" className="transition hover:text-fuchsia-400">
              Inicio
            </a>

            <a href="#" className="transition hover:text-cyan-400">
              Proyectos
            </a>

            <a href="#" className="transition hover:text-pink-400">
              Estudio
            </a>

            <a href="#" className="transition hover:text-violet-400">
              Contacto
            </a>

          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            className="h-full w-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-900/40 via-black to-cyan-900/40" />

        </div>

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-6xl">

          <p className="mb-6 text-sm uppercase tracking-[0.6em] text-cyan-300">
            Creative Digital Studio
          </p>

          <h2 className="mb-8 text-6xl font-black uppercase leading-none md:text-[9rem]">

            <span className="block text-fuchsia-500 drop-shadow-[0_0_25px_rgba(255,0,255,0.9)]">
              FUTURE
            </span>

            <span className="block text-cyan-400 drop-shadow-[0_0_25px_rgba(0,255,255,0.9)]">
              VISIONS
            </span>

          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-2xl">
            Diseño web, branding y experiencias digitales con estética
            vaporwave, retro futurista y maximalismo visual.
          </p>

          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">

            <button className="rounded-full border border-fuchsia-500 bg-fuchsia-500/20 px-10 py-5 text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-300 backdrop-blur-md transition hover:scale-105 hover:bg-fuchsia-500/30">

              Ver proyectos

            </button>

            <button className="rounded-full border border-cyan-400 bg-cyan-400/10 px-10 py-5 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-md transition hover:scale-105 hover:bg-cyan-400/20">

              Contacto

            </button>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="relative px-6 py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20 text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-fuchsia-400">
              Servicios
            </p>

            <h2 className="text-5xl font-black uppercase md:text-7xl">
              Diseño digital
            </h2>

          </div>

          <div className="grid gap-10 md:grid-cols-3">

            {/* CARD */}
            <div className="rounded-[40px] border border-fuchsia-500/20 bg-gradient-to-b from-fuchsia-500/10 to-black p-10 backdrop-blur-xl">

              <div className="mb-8 text-5xl">
                ✦
              </div>

              <h3 className="mb-6 text-3xl font-bold uppercase text-fuchsia-400">
                Web Design
              </h3>

              <p className="text-lg leading-relaxed text-gray-300">
                Sitios modernos, visuales e inmersivos diseñados para destacar.
              </p>

            </div>

            {/* CARD */}
            <div className="rounded-[40px] border border-cyan-400/20 bg-gradient-to-b from-cyan-400/10 to-black p-10 backdrop-blur-xl">

              <div className="mb-8 text-5xl">
                ◉
              </div>

              <h3 className="mb-6 text-3xl font-bold uppercase text-cyan-300">
                Branding
              </h3>

              <p className="text-lg leading-relaxed text-gray-300">
                Identidades visuales memorables con estética futurista y artística.
              </p>

            </div>

            {/* CARD */}
            <div className="rounded-[40px] border border-violet-500/20 bg-gradient-to-b from-violet-500/10 to-black p-10 backdrop-blur-xl">

              <div className="mb-8 text-5xl">
                △
              </div>

              <h3 className="mb-6 text-3xl font-bold uppercase text-violet-300">
                Creative Direction
              </h3>

              <p className="text-lg leading-relaxed text-gray-300">
                Conceptos visuales impactantes para marcas que buscan diferenciarse.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="relative overflow-hidden px-6 py-32">

        <div className="absolute -left-20 top-20 h-[400px] w-[400px] rounded-full bg-fuchsia-600/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="mx-auto max-w-7xl">

          <div className="mb-20 text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-300">
              Estética
            </p>

            <h2 className="text-5xl font-black uppercase md:text-7xl">
              Vaporwave Culture
            </h2>

          </div>

          <div className="grid gap-10 md:grid-cols-2">

            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1974&auto=format&fit=crop"
              alt="Palm"
              className="rounded-[40px] border border-white/10 object-cover shadow-[0_0_60px_rgba(255,0,255,0.15)]"
            />

            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1974&auto=format&fit=crop"
              alt="Greek"
              className="rounded-[40px] border border-white/10 object-cover shadow-[0_0_60px_rgba(0,255,255,0.15)]"
            />

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-40">

        <div className="mx-auto max-w-5xl rounded-[50px] border border-fuchsia-500/20 bg-gradient-to-b from-fuchsia-500/10 to-black px-10 py-24 text-center backdrop-blur-2xl">

          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-fuchsia-300">
            Contacto
          </p>

          <h2 className="mb-8 text-5xl font-black uppercase leading-tight md:text-7xl">

            <span className="text-fuchsia-400">
              Build
            </span>

            {" "}

            <span className="text-cyan-300">
              The Future
            </span>

          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-gray-300">
            Creamos experiencias digitales con impacto visual extremo y estética futurista.
          </p>

          <button className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-12 py-5 text-sm font-black uppercase tracking-[0.3em] text-black transition hover:scale-105">

            Empezar proyecto

          </button>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm uppercase tracking-[0.3em] text-gray-500">

        Neon Temple Studio © 2026

      </footer>

    </main>
  );
}