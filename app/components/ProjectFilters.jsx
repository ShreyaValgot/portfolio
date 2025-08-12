"use client";
import { useState } from "react";

// label shown to users -> key used in data.badge (iOS/Web/Research)
const FILTERS = [
  { label: "All Projects", key: "All" },
  { label: "App – iOS",    key: "iOS" },
  { label: "Web – Android", key: "Web" }, // maps to your "Web" badge bucket
  { label: "Research",     key: "Research" },
];

export default function ProjectFilters({ onChange }) {
  const [active, setActive] = useState("All");

  return (
    <div className="flex flex-wrap gap-3">
      {FILTERS.map(({ label, key }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => { setActive(key); onChange?.(key); }}
            className={[
              "rounded-[24px] px-6 py-[10px] text-base md:text-lg transition-colors ring-1",
              isActive
                ? "bg-[#437029] text-white ring-[#437029]"
                : "bg-white text-slate-700 ring-slate-200 hover:bg-[#F9FFF5] hover:text-[#437029] hover:ring-[#C6D7BC]",
            ].join(" ")}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
