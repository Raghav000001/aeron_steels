"use client";

import { useRef, useMemo } from "react";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";

export default function AnimatedSection({ children, className = "", muted = false, options = {} }) {
  const sectionRef = useRef(null);
  const stableOptions = useMemo(
    () => ({
      stagger: 0.15,
      fromY: 40,
      duration: 0.7,
      start: "top 85%",
      ...options,
    }),
    [options]
  );

  useGSAPAnimation(sectionRef, stableOptions);

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-20 ${muted ? "bg-muted" : "bg-white"} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
