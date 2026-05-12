"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Cpu } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function InfrastructureBento() {
  const bentoGridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".infra-bento-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bentoGridRef.current,
            start: "top 80%",
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="section-container">
        <div ref={bentoGridRef} className="grid grid-cols-12 gap-6">
          <div className="infra-bento-item col-span-12 md:col-span-8 glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden group">
            <div
              className="absolute top-0 left-0 w-full h-[2px] opacity-60 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(239,68,68,0.4), transparent)",
                animation: "scan 4s linear infinite",
              }}
            />
            <div className="relative z-10">
              <span className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase">
                Infrastructure Real-Time Telemetry
              </span>
              <h2 className="font-heading text-3xl md:text-[40px] font-bold text-white mt-4 mb-6 leading-tight uppercase tracking-tighter">
                Molten Flow <br />
                <span className="text-primary italic">Architecture</span>
              </h2>
              <p className="text-on-surface-variant max-w-lg leading-relaxed">
                Our facilities leverage a thermal-link production management
                system, ensuring that every micron of steel meets aerospace-grade
                tolerances through real-time heat telemetry.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-0 md:opacity-10 group-hover:opacity-25 transition-opacity duration-500">
              <Image
                src="/images/infra/machinery-detail.jpg"
                alt="Macro photography of high-precision industrial gears and chrome-plated pistons in motion inside a high-tech factory."
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="infra-bento-item col-span-12 md:col-span-4 glass-panel p-8 rounded-2xl flex flex-col justify-between neon-border">
            <div className="flex justify-between items-start">
              <Cpu className="size-8 text-primary" />
              <span className="font-mono text-[10px] text-outline tracking-wider uppercase">
                Status: Active
              </span>
            </div>
            <div className="mt-8">
              <div className="font-heading text-[56px] md:text-[72px] font-bold text-white leading-none">
                99.9
                <span className="text-primary text-3xl md:text-4xl">%</span>
              </div>
              <p className="font-mono text-[10px] text-on-surface-variant mt-2 tracking-wider uppercase">
                Precision Accuracy Rating
              </p>
            </div>
            <div className="w-full bg-white/5 h-1 mt-8 rounded-full overflow-hidden">
              <div
                className="bg-primary h-full w-[99.9%] rounded-full"
                style={{ boxShadow: "0 0 10px rgba(239,68,68,0.5)" }}
              />
            </div>
          </div>

          <div className="infra-bento-item col-span-12 md:col-span-4 glass-panel p-8 rounded-2xl bg-surface-container-highest relative group">
            <div className="absolute top-4 right-4 flex gap-1.5">
              <div className="size-2 rounded-full bg-primary-container animate-pulse" />
              <div className="size-2 rounded-full bg-primary-container/30" />
            </div>
            <span className="font-mono text-[10px] text-outline tracking-wider uppercase">
              Thermal Efficiency
            </span>
            <div className="mt-12">
              <h3 className="font-heading text-3xl md:text-[40px] font-bold text-primary-accent leading-none">
                -40%
              </h3>
              <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">
                Carbon intensity reduction via hydrogen-thermal integration and
                heat recovery systems.
              </p>
            </div>
          </div>

          <div
            className="infra-bento-item col-span-12 md:col-span-8 glass-panel p-8 rounded-2xl flex items-center justify-between overflow-hidden relative"
            style={{
              backgroundImage:
                "linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.02) 50%, transparent 55%)",
              backgroundSize: "10px 10px",
            }}
          >
            <div className="max-w-md relative z-10">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-tighter mb-2">
                Global Distribution Grid
              </h3>
              <p className="text-sm text-on-surface-variant">
                Seamless logistics orchestration from furnace to site across 15+
                countries.
              </p>
              <Link
                href="/our-presence"
                className="mt-6 inline-flex items-center gap-2 text-primary font-mono text-xs tracking-wider uppercase group/link"
              >
                View Network Map
                <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
            <div className="hidden lg:block w-48 h-48 opacity-20">
              <Globe className="size-full text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
