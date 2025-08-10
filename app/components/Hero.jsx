import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left — text */}
        <div>
          {/* Intro bigger */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a]">
            Hi, I’m Shreya
          </h1>

          {/* Job title smaller */}
          <h2 className="text-xl md:text-2xl font-medium text-slate-700 mt-2">
            UX/UI Designer
          </h2>

          {/* Divider */}
          <div className="h-1.5 w-20 bg-[#2AAE4A]/70 rounded-full mt-6 mb-8" />

          <p className="text-[17px] md:text-lg leading-8 text-slate-600 max-w-xl">
            I create accessible, system-driven interfaces that put user needs first—
            blending research, design systems, and iterative testing.
          </p>

          {/* Availability */}
          <div className="flex items-center gap-2 mt-8 text-slate-500">
            <span className="size-2 rounded-full bg-[#2AAE4A]" />
            <span className="text-sm">Actively seeking design opportunities</span>
          </div>
        </div>

        {/* Right — bigger illustration */}
        <div className="flex md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <Image
              src="/HomePageImage.png"
              alt="Shreya illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
