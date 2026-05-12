"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ShieldCheck, ChevronDown } from "lucide-react";
import gsap from "gsap";

export function InfrastructureHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(
        ".infra-hero-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      )
        .fromTo(
          ".infra-hero-title",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(
          ".infra-hero-desc",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        )
        .fromTo(
          ".infra-hero-stats > *",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
          "-=0.3",
        );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/infra/hero-bg.jpg"
          alt="A cinematic, low-angle shot of a massive futuristic steel manufacturing facility with towering automated robotic arms. The atmosphere is filled with a deep amber and crimson furnace glow with sparks flying."
          fill
          className="object-cover grayscale brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      <div className="absolute inset-0 grid-overlay opacity-10 z-[1]" />

      <div className="relative z-10 section-container text-center">
        <div className="infra-hero-badge inline-flex items-center gap-2 mb-6 px-3 py-1 glass-panel neon-border rounded-full">
          <ShieldCheck className="size-4 text-primary-accent" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-primary-accent uppercase">
            Furnace Grade Precision
          </span>
        </div>

        <h1 className="infra-hero-title font-heading text-5xl md:text-[64px] lg:text-[72px] leading-none text-primary-accent mb-6 uppercase tracking-tighter">
          Steel{" "}
          <span className="text-primary-container">Genesis</span>
        </h1>

        <p className="infra-hero-desc max-w-2xl mx-auto text-on-surface-variant text-base md:text-lg leading-relaxed mb-10">
          Forging the future of structural integrity through thermal precision
          and monumental scale. Our red-hot infrastructure is engineered for
          zero-latency industrial delivery.
        </p>

        <div className="infra-hero-stats flex justify-center gap-6 flex-wrap">
          <div className="glass-panel p-6 rounded-lg text-left w-full sm:w-auto sm:min-w-[200px] border-l-4 border-primary-container">
            <span className="font-mono text-[10px] text-primary-container tracking-[0.2em] uppercase block mb-1">
              Annual Output
            </span>
            <span className="font-heading text-3xl md:text-[40px] font-bold text-primary-accent leading-none">
              2.4M{" "}
              <span className="text-primary-container text-xl md:text-2xl">
                Tons
              </span>
            </span>
          </div>
          <div className="glass-panel p-6 rounded-lg text-left w-full sm:w-auto sm:min-w-[200px] border-l-4 border-primary-container">
            <span className="font-mono text-[10px] text-primary-container tracking-[0.2em] uppercase block mb-1">
              Global Hubs
            </span>
            <span className="font-heading text-3xl md:text-[40px] font-bold text-primary-accent leading-none">
              14{" "}
              <span className="text-primary-container text-xl md:text-2xl">
                Units
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="size-6 text-outline" />
      </div>
    </section>
  );
}
