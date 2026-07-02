import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import Reveal from "@/components/Reveal";

const EMAIL = "fede_castro_07@hotmail.com";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <div className="mx-auto max-w-2xl px-6 xs:px-8 py-20">
      <Reveal>
        <h1 className="text-4xl xs:text-5xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="mt-4 text-lg text-ink-soft">{t("intro")}</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-14">
        <a
          href={`mailto:${EMAIL}`}
          className="block text-2xl xs:text-3xl font-medium border-b border-ink pb-2 hover:border-rust hover:text-rust transition-colors w-fit"
        >
          {EMAIL}
        </a>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Reveal>
          <div className="border border-line rounded-sm p-6 h-full">
            <h2 className="font-medium">{t("recruiterTitle")}</h2>
            <p className="mt-2 text-sm text-ink-soft">{t("recruiterBody")}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="border border-line rounded-sm p-6 h-full">
            <h2 className="font-medium">{t("freelanceTitle")}</h2>
            <p className="mt-2 text-sm text-ink-soft">{t("freelanceBody")}</p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-16 text-sm text-ink-soft">
        <p>{t("locationLabel")}: {t("location")}</p>
      </Reveal>
    </div>
  );
}
