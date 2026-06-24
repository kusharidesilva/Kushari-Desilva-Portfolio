"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center"
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}
