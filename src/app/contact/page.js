"use client";

import { useState } from "react";
import { toast } from "sonner";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";

const CONTACT_INFO = [
  { icon: MapPin, label: "Office Address", value: "Aeron Steels, New Delhi, India", href: null },
  { icon: Phone, label: "Phone", value: "+91 98182 23471", href: "tel:+919818223471" },
  { icon: Mail, label: "Email", value: "sales@aeronsteels.com", href: "mailto:sales@aeronsteels.com" },
  { icon: Clock, label: "Business Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM", href: null },
];

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
      <PageHero
        title="Contact Us"
        subtitle="Have a question or need a quote? Reach out to our team and we'll get back to you within 24 hours."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="animate-on-scroll text-sm font-semibold uppercase tracking-widest text-primary">Get In Touch</span>
            <h2 className="animate-on-scroll text-3xl md:text-[35px] font-heading font-bold text-heading mt-3 leading-tight">
              Let&apos;s Discuss Your{" "}
              <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
                Requirements
              </span>
            </h2>
            <p className="animate-on-scroll text-body mt-4 leading-relaxed">
              Whether you need a quote, technical specifications, or have a custom requirement, our team is ready to help.
            </p>

            <div className="space-y-6 mt-10">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="animate-on-scroll flex items-start gap-4">
                  <div className="shrink-0 size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-heading">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-body hover:text-primary transition-colors mt-0.5 block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-body mt-0.5">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-sm font-semibold text-heading mb-4">Follow Us</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/aeronsteels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center size-10 rounded-full border border-border text-body hover:bg-primary hover:border-primary hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="animate-on-scroll flex flex-col items-center justify-center h-full min-h-[400px] rounded-2xl bg-gradient-to-br from-primary/5 to-primary-accent/5 border border-border/40 p-10 text-center">
                <div className="size-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <CheckCircle2 className="size-10" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-heading mb-2">Thank You!</h3>
                <p className="text-body max-w-md">
                  Your message has been received. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" }); }}
                  className="mt-8 inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primary to-primary-accent text-white font-semibold text-sm rounded-full hover:opacity-90 transition-opacity"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="animate-on-scroll rounded-2xl bg-muted/30 border border-border/40 p-8 md:p-10">
                {/* Honeypot — visually hidden, bots see it */}
                <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value="" readOnly />
                </div>

                <h3 className="text-xl font-heading font-bold text-heading mb-6">Send Us a Message</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-heading mb-1.5">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-sm text-heading placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-heading mb-1.5">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-sm text-heading placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-heading mb-1.5">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-sm text-heading placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-heading mb-1.5">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-sm text-heading placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-heading mb-1.5">Subject *</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-sm text-heading placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-heading mb-1.5">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-sm text-heading placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-y"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-primary-accent text-white font-semibold text-sm rounded-full hover:opacity-90 transition-all disabled:opacity-60 hover:scale-105 active:scale-95"
                >
                  {loading ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="size-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
