"use client";

import { useState } from "react";
import ProjectFilters from "./ProjectFilters";
import ProjectCard from "./ProjectCard";

// ---- 5 projects ----
const PROJECTS = [
  {
    badge: "iOS",
    role: "UX/UI Designer | UX Researcher",
    title: "AccessMuse – Inclusive Museum App",
    blurb:
      "Inclusive museum app with interactive indoor maps and customizable digital exhibit booklets for real-time navigation support.",
    tags: ["WCAG 2.2", "Inclusive Design", "UI Design", "User Research"],
    href: "/projects/accessmuse",
    img: "/AccessMuse Cover Page.png",
    imgHeight: 340,
  },
  {
    badge: "iOS",
    role: "UX Design Lead | Technology Feasibility Lead",
    title: "Arigato – AR Earthquake Safety",
    blurb:
     "Real-time AR guidance that alerts tourists before an earthquake hits and provides fast, visual safety instructions — prototyped for in an indoor setting with Drop, Cover, Hold as the core protocol.",
    tags: ["Augmented Reality", "UX Research", "A/B Testing"],
    href: "/projects/arigato",
    img: "/arigato-cover.png",
    imgHeight: 340,
    comingSoon: true,
  },
  {
    badge: "Web",
    role: "UI Designer",
    title: "KOI – Material 3 E-commerce",
    blurb:
      "E-commerce site built with Material 3 atomic components, system-driven patterns, and precise type/color scales.",
    tags: ["Material 3", "Atomic Design", "E-commerce UI"],
    href: "/projects/koi",
    img: "/koi-cover.png",
    imgHeight: 340,
    comingSoon: true,
  },
  {
    badge: "Research",
    role: "Qualitative UX Researcher",
    title: "AI in UX Evaluation (MedTracks)",
    blurb:
      "Compared ChatGPT heuristic reviews with expert findings; explored human-AI collaboration in evaluation.",
    tags: ["AI", "Heuristics", "UX Research"],
    href: "/projects/medtracks",
    img: "/medtracks-cover.jpeg",
    imgHeight: 340,
    comingSoon: true,
  },
  {
    badge: "Research",
    role: "Quantitative UX Researcher",
    title: "Haptics in Alarm UX",
    blurb:
      "Study on haptic feedback for alarm-setting tasks; SPSS analysis, micro-interactions, behavior insights.",
    tags: ["SPSS", "Haptics", "Micro-interactions"],
    href: "/projects/haptics",
    img: "/haptics-cover.jpeg",
    imgHeight: 340,
    comingSoon: true,
  },
];

const FILTER_KEYS = ["All", "iOS", "Web", "Research"];

export default function ProjectSection() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.badge === filter);

  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 pt-20 pb-28">
      <header className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a]">
          Projects
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          A snapshot across iOS, Web, and Research — accessible and system-driven.
        </p>
      </header>

      <div className="flex justify-center mb-12">
        <ProjectFilters onChange={setFilter} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {list.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
