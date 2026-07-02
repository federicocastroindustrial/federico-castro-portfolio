import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { projects, getProject, flagshipProjects } from "@/content/projects";
import Reveal from "@/components/Reveal";
import VideoPlayer from "@/components/VideoPlayer";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProject(slug);
  if (!project) notFound();

  const t = await getTranslations("work");
  const flagship = flagshipProjects();
  const idx = flagship.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? flagship[idx - 1] : null;
  const next = idx >= 0 && idx < flagship.length - 1 ? flagship[idx + 1] : null;

  return (
    <article className="mx-auto max-w-4xl px-6 xs:px-8 py-16">
      <Link href="/proyectos" className="text-sm text-ink-soft hover:text-rust transition-colors">
        ← {t("backToWork")}
      </Link>

      <Reveal className="mt-8">
        <h1 className="text-3xl xs:text-4xl font-semibold tracking-tight">
          {project.title[locale]}
        </h1>
        <p className="mt-3 text-lg text-ink-soft">{project.subtitle[locale]}</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-soft">
          <span>{project.year}</span>
          <span className="text-line">·</span>
          {project.tags[locale].map((tag) => (
            <span
              key={tag}
              className="border border-line rounded-full px-3 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.behanceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium border border-line rounded-sm px-4 py-2 hover:border-rust hover:text-rust transition-colors w-fit"
        >
          {t("viewOnBehance")} ↗
        </a>
      </Reveal>

      {project.gallery[0] && (
        <Reveal delay={0.1} className="mt-10">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-paper-dim">
            <Image
              src={project.gallery[0].src}
              alt={project.title[locale]}
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      )}

      {project.video && (
        <Reveal delay={0.1} className="mt-8">
          <VideoPlayer src={project.video.src} poster={project.video.poster} />
        </Reveal>
      )}

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
        {project.sections.map((section) => (
          <Reveal key={section.label.es}>
            <h2 className="text-sm uppercase tracking-wider text-rust font-medium">
              {section.label[locale]}
            </h2>
            <p className="mt-3 text-ink leading-relaxed">{section.text[locale]}</p>
          </Reveal>
        ))}
      </div>

      {project.gallery.length > 1 && (
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {project.gallery.slice(1).map((img) => (
            <Reveal key={img.src}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-paper-dim">
                <Image
                  src={img.src}
                  alt={img.caption?.[locale] ?? project.title[locale]}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              {img.caption && (
                <p className="mt-2 text-sm text-ink-soft">{img.caption[locale]}</p>
              )}
            </Reveal>
          ))}
        </div>
      )}

      <Reveal className="mt-16 pt-8 border-t border-line">
        <h2 className="text-sm uppercase tracking-wider text-ink-soft font-medium">
          {t("tools")}
        </h2>
        <p className="mt-3 text-ink-soft">{project.tools.join(" · ")}</p>
      </Reveal>

      <div className="mt-20 pt-8 border-t border-line flex items-center justify-between text-sm font-medium">
        {prev ? (
          <Link href={`/proyectos/${prev.slug}`} className="hover:text-rust transition-colors">
            ← {t("prevProject")}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/proyectos/${next.slug}`} className="hover:text-rust transition-colors">
            {t("nextProject")} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </article>
  );
}
