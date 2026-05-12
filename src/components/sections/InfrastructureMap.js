"use client";

import { useRef, useEffect } from "react";
import WorldMap from "@/components/ui/world-map";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WORLD_ROUTES = [
  { start: { lat: 19.076, lng: 72.877 }, end: { lat: 51.507, lng: -0.127 } },
  { start: { lat: 19.076, lng: 72.877 }, end: { lat: 40.712, lng: -74.006 } },
  { start: { lat: 35.676, lng: 139.65 }, end: { lat: 51.507, lng: -0.127 } },
  { start: { lat: 31.23, lng: 121.473 }, end: { lat: 40.712, lng: -74.006 } },
  { start: { lat: 25.204, lng: 55.27 }, end: { lat: 48.856, lng: 2.352 } },
  { start: { lat: 1.352, lng: 103.819 }, end: { lat: 51.507, lng: -0.127 } },
  { start: { lat: 19.076, lng: 72.877 }, end: { lat: 35.676, lng: 139.65 } },
  { start: { lat: 40.712, lng: -74.006 }, end: { lat: -33.868, lng: 151.209 } },
];

export function InfrastructureMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".infra-map-content",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={mapRef}
      className="py-24 md:py-32 bg-background overflow-hidden relative"
    >
      <div className="section-container text-center">
        <span className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase block mb-4">
          Logistical Supremacy
        </span>
        <h2 className="font-heading text-3xl md:text-[40px] font-bold text-white mb-12 uppercase tracking-tighter">
          Total Global{" "}
          <span className="text-primary italic">Reach</span>
        </h2>

        <div className="infra-map-content relative rounded-2xl overflow-hidden glass-panel neon-border p-6 md:p-10">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-container-low/20 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.08)_0%,transparent_70%)] pointer-events-none z-10" />
          <WorldMap dots={WORLD_ROUTES} lineColor="#ef4444" />
        </div>
      </div>
    </section>
  );
}
