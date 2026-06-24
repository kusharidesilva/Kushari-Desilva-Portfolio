"use client";

import Badge from "@/components/Badge";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers, Star } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      whileHover={{ y: -6 }}
      className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="focus-ring relative block aspect-[16/10] w-full overflow-hidden text-left"
      >
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 92vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {project.featured ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-sky-300 px-3 py-1 text-xs font-bold text-slate-950">
              <Star className="h-3.5 w-3.5 fill-current" />
              Featured
            </span>
          ) : null}
          <Badge tone="violet">{project.category}</Badge>
        </div>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold leading-7 text-white">{project.title}</h3>
          <Layers className="mt-1 h-5 w-5 shrink-0 text-sky-300" aria-hidden="true" />
        </div>
        {project.secondaryCategory ? (
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-violet-200">
            {project.secondaryCategory}
          </p>
        ) : null}
        <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-sky-300/35 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:bg-sky-300/10"
          >
            Details
            <ArrowUpRight className="h-4 w-4" />
          </button>
          {project.links?.slice(0, 1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-violet-300/50 hover:bg-white/5"
            >
              {link.type === "github" ? (
                <Github className="h-4 w-4" />
              ) : (
                <ArrowUpRight className="h-4 w-4" />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
