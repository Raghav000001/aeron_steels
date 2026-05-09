"use client";

import { useRef, useEffect, useState } from "react";
import { Calendar, Users, Repeat, Package } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { icon: Calendar, value: "42+", label: "Years of Experience", num: 42, suffix: "+" },
  { icon: Users, value: "500+", label: "Customers Worldwide", num: 500, suffix: "+" },
  { icon: Repeat, value: "95%", label: "Repeat Customers", num: 95, suffix: "%" },
  { icon: Package, value: "10,000+", label: "MT Supplies Yearly", num: 10000, suffix: "+" },
];

function Counter({ stat, visible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = stat.num / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.num) {
        setCount(stat.num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [visible, stat.num]);

  return (
    <span className="stat-value text-4xl font-heading font-bold text-primary-dark">
      {count.toLocaleString()}{stat.suffix}
    </span>
  );
}

export function StatsSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(".stat-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          onEnter: () => setVisible(true),
        },
      }
    );

    gsap.fromTo(
      cards,
      { "--icon-rotate": -180 },
      {
        "--icon-rotate": 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="stat-card flex flex-col items-center text-center p-8 rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow"
            >
              <stat.icon className="stat-icon size-8 text-primary mb-4" />
              <Counter stat={stat} visible={visible} />
              <span className="stat-label mt-2 text-sm text-body-secondary">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
