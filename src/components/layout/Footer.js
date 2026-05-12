import Link from "next/link";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

const FOOTER_NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Certifications", href: "/certifications" },
  { label: "Quality", href: "/quality" },
  { label: "Media & Press", href: "/media-press" },
  { label: "Our Presence", href: "/our-presence" },
  { label: "Contact Us", href: "/contact" },
];

const PRODUCT_CATEGORIES = [
  { label: "Carbon Steel Strips", href: "/products/carbon-steel-strips" },
  { label: "Hardened & Tempered Steel", href: "/products/hardened-tempered-steel" },
  { label: "CRCA Steel", href: "/products/crca-steel" },
];

const PRESENCE_COUNTRIES = ["India", "UAE", "USA", "Germany", "Japan"];

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Industrial background overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #ffffff 1px, transparent 1px),
            repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px),
            repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px),
            radial-gradient(circle at 20% 80%, rgba(239,68,68,0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(239,68,68,0.03) 0%, transparent 50%)
          `,
        }}
      />
      <div className="grain-overlay absolute inset-0" />

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span
                style={{ fontFamily: "var(--font-space-grotesk)" }}
                className="text-3xl font-bold tracking-tighter text-primary"
              >
                AERON<span className="text-white italic">.</span>
              </span>
            </Link>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm mb-8">
              Forging the future of high-strength industrial steel since 1984.
              Precision-engineered solutions for global infrastructure.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+919818223471"
                className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors text-sm group"
              >
                <Phone className="size-4 shrink-0 group-hover:text-primary transition-colors" />
                +91 98182 23471
              </a>
              <a
                href="mailto:sales@aeronsteels.com"
                className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors text-sm group"
              >
                <Mail className="size-4 shrink-0 group-hover:text-primary transition-colors" />
                sales@aeronsteels.com
              </a>
              <div className="flex items-center gap-3 text-on-surface-variant text-sm">
                <MapPin className="size-4 shrink-0" />
                <span>India</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href="https://www.linkedin.com/company/aeronsteels"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center size-10 rounded-xl border border-white/10 text-on-surface-variant hover:bg-primary hover:border-primary hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-[10px] text-primary tracking-[0.2em] font-bold mb-6 uppercase">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant hover:text-white transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="size-3 text-primary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-mono text-[10px] text-primary tracking-[0.2em] font-bold mb-6 uppercase">
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {PRODUCT_CATEGORIES.map((product) => (
                <li key={product.href}>
                  <Link
                    href={product.href}
                    className="text-on-surface-variant hover:text-white transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="size-3 text-primary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Presence */}
          <div>
            <h4 className="font-mono text-[10px] text-primary tracking-[0.2em] font-bold mb-6 uppercase">
              Presence
            </h4>
            <ul className="flex flex-col gap-3">
              {PRESENCE_COUNTRIES.map((country) => (
                <li
                  key={country}
                  className="text-on-surface-variant text-sm flex items-center gap-2"
                >
                  <span className="size-1.5 rounded-full bg-primary/50" />
                  {country}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* SEO + Bottom Bar */}
      <div className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* SEO Text */}
          <div className="max-w-none text-xs leading-relaxed text-on-surface-variant/60">
            <p className="mb-3">
              <strong className="text-on-surface-variant/80">Aeron Steels</strong> is a leading
              manufacturer and exporter of premium steel strips based in India, specializing in
              carbon steel strips, hardened and tempered steel strips, and cold rolled close
              annealed (CRCA) steel.
            </p>
            <p className="mb-3">
              With over 42 years of metallurgical excellence, we serve automotive, electrical,
              construction, and manufacturing sectors worldwide. Our product range covers low
              carbon, medium carbon, high carbon steel strips, spring steel strips, blue tempered
              steel strips, and precision cold rolled steel coils.
            </p>
            <p>
              Committed to international quality standards including IS, AISI, DIN, and JIS.
              Trusted by clients across India, UAE, USA, Germany, and Japan.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Aeron Steels. Computational Material Science.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="font-mono text-[10px] text-on-surface-variant/50 hover:text-primary transition-colors uppercase tracking-widest"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="font-mono text-[10px] text-on-surface-variant/50 hover:text-primary transition-colors uppercase tracking-widest"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
