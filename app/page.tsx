"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeSection = {
  initial: {
    opacity: 0,
    y: 80,
    scale: 0.97,
    filter: "blur(18px)",
  },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
};

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden bg-black text-white scroll-smooth">

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-black">

        {/* LEFT GLOW — magenta/rosa del logo */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="
            absolute
            left-[-35%] top-[-20%]
            h-[260px] w-[260px]
            rounded-full bg-pink-600
            blur-[100px]

            md:left-[-10%] md:top-[-10%]
            md:h-[430px] md:w-[430px]
            md:blur-[140px]
          "
        />

        {/* RIGHT GLOW — azul eléctrico del logo */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 14, repeat: Infinity }}
          className="
            absolute
            bottom-[-25%] right-[-35%]
            h-[300px] w-[300px]
            rounded-full bg-blue-500
            blur-[110px]

            md:bottom-[-20%] md:right-[-10%]
            md:h-[520px] md:w-[520px]
            md:blur-[160px]
          "
        />

        {/* STARFIELD */}
        <div className="absolute inset-0 overflow-hidden">

          {/* WHITE */}
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-100%]"
          >
            <div
              className="absolute inset-0 opacity-35"
              style={{
                backgroundImage: "radial-gradient(white 1px, transparent 1px)",
                backgroundSize: "65px 65px",
              }}
            />
            <div
              className="absolute top-full h-full w-full opacity-35"
              style={{
                backgroundImage: "radial-gradient(white 1px, transparent 1px)",
                backgroundSize: "65px 65px",
              }}
            />
          </motion.div>

          {/* VIOLET */}
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-100%]"
          >
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "radial-gradient(rgb(167,139,250) 1px, transparent 1px)",
                backgroundSize: "120px 120px",
              }}
            />
            <div
              className="absolute top-full h-full w-full opacity-15"
              style={{
                backgroundImage:
                  "radial-gradient(rgb(167,139,250) 1px, transparent 1px)",
                backgroundSize: "120px 120px",
              }}
            />
          </motion.div>

        </div>
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-2xl">
        <div className="relative mx-auto flex max-w-5xl items-center px-5 py-3">

          {/* LOGO S9 */}
          <div className="absolute left-5 flex items-center">
            <Image
              src="/logo-chico.png"
              alt="Studio Nine Logo"
              width={48}
              height={48}
              className="object-contain drop-shadow-[0_0_8px_rgba(236,72,153,0.7)]"
            />
          </div>

          {/* MENU */}
          <nav className="mx-auto hidden gap-7 text-[11px] uppercase tracking-[0.28em] md:flex">
            <a href="#hero" className="transition hover:text-pink-400">Inicio</a>
            <a href="#services" className="transition hover:text-violet-400">Servicios</a>
            <a href="#showcase" className="transition hover:text-blue-400">Estética</a>
            <a href="#contact" className="transition hover:text-pink-400">Contacto</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative flex min-h-screen snap-start items-center justify-center overflow-hidden px-5 text-center"
      >

        {/* LIQUID NEON RING */}
        <div className="absolute flex items-center justify-center">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="
              h-[340px] w-[340px]
              rounded-full
              md:h-[680px] md:w-[680px]
            "
            style={{
              background: "conic-gradient(from 0deg, #ec4899, #8b5cf6, #3b82f6, #ec4899)",
              mask: "radial-gradient(circle, transparent 69%, black 70%)",
              WebkitMask: "radial-gradient(circle, transparent 69%, black 70%)",
            }}
          />
          
          {/* OUTER GLOW FOR THE RING */}
          <motion.div
            animate={{ rotate: [0, 360], scale: [1, 1.03, 1] }}
            transition={{ 
              rotate: { duration: 6, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="
              absolute
              h-[340px] w-[340px]
              rounded-full opacity-30 blur-2xl
              md:h-[680px] md:w-[680px]
            "
            style={{
              background: "conic-gradient(from 0deg, #ec4899, #8b5cf6, #3b82f6, #ec4899)",
            }}
          />
        </div>

        <motion.div
          variants={fadeSection}
          initial="initial"
          whileInView="whileInView"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="relative z-10 mx-auto flex max-w-2xl flex-col items-center justify-center text-center"
        >

          <p className="mb-4 text-[11px] uppercase tracking-[0.55em] text-violet-300">
            Estudio Creativo Digital
          </p>

          {/* LOGO GRANDE */}
          <motion.div
            variants={fadeSection}
            initial="initial"
            whileInView="whileInView"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          >
            <Image
              src="/logo grande 3.png"
              alt="Studio Nine Logo Grande"
              width={420}
              height={420}
              className="mb-6 h-auto w-[260px] md:w-[420px] drop-shadow-[0_0_35px_rgba(236,72,153,0.35)]"
            />
          </motion.div>

          <p className="mx-auto max-w-lg text-sm leading-relaxed text-white/75 md:text-base">
            Creamos sitios web cinematográficos, branding visual y experiencias
            digitales con identidad estética fuerte y enfoque futurista.
          </p>

        </motion.div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="relative flex min-h-screen snap-start items-center justify-center px-5 py-20"
      >

        <motion.div
          variants={fadeSection}
          initial="initial"
          whileInView="whileInView"
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 mx-auto max-w-5xl"
        >

          <div className="mb-14 text-center">
            <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-violet-300">
              Servicios
            </p>
            <h2 className="text-3xl font-black uppercase md:text-5xl">
              Lo que hacemos
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Diseño Web",
                text: "Sitios modernos y totalmente personalizados para marcas y proyectos creativos.",
              },
              {
                title: "Branding",
                text: "Creamos identidad visual, logos y dirección estética coherente.",
              },
              {
                title: "Dirección Creativa",
                text: "Conceptos visuales únicos con foco en narrativa e impacto.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80, filter: "blur(18px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 1, delay: i * 0.15 }}
                whileHover={{
                  scale: 1.04,
                  y: -8,
                  transition: { duration: 0.16 },
                }}
                className="
                  rounded-[26px]
                  border border-white/10
                  bg-white/10
                  p-6
                  backdrop-blur-2xl
                "
              >
                <div
                  className={`mb-5 text-3xl ${
                    i === 0
                      ? "text-pink-400"
                      : i === 1
                      ? "text-violet-400"
                      : "text-blue-400"
                  }`}
                >
                  ✦
                </div>

                <h3 className="mb-4 text-xl font-bold uppercase">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/75">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </section>

      {/* SHOWCASE */}
      <section
        id="showcase"
        className="relative flex min-h-screen snap-start items-center justify-center overflow-hidden px-5 py-20"
      >

        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="
            absolute
            h-[360px] w-[360px]
            rounded-full border border-blue-400/10
            md:h-[760px] md:w-[760px]
          "
        />

        <motion.div
          variants={fadeSection}
          initial="initial"
          whileInView="whileInView"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1.3 }}
          className="relative z-10 text-center"
        >

          <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-violet-300">
            Filosofía Visual
          </p>

          <h2 className="mb-7 text-4xl font-black uppercase md:text-6xl">
            <span className="text-pink-500">Estética</span>{" "}
            <span className="text-blue-400">Experimental</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70">
            Mezclamos diseño contemporáneo, referencias retrofuturistas y
            experiencias visuales inmersivas inspiradas en cine y música.
          </p>

        </motion.div>
      </section>

      {/* PORTFOLIO CAROUSEL */}
      <section className="relative flex min-h-screen snap-start items-center justify-center overflow-hidden px-5 py-24">
        <motion.div
          variants={fadeSection}
          initial="initial"
          whileInView="whileInView"
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 w-full max-w-[1600px]"
        >
          <div className="mb-14 text-center">
            <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-violet-300">
              Portfolio
            </p>

            <h2 className="text-4xl font-black uppercase md:text-7xl">
              Últimos Trabajos
            </h2>
          </div>

          <div className="relative px-4 md:px-16">
            
            <button
              onClick={() => {
                document
                  .getElementById("portfolio-scroll")
                  ?.scrollBy({ left: -420, behavior: "smooth" });
              }}
              className="absolute -left-2 md:-left-8 top-1/2 z-30 -translate-y-1/2 rounded-full border border-pink-500/30 bg-black/40 p-5 text-2xl text-pink-400 backdrop-blur-xl transition hover:scale-110 hover:border-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]"
            >
              ‹
            </button>

            <button
              onClick={() => {
                document
                  .getElementById("portfolio-scroll")
                  ?.scrollBy({ left: 420, behavior: "smooth" });
              }}
              className="absolute -right-2 md:-right-8 top-1/2 z-30 -translate-y-1/2 rounded-full border border-blue-500/30 bg-black/40 p-5 text-2xl text-blue-400 backdrop-blur-xl transition hover:scale-110 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(96,165,250,0.8)]"
            >
              ›
            </button>

            <div
              id="portfolio-scroll"
              className="
                flex
                gap-8
                overflow-x-auto
                overflow-y-hidden
                scroll-smooth
                px-10
                py-16
                [-ms-overflow-style:none]
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
              }}
            >
              {[
                "Neo Brand Site",
                "Cyber Studio",
                "Luxury UI",
                "Vaporwave Landing",
                "Future Commerce",
                "Digital Identity",
              ].map((title, i) => (
                <motion.div
                  key={title}
                  whileHover={{
                    y: -10,
                    boxShadow:
                      i % 2 === 0
                        ? "0 20px 60px rgba(236,72,153,0.35)"
                        : "0 20px 60px rgba(96,165,250,0.35)",
                    borderColor:
                      i % 2 === 0
                        ? "rgba(236,72,153,0.5)"
                        : "rgba(96,165,250,0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="group relative min-w-[320px] rounded-[34px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl"
                >
                  <div
                    className={`relative mb-6 h-[180px] overflow-hidden rounded-[22px] ${
                        i % 2 === 0
                          ? "bg-gradient-to-br from-pink-500/40 to-blue-500/20"
                          : "bg-gradient-to-br from-violet-500/40 to-blue-400/20"
                      }`}
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                      }}
                    />
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-y-0 w-24 rotate-12 bg-white/10 blur-2xl"
                    />
                  </div>
                  <h3 className="mb-3 text-2xl font-black uppercase leading-none tracking-tight">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    Diseño web / branding / experiencia digital
                  </p>
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-[34px] opacity-0 transition duration-300 group-hover:opacity-100 ${
                        i % 2 === 0
                          ? "shadow-[inset_0_0_50px_rgba(236,72,153,0.2)]"
                          : "shadow-[inset_0_0_50px_rgba(96,165,250,0.2)]"
                      }`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative flex min-h-screen snap-start items-center justify-center px-5 py-20"
      >
        <motion.div
          variants={fadeSection}
          initial="initial"
          whileInView="whileInView"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1.3 }}
          className="relative z-10 mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/10 px-7 py-16 text-center backdrop-blur-2xl"
        >
          <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-pink-300">
            Contacto
          </p>
          <h2 className="mb-6 text-4xl font-black uppercase md:text-6xl">
            <span className="text-pink-500">Creamos</span>{" "}
            <span className="text-blue-400">Algo Único</span>
          </h2>
          <p className="mx-auto mb-9 max-w-xl text-base text-white/75">
            Diseñamos experiencias digitales con personalidad visual fuerte y
            estética memorable para marcas que quieren destacar.
          </p>
          <motion.button
            whileHover={{
              scale: 1.07,
              boxShadow:
                "-5px 0 18px rgba(236,72,153,0.65), 5px 0 18px rgba(96,165,250,0.65), 0 0 28px rgba(167,139,250,0.35)",
            }}
            transition={{ duration: 0.12 }}
            className="
              rounded-full
              bg-gradient-to-r
              from-pink-600
              via-violet-500
              to-blue-500
              px-8 py-3
              text-[11px] font-black uppercase tracking-[0.28em]
              text-white
            "
          >
            Empezar Proyecto
          </motion.button>
        </motion.div>
      </section>

    </main>
  );
}