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

        {/* LEFT GLOW */}
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

        {/* RIGHT GLOW */}
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

        {/* STARFIELD (SINGLE CLEAN GRID LOOP) */}
        <div className="absolute inset-0 overflow-hidden">

          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-100%]"
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(rgb(167,139,250) 1px, transparent 1px)",
                backgroundSize: "90px 90px",
              }}
            />

            <div
              className="absolute top-full h-full w-full opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(rgb(167,139,250) 1px, transparent 1px)",
                backgroundSize: "90px 90px",
              }}
            />
          </motion.div>

        </div>
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-2xl">
        <div className="relative mx-auto flex max-w-5xl items-center px-5 py-3">

          {/* LOGO CHICO */}
          <div className="absolute left-5 flex items-center">
            <Image
              src="/logo chico 2.png"
              alt="Logo"
              width={48}
              height={48}
              className="object-contain"
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

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="
            absolute
            h-[320px] w-[320px]
            rounded-full border border-pink-500/10
            md:h-[650px] md:w-[650px]
          "
        />

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

          <motion.div
            variants={fadeSection}
            initial="initial"
            whileInView="whileInView"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 1.3 }}
          >
            <Image
              src="/logo grande 3.png"
              alt="Logo Grande"
              width={420}
              height={420}
              className="mb-6 w-[260px] md:w-[420px] drop-shadow-[0_0_35px_rgba(236,72,153,0.35)]"
            />
          </motion.div>

          <p className="mx-auto max-w-lg text-sm leading-relaxed text-white/75 md:text-base">
            Creamos sitios web cinematográficos, branding visual y experiencias digitales con identidad estética fuerte y enfoque futurista.
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
                }}
                className="rounded-[26px] border border-white/10 bg-white/10 p-6 backdrop-blur-2xl"
              >
                <h3 className="mb-4 text-xl font-bold uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-white/75">{item.text}</p>
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
          className="absolute h-[360px] w-[360px] rounded-full border border-blue-400/10 md:h-[760px] md:w-[760px]"
        />

        <motion.div
          variants={fadeSection}
          initial="initial"
          whileInView="whileInView"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1.3 }}
          className="relative z-10 text-center"
        >

          <h2 className="mb-7 text-4xl font-black uppercase md:text-6xl">
            <span className="text-pink-500">Estética</span>{" "}
            <span className="text-blue-400">Experimental</span>
          </h2>

          <p className="mx-auto max-w-2xl text-white/70">
            Mezclamos diseño contemporáneo, referencias retrofuturistas y experiencias visuales inmersivas.
          </p>

        </motion.div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative flex min-h-screen snap-start items-center justify-center px-5 py-20"
      >
        <div className="text-center">
          Contacto
        </div>
      </section>

    </main>
  );
}