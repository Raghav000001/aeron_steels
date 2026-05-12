"use client";

import dynamic from "next/dynamic";

export const GlobeSection = dynamic(
  () =>
    import("@/components/sections/GlobeSection").then(
      (mod) => mod.GlobeSection,
    ),
  { ssr: false },
);
