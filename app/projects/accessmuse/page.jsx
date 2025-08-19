// app/projects/accessmuse/page.jsx
import Image from "next/image";
import Link from "next/link";
import FramedImage from "../../components/FramedImage";
import SpoilerCallout from "../../components/SpoilerCallout";
import { ArrowLeft, Briefcase, Clock, Smartphone } from "lucide-react";

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
    <main className="pb-28">
      {/* ---- HERO (gradient from top, big crisp screens) ---- */}
      <section
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
            AccessMuse — an inclusive museum app
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
            <section className="max-w-[1100px] mx-auto px-6 md:px-10 pt-10 md:pt-12">
            <h1 className="text-center text-[26px] md:text-[30px] font-semibold text-slate-900">
                Final prototype
            </h1>
            <p className="mt-2 text-center text-[15px] text-slate-600">
                Portrait demo — no cropping, no borders.
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
      <section className="max-w-[1100px] mx-auto px-6 md:px-10 pt-10">
        <h3 className="text-[22px] md:text-[24px] font-semibold text-slate-900">Design process</h3>
        <span className="mt-2 inline-flex items-center gap-2 text-[12px] md:text-[13px] text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500" />
          Discovery stage
        </span>
      </section>

      {/* ---- USER STORIES ---- */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-10 pt-8 md:pt-10">
        <h3 className="text-center text-[28px] md:text-[32px] font-semibold text-slate-900">
          User stories that shaped the design
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
        <div className="w-[300px] rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            <Image
            src="/dippy-museum.png"
            alt="Skeleton in museum"
            width={300}
            height={200}
            className="w-full h-auto object-cover"
            />
        </div>
        </div>

{/* Second block */}


        {/* Left side (image) */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">

        {/* Left side (image) */}
        <div className="w-full max-w-[300px] rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            <Image
            src="/sofia-museum.jpeg"
            alt="Lucy framed photo"
            width={300}
            height={400}
            className="w-full h-auto object-cover"
            />
        </div>

        {/* Right side (text) */}
        <div className="space-y-3">
            <h5 className="text-[16px] md:text-[18px] font-semibold text-slate-900">
            Sensory Overload
            </h5>
            <ul className="space-y-2 text-[15px] md:text-[16px] leading-7 text-slate-700">
            <li>❌ One room had a blaring projector that was impossible to ignore.</li>
            <li>❌ Another was uncomfortably cold, making it hard to stay inside.</li>
            <li>❌ Bright, harsh lighting in the exhibits added to the strain.</li>
            </ul>
            <p className="text-[15px] md:text-[16px] leading-7 text-slate-700">
            None of these issues were signposted or explained. After moving from one uncomfortable 
            space to another, Lucy began to feel overwhelmed and eventually decided to cut her visit short. 
            For her, the museum became less about discovery and more about escaping the discomfort.
            </p>
            <blockquote className="italic text-slate-500 text-[15px] md:text-[16px] leading-7">
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
          <h4 className="text-[20px] md:text-[22px] font-semibold text-slate-900">
            ♿ Meet Riley: A Wheelchair User View of the Museum
          </h4>
          <span className="mt-2 inline-flex rounded-md bg-slate-100 text-slate-600 text-xs md:text-[12px] px-2.5 py-1">
            Persona 4
          </span>

          <p className="mt-4 text-[15px] md:text-[16px] leading-7 text-slate-700">
            Riley enjoys history and hands-on learning. But as a wheelchair user, museums can feel
            distant — even when she’s right there.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-8 md:gap-10 items-start">
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
                src="/wheelchair-1.png"
                alt="High shelf exhibit panorama"
                width={980}
                height={620}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

<br></br>

          <div className="mt-8 grid md:grid-cols-2 gap-8 md:gap-10 items-start">
            <div className="rounded-xl overflow-hidden ring-1 ring-slate-200">
              <Image
                src="/wheelchair-2.png"
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

<br></br>

          <div className="mt-8 grid md:grid-cols-2 gap-8 md:gap-10 items-start">
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
                src="/wheelchair-3.png"
                alt="Riley navigating the space in her wheelchair"
                width={720}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-rose-200/70 bg-rose-50/30 px-4 py-3 text-[13px] md:text-[14px] text-slate-700">
            All the images below were taken from Riley’s seated perspective — showing exactly how
            she experienced the museum space.
          </div>


 <div
  className="mt-12 mx-auto max-w-2xl rounded-xl border border-slate-200 bg-slate-50/70 px-6 md:px-8 py-6 md:py-7 text-center"
>
  <p className="text-[13px] md:text-[14px] text-slate-600 mb-2">
    <span role="img" aria-label="idea">💡</span> That’s where the idea began
  </p>
  <h5 className="text-[15px] md:text-[17px] font-semibold text-slate-900 leading-relaxed">
    What if a digital guide could bring exhibits within reach for everyone?
  </h5>
  <p className="text-[13px] md:text-[14px] text-slate-600 mt-1">
    Clear text, adjustable views, and equal access — right at eye level.
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
