import { Award, Shield, Lightbulb, Handshake, Building2 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";

export const metadata = {
  title: "About Us | Aeron Steels",
  description:
    "With 42+ years of excellence, Aeron Steels is India's trusted manufacturer and exporter of carbon steel strips, hardened & tempered steel, and CRCA steel.",
};

const MILESTONES = [
  { year: "1982", title: "Foundation", description: "Aeron Steels established as a small steel processing unit in India." },
  { year: "1995", title: "Export Expansion", description: "Began exports to UAE and Middle East markets, marking global entry." },
  { year: "2005", title: "New Facility", description: "State-of-the-art manufacturing facility commissioned with advanced rolling mills." },
  { year: "2012", title: "ISO 9001 Certified", description: "Achieved ISO 9001:2008 certification for quality management systems." },
  { year: "2018", title: "Capacity Expansion", description: "Annual production capacity crossed 8,000 MT with new product lines." },
  { year: "2023", title: "Global Reach", description: "10,000+ MT annual capacity, serving clients across 15+ countries worldwide." },
];

const TEAM = [
  { name: "Rajesh Mehta", role: "Managing Director", desc: "42+ years of industry leadership and strategic vision." },
  { name: "Vikram Singh", role: "Head of Operations", desc: "Oversees manufacturing, quality control, and supply chain." },
  { name: "Sunil Gupta", role: "Head of Exports", desc: "Driving global expansion and international client relationships." },
  { name: "Anita Patel", role: "Quality Assurance Head", desc: "Ensuring compliance with international quality standards." },
];

const VALUES = [
  { title: "Quality First", desc: "Every product undergoes rigorous testing to meet IS, AISI, DIN, and JIS standards.", icon: "Award" },
  { title: "Reliability", desc: "Consistent on-time delivery and dependable supply chain for uninterrupted operations.", icon: "Shield" },
  { title: "Innovation", desc: "Continuous process improvement and investment in modern manufacturing technology.", icon: "Lightbulb" },
  { title: "Customer Focus", desc: "Dedicated support from inquiry to delivery, building long-term partnerships.", icon: "Handshake" },
];

function MilestoneCard({ milestone, index }) {
  const isLeft = index % 2 === 0;
  return (
    <div
      className={`relative flex flex-col ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } items-start md:items-center gap-6 md:gap-12 group animate-on-scroll`}
    >
      <div
        className={`flex-1 pl-12 md:pl-0 ${
          isLeft ? "md:text-right" : "md:text-left"
        }`}
      >
        <span className="text-4xl font-heading font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
          {milestone.year}
        </span>
        <h3 className="text-xl font-heading font-bold text-heading mt-1">
          {milestone.title}
        </h3>
        <p className="text-body text-sm mt-2 leading-relaxed">
          {milestone.description}
        </p>
      </div>
      <div className="absolute left-[9px] md:static md:shrink-0 z-10">
        <div className="size-5 rounded-full border-4 border-primary bg-white shadow-sm" />
      </div>
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

function ValueIcon({ name }) {
  const icons = { Award, Shield, Lightbulb, Handshake };
  const Icon = icons[name] || Award;
  return <Icon className="size-6" />;
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Aeron Steels"
        subtitle="With over 42 years of excellence, we are India's trusted manufacturer and exporter of premium steel strips."
        breadcrumbs={[{ label: "About Us" }]}
      />

      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary animate-on-scroll">Our Story</span>
            <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading mt-3 leading-tight animate-on-scroll">
              Four Decades of{" "}
              <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
                Steel Excellence
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-body leading-relaxed animate-on-scroll">
              <p>
                Founded in 1982, Aeron Steels began as a modest steel processing unit with a vision to deliver quality
                steel strips to Indian manufacturers. What started small quickly grew as our commitment to precision
                and reliability earned the trust of leading automotive and industrial companies.
              </p>
              <p>
                Over the decades, we have evolved into a state-of-the-art manufacturing facility equipped with
                advanced rolling mills, precision slitting lines, and comprehensive quality testing laboratories.
                Our product range spans low, medium, and high carbon steel strips, hardened and tempered steel,
                and cold rolled close annealed (CRCA) steel.
              </p>
              <p>
                Today, Aeron Steels exports to over 15 countries across Asia, Europe, and North America, serving
                diverse industries including automotive, electrical, construction, and general manufacturing.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/10 to-primary-accent/10 flex items-center justify-center animate-on-scroll">
            <div className="text-center p-8">
              <div className="size-20 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Building2 className="size-10" />
              </div>
              <p className="text-sm text-body/70">Manufacturing Facility</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection muted>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative p-10 rounded-2xl bg-white shadow-[0_20px_60px_-10px_rgba(0,0,0,0.08)] border border-border/40 animate-on-scroll">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-accent rounded-t-2xl" />
            <h3 className="text-2xl font-heading font-bold text-heading mb-4">Our Mission</h3>
            <p className="text-body leading-relaxed">
              To deliver precision-engineered steel solutions that exceed customer expectations through
              continuous innovation, uncompromising quality, and sustainable manufacturing practices.
            </p>
          </div>
          <div className="relative p-10 rounded-2xl bg-white shadow-[0_20px_60px_-10px_rgba(0,0,0,0.08)] border border-border/40 animate-on-scroll">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-accent rounded-t-2xl" />
            <h3 className="text-2xl font-heading font-bold text-heading mb-4">Our Vision</h3>
            <p className="text-body leading-relaxed">
              To be a globally recognized leader in steel strip manufacturing, setting benchmarks for quality,
              reliability, and customer satisfaction across every market we serve.
            </p>
          </div>
        </div>
      </AnimatedSection>

      
      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Journey</span>
          <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading mt-3">Key Milestones</h2>
        </div>
        <div className="relative max-w-3xl mx-auto">
          {/* Desktop: center line | Mobile: left line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-12 relative">
            {MILESTONES.map((milestone, i) => (
              <MilestoneCard key={milestone.year} milestone={milestone} index={i} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection muted>
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</span>
          <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading mt-3">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v) => (
            <div key={v.title} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] transition-shadow animate-on-scroll">
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <ValueIcon name={v.icon} />
              </div>
              <h3 className="text-lg font-heading font-semibold text-heading mb-2">{v.title}</h3>
              <p className="text-sm text-body leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Leadership</span>
          <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading mt-3">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <div key={member.name} className="text-center p-6 rounded-2xl bg-muted/50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-border/30 animate-on-scroll">
              <div className="mx-auto size-20 rounded-full bg-gradient-to-br from-primary to-primary-accent flex items-center justify-center text-white text-2xl font-heading font-bold mb-4">
                {member.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="text-lg font-heading font-bold text-heading">{member.name}</h3>
              <p className="text-sm text-primary font-medium mt-0.5">{member.role}</p>
              <p className="text-xs text-body mt-2 leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection muted>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading leading-tight animate-on-scroll">
            Ready to Partner with{" "}
            <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
              Aeron Steels
            </span>
            ?
          </h2>
          <p className="text-body mt-4 mb-8 animate-on-scroll">
            Get in touch with our team to discuss your steel requirements. We deliver precision, every time.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-primary-accent text-white font-semibold text-sm rounded-full hover:opacity-90 transition-opacity hover:scale-105 active:scale-95 animate-on-scroll"
          >
            Get In Touch
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
