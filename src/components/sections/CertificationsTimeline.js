"use client";

import { motion } from "framer-motion";

const MILESTONES = [
  {
    year: "2008",
    title: "Initial ISO Accreditation",
    description:
      "Establishment of the primary Quality Control lab and achievement of the first ISO 9001 certification.",
  },
  {
    year: "2014",
    title: "AS9100 Aerospace Standard",
    description:
      "Achieved the stringent aerospace quality standard, allowing entry into high-tech orbital components manufacturing.",
  },
  {
    year: "2021",
    title: "Carbon Neutral Certification",
    description:
      "Successfully audited and certified as a Carbon Neutral production facility for all stainless steel product lines.",
  },
];

const milestoneVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.25,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const milestoneVariantsReverse = {
  hidden: { opacity: 0, x: 40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.25,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export function CertificationsTimeline() {
  return (
    <section className="bg-surface-container-lowest py-24 md:py-32 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[10px] md:text-[12px] text-primary tracking-[0.3em] uppercase block mb-3">
            Our Legacy
          </span>
          <h2 className="font-heading text-3xl md:text-[40px] font-bold text-white uppercase tracking-tighter">
            Decades of{" "}
            <span className="text-primary italic">Precision.</span>
          </h2>
        </motion.div>

        <div className="relative mt-12 max-w-4xl mx-auto">
          <motion.div
            className="absolute top-0 bottom-0 left-1/2 w-px bg-primary/20 hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-16 relative">
            {MILESTONES.map((m, i) => {
              const variants =
                i % 2 === 0 ? milestoneVariants : milestoneVariantsReverse;
              return (
                <div
                  key={m.year}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    i % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <motion.div
                    className={`md:w-1/2 ${
                      i % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                    custom={i}
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                  >
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                      {m.year}
                    </h3>
                    <p className="text-base md:text-lg font-heading font-semibold text-white mt-1">
                      {m.title}
                    </p>
                    <p className="text-sm text-on-surface-variant mt-2 leading-relaxed max-w-sm">
                      {m.description}
                    </p>
                  </motion.div>

                  <motion.div
                    className="hidden md:block w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(239,68,68,0.6)] z-10 shrink-0"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.25,
                      ease: "backOut",
                    }}
                  />
                  <div className="md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
