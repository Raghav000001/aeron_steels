"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Heart } from "lucide-react";

const CERTIFICATIONS = [
  {
    icon: ShieldCheck,
    name: "ISO 9001:2015",
    tag: "QUALITY MANAGEMENT SYSTEMS",
    description:
      "Rigorous adherence to international standards for consistent delivery of high-precision steel products and customer satisfaction.",
    status: "RENEWED 2024",
  },
  {
    icon: Leaf,
    name: "ISO 14001:2015",
    tag: "ENVIRONMENTAL MANAGEMENT",
    description:
      "Evidence of our sustainable production footprint, optimizing resource efficiency and reducing waste in our global operations.",
    status: "ACTIVE COMPLIANCE",
  },
  {
    icon: Heart,
    name: "ISO 45001:2018",
    tag: "OCCUPATIONAL HEALTH & SAFETY",
    description:
      "An uncompromising commitment to the safety of our workforce, ensuring zero-harm environments across all foundry floor zones.",
    status: "GOLD STATUS",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export function CertificationsGrid() {
  return (
    <section className="section-container py-24 md:py-32">
      <motion.div
        className="max-w-3xl mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono text-[10px] md:text-[12px] text-primary tracking-[0.3em] uppercase block mb-4">
          Global Standards
        </span>
        <h2 className="font-heading text-3xl md:text-[40px] font-bold text-white uppercase tracking-tighter">
          Certifications That Define{" "}
          <span className="text-primary italic">Excellence</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={cert.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-8 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                padding: "1px",
                background:
                  "linear-gradient(135deg, #ff5451, transparent, #b91a24)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                borderRadius: "inherit",
              }}
            />

            <div className="flex justify-between items-start mb-8">
              <cert.icon className="size-10 text-primary" strokeWidth={1.5} />
              <div className="size-12 bg-primary-container/20 flex items-center justify-center rounded-full">
                <span className="font-mono text-[10px] text-primary font-bold tracking-wider">
                  ISO
                </span>
              </div>
            </div>

            <h3 className="text-xl font-heading font-bold text-white mb-2">
              {cert.name}
            </h3>
            <span className="font-mono text-[10px] text-primary/80 mb-4 block tracking-wider uppercase">
              {cert.tag}
            </span>
            <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
              {cert.description}
            </p>

            <div className="pt-6 border-t border-white/5 flex justify-between items-center">
              <span className="font-mono text-[10px] text-primary tracking-wider uppercase">
                {cert.status}
              </span>
              <span className="text-primary/50 group-hover:translate-x-1 transition-transform">
                <svg
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
