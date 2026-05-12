import { Package, ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";

export const metadata = {
  title: "Products | Aeron Steels",
  description:
    "Explore Aeron Steels' range of precision-engineered steel strips: carbon steel strips, hardened & tempered steel, and CRCA steel.",
};

const PRODUCTS = [
  {
    slug: "carbon-steel-strips",
    title: "Low / Medium / High Carbon Steel Strips",
    summary: "Versatile carbon steel strips for automotive, industrial, and general manufacturing applications. Available in a wide range of grades and dimensions.",
    grades: "C10 to C80",
    thickness: "0.20 mm to 3.00 mm",
    width: "10 mm to 300 mm",
    applications: ["Automotive components", "Springs and washers", "Cutting tools", "Blades and knives", "Hardware fasteners"],
  },
  {
    slug: "hardened-tempered-steel",
    title: "Hardened & Tempered Steel Strips",
    summary: "Precision heat-treated steel strips offering superior hardness, wear resistance, and dimensional stability for demanding applications.",
    grades: "C40 to 1095",
    thickness: "0.10 mm to 3.00 mm",
    width: "10 mm to 300 mm",
    applications: ["Spring manufacturing", "Shims and spacers", "Lock components", "Seat belt springs", "Wiper blades"],
  },
  {
    slug: "crca-steel",
    title: "Cold Rolled Close Annealed (CRCA) Steel",
    summary: "High-quality cold rolled steel with excellent surface finish, dimensional accuracy, and formability for deep drawing and complex forming operations.",
    grades: "DC01 to DC06, EDD",
    thickness: "0.30 mm to 3.00 mm",
    width: "500 mm to 1250 mm",
    applications: ["Automotive body panels", "Home appliances", "Furniture manufacturing", "Electrical enclosures", "Deep drawing components"],
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Precision-engineered steel strips manufactured to international standards. Explore our complete product range."
        breadcrumbs={[{ label: "Products" }]}
      />

      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase animate-on-scroll">Product Range</span>
          <h2 className="text-3xl md:text-[40px] font-heading font-bold text-white mt-3 uppercase tracking-tighter animate-on-scroll">
            Steel Strips for Every Application
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto animate-on-scroll">
            Our product portfolio covers low, medium, and high carbon steel strips, hardened and tempered steel,
            and CRCA steel — serving automotive, electrical, construction, and manufacturing industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group relative flex flex-col rounded-2xl glass-panel hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-on-scroll"
            >
              <div className="h-0.5 bg-gradient-to-r from-primary to-transparent" />
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="size-14 rounded-xl glass-panel text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Package className="size-7" />
                </div>
                <h3 className="text-lg md:text-xl font-heading font-bold text-white group-hover:text-primary transition-colors mb-3">
                  {product.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed flex-1 mb-6">{product.summary}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-white/70">Grades:</span>
                    <span className="text-on-surface-variant">{product.grades}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-white/70">Thickness:</span>
                    <span className="text-on-surface-variant">{product.thickness}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-white/70">Width:</span>
                    <span className="text-on-surface-variant">{product.width}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {product.applications.slice(0, 3).map((app) => (
                    <span key={app} className="px-2.5 py-1 bg-white/5 border border-white/10 font-mono text-[10px] text-primary tracking-wider uppercase rounded-full">
                      {app}
                    </span>
                  ))}
                  {product.applications.length > 3 && (
                    <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-on-surface-variant/50 text-[10px] rounded-full">
                      +{product.applications.length - 3}
                    </span>
                  )}
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-white transition-colors mt-auto font-mono text-xs tracking-wider uppercase">
                  View Details
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection muted>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-heading font-bold text-white leading-tight uppercase tracking-tighter animate-on-scroll">
            Can&apos;t Find What You&apos;re Looking{" "}
            <span className="text-primary italic">For</span>?
          </h2>
          <p className="text-on-surface-variant mt-4 mb-8 animate-on-scroll">
            We also manufacture custom specifications based on your requirements. Contact our team for a tailored solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-primary hover:bg-red-600 text-white font-mono text-xs rounded-lg transition-all active:scale-95 shadow-[0_0_20px_rgba(239,68,68,0.3)] tracking-wider uppercase animate-on-scroll"
          >
            Request Custom Quote
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
