// app/components/Hero.jsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — text */}
        <div>
          {/* One-line name; tweak text as you like */}
          <h1 className="text-5xl font-bold tracking-tight">
            Hello, I’m Shreya
          </h1>

          {/* EXTRA GAP between name and subtitle */}
          <div className="mt-3" />

          <h2 className="text-xl font-medium mt-2 tracking-tight">
            UX/UI Designer & Researcher
          </h2>

          <div className="h-1.5 w-20 bg-[#2AAE4A]/70 rounded-full mt-6 mb-8" />

          <p className="text-[16px] md:text-lg leading-8 text-slate-600 max-w-xl">
            I design accessible, system-driven experiences and validate with
            real users—research, prototyping, and relentless testing.
          </p>

<div className="flex items-start gap-2 mt-8 text-slate-600">
  {/* green dot */}
  <span className="mt-1 size-2 rounded-full bg-[#2AAE4A]" />
  
  {/* stacked text */}
  <div className="flex flex-col text-sm">
    <span>Actively seeking design opportunities in the UK.</span>
    <span text-slate-500="true">Willing to relocate in UK and available to work remote worldwide.</span>
  </div>
</div>

        </div>

        {/* Right — small photo (bigger than before) */}
        <div className="flex md:justify-end">
          <div className="relative w-[360px] h-[360px]"> {/* increase size */}
            <Image
              src="/HomePageImage.png"
              alt="Shreya"
              fill
              className="object-contain"  // keeps the full image, no sides cut
              sizes="360px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
