import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center" : ""}>
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={`mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl ${
          isCenter ? "mx-auto max-w-3xl" : "max-w-3xl"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-pretty text-[15px] leading-7 text-slate-600 sm:text-base ${
            isCenter ? "mx-auto max-w-3xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

