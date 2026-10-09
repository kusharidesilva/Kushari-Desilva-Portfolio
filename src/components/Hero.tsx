"use client";

import { socialLinks } from "@/data/social";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Palette, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Badge";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="section-container grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.1 }
            }
          }}
          className="max-w-3xl"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
            <Badge tone="cyan">Available for UI/UX, web, and design projects</Badge>
          </motion.div>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className="mt-6 text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl"
          >
            Kushari <span className="text-gradient">Desilva</span>
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-xl font-semibold leading-8 text-slate-100 sm:text-2xl"
          >
            Computer Science Undergraduate | UI/UX Designer | Graphic Designer | Web Developer
          </motion.p>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            I am a third-year BSc (Hons) in Computer Science undergraduate at Saegis Campus, Sri
            Lanka. I am passionate about creating clean, user-friendly digital experiences through
            UI/UX design, web development, research, and creative graphic design.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="#projects"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-sky-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-200"
            >
              <Rocket className="h-4 w-4" />
              View Projects
            </Link>
            <Link
              href="#designs"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-violet-300/40 bg-violet-300/10 px-5 py-3 text-sm font-bold text-violet-100 transition hover:bg-violet-300/20"
            >
              <Palette className="h-4 w-4" />
              View Designs
            </Link>
            <a
              href={socialLinks.cv}
              download
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-sky-300/50 hover:bg-white/5"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <Link
              href="#contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-sky-300/50 hover:bg-white/5"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
        >
          <div className="absolute inset-8 rounded-[2rem] bg-gradient-to-br from-sky-300/25 via-transparent to-violet-400/25 blur-3xl" />
          <div className="glass-card relative rounded-[2rem] p-3 shadow-glow">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10">
              <Image
                src="/images/profile-main.jpg"
                alt="Kushari Desilva profile portrait"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 42vw, 90vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent p-5">
                <p className="text-sm font-semibold text-sky-100">Creative developer</p>
                <p className="text-xs text-slate-300">Creating thoughtful digital experiences</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Link
        href="#about"
        aria-label="Scroll to about section"
        className="focus-ring absolute bottom-5 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 p-3 text-slate-300 transition hover:text-sky-200 md:inline-flex"
      >
        <ArrowDown className="h-5 w-5" />
      </Link>
    </section>
  );
}
