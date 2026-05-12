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

        {/* STARFIELD - DOTS ULTRA-NÍTIDOS */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-100%]"
          >
            {/* Capa de puntos nítidos */}
            <div 
              className="absolute inset-0 opacity-30" 
              style={{ 
                backgroundImage: "radial-gradient(circle, white 1px, transparent 0)",
                backgroundSize: "50px 50px",
              }} 
            />
            {/* Duplicado para scroll infinito */}
            <div 
              className="absolute top-full h-full w-full opacity-30" 
              style={{ 
                backgroundImage: "radial-gradient(circle, white 1px, transparent 0)",
                backgroundSize: "50px 50px",
              }} 
            />
          </motion.div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-2xl">
        <div className="relative flex items-center justify-end px-5 py-3">
          <div className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 flex items-center">
            <div className="relative select-none">
              <div className="absolute inset-0 blur-lg opacity-80">
                <span className="text-[22px] font-black tracking-tight bg-gradient-to-r from-pink-500 via-violet-400 to-blue-400 bg-clip-text text-transparent">StudioNine</span>
              </div>
              <span className="relative text-[22px] font-black tracking-tight bg-gradient-to-r from-pink-500 via-violet-400 to-blue-400 bg-clip-text text-transparent">StudioNine</span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-[9px] uppercase tracking-[0.24em] md:flex">
            <a href="#hero" className="transition-all duration-300 hover:text-pink-400 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.9)]">{isEnglish ? "Home" : "Inicio"}</a>
            <a href="#services" className="transition-all duration-300 hover:text-violet-400 hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.9)]">{isEnglish ? "Services" : "Servicios"}</a>
            <a href="#showcase" className="transition-all duration-300 hover:text-blue-400 hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.9)]">{isEnglish ? "Aesthetics" : "Estética"}</a>
            <a href="#contact" className="transition-all duration-300 hover:text-pink-400 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.9)]">{isEnglish ? "Contact" : "Contacto"}</a>
          </nav>
        </div>
      </header>

