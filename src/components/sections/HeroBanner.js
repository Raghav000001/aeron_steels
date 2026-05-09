"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import gsap from "gsap";

function GradientText({ children, className }) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}

export function HeroBanner() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(".hero-label", { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" })
        .fromTo(".hero-heading", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .fromTo(".hero-subheading", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" }, "-=0.4")
        .fromTo(".hero-border", { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.5")
        .fromTo(".hero-ctas", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
        .fromTo(".hero-bg", { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[640px] flex items-end overflow-hidden">
      {/* Background Image */}
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,27,52,0.6), rgba(0,27,52,0.8)), url('/images/hero_banner.avif')",
        }}
      />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-40">
        <div className="max-w-2xl">
          <span className="hero-label inline-block mb-4 text-sm font-semibold tracking-widest uppercase opacity-0">
            <GradientText>Manufacturer &amp; Exporter of Premium Steel Strips</GradientText>
          </span>

          <h1 className="hero-heading text-3xl sm:text-[36px] md:text-[40px] font-heading font-bold text-white leading-[1.2] md:leading-[52px] opacity-0">
            India&apos;s Most Trusted Steel Manufacturer &amp; Exporter of Low, Medium & High Carbon Steel, and Hardened & Tempered Steel
          </h1>

          <div className="hero-subheading opacity-0 mt-6 pl-5 hero-border origin-left">
            <div className="border-l-[3px] border-primary-accent pl-5">
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Delivering precision-engineered carbon steel, hardened &amp; tempered steel, and CRCA
                steel strips to industries worldwide for over 42 years.
              </p>
            </div>
          </div>

          <div className="hero-ctas mt-10 flex flex-wrap items-center gap-4 opacity-0">
            <Link
              href="#products"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-primary-accent text-white font-semibold text-sm rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95"
            >
              OUR PRODUCTS
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold text-sm rounded-full hover:bg-white hover:text-primary-dark transition-all hover:scale-105 active:scale-95"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
