"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-60"
          alt="A cinematic, low-angle shot of a futuristic steel manufacturing plant at twilight."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuARUHuTWj9eyxa74cL5COaRpZ26sZ7r6wJNFgy-55ZqQZ5rPXh3Z2ePsf7q6tJ2UnxjyxyJ7kDZs6zjeTuxV5wzCkSKnYIEZC6ofXVaBXP_rWiliV63NWnT3X7r4mhuf-0Y5EZInA0cfxMbFj9fdbO4Pl-D6sYxfHV6RPqq_oQsgPW3Wg5WWuKRHdOMxWxmOoX51ny---paID9GGI_jg0LvOwTUXivw2y1DG_afaZqaM3L2Eh-N5V1ShXJnzHic2-8HjLADFpOP9I49"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0),rgba(19,19,19,0.8))]" />
      </div>

      <div className="relative z-10 text-center px-5 md:px-[64px]">
        <motion.span
          className="font-mono text-[12px] md:text-[14px] text-primary tracking-widest mb-4 block uppercase font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Forging the Future
        </motion.span>

        <motion.h1
          className="font-heading text-[60px] md:text-[72px] leading-tight text-white mb-8 font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Architects of <br />
          <span className="text-primary" style={{ textShadow: "0 0 20px rgba(255, 179, 173, 0.4)" }}>
            Precision Steel
          </span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto font-sans text-[16px] text-on-surface-variant leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Defining the global standard in high-performance metallurgy through autonomous engineering and visionary industrial design.
        </motion.p>
      </div>

      {/* Decorative Viewport Frames */}
      <div className="absolute top-40 left-10 w-12 h-12 border-l-2 border-t-2 border-primary opacity-50" />
      <div className="absolute top-40 right-10 w-12 h-12 border-r-2 border-t-2 border-primary opacity-50" />
      <div className="absolute bottom-10 left-10 w-12 h-12 border-l-2 border-b-2 border-primary opacity-50" />
      <div className="absolute bottom-10 right-10 w-12 h-12 border-r-2 border-b-2 border-primary opacity-50" />
    </section>
  );
}
