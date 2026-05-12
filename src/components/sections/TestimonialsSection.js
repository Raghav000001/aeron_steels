"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Molecular Simulation",
    description:
      "Simulating billions of alloy permutations before the first spark is struck in the real world.",
    side: "left",
  },
  {
    number: "02",
    title: "Plasma Induction",
    description:
      "Refining ores in our signature 5000\u00B0C plasma induction reactors for extreme molecular purity.",
    side: "right",
  },
  {
    number: "03",
    title: "Precision Forging",
    description:
      "Applying 500,000 tons of hydraulic pressure to shape future industrial icons.",
    side: "left",
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el.querySelector(".tracing-beam"), {
        "--beam-height": "100%",
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
        },
      });

      gsap.fromTo(
        ".process-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        }
      );

      const items = el.querySelectorAll(".timeline-item");
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.25,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
          }
        );

        gsap.fromTo(
          item,
          { y: 40 },
          {
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );

        const node = item.querySelector(".timeline-node");
        if (node) {
          gsap.fromTo(
            node,
            { scale: 0, rotate: -180 },
            {
              scale: 1,
              rotate: 0,
              duration: 0.7,
              delay: i * 0.25 + 0.2,
              ease: "back.out(2.5)",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
              },
            }
          );
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-surface-container-lowest overflow-hidden"
    >
      <div className="section-container">
        <div className="process-header flex flex-col items-center text-center mb-24">
          <span
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            className="text-[10px] text-primary tracking-[0.4em] uppercase"
          >
            Process Architecture
          </span>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mt-6 uppercase tracking-tighter leading-tight">
            From Atom to{" "}
            <span className="text-primary">Superstructure</span>
          </h2>
        </div>
      </div>

      <div className="section-container">
        <div
          className="relative tracing-beam"
          style={{ "--beam-height": "0%" }}
        >
          <style jsx>{`
            .tracing-beam::after {
              content: "";
              position: absolute;
              top: 0;
              left: 50%;
              width: 2px;
              height: var(--beam-height, 0%);
              background: linear-gradient(
                to bottom,
                transparent,
                #ef4444,
                transparent
              );
              transform: translateX(-50%);
              transition: height 1.5s cubic-bezier(0.16, 1, 0.3, 1);
            }
          `}</style>

          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className={`timeline-item flex flex-col md:flex-row justify-between items-start relative ${
                step.number !== "03" ? "mb-32" : ""
              }`}
            >
              {step.side === "left" ? (
                <div className="w-full md:w-[45%] text-right pr-12 hidden md:block">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-tighter">
                    {step.title}
                  </h3>
                  <p className="text-on-surface-variant mt-4 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ) : (
                <div className="w-full md:w-[45%]" />
              )}

              <div className="timeline-node absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-primary bg-background z-10 shadow-[0_0_20px_#ef4444] flex items-center justify-center">
                <span
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  className="text-[10px] text-primary font-bold"
                >
                  {step.number}
                </span>
              </div>

              {step.side === "right" ? (
                <div className="w-full md:w-[45%] text-left pl-12">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-tighter">
                    {step.title}
                  </h3>
                  <p className="text-on-surface-variant mt-4 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ) : (
                <div className="w-full md:w-[45%] text-left pl-12 mt-16 md:mt-0">
                  <div className="md:hidden">
                    <h3 className="text-xl font-heading font-bold text-white uppercase tracking-tighter">
                      {step.title}
                    </h3>
                    <p className="text-on-surface-variant mt-3 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

