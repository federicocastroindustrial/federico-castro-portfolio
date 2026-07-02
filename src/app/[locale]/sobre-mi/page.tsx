import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { awards } from "@/content/awards";
import { ventures } from "@/content/ventures";
import Reveal from "@/components/Reveal";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  const tools = [
    "Rhinoceros",
    "Shapr3D",
    "KeyShot",
    "Blender",
    "Twinmotion",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe Lightroom",
    "Premiere Pro",
    "AutoCAD",
    "Bambu Studio",
    "PrusaSlicer",
    "ChatGPT / Leonardo.ai / Vizcom",
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 xs:px-8 py-20">
      <Reveal>
        <h1 className="text-4xl xs:text-5xl font-semibold tracking-tight">{t("title")}</h1>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-10">
        <Reveal>
          <div className="relative aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-sm bg-paper-dim">
            <Image
              src="/images/about/retrato.jpg"
              alt="Federico Castro"
              fill
              sizes="220px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-sm uppercase tracking-wider text-rust font-medium">
            {t("bioHeading")}
          </h2>
          <div className="mt-3 space-y-4 text-ink leading-relaxed whitespace-pre-line">
            {t("bio")}
          </div>
          <p className="mt-4 text-ink leading-relaxed">{t("bioClosing")}</p>
          <a
            href="/cv/federico-castro-cv.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium border-b border-ink pb-0.5 hover:border-rust hover:text-rust transition-colors w-fit"
          >
            {t("cvDownload")} →
          </a>
        </Reveal>
      </div>

      <Reveal className="mt-20 pt-12 border-t border-line">
        <h2 className="text-sm uppercase tracking-wider text-rust font-medium">
          {t("processHeading")}
        </h2>
        <p className="mt-3 text-ink leading-relaxed max-w-2xl">{t("processBody")}</p>
      </Reveal>

      <Reveal className="mt-16">
        <h2 className="text-sm uppercase tracking-wider text-ink-soft font-medium">
          {t("toolsHeading")}
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="border border-line rounded-full px-3 py-1 text-xs text-ink-soft"
            >
              {tool}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-20 pt-12 border-t border-line">
        <h2 className="text-sm uppercase tracking-wider text-rust font-medium">
          {t("researchHeading")}
        </h2>
        <h3 className="mt-3 text-xl font-medium max-w-2xl">{t("researchTitle")}</h3>
        <p className="mt-2 text-sm text-ink-soft">{t("researchSubtitle")}</p>
        <p className="mt-4 text-ink leading-relaxed max-w-2xl">{t("researchBody")}</p>
      </Reveal>

      <Reveal className="mt-20 pt-12 border-t border-line">
        <h2 className="text-sm uppercase tracking-wider text-ink-soft font-medium">
          {t("awardsHeading")}
        </h2>
        <div className="mt-4 divide-y divide-line border-t border-b border-line">
          {awards.map((award) => (
            <div key={award.title.es} className="flex items-start justify-between gap-6 py-4">
              <div>
                <p className="font-medium">{award.title[locale]}</p>
                <p className="text-sm text-ink-soft mt-0.5">{award.detail[locale]}</p>
              </div>
              <span className="shrink-0 text-xs text-ink-soft">{award.year}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-20 pt-12 border-t border-line pb-8">
        <h2 className="text-sm uppercase tracking-wider text-rust font-medium">
          {t("venturesHeading")}
        </h2>
        <p className="mt-3 text-ink-soft max-w-xl">{t("venturesBody")}</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ventures.map((venture) => (
            <a
              key={venture.name}
              href={venture.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-line rounded-sm p-6 hover:border-rust transition-colors"
            >
              <p className="font-medium group-hover:text-rust transition-colors">
                {venture.name}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{venture.description[locale]}</p>
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
