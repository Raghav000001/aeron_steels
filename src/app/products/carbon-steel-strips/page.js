import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";

export const metadata = {
  title: "Carbon Steel Strips | Aeron Steels",
  description:
    "High-quality low, medium, and high carbon steel strips. Grades C10 to C80, thickness 0.20-3.00 mm, width 10-300 mm. ISO 9001 certified.",
};

const PRODUCT = {
  title: "Low / Medium / High Carbon Steel Strips",
  subtitle: "Versatile steel strips for diverse industrial applications, manufactured to international quality standards.",
  imageAlt: "Carbon steel strips coil",
  specs: [
    { label: "Grades", value: "C10, C20, C30, C40, C50, C60, C70, C80" },
    { label: "Thickness", value: "0.20 mm to 3.00 mm" },
    { label: "Width", value: "10 mm to 300 mm" },
    { label: "Form", value: "Cold Rolled, Slit Edge, Mill Edge" },
    { label: "Hardness", value: "Annealed to Full Hard" },
    { label: "Surface Finish", value: "Bright, Matte, Silver" },
    { label: "Tolerance", value: "+/- 0.02 mm" },
    { label: "Coil Weight", value: "Up to 5,000 kg" },
    { label: "Packaging", value: "Wooden Pallet / Export Worthy" },
    { label: "Tensile Strength", value: "350 MPa to 1200 MPa" },
    { label: "Standards", value: "IS, AISI, DIN, JIS, ASTM" },
  ],
  applications: [
    "Automotive components — springs, washers, brackets",
    "Cutting tools and industrial blades",
    "Hardware fasteners and lock components",
    "General engineering and fabricated parts",
    "Agricultural machinery components",
    "Hand tools and power tool accessories",
  ],
  industries: [
    { name: "Automotive", pct: "35%" },
    { name: "General Manufacturing", pct: "30%" },
    { name: "Construction", pct: "15%" },
    { name: "Electrical", pct: "10%" },
    { name: "Others", pct: "10%" },
  ],
};

export default function CarbonSteelStripsPage() {
  return (
    <>
      <PageHero
        title="Carbon Steel Strips"
        subtitle="Low, medium, and high carbon steel strips for automotive, industrial, and manufacturing applications."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Carbon Steel Strips" },
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-body/70">Carbon Steel Strips</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection muted>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading mb-6 animate-on-scroll">
              Applications
            </h2>
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
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading mb-6 animate-on-scroll">
              Industry Usage
            </h2>
            <div className="space-y-4">
              {PRODUCT.industries.map((ind) => (
                <div key={ind.name} className="animate-on-scroll">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="font-medium text-heading">{ind.name}</span>
                    <span className="text-primary font-semibold">{ind.pct}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary-accent rounded-full"
                      style={{ width: ind.pct }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-[35px] font-heading font-bold text-heading leading-tight animate-on-scroll">
            Need Carbon Steel Strips for Your{" "}
            <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
              Application
            </span>
            ?
          </h2>
          <p className="text-body mt-4 mb-8 animate-on-scroll">
            Contact our team for specifications, pricing, and availability. We deliver precision, every time.
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
