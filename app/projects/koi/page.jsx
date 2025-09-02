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



{/* ===================== KOI — CENTERED, RECRUITER-FRIENDLY ===================== */}

{/* WHY (no images, centered) */}
<section id="why" data-label="Why KOI" className="max-w-[900px] mx-auto px-6 md:px-10 pt-14 text-center">
  <h2 className="text-[28px] md:text-[34px] font-semibold text-slate-900">Why I Made KOI</h2>
  <p className="mt-4 text-[17px] leading-8 text-slate-800">
    A focused 4-week sprint to prove I can <span className="font-semibold">learn a new design system quickly </span>
    and build precise UI. I moved beyond my iOS-heavy work into
    <span className="font-semibold"> Google Material 3</span> and treated it like a spec lab: study → recreate → apply.
  </p>

  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
    <span className="rounded-full px-4 py-2 text-sm bg-slate-100 text-slate-800">System-first mindset</span>
    <span className="rounded-full px-4 py-2 text-sm bg-slate-100 text-slate-800">Anatomy-level precision</span>
    <span className="rounded-full px-4 py-2 text-sm bg-slate-100 text-slate-800">Fast adaptation</span>
  </div>

  <blockquote className="mt-6 inline-block text-left max-w-[700px] border-l-4 border-orange-400 pl-4 text-slate-700 italic text-[15px] leading-7">
    KOI is proof I can <span className="font-semibold">ramp up</span>, <span className="font-semibold">recreate to spec</span>, and
    <span className="font-semibold"> work inside a system</span>—not just make pretty screens.
  </blockquote>
</section>

{/* Divider */}
<div className="mt-10 h-px bg-slate-200/70 max-w-[900px] mx-auto" />

{/* WHAT I FOCUSED ON */}
<section id="focus" data-label="Focus" className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 text-center">
  <h2 className="text-[26px] md:text-[30px] font-semibold text-slate-900">What I Focused On</h2>
  <div className="mt-6 grid sm:grid-cols-3 gap-4 text-left">
    <div className="rounded-xl bg-white/70 ring-1 ring-slate-200 p-5">
      <p className="text-[13px] font-semibold text-slate-900">Spec → Tokens</p>
      <p className="mt-1 text-[14px] text-slate-700">Colour roles, elevation overlays, type scale, spacing, motion, focus rings.</p>
    </div>
    <div className="rounded-xl bg-white/70 ring-1 ring-slate-200 p-5">
      <p className="text-[13px] font-semibold text-slate-900">Anatomy → Components</p>
      <p className="mt-1 text-[14px] text-slate-700">Rebuilt M3 components from anatomy: buttons, chips, text fields, selects, tabs, accordions.</p>
    </div>
    <div className="rounded-xl bg-white/70 ring-1 ring-slate-200 p-5">
      <p className="text-[13px] font-semibold text-slate-900">States → Usability</p>
      <p className="mt-1 text-[14px] text-slate-700">Default, hover, pressed, focus, disabled, error, helper/assistive text; keyboard and a11y considered.</p>
    </div>
  </div>
</section>

{/* Divider */}
<div className="mt-10 h-px bg-slate-200/70 max-w-[900px] mx-auto" />

{/* COMPONENT COVERAGE (no images; chips) */}
<section id="coverage" data-label="Component Coverage" className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 text-center">
  <h2 className="text-[26px] md:text-[30px] font-semibold text-slate-900">Component Coverage</h2>
  <p className="mt-4 text-[15px] md:text-[16px] leading-7 text-slate-700">Recreated to Material 3 spec, then applied to KOI flows.</p>

  <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
    {[
      "Buttons (filled/tonal/outlined/text)",
      "Chips (assist/filter/suggestion)",
      "Text fields (filled/outlined)",
      "Select/menus & dropdowns",
      "Tabs & segmented controls",
      "Accordions/expansion",
      "Ratings & review filters",
      "Helper & error text",
    ].map((t) => (
      <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[12px] text-slate-700">{t}</span>
    ))}
  </div>

  <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
    {["Default","Hover","Pressed","Focus-visible","Disabled","Error","Success/Info"].map((t) => (
      <span key={t} className="rounded-full bg-slate-900 text-white px-3 py-1 text-[12px]">{t}</span>
    ))}
  </div>
</section>

{/* Divider */}
<div className="mt-10 h-px bg-slate-200/70 max-w-[900px] mx-auto" />




{/* WHAT THIS PROVES (for recruiters) */}
<section id="proof" data-label="What this proves" className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 text-center">
  <h2 className="text-[26px] md:text-[30px] font-semibold text-slate-900">What This Proves</h2>
  <p className="mt-4 text-[15px] md:text-[16px] leading-7 text-slate-700">
    I can <span className="font-medium">adapt to your design system quickly</span>, design inside constraints, and keep details
    (tokens, states, interaction) consistent across surfaces.
  </p>
  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
    {["Fast ramp-up","Spec accuracy","A11y aware","Systems > screens","Portable skills"].map((t) => (
      <span key={t} className="rounded-full px-4 py-2 text-sm bg-slate-100 text-slate-800">{t}</span>
    ))}
  </div>
</section>


{/* Divider */}
<div className="mt-10 h-px bg-slate-200/70 max-w-[900px] mx-auto" />


{/* ====================== STYLES — MATERIAL COLOUR SYSTEM ====================== */}
<section id="styles" data-label="Styles" className="max-w-[1100px] mx-auto px-6 md:px-10 pt-16">
  <H2>Styles 🎨 — Material 3 Colour System</H2>
  <Lead>
    I treated KOI like a <span className="font-semibold">spec lab</span> — read the Material&nbsp;3 anatomy,
    recreated with precision, and applied it to real UI. I started with roles
    (<K>primary</K>, <K>on-primary</K>, <K>surface</K>, <K>background</K>) to see how interaction and balance travel through states.
  </Lead>

{/* — Material Colour System + Ukiyo-e reference — */}
<div className="mt-10 grid md:grid-cols-[minmax(0,1fr)_max-content] gap-8 md:gap-16 items-start">
  <div>
    <H3>Material Colour System</H3>
    <P>
      I explored the <span className="font-medium">Material 3 Theme Builder</span> to understand how tokens & roles
      map across themes. It’s powerful, but the large style set can slow early exploration, so for this phase
      I <span className="font-medium">stuck with the basics</span> to get usable components out quickly.
    </P>
    <P>
      KOI’s palette draws from <span className="font-medium">Japanese ukiyo-e</span> — warm tones and soft contrast.
      I built a small, manual HSL lightness range and applied Material’s role logic by hand.
    </P>
    <Quote>
      A foundation I can actually design with — structured, understandable, on-brand — while leaving the door open for full tokens later.
    </Quote>
  </div>

  {/* small, soft-corner image with detached caption */}
  <div className="justify-self-center md:justify-self-end">
    <div className="max-w-[420px] w-full rounded-[22px] overflow-hidden ring-1 ring-slate-200 bg-white">
      <img src="/koi/ukiyo-e.png" alt="Ukiyo-e reference" className="w-full h-auto" />
    </div>
    <p className="mt-3 text-center text-[12px] text-slate-600">
      Ukiyo-e references that guided the warm KOI palette.
    </p>
  </div>
