"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TESTIMONIALS = [
  {
    quote:
      "Aeron Steels has been our reliable partner for carbon steel strips for over a decade. Their consistency in quality and timely delivery is unmatched.",
    name: "Rajesh Kumar",
    title: "Procurement Head",
    company: "Automotive Components Ltd, New Delhi",
  },
  {
    quote:
      "The precision in their hardened and tempered steel strips has helped us reduce our rejection rate significantly. Excellent quality control.",
    name: "David Cohen",
    title: "Operations Manager",
    company: "SteelTech Industries, Israel",
  },
  {
    quote:
      "We switched to Aeron Steels three years ago and have never looked back. Their CRCA steel quality is on par with the best international suppliers.",
    name: "Priya Subramanian",
    title: "VP Manufacturing",
    company: "Precision Engineers, Chennai",
  },
  {
    quote:
      "Outstanding service and product quality. They understand our specifications perfectly and deliver exactly what we need, every single time.",
    name: "Amit Sharma",
    title: "Director",
    company: "Industrial Solutions Pvt, Noida",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const goTo = useCallback(
    (index) => {
      if (animating || index === active) return;
      setAnimating(true);

      gsap.to(trackRef.current, {
        xPercent: -index * (100 / TESTIMONIALS.length),
        duration: 0.6,
        ease: "power3.inOut",
        onComplete: () => {
          setActive(index);
          setAnimating(false);
        },
      });
    },
    [active, animating]
  );

  const next = useCallback(
    () => goTo((active + 1) % TESTIMONIALS.length),
    [active, goTo]
  );

  const prev = useCallback(
    () => goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
    [active, goTo]
  );

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <div
              ref={trackRef}
              className="flex"
              style={{ width: `${TESTIMONIALS.length * 100}%` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="relative"
                  style={{ width: `${100 / TESTIMONIALS.length}%` }}
                >
                  <div className="bg-gradient-to-br from-primary to-primary-accent p-10 md:p-14 h-full mx-0.5 rounded-3xl">
                    <svg
                      className="absolute top-8 left-8 size-12 text-white/10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    <div className="relative z-10">
                      <p className="text-white text-lg md:text-xl leading-relaxed italic mb-8">
                        &ldquo;{t.quote}&rdquo;
                      </p>

                      <div className="w-16 h-1 bg-white/30 rounded-full mb-6" />

                      <div>
                        <p className="text-white font-heading font-bold text-lg">
                          {t.name}
                        </p>
                        <p className="text-white/70 text-sm">
                          {t.title}, {t.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 gap-6">
            <button
              onClick={prev}
              disabled={animating}
              className="flex items-center justify-center size-10 rounded-full border border-border hover:bg-primary hover:border-primary hover:text-white transition-all hover:scale-110 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-5" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  disabled={animating}
                  className={`size-2.5 rounded-full transition-all ${
                    i === active
                      ? "bg-primary scale-125"
                      : "bg-border hover:bg-muted-foreground"
                  } disabled:cursor-not-allowed`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={animating}
              className="flex items-center justify-center size-10 rounded-full border border-border hover:bg-primary hover:border-primary hover:text-white transition-all hover:scale-110 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
