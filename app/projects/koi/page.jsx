import { ArrowLeft, Briefcase, Smartphone, Clock } from "lucide-react";
import Link from "next/link";

// reuse AccessMuse tint so the look matches
const SIENNA_DARK = "#8A2E10";

export default function Page() {
  return (
    <main className="pb-28">{/* no lg:pl-[260px] for now */}      

      {/* ---- HERO (same structure as AccessMuse) ---- */}
      <section
        id="project-overview"
        style={{
          background:
            "linear-gradient(180deg, rgba(182,62,22,0.04) 0%, rgba(182,62,22,0.00) 70%)",
        }}
      >
        {/* Back to Projects */}
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800"
            aria-label="Back to Projects"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>

        {/* Title + subcopy */}
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 pt-8">
          <h1 className="text-center text-[34px] md:text-[44px] leading-tight font-semibold text-slate-900">
            KOI — Designing an E-commerce UI with Material 3
          </h1>
          <p className="mx-auto mt-3 md:mt-4 max-w-[740px] text-center text-[15px] md:text-[16px] leading-7 text-slate-600">
            A Japanese-inspired e-commerce project to quickly adapt to{" "}
            <span className="font-medium">Google’s Material 3</span> and design
            within a clean, systematic component framework.
          </p>

          {/* ONE centered hero image (swap src) */}

        </div>
      </section>

      {/* ---- OVERVIEW tiles (identical style to AccessMuse) ---- */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-10 pt-8 md:pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-10 gap-x-12">
          <OverviewItem
            icon={<Briefcase size={18} strokeWidth={2} color={SIENNA_DARK} />}
            label="Role"
            value="UI Designer"
          />
          <OverviewItem
            icon={<Smartphone size={18} strokeWidth={2} color={SIENNA_DARK} />}
            label="Platform"
            value="Web (Android design-focused), Desktop"
          />
          <OverviewItem
            icon={<Clock size={18} strokeWidth={2} color={SIENNA_DARK} />}
            label="Duration"
            value="4 Weeks"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="mt-10 md:mt-12 h-px bg-slate-200/70 max-w-[1100px] mx-auto" />

      {/* ---- FINAL PROTOTYPE (same heading sizes/spacing) ---- */}
      <section
        id="final-prototype"
        className="max-w-[1100px] mx-auto px-6 md:px-10 pt-10 md:pt-12"
      >
        <div className="mt-6 md:mt-8 flex justify-center">
        <video
            src="/koi-prototype.mp4"   // keep your mp4 path
            controls
            playsInline
            muted
            className="block w-full max-w-4xl rounded-2xl shadow-xl"
        />
        </div>
        
      </section>

      {/* Divider */}
      <div className="mt-12 md:mt-14 h-px bg-slate-200/70 max-w-[1100px] mx-auto" />

      {/* leave the rest (Why KOI, etc.) for later */}
      <div className="h-24" />


<section className="max-w-[1100px] mx-auto px-6 md:px-10 pt-10 md:pt-12 text-center">
  <h2 className="text-[22px] md:text-[26px] font-semibold text-slate-800">
    Full Case Study
  </h2>
  <p className="mt-3 text-[15px] md:text-[16px] text-slate-600">
    Coming soon — full breakdown of KOI’s process, goals, and iterations will be live in the next few days.
  </p>
</section>
git add .


    </main>
  );
}












/* ---------- helper identical to AccessMuse OverviewItem ---------- */
function OverviewItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="text-[12px] uppercase tracking-wide text-slate-500">
          {label}
        </p>
        <p className="text-[15px] md:text-[16px] text-slate-800 mt-1">
          {value}
        </p>
      </div>
    </div>
  );
}
