"use client";

import Badge from "@/components/Badge";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, GraduationCap, Palette, Trophy, Users } from "lucide-react";
import Image from "next/image";

const quickInfo = [
  {
    label: "Final-Year Computer Science Undergraduate",
    icon: GraduationCap,
    tone: "cyan" as const
  },
  { label: "Trainee Software Engineer", icon: BriefcaseBusiness, tone: "violet" as const },
  { label: "Frontend & Full-Stack Projects", icon: Code2, tone: "emerald" as const },
  { label: "UI/UX Designer", icon: Palette, tone: "slate" as const },
  { label: "ICT Club Editor 2025/26", icon: Users, tone: "violet" as const },
  { label: "CodePulse 2024 Designathon 1st Runner-up", icon: Trophy, tone: "cyan" as const }
];

export default function About() {
  return (
    <section id="about" className="overflow-x-clip py-20 sm:py-24">
      <div className="section-container">
        <SectionTitle
          eyebrow="About Me"
          title="A computer science undergraduate building practical digital solutions."
          description="I combine software development and UI/UX thinking to build useful, approachable products."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="glass-card overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/profile-about.jpg"
                alt="Kushari Desilva smiling portrait"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 34vw, 90vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="glass-card rounded-2xl p-6 sm:p-8"
          >
            <Badge tone="cyan">Sri Lanka</Badge>
            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              I am a final-year student pursuing a BSc (Hons) in Computer Science at Saegis Campus.
              My interests include software engineering, frontend and full-stack development, UI/UX
              design, and project management. I work with React, Next.js, TypeScript, PHP, MySQL,
              Firebase, and Figma across academic and independent projects.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
              My work includes a full-stack research platform, responsive frontend websites, and
              travel website interfaces for real clients. At Bizadvisor, I have gained experience
              collaborating on digital solutions and design work. University leadership roles have
              strengthened my teamwork, communication, and project coordination skills.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {quickInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <Icon className="h-5 w-5 text-sky-300" aria-hidden="true" />
                    <p className="mt-3 text-sm font-semibold leading-6 text-white">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
