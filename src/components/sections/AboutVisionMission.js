"use client";

import { motion } from "framer-motion";
import { Eye, Rocket } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function AboutVisionMission() {
  return (
    <section className="py-[160px] max-w-[1440px] mx-auto px-5 md:px-[64px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px]">
        {/* ─── Vision (8-col) ─── */}
        <motion.div
          className="md:col-span-8 glass-panel shadow-[0_0_15px_rgba(255,84,81,0.2),inset_0_0_1px_rgba(255,84,81,0.5)] p-8 md:p-12 relative overflow-hidden group rounded-[4px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.05) 50%, transparent 55%)",
              backgroundSize: "4px 4px",
            }}
          />
          <Eye className="size-10 text-primary mb-[32px] block" strokeWidth={1.5} />
          <h2 className="font-heading text-[40px] text-white font-semibold leading-tight mb-[16px]">Our Vision</h2>
          <p className="font-sans text-[16px] text-on-surface-variant leading-relaxed max-w-xl">
            To pioneer a world where infrastructure is as dynamic as the digital realm, built on the bedrock of carbon-neutral, precision-engineered alloy systems.
          </p>
          <div className="mt-[32px] pt-[32px] border-b border-outline/30 box-border border-b-solid inline-block pb-1" style={{ borderBottom: "1px solid rgba(171, 137, 134, 0.3)" }}>
            <span className="font-mono text-[12px] text-primary tracking-[0.1em] uppercase font-medium">
              Global Industry Standard 2030
            </span>
          </div>
        </motion.div>

        {/* ─── Stats Column (4-col) ─── */}
        <div className="md:col-span-4 flex flex-col gap-[24px]">
          <motion.div
            className="glass-panel p-8 flex-1 flex flex-col justify-center rounded-[4px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
          >
            <span className="font-heading text-[40px] text-primary font-bold leading-none">99.9%</span>
            <span className="font-mono text-[12px] text-on-surface-variant tracking-[0.1em] uppercase mt-2 font-medium">
              TOLERANCE PRECISION
            </span>
          </motion.div>
          <motion.div
            className="glass-panel p-8 flex-1 flex flex-col justify-center border-t-2 border-primary-container rounded-[4px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={2}
          >
            <span className="font-heading text-[40px] text-white font-bold leading-none" style={{ color: "#ffdad7" }}>1.2M</span>
            <span className="font-mono text-[12px] text-on-surface-variant tracking-[0.1em] uppercase mt-2 font-medium">
              TONS ANNUALLY
            </span>
          </motion.div>
        </div>

        {/* ─── Mission (4-col) ─── */}
        <motion.div
          className="md:col-span-4 glass-panel p-8 md:p-12 bg-surface-container-high border border-[rgba(92,0,8,0.3)] rounded-[4px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={3}
        >
          <Rocket className="size-10 text-primary mb-[32px] block" strokeWidth={1.5} />
          <h2 className="font-heading text-[20px] md:text-[24px] text-white font-medium mb-[16px]">The Mission</h2>
          <p className="font-sans text-[14px] text-on-surface-variant leading-relaxed">
            Elevating industrial standards through hyper-automated fabrication and a relentless commitment to net-zero metallurgical innovation.
          </p>
        </motion.div>

        {/* ─── Core Image (8-col) ─── */}
        <motion.div
          className="md:col-span-8 h-80 relative overflow-hidden rounded-[4px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={4}
        >
          <img
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            alt="A high-tech control center inside a modern steel facility."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPTPZ5wvbVp7iiW56YTmBhbS0DqE21Fq-oGlzSrhkRo9sJSMJqGi_VddPr-8Jota1L-DmOZIzkITWSFI1wWKSm0azdsBD4mYvR5GvkC3iJ92YmThB3_e3qv7PKcGbvUPfZteEZiy0lk0EfOgebzOUU-tAXWJxb0ewS9eFeK6pn5xdVA5TZeI1D768mz6ICvsojfhQbfI0g-tDYn07S8BAY9wbdWgdwOsF3OEFX8VrcgehnAJcndbgMwna5FtuqhN_PCKstK1nwTJn3"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </motion.div>
      </div>
    </section>
  );
}
