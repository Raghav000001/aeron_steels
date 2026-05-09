import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";

export const metadata = {
  title: "Media & Press | Aeron Steels",
  description:
    "Aeron Steels featured in leading news outlets and industry publications. Read our press coverage, news, and industry insights.",
};

const PRESS_COVERAGE = [
  {
    outlet: "ET Now",
    date: "March 2026",
    title: "Aeron Steels Expands Global Footprint with New Manufacturing Line",
    snippet: "Aeron Steels announces a significant expansion of its manufacturing capacity with a new state-of-the-art production line for precision steel strips.",
    url: "#",
    accent: "#dc2626",
    category: "Business",
  },
  {
    outlet: "Mint",
    date: "January 2026",
    title: "How Indian Steel Manufacturers Are Winning Global Markets",
    snippet: "With quality matching international standards, Indian steel strip manufacturers like Aeron Steels are becoming preferred suppliers worldwide.",
    url: "#",
    accent: "#059669",
    category: "Industry",
  },
  {
    outlet: "The Hindu BusinessLine",
    date: "November 2025",
    title: "MSME Success Story: Aeron Steels' Four-Decade Journey in Steel",
    snippet: "From a small processing unit to a global exporter — the inspiring journey of Aeron Steels in the Indian steel manufacturing landscape.",
    url: "#",
    accent: "#1e40af",
    category: "Success Story",
  },
  {
    outlet: "Times of India",
    date: "August 2025",
    title: "Delhi-NCR Based Steel Exporter Sees 40% Growth in Export Orders",
    snippet: "Aeron Steels reports robust growth in export orders from automotive and industrial sectors across Europe and North America.",
    url: "#",
    accent: "#b91c1c",
    category: "Business",
  },
  {
    outlet: "Manufacturing Today",
    date: "June 2025",
    title: "Quality First: Aeron Steels' Approach to Precision Manufacturing",
    snippet: "An in-depth look at the quality processes and testing protocols that set Aeron Steels apart in the competitive steel strips market.",
    url: "#",
    accent: "#0891b2",
    category: "Industry",
  },
  {
    outlet: "The Pioneer",
    date: "April 2025",
    title: "Indian Steel Strips Gaining Traction in European Automotive Sector",
    snippet: "European automakers increasingly turn to Indian suppliers like Aeron Steels for high-quality carbon steel and hardened & tempered strips.",
    url: "#",
    accent: "#7c3aed",
    category: "Industry",
  },
  {
    outlet: "CNX",
    date: "February 2025",
    title: "Aeron Steels Receives Excellence Award for Export Performance",
    snippet: "Recognized for outstanding contribution to India's steel exports, Aeron Steels receives industry excellence award at national forum.",
    url: "#",
    accent: "#be185d",
    category: "Awards",
  },
  {
    outlet: "Impact",
    date: "December 2024",
    title: "Innovation in Steel Processing: Aeron Steels Adopts Green Technology",
    snippet: "Aeron Steels invests in energy-efficient manufacturing processes, reducing carbon footprint while maintaining production quality.",
    url: "#",
    accent: "#2563eb",
    category: "Innovation",
  },
  {
    outlet: "APN News",
    date: "October 2024",
    title: "Made in India: Aeron Steels Supplies Critical Components to Global Auto Giants",
    snippet: "How an Indian steel manufacturer became a key supplier to some of the world's largest automotive companies.",
    url: "#",
    accent: "#ea580c",
    category: "Business",
  },
];

const OUTLETS = [
  { name: "ET Now", url: "https://www.etnownews.com", color: "#dc2626" },
  { name: "Mint", url: "https://www.livemint.com", color: "#059669" },
  { name: "The Hindu", url: "https://www.thehindu.com", color: "#1e40af" },
  { name: "Times of India", url: "https://timesofindia.indiatimes.com", color: "#b91c1c" },
  { name: "The Pioneer", url: "https://www.dailypioneer.com", color: "#7c3aed" },
  { name: "Manufacturing Today", url: "#", color: "#0891b2" },
  { name: "CNX", url: "#", color: "#be185d" },
  { name: "Impact", url: "#", color: "#2563eb" },
  { name: "Akashvani", url: "#", color: "#d97706" },
  { name: "APN News", url: "#", color: "#ea580c" },
];

export default function MediaPressPage() {
  return (
    <>
      <PageHero
        title="Media & Press"
        subtitle="Stay updated with the latest news, press releases, and industry insights from Aeron Steels. Featured in leading national and international publications."
        breadcrumbs={[{ label: "Media & Press" }]}
      />

      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Press Coverage</span>
          <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading mt-3">
            Latest News &amp; Updates
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRESS_COVERAGE.map((item, i) => (
            <a
              key={i}
              href={item.url}
              className="group flex flex-col rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-on-scroll"
            >
              <div className="h-1" style={{ backgroundColor: item.accent }} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-white px-2.5 py-1 rounded-full" style={{ backgroundColor: item.accent }}>
                    {item.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="text-base font-heading font-bold text-heading group-hover:text-primary transition-colors leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-body leading-relaxed flex-1">
                  {item.snippet}
                </p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/40">
                  <span className="text-xs font-semibold" style={{ color: item.accent }}>
                    {item.outlet}
                  </span>
                  <ArrowRight className="size-3.5 text-muted-foreground ml-auto" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection muted>
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Featured In</span>
          <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading mt-3">Media Outlets</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 animate-on-scroll">
          {OUTLETS.map((outlet) => (
            <a
              key={outlet.name}
              href={outlet.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center h-24 rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-on-scroll"
            >
              <span className="text-sm font-heading font-bold tracking-wide px-3 text-center" style={{ color: outlet.color }}>
                {outlet.name}
              </span>
            </a>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading leading-tight animate-on-scroll">
            Want to Feature Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
              Story
            </span>
            ?
          </h2>
          <p className="text-body mt-4 mb-8 animate-on-scroll">
            For media inquiries, interview requests, or press kits, please reach out to our communications team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-primary-accent text-white font-semibold text-sm rounded-full hover:opacity-90 transition-opacity hover:scale-105 active:scale-95 animate-on-scroll"
          >
            Media Inquiries
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
