import Image from "next/image";

export function Logo({
  className = "",
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-3.5 ${className}`}>
      <span className="relative size-12">
        <Image
          src="/assets/logos/logo-standalone.png"
          alt="boolat logo"
          fill
          sizes="48px"
          className="object-contain"
          priority
        />
      </span>
      {showWordmark ? (
        <span className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          boolat
        </span>
      ) : null}
    </span>
  );
}

