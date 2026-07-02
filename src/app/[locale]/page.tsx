import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { flagshipProjects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const featured = flagshipProjects().slice(0, 3);

  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 xs:px-8 pt-20 pb-24 xs:pt-28 xs:pb-32">
        <Reveal>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl font-semibold tracking-tight max-w-3xl text-balance">
            {t("heroTitle")}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-ink-soft max-w-xl">{t("heroSubtitle")}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link
            href="/proyectos"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium border-b border-ink pb-0.5 hover:border-rust hover:text-rust transition-colors"
          >
            {t("heroCta")} →
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 xs:px-8 pb-24">
        <Reveal>
          <p className="text-sm uppercase tracking-wider text-ink-soft mb-8">
            {t("featuredLabel")}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} priority={i === 0} />
          ))}
        </div>
        <Reveal delay={0.1}>
          <Link
            href="/proyectos"
            className="mt-12 inline-block text-sm font-medium border-b border-ink pb-0.5 hover:border-rust hover:text-rust transition-colors"
          >
            {t("featuredCta")} →
          </Link>
        </Reveal>
      </section>

      <section className="border-t border-line bg-paper-dim/50">
        <div className="mx-auto max-w-3xl px-6 xs:px-8 py-24 text-center">
          <Reveal>
            <p className="text-2xl xs:text-3xl font-medium leading-snug text-balance">
              {t("statementBody")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 xs:px-8 py-24 grid grid-cols-1 sm:grid-cols-2 gap-12">
        <Reveal>
          <div className="border border-line rounded-sm p-8 h-full flex flex-col">
            <h2 className="text-xl font-medium">{t("splitRecruiterTitle")}</h2>
            <p className="mt-3 text-ink-soft flex-1">{t("splitRecruiterBody")}</p>
            <Link
              href="/sobre-mi"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium border-b border-ink pb-0.5 hover:border-rust hover:text-rust transition-colors w-fit"
            >
              {t("splitRecruiterCta")} →
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="border border-line rounded-sm p-8 h-full flex flex-col">
            <h2 className="text-xl font-medium">{t("splitFreelanceTitle")}</h2>
            <p className="mt-3 text-ink-soft flex-1">{t("splitFreelanceBody")}</p>
            <Link
              href="/contacto"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium border-b border-ink pb-0.5 hover:border-rust hover:text-rust transition-colors w-fit"
            >
              {t("splitFreelanceCta")} →
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
