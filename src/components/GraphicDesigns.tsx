"use client";

import Badge from "@/components/Badge";
import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/components/utils";
import { DesignCategory, DesignWork, designCategories, designWorks } from "@/data/designs";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function GraphicDesigns() {
  const [activeCategory, setActiveCategory] = useState<"All" | DesignCategory>("All");
  const [selectedDesign, setSelectedDesign] = useState<DesignWork | null>(null);

  useEffect(() => {
    if (!selectedDesign) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedDesign(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedDesign]);

  const filteredDesigns = useMemo(
    () =>
      designWorks.filter((design) => activeCategory === "All" || design.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="designs" className="py-20 sm:py-24">
      <div className="section-container">
        <SectionTitle
          eyebrow="Graphic Design Works"
          title="Visual design work for brands, events, social media, and interfaces."
          description="A gallery of creative work from KD Creations, campus clubs, client designs, and UI graphics."
        />

        <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-2">
          {designCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "focus-ring shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition",
                activeCategory === category
                  ? "border-violet-300 bg-violet-300 text-slate-950"
                  : "border-white/10 bg-white/[0.03] text-slate-200 hover:border-violet-300/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 columns-1 gap-6 sm:columns-2 xl:columns-3">
          <AnimatePresence mode="popLayout">
            {filteredDesigns.map((design, index) => (
              <motion.article
                key={design.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.03 }}
                className="glass-card group mb-6 break-inside-avoid overflow-hidden rounded-2xl"
              >
                <button
                  type="button"
                  onClick={() => setSelectedDesign(design)}
                  className="focus-ring relative block aspect-[4/3] w-full overflow-hidden text-left"
                >
                  <Image
                    src={design.image}
                    alt={`${design.title} preview`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 92vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-90" />
                  <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/75 text-white backdrop-blur">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </button>
                <div className="p-5">
                  <Badge tone="violet">{design.category}</Badge>
                  <h3 className="mt-4 text-lg font-bold text-white">{design.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{design.description}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedDesign ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedDesign.title} preview`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/85 p-4 backdrop-blur-xl"
            onClick={() => setSelectedDesign(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              className="glass-card w-full max-w-5xl overflow-hidden rounded-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-[16/10] max-h-[75vh]">
                <Image
                  src={selectedDesign.image}
                  alt={`${selectedDesign.title} full preview`}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
                <button
                  type="button"
                  aria-label="Close design preview"
                  onClick={() => setSelectedDesign(null)}
                  className="focus-ring absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/80 text-white backdrop-blur"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="border-t border-white/10 p-5">
                <Badge tone="violet">{selectedDesign.category}</Badge>
                <h3 className="mt-3 text-xl font-bold text-white">{selectedDesign.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{selectedDesign.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
