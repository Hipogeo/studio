"use client";

import { motion } from "framer-motion";

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
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute left-[-10%] top-[-10%] h-[430px] w-[430px] rounded-full bg-fuchsia-500 blur-[140px]"
        />

        {/* RIGHT GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="absolute bottom-[-20%] right-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-400 blur-[160px]"
        />

        {/* STARFIELD */}
        <div className="absolute inset-0 overflow-hidden">

          {/* WHITE */}
          <motion.div
            animate={{
              y: ["0%", "-50%"],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[-100%]"
          >

            <div
              className="absolute inset-0 opacity-35"
              style={{
                backgroundImage:
                  "radial-gradient(white 1px, transparent 1px)",
                backgroundSize: "65px 65px",
              }}
            />

            <div
              className="absolute top-full h-full w-full opacity-35"
              style={{
                backgroundImage:
                  "radial-gradient(white 1px, transparent 1px)",
                backgroundSize: "65px 65px",
              }}
            />

          </motion.div>

          {/* CYAN */}
          <motion.div
            animate={{
              y: ["0%", "-50%"],
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[-100%]"
          >

            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "radial-gradient(cyan 1px, transparent 1px)",
                backgroundSize: "120px 120px",
              }}
            />

            <div
              className="absolute top-full h-full w-full opacity-15"
              style={{
                backgroundImage:
                  "radial-gradient(cyan 1px, transparent 1px)",
                backgroundSize: "120px 120px",
              }}
            />

          </motion.div>

        </div>

      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-2xl">

        <div className="relative mx-auto flex max-w-5xl items-center px-5 py-4">

          {/* LOGO */}
          <div className="absolute left-5">

            <h1 className="text-[11px] font-black uppercase tracking-[0.32em]">

              <span className="text-fuchsia-400">
                VAPORWAVE
              </span>{" "}

              <span className="text-cyan-300">
                STUDIO
              </span>

            </h1>

          </div>

          {/* MENU */}
          <nav className="mx-auto flex gap-7 text-[11px] uppercase tracking-[0.28em]">

            <a href="#hero" className="transition hover:text-fuchsia-400">
              Inicio
            </a>

            <a href="#services" className="transition hover:text-cyan-400">
              Servicios
            </a>

            <a href="#showcase" className="transition hover:text-pink-400">
              Estética
            </a>

            <a href="#contact" className="transition hover:text-violet-400">
              Contacto
            </a>

          </nav>

        </div>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative flex min-h-screen snap-start items-center justify-center overflow-hidden px-5 text-center"
      >

        {/* CIRCLE */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[650px] w-[650px] rounded-full border border-fuchsia-500/10"
        />

        <motion.div
          variants={fadeSection}
          initial="initial"
          whileInView="whileInView"
          viewport={{ amount: 0.5 }}
          transition={{
            duration: 1.3,
            ease: "easeOut",
          }}
          className="relative z-10 mx-auto flex max-w-2xl flex-col items-center justify-center text-center"
        >

          <p className="mb-4 text-[11px] uppercase tracking-[0.55em] text-cyan-300">
            Estudio Creativo Digital
          </p>

          <h1 className="mb-6 text-4xl font-black uppercase leading-none md:text-[5.7rem]">

            <span className="block text-fuchsia-400 drop-shadow-[0_0_25px_rgba(255,0,255,1)]">
              VAPORWAVE
            </span>

            <span className="block text-cyan-300 drop-shadow-[0_0_25px_rgba(0,255,255,1)]">
              STUDIO
            </span>

          </h1>

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
          transition={{
            duration: 1.2,
          }}
          className="relative z-10 mx-auto max-w-5xl"
        >

          <div className="mb-14 text-center">

            <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-cyan-200">
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
                text:
                  "Sitios modernos y totalmente personalizados para marcas y proyectos creativos.",
              },

              {
                title: "Branding",
                text:
                  "Creamos identidad visual, logos y dirección estética coherente.",
              },

              {
                title: "Dirección Creativa",
                text:
                  "Conceptos visuales únicos con foco en narrativa e impacto.",
              },
            ].map((item, i) => (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 80,
                  filter: "blur(18px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ amount: 0.5 }}
                transition={{
                  duration: 1,
                  delay: i * 0.15,
                }}

                whileHover={{
                  scale: 1.04,
                  y: -8,
                  transition: {
                    duration: 0.16,
                  },
                }}

                className="
                  rounded-[26px]
                  border
                  border-white/10
                  bg-white/10
                  p-6
                  backdrop-blur-2xl
                "
              >

                <div className="mb-5 text-3xl text-fuchsia-300">
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
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[760px] w-[760px] rounded-full border border-cyan-400/10"
        />

        <motion.div
          variants={fadeSection}
          initial="initial"
          whileInView="whileInView"
          viewport={{ amount: 0.5 }}
          transition={{
            duration: 1.3,
          }}
          className="relative z-10 text-center"
        >

          <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-cyan-300">
            Filosofía Visual
          </p>

          <h2 className="mb-7 text-4xl font-black uppercase md:text-6xl">

            <span className="text-fuchsia-400">
              Estética
            </span>{" "}

            <span className="text-cyan-300">
              Experimental
            </span>

          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70">
            Mezclamos diseño contemporáneo, referencias retrofuturistas y
            experiencias visuales inmersivas inspiradas en cine y música.
          </p>

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
          transition={{
            duration: 1.3,
          }}
          className="relative z-10 mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/10 px-7 py-16 text-center backdrop-blur-2xl"
        >

          <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-fuchsia-300">
            Contacto
          </p>

          <h2 className="mb-6 text-4xl font-black uppercase md:text-6xl">

            <span className="text-fuchsia-400">
              Creamos
            </span>{" "}

            <span className="text-cyan-300">
              Algo Único
            </span>

          </h2>

          <p className="mx-auto mb-9 max-w-xl text-base text-white/75">
            Diseñamos experiencias digitales con personalidad visual fuerte y
            estética memorable para marcas que quieren destacar.
          </p>

          <motion.button
            whileHover={{
              scale: 1.07,

              boxShadow:
                `
                -5px 0 18px rgba(255,0,255,0.65),
                5px 0 18px rgba(0,255,255,0.65),
                0 0 28px rgba(180,0,255,0.35)
                `,
            }}

            transition={{
              duration: 0.12,
            }}

            className="
              rounded-full
              bg-gradient-to-r
              from-fuchsia-500
              via-violet-400
              to-cyan-400
              px-8
              py-3
              text-[11px]
              font-black
              uppercase
              tracking-[0.28em]
              text-black
            "
          >
            Empezar Proyecto
          </motion.button>

        </motion.div>

      </section>

    </main>
  );
}