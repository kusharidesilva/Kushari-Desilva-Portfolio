"use client";

import Badge from "@/components/Badge";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, GraduationCap, Palette, Trophy, Users } from "lucide-react";
import Image from "next/image";

const quickInfo = [
  { label: "Computer Science Undergraduate", icon: GraduationCap, tone: "cyan" as const },
  { label: "UI/UX & Graphic Designer", icon: Palette, tone: "violet" as const },
  { label: "Web Developer", icon: Code2, tone: "emerald" as const },
  { label: "Online Entrepreneur", icon: BriefcaseBusiness, tone: "slate" as const },
  { label: "Rotaract Club Editor 2024/25", icon: Users, tone: "violet" as const },
  { label: "CodePulse 2024 Designathon 1st Runner-up", icon: Trophy, tone: "cyan" as const }
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-container">
        <SectionTitle
          eyebrow="About Me"
          title="A creative computer science undergraduate building practical digital experiences."
          description="I combine software development, UI/UX thinking, and graphic design to turn ideas into polished, useful products."
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
              I am a Computer Science undergraduate with a strong interest in software development,
              UI/UX design, front-end development, and graphic design. I enjoy turning ideas into
              clean, practical, and visually appealing digital products.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
              Alongside my academic work, I run a graphic design business and have worked on social
              media posts, branding designs, UI/UX prototypes, and web interfaces. My goal is to
              create digital work that feels clear, friendly, and useful.
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
