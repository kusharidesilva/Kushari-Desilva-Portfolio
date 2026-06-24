"use client";

import Badge from "@/components/Badge";
import SectionTitle from "@/components/SectionTitle";
import { researchItems } from "@/data/research";
import { motion } from "framer-motion";
import { BookOpenCheck, Target } from "lucide-react";

export default function Research() {
  return (
    <section id="research" className="py-20 sm:py-24">
      <div className="section-container">
        <SectionTitle
          eyebrow="Research & Academic Work"
          title="Research interests in education technology, AI, NLP, and smart learning."
          description="These topics reflect academic exploration around better learning systems, responsible AI, and practical machine learning ideas."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {researchItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.48, delay: index * 0.04 }}
              className="glass-card rounded-2xl p-6 transition hover:-translate-y-1 hover:border-sky-300/35"
            >
              <div className="flex items-start justify-between gap-4">
                <Badge tone={index % 2 === 0 ? "cyan" : "violet"}>{item.area}</Badge>
                <BookOpenCheck className="h-5 w-5 shrink-0 text-sky-300" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold leading-7 text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.objective}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-300/15 bg-emerald-300/10 p-4">
                <Target className="mt-0.5 h-4 w-4 shrink-0 text-emerald-200" aria-hidden="true" />
                <p className="text-sm font-medium leading-6 text-emerald-100">{item.sdg}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
