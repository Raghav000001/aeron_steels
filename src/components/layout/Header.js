"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Quality", href: "/quality" },
  { label: "Media & Press", href: "/media-press" },
  { label: "Our Presence", href: "/our-presence" },
];

const PRODUCT_LINKS = [
  { label: "Carbon Steel Strips", href: "/products/carbon-steel-strips" },
  { label: "Hardened & Tempered Steel", href: "/products/hardened-tempered-steel" },
  { label: "CRCA Steel", href: "/products/crca-steel" },
];

export default function Header() {
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 60;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-dark/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <span className="text-2xl font-heading font-bold tracking-tight text-white transition-colors duration-300">
              AERON <span className="text-primary-accent">STEELS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-primary-accent"
              >
                {link.label}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-white/90 transition-colors hover:text-primary-accent">
                Products
                <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="absolute -top-4 left-0 right-0 h-4" />
                <div className="bg-primary-dark/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10 py-2 min-w-64">
                  {PRODUCT_LINKS.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="block px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-primary-accent transition-colors"
                    >
                      {product.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={`hidden lg:inline-flex transition-all duration-300 ${
                scrolled
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <Button className="bg-gradient-to-r from-primary to-primary-accent text-white hover:opacity-90 rounded-full px-6">
                Contact Us
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-primary-dark border-l-white/10 p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
                    <span className="text-xl font-heading font-bold text-white">
                      AERON <span className="text-primary-accent">STEELS</span>
                    </span>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                        <X className="size-6" />
                      </Button>
                    </SheetTrigger>
                  </div>

                  <nav className="flex flex-col px-6 py-8 gap-1">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="py-3 text-base text-white/90 hover:text-primary-accent border-b border-white/10 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}

                    <div className="py-3 border-b border-white/10">
                      <span className="text-sm font-semibold text-primary-accent uppercase tracking-wider">
                        Products
                      </span>
                      <div className="flex flex-col mt-2 gap-2">
                        {PRODUCT_LINKS.map((product) => (
                          <Link
                            key={product.href}
                            href={product.href}
                            className="py-1.5 text-sm text-white/80 hover:text-primary-accent transition-colors"
                          >
                            {product.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <Link href="/contact">
                        <Button className="w-full bg-gradient-to-r from-primary to-primary-accent text-white hover:opacity-90 rounded-full">
                          Contact Us
                        </Button>
                      </Link>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
