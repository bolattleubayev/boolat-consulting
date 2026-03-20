import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { Trans } from "@/components/Trans";

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
              <Trans
                en="boolat partners with product and data teams to deliver reliable software, cloud foundations, and analytics you can trust."
                ru="boolat работает с продуктовыми и дата-командами, чтобы создавать надёжное ПО, облачную основу и аналитику, которой можно доверять."
                kk="boolat өнім және дерек командаларымен серіктесіп, сенімді бағдарламалық шешімдер, бұлттық негіз және сенуге болатын аналитика ұсынады."
              />
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-slate-950">
                <Trans en="Company" ru="Компания" kk="Компания" />
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <Link className="hover:text-slate-950" href="/about">
                    <Trans en="About" ru="О нас" kk="Біз туралы" />
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-slate-950" href="/services">
                    <Trans en="Services" ru="Услуги" kk="Қызметтер" />
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-slate-950" href="/case-studies">
                    <Trans en="Case Studies" ru="Кейсы" kk="Жобалар" />
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-slate-950" href="/contact">
                    <Trans en="Contact" ru="Контакты" kk="Байланыс" />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-950">
                <Trans en="Solutions" ru="Решения" kk="Шешімдер" />
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <Link className="hover:text-slate-950" href="/dashboards">
                    <Trans en="Dashboards" ru="Дашборды" kk="Дашбордтар" />
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-slate-950" href="/services">
                    <Trans
                      en="Reporting Automation"
                      ru="Автоматизация отчётности"
                      kk="Есепті автоматтандыру"
                    />
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-slate-950" href="/services">
                    <Trans en="Data Engineering" ru="Инжиниринг данных" kk="Дерек инжинирингі" />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-950">
                <Trans en="Legal" ru="Юридическая информация" kk="Құқықтық ақпарат" />
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="text-slate-600">© {new Date().getFullYear()}</li>
                <li className="text-slate-600">
                  <Trans en="All rights reserved." ru="Все права защищены." kk="Барлық құқықтар қорғалған." />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-900/10 pt-8 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            <Trans
              en="Minimal. Secure. Built for long-term maintainability."
              ru="Минимально. Надёжно. Сделано для долгосрочной поддержки."
              kk="Минимал. Қауіпсіз. Ұзақ мерзімді қолдауға бейімделіп жасалған."
            />
          </p>
          <p>
            <Trans
              en="Based in remote-first delivery ·"
              ru="Работа в удалённом формате ·"
              kk="Қашықтан жұмыс форматына негізделген ·"
            />{" "}
            <Link className="underline hover:text-slate-700" href="/contact">
              <Trans en="Start a project" ru="Начать проект" kk="Жобаны бастау" />
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}

