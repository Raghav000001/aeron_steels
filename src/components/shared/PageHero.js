"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function PageHero({ title, subtitle, breadcrumbs = [] }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo(
        ".ph-breadcrumb",
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      )
        .fromTo(
          ".ph-title",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.2",
        )
        .fromTo(
          ".ph-subtitle",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.3",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[300px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,27,52,0.7), rgba(0,27,52,0.85)), url('/images/hero_banner.avif')",
        }}
      />
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {breadcrumbs.length > 0 && (
          <nav className="ph-breadcrumb flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-primary-accent transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-primary-accent transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="ph-title text-3xl md:text-[40px] font-heading font-bold text-white leading-tight max-w-2xl">
          {title}
        </h1>
        {subtitle && (
          <p className="ph-subtitle mt-4 text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