</div>



  <br></br>
{/* — Colour Primitives — */}
<div className="mt-12 grid md:grid-cols-[max-content_minmax(0,1fr)] gap-8 md:gap-16 items-start">
  <Figure
    src="/koi/primitives.png"
    alt="Colour primitives in Figma"
    caption="Colour primitives in Figma; names follow HSL lightness."
    className="!max-w-[480px]"        // ← smaller image cap
  />

  <div>
    <H3>Colour Primitives</H3>
    <ul className="mt-4 list-disc pl-5 text-[15px] leading-7 text-slate-700 space-y-2">
      <li><span className="font-medium">Burnt Sienna</span> — primary family used for emphasis and brand warmth.</li>
      <li><span className="font-medium">Absolute greys (R=G=B)</span> — neutral structure for text & surfaces.</li>
      <li><span className="font-medium">Absolute black & white</span> — anchors for extremes.</li>
    </ul>
    <P className="mt-4">
      Blue, green and red are reserved for semantics (success / info / error) when needed.
    </P>

    <H3 className="mt-8">Creating Styles & Exploring Variables</H3>
    <P>
      I converted primitives to Figma styles with clear lightness names (e.g., <K>Sienna 60</K>, <K>Grey 10</K>).
      I also explored Variables to map roles like <K>primary</K> and <K>surface</K>. That logic grows complex across nested components,
      so I prioritised a solid style foundation first and will layer Variables later.
    </P>
  </div>
</div>

<br></br>
<br></br>

{/* — Contrast — */}
<div className="mt-12 grid md:grid-cols-[minmax(0,1fr)_max-content] gap-8 md:gap-16 items-start">
  <div>
    <H3>Designing with Contrast in Mind</H3>
    <P>
      Following Material’s tonal palette logic, I paired mid Sienna with very light surfaces to maintain accessible
      contrast in buttons and body text. One pairing reached <span className="font-medium">5.49:1</span>, meeting
      <span className="font-medium"> WCAG AA</span>.
    </P>
  </div>

  <Figure
    src="/koi/contrast.png"
    alt="Contrast checker"
    caption="Stark check in Figma — verifying KOI’s body text contrast."
    className="!max-w-[320px]"        // ← same small cap as ukiyo image
  />
</div>


<br></br>

  {/* — Notes — */}


{/*
<section id="notes" className="mt-12">
  <H3 className="text-center">Personal Notes</H3>
  <div className="mt-5 max-w-3xl mx-auto">
    <Figure
      src="/koi/notes.png"
      alt="Colour decision notes"
      caption="My quick guide when choosing brand, neutrals and semantic colours."
    />
   
    <ProcessNote>
  Tested Theme Builder to learn role mapping, then switched to a small manual HSL range so I could ship components fast with clear naming.
  <a href="#notes" className="ml-2 underline decoration-slate-300 hover:decoration-slate-600">See my notes →</a>
</ProcessNote>

  </div>
</section>

*/}


</section>


{/* Divider */}
<div className="mt-10 h-px bg-slate-200/70 max-w-[900px] mx-auto" />


{/* ====================== TYPOGRAPHY SYSTEM ====================== */}
<section id="typography" className="max-w-[1100px] mx-auto px-6 md:px-10 pt-14">
  <h2 className="text-center text-[28px] md:text-[34px] font-semibold text-slate-900">
    Typography System
  </h2>

  <p className="mt-4 text-[16px] md:text-[17px] leading-8 text-slate-800 text-center md:text-left">
    I followed Material’s typography guide and used the recommended values directly — including font sizes, weights,
    and line heights — to maintain consistency across the system. I also referred to{" "}
    <a
      href="https://m3.material.io/styles/typography/applying-type"
      target="_blank"
      className="underline decoration-slate-300 hover:decoration-slate-600"
    >
      Material’s “Applying type”
    </a>{" "}
    guidance to understand how styles are intended to be used in practical interfaces.
  </p>

  {/* wider left text column + compact right image */}
  <div className="mt-8 grid md:grid-cols-[minmax(0,1.2fr)_max-content] gap-6 md:gap-12 items-start">
    {/* left: process + UI Text callout */}
    <div>
      <H3>How I worked with the spec</H3>
      <ul className="mt-3 list-disc pl-5 text-[14px] leading-7 text-slate-700 space-y-1">
        <li>Used Material 3 docs + Community type kit as <span className="font-medium">reference</span>, then <span className="font-medium">recreated</span> the styles in Figma (not imported).</li>
        <li>Mapped roles (headline / title / body / label) to KOI needs and named them clearly.</li>
        <li><span className="font-medium">Published</span> the set to the KOI library for reuse across files.</li>
        <li>Kept notes on density, truncation and accessibility for consistent usage.</li>
      </ul>

      {/* — UI Text (custom) highlighted callout — */}
      <div className="mt-8 relative rounded-2xl ring-1 ring-slate-200 bg-slate-50 p-5">
        {/* neutral accent bar */}
        <div className="absolute left-0 top-0 h-full w-1.5 rounded-l-2xl bg-slate-500/80" />

        <p className="text-[12px] uppercase tracking-wide font-semibold text-slate-700">
          UI Text — 100% line-height (custom)
        </p>

        <p className="mt-2 text-[14px] leading-6 text-slate-800">
          Compact text for tight chrome (overlays, chips, filter tags, toolbars). The <span className="font-medium">1.00</span>{" "}
          line-height keeps text vertically centered in <span className="font-medium">32–40px</span> controls with no extra bleed.
        </p>

        {/* tiny live sample */}
        <div className="mt-4 rounded-xl bg-white ring-1 ring-slate-200 px-3 py-2 inline-flex items-center gap-3">
          <span className="text-[13px] leading-[1] text-slate-900">Save</span>
          <span className="text-[13px] leading-[1] text-slate-700">Cancel</span>
          <span className="text-[13px] leading-[1] text-slate-700">Undo</span>
        </div>

        <p className="mt-3 text-[12px] text-slate-600">
          Not a named Material 3 style — a compact variant inspired by M3 density guidance.
        </p>
      </div>
    </div>

    {/* right: reference image (small, right-aligned) */}
        {/* right: reference image (smaller + caption width-matched) */}
        <div className="self-start md:justify-self-end w-full">
        <div className="ml-auto">
            <figure className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] rounded-[16px] overflow-hidden ring-1 ring-slate-200 bg-white">
            <img
                src="/koi/type-community.png"
                alt="Material 3 typography reference used to recreate KOI styles"
                className="w-full h-auto"
            />
            </figure>

            {/* caption constrained to the same max width */}
            <p className="mt-2 ml-auto max-w-[320px] text-left text-[12px] leading-5 text-slate-600">
            Referenced M3 type kit — styles recreated manually and published to the KOI library.
            </p>
        </div>
        </div>



