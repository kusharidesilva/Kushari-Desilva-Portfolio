"use client";

import Badge from "@/components/Badge";
import SectionTitle from "@/components/SectionTitle";
import { volunteering } from "@/data/achievements";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-24">
      <div className="section-container">
        <SectionTitle
          eyebrow="Community & Leadership"
          title="Volunteering & Leadership"
          description="University roles that strengthened my communication, teamwork, creativity, and coordination skills."
        />

        <div className="relative mx-auto mt-12 max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-cyan-400 via-violet-400/60 to-transparent sm:left-5"
          />

          <div className="space-y-5 sm:space-y-6">
            {volunteering.map((entry, index) => (
              <motion.div
                key={entry.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.48, delay: index * 0.04 }}
                className="relative pl-12 sm:pl-16"
              >
                <div className="absolute left-0 top-5 z-10 flex size-8 items-center justify-center rounded-full border border-cyan-300/50 bg-[#080c1f] text-cyan-300 shadow-[0_0_24px_rgba(103,214,255,0.16)] sm:size-10">
                  <Sparkles className="size-4" aria-hidden="true" />
                </div>

                <article className="glass-card rounded-2xl p-5 sm:p-6">
                  <Badge tone="violet">{entry.period}</Badge>
                  <h3 className="mt-4 text-lg font-bold text-white sm:text-xl">{entry.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {entry.details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-sm leading-6 text-slate-300">
                        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
