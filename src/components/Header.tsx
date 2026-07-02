import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-sm border-b border-line">
      <div className="relative mx-auto max-w-6xl px-6 xs:px-8 h-16 flex items-center justify-between">
        <LanguageSwitcher />
        <Link
          href="/"
          className="hidden sm:block absolute left-1/2 -translate-x-1/2 text-sm font-semibold tracking-wide"
        >
          Federico Castro
        </Link>
        <nav className="flex items-center gap-4 xs:gap-6 text-sm font-medium">
          <Link href="/proyectos" className="hover:text-rust transition-colors">
            {t("work")}
          </Link>
          <Link href="/sobre-mi" className="hover:text-rust transition-colors">
            {t("about")}
          </Link>
          <Link href="/contacto" className="hover:text-rust transition-colors">
            {t("contact")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