{/* Paper notes — before Figma 
<div className="mt-10">
  <h3 className="text-[18px] md:text-[20px] font-semibold text-slate-900">
    Paper Notes (before Figma)
  </h3>
  <p className="mt-2 text-[14px] leading-7 text-slate-700">
    I first read the Material 3 guidelines and sketched key points to internalise roles,
    density and usage before recreating the styles in Figma.
  </p>

  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
    {["typo-1","typo-2","typo-3","typo-4"].map((n) => (
      <figure
        key={n}
        className="rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white"
      >
        <img
          src={`/koi/${n}.png`}   // change to .jpg if needed
          alt={`Handwritten typography notes ${n.replace("typo-","")}`}
          className="w-full h-full object-cover"
        />
      </figure>
    ))}
  </div>
</div>

*/}

  </div>
</section>








{/* ====================== ELEVATION ====================== */}
<section id="elevation" className="max-w-[1100px] mx-auto px-6 md:px-10 pt-14">
  <h2 className="text-[28px] md:text-[34px] font-semibold text-slate-900">Elevation</h2>
  <p className="mt-3 text-[15px] md:text-[16px] leading-7 text-slate-700">
    Depth follows Material’s 0–5 dp guidance. <span className="font-medium">0–3 dp</span> for
    resting surfaces; <span className="font-medium">4–5 dp</span> for interaction states.
  </p>

  {/* canvas + reference image */}
  <div className="mt-8 grid md:grid-cols-[minmax(0,1fr)_360px] gap-10 items-start">
    {/* left: dp grid */}
    <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-5">
      {/* legend */}
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[12px] text-slate-700">
          Resting · 0–3 dp
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[12px] text-slate-700">
          Interaction · 4–5 dp
        </span>
      </div>

      {/* the scale */}
      <div className="mt-5 grid grid-cols-2 md:grid-cols-6 gap-4">
        {[0,1,2,3,4,5].map(( dp) => <ElevationCard key={ dp} dp={ dp} />)}
      </div>

      {/* note */}
      <div className="mt-4 rounded-xl bg-slate-50 ring-1 ring-slate-200 px-4 py-3 text-[13px] text-slate-700">
        Shadows are tokenized and reused across buttons, cards and overlays.
      </div>
    </div>

    {/* right: small Figma panel (kept compact) */}
    <div className="justify-self-end">
      <figure className="max-w-[360px] w-full rounded-[16px] overflow-hidden ring-1 ring-slate-200 bg-white">
        <img
          src="/koi/elevation-light.png"
          alt="Elevation styles set as tokens in Figma"
          className="w-full h-auto"
        />
      </figure>
      <figcaption className="mt-2 text-[12px] text-slate-600">
        Elevation styles tokenized in Figma.
      </figcaption>
    </div>
  </div>
</section>







  {/* Optional: tiny study notes gallery 
  <div className="mt-10 grid grid-cols-2 gap-6">

    <Figure src="/koi/type-note-1.png" alt="Type note 1" caption="Study notes — roles & density." className="!max-w-[360px] mx-auto" />
    <Figure src="/koi/type-note-2.png" alt="Type note 2" caption="Spacing & truncation patterns." className="!max-w-[360px] mx-auto" />
    <Figure src="/koi/type-note-3.png" alt="Type note 3" caption="Labels vs buttons." className="!max-w-[360px] mx-auto" />
    <Figure src="/koi/type-note-4.png" alt="Type note 4" caption="Accessibility considerations." className="!max-w-[360px] mx-auto" />
  </div>

  */}




{/* Divider */}
<div className="mt-10 h-px bg-slate-200/70 max-w-[900px] mx-auto" />


