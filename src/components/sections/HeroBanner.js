"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BackgroundLines } from "@/components/ui/background-lines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroBanner() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          y: () => el.offsetHeight * 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      gsap.to(".float-shape", {
        y: "+=20",
        rotation: 5,
        duration: 3 + Math.random() * 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
      )
        .fromTo(
          ".hero-heading",
          { opacity: 0, y: 60, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power4.out" },
          "-=0.2",
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          ".hero-ctas",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "-=0.2",
        )
        .fromTo(
          ".hero-scroll",
          { opacity: 0 },
          { opacity: 0.4, duration: 0.6 },
          "-=0.1",
        )
        .to(
          ".hero-scroll",
          { opacity: 0.7, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut" },
          "-=0.2",
        );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#050505]"
    >
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20" />

      {/* Spotlight Background */}
      <div className="absolute inset-0 spotlight-bg" />

      {/* Floating Shapes */}
      <div className="float-shape absolute top-1/4 left-1/4 w-32 h-32 border border-white/5 bg-white/[0.02] rounded-xl rotate-12 animate-[float_6s_ease-in-out_infinite] backdrop-blur-sm" />
      <div className="float-shape absolute bottom-1/4 right-1/4 w-48 h-48 border border-primary/10 bg-primary/[0.01] rounded-full -rotate-12 animate-[float_8s_ease-in-out_infinite_1s] backdrop-blur-sm" />

      {/* Meteor Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="meteor top-[10%] left-[80%] animate-[meteor_3s_linear_infinite]" />
        <div className="meteor top-[40%] left-[90%] animate-[meteor_4s_linear_infinite]" style={{ animationDelay: "1.5s" }} />
        <div className="meteor top-[20%] left-[60%] animate-[meteor_2.5s_linear_infinite]" style={{ animationDelay: "0.8s" }} />
      </div>

      {/* Background Image with dark overlay */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-40"
          style={{
            backgroundImage: "url('/images/hero_banner.avif')",
            filter: "grayscale(1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Background Lines Effect */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-60">
        <BackgroundLines
          className="w-full h-full bg-transparent dark:bg-transparent"
          svgOptions={{ duration: 15 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
          <span
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            className="text-[10px] text-primary tracking-[0.2em] uppercase"
          >
            Manufacturer &amp; Exporter of Premium Steel Strips
          </span>
        </div>

        {/* Heading */}
        <h1
          className="hero-heading font-heading text-[12vw] md:text-[72px] text-white mb-6 leading-[0.9] uppercase tracking-tighter"
          style={{ fontWeight: 700 }}
        >
          Engineering The{" "}
          <span className="text-primary italic">Future</span>
          <br />
          Of Steel
        </h1>

        {/* Subtitle */}
        <p className="hero-sub text-on-surface-variant max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
          Aeron Steels combines precision metallurgy with global logistics to deliver
          premium carbon steel, hardened &amp; tempered steel, and CRCA steel strips
          to industries worldwide.
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/products/carbon-steel-strips"
            className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-mono text-[11px] rounded-lg hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] transition-all active:scale-95 tracking-wider uppercase text-center"
          >
            Explore Products
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto px-10 py-4 border border-white/10 text-white font-mono text-[11px] rounded-lg hover:bg-white/5 transition-all backdrop-blur-md tracking-wider uppercase text-center"
          >
            Our Legacy
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
        <span
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          className="text-[10px] tracking-widest uppercase text-on-surface-variant"
        >
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
