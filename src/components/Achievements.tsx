"use client";

import Badge from "@/components/Badge";
import SectionTitle from "@/components/SectionTitle";
import { achievements } from "@/data/achievements";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-24">
      <div className="section-container">
        <SectionTitle
          eyebrow="Achievements"
          title="Milestones across design, leadership, entrepreneurship, and academics."
          description="A concise timeline of the work and roles that shaped Kushari's creative and technical journey."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-sky-300 via-violet-300 to-transparent sm:block" />
            <div className="space-y-5">
              {achievements.map((achievement, index) => (
                <motion.article
                  key={achievement.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.48, delay: index * 0.05 }}
                  className="relative sm:pl-12"
                >
                  <span className="absolute left-0 top-6 hidden h-8 w-8 items-center justify-center rounded-full border border-sky-300/35 bg-slate-950 text-sky-200 sm:inline-flex">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="glass-card rounded-2xl p-6">
                    <Badge tone={index % 2 === 0 ? "cyan" : "violet"}>{achievement.period}</Badge>
                    <h3 className="mt-4 text-xl font-bold text-white">{achievement.title}</h3>
                    <ul className="mt-4 space-y-2">
                      {achievement.details.map((detail) => (
                        <li key={detail} className="flex gap-3 text-sm leading-6 text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
