"use client";
import { useState } from "react";

// tiny inline SVG icons so you don't need a library
const IconAll = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);
const IconIOS = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="4" width="14" height="16" rx="3" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="12" cy="19" r="0.9" fill="currentColor"/>
  </svg>
);
const IconWeb = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M3 16h18" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);
const IconResearch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const OPTIONS = [
  { key: "All", label: "All Projects", icon: IconAll },
  { key: "iOS", label: "iOS", icon: IconIOS },
  { key: "Web", label: "Web", icon: IconWeb },
  { key: "Research", label: "Research", icon: IconResearch },
];

export default function ProjectFilters({ onChange, defaultValue = "All" }) {
  const [active, setActive] = useState(defaultValue);

  return (
    <div className="flex flex-wrap gap-4">
      {OPTIONS.map(({ key, label, icon: Icon }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => {
              setActive(key);
              onChange?.(key);
            }}
            className={[
              "inline-flex items-center gap-2 rounded-[28px] px-6 py-3 text-base",
              "transition-colors ring-1",
              isActive
                ? "bg-[#437029] ring-[#437029] text-white"
                : "bg-white text-slate-800 ring-slate-200 hover:bg-[#F9FFF5] hover:text-[#437029] hover:ring-[#C6D7BC]"
            ].join(" ")}
          >
            <Icon />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
