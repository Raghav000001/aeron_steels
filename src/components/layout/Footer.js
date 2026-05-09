import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const FOOTER_NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
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
    <footer className="bg-[#091c2d]">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-heading font-bold text-white">
                AERON <span className="text-primary-accent">STEELS</span>
              </span>
            </Link>
            <p className="text-[#92adca] text-sm leading-relaxed max-w-sm mb-6">
              India&apos;s trusted manufacturer and exporter of premium steel strips,
              delivering precision-engineered solutions to industries worldwide for over 42 years.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+919818223471"
                className="flex items-center gap-3 text-[#92adca] hover:text-primary-accent transition-colors text-sm"
              >
                <Phone className="size-4 shrink-0" />
                +91 98182 23471
              </a>
              <a
                href="mailto:sales@aeronsteels.com"
                className="flex items-center gap-3 text-[#92adca] hover:text-primary-accent transition-colors text-sm"
              >
                <Mail className="size-4 shrink-0" />
                sales@aeronsteels.com
              </a>
              <div className="flex items-center gap-3 text-[#92adca] text-sm">
                <MapPin className="size-4 shrink-0" />
                <span>India</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/aeronsteels"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center size-9 rounded-full border border-[#748290]/40 text-[#92adca] hover:bg-primary hover:border-primary hover:text-white transition-all"
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
            <h4 className="text-white font-heading font-semibold text-base mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#92adca] hover:text-primary-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-heading font-semibold text-base mb-5">
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {PRODUCT_CATEGORIES.map((product) => (
                <li key={product.href}>
                  <Link
                    href={product.href}
                    className="text-[#92adca] hover:text-primary-accent transition-colors text-sm"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Presence */}
          <div>
            <h4 className="text-white font-heading font-semibold text-base mb-5">
              Our Presence
            </h4>
            <ul className="flex flex-col gap-3">
              {PRESENCE_COUNTRIES.map((country) => (
                <li key={country} className="text-[#92adca] text-sm">
                  {country}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* SEO Footer Section */}
      <div className="border-t border-[#748290]/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-none text-sm leading-relaxed text-[#92adca]">
            <p className="mb-4">
              <strong className="text-[#b3c5d8]">Aeron Steels</strong> is a leading{" "}
              <strong className="text-[#b3c5d8]">manufacturer and exporter of steel strips</strong>{" "}
              based in India, specializing in{" "}
              <strong className="text-[#b3c5d8]">carbon steel strips</strong>,{" "}
              <strong className="text-[#b3c5d8]">hardened and tempered steel strips</strong>, and{" "}
              <strong className="text-[#b3c5d8]">cold rolled close annealed (CRCA) steel</strong>.
            </p>
            <p className="mb-4">
              With over <strong className="text-[#b3c5d8]">42 years of experience</strong> in the
              steel industry, we serve a wide range of sectors including{" "}
              <strong className="text-[#b3c5d8]">automotive</strong>,{" "}
              <strong className="text-[#b3c5d8]">electrical</strong>,{" "}
              <strong className="text-[#b3c5d8]">construction</strong>, and{" "}
              <strong className="text-[#b3c5d8]">manufacturing</strong>. Our product range covers{" "}
              low carbon steel, medium carbon steel, high carbon steel strips, spring steel strips,
              blue tempered steel strips, and precision cold rolled steel coils.
            </p>
            <p>
              We are committed to delivering{" "}
              <strong className="text-[#b3c5d8]">precision-engineered steel solutions</strong> that
              meet international quality standards including IS, AISI, DIN, and JIS. Our state-of-the-art
              manufacturing facility, rigorous quality control processes, and dedicated customer support
              have made us a preferred <strong className="text-[#b3c5d8]">steel strip supplier</strong>{" "}
              for clients across <strong className="text-[#b3c5d8]">India, UAE, USA, Germany, Japan</strong>,
              and other global markets.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-[#748290]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#92adca] text-xs">
              &copy; {new Date().getFullYear()} Aeron Steels. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy-policy"
                className="text-[#92adca] hover:text-primary-accent text-xs transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#92adca] hover:text-primary-accent text-xs transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
