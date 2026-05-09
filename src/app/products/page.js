import { Image, ArrowRight } from "lucide-react";
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
    color: "#2678be",
  },
  {
    slug: "hardened-tempered-steel",
    title: "Hardened & Tempered Steel Strips",
    summary: "Precision heat-treated steel strips offering superior hardness, wear resistance, and dimensional stability for demanding applications.",
    grades: "C40 to 1095",
    thickness: "0.10 mm to 3.00 mm",
    width: "10 mm to 300 mm",
    applications: ["Spring manufacturing", "Shims and spacers", "Lock components", "Seat belt springs", "Wiper blades"],
    color: "#00cfff",
  },
  {
    slug: "crca-steel",
    title: "Cold Rolled Close Annealed (CRCA) Steel",
    summary: "High-quality cold rolled steel with excellent surface finish, dimensional accuracy, and formability for deep drawing and complex forming operations.",
    grades: "DC01 to DC06, EDD",
    thickness: "0.30 mm to 3.00 mm",
    width: "500 mm to 1250 mm",
    applications: ["Automotive body panels", "Home appliances", "Furniture manufacturing", "Electrical enclosures", "Deep drawing components"],
    color: "#001b34",
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
          <span className="animate-on-scroll text-sm font-semibold uppercase tracking-widest text-primary">Product Range</span>
          <h2 className="animate-on-scroll text-3xl md:text-[35px] font-heading font-bold text-heading mt-3">
            Steel Strips for Every Application
          </h2>
          <p className="animate-on-scroll text-body mt-4 max-w-2xl mx-auto">
            Our product portfolio covers low, medium, and high carbon steel strips, hardened and tempered steel,
            and CRCA steel — serving automotive, electrical, construction, and manufacturing industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="animate-on-scroll group relative flex flex-col rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="h-1.5" style={{ backgroundColor: product.color }} />
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="size-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Image className="size-7" />
                </div>
                <h3 className="text-lg md:text-xl font-heading font-bold text-heading group-hover:text-primary transition-colors mb-3">
                  {product.title}
                </h3>
                <p className="text-sm text-body leading-relaxed flex-1 mb-6">{product.summary}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-heading">Grades:</span>
                    <span className="text-body">{product.grades}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-heading">Thickness:</span>
                    <span className="text-body">{product.thickness}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-heading">Width:</span>
                    <span className="text-body">{product.width}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {product.applications.slice(0, 3).map((app) => (
                    <span key={app} className="px-2.5 py-1 bg-primary/5 text-primary text-[10px] rounded-full">
                      {app}
                    </span>
                  ))}
                  {product.applications.length > 3 && (
                    <span className="px-2.5 py-1 bg-muted text-muted-foreground text-[10px] rounded-full">
                      +{product.applications.length - 3}
                    </span>
                  )}
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-primary-accent transition-colors mt-auto">
                  View Full Details
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection muted>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="animate-on-scroll text-3xl md:text-[35px] font-heading font-bold text-heading leading-tight">
            Can&apos;t Find What You&apos;re Looking{" "}
            <span className="bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
              For
            </span>
            ?
          </h2>
          <p className="animate-on-scroll text-body mt-4 mb-8">
            We also manufacture custom specifications based on your requirements. Contact our team for a tailored solution.
          </p>
          <Link
            href="/contact"
            className="animate-on-scroll inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-primary-accent text-white font-semibold text-sm rounded-full hover:opacity-90 transition-opacity hover:scale-105 active:scale-95"
          >
            Request Custom Quote
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
