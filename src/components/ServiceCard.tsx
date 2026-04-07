import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

export default function ServiceCard({
  icon: Icon,
  label,
  title,
  description,
  href,
}: {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative bg-white border border-grey-mid rounded-2xl p-7 md:p-8 hover:border-periwinkle hover:shadow-[0_20px_50px_-20px_rgba(123,143,219,0.4)] transition-all duration-300 flex flex-col"
    >
      <div className="flex items-start justify-between mb-8">
        <div className="w-12 h-12 rounded-xl bg-periwinkle-light flex items-center justify-center group-hover:bg-periwinkle group-hover:text-white transition-colors">
          <Icon className="w-5 h-5 text-periwinkle-deep group-hover:text-white transition-colors" />
        </div>
        <ArrowUpRight className="w-5 h-5 text-grey-mid group-hover:text-periwinkle group-hover:rotate-12 transition-all" />
      </div>

      <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-periwinkle-deep mb-2">
        {label}
      </span>
      <h3 className="font-display text-xl font-bold text-charcoal mb-3 leading-tight">
        {title}
      </h3>
      <p className="text-sm text-grey-text leading-relaxed">{description}</p>
    </Link>
  );
}
