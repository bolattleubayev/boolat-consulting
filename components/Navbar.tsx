import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/Button";

const links = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/dashboards", label: "Dashboards" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/8 bg-white/80 backdrop-blur">
      <Container className="flex h-[4.5rem] items-center justify-between">
        <Link href="/" className="rounded-md focus-visible:outline-none">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group text-sm font-medium text-slate-700 transition-colors hover:text-slate-950"
            >
              <span className="relative">
                {l.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-navy/80 transition-all duration-200 group-hover:w-full" />
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/services"
            className="hidden text-sm font-medium text-slate-700 transition-colors hover:text-slate-950 md:inline-flex"
          >
            View work
          </Link>
          <ButtonLink href="/contact" variant="primary">
            Get in touch
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}

