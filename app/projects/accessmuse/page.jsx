// app/projects/accessmuse/page.jsx

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Briefcase, Clock, Smartphone } from "lucide-react";

// client components
import FloatingNav from "./FloatingNav";
import HashScroll from "./HashScroll"; // optional


export const metadata = {
  title: "AccessMuse — Inclusive Museum App | Shreya Valgot",
  description:
    "An inclusive iOS app improving real-time accessibility during museum visits for cognitive, hearing, physical, and visual needs (WCAG-guided).",
};

// Colors
const SIENNA_DARK = "#8A2E10";
const SIENNA_TINT = "rgba(182,62,22,0.08)";






export default function AccessMusePage() {
  return (
    <main className="pb-28 lg:pl-[260px]">

    <FloatingNav />
    <HashScroll />






      {/* ---- HERO (gradient from top, big crisp screens) ---- */}
      <section id="project-overview"
        style={{
          background:
            "linear-gradient(180deg, rgba(182,62,22,0.04) 0%, rgba(182,62,22,0.00) 70%)",
        }}
      >
        {/* Back to Projects — aligned with navbar container */}
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


        {/* Title + Sub */}
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 pt-8">
          <h1 className="text-center text-[34px] md:text-[44px] leading-tight font-semibold text-slate-900">
            AccessMuse — An Inclusive Museum App
          </h1>
          <p className="mx-auto mt-3 md:mt-4 max-w-[740px] text-center text-[15px] md:text-[16px] leading-7 text-slate-600">
            Designed to <span className="font-medium">improve real-time accessibility</span> during
            museum visits for people with cognitive, hearing, physical, and visual needs — guided by
            WCAG.
          </p>

            {/* HERO SCREENS */}
            <div className="mt-8 md:mt-10">
  <div className="flex justify-center gap-6 md:gap-10 mb-12">
    <img
      src="/left-hero-home.png"
      alt="AccessMuse — Home"
      className="h-[420px] md:h-[500px] object-contain rounded-[28px] 
             drop-shadow-[0_4px_8px_rgba(0,0,0,0.12)]"
    />
    <img
      src="/hero-right-indoor.png"
      alt="AccessMuse — Indoor Map"
      className="h-[420px] md:h-[500px] object-contain rounded-[28px] 
             drop-shadow-[0_4px_8px_rgba(0,0,0,0.12)]"
    />
  </div>
</div>


        </div>

      </section>

      {/* ---- OVERVIEW ---- */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-10 pt-8 md:pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-10 gap-x-12">
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

      {/* Divider */}
      <div className="mt-10 md:mt-12 h-px bg-slate-200/70 max-w-[1100px] mx-auto" />

        {/* ---- FINAL PROTOTYPE ---- */}
            <section id="final-prototype" className="max-w-[1100px] mx-auto px-6 md:px-10 pt-10 md:pt-12">
            <h1 className="text-center text-[26px] md:text-[30px] font-semibold text-slate-900">
                Final Prototype
            </h1>
            <p className="mt-2 text-center text-[15px] text-slate-600">
                High-Fidelity iterated prototype after testing.
            </p>

            <div className="mt-6 md:mt-8 flex justify-center">
                <video
                    src="/full-app-accessmuse.mp4"
                    controls
                    playsInline
                    muted
                    className="block w-[min(60vw,300px)] h-auto rounded-lg shadow-lg"
                />
            </div>
            </section>

            {/* Divider */}
            <div className="mt-12 md:mt-14 h-px bg-slate-200/70 max-w-[1100px] mx-auto" />

      {/* ---- DESIGN PROCESS ---- */}
      <section id="user-research" className="max-w-[1100px] mx-auto px-6 md:px-10 pt-10">
        <h1 className="text-center text-[36px] md:text-[40px] font-semibold text-slate-900">User Research</h1>
          
      </section>

      {/* ---- USER STORIES ---- */}
      <section id="user-stories" className="max-w-[1100px] mx-auto px-6 md:px-10 pt-8 md:pt-10">
        <h3 className="text-center text-[28px] md:text-[32px] font-semibold text-slate-900">
          User Stories that Shaped the Design
        </h3>
        <p className="text-center text-[15px] text-slate-500 mt-2">Primary research</p>

        {/* ───────── Persona 1: Leo ───────── */}
        <div className="mt-10 md:mt-12 space-y-6 md:space-y-8">
          <div>
            <h4 className="text-[20px] md:text-[22px] font-semibold text-slate-900">
              🧏‍♂️ Meet Leo: A Visitor with Hearing Impairment at the British Museum
            </h4>
            {/* persona chip — tight to heading */}
            <span className="mt-2 inline-flex rounded-md bg-slate-100 text-slate-600 text-xs md:text-[12px] px-2.5 py-1">
              Persona 1
            </span>

            <p className="mt-4 text-[15px] md:text-[16px] leading-7 text-slate-700">
              Leo is my classmate with a hearing impairment. While we were able to communicate, it
              sometimes took extra effort to fully understand each other. Later, a British Sign
              Language (BSL) interpreter joined us — and Leo was able to express himself more
              clearly and comfortably.
            </p>
            <p className="mt-2 text-[15px] md:text-[16px] leading-7 text-slate-900 font-medium">
              “Sign language isn’t just an accessibility feature — for many, it’s their main
              language.”
            </p>
          </div>

          {/* Laptop chat image (your asset) */}
            <div className="mt-8 flex justify-center">
            <div className="max-w-[800px] w-full px-6 pt-10 pb-6">
                <img 
                src="/laptop-talks-leo.svg" 
                alt="Laptop Talks with Leo" 
                className="w-full h-auto" 
                />
            </div>
            </div>
<br></br>
          
        {/* Map + text (lighter, smaller) */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Map + caption */}
        <div className="justify-self-center md:justify-self-start">
            <img
            src="/british-map.png"
            alt="British Museum map — Ground floor"
            className="max-w-[400px] w-full rounded-lg border border-slate-200 shadow-sm"
            />
            <p className="text-[11px] text-slate-500 mt-2">
            Museum map — Ground floor
            </p>
        </div>

        {/* Narrative */}
        <div className="space-y-3">
            <h5 className="text-[18px] font-semibold text-slate-900">
            So… What did the museum map actually look like?
            </h5>

            <p className="text-[15px] leading-7 text-slate-700">
            After talking to Leo, I looked for the map he would’ve received at the British Museum.
            </p>
            <p className="text-[15px] leading-7 text-slate-700">
            <span className="mr-2">👈</span>Here’s what I found on their website.
            </p>

            {/* one sentence; bold only the parts you specified */}
            <p className="text-[15px] leading-7 text-slate-700">
            A moment of silence for everyone (ahem, me) who thought: <br></br> <strong>How worse can it be?</strong>
            </p>

            {/* next line, small and simple */}
            <p className="text-[15px] leading-7 text-slate-600">
                <strong>Spoiler:</strong><br></br>
            Overwhelming. Tiny fonts. Zero personalization.
            </p>
        </div>
        </div>
        </div>



<br></br>
                {/* Idea card (smaller + stretched) */}
                <div
                className="mt-8 mx-auto max-w-2xl rounded-xl border border-slate-200 bg-slate-50/70 px-6 md:px-8 py-6 md:py-7 text-center"
                >
                <p className="text-[13px] md:text-[14px] text-slate-600 mb-2">
                    <span role="img" aria-label="idea">💡</span> That’s where the idea began
                </p>
                <h5 className="text-[15px] md:text-[17px] font-semibold text-slate-900 leading-relaxed">
                    What if museums had a digital guide that helped visitors find their way <em>and</em> understand
                    the exhibits — easily, at their own pace?
                </h5>
                </div>
                
                

                {/* Divider */}
                <div className="my-12 md:my-16 h-px bg-slate-200/70" />

                {/* ───────── Persona 2: Ben (you) ───────── */}
        {/* ───────── Persona 2: Ben (you) ───────── */}
        <section className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Title + tag */}
        <h5 className="text-[20px] md:text-[22px] font-semibold text-slate-900">
            👋 Meet Ben (Actually… Ben is Me)
        </h5>
        <span className="mt-2 inline-flex rounded-md bg-slate-100 text-slate-600 text-xs px-2.5 py-1">
            Persona 2
        </span>

        {/* Intro copy */}
        <p className="mt-4 text-[15px] leading-7 text-slate-700">
            Ben is a persona based on my own visit to the Herbert Gallery Museum in Coventry.
        </p>
        <p className="text-[15px] leading-7 text-slate-700">
            While I don’t have a visual impairment, I experienced what’s known as a
            <span className="font-medium"> situational impairment</span> — when environmental conditions
            (like low lighting, reading text in bright sunlight) make it difficult to see or process information.
        </p>

        {/* Row 1: text left, small image right */}
        <div className="mt-8 grid md:grid-cols-[1fr_auto] gap-10 items-start">
            <div className="space-y-4">
            <h6 className="text-[16px] md:text-[17px] font-semibold text-slate-900">
                🎨 Ben at the Museum
            </h6>
            <p className="text-[15px] leading-7 text-slate-700">
                Ben loves paintings. Especially the dramatic, moody — you know, Old Masters stuff.
                So when he walked in, a whole wall of beautiful works. And beneath them…{" "}
                <span className="font-medium">six tiny white panels.</span>
            </p>
            <p className="text-[15px] leading-7 text-slate-900 font-medium">
                Ben leaned in. “Wait... which label goes with which painting
                <span className="text-rose-600 font-semibold">&nbsp;?&nbsp;</span>”
            </p>
            </div>

            {/* Small image (fixed width) */}
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            <Image
                src="/shreya-museum.png"
                alt="Ben looking at a wall of Old Masters with tiny labels"
                width={260}  // <- fixed small width to match your mock
                height={360}
                className="block h-auto object-cover"
                sizes="260px"
            />
            </div>
        </div>
        <br></br>

        {/* Row 2: two tiny images left, copy right */}
        <div className="mt-10 grid md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-start">
        {/* LEFT — stacked images */}
        <div className="flex flex-col justify-between">
            <div className="case-img w-[160px] md:w-[180px]">
            <Image
                src="/booklet-cover-page.jpeg"
                alt="Large-print booklet cover"
                width={180}
                height={140}
                className="w-full h-auto object-contain"
                sizes="(min-width:768px) 180px, 160px"
            />
            </div>

            <div className="case-img w-[160px] md:w-[180px] mt-6 md:mt-8">
            <Image
                src="/booklet-open-page.jpeg"
                alt="Large-print booklet open"
                width={180}
                height={140}
                className="w-full h-auto object-contain"
                sizes="(min-width:768px) 180px, 160px"
            />
            </div>
        </div>

        {/* RIGHT — text */}
        <div className="space-y-6">
            <p className="text-[15px] leading-7 text-slate-700">
            The lighting was soft. Good for preserving 400-year-old oil paint. Ben grabs the
            large-print booklet … only to discover it was just as unreadable in the dim light.
            </p>

            <ul className="space-y-2 text-[15px] leading-7 text-slate-900">
            <li><span className="mr-2">✅</span><span className="font-medium">Large print?</span> Yes.</li>
            <li><span className="mr-2">❌</span><span className="font-medium">Legible in this lighting?</span> Nope.</li>
            <li><span className="mr-2">❌</span><span className="font-medium">Mapping between booklet and paintings?</span> Missing.</li>
            </ul>

            <p className="text-[15px] leading-7 text-slate-700">Ben snaps a photo, zooms in — it works.</p>
            <p className="text-[15px] leading-7 text-slate-900 font-medium">
            If a phone can adapt to help… Why can’t the museum do the same — but better, for everyone?
            </p>
        </div>
        </div>



        <br></br>


        {/* Compact idea card (same style as Persona 1) */}
        <div
            className="mt-12 mx-auto max-w-2xl rounded-xl border border-slate-200 bg-slate-50/70 px-6 md:px-8 py-6 md:py-7 text-center"
        >
            <p className="text-[13px] md:text-[14px] text-slate-600 mb-2">
            <span role="img" aria-label="idea">💡</span> That’s where the idea began
            </p>
            <h5 className="text-[15px] md:text-[17px] font-semibold text-slate-900 leading-relaxed">
            What if the large-print booklet wasn’t just a printed aid… but a digital one?
            </h5>
            <p className="text-[13px] md:text-[14px] text-slate-600 mt-1">
            One that could adapt, guide, and respond in real time.
            </p>
        </div>
        </section>




{/* Divider */}
<div className="my-12 md:my-16 h-px bg-slate-200/70" />

        {/* ───────── Persona 3: Lucy ───────── */}
        <section>
        <h4 className="text-[20px] md:text-[22px] font-semibold text-slate-900">
            👋 Meet Lucy: Exploring Cognitive Barriers Through an Autistic Visitor’s Experience
        </h4>
        <span className="mt-2 inline-flex rounded-md bg-slate-100 text-slate-600 text-xs md:text-[12px] px-2.5 py-1">
            Persona 3
        </span>

        <p className="mt-4 text-[15px] md:text-[16px] leading-7 text-slate-700">
            As part of my accessibility research, I visited the Herbert Gallery Museum with{" "}
            <span className="font-medium">Lucy</span>, an autistic peer. I invited her to help me
            better understand how museum spaces can impact visitors with cognitive differences.
        </p>
        <p className="text-[15px] md:text-[16px] leading-7 text-slate-700">
            Lucy loves learning about history — but museums can feel overwhelming. This time, she
            gave it a shot.
        </p>

<br></br>

        {/* Row 1: text left, entrance image right (image slightly larger) */}
        {/* Standard block layout */}
        <div className="mt-12 grid md:grid-cols-[1fr_auto] gap-8 items-start">
        {/* Left: text */}
        <div>
            <h3 className="text-lg font-semibold mb-2">The Wrong Entrance</h3>
            <p className="text-slate-700 mb-2">
            Lucy saw a sign marked “Entrance” — so she went in. But it led her into the café, not the museum.
            </p>
            <p className="italic text-slate-500">“Is this… the right way?”</p>
            <p className="mt-2 text-slate-700">❌ No signage</p>
        </div>

        {/* Right: Dippy image, aligned flush right */}
        <div className="w-[280px] rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            <Image
            src="/dippy-museum.png"
            alt="Skeleton in museum"
            width={280}
            height={180}
            className="w-full h-auto object-cover"
            />
        </div>
        </div>

{/* Second block */}


<div className="mt-12 grid md:grid-cols-[300px_1fr] gap-14 items-start">
  {/* Left: Image */}
  <div className="w-[280px] rounded-xl overflow-hidden border border-slate-200 shadow-sm">
    <Image
      src="/sofia-museum.jpeg"
      alt="Lucy in museum frame"
      width={280}
      height={180}
      className="w-full h-auto object-cover"
    />
  </div>

  {/* Right: Text */}
  <div className="max-w-3xl">
    <h3 className="text-lg font-semibold mb-2">Sensory Overload</h3>
    <ul className="mb-4 space-y-1">
      <li>❌ One room had a blaring projector that was impossible to ignore.</li>
      <li>❌ Another was uncomfortably cold, making it hard to stay inside.</li>
      <li>❌ Bright, harsh lighting in the exhibits added to the strain.</li>
    </ul>

    <p className="text-slate-700 mb-6">
      Moving from one uncomfortable space to another left Lucy overwhelmed, turning the visit into an escape from discomfort rather than discovery.
    </p>

    <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">
      “It’s not that I hate museums. They’re just… too much.”
    </blockquote>
  </div>
</div>




<br></br>

  {/* Idea card */}
        <div
        className="mt-12 mx-auto max-w-2xl rounded-xl border border-slate-200 bg-slate-50/70 px-6 md:px-8 py-6 md:py-7 text-center"
        >
        <p className="text-[13px] md:text-[14px] text-slate-600 mb-2">
            <span role="img" aria-label="idea">💡</span> That’s where the idea began
        </p>
        <h5 className="text-[15px] md:text-[17px] font-semibold text-slate-900 leading-relaxed">
            What if a digital guide could ease uncertainty — supporting the whole visit?
        </h5>
        <p className="text-[13px] md:text-[14px] text-slate-600 mt-1">
            Offering clear routes, accessibility cues, and sensory-friendly details in real time.
        </p>
        </div>
        </section>


        {/* Divider */}
        <div className="my-12 md:my-16 h-px bg-slate-200/70" />

        {/* ───────── Persona 4: Riley ───────── */}
        <section>

<h4 className="text-[20px] md:text-[22px] font-semibold text-slate-900"> ♿ Meet Riley: A Wheelchair User View of the Museum </h4> <span className="mt-2 inline-flex rounded-md bg-slate-100 text-slate-600 text-xs md:text-[12px] px-2.5 py-1"> Persona 4 </span> <p className="mt-4 text-[15px] md:text-[16px] leading-7 text-slate-700"> Riley enjoys history and hands-on learning. But as a wheelchair user, museums can feel distant — even when she’s right there. </p>

<br></br>

 {/* Exhibits too high */}
<div className="mt-6 grid md:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
  {/* Left: Text */}
  <div className="space-y-3 max-w-prose">
    <h5 className="text-[16px] md:text-[18px] font-semibold text-slate-900">
      Exhibits Placed Too High
    </h5>

    {/* Long balancing sentence */}
    <p className="text-[15px] md:text-[16px] leading-7 text-slate-700">
      Even when she tried using her phone camera to zoom in, the combination of height and glare meant the exhibit labels remained out of reach and unreadable.
    </p>

    {/* Shorter bullets below */}
    <ul className="space-y-2 text-[15px] md:text-[16px] leading-7 text-slate-700">
      <li>❌ Objects were placed at standing eye level</li>
      <li>❌ Labels and text? Way above her line of sight</li>
    </ul>
  </div>

  {/* Right: Image */}
  <div className="w-[400px] rounded-xl overflow-hidden ring-1 ring-slate-200">
    <Image
      src="/wheelchair-1.png"
      alt="High shelf exhibit panorama"
      width={400}
      height={280}
      className="w-full h-auto object-cover"
    />
  </div>
</div>


<br></br>
<br></br>

{/* Glass cases */}
<div className="mt-12 grid md:grid-cols-[auto_1fr] gap-10 items-start">
  {/* Left: Image */}
  <div className="w-[360px] rounded-xl overflow-hidden border border-slate-200 shadow-sm">
    <Image
      src="/wheelchair-2.png"
      alt="Museum glass case with small labels"
      width={360}
      height={240}
      className="w-full h-auto object-cover"
    />
  </div>

  {/* Right: Text */}
  <div className="space-y-2 min-w-0">
    <h5 className="text-[16px] md:text-[18px] font-semibold text-slate-900">
      Glass Cases + Small Labels = Frustration
    </h5>
    <p className="text-slate-700">
      The physical design unintentionally excluded seated visitors, making many exhibits difficult to appreciate at all from her seated position.
    </p>
    <p className="text-slate-700">❌ Zooming in? Didn’t work through the reflections</p>
    <p className="text-slate-700">❌ Text was hard to locate — and harder to focus on</p>
  </div>
</div>

<br></br>
<br></br>

{/* Phone use */}
<div className="mt-8 grid md:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
  <div className="space-y-2 max-w-prose">
    <h5 className="text-[16px] md:text-[18px] font-semibold text-slate-900">
      Phone Use as a Partial Fix
    </h5>
    <p className="text-[15px] md:text-[16px] leading-7 text-slate-700">
  Using her phone to zoom in on labels offered a temporary workaround, but it quickly became a tiring distraction that made the visit feel more like problem-solving than enjoyment.
</p>
    <ul className="space-y-2 text-[15px] md:text-[16px] leading-7 text-slate-700">
      <li>✅ It helped — a little.</li>
      <li>❌ But it broke the flow. Constant effort = fatigue, not freedom.</li>
    </ul>
  </div>

  <div className="w-[280px] rounded-xl overflow-hidden ring-1 ring-slate-200">
    <Image
      src="/wheelchair-3.png"
      alt="Riley navigating the space in her wheelchair"
      width={280}
      height={180}
      className="w-full h-auto object-cover"
    />
  </div>
</div>


<br></br>
{/* Box, card box */}
<div className="mt-8 max-w-3xl mx-auto rounded-xl border border-rose-200/70 bg-rose-50/30 px-4 py-2 text-[13px] md:text-[14px] text-slate-700 text-center">
  All the images below were taken from Riley’s seated perspective — showing exactly how she experienced the museum space. 
</div>

<div className="mt-12 mx-auto max-w-2xl rounded-xl border border-slate-200 bg-slate-50/70 px-6 md:px-8 py-6 md:py-7 text-center" > 
<p className="text-[13px] md:text-[14px] text-slate-600 mb-2"> <span role="img" aria-label="idea">💡
    </span> That’s where the idea began </p> 
    <h5 className="text-[15px] md:text-[17px] font-semibold text-slate-900 leading-relaxed"> 
    What if a digital guide could bring exhibits within reach for everyone? 
    </h5> 
<p className="text-[13px] md:text-[14px] text-slate-600 mt-1"> Clear text, adjustable views, and equal access — right at eye level. 
    </p> 
    </div>

        </section>


{/* ───────── Divider ───────── */}
<div className="my-16 md:my-20 h-px bg-slate-200/70" />




{/* Personas Section */}
<section id="personas" className="mx-auto max-w-5xl px-4 md:px-6">
  {/* Heading */}
  <h2 className="text-center text-[32px] md:text-[36px] font-semibold text-slate-900">
    Personas
  </h2>
  <p className="mt-2 text-center text-[15px] md:text-[16px] text-slate-600">
    The user stories above are represented as four personas.
  </p>

  {/* Grid of Personas */}
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
    <div className="rounded-2xl overflow-hidden shadow-md ring-1 ring-slate-200">
      <Image
        src="/leo-persona.png"
        alt="Leo Persona"
        width={600}
        height={800}
        className="w-full h-auto object-contain rounded-2xl"
      />
    </div>
    <div className="rounded-2xl overflow-hidden shadow-md ring-1 ring-slate-200">
      <Image
        src="/ben-persona.png"
        alt="Ben Persona"
        width={600}
        height={800}
        className="w-full h-auto object-contain rounded-2xl"
      />
    </div>
    <div className="rounded-2xl overflow-hidden shadow-md ring-1 ring-slate-200">
      <Image
        src="/riley-persona.png"
        alt="Riley Persona"
        width={600}
        height={800}
        className="w-full h-auto object-contain rounded-2xl"
      />
    </div>
    <div className="rounded-2xl overflow-hidden shadow-md ring-1 ring-slate-200">
      <Image
        src="/lucy-persona.png"
        alt="Lucy Persona"
        width={600}
        height={800}
        className="w-full h-auto object-contain rounded-2xl"
      />
    </div>
  </div>
</section>



{/* ───────── Divider ───────── */}
<div className="my-16 md:my-20 h-px bg-slate-200/70" />


{/* ───────── Paper Prototypes Section ───────── */}
<section id="paper-prototypes" className="mx-auto max-w-5xl px-4 md:px-6">
  {/* Big heading */}
  <h2 className="text-center text-[28px] md:text-[32px] font-bold text-slate-900">
    Paper Prototypes
  </h2>

  {/* Small intro subheading */}
  <p className="mt-2 text-center text-[15px] md:text-[16px] text-slate-600 leading-7 max-w-2xl mx-auto">
    Sketching ideas to turn persona problems into simple, testable solutions.
  </p>

  {/* ───── Home Prototype ───── */}
  <div className="mt-10">
    {/* Left-aligned subheading */}
    <h3 className="text-left text-[20px] md:text-[22px] font-semibold text-slate-900">
      Home
    </h3>
    <p className="mt-1 text-left text-[14px] text-slate-600">
      Minimal entry point showing opening hours, ticket booking, and an accessibility highlight.
    </p>

    {/* Image left, small */}
    <div className="mt-4 w-[140px] md:w-[160px]">
      <Image
        src="/paper-1.jpg"
        alt="Paper prototype of the Home screen"
        width={140}
        height={160}
        className="block w-full h-auto object-contain rounded-lg ring-1 ring-slate-200 shadow-sm bg-white"
      />
    </div>

    {/* Description under the image */}
    <div className="mt-5">
      <h4 className="text-[16px] font-semibold text-slate-900">
        Structuring the Home Section
      </h4>
      <p className="mt-2 text-[14px] md:text-[15px] leading-7 text-slate-700">
        The home screen provides quick access to opening hours and ticket booking,
        while also surfacing accessibility-focused events. A highlighted tile and 
        filters ensure visitors with accessibility needs can easily spot relevant 
        events without extra effort.
      </p>
    </div>
  </div>
</section>


<br></br>
<br></br>
<br></br>



{/* ───────── Paper Prototypes · Indoor Maps (2×2 stacked) ───────── */}
<section id="paper-indoor" className="mx-auto max-w-5xl px-4 md:px-6">
  <h4 className="text-[18px] md:text-[20px] font-semibold text-slate-900">
    Indoor Maps
  </h4>
  <p className="mt-2 text-[13px] md:text-[14px] text-slate-600">
    From the personas, maps were either missing or hard to follow. These sketches explore
    ways to make navigation clearer and faster on-site.
  </p>

<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">

  {/* 1. Structuring by Floor */}
  <div className="flex flex-col items-start">
    <Image
      src="/paper-2.jpg"
      alt="Sketch: cards for Ground / First floor"
      width={800}       // intrinsic pixels (or your real file size)
      height={1200}
      sizes="(min-width: 768px) 240px, 45vw"
      className="h-[240px] w-auto object-contain rounded-lg ring-1 ring-slate-200 bg-white shadow-sm"
      priority
    />
    <div className="mt-5" />
    <h5 className="text-[14px] md:text-[15px] font-semibold text-slate-900">
      1. Structuring by Floor
    </h5>
    <p className="mt-1 text-[13px] md:text-[14px] leading-6 text-slate-700">
      I started by sketching how to show multiple floors using large, tappable cards
      like “Ground Floor” and “First Floor.” Added brief floor summaries
      (e.g. “This floor has dinosaur exhibits”) — inspired by overviews given by Herbert
      Gallery staff.
    </p>
  </div>

  {/* 2. Rooms as Cards — why it didn’t work */}
  <div className="flex flex-col items-start">
    <Image
      src="/paper-3.jpg"
      alt="Sketch: rooms as individual cards"
      width={800}
      height={1200}
      sizes="(min-width: 768px) 240px, 45vw"
      className="h-[240px] w-auto object-contain rounded-lg ring-1 ring-slate-200 bg-white shadow-sm"
    />
    <div className="mt-5" />
    <h5 className="text-[14px] md:text-[15px] font-semibold text-slate-900">
      2. Rooms as Cards — and Why It Didn’t Work ❌
    </h5>
    <p className="mt-1 text-[13px] md:text-[14px] leading-6 text-slate-700">
      Too much scrolling (e.g. 50+ rooms per floor) and too many choices (+ booklet)
      in one place led to confusion.
    </p>
    <p className="mt-1 text-[13px] md:text-[14px] leading-6 text-slate-700">
      <span className="font-semibold">Fix:</span><br />
      I split navigation and booklet links into separate sections.
    </p>
  </div>

  {/* 3. Isometric map */}
  <div className="flex flex-col items-start">
    <Image
      src="/paper-4.jpg"
      alt="Sketch: semi-3D isometric map layout"
      width={800}
      height={1200}
      sizes="(min-width: 768px) 240px, 45vw"
      className="h-[240px] w-auto object-contain rounded-lg ring-1 ring-slate-200 bg-white shadow-sm"
    />
    <div className="mt-5" />
    <h5 className="text-[14px] md:text-[15px] font-semibold text-slate-900">
      3. An Isometric Map Layout
    </h5>
    <p className="mt-1 text-[13px] md:text-[14px] leading-6 text-slate-700">
      Traditional museum maps are often cluttered and hard to follow — Leo (a persona)
      faced this at the British Museum.
    </p>
    <p className="mt-1 text-[13px] md:text-[14px] leading-6 text-slate-700">
      To improve clarity, I used a <span className="font-semibold">semi-3D isometric map</span>
      &nbsp;layout that makes rooms and paths easier to understand at a glance.
    </p>
  </div>

  {/* 4. Interactive Room Navigation */}
  <div className="flex flex-col items-start">
    <Image
      src="/paper-5.jpg"
      alt="Sketch: interactive room info card"
      width={800}
      height={1200}
      sizes="(min-width: 768px) 240px, 45vw"
      className="h-[240px] w-auto object-contain rounded-lg ring-1 ring-slate-200 bg-white shadow-sm"
    />
    <div className="mt-5" />
    <h5 className="text-[14px] md:text-[15px] font-semibold text-slate-900">
      4. Interactive Room Navigation
    </h5>
    <p className="mt-1 text-[13px] md:text-[14px] leading-6 text-slate-700">
      When a user taps on a room, a bottom information card appears:
    </p>
    <ul className="mt-1 list-disc pl-5 space-y-1 text-[13px] md:text-[14px] leading-6 text-slate-700">
      <li><span className="font-semibold">Start, Live View, Steps</span></li>
      <li><span className="font-semibold">Room Information</span></li>
    </ul>
  </div>

</div>
</section>

<br></br>
<br></br>
<br></br>



{/* ───────── Paper Prototypes · Digital Booklets ───────── */}
<section id="paper-booklets" className="mx-auto max-w-5xl px-4 md:px-6">
  {/* Section heading + short intro */}
  <h4 className="text-[18px] md:text-[20px] font-semibold text-slate-900">
    Digital Booklets: Designed for Flexibility and Access
  </h4>
  <p className="mt-2 text-[13px] md:text-[14px] text-slate-600">
    Inspired by limited and hard-to-use printed booklets, I explored a flexible, room-specific
    digital version that’s easier to read and adapt on-site.
  </p>

  {/* Image first, centered; same visual height as other sketches */}
  <div className="mt-6 flex justify-start">
    <Image
      src="/paper-6.jpg"                 // ← replace if your filename differs
      alt="Paper prototype: digital booklet sketch"
      width={260}
      height={360}
      className="block h-[300px] w-auto object-contain rounded-lg ring-1 ring-slate-200 bg-white shadow-sm"
    />
  </div>

  {/* Divider + description below image */}

  <div className="mt-5">
    <h5 className="text-[14px] md:text-[15px] font-semibold text-slate-900">
      Key Accessibility Features
    </h5>
    <ul className="mt-2 list-disc pl-5 space-y-1 text-[13px] md:text-[14px] leading-6 text-slate-700">
      <li>Theme options for readability (light / dark / high-contrast)</li>
      <li>Audio narration & sign-language alternatives for text</li>
      <li>Room-specific content (no more booklet hunting or mismatch)</li>
    </ul>
  </div>
</section>



{/* ───────── Divider ───────── */}
<div className="my-16 md:my-20 h-px bg-slate-200/70" />


{/* ───────── Mid-Fidelity Prototypes (top-aligned; slightly smaller) ───────── */}
<section id="mid-fidelity" className="mx-auto max-w-7xl px-4 md:px-8 mt-12">
   <h2 className="text-center text-[22px] md:text-[24px] font-semibold text-slate-900">
    Mid-Fidelity Design Screens
  </h2>

{/*  <p className="text-center text-gray-600 mt-1 text-[16px] md:text-[17px]">
    Used for Testing
  </p>

  <p className="text-left mt-4 text-gray-700 leading-relaxed">
    These mid-fidelity designs were tested with users to evaluate whether the proposed features 
    were useful and discoverable. The aim was not polish, but to validate if the solutions worked 
    at a functional level. Accessibility was kept in mind, and my guiding motto—testing at every 
    stage—is reflected here, even if it’s with rough or early prototypes. Insights from this 
    round informed the more polished hi-fidelity iteration later.
  </p>
*/}


  <div className="mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 items-start content-start">
    {Array.from({ length: 12 }).map((_, i) => {
      const idx = i + 1;
      const src = `/mid-${idx}.png`;

      // Base width (10–20px smaller than before)
      const baseW = "w-[210px] md:w-[230px] xl:w-[250px]";

      // Make screens 1 & 2 a bit larger, but also 10–20px down from prior
      const isBig = i === 0 || i === 1;
      const widthClass = isBig
        ? "w-[250px] md:w-[290px] xl:w-[310px]"
        : baseW;

      return (
        <figure key={idx} className="flex flex-col items-start self-start">
          <Image
            src={src}
            alt={`Mid-fi screen ${idx}`}
            width={800}
            height={1600}
            className={`${widthClass} h-auto object-contain ring-1 ring-slate-200 shadow-sm`}
            loading="lazy"
          />
          {/* Keep caption off, or add if needed */}
          {/* <figcaption className="mt-2 text-[12px] text-slate-500">Screen {idx}</figcaption> */}
        </figure>
      );
    })}
  </div>
</section>


{/* ───────── Divider ───────── */}
<div className="my-16 md:my-20 h-px bg-slate-200/70" />



{/* ───────── Hi-Fi section ───────── */}
<section id="hi-fi" className="mx-auto max-w-7xl px-4 md:px-8 mt-16">
  {/* Title + intro */}
  <h2 className="text-center text-[28px] md:text-[32px] font-semibold text-slate-900">
    Hi-Fidelity Design Screens
  </h2>
  <p className="mt-2 text-center text-[14px] md:text-[16px] text-slate-700">
    The high-fidelity version focuses on usability and <span className="font-semibold">WCAG 2.2 accessibility</span> compliance.
  </p>
  <p className="mt-3 italic text-center text-[13px] md:text-[14px] text-slate-500 max-w-2xl mx-auto">
    “Learning and applying WCAG guidelines throughout helped shape not only the interface, but also my thinking — shifting my focus toward inclusive, user-first design.”
  </p>




  {/* Home screen overview */}
    <div id="hi-ios" className="scroll-mt-32 md:scroll-mt-40 mt-16">
      <h2 className="text-[22px] md:text-[24px] font-semibold text-slate-900 text-left">
        iOS Mobile Screens
      </h2>
    </div>

  <div className="mt-10">
    <h3 className="text-[20px] md:text-[22px] font-semibold text-slate-900 text-left">
      Home Page
    </h3>
    <p className="mt-2 text-[14px] md:text-[16px] leading-7 text-slate-700 text-left">
      The app’s starting screen offers ticket booking and upcoming events with clear,
      color-differentiated buttons. Key details like date and time are easy to spot for quick readability.
    </p>
  </div>
<br></br>

  {/* Grid layout */}
  <div className="mt-8 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-10 items-start">
    {/* Left: image */}
    <div className="flex md:block justify-center">
      <img
        src="/hi-fi-1.png"
        alt="Hi-fi prototype — Home screen"
        className="w-[180px] md:w-[220px] h-auto select-none"
      />
    </div>

    {/* Right: Bottom Nav + Icons */}
    <div className="md:pl-12 md:pr-10">
      {/* Bottom Nav */}
      <h4 className="text-[16px] md:text-[18px] font-semibold text-slate-900">Bottom Navigation Bar</h4>

      <div className="mt-4 space-y-6">
        <blockquote className="border-l-4 border-slate-800 pl-4">
          <p className="font-semibold">2.4.8 Location (AAA)</p>
          <p className="text-slate-700">
            The bar includes Home, Indoor Maps, Booklets, and Profile, enabling easy access to the app’s core
            features and intuitive user interaction.
          </p>
        </blockquote>

        <blockquote className="border-l-4 border-slate-800 pl-4">
          <p className="font-semibold">1.4.1 Use of Colour (A)</p>
          <p className="text-slate-700">
            The current page icon is filled and highlighted, while other icons are darker and unfilled, aiding
            users in identifying their location within the app.
          </p>
        </blockquote>
      </div>

      {/* Extra spacing before Icons section */}
      <h4 className="mt-14 text-[16px] md:text-[18px] font-semibold text-slate-900">Icons</h4>

      <div className="mt-4 space-y-6">
        <blockquote className="border-l-4 border-slate-800 pl-4">
          <p className="font-semibold">
            2.5.8 Target Size (AA) + 2.5.5 Enhanced Target Size (AAA)
          </p>
          <p className="text-slate-700">
            All tappable icons are at least 44×44px to reduce missed taps and support users with motor impairments.
          </p>
        </blockquote>

        <blockquote className="border-l-4 border-slate-800 pl-4">
          <p className="font-semibold">1.4.5 Images of Text (AA)</p>
          <p className="text-slate-700">
            Icons are paired with text labels to ensure their meaning is understandable for all users.
          </p>
        </blockquote>

        <blockquote className="border-l-4 border-slate-800 pl-4">
          <p className="font-semibold">
            1.4.3 Contrast (Minimum) (AA) + 1.4.6 Contrast (Enhanced) (AAA) + 1.4.11 Non-text Contrast (AA)
          </p>
          <p className="text-slate-700">
            All icons maintain a strong contrast against their background to remain clearly visible.
          </p>
        </blockquote>
      </div>
    </div>
  </div>
</section>


<br></br>
<br></br>
<br></br>


{/* ───────── Indoor Map section ───────── */}
<div className="mt-16" id="indoor-map">
  {/* Heading + description */}
  <h3 className="text-[20px] md:text-[22px] font-semibold text-slate-900 text-left">
    Indoor Map
  </h3>
  <p className="mt-2 text-[14px] md:text-[16px] leading-7 text-slate-700 text-left">
    The Indoor Map connects to on-site IoT sensors to surface live updates—like lift
    availability and room conditions—while guiding visitors with a clear, scrollable
    layout. People can explore interactively or use a structured “Contents” view for
    reduced cognitive load and flexible navigation.
  </p>

  {/* Two screen recordings with tiny captions */}
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
  <div className="text-center">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="mx-auto w-[180px] md:w-[220px] h-auto"
    >
      <source src="/hi-fi-3.mp4" type="video/mp4" />
    </video>
    <p className="mt-4 text-[13px] md:text-[14px] text-slate-600">
      Accessing the Quiet Room via the <span className="font-medium">Contents</span> list.
    </p>
  </div>

  <div className="text-center">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="mx-auto w-[180px] md:w-[220px] h-auto"
    >
      <source src="/hi-fi-2.mp4" type="video/mp4" />
    </video>
    <p className="mt-4 text-[13px] md:text-[14px] text-slate-600">
      Tapping the Quiet Room directly on the map for quick access.
    </p>
  </div>
</div>

<br></br>


  {/* Callouts below the videos */}
  <div className="mt-12 space-y-8">
    <blockquote className="border-l-4 border-slate-800 pl-4">
      <p className="font-semibold">2.4.5 Multiple Ways (AA)</p>
      <p className="text-slate-700">
        Users can either use the Contents list or tap rooms on the map, providing more than
        one way to find information.
      </p>
    </blockquote>

    <blockquote className="border-l-4 border-slate-800 pl-4">
      <p className="font-semibold">1.3.3 Sensory Characteristics (A)</p>
      <p className="text-slate-700">
        Tooltips and labels explain interactions, so navigation isn’t dependent on color,
        shape, or memory alone.
      </p>
    </blockquote>

    <blockquote className="border-l-4 border-slate-800 pl-4">
      <p className="font-semibold">1.3.2 Meaningful Sequence (A)</p>
      <p className="text-slate-700">
        High-priority areas (entrance/exit) appear first, followed by other rooms, creating
        a clear, logical flow.
      </p>
    </blockquote>
  </div>
</div>

<br></br>
<br></br>

{/* ───────── Indoor Map · Details (Bottom sheet + Whole map) ───────── */}
<section id="indoor-details" className="mx-auto max-w-5xl px-4 md:px-6 mt-16">

  {/* Room Info & Directions Card */}
  <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 md:gap-12 items-start">
    {/* Image — slightly larger, flush with left container edge */}
    <img
      src="/bottom-sheet.png"
      alt="Room info card with quick actions"
      width={260}
      height={260}
      className="w-[240px] md:w-[260px] h-auto select-none object-contain justify-self-start"
    />

    {/* Copy — dropped a bit to align visually with the card’s inner padding */}
    <div className="self-start mt-4 md:mt-6">
      <h3 className="text-[20px] md:text-[22px] font-semibold text-slate-900">
        Room Info & Directions Card
      </h3>
      <p className="mt-2 text-[14px] md:text-[16px] leading-7 text-slate-700">
        When a visitor taps a room, a compact card appears with quick actions
        (Directions, Live View, Steps) and key <span className="font-semibold">sensory details</span>
        like lighting, temperature, and seating. It helps people assess the space and
        navigate without digging through menus.
      </p>
    </div>
  </div>

  {/* Spacer only (no divider) */}
  <div className="mt-16 md:mt-24" />

  {/* Ground Floor Museum Map */}
  <div className="grid grid-cols-1 md:grid-cols-[1fr_520px] gap-10 md:gap-12 items-start">
    {/* Text left (flush with same container edge) */}
    <div className="self-start mt-6 md:mt-8">
      <h3 className="text-[20px] md:text-[22px] font-semibold text-slate-900">
        Ground Floor Museum Map
      </h3>
      <p className="mt-2 text-[14px] md:text-[16px] leading-7 text-slate-700">
        This is the full isometric map used across the app.
      </p>
      <p className="text-[14px] md:text-[16px] leading-7 text-slate-700">
        Future refinements could include clearer zone grouping and short room labels to aid orientation.
      </p>
    </div>

    {/* Image right */}
    <img
      src="/whole-map.svg"
      alt="Ground Floor isometric museum map"
      width={520}
      height={420}
      className="w-[420px] md:w-[520px] h-auto select-none object-contain justify-self-start"
    />
  </div>
</section>




{/* ───────── Digital Booklets ───────── */}
<section id="digital-booklets" className="mx-auto max-w-7xl px-4 md:px-8 mt-16">
  {/* Title + short intro */}
  <h3 className="text-[20px] md:text-[22px] font-semibold text-slate-900">
    Digital Booklets
  </h3>
  <p className="mt-2 text-[14px] md:text-[16px] leading-7 text-slate-700">
    The digital booklet offers a flexible, user-friendly way to access exhibit information.
  </p>
<br></br>

  {/* Row 1 — Left video, right callouts */}
  <div className="mt-8 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 md:gap-12 items-start">
    {/* Left: video */}
    <div className="text-left">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-[200px] md:w-[240px] h-auto mx-0"
      >
        <source src="/hi-fi-4.mp4" type="video/mp4" />
      </video>
    </div>

    {/* Right: callouts */}
    <div className="space-y-6">
      <h4 className="text-[16px] md:text-[18px] font-semibold text-slate-900">
        Audio Playback &amp; Controls
      </h4>

      <blockquote className="border-l-4 border-slate-800 pl-4">
        <p className="font-medium">1.4.8 Visual Presentation (AAA)</p>
        <p className="text-slate-700">
          Text is left-aligned, within ~80-character lines, and well spaced — improving readability
          and reducing eye strain for users with visual impairments.
        </p>
      </blockquote>

      <blockquote className="border-l-4 border-slate-800 pl-4">
        <p className="font-medium">1.4.2 Audio Control (A)</p>
        <p className="text-slate-700">
          Playback controls (play, pause, volume) are available within the expanded audio panel.
        </p>
      </blockquote>

      <blockquote className="border-l-4 border-slate-800 pl-4">
        <p className="font-medium">1.2.6 Sign Language (Pre-recorded) (AAA)</p>
        <p className="text-slate-700">
          Sign language videos are provided as a visual alternative to support users with hearing impairments.
        </p>
      </blockquote>
    </div>
  </div>

<br></br>

  {/* Row 2 — Left text, right video */}
  <div className="mt-14 grid grid-cols-1 md:grid-cols-[1fr_260px] gap-10 md:gap-12 items-start">
    {/* Left: text + callout */}
    <div className="space-y-6">
      <h4 className="text-[16px] md:text-[18px] font-semibold text-slate-900">
        Theme Customisation
      </h4>
      <p className="text-[14px] md:text-[16px] leading-7 text-slate-700">
        Users can switch between four display themes to suit visual comfort and light sensitivity.
        This helps reduce glare, eye strain, and supports different reading preferences.
      </p>

      <blockquote className="border-l-4 border-slate-800 pl-4">
        <p className="font-medium">1.4.4 Resize Text (AA)</p>
        <p className="text-slate-700">
          Text can be resized up to 200% without loss of content or functionality, supporting users
          with low vision or reading difficulties.
        </p>
      </blockquote>
    </div>

    {/* Right: video */}
    <div className="text-left md:justify-self-start">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-[200px] md:w-[240px] h-auto mx-0"
      >
        <source src="/hi-fi-5.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</section>



{/* ───────── Web Version: Accessible Digital Booklet ───────── */}
<section id="hi-web" className="mx-auto max-w-5xl px-4 md:px-8 mt-32 mb-32">
  {/* Heading + description */}
  <h3 className="text-[20px] md:text-[22px] font-semibold text-slate-900">
    Web Version: Accessible Digital Booklet
  </h3>
  <p className="mt-3 text-[14px] md:text-[16px] leading-7 text-slate-700">
    This version shows how the exhibit text syncs with both audio narration and
    sign language video, helping users follow along in their preferred format.
  </p>

  {/* Image */}
  <div className="mt-12">
    <img
      src="/web-1.png"
      alt="Web Version Accessible Digital Booklet mockup"
      className="w-full"
    />
  </div>
</section>

{/* ───────── iPad Version: Accessible Digital Booklet ───────── */}
<section id="hi-ipad" className="mx-auto max-w-5xl px-4 md:px-8 mt-32">
  <h3 className="text-[20px] md:text-[22px] font-semibold text-slate-900">
    iPad Version: Interactive Indoor Map
  </h3>
  <p className="mt-3 text-[14px] md:text-[16px] leading-7 text-slate-700">
    The isometric floor map was re-designed specifically for iPad, with
    increased component sizes, larger touch targets, and clear iconography.
  </p>

  <div className="mt-12">
    <img
      src="/ipad-1.png"
      alt="iPad Version Interactive Indoor Map mockup"
      className="w-full"
    />
  </div>
</section>



{/* Divider before Testing */}
<div className="border-t border-slate-200 mt-24 mb-24"></div>

{/* ───────── Testing ───────── */}
<section id="testing" className="mx-auto max-w-6xl px-4 md:px-8">
  <h2 className="text-center text-[26px] md:text-[30px] font-semibold text-slate-900 mb-6">
    Testing
  </h2>

  {/* Your testing plan grid follows here */}
</section>




{/* ───────── Usability Testing Plan ───────── */}
<section className="mx-auto max-w-6xl px-4 md:px-8 mt-2">
  <h3 className="text-xl md:text-2xl font-bold text-slate-900 text-center">
    Usability Testing Plan
  </h3>

  {/* Grid container */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">

    {/* Study Goals */}
    <div>
      <h4 className="text-lg font-semibold mb-3">
        🎯 Study Goals
      </h4>
      <ul className="list-disc pl-5 space-y-2 text-slate-700">
        <li>Assess ease of accessing key accessibility features (e.g., BSL event info, quiet room, digital booklet).</li>
        <li>Evaluate how well users understand and navigate the app’s features.</li>
      </ul>
    </div>

    {/* Participant Criteria */}
    <div>
      <h4 className="text-lg font-semibold mb-3">
        👥 Participant Criteria
      </h4>
      <ul className="list-disc pl-5 space-y-2 text-slate-700">
        <li>Total of 5 participants.</li>
        <li>Regular mobile users.</li>
        <li>Familiar with app interfaces.</li>
        <li>Have visited museums or cultural sites.</li>
      </ul>
    </div>

    {/* Research Type */}
    <div>
    <h4 className="text-lg font-semibold mb-3">
        ✏️ Research Type
    </h4>

    <p className="font-semibold underline mb-2 text-slate-800">
        Unmoderated Remote Usability Testing
    </p>
    <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-4">
        <li>
        Participants interacted independently with a{" "}
        <span className="font-semibold">mid-fidelity prototype</span> to evaluate the usability of key accessibility features.
        </li>
    </ul>

    <p className="font-semibold underline mb-2 text-slate-800">Insights Gathered</p>
    <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-4">
        <li>
        <span className="font-semibold">Formative</span> — identify usability and accessibility gaps in the current design.
        </li>
        <li>
        <span className="font-semibold">Summative</span> — assess how effectively the proposed features support user needs.
        </li>
    </ul>
    </div>

    {/* Testing */}
    <div>
      <h4 className="text-lg font-semibold mb-3">
        🧪 Testing
      </h4>

      <p className="font-semibold underline mb-2 text-slate-800">Scenario Setup</p>
      <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-4">
        <li>Conducted remotely via Microsoft Teams.</li>
        <li>Participants signed digital consent forms and were introduced to personas to understand the app’s purpose.</li>
        <li>Sessions followed a flexible task-based script tailored to each participant’s familiarity.</li>
      </ul>

      <p className="font-semibold underline mb-2 text-slate-800">Quantitative data</p>
      <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-4">
        <li>System Usability Scale (SUS) using Microsoft Forms.</li>
      </ul>

      <p className="font-semibold underline mb-2 text-slate-800">Qualitative data</p>
      <ul className="list-disc pl-5 space-y-2 text-slate-700">
        <li>Post-test Semistructured Interview.</li>
      </ul>
    </div>

  </div>
</section>



{/* ───────── User Tasks for Testing Accessibility Features ───────── */}
<section id="user-tasks" className="mx-auto max-w-7xl px-4 md:px-8 mt-20">
  <h3 className="text-[20px] md:text-[22px] font-semibold text-slate-900 text-left mb-2">
    User Tasks for Testing Accessibility Features
  </h3>

  {/* brief purpose line (now closer to the heading) */}
  <p className="text-[14px] md:text-[16px] text-slate-700 leading-7 text-left mb-3">
    Assess ease of accessing key accessibility features (e.g., BSL event info, quiet room, digital booklet).
  </p>

  {/* numbered tasks — left aligned and compact */}
  <ol className="list-decimal pl-5 md:pl-6 text-slate-800 space-y-2 text-left">
    <li>Check the timings for the BSL-accessible event</li>
    <li>Locate the ground floor map</li>
    <li>Find the quiet room on the map</li>
    <li>Check the temperature of the quiet room</li>
    <li>Access the digital booklet for Room 2</li>
    <li>Locate the audio playback button</li>
    <li>Change the booklet theme to dark mode</li>
  </ol>

  {/* closing line — slightly closer to the list */}
  <p className="text-[14px] md:text-[15px] text-slate-700 mt-3 text-left">
    These tasks were chosen to test key features: accessibility of event timings, navigation,
    environmental information, and the flexibility of the digital booklet.
  </p>


<br></br>
<br></br>


  {/* Important Note (lighter + smaller) */}
  <div className="mt-6 rounded-xl px-4 md:px-6 py-4 md:py-5 bg-[rgba(182,62,22,0.05)]">
    <h4 className="text-[15px] md:text-[16px] font-semibold text-slate-900 flex items-center gap-2">
      <span className="text-rose-600">‼️</span> Important Note
    </h4>
    <p className="mt-2 text-[13px] md:text-[14px] leading-6 text-slate-700">
      This usability testing was conducted using a <span className="font-semibold">mid-fidelity prototype due to time constraints</span>. 
      The goal was to evaluate the effectiveness of key features early in the design process. Based on the feedback received, 
      the <span className="font-semibold">high-fidelity version was later refined and visually polished in Figma </span> 
      to better address the observed issues and improve overall user experience.
    </p>
  </div>

</section>


{/* ───────── Divider ───────── */}
<div className="my-16 md:my-20 h-px bg-slate-200/70" />




{/* ───────── Quantitative Analysis ───────── */}
<section id="quantitative" className="mx-auto max-w-6xl px-4 md:px-8 mt-16">
  <h3 className="text-center text-[28px] md:text-[32px] font-semibold text-slate-900">
    Quantitative Analysis
  </h3>
    <p className="mt-1 text-center text-[14px] md:text-[16px] text-slate-700">
      Numerical measures of usability performance
    </p>


  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
    {/* Left: text */}
    <div className="max-w-xl md:justify-self-start">
      <h3 className="text-[20px] md:text-[22px] font-semibold text-slate-900">
        System Usability Scale (SUS) Results
      </h3>

      <div className="mt-6">
        <p className="text-[16px] md:text-[18px] font-semibold">
          Average Score: <span className="text-[#FD5858]">72</span>
        </p>
        <p className="text-slate-500 mt-1">(generally positive feedback)</p>
      </div>

      <div className="mt-6">
        <p className="text-[16px] md:text-[18px] font-semibold">
          Range: <span style={{ color: "#ffae2bff" }} className="font-semibold">55 – 87.5</span>
        </p>
        <p className="text-slate-500 mt-1">(variations in user experiences)</p>
      </div>
    </div>

    {/* Right: donut + legend (centered) */}
    <div className="flex flex-col items-center md:justify-self-center">
      <SUSDonut score={72} size={200} thickness={22} />

      {/* Legend */}
      <div className="mt-6 flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full" style={{ background: "#FD5858" }} />
          <span>SUS Score</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full" style={{ background: "#FFDC7B" }} />
          <span>Remaining</span>
        </div>
      </div>
    </div>
  </div>
</section>



{/* ───────── Divider ───────── */}
<div className="my-16 h-px bg-slate-200/80" />

{/* ───────── Qualitative Analysis ───────── */}
<section id="qualitative" className="mx-auto max-w-6xl px-4 md:px-8">
  <h3 className="text-center text-[28px] md:text-[32px] font-semibold text-slate-900">
    Qualitative Analysis
  </h3>
    <p className="mt-1 text-center text-[14px] md:text-[16px] text-slate-700">
    Insights gathered from usability testing sessions
  </p>

<br></br>

  {/* Card */}
  <div className="mt-6 rounded-2xl border border-slate-200 p-6 md:p-8">
    {/* Badge title (lighter green, black text) */}
    <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-[13px] font-semibold text-slate-900 ring-1 ring-green-200">
      <span aria-hidden>✅</span>
      <span>What Worked Well</span>
    </div>

    {/* 1. Map Utility Recognised */}
    <div className="mt-6">
      <h3 className="text-[16px] md:text-[18px] font-semibold text-slate-900">
        Map Utility Recognised
      </h3>
      <p className="mt-2 text-[14px] md:text-[15px] text-slate-700">
        The indoor map was widely appreciated for supporting wayfinding and
        offering helpful space cues.
      </p>

      <div className="mt-4 space-y-3">
        <blockquote className="border-l-4 border-green-300 bg-green-50/70 p-3 rounded-lg italic text-slate-800 text-[13px] md:text-[14px] leading-relaxed">
          “Are you going to design these for actual museums next? You should
          pitch this idea — I think people would really use it.” —
          <span className="not-italic font-semibold"> P1</span>
        </blockquote>
        <blockquote className="border-l-4 border-green-300 bg-green-50/70 p-3 rounded-lg italic text-slate-800 text-[13px] md:text-[14px] leading-relaxed">
          “I actually wish I had this… Museums, yes — but I’d love this in a
          mall as well. They’re huge, and I honestly don’t know where I am or
          what I’ve missed.” —
          <span className="not-italic font-semibold"> P3</span>
        </blockquote>
      </div>
    </div>

    {/* 2. Digital Booklet Appreciated for Accessibility */}
    <div className="mt-8">
      <h3 className="text-[16px] md:text-[18px] font-semibold text-slate-900">
        Digital Booklet Appreciated for Accessibility
      </h3>
      <p className="mt-2 text-[14px] md:text-[15px] text-slate-700">
        Participants valued the digital booklet as a low-effort, high-accessibility
        alternative to physical labels.
      </p>

      <blockquote className="mt-4 border-l-4 border-green-300 bg-green-50/70 p-3 rounded-lg italic text-slate-800 text-[13px] md:text-[14px] leading-relaxed">
        “I usually take photos of exhibits I like, but then I forget or
        accidentally delete them. This booklet would be so helpful.” —
        <span className="not-italic font-semibold"> P5</span>
      </blockquote>
    </div>
  </div>




<br></br>
<br></br>
<br></br>


{/* Card */}
<div className="mt-6 rounded-2xl border border-slate-200 p-6 md:p-8">
  {/* Badge title */}
<div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-[13px] font-semibold text-black ring-1 ring-orange-200">
  <span aria-hidden>⚠️</span>
  <span>Areas for Improvement</span>
</div>

  {/* 1. Initial Onboarding */}
  <div className="mt-6">
    <h3 className="text-[16px] md:text-[18px] font-semibold text-slate-900">
      Initial Onboarding and Guidance Lacking
    </h3>
    <p className="mt-2 text-slate-700 text-[14px] md:text-[15px] leading-relaxed">
      Participant 2, who has ADHD (consent obtained), said the app didn’t
      clearly explain what it was or where to begin. They missed the tooltips
      and suggested adding features like the Indoor Map and Digital Booklet to
      the homepage to aid orientation.
    </p>

    <div className="mt-4 space-y-3">
      <blockquote className="border-l-4 border-orange-300 bg-orange-50 p-3 md:p-4 italic text-slate-800 rounded-lg text-sm leading-relaxed">
        “I had to guess what to do first. Nothing told me.” — 
        <span className="not-italic font-semibold"> P2</span>
      </blockquote>
    </div>
  </div>

  {/* 2. Feature Discoverability */}
  <div className="mt-8">
    <h3 className="text-[16px] md:text-[18px] font-semibold text-slate-900">
      Feature Discoverability
    </h3>
    <p className="mt-2 text-slate-700 text-[14px] md:text-[15px] leading-relaxed">
      Important features like room temperature data were easy to overlook. The
      swipe-up interaction on the map’s info panel (inspired by Google-style
      navigation cards) wasn’t intuitive for all users on their first try.
    </p>

    <blockquote className="mt-4 border-l-4 border-orange-300 bg-orange-50 p-3 md:p-4 italic text-slate-800 rounded-lg text-sm leading-relaxed">
      “I didn’t notice the temperature until later.” — 
      <span className="not-italic font-semibold"> P1</span>
    </blockquote>
  </div>
</div>


<br></br>
<br></br>




{/* Key Takeaways Box */}
<div
  className="mt-6 rounded-2xl p-6 md:p-8 shadow-sm"
  style={{ backgroundColor: "rgba(182,62,22,0.08)" }} // SIENNA_TINT
>
  <h3 className="text-lg md:text-xl font-semibold text-slate-900">
    Key Takeaways from Feedback
  </h3>

  <ul className="mt-3 space-y-2 text-slate-800 list-disc list-inside">
    <li>
      Contextual guidance (e.g. short prompts, better labels, or onboarding) is
      needed to help users get started.
    </li>
    <li>
      Accessibility tools were generally well-received, but their
      discoverability and clarity can be improved.
    </li>
    <li>
      Participants understood and supported the app’s inclusive purpose, but
      usability friction prevented a seamless experience.
    </li>
  </ul>
</div>


</section>


<div className="my-12 border-t border-slate-200" />



{/* ───────── Design Updates After User Testing ───────── */}
<section id="post-test-updates" className="mx-auto max-w-7xl px-4 md:px-8 mt-20">
  <h2 className="text-center text-[28px] md:text-[32px] font-semibold text-slate-900">
    Design Improvements from User Feedback
  </h2>
  <p className="mt-2 text-center text-[14px] md:text-[16px] text-slate-700">
    Comparisons showing how user feedback and my behavior observations during usability testing shaped the redesign.
  </p>





{/* ===== Pair 1 ===== */}
<article className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
  <h3 className="text-[18px] md:text-[20px] font-semibold text-slate-900">
    Home Screen — Clarity & Navigation Improvements
  </h3>

  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    {/* Before */}
    <div>
      <span className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-1 text-[12px] font-medium text-slate-600 ring-1 ring-slate-200">
        Before
      </span>
      <img
        src="/home-before.png"
        alt="Before — unclear hero text, confusing navigation states"
        className="mt-3 w-full h-[420px] object-contain"
      />
    </div>

    {/* After */}
    <div>
      <span className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-1 text-[12px] font-medium text-slate-600 ring-1 ring-slate-200">
        After
      </span>
      <img
        src="/home-after.png"
        alt="After — clearer hero text, refined hierarchy, updated iOS 17 kit"
        className="mt-3 w-full h-[420px] object-contain"
      />
    </div>
  </div>

  {/* What changed & why */}
  <div className="mt-8">
    <h6 className="text-[14px] md:text-[15px] font-semibold text-slate-900">
      What Changed &amp; Why
    </h6>

    <ul className="mt-3 space-y-3 text-[13px] md:text-[14px] leading-7 text-slate-700 list-disc pl-5">
      <li>
        <span className="font-semibold text-slate-900">Problem:</span> Users didn’t understand the app’s purpose or what actions to take. The hero text was generic, timings were hidden under “Book Tickets,” and navigation states were hard to distinguish. Overall feedback: participants felt “lost.”
      </li>

      <li>
        <span className="font-semibold text-slate-900">Change:</span> Updated hero text to explicitly describe the app as an inclusive digital companion. Moved opening timings above the Book Tickets button. Refined navigation bar states using the primary color for the active tab. Upgraded to iOS 17 kit for consistency.
      </li>

      <li>
        <span className="font-semibold text-slate-900">Reason:</span> Clearer messaging communicates value immediately. Improved hierarchy surfaces critical info (timings before booking). Navigation affordance reduces confusion. Modern UI patterns improve familiarity.
      </li>

      <li>
        <span className="font-semibold text-slate-900">Impact:</span> Participants could quickly understand the app’s purpose and how to get started. Visibility of timings improved task flow, and users reported greater confidence in navigating the app.
      </li>
    </ul>
  </div>
</article>


<br></br>



{/* ===== Pair 2 ===== */}
<article className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
  <h3 className="text-[18px] md:text-[20px] font-semibold text-slate-900">
    Room Information & Accessibility Visibility
  </h3>

  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    {/* Before */}
    <div>
      <span className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-1 text-[12px] font-medium text-slate-600 ring-1 ring-slate-200">
        Before
      </span>
      <img
        src="/before-tooltip.png"
        alt="Before — Users did not realize they needed to swipe up for details"
        className="mt-3 w-full h-[420px] object-contain"
      />
    </div>

    {/* After */}
    <div>
      <span className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-1 text-[12px] font-medium text-slate-600 ring-1 ring-slate-200">
        After
      </span>
      <img
        src="/after-tooltip.png"
        alt="After — Swipe up instruction added for room details"
        className="mt-3 w-full h-[420px] object-contain"
      />
    </div>
  </div>

  {/* What changed & why */}
  <div className="mt-8">
    <h6 className="text-[14px] md:text-[15px] font-semibold text-slate-900">
      What Changed &amp; Why
    </h6>

    <ul className="mt-3 space-y-3 text-[13px] md:text-[14px] leading-7 text-slate-700 list-disc pl-5">
      <li>
        <span className="font-semibold text-slate-900">Problem:</span> Room and accessibility information was hidden in the swipe-up card (similar to Google Maps). Many users didn’t realize they had to swipe up, and missed key details during testing.
      </li>

      <li>
        <span className="font-semibold text-slate-900">Change:</span> Added a clear prompt (“Swipe up to see more details”) at the bottom of the card to guide users.
      </li>

      <li>
        <span className="font-semibold text-slate-900">Reason:</span> Swipe gestures are not always discoverable. Explicit guidance ensures users don’t overlook critical information like directions, accessibility notes, and room details.
      </li>

      <li>
        <span className="font-semibold text-slate-900">Impact:</span> Participants now successfully accessed all room and accessibility details. The change improved task completion rates and reduced confusion around hidden content.
      </li>
    </ul>
  </div>
</article>




<br></br>

{/* ===== Pair 3 ===== */}
<article className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
  <h3 className="text-[18px] md:text-[20px] font-semibold text-slate-900">
    Room Information Card – Improved Clarity
  </h3>

  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    {/* Before */}
    <div>
      <span className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-1 text-[12px] font-medium text-slate-600 ring-1 ring-slate-200">
        Before
      </span>
      <img
        src="/card-info-before.png"
        alt="Before — Limited use of icons, information hidden inside paragraph text"
        className="mt-3 w-full h-[420px] object-contain"
      />
    </div>

    {/* After */}
    <div>
      <span className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-1 text-[12px] font-medium text-slate-600 ring-1 ring-slate-200">
        After
      </span>
      <img
        src="/card-info-after.png"
        alt="After — Color-coded icons and short upfront description added"
        className="mt-3 w-full h-[420px] object-contain"
      />
    </div>
  </div>

  {/* What changed & why */}
  <div className="mt-8">
    <h6 className="text-[14px] md:text-[15px] font-semibold text-slate-900">
      What Changed &amp; Why
    </h6>

    <ul className="mt-3 space-y-3 text-[13px] md:text-[14px] leading-7 text-slate-700 list-disc pl-5">
      <li>
        <span className="font-semibold text-slate-900">Problem:</span> 
        Only a couple of details (like temperature) were icon-based, while most 
        information was hidden in a paragraph. This made scanning difficult, and 
        participants often missed details.
      </li>

      <li>
        <span className="font-semibold text-slate-900">Change:</span> 
        Introduced consistent icon usage with color to highlight each piece of 
        information. Added a short one–two line description at the top of the card 
        before swipe-up content.
      </li>

      <li>
        <span className="font-semibold text-slate-900">Reason:</span> 
        Icons paired with text improve scan-ability, while upfront context helps 
        users immediately understand the purpose of the room without hidden steps.
      </li>

      <li>
        <span className="font-semibold text-slate-900">Impact:</span> 
        Participants were able to quickly identify room functions and accessibility 
        features. The updated card reduced confusion and improved decision-making 
        during tasks.
      </li>
    </ul>
  </div>
</article>



<br></br>



  {/* ===== Pair 4 ===== */}
<article className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
  <h3 className="text-[18px] md:text-[20px] font-semibold text-slate-900">
    Welcome Page — Room Overview & Interactive Features
  </h3>

  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    {/* Before */}
    <div>
      <span className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-1 text-[12px] font-medium text-slate-600 ring-1 ring-slate-200">
        Before
      </span>
      <img
        src="/welcome-page-before.png"
        alt="Before — Only heading and long description shown, no imagery or interactive features"
        className="mt-3 w-full h-[420px] object-contain"
      />
    </div>

    {/* After */}
    <div>
      <span className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-1 text-[12px] font-medium text-slate-600 ring-1 ring-slate-200">
        After
      </span>
      <img
        src="/welcome-page-after.png"
        alt="After — Added room image, short summary, and list of interactive features"
        className="mt-3 w-full h-[420px] object-contain"
      />
    </div>
  </div>

  {/* What changed & why */}
  <div className="mt-8">
    <h6 className="text-[14px] md:text-[15px] font-semibold text-slate-900">
      What Changed &amp; Why
    </h6>

    <ul className="mt-3 space-y-3 text-[13px] md:text-[14px] leading-7 text-slate-700 list-disc pl-5">
      <li>
        <span className="font-semibold text-slate-900">Problem:</span> The first version of the Welcome Page only showed the room heading and a long descriptive paragraph. Without visuals or feature highlights, users couldn’t immediately understand what the room looked like or what they could do with the booklet.
      </li>

      <li>
        <span className="font-semibold text-slate-900">Change:</span> Added a room image for context, a shorter and more scannable description, and a clear list of interactive features (Audio Narration, BSL Video, Visual Customisation Options).
      </li>

      <li>
        <span className="font-semibold text-slate-900">Reason:</span> Images provide faster recognition and set user expectations. Listing interactive features upfront makes the booklet’s capabilities clear and prevents users from missing key accessibility options.
      </li>

      <li>
        <span className="font-semibold text-slate-900">Impact:</span> Users reported finding the page more engaging and intuitive. The concise layout improved scannability, while the feature list helped participants anticipate what tools were available from the start.
      </li>
    </ul>
  </div>
</article>


<br></br>

{/* ===== Pair 5 ===== */}
<article className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
  <h3 className="text-[18px] md:text-[20px] font-semibold text-slate-900">
    Exhibit Detail — Cleaner Layout & iOS-native Controls
  </h3>

  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    {/* Before */}
    <div>
      <span className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-1 text-[12px] font-medium text-slate-600 ring-1 ring-slate-200">
        Before
      </span>
      <img
        src="/customise-before.png"   // update path if different
        alt="Before — crowded header controls and boxed content"
        className="mt-3 w-full h-[420px] object-contain"
      />
    </div>

    {/* After */}
    <div>
      <span className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-1 text-[12px] font-medium text-slate-600 ring-1 ring-slate-200">
        After
      </span>
      <img
        src="/customise-after.png"    // update path if different
        alt="After — floating Customise button, clear hierarchy and actions"
        className="mt-3 w-full h-[420px] object-contain"
      />
    </div>
  </div>

  {/* What changed & why */}
  <div className="mt-8">
    <h6 className="text-[14px] md:text-[15px] font-semibold text-slate-900">
      What Changed &amp; Why
    </h6>

    <ul className="mt-3 space-y-3 text-[13px] md:text-[14px] leading-7 text-slate-700 list-disc pl-5">
      <li>
        <span className="font-semibold text-slate-900">Problem:</span> The page followed a “Google-style” layout: many controls (customisation, bookmark, etc.) crowded the top, content sat inside heavy boxes, and actions were split around the screen. It felt visually busy and not very iOS-native.
      </li>

      <li>
        <span className="font-semibold text-slate-900">Change:</span> Moved advanced controls into a single floating <em>Customise</em> button (FAB) for progressive disclosure; simplified the canvas (removed heavy card boxes); introduced a clear typographic hierarchy: <strong>Title → Year → Artist/byline → Description</strong>; added large, primary actions (<em>Listen in Audio</em>, <em>Watch in Sign Language</em>) and a room breadcrumb (“Old Masters Gallery”) at the top; added a concise page indicator (“2 of 12”).
      </li>

      <li>
        <span className="font-semibold text-slate-900">Reason:</span> Reduces cognitive load and visual clutter, keeps primary actions within easy reach, and better matches iOS patterns and motion (FAB, lightweight surfaces, strong type hierarchy). Breadcrumb supports orientation within the booklet.
      </li>

      <li>
        <span className="font-semibold text-slate-900">Impact:</span> Users scan faster and mis-taps drop; participants immediately know where they are (room name) and what they can do next (Audio/BSL). The page looks calmer and more consistent with the rest of the iOS UI.
      </li>
    </ul>
  </div>
</article>


<br></br>


{/* ===== Pair 6 ===== */}
<article className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
  <h3 className="text-[18px] md:text-[20px] font-semibold text-slate-900">
    Settings Placement & Visual Emphasis
  </h3>

  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    {/* Before */}
    <div>
      <span className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-1 text-[12px] font-medium text-slate-600 ring-1 ring-slate-200">
        Before
      </span>
      <img
        src="/cust-card-before.png"   // update path if different
        alt="Before — settings panel placed at top, no background depth"
        className="mt-3 w-full h-[420px] object-contain"
      />
    </div>

    {/* After */}
    <div>
      <span className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-1 text-[12px] font-medium text-slate-600 ring-1 ring-slate-200">
        After
      </span>
      <img
        src="/cust-card-after.png"    // update path if different
        alt="After — settings aligned to bottom with subtle grey background for depth"
        className="mt-3 w-full h-[420px] object-contain"
      />
    </div>
  </div>

  {/* What changed & why */}
  <div className="mt-8">
    <h6 className="text-[14px] md:text-[15px] font-semibold text-slate-900">
      What Changed &amp; Why
    </h6>

    <ul className="mt-3 space-y-3 text-[13px] md:text-[14px] leading-7 text-slate-700 list-disc pl-5">
      <li>
        <span className="font-semibold text-slate-900">Problem:</span> The settings panel appeared at the top, inconsistent with the floating button positioned at the bottom. The lack of visual depth also made the panel blend too much into the page.
      </li>

      <li>
        <span className="font-semibold text-slate-900">Change:</span> Shifted the settings panel to the bottom for consistency with the FAB interaction. Added a subtle grey backdrop to push the panel forward and make it feel more layered.
      </li>

      <li>
        <span className="font-semibold text-slate-900">Reason:</span> Ensures layout consistency and creates visual focus without overloading the user. Enhances depth and separation between content and controls.
      </li>

      <li>
        <span className="font-semibold text-slate-900">Impact:</span> Purely a visual enhancement — users faced no issues, but the experience now feels more polished and coherent.
      </li>
    </ul>
  </div>
</article>



</section>


{/* ───────── Divider ───────── */}
<div className="my-16 h-px bg-slate-200/80" />



{/* ===== Final Reflections ===== */}

<section
  id="reflections"
  className="scroll-mt-32 md:scroll-mt-40"
>
<article
  className="relative rounded-2xl border shadow-sm p-6 md:p-8"
  style={{
      backgroundColor: "#FFF7F3", // warm cream
      borderColor: "#F5B299",         // soft sienna stroke
  }}
>
  <h3 className="text-[20px] md:text-[22px] font-bold text-slate-900">
    My Final Reflections about the Project
  </h3>

  <div className="mt-5 space-y-5 text-[13px] md:text-[14px] leading-7 text-slate-800">
    <p>
      This was my first <span className="font-semibold">end-to-end project fully designed by myself</span>,
      and beginning with accessibility at its core has shaped the foundation of how I approach design.
      It taught me to focus not only on <span className="font-semibold">what</span> I design, but
      <span className="font-semibold"> why</span> it matters in people’s real contexts.
    </p>

    <p>
      I played multiple roles: an <span className="font-semibold">ethnographic researcher</span>
      (visiting the museum with a neurodivergent participant to observe navigation, signage and sensory barriers),
      a <span className="font-semibold">service designer</span> (mapping end-to-end touchpoints across the museum),
      and a <span className="font-semibold">content designer</span> (making information clear, discoverable and usable).
      I translated difficult, physical wayfinding into <span className="font-semibold">digitally accessible patterns</span>.
    </p>

    <p>
      Most importantly, this work showed me that accessibility isn’t an add-on — it’s
      <span className="font-semibold"> the process itself</span>. Features like captions or voiceover can seem like
      conveniences, but for many people they are the <span className="font-semibold">only way in</span>.
      That reframed my practice: accessibility is now embedded in every step rather than appended at the end.
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        I now ask first: <em>Who might struggle with this? What could make it easier?</em>
      </li>
      <li>
        I ground decisions in clarity, inclusion and <span className="whitespace-nowrap">real-world</span> usability.
      </li>
      <li>
        Every decision is backed by <span className="font-semibold">user feedback</span> or
        <span className="font-semibold"> visual consistency</span> (when research is not available).
      </li>
      <li>
        Ethics and user-centricity moved from theory to practice — tested, iterated and proven with real people.
      </li>
    </ul>

    <p>
      This project also reset my assumptions: I once saw tools like voiceover as “speed boosters” for some users;
      now I recognise they’re essential for many. That shift continues to guide how I scope, design and validate work.
    </p>

    {/* Mottos callout */}
    <div
      className="mt-6 rounded-xl border bg-white p-4 md:p-5"
      style={{ borderColor: "rgba(182,62,22,0.15)" }}
    >
      <h6 className="text-[13px] md:text-[14px] font-semibold text-slate-900">
        My UX Mottos
      </h6>
      <ul className="mt-2 space-y-2 list-decimal pl-5 text-slate-800">
        <li><em>What is the problem we are solving for the user?</em></li>
        <li><em>Testing, testing, and more testing.</em></li>
      </ul>
    </div>
  </div>
</article>
</section>








      </section>
    </main>
  );
}





/* ---------- Helpers ---------- */
function OverviewItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 min-h-[44px]">
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






function SUSDonut({
  score = 72,
  size = 200,
  thickness = 22,
  className = "",
}) {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;

  // colors
  const red = "#FD5858";
  const yellow = "#f9d265ff";

  // we draw a full yellow base ring, then overlay the red arc
  const dashArray = `${circumference} ${circumference}`;
  const dashOffset = circumference * (1 - score / 100); // 0 = full, circumference = empty

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          {/* Base full ring (remaining) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={yellow}
            strokeWidth={thickness}
            strokeLinecap="butt"
          />
          {/* Score arc on top */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={red}
            strokeWidth={thickness}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            strokeLinecap="butt" /* keeps it continuous with no rounded gap */
          />
        </g>
      </svg>


      {/* Score label OUTSIDE, to the right of the ring */}
      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 md:ml-4">
        <span className="text-[22px] md:text-[28px] font-bold text-slate-900">
          {score}
        </span>
      </div>
    </div>
  );
}





