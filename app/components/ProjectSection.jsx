"use client";
import { useState } from "react";
import ProjectFilters from "./ProjectFilters";
import ProjectCard from "./ProjectCard";

const ALL = [
  {
    tag: "iOS",
    title: "AccessMuse – Inclusive Museum App",
    role: "UX Researcher & Product Designer",
    blurb:
      "Wayfinding, quiet rooms & alternative content to support diverse needs. WCAG-aligned flows and testing.",
    tags: ["Accessibility", "Inclusive Design", "UX Research"],
    duration: "3 months",
    context: "Case Study",
    href: "#",
  },
  {
    tag: "iOS",
    title: "Arigato – AR Earthquake Safety",
    role: "UX Design Lead",
    blurb:
      "AR guidance for ‘Drop, Cover, Hold’. A/B tests improved clarity and recall; verified technical feasibility.",
    tags: ["AR", "A/B Testing", "Emergency UX"],
    duration: "3 months",
    context: "Case Study",
    href: "#",
  },
  {
    tag: "Web",
    title: "KOI – Material 3 E-commerce",
    role: "UI Designer",
    blurb:
      "Pixel-accurate Material 3 components and atomic design for a cosmetics storefront with accessible patterns.",
    tags: ["Material 3", "E-commerce", "Atomic Design"],
    duration: "2 months",
    context: "Case Study",
    href: "#",
  },
  {
    tag: "Research",
    title: "MedTracks – AI in UX Evaluation",
    role: "Qual Researcher",
    blurb:
      "Compared ChatGPT heuristic reviews to expert feedback; ~70% overlap and ~90% faster triage for teams.",
    tags: ["AI × UX", "Heuristics", "Qualitative"],
    duration: "5 months",
    context: "Research Study",
    href: "#",
  },
  {
    tag: "Research",
    title: "Haptics in Alarm UX",
    role: "Quant Researcher",
    blurb:
      "Within-subject study using SPSS; timing deltas were small, but 60% reported better engagement with haptics.",
    tags: ["Haptic Feedback", "SPSS", "Human Factors"],
    duration: "3 months",
    context: "Research Study",
    href: "#",
  },
];

export default function ProjectSection() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? ALL : ALL.filter((p) => p.tag === filter);

  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 pt-20 pb-24">
      <header className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a]">
          Projects
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Work across iOS, Material-3 Web, and research—system-driven and accessible.
        </p>
      </header>

      <div className="flex justify-center mb-12">
        <ProjectFilters onChange={setFilter} defaultValue="All" />
      </div>

      {/* More breathing room: gap-8 instead of gap-6 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {list.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