{/* HERO - REESTRUCTURADO PARA CENTRADO PERFECTO */}
      <section id="hero" className="relative flex h-screen snap-start items-center justify-center overflow-hidden px-5">
        
        {/* CONTENEDOR MAESTRO DEL RING Y LOGO */}
        <div className="relative flex h-[350px] w-[350px] items-center justify-center md:h-[520px] md:w-[520px] mt-10">
          
          {/* EL RING (Reducido de 580px a 520px para que no se pase por debajo) */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="h-full w-full rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #ec4899, #8b5cf6, #3b82f6, #ec4899)",
                mask: "radial-gradient(circle, transparent 69%, black 70%)",
                WebkitMask: "radial-gradient(circle, transparent 69%, black 70%)",
              }}
            />
            <motion.div
              animate={{ rotate: [0, 360], scale: [1, 1.03, 1] }}
              transition={{ 
                rotate: { duration: 6, repeat: Infinity, ease: "linear" }, 
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
              }}
              className="absolute inset-0 rounded-full opacity-30 blur-2xl"
              style={{ background: "conic-gradient(from 0deg, #ec4899, #8b5cf6, #3b82f6, #ec4899)" }}
            />
          </div>

          {/* CONTENIDO (LOGO Y TEXTOS) - Ahora vive dentro del mismo flex que el ring */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <motion.p 
              initial={{ opacity: 0, filter: "blur(12px)" }} 
              whileInView={{ opacity: 1, filter: "blur(0px)" }} 
              transition={{ duration: 1, delay: 0.4 }} 
              className="mb-2 text-[9px] uppercase tracking-[0.5em] text-violet-300 md:text-[11px]"
            >
              {isEnglish ? "Creative Digital Studio" : "Estudio Creativo Digital"}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[180px] md:w-[280px]"
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
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.8 }} 
              className="mt-4 max-w-[200px] text-[10px] leading-relaxed text-white/70 md:max-w-xs md:text-[12px]"
            >
              {isEnglish ? "We create digital experiences" : "Creamos experiencias digitales"}
            </motion.p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative flex min-h-screen snap-start items-center justify-center px-5 py-20">
        <motion.div variants={fadeSection} initial="initial" whileInView="whileInView" viewport={{ amount: 0.3 }} transition={{ duration: 1.2 }} className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-violet-300">{isEnglish ? "Services" : "Servicios"}</p>
            <h2 className="text-3xl font-black uppercase md:text-5xl">{isEnglish ? "What we do" : "Lo que hacemos"}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { es: "Diseño Web", en: "Web Design", tEs: "Sitios modernos y totalmente personalizados para marcas y proyectos creativos.", tEn: "Modern and fully customized sites for brands and creative projects." },
              { es: "Branding", en: "Branding", tEs: "Creamos identidad visual, logos y dirección estética coherente.", tEn: "We create visual identity, logos and coherent aesthetic direction." },
              { es: "Dirección Creativa", en: "Creative Direction", tEs: "Conceptos visuales únicos con foco en narrativa e impacto.", tEn: "Unique visual concepts with a focus on narrative and impact." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 80, filter: "blur(18px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ amount: 0.5 }} transition={{ duration: 1, delay: i * 0.15 }} whileHover={{ scale: 1.04, y: -8, transition: { duration: 0.16 } }} className="rounded-[26px] border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
                <div className={`mb-5 text-3xl ${i === 0 ? "text-pink-400" : i === 1 ? "text-violet-400" : "text-blue-400"}`}>✦</div>
                <h3 className="mb-4 text-xl font-bold uppercase">{isEnglish ? item.en : item.es}</h3>
                <p className="text-sm leading-relaxed text-white/75">{isEnglish ? item.tEn : item.tEs}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

{/* SHOWCASE */}
      <section id="showcase" className="relative flex min-h-screen snap-start items-center justify-center overflow-hidden px-5 py-20">
        
        {/* EL RING (Sincronizado con el tamaño del Hero) */}
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute h-[350px] w-[350px] rounded-full border border-blue-400/20 md:h-[520px] md:w-[520px]"
          style={{
            maskImage: "radial-gradient(circle, transparent 69%, black 70%)",
            WebkitMaskImage: "radial-gradient(circle, transparent 69%, black 70%)",
          }}
        />

        {/* Resplandor sutil para el ring */}
        <div className="absolute h-[350px] w-[350px] rounded-full border border-pink-500/10 blur-sm md:h-[520px] md:w-[520px]" />

        <motion.div 
          variants={fadeSection} 
          initial="initial" 
          whileInView="whileInView" 
          viewport={{ amount: 0.5 }} 
          transition={{ duration: 1.3 }} 
          className="relative z-10 text-center"
        >
          <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-violet-300">
            {isEnglish ? "Visual Philosophy" : "Filosofía Visual"}
          </p>
          <h2 className="mb-7 text-4xl font-black uppercase md:text-6xl">
            <span className="text-pink-500">{isEnglish ? "Aesthetic" : "Estética"}</span>{" "}
            <span className="text-blue-400">{isEnglish ? "Experimental" : "Experimental"}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70">
            {isEnglish 
              ? "We mix contemporary design, retro-futuristic references and immersive visual experiences inspired by cinema and music." 
              : "Mezclamos diseño contemporáneo, referencias retrofuturistas y experiencias visuales inmersivas inspiradas en cine y música."}
          </p>
        </motion.div>
      </section>

{/* PORTFOLIO CAROUSEL - COMPACT VERSION */}
      <section className="relative flex min-h-screen snap-start items-center justify-center overflow-hidden px-5 py-10 md:py-16">
        <motion.div 
          variants={fadeSection} 
          initial="initial" 
          whileInView="whileInView" 
          viewport={{ amount: 0.3 }} 
          transition={{ duration: 1.2 }} 
          className="relative z-10 w-full max-w-[1400px]"
        >
          {/* Header más pequeño */}
          <div className="mb-6 md:mb-10 text-center">
            <p className="mb-2 text-[9px] uppercase tracking-[0.4em] text-violet-300">Portfolio</p>
            <h2 className="text-3xl font-black uppercase md:text-5xl">{isEnglish ? "Our works" : "Nuestros trabajos"}</h2>
          </div>

          <div className="relative px-4 md:px-12">
            {/* Botones ajustados en tamaño */}
            <button 
              onClick={() => document.getElementById("portfolio-scroll")?.scrollBy({ left: -320, behavior: "smooth" })} 
              className="absolute -left-2 md:left-0 top-1/2 z-30 -translate-y-1/2 rounded-full border border-pink-500/30 bg-black/40 p-3 md:p-4 text-xl text-pink-400 backdrop-blur-xl transition hover:scale-110 hover:border-pink-400"
            >
              ‹
            </button>
            <button 
              onClick={() => document.getElementById("portfolio-scroll")?.scrollBy({ left: 320, behavior: "smooth" })} 
              className="absolute -right-2 md:right-0 top-1/2 z-30 -translate-y-1/2 rounded-full border border-blue-500/30 bg-black/40 p-3 md:p-4 text-xl text-blue-400 backdrop-blur-xl transition hover:scale-110 hover:border-blue-400"
            >
              ›
            </button>

            <div
              id="portfolio-scroll"
              className="flex gap-5 overflow-x-auto overflow-y-hidden scroll-smooth px-6 py-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
              }}
            >
              {["Neo Brand Site", "Cyber Studio", "Luxury UI", "Vaporwave Landing", "Future Commerce", "Digital Identity"].map((title, i) => (
                <motion.div 
                  key={title} 
                  whileHover={{ y: -5, scale: 1.02 }} 
                  transition={{ duration: 0.2 }} 
                  className="group relative min-w-[260px] md:min-w-[300px] rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl"
                >
                  {/* Preview de imagen más baja (140px en vez de 180px) */}
                  <div className={`relative mb-4 h-[140px] overflow-hidden rounded-[18px] ${i % 2 === 0 ? "bg-gradient-to-br from-pink-500/30 to-blue-500/20" : "bg-gradient-to-br from-violet-500/30 to-blue-400/20"}`}>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "15px 15px" }} />
                    <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-y-0 w-16 rotate-12 bg-white/5 blur-xl" />
                  </div>
                  
                  {/* Tipografía más compacta */}
                  <h3 className="mb-2 text-lg font-black uppercase leading-tight tracking-tight">{title}</h3>
                  <p className="text-[11px] leading-relaxed text-white/50">{isEnglish ? "Web design / branding" : "Diseño web / branding"}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative flex min-h-screen snap-start items-center justify-center px-5 py-20">
        <motion.div variants={fadeSection} initial="initial" whileInView="whileInView" viewport={{ amount: 0.5 }} transition={{ duration: 1.3 }} className="relative z-10 mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/10 px-7 py-16 text-center backdrop-blur-2xl">
          <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-pink-300">{isEnglish ? "Contact" : "Contacto"}</p>
          <h2 className="mb-6 text-4xl font-black uppercase md:text-6xl">
            <span className="text-pink-500">{isEnglish ? "Let's create" : "Creamos"}</span> <span className="text-blue-400">{isEnglish ? "Something Unique" : "Algo Único"}</span>
          </h2>
          <p className="mx-auto mb-9 max-w-xl text-base text-white/75">{isEnglish ? "We design digital experiences with strong visual personality and memorable aesthetics for brands that want to stand out." : "Diseñamos experiencias digitales con personalidad visual fuerte y estética memorable para marcas que quieren destacar."}</p>
          <motion.button whileHover={{ scale: 1.07, boxShadow: "-5px 0 18px rgba(236,72,153,0.65), 5px 0 18px rgba(96,165,250,0.65), 0 0 28px rgba(167,139,250,0.35)" }} transition={{ duration: 0.12 }} className="rounded-full bg-gradient-to-r from-pink-600 via-violet-500 to-blue-500 px-8 py-3 text-[11px] font-black uppercase tracking-[0.28em] text-white">
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
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/10 to-blue-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10">{isEnglish ? "ES" : "EN"}</span>
        </button>
      </div>

    </main>
  );
}