"use client";

import Badge from "@/components/Badge";
import SectionTitle from "@/components/SectionTitle";
import { timelineEntries } from "@/data/achievements";
import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

export default function Timeline() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="section-container">
        <SectionTitle
          eyebrow="Education & Experience"
          title="A growing path through computing, design, and practical project work."
          description="Academic learning and hands-on creative work come together across university projects, client designs, and entrepreneurship."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {timelineEntries.map((entry, index) => {
            const Icon = entry.type === "Education" ? GraduationCap : BriefcaseBusiness;
            return (
              <motion.article
                key={`${entry.title}-${entry.organization}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.48, delay: index * 0.04 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sky-200">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <Badge tone={entry.type === "Education" ? "cyan" : "violet"}>
                      {entry.type}
                    </Badge>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
                    {entry.period}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{entry.title}</h3>
                <p className="mt-1 text-sm font-semibold text-sky-200">{entry.organization}</p>
                <p className="mt-4 text-sm leading-6 text-slate-400">{entry.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
