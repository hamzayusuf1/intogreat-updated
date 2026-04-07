import { ShieldCheck, Settings, Landmark, Handshake } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "10 point compliance",
    text: "Every property certified, inspected, insured.",
  },
  {
    icon: Settings,
    title: "Fully managed",
    text: "From referral and viewing to move out.",
  },
  {
    icon: Landmark,
    title: "Framework experience",
    text: "Direct work with local authority procurement teams.",
  },
  {
    icon: Handshake,
    title: "Long term partners",
    text: "Landlord and investor relationships built to last.",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-white py-16 md:py-20 border-y border-grey-mid">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {items.map((item) => (
            <div key={item.title}>
              <div className="w-11 h-11 rounded-xl bg-periwinkle-light flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-periwinkle-deep" />
              </div>
              <h3 className="font-display font-semibold text-charcoal text-base mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-grey-text leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
