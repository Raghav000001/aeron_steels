"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { Send, Loader2, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        const msg = data.errors ? data.errors.join(", ") : data.message;
        toast.error(msg);
        return;
      }

      toast.success(data.message);
      setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
      setSubmitted(true);
    } catch (err) {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Ambient Background Visuals */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-error-container/5 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] left-[50%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

        {/* Futuristic scanning beams */}
        <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-primary-container/20 to-transparent animate-[beam-scan_8s_ease-in-out_infinite] opacity-30" />
        <div className="absolute top-0 left-[40%] w-px h-full bg-gradient-to-b from-transparent via-primary-container/10 to-transparent animate-[beam-scan_10s_ease-in-out_infinite_2s] opacity-20" />
        <div className="absolute top-0 left-[75%] w-px h-full bg-gradient-to-b from-transparent via-primary-container/15 to-transparent animate-[beam-scan_9s_ease-in-out_infinite_4s] opacity-25" />
        <div className="absolute top-0 left-[90%] w-px h-full bg-gradient-to-b from-transparent via-primary-container/8 to-transparent animate-[beam-scan_11s_ease-in-out_infinite_1s] opacity-15" />

        {/* Floating particles */}
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-primary-container/50 rounded-full animate-[particle-float_15s_linear_infinite]" />
        <div className="absolute top-[40%] left-[60%] w-[2px] h-[2px] bg-primary-container/40 rounded-full animate-[particle-float_18s_linear_infinite_1s]" />
        <div className="absolute top-[70%] left-[30%] w-1 h-1 bg-primary-container/30 rounded-full animate-[particle-float_20s_linear_infinite_3s]" />
        <div className="absolute top-[10%] left-[85%] w-[1px] h-[1px] bg-primary-container/40 rounded-full animate-[particle-float_16s_linear_infinite_5s]" />
        <div className="absolute top-[60%] left-[70%] w-[2px] h-[2px] bg-primary-container/30 rounded-full animate-[particle-float_22s_linear_infinite_2s]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-8 md:pb-12">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <span className="tech-label text-primary-container tracking-[0.4em] text-[11px]">
              Phase 04: Global Connection
            </span>
            <h1 className="font-heading text-[10vw] md:text-[72px] text-white font-bold leading-[0.9] max-w-4xl uppercase tracking-tighter">
              Establish{" "}
              <span className="text-primary italic">Link</span>
              <span className="text-primary-container">.</span>
            </h1>
            <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mt-3 leading-relaxed">
              Connect with our command center for precision-engineered solutions. Our team of
              metallurgical experts and logistics coordinators are ready to accelerate your
              industrial vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="relative z-10 pb-16 md:pb-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* ====== Form Panel ====== */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-7 glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden group"
            >
              {/* Brushed Metal Texture */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.08) 50%, transparent 55%)",
                  backgroundSize: "4px 4px",
                }}
              />
              {/* Tactical Dot Grid */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundSize: "40px 40px",
                  backgroundImage: "radial-gradient(circle, rgba(239,68,68,0.15) 1px, transparent 1px)",
                }}
              />
              {/* Grain Texture */}
              <div className="grain-overlay absolute inset-0" />

              {/* Corner L-Frames */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-container/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-container/30 rounded-br-2xl" />

              <div className="relative z-10">
                {/* Form Header */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="size-2 rounded-full bg-primary-container animate-pulse" />
                  <h2 className="font-heading text-2xl text-primary">Transmission Protocol</h2>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center min-h-[400px] text-center"
                  >
                    <div className="size-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                      <CheckCircle2 className="size-10" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">Signal Received</h3>
                    <p className="text-on-surface-variant max-w-md leading-relaxed">
                      Your transmission has been decrypted. Our command center will respond within
                      24 standard hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" }); }}
                      className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-red-600 text-white font-mono text-xs rounded-lg transition-all active:scale-95 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] tracking-wider uppercase"
                    >
                      Transmit Again
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot */}
                    <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
                      <label htmlFor="website">Website</label>
                      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value="" readOnly />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="tech-label text-[11px] text-on-surface-variant tracking-[0.15em]">IDENTIFIER</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-[rgba(19,19,19,0.6)] border border-primary/20 text-white text-sm placeholder:text-on-surface-variant/30 focus:border-primary-container focus:shadow-[0_0_20px_rgba(255,84,81,0.15),inset_0_0_8px_rgba(255,84,81,0.1)] focus:outline-none transition-all duration-[400ms] font-mono text-xs tracking-wider"
                          placeholder="Full Name"
                        />
                      </div>
                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="tech-label text-[11px] text-on-surface-variant tracking-[0.15em]">COMMS CHANNEL</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-[rgba(19,19,19,0.6)] border border-primary/20 text-white text-sm placeholder:text-on-surface-variant/30 focus:border-primary-container focus:shadow-[0_0_20px_rgba(255,84,81,0.15),inset_0_0_8px_rgba(255,84,81,0.1)] focus:outline-none transition-all duration-[400ms] font-mono text-xs tracking-wider"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="tech-label text-[11px] text-on-surface-variant tracking-[0.15em]">SECURE LINE</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-[rgba(19,19,19,0.6)] border border-primary/20 text-white text-sm placeholder:text-on-surface-variant/30 focus:border-primary-container focus:shadow-[0_0_20px_rgba(255,84,81,0.15),inset_0_0_8px_rgba(255,84,81,0.1)] focus:outline-none transition-all duration-[400ms] font-mono text-xs tracking-wider"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      {/* Company */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="company" className="tech-label text-[11px] text-on-surface-variant tracking-[0.15em]">AFFILIATION</label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-[rgba(19,19,19,0.6)] border border-primary/20 text-white text-sm placeholder:text-on-surface-variant/30 focus:border-primary-container focus:shadow-[0_0_20px_rgba(255,84,81,0.15),inset_0_0_8px_rgba(255,84,81,0.1)] focus:outline-none transition-all duration-[400ms] font-mono text-xs tracking-wider"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="subject" className="tech-label text-[11px] text-on-surface-variant tracking-[0.15em]">OBJECTIVE</label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-[rgba(19,19,19,0.6)] border border-primary/20 text-white text-sm placeholder:text-on-surface-variant/30 focus:border-primary-container focus:shadow-[0_0_20px_rgba(255,84,81,0.15),inset_0_0_8px_rgba(255,84,81,0.1)] focus:outline-none transition-all duration-[400ms] font-mono text-xs tracking-wider"
                        placeholder="Procurement Request / Technical Consultation"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="tech-label text-[11px] text-on-surface-variant tracking-[0.15em]">DATA PAYLOAD</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-[rgba(19,19,19,0.6)] border border-primary/20 text-white text-sm placeholder:text-on-surface-variant/30 focus:border-primary-container focus:shadow-[0_0_20px_rgba(255,84,81,0.15),inset_0_0_8px_rgba(255,84,81,0.1)] focus:outline-none transition-all duration-[400ms] font-mono text-xs tracking-wider resize-y"
                        placeholder="Brief your requirements..."
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                      <div className="flex items-center gap-3">
                        <span className="size-2 rounded-full bg-primary-container animate-pulse" />
                        <span className="tech-label text-[9px] text-on-surface-variant/50">
                          ENCRYPTION ACTIVE: AES-256
                        </span>
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="group relative inline-flex items-center gap-2 px-10 py-3.5 bg-primary text-white font-mono text-xs rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] active:scale-95 disabled:opacity-60 tracking-wider uppercase"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {loading ? (
                            <>
                              <Loader2 className="size-4 animate-spin" />
                              Transmitting...
                            </>
                          ) : (
                            <>
                              Initiate Send
                              <Send className="size-3.5" />
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-primary-container translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

            {/* ====== Info Sidebar ====== */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Command Center Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="glass-panel rounded-2xl p-8 relative overflow-hidden"
                style={{ boxShadow: "0 0 30px rgba(239,68,68,0.08), inset 0 0 15px rgba(239,68,68,0.03)" }}
              >
                <div className="grain-overlay absolute inset-0" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="tech-label text-[11px] text-primary-container tracking-[0.15em]">Command Center</span>
                      <h3 className="font-heading text-[28px] md:text-[32px] text-primary font-semibold mt-2 leading-tight">
                        Dubai HQ
                      </h3>
                    </div>
                    <div className="size-12 rounded-xl glass-panel flex items-center justify-center shrink-0">
                      <MapPin className="size-5 text-primary-container" />
                    </div>
                  </div>

                  <address className="not-italic text-on-surface-variant text-sm leading-relaxed mb-6">
                    Executive Heights, Floor 42
                    <br />
                    Business Bay, DXB 90210
                    <br />
                    United Arab Emirates
                  </address>

                  <div className="border-t border-white/5 pt-6 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <span className="tech-label text-[9px] text-outline tracking-[0.2em]">Voice</span>
                      <a href="tel:+919818223471" className="tech-label text-[12px] text-primary hover:text-primary-container transition-colors">
                        +971 4 555 0199
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="tech-label text-[9px] text-outline tracking-[0.2em]">Secure</span>
                      <a href="mailto:sales@aeronsteels.com" className="tech-label text-[12px] text-primary hover:text-primary-container transition-colors">
                        ops@aeronsteels.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Holographic Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="glass-panel rounded-2xl p-6 flex flex-col gap-2 relative overflow-hidden group hover:border-primary/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="tech-label text-[9px] text-outline tracking-[0.2em]">Uptime</span>
                  <span className="font-heading text-[28px] md:text-[32px] text-primary-container font-bold">99.9%</span>
                </div>
                <div className="glass-panel rounded-2xl p-6 flex flex-col gap-2 relative overflow-hidden group hover:border-primary/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="tech-label text-[9px] text-outline tracking-[0.2em]">Nodes</span>
                  <span className="font-heading text-[28px] md:text-[32px] text-primary-container font-bold">14 GLBL</span>
                </div>
              </motion.div>

              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="glass-panel rounded-2xl p-6"
              >
                <div className="space-y-4">
                  <a href="tel:+919818223471" className="flex items-center gap-3 group">
                    <div className="size-10 rounded-lg glass-panel flex items-center justify-center group-hover:border-primary/30 transition-all">
                      <Phone className="size-4 text-primary-container" />
                    </div>
                    <div>
                      <span className="tech-label text-[9px] text-outline">Direct Line</span>
                      <p className="text-sm text-white font-mono text-xs tracking-wider mt-0.5">+971 4 555 0199</p>
                    </div>
                  </a>
                  <a href="mailto:sales@aeronsteels.com" className="flex items-center gap-3 group">
                    <div className="size-10 rounded-lg glass-panel flex items-center justify-center group-hover:border-primary/30 transition-all">
                      <Mail className="size-4 text-primary-container" />
                    </div>
                    <div>
                      <span className="tech-label text-[9px] text-outline">Email</span>
                      <p className="text-sm text-white font-mono text-xs tracking-wider mt-0.5">ops@aeronsteels.com</p>
                    </div>
                  </a>
                </div>

                {/* Social / Follow */}
                <div className="mt-6 pt-5 border-t border-white/5">
                  <span className="tech-label text-[9px] text-on-surface-variant/40 tracking-[0.2em]">Network</span>
                  <div className="flex items-center gap-3 mt-3">
                    <a
                      href="https://www.linkedin.com/company/aeronsteels"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center size-9 rounded-lg border border-white/5 text-on-surface-variant hover:bg-primary hover:border-primary hover:text-white transition-all"
                      aria-label="LinkedIn"
                    >
                      <svg className="size-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Operations Map Section */}
      <section className="relative z-10 pb-20 md:pb-32">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 mb-8"
          >
            <span className="tech-label text-primary-container tracking-[0.3em] text-[11px]">
              Geospatial Network
            </span>
            <h2 className="font-heading text-3xl md:text-[40px] text-primary font-semibold leading-tight uppercase tracking-tighter">
              Global{" "}
              <span className="text-white">Operations</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[21/9] overflow-hidden rounded-2xl glass-panel"
          >
            {/* Tactical grid over map */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none z-[1]"
              style={{
                backgroundSize: "40px 40px",
                backgroundImage: "radial-gradient(circle, rgba(239,68,68,0.15) 1px, transparent 1px)",
              }}
            />
            <div className="grain-overlay absolute inset-0 z-[1]" />

            {/* Background image */}
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat opacity-25 grayscale transition-all duration-1000 group-hover:scale-105"
              style={{
                backgroundImage: "url('/images/hero_banner.avif')",
                filter: "grayscale(1) contrast(1.2)",
              }}
            />

            {/* Scanning overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-primary-container/8 to-transparent -translate-x-full animate-[scan_6s_linear_infinite]" />
              <div className="absolute top-0 left-0 w-full h-[1px] bg-primary-container/15 animate-[scan-y_10s_linear_infinite]" />
            </div>

            {/* Tactical Nodes */}
            <div className="absolute top-[20%] left-[15%] z-[3] group/node">
              <div className="size-4 rounded-full bg-primary-container shadow-[0_0_20px_rgba(255,84,81,0.8)] animate-pulse cursor-pointer" />
              <div className="absolute top-8 left-1/2 -translate-x-1/2 glass-panel rounded-xl p-3.5 w-44 opacity-0 group-hover/node:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="tech-label text-[9px] text-primary-container">North America</span>
                <p className="tech-label text-[11px] text-primary mt-0.5">Chicago Logistics Hub</p>
                <div className="my-2 h-px bg-white/5" />
                <span className="tech-label text-[8px] text-on-surface-variant/60">Status: OPTIMAL</span>
              </div>
            </div>
            <div className="absolute top-[45%] left-[48%] z-[3] group/node">
              <div className="size-4 rounded-full bg-primary-container shadow-[0_0_20px_rgba(255,84,81,0.8)] animate-pulse cursor-pointer" style={{ animationDelay: "0.75s" }} />
              <div className="absolute top-8 left-1/2 -translate-x-1/2 glass-panel rounded-xl p-3.5 w-44 opacity-0 group-hover/node:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="tech-label text-[9px] text-primary-container">Europe</span>
                <p className="tech-label text-[11px] text-primary mt-0.5">Berlin R&amp;D Facility</p>
                <div className="my-2 h-px bg-white/5" />
                <span className="tech-label text-[8px] text-on-surface-variant/60">Status: SECURE</span>
              </div>
            </div>
            <div className="absolute bottom-[30%] right-[20%] z-[3] group/node">
              <div className="size-4 rounded-full bg-primary-container shadow-[0_0_20px_rgba(255,84,81,0.8)] animate-pulse cursor-pointer" style={{ animationDelay: "1.5s" }} />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass-panel rounded-xl p-3.5 w-44 opacity-0 group-hover/node:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="tech-label text-[9px] text-primary-container">Asia Pacific</span>
                <p className="tech-label text-[11px] text-primary mt-0.5">Singapore Distribution</p>
                <div className="my-2 h-px bg-white/5" />
                <span className="tech-label text-[8px] text-on-surface-variant/60">Status: HIGH LOAD</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
