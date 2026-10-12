import { socialLinks } from "@/data/social";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-container flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <Link href="#home" className="focus-ring rounded-full text-lg font-bold text-white">
            Kushari <span className="text-sky-300">Desilva</span>
          </Link>
          <p className="mt-2 text-sm text-slate-400">
            Building practical digital experiences through code and design.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            © 2026 Kushari Desilva | All rights reserved
          </p>
        </div>
        <div className="flex gap-2">
          {[
            { label: "LinkedIn", href: socialLinks.linkedin, Icon: Linkedin },
            { label: "GitHub", href: socialLinks.github, Icon: Github },
            { label: "Instagram", href: socialLinks.instagram, Icon: Instagram }
          ].map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-sky-300/50 hover:text-sky-200"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
