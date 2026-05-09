import { ShieldCheck, Check } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";

export const metadata = {
  title: "Quality Assurance | Aeron Steels",
  description:
    "Aeron Steels is ISO 9001 certified. Our rigorous quality control ensures every steel strip meets international standards including IS, AISI, DIN, and JIS.",
};

const CERTIFICATIONS = [
  { name: "ISO 9001:2015", desc: "Quality management systems certified for manufacturing and supply of steel strips." },
  { name: "IS Standards", desc: "Compliance with Indian Standard specifications for carbon and alloy steel strips." },
  { name: "AISI Standards", desc: "Products manufactured to American Iron and Steel Institute specifications." },
  { name: "DIN Standards", desc: "German Institute for Standardization compliance for precision steel products." },
  { name: "JIS Standards", desc: "Japanese Industrial Standards met for export-grade steel strips." },
  { name: "ASTM Standards", desc: "American Society for Testing and Materials compliance on select product ranges." },
];

const STAGES = [
  { step: "01", title: "Raw Material Inspection", desc: "Incoming steel coils are tested for chemical composition, hardness, and surface quality before acceptance." },
  { step: "02", title: "In-Process Quality Control", desc: "Continuous monitoring during slitting, rolling, and processing ensures dimensional accuracy at every stage." },
  { step: "03", title: "Mechanical Testing", desc: "Tensile strength, yield strength, elongation, and hardness tests conducted on every production batch." },
  { step: "04", title: "Dimensional Verification", desc: "Precision measurement of thickness, width, edge condition, and flatness using calibrated instruments." },
  { step: "05", title: "Surface Inspection", desc: "Visual and automated inspection for surface defects, rust, scratches, and edge burrs." },
  { step: "06", title: "Final Approval & Dispatch", desc: "Batch is approved only after all parameters meet customer specifications and internal quality benchmarks." },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        title="Quality Assurance"
        subtitle="Every steel strip we deliver meets rigorous quality standards. Our commitment to precision is backed by ISO certification and comprehensive testing."
        breadcrumbs={[{ label: "Quality" }]}
      />

      <AnimatedSection muted>
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary animate-on-scroll">Our Commitment</span>
          <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading mt-3 leading-tight animate-on-scroll">
            Quality is Not Just a Department,{" "}
            <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
              It&apos;s Our Culture
            </span>
          </h2>
          <p className="text-body mt-4 max-w-2xl mx-auto leading-relaxed animate-on-scroll">
            At Aeron Steels, quality is embedded in every process — from raw material selection to final dispatch.
            Our ISO 9001:2015 certified quality management system ensures consistency and traceability.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/10 to-primary-accent/10 flex items-center justify-center order-2 lg:order-1 animate-on-scroll">
            <div className="text-center p-8">
              <div className="size-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ShieldCheck className="size-10" />
              </div>
              <p className="text-sm text-body/70">ISO 9001:2015 Certified</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary animate-on-scroll">Why Quality Matters</span>
            <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading mt-3 leading-tight animate-on-scroll">
              Rigorous Testing at{" "}
              <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
                Every Stage
              </span>
            </h2>
            <p className="text-body mt-4 leading-relaxed animate-on-scroll">
              Our in-house laboratory is equipped with advanced testing equipment including Universal Testing
              Machines, spectrometers, hardness testers, and surface roughness testers. Every batch undergoes
              comprehensive testing to ensure it meets or exceeds customer specifications.
            </p>
            <p className="text-body mt-3 leading-relaxed animate-on-scroll">
              We maintain full traceability from raw material receipt to final dispatch, with detailed
              test certificates provided for every shipment.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection muted>
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary animate-on-scroll">Our Process</span>
          <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading mt-3 animate-on-scroll">6-Stage Quality Process</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STAGES.map((stage) => (
            <div key={stage.step} className="relative bg-white rounded-2xl p-8 shadow-sm border border-border/40 hover:shadow-lg transition-shadow animate-on-scroll">
              <span className="text-5xl font-heading font-bold text-primary/10 absolute top-4 right-6">{stage.step}</span>
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <Check className="size-6" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-heading mb-2 relative">{stage.title}</h3>
              <p className="text-sm text-body leading-relaxed relative">{stage.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary animate-on-scroll">Certifications</span>
          <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading mt-3 animate-on-scroll">Standards We Meet</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="flex items-start gap-4 p-6 rounded-xl bg-muted/50 border border-border/30 hover:bg-white hover:shadow-md transition-all animate-on-scroll">
              <div className="shrink-0 size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <h3 className="text-base font-heading font-bold text-heading">{cert.name}</h3>
                <p className="text-sm text-body mt-1 leading-relaxed">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection muted>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading leading-tight animate-on-scroll">
            Need Certified Steel for Your{" "}
            <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
              Application
            </span>
            ?
          </h2>
          <p className="text-body mt-4 mb-8 animate-on-scroll">
            Contact us with your specifications and our team will provide the right solution with complete quality documentation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-primary-accent text-white font-semibold text-sm rounded-full hover:opacity-90 transition-opacity hover:scale-105 active:scale-95 animate-on-scroll"
          >
            Request Quote
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
