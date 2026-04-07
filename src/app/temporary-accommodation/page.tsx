import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  FileCheck,
  Building2,
  Users,
  ArrowRight,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Temporary Accommodation for Local Authorities",
  description:
    "Compliant temporary accommodation for local authority housing teams. PSL, nightly rate, and framework call off contracts. Operating across the UK.",
};

const PHONE_DISPLAY = "+44 (0)7507 112 497";
const PHONE_TEL = "+447507112497";

const pillars = [
  {
    icon: Building2,
    title: "What we provide",
    body: "Self contained units, family homes, single person accommodation, and multi bedroom shared properties. Stock matched to the placement profile, prepared to local authority standards, ready for occupation.",
  },
  {
    icon: Users,
    title: "How we work",
    body: "We source properties from private landlords on long term lease arrangements, manage them in house, and make them available to housing options teams. Councils get usable stock without the operational lift.",
  },
  {
    icon: FileCheck,
    title: "How we contract",
    body: "Private Sector Leasing arrangements, nightly rate placements, and call off through framework procurement. Whatever route works for your team, we have the experience to deliver against it.",
  },
];

export default function TemporaryAccommodationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-grey-cream overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(123,143,219,0.15)_1px,transparent_0)] [background-size:32px_32px] opacity-60" />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-periwinkle/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 pt-20 md:pt-28 pb-20 md:pb-28">
          <div className="max-w-4xl">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
              For Local Authorities
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-charcoal mt-4 mb-8 leading-[0.98] tracking-tight">
              Temporary accommodation,
              <br />
              <span className="text-periwinkle">delivered properly.</span>
            </h1>
            <p className="text-lg md:text-xl text-grey-text leading-relaxed max-w-2xl">
              We work alongside housing options teams to provide compliant temporary accommodation for households who are homeless or threatened with homelessness. Stock that is ready when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage strip */}
      <section className="bg-charcoal text-white py-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-periwinkle mt-1 shrink-0" />
            <div>
              <h3 className="font-display font-semibold text-base mb-1">
                National coverage.
              </h3>
              <p className="text-sm text-white/60 max-w-xl leading-relaxed">
                We work with local authority housing teams across multiple regions and accept enquiries nationally.
              </p>
            </div>
          </div>
          <Link
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-periwinkle hover:bg-periwinkle-dark text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors"
          >
            Contact procurement
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-2xl mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal leading-[1.05] mb-4">
              A turnkey provider for housing options teams.
            </h2>
            <p className="text-grey-text leading-relaxed">
              Sourcing, preparation, compliance, tenancy management. All in house.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-grey-cream rounded-2xl p-7 md:p-8 border border-grey-mid"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-grey-mid flex items-center justify-center mb-6">
                  <p.icon className="w-5 h-5 text-periwinkle-deep" />
                </div>
                <h3 className="font-display font-bold text-charcoal text-xl mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-grey-text leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience block */}
      <section className="bg-grey-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
                Experience
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mt-3 leading-[1.05]">
                The team has been here before.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-grey-text leading-relaxed">
              <p>
                Our team has direct experience working within the temporary accommodation sector. Sourcing properties, preparing them to council standards, managing placements, and delivering through local authority procurement frameworks.
              </p>
              <p>
                The Housing Act 1996, the Homelessness Reduction Act 2017, and the compliance requirements councils need providers to meet are all familiar territory. We know the difference between a relief duty placement and a main duty placement, and we know what suitability looks like in practice.
              </p>
              <p>
                That experience means fewer surprises, faster turnaround, and stock that holds up to inspection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
                Get in touch
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
                Discuss your placement requirements.
              </h2>
              <p className="text-grey-text leading-relaxed mb-8">
                Whether you have an immediate need or want to add us to your provider list, we will respond within one working day.
              </p>
              <div className="space-y-4 mb-8">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-3 text-charcoal hover:text-periwinkle transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-periwinkle-light group-hover:bg-periwinkle group-hover:text-white flex items-center justify-center transition-colors">
                    <Phone className="w-4 h-4 text-periwinkle-deep group-hover:text-white" />
                  </span>
                  <span className="font-medium">{PHONE_DISPLAY}</span>
                </a>
                <a
                  href="mailto:info@intogreathousing.co.uk"
                  className="flex items-center gap-3 text-charcoal hover:text-periwinkle transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-periwinkle-light group-hover:bg-periwinkle group-hover:text-white flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4 text-periwinkle-deep group-hover:text-white" />
                  </span>
                  <span className="font-medium">info@intogreathousing.co.uk</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-grey-cream rounded-2xl p-7 md:p-10 border border-grey-mid">
                <ContactForm
                  showOrgFields
                  subject="Temporary Accommodation Enquiry"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
