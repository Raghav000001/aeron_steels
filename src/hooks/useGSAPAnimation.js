"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGSAPAnimation(triggerRef, options = {}) {
  const ctxRef = useRef(null);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    ctxRef.current = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll(options.target || ".animate-on-scroll"),
        {
          y: options.fromY ?? 60,
          opacity: 0,
          ...options.fromExtra,
        },
        {
          y: 0,
          opacity: 1,
          duration: options.duration ?? 0.8,
          stagger: options.stagger ?? 0.1,
          ease: options.ease ?? "power3.out",
          scrollTrigger: {
            trigger: el,
            start: options.start ?? "top 85%",
            end: options.end ?? "bottom 20%",
            toggleActions: "play none none none",
          },
          ...options.toExtra,
        }
      );
    }, el);

    return () => ctxRef.current?.revert();
    // Animation is set up once on mount; options are static via useMemo in AnimatedSection
    // and triggerRef is a stable useRef ref — intentionally not in deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
