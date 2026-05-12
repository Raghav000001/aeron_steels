"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { value: "42+", label: "Years of Experience", num: 42, suffix: "+" },
  { value: "500+", label: "Global Clients", num: 500, suffix: "+" },
  { value: "95%", label: "Repeat Customers", num: 95, suffix: "%" },
  { value: "10K+", label: "MT Supplied Yearly", num: 10000, suffix: "+" },
];

function Counter({ stat, visible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const duration = 2000;
    const steps = 60;
    const increment = stat.num / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.num) {
        setCount(stat.num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [visible, stat.num]);

  return (
    <span className="stat-number font-heading text-5xl text-white mt-4 font-bold">
      {count.toLocaleString()}{stat.suffix}
    </span>
  );
}

export function StatsSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const cards = el.querySelectorAll(".stat-card");
      const glow = el.querySelector(".stats-glow");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.85 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            onEnter: () => setVisible(true),
          },
        }
      );

      if (glow) {
        gsap.fromTo(
          glow,
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      }

      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-background">
      {/* Red glow behind */}
      <div className="stats-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-card glass-panel p-8 rounded-2xl hover:border-primary/30 transition-all group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                className="text-[10px] text-on-surface-variant group-hover:text-primary transition-colors tracking-[0.2em] uppercase"
              >
                {stat.label === "42+" ? "Heritage" :
                 stat.label === "500+" ? "Reach" :
                 stat.label === "95%" ? "Trust" :
                 "Output"}
              </span>
              <Counter stat={stat} visible={visible} />
              <p className="stat-label font-mono text-[11px] text-outline mt-2 tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
