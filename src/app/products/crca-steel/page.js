import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";

export const metadata = {
  title: "CRCA Steel Strips | Aeron Steels",
  description:
    "Cold Rolled Close Annealed (CRCA) steel strips. Grades DC01 to DC06, EDD. Thickness 0.30-3.00 mm, width up to 1250 mm. Excellent formability for deep drawing.",
};

const PRODUCT = {
  title: "Cold Rolled Close Annealed (CRCA) Steel",
  subtitle: "High-quality cold rolled steel with superior surface finish, tight dimensional tolerances, and excellent formability.",
  imageAlt: "CRCA steel coils",
  specs: [
    { label: "Grades", value: "DC01, DC03, DC04, DC06, EDD" },
    { label: "Thickness", value: "0.30 mm to 3.00 mm" },
    { label: "Width", value: "500 mm to 1250 mm" },
    { label: "Form", value: "Coils, Sheets, Slit Coils" },
    { label: "Surface", value: "Bright, Matt, Skin Passed" },
    { label: "Hardness", value: "Annealed / Soft Temper" },
    { label: "Elongation", value: "28% to 40%" },
    { label: "Coil Weight", value: "Up to 10,000 kg" },
    { label: "Packaging", value: "Export Worthy Packaging" },
    { label: "Standards", value: "IS, DIN, JIS, EN" },
  ],
  applications: [
    "Automotive body panels and structural components",
    "Home appliances — washing machines, refrigerators, ovens",
    "Furniture manufacturing — office and home furniture",
    "Electrical enclosures and control panels",
    "Deep drawing components — sinks, containers, automotive parts",
    "White goods and consumer electronics enclosures",
  ],
  advantages: [
    {
      title: "Superior Surface Finish",
      desc: "Bright, clean surface ideal for painting, powder coating, and plating applications.",
    },
    {
      title: "Excellent Formability",
      desc: "High elongation values enable complex deep drawing and forming operations without cracking.",
    },
    {
      title: "Tight Dimensional Control",
      desc: "Precise thickness and width tolerances ensure consistency in high-volume production.",
    },
    {
      title: "Consistent Mechanical Properties",
      desc: "Uniform hardness and tensile properties across the coil ensure predictable forming behavior.",
    },
  ],
};

export default function CRCASteelPage() {
  return (
    <>
      <PageHero
        title="Cold Rolled Close Annealed (CRCA) Steel"
        subtitle="Premium quality CRCA steel with excellent surface finish and formability for demanding applications."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "CRCA Steel" },
        ]}
      />

      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase animate-on-scroll">Product Overview</span>
            <h1 className="text-3xl md:text-[35px] font-heading font-bold text-white mt-3 leading-tight animate-on-scroll">
              {PRODUCT.title}
            </h1>
            <p className="text-on-surface-variant mt-4 leading-relaxed animate-on-scroll">{PRODUCT.subtitle}</p>

            <div className="mt-8 space-y-3">
              {PRODUCT.specs.map((spec) => (
                <div key={spec.label} className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-border last:border-0 animate-on-scroll">
                  <span className="text-sm font-semibold text-white w-44 shrink-0">{spec.label}</span>
                  <span className="text-sm text-on-surface-variant">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-panel flex items-center justify-center animate-on-scroll">
            <div className="text-center p-8">
              <div className="mx-auto mb-4 size-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <svg className="size-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <p className="text-sm text-on-surface-variant/70">{PRODUCT.imageAlt}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection muted>
        <div className="text-center mb-12">
          <span className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase animate-on-scroll">Key Advantages</span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mt-3 animate-on-scroll">Why Choose Our CRCA Steel</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PRODUCT.advantages.map((adv) => (
            <div key={adv.title} className="flex items-start gap-4 p-6 rounded-2xl glass-panel animate-on-scroll">
              <div className="shrink-0 size-12 rounded-xl bg-white/5 border border-white/10 text-primary flex items-center justify-center">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-heading font-bold text-white mb-1">{adv.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6 animate-on-scroll">Applications</h2>
            <ul className="space-y-3">
              {PRODUCT.applications.map((app) => (
                <li key={app} className="flex items-start gap-3 animate-on-scroll">
                  <svg className="size-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-on-surface-variant">{app}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-panel flex items-center justify-center animate-on-scroll">
            <div className="text-center p-8">
              <div className="size-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                <svg className="size-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <p className="text-sm text-on-surface-variant/70">Premium CRCA Steel</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection muted>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-[35px] font-heading font-bold text-white leading-tight animate-on-scroll">
            Need CRCA Steel for Your{" "}
            <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
              Manufacturing
            </span>
            ?
          </h2>
          <p className="text-on-surface-variant mt-4 mb-8 animate-on-scroll">
            Get in touch for pricing, technical specifications, and sample requests.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-primary hover:bg-red-600 text-white font-mono text-xs rounded-lg tracking-wider uppercase transition-all active:scale-95 shadow-[0_0_20px_rgba(239,68,68,0.3)] animate-on-scroll"
            >
              Get a Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-3 border border-white/20 text-primary hover:bg-primary hover:text-white font-mono text-xs rounded-lg tracking-wider uppercase transition-all active:scale-95 animate-on-scroll"
            >
              View All Products
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
