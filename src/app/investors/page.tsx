import type { Metadata } from "next";
import Image from "next/image";
import { TrendingUp, Shield, Building } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Property Investment Partnerships",
  description:
    "Partner with Intogreat Housing for stable, above market yields without the operational burden. We do the work. You hold the asset.",
};

const reasons = [
  {
    icon: TrendingUp,
    title: "Above market yields",
    body: "Long term agreements that comfortably beat standard buy to let on the same property.",
  },
  {
    icon: Shield,
    title: "Genuinely passive",
    body: "No tenants. No phone calls. No paperwork. We run the property end to end.",
  },
  {
    icon: Building,
    title: "You keep the asset",
    body: "Full ownership and capital appreciation retained. No equity given up.",
  },
];

export default function InvestorsPage() {
  return (
    <>
      {/* Hero with image */}
      <section className="relative bg-grey-cream overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(123,143,219,0.15)_1px,transparent_0)] [background-size:32px_32px] opacity-60" />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-periwinkle/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 pt-20 md:pt-28 pb-20 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
                For Investors
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-charcoal mt-4 mb-8 leading-[0.98] tracking-tight">
                Returns above buy to let.
                <br />
                <span className="text-periwinkle">Without the buy to let.</span>
              </h1>
              <p className="text-lg md:text-xl text-grey-text leading-relaxed max-w-xl">
                We work with investors who want stable, above market yields and zero operational involvement. You provide the property. We do the rest.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-[0_40px_100px_-30px_rgba(31,32,36,0.4)]">
                <Image
                  src="/images/exterior-1.webp"
                  alt="Modern property exterior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why partner with us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-2xl mb-14">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
              The partnership
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
              Hands off. By design.
            </h2>
            <p className="text-grey-text text-lg leading-relaxed">
              Most investors come to us because the maths beats buy to let on the same property and because they get their evenings back. We handle tenants, maintenance, and the day to day. Income arrives monthly. Ownership stays with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-grey-cream rounded-2xl p-7 md:p-8 border border-grey-mid hover:border-periwinkle hover:shadow-[0_20px_50px_-20px_rgba(123,143,219,0.4)] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-grey-mid flex items-center justify-center mb-6">
                  <r.icon className="w-5 h-5 text-periwinkle-deep" />
                </div>
                <h3 className="font-display font-bold text-charcoal text-xl mb-3">
                  {r.title}
                </h3>
                <p className="text-sm text-grey-text leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience block with image */}
      <section className="bg-grey-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[5/4] w-full rounded-3xl overflow-hidden shadow-[0_40px_100px_-30px_rgba(31,32,36,0.4)]">
                <Image
                  src="/images/interior-1.webp"
                  alt="Interior of a managed property"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
                Experience
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-6 leading-[1.05]">
                An established operator. Not a new entrant.
              </h2>
              <div className="space-y-5 text-grey-text leading-relaxed">
                <p>
                  We have been delivering managed housing for years. The team understands sourcing, regulation, tenancy management, and the operational discipline a portfolio actually needs.
                </p>
                <p>
                  That experience is what makes the income predictable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-12">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
              Speak to us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-5 leading-[1.05]">
              Let&apos;s talk.
            </h2>
            <p className="text-grey-text leading-relaxed">
              Send a short note about the property or partnership you are exploring. We respond within one working day.
            </p>
          </div>
          <div className="bg-grey-cream rounded-2xl p-7 md:p-10 border border-grey-mid">
            <ContactForm subject="Investor Enquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
