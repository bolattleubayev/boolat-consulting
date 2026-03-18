import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center" : ""}>
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-[0.20em] text-navy">
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={`mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl ${
          isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-pretty text-[15px] leading-7 text-slate-600 sm:text-base ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

