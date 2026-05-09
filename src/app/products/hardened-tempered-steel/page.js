import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";

export const metadata = {
  title: "Hardened & Tempered Steel Strips | Aeron Steels",
  description:
    "Precision heat-treated steel strips with hardness 25-60 HRC. Grades C40 to 1095, thickness 0.10-3.00 mm. Ideal for springs, shims, and lock components.",
};

const PRODUCT = {
  title: "Hardened & Tempered Steel Strips",
  subtitle: "Precision heat-treated strips offering superior hardness, wear resistance, and dimensional stability.",
  imageAlt: "Hardened and tempered steel strips",
  specs: [
    { label: "Grades", value: "C40, C50, C60, C70, C75, C80, 1075, 1095" },
    { label: "Thickness", value: "0.10 mm to 3.00 mm" },
    { label: "Width", value: "10 mm to 300 mm" },
    { label: "Temper", value: "Half Hard, Full Hard, Spring Temper" },
    { label: "Surface", value: "Blue Tempered, Bright, Matte" },
    { label: "Hardness", value: "25 HRC to 60 HRC" },
    { label: "Tensile Strength", value: "1000 to 2000 MPa" },
    { label: "Flatness", value: "Precision Level" },
    { label: "Packaging", value: "Oil Coated, Export Worthy" },
    { label: "Standards", value: "IS, AISI, DIN, JIS" },
  ],
  applications: [
    "Spring manufacturing — coil springs, leaf springs, clip springs",
    "Shims, spacers, and precision gaskets",
    "Lock components and security hardware",
    "Seat belt and automotive safety mechanisms",
    "Wiper blade support strips",
    "Industrial cutting and scraping tools",
  ],
  features: [
    {
      title: "Uniform Hardness",
      desc: "Consistent hardness across the entire strip length and width ensures predictable performance in critical applications.",
    },
    {
      title: "Excellent Edge Quality",
      desc: "Precision slit edges with minimal burr, reducing tool wear and ensuring safe handling.",
    },
    {
      title: "Dimensional Stability",
      desc: "Heat treatment process ensures minimal distortion and excellent flatness for precision components.",
    },
    {
      title: "Surface Finish Options",
      desc: "Available in blue tempered, bright, and matte finishes to suit different application requirements.",
    },
  ],
};

export default function HardenedTemperedPage() {
  return (
    <>
      <PageHero
        title="Hardened & Tempered Steel Strips"
        subtitle="Precision heat-treated steel strips with superior hardness and wear resistance for demanding applications."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Hardened & Tempered Steel" },
        ]}
      />

      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary animate-on-scroll">Product Overview</span>
            <h1 className="text-3xl md:text-[35px] font-heading font-bold text-heading mt-3 leading-tight animate-on-scroll">
              {PRODUCT.title}
            </h1>
            <p className="text-body mt-4 leading-relaxed animate-on-scroll">{PRODUCT.subtitle}</p>

            <div className="mt-8 space-y-3">
              {PRODUCT.specs.map((spec) => (
                <div key={spec.label} className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-border last:border-0 animate-on-scroll">
                  <span className="text-sm font-semibold text-heading w-44 shrink-0">{spec.label}</span>
                  <span className="text-sm text-body">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/10 to-primary-accent/10 flex items-center justify-center animate-on-scroll">
            <div className="text-center p-8">
              <div className="mx-auto mb-4 size-20 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="size-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <p className="text-sm text-body/70">{PRODUCT.imageAlt}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection muted>
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary animate-on-scroll">Key Features</span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading mt-3 animate-on-scroll">Why Choose Our H&amp;T Steel Strips</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PRODUCT.features.map((f) => (
            <div key={f.title} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-border/40 shadow-sm animate-on-scroll">
              <div className="shrink-0 size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-heading font-bold text-heading mb-1">{f.title}</h3>
                <p className="text-sm text-body leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading mb-6 animate-on-scroll">Applications</h2>
            <ul className="space-y-3">
              {PRODUCT.applications.map((app) => (
                <li key={app} className="flex items-start gap-3 animate-on-scroll">
                  <svg className="size-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-body">{app}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/5 to-primary-accent/5 flex items-center justify-center animate-on-scroll">
            <div className="text-center p-8">
              <div className="size-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <svg className="size-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-sm text-body/70">Precision Engineered</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection muted>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading leading-tight animate-on-scroll">
            Need Hardened &amp; Tempered{" "}
            <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
              Steel Strips
            </span>
            ?
          </h2>
          <p className="text-body mt-4 mb-8 animate-on-scroll">
            Contact us for detailed specifications, pricing, and technical support for your application.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-primary-accent text-white font-semibold text-sm rounded-full hover:opacity-90 transition-opacity hover:scale-105 active:scale-95 animate-on-scroll"
            >
              Get a Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary font-semibold text-sm rounded-full hover:bg-primary hover:text-white transition-all hover:scale-105 active:scale-95 animate-on-scroll"
            >
              View All Products
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
