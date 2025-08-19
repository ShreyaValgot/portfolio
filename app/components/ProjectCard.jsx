// app/components/ProjectCard.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  // top-left badge
  badge = "iOS", // "iOS" | "Web" | "Research"

  // content
  role,                     // e.g., "UX/UI Designer & Researcher"
  title,                    // e.g., "AccessMuse – Inclusive Museum App"
  blurb,                    // short two-line description
  tags = [],                // up to ~4 tags; pass [] to hide row

  // routing + media
  href = "/projects/accessmuse",               // project link
  img = "/AccessMuse Cover Page.png", // banner image (in /public)
  imgAlt = "",

  // layout knobs
  imgHeight = 320,          // banner height in px (try 360–420 if you want more image)
}) {
  return (
    <article
      className="
        group rounded-3xl border border-slate-200 bg-white overflow-hidden
        shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2
      "
    >
      {/* Banner image (full width) */}
      <div className="relative w-full" style={{ height: imgHeight }}>
        <Image
          src={img}
          alt={imgAlt || title}
          fill
          priority={false}
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <span
          className="
            absolute left-4 top-4 inline-flex items-center px-3 py-1 text-xs font-medium
            rounded-full bg-white/90 ring-1 ring-slate-200 text-slate-700
          "
        >
          {badge}
        </span>

        {/* Make the whole banner clickable */}
        <Link href={href} className="absolute inset-0" aria-label={title} />
      </div>

      {/* Body */}
      <div className="p-6 sm:p-7">
        {role && (
          <p className="text-sm text-slate-500 mb-2">{role}</p>
        )}

        <Link href={href} className="block">
          <h3
            className="
              text-xl sm:text-2xl font-semibold text-[#1f2937]
              group-hover:text-[#437029] transition-colors
            "
          >
            {title}
          </h3>
        </Link>

        {blurb && (
          <p className="mt-3 text-[15px] leading-7 text-slate-600">
            {blurb}
          </p>
        )}

        {/* Optional tags row */}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 4).map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-full bg-slate-50 ring-1 ring-slate-200 text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Footer: View link only */}
        <div className="mt-6 flex justify-end">
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-[#437029] hover:text-[#2f511c] font-medium"
          >
            View <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