{/* ====================== COMPONENTS ====================== */}
<section id="components" className="max-w-[1100px] mx-auto px-6 md:px-10 pt-16">
  <h1 className="text-center text-[28px] md:text-[34px] font-semibold text-slate-900">
    Components 🧩
  </h1>

  {/* ---------------------- Buttons ---------------------- */}
  <div id="buttons" className="mt-12 grid md:grid-cols-[minmax(0,1.25fr)_max-content] gap-12 items-start">
    {/* LEFT — copy (wider) */}
    <div>
      <h3 className="text-[20px] md:text-[24px] font-semibold text-slate-900">Buttons</h3>
      <p className="mt-3 text-[15px] md:text-[16px] leading-7 text-slate-700">
        I started by reading the Material 3 button anatomy and writing short notes to
        internalise the implementation. From there I implemented all five button types and
        documented their states for consistent interaction.
      </p>

      {/* types */}
      <p className="mt-6 text-[13px] font-semibold text-slate-900">Types</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {["Filled","Tonal","Elevated","Outlined","Text"].map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>

      {/* states */}
      <p className="mt-6 text-[13px] font-semibold text-slate-900">States</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {["Enabled","Hovered","Focused","Pressed","Disabled"].map((t) => (
          <Pill key={t} tone="dark">{t}</Pill>
        ))}
      </div>

      <p className="mt-6 text-[15px] md:text-[16px] leading-7 text-slate-700">
        Icon-button combos support head (left) and tail (right) icons via instance swapping,
        and work across all types and states.
      </p>
    </div>

    {/* RIGHT — variants image (small + inner padding + caption) */}
{/* RIGHT — variants image (smaller, caption below; nothing inside the frame) */}
<div className="justify-self-center md:justify-self-end">
  <ImageWithCaption
    src="/koi/button-varinats.png"
    alt="Material 3 button variants recreated for KOI"
    caption="Five M3 types recreated to spec; states documented."
    className="w-[320px] sm:w-[340px] md:w-[360px]"
  />
</div>

  </div>

  {/* --- Button anatomy + real-world takeaway (image left, no box) --- */}
<section aria-labelledby="btn-anatomy" className="mt-8">
  <h3
    id="btn-anatomy"
    className="text-[18px] md:text-[20px] font-semibold text-slate-900"
  >
    Button Anatomy → Why Style Priority Matters
  </h3>

  <div className="mt-3 grid md:grid-cols-[220px,1fr] gap-4 items-start">
    {/* LEFT: anatomy image (true size, thin stroke) */}
    <figure className="order-1">
      <div className="w-[220px] rounded-[14px] overflow-hidden ring-1 ring-slate-200 bg-white">
        <img
          src="/koi/button-notes-card.png"
          alt="Button anatomy notes"
          className="block w-full h-auto"
        />
      </div>
      <figcaption className="mt-1 text-[12px] text-slate-600">
        Early anatomy notes to align naming and state structure.
      </figcaption>
    </figure>

    {/* RIGHT: concise explanation */}
    <div className="order-2">
      <p className="text-[14px] leading-7 text-slate-800">
        In Subway’s app, the primary action “Scan in Restaurant” used an
        <em> outlined</em> style, which hurt discoverability. Material’s style
        priority makes it clear a<strong> filled</strong> button carries the
        right emphasis for critical CTAs. Watching real users confirmed how
        style choice directly affects flow and visibility.
      </p>
    </div>
  </div>
</section>



  {/* ---------------------- Icon Buttons ---------------------- */}
  <div id="icon-buttons" className="mt-16 grid md:grid-cols-[minmax(0,1.25fr)_max-content] gap-12 items-start">
    <div>
      <h3 className="text-[20px] md:text-[22px] font-semibold text-slate-900">Icon Buttons</h3>
      <p className="mt-3 text-[15px] md:text-[16px] leading-7 text-slate-700">
        Icon-only buttons for the same five styles (Elevated, Filled, Tonal, Outlined, Text).
        Icons are <strong>24×24</strong>; the touch target is <strong>48×48</strong>.
        All states are covered.
      </p>
      <p className="mt-3 text-[15px] md:text-[16px] leading-7 text-slate-700">
        KOI uses round containers to match the button family and the brand’s softer feel.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {["24×24 icon","48×48 target","All five states","Round containers"].map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
    </div>

    {/* Right — small image with inner padding + caption */}
    <div className="justify-self-center md:justify-self-end">
      <FigurePad
        src="/koi/icon-buttons.png"
        alt="Icon buttons across five Material styles"
        caption="Icon-only buttons: 24×24 icons inside 48×48 targets."
        className="!max-w-[360px]"
        heightClass="h-[300px]"
        padClass="p-2.5"
      />
    </div>
  </div>
</section>



{/* Divider */}
<div className="mt-10 h-px bg-slate-200/70 max-w-[900px] mx-auto" />





{/* ====================== HOME PAGE ====================== */}
<section id="home-page" className="max-w-[1100px] mx-auto px-6 md:px-10 pt-14">
  <h2 className="text-center text-[28px] md:text-[34px] font-semibold text-slate-900">
    Home Page 🏠
  </h2>

  {/* ---- Hi-Fidelity (local MP4) ---- */}
  <div className="mt-8">
    <h3 className="text-[18px] md:text-[20px] font-semibold text-slate-900 text-center">
      Hi-Fidelity of Home Page
    </h3>

    <div className="mt-5 rounded-[16px] overflow-hidden ring-1 ring-slate-200 bg-white">
      <video
        src="/koi/home-hifi.mp4"     
        controls
        playsInline
        className="w-full h-auto"
        aria-label="KOI — Home page hi-fi prototype"
      />
    </div>
  </div>

  {/* extra space after video */}
  <div className="mt-10" />

  {/* ---- Navigation bar redesign ---- */}
  <div>
    <h3 className="text-[20px] md:text-[22px] font-semibold text-slate-900">
      Navigation Bar Redesign — Prioritising Utility Over Space
    </h3>

    {/* full-width intro paragraph */}
    <p className="mt-3 text-[15px] md:text-[16px] leading-7 text-slate-700">
      The first version looked calm and spacious — but in a live product, every pixel and every
      click counts. If “Home” or key categories take effort to locate, frustration builds and
      drop-off increases. I moved to a compact, focused bar that reduces scan time and makes the
      primary routes obvious.
    </p>

    {/* bullets */}
    <ul className="mt-5 list-disc pl-5 text-[15px] leading-7 text-slate-700 space-y-1">
      <li>Left-aligned logo doubles as a clear <span className="font-medium">Home</span> button.</li>
      <li>Fewer top-level options for quicker scanning.</li>
      <li>Critical actions (Search, Sign in) visually separated for clarity.</li>
    </ul>

    {/* big image BELOW the copy — caption outside frame */}
    <div className="mt-8 mx-auto w-full max-w-[820px]">
      <FramedImage src="/koi/nav_bar_spacious_to_smart.png" alt="KOI navigation — from spacious to focused" />
      <p className="mt-2 text-[12px] text-slate-600 text-center">
        From spacious to focused: fewer choices, clearer actions, faster route to Home.
      </p>
    </div>
  </div>

  {/* more space before next block */}
  <div className="mt-26" />

  {/* ---- Component-Level Prototyping (wishlist demo on the right) ---- */}
  <div className="grid md:grid-cols-[minmax(0,1.25fr)_max-content] gap-10 items-start">
    {/* LEFT — wider text */}
    <div>
      <h3 className="text-[20px] md:text-[22px] font-semibold text-slate-900">Component-Level Prototyping</h3>
      <p className="mt-3 text-[15px] md:text-[16px] leading-7 text-slate-700">
        Almost every element — from cards to icons — was built and tested using a
        <span className="font-medium"> component-level prototyping</span> method. Working at the
        <span className="font-medium"> atomic level</span> kept interactions modular, reusable, and easy to update.
        It also meant wishlist, hover, and focus behaviours were consistent everywhere.
      </p>
    </div>

    {/* RIGHT — smaller image, caption below */}
    <div className="justify-self-center md:justify-self-end w-[260px] sm:w-[320px] md:w-[340px]">
      <FramedImage src="/koi/wishlist-component.png" alt="KOI wishlist component" />
      <p className="mt-2 text-[12px] text-slate-600">
        Wishlist interaction: save/unsave with clear hover, pressed and focus states.
      </p>
    </div>
  </div>

  {/* more space before product cards */}
  <div className="mt-26" />

  
  {/* ---- Product cards (side-by-side, no border/frame) ---- */}
<div className="mt-16">
  <h3 className="text-left text-[20px] md:text-[22px] font-semibold text-slate-900">
  Product Cards — Elevated
    </h3>

    <p className="mt-3 text-left text-[15px] md:text-[16px] leading-7 text-slate-700 max-w-none">
    Material&nbsp;3 offers several card styles. For KOI, I chose the <span className="font-medium">Elevated</span> variant
    and built the two essentials — <span className="font-medium">Default</span> and <span className="font-medium">Hover</span> —
    to understand the Material interaction model and cover what’s needed right now. The system is set up so additional
    variants/states can be added later without rework.
    </p>


  {/* side-by-side + centered */}
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
    <div className="w-[240px] sm:w-[300px] md:w-[300px]">
      {/* plain image: no ring, no clipping, preserves the card's own shadow */}
      <img
        src="/koi/StateDefault_StyleElevated.png"
        alt="Product card — Default, Elevated"
        className="block w-full h-auto"
      />
      <p className="mt-2 text-[12px] text-slate-600 text-center">Default — Elevated</p>
    </div>

    <div className="w-[240px] sm:w-[300px] md:w-[300px]">
      <img
        src="/koi/StateHover_StyleElevated.png"
        alt="Product card — Hover, Elevated"
        className="block w-full h-auto"
      />
      <p className="mt-2 text-[12px] text-slate-600 text-center">Hover — Elevated</p>
    </div>
  </div>
</div>

</section>

{/* Divider */}
<div className="mt-10 h-px bg-slate-200/70 max-w-[900px] mx-auto" />




{/* Divider */}
<div className="mt-16 h-px bg-slate-200/70 max-w-[900px] mx-auto" />

{/* ====================== PRODUCT PAGE ====================== */}
<section id="product" className="max-w-[1100px] mx-auto px-6 md:px-10 pt-14">
  <h2 className="text-left text-[28px] md:text-[34px] font-semibold text-slate-900">
    Product Page 🛍️
  </h2>

  {/* Hi-Fi video (local mp4 preferred) */}
  <div className="mt-6 flex justify-center">
    <div className="rounded-[16px] overflow-hidden ring-1 ring-slate-200 bg-white">
      <video
        src="/koi/product-section.mp4"
        controls
        playsInline
        className="block w-full max-w-4xl h-auto"
        aria-label="KOI — Product page hi-fi prototype"
      />
    </div>
  </div>

  {/* breathing room after video */}
  <div className="mt-24" />

  {/* ---------- Breadcrumbs ---------- */}
    <div className="mt-12">
    <h3 className="text-[20px] md:text-[22px] font-semibold text-slate-900">Breadcrumbs</h3>
    <p className="mt-3 text-[15px] md:text-[16px] leading-7 text-slate-700">
        <span className="font-medium">Non-negotiable on web.</span> Breadcrumbs give clear
        orientation and an always-visible path back. They reduce uncertainty, prevent getting
        lost, and make it obvious where the user is at any moment.
    </p>
    </div>

  {/* big gap before next topic */}
  <div className="mt-24" />

  {/* ---------- Size selection (adaptive) ---------- */}
  {/* ---------- Size selection (adaptive, centered smaller) ---------- */}
<div className="mt-14">
  <h3 className="text-[20px] md:text-[22px] font-semibold text-slate-900">Size Selection</h3>
  <p className="mt-3 text-[15px] md:text-[16px] leading-7 text-slate-700">
    In e-commerce, <span className="font-medium">every micro-interaction adds up</span>.
    Adding a needless step—like forcing a size when it’s obvious—creates friction at scale.
  </p>
  <p className="mt-3 text-[15px] md:text-[16px] leading-7 text-slate-700">
    <span className="font-medium">Adaptive approach:</span> Accessories auto-select “One Size”;
    apparel shows S–XL and a <span className="font-medium">tonal</span> confirmation appears once chosen.
  </p>

  {/* smaller + centered with comfy gap */}
  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
    <Frame
      src="/koi/size-apparel.png"
      alt="Apparel size flow (S–XL)"
      widthClass="max-w-[360px]"          // smaller
      imgClass="max-h-[220px] object-contain"
      caption="Apparel — selectable sizes (S–XL)."
      pad
    />
    <Frame
      src="/koi/size-accessory.png"
      alt="Accessory auto One Size"
      widthClass="max-w-[360px]"          // smaller
      imgClass="max-h-[220px] object-contain"
      caption="Accessories — “One Size” pre-selected."
      pad
    />
  </div>
</div>


  <div className="mt-24" />


    {/* ---------- Button variants (image below, medium) ---------- */}
    <div className="mt-16">
    <h3 className="text-[20px] md:text-[22px] font-semibold text-slate-900">
        Button Variants for Action Clarity
    </h3>
    <p className="mt-3 text-[15px] md:text-[16px] leading-7 text-slate-700">
        Avoid repeating the brand colour for every action. Neutral secondary buttons (greys)
        preserve emphasis for the primary CTA and reduce visual fatigue.
    </p>

    {/* medium, centered, below the copy */}
    <div className="mt-8 flex justify-center">
        <Frame
        src="/koi/reviews-buttons.png"
        alt="Reviews area with secondary button variants"
        widthClass="max-w-[640px]"          // medium
        imgClass="max-h-[320px] object-contain"
        caption="Secondary greys keep the primary CTA distinct."
        />
    </div>
    </div>


  <div className="mt-24" />

    {/* ---------- Dropdown Interaction (image below, medium) ---------- */}
    <div className="mt-16">
    <h3 className="text-[20px] md:text-[22px] font-semibold text-slate-900">
        Dropdown Interaction — Component-Level Prototyping
    </h3>
    <p className="mt-3 text-[15px] md:text-[16px] leading-7 text-slate-700">
        Each dropdown is a component, so selected / hover / switch states behave correctly
        in context — useful for filters like <em>Highest Rating</em> or <em>Only Pictures</em>.
    </p>

    {/* medium, centered, below the copy */}
    <div className="mt-8 flex justify-center">
        <Frame
        src="/koi/reviews-dropdown.png"
        alt="Dropdown component states in reviews"
        widthClass="max-w-[640px]"          // medium
        imgClass="max-h-[300px] object-contain"
        caption="Component-level prototype — consistent states."
        />
    </div>
    </div>

</section>

{/* Divider */}
<div className="mt-10 h-px bg-slate-200/70 max-w-[900px] mx-auto" />


{/* ====================== SIGN UP / SIGN IN ====================== */}
<section id="auth" className="max-w-[1100px] mx-auto px-6 md:px-10 pt-16">
  <h2 className="text-left text-[28px] md:text-[34px] font-semibold text-slate-900">
    Sign up / Sign in 📝
  </h2>

  {/* Hi-Fi video (prefer local MP4) */}
  <div className="mt-6 flex justify-center">
    <video
      src="/koi/signup-hifi.mp4"             // put your mp4 here
      controls
      playsInline
      muted
      className="block w-full max-w-4xl rounded-2xl shadow-xl"
      aria-label="KOI — Sign up / Sign in hi-fi prototype"
    />
  </div>

  {/* Text field components */}
  <h3 className="mt-12 text-[20px] md:text-[22px] font-semibold text-slate-900">
    Text Field Components
  </h3>

  <p className="mt-3 text-[15px] md:text-[16px] leading-7 text-slate-700 max-w-[900px]">
    For the form elements, I used <span className="font-medium">Material&nbsp;3’s outlined text fields</span>
    instead of filled ones. Because the interface already carries a strong primary colour,
    outlined fields keep the layout lighter and more balanced.
  </p>

  <ul className="mt-4 list-disc pl-5 text-[15px] leading-7 text-slate-700 max-w-[900px] space-y-1">
    <li><span className="font-medium">Outlined</span> fields feel cleaner and less visually heavy.</li>
    <li>A working <span className="font-medium">caret</span> (blinking cursor) is shown for realistic prototyping.</li>
    <li>Both <span className="font-medium">regular</span> and <span className="font-medium">error</span> states are included.</li>
    <li>A subtle <span className="font-medium">cream background</span> separates the inputs from the white canvas without overwhelming it.</li>
  </ul>


{/* Image (outer rounded frame, inner image square, no clipping) */}
        <div className="mt-10 flex justify-center">
        <div className="w-full max-w-[680px] rounded-[16px] ring-1 ring-slate-200 bg-white p-4">
            <img
            src="/koi/tf-auth-outlined.png"
            alt="Outlined text fields for Sign up / Sign in — regular and error states"
            className="block w-full h-auto"  // no rounded here
            />
        </div>
        </div>
        <p className="mt-2 text-[12px] text-slate-600 text-center">
        Outlined text fields — regular & error states with subtle cream field background.
        </p>

</section>




{/* ====================== CHECKBOX STATES ====================== */}
{/* ====================== CHECKBOX STATES ====================== */}
<section id="checkbox" className="max-w-[1100px] mx-auto px-6 md:px-10 pt-14">
  <h2 className="text-left text-[28px] md:text-[34px] font-semibold text-slate-900">
    Checkbox States
  </h2>

  <div className="mt-6 grid md:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
    {/* LEFT: copy (full width of the left column) */}
    <div className="max-w-[720px]">
      <p className="text-[15px] md:text-[16px] leading-7 text-slate-700">
        For the <span className="font-medium">“Stay signed in”</span> interaction, I used
        Material&nbsp;3’s checkbox component with all core states:
        <span className="font-medium"> default</span>,
        <span className="font-medium"> hover</span>, and
        <span className="font-medium"> pressed</span> — for both
        <span className="font-medium"> checked</span> and
        <span className="font-medium"> unchecked</span>.
      </p>

      <p className="mt-3 text-[15px] md:text-[16px] leading-7 text-slate-800">
        Because this is a <span className="font-medium">standalone action</span>, I intentionally
        skipped the <span className="font-medium">indeterminate</span> state (reserved for parent–child lists).
      </p>

      {/* bullets clearly visible */}
      <ul className="mt-5 list-disc pl-5 space-y-2 text-[15px] leading-7 text-slate-700">
        <li>Followed Material 3 checkbox anatomy.</li>
        <li>Used the <span className="font-medium">primary colour</span> for checked state consistency.</li>
        <li>Added state layers for hover/pressed feedback.</li>
        <li>Center-aligned icon for balance and clarity.</li>
      </ul>
    </div>

    {/* RIGHT: smaller anatomy image, nudged up a touch */}
<div className="justify-self-start md:justify-self-end md:-mt-2">
  <figure className="w-[200px] sm:w-[220px] md:w-[240px] rounded-[16px] overflow-hidden ring-1 ring-slate-200 bg-white">
    <img
      src="/koi/checkbox.png"
      alt="Material 3 checkbox anatomy sketch"
      className="w-full h-auto"
    />
  </figure>
  <figcaption className="mt-2 text-right text-[12px] text-slate-600">
    Material 3 checkbox anatomy (structure & pixel spec).
  </figcaption>
</div>
  </div>

  {/* BELOW: two smaller images, side-by-side, centered */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
    <div className="w-full max-w-[380px]">
      <figure className="rounded-[16px] ring-1 ring-slate-200 bg-white p-3">
        <img
          src="/koi/checkbox-states.png"     // all states image
          alt="All checkbox states — checked/unchecked across default, hover, pressed"
          className="block w-full h-auto max-h-[240px] object-contain"
        />
      </figure>
      <p className="mt-2 text-[12px] text-slate-600 text-center">
        All core states: default, hover, pressed — for checked & unchecked.
      </p>
    </div>

    <div className="w-full max-w-[380px]">
      <figure className="rounded-[16px] ring-1 ring-slate-200 bg-white p-3">
        <img
          src="/koi/checkbox-auth.png"       // applied in Sign up / Sign in
          alt="Checkbox used in Sign up / Sign in form"
          className="block w-full h-auto max-h-[240px] object-contain"
        />
      </figure>
      <p className="mt-2 text-[12px] text-slate-600 text-center">
        Applied in the Sign up / Sign in form (“Stay signed in”).
      </p>
    </div>
  </div>
</section>


{/* Divider */}
<div className="mt-10 h-px bg-slate-200/70 max-w-[900px] mx-auto" />

{/* ====================== REFLECTIONS ====================== */}
<section id="reflections" className="max-w-[1100px] mx-auto px-6 md:px-10 pt-16">
  <h2 className="text-center text-[28px] md:text-[34px] font-semibold text-slate-900">
    Learning to Build with Material 3 — Reflections
  </h2>

  {/* 3 concise cards */}
  <div className="mt-8 grid gap-6 md:grid-cols-3">
    {/* Getting started */}
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
      <p className="text-[13px] font-semibold text-slate-900">🚀 Getting Started</p>
      <p className="mt-2 text-[14px] leading-7 text-slate-700">
        The first mile was slow: learning <span className="font-medium">anatomy</span> and
        <span className="font-medium"> colour roles</span>. Buttons took the longest. Once I moved to
        cards, text fields and checkboxes, speed and confidence picked up.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {["Read spec → recreate", "Test states", "Apply to flows"].map((t) => (
          <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[12px] text-slate-700">{t}</span>
        ))}
      </div>
    </div>

    {/* What I learned */}
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
      <p className="text-[13px] font-semibold text-slate-900">🔍 What I Learned</p>
      <ul className="mt-2 space-y-2 text-[14px] leading-7 text-slate-700">
        <li>Systems ≠ parts. It’s about <span className="font-medium">clarity & flow</span>, not just components.</li>
        <li>Tokens + states keep decisions consistent across surfaces.</li>
        <li>Spec accuracy upfront reduces rework later.</li>
      </ul>
      {/* NEW: chips for consistency with the first card */}
      <div className="mt-4 flex flex-wrap gap-2">
        {[
          "Systems-first",
          "Consistency > novelty",
          "A11y mindful",
          "Fast adaptation",
         
        ].map((t) => (
          <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[12px] text-slate-700">{t}</span>
        ))}
      </div>
    </div>

    {/* Project focus */}
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
      <p className="text-[13px] font-semibold text-slate-900">🎯 Project Focus</p>
      <p className="mt-2 text-[14px] leading-7 text-slate-700">
        Explore <span className="font-medium">Material 3</span> and show <span className="font-medium">Figma prototyping</span> depth,
        while learning how design decisions cascade across components.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {["Spec parity", "Accessible contrast", "Component states"].map((t) => (
          <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[12px] text-slate-700">{t}</span>
        ))}
      </div>
    </div>
  </div>

  {/* Quote */}
  <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
    <p className="text-[14px] leading-7 text-slate-800 italic">
      “Getting hands-on with Material 3 helped me connect the dots between components, structure, and interaction.
      I’m still learning — but I understand the foundations and where to go deeper.”
    </p>
  </div>

  {/* Mentorship / guidance ask */}
  <div className="mt-8 grid gap-6 md:grid-cols-2 items-start">
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
      <p className="text-[13px] font-semibold text-slate-900">🧭 Where I’d Love Guidance</p>
      <ul className="mt-3 list-disc pl-5 space-y-2 text-[14px] leading-7 text-slate-700">
        <li>Best practice for mapping <span className="font-medium">Figma Variables → tokens</span> (light/dark, roles, states).</li>
        <li>Motion tokens: <span className="font-medium">durations/easing</span> that align with M3 across surfaces.</li>
        <li>Scaling component libraries for <span className="font-medium">large systems</span> without bloat (slots/variants, docs).</li>
        <li>dp ↔ px conversion across platforms — practical guidance to stay consistent.</li>
        <li>Practical dev handoff—mapping to M3 libraries (e.g., MUI) cleanly.</li>
      </ul>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
      <p className="text-[13px] font-semibold text-slate-900">🛠️ What’s Next</p>
      <ul className="mt-3 list-disc pl-5 space-y-2 text-[14px] leading-7 text-slate-700">
        <li>Introduce variables for colour roles and type across themes.</li>
        <li>Harden component docs (usage rules & edge cases).</li>
        <li>Broaden flows (cart/checkout) with the same system discipline.</li>
      </ul>
      <p className="mt-4 text-[14px] leading-7 text-slate-700">
        If you’ve shipped Material at scale, I’d love a quick review or a couple of pointers.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <a href="mailto:shreyavalgot8@gmail.com" className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-[13px] font-medium text-slate-800 hover:border-slate-400">
          Share feedback
        </a>
        <a href="/#contact" className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-[13px] text-slate-700 hover:border-slate-400">
          Coffee chat ☕
        </a>
      </div>
    </div>
  </div>
</section>




<br></br>
<br></br>
<br></br>









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
function StyleCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
      <p className="text-[13px] font-semibold text-slate-900">{title}</p>
      <p className="mt-2 text-[14px] leading-7 text-slate-700">{children}</p>
    </div>
  );
}

function Swatch({ name, hex, border = false }) {
  return (
    <div className="text-center">
      <div className={`h-14 rounded-xl ${border ? "ring-1 ring-slate-200" : ""}`} style={{ backgroundColor: hex }} />
      <p className="mt-2 text-[12px] text-slate-700">{name}</p>
      <p className="text-[11px] text-slate-500">{hex}</p>
    </div>
  );
}



/* ---------- Typography helpers: consistent scale ---------- */
function H2({ children }) {
  return <h2 className="text-center text-[28px] md:text-[34px] font-semibold text-slate-900">{children}</h2>;
}
function H3({ children, className = "" }) {
  return <h3 className={`text-[18px] md:text-[20px] font-semibold text-slate-900 ${className}`}>{children}</h3>;
}
function Lead({ children }) {
  return <p className="mt-4 text-[16px] md:text-[17px] leading-8 text-slate-800">{children}</p>;
}
function P({ children, className = "" }) {
  return <p className={`mt-4 text-[15px] md:text-[16px] leading-7 text-slate-700 ${className}`}>{children}</p>;
}
function K({ children }) {
  return <code className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[12px] text-slate-700">{children}</code>;
}
function Quote({ children }) {
  return (
    <blockquote className="mt-5 border-l-4 border-orange-400 pl-4 text-slate-700 italic text-[15px] leading-7">
      {children}
    </blockquote>
  );
}


/* ---------- Simple contrast demo ---------- */
function ContrastPair({ fg, bg, label, ratio }) {
  return (
    <div className="w-full max-w-md rounded-xl ring-1 ring-slate-200 overflow-hidden">
      <div className="px-4 py-3 text-[13px] text-slate-700 bg-slate-50 border-b border-slate-200">
        {label} — <span className="font-medium">{ratio}</span>
      </div>
      <div className="p-6" style={{ backgroundColor: bg }}>
        <span className="rounded-md px-3 py-1 text-[13px]" style={{ color: fg, background: "rgba(255,255,255,0.08)" }}>
          Aa — Body text sample
        </span>
      </div>
    </div>
  );
}

/* ---------- Figure (sizeable, soft corners, detached caption) ---------- */
function Figure({ src, alt, caption, size = "md", className = "" }) {
  // simple size map; tweak values if you want
  const maxW = {
    sm: "max-w-[520px]",
    md: "max-w-[700px]",
    lg: "max-w-[900px]",
  }[size] ?? "max-w-[700px]";

  return (
    <div className={`mx-auto ${maxW} w-full ${className}`}>
      {/* image frame with soft corners + subtle ring like AccessMuse */}
      <div className="rounded-[22px] overflow-hidden ring-1 ring-slate-200 bg-white">
        <img src={src} alt={alt} className="w-full h-auto" />
      </div>

      {/* detached caption below (not attached to the image frame) */}
      {caption ? (
        <p className="mt-3 text-center text-[12px] text-slate-600">
          {caption}
        </p>
      ) : null}
    </div>
  );
}



function ProcessNote({ children }) {
  return (
    <p className="mt-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] leading-6 text-slate-700">
      {children}
    </p>
  );
}

function TypeRow({ label, size, sample, className = "" }) {
  return (
    <div className="flex items-baseline justify-between gap-6">
      <div>
        <p className="text-[12px] uppercase tracking-wide text-slate-500">{label}</p>
        <div className={`mt-1 text-slate-900 ${className}`}>{sample}</div>
      </div>
      <span className="text-[12px] text-slate-500">{size}</span>
    </div>
  );
}


function TypeSpec({ label, sizeNote, children }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-6">
        <p className="text-[12px] uppercase tracking-wide text-slate-500">{label}</p>
        <span className="text-[12px] text-slate-500">{sizeNote}</span>
      </div>
      <div className="mt-1">{children}</div>
    </div>
  );
}
function Pill({ children, tone = "light" }) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-[12px] leading-none";
  const light = "border border-slate-200 bg-slate-50 text-slate-700";
  const dark  = "bg-slate-900 text-white";
  return <span className={[base, tone === "dark" ? dark : light].join(" ")}>{children}</span>;
}



