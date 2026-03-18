import Image from "next/image";

export function Logo({
  className = "",
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative size-7 overflow-hidden rounded-lg ring-1 ring-slate-900/10">
        <Image
          src="/assets/logos/logo-standalone.png"
          alt="boolat logo"
          fill
          sizes="28px"
          className="object-contain"
          priority
        />
      </span>
      {showWordmark ? (
        <span className="text-base font-semibold tracking-tight text-slate-950">
          boolat
        </span>
      ) : null}
    </span>
  );
}

