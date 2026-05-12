"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  FileText,
  ShieldCheck,
  Award,
  ScrollText,
} from "lucide-react";

const QA_ITEMS = [
  {
    title: "Spectrographic Chemical Analysis",
    desc: "Real-time verification of elemental composition in every furnace batch.",
  },
  {
    title: "Non-Destructive Testing (NDT)",
    desc: "Ultrasonic and radiographic scanning to ensure internal structural integrity.",
  },
  {
    title: "Microstructure Evaluation",
    desc: "High-magnification microscopy to verify grain boundary perfection.",
  },
];

const DOCUMENTS = [
  { icon: FileText, name: "2024 Audit Report", format: "PDF / 2.4 MB" },
  { icon: ShieldCheck, name: "ISO Verification", format: "PDF / 1.1 MB" },
  { icon: Award, name: "Compliance Log", format: "PDF / 5.2 MB" },
  { icon: ScrollText, name: "Material Safety Data", format: "PDF / 0.8 MB" },
];

export default function CertificationsRemaining() {
  return (
    <>
      {/* Quality Assurance */}
      <section className="section-container py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative z-10 aspect-[4/3] rounded-xl overflow-hidden border border-white/5">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="A macro close-up of a high-tech robotic arm precisely inspecting a mirror-finished steel component in a dark, futuristic laboratory. The scene is illuminated by glowing blue laser scanners and a subtle furnace-orange backlighting."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-3sLJ-GRBptzpuO_n7sGdmYoJJaXduaxT-jaDJSfzP7pSxTslWL9oAm-0Fn5NABLfp9SjtoDIrkjzOpL9Kdq_IupUwTeqsVhJXyf05p19EVp8EAAp1zsmDgN-kvB5U3ZgiEkCqp5sOsMsZY8VbSzeSlA2tQv6ISugK5qD_E4xy1ZMnIzOV6cnFqgCplQAEf5b9ex4NCFL1Cve6agggLhKQRluD2BGjhk4pm7NIGaW9BiwZgfSHjbn8ahp5Pe7iwUPu2-V3dJVTttZ"
              />
            </div>
            <div className="absolute top-4 left-4 z-20">
              <div className="bg-surface/80 backdrop-blur-md px-4 py-2 border border-primary/20">
                <span className="font-mono text-[10px] text-primary tracking-wider uppercase">
                  Live Audit Status: Compliant
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="font-mono text-[10px] md:text-[12px] text-primary tracking-[0.3em] uppercase block mb-4">
              Quality Assurance
            </span>
            <h2 className="font-heading text-3xl md:text-[40px] font-bold text-white uppercase tracking-tighter mb-8">
              Zero-Tolerance{" "}
              <span className="text-primary italic">Precision</span> Inspection.
            </h2>
            <ul className="space-y-6">
              {QA_ITEMS.map((item, i) => (
                <motion.li
                  key={item.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.15,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                >
                  <CheckCircle2 className="size-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base font-heading font-bold text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-on-surface-variant mt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Document Downloads */}
      <section className="section-container py-24 md:py-32 border-t border-white/5">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="font-mono text-[10px] md:text-[12px] text-primary tracking-[0.3em] uppercase block mb-2">
              Documentation
            </span>
            <h2 className="font-heading text-3xl md:text-[40px] font-bold text-white uppercase tracking-tighter">
              Technical{" "}
              <span className="text-primary italic">Documents</span>
            </h2>
            <p className="text-on-surface-variant text-sm mt-2">
              Download certified laboratory reports and compliance certificates.
            </p>
          </div>
          <button className="font-mono text-[10px] text-primary hover:underline transition-all tracking-wider uppercase">
            View All Documents
          </button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {DOCUMENTS.map((doc, i) => (
            <motion.div
              key={doc.name}
              custom={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-6 text-center group cursor-pointer hover:bg-primary/5 transition-all duration-300"
            >
              <doc.icon className="size-10 text-on-surface-variant group-hover:text-primary transition-colors mx-auto mb-3" />
              <p className="font-mono text-[10px] text-on-surface-variant/50 tracking-wider uppercase">
                {doc.format}
              </p>
              <p className="text-sm font-bold text-white mt-2">{doc.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-container py-24 md:py-32">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h2 className="font-heading text-3xl md:text-[40px] font-bold text-white leading-tight uppercase tracking-tighter">
            Need Certified Steel for Your{" "}
            <span className="text-primary italic">Application</span>?
          </h2>
          <p className="text-on-surface-variant mt-4 mb-8">
            Contact us with your specifications and our team will provide
            certified products with complete quality documentation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-primary hover:bg-red-600 text-white font-mono text-xs rounded-lg transition-all active:scale-95 shadow-[0_0_20px_rgba(239,68,68,0.3)] tracking-wider uppercase"
          >
            Request Certified Quote
          </a>
        </motion.div>
      </section>
    </>
  );
}
