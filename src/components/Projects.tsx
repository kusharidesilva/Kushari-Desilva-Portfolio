"use client";

import Badge from "@/components/Badge";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/components/utils";
import { Project, ProjectCategory, projectCategories, projects } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.category === activeCategory ||
        project.secondaryCategory === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        [project.title, project.description, project.category, project.secondaryCategory ?? "", ...project.technologies]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="section-container">
        <SectionTitle
          eyebrow="Projects"
          title="Selected web, UI/UX, academic, and creative projects."
          description="A project gallery with live links, prototypes, and compact case-study style details."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_22rem]">
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "focus-ring shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition",
                  activeCategory === category
                    ? "border-sky-300 bg-sky-300 text-slate-950"
                    : "border-white/10 bg-white/[0.03] text-slate-200 hover:border-sky-300/50"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <label className="relative block">
            <span className="sr-only">Search projects</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects..."
              className="focus-ring h-11 w-full rounded-full border border-white/10 bg-slate-950/70 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-500"
            />
          </label>
        </div>

        <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} onOpen={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <p className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center text-slate-300">
            No projects match that search.
          </p>
        ) : null}
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} details`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/80 p-4 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.22 }}
              className="glass-card max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} large preview`}
                  fill
                  className="object-cover"
                  sizes="90vw"
                />
                <button
                  type="button"
                  aria-label="Close project details"
                  onClick={() => setSelectedProject(null)}
                  className="focus-ring absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/80 text-white backdrop-blur"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap gap-2">
                  <Badge tone="cyan">{selectedProject.category}</Badge>
                  {selectedProject.secondaryCategory ? (
                    <Badge tone="violet">{selectedProject.secondaryCategory}</Badge>
                  ) : null}
                  {selectedProject.featured ? <Badge tone="emerald">Featured</Badge> : null}
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                  {selectedProject.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  {selectedProject.description}
                </p>
                {selectedProject.highlight ? (
                  <p className="mt-4 rounded-2xl border border-sky-300/20 bg-sky-300/10 p-4 text-sm leading-6 text-sky-100">
                    {selectedProject.highlight}
                  </p>
                ) : null}
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                {selectedProject.links?.length ? (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {selectedProject.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring inline-flex items-center gap-2 rounded-full bg-sky-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-200"
                      >
                        {link.label}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
