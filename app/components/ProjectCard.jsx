export default function ProjectCard({
  tag = "iOS",
  title,
  blurb,
  role = "",             // NEW
  tags = [],             // NEW: array of short strings (max 3 is ideal)
  duration = "",
  context = "",
  href = "#",
}) {
  return (
    <a
      href={href}
      className="group block rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-[#C6D7BC]"
    >
      {/* Taller preview area for mockups */}
      <div className="relative h-64 bg-slate-50 flex items-center justify-center">
        <span className="absolute left-4 top-4 inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-white/70 backdrop-blur ring-1 ring-slate-200 text-slate-700">
          {tag}
        </span>

        {/* Drop your phone/web screenshots here later */}
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-white ring-1 ring-slate-200 text-slate-400">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="4" width="14" height="16" rx="3" stroke="currentColor" strokeWidth="1.6"/>
            <circle cx="12" cy="19" r="1.2" fill="currentColor"/>
          </svg>
        </div>

        <p className="absolute inset-x-0 bottom-4 text-center text-slate-400 text-sm">
          Project Preview
        </p>
      </div>

      <div className="p-6">
        {/* Role (optional) */}
        {role && (
          <p className="text-sm text-slate-500 mb-2">{role}</p>
        )}

        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-[#437029]">
          {title}
        </h3>

        <p className="mt-3 text-slate-600 text-[15px] leading-7">
          {blurb}
        </p>

        {/* Tiny tag chips (keep to 2–3) */}
        {tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full bg-slate-50 ring-1 ring-slate-200 px-2.5 py-1 text-xs text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Meta row */}
        <div className="mt-6 flex items-center gap-6 text-slate-500 text-sm">
          {duration && (
            <span className="inline-flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
              {duration}
            </span>
          )}
          {context && (
            <span className="inline-flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
              {context}
            </span>
          )}
          <span className="ml-auto text-[#437029] inline-flex items-center gap-1">
            View
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}
