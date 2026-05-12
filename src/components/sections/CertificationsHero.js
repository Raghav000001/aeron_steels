"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

export function CertificationsHero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const pathLengths = [
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    useTransform(scrollYProgress, [0, 0.95], [0, 1]),
    useTransform(scrollYProgress, [0, 0.85], [0, 1]),
    useTransform(scrollYProgress, [0, 0.75], [0, 1]),
    useTransform(scrollYProgress, [0, 0.65], [0, 1]),
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-24 md:py-32 min-h-[70vh] flex items-center"
    >
      {/* Google Gemini Effect - animated background SVG paths */}
      <div className="absolute inset-0 z-0 opacity-60">
        <GoogleGeminiEffect pathLengths={pathLengths} />
      </div>

      {/* Ambient glow orbs — Stitch design glow-bg */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none z-[1]"
        style={{
          filter: "blur(120px)",
          opacity: 0.12,
          background:
            "radial-gradient(circle, rgba(239,68,68,0.8) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] pointer-events-none z-[1] opacity-10"
        style={{
          filter: "blur(120px)",
          background:
            "radial-gradient(circle, rgba(255,84,81,0.6) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.span
            className="font-mono text-[10px] md:text-[12px] text-primary tracking-[0.3em] uppercase block mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Global Standards
          </motion.span>

          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-[64px] lg:text-[72px] leading-tight md:leading-none text-white font-bold mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Architecture of{" "}
            <span className="text-primary italic">Industrial Trust.</span>
          </motion.h1>

          <motion.p
            className="max-w-2xl text-on-surface-variant text-sm md:text-base lg:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            At Aeron Steels, quality isn&apos;t just a department; it&apos;s our
            core engineering philosophy. Our certifications represent a legacy of
            precision and a commitment to global excellence.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
