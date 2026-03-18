import Link from "next/link";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="bg-white">
      <Container className="py-20 sm:py-28">
        <div className="rounded-3xl border border-slate-900/10 bg-surface p-10">
          <div className="text-xs font-semibold uppercase tracking-[0.20em] text-navy">
            404
          </div>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Page not found.
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-slate-600">
            The page you’re looking for doesn’t exist, or it may have moved.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/" variant="primary">
              Go home
            </ButtonLink>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-slate-700 ring-1 ring-slate-900/10 hover:bg-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

