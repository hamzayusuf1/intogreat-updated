import type { Metadata } from "next";
import { Handshake, MapPin, Clock, CheckCircle2 } from "lucide-react";
import PropertyForm from "@/components/PropertyForm";

export const metadata: Metadata = {
  title: "Guaranteed Rent for Landlords",
  description:
    "Get guaranteed rent on your property with Intogreat Housing. No void periods, no tenant issues, no compliance headaches. We handle everything.",
};

const PHONE_TEL = "+447507112497";
const PHONE_DISPLAY = "+44 (0)7507 112 497";

const pitchPoints = [
  "No void periods",
  "No tenant issues",
  "No chasing rent",
  "No compliance headaches",
];

export default function SubmitPropertyPage() {
  return (
    <section className="bg-grey-cream min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(123,143,219,0.15)_1px,transparent_0)] [background-size:32px_32px] opacity-50" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-periwinkle/10 blur-3xl" />

      <div className="relative max-w-2xl mx-auto px-5 py-10 md:py-16">
        {/* Headline */}
        <div className="text-center mb-8 md:mb-10">
          <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep">
            For Landlords
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-charcoal mt-4 mb-6 leading-[0.98] tracking-tight">
            Guaranteed rent.
            <br />
            <span className="text-periwinkle">No voids. No hassle.</span>
          </h1>
          <p className="text-base md:text-lg text-grey-text leading-relaxed max-w-xl mx-auto">
            We lease your property on a long term agreement and pay you every month, occupied or not. We take on the tenants, the compliance, and the regulation. You get paid.
          </p>
        </div>

        {/* Pitch points */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {pitchPoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-2 bg-white border border-grey-mid rounded-full px-3 py-2"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-periwinkle shrink-0" />
              <span className="text-[0.7rem] sm:text-xs font-medium text-charcoal">
                {point}
              </span>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white border border-grey-mid rounded-2xl p-6 md:p-9 shadow-[0_30px_80px_-30px_rgba(31,32,36,0.2)]">
          <h2 className="font-display text-xl font-bold text-charcoal mb-1">
            Get a quote
          </h2>
          <p className="text-sm text-grey-text mb-6">
            Six fields. Sixty seconds. We will call you back.
          </p>
          <PropertyForm />
        </div>

        {/* Trust signals */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { icon: MapPin, text: "Properties managed across the UK" },
            { icon: Handshake, text: "Long term landlord agreements" },
            { icon: Clock, text: "Team available seven days a week" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-start gap-2.5 bg-white/60 border border-grey-mid rounded-xl p-4"
            >
              <item.icon className="w-4 h-4 text-periwinkle-deep shrink-0 mt-0.5" />
              <span className="text-xs text-grey-text leading-snug">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Call CTA */}
        <p className="text-center text-sm text-grey-text mt-10">
          Prefer to talk?{" "}
          <a
            href={`tel:${PHONE_TEL}`}
            className="font-semibold text-periwinkle-deep hover:text-charcoal transition-colors"
          >
            Call {PHONE_DISPLAY}
          </a>
        </p>
      </div>
    </section>
  );
}
