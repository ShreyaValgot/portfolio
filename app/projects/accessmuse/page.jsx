// app/projects/accessmuse/page.jsx
import Image from "next/image";
import Link from "next/link";
import FramedImage from '../../components/FramedImage'
import SpoilerCallout from '../../components/SpoilerCallout'
import { ArrowLeft, Briefcase, Clock, Smartphone } from "lucide-react";

export const metadata = {
  title: "AccessMuse — Inclusive Museum App | Shreya Valgot",
  description:
    "An inclusive iOS app improving real-time accessibility during museum visits for cognitive, hearing, physical, and visual needs (WCAG-guided).",
};

// Burn Sienna family
const SIENNA = "#B63E16";
const SIENNA_DARK = "#8A2E10";
const SIENNA_TINT = "rgba(182,62,22,0.08)";

export default function AccessMusePage() {
  return (
    <main className="pb-28">
      {/* ---- HERO WRAPPER (gradient starts from very top) ---- */}
      <section
        style={{
          background:
            "linear-gradient(180deg, rgba(182,62,22,0.04) 0%, rgba(182,62,22,0.00) 70%)",
        }}
      >
        {/* Back link — aligned with the navbar container (max-w-7xl + px-6) */}
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

        {/* HERO content */}
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 pt-8 md:pt-10 pb-8">
          <h1 className="text-center text-[34px] md:text-[44px] leading-tight font-semibold text-slate-900">
            AccessMuse — an inclusive museum app
          </h1>

          <p className="mx-auto mt-4 max-w-[740px] text-center text-[15px] md:text-[16px] leading-7 text-slate-600">
            Designed to <span className="font-medium">improve real-time accessibility</span> during
            museum visits for people with cognitive, hearing, physical, and visual needs — guided by
            WCAG.
          </p>

          {/* Banner / mock screens */}
          <div className="mt-10 md:mt-12 flex justify-center">
            <div
              className="relative w-full max-w-[760px] aspect-[16/9] rounded-2xl ring-1 overflow-hidden"
              style={{ borderColor: "rgba(15,23,42,0.08)", background: SIENNA_TINT }}
            >
              {/* Put your image file in /public as /accessmuse-hero.png */}
              <Image
                src="/accessmuse-hero.png"
                alt="AccessMuse screens"
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-contain p-4 md:p-6"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- OVERVIEW (no divider above; airy, aligned) ---- */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-10 pt-6 md:pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
          <OverviewItem
            icon={<Briefcase size={18} strokeWidth={2} color={SIENNA_DARK} />}
            label="Role"
            value="UX/UI Designer"
          />
        <OverviewItem
            icon={<Smartphone size={18} strokeWidth={2} color={SIENNA_DARK} />}
            label="Platform"
            value="iOS"
          />
          <OverviewItem
            icon={<Clock size={18} strokeWidth={2} color={SIENNA_DARK} />}
            label="Duration"
            value="June 2024 – August 2024"
          />
        </div>
      </section>

      {/* Divider (consistent width with content) */}
      <div className="mt-12 md:mt-14 h-px bg-slate-200/70 max-w-[1100px] mx-auto" />

      {/* ---- FINAL PROTOTYPE ---- */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-10 pt-12 md:pt-14">
        <h2 className="text-center text-[26px] md:text-[30px] font-semibold text-slate-900">
          Final prototype
        </h2>
        <p className="mt-3 text-center text-[15px] text-slate-600">
          Short demo of the refined flow. (Embed a screen recording or GIF here.)
        </p>

        <div
          className="mt-8 relative w-full aspect-video rounded-2xl ring-1 flex items-center justify-center"
          style={{ borderColor: "rgba(15,23,42,0.08)", background: SIENNA_TINT }}
        >
          <span className="text-slate-500 text-sm">[ Screen recording / GIF ]</span>
        </div>
      </section>

      {/* Divider */}
      <div className="mt-12 md:mt-14 h-px bg-slate-200/70 max-w-[1100px] mx-auto" />

        {/* ---- DESIGN PROCESS ---- */}
        <section className="max-w-[1100px] mx-auto px-6 md:px-10 pt-14">
        <h3 className="text-[22px] md:text-[24px] font-semibold text-slate-900">
            Design process
        </h3>
        <p className="mt-2 inline-flex items-center gap-2 text-[13px] text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500" />
            Discovery stage
        </p>
        </section>


      {/* ---- USER STORIES ---- */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-10 pt-10">
        <h3 className="text-center text-[28px] md:text-[32px] font-semibold text-slate-900">
          User stories that shaped the design
        </h3>
        <p className="text-center text-[15px] text-slate-500 mt-2">Primary research</p>

        {/* Persona 1: Meet Leo */}
        <div className="mt-12 space-y-8 md:space-y-10">
        {/* Title + intro */}
        <div>
            <h4 className="flex items-center gap-2 text-[20px] md:text-[22px] font-semibold text-slate-900">
            <span role="img" aria-label="wave">🧏‍♂️</span>
            Meet Leo: A Visitor with Hearing Impairment at the British Museum
            </h4>

            <span className="inline-flex rounded-md bg-slate-100 text-slate-600 text-xs md:text-[13px] px-2.5 py-1 mt-2">
            Persona 1
            </span>

            <p className="mt-4 text-[15px] md:text-[16px] leading-7 text-slate-700">
            Leo is my classmate with a hearing impairment. While we were able to
            communicate, it sometimes took extra effort to fully understand each
            other. Later, a British Sign Language (BSL) interpreter joined us — and
            Leo was able to express himself more clearly and comfortably.
            </p>

            <p className="mt-3 text-[15px] md:text-[16px] leading-7 text-slate-900 font-medium">
            “Sign language isn’t just an accessibility feature — for many, it’s their
            main language.”
            </p>
        </div>

        {/* Laptop chat / interview card */}
            <FramedImage
            src="/images/laptop-leo.png"
            alt="Laptop Talks with Leo"
            ratio="16/9"
            bg="white"                 // later: "#FFF8E7" for cream, or "transparent"
            className="mt-4"
        />

<br />
        {/* Map on the left, expressive text on the right (vertically centered) */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* Left: map (can be large) */}
            <div className="justify-self-center">
            {/* replace src with your map image */}
            <img
                src="/images/museum-map.png"
                alt="British Museum map — Ground floor"
                className="max-w-[540px] w-full rounded-lg border border-slate-200 shadow-sm"
            />
            <p className="text-[12px] md:text-[13px] text-slate-500 mt-2">
                Museum map — Ground floor
            </p>
            </div>

            {/* Right: expressive text, vertically centered */}
            {/* Right-side map critique (tighter spacing as you asked) */}
            <div className="space-y-3 md:space-y-4">
            <h5 className="text-[18px] md:text-[20px] font-semibold text-slate-900">
                So… What did the museum map actually look like?
            </h5>
            <p className="text-[15px] md:text-[16px] leading-7 text-slate-700">
                After talking to Leo, I looked for the map he would’ve received at the British Museum.
            </p>
            <p className="text-[15px] md:text-[16px] leading-7 text-slate-700">
                <span className="mr-2">👈</span>Here’s what I found on their website:
            </p>
            <p>
                A moment of silence for everyone (ahem, me) who thought:<br />
                <strong>“How worse can it be?”</strong>
            </p>
<br />
            {/* Compact spoiler callout (single line, tasteful) */}
            <SpoilerCallout
                items={["Visually overwhelming", "Hard to read", "Poor navigation help"]}
            />
            </div>
        </div>
<br />
        {/* Idea card */}
            <div
            className="mt-12 rounded-2xl border border-slate-200 shadow-sm px-6 md:px-10 py-8 md:py-10 text-center mx-auto max-w-4xl"
            style={{
                background:
                "linear-gradient(180deg, rgba(182,62,22,0.06) 0%, rgba(182,62,22,0.02) 100%)",
            }}
            >
            <p className="text-[15px] md:text-[16px] text-slate-600 mb-3">
                <span role="img" aria-label="idea">💡</span> That’s where the idea began
            </p>

            <h4 className="text-[16px] md:text-[20px] font-semibold text-slate-900 leading-tight mb-3">
                What if museums offered a digital guide that adapted to each visitor’s needs
                
            </h4>

            <p className="text-[16px] md:text-[18px] text-slate-700">
                One that could <span className="font-semibold">sign</span>,{" "}
                <span className="font-semibold">guide</span>, and{" "}
                <span className="font-semibold">adjust</span> — at their pace, in their language.
            </p>
            </div>

        </div>



            {/* ───────── divider after Persona 1 ───────── */}
            <div className="my-16 md:my-20 h-px bg-slate-200/70 max-w-[1100px] mx-auto" />

            {/* ───────── Persona 2: Ben (you) ───────── */}
            <section className="max-w-[1100px] mx-auto px-6 md:px-10">
            {/* chip + header */}
            <span className="inline-flex rounded-md bg-slate-100 text-slate-600 text-xs md:text-[13px] px-2.5 py-1">
                Persona 2
            </span>

            <h4 className="mt-3 flex items-center gap-2 text-[20px] md:text-[22px] font-semibold text-slate-900">
                <span role="img" aria-label="wave">👋</span>
                Meet Ben (Actually… Ben is Me)
            </h4>

            <p className="mt-3 text-[15px] md:text-[16px] leading-7 text-slate-700">
                Ben is a persona based on my own visit to the Herbert Gallery Museum in Coventry.
            </p>
            <p className="text-[15px] md:text-[16px] leading-7 text-slate-700">
                While I don’t have a visual impairment, I experienced what’s known as a
                <span className="font-medium"> situational impairment</span> — when environmental conditions
                (like low lighting, reading text in bright sunlight) make it difficult to see or process information.
            </p>

            {/* row 1: copy left, image right */}
            <div className="mt-8 grid md:grid-cols-2 gap-8 md:gap-10 items-start">
                {/* left copy */}
                <div className="space-y-4">
                <h5 className="text-[16px] md:text-[18px] font-semibold text-slate-900">🎨 Ben at the Museum</h5>

                <p className="text-[15px] md:text-[16px] leading-7 text-slate-700">
                    Ben loves paintings. Especially the dramatic, moody — you know, Old Masters stuff.
                    So when he walked in, a whole wall of beautiful works. And beneath them… <span className="font-medium">six tiny white panels.</span>
                </p>

                <p className="text-[15px] md:text-[16px] leading-7 text-slate-900 font-medium">
                    Ben leaned in. “Wait... which label goes with which painting
                    <span className="text-rose-600 font-semibold">&nbsp;?&nbsp;</span>”
                </p>
                </div>

                {/* right hero image */}
                <div className="rounded-xl overflow-hidden ring-1 ring-slate-200">
                <Image
                    src="/images/p2/gallery-wall.jpg"    // <- replace with your file
                    alt="Ben looking at a wall of Old Masters with tiny labels"
                    width={980}
                    height={740}
                    className="w-full h-auto object-cover"
                />
                </div>
            </div>

            {/* row 2: two photos stacked left, bullets + copy right */}
            <div className="mt-8 grid md:grid-cols-2 gap-8 md:gap-10 items-start">
                {/* left stacked booklet photos */}
                <div className="space-y-4">
                <div className="rounded-xl overflow-hidden ring-1 ring-slate-200">
                    <Image
                    src="/images/p2/booklet-1.jpg"      // <- replace
                    alt="Large-print booklet page"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    />
                </div>
                <div className="rounded-xl overflow-hidden ring-1 ring-slate-200">
                    <Image
                    src="/images/p2/booklet-2.jpg"      // <- replace
                    alt="Another page of the large-print booklet"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    />
                </div>
                </div>

                {/* right bullets + copy */}
                <div className="space-y-4">
                <p className="text-[15px] md:text-[16px] leading-7 text-slate-700">
                    The lighting was soft. Good for preserving 400-year-old oil paint.
                    Ben grabs the large-print booklet … only to discover it was just as unreadable in the dim light.
                </p>

                <ul className="space-y-2 text-[15px] md:text-[16px] leading-7">
                    <li><span className="mr-2">✅</span> Large print? Yes.</li>
                    <li><span className="mr-2">❌</span> Legible in this lighting? Nope.</li>
                    <li><span className="mr-2">❌</span> Also: no clear mapping between booklet text and paintings. Again.</li>
                </ul>

                <p className="text-[15px] md:text-[16px] leading-7 text-slate-700">
                    Ben snaps a photo, zooms in — it works.
                </p>
                <p className="text-[15px] md:text-[16px] leading-7 text-slate-900 font-medium">
                    If a phone can adapt to help… Why can’t the museum do the same — but better, for everyone?
                </p>
                </div>
            </div>

            {/* idea card */}
            <div
                className="mt-8 md:mt-10 rounded-2xl border border-slate-200 shadow-sm px-6 md:px-10 py-8 md:py-10 text-center mx-auto max-w-4xl"
                style={{
                background:
                    "linear-gradient(180deg, rgba(182,62,22,0.06) 0%, rgba(182,62,22,0.02) 100%)",
                }}
            >
                <p className="text-[15px] md:text-[16px] text-slate-600 mb-3">
                <span role="img" aria-label="idea">💡</span> That’s where the idea began
                </p>
                <h4 className="text-[18px] md:text-[22px] font-semibold text-slate-900 leading-tight mb-3">
                What if the large-print booklet wasn’t just a printed aid… but a digital one?
                </h4>
                <p className="text-[15px] md:text-[16px] text-slate-700">
                One that could adapt, guide, and respond in real time?
                </p>
            </div>
            </section>



            {/* Divider after second persona */}
            <div className="mt-12 md:mt-14 h-px bg-slate-200/70 max-w-[1100px] mx-auto" />


            {/* ───────── Persona 3: Lucy ───────── */}
            <section className="max-w-[1100px] mx-auto px-6 md:px-10">
            {/* chip + title */}
            <span className="inline-flex rounded-md bg-slate-100 text-slate-600 text-xs md:text-[13px] px-2.5 py-1">
                Persona 3
            </span>

            <h4 className="mt-3 flex items-center gap-2 text-[20px] md:text-[22px] font-semibold text-slate-900">
                <span role="img" aria-label="wave">👋</span>
                Meet Lucy: Exploring Cognitive Barriers Through an Autistic Visitor’s Experience
            </h4>

            {/* intro */}
            <p className="mt-3 text-[15px] md:text-[16px] leading-7 text-slate-700">
                As part of my accessibility research, I visited the Herbert Gallery Museum with <span className="font-medium">Lucy</span>,
                an autistic peer. I invited her to help me better understand how museum spaces can impact visitors with cognitive differences.
            </p>
            <p className="text-[15px] md:text-[16px] leading-7 text-slate-700">
                Lucy loves learning about history — but museums can feel overwhelming. This time, she gave it a shot.
            </p>

            {/* row 1: wrong entrance copy left, dino-hall image right */}
            <div className="mt-8 grid md:grid-cols-2 gap-8 md:gap-10 items-start">
                <div className="space-y-3">
                <h5 className="text-[16px] md:text-[18px] font-semibold text-slate-900">The Wrong Entrance</h5>
                <p className="text-[15px] md:text-[16px] leading-7 text-slate-700">
                    Lucy saw a sign marked “Entrance” — so she went in. But it led her into the <span className="font-medium">café, not the museum</span>.
                </p>
                <p className="text-[15px] md:text-[16px] leading-7 text-slate-900 font-medium">“Is this… the right way?”</p>
                <p className="text-[15px] md:text-[16px] leading-7 text-slate-700">❌ No signage</p>
                </div>

                <div className="rounded-xl overflow-hidden ring-1 ring-slate-200">
                <Image
                    src="/images/p3/dino-hall.jpg"       // ← replace with your image
                    alt="Large skeleton exhibit in a bright hall"
                    width={980}
                    height={740}
                    className="w-full h-auto object-cover"
                />
                </div>
            </div>

            {/* row 2: selfie frame left, sensory overload bullets right + quote */}
            <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-10 items-start">
                <div className="rounded-xl overflow-hidden ring-1 ring-slate-200">
                <Image
                    src="/images/p3/frame-selfie.jpg"     // ← replace with your image
                    alt="Put yourself in the picture frame"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                />
                </div>

                <div className="space-y-3">
                <h5 className="text-[16px] md:text-[18px] font-semibold text-slate-900">Sensory Overload</h5>
                <ul className="space-y-2 text-[15px] md:text-[16px] leading-7 text-slate-700">
                    <li>❌ One room had a blaring projector.</li>
                    <li>❌ Another felt freezing.</li>
                    <li>❌ The lights? Overbright and harsh.</li>
                </ul>
                <p className="text-[15px] md:text-[16px] leading-7 text-slate-700">
                    None of it was signposted. Lucy felt overwhelmed — and left early.
                </p>

                <blockquote className="mt-3 border-l-2 border-slate-300 pl-3 text-[15px] md:text-[16px] leading-7 text-slate-800">
                    “It’s not that I hate museums. They’re just… too much.”
                </blockquote>
                </div>
            </div>

            {/* idea card */}
            <div
                className="mt-10 rounded-2xl border border-slate-200 shadow-sm px-6 md:px-10 py-8 md:py-10 text-center mx-auto max-w-4xl"
                style={{
                background:
                    "linear-gradient(180deg, rgba(182,62,22,0.06) 0%, rgba(182,62,22,0.02) 100%)",
                }}
            >
                <p className="text-[15px] md:text-[16px] text-slate-600 mb-3">
                <span role="img" aria-label="idea">💡</span> That’s where the idea began
                </p>
                <h4 className="text-[18px] md:text-[22px] font-semibold text-slate-900 leading-tight mb-3">
                What if a digital guide could ease the unknown — across the whole visit?
                </h4>
                <p className="text-[15px] md:text-[16px] text-slate-700">
                Real-time guidance, clear routes, and sensory info to make the visit easier.
                </p>
            </div>
            </section>

                {/* ───────── divider after persona 3 ───────── */}
                <div className="my-16 md:my-20 h-px bg-slate-200/70 max-w-[1100px] mx-auto" />

                {/* ───────── Persona 4: Riley ───────── */}
                <section className="max-w-[1100px] mx-auto px-6 md:px-10">
                {/* chip + title */}
                <span className="inline-flex rounded-md bg-slate-100 text-slate-600 text-xs md:text-[13px] px-2.5 py-1">
                    Persona 4
                </span>

                <h4 className="mt-3 flex items-center gap-2 text-[20px] md:text-[22px] font-semibold text-slate-900">
                    <span role="img" aria-label="wheelchair">♿</span>
                    Meet Riley: A Wheelchair User View of the Museum
                </h4>

                {/* intro */}
                <p className="mt-3 text-[15px] md:text-[16px] leading-7 text-slate-700">
                    Riley enjoys history and hands-on learning. But as a wheelchair user, museums can feel distant —
                    even when she’s right there.
                </p>

                {/* row 1: bullets left, pano image right */}
                <div className="mt-8 grid md:grid-cols-2 gap-8 md:gap-10 items-start">
                    <div className="space-y-2">
                    <h5 className="text-[16px] md:text-[18px] font-semibold text-slate-900">
                        Exhibits Placed Too High
                    </h5>
                    <ul className="space-y-2 text-[15px] md:text-[16px] leading-7 text-slate-700">
                        <li>❌ Objects were placed at standing eye level</li>
                        <li>❌ Labels and text? Way above her line of sight</li>
                    </ul>
                    </div>

                    <div className="rounded-xl overflow-hidden ring-1 ring-slate-200">
                    <Image
                        src="/images/p4/pano-top-shelves.jpg"   // ← replace with your image
                        alt="High shelf exhibit panorama"
                        width={980}
                        height={620}
                        className="w-full h-auto object-cover"
                    />
                    </div>
                </div>

                {/* row 2: photo left, bullets right */}
                <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-10 items-start">
                    <div className="rounded-xl overflow-hidden ring-1 ring-slate-200">
                    <Image
                        src="/images/p4/labels-behind-glass.jpg"  // ← replace with your image
                        alt="Labels behind glass with reflections"
                        width={900}
                        height={650}
                        className="w-full h-auto object-cover"
                    />
                    </div>

                    <div className="space-y-2">
                    <h5 className="text-[16px] md:text-[18px] font-semibold text-slate-900">
                        Glass Cases + Small Labels = Frustration
                    </h5>
                    <ul className="space-y-2 text-[15px] md:text-[16px] leading-7 text-slate-700">
                        <li>✅ The physical design unintentionally excluded seated visitors.</li>
                        <li>❌ Zooming in? Didn’t work through the reflections</li>
                        <li>❌ Text was hard to locate — and harder to focus on</li>
                    </ul>
                    </div>
                </div>

                {/* row 3: bullets left, portrait right */}
                <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-10 items-start">
                    <div className="space-y-2">
                    <h5 className="text-[16px] md:text-[18px] font-semibold text-slate-900">
                        Phone Use as a Partial Fix
                    </h5>
                    <ul className="space-y-2 text-[15px] md:text-[16px] leading-7 text-slate-700">
                        <li>✅ It helped — a little.</li>
                        <li>❌ But it broke the flow. Constant effort = fatigue, not freedom.</li>
                    </ul>
                    </div>

                    <div className="rounded-xl overflow-hidden ring-1 ring-slate-200">
                    <Image
                        src="/images/p4/riley-seated.jpg"       // ← replace with your image
                        alt="Riley navigating the space in her wheelchair"
                        width={720}
                        height={900}
                        className="w-full h-auto object-cover"
                    />
                    </div>
                </div>

                {/* note/caption */}
                <div className="mt-10 rounded-xl border border-rose-200/70 bg-rose-50/30 px-4 py-3 text-[13px] md:text-[14px] text-slate-700">
                    All the images below were taken from Riley’s seated perspective — showing exactly how she
                    experienced the museum space.
                </div>

                {/* idea card */}
                <div
                    className="mt-8 md:mt-10 rounded-2xl border border-slate-200 shadow-sm px-6 md:px-10 py-8 md:py-10 text-center mx-auto max-w-4xl"
                    style={{
                    background:
                        "linear-gradient(180deg, rgba(182,62,22,0.06) 0%, rgba(182,62,22,0.02) 100%)",
                    }}
                >
                    <p className="text-[15px] md:text-[16px] text-slate-600 mb-3">
                    <span role="img" aria-label="idea">💡</span> That’s where the idea began
                    </p>
                    <h4 className="text-[18px] md:text-[22px] font-semibold text-slate-900 leading-tight mb-3">
                    What if a digital guide brought exhibits within reach?
                    </h4>
                    <p className="text-[15px] md:text-[16px] text-slate-700">
                    Every exhibit readable, every detail reachable
                    </p>
                </div>
                </section>









        
      </section>
    </main>
  );
}

/* ---------- Helpers ---------- */

function OverviewItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 min-h-[44px]">
      {/* Soft tinted chip with vertically-centered icon */}
      <div
        className="flex items-center justify-center w-11 h-11 rounded-xl"
        style={{ background: SIENNA_TINT }}
        aria-hidden
      >
        {icon}
      </div>

      <div>
        <p
          className="text-[13px] tracking-wide uppercase leading-none"
          style={{ color: "rgba(15,23,42,0.60)" }}
        >
          {label}
        </p>
        <p className="mt-1 text-[16px] md:text-[17px] leading-6 text-slate-900">{value}</p>
      </div>
    </div>
  );
}