/** Padded figure: clamps height + object-contain so tall images never crop */
function FigurePad({ src, alt, caption, className = "", heightClass = "h-[340px]" }) {
  return (
    <figure className={`rounded-[16px] overflow-hidden ring-1 ring-slate-200 bg-white ${className}`}>
      <div className={`p-3 ${heightClass}`}>
        <img src={src} alt={alt} className="w-full h-full object-contain" />
      </div>
      {caption && (
        <figcaption className="px-3 pb-3 text-[12px] text-slate-600">{caption}</figcaption>
      )}
    </figure>
  );
}

/** Softer cream observation card */
function ObservationCream({ title = "Observation", children }) {
  return (
    <div className="rounded-2xl bg-[#FFF8EE] ring-1 ring-[#F3E6D8] p-5 text-slate-800">
      <p className="text-[12px] uppercase tracking-wide font-semibold text-[#6B5330]">{title}</p>
      <p className="mt-2 text-[14px] leading-7">{children}</p>
    </div>
  );
}

function ImgFramePad({ src, alt, className = "", heightClass = "h-[340px]", padClass = "p-3" }) {
  return (
    <figure className={`rounded-[16px] overflow-hidden ring-1 ring-slate-200 bg-white ${className}`}>
      <div className={`${padClass} ${heightClass}`}>
        <img src={src} alt={alt} className="w-full h-full object-contain" />
      </div>
    </figure>
  );
}


