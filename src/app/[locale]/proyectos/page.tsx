import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { flagshipProjects, explorationProjects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("work");
  const flagship = flagshipProjects();
  const explorations = explorationProjects();

  return (
    <div className="mx-auto max-w-6xl px-6 xs:px-8 py-20">
      <Reveal>
        <h1 className="text-4xl xs:text-5xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="mt-4 text-lg text-ink-soft max-w-xl">{t("intro")}</p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {flagship.map((project, i) => (
          <ProjectCard key={project.slug} project={project} priority={i === 0} />
        ))}
      </div>

      <div className="mt-28 pt-16 border-t border-line">
        <Reveal>
          <h2 className="text-2xl font-medium">{t("explorationsTitle")}</h2>
          <p className="mt-3 text-ink-soft max-w-xl">{t("explorationsIntro")}</p>
        </Reveal>

        <div className="mt-10 divide-y divide-line border-t border-b border-line">
          {explorations.map((project) => (
            <Reveal key={project.slug}>
              <Link
                href={`/proyectos/${project.slug}`}
                className="group flex items-center justify-between gap-6 py-5"
              >
                <div className="flex items-center gap-4 min-w-0">
                  {project.cover && (
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-sm bg-paper-dim">
                      <Image
                        src={project.cover}
                        alt={project.title[locale]}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="font-medium group-hover:text-rust transition-colors">
                      {project.title[locale]}
                    </h3>
                    <p className="text-sm text-ink-soft mt-0.5 truncate">
                      {project.subtitle[locale]}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-xs text-ink-soft">{project.year}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
