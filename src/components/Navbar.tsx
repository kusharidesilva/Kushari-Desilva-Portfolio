"use client";

import { socialLinks } from "@/data/social";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/components/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      let current = "home";

      for (const item of navItems) {
        const id = item.href.replace("#", "");
        const element = document.getElementById(id);

        if (element && element.offsetTop - 140 <= window.scrollY) {
          current = id;
        }
      }

      if (current) {
        setActive(current);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = (href: string) =>
    cn(
      "rounded-full px-3 py-2 text-sm font-medium transition focus-ring",
      active === href.replace("#", "")
        ? "bg-sky-300/15 text-sky-100"
        : "text-slate-300 hover:bg-white/5 hover:text-white"
    );

  return (
    <header className="fixed inset-x-0 top-0 z-[60] border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
      <nav className="section-container flex h-20 items-center justify-between gap-4">
        <Link href="#home" className="focus-ring group rounded-full">
          <span className="text-base font-bold text-white">
            Kushari <span className="text-sky-300">Desilva</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={socialLinks.cv}
            download
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
          >
            <Download aria-hidden="true" className="h-4 w-4" />
            CV
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-200 transition hover:border-sky-300/50 hover:text-sky-200"
          >
            <Github aria-hidden="true" className="h-4 w-4" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-200 transition hover:border-sky-300/50 hover:text-sky-200"
          >
            <Linkedin aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 lg:hidden"
          >
            <div className="section-container grid gap-2 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={navLinkClass(item.href)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={socialLinks.cv}
                  download
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-950"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-100"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-100"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
