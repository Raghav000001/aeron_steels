"use client";

import Image from "next/image";

const CLIENTS = [
  {
    name: "Havells",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/75/Havells_logo.svg",
    url: "https://www.havells.com",
  },
  {
    name: "Maruti Suzuki",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Maruti_Suzuki_Logo.svg",
    url: "https://www.marutisuzuki.com",
  },
  {
    name: "Lumax",
    src: "https://lumaxworld.in/wp-content/uploads/2023/05/lumax-logo.png",
    url: "https://www.lumaxworld.in",
  },
  {
    name: "YKK",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/18/YKK_Logo.svg",
    url: "https://www.ykkfastening.com",
  },
  {
    name: "Piano Presitel",
    src: "https://pianopresitel.com/wp-content/uploads/2022/07/logo.png",
    url: "https://pianopresitel.com",
  },
  {
    name: "Hyundai",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg",
    url: "https://www.hyundai.com",
  },
  {
    name: "BHEL",
    src: "https://upload.wikimedia.org/wikipedia/en/9/97/BHEL_logo.svg",
    url: "https://www.bhel.com",
  },
];

const duplicatedClients = [...CLIENTS, ...CLIENTS];

export function ClientCarousel() {
  return (
    <section className="relative overflow-hidden border-y border-neutral-200 bg-white py-10">

      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

      <div className="group relative flex overflow-hidden">
        {/* First Track */}
        <div className="animate-marquee flex min-w-full shrink-0 items-center gap-20 px-10">
          {duplicatedClients.map((client, index) => (
            <a
              key={`${client.name}-${index}`}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 w-[140px] items-center justify-center grayscale opacity-70 transition-all duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0"
            >
              <div className="relative h-10 w-full">
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Duplicate Track */}
        <div
          className="animate-marquee flex min-w-full shrink-0 items-center gap-20 px-10"
          aria-hidden="true"
        >
          {duplicatedClients.map((client, index) => (
            <a
              key={`${client.name}-duplicate-${index}`}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 w-[140px] items-center justify-center grayscale opacity-70 transition-all duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0"
            >
              <div className="relative h-10 w-full">
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }

        .group:hover .animate-marquee {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}