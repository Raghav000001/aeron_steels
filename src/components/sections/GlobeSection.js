"use client";

import { World } from "@/components/ui/globe";

const globeConfig = {
  pointSize: 3,
  globeColor: "#0a0303",
  showAtmosphere: true,
  atmosphereColor: "#ef4444",
  atmosphereAltitude: 0.12,
  emissive: "#441111",
  emissiveIntensity: 0.08,
  shininess: 0.95,
  polygonColor: "rgba(255,180,180,0.85)",
  ambientLight: "#110505",
  directionalLeftLight: "#ff6633",
  directionalTopLight: "#ff5544",
  pointLight: "#ff4444",
  arcTime: 2500,
  arcLength: 0.85,
  rings: 1,
  maxRings: 4,
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const colors = ["#ef4444", "#ffb3ad", "#ff5451"];

const sampleArcs = [
  {
    order: 1,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: colors[0],
  },
  {
    order: 2,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.3,
    color: colors[1],
  },
  {
    order: 3,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 48.8566,
    endLng: 2.3522,
    arcAlt: 0.3,
    color: colors[0],
  },
  {
    order: 4,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.3,
    color: colors[2],
  },
  {
    order: 5,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: colors[0],
  },
  {
    order: 6,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: colors[1],
  },
  {
    order: 7,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 25.2048,
    endLng: 55.2708,
    arcAlt: 0.2,
    color: colors[2],
  },
  {
    order: 8,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.35,
    color: colors[0],
  },
  {
    order: 9,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: -23.5505,
    endLng: -46.6333,
    arcAlt: 0.35,
    color: colors[1],
  },
  {
    order: 10,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 30.0444,
    endLng: 31.2357,
    arcAlt: 0.2,
    color: colors[0],
  },
  {
    order: 11,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.35,
    color: colors[2],
  },
  {
    order: 12,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 55.7558,
    endLng: 37.6173,
    arcAlt: 0.3,
    color: colors[1],
  },
  {
    order: 13,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 39.9042,
    endLng: 116.4074,
    arcAlt: 0.3,
    color: colors[0],
  },
  {
    order: 14,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: -26.2041,
    endLng: 28.0473,
    arcAlt: 0.3,
    color: colors[2],
  },
  {
    order: 15,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 59.3293,
    endLng: 18.0686,
    arcAlt: 0.3,
    color: colors[1],
  },
  {
    order: 16,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 41.9028,
    endLng: 12.4964,
    arcAlt: 0.3,
    color: colors[0],
  },
  {
    order: 17,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: -1.2864,
    endLng: 36.8172,
    arcAlt: 0.2,
    color: colors[2],
  },
  {
    order: 18,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.35,
    color: colors[1],
  },
  {
    order: 19,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.35,
    color: colors[0],
  },
  {
    order: 20,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: -33.9249,
    endLng: 18.4241,
    arcAlt: 0.3,
    color: colors[2],
  },
];

export function GlobeSection() {
  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <span
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            className="text-[10px] text-primary tracking-[0.4em] uppercase"
          >
            Global Network
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mt-6 uppercase tracking-tighter leading-tight">
            Unified Global{" "}
            <span className="text-primary italic">Presence</span>
          </h2>
          <p className="text-on-surface-variant mt-4 text-base md:text-lg max-w-2xl">
            Real-time supply chain synchronization across 6 continents.
          </p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto aspect-square rounded-[24px] md:rounded-[40px] overflow-hidden border border-white/5 bg-[#0a0a0a]">
          <World globeConfig={globeConfig} data={sampleArcs} />
        </div>
      </div>
    </section>
  );
}
