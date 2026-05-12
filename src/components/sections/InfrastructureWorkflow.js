"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function InfrastructureWorkflow() {
  const workflowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".infra-workflow-quad",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: workflowRef.current,
            start: "top 75%",
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={workflowRef}
      className="py-24 md:py-32 bg-surface-container-lowest relative overflow-hidden"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="infra-workflow-quad">
            <span className="font-mono text-[10px] text-primary border-l-2 border-primary pl-4 tracking-[0.3em] uppercase">
              Phase: Fabrication
            </span>
            <h2 className="font-heading text-3xl md:text-[40px] font-bold text-white mt-4 mb-8 uppercase tracking-tighter">
              Industrial{" "}
              <span className="text-primary italic">Choreography</span>
            </h2>

            <div className="glass-panel p-1 rounded-2xl relative group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/infra/foundry.jpg"
                  alt="A dramatic scene inside a heavy industrial foundry where molten steel is being poured into a massive casting mold. Intense furnace red glows and brilliant sparks illuminate the dark, smoky environment."
                  fill
                  className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                />
              </div>
              <div className="size-12 glass-panel flex items-center justify-center font-mono text-primary-container font-bold text-xl border border-primary-container/50 rounded-xl z-10 absolute -top-4 -left-4">
                01
              </div>
            </div>
          </div>

          <div className="infra-workflow-quad space-y-8 md:pt-16">
            <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
              From raw smelting to precision extrusion, every stage is a symphony
              of thermal power and automated control.
            </p>

            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-2xl font-heading font-bold text-primary-accent uppercase tracking-tighter">
                Thermodynamic Synthesis
              </h3>
              <p className="text-on-surface-variant mt-4 leading-relaxed">
                Ultra-high temperature processing refined by AI-monitored sensors
                to achieve atomic-level alloy consistency across every batch.
              </p>
              <div className="flex gap-4 mt-6">
                <span className="font-mono text-[10px] px-3 py-1 border border-outline-variant/30 text-outline rounded tracking-wider uppercase">
                  TEMP: 2800°F
                </span>
                <span className="font-mono text-[10px] px-3 py-1 border border-outline-variant/30 text-outline rounded tracking-wider uppercase">
                  PH: OPTIMAL
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mt-16 md:mt-32">
          <div className="infra-workflow-quad">
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-2xl font-heading font-bold text-primary-accent uppercase tracking-tighter">
                Extrusion Precision
              </h3>
              <p className="text-on-surface-variant mt-4 leading-relaxed">
                Continuous casting through precision dies creates structural
                profiles with zero internal defects and exact thickness
                tolerances.
              </p>
              <div className="flex gap-4 mt-6">
                <span className="font-mono text-[10px] px-3 py-1 border border-outline-variant/30 text-outline rounded tracking-wider uppercase">
                  TOLERANCE: &plusmn;0.01MM
                </span>
                <span className="font-mono text-[10px] px-3 py-1 border border-outline-variant/30 text-outline rounded tracking-wider uppercase">
                  AUTO-CALIBRATED
                </span>
              </div>
            </div>
          </div>

          <div className="infra-workflow-quad">
            <div className="glass-panel p-1 rounded-2xl relative group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/infra/extrusion.jpg"
                  alt="Close-up of a high-speed metal extrusion process where a glowing steel beam emerges from a machine die. Wisps of steam rise, illuminated by warm, intense furnace-red factory lighting."
                  fill
                  className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                />
              </div>
              <div className="size-12 glass-panel flex items-center justify-center font-mono text-primary-container font-bold text-xl border border-primary-container/50 rounded-xl z-10 absolute -top-4 -left-4">
                02
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
