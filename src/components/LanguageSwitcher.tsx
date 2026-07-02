"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 text-sm font-medium tracking-wide">
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          {i > 0 && <span className="text-ink-soft/50">·</span>}
          <button
            onClick={() => router.replace(pathname, { locale: loc })}
            aria-current={locale === loc}
            className={
              locale === loc
                ? "text-ink"
                : "text-ink-soft/60 hover:text-ink transition-colors"
            }
          >
            {loc.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
