"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Logo from "./Logo";

const PHONE_DISPLAY = "+44 (0)7507 112 497";
const PHONE_TEL = "+447507112497";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    children: [
      { href: "/temporary-accommodation", label: "Temporary Accommodation" },
      { href: "/supported-accommodation", label: "Supported Accommodation" },
    ],
  },
  { href: "/investors", label: "Investors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isSubmitProperty = pathname === "/submit-property";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  if (isSubmitProperty) {
    return (
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-grey-mid">
        <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between">
          <Logo />
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 bg-periwinkle hover:bg-periwinkle-dark text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Call us</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-grey-mid">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button className="flex items-center gap-1 text-[0.875rem] font-medium text-charcoal hover:text-periwinkle transition-colors">
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-white border border-grey-mid rounded-xl shadow-xl py-2 min-w-[260px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-3 text-sm text-charcoal hover:bg-periwinkle-faint hover:text-periwinkle-deep transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className={`text-[0.875rem] font-medium transition-colors ${
                  pathname === link.href
                    ? "text-periwinkle"
                    : "text-charcoal hover:text-periwinkle"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${PHONE_TEL}`}
            className="text-[0.875rem] font-medium text-charcoal hover:text-periwinkle transition-colors"
          >
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/submit-property"
            className="bg-periwinkle hover:bg-periwinkle-dark text-white text-[0.875rem] font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            For Landlords
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="lg:hidden flex items-center gap-1">
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label="Call us"
            className="p-2.5 text-charcoal hover:text-periwinkle transition-colors"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 text-charcoal"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-grey-mid bg-white">
          <nav className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between py-3 text-sm font-medium text-charcoal"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 flex flex-col gap-1 pb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-2.5 text-sm text-grey-text hover:text-periwinkle transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={`py-3 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-periwinkle"
                      : "text-charcoal hover:text-periwinkle"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/submit-property"
              className="mt-3 bg-periwinkle hover:bg-periwinkle-dark text-white text-sm font-semibold px-5 py-3 rounded-full text-center transition-colors"
            >
              For Landlords
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
