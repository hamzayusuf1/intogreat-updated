import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Building, Briefcase, TrendingUp } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Intogreat Housing. Property submissions, local authority enquiries, and investor partnerships. Available seven days a week.",
};

const PHONE_DISPLAY = "+44 (0)7507 112 497";
const PHONE_TEL = "+447507112497";

const quickLinks = [
  {
    icon: Building,
    label: "Submit a property",
    sub: "For landlords seeking guaranteed rent",
    href: "/submit-property",
  },
  {
    icon: Briefcase,
    label: "Local authority enquiry",
    sub: "TA placements and procurement",
    href: "/temporary-accommodation",
  },
  {
    icon: TrendingUp,
    label: "Investor enquiry",
    sub: "Partnerships and managed assets",
    href: "/investors",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-grey-cream overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(123,143,219,0.15)_1px,transparent_0)] [background-size:32px_32px] opacity-60" />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-periwinkle/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 pt-20 md:pt-28 pb-16 md:pb-20">
          <div className="max-w-3xl">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
              Contact
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-charcoal mt-4 mb-6 leading-[0.98] tracking-tight">
              Get in touch.
            </h1>
            <p className="text-lg md:text-xl text-grey-text leading-relaxed max-w-2xl">
              Send us a message, give us a call, or use one of the shortcuts below to reach the right team faster.
            </p>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-white py-12 md:py-16 border-y border-grey-mid">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-grey-cream hover:bg-white border border-grey-mid hover:border-periwinkle rounded-2xl p-6 transition-all flex items-center gap-4"
              >
                <span className="w-11 h-11 rounded-xl bg-white border border-grey-mid group-hover:bg-periwinkle group-hover:border-periwinkle flex items-center justify-center transition-colors shrink-0">
                  <link.icon className="w-5 h-5 text-periwinkle-deep group-hover:text-white transition-colors" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold text-charcoal text-sm">
                    {link.label}
                  </div>
                  <div className="text-xs text-grey-text mt-0.5">{link.sub}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-grey-text group-hover:text-periwinkle group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Details */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-8 leading-[1.05]">
                Speak to the team.
              </h2>

              <div className="space-y-5">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-start gap-4 group"
                >
                  <span className="w-11 h-11 rounded-xl bg-periwinkle-light group-hover:bg-periwinkle flex items-center justify-center transition-colors shrink-0">
                    <Phone className="w-5 h-5 text-periwinkle-deep group-hover:text-white transition-colors" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-grey-text font-semibold mb-1">
                      Phone
                    </div>
                    <div className="font-display font-semibold text-charcoal text-lg group-hover:text-periwinkle transition-colors">
                      {PHONE_DISPLAY}
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@intogreathousing.co.uk"
                  className="flex items-start gap-4 group"
                >
                  <span className="w-11 h-11 rounded-xl bg-periwinkle-light group-hover:bg-periwinkle flex items-center justify-center transition-colors shrink-0">
                    <Mail className="w-5 h-5 text-periwinkle-deep group-hover:text-white transition-colors" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-grey-text font-semibold mb-1">
                      Email
                    </div>
                    <div className="font-display font-semibold text-charcoal text-lg group-hover:text-periwinkle transition-colors">
                      info@intogreathousing.co.uk
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <span className="w-11 h-11 rounded-xl bg-periwinkle-light flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-periwinkle-deep" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-grey-text font-semibold mb-1">
                      Office
                    </div>
                    <div className="font-display font-semibold text-charcoal text-lg leading-snug">
                      38a Meriden Street
                      <br />
                      Birmingham, B5 5LS
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-grey-cream rounded-2xl p-7 md:p-10 border border-grey-mid">
                <h3 className="font-display text-xl font-bold text-charcoal mb-1">
                  Send a message
                </h3>
                <p className="text-sm text-grey-text mb-6">
                  We respond within one working day.
                </p>
                <ContactForm subject="General Enquiry" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
