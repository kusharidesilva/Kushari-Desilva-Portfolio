"use client";

import Badge from "@/components/Badge";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/components/utils";
import { Project, ProjectCategory, projectCategories, projects } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All Projects");
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedWork, setSelectedWork] = useState<NonNullable<Project["gallery"]>[number] | null>(
    null
  );
  const dialogRef = useRef<HTMLDivElement>(null);
  const workDialogRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const workReturnFocusRef = useRef<HTMLElement | null>(null);
  const selectedWorkRef = useRef<NonNullable<Project["gallery"]>[number] | null>(null);

  const openProject = (project: Project) => {
    returnFocusRef.current = document.activeElement as HTMLElement;
    setSelectedProject(project);
  };

  const closeProject = () => {
    selectedWorkRef.current = null;
    setSelectedWork(null);
    setSelectedProject(null);
  };

  const openWork = (work: NonNullable<Project["gallery"]>[number]) => {
    workReturnFocusRef.current = document.activeElement as HTMLElement;
    selectedWorkRef.current = work;
    setSelectedWork(work);
  };

  const closeWork = () => {
    selectedWorkRef.current = null;
    setSelectedWork(null);
  };

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (selectedWorkRef.current) {
        return;
      }

      if (event.key === "Escape") {
        setSelectedProject(null);
      } else if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>("button, a[href]");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLElement>("button")?.focus();
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      returnFocusRef.current?.focus();
    };
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedWork) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeWork();
      } else if (event.key === "Tab") {
        const focusable = workDialogRef.current?.querySelectorAll<HTMLElement>("button, a[href]");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    workDialogRef.current?.querySelector<HTMLElement>("button")?.focus();
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      workReturnFocusRef.current?.focus();
    };
  }, [selectedWork]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All Projects" || project.categories?.includes(activeCategory);
      const matchesQuery =
        !normalizedQuery ||
        [
          project.title,
          project.description,
          project.category,
          project.secondaryCategory ?? "",
          ...(project.categories ?? []),
          project.role ?? "",
          ...(project.details ?? []),
          ...project.technologies
        ]
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
          title="Software projects, client design, and creative work."
          description="Explore full-stack research, frontend websites, UI/UX prototypes, academic projects, and graphic design."
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
              <ProjectCard key={project.title} project={project} onOpen={openProject} />
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
            className="glass-blur-xl fixed inset-0 z-[80] grid place-items-center bg-slate-950/80 p-4"
            onClick={closeProject}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.22 }}
              className="glass-card max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl"
              onClick={(event) => event.stopPropagation()}
              ref={dialogRef}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                {selectedProject.image ? (
                  <Image
                    src={selectedProject.image}
                    alt={`${selectedProject.title} large preview`}
                    fill
                    className="object-cover"
                    sizes="90vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-900 via-sky-950 to-violet-950 px-8 text-center">
                    <span className="text-3xl font-bold text-white">{selectedProject.title}</span>
                  </div>
                )}
                <button
                  type="button"
                  aria-label="Close project details"
                  onClick={closeProject}
                  className="focus-ring glass-blur absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/80 text-white"
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
                  {selectedProject.categories
                    ?.filter((category) => category !== selectedProject.category)
                    .map((category) => (
                      <Badge key={category} tone="violet">
                        {category}
                      </Badge>
                    ))}
                  {selectedProject.featured ? <Badge tone="emerald">Featured</Badge> : null}
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                  {selectedProject.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  {selectedProject.description}
                </p>
                {selectedProject.role || selectedProject.period ? (
                  <p className="mt-3 text-sm text-slate-300">
                    {selectedProject.role ? (
                      <strong className="text-white">Role: {selectedProject.role}</strong>
                    ) : null}
                    {selectedProject.role && selectedProject.period ? " · " : null}
                    {selectedProject.period}
                  </p>
                ) : null}
                {selectedProject.details?.length ? (
                  <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
                    {selectedProject.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
                {selectedProject.note ? (
                  <p className="mt-4 text-sm leading-6 text-slate-400">{selectedProject.note}</p>
                ) : null}
                {selectedProject.highlight ? (
                  <p className="mt-4 rounded-2xl border border-sky-300/20 bg-sky-300/10 p-4 text-sm leading-6 text-sky-100">
                    {selectedProject.highlight}
                  </p>
                ) : null}
                {selectedProject.gallery?.length ? (
                  <div className="mt-8">
                    <div className="grid gap-4 sm:grid-cols-3">
                      {selectedProject.gallery.map((work) => (
                        <button
                          key={work.image}
                          type="button"
                          onClick={() => openWork(work)}
                          className="focus-ring group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left transition hover:border-sky-300/50 hover:bg-white/[0.06]"
                        >
                          <span className="relative block aspect-square overflow-hidden bg-slate-950">
                            <Image
                              src={work.image}
                              alt={work.alt}
                              fill
                              className="object-cover transition duration-500 group-hover:scale-105"
                              sizes="(min-width: 640px) 28vw, 80vw"
                            />
                          </span>
                          <span className="block p-4">
                            <span className="block font-semibold text-white">{work.title}</span>
                            <span className="mt-1 block text-xs text-sky-200">{work.category}</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
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
                        rel="noopener noreferrer"
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

      <AnimatePresence>
        {selectedWork ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedWork.title} preview`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="glass-blur-xl fixed inset-0 z-[90] grid place-items-center bg-slate-950/90 p-4"
            onClick={closeWork}
          >
            <motion.div
              ref={workDialogRef}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              className="glass-card relative max-h-[94vh] max-w-[94vw] overflow-hidden rounded-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-square h-[min(80vh,90vw)] max-h-[80vh] max-w-[90vw] bg-slate-950">
                <Image
                  src={selectedWork.image}
                  alt={selectedWork.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
              <div className="flex items-center justify-between gap-6 border-t border-white/10 px-5 py-4">
                <div>
                  <h4 className="font-bold text-white">{selectedWork.title}</h4>
                  <p className="mt-1 text-xs text-sky-200">{selectedWork.category}</p>
                </div>
                <button
                  type="button"
                  aria-label="Close design preview"
                  onClick={closeWork}
                  className="focus-ring inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-sky-300/50 hover:bg-white/10"
                >
                  <X className="size-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
