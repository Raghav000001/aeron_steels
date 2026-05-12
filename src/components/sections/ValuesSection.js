"use client";

import { useRef, useEffect } from "react";
import { Target, Award, HeadphonesIcon, Handshake, Shield, Truck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const VALUES = [
  {
    icon: Target,
    title: "Precision Metallurgy",
    description:
      "Every steel strip is manufactured to exact specifications with AI-driven quality control, ensuring zero deviation from required tolerances.",
    tags: ["AI-Driven", "Zero Variance"],
    span: "md:col-span-4",
    type: "large",
  },
  {
    icon: Award,
    title: "ISO 9001 Certified",
    description:
      "Over four decades of consistent quality and reliability across global markets.",
    span: "md:col-span-2",
    type: "center",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Rigorous multi-stage inspection protocols ensuring international standards compliance.",
    span: "md:col-span-2",
    type: "default",
  },
  {
    icon: Truck,
    title: "Global Distribution",
    description:
      "Seamless logistics network delivering to 15+ countries with real-time shipment tracking.",
    span: "md:col-span-4",
    type: "image",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "Responsive communication from inquiry to delivery with dedicated account management.",
    span: "md:col-span-3",
    type: "default",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "Building lasting relationships by understanding your requirements and delivering beyond expectations.",
    span: "md:col-span-3",
    type: "default",
  },
];

export function ValuesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const glow = el.querySelector(".values-glow");

      gsap.fromTo(
        ".values-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 75%" },
        }
      );

      const cards = el.querySelectorAll(".value-card");
      const icons = el.querySelectorAll(".value-card svg");

      cards.forEach((card, i) => {
        const isLeft = card.classList.contains("md:col-span-4") && i < 3;
        const isRight = card.classList.contains("md:col-span-2") || (card.classList.contains("md:col-span-3") && i >= 4);
        const fromX = isLeft ? -80 : isRight ? 80 : 0;
        const fromY = !isLeft && !isRight ? 50 : 0;

        gsap.fromTo(
          card,
          { opacity: 0, x: fromX, y: fromY, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 70%" },
          }
        );
      });

      if (icons.length) {
        gsap.fromTo(
          icons,
          { rotate: -15, scale: 0 },
          {
            rotate: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: { trigger: el, start: "top 65%" },
          }
        );
      }

      if (glow) {
        gsap.fromTo(
          glow,
          { scale: 0.3, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-background overflow-hidden">
      {/* Ambient glow */}
      <div className="values-glow absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            className="text-[10px] text-primary tracking-[0.4em] uppercase"
          >
            Why Choose Us
          </span>
          <h2 className="values-title text-4xl md:text-[44px] font-heading font-bold text-white uppercase tracking-tighter mt-4 leading-tight">
            Precision Meets{" "}
            <span className="text-primary italic">Performance</span>
          </h2>
          <p className="mt-4 text-on-surface-variant text-base leading-relaxed">
            Four decades of metallurgical excellence powering global infrastructure.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-auto md:auto-rows-[280px]">
          {VALUES.map((value, i) => {
            if (value.type === "large") {
              return (
                <div
                  key={value.title}
                  className={`value-card ${value.span} p-6 md:p-10 rounded-3xl glass-panel relative overflow-hidden group`}
                >
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all" />
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <div>
                      <value.icon className="size-10 text-primary mb-6" />
                      <h3 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-tighter">
                        {value.title}
                      </h3>
                      <p className="text-on-surface-variant mt-4 max-w-lg leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                    <div className="flex gap-3 mt-6">
                      {value.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-primary tracking-wider uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            if (value.type === "center") {
              return (
                <div
                  key={value.title}
                  className={`value-card ${value.span} p-6 md:p-10 rounded-3xl glass-panel flex flex-col items-center justify-center text-center group hover:bg-primary/5 transition-all`}
                >
                  <value.icon className="size-12 text-primary mb-6" />
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-tighter">
                    {value.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mt-4 max-w-xs leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            }

            if (value.type === "image") {
              return (
                <div
                  key={value.title}
                  className={`value-card ${value.span} rounded-3xl overflow-hidden relative group`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center grayscale group-hover:scale-110 transition-transform duration-[2s]"
                    style={{
                      backgroundImage: "url('/images/hero_banner.avif')",
                      opacity: 0.3,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
                  <div className="relative z-10 p-6 md:p-10 h-full flex flex-col justify-end">
                    <value.icon className="size-10 text-primary mb-4" />
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-tighter">
                      {value.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm mt-4 max-w-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={value.title}
                className={`value-card ${value.span} p-6 md:p-10 rounded-3xl glass-panel relative overflow-hidden group`}
              >
                <div className="relative z-10">
                  <value.icon className="size-10 text-primary mb-6" />
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-tighter">
                    {value.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mt-4 leading-relaxed">
                    {value.description}
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
