import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
              boolat partners with product and data teams to deliver reliable
              software, cloud foundations, and analytics you can trust.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-slate-950">
                Company
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <Link className="hover:text-slate-950" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-slate-950" href="/services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-slate-950" href="/case-studies">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-slate-950" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-950">
                Solutions
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <Link className="hover:text-slate-950" href="/dashboards">
                    Dashboards
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-slate-950" href="/services">
                    Reporting Automation
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-slate-950" href="/services">
                    Data Engineering
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-950">Legal</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="text-slate-600">© {new Date().getFullYear()}</li>
                <li className="text-slate-600">All rights reserved.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-900/10 pt-8 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Minimal. Secure. Built for long-term maintainability.</p>
          <p>
            Based in remote-first delivery ·{" "}
            <Link className="underline hover:text-slate-700" href="/contact">
              Start a project
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}

