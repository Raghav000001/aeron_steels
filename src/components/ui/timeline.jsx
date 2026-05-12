"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-surface-container-lowest font-sans relative py-20"
      ref={containerRef}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-[64px] mb-[64px] relative text-center">
        <h2 className="font-heading text-[32px] md:text-[40px] text-white font-semibold">
          Legacy of <span className="text-primary">Impact</span>
        </h2>
        <p className="font-mono text-[12px] text-on-surface-variant mt-4 tracking-widest uppercase">
          A CHRONICLE OF DISRUPTION AND PRECISION
        </p>
      </div>

      <div ref={ref} className="relative max-w-[1440px] mx-auto pb-20 px-5 md:px-[64px]">
        {/* Central glowing vertical timeline line (Background) */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-1/2 -translate-x-1/2 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-black/80 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-primary-container to-transparent rounded-full"
          />
        </div>

        <div className="space-y-[128px]">
          {data.map((item, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                } items-center justify-between gap-[48px] relative`}
              >
                {/* Desktop Year Node */}
                <div
                  className={`md:w-5/12 hidden md:block ${
                    isReversed ? "text-left" : "text-right"
                  }`}
                >
                  <span className="font-heading text-[60px] md:text-[72px] text-outline-variant opacity-30 font-bold">
                    {item.title}
                  </span>
                </div>

                {/* Glowing Node */}
                <div className="z-10 w-12 h-12 rounded-full bg-surface border-4 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(255,84,81,0.5)] shrink-0">
                  <div
                    className={`w-3 h-3 bg-primary rounded-full ${
                      item.active ? "animate-pulse" : ""
                    }`}
                  />
                </div>

                {/* Content Panel */}
                <div className="md:w-5/12 w-full text-left">
                  {/* Mobile Year Node */}
                  <span className="md:hidden font-heading text-[32px] text-primary block mb-4 font-bold text-center">
                    {item.title}
                  </span>
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
