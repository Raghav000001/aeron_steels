"use client";

import { useRef } from "react";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";

const MEDIA = [
  {
    name: "ET Now",
    accent: "#ef4444",
    logo: (
      <svg viewBox="0 0 80 28" className="h-7 w-auto">
        <rect width="28" height="28" rx="4" fill="#ef4444" />
        <text x="14" y="20" textAnchor="middle" fill="white" fontWeight="800" fontSize="15" fontFamily="system-ui">ET</text>
        <text x="33" y="20" fill="#ef4444" fontWeight="700" fontSize="15" fontFamily="system-ui">NOW</text>
      </svg>
    ),
  },
  {
    name: "Mint",
    accent: "#10b981",
    logo: (
      <svg viewBox="0 0 80 28" className="h-7 w-auto">
        <rect y="6" width="18" height="18" rx="4" fill="#10b981" />
        <path d="M6 13l3-5 3 5 3-5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="24" y="20" fill="#10b981" fontWeight="700" fontSize="16" fontFamily="system-ui">Mint</text>
      </svg>
    ),
  },
  {
    name: "Impact",
    accent: "#3b82f6",
    logo: (
      <svg viewBox="0 0 90 28" className="h-7 w-auto">
        <text x="0" y="22" fill="#3b82f6" fontWeight="800" fontSize="20" fontFamily="system-ui" letterSpacing="-0.5">Impact</text>
      </svg>
    ),
  },
  {
    name: "The Pioneer",
    accent: "#8b5cf6",
    logo: (
      <svg viewBox="0 0 120 28" className="h-7 w-auto">
        <text x="0" y="22" fill="#8b5cf6" fontWeight="700" fontSize="14" fontFamily="Georgia, serif" letterSpacing="1">THE PIONEER</text>
      </svg>
    ),
  },
  {
    name: "Manufacturing India",
    accent: "#06b6d4",
    logo: (
      <svg viewBox="0 0 100 28" className="h-7 w-auto">
        <rect x="0" y="2" width="10" height="24" rx="2" fill="#06b6d4" />
        <rect x="13" y="8" width="10" height="18" rx="2" fill="#06b6d480" />
        <text x="28" y="20" fill="#06b6d4" fontWeight="700" fontSize="11" fontFamily="system-ui">MFG INDIA</text>
      </svg>
    ),
  },
  {
    name: "Akashvani",
    accent: "#f59e0b",
    logo: (
      <svg viewBox="0 0 90 28" className="h-7 w-auto">
        <circle cx="14" cy="14" r="12" fill="none" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="14" cy="14" r="4" fill="#f59e0b" />
        <text x="32" y="20" fill="#f59e0b" fontWeight="700" fontSize="13" fontFamily="system-ui">Akashvani</text>
      </svg>
    ),
  },
  {
    name: "CNX",
    accent: "#ec4899",
    logo: (
      <svg viewBox="0 0 70 28" className="h-7 w-auto">
        <text x="0" y="20" fill="#ec4899" fontWeight="800" fontSize="18" fontFamily="system-ui">CNX</text>
      </svg>
    ),
  },
  {
    name: "The Hindu",
    accent: "#2563eb",
    logo: (
      <svg viewBox="0 0 110 28" className="h-7 w-auto">
        <text x="0" y="22" fill="#2563eb" fontWeight="700" fontSize="16" fontFamily="Georgia, serif">The Hindu</text>
      </svg>
    ),
  },
  {
    name: "APN",
    accent: "#ea580c",
    logo: (
      <svg viewBox="0 0 60 28" className="h-7 w-auto">
        <text x="0" y="20" fill="#ea580c" fontWeight="800" fontSize="17" fontFamily="system-ui">APN</text>
      </svg>
    ),
  },
  {
    name: "TOI",
    accent: "#b91c1c",
    logo: (
      <svg viewBox="0 0 88 28" className="h-7 w-auto">
        <text x="0" y="20" fill="#b91c1c" fontWeight="700" fontSize="14" fontFamily="Georgia, serif">TIMES OF INDIA</text>
      </svg>
    ),
  },
];

export function MediaPressSection() {
  const sectionRef = useRef(null);
  useGSAPAnimation(sectionRef, { stagger: 0.06, fromY: 40 });

  return (
    <section ref={sectionRef} className="relative py-20 bg-surface-container border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            className="text-[10px] text-primary tracking-[0.3em] uppercase"
          >
            Media &amp; Press
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-tighter mt-3">
            Industry Recognition
          </h2>
          <p className="text-on-surface-variant text-sm mt-3 max-w-lg mx-auto">
            Featured in leading news outlets and industry publications
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {MEDIA.map((outlet) => (
            <a
              key={outlet.name}
              href="/media-press"
              className="group relative flex flex-col items-center justify-center h-[120px] rounded-xl glass-panel transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.1]"
                style={{ backgroundColor: outlet.accent }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1"
                style={{ backgroundColor: outlet.accent }}
              />
              <div className="flex items-center justify-center px-4 brightness-0 invert transition-all duration-300 group-hover:brightness-100 group-hover:invert-0">
                {outlet.logo}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
