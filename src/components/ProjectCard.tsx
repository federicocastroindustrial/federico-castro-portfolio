"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/content/projects";
import type { Locale } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const locale = useLocale() as Locale;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link href={`/proyectos/${project.slug}`} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-paper-dim">
          {project.cover ? (
            <Image
              src={project.cover}
              alt={project.title[locale]}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              priority={priority}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-ink-soft/50 text-sm">
              {project.title[locale]}
            </div>
          )}
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-medium group-hover:text-rust transition-colors">
              {project.title[locale]}
            </h3>
            <p className="text-sm text-ink-soft mt-1">{project.subtitle[locale]}</p>
          </div>
          <span className="shrink-0 text-xs text-ink-soft mt-1">{project.year}</span>
        </div>
      </Link>
    </motion.div>
  );
}
