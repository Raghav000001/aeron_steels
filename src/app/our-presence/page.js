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
  { name: "India", flag: "IN", desc: "Headquarters and manufacturing facility based in India.", offices: "New Delhi" },
  { name: "United Arab Emirates", flag: "AE", desc: "Strategic hub serving Middle East and African markets.", offices: "Dubai" },
  { name: "United States", flag: "US", desc: "Growing presence in North American automotive and industrial sectors.", offices: "New York" },
  { name: "Germany", flag: "DE", desc: "Serving European precision engineering and automotive industries.", offices: "Frankfurt" },
  { name: "Japan", flag: "JP", desc: "Partnering with Japanese automotive and electronics manufacturers.", offices: "Tokyo" },
  { name: "United Kingdom", flag: "GB", desc: "Expanding footprint in UK manufacturing and construction sectors." },
  { name: "South Korea", flag: "KR", desc: "Supplying to Korean automotive and electronics giants." },
  { name: "Singapore", flag: "SG", desc: "Southeast Asian distribution and logistics hub." },
  { name: "Australia", flag: "AU", desc: "Growing presence in Australian mining and heavy equipment sectors." },
  { name: "Saudi Arabia", flag: "SA", desc: "Key market for oil and gas industry steel requirements." },
  { name: "Thailand", flag: "TH", desc: "Serving Southeast Asian automotive and manufacturing industries." },
  { name: "Indonesia", flag: "ID", desc: "Expanding into Indonesian infrastructure and construction markets." },
  { name: "Malaysia", flag: "MY", desc: "Strategic partner for Malaysian electronics and manufacturing." },
  { name: "Vietnam", flag: "VN", desc: "Growing manufacturing sector driving steel strip demand." },
  { name: "Egypt", flag: "EG", desc: "Gateway to North African markets with growing industrial base." },
];

const INDUSTRIES = [
  { name: "Automotive", count: "35%", desc: "Steel strips for springs, seat belts, wiper blades, and structural components." },
  { name: "Electrical & Electronics", count: "20%", desc: "Precision strips for transformers, relays, switches, and connectors." },
  { name: "Construction", count: "15%", desc: "Infrastructure, roofing, and structural applications." },
  { name: "General Manufacturing", count: "30%", desc: "Cutting tools, fasteners, hardware, and industrial machinery." },
];

function FlagCircle({ country }) {
  const gradients = {
    IN: "from-orange-500 via-white to-green-500",
    AE: "from-red-600 via-white to-green-600",
    US: "from-blue-900 via-white to-red-600",
    DE: "from-black via-red-600 to-yellow-400",
    JP: "from-white via-red-600 to-white",
    GB: "from-blue-900 via-white to-red-600",
    KR: "from-white via-red-600 to-blue-900",
    SG: "from-white via-red-600 to-white",
    AU: "from-blue-900 via-white to-red-600",
    SA: "from-green-800 via-white to-green-800",
    TH: "from-blue-900 via-white via-red-600 to-blue-900",
    ID: "from-red-600 via-white to-white",
    MY: "from-blue-900 via-yellow-400 via-red-600 to-blue-900",
    VN: "from-red-600 via-yellow-400 to-red-600",
    EG: "from-red-600 via-white to-black",
  };
  return (
    <div className={`size-20 rounded-full bg-gradient-to-br ${gradients[country.flag] || "from-primary to-primary-accent"} shadow-md flex items-center justify-center text-xl font-bold`}>
      {country.flag}
    </div>
  );
}

export default function OurPresencePage() {
  return (
    <>
      <PageHero
        title="Our Global Presence"
        subtitle="From India to the world — serving 15+ countries across Asia, Europe, North America, Africa, and Australia with precision steel solutions."
        breadcrumbs={[{ label: "Our Presence" }]}
      />

      <AnimatedSection muted>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary animate-on-scroll">Worldwide Reach</span>
            <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading mt-3 leading-tight animate-on-scroll">
              Supplying Steel Across{" "}
              <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
                the Globe
              </span>
            </h2>
            <p className="text-body mt-4 leading-relaxed animate-on-scroll">
              Aeron Steels has built a robust global supply chain spanning 15+ countries. Our strategic
              presence in key markets ensures timely delivery, local support, and deep understanding of
              regional quality requirements.
            </p>
            <p className="text-body mt-3 leading-relaxed animate-on-scroll">
              From automotive giants in Germany and Japan to construction leaders in the Middle East,
              our steel strips meet diverse applications across industries and geographies.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8 animate-on-scroll">
              <div className="text-center">
                <span className="text-3xl font-heading font-bold text-primary">15+</span>
                <p className="text-xs text-body mt-1">Countries</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-heading font-bold text-primary">500+</span>
                <p className="text-xs text-body mt-1">Clients</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-heading font-bold text-primary">42+</span>
                <p className="text-xs text-body mt-1">Years</p>
              </div>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/10 to-primary-accent/10 flex items-center justify-center animate-on-scroll">
            <div className="text-center p-8">
              <div className="size-24 mx-auto text-primary mb-4">
                <Globe className="size-full" />
              </div>
              <p className="text-sm text-body/70">Global Reach, Local Expertise</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary animate-on-scroll">Countries We Serve</span>
          <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading mt-3 animate-on-scroll">Our Global Footprint</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {COUNTRIES.map((country) => (
            <div key={country.name} className="group p-6 rounded-2xl bg-muted/30 border border-border/30 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
              <FlagCircle country={country} />
              <h3 className="text-base font-heading font-bold text-heading mt-4">{country.name}</h3>
              <p className="text-xs text-body leading-relaxed mt-2">{country.desc}</p>
              {country.offices && (
                <p className="text-xs text-primary font-medium mt-2">
                  Office: {country.offices}
                </p>
              )}
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection muted>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary animate-on-scroll">Industries We Supply</span>
            <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading mt-3 leading-tight animate-on-scroll">
              Serving Diverse{" "}
              <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
                Industries Worldwide
              </span>
            </h2>
            <div className="space-y-4 mt-6">
              {INDUSTRIES.map((ind) => (
                <div key={ind.name} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border/30 animate-on-scroll">
                  <div className="shrink-0 text-center">
                    <span className="text-lg font-heading font-bold text-primary">{ind.count}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-heading">{ind.name}</h3>
                    <p className="text-xs text-body mt-0.5">{ind.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/5 to-primary-accent/5 flex items-center justify-center order-1 lg:order-2">
            <div className="text-center p-8">
              <div className="size-20 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Factory className="size-10" />
              </div>
              <p className="text-sm text-body/70">Industries Served</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading leading-tight animate-on-scroll">
            Want to Become Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
              Global Partner
            </span>
            ?
          </h2>
          <p className="text-body mt-4 mb-8 animate-on-scroll">
            We are always looking to expand our reach. Contact us to discuss distribution partnerships or direct supply.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-primary-accent text-white font-semibold text-sm rounded-full hover:opacity-90 transition-opacity hover:scale-105 active:scale-95 animate-on-scroll"
          >
            Contact Our Team
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
