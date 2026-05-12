import { Globe, Factory } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";

export const metadata = {
  title: "Our Presence | Aeron Steels",
  description:
    "Aeron Steels serves clients across 15+ countries including India, UAE, USA, Germany, and Japan. Global reach with local expertise.",
};

const COUNTRIES = [
  { name: "India", emoji: "🇮🇳", desc: "Headquarters and manufacturing facility based in India.", offices: "New Delhi" },
  { name: "United Arab Emirates", emoji: "🇦🇪", desc: "Strategic hub serving Middle East and African markets.", offices: "Dubai" },
  { name: "United States", emoji: "🇺🇸", desc: "Growing presence in North American automotive and industrial sectors.", offices: "New York" },
  { name: "Germany", emoji: "🇩🇪", desc: "Serving European precision engineering and automotive industries.", offices: "Frankfurt" },
  { name: "Japan", emoji: "🇯🇵", desc: "Partnering with Japanese automotive and electronics manufacturers.", offices: "Tokyo" },
  { name: "United Kingdom", emoji: "🇬🇧", desc: "Expanding footprint in UK manufacturing and construction sectors." },
  { name: "South Korea", emoji: "🇰🇷", desc: "Supplying to Korean automotive and electronics giants." },
  { name: "Singapore", emoji: "🇸🇬", desc: "Southeast Asian distribution and logistics hub." },
  { name: "Australia", emoji: "🇦🇺", desc: "Growing presence in Australian mining and heavy equipment sectors." },
  { name: "Saudi Arabia", emoji: "🇸🇦", desc: "Key market for oil and gas industry steel requirements." },
  { name: "Thailand", emoji: "🇹🇭", desc: "Serving Southeast Asian automotive and manufacturing industries." },
  { name: "Indonesia", emoji: "🇮🇩", desc: "Expanding into Indonesian infrastructure and construction markets." },
  { name: "Malaysia", emoji: "🇲🇾", desc: "Strategic partner for Malaysian electronics and manufacturing." },
  { name: "Vietnam", emoji: "🇻🇳", desc: "Growing manufacturing sector driving steel strip demand." },
  { name: "Egypt", emoji: "🇪🇬", desc: "Gateway to North African markets with growing industrial base." },
];

const INDUSTRIES = [
  { name: "Automotive", count: "35%", desc: "Steel strips for springs, seat belts, wiper blades, and structural components." },
  { name: "Electrical & Electronics", count: "20%", desc: "Precision strips for transformers, relays, switches, and connectors." },
  { name: "Construction", count: "15%", desc: "Infrastructure, roofing, and structural applications." },
  { name: "General Manufacturing", count: "30%", desc: "Cutting tools, fasteners, hardware, and industrial machinery." },
];

export default function OurPresencePage() {
  return (
    <>
      <PageHero
        title="Our Global Presence"
        subtitle="From India to the world — serving 15+ countries across Asia, Europe, North America, Africa, and Australia with precision steel solutions."
        breadcrumbs={[{ label: "Our Presence" }]}
      />

      {/* Intro */}
      <AnimatedSection muted>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase animate-on-scroll">Worldwide Reach</span>
            <h2 className="text-3xl md:text-[40px] font-heading font-bold text-white mt-3 leading-tight uppercase tracking-tighter animate-on-scroll">
              Supplying Steel Across{" "}
              <span className="text-primary italic">the Globe</span>
            </h2>
            <p className="text-on-surface-variant mt-4 leading-relaxed animate-on-scroll">
              Aeron Steels has built a robust global supply chain spanning 15+ countries. Our strategic
              presence in key markets ensures timely delivery, local support, and deep understanding of
              regional quality requirements.
            </p>
            <p className="text-on-surface-variant mt-3 leading-relaxed animate-on-scroll">
              From automotive giants in Germany and Japan to construction leaders in the Middle East,
              our steel strips meet diverse applications across industries and geographies.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8 animate-on-scroll">
              <div className="text-center">
                <span className="text-3xl font-heading font-bold text-primary">15+</span>
                <p className="font-mono text-[10px] text-on-surface-variant mt-1 tracking-wider uppercase">Countries</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-heading font-bold text-primary">500+</span>
                <p className="font-mono text-[10px] text-on-surface-variant mt-1 tracking-wider uppercase">Clients</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-heading font-bold text-primary">42+</span>
                <p className="font-mono text-[10px] text-on-surface-variant mt-1 tracking-wider uppercase">Years</p>
              </div>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-panel flex items-center justify-center animate-on-scroll">
            <div className="text-center p-8">
              <div className="size-24 mx-auto text-primary mb-4">
                <Globe className="size-full" />
              </div>
              <p className="text-sm text-on-surface-variant/70">Global Reach, Local Expertise</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Countries */}
      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase animate-on-scroll">Countries We Serve</span>
          <h2 className="text-3xl md:text-[40px] font-heading font-bold text-white mt-3 uppercase tracking-tighter animate-on-scroll">Our Global Footprint</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {COUNTRIES.map((country) => (
            <div key={country.name} className="group p-6 rounded-2xl glass-panel transition-all duration-300 animate-on-scroll">
              <div className="size-20 flex items-center justify-center rounded-full bg-white/[0.02] border border-white/5 text-4xl mb-4">
                {country.emoji}
              </div>
              <h3 className="text-base font-heading font-bold text-white">{country.name}</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed mt-2">{country.desc}</p>
              {country.offices && (
                <p className="font-mono text-[10px] text-primary font-medium mt-3 tracking-wider uppercase">
                  Office: {country.offices}
                </p>
              )}
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Industries */}
      <AnimatedSection muted>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase animate-on-scroll">Industries We Supply</span>
            <h2 className="text-3xl md:text-[40px] font-heading font-bold text-white mt-3 leading-tight uppercase tracking-tighter animate-on-scroll">
              Serving Diverse{" "}
              <span className="text-primary italic">Industries Worldwide</span>
            </h2>
            <div className="space-y-4 mt-6">
              {INDUSTRIES.map((ind) => (
                <div key={ind.name} className="flex items-start gap-4 p-4 rounded-xl glass-panel animate-on-scroll">
                  <div className="shrink-0 text-center min-w-[48px]">
                    <span className="text-lg font-heading font-bold text-primary">{ind.count}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-white">{ind.name}</h3>
                    <p className="text-xs text-on-surface-variant mt-0.5">{ind.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-panel flex items-center justify-center order-1 lg:order-2">
            <div className="text-center p-8">
              <div className="size-20 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Factory className="size-10" />
              </div>
              <p className="text-sm text-on-surface-variant/70">Industries Served</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-heading font-bold text-white leading-tight uppercase tracking-tighter animate-on-scroll">
            Want to Become Our{" "}
            <span className="text-primary italic">Global Partner</span>?
          </h2>
          <p className="text-on-surface-variant mt-4 mb-8 animate-on-scroll">
            We are always looking to expand our reach. Contact us to discuss distribution partnerships or direct supply.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-primary hover:bg-red-600 text-white font-mono text-xs rounded-lg transition-all active:scale-95 shadow-[0_0_20px_rgba(239,68,68,0.3)] tracking-wider uppercase animate-on-scroll"
          >
            Contact Our Team
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
