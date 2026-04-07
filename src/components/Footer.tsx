import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { SocialIcons } from "./SocialIcons";
import Logo from "./Logo";

const PHONE_DISPLAY = "+44 (0)7507 112 497";
const PHONE_TEL = "+447507112497";

const services = [
  { href: "/temporary-accommodation", label: "Temporary Accommodation" },
  { href: "/supported-accommodation", label: "Supported Accommodation" },
  { href: "/submit-property", label: "Guaranteed Rent" },
  { href: "/investors", label: "Investor Partnerships" },
];

const company = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white mt-0">
      <div className="max-w-7xl mx-auto px-5 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand block */}
          <div className="md:col-span-5">
            <Logo variant="light" />
            <p className="text-sm text-white/60 leading-relaxed mt-6 max-w-sm">
              Managed housing for local authorities, landlords, and investors across the UK.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-periwinkle shrink-0 mt-0.5" />
                <span>38a Meriden Street, Birmingham, B5 5LS</span>
              </div>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-periwinkle shrink-0" />
                {PHONE_DISPLAY}
              </a>
              <a
                href="mailto:info@intogreathousing.co.uk"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-periwinkle shrink-0" />
                info@intogreathousing.co.uk
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="font-display font-semibold text-[0.75rem] uppercase tracking-[0.18em] text-white/40 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-periwinkle transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="font-display font-semibold text-[0.75rem] uppercase tracking-[0.18em] text-white/40 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-periwinkle transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h3 className="font-display font-semibold text-[0.75rem] uppercase tracking-[0.18em] text-white/40 mb-5">
              Follow
            </h3>
            <SocialIcons />
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Intogreat Housing. All rights reserved.</p>
          <p>United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}
