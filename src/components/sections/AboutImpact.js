"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function AboutImpact() {
  return (
    <section className="relative overflow-hidden w-full">
      <WavyBackground
        colors={["#ef4444", "#ff5451", "#ffb3ad", "#ef4444", "#dc2626"]}
        backgroundFill="#131313"
        waveOpacity={0.2}
        blur={10}
        speed="slow"
        waveWidth={40}
        containerClassName="!h-auto !min-h-0"
        className="w-full py-20 md:py-[160px]"
      >
        {/* Decorative Borders */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 z-10" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 z-10" />
        <div className="absolute inset-0 z-[5] bg-primary/5 pointer-events-none" />

        <div className="max-w-[1440px] w-full mx-auto px-5 md:px-[64px] relative z-[20] flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="mb-[32px] md:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-heading text-[40px] text-white font-semibold">
              Built for <span className="italic font-normal">Impact.</span>
            </h2>
            <p className="font-sans text-[16px] text-on-surface-variant max-w-md leading-relaxed mt-2">
              Operating across 4 continents with a supply chain that never sleeps.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-[24px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div className="glass-panel p-6 flex items-center gap-6 rounded-[4px]">
              <Globe className="text-primary size-10 block" strokeWidth={1.5} />
              <div>
                <div className="font-heading text-[20px] md:text-[24px] text-white font-semibold">32 Countries</div>
                <div className="font-mono text-[12px] text-on-surface-variant tracking-[0.1em] font-medium uppercase mt-1">DIRECT OPERATION</div>
              </div>
            </div>
            <button className="bg-primary text-white font-mono text-[12px] font-medium tracking-[0.1em] uppercase px-12 py-5 rounded-[4px] shadow-[0_0_30px_rgba(255,84,81,0.3)] hover:brightness-110 transition-all cursor-pointer">
              View Global Map
            </button>
          </motion.div>
        </div>
      </WavyBackground>
    </section>
  );
}
