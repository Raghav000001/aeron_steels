"use client";

import { useRef, useEffect, useState } from "react";
import { Target, Award, HeadphonesIcon, Handshake } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const VALUES = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every steel strip is manufactured to exact specifications, ensuring zero deviation from required tolerances and standards.",
  },
  {
    icon: Award,
    title: "Reputation",
    description:
      "Over four decades of consistent quality and reliability have built our standing as an industry benchmark.",
  },
  {
    icon: HeadphonesIcon,
    title: "Service",
    description:
      "Dedicated support from inquiry to delivery, with responsive communication and on-time fulfillment.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We build long-term relationships by understanding your requirements and delivering beyond expectations.",
  },
];

export function ValuesSection() {
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

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

    gsap.fromTo(
      ".values-subtitle",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%" },
      }
    );

    const cards = el.querySelectorAll(".value-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, rotateX: -10 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 70%" },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="values-title text-3xl md:text-[35px] font-heading font-bold text-heading leading-tight">
            We don&apos;t deliver steel, we deliver{" "}
            <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
              specifications
            </span>
          </h2>
          <p className="values-subtitle mt-4 text-body leading-relaxed">
            Precision, consistency, and trust define everything we do. Here&apos;s what sets Aeron
            Steels apart from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value, i) => (
            <div
              key={value.title}
              className="value-card group bg-white rounded-2xl p-8 shadow-sm hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] transition-shadow"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-start gap-5">
                <div
                  className={`value-icon shrink-0 flex items-center justify-center size-12 rounded-xl transition-all duration-300 ${
                    hoveredIndex === i
                      ? "bg-primary text-white scale-110 rotate-3"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <value.icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-heading mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
