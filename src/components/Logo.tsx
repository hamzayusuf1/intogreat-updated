import Link from "next/link";

export default function Logo({
  variant = "dark",
  href = "/",
}: {
  variant?: "dark" | "light";
  href?: string | null;
}) {
  const charcoal = variant === "dark" ? "text-charcoal" : "text-white";
  const muted = variant === "dark" ? "text-grey-text" : "text-white/60";

  const inner = (
    <div className="flex items-center gap-2.5">
      <div className="font-display font-extrabold text-[1.55rem] leading-none tracking-tight flex items-baseline">
        <span className={charcoal}>IG</span>
        <span className="text-periwinkle">H</span>
      </div>
      <div className="hidden sm:flex flex-col leading-tight">
        <span
          className={`font-display font-semibold text-[0.7rem] tracking-[0.18em] uppercase ${charcoal}`}
        >
          Intogreat
        </span>
        <span
          className={`font-display font-medium text-[0.7rem] tracking-[0.18em] uppercase ${muted}`}
        >
          Housing
        </span>
      </div>
    </div>
  );

  if (!href) return inner;
  return (
    <Link href={href} className="inline-flex items-center group">
      {inner}
    </Link>
  );
}
