"use client";

import Badge from "@/components/Badge";
import SectionTitle from "@/components/SectionTitle";
import { skillGroups } from "@/data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="section-container">
        <SectionTitle
          eyebrow="Skills"
          title="A balanced toolkit for development, design, testing, and research."
          description="The stack covers front-end development, academic systems, UI/UX design, creative tools, and research-focused thinking."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.06 }}
              className="glass-card rounded-2xl p-6 transition hover:-translate-y-1 hover:border-sky-300/35"
            >
              <h3 className="text-xl font-bold text-white">{group.title}</h3>
              <p className="mt-3 min-h-14 text-sm leading-6 text-slate-400">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.025 }}
                  >
                    <Badge tone={index % 3 === 0 ? "cyan" : index % 3 === 1 ? "violet" : "slate"}>
                      {skill}
                    </Badge>
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