/** Framed image with NO inner padding (tight) — no caption */
function FigureTight({ src, alt, caption, className = "", heightClass = "" }) {
  return (
    <figure className={`rounded-[16px] overflow-hidden ring-1 ring-slate-200 bg-white ${className}`}>
      <div className={heightClass}>
        <img src={src} alt={alt} className={`w-full ${heightClass ? "h-full object-contain" : "h-auto"}`} />
      </div>
      {caption && (
        <figcaption className="px-3 py-2 text-[12px] text-slate-600">{caption}</figcaption>
      )}
    </figure>
  );
}

/** Image frame with border; caption is OUTSIDE the frame */
function ImageWithCaption({ src, alt, caption, className = "" }) {
  return (
    <div className={className}>
      <div className="rounded-[16px] overflow-hidden ring-1 ring-slate-200 bg-white">
        <img src={src} alt={alt} className="block w-full h-auto" />
      </div>
      {caption && (
        <p className="mt-2 text-[12px] text-slate-600">{caption}</p>
      )}
    </div>
  );
}

/** Bare image at its natural size with only a stroke (no inner padding) */
function BareImage({ src, alt, className = "" }) {
  return (
    <div className={`inline-block rounded-[16px] overflow-hidden ring-1 ring-slate-200 bg-white ${className}`}>
      <img src={src} alt={alt} className="block w-full h-auto" />
    </div>
  );
}

