"use client";

import React, { useState } from "react";
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
  const [isEnglish, setIsEnglish] = useState(false);

  const [activeService, setActiveService] = useState<number | null>(null);

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
          className="absolute left-[-35%] top-[-20%] h-[260px] w-[260px] rounded-full bg-pink-600 blur-[100px] md:left-[-10%] md:top-[-10%] md:h-[430px] md:w-[430px] md:blur-[140px]"
        />

        {/* RIGHT GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute bottom-[-25%] right-[-35%] h-[300px] w-[300px] rounded-full bg-blue-500 blur-[110px] md:bottom-[-20%] md:right-[-10%] md:h-[520px] md:w-[520px] md:blur-[160px]"
        />

        {/* STARFIELD */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-100%]"
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 0)",
                backgroundSize: "50px 50px",
              }}
            />

            <div
              className="absolute top-full h-full w-full opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 0)",
                backgroundSize: "50px 50px",
              }}
            />
          </motion.div>
        </div>
      </div>

{/* NAVBAR */}
<header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-2xl">
  <div className="relative flex items-center justify-end px-5 py-3">

    <div className="absolute left-2 top-1/2 flex -translate-y-1/2 items-center md:left-5">
      <div className="relative select-none">

        <span className="relative text-[22px] font-black tracking-tight">
          <span className="text-white">Studio</span>

          <span className="bg-gradient-to-r from-pink-500 via-violet-400 to-blue-400 bg-clip-text text-transparent">
            Nine
          </span>
        </span>

      </div>
    </div>

    <nav className="hidden items-center gap-6 text-[9px] uppercase tracking-[0.24em] md:flex">

      <a
        href="#hero"
        className="transition-all duration-300 hover:text-pink-400 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.9)]"
      >
        {isEnglish ? "Home" : "Inicio"}
      </a>

      <a
        href="#services"
        className="transition-all duration-300 hover:text-violet-400 hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.9)]"
      >
        {isEnglish ? "Services" : "Servicios"}
      </a>

      <a
        href="#showcase"
        className="transition-all duration-300 hover:text-blue-400 hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.9)]"
      >
        {isEnglish ? "Aesthetics" : "Estética"}
      </a>

      <a
        href="#contact"
        className="transition-all duration-300 hover:text-pink-400 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.9)]"
      >
        {isEnglish ? "Contact" : "Contacto"}
      </a>

    </nav>

  </div>
