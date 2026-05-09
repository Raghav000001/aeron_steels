"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PRODUCTS = [
  {
    id: "carbon-steel",
    title: "Low / Medium / High Carbon Steel Strips",
    image: "/images/products/carbon-steel.jpg",
    imageAlt: "Carbon steel strips coil",
    specs: [
      { label: "Grades", value: "C10, C20, C30, C40, C50, C60, C70, C80" },
      { label: "Thickness", value: "0.20 mm to 3.00 mm" },
      { label: "Width", value: "10 mm to 300 mm" },
      { label: "Form", value: "Cold Rolled, Slit Edge, Mill Edge" },
      { label: "Hardness", value: "Annealed to Full Hard" },
      { label: "Surface Finish", value: "Bright, Matte, Silver" },
    ],
    extendedSpecs: [
      { label: "Tolerance", value: "+/- 0.02 mm" },
      { label: "Coil Weight", value: "Up to 5,000 kg" },
      { label: "Packaging", value: "Wooden Pallet / Export Worthy" },
    ],
    applications: [
      "Automotive components",
      "Springs and washers",
      "Cutting tools",
      "Blades and knives",
      "Hardware fasteners",
    ],
    link: "/products/carbon-steel-strips",
  },
  {
    id: "hardened-tempered",
    title: "Hardened & Tempered Steel Strips",
    image: "/images/products/hardened-tempered.jpg",
    imageAlt: "Hardened and tempered steel strips",
    specs: [
      { label: "Grades", value: "C40, C50, C60, C70, C75, C80, 1075, 1095" },
      { label: "Thickness", value: "0.10 mm to 3.00 mm" },
      { label: "Width", value: "10 mm to 300 mm" },
      { label: "Temper", value: "Half Hard, Full Hard, Spring Temper" },
      { label: "Surface", value: "Blue Tempered, Bright, Matte" },
      { label: "Hardness", value: "25 HRC to 60 HRC" },
    ],
    extendedSpecs: [
      { label: "Tensile Strength", value: "1000 to 2000 MPa" },
      { label: "Flatness", value: "Precision Level" },
      { label: "Packaging", value: "Oil Coated, Export Worthy" },
    ],
    applications: [
      "Spring manufacturing",
      "Shims and spacers",
      "Lock components",
      "Seat belt springs",
      "Wiper blades",
    ],
    link: "/products/hardened-tempered-steel",
  },
  {
    id: "crca",
    title: "Cold Rolled Close Annealed (CRCA) Steel",
    image: "/images/products/crca-steel.jpg",
    imageAlt: "CRCA steel coils",
    specs: [
      { label: "Grades", value: "DC01, DC03, DC04, DC06, EDD" },
      { label: "Thickness", value: "0.30 mm to 3.00 mm" },
      { label: "Width", value: "500 mm to 1250 mm" },
      { label: "Form", value: "Coils, Sheets, Slit Coils" },
      { label: "Surface", value: "Bright, Matt, Skin Passed" },
      { label: "Hardness", value: "Annealed / Soft Temper" },
    ],
    extendedSpecs: [
      { label: "Elongation", value: "28% to 40%" },
      { label: "Coil Weight", value: "Up to 10,000 kg" },
      { label: "Packaging", value: "Export Worthy Packaging" },
    ],
    applications: [
      "Automotive body panels",
      "Home appliances",
      "Furniture manufacturing",
      "Electrical enclosures",
      "Deep drawing components",
    ],
    link: "/products/crca-steel",
  },
];

function ProductImage({ src, alt }) {
  return (
    <div className="product-image aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
      <div className="text-center p-6">
        <div className="mx-auto mb-4 size-16 rounded-full bg-primary/10 flex items-center justify-center product-icon">
          <svg className="size-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-xs font-medium text-heading/60">{alt}</p>
        <p className="text-[10px] text-muted-foreground mt-1">Place image in <code className="bg-gray-100 px-1 rounded">{src}</code></p>
      </div>
    </div>
  );
}

function ProductSpecBlock({ product, index }) {
  const [expanded, setExpanded] = useState(false);
  const blockRef = useRef(null);
  const allSpecs = [...product.specs, ...product.extendedSpecs];

  return (
    <div
      id={product.id}
      ref={blockRef}
      className="product-block flex flex-col lg:flex-row items-start gap-10 lg:gap-16"
    >
      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-heading mb-6">
          {product.title}
        </h3>

        <div className="space-y-3 mb-6">
          {(expanded ? allSpecs : product.specs).map((spec) => (
            <div
              key={spec.label}
              className="spec-row flex flex-col sm:flex-row sm:items-center py-3 border-b border-border last:border-0"
            >
              <span className="text-sm font-semibold text-heading w-44 shrink-0">
                {spec.label}
              </span>
              <span className="text-sm text-body">{spec.value}</span>
            </div>
          ))}
        </div>

        {product.extendedSpecs.length > 0 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-accent transition-colors mb-8"
          >
            {expanded ? "Show Less" : "Show More"}
            <ChevronDown
              className={`size-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        )}

        <div className="mb-8">
          <h4 className="text-sm font-semibold text-heading uppercase tracking-wider mb-3">
            Applications
          </h4>
          <ul className="flex flex-wrap gap-2">
            {product.applications.map((app) => (
              <li
                key={app}
                className="px-4 py-1.5 bg-primary/5 text-primary text-sm rounded-full"
              >
                {app}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={product.link}
          className="product-cta inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primary to-primary-accent text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity hover:scale-105 active:scale-95"
        >
          View Full Details
        </Link>
      </div>

      <div className="shrink-0 w-full h-48 lg:w-72">
        <ProductImage src={product.image} alt={product.imageAlt} />
      </div>
    </div>
  );
}

export function ProductSpecsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const blocks = sectionRef.current?.querySelectorAll(".product-block");
    if (!blocks?.length) return;

    // Section header
    gsap.fromTo(
      ".products-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
    );
    gsap.fromTo(
      ".products-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.15, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
    );

    // Product blocks
    blocks.forEach((block, i) => {
      gsap.fromTo(
        block,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
          },
        }
      );

      // Image slide from right
      const img = block.querySelector(".product-image");
      if (img) {
        gsap.fromTo(
          img,
          { opacity: 0, x: 60, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.7,
            delay: 0.2 + i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 85%",
            },
          }
        );
      }

      // Spec rows stagger
      const specs = block.querySelectorAll(".spec-row");
      gsap.fromTo(
        specs,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.05,
          delay: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
          },
        }
      );

      // Icon bounce on hover
      const icon = block.querySelector(".product-icon");
      if (icon) {
        img?.addEventListener("mouseenter", () => {
          gsap.to(icon, { scale: 1.2, rotate: 10, duration: 0.3, ease: "back.out(1.7)" });
        });
        img?.addEventListener("mouseleave", () => {
          gsap.to(icon, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.out" });
        });
      }
    });
  }, []);

  return (
    <section ref={sectionRef} id="products" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="products-title text-3xl md:text-[35px] font-heading font-bold text-heading">
            Our Products
          </h2>
          <p className="products-subtitle mt-4 text-body max-w-2xl mx-auto">
            Explore our range of precision-engineered steel strips manufactured to
            international standards.
          </p>
        </div>

        <div className="space-y-16">
          {PRODUCTS.map((product, i) => (
            <ProductSpecBlock key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
