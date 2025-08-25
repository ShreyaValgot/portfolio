// app/components/Footer.jsx
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },          // if your home has an id="projects"
  { href: "/#about", label: "About" },                // (we'll add these sections next)
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-slate-200/70 bg-white">
      {/* top strip */}
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="py-10 grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-[18px] md:text-[20px] font-semibold text-slate-900">
              Shreya Valgot
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              UX/UI Designer crafting accessible, research‑driven experiences.
            </p>

            {/* social */}
            <div className="mt-4 flex items-center gap-3">
              <Link
                href="mailto:shreyavalgot@gmail.com"
                className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:border-[#437029] hover:text-[#437029] transition"
                aria-label="Email Shreya"
              >
                <Mail className="h-4 w-4" />
                Email
              </Link>
              <Link
                href="https://www.linkedin.com/in/shreya-valgot"
                target="_blank"
                className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:border-[#437029] hover:text-[#437029] transition"
                aria-label="Shreya on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer" className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {/* Column 1 */}
              <ul className="space-y-2">
                {links.slice(0, 2).map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-slate-700 hover:text-[#437029] transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Column 2 */}
              <ul className="space-y-2">
                {links.slice(2).map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-slate-700 hover:text-[#437029] transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Contact blurb */}
              <div className="rounded-xl bg-[#f1f7f0] p-4 border border-[#dbe8d8]">
                <p className="text-[13px] text-[#2e5b1c]">
                  Open to internships & collabs. Let’s build accessible products.
                </p>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-slate-200/70 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {year} Shreya Valgot. All rights reserved.
          </p>
          <a
            href="#top"
            className="text-xs font-medium text-slate-700 hover:text-[#437029] transition"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
