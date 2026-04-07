import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  HomeIcon,
  Briefcase,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TrustStrip from "@/components/TrustStrip";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-grey-cream overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(123,143,219,0.15)_1px,transparent_0)] [background-size:32px_32px] opacity-60" />
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-periwinkle/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 pt-20 md:pt-32 pb-24 md:pb-36">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white border border-grey-mid rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-periwinkle animate-pulse" />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-charcoal">
                Operating across the UK
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-charcoal leading-[0.95] mb-8 tracking-tight">
              Housing that works.
              <br />
              <span className="text-periwinkle">For councils.</span>
              <br />
              <span className="text-periwinkle">For landlords.</span>
              <br />
              <span className="text-periwinkle">For people.</span>
            </h1>
            <p className="text-lg md:text-xl text-grey-text leading-relaxed mb-10 max-w-2xl">
              A managed housing operator delivering temporary accommodation, supported housing, and guaranteed rent agreements across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/submit-property"
                className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-periwinkle text-white font-semibold py-4 px-7 rounded-full transition-all text-sm group"
              >
                I have a property
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-periwinkle-faint text-charcoal font-semibold py-4 px-7 rounded-full transition-all text-sm border border-grey-mid"
              >
                Speak to us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Wide architectural band */}
      <section className="relative w-full h-[44vh] min-h-[340px] max-h-[600px] overflow-hidden">
        <Image
          src="/images/wide-1.webp"
          alt="Managed property"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-5 pb-10 md:pb-14 w-full">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-periwinkle" />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-white">
                Real properties. Real management.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        {/* decorative diagonal-line pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #1f2024 0, #1f2024 1px, transparent 0, transparent 18px)",
          }}
        />
        {/* corner blur accents */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-periwinkle/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-periwinkle/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5">
          <div className="max-w-3xl mb-16">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
              What we do
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
              Three services. Run by one team.
            </h2>
            <p className="text-grey-text text-lg leading-relaxed max-w-2xl">
              Whether you are a council placing a household, an investor looking for stable returns, or a landlord wanting your property managed properly, we operate to the same standard across all three.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <ServiceCard
              icon={Briefcase}
              label="For Councils"
              title="Temporary Accommodation"
              description="Compliant, ready to occupy accommodation for housing options teams. Available through framework, PSL, and nightly rate."
              href="/temporary-accommodation"
            />
            <ServiceCard
              icon={HomeIcon}
              label="For Tenants"
              title="Supported Accommodation"
              description="Fully managed shared housing with bills included and one to one support throughout the tenancy."
              href="/supported-accommodation"
            />
            <ServiceCard
              icon={Building2}
              label="For Landlords"
              title="Guaranteed Rent"
              description="Long term agreements with rent paid every month, occupied or not. We take on the tenants, the maintenance, and the regulation."
              href="/submit-property"
            />
          </div>
        </div>
      </section>

      {/* Our Approach with imagery */}
      <section className="bg-grey-cream py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image collage */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="grid grid-cols-5 grid-rows-6 gap-4 h-[500px] md:h-[640px]">
                <div className="col-span-3 row-span-6 relative rounded-2xl overflow-hidden shadow-[0_30px_80px_-30px_rgba(31,32,36,0.3)]">
                  <Image
                    src="/images/exterior-2.jpg"
                    alt="Exterior of a managed property"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="col-span-2 row-span-3 row-start-2 relative rounded-2xl overflow-hidden shadow-[0_30px_80px_-30px_rgba(31,32,36,0.3)]">
                  <Image
                    src="/images/interior-2.webp"
                    alt="Interior of a managed property"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                </div>
                <div className="col-span-2 row-span-2 row-start-5 relative rounded-2xl overflow-hidden bg-charcoal flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="font-display text-3xl font-extrabold text-periwinkle mb-1">UK</div>
                    <div className="text-xs text-white/70 uppercase tracking-wider">National reach</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
                Our approach
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
                A team that has been doing this for years.
              </h2>
              <div className="space-y-5 text-grey-text leading-relaxed">
                <p>
                  Managed housing is unglamorous work. Properties to inspect, tenancies to supervise, partners to update, calls to return. We treat that as the job, not as friction to be optimised away.
                </p>
                <p>
                  The result is a portfolio that holds up, partners who do not have to chase us, and tenants who have a phone number that works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Investors teaser, split with image */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-charcoal rounded-3xl overflow-hidden relative">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-periwinkle/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-periwinkle/10 blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Copy side */}
              <div className="lg:col-span-7 p-10 md:p-14 lg:p-16 flex flex-col justify-center">
                <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle">
                  For investors
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-[1.02]">
                  Stable returns.
                  <br />
                  Hands off.
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
                  We work with investors who want above market yields without running a portfolio. You hold the asset and the upside. We do everything else.
                </p>
                <div>
                  <Link
                    href="/investors"
                    className="inline-flex items-center gap-2 bg-periwinkle hover:bg-periwinkle-dark text-white font-semibold py-4 px-7 rounded-full transition-all text-sm group"
                  >
                    Explore investor partnerships
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Image side */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[480px]">
                <Image
                  src="/images/exterior-1.webp"
                  alt="Modern property exterior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-charcoal/40 lg:bg-gradient-to-r lg:from-charcoal/40 lg:to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip, tinted card with periwinkle gradient edge */}
      <section className="bg-grey-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5">
          <div className="relative bg-white rounded-3xl p-10 md:p-16 lg:p-20 text-center border border-grey-mid overflow-hidden">
            {/* gradient edge accents */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-periwinkle to-transparent" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-periwinkle/5 blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="inline-flex w-14 h-14 rounded-2xl bg-periwinkle-light items-center justify-center mb-7">
                <TrendingUp className="w-6 h-6 text-periwinkle-deep" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-[1.05]">
                Have a property to let?
              </h2>
              <p className="text-grey-text text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Get a guaranteed rent quote in under 24 hours. No void periods, no tenant issues, no chasing rent.
              </p>
              <Link
                href="/submit-property"
                className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-periwinkle text-white font-semibold py-4 px-8 rounded-full transition-all text-sm group"
              >
                Submit your property
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
