"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PRODUCTS = [
  {
    id: "carbon-steel",
    title: "Carbon Steel Strips",
    tag: "PRECISION-ROLLED",
    description: "Superior strength and formability for automotive, construction, and industrial applications.",
    specs: "Grades C10-C80 | 0.20-3.00mm | Width 10-300mm",
    link: "/products/carbon-steel-strips",
  },
  {
    id: "hardened-tempered",
    title: "Hardened & Tempered Steel",
    tag: "HEAT-TREATED",
    description: "Engineered spring steel with precise hardness levels for demanding mechanical applications.",
    specs: "25-60 HRC | 0.10-3.00mm | Tensile 1000-2000 MPa",
    link: "/products/hardened-tempered-steel",
  },
  {
    id: "crca",
    title: "CRCA Steel",
    tag: "COLD-ROLLED",
    description: "Close annealed steel with excellent surface finish and deep drawing properties.",
    specs: "DC01-DC06 | 0.30-3.00mm | Width 500-1250mm",
    link: "/products/crca-steel",
  },
];

export function ProductSpecsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const glow = el.querySelector(".products-glow");

      gsap.fromTo(
        ".products-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        }
      );

      const cards = el.querySelectorAll(".product-card");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 80, scale: 0.9, rotateX: 10 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 75%" },
          onComplete: () => {
            cards.forEach((card) => {
              gsap.set(card, { clearProps: "transform" });
            });
          },
        }
      );

      if (glow) {
        gsap.to(glow, {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, el);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-surface-container-lowest border-y border-white/5 overflow-hidden">
      {/* Top red glow */}
      <div className="products-glow absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <span
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            className="text-[10px] text-primary tracking-[0.4em] uppercase"
          >
            Product Range
          </span>
          <h2 className="products-title text-4xl md:text-[44px] font-heading font-bold text-white uppercase tracking-tighter mt-4">
            High-Strength{" "}
            <span className="text-primary italic">Alloys</span>
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-xl leading-relaxed">
            Premium materials engineered for demanding industrial applications, manufactured to
            international standards.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <div
              key={product.id}
              className="product-card card-3d relative aspect-[3/4]"
            >
              <Link
                href={product.link}
                className="block w-full h-full rounded-3xl overflow-hidden border border-white/10 group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{
                    backgroundImage: "url('/images/hero_banner.avif')",
                    opacity: 0.4,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    className="text-[10px] text-primary mb-3 block tracking-[0.2em] uppercase"
                  >
                    {product.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                    {product.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mt-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all leading-relaxed">
                    {product.description}
                  </p>
                  <p className="font-mono text-[10px] text-primary/70 mt-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all delay-75 tracking-wider uppercase">
                    {product.specs}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
