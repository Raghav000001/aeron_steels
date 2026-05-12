"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

const PRODUCT_LINKS = [
  { label: "Carbon Steel Strips", href: "/products/carbon-steel-strips" },
  { label: "Hardened & Tempered Steel", href: "/products/hardened-tempered-steel" },
  { label: "CRCA Steel", href: "/products/crca-steel" },
];

export default function Header() {
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 60;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6">
      <nav
        className={`glass-nav rounded-full flex items-center justify-between gap-4 sm:gap-12 transition-all duration-500 ease-out ${
          scrolled
            ? "w-full max-w-7xl mx-4 sm:mx-6 lg:mx-8 px-4 sm:px-8 py-2.5 sm:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "max-w-4xl mx-auto px-4 sm:px-8 py-2.5 sm:py-3 shadow-2xl"
        }`}
      >
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span
              style={{ fontFamily: "var(--font-space-grotesk)" }}
              className="text-xl sm:text-2xl font-bold tracking-tighter text-primary"
            >
              AERON
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-mono text-[11px] text-on-surface-variant hover:text-white transition-colors tracking-wider uppercase"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform shadow-[0_0_8px_#ef4444]" />
              </Link>
            ))}

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-mono text-[11px] text-on-surface-variant hover:text-white transition-colors tracking-wider uppercase">
                Products
                <ChevronDown className="size-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="absolute -top-3 left-0 right-0 h-3" />
                <div className="bg-[#0a0a0a]/95 backdrop-blur-md rounded-xl border border-white/10 py-2 min-w-56 shadow-2xl">
                  {PRODUCT_LINKS.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="block px-4 py-2.5 text-sm text-on-surface-variant hover:text-white hover:bg-white/5 transition-colors font-mono text-[11px] tracking-wider uppercase"
                    >
                      {product.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/contact" className="hidden md:block">
              <button className="bg-primary hover:bg-red-600 text-white font-mono text-[10px] px-5 py-2 rounded-full transition-all active:scale-95 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] tracking-wider uppercase">
                Get Quote
              </button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white hover:bg-white/10 rounded-full size-10"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0a0a0a] border-l border-white/10 p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
                    <span
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                      className="text-xl font-bold tracking-tighter text-primary"
                    >
                      AERON
                    </span>
                    <SheetTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/10 rounded-full size-10"
                      >
                        <X className="size-5" />
                      </Button>
                    </SheetTrigger>
                  </div>

                  <nav className="flex flex-col px-6 py-6 gap-2">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-3 font-mono text-sm text-on-surface-variant hover:text-white border-b border-white/5 transition-colors tracking-wider uppercase"
                      >
                        {link.label}
                      </Link>
                    ))}

                    <div className="py-3 border-b border-white/5">
                      <span className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase">
                        Products
                      </span>
                      <div className="flex flex-col mt-2 gap-1">
                        {PRODUCT_LINKS.map((product) => (
                          <Link
                            key={product.href}
                            href={product.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-2 font-mono text-xs text-on-surface-variant hover:text-white transition-colors tracking-wider uppercase"
                          >
                            {product.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <Link href="/contact" onClick={() => setMobileOpen(false)}>
                        <Button className="w-full bg-primary hover:bg-red-600 text-white font-mono text-xs rounded-full tracking-wider uppercase shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                          Get Quote
                        </Button>
                      </Link>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
    </header>
  );
}
