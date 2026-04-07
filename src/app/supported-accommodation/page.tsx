import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, Home, Sofa, Heart } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";

export const metadata: Metadata = {
  title: "Supported Accommodation",
  description:
    "Fully managed shared housing for tenants with support needs. Furnished, bills included, with regular one to one support throughout the tenancy.",
};

const PHONE_DISPLAY = "+44 (0)7507 112 497";
const PHONE_TEL = "+447507112497";

const features = [
  {
    icon: Sofa,
    title: "Furnished and bills included",
    body: "Properties furnished to a high standard. Utilities, council tax, and broadband all covered. Tenants move in and start living.",
  },
  {
    icon: Heart,
    title: "One to one support",
    body: "Each resident receives consistent support to maintain their tenancy and build independence over time.",
  },
  {
    icon: Home,
    title: "Properly run shared housing",
    body: "Communal spaces maintained. House rules in place. Residents respected.",
  },
];

const referralSources = [
  "Managing agents",
  "Support organisations",
  "Local authority housing teams",
  "Partner agencies",
];

export default function SupportedAccommodationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-grey-cream overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(123,143,219,0.15)_1px,transparent_0)] [background-size:32px_32px] opacity-60" />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-periwinkle/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 pt-20 md:pt-28 pb-20 md:pb-28">
          <div className="max-w-4xl">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
              Supported Housing
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-charcoal mt-4 mb-8 leading-[0.98] tracking-tight">
              Supported accommodation,
              <br />
              <span className="text-periwinkle">that actually supports.</span>
            </h1>
            <p className="text-lg md:text-xl text-grey-text leading-relaxed max-w-2xl">
              Fully managed shared housing for tenants who need it. Furnished, bills included, with regular one to one support throughout the tenancy.
            </p>
          </div>
        </div>
      </section>

      {/* Features with image */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-[0_40px_100px_-30px_rgba(31,32,36,0.4)]">
                <Image
                  src="/images/interior-supported.jpg"
                  alt="Interior of a supported accommodation property"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
                What we provide
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mt-3 mb-10 leading-[1.05]">
                Homes that hold up. Tenancies that last.
              </h2>

              <div className="space-y-5">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="flex gap-5 bg-grey-cream rounded-2xl p-6 md:p-7 border border-grey-mid"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white border border-grey-mid flex items-center justify-center shrink-0">
                      <f.icon className="w-5 h-5 text-periwinkle-deep" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-charcoal text-lg mb-1.5">
                        {f.title}
                      </h3>
                      <p className="text-sm text-grey-text leading-relaxed">
                        {f.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our approach with image */}
      <section className="bg-grey-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
                Our approach
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
                Run as homes. Not as units.
              </h2>
              <div className="space-y-5 text-grey-text leading-relaxed">
                <p>
                  We have been running supported accommodation for years. Every property is set up properly, every tenancy is managed by a team that picks up the phone, and every resident has someone to call.
                </p>
                <p>The basics, done consistently.</p>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[5/4] w-full rounded-3xl overflow-hidden shadow-[0_40px_100px_-30px_rgba(31,32,36,0.4)]">
                <Image
                  src="/images/exterior-3.jpg"
                  alt="Exterior of a supported accommodation property"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real impact video */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-10 md:mb-12">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
              Real impact
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mt-3 leading-[1.05]">
              See the work in action.
            </h2>
            <p className="text-grey-text leading-relaxed mt-4 max-w-xl mx-auto">
              A short look at the support we provide and the homes we run.
            </p>
          </div>
          <VideoEmbed videoId="mHcZvge2Szw" title="Intogreat Housing support work" />
        </div>
      </section>

      {/* Referrals */}
      <section className="py-20 md:py-28 bg-grey-cream">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
                Referrals
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mt-3 leading-[1.05]">
                Who we work with.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-grey-text leading-relaxed mb-8">
                We accept referrals from organisations placing tenants who would benefit from a managed shared house with support.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {referralSources.map((source) => (
                  <div
                    key={source}
                    className="bg-grey-cream border border-grey-mid rounded-xl px-5 py-4 font-medium text-charcoal text-sm"
                  >
                    {source}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 md:py-28 bg-white border-t border-grey-mid">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-5 leading-[1.05]">
            Make a referral or ask a question.
          </h2>
          <p className="text-grey-text leading-relaxed mb-8">
            Get in touch and we will get back to you the same day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-periwinkle text-white font-semibold py-3.5 px-7 rounded-full transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
            <a
              href="mailto:info@intogreathousing.co.uk"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-periwinkle-faint text-charcoal font-semibold py-3.5 px-7 rounded-full border border-grey-mid transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              info@intogreathousing.co.uk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
