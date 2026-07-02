import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const socials = [
  { label: "Behance", href: "https://www.behance.net/federicocastro27" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/federico-castro-842966164" },
  { label: "Lucien Luz", href: "https://www.instagram.com/lucien.luz" },
  { label: "@federaco3d", href: "https://www.instagram.com/federaco3d" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line mt-32">
      <div className="mx-auto max-w-6xl px-6 xs:px-8 py-12 flex flex-col gap-8 xs:flex-row xs:items-start xs:justify-between">
        <div>
          <p className="text-sm font-semibold">Federico Castro</p>
          <p className="text-sm text-ink-soft mt-1">Buenos Aires, Argentina</p>
        </div>

        <nav className="flex flex-col gap-1 text-sm">
          <Link href="/proyectos" className="hover:text-rust transition-colors">
            {tNav("work")}
          </Link>
          <Link href="/sobre-mi" className="hover:text-rust transition-colors">
            {tNav("about")}
          </Link>
          <Link href="/contacto" className="hover:text-rust transition-colors">
            {tNav("contact")}
          </Link>
        </nav>

        <div className="flex flex-col gap-1 text-sm">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rust transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 xs:px-8 pb-8 text-xs text-ink-soft">
        © {year} Federico Castro. {t("rights")}
      </div>
    </footer>
  );
}
