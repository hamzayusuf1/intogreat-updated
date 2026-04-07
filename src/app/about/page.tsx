import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Intogreat Housing is a managed housing provider delivering accommodation for local authorities, landlords, and investors across the UK.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-grey-cream overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(123,143,219,0.15)_1px,transparent_0)] [background-size:32px_32px] opacity-60" />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-periwinkle/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 pt-20 md:pt-28 pb-20 md:pb-28">
          <div className="max-w-4xl">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-charcoal mt-4 mb-8 leading-[0.98] tracking-tight">
              A managed housing
              <br />
              <span className="text-periwinkle">provider, not a portal.</span>
            </h1>
            <p className="text-lg md:text-xl text-grey-text leading-relaxed max-w-2xl">
              Intogreat Housing is a managed housing provider delivering accommodation for local authorities, landlords, and investors. Operational, accountable, and built to last.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
                What we do
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mt-3 leading-[1.05]">
                Three audiences. One operating standard.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-grey-text leading-relaxed">
              <p>
                We operate across three service lines. Temporary accommodation for local authority housing options teams. Supported accommodation for tenants with support needs. And property management with guaranteed rent for private landlords and investors.
              </p>
              <p>
                Our approach is built on operational rigour. Every property maintained to a 10 point compliance standard. Every tenancy managed in house from referral to move out. Every landlord and investor partner kept in the loop with consistent, plain English communication.
              </p>
              <p>
                We work with local authority housing options teams, Registered Social Landlord partners, property investors, and private landlords. The team has direct experience in local authority procurement, housing benefit administration, property compliance, and tenancy management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work with image */}
      <section className="bg-grey-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-[5/4] w-full rounded-3xl overflow-hidden shadow-[0_40px_100px_-30px_rgba(31,32,36,0.4)]">
                <Image
                  src="/images/view-1.jpg"
                  alt="Birmingham"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
                How we operate
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
                Boring on purpose.
              </h2>
              <div className="space-y-5 text-grey-text leading-relaxed">
                <p>
                  Housing is unglamorous work. Boilers break. Tenants need a call back. Inspections do not schedule themselves. We treat that as the job, not as friction to be optimised away.
                </p>
                <p>
                  The result is a portfolio that holds up to inspection, partners who do not have to chase us, and tenants who can reach a person.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Address + CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-charcoal text-white rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-periwinkle/15 blur-3xl" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
                  <MapPin className="w-3.5 h-3.5 text-periwinkle" />
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-white/70">
                    Head Office
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.05] mb-4">
                  38a Meriden Street
                  <br />
                  Birmingham, B5 5LS
                </h2>
                <p className="text-white/60 leading-relaxed max-w-md">
                  Working with partners across the UK.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-periwinkle hover:bg-periwinkle-dark text-white font-semibold py-4 px-7 rounded-full transition-colors text-sm group"
                >
                  Get in touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
