"use client";

import Badge from "@/components/Badge";
import SectionTitle from "@/components/SectionTitle";
import { research } from "@/data/research";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpenCheck } from "lucide-react";

export default function Research() {
  return (
    <section id="research" className="py-20 sm:py-24">
      <div className="section-container">
        <SectionTitle
          eyebrow="Research"
          title="Final-year research: Skill Swap Hub."
          description="An academic study supported by a working full-stack platform."
        />
        <motion.article
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.48 }}
          className="glass-card mx-auto mt-12 max-w-4xl rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <Badge tone="cyan">
              {research.institution} · {research.period}
            </Badge>
            <BookOpenCheck className="h-5 w-5 shrink-0 text-sky-300" aria-hidden="true" />
          </div>
          <h3 className="mt-5 text-xl font-bold leading-7 text-white">{research.title}</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">{research.overview}</p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
            {research.activities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {research.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
          <a
            href={research.href}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-7 inline-flex items-center gap-2 rounded-full bg-sky-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-200"
          >
            View Skill Swap Hub <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.article>
      </div>
    </section>
  );
}
