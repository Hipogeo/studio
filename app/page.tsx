"use client";

import { motion } from "framer-motion";

const fadeSection = {
  initial: {
    opacity: 0,
    y: 120,
    scale: 0.96,
    filter: "blur(20px)",
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
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-fuchsia-500 blur-[180px]"
        />

        {/* RIGHT GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="absolute bottom-[-20%] right-[-10%] h-[800px] w-[800px] rounded-full bg-cyan-400 blur-[220px]"
        />

        {/* STARFIELD */}
        <div className="absolute inset-0 overflow-hidden">

          {/* WHITE STARS */}
          <motion.div
            animate={{
              y: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[-100%]"
          >

            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(white 1.2px, transparent 1.2px)",
                backgroundSize: "80px 80px",
                backgroundRepeat: "repeat",
              }}
            />

            <div
              className="absolute top-full h-full w-full opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(white 1.2px, transparent 1.2px)",
                backgroundSize: "80px 80px",
                backgroundRepeat: "repeat",
              }}
            />

          </motion.div>

          {/* CYAN STARS */}
          <motion.div
            animate={{
              y: ["0%", "-50%"],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[-100%]"
          >

            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(cyan 1.2px, transparent 1.2px)",
                backgroundSize: "160px 160px",
                backgroundRepeat: "repeat",
              }}
            />

            <div
              className="absolute top-full h-full w-full opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(cyan 1.2px, transparent 1.2px)",
                backgroundSize: "160px 160px",
                backgroundRepeat: "repeat",
              }}
            />

          </motion.div>

        </div>

      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-2xl">

        <div className="relative mx-auto flex max-w-7xl items-center px-6 py-5">

          {/* LOGO */}
          <div className="absolute left-6">

            <h1 className="text-sm font-black uppercase tracking-[0.35em] drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]">

  <span className="text-fuchsia-400">
    VAPORWAVE
  </span>{" "}

  <span className="text-cyan-300">
    STUDIO
  </span>

</h1>

          </div>

          {/* MENU */}
          <nav className="mx-auto flex gap-10 text-sm uppercase tracking-[0.3em]">

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
        className="relative flex min-h-screen snap-start items-center justify-center overflow-hidden px-6 text-center"
      >

        {/* BIG ROTATING CIRCLE */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[1000px] w-[1000px] rounded-full border border-fuchsia-500/10"
        />

        <motion.div
          variants={fadeSection}
          initial="initial"
          whileInView="whileInView"
          viewport={{ amount: 0.5 }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center text-center"
        >

          <p className="mb-6 text-sm uppercase tracking-[0.7em] text-cyan-300">
            Estudio Creativo Digital
          </p>

          <h1 className="mb-8 text-6xl font-black uppercase leading-none md:text-[9rem]">

            <span className="block text-fuchsia-400 drop-shadow-[0_0_40px_rgba(255,0,255,1)]">
              VAPORWAVE
            </span>

            <span className="block text-cyan-300 drop-shadow-[0_0_40px_rgba(0,255,255,1)]">
              STUDIO
            </span>

          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Creamos sitios web con identidad cinematográfica, branding visual
            de alto impacto y experiencias digitales pensadas para destacar
            en un mundo saturado de contenido genérico.
          </p>

        </motion.div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="relative flex min-h-screen snap-start items-center justify-center px-6 py-32"
      >

        <motion.div
          variants={fadeSection}
          initial="initial"
          whileInView="whileInView"
          viewport={{ amount: 0.3 }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          className="relative z-10 mx-auto max-w-7xl"
        >

          <div className="mb-20 text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-200">
              Servicios
            </p>

            <h2 className="text-5xl font-black uppercase md:text-7xl">
              Lo que hacemos
            </h2>

          </div>

          <div className="grid gap-10 md:grid-cols-3">

            {[
              {
                title: "Diseño Web",
                text:
                  "Sitios modernos, rápidos y totalmente personalizados para marcas, estudios, negocios y proyectos creativos.",
              },

              {
                title: "Branding",
                text:
                  "Creamos identidad visual, dirección estética, logos y sistemas visuales coherentes para posicionar tu marca.",
              },

              {
                title: "Dirección Creativa",
                text:
                  "Desarrollamos conceptos visuales únicos con foco en impacto visual, narrativa y diferenciación estética.",
              },
            ].map((item, i) => (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 100,
                  filter: "blur(20px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ amount: 0.5 }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                }}

                whileHover={{
                  scale: 1.06,
                  y: -14,
                  transition: {
                    duration: 0.11,
                    ease: "easeOut",
                  },
                }}

                className="
                  rounded-[40px]
                  border
                  border-white/10
                  bg-white/10
                  p-10
                  backdrop-blur-2xl
                  transition-transform
                  duration-110
                "
              >

                <div className="mb-8 text-5xl text-fuchsia-300">
                  ✦
                </div>

                <h3 className="mb-6 text-3xl font-bold uppercase">
                  {item.title}
                </h3>

                <p className="text-lg leading-relaxed text-white/80">
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
        className="relative flex min-h-screen snap-start items-center justify-center overflow-hidden px-6 py-32"
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
          className="absolute h-[1200px] w-[1200px] rounded-full border border-cyan-400/10"
        />

        <motion.div
          variants={fadeSection}
          initial="initial"
          whileInView="whileInView"
          viewport={{ amount: 0.5 }}
          transition={{
            duration: 1.5,
          }}
          className="relative z-10 text-center"
        >

          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-300">
            Filosofía Visual
          </p>

          <h2 className="mb-10 text-6xl font-black uppercase md:text-8xl">

            <span className="text-fuchsia-400">
              Estética
            </span>{" "}

            <span className="text-cyan-300">
              Experimental
            </span>

          </h2>

          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-white/70">
            Nuestro enfoque mezcla tecnología, diseño contemporáneo,
            referencias retrofuturistas y una dirección visual inspirada en el
            cine, la música electrónica y las experiencias inmersivas.
          </p>

        </motion.div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative flex min-h-screen snap-start items-center justify-center px-6 py-32"
      >

        <motion.div
          variants={fadeSection}
          initial="initial"
          whileInView="whileInView"
          viewport={{ amount: 0.5 }}
          transition={{
            duration: 1.5,
          }}
          className="relative z-10 mx-auto max-w-5xl rounded-[50px] border border-white/10 bg-white/10 px-10 py-24 text-center backdrop-blur-2xl"
        >

          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-fuchsia-300">
            Contacto
          </p>

          <h2 className="mb-8 text-6xl font-black uppercase md:text-8xl">

            <span className="text-fuchsia-400">
              Creamos
            </span>{" "}

            <span className="text-cyan-300">
              Algo Único
            </span>

          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-xl text-white/80">
            Si quieres una presencia digital con personalidad, identidad visual
            fuerte y una estética realmente memorable, estamos listos para
            construirla contigo.
          </p>

          <motion.button
            whileHover={{
              scale: 1.08,

              boxShadow:
                `
                -8px 0 28px rgba(255,0,255,0.65),
                8px 0 28px rgba(0,255,255,0.65),
                0 0 45px rgba(180,0,255,0.35)
                `,
            }}

            transition={{
              duration: 0.11,
              ease: "easeOut",
            }}

            className="
              rounded-full
              bg-gradient-to-r
              from-fuchsia-500
              via-violet-400
              to-cyan-400
              px-12
              py-5
              text-sm
              font-black
              uppercase
              tracking-[0.3em]
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