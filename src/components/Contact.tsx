"use client";

import SectionTitle from "@/components/SectionTitle";
import { socialLinks } from "@/data/social";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-container">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something creative together."
          description="Open to UI/UX design, web development, research-aligned projects, and graphic design work."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            className="space-y-4"
          >
            <a
              href={`mailto:${socialLinks.email}`}
              className="focus-ring glass-card flex items-center gap-4 rounded-2xl p-5 transition hover:border-sky-300/35"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-300/10 text-sky-200">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-slate-400">Email</span>
                <span className="block font-semibold text-white">{socialLinks.email}</span>
              </span>
            </a>
            <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-300/10 text-violet-200">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-slate-400">Location</span>
                <span className="block font-semibold text-white">{socialLinks.location}</span>
              </span>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Social
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  { label: "LinkedIn", href: socialLinks.linkedin, Icon: Linkedin },
                  { label: "GitHub", href: socialLinks.github, Icon: Github },
                  { label: "Instagram", href: socialLinks.instagram, Icon: Instagram }
                ].map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-300/50 hover:bg-white/5"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Name
                <input
                  required
                  name="name"
                  className="focus-ring rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="focus-ring rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-200">
              Subject
              <input
                required
                name="subject"
                className="focus-ring rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                placeholder="Project idea"
              />
            </label>
            <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-200">
              Message
              <textarea
                required
                name="message"
                rows={6}
                className="focus-ring resize-none rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                placeholder="Tell me about your project..."
              />
            </label>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-sky-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-200"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
              {submitted ? (
                <p className="text-sm font-medium text-emerald-200">
                  Thanks. This demo form is ready for a backend connection.
                </p>
              ) : null}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
