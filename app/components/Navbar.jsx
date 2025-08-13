'use client';

// Navbar.jsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close mobile menu when route changes
  useEffect(() => { setOpen(false); }, [pathname]);

  const navigation = [
    { name: "Projects", href: "/", current: pathname === "/" },
    { name: "About", href: "/about", current: pathname === "/about" },
    { name: "Contact", href: "/contact", current: pathname === "/contact" },
  ];

  const linkClasses = (current) =>
    [
      "rounded-[24px] px-6 py-[10px] text-base md:text-lg transition-colors cursor-pointer",
      current
        ? "bg-[#437029] text-white hover:bg-[#567E40]"
        : "text-slate-700 hover:text-[#437029] hover:bg-[#F9FFF5] hover:ring-1 hover:ring-[#C6D7BC]",
    ].join(" ");

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-6 flex justify-between items-center">
        {/* ——— brand (unchanged) ——— */}
        <a
          href="/"
          className="text-2xl font-normal text-slate-900 hover:text-[#437029] cursor-pointer"
        >
          Shreya Valgot
        </a>

        {/* ——— desktop links (unchanged) ——— */}
        <div className="hidden md:flex gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={linkClasses(item.current)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* ——— mobile hamburger (only < md) ——— */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-slate-200 text-slate-700 hover:bg-slate-50"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" className={!open ? "block" : "hidden"}>
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" className={open ? "block" : "hidden"}>
            <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* ——— mobile panel (same link styles, slide-down) ——— */}
      <div
        className={[
          "md:hidden overflow-hidden transition-[max-height] duration-300",
          open ? "max-h-64" : "max-h-0",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-6 pb-4">
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={linkClasses(item.current)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