</header>

      {/* HERO */}
      <section
        id="hero"
        className="relative flex h-screen snap-start items-center justify-center overflow-hidden px-5"
      >

        {/* CONTENEDOR */}
        <div
          className="
            relative
            mt-10
            flex
            items-center
            justify-center

            h-[clamp(320px,45vw,520px)]
            w-[clamp(320px,45vw,520px)]
          "
        >

          {/* RING */}
          <div className="absolute inset-0">

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="h-full w-full rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #ec4899, #8b5cf6, #3b82f6, #ec4899)",
                mask:
                  "radial-gradient(circle, transparent 69%, black 70%)",
                WebkitMask:
                  "radial-gradient(circle, transparent 69%, black 70%)",
              }}
            />

            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.03, 1],
              }}
              transition={{
                rotate: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute inset-0 rounded-full opacity-30 blur-2xl"
              style={{
                background:
                  "conic-gradient(from 0deg, #ec4899, #8b5cf6, #3b82f6, #ec4899)",
              }}
            />
          </div>

          {/* CONTENIDO */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center">

            <motion.p
              initial={{
                opacity: 0,
                filter: "blur(12px)",
              }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              className="
                mb-2
                uppercase
                tracking-[0.5em]
                text-violet-300

                text-[clamp(9px,0.8vw,11px)]
              "
            >
              {isEnglish
                ? "Creative Digital Studio"
                : "Estudio Creativo Digital"}
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative

                w-[clamp(180px,26vw,280px)]
              "
            >
              <Image
                src="/logo grande 3.png"
                alt="Logo"
                width={400}
                height={400}
                className="h-auto w-full drop-shadow-[0_0_30px_rgba(236,72,153,0.3)]"
              />
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.8,
              }}
              className="
                mt-4
                leading-relaxed
                text-white/70

                max-w-[clamp(200px,30vw,320px)]
                text-[clamp(10px,1vw,12px)]
              "
            >
              {isEnglish
                ? "We create digital experiences"
                : "Creamos experiencias digitales"}
            </motion.p>

          </div>
        </div>
      </section>

{/* SERVICES - FULL INTEGRATION: NEON COLORS + BUTTONS + ANIMATED GRAPHICS */}
<section
  id="services"
  className="relative flex min-h-screen snap-start items-center justify-center px-5 py-20"
>
  <motion.div
    variants={fadeSection}
    initial="initial"
    whileInView="whileInView"
    onViewportLeave={() => setActiveService(null)}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 1.2 }}
    className="relative z-10 mx-auto w-full max-w-5xl"
  >
    {/* HEADER */}
    <div className="mb-14 text-center">
      <p className="mb-3 text-[clamp(11px,1vw,13px)] uppercase tracking-[0.4em] text-violet-300">
        {isEnglish ? "Services" : "Servicios"}
      </p>

      <h2 className="text-[clamp(42px,6vw,88px)] font-black uppercase leading-none">
        {isEnglish ? "What we do" : "Lo que hacemos"}
      </h2>
    </div>

    {/* CONTAINER */}
    <div className="relative h-[320px]">
      {[
        {
          es: "Diseño Web",
          en: "Web Design",
          tEs: "Sitios modernos y totalmente personalizados para marcas y proyectos creativos.",
          tEn: "Modern and fully customized sites for brands and creative projects.",
          contentEs: "Diseñamos y desarrollamos sitios web de alto impacto visual con arquitectura sólida, rendimiento optimizado y experiencia de usuario cuidada al detalle. Cada proyecto es una pieza única construida desde cero.",
          contentEn: "We design and develop high-impact websites with solid architecture, optimized performance and carefully crafted user experience. Each project is a unique piece built from scratch.",
          gradient: "from-pink-500/30 via-violet-500/20 to-blue-500/20",
        },
        {
          es: "Branding",
          en: "Branding",
          tEs: "Creamos identidad visual, logos y dirección estética coherente.",
          tEn: "We create visual identity, logos and coherent aesthetic direction.",
          contentEs: "Desarrollamos sistemas de identidad visual completos: logotipo, paleta cromática, tipografía e iconografía. Construimos marcas con carácter propio, capaces de comunicar con consistencia.",
          contentEn: "We develop complete visual identity systems: logotype, color palette, typography and iconography. We build brands with their own character, able to communicate consistently.",
          gradient: "from-violet-500/30 via-fuchsia-500/20 to-pink-500/20",
        },
        {
          es: "Dirección Creativa",
          en: "Creative Direction",
          tEs: "Conceptos visuales únicos con foco en narrativa e impacto.",
          tEn: "Unique visual concepts with a focus on narrative and impact.",
          contentEs: "Definimos el concepto visual y narrativo de cada proyecto con precisión estratégica. Coordinamos estética, tono y contenido para construir una experiencia cohesiva que comunique con intención.",
          contentEn: "We define the visual and narrative concept of each project with strategic precision. We coordinate aesthetics, tone and content to build a cohesive experience that communicates with intention.",
          gradient: "from-blue-500/30 via-cyan-500/20 to-violet-500/20",
        },
      ].map((item, i) => {
        const isActive = activeService === i;
        const anotherIsActive = activeService !== null && activeService !== i;

        // ASIGNACIÓN DE COLORES SINCRONIZADA
        const accentColor = i === 0 ? "text-pink-400" : i === 1 ? "text-violet-400" : "text-blue-400";
        const accentBg = i === 0 ? "bg-pink-400/10 border-pink-400/20" : i === 1 ? "bg-violet-400/10 border-violet-400/20" : "bg-blue-400/10 border-blue-400/20";
        
        const neonStyles = i === 0 
          ? "hover:border-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.3)]" 
          : i === 1 
          ? "hover:border-violet-500 hover:shadow-[0_0_25px_rgba(167,139,250,0.3)]"
          : "hover:border-blue-400 hover:shadow-[0_0_25px_rgba(96,165,250,0.3)]";

        return (
          <motion.div
            key={i}
            layout
            onClick={() => setActiveService(isActive ? null : i)}
            transition={{ layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
            animate={{
              opacity: anotherIsActive ? 0 : 1,
              scale: anotherIsActive ? 0.92 : 1,
              filter: anotherIsActive ? "blur(12px)" : "blur(0px)",
            }}
            className={`absolute top-0 cursor-pointer overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl transition-all duration-300 ${neonStyles} ${
              isActive ? "left-0 w-full p-8 md:p-10" : "w-[31.5%] p-6"
            }`}
            style={{
              left: isActive ? 0 : i === 0 ? "0%" : i === 1 ? "34.25%" : "68.5%",
              height: "320px",
              pointerEvents: anotherIsActive ? "none" : "auto",
            }}
          >
            {/* BACKGROUND */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40`} />
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />

            <div className="relative z-10 h-full">
              {!isActive && (
                <motion.div initial={false} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="flex h-full flex-col">
                  <div className={`mb-5 text-3xl ${accentColor}`}>✦</div>
                  <h3 className="mb-4 text-xl font-bold uppercase">{isEnglish ? item.en : item.es}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-white/75">{isEnglish ? item.tEn : item.tEs}</p>
                  
                  {/* BOTÓN DE EXPANSIÓN */}
                  <div className="mt-auto">
                    <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 transition-all duration-300 hover:bg-white/10 ${accentBg}`}>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${accentColor}`}>
                        {isEnglish ? "View more" : "Ver más"}
                      </span>
                      <span className={`text-xs ${accentColor}`}>+</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {isActive && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }} className="flex h-full flex-row items-center gap-10">
                  <div className="flex flex-1 flex-col justify-center">
                    <div className="mb-4 flex items-center gap-4">
                      <div className={`text-4xl ${accentColor}`}>✦</div>
                      <h3 className="text-[clamp(19px,2.5vw,37px)] font-black uppercase leading-none">{isEnglish ? item.en : item.es}</h3>
                    </div>
                    <p className="max-w-lg text-[clamp(13px,1.1vw,16px)] leading-relaxed text-white/75">{isEnglish ? item.contentEn : item.contentEs}</p>
                  </div>

                  {/* GRAPHICS AREA (RECUPERADO) */}
                  <div className="flex h-full w-[320px] shrink-0 items-center justify-center">
                    {i === 0 && (
                      <div className="relative h-[220px] w-[280px] overflow-hidden rounded-[18px] border border-white/15 bg-black/40 shadow-[0_0_40px_rgba(236,72,153,0.15)]">
                        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-3 py-2">
                          <div className="h-2 w-2 rounded-full bg-pink-400/80" /><div className="h-2 w-2 rounded-full bg-violet-400/80" /><div className="h-2 w-2 rounded-full bg-blue-400/80" />
                          <div className="mx-2 flex-1 rounded-full bg-white/10 py-[3px] px-2">
                            <motion.div animate={{ width: ["40%", "80%", "40%"] }} transition={{ duration: 4, repeat: Infinity }} className="h-[4px] rounded-full bg-pink-400/50" />
                          </div>
                        </div>
                        <div className="p-4 space-y-2">
                          <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity }} className="h-14 rounded-[10px] bg-gradient-to-r from-pink-500/30 via-violet-500/20 to-blue-500/20" />
                          <motion.div animate={{ width: ["70%", "90%", "70%"] }} transition={{ duration: 3.5, repeat: Infinity }} className="h-2 rounded-full bg-white/20" />
                          <div className="flex gap-2 pt-1">
                            {[0, 1, 2].map(j => <motion.div key={j} animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, delay: j * 0.4 }} className="flex-1 h-10 rounded-[8px] bg-white/[0.06] border border-white/10" />)}
                          </div>
                        </div>
                        <motion.div animate={{ y: ["-100%", "400%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-pink-400/60 to-transparent" />
                      </div>
                    )}

                    {i === 1 && (
                      <div className="relative flex h-[300px] w-[300px] items-center justify-center">
                        {[0, 1, 2].map((j) => (
                          <motion.div key={j} animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 3.5 + j, repeat: Infinity }} className="absolute rounded-full border border-violet-400/20" style={{ width: 110 + j * 55, height: 110 + j * 55 }} />
                        ))}
                        <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-[0_0_60px_rgba(167,139,250,0.3)]">
                          <span className="text-4xl font-black bg-gradient-to-br from-white via-violet-200 to-pink-300 bg-clip-text text-transparent tracking-tighter">S9</span>
                        </div>
                        {[
                          { top: "15%", right: "20%", delay: 0.1, size: "text-2xl" },
                          { bottom: "20%", left: "15%", delay: 0.8, size: "text-xl" },
                          { top: "5%", left: "45%", delay: 1.5, size: "text-sm" },
                          { top: "40%", left: "10%", delay: 0.4, size: "text-base" },
                          { bottom: "25%", right: "15%", delay: 1.9, size: "text-xl" },
                        ].map((spark, index) => (
                          <motion.div key={index} animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0], rotate: [0, 90, 180] }} transition={{ duration: 2.5, repeat: Infinity, delay: spark.delay }} className={`absolute ${spark.size} text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]`} style={{ top: spark.top, bottom: spark.bottom, left: spark.left, right: spark.right }}>✦</motion.div>
                        ))}
                      </div>
                    )}

                    {i === 2 && (
                      <div className="relative h-[220px] w-[280px]">
                        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
                          {[0, 0.3, 0.6, 0.9].map((delay, j) => (
                            <motion.div key={j} animate={{ opacity: [0.5, 1, 0.5], scale: [0.97, 1, 0.97] }} transition={{ duration: 2.4, repeat: Infinity, delay }} className="relative overflow-hidden rounded-[10px] border border-white/10 bg-white/5">
                              <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay }} className="absolute inset-y-0 w-8 rotate-12 bg-white/10 blur-md" />
                            </motion.div>
                          ))}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <motion.div animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="h-6 w-6 rounded-full border border-cyan-400/60" />
                          <div className="absolute h-[1px] w-8 bg-cyan-400/40" /><div className="absolute h-8 w-[1px] bg-cyan-400/40" />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  </motion.div>
</section>

      {/* SHOWCASE */}
      <section
        id="showcase"
        className="relative flex min-h-screen snap-start items-center justify-center overflow-hidden px-5 py-20"
      >

        {/* RING */}
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            rounded-full
            border
            border-blue-400/20

            h-[clamp(320px,45vw,520px)]
            w-[clamp(320px,45vw,520px)]
          "
          style={{
            maskImage:
              "radial-gradient(circle, transparent 69%, black 70%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 69%, black 70%)",
          }}
        />

        {/* GLOW */}
        <div
          className="
            absolute
            rounded-full
            border
            border-pink-500/10
            blur-sm

            h-[clamp(320px,45vw,520px)]
            w-[clamp(320px,45vw,520px)]
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
            {isEnglish
              ? "Visual Philosophy"
              : "Filosofía Visual"}
          </p>

          <h2 className="mb-7 text-4xl font-black uppercase md:text-6xl">
            <span className="text-pink-500">
              {isEnglish ? "Aesthetic" : "Estética"}
            </span>{" "}
            <span className="text-blue-400">
              {isEnglish ? "Experimental" : "Experimental"}
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70">
            {isEnglish
              ? "We mix contemporary design, retro-futuristic references and immersive visual experiences inspired by cinema and music."
              : "Mezclamos diseño contemporáneo, referencias retrofuturistas y experiencias visuales inmersivas inspiradas en cine y música."}
          </p>

        </motion.div>
      </section>

{/* PORTFOLIO CAROUSEL - MANUAL INFINITE LOOP */}
<section className="relative flex h-screen snap-start flex-col justify-center overflow-hidden px-5 py-20 md:py-24">
  <motion.div
    variants={fadeSection}
    initial="initial"
    whileInView="whileInView"
    viewport={{ amount: 0.3 }}
    transition={{ duration: 1.2 }}
    className="relative z-10 mx-auto w-full max-w-[1400px]"
  >
    {/* Header */}
    <div className="mb-12 md:mb-16 text-center">
      <p className="mb-3 text-[clamp(10px,0.9vw,12px)] uppercase tracking-[0.4em] text-violet-300">
        Portfolio
      </p>
      <h2 className="text-[clamp(32px,5vw,64px)] font-black uppercase leading-none tracking-tighter">
        {isEnglish ? "Our works" : "Nuestros trabajos"}
      </h2>
    </div>

    <div className="relative px-2 md:px-10">
      {/* Botones de navegación con lógica de Teletransporte */}
      <button
        onClick={() => {
          const el = document.getElementById("portfolio-scroll");
          if (el) {
            el.scrollBy({ left: -380, behavior: "smooth" });
            
            // Si está muy cerca del inicio del set duplicado, saltamos al centro
            if (el.scrollLeft <= 100) {
              setTimeout(() => {
                el.scrollTo({ left: el.scrollWidth / 3, behavior: "auto" });
              }, 500); // Espera a que termine la animación "smooth"
            }
          }
        }}
        className="absolute -left-6 top-1/2 z-40 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-3 md:p-4 text-white/50 backdrop-blur-xl transition hover:scale-110 hover:border-pink-500 hover:text-pink-400 hidden md:flex items-center justify-center"
      >
        ‹
      </button>

      <button
        onClick={() => {
          const el = document.getElementById("portfolio-scroll");
          if (el) {
            el.scrollBy({ left: 380, behavior: "smooth" });

            // Si está llegando al final del set duplicado, saltamos al centro
            if (el.scrollLeft + el.clientWidth >= (el.scrollWidth * 2) / 3) {
              setTimeout(() => {
                el.scrollTo({ left: el.scrollWidth / 3, behavior: "auto" });
              }, 500);
            }
          }
        }}
        className="absolute -right-6 top-1/2 z-40 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-3 md:p-4 text-white/50 backdrop-blur-xl transition hover:scale-110 hover:border-blue-500 hover:text-blue-400 hidden md:flex items-center justify-center"
      >
        ›
      </button>

      <div
        id="portfolio-scroll"
        className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        {/* Usamos 3 copias. El usuario empezará en la del medio (Set 1) */}
        {[0, 1, 2].map((setIndex) => (
          <React.Fragment key={setIndex}>
            {[
              { title: "Real Estate Platform", link: "https://inmobiliaria-eta-sepia.vercel.app/", img: "/web-inmobiliaria.png" },
              { title: "Tapiclear", link: "https://tapiclear.vercel.app/", img: "/web-tapiclear.png" },
              { title: "Neo Brand Site" },
              { title: "Cyber Studio" },
              { title: "Luxury UI" },
              { title: "Vaporwave Landing" },
              { title: "Digital Identity" },
              { title: "S9 Vision" },
            ].map((project, i) => {
              const isPink = i % 2 === 0;
              const neonClass = isPink 
                ? "hover:border-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.3)]" 
                : "hover:border-blue-400 hover:shadow-[0_0_25px_rgba(96,165,250,0.3)]";

              return (
                <motion.div
                  key={`${setIndex}-${project.title}-${i}`}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onClick={() => project.link && window.open(project.link, "_blank")}
                  className={`group relative min-w-[300px] md:min-w-[360px] cursor-pointer rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-3xl transition-all duration-300 ${neonClass}`}
                >
                  <div
                    className="relative mb-4 h-[220px] overflow-hidden rounded-[18px]"
                    style={{
                      backgroundImage: project.img ? `url(${project.img})` : undefined,
                      backgroundColor: project.img ? 'transparent' : (isPink ? 'rgba(236, 72, 153, 0.1)' : 'rgba(96, 165, 250, 0.1)'),
                      backgroundSize: 'cover',
                      backgroundPosition: 'top',
                    }}
                  >
                    {project.link && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Visit Real Site ↗</span>
                      </div>
                    )}
                    
                    {!project.img && (
                      <div className={`absolute inset-0 z-0 bg-gradient-to-br ${isPink ? "from-pink-500/30 via-violet-500/10" : "from-blue-500/30 via-cyan-400/10"} opacity-30`}/>
                    )}

                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className={`absolute inset-0 z-0 rounded-full blur-[60px] ${isPink ? "bg-pink-400/20" : "bg-blue-400/20"}`}
                    />
                  </div>

                  <h3 className="mb-2 text-[clamp(18px,1.5vw,22px)] font-black uppercase leading-tight tracking-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className={`text-[11px] font-bold uppercase tracking-widest ${isPink ? "text-pink-400/80" : "text-blue-400/80"}`}>
                    {isEnglish ? "Web Design / Concept" : "Diseño Web / Concepto"}
                  </p>
                </motion.div>
              );
            })}
          </React.Fragment>
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
    className="relative z-10 mx-auto w-full max-w-[900px] rounded-[32px] border border-white/10 bg-white/10 px-[clamp(28px,4vw,56px)] py-[clamp(56px,8vw,96px)] text-center backdrop-blur-2xl"
  >
    <p className="mb-3 text-[clamp(11px,0.9vw,13px)] uppercase tracking-[0.4em] text-pink-300">
      {isEnglish ? "Contact" : "Contacto"}
    </p>

    <h2 className="mb-6 text-[clamp(42px,6vw,72px)] font-black uppercase leading-none">
      <span className="text-pink-500">
        {isEnglish ? "Let's create" : "Creamos"}
      </span>{" "}
      <span className="text-blue-400">
        {isEnglish ? "Something Unique" : "Algo Único"}
      </span>
    </h2>

    <p className="mx-auto mb-9 max-w-[clamp(320px,60vw,700px)] text-[clamp(14px,1.1vw,18px)] leading-relaxed text-white/75">
      {isEnglish
        ? "We design digital experiences with strong visual personality and memorable aesthetics for brands that want to stand out."
        : "Diseñamos experiencias digitales con personalidad visual fuerte y estética memorable para marcas que quieren destacar."}
    </p>

    <motion.button
      whileHover={{
        scale: 1.07,
        boxShadow:
          "-5px 0 18px rgba(236,72,153,0.65), 5px 0 18px rgba(96,165,250,0.65), 0 0 28px rgba(167,139,250,0.35)",
      }}
      transition={{ duration: 0.12 }}
      className="rounded-full bg-gradient-to-r from-pink-600 via-violet-500 to-blue-500 px-[clamp(28px,4vw,42px)] py-[clamp(12px,1.2vw,16px)] text-[clamp(11px,0.9vw,13px)] font-black uppercase tracking-[0.28em] text-white"
    >
      {isEnglish ? "Start Project" : "Empezar Proyecto"}
    </motion.button>
  </motion.div>
</section>

{/* BOTÓN DE IDIOMA */}
<div className="fixed bottom-6 left-6 z-[9999]">
  <button
    onClick={() => setIsEnglish(!isEnglish)}
    className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-[10px] font-black tracking-widest text-white backdrop-blur-xl transition-all hover:border-pink-500/50 active:scale-95"
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/10 to-blue-500/10 opacity-50 transition-opacity group-hover:opacity-100" />

    <span className="relative z-10">
      {isEnglish ? "ES" : "EN"}
    </span>
  </button>
</div>

</main>
);
}