function getElevation(dp) {
  switch (dp) {
    case 0:
      return "none";
    case 1: // Figma exact: 0,1,2,0 @30% + 0,1,3,1 @15%
      return "0px 1px 2px rgba(0,0,0,.30), 0px 1px 3px 1px rgba(0,0,0,.15)";
    case 2:
      return "0px 2px 4px rgba(0,0,0,.28), 0px 2px 3px 1px rgba(0,0,0,.14)";
    case 3:
      return "0px 4px 8px rgba(0,0,0,.26), 0px 2px 4px 1px rgba(0,0,0,.14)";
    case 4:
      return "0px 6px 12px rgba(0,0,0,.24), 0px 3px 6px 1px rgba(0,0,0,.14)";
    case 5:
      return "0px 8px 16px rgba(0,0,0,.22), 0px 4px 8px 2px rgba(0,0,0,.14)";
    default:
      return "none";
  }
}

function ElevationCard({ dp }) {
  const shadow = getElevation(dp);
  const usage = dp <= 3 ? "Resting" : "Interaction";
  return (
    <div className="text-center">
      <div
        className="mx-auto h-16 w-16 rounded-xl bg-white ring-1 ring-slate-200"
        style={{ boxShadow: shadow }}
        title={`Elevation ${dp}dp`}
      />
      <p className="mt-2 text-[12px] text-slate-800 font-medium">{dp}dp</p>
      <p className="text-[11px] text-slate-500">{usage}</p>
    </div>
  );
}
/** Bordered image frame; caption should be a separate <p> outside this component */
function FramedImage({ src, alt, className = "" }) {
  return (
    <div className={`rounded-[16px] overflow-hidden ring-1 ring-slate-200 bg-white ${className}`}>
      <img src={src} alt={alt} className="block w-full h-auto" />
    </div>
  );
}


{/* ---------- shared helper ---------- */}
function Frame({
  src,
  alt,
  caption,
  widthClass = "max-w-[480px]",
  imgClass = "",
  pad = false,
}) {
  return (
    <figure className={`${widthClass} w-full`}>
      <div className={`rounded-[16px] ring-1 ring-slate-200 bg-white ${pad ? "p-3" : ""}`}>
        <img src={src} alt={alt} className={`w-full h-auto ${imgClass}`} />
      </div>
      {caption && (
        <figcaption className="mt-2 text-[12px] text-slate-600 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